#!/usr/bin/env python3
"""Generiert ein Blog Hero Bild für Schulreinigung im PNG Format."""

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
PUBLIC_DIR = PROJECT_ROOT / "public" / "images" / "blog"

MODEL_NAME = "gemini-3-pro-image-preview"

os.environ["GOOGLE_APPLICATION_CREDENTIALS"] = str(CREDENTIALS_PATH)

client = genai.Client(
    vertexai=True,
    project="fimi-bilder",
    location="global"
)

def generate_blog_hero(image_name: str, prompt: str, retries: int = 5):
    """Generate blog hero image and save as PNG."""

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

                        # Convert RGBA to RGB if needed
                        if img.mode == 'RGBA':
                            # Create white background
                            background = Image.new('RGB', img.size, (255, 255, 255))
                            background.paste(img, mask=img.split()[3])
                            img = background

                        # Ensure directory exists
                        PUBLIC_DIR.mkdir(parents=True, exist_ok=True)

                        # Save as PNG
                        output_path = PUBLIC_DIR / f"{image_name}.png"
                        img.save(output_path, 'PNG', optimize=True)

                        print(f"✅ {image_name}.png gespeichert ({img.size[0]}x{img.size[1]})")
                        print(f"📁 Pfad: {output_path}")
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
    # Schulreinigung Bayern Rahmenhygieneplan Hero Image
    image_name = "schulreinigung-bayern-rahmenhygieneplan-hygienestandards-hero"

    prompt = """GENERATE A PROFESSIONAL INTERIOR IMAGE - Wide Panoramic Format (21:9 aspect ratio)

Create a photorealistic image of an immaculately clean, empty German classroom in Bavaria.

SCENE COMPOSITION (Ultra-wide 21:9 format):
- Rows of clean wooden desks and chairs neatly arranged in perfect order
- A spotless green or black chalkboard (Tafel) on the front wall
- Large windows with natural daylight streaming in, creating a bright atmosphere
- A hand sanitizer dispenser station mounted on the wall or standing near the entrance
- Gleaming, polished floor reflecting the natural light (linoleum or wood)
- Clean white or light-colored walls
- Perhaps a clock on the wall, bulletin board, or educational posters in the background
- The room should feel welcoming, bright, and hygienically maintained

LIGHTING & ATMOSPHERE:
- Abundant natural daylight from large windows
- Bright, welcoming educational environment
- Professional interior photography lighting
- Clean, crisp, well-lit space
- Subtle shadows that add depth without making it dark

CRITICAL REQUIREMENTS - ABSOLUTELY FORBIDDEN:
- NO people in the image whatsoever
- NO hands visible
- NO faces
- NO human body parts of any kind
- NO students
- NO teachers
- NO cleaning staff
- NO cleaning equipment or tools visible
- NO logos or brand names
- The classroom must be completely EMPTY of people

STYLE:
- Photorealistic, professional interior photography
- Ultra-wide panoramic composition (21:9 aspect ratio)
- Sharp focus, high resolution, high detail
- Modern, clean, hygienic aesthetic
- Suitable for a blog hero banner about school cleaning and hygiene standards
- The image should convey cleanliness, order, and a welcoming educational environment

The image should emphasize the cleanliness and hygiene of the space, perfect for an article about school cleaning standards and hygiene protocols in Bavaria."""

    success = generate_blog_hero(image_name, prompt)
    sys.exit(0 if success else 1)
