#!/usr/bin/env python3
"""Generiert Blog-Bilder für Ausbildung/Karriere Artikel."""

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

def generate_image(filename: str, prompt: str, target_size: tuple, retries: int = 5):
    """Generiert ein einzelnes Blog-Bild."""

    for attempt in range(1, retries + 1):
        try:
            print(f"🔄 Generiere {filename}... (Versuch {attempt}/{retries})")

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

                        # Resize to target dimensions
                        img = img.resize(target_size, Image.Resampling.LANCZOS)

                        # Ensure blog directory exists
                        BLOG_DIR.mkdir(parents=True, exist_ok=True)

                        # Save as PNG
                        output_path = BLOG_DIR / filename
                        img.save(output_path, 'PNG', optimize=True)
                        print(f"✅ {filename} gespeichert ({img.size[0]}x{img.size[1]})")
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

def main():
    # Image 1: Preview (1408x768) - Desktop with education materials
    prompt1 = """Professional stock photography of career and education materials arranged on a wooden desk, top-down view.

SCENE:
- A professional diploma certificate with elegant calligraphy on cream paper
- Open training manuals and textbooks with visible pages
- A notebook with handwritten notes
- A professional equipment catalog
- A quality pen

ATMOSPHERE:
- Aspirational and professional
- Warm natural lighting from a window
- Clean and organized composition
- Editorial photography style

COLORS:
- Natural palette: cream and beige paper tones
- Warm wood desk surface
- Neutral earth tones
- No bright or artificial colors

CRITICAL - FORBIDDEN:
- NO people visible
- NO hands in the frame
- NO bright artificial colors
- NO logos or brand names

STYLE:
- Photorealistic
- High-end editorial stock photography
- Shallow depth of field
- Professional lighting
- Sharp and detailed

The image should convey professionalism, education, and career development."""

    # Image 2: Hero (1584x672 ultra-wide) - Training workspace
    prompt2 = """Professional stock photography, ultra-wide panoramic shot of a modern training and education workspace.

SCENE:
- Framed professional certificates and diplomas mounted on clean white wall
- Bookshelf with professional training books and manuals
- Clean wooden desk with organized study materials and notebooks
- Modern minimalist professional office environment

ATMOSPHERE:
- Clean, aspirational, organized workspace
- Editorial lifestyle photography
- Natural warm lighting
- Professional and inviting

COLORS:
- Natural palette: warm wood tones
- Cream walls
- Neutral beige and earth tones
- White frames
- No bright artificial colors

CRITICAL - FORBIDDEN:
- NO people visible
- NO hands in the frame
- NO bright artificial colors
- NO logos or brand names
- NO clutter

STYLE:
- Photorealistic
- High-end editorial photography
- Wide angle composition
- Professional lighting
- Ultra-wide panoramic format

The image should convey a professional training environment and career development atmosphere."""

    print("=== Generiere Blog-Bilder für Ausbildung/Karriere ===\n")

    # Generate Image 1
    success1 = generate_image(
        "ausbildung-gebaeudereiniger-gehalt-karriere-2025.png",
        prompt1,
        (1408, 768)
    )

    if success1:
        print("\n⏳ Warte 30 Sekunden vor dem nächsten Bild...")
        time.sleep(30)

    # Generate Image 2
    success2 = generate_image(
        "ausbildung-gebaeudereiniger-gehalt-karriere-2025-hero.png",
        prompt2,
        (1584, 672)
    )

    if success1 and success2:
        print("\n✅ Beide Bilder erfolgreich generiert!")
        return 0
    else:
        print("\n❌ Fehler beim Generieren der Bilder")
        return 1

if __name__ == "__main__":
    exit(main())
