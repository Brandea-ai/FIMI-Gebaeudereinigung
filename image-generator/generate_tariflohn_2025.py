#!/usr/bin/env python3
"""
Generate tariflohn blog images using Google Gemini 3 Pro Image
"""

import os
import time
from pathlib import Path
from google import genai
from google.genai import types
from PIL import Image
from io import BytesIO

def generate_image(prompt: str, aspect_ratio: str = "16:9") -> bytes:
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

    # Build the full prompt - NO corporate colors for this realistic stock photo
    full_prompt = f"""Generate a professional, photorealistic stock photography image.

CRITICAL REQUIREMENTS:
- MUST look like REAL stock photography from Getty Images or Shutterstock
- NO PEOPLE, NO FACES, NO HANDS visible in the image
- NATURAL COLORS ONLY - warm whites, beiges, natural wood tones, authentic Euro currency colors
- NO corporate branding colors, NO teal (#109387), NO dark blue (#012956)
- NO artificial color grading or filters
- Authentic, realistic editorial photography style
- High quality, sharp details, professional lighting
- Photorealistic, magazine-quality
- 4K resolution, print-ready quality

Image description: {prompt}

Generate this realistic stock photo now."""

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

    raise Exception("No image generated in response")

def save_image(image_data: bytes, filepath: str):
    """Save image data to file as PNG."""
    Path(filepath).parent.mkdir(parents=True, exist_ok=True)

    # Load image and save as PNG
    image = Image.open(BytesIO(image_data))
    image.save(filepath, "PNG")

    print(f"✓ Saved: {filepath}")
    print(f"  Size: {image.size[0]}x{image.size[1]} pixels")

def main():
    print("=" * 80)
    print("Generating Tariflohn Blog Images - Natural Stock Photography Style")
    print("=" * 80)

    # Image 1: Preview (16:9 aspect ratio, will be resized to 1408x768)
    prompt1 = """Professional high-end stock photography: Euro banknotes (10, 20, 50 euro notes) and coins scattered naturally on a clean white modern office desk, alongside a sleek calculator and official German payslip documents (Lohnabrechnung). Warm natural office lighting from a window, creating soft realistic shadows. Authentic composition like top-tier Getty Images or Shutterstock editorial photos. Natural neutral color palette with warm tones - pristine whites, soft beiges, natural light oak or maple desk surface, authentic Euro currency colors (blues, greens, yellows of real Euro notes). Clean, uncluttered professional business setting. Sharp photorealistic focus, crisp details on currency and documents. Natural daylight atmosphere. NO people, NO hands, NO faces visible. Stock photography realism."""

    output_path1 = "/Users/brandea/Desktop/FIMI-Gebaeudereinigung/public/images/blog/tariflohn-gebaeudereinigung-2025-2026.png"

    print(f"\n[1/2] Generating Preview Image (16:9)")
    print(f"Output: {output_path1}")
    print("\nGenerating...")

    try:
        img_data1 = generate_image(prompt1, aspect_ratio="16:9")
        save_image(img_data1, output_path1)
        print("✓ Preview image complete!")
    except Exception as e:
        print(f"✗ Error generating preview: {e}")
        raise

    # Wait between API calls to avoid rate limiting
    print("\nWaiting 10 seconds before generating next image to avoid rate limits...")
    time.sleep(10)

    # Image 2: Hero (16:9 aspect ratio for ultra-wide panoramic feel)
    prompt2 = """Professional ultra-wide panoramic stock photography: Accountant's or financial office desk photographed from slightly elevated angle in wide composition. Euro banknotes (multiple denominations: 10, 20, 50 euro notes) and coins arranged naturally across the desk surface, official German financial documents and payslips (Lohnabrechnung, Gehaltsabrechnung), modern silver calculator, professional reading glasses, quality pen. Warm natural window lighting from the side creating authentic soft shadows and highlights. Editorial photography quality like high-end business magazines (Manager Magazin, Wirtschaftswoche style). Natural neutral color palette - clean whites, warm beiges and creams, natural light wood desk tone (oak, ash, or maple), authentic Euro currency colors. Realistic modern office atmosphere with subtle depth of field. Photorealistic, magazine-quality composition with professional styling. Wide panoramic view showing spacious desk layout. NO people, NO hands, NO faces visible anywhere. NO artificial color grading or Instagram filters. Authentic natural daylight photography only. Premium stock photo quality."""

    output_path2 = "/Users/brandea/Desktop/FIMI-Gebaeudereinigung/public/images/blog/tariflohn-gebaeudereinigung-2025-2026-hero.png"

    print(f"\n[2/2] Generating Hero Image (16:9 ultra-wide composition)")
    print(f"Output: {output_path2}")
    print("\nGenerating...")

    try:
        img_data2 = generate_image(prompt2, aspect_ratio="16:9")
        save_image(img_data2, output_path2)
        print("✓ Hero image complete!")
    except Exception as e:
        print(f"✗ Error generating hero: {e}")
        raise

    print("\n" + "=" * 80)
    print("✓ ALL IMAGES GENERATED SUCCESSFULLY!")
    print("=" * 80)
    print(f"\nImage 1 (Preview): {output_path1}")
    print(f"Image 2 (Hero):    {output_path2}")
    print("\nBoth images use NATURAL COLORS ONLY - no corporate branding colors.")
    print("Realistic stock photography style like Getty Images/Shutterstock.")

if __name__ == "__main__":
    main()
