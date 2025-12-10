#!/usr/bin/env python3
"""
FIMI Bild-Editor mit Gemini 3 Pro Image
========================================
Nimmt ein bestehendes Bild als Referenz und modifiziert es.

Usage:
    python3 edit_image.py --input "path/to/image.avif" --output "referenzen/ref-042" --name "ref-042-1" --prompt "Entferne das Reinigungsgerät"
"""

import os
import sys
import time
import argparse
from pathlib import Path
from datetime import datetime
from io import BytesIO

# Dependency Check
try:
    from google import genai
    from google.genai import types
    from PIL import Image
    import pillow_avif
except ImportError as e:
    print(f"\n❌ FEHLENDE DEPENDENCIES: {e}\n")
    sys.exit(1)

# Konfiguration
SCRIPT_DIR = Path(__file__).parent
PROJECT_ROOT = SCRIPT_DIR.parent
CREDENTIALS_PATH = SCRIPT_DIR / "credentials" / "fimi-bilder-credentials.json"
PUBLIC_DIR = PROJECT_ROOT / "public" / "images"
LOG_FILE = SCRIPT_DIR / "edit_log.txt"

MODEL_NAME = "gemini-3-pro-image-preview"


def init_client():
    """Initialisiert den Google GenAI Client."""
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
        print("✓ Client initialisiert (Gemini 3 Pro Image)")
        return client
    except Exception as e:
        print(f"\n❌ CLIENT-FEHLER: {e}\n")
        sys.exit(1)


def edit_image(client, input_image_path: Path, edit_prompt: str, retries: int = 3):
    """
    Bearbeitet ein bestehendes Bild basierend auf dem Prompt.
    Das Originalbild wird als Referenz verwendet.
    """

    # Originalbild laden
    if not input_image_path.exists():
        print(f"\n❌ BILD NICHT GEFUNDEN: {input_image_path}\n")
        sys.exit(1)

    original = Image.open(input_image_path)
    print(f"   → Originalbild geladen: {original.size[0]}x{original.size[1]}")

    # Prompt für Bildbearbeitung
    full_prompt = f"""BILDBEARBEITUNG - Behalte das Originalbild bei und ändere NUR das Folgende:

{edit_prompt}

WICHTIG:
- Behalte EXAKT die gleiche Perspektive, Beleuchtung und Atmosphäre
- Behalte alle anderen Elemente im Bild unverändert
- Fülle den entfernten Bereich natürlich mit dem passenden Hintergrund
- Das Ergebnis soll aussehen wie das Original, nur ohne das zu entfernende Element
- Fotorealistisch, keine KI-Artefakte
"""

    print(f"\n📸 Bearbeite Bild mit Gemini 3 Pro Image...")
    print(f"   Edit-Prompt: {edit_prompt[:60]}...")

    last_error = None

    for attempt in range(1, retries + 1):
        try:
            # Originalbild + Edit-Prompt
            response = client.models.generate_content(
                model=MODEL_NAME,
                contents=[
                    "ORIGINALBILD - Bearbeite dieses Bild:",
                    original,
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
                        print(f"   ✓ Bild bearbeitet (Versuch {attempt}/{retries})")
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
            else:
                print(f"   ⚠️ Fehler: {error_str[:80]}... (Versuch {attempt}/{retries})")
                time.sleep(10)

    raise Exception(f"Bildbearbeitung fehlgeschlagen: {last_error}")


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
        f.write(f"{datetime.now().isoformat()} | EDIT | {name} | {img.size[0]}x{img.size[1]}\n")

    return main_avif


def main():
    parser = argparse.ArgumentParser(description="FIMI Bild-Editor (Gemini)")
    parser.add_argument("--input", type=str, required=True, help="Pfad zum Originalbild")
    parser.add_argument("--output", type=str, required=True, help="Ausgabe-Ordner (z.B. referenzen/ref-042)")
    parser.add_argument("--name", type=str, required=True, help="Dateiname (z.B. ref-042-1)")
    parser.add_argument("--prompt", type=str, required=True, help="Was soll geändert werden?")

    args = parser.parse_args()

    # Input-Pfad auflösen
    input_path = Path(args.input)
    if not input_path.is_absolute():
        input_path = PUBLIC_DIR / args.input

    client = init_client()

    print(f"\n{'='*60}")
    print(f"BEARBEITE: {args.name}")
    print(f"INPUT: {input_path}")
    print(f"{'='*60}")

    try:
        img = edit_image(client, input_path, args.prompt)
        target_dir = PUBLIC_DIR / args.output
        result_path = save_image(img, args.name, target_dir)
        print(f"\n✅ ERFOLGREICH: {result_path}")
        return 0
    except Exception as e:
        print(f"\n❌ FEHLER: {e}")
        return 1


if __name__ == "__main__":
    sys.exit(main())
