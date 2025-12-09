#!/usr/bin/env python3
"""
FIMI Einzelbild-Generator
==========================
Generiert einzelne Bilder mit Imagen 3 für manuelle Qualitätskontrolle.

Usage:
    # Voraussetzungen prüfen:
    python3 setup_check.py

    # Einzelnes Bild generieren:
    python3 generate_single.py --name "hero-team" --prompt "Team vor Gebäude" --ratio "16:9" --output "home"

    # Alle fehlenden Startseiten-Bilder:
    python3 generate_single.py --startseite
"""

import os
import sys
import time
import argparse
from pathlib import Path
from datetime import datetime

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

# Imports nach Check
from google import genai
from google.genai import types
from PIL import Image
import pillow_avif

# ============================================================================
# KONFIGURATION
# ============================================================================

SCRIPT_DIR = Path(__file__).parent
CREDENTIALS_PATH = SCRIPT_DIR / "credentials" / "fimi-bilder-credentials.json"
PUBLIC_DIR = SCRIPT_DIR.parent / "public" / "images"
LOG_FILE = SCRIPT_DIR / "generation_log.txt"

# Master Style Prompt
MASTER_STYLE = """FIMI Corporate Photography Style - Premium German Cleaning Company

BRAND IDENTITY:
- Company: FIMI Gebäudereinigung (Professional cleaning services)
- Primary Color: Deep navy blue (#012956)
- Accent Color: Teal (#109387)
- Mood: Trustworthy, competent, premium quality, authentically German

PHOTOGRAPHY STYLE:
- Style: High-end commercial corporate photography
- Lighting: Bright natural daylight, soft professional shadows
- Focus: Sharp with subtle depth of field
- Post-processing: Clean, vibrant but not oversaturated

WORKWEAR (Engelbert Strauss Style):
- Navy blue (#012956) polo shirts, jackets, or work pants
- FIMI logo: small on left chest, large on back
- Clean, professional appearance
- Quality German workwear look

CRITICAL REQUIREMENTS:
- NO stock photo aesthetic - must look authentic
- NO generic/international look - German environment
- MUST be photorealistic (not illustration)
- NO AI artifacts (extra fingers, distorted faces)
- Professional corporate photography feel

EQUIPMENT BRANDS (for authenticity):
- Kärcher (yellow/black) - floor scrubbers, pressure washers
- Unger (green) - window cleaning tools
- Vermop - mop systems, cleaning carts
- Numatic Henry (red) - vacuum cleaners
"""

# ============================================================================
# CLIENT INITIALIZATION
# ============================================================================

def init_client():
    """Initialisiert den Google GenAI Client mit Vertex AI."""

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
        print("✓ Vertex AI Client initialisiert")
        return client

    except Exception as e:
        print(f"\n❌ CLIENT-FEHLER: {e}")
        print(f"   Führe 'python3 setup_check.py' aus für Diagnose.\n")
        sys.exit(1)

# ============================================================================
# IMAGE GENERATION
# ============================================================================

def generate_image(client, prompt: str, aspect_ratio: str = "16:9", retries: int = 3) -> bytes:
    """
    Generiert ein Bild mit Imagen 3.

    Args:
        client: Google GenAI Client
        prompt: Bildprompt (wird mit MASTER_STYLE kombiniert)
        aspect_ratio: z.B. "16:9", "3:4", "1:1", "9:16"
        retries: Anzahl Wiederholungsversuche bei Fehlern

    Returns:
        Bild als Bytes
    """
    full_prompt = f"{MASTER_STYLE}\n\n---\n\nGENERATE THIS IMAGE:\n{prompt}"

    print(f"\n📸 Generiere Bild...")
    print(f"   Aspect Ratio: {aspect_ratio}")
    print(f"   Prompt: {prompt[:80]}...")

    last_error = None

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
                print(f"   ✓ Bild generiert (Versuch {attempt}/{retries})")
                return response.generated_images[0].image.image_bytes

        except Exception as e:
            last_error = e
            error_str = str(e)

            if "PERMISSION_DENIED" in error_str:
                print(f"\n❌ PERMISSION DENIED - Service Account braucht 'Vertex AI User' Rolle!")
                print(f"   Öffne: https://console.cloud.google.com/iam-admin/iam?project=fimi-bilder")
                print(f"   Füge Rolle 'Vertex AI User' hinzu für: fimi-bildgenerator@fimi-bilder.iam.gserviceaccount.com\n")
                sys.exit(1)

            elif "RESOURCE_EXHAUSTED" in error_str:
                wait_time = 30 * attempt
                print(f"   ⏳ Rate Limit - warte {wait_time}s (Versuch {attempt}/{retries})")
                time.sleep(wait_time)

            elif "SAFETY" in error_str.upper():
                print(f"   ⚠️  Safety Filter - passe Prompt an (Versuch {attempt}/{retries})")
                # Könnte hier Prompt anpassen
                time.sleep(5)

            else:
                print(f"   ⚠️  Fehler: {error_str[:60]}... (Versuch {attempt}/{retries})")
                time.sleep(10)

    raise Exception(f"Bildgenerierung nach {retries} Versuchen fehlgeschlagen: {last_error}")

# ============================================================================
# IMAGE SAVING
# ============================================================================

def save_image(image_bytes: bytes, name: str, target_dir: Path) -> Path:
    """
    Speichert Bild als AVIF + WebP in responsiven Größen.

    Args:
        image_bytes: Rohes Bild von der API
        name: Dateiname ohne Erweiterung (z.B. "hero-team")
        target_dir: Zielverzeichnis (z.B. public/images/home)

    Returns:
        Pfad zur Hauptdatei (.avif)
    """
    target_dir.mkdir(parents=True, exist_ok=True)

    # Temporär speichern
    temp_path = target_dir / f"{name}_temp.png"
    with open(temp_path, 'wb') as f:
        f.write(image_bytes)

    # Mit Pillow öffnen
    img = Image.open(temp_path)
    if img.mode == 'RGBA':
        img = img.convert('RGB')

    original_size = f"{img.size[0]}x{img.size[1]}"
    print(f"\n💾 Speichere Bild...")
    print(f"   Original: {original_size}")

    # Responsive Größen (nur kleiner als Original)
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

        # Skip wenn diese Größe schon gespeichert wurde
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

    # Hauptdatei (höchste Qualität, ohne Größensuffix)
    main_avif = target_dir / f"{name}.avif"
    img.save(main_avif, 'AVIF', quality=85)
    print(f"   ✓ {name}.avif (Hauptdatei)")

    # Temp löschen
    temp_path.unlink()

    # Log schreiben
    log_entry = f"{datetime.now().isoformat()} | {name} | {original_size} | {target_dir}\n"
    with open(LOG_FILE, 'a') as f:
        f.write(log_entry)

    return main_avif

# ============================================================================
# PREDEFINED IMAGE SETS
# ============================================================================

STARTSEITE_IMAGES = [
    {
        "name": "service-office",
        "output": "home",
        "ratio": "4:3",
        "prompt": """Professional office cleaning scene at a modern German company.

SCENE:
- Bright, modern open-plan office in Germany
- Large windows with natural daylight
- Glass partitions, contemporary furniture
- Clean desks with computers

PERSON:
- Female FIMI employee, mid-30s
- Navy blue polo shirt with FIMI logo
- Cleaning a desk surface with microfiber cloth
- Professional, focused expression

EQUIPMENT:
- Vermop cleaning cart visible in background
- Professional cleaning supplies
- Microfiber cloths

MOOD: Professional, efficient, trustworthy. Shows quality office cleaning."""
    },
    {
        "name": "service-industrie",
        "output": "home",
        "ratio": "4:3",
        "prompt": """Industrial cleaning scene in a German production facility.

SCENE:
- Modern German industrial hall / production facility
- High ceilings, industrial lighting
- Manufacturing equipment visible
- Clean concrete floor

PERSON:
- Male FIMI employee, mid-40s
- Navy blue work jacket with FIMI logo on back
- Operating a yellow Kärcher floor scrubber machine
- Safety shoes, professional appearance

EQUIPMENT:
- Yellow Kärcher professional floor scrubber (prominent)
- Industrial cleaning equipment
- Safety vest if appropriate

MOOD: Competent, industrial-grade cleaning. Shows capability for demanding environments."""
    },
    {
        "name": "service-facility",
        "output": "home",
        "ratio": "4:3",
        "prompt": """Facility management overview scene - team coordination.

SCENE:
- Modern German commercial building exterior or lobby
- Professional business environment
- Well-maintained grounds/entrance visible

PEOPLE:
- Two FIMI employees in navy blue uniforms
- One with tablet/clipboard (supervisor)
- One with cleaning equipment
- Professional discussion/coordination

EQUIPMENT:
- Tablet or clipboard for documentation
- Professional cleaning cart
- Building maintenance tools

MOOD: Organized, comprehensive service. Shows full-service facility management capability."""
    },
]

# ============================================================================
# MAIN FUNCTIONS
# ============================================================================

def generate_single(client, name: str, prompt: str, ratio: str, output_subdir: str):
    """Generiert ein einzelnes Bild."""
    target_dir = PUBLIC_DIR / output_subdir

    print(f"\n{'='*60}")
    print(f"GENERIERE: {name}")
    print(f"{'='*60}")
    print(f"Ziel: {target_dir / name}.avif")
    print(f"Ratio: {ratio}")

    try:
        image_bytes = generate_image(client, prompt, ratio)
        result_path = save_image(image_bytes, name, target_dir)
        print(f"\n✅ ERFOLGREICH: {result_path}")
        return True
    except Exception as e:
        print(f"\n❌ FEHLER: {e}")
        return False


def generate_startseite_missing(client):
    """Generiert alle fehlenden Startseiten-Bilder."""

    print("\n" + "="*60)
    print("FIMI BILDGENERATOR - STARTSEITE (fehlende Bilder)")
    print("="*60)

    home_dir = PUBLIC_DIR / "home"
    results = []

    for img_config in STARTSEITE_IMAGES:
        name = img_config["name"]
        target_file = home_dir / f"{name}.avif"

        # Prüfe ob schon existiert
        if target_file.exists():
            print(f"\n⏭️  {name}.avif existiert bereits - überspringe")
            continue

        success = generate_single(
            client,
            name=name,
            prompt=img_config["prompt"],
            ratio=img_config["ratio"],
            output_subdir=img_config["output"]
        )
        results.append((name, success))

        # Pause zwischen Bildern
        if success:
            print("\n⏳ Warte 10 Sekunden (Rate Limit)...")
            time.sleep(10)

    # Zusammenfassung
    print("\n" + "="*60)
    print("ZUSAMMENFASSUNG")
    print("="*60)

    for name, success in results:
        status = "✅" if success else "❌"
        print(f"  {status} {name}")

    if not results:
        print("  Alle Bilder existieren bereits!")

    return all(s for _, s in results) if results else True


def main():
    parser = argparse.ArgumentParser(
        description="FIMI Bildgenerator - Einzelbilder mit Imagen 3",
        formatter_class=argparse.RawDescriptionHelpFormatter,
        epilog="""
Beispiele:
  # Voraussetzungen prüfen:
  python3 setup_check.py

  # Fehlende Startseiten-Bilder generieren:
  python3 generate_single.py --startseite

  # Einzelnes Bild:
  python3 generate_single.py --name "team-photo" --prompt "FIMI Team vor Gebäude" --ratio "16:9" --output "home"
        """
    )

    parser.add_argument("--startseite", action="store_true",
                       help="Generiere alle fehlenden Startseiten-Bilder")
    parser.add_argument("--name", type=str,
                       help="Dateiname (ohne Erweiterung)")
    parser.add_argument("--prompt", type=str,
                       help="Bildprompt")
    parser.add_argument("--ratio", type=str, default="16:9",
                       help="Seitenverhältnis: 16:9, 4:3, 3:4, 1:1, 9:16")
    parser.add_argument("--output", type=str, default="home",
                       help="Ausgabe-Unterordner in public/images/")

    args = parser.parse_args()

    # Client initialisieren
    client = init_client()

    if args.startseite:
        success = generate_startseite_missing(client)
        return 0 if success else 1

    elif args.name and args.prompt:
        success = generate_single(client, args.name, args.prompt, args.ratio, args.output)
        return 0 if success else 1

    else:
        parser.print_help()
        print("\n💡 Tipp: Nutze --startseite für automatische Generierung")
        return 0


if __name__ == "__main__":
    sys.exit(main())
