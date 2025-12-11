#!/usr/bin/env python3
"""Generiert Blog-Bilder für Schulreinigung Bayern Rahmenhygieneplan."""

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
PUBLIC_DIR = PROJECT_ROOT / "public" / "images" / "blog"

MODEL_NAME = "gemini-3-pro-image-preview"

os.environ["GOOGLE_APPLICATION_CREDENTIALS"] = str(CREDENTIALS_PATH)

client = genai.Client(
    vertexai=True,
    project="fimi-bilder",
    location="global"
)

def generate_image(image_name: str, prompt: str, width: int, height: int, retries: int = 5):
    """Generiert ein einzelnes Bild."""

    for attempt in range(1, retries + 1):
        try:
            print(f"🔄 Generiere {image_name}... (Versuch {attempt}/{retries})")

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

                        # Zielauflösung
                        target_ratio = width / height
                        img_ratio = img.width / img.height

                        # Crop auf gewünschtes Seitenverhältnis
                        if img_ratio > target_ratio:
                            # Bild ist zu breit
                            new_width = int(img.height * target_ratio)
                            left = (img.width - new_width) // 2
                            img = img.crop((left, 0, left + new_width, img.height))
                        else:
                            # Bild ist zu hoch
                            new_height = int(img.width / target_ratio)
                            top = (img.height - new_height) // 2
                            img = img.crop((0, top, img.width, top + new_height))

                        # Resize auf Zielauflösung
                        img = img.resize((width, height), Image.Resampling.LANCZOS)

                        # Speichern
                        PUBLIC_DIR.mkdir(parents=True, exist_ok=True)
                        output_path = PUBLIC_DIR / f"{image_name}.png"
                        img.save(output_path, 'PNG', quality=95)

                        print(f"✅ {image_name}.png gespeichert ({img.size[0]}x{img.size[1]})")
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
    # Image 1: Preview (1408x768)
    prompt1 = """Professional high-quality stock photography of an EMPTY, PERFECTLY CLEAN classroom interior.

SCENE:
- German/European classroom with wooden student desks arranged in neat rows
- Clean chalkboard or whiteboard at the front of the classroom
- Large windows with warm natural daylight streaming in
- Clean floor, orderly arrangement
- Educational atmosphere

COLORS:
- Warm natural colors
- Light wood desk tones (honey/oak wood)
- Soft white walls
- Subtle beige or cream accents
- Natural warm daylight illumination

CRITICAL REQUIREMENTS - FORBIDDEN:
- NO people (no students, no teachers, no cleaning staff)
- NO cleaning equipment visible (no mops, no buckets, no cleaning machines)
- NO logos or brand names
- Room must be completely EMPTY of people

STYLE:
- Professional interior stock photography
- Authentic school atmosphere
- High-end real estate / architectural photography quality
- Natural lighting, welcoming and bright
- Focus on cleanliness and professional presentation

The image should showcase a spotless, well-maintained classroom - the result of professional school cleaning services."""

    # Image 2: Hero (1584x672 ultra-wide)
    prompt2 = """Ultra-wide panoramic professional stock photography of an EMPTY, SPOTLESS classroom interior.

SCENE:
- Wide panoramic view of German/European classroom
- Multiple rows of wooden student desks extending into the depth of the room
- Pristine clean floor (wood or linoleum)
- Chalkboard or whiteboard at front
- Colorful educational posters on walls
- Large windows with beautiful natural sunlight illuminating the entire space
- The room should feel spacious and welcoming

COLORS:
- Natural warm daylight colors
- Honey/oak wood desk tones
- Clean white walls
- Soft natural lighting
- Warm, inviting atmosphere

CRITICAL REQUIREMENTS - FORBIDDEN:
- NO people (no students, no teachers, no cleaning staff)
- NO cleaning equipment or supplies visible
- NO logos or brand names on any surfaces
- Room must be completely EMPTY of people

STYLE:
- High-end architectural interior photography
- Ultra-wide panoramic composition (very wide format)
- Professional real estate photography quality
- Authentic educational environment
- Perfect hygiene and cleanliness visible through immaculate surfaces
- Natural lighting emphasizing the clean, bright space

This panoramic image should showcase an expansive, perfectly maintained classroom - demonstrating professional school cleaning standards."""

    print("=" * 60)
    print("Generiere Blog-Bilder: Schulreinigung Bayern Hygienestandards")
    print("=" * 60)

    # Generiere Image 1
    success1 = generate_image(
        "schulreinigung-bayern-rahmenhygieneplan-hygienestandards",
        prompt1,
        1408,
        768
    )

    if not success1:
        print("❌ Fehler beim Generieren von Image 1")
        return False

    # Warte zwischen den Requests
    print("\n⏳ Warte 30 Sekunden vor dem nächsten Bild...")
    time.sleep(30)

    # Generiere Image 2
    success2 = generate_image(
        "schulreinigung-bayern-rahmenhygieneplan-hygienestandards-hero",
        prompt2,
        1584,
        672
    )

    if not success2:
        print("❌ Fehler beim Generieren von Image 2")
        return False

    print("\n" + "=" * 60)
    print("✅ Beide Bilder erfolgreich generiert!")
    print("=" * 60)
    return True

if __name__ == "__main__":
    import sys
    success = main()
    sys.exit(0 if success else 1)
