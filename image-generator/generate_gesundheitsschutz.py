#!/usr/bin/env python3
"""
Generate occupational health protection blog image using Google Gemini 3 Pro Image
"""

import os
import time
from pathlib import Path
from google import genai
from google.genai import types
from PIL import Image
from io import BytesIO

def generate_image(prompt: str, retries: int = 5) -> bytes:
    """Generate an image using Google Gemini 3 Pro Image."""
    # Setup credentials
    credentials_path = os.environ.get(
        "GOOGLE_APPLICATION_CREDENTIALS",
        "/Users/brandea/Desktop/FIMI-Gebaeudereinigung/image-generator/credentials/fimi-bilder-credentials.json"
    )
    os.environ["GOOGLE_APPLICATION_CREDENTIALS"] = credentials_path

    # Initialize client
    client = genai.Client(
        vertexai=True,
        project="fimi-bilder",
        location="global"
    )

    # Build the full prompt with style guide
    full_prompt = f"""Generate a professional, photorealistic image for a German building cleaning company's blog.

IMPORTANT REQUIREMENTS:
- NO PEOPLE, NO FACES, NO HANDS visible in the image
- Professional, clean aesthetic suitable for corporate blog
- High quality, sharp details
- Good lighting, modern look
- Colors should complement teal (#109387) and dark blue (#012956)
- Photorealistic, not AI-generated looking
- High resolution, print-ready quality

Image description: {prompt}

Generate this image now."""

    # Generate image with retries
    for attempt in range(1, retries + 1):
        try:
            print(f"🔄 Generating image... (Attempt {attempt}/{retries})")

            response = client.models.generate_content(
                model="gemini-3-pro-image-preview",
                contents=[full_prompt],
                config=types.GenerateContentConfig(
                    response_modalities=["IMAGE", "TEXT"],
                )
            )

            # Extract image from response
            if response.candidates:
                for part in response.candidates[0].content.parts:
                    if hasattr(part, 'inline_data') and part.inline_data:
                        return part.inline_data.data

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

    raise Exception("No image generated after all retries")

def save_image(image_data: bytes, filepath: str):
    """Save image data to file."""
    Path(filepath).parent.mkdir(parents=True, exist_ok=True)
    with open(filepath, 'wb') as f:
        f.write(image_data)
    print(f"✓ Saved: {filepath}")

def main():
    # Image prompt
    prompt = "Occupational health protection: ergonomic cleaning mop with adjustable handle, protective gloves in different colors, skin care cream tubes, back support belt. Worker health and safety focus. No people, no hands, no faces."

    # Output path
    output_path = "/Users/brandea/Desktop/FIMI-Gebaeudereinigung/public/images/blog/gesundheitsschutz-reinigung-ergonomie-hautschutz-bg-bau.png"

    print("=" * 60)
    print("Generating Occupational Health Protection Blog Image")
    print("=" * 60)
    print(f"\nPrompt: {prompt}")
    print(f"\nOutput: {output_path}")
    print("\nGenerating image...")

    try:
        img_data = generate_image(prompt)
        save_image(img_data, output_path)
        print("\n✓ Image generation complete!")
    except Exception as e:
        print(f"\n✗ Error: {e}")
        raise

if __name__ == "__main__":
    main()
