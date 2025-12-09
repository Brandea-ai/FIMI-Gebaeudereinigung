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
Das Logo selbst soll NICHT frei im Bild schweben, aber auf Kleidung sichtbar sein!

BILDANFORDERUNG:
{prompt}

Seitenverhältnis: {aspect_ratio}

STIL:
- Fotorealistisch, High-End Corporate Photography
- Natürliches Tageslicht, professionelle Schatten
- Deutsches Umfeld, authentisch (kein Stock-Photo-Look)
- Keine KI-Artefakte
- Natürliche Gesichter, nicht generisch wirkend

ARBEITSKLEIDUNG:
- Marineblaue Poloshirts/Jacken (#012956) für FIMI Mitarbeiter
- FIMI Logo: WEISS auf dunkler Kleidung, DEZENT und SUBTIL (nicht auffällig!)
- Logo auf linker Brustseite, klein und unauffällig
- Sauber, professionell

REINIGUNGSGERÄTE - KRITISCHE REGELN:
1. KÄRCHER: NUR Scheuersaugmaschinen, Hochdruckreiniger, Industriesauger
   - Farbe: GELB mit schwarzen Details (niemals blau!)
   - KÄRCHER macht KEINE Reinigungswagen oder Einscheibenmaschinen!

2. VERMOP: Reinigungswagen, Mopsysteme, Eimer
   - Farbe: Grau/silbernes Gestell mit blauen Kunststoffteilen
   - Für Büroreinigung IMMER VERMOP Wagen verwenden!

3. CLEANFIX/COLUMBUS: Einscheibenmaschinen (Poliermaschinen)
   - Farbe: Silber/grau mit roten oder blauen Akzenten

4. UNGER: Fensterreinigung
   - Farbe: GRÜN (Griffe, Akzente)

5. NUMATIC HENRY: Staubsauger
   - Farbe: ROT mit Smiley-Gesicht

4-FARBEN-PRINZIP FÜR MOPS/TÜCHER:
- BLAU = Büro/allgemeine Flächen (NICHT GRÜN!)
- ROT = Sanitär/WC
- GELB = Küche
- GRÜN = Krankenhaus/OP

Die Geräte behalten IMMER ihre Original-Herstellerfarben, NICHT die FIMI CI-Farben!
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

3-4 Mitarbeiter in marineblauen Poloshirts mit FIMI Logo auf der linken Brust.
Sie stehen selbstbewusst vor einem modernen Glasgebäude.
Einer hält eine GELBE Kärcher Scheuersaugmaschine (Originalfarbe gelb/schwarz!).
Natürliches Tageslicht, professionelle Teamaufnahme.
Freundliche aber seriöse Ausstrahlung, deutsches Business-Umfeld.
Natürliche Gesichter, nicht generisch wirkend."""
    },
    {
        "name": "trust-team",
        "ratio": "4:3",
        "prompt": """Nahaufnahme: FIMI Mitarbeiterin bei Büroreinigung.

Eine Frau (ca. 35) in marineblauem Poloshirt mit FIMI Logo auf linker Brust.
Sie reinigt konzentriert einen Schreibtisch mit BLAUEM Mikrofasertuch.
Im Hintergrund: VERMOP Reinigungswagen (grau/silbernes Gestell, blaue Eimer).
BLAUE Wischbezüge am Wagen (4-Farben-Prinzip: Blau = Büro!).
Modernes Büro, große Fenster, natürliches Licht.
Professionelle, vertrauenswürdige Ausstrahlung. Natürliches Gesicht."""
    },
    {
        "name": "service-office",
        "ratio": "4:3",
        "prompt": """Büroreinigung in modernem Open-Space Office.

Weibliche FIMI Mitarbeiterin in marineblauem Poloshirt.
LOGO: Kleines, dezentes WEISSES FIMI Logo auf linker Brust (subtil, nicht auffällig!).
Sie wischt einen Schreibtisch mit BLAUEM Mikrofasertuch.
Im Hintergrund: VERMOP Reinigungswagen (grau/silber mit blauen Eimern).
WICHTIG: Nur EIN einzelner BLAUER Mop am Wagen (nicht zwei!).
Große Fenster mit Tageslicht, moderne Möbel, Computer auf Tischen.
Effiziente, gründliche Arbeitsweise. Natürliches, nicht generisches Gesicht."""
    },
    {
        "name": "service-industrie",
        "ratio": "4:3",
        "prompt": """Industriereinigung: Einscheibenmaschine in Produktionshalle.

Männlicher FIMI Mitarbeiter in marineblauer Arbeitsjacke mit FIMI Logo.
Er bedient eine CLEANFIX Einscheibenmaschine (silber/grau mit roten Akzenten).
KEIN Reinigungswagen, KEIN Staubsauger - nur die Einscheibenmaschine!
Große deutsche Industriehalle mit hohen Decken.
Sicherheitsschuhe, kompetente Arbeitsweise, industrielles Umfeld.
Natürliches Gesicht, nicht generisch wirkend."""
    },
    {
        "name": "service-facility",
        "ratio": "4:3",
        "prompt": """Facility Management: Professionelle Teamkoordination.

Zwei FIMI Mitarbeiter in marineblauen Uniformen mit FIMI Logo auf Brust.
Sie stehen vor einem modernen deutschen Geschäftsgebäude.
Einer hält ein Tablet zur Dokumentation, der andere gestikuliert erklärend.
KEIN Reinigungswagen, KEIN Staubsauger - nur die zwei Personen!
Professionelle Besprechung, gepflegte Außenanlagen sichtbar.
Organisierte, koordinierte Zusammenarbeit. Natürliche Gesichter."""
    },
    {
        "name": "process-contact",
        "ratio": "3:4",
        "prompt": """CTA-Bild: Freundlicher FIMI Kundenberater (Mann).

KRITISCH: Person schaut DIREKT IN DIE KAMERA mit freundlichem Lächeln!
Mann (ca. 35-45) in marineblauem Poloshirt.
LOGO: Kleines, dezentes WEISSES FIMI Logo auf linker Brust (subtil, kaum sichtbar!).
Er hält freundlich ein Telefon oder steht bereit zum Gespräch.
Einladende, offene Körpersprache. Direkter Blickkontakt zum Betrachter!
KEINE Reinigungsgeräte im Bild - nur die Person!
Hintergrund: modernes, helles Büro. Vertrauenswürdig, erreichbar.
Natürliches, authentisches Gesicht - nicht generisch!"""
    },
    {
        "name": "faq-service",
        "ratio": "16:9",
        "prompt": """FAQ-Bereich: Freundliche FIMI Mitarbeiterin mit Blickkontakt.

KRITISCH: Eine FRAU schaut DIREKT IN DIE KAMERA mit freundlichem Lächeln!
Sie trägt marineblaues Poloshirt.
LOGO: Kleines, dezentes WEISSES FIMI Logo auf linker Brust (sehr subtil, kaum auffällig!).
Sie steht in einem modernen, hellen Büro oder Empfangsbereich.
Offene, einladende Körpersprache - bereit Fragen zu beantworten.
KEINE Männer im Bild, KEINE Fensterreinigung, KEINE Maschinen!
Nur eine freundliche Frau mit direktem Blickkontakt.
Natürliches, authentisches Gesicht - nicht generisch wirkend!"""
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
