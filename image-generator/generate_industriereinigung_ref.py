#!/usr/bin/env python3
"""
Industriereinigung Bild mit Kärcher Referenzbild
================================================
Generiert ein Industriereinigungsbild mit der echten Kärcher
Aufsitz-Scheuersaugmaschine als Referenz.

WICHTIG: Bitte speichere zuerst das Kärcher-Referenzbild unter:
  image-generator/references/kaercher-scheuersaugmaschine.png

Das Bild sollte die graue Kärcher Professional Aufsitz-Scheuersaugmaschine
mit gelben Akzenten zeigen (z.B. Kärcher B 75/90 R).
"""

import os
import sys
import time
from pathlib import Path
from io import BytesIO

from google import genai
from google.genai import types
from PIL import Image
import pillow_avif

SCRIPT_DIR = Path(__file__).parent
PROJECT_ROOT = SCRIPT_DIR.parent
CREDENTIALS_PATH = SCRIPT_DIR / "credentials" / "fimi-bilder-credentials.json"
PUBLIC_DIR = PROJECT_ROOT / "public" / "images" / "nav"
REFERENCE_DIR = SCRIPT_DIR / "references"

MODEL_NAME = "gemini-3-pro-image-preview"

os.environ["GOOGLE_APPLICATION_CREDENTIALS"] = str(CREDENTIALS_PATH)

client = genai.Client(
    vertexai=True,
    project="fimi-bilder",
    location="global"
)

PROMPT = """Platziere diese EXAKTE Kärcher Aufsitz-Scheuersaugmaschine (graue Farbe mit gelben Akzenten)
in einer großen Industriehalle.

WICHTIG - DIE MASCHINE:
- Nutze GENAU diese Kärcher Maschine aus dem Referenzbild
- Graues Gehäuse mit gelben Akzenten (Kärcher Professional Design)
- Aufsitz-Scheuersaugmaschine mit Lenkrad und Sitz
- Die Maschine soll prominent im Vordergrund stehen
- Behalte das exakte Design und die Proportionen bei

DIE INDUSTRIEHALLE:
- Große, weitläufige Produktions- oder Lagerhalle
- Hohe Decken mit Stahlträgern und Oberlichtern
- Natürliches Licht durch große Fenster/Oberlichter
- Industrieregale oder Maschinen im Hintergrund
- Frisch gereinigter, glänzender Betonboden
- Authentische Industrieatmosphäre

FOTOSTIL:
- Professionelles Industriefoto
- Dokumentarischer Architektur-Stil
- Realistische Industriefarben (grau, gelb, metallisch)
- Weitwinkel zeigt Größe der Halle
- Die Maschine perspektivisch korrekt in der Halle platziert

TECHNISCH:
- Querformat 16:9
- Professionelle Qualität

ABSOLUT WICHTIG:
- KEINE PERSONEN/MENSCHEN im Bild
- KEINE künstlichen CI-Farben (kein Türkis, kein Navy)
- Die Kärcher Maschine EXAKT wie im Referenzbild darstellen
- Das graue Gehäuse mit den charakteristischen gelben Akzenten beibehalten
"""


def generate_with_reference(reference_image_path: str, retries: int = 5) -> bool:
    """Generiert ein Bild mit Referenzbild."""

    # Referenzbild laden
    print(f"   📷 Lade Referenzbild: {reference_image_path}")
    ref_img = Image.open(reference_image_path)
    print(f"   📐 Referenzbild-Größe: {ref_img.size[0]}x{ref_img.size[1]}")

    if ref_img.mode == 'RGBA':
        # Konvertiere RGBA zu RGB mit weißem Hintergrund
        background = Image.new('RGB', ref_img.size, (255, 255, 255))
        background.paste(ref_img, mask=ref_img.split()[3])
        ref_img = background
    elif ref_img.mode != 'RGB':
        ref_img = ref_img.convert('RGB')

    # Referenzbild in Bytes konvertieren
    ref_buffer = BytesIO()
    ref_img.save(ref_buffer, format='JPEG', quality=95)
    ref_bytes = ref_buffer.getvalue()
    print(f"   📦 Referenzbild-Größe: {len(ref_bytes)} Bytes")

    for attempt in range(1, retries + 1):
        try:
            print(f"   🔄 Generiere mit Referenzbild... (Versuch {attempt}/{retries})")

            # Multimodaler Request mit Bild und Text
            response = client.models.generate_content(
                model=MODEL_NAME,
                contents=[
                    types.Part.from_bytes(data=ref_bytes, mime_type="image/jpeg"),
                    PROMPT
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

                        if img.mode == 'RGBA':
                            img = img.convert('RGB')

                        PUBLIC_DIR.mkdir(parents=True, exist_ok=True)

                        filename = "industriereinigung"

                        # Responsive Größen
                        sizes = [800, 600, 400]
                        for size in sizes:
                            if img.width >= size:
                                ratio = size / img.width
                                new_height = int(img.height * ratio)
                                resized = img.resize((size, new_height), Image.Resampling.LANCZOS)
                            else:
                                resized = img

                            resized.save(PUBLIC_DIR / f"{filename}-{size}w.avif", 'AVIF', quality=80)
                            resized.save(PUBLIC_DIR / f"{filename}-{size}w.webp", 'WEBP', quality=80)

                        # Hauptbild
                        img.save(PUBLIC_DIR / f"{filename}.avif", 'AVIF', quality=85)
                        img.save(PUBLIC_DIR / f"{filename}.webp", 'WEBP', quality=85)
                        print(f"   ✅ {filename} gespeichert ({img.size[0]}x{img.size[1]})")
                        return True

            print(f"   ⚠️ Keine Bilddaten (Versuch {attempt}/{retries})")
            if attempt < retries:
                time.sleep(20)

        except Exception as e:
            error_str = str(e)
            if "RESOURCE_EXHAUSTED" in error_str:
                wait_time = 30 * attempt
                print(f"   ⏳ Rate Limit - warte {wait_time}s")
                time.sleep(wait_time)
            else:
                print(f"   ⚠️ Fehler: {error_str[:200]}")
                if attempt < retries:
                    time.sleep(15)

    return False


def main():
    print("\n" + "="*60)
    print("INDUSTRIEREINIGUNG MIT KÄRCHER REFERENZBILD")
    print("="*60)

    # Mögliche Referenzbild-Pfade
    possible_paths = [
        REFERENCE_DIR / "kaercher-scheuersaugmaschine.png",
        REFERENCE_DIR / "kaercher-scheuersaugmaschine.jpg",
        REFERENCE_DIR / "kaercher.png",
        REFERENCE_DIR / "kaercher.jpg",
    ]

    ref_path = None
    for path in possible_paths:
        if path.exists() and path.stat().st_size > 1000:  # Mindestens 1KB
            ref_path = path
            break

    if ref_path is None:
        print(f"\n❌ Referenzbild nicht gefunden!")
        print(f"Bitte speichere das Kärcher-Bild unter einem dieser Pfade:")
        for path in possible_paths:
            print(f"  - {path}")
        return 1

    print(f"\n📷 Referenzbild: {ref_path}")
    print("Generiere Industriereinigung-Bild...\n")

    if generate_with_reference(str(ref_path)):
        print("\n✅ Industriereinigung erfolgreich generiert!")
        return 0
    else:
        print("\n❌ Generierung fehlgeschlagen")
        return 1


if __name__ == "__main__":
    sys.exit(main())
