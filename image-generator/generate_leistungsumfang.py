#!/usr/bin/env python3
"""Generiert Leistungsumfang Bilder für Büröreinigung."""

import os
import sys
import time
from pathlib import Path
from io import BytesIO

from google import genai
from google.genai import types
from PIL import Image

SCRIPT_DIR = Path(__file__).parent
PROJECT_ROOT = SCRIPT_DIR.parent
CREDENTIALS_PATH = SCRIPT_DIR / "credentials" / "fimi-bilder-credentials.json"
PUBLIC_DIR = PROJECT_ROOT / "public" / "images" / "leistungen" / "bueroreinigung"

MODEL_NAME = "gemini-3-pro-image-preview"

os.environ["GOOGLE_APPLICATION_CREDENTIALS"] = str(CREDENTIALS_PATH)

client = genai.Client(
    vertexai=True,
    project="fimi-bilder",
    location="global"
)

def generate_image(output_filename: str, prompt: str, retries: int = 5):
    for attempt in range(1, retries + 1):
        try:
            print(f"🔄 Generiere Bild... (Versuch {attempt}/{retries})")
            print(f"Prompt: {prompt[:100]}...")

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

                        # Create directory if it doesn't exist
                        PUBLIC_DIR.mkdir(parents=True, exist_ok=True)

                        # Save as PNG at target resolution (1400x900)
                        target_width = 1400
                        target_height = 900

                        # Resize to target dimensions
                        img_resized = img.resize((target_width, target_height), Image.Resampling.LANCZOS)

                        output_path = PUBLIC_DIR / output_filename
                        img_resized.save(output_path, 'PNG')

                        print(f"✅ {output_filename} gespeichert ({img_resized.size[0]}x{img_resized.size[1]})")
                        print(f"Pfad: {output_path}")
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
    prompt = """Professional product photography of professional cleaning supplies neatly arranged on a white surface. Microfiber cloths in soft blue, yellow, and green colors folded precisely. Clear spray bottles with cleaning solution, a professional squeegee, a modern mop head, and eco-friendly cleaning products in minimalist packaging. Bright studio lighting with soft shadows. Clean, organized composition like a commercial catalog photo. High-end advertising photography quality. Natural neutral colors - whites, soft pastels, light wood tones. NO PEOPLE, NO HANDS, NO FACES. NO corporate branding colors, NO teal or dark blue accents. Photorealistic, sharp details, white or light grey background."""

    output_filename = "leistungsumfang-1.png"

    success = generate_image(output_filename, prompt)
    sys.exit(0 if success else 1)
