#!/usr/bin/env python3
"""
Generate two blog images for "Digitalisierung in der Gebaeudereinigung 2025"
Using Google Gemini 3 Pro Image
"""

import os
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

    # Build the full prompt with style guide
    full_prompt = f"""Generate a professional, photorealistic image for a German building cleaning company's blog.

IMPORTANT REQUIREMENTS:
- NO PEOPLE, NO FACES, NO HANDS visible in the image
- Professional stock photo quality like you'd see in tech magazines (Wired, Bloomberg Businessweek)
- High quality, sharp details, photorealistic
- Natural lighting only - NO artificial colored lighting, NO color grading
- Neutral colors: white, grey, black, silver, natural wood tones
- Modern, clean aesthetic suitable for corporate blog
- 4K resolution, print-ready quality
- Authentic, realistic - not AI-generated looking

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
    """Save image data to file as PNG, optionally resizing to exact dimensions."""
    Path(filepath).parent.mkdir(parents=True, exist_ok=True)

    # Load image
    image = Image.open(BytesIO(image_data))

    # Resize if target size specified
    if target_size:
        image = image.resize(target_size, Image.Resampling.LANCZOS)

    # Save as PNG
    image.save(filepath, "PNG", optimize=True)

    print(f"✓ Saved: {filepath}")
    print(f"  Size: {image.size[0]}x{image.size[1]} pixels")

def main():
    print("=" * 80)
    print("Generating Blog Images: Digitalisierung in der Gebaeudereinigung 2025")
    print("=" * 80)

    # Image 1: Preview (1408x768)
    prompt1 = """Professional stock photography of a modern robotic vacuum cleaner in a sleek corporate office lobby. Next to the robot is a tablet device displaying data analytics and charts. Clean minimalist interior design with marble or polished concrete floors. Large windows providing natural daylight. High-end technology photography style. Neutral color palette: white walls, grey floors, black and silver robot, glass and steel accents. Realistic lighting, no artificial colored lights. Sharp focus, professional composition. No people whatsoever."""

    output1 = "/Users/brandea/Desktop/FIMI-Gebaeudereinigung/public/images/blog/digitalisierung-gebaeudereinigung-2025-ki-robotik-iot.png"

    print(f"\n[1/2] Generating Preview Image (1408x768)...")
    print(f"Prompt: {prompt1[:100]}...")
    print(f"Output: {output1}")

    try:
        img_data1 = generate_image(prompt1, aspect_ratio="16:9")
        save_image(img_data1, output1, target_size=(1408, 768))
        print("✓ Preview image complete!")
    except Exception as e:
        print(f"✗ Error generating preview image: {e}")
        raise

    # Image 2: Hero (1584x672 ultra-wide)
    prompt2 = """Ultra-wide panoramic professional stock photography of a modern smart building lobby with autonomous cleaning robot working on polished floors. Digital information displays and IoT sensor equipment visible on walls. Contemporary architecture with floor-to-ceiling glass windows flooding the space with natural daylight. Minimalist corporate design. Premium editorial photography quality like Architectural Digest or corporate annual reports. Realistic authentic colors - white, grey, natural wood tones, chrome accents. No color grading or filters. No people in the scene whatsoever. Sharp, professional, photorealistic. Wide angle composition."""

    output2 = "/Users/brandea/Desktop/FIMI-Gebaeudereinigung/public/images/blog/digitalisierung-gebaeudereinigung-2025-ki-robotik-iot-hero.png"

    print(f"\n[2/2] Generating Hero Image (1584x672 ultra-wide)...")
    print(f"Prompt: {prompt2[:100]}...")
    print(f"Output: {output2}")

    try:
        # Use ultra-wide aspect ratio for hero image
        img_data2 = generate_image(prompt2, aspect_ratio="21:9")
        save_image(img_data2, output2, target_size=(1584, 672))
        print("✓ Hero image complete!")
    except Exception as e:
        print(f"✗ Error generating hero image: {e}")
        raise

    print("\n" + "=" * 80)
    print("✓ Both images generated successfully!")
    print("=" * 80)

if __name__ == "__main__":
    main()
