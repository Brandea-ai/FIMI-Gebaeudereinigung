#!/usr/bin/env python3
"""
FIMI Referenzen - Regenerierung ohne Menschen und Geräte
========================================================
Nimmt existierende Bilder als Referenz und regeneriert sie
OHNE Menschen und OHNE Reinigungsgeräte/Maschinen/Mops.

Usage:
    python3 regenerate_no_people.py --ref ref-001
    python3 regenerate_no_people.py --image ref-001-1
    python3 regenerate_no_people.py --all
    python3 regenerate_no_people.py --list
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
PUBLIC_DIR = PROJECT_ROOT / "public" / "images" / "referenzen"
LOG_FILE = SCRIPT_DIR / "regenerate_log.txt"

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
            location="global"
        )
        print("✓ Client initialisiert (Gemini 3 Pro Image, Location: global)")
        return client
    except Exception as e:
        print(f"\n❌ CLIENT-FEHLER: {e}\n")
        sys.exit(1)

# ============================================================================
# IMAGE-TO-IMAGE REGENERATION
# ============================================================================

def regenerate_without_people(client, source_image_path: Path, retries: int = 3) -> Image:
    """
    Nimmt ein existierendes Bild als Referenz und regeneriert es
    OHNE Menschen und OHNE Reinigungsgeräte.
    """

    if not source_image_path.exists():
        raise FileNotFoundError(f"Quellbild nicht gefunden: {source_image_path}")

    # Lade das Quellbild als Referenz
    source_img = Image.open(source_image_path)

    # Der kritische Prompt für Image-to-Image
    regenerate_prompt = """BILDBEARBEITUNG - EXAKTE REPRODUKTION MIT ÄNDERUNGEN:

Ich gebe dir ein Referenzbild. Bitte regeneriere dieses Bild EXAKT wie es ist, aber mit folgenden KRITISCHEN ÄNDERUNGEN:

1. ENTFERNE ALLE MENSCHEN komplett aus dem Bild
   - Keine Personen, keine Reinigungskräfte, keine Mitarbeiter
   - Der Raum/die Szene soll leer sein

2. ENTFERNE ALLE REINIGUNGSGERÄTE UND MASCHINEN komplett:
   - Keine Reinigungswagen (VERMOP, etc.)
   - Keine Scheuersaugmaschinen (Kärcher, etc.)
   - Keine Hochdruckreiniger
   - Keine Staubsauger (auch nicht Numatic Henry)
   - Keine Mops, Eimer, Reinigungstücher
   - Keine Fensterabzieher (Unger, etc.)
   - Keine Einscheibenmaschinen
   - NICHTS was mit Reinigung zu tun hat

3. BEHALTE EXAKT BEI:
   - Die gesamte Raumarchitektur
   - Alle Möbel und Einrichtung
   - Die Beleuchtung und Lichtstimmung
   - Die Kameraposition und Perspektive
   - Die Farbstimmung
   - Die Bildkomposition
   - Das Seitenverhältnis
   - Die Auflösung und Qualität

Der Raum soll so aussehen, als wäre er einfach leer/unbesetzt - ein sauberer, professioneller Raum OHNE Menschen und OHNE sichtbare Reinigungsausrüstung.

WICHTIG: Das neue Bild muss dem Referenzbild so ähnlich wie möglich sein - gleicher Raum, gleiche Möbel, gleiche Atmosphäre - nur eben LEER (keine Menschen, keine Reinigungsgeräte).
"""

    print(f"   → Regeneriere ohne Menschen/Geräte...")

    last_error = None

    for attempt in range(1, retries + 1):
        try:
            response = client.models.generate_content(
                model=MODEL_NAME,
                contents=[
                    "REFERENZBILD - Regeneriere dieses Bild EXAKT, aber OHNE Menschen und OHNE Reinigungsgeräte:",
                    source_img,
                    regenerate_prompt
                ],
                config=types.GenerateContentConfig(
                    response_modalities=["IMAGE", "TEXT"],
                )
            )

            if response.candidates:
                for part in response.candidates[0].content.parts:
                    if hasattr(part, 'inline_data') and part.inline_data:
                        image_data = part.inline_data.data
                        img = Image.open(BytesIO(image_data))
                        print(f"   ✓ Bild regeneriert (Versuch {attempt}/{retries})")
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
                sys.exit(1)
            else:
                print(f"   ⚠️ Fehler: {error_str[:80]}... (Versuch {attempt}/{retries})")
                time.sleep(10)

    raise Exception(f"Bildgenerierung fehlgeschlagen: {last_error}")

# ============================================================================
# IMAGE SAVING
# ============================================================================

def save_image(img: Image, name: str, ref_id: str) -> Path:
    """Speichert Bild als AVIF + WebP in responsiven Größen."""
    target_dir = PUBLIC_DIR / ref_id
    target_dir.mkdir(parents=True, exist_ok=True)

    if img.mode == 'RGBA':
        img = img.convert('RGB')

    print(f"   💾 Speichere: {img.size[0]}x{img.size[1]}")

    sizes = [1024, 768, 384]
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

    main_avif = target_dir / f"{name}.avif"
    img.save(main_avif, 'AVIF', quality=85)
    print(f"   ✓ {name}.avif gespeichert")

    with open(LOG_FILE, 'a') as f:
        f.write(f"{datetime.now().isoformat()} | REGENERATED | {name} | {img.size[0]}x{img.size[1]}\n")

    return main_avif

# ============================================================================
# MAIN FUNCTIONS
# ============================================================================

def get_all_images():
    """Findet alle Haupt-AVIF-Bilder (keine responsiven Varianten)."""
    images = []

    for ref_dir in sorted(PUBLIC_DIR.iterdir()):
        if ref_dir.is_dir() and ref_dir.name.startswith("ref-"):
            ref_id = ref_dir.name
            for avif_file in sorted(ref_dir.glob("*.avif")):
                # Nur Hauptbilder, keine responsiven Varianten
                if not any(suffix in avif_file.name for suffix in ["-384w", "-768w", "-1024w"]):
                    images.append({
                        "ref_id": ref_id,
                        "name": avif_file.stem,  # z.B. "ref-001-1"
                        "path": avif_file
                    })

    return images


def regenerate_single_image(client, image_name: str):
    """Regeneriert ein einzelnes Bild."""
    # Finde das Bild
    all_images = get_all_images()
    target = None

    for img in all_images:
        if img["name"] == image_name:
            target = img
            break

    if not target:
        print(f"❌ Bild '{image_name}' nicht gefunden!")
        return False

    print(f"\n{'='*60}")
    print(f"REGENERIERE: {target['name']}")
    print(f"Quellbild: {target['path']}")
    print(f"{'='*60}")

    try:
        new_img = regenerate_without_people(client, target["path"])
        save_image(new_img, target["name"], target["ref_id"])
        return True
    except Exception as e:
        print(f"❌ Fehler: {e}")
        return False


def regenerate_referenz(client, ref_id: str):
    """Regeneriert alle 3 Bilder einer Referenz."""
    all_images = get_all_images()
    ref_images = [img for img in all_images if img["ref_id"] == ref_id]

    if not ref_images:
        print(f"❌ Keine Bilder für Referenz '{ref_id}' gefunden!")
        return False

    print(f"\n{'='*60}")
    print(f"REGENERIERE REFERENZ: {ref_id}")
    print(f"Bilder: {len(ref_images)}")
    print(f"{'='*60}")

    success_count = 0

    for i, img in enumerate(ref_images, 1):
        print(f"\n[{i}/{len(ref_images)}] {img['name']}")

        try:
            new_img = regenerate_without_people(client, img["path"])
            save_image(new_img, img["name"], img["ref_id"])
            success_count += 1

            if i < len(ref_images):
                print("   ⏳ Warte 15 Sekunden...")
                time.sleep(15)

        except Exception as e:
            print(f"   ❌ Fehler: {e}")

    return success_count == len(ref_images)


def regenerate_all(client):
    """Regeneriert ALLE Bilder."""
    all_images = get_all_images()

    print(f"\n{'='*60}")
    print(f"REGENERIERE ALLE {len(all_images)} BILDER")
    print(f"{'='*60}")
    print(f"\n⚠️ Das dauert etwa 2-3 Stunden und kostet ca. $36")
    print(f"   ({len(all_images)} Bilder × $0.24)")

    success_count = 0

    for i, img in enumerate(all_images, 1):
        print(f"\n[{i}/{len(all_images)}] {img['name']}")

        try:
            new_img = regenerate_without_people(client, img["path"])
            save_image(new_img, img["name"], img["ref_id"])
            success_count += 1

            # Längere Pause alle 3 Bilder
            if i % 3 == 0 and i < len(all_images):
                print("   ⏳ Warte 30 Sekunden zwischen Referenzen...")
                time.sleep(30)
            elif i < len(all_images):
                print("   ⏳ Warte 15 Sekunden...")
                time.sleep(15)

        except Exception as e:
            print(f"   ❌ Fehler: {e}")

    print(f"\n{'='*60}")
    print(f"FERTIG: {success_count}/{len(all_images)} Bilder regeneriert")
    print(f"{'='*60}")


def list_images():
    """Listet alle vorhandenen Bilder auf."""
    all_images = get_all_images()

    print(f"\n{'='*60}")
    print(f"ALLE VORHANDENEN BILDER ({len(all_images)})")
    print(f"{'='*60}")

    current_ref = None
    for img in all_images:
        if img["ref_id"] != current_ref:
            current_ref = img["ref_id"]
            print(f"\n{current_ref}:")
        print(f"  ✅ {img['name']}")

    print(f"\nGesamt: {len(all_images)} Bilder in {len(set(img['ref_id'] for img in all_images))} Referenzen")


def main():
    parser = argparse.ArgumentParser(description="FIMI Referenzen - Regenerierung ohne Menschen/Geräte")
    parser.add_argument("--ref", type=str, help="Einzelne Referenz regenerieren (z.B. ref-001)")
    parser.add_argument("--image", type=str, help="Einzelnes Bild regenerieren (z.B. ref-001-1)")
    parser.add_argument("--all", action="store_true", help="Alle Bilder regenerieren")
    parser.add_argument("--list", action="store_true", help="Alle vorhandenen Bilder auflisten")

    args = parser.parse_args()

    if args.list:
        list_images()
        return 0

    client = init_client()

    if args.image:
        return 0 if regenerate_single_image(client, args.image) else 1
    elif args.ref:
        return 0 if regenerate_referenz(client, args.ref) else 1
    elif args.all:
        regenerate_all(client)
        return 0
    else:
        parser.print_help()
        return 0


if __name__ == "__main__":
    sys.exit(main())
