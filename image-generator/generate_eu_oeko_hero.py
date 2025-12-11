#!/usr/bin/env python3
"""Generate EU Ökodesign hero image for blog."""

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
OUTPUT_PATH = PROJECT_ROOT / "public" / "images" / "blog" / "eu-oekodesign-verordnung-espr-reinigung-hero.png"

MODEL_NAME = "gemini-3-pro-image-preview"

os.environ["GOOGLE_APPLICATION_CREDENTIALS"] = str(CREDENTIALS_PATH)

client = genai.Client(
    vertexai=True,
    project="fimi-bilder",
    location="global"
)

def generate_blog_hero(retries: int = 5):
    prompt = """GENERIERE EIN PROFESSIONELLES BLOG HERO BILD - EU Ökodesign-Verordnung

Erstelle ein fotorealistisches, panoramisches Bild (21:9 Format) von umweltfreundlichen Reinigungsprodukten.

SZENE - Eco-Friendly Cleaning Supplies:
- Grüne Glasflaschen mit pflanzlichen Etiketten (plant-based, eco-friendly labels)
- Natürliche Bürsten aus Holz und Naturborsten
- Biologisch abbaubare Schwämme
- Frische grüne Blätter (z.B. Eukalyptus, Minze)
- Subtiles EU-Recyclingsymbol (dezent platziert)
- Heller, sauberer Hintergrund
- Natürliches Tageslicht, helle Atmosphäre

STIL:
- Fotorealistisch, professionelle Produktfotografie
- Helles, natürliches Licht (Sonnenlicht von der Seite)
- Saubere, nachhaltige Ästhetik
- Moderne, minimalistische Komposition
- Warme, natürliche Farbtöne mit Akzenten in Grün
- Sollte zum Farbschema passen: Teal (#109387) und Dunkelblau (#012956)
- Ultra-weites 21:9 Panorama-Format
- Hohe Auflösung, scharfe Details

KRITISCH - VERBOTEN:
- KEINE Menschen im Bild
- KEINE Hände oder Körperteile
- KEINE Gesichter
- KEINE sichtbaren Markenlogos

Das Bild soll eine nachhaltige, umweltfreundliche Reinigung symbolisieren und zur EU-Ökodesign-Verordnung passen."""

    for attempt in range(1, retries + 1):
        try:
            print(f"🔄 Generiere Blog Hero Bild... (Versuch {attempt}/{retries})")

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

                        if img.mode == 'RGBA':
                            img = img.convert('RGB')

                        # Ensure directory exists
                        OUTPUT_PATH.parent.mkdir(parents=True, exist_ok=True)

                        # Save as PNG
                        img.save(OUTPUT_PATH, 'PNG', quality=95)
                        print(f"✅ Hero-Bild gespeichert: {OUTPUT_PATH}")
                        print(f"   Größe: {img.size[0]}x{img.size[1]} Pixel")
                        return True

            print(f"⚠️ Keine Bilddaten (Versuch {attempt}/{retries})")
            if attempt < retries:
                time.sleep(20)

        except Exception as e:
            error_str = str(e)
            if "RESOURCE_EXHAUSTED" in error_str:
                wait_time = 30 * attempt
                print(f"⏳ Rate Limit - warte {wait_time}s")
                time.sleep(wait_time)
            else:
                print(f"⚠️ Fehler: {error_str[:200]}")
                if attempt < retries:
                    time.sleep(15)

    return False

if __name__ == "__main__":
    print("=" * 60)
    print("EU Ökodesign Hero Image Generator")
    print("=" * 60)
    print(f"Output: {OUTPUT_PATH}\n")

    success = generate_blog_hero()

    if success:
        print("\n✅ ERFOLG - Bild wurde generiert und gespeichert!")
    else:
        print("\n❌ FEHLER - Bild konnte nicht generiert werden")

    exit(0 if success else 1)
