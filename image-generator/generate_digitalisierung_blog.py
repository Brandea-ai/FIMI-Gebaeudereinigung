#!/usr/bin/env python3
"""Generate blog image for digitalisierung-gebaeudereinigung-2025-ki-robotik-iot"""

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
OUTPUT_PATH = PROJECT_ROOT / "public" / "images" / "blog" / "digitalisierung-gebaeudereinigung-2025-ki-robotik-iot.png"

MODEL_NAME = "gemini-3-pro-image-preview"

os.environ["GOOGLE_APPLICATION_CREDENTIALS"] = str(CREDENTIALS_PATH)

client = genai.Client(
    vertexai=True,
    project="fimi-bilder",
    location="global"
)

def generate_blog_image(retries: int = 5):
    prompt = """Generate a professional, photorealistic image for a German building cleaning company's blog article about digitalization in facility management.

SCENE:
- Modern autonomous cleaning robot (Roomba-style floor cleaner) in the foreground
- Professional tablet computer displaying cleaning schedules, IoT dashboard with graphs and sensor data
- Modern, clean facility management setting (office or commercial building)
- Blue accent lighting (subtle LED strips or ambient tech lighting)
- Clean, professional aesthetic

TECHNOLOGY ELEMENTS:
- The robot should look modern and professional (white/gray housing, blue LED indicators)
- Tablet screen clearly showing dashboard interface with:
  * Calendar/schedule grid
  * IoT sensor data visualization
  * Graphs or metrics
- Futuristic but realistic and practical

LIGHTING & STYLE:
- Professional facility management environment
- Blue accent lighting to emphasize technology theme
- Clean, bright, modern atmosphere
- Photorealistic, high quality
- Corporate/professional aesthetic

CRITICAL REQUIREMENTS:
- NO PEOPLE in the image
- NO HANDS visible
- NO FACES visible
- NO cleaning staff or workers
- NO logos or brand names (no Kärcher, FIMI, iRobot etc.)
- Focus purely on the technology and equipment

COMPOSITION:
- Landscape orientation suitable for blog header
- Main focus on the robot and tablet
- Professional, inviting atmosphere
- Shows innovation and modern technology in cleaning industry"""

    for attempt in range(1, retries + 1):
        try:
            print(f"🔄 Generating blog image... (Attempt {attempt}/{retries})")

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

                        # Ensure output directory exists
                        OUTPUT_PATH.parent.mkdir(parents=True, exist_ok=True)

                        # Save as PNG
                        img.save(OUTPUT_PATH, 'PNG', optimize=True)
                        print(f"✅ Image saved to {OUTPUT_PATH}")
                        print(f"   Size: {img.size[0]}x{img.size[1]} pixels")
                        return True

            print(f"⚠️ No image data received (Attempt {attempt}/{retries})")
            if attempt < retries:
                time.sleep(20)

        except Exception as e:
            error_str = str(e)
            if "RESOURCE_EXHAUSTED" in error_str:
                wait_time = 30 * attempt
                print(f"⏳ Rate limit reached - waiting {wait_time}s")
                time.sleep(wait_time)
            else:
                print(f"⚠️ Error: {error_str[:200]}")
                if attempt < retries:
                    time.sleep(15)

    return False

if __name__ == "__main__":
    print("=" * 70)
    print("FIMI Blog Image Generator - Digitalisierung 2025")
    print("=" * 70)
    print()

    success = generate_blog_image()

    if success:
        print()
        print("=" * 70)
        print("✅ SUCCESS - Image generated and saved!")
        print("=" * 70)
        exit(0)
    else:
        print()
        print("=" * 70)
        print("❌ FAILED - Could not generate image after all retries")
        print("=" * 70)
        exit(1)
