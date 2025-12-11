#!/usr/bin/env python3
"""
Generate tariflohn blog images using Google Imagen 3.0
"""

import os
import time
import base64
from pathlib import Path
from google.cloud import aiplatform
from google.cloud.aiplatform.gapic.schema import predict
from PIL import Image
from io import BytesIO

def generate_image_imagen(prompt: str) -> bytes:
    """Generate an image using Google Imagen 3.0."""
    # Setup credentials
    credentials_path = "/Users/brandea/Desktop/FIMI-Gebaeudereinigung/image-generator/credentials/fimi-bilder-credentials.json"
    os.environ["GOOGLE_APPLICATION_CREDENTIALS"] = credentials_path

    # Initialize AI Platform
    aiplatform.init(
        project="fimi-bilder",
        location="europe-west1"
    )

    # Create endpoint
    endpoint = aiplatform.Endpoint(
        endpoint_name=f"projects/fimi-bilder/locations/europe-west1/publishers/google/models/imagen-3.0-generate-002"
    )

    # Prepare request
    instances = [
        {
            "prompt": prompt
        }
    ]

    parameters = {
        "sampleCount": 1,
        "aspectRatio": "16:9",
        "negativePrompt": "people, faces, hands, person, human, man, woman, child, corporate colors, teal, dark blue, filters, artificial colors",
        "safetySetting": "block_some",
        "personGeneration": "dont_allow"
    }

    # Generate image
    response = endpoint.predict(instances=instances, parameters=parameters)

    # Extract image from response
    if response.predictions:
        prediction = response.predictions[0]
        if "bytesBase64Encoded" in prediction:
            return base64.b64decode(prediction["bytesBase64Encoded"])

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
    print("Generating Tariflohn Blog Images with Imagen 3.0")
    print("=" * 80)

    # Image 1: Preview
    prompt1 = """Professional high-end stock photography: Euro banknotes (10, 20, 50 euro notes) and coins scattered naturally on a clean white modern office desk, alongside a sleek calculator and official German payslip documents. Warm natural office lighting from a window, creating soft realistic shadows. Authentic composition like top-tier Getty Images or Shutterstock editorial photos. Natural neutral color palette with warm tones - pristine whites, soft beiges, natural light oak desk surface, authentic Euro currency colors. Clean professional business setting. Sharp photorealistic focus. Natural daylight atmosphere. Stock photography realism. No people, no hands, no faces."""

    output_path1 = "/Users/brandea/Desktop/FIMI-Gebaeudereinigung/public/images/blog/tariflohn-gebaeudereinigung-2025-2026.png"

    print(f"\n[1/2] Generating Preview Image")
    print(f"Output: {output_path1}")
    print("\nGenerating...")

    try:
        img_data1 = generate_image_imagen(prompt1)
        save_image(img_data1, output_path1)
        print("✓ Preview image complete!")
    except Exception as e:
        print(f"✗ Error generating preview: {e}")
        raise

    # Wait between API calls
    print("\nWaiting 10 seconds before generating next image...")
    time.sleep(10)

    # Image 2: Hero
    prompt2 = """Professional ultra-wide panoramic stock photography: Accountant's office desk photographed from elevated angle in wide composition. Euro banknotes (10, 20, 50 euro notes) and coins arranged naturally across desk surface, official German financial documents and payslips, modern silver calculator, reading glasses, quality pen. Warm natural window lighting from side creating authentic soft shadows. Editorial photography quality like high-end business magazines. Natural neutral color palette - clean whites, warm beiges and creams, natural light wood desk tone, authentic Euro currency colors. Realistic modern office atmosphere with subtle depth of field. Photorealistic, magazine-quality composition. Wide panoramic view. No people, no hands, no faces. No artificial color grading. Authentic natural daylight photography. Premium stock photo quality."""

    output_path2 = "/Users/brandea/Desktop/FIMI-Gebaeudereinigung/public/images/blog/tariflohn-gebaeudereinigung-2025-2026-hero.png"

    print(f"\n[2/2] Generating Hero Image")
    print(f"Output: {output_path2}")
    print("\nGenerating...")

    try:
        img_data2 = generate_image_imagen(prompt2)
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

if __name__ == "__main__":
    main()
