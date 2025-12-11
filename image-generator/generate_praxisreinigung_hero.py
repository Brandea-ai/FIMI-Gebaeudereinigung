#!/usr/bin/env python3
"""
Generate medical examination room hero image for praxisreinigung blog post
"""

import os
import time
from pathlib import Path
from io import BytesIO

from google import genai
from google.genai import types
from PIL import Image

SCRIPT_DIR = Path(__file__).parent
PROJECT_ROOT = SCRIPT_DIR.parent
CREDENTIALS_PATH = SCRIPT_DIR / "credentials" / "fimi-bilder-credentials.json"
OUTPUT_DIR = PROJECT_ROOT / "public" / "images" / "blog"

MODEL_NAME = "gemini-3-pro-image-preview"

os.environ["GOOGLE_APPLICATION_CREDENTIALS"] = str(CREDENTIALS_PATH)

client = genai.Client(
    vertexai=True,
    project="fimi-bilder",
    location="global"
)

def generate_image(retries: int = 5):
    prompt = """GENERIERE EIN FOTOREALISTISCHES BILD - Medizinischer Untersuchungsraum

Erstelle ein professionelles, fotorealistisches Bild eines LEEREN, SAUBEREN medizinischen Untersuchungsraums (Arztpraxis).

SZENE:
- Moderner, sauberer Untersuchungsraum in einer Arztpraxis
- Untersuchungsliege mit frischem Einmalüberzug, professionell desinfiziert
- Medizinische Geräte (Blutdruckmessgerät, Stethoskop, medizinische Instrumente) organisiert und steril
- Desinfektionsmittel und medizinische Reinigungsprodukte sichtbar
- Helle, klinische Beleuchtung
- Weiße/helle Oberflächen, alles glänzend sauber
- Medizinschrank mit geordneten Materialien

KRITISCH - VERBOTEN:
- KEINE Menschen im Bild
- KEINE Gesichter, Hände oder Körperteile
- KEINE Patienten oder medizinisches Personal
- KEINE Logos oder Markenzeichen

STIL:
- Fotorealistisch, professionelle Medizinfotografie
- Helle, klinische Atmosphäre
- Panorama-Format (21:9), Weitwinkel
- Sterile, hygienische Ausstrahlung
- Hohe Auflösung, scharfe Details
- Farben: Weiß, helle Blautöne, metallische Akzente

Das Bild soll einen perfekt gereinigten Untersuchungsraum zeigen - das Ergebnis professioneller medizinischer Reinigung nach RKI/KRINKO-Standards."""

    for attempt in range(1, retries + 1):
        try:
            print(f"🔄 Generiere Bild... (Versuch {attempt}/{retries})")

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

                        OUTPUT_DIR.mkdir(parents=True, exist_ok=True)

                        output_path = OUTPUT_DIR / "praxisreinigung-rki-krinko-richtlinien-hygiene-gesundheitswesen-hero.png"
                        img.save(output_path, 'PNG')
                        print(f"✅ Bild gespeichert: {output_path} ({img.size[0]}x{img.size[1]})")
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
                print(f"⚠️ Fehler: {error_str[:100]}")
                if attempt < retries:
                    time.sleep(15)

    return False

def main():
    print("=" * 60)
    print("Generating Medical Examination Room Hero Image")
    print("=" * 60)
    print("\nModel: gemini-3-pro-image-preview")
    print(f"Output: {OUTPUT_DIR}/praxisreinigung-rki-krinko-richtlinien-hygiene-gesundheitswesen-hero.png")
    print("\nGenerating image...")

    success = generate_image()

    if success:
        print("\n✅ Image generation complete!")
    else:
        print("\n❌ Image generation failed")
        return 1

    return 0

if __name__ == "__main__":
    exit(main())
