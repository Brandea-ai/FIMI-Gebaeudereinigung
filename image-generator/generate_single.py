#!/usr/bin/env python3
"""
FIMI Bildgenerator mit Gemini 3 Pro Image (Nano Banana Pro)
============================================================
- Logo wird bei JEDEM Bild als Referenz verwendet
- Echte Maschinenfarben (Kärcher gelb, nicht CI-Farben)
- Nur Gemini 3 Pro, kein Fallback

Usage:
    python3 generate_single.py --startseite
    python3 generate_single.py --name "bild" --prompt "..." --ratio "16:9"
"""

import os
import sys
import time
import argparse
from pathlib import Path
from datetime import datetime
from io import BytesIO

# ============================================================================
# DEPENDENCY CHECK
# ============================================================================

def check_dependencies():
    """Prüft ob alle Dependencies installiert sind."""
    missing = []
    try:
        from google import genai
        from google.genai import types
    except ImportError:
        missing.append("google-genai")
    try:
        from PIL import Image
    except ImportError:
        missing.append("Pillow")
    try:
        import pillow_avif
    except ImportError:
        missing.append("pillow-avif-plugin")
    if missing:
        print(f"\n❌ FEHLENDE DEPENDENCIES: pip install {' '.join(missing)}\n")
        sys.exit(1)

check_dependencies()

from google import genai
from google.genai import types
from PIL import Image
import pillow_avif

# ============================================================================
# KONFIGURATION
# ============================================================================

SCRIPT_DIR = Path(__file__).parent
PROJECT_ROOT = SCRIPT_DIR.parent
CREDENTIALS_PATH = SCRIPT_DIR / "credentials" / "fimi-bilder-credentials.json"
PUBLIC_DIR = PROJECT_ROOT / "public" / "images"
LOG_FILE = SCRIPT_DIR / "generation_log.txt"
LOGO_PATH = PROJECT_ROOT / "public" / "FIMI-LOGO" / "FIMI-Logo.png"

# NUR Gemini 3 Pro Image (Nano Banana Pro)
MODEL_NAME = "gemini-3-pro-image-preview"

# ============================================================================
# CLIENT INITIALIZATION
# ============================================================================

def init_client():
    """Initialisiert den Google GenAI Client mit location=global."""
    if not CREDENTIALS_PATH.exists():
        print(f"\n❌ CREDENTIALS FEHLEN: {CREDENTIALS_PATH}\n")
        sys.exit(1)

    os.environ["GOOGLE_APPLICATION_CREDENTIALS"] = str(CREDENTIALS_PATH)

    try:
        client = genai.Client(
            vertexai=True,
            project="fimi-bilder",
            location="global"  # WICHTIG für Nano Banana Pro!
        )
        print("✓ Client initialisiert (Gemini 3 Pro Image, Location: global)")
        return client
    except Exception as e:
        print(f"\n❌ CLIENT-FEHLER: {e}\n")
        sys.exit(1)

# ============================================================================
# IMAGE GENERATION - Logo wird bei JEDEM Call als Referenz genutzt
# ============================================================================

def generate_image(client, prompt: str, aspect_ratio: str = "16:9", retries: int = 3) -> Image:
    """
    Generiert ein Bild mit Gemini 3 Pro Image.
    Das FIMI Logo wird bei JEDEM Call als Referenz für Corporate Identity geladen.
    """

    # Logo bei JEDEM Call neu laden als Referenz
    if not LOGO_PATH.exists():
        print(f"\n❌ LOGO NICHT GEFUNDEN: {LOGO_PATH}\n")
        sys.exit(1)

    logo = Image.open(LOGO_PATH)
    print(f"   → Logo als Referenz geladen")

    # Prompt mit klaren Anweisungen
    full_prompt = f"""Generiere ein fotorealistisches Bild für FIMI Gebäudereinigung.

REFERENZ-LOGO (oben): Nutze die Farben als Corporate Identity Referenz:
- Primärfarbe für Arbeitskleidung: Tiefes Marineblau (#012956)
- Akzentfarbe: Türkis (#109387)
Das Logo selbst soll NICHT im generierten Bild erscheinen!

BILDANFORDERUNG:
{prompt}

Seitenverhältnis: {aspect_ratio}

STIL:
- Fotorealistisch, High-End Corporate Photography
- Natürliches Tageslicht, professionelle Schatten
- Deutsches Umfeld, authentisch (kein Stock-Photo-Look)
- Keine KI-Artefakte

ARBEITSKLEIDUNG:
- Marineblaue Poloshirts/Jacken (#012956) für FIMI Mitarbeiter
- Sauber, professionell

REINIGUNGSGERÄTE - IMMER ORIGINALFARBEN DER HERSTELLER:
- Kärcher: GELB mit schwarzen Details (niemals blau!)
- Unger: GRÜN (Fensterreinigung)
- Numatic Henry: ROT (Staubsauger)
- Vermop: Original Herstellerfarben
Die Geräte behalten ihre echten Herstellerfarben, NICHT die FIMI CI-Farben!
"""

    print(f"\n📸 Generiere mit Gemini 3 Pro Image (Nano Banana Pro)...")
    print(f"   Aspect Ratio: {aspect_ratio}")
    print(f"   Prompt: {prompt[:60]}...")

    last_error = None

    for attempt in range(1, retries + 1):
        try:
            # Logo + Prompt als Content
            response = client.models.generate_content(
                model=MODEL_NAME,
                contents=[
                    "FIMI Logo - Corporate Identity Referenz (Farben für Arbeitskleidung):",
                    logo,
                    full_prompt
                ],
                config=types.GenerateContentConfig(
                    response_modalities=["IMAGE", "TEXT"],
                )
            )

            # Bild extrahieren
            if response.candidates:
                for part in response.candidates[0].content.parts:
                    if hasattr(part, 'inline_data') and part.inline_data:
                        image_data = part.inline_data.data
                        img = Image.open(BytesIO(image_data))
                        print(f"   ✓ Bild generiert (Versuch {attempt}/{retries})")
                        return img

            print(f"   ⚠️ Keine Bilddaten (Versuch {attempt}/{retries})")
            time.sleep(10)

        except Exception as e:
            last_error = e
            error_str = str(e)

            if "RESOURCE_EXHAUSTED" in error_str:
                wait_time = 30 * attempt
                print(f"   ⏳ Rate Limit - warte {wait_time}s (Versuch {attempt}/{retries})")
                time.sleep(wait_time)
            elif "404" in error_str or "not found" in error_str.lower():
                print(f"\n❌ MODELL NICHT VERFÜGBAR: {MODEL_NAME}")
                print(f"   Location muss 'global' sein!")
                sys.exit(1)
            else:
                print(f"   ⚠️ Fehler: {error_str[:80]}... (Versuch {attempt}/{retries})")
                time.sleep(10)

    raise Exception(f"Bildgenerierung fehlgeschlagen: {last_error}")

# ============================================================================
# IMAGE SAVING
# ============================================================================

def save_image(img: Image, name: str, target_dir: Path) -> Path:
    """Speichert Bild als AVIF + WebP in responsiven Größen."""
    target_dir.mkdir(parents=True, exist_ok=True)

    if img.mode == 'RGBA':
        img = img.convert('RGB')

    print(f"\n💾 Speichere: {img.size[0]}x{img.size[1]}")

    sizes = [1920, 1440, 1024, 768, 384]
    saved_sizes = []

    for size in sizes:
        if img.width >= size:
            ratio = size / img.width
            new_height = int(img.height * ratio)
            resized = img.resize((size, new_height), Image.Resampling.LANCZOS)
            actual_size = size
        else:
            resized = img
            actual_size = img.width

        if actual_size in saved_sizes:
            continue
        saved_sizes.append(actual_size)

        resized.save(target_dir / f"{name}-{actual_size}w.avif", 'AVIF', quality=80)
        resized.save(target_dir / f"{name}-{actual_size}w.webp", 'WEBP', quality=80)
        print(f"   ✓ {actual_size}w: AVIF + WebP")

    main_avif = target_dir / f"{name}.avif"
    img.save(main_avif, 'AVIF', quality=85)
    print(f"   ✓ {name}.avif (Hauptdatei)")

    with open(LOG_FILE, 'a') as f:
        f.write(f"{datetime.now().isoformat()} | {name} | {img.size[0]}x{img.size[1]}\n")

    return main_avif

# ============================================================================
# STARTSEITE BILDER - Mit echten Maschinenfarben und korrekten Szenen
# ============================================================================

STARTSEITE_IMAGES = [
    {
        "name": "hero-team",
        "ratio": "16:9",
        "prompt": """FIMI Reinigungsteam vor modernem deutschen Bürogebäude.

3-4 Mitarbeiter in marineblauen Poloshirts stehen selbstbewusst vor einem
modernen Glasgebäude. Einer hält eine GELBE Kärcher Reinigungsmaschine.
Natürliches Tageslicht, professionelle Teamaufnahme.
Freundliche aber seriöse Ausstrahlung, deutsches Business-Umfeld."""
    },
    {
        "name": "trust-team",
        "ratio": "4:3",
        "prompt": """Nahaufnahme: FIMI Mitarbeiter bei Büroreinigung.

Eine Frau (ca. 35) in marineblauem Poloshirt reinigt konzentriert einen
Schreibtisch mit Mikrofasertuch. Im Hintergrund ein Vermop Reinigungswagen
in Originalfarben. Modernes Büro, große Fenster, natürliches Licht.
Professionelle, vertrauenswürdige Ausstrahlung."""
    },
    {
        "name": "service-office",
        "ratio": "4:3",
        "prompt": """Büroreinigung in modernem Open-Space Office.

Weibliche FIMI Mitarbeiterin in marineblauem Poloshirt wischt Schreibtisch.
Im Hintergrund: professioneller Reinigungswagen, saubere Büroumgebung.
Große Fenster mit Tageslicht, moderne Möbel, Computer auf Tischen.
Effiziente, gründliche Arbeitsweise sichtbar."""
    },
    {
        "name": "service-industrie",
        "ratio": "4:3",
        "prompt": """Industriereinigung in deutscher Produktionshalle.

Männlicher FIMI Mitarbeiter in marineblauerArbeitsjacke bedient eine
GELBE Kärcher Scheuersaugmaschine (Originalfarbe gelb/schwarz!).
Große Industriehalle mit hohen Decken, Maschinen im Hintergrund.
Sicherheitsschuhe, kompetente Arbeitsweise, industrielles Umfeld."""
    },
    {
        "name": "service-facility",
        "ratio": "4:3",
        "prompt": """Facility Management: Teamkoordination vor Gebäude.

Zwei FIMI Mitarbeiter in marineblauen Uniformen vor modernem Geschäftsgebäude.
Einer hält Tablet zur Dokumentation, der andere steht bei Reinigungswagen.
Professionelle Besprechung, gepflegte Außenanlagen sichtbar.
Organisierte, koordinierte Zusammenarbeit."""
    },
    {
        "name": "process-contact",
        "ratio": "3:4",
        "prompt": """CTA-Bild: Freundlicher FIMI Kundenberater.

WICHTIG: Person schaut DIREKT IN DIE KAMERA mit freundlichem Lächeln!
Mann oder Frau (ca. 35-45) in marineblauem Poloshirt oder Business-Casual.
Hält Telefon oder steht bereit zum Gespräch.
Einladende, offene Körpersprache. Direkter Blickkontakt zum Betrachter!
Hintergrund: modernes, helles Büro. Vertrauenswürdig, erreichbar."""
    },
    {
        "name": "faq-service",
        "ratio": "16:9",
        "prompt": """FIMI Team bei koordinierter Gebäudereinigung.

Zwei Mitarbeiter in marineblauen Uniformen arbeiten in großer Lobby.
Einer bedient GELBE Kärcher Bodenmaschine (Originalfarbe!),
einer reinigt Glasflächen mit GRÜNEM Unger Werkzeug (Originalfarbe!).
Modernes deutsches Geschäftsgebäude, professionelle Architektur.
Teamarbeit, Effizienz, Qualität sichtbar."""
    },
]

# ============================================================================
# MAIN FUNCTIONS
# ============================================================================

def generate_single(client, name: str, prompt: str, ratio: str, output_subdir: str = "home"):
    """Generiert ein einzelnes Bild."""
    target_dir = PUBLIC_DIR / output_subdir

    print(f"\n{'='*60}")
    print(f"GENERIERE: {name}")
    print(f"{'='*60}")

    try:
        img = generate_image(client, prompt, ratio)
        result_path = save_image(img, name, target_dir)
        print(f"\n✅ ERFOLGREICH: {result_path}")
        return True
    except Exception as e:
        print(f"\n❌ FEHLER: {e}")
        return False


def generate_startseite(client, force: bool = False):
    """Generiert alle Startseiten-Bilder."""
    print("\n" + "="*60)
    print("FIMI BILDGENERATOR - STARTSEITE")
    print("Modell: Gemini 3 Pro Image (Nano Banana Pro)")
    print("="*60)

    home_dir = PUBLIC_DIR / "home"
    results = []

    for img_config in STARTSEITE_IMAGES:
        name = img_config["name"]
        target_file = home_dir / f"{name}.avif"

        if target_file.exists() and not force:
            print(f"\n⏭️ {name}.avif existiert (--force zum Überschreiben)")
            continue

        success = generate_single(
            client,
            name=name,
            prompt=img_config["prompt"],
            ratio=img_config["ratio"]
        )
        results.append((name, success))

        if success:
            print("\n⏳ Warte 15 Sekunden...")
            time.sleep(15)

    print("\n" + "="*60)
    print("ZUSAMMENFASSUNG")
    print("="*60)
    for name, success in results:
        print(f"  {'✅' if success else '❌'} {name}")

    if not results:
        print("  Alle Bilder existieren. Nutze --force.")

    return all(s for _, s in results) if results else True


def main():
    parser = argparse.ArgumentParser(description="FIMI Bildgenerator (Nano Banana Pro)")
    parser.add_argument("--startseite", action="store_true", help="Alle Startseiten-Bilder")
    parser.add_argument("--force", action="store_true", help="Überschreibe existierende")
    parser.add_argument("--name", type=str, help="Dateiname")
    parser.add_argument("--prompt", type=str, help="Bildprompt")
    parser.add_argument("--ratio", type=str, default="16:9", help="Seitenverhältnis")
    parser.add_argument("--output", type=str, default="home", help="Ausgabe-Ordner")

    args = parser.parse_args()
    client = init_client()

    if args.startseite:
        return 0 if generate_startseite(client, args.force) else 1
    elif args.name and args.prompt:
        return 0 if generate_single(client, args.name, args.prompt, args.ratio, args.output) else 1
    else:
        parser.print_help()
        return 0


if __name__ == "__main__":
    sys.exit(main())
