#!/usr/bin/env python3
"""
FIMI Bildgenerator mit Gemini 3 Pro Image (Nano Banana Pro)
============================================================
Generiert Bilder mit dem FIMI Logo als Referenz für konsistentes Branding.

Usage:
    python3 setup_check.py                    # Voraussetzungen prüfen
    python3 generate_single.py --startseite   # Alle Startseiten-Bilder
    python3 generate_single.py --name "bild" --prompt "Beschreibung" --ratio "16:9"
"""

import os
import sys
import time
import argparse
import base64
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
        print("\n❌ FEHLENDE DEPENDENCIES:")
        print(f"   pip install {' '.join(missing)}\n")
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

# FIMI Logo als Referenzbild
LOGO_PATH = PROJECT_ROOT / "public" / "FIMI-LOGO" / "FIMI-Logo.png"

# Modell: Gemini 3 Pro Image (Nano Banana Pro)
MODEL_NAME = "gemini-2.0-flash-exp"  # Aktuelles Modell mit Bildgenerierung

# ============================================================================
# MASTER STYLE PROMPT
# ============================================================================

MASTER_STYLE = """FIMI Gebäudereinigung - Corporate Photography

MARKENIDENTITÄT (siehe Referenz-Logo):
- Firmenname: FIMI Gebäudereinigung
- Primärfarbe: Tiefes Marineblau (#012956)
- Akzentfarbe: Türkis (#109387)
- Stil: Professionell, vertrauenswürdig, deutsch

FOTOGRAFIE-STIL:
- High-End Corporate Photography
- Natürliches Tageslicht
- Scharf mit dezenter Tiefenschärfe
- Authentisch, kein Stock-Photo-Look

ARBEITSKLEIDUNG:
- Marineblaue Poloshirts/Jacken (#012956)
- Sauberes, professionelles Erscheinungsbild
- Deutsche Arbeitskleidung-Qualität

WICHTIG:
- Fotorealistisch, keine Illustration
- Keine KI-Artefakte
- Deutsches Umfeld erkennbar
- Professioneller Corporate-Look
"""

# ============================================================================
# CLIENT INITIALIZATION
# ============================================================================

def init_client():
    """Initialisiert den Google GenAI Client."""

    if not CREDENTIALS_PATH.exists():
        print(f"\n❌ CREDENTIALS FEHLEN:")
        print(f"   Erwartet: {CREDENTIALS_PATH}")
        print(f"   Führe 'python3 setup_check.py' aus für Details.\n")
        sys.exit(1)

    os.environ["GOOGLE_APPLICATION_CREDENTIALS"] = str(CREDENTIALS_PATH)

    try:
        client = genai.Client(
            vertexai=True,
            project="fimi-bilder",
            location="us-central1"
        )
        print("✓ Google GenAI Client initialisiert")
        return client

    except Exception as e:
        print(f"\n❌ CLIENT-FEHLER: {e}")
        print(f"   Führe 'python3 setup_check.py' aus für Diagnose.\n")
        sys.exit(1)

# ============================================================================
# LOGO LOADING
# ============================================================================

def load_logo():
    """Lädt das FIMI Logo als PIL Image."""
    if not LOGO_PATH.exists():
        print(f"\n❌ LOGO NICHT GEFUNDEN:")
        print(f"   Erwartet: {LOGO_PATH}\n")
        sys.exit(1)

    logo = Image.open(LOGO_PATH)
    print(f"✓ Logo geladen: {LOGO_PATH.name}")
    return logo

# ============================================================================
# IMAGE GENERATION
# ============================================================================

def generate_image(client, prompt: str, aspect_ratio: str = "16:9", logo: Image = None, retries: int = 3) -> Image:
    """
    Generiert ein Bild mit Gemini und optionalem Logo als Referenz.

    Args:
        client: Google GenAI Client
        prompt: Bildprompt
        aspect_ratio: z.B. "16:9", "4:3", "3:4", "1:1"
        logo: FIMI Logo als PIL Image (Referenz)
        retries: Anzahl Wiederholungsversuche

    Returns:
        PIL Image
    """
    # Kombiniere Style und Prompt
    full_prompt = f"""{MASTER_STYLE}

---

GENERIERE DIESES BILD:
{prompt}

Seitenverhältnis: {aspect_ratio}
Das Bild soll die Markenfarben des Referenz-Logos widerspiegeln.
"""

    print(f"\n📸 Generiere Bild mit Gemini...")
    print(f"   Aspect Ratio: {aspect_ratio}")
    print(f"   Prompt: {prompt[:80]}...")

    last_error = None

    for attempt in range(1, retries + 1):
        try:
            # Content für Request aufbauen
            contents = [full_prompt]

            # Logo als Referenz hinzufügen wenn vorhanden
            if logo:
                contents.insert(0, "Referenz-Logo für Markenfarben und Corporate Identity:")
                contents.insert(1, logo)

            response = client.models.generate_content(
                model=MODEL_NAME,
                contents=contents,
                config=types.GenerateContentConfig(
                    response_modalities=["IMAGE", "TEXT"],
                )
            )

            # Bild aus Response extrahieren
            if response.candidates:
                for part in response.candidates[0].content.parts:
                    if hasattr(part, 'inline_data') and part.inline_data:
                        # Daten sind bereits Bytes (nicht Base64)
                        image_data = part.inline_data.data
                        img = Image.open(BytesIO(image_data))
                        print(f"   ✓ Bild generiert (Versuch {attempt}/{retries})")
                        return img

            print(f"   ⚠️  Keine Bilddaten in Response (Versuch {attempt}/{retries})")

        except Exception as e:
            last_error = e
            error_str = str(e)

            if "PERMISSION_DENIED" in error_str:
                print(f"\n❌ PERMISSION DENIED")
                print(f"   Service Account braucht entsprechende Berechtigungen!")
                print(f"   Projekt: fimi-bilder\n")
                sys.exit(1)

            elif "RESOURCE_EXHAUSTED" in error_str:
                wait_time = 30 * attempt
                print(f"   ⏳ Rate Limit - warte {wait_time}s (Versuch {attempt}/{retries})")
                time.sleep(wait_time)

            elif "not found" in error_str.lower() or "404" in error_str:
                print(f"\n❌ MODELL NICHT VERFÜGBAR: {MODEL_NAME}")
                print(f"   Fehler: {error_str[:100]}")
                print(f"   Versuche alternatives Modell...\n")
                # Fallback zu Imagen 3
                return generate_image_imagen(client, prompt, aspect_ratio, retries - attempt)

            else:
                print(f"   ⚠️  Fehler: {error_str[:80]}... (Versuch {attempt}/{retries})")
                time.sleep(10)

    raise Exception(f"Bildgenerierung nach {retries} Versuchen fehlgeschlagen: {last_error}")


def generate_image_imagen(client, prompt: str, aspect_ratio: str = "16:9", retries: int = 3) -> Image:
    """
    Fallback: Generiert Bild mit Imagen 3.
    """
    full_prompt = f"{MASTER_STYLE}\n\n---\n\nGENERIERE DIESES BILD:\n{prompt}"

    print(f"\n📸 Fallback: Generiere mit Imagen 3...")

    for attempt in range(1, retries + 1):
        try:
            response = client.models.generate_images(
                model="imagen-3.0-generate-002",
                prompt=full_prompt,
                config=types.GenerateImagesConfig(
                    number_of_images=1,
                    aspect_ratio=aspect_ratio,
                    safety_filter_level="BLOCK_MEDIUM_AND_ABOVE",
                    person_generation="ALLOW_ADULT",
                )
            )

            if response.generated_images:
                image_bytes = response.generated_images[0].image.image_bytes
                img = Image.open(BytesIO(image_bytes))
                print(f"   ✓ Bild generiert mit Imagen 3 (Versuch {attempt}/{retries})")
                return img

        except Exception as e:
            print(f"   ⚠️  Imagen-Fehler: {str(e)[:60]}... (Versuch {attempt}/{retries})")
            time.sleep(10)

    raise Exception(f"Imagen 3 Fallback fehlgeschlagen nach {retries} Versuchen")


# ============================================================================
# IMAGE SAVING
# ============================================================================

def save_image(img: Image, name: str, target_dir: Path) -> Path:
    """
    Speichert Bild als AVIF + WebP in responsiven Größen.
    """
    target_dir.mkdir(parents=True, exist_ok=True)

    if img.mode == 'RGBA':
        img = img.convert('RGB')

    original_size = f"{img.size[0]}x{img.size[1]}"
    print(f"\n💾 Speichere Bild...")
    print(f"   Original: {original_size}")

    # Responsive Größen
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

        # AVIF
        avif_path = target_dir / f"{name}-{actual_size}w.avif"
        resized.save(avif_path, 'AVIF', quality=80)

        # WebP
        webp_path = target_dir / f"{name}-{actual_size}w.webp"
        resized.save(webp_path, 'WEBP', quality=80)

        print(f"   ✓ {actual_size}w: AVIF + WebP")

    # Hauptdatei
    main_avif = target_dir / f"{name}.avif"
    img.save(main_avif, 'AVIF', quality=85)
    print(f"   ✓ {name}.avif (Hauptdatei)")

    # Log
    log_entry = f"{datetime.now().isoformat()} | {name} | {original_size} | {target_dir}\n"
    with open(LOG_FILE, 'a') as f:
        f.write(log_entry)

    return main_avif

# ============================================================================
# STARTSEITE BILDER DEFINITION
# ============================================================================

STARTSEITE_IMAGES = [
    {
        "name": "hero-team",
        "output": "home",
        "ratio": "16:9",
        "prompt": """FIMI Reinigungsteam vor modernem Bürogebäude in Deutschland.

SZENE:
- Modernes deutsches Bürogebäude im Hintergrund
- Professionelle Architektur, Glas und Stahl
- Klarer Himmel, natürliches Tageslicht

PERSONEN:
- 3-4 FIMI Mitarbeiter (gemischtes Team)
- Marineblaue Arbeitskleidung (#012956)
- Selbstbewusste, professionelle Haltung
- Freundliche aber seriöse Ausstrahlung

STIMMUNG:
- Professionell, vertrauenswürdig, kompetent
- Premium-Qualität erkennbar
- Corporate Photography Stil"""
    },
    {
        "name": "trust-team",
        "output": "home",
        "ratio": "4:3",
        "prompt": """Nahaufnahme eines FIMI Mitarbeiters bei der Arbeit.

SZENE:
- Modernes Büro oder Empfangsbereich
- Saubere, helle Umgebung

PERSON:
- Männlicher oder weiblicher FIMI Mitarbeiter, ca. 35-45 Jahre
- Marineblaues Poloshirt (#012956)
- Konzentriert bei der Arbeit
- Professionelle, freundliche Ausstrahlung

TÄTIGKEIT:
- Reinigt eine Oberfläche oder Glasfläche
- Professionelle Mikrofasertücher
- Sorgfältige, präzise Bewegung

STIMMUNG:
- Vertrauenswürdig, zuverlässig, kompetent"""
    },
    {
        "name": "service-office",
        "output": "home",
        "ratio": "4:3",
        "prompt": """Büroreinigung in einem modernen deutschen Unternehmen.

SZENE:
- Open-Space Büro mit Schreibtischen und Computern
- Große Fenster mit natürlichem Licht
- Moderne Büroeinrichtung

PERSON:
- Weibliche FIMI Mitarbeiterin, ca. 30-40 Jahre
- Marineblaues Poloshirt (#012956)
- Reinigt einen Schreibtisch

EQUIPMENT:
- Professioneller Reinigungswagen im Hintergrund
- Mikrofasertücher
- Professionelle Reinigungsmittel

STIMMUNG:
- Effizient, gründlich, professionell"""
    },
    {
        "name": "service-industrie",
        "output": "home",
        "ratio": "4:3",
        "prompt": """Industriereinigung in einer deutschen Produktionshalle.

SZENE:
- Große Industriehalle mit hohen Decken
- Produktionsmaschinen im Hintergrund
- Industrielle Beleuchtung

PERSON:
- Männlicher FIMI Mitarbeiter, ca. 40-50 Jahre
- Marineblaue Arbeitsjacke (#012956)
- Bedient professionelle Bodenreinigungsmaschine

EQUIPMENT:
- Gelbe Kärcher Scheuersaugmaschine (prominent)
- Sicherheitsschuhe
- Professionelle Arbeitskleidung

STIMMUNG:
- Kompetent, industrietauglich, professionell"""
    },
    {
        "name": "service-facility",
        "output": "home",
        "ratio": "4:3",
        "prompt": """Facility Management Koordination vor Geschäftsgebäude.

SZENE:
- Eingangsbereich eines modernen Geschäftsgebäudes
- Gepflegte Außenanlagen sichtbar
- Professionelle Business-Umgebung

PERSONEN:
- Zwei FIMI Mitarbeiter in marineblauen Uniformen
- Einer mit Tablet/Klemmbrett (Teamleiter)
- Einer mit Reinigungsausrüstung
- Professionelle Besprechung

STIMMUNG:
- Organisiert, koordiniert, Full-Service"""
    },
    {
        "name": "process-contact",
        "output": "home",
        "ratio": "3:4",
        "prompt": """FIMI Kundenberater am Telefon.

SZENE:
- Modernes Büro mit sauberem Schreibtisch
- Professionelle Arbeitsumgebung
- Heller, freundlicher Raum

PERSON:
- Männlicher oder weiblicher Mitarbeiter, ca. 30-45 Jahre
- Business-Casual oder marineblaues Poloshirt
- Freundlich am Telefon
- Macht sich Notizen

STIMMUNG:
- Erreichbar, serviceorientiert, persönlich
- Kundennähe und Professionalität"""
    },
    {
        "name": "faq-service",
        "output": "home",
        "ratio": "16:9",
        "prompt": """FIMI Reinigungsteam bei der Arbeit in einem modernen Gebäude.

SZENE:
- Großer Eingangsbereich oder Lobby
- Modernes deutsches Geschäftsgebäude
- Professionelle Architektur

PERSONEN:
- 2 FIMI Mitarbeiter bei der Arbeit
- Marineblaue Arbeitskleidung (#012956)
- Koordinierte Teamarbeit

TÄTIGKEIT:
- Einer reinigt Boden
- Einer reinigt Glasflächen
- Professionelle Ausrüstung sichtbar

STIMMUNG:
- Teamarbeit, Effizienz, Qualität"""
    },
]

# ============================================================================
# MAIN FUNCTIONS
# ============================================================================

def generate_single(client, name: str, prompt: str, ratio: str, output_subdir: str, logo: Image = None):
    """Generiert ein einzelnes Bild."""
    target_dir = PUBLIC_DIR / output_subdir

    print(f"\n{'='*60}")
    print(f"GENERIERE: {name}")
    print(f"{'='*60}")
    print(f"Ziel: {target_dir / name}.avif")
    print(f"Ratio: {ratio}")

    try:
        img = generate_image(client, prompt, ratio, logo)
        result_path = save_image(img, name, target_dir)
        print(f"\n✅ ERFOLGREICH: {result_path}")
        return True
    except Exception as e:
        print(f"\n❌ FEHLER: {e}")
        return False


def generate_startseite(client, logo: Image = None, force: bool = False):
    """Generiert alle Startseiten-Bilder."""

    print("\n" + "="*60)
    print("FIMI BILDGENERATOR - STARTSEITE")
    print("="*60)

    home_dir = PUBLIC_DIR / "home"
    results = []

    for img_config in STARTSEITE_IMAGES:
        name = img_config["name"]
        target_file = home_dir / f"{name}.avif"

        # Skip wenn existiert und nicht force
        if target_file.exists() and not force:
            print(f"\n⏭️  {name}.avif existiert - überspringe (nutze --force zum Überschreiben)")
            continue

        success = generate_single(
            client,
            name=name,
            prompt=img_config["prompt"],
            ratio=img_config["ratio"],
            output_subdir=img_config["output"],
            logo=logo
        )
        results.append((name, success))

        if success:
            print("\n⏳ Warte 15 Sekunden (Rate Limit)...")
            time.sleep(15)

    # Zusammenfassung
    print("\n" + "="*60)
    print("ZUSAMMENFASSUNG")
    print("="*60)

    for name, success in results:
        status = "✅" if success else "❌"
        print(f"  {status} {name}")

    if not results:
        print("  Alle Bilder existieren bereits!")
        print("  Nutze --force zum Überschreiben.")

    return all(s for _, s in results) if results else True


def main():
    parser = argparse.ArgumentParser(
        description="FIMI Bildgenerator mit Gemini 3 Pro Image",
        formatter_class=argparse.RawDescriptionHelpFormatter,
        epilog="""
Beispiele:
  python3 setup_check.py                     # Voraussetzungen prüfen
  python3 generate_single.py --startseite    # Alle Startseiten-Bilder
  python3 generate_single.py --startseite --force  # Überschreibe existierende
  python3 generate_single.py --name "bild" --prompt "..." --ratio "16:9"
        """
    )

    parser.add_argument("--startseite", action="store_true",
                       help="Generiere alle Startseiten-Bilder")
    parser.add_argument("--force", action="store_true",
                       help="Überschreibe existierende Bilder")
    parser.add_argument("--no-logo", action="store_true",
                       help="Ohne Logo-Referenz generieren")
    parser.add_argument("--name", type=str,
                       help="Dateiname (ohne Erweiterung)")
    parser.add_argument("--prompt", type=str,
                       help="Bildprompt")
    parser.add_argument("--ratio", type=str, default="16:9",
                       help="Seitenverhältnis: 16:9, 4:3, 3:4, 1:1")
    parser.add_argument("--output", type=str, default="home",
                       help="Ausgabe-Unterordner in public/images/")

    args = parser.parse_args()

    # Client initialisieren
    client = init_client()

    # Logo laden (optional)
    logo = None
    if not args.no_logo:
        try:
            logo = load_logo()
        except Exception as e:
            print(f"⚠️  Logo konnte nicht geladen werden: {e}")
            print("   Generiere ohne Logo-Referenz...")

    if args.startseite:
        success = generate_startseite(client, logo, force=args.force)
        return 0 if success else 1

    elif args.name and args.prompt:
        success = generate_single(client, args.name, args.prompt, args.ratio, args.output, logo)
        return 0 if success else 1

    else:
        parser.print_help()
        print("\n💡 Tipp: Nutze --startseite für alle Homepage-Bilder")
        return 0


if __name__ == "__main__":
    sys.exit(main())
