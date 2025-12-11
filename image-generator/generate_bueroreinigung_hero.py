#!/usr/bin/env python3
"""Generiert Hero-Bild für Büroreinigung."""

import os
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
OUTPUT_DIR = PROJECT_ROOT / "public" / "images" / "leistungen" / "bueroreinigung"

MODEL_NAME = "gemini-3-pro-image-preview"

os.environ["GOOGLE_APPLICATION_CREDENTIALS"] = str(CREDENTIALS_PATH)

client = genai.Client(
    vertexai=True,
    project="fimi-bilder",
    location="global"
)

def generate_hero_image(retries: int = 5):
    """Generiert das Hero-Bild für die Büroreinigung-Seite."""

    prompt = """Professional stock photography of a pristine modern open-plan office space with floor-to-ceiling windows showing a city skyline. Clean white desks with monitors, ergonomic chairs, healthy green plants, polished floors reflecting natural daylight. The office is immaculately clean and organized - no clutter, no papers, surfaces gleaming. High-end commercial real estate photography like Architectural Digest. Warm natural morning light streaming through windows. Natural, warm color palette with whites, light greys, wood tones, and subtle green from plants. NO PEOPLE, NO HANDS, NO FACES. NO corporate branding colors, NO teal or dark blue accents. Photorealistic, 8K quality, ultra-sharp details.

CRITICAL REQUIREMENTS:
- NO PEOPLE in the image
- NO hands, NO faces, NO human figures
- NO corporate CI colors (no teal #109387, no dark blue #012956)
- Natural, authentic colors only (whites, greys, wood tones, plant greens)
- Getty Images/Shutterstock professional quality
- Must show a CLEAN, PRISTINE office environment
- NO cleaning equipment visible
- NO logos or branding

STYLE:
- Photorealistic, commercial real estate photography
- Warm natural morning light
- Wide-angle perspective
- Ultra-high resolution, sharp details
- Professional architectural photography aesthetic"""

    for attempt in range(1, retries + 1):
        try:
            print(f"🔄 Generiere Hero-Bild für Büroreinigung... (Versuch {attempt}/{retries})")

            response = client.models.generate_content(
                model=MODEL_NAME,
                contents=[prompt],
                config=types.GenerateContentConfig(
                    response_modalities=["IMAGE", "TEXT"],
                )
            )

            if response.candidates:
                for part in response.candidates[0].content.parts:
                    if hasattr(part, 'inline_data') and part.inline_data:
                        image_data = part.inline_data.data
                        img = Image.open(BytesIO(image_data))

                        # Konvertiere RGBA zu RGB falls nötig
                        if img.mode == 'RGBA':
                            img = img.convert('RGB')

                        # Stelle sicher, dass das Ausgabeverzeichnis existiert
                        OUTPUT_DIR.mkdir(parents=True, exist_ok=True)

                        # Skaliere auf 1920x1080 (16:9 Format)
                        target_width = 1920
                        target_height = 1080

                        # Berechne Aspect Ratio
                        img_ratio = img.width / img.height
                        target_ratio = target_width / target_height

                        if img_ratio > target_ratio:
                            # Bild ist breiter - nach Höhe skalieren und Breite croppen
                            new_height = target_height
                            new_width = int(target_height * img_ratio)
                            resized = img.resize((new_width, new_height), Image.Resampling.LANCZOS)
                            # Center crop
                            left = (new_width - target_width) // 2
                            final_img = resized.crop((left, 0, left + target_width, target_height))
                        else:
                            # Bild ist höher - nach Breite skalieren und Höhe croppen
                            new_width = target_width
                            new_height = int(target_width / img_ratio)
                            resized = img.resize((new_width, new_height), Image.Resampling.LANCZOS)
                            # Center crop
                            top = (new_height - target_height) // 2
                            final_img = resized.crop((0, top, target_width, top + target_height))

                        # Speichere als PNG
                        output_path = OUTPUT_DIR / "hero.png"
                        final_img.save(output_path, 'PNG', optimize=True)
                        print(f"✅ Hero-Bild gespeichert: {output_path}")
                        print(f"   Dimensionen: {final_img.size[0]}x{final_img.size[1]} Pixel")
                        return True

            print(f"⚠️ Keine Bilddaten erhalten (Versuch {attempt}/{retries})")
            if attempt < retries:
                print(f"   Warte 20 Sekunden vor erneutem Versuch...")
                time.sleep(20)

        except Exception as e:
            error_str = str(e)
            if "RESOURCE_EXHAUSTED" in error_str:
                wait_time = 30 * attempt
                print(f"⏳ Rate Limit erreicht - warte {wait_time} Sekunden...")
                time.sleep(wait_time)
            else:
                print(f"⚠️ Fehler bei Generierung: {error_str[:200]}")
                if attempt < retries:
                    print(f"   Warte 15 Sekunden vor erneutem Versuch...")
                    time.sleep(15)

    print("❌ Bildgenerierung fehlgeschlagen nach allen Versuchen")
    return False

if __name__ == "__main__":
    print("=" * 60)
    print("Hero-Bild Generator für Büroreinigung")
    print("=" * 60)
    print()

    success = generate_hero_image()

    if success:
        print()
        print("=" * 60)
        print("✅ ERFOLGREICH - Bild wurde generiert!")
        print("=" * 60)
        exit(0)
    else:
        print()
        print("=" * 60)
        print("❌ FEHLER - Bild konnte nicht generiert werden")
        print("=" * 60)
        exit(1)
