#!/usr/bin/env python3
"""
Generate ONLY the hero image for fachkraeftemangel blog using Google Gemini 3 Pro Image
- Hero image (1584x672 ultra-wide)
"""

import os
from pathlib import Path
from google import genai
from google.genai import types
from PIL import Image
from io import BytesIO

def generate_image(prompt: str, aspect_ratio: str = "21:9") -> bytes:
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
- Professional stock photography quality
- Business/HR office setting, authentic and realistic
- Natural office colors: browns, beiges, whites, warm wood tones
- Bright natural lighting
- Sharp details, clean composition
- Colors should complement teal (#109387) and dark blue (#012956)
- Photorealistic, not AI-generated looking
- High resolution, print-ready quality

Image description: {prompt}

Generate this image now."""

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

def save_image(image_data: bytes, filepath: str, target_size: tuple = None):
    """Save image data to file as PNG, optionally resize."""
    Path(filepath).parent.mkdir(parents=True, exist_ok=True)

    # Load image
    image = Image.open(BytesIO(image_data))

    # Resize if target size specified
    if target_size:
        image = image.resize(target_size, Image.Resampling.LANCZOS)

    # Save as PNG
    image.save(filepath, "PNG")

    print(f"✓ Saved: {filepath}")
    print(f"  Size: {image.size[0]}x{image.size[1]} pixels")

def main():
    print("=" * 80)
    print("Generating Fachkräftemangel Hero Image")
    print("=" * 80)

    # Hero Image (1584x672 ultra-wide)
    print("\nHERO IMAGE (1584x672)")
    print("-" * 80)
    prompt = """Wide panoramic professional stock photograph of a modern HR office or conference room. Ultra-wide composition capturing the full breadth of the space. Large bulletin board on the wall displaying multiple job postings and recruitment materials. Substantial stack of resumes and application documents arranged on a contemporary conference table. Empty modern conference table with several chairs around it. Clean whiteboard visible with recruitment planning notes or organizational charts. Bright natural daylight streaming through windows, illuminating the entire office space. Editorial business photography aesthetic with realistic contemporary office atmosphere. Neutral professional color palette - whites, soft grays, natural wood furniture, subtle blues. No people present anywhere in the frame. Ultra-wide 21:9 cinematic aspect ratio showing expansive office view."""

    output = "/Users/brandea/Desktop/FIMI-Gebaeudereinigung/public/images/blog/fachkraeftemangel-gebaeudereinigung-loesungen-2025-hero.png"

    print(f"Prompt: {prompt[:150]}...")
    print(f"Output: {output}")
    print("\nGenerating...")

    try:
        img_data = generate_image(prompt, aspect_ratio="21:9")
        save_image(img_data, output, target_size=(1584, 672))
        print("\n✓ Hero image generation complete!")
        print("=" * 80)
    except Exception as e:
        print(f"\n✗ Error: {e}")
        print("\nIf you see RESOURCE_EXHAUSTED error, please wait a few minutes and try again.")
        raise

if __name__ == "__main__":
    main()
