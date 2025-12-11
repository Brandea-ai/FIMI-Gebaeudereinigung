#!/usr/bin/env python3
"""Generiert Leistungsumfang-1 Bild für Büroreinigung: VERMOP Cleaning Cart with BLUE equipment."""

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
OUTPUT_DIR = PROJECT_ROOT / "public" / "images" / "leistungen" / "bueroreinigung"

MODEL_NAME = "gemini-3-pro-image-preview"

os.environ["GOOGLE_APPLICATION_CREDENTIALS"] = str(CREDENTIALS_PATH)

client = genai.Client(
    vertexai=True,
    project="fimi-bilder",
    location="global"
)

def generate_image(retries: int = 5):
    prompt = """Fotorealistisches Produktfoto eines professionellen Reinigungswagens.

Zeige einen echten, hochwertigen Reinigungswagen wie er in deutschen Büros verwendet wird. Blaue Eimer, Mopp, Sprühflaschen. Studiofoto mit weißem Hintergrund.

Nur EIN Bild, keine Collage."""

    for attempt in range(1, retries + 1):
        try:
            print(f"🔄 Generating image... (Attempt {attempt}/{retries})")

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

                        # Save as AVIF
                        output_path = OUTPUT_DIR / "leistungsumfang-1.avif"
                        img.save(output_path, 'AVIF', quality=85)
                        print(f"✅ Image saved: {output_path} ({img.size[0]}x{img.size[1]})")

                        # Save preview PNG
                        preview_path = OUTPUT_DIR / "leistungsumfang-1-preview.png"
                        img.save(preview_path, 'PNG', optimize=True)
                        print(f"✅ Preview saved: {preview_path}")
                        return True

            print(f"⚠️ No image data (Attempt {attempt}/{retries})")
            if attempt < retries:
                time.sleep(20)

        except Exception as e:
            error_str = str(e)
            if "RESOURCE_EXHAUSTED" in error_str:
                wait_time = 30 * attempt
                print(f"⏳ Rate limit - waiting {wait_time}s")
                time.sleep(wait_time)
            else:
                print(f"⚠️ Error: {error_str[:100]}")
                if attempt < retries:
                    time.sleep(15)

    return False

if __name__ == "__main__":
    success = generate_image()
    sys.exit(0 if success else 1)
