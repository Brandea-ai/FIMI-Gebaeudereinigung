#!/usr/bin/env python3
"""Generiert Leistungsumfang-1 Bild: Professional Cleaning Supplies."""

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
OUTPUT_DIR = PROJECT_ROOT / "public" / "images" / "leistungen" / "unterhaltsreinigung"

MODEL_NAME = "gemini-3-pro-image-preview"

os.environ["GOOGLE_APPLICATION_CREDENTIALS"] = str(CREDENTIALS_PATH)

client = genai.Client(
    vertexai=True,
    project="fimi-bilder",
    location="global"
)

def generate_image(retries: int = 5):
    prompt = """Professional product photography of cleaning supplies and equipment.

SCENE:
- High-quality product photography on a clean, light surface (white or light grey)
- Professional cleaning supplies arranged aesthetically and organized
- Microfiber cloths in different colors: blue, yellow, green (neatly folded or stacked)
- Clear spray bottles with cleaning solutions
- Professional mop head (white/blue microfiber)
- Window squeegee with blue rubber blade
- All items beautifully arranged like a premium catalog photo

CRITICAL - FORBIDDEN:
- NO people in the image
- NO hands visible
- NO person holding or touching anything
- NO cleaning action or activity
- NO logos or brand names on products

STYLE:
- Commercial product photography quality
- Soft, even studio lighting
- Clean white or light neutral background
- Sharp focus, high resolution
- Natural, realistic colors (actual cleaning supply colors)
- Professional catalog aesthetic
- The image should look like high-end product photography for a cleaning supplies catalog

The image should showcase professional cleaning equipment in an attractive, organized arrangement - like premium product photography."""

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

                        # Save as PNG at original size
                        output_path = OUTPUT_DIR / "leistungsumfang-1.png"
                        img.save(output_path, 'PNG', optimize=True)
                        print(f"✅ Image saved: {output_path} ({img.size[0]}x{img.size[1]})")
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
