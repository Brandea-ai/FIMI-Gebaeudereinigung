#!/usr/bin/env python3
"""
Generate hero image for digitalisierung blog post using Claude API
"""

import anthropic
import base64
import os
from pathlib import Path

def generate_image(prompt: str) -> bytes:
    """Generate an image using Claude's image generation capability."""
    client = anthropic.Anthropic()

    # For hero images (21:9), use landscape
    actual_size = "1792x1024"

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
    with open(filepath, 'wb') as f:
        f.write(image_data)
    print(f"✓ Saved: {filepath}")

def main():
    output_path = Path("/Users/brandea/Desktop/FIMI-Gebaeudereinigung/public/images/blog/digitalisierung-gebaeudereinigung-2025-ki-robotik-iot-hero.png")
    output_path.parent.mkdir(parents=True, exist_ok=True)

    prompt = "Wide panoramic view (21:9 aspect ratio) of modern cleaning technology: an autonomous cleaning robot, a tablet displaying IoT sensor data and cleaning schedules, smart home devices, and sensor equipment. Professional facility management setting with subtle blue tech lighting. No people, no hands, no faces. Ultra-wide composition."

    print("=" * 60)
    print("Generating Digitalisierung Hero Image")
    print("=" * 60)
    print(f"\nPrompt: {prompt}\n")

    try:
        print("Generating image via Claude API...")
        img_data = generate_image(prompt)
        save_image(img_data, str(output_path))

        # Check file size
        file_size = os.path.getsize(output_path)
        print(f"✓ File size: {file_size:,} bytes ({file_size / 1024:.1f} KB)")
        print(f"✓ Success! Image saved to: {output_path}")

    except Exception as e:
        print(f"✗ Error: {e}")
        return 1

    print("\n" + "=" * 60)
    return 0

if __name__ == "__main__":
    exit(main())
