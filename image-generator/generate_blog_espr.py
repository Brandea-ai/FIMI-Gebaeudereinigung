#!/usr/bin/env python3
"""Generiert zwei Blog-Bilder für EU Ökodesign-Verordnung (ESPR) Artikel."""

import os
import time
from pathlib import Path
from io import BytesIO

from google import genai
from google.genai import types
from PIL import Image
import pillow_avif

SCRIPT_DIR = Path(__file__).parent
PROJECT_ROOT = SCRIPT_DIR.parent
CREDENTIALS_PATH = SCRIPT_DIR / "credentials" / "fimi-bilder-credentials.json"
BLOG_DIR = PROJECT_ROOT / "public" / "images" / "blog"

MODEL_NAME = "gemini-3-pro-image-preview"

os.environ["GOOGLE_APPLICATION_CREDENTIALS"] = str(CREDENTIALS_PATH)

client = genai.Client(
    vertexai=True,
    project="fimi-bilder",
    location="global"
)

def generate_image(image_name: str, width: int, height: int, prompt: str, retries: int = 5):
    """Generiert ein einzelnes Bild mit den gegebenen Dimensionen."""

    for attempt in range(1, retries + 1):
        try:
            print(f"🔄 Generiere {image_name} ({width}x{height})... (Versuch {attempt}/{retries})")

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

                        if img.mode == 'RGBA':
                            img = img.convert('RGB')

                        # Resize to exact dimensions
                        img_resized = img.resize((width, height), Image.Resampling.LANCZOS)

                        # Ensure blog directory exists
                        BLOG_DIR.mkdir(parents=True, exist_ok=True)

                        # Save as PNG
                        output_path = BLOG_DIR / image_name
                        img_resized.save(output_path, 'PNG', optimize=True)
                        print(f"✅ {image_name} gespeichert ({width}x{height})")
                        return True

            print(f"⚠️ Keine Bilddaten (Versuch {attempt}/{retries})")
            if attempt < retries:
                time.sleep(20)

        except Exception as e:
            error_str = str(e)
            if "RESOURCE_EXHAUSTED" in error_str:
                wait_time = 30 * attempt
                print(f"⏳ Rate Limit - warte {wait_time}s")
                time.sleep(wait_time)
            else:
                print(f"⚠️ Fehler: {error_str[:100]}")
                if attempt < retries:
                    time.sleep(15)

    return False

if __name__ == "__main__":
    print("🌿 Generiere Blog-Bilder: EU Ökodesign-Verordnung (ESPR) Reinigung\n")

    # Image 1: Preview (1408x768)
    prompt1 = """Create a professional high-end stock photography image of eco-friendly cleaning products.

SCENE:
- Glass spray bottles with natural cleaning solutions
- Bamboo brushes and organic sponges
- Small green potted plants in soft focus background
- Arranged on a clean, minimal surface
- Bright, airy atmosphere with natural daylight from window

STYLE:
- Premium lifestyle magazine photography quality
- Natural earth tones: browns, beiges, soft greens, whites
- Authentic materials, no artificial colors
- Professional camera with shallow depth of field
- Perfect composition, editorial quality
- Soft natural lighting creating gentle shadows

CRITICAL - FORBIDDEN:
- NO people
- NO hands
- NO text
- NO logos or brand names
- NO corporate branding

The image should look like authentic premium stock photography you'd see in high-end lifestyle magazines. Focus on natural, sustainable materials and colors."""

    success1 = generate_image(
        "eu-oekodesign-verordnung-espr-reinigung.png",
        1408,
        768,
        prompt1
    )

    if not success1:
        print("❌ Fehler beim Generieren von Bild 1")
        exit(1)

    # Wait between images to avoid rate limits
    print("\n⏳ Warte 25 Sekunden vor dem nächsten Bild...\n")
    time.sleep(25)

    # Image 2: Hero (1584x672 ultra-wide)
    prompt2 = """Create an ultra-wide panoramic professional stock photography image of sustainable cleaning supplies.

SCENE:
- Beautiful arrangement on light marble or natural wood surface
- Reusable glass bottles with natural cleaning solutions
- Natural fiber cloths neatly folded
- Wooden cleaning brushes
- Small potted herbs (basil, rosemary)
- Soft natural window light creating gentle shadows

COMPOSITION:
- Horizontal ultra-wide panoramic format
- Perfect for hero banner/header image
- Items arranged beautifully across the frame
- Balanced composition with breathing space

STYLE:
- Editorial quality for premium magazines
- Authentic natural colors: warm wood tones, soft whites, natural greens, earth browns
- Professional photography with perfect lighting
- High-end lifestyle aesthetic
- Natural daylight, airy atmosphere

CRITICAL - FORBIDDEN:
- NO people
- NO hands
- NO text
- NO logos or brand names
- NO corporate branding

The image should be an authentic, editorial-quality panoramic composition perfect for a website hero section. Focus on natural, sustainable materials and warm, inviting colors."""

    success2 = generate_image(
        "eu-oekodesign-verordnung-espr-reinigung-hero.png",
        1584,
        672,
        prompt2
    )

    if not success2:
        print("❌ Fehler beim Generieren von Bild 2")
        exit(1)

    print("\n✅ Beide Blog-Bilder erfolgreich generiert!")
    print(f"📁 Gespeichert in: {BLOG_DIR}")
