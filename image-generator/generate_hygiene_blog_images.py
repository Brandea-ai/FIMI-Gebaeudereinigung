#!/usr/bin/env python3
"""
Generate workplace hygiene blog images using Google Gemini 3 Pro Image
Creates two images: preview (1408x768) and hero (1584x672)
"""

import os
import time
from pathlib import Path
from google import genai
from google.genai import types
from PIL import Image
from io import BytesIO

def generate_image(prompt: str, aspect_ratio: str = "16:9", retries: int = 3) -> bytes:
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
    full_prompt = f"""{prompt}

CRITICAL REQUIREMENTS:
- NO PEOPLE, NO FACES, NO HANDS, NO HUMANS visible anywhere in the image
- Premium stock photography quality (Getty Images / Shutterstock level)
- Photorealistic, authentic documentation style
- Natural colors ONLY - whites, light greys, natural wood tones
- Natural daylight, bright and airy atmosphere
- Professional corporate aesthetic
- Ultra-clean, hygienic workspace theme
- High resolution, magazine-quality
- NO artificial colors or post-processing effects
- 4K quality, sharp details

Generate this image now."""

    for attempt in range(1, retries + 1):
        try:
            print(f"   Attempt {attempt}/{retries}...")

            # Generate image
            response = client.models.generate_content(
                model="gemini-3-pro-image-preview",
                contents=full_prompt,
                config=types.GenerateContentConfig(
                    response_modalities=["IMAGE"],
                    image_config=types.ImageConfig(
                        aspect_ratio=aspect_ratio
                    )
                )
            )

            # Extract image from response
            if response.candidates and response.candidates[0].content.parts:
                for part in response.candidates[0].content.parts:
                    if hasattr(part, 'inline_data') and part.inline_data:
                        return part.inline_data.data

            print(f"   No image data received on attempt {attempt}")
            if attempt < retries:
                time.sleep(10)

        except Exception as e:
            error_str = str(e)
            if "RESOURCE_EXHAUSTED" in error_str:
                wait_time = 30 * attempt
                print(f"   Rate limit reached - waiting {wait_time}s")
                time.sleep(wait_time)
            else:
                print(f"   Error: {error_str[:150]}")
                if attempt < retries:
                    time.sleep(15)

    raise Exception("Failed to generate image after all retries")

def save_image(image_data: bytes, filepath: str):
    """Save image data to file as PNG."""
    Path(filepath).parent.mkdir(parents=True, exist_ok=True)

    # Load image and save as PNG
    image = Image.open(BytesIO(image_data))

    # Convert RGBA to RGB if needed
    if image.mode == 'RGBA':
        image = image.convert('RGB')

    image.save(filepath, "PNG", quality=95)

    file_size_kb = os.path.getsize(filepath) / 1024
    print(f"   Saved: {filepath}")
    print(f"   Size: {image.size[0]}x{image.size[1]} pixels")
    print(f"   File size: {file_size_kb:.1f} KB")

def main():
    print("=" * 80)
    print("GENERATING WORKPLACE HYGIENE BLOG IMAGES")
    print("=" * 80)

    # Image 1: Preview (1408x768 = 16:9 aspect ratio)
    prompt1 = """Premium stock photography of an immaculately clean modern office workspace. Close-up view of a pristine white desk with hand sanitizer bottle, tissue box, spotlessly clean keyboard and monitor. Bright natural daylight streaming through windows creating an airy, fresh atmosphere. Magazine-quality interior photography with professional lighting. Natural neutral colors only - crisp whites, light greys, natural wood tones. Getty Images or Shutterstock quality. Photorealistic, high-end commercial photography. Ultra-clean, hygienic workspace aesthetic."""

    output1 = "/Users/brandea/Desktop/FIMI-Gebaeudereinigung/public/images/blog/hygiene-arbeitsplatz-standards-buero-bmas-baua.png"

    print("\n[1/2] Generating Preview Image (1408x768)")
    print("-" * 80)
    print(f"Prompt: {prompt1[:100]}...")
    print(f"Output: {output1}")

    try:
        img_data1 = generate_image(prompt1, aspect_ratio="16:9")
        save_image(img_data1, output1)
        print("   SUCCESS!\n")
    except Exception as e:
        print(f"   FAILED: {e}\n")
        return False

    # Wait between generations to avoid rate limits
    print("   Waiting 15s before next generation...")
    time.sleep(15)

    # Image 2: Hero (1584x672 = 21:9 ultra-wide aspect ratio)
    prompt2 = """Panoramic ultra-wide view of a spotlessly clean open-plan office environment. Multiple empty desks perfectly arranged in rows, each immaculately organized. Large floor-to-ceiling windows flooding space with natural daylight. Modern air purifier visible in corner, small green plants on desks. High-end architectural and interior photography like Architectural Digest or real estate luxury magazines. Authentic, realistic documentation style - natural lighting, no artificial post-processing colors. Natural palette: whites, light greys, wood, glass. Getty Images premium quality. Photorealistic commercial photography. Professional hygiene standards visible throughout."""

    output2 = "/Users/brandea/Desktop/FIMI-Gebaeudereinigung/public/images/blog/hygiene-arbeitsplatz-standards-buero-bmas-baua-hero.png"

    print("\n[2/2] Generating Hero Image (1584x672 ultra-wide)")
    print("-" * 80)
    print(f"Prompt: {prompt2[:100]}...")
    print(f"Output: {output2}")

    try:
        # Try 21:9 first, fall back to 16:9 if needed
        try:
            img_data2 = generate_image(prompt2, aspect_ratio="21:9")
        except Exception as e:
            print(f"   21:9 failed, trying 16:9: {str(e)[:100]}")
            img_data2 = generate_image(prompt2, aspect_ratio="16:9")

        save_image(img_data2, output2)
        print("   SUCCESS!\n")
    except Exception as e:
        print(f"   FAILED: {e}\n")
        return False

    print("=" * 80)
    print("ALL IMAGES GENERATED SUCCESSFULLY!")
    print("=" * 80)
    return True

if __name__ == "__main__":
    success = main()
    exit(0 if success else 1)
