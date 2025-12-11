#!/usr/bin/env python3
"""
Generate hero image for hygiene-arbeitsplatz-standards-buero-bmas-baua blog post
Uses Google Vertex AI Gemini Pro Image model
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
OUTPUT_PATH = PROJECT_ROOT / "public" / "images" / "blog" / "hygiene-arbeitsplatz-standards-buero-bmas-baua-hero.png"

MODEL_NAME = "gemini-3-pro-image-preview"

# Set credentials
os.environ["GOOGLE_APPLICATION_CREDENTIALS"] = str(CREDENTIALS_PATH)

# Initialize client
client = genai.Client(
    vertexai=True,
    project="fimi-bilder",
    location="global"
)

def generate_image(prompt: str, retries: int = 5):
    """Generate image using Vertex AI Gemini Pro Image model."""

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

                        # Convert RGBA to RGB if needed
                        if img.mode == 'RGBA':
                            img = img.convert('RGB')

                        # Ensure output directory exists
                        OUTPUT_PATH.parent.mkdir(parents=True, exist_ok=True)

                        # Save as PNG
                        img.save(OUTPUT_PATH, 'PNG')
                        print(f"✅ Image saved: {OUTPUT_PATH}")
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

def main():
    prompt = """GENERATE A PHOTOREALISTIC IMAGE - Modern Clean Office (21:9 Ultra-Wide Format)

Create a professional, photorealistic wide panoramic photograph of a perfectly clean modern open-plan office.

SCENE REQUIREMENTS:
- Ultra-wide panoramic view (21:9 aspect ratio)
- Modern open-plan office layout with multiple workstations
- Gleaming clean desks and surfaces
- Hand sanitizer stations/dispensers visible
- Air purifiers placed throughout the office
- Professional cleaning supplies neatly arranged (spray bottles, microfiber cloths)
- Large windows with bright natural daylight
- Bright, sterile, healthy atmosphere
- Contemporary office furniture

CRITICAL - ABSOLUTELY FORBIDDEN:
- NO people in the image
- NO hands visible
- NO faces visible
- NO human body parts of any kind
- The office must be completely empty of people

STYLE:
- Photorealistic professional architectural photography
- Bright natural daylight from windows
- Clean, modern aesthetic
- High resolution, sharp details
- Wide-angle perspective to emphasize the panoramic ultra-wide format
- Colors should complement teal/turquoise and professional blue tones

The image should showcase a pristine, hygienically maintained modern office environment - the result of professional cleaning services."""

    print("=" * 70)
    print("FIMI Blog Image Generator - Hygiene Hero Image")
    print("=" * 70)
    print(f"\nOutput: {OUTPUT_PATH}")
    print(f"\nModel: {MODEL_NAME}")
    print("\nGenerating image...")
    print("-" * 70)

    success = generate_image(prompt)

    print("=" * 70)
    if success:
        print("✓ SUCCESS - Image generated and saved!")
    else:
        print("✗ FAILED - Could not generate image after multiple attempts")
    print("=" * 70)

    return 0 if success else 1

if __name__ == "__main__":
    exit(main())
