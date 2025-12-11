#!/usr/bin/env python3
"""
Generate career/training blog image using Claude's image generation
"""

import anthropic
import base64
import os
from pathlib import Path

def generate_image(prompt: str) -> bytes:
    """Generate an image using Claude's image generation capability."""
    client = anthropic.Anthropic()

    message = client.messages.create(
        model="claude-sonnet-4-20250514",
        max_tokens=1024,
        messages=[
            {
                "role": "user",
                "content": f"""Generate a professional, photorealistic image for a German building cleaning company's blog.

IMPORTANT REQUIREMENTS:
- NO PEOPLE, NO FACES, NO HANDS visible in the image
- Professional, clean aesthetic suitable for corporate blog
- High quality, sharp details
- Good lighting, modern look
- Colors should complement teal (#109387) and dark blue (#012956)

Image description: {prompt}

Generate this image now."""
            }
        ]
    )

    # Extract image from response
    for block in message.content:
        if block.type == "image":
            return base64.b64decode(block.source.data)

    raise Exception("No image generated in response")

def save_image(image_data: bytes, filepath: str):
    """Save image data to file."""
    Path(filepath).parent.mkdir(parents=True, exist_ok=True)
    with open(filepath, 'wb') as f:
        f.write(image_data)
    print(f"✓ Saved: {filepath}")

def main():
    # Image prompt
    prompt = "Career and training theme: German apprenticeship certificate (Gesellenbrief), professional cleaning equipment catalog, career ladder diagram, training manual. Achievement and growth focus. No people, no hands, no faces."

    # Output path
    output_path = "/Users/brandea/Desktop/FIMI-Gebaeudereinigung/public/images/blog/ausbildung-gebaeudereiniger-gehalt-karriere-2025.png"

    print("=" * 60)
    print("Generating Career/Training Blog Image")
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
