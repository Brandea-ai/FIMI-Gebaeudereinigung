#!/usr/bin/env python3
"""Generiert das Winterdienst Bayern Blog Hero Bild im PNG Format."""

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
    # Winterdienst Bayern Pflichten & Haftung Hero Image
    image_name = "winterdienst-bayern-pflichten-haftung-bgh-urteil-2025-hero"

    prompt = """GENERATE A PROFESSIONAL WINTER SERVICE IMAGE - Wide Panoramic Format (21:9 aspect ratio)

Create a photorealistic image of professional snow clearing equipment at a Bavarian commercial property entrance in winter.

SCENE COMPOSITION (Ultra-wide 21:9 format):
- A cleared pathway through fresh snow
- Professional snow clearing equipment visible:
  * Orange safety shovels positioned on or near the pathway
  * A salt/grit spreader (small wheeled device) on the cleared path
  * Orange and white warning cones placed strategically
- Fresh, pristine white snow on both sides of the cleared pathway
- Typical Bavarian commercial building entrance or storefront in the background
- The composition should be arranged horizontally to fill the wide panoramic format

LIGHTING & ATMOSPHERE:
- Soft morning light
- Winter atmosphere with blue-grey sky
- Professional maintenance scene
- Clean, well-maintained appearance
- Subtle shadows from equipment and snow piles

CRITICAL REQUIREMENTS - ABSOLUTELY FORBIDDEN:
- NO people in the image
- NO hands visible
- NO faces
- NO body parts at all
- NO logos or brand names on any items

STYLE:
- Photorealistic, professional photography
- Ultra-wide panoramic composition (21:9 aspect ratio)
- Sharp focus, high resolution
- Modern, professional aesthetic
- Suitable for a blog hero banner about winter service obligations

The image should convey professional winter maintenance, safety equipment, and responsible snow clearing service in a Bavarian commercial setting."""

    success = generate_blog_hero(image_name, prompt)
    sys.exit(0 if success else 1)
