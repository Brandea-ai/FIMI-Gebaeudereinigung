#!/usr/bin/env python3
"""
Generate fachkraeftemangel blog image using Google Gemini 3 Pro Image
"""

import os
from pathlib import Path
from google import genai
from google.genai import types
from PIL import Image
from io import BytesIO

def generate_image(prompt: str) -> bytes:
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
- 4K resolution, print-ready quality

Image description: {prompt}

Generate this image now."""

    # Generate image
    response = client.models.generate_content(
        model="gemini-3-pro-image-preview",
        contents=full_prompt,
        config=types.GenerateContentConfig(
            response_modalities=["IMAGE"],
            image_config=types.ImageConfig(
                aspect_ratio="16:9"
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
    # Image prompt
    prompt = "Recruitment theme: job posting board with 'Stellenangebot' signs in German, application folders, employer branding materials, team building puzzle pieces. Hiring challenge concept. No people, no hands, no faces. Professional corporate aesthetic, 1408x768 pixels."

    # Output path
    output_path = "/Users/brandea/Desktop/FIMI-Gebaeudereinigung/public/images/blog/fachkraeftemangel-gebaeudereinigung-loesungen-2025.png"

    print("=" * 60)
    print("Generating Fachkräftemangel Blog Image")
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
