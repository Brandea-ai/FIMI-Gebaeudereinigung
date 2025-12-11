#!/usr/bin/env python3
"""Generiert Blog-Bilder für Industriereinigung Arbeitssicherheit."""

import os
import sys
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

def generate_preview_image(retries: int = 5):
    """Generiert Preview-Bild (1408x768)"""

    prompt = """Professional industrial stock photography of workplace safety equipment.

SCENE COMPOSITION:
- Yellow hard hat prominently placed as focal point
- Safety goggles (clear protective glasses)
- Heavy-duty protective work gloves (yellow/orange rubber or grey industrial)
- Industrial warning signs (WARNUNG/ACHTUNG) in background
- Factory warehouse setting with industrial shelving
- Dramatic overhead warehouse lighting creating depth and shadows
- Metal surfaces, concrete walls

COLOR PALETTE:
- Safety yellow (hard hat, warning stripes)
- Orange warning colors
- Grey concrete and industrial surfaces
- Metallic equipment in background
- Industrial blue-grey tones

STYLE:
- Professional product photography quality
- Sharp focus on safety equipment
- Industrial stock photo aesthetic
- Dramatic lighting from overhead industrial lights
- Photorealistic textures

ABSOLUTELY FORBIDDEN:
- NO people
- NO hands
- NO faces
- NO text or logos on equipment
- NO brand names

Format: Landscape 16:9 aspect ratio, high resolution industrial photography."""

    for attempt in range(1, retries + 1):
        try:
            print(f"🔄 Generiere Preview-Bild (1408x768)... (Versuch {attempt}/{retries})")

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
                        img_resized = img.resize((1408, 768), Image.Resampling.LANCZOS)

                        PUBLIC_DIR.mkdir(parents=True, exist_ok=True)
                        output_path = PUBLIC_DIR / "industriereinigung-arbeitssicherheit-dguv-gefahrstoffv.png"

                        img_resized.save(output_path, 'PNG', optimize=True)
                        print(f"✅ Preview-Bild gespeichert: {output_path} ({img_resized.size[0]}x{img_resized.size[1]})")
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

def generate_hero_image(retries: int = 5):
    """Generiert Hero-Bild (1584x672 ultra-wide)"""

    prompt = """Wide panoramic professional industrial stock photography of factory warehouse floor.

SCENE COMPOSITION (Ultra-wide panoramic):
- Left side: Wall with safety equipment organized on hooks
  - Multiple yellow hard hats hanging in a row
  - High-visibility orange/yellow safety vests
  - Industrial warning signs (ACHTUNG, WARNUNG, VORSICHT)
- Center: Open factory floor space
  - Modern industrial cleaning machine or equipment (floor scrubber, no logos)
  - Concrete floor with professional finish
- Right side: Industrial warehouse perspective
  - High ceilings visible
  - Skylights casting natural daylight
  - Industrial shelving or storage racks
  - Metal structural beams

LIGHTING:
- Natural daylight from skylights above
- Mixed with industrial warehouse lighting
- Bright, professional atmosphere
- Natural shadows on floor

COLOR PALETTE:
- Safety yellow and orange equipment
- Grey concrete floors
- Metallic structures (steel beams, shelving)
- Natural industrial tones
- White/grey walls

STYLE:
- Editorial industrial photography
- Ultra-wide panoramic composition (2.35:1 aspect ratio)
- Professional architectural industrial photography
- Authentic factory environment
- Photorealistic materials and textures
- Sharp detail throughout

ABSOLUTELY FORBIDDEN:
- NO people
- NO faces or body parts
- NO text or brand logos
- NO company names on equipment
- Clean, organized industrial space only

Format: Ultra-wide panoramic, cinematic industrial photography."""

    for attempt in range(1, retries + 1):
        try:
            print(f"🔄 Generiere Hero-Bild (1584x672)... (Versuch {attempt}/{retries})")

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

                        # Resize to exact ultra-wide dimensions
                        img_resized = img.resize((1584, 672), Image.Resampling.LANCZOS)

                        PUBLIC_DIR.mkdir(parents=True, exist_ok=True)
                        output_path = PUBLIC_DIR / "industriereinigung-arbeitssicherheit-dguv-gefahrstoffv-hero.png"

                        img_resized.save(output_path, 'PNG', optimize=True)
                        print(f"✅ Hero-Bild gespeichert: {output_path} ({img_resized.size[0]}x{img_resized.size[1]})")
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
    print("=" * 60)
    print("Generiere Blog-Bilder: Arbeitssicherheit & DGUV")
    print("=" * 60)

    success1 = generate_preview_image()

    if success1:
        print("\n⏳ Warte 10 Sekunden vor nächstem Bild...")
        time.sleep(10)

    success2 = generate_hero_image()

    print("\n" + "=" * 60)
    if success1 and success2:
        print("✅ ALLE BILDER ERFOLGREICH GENERIERT")
    elif success1:
        print("⚠️ Preview-Bild OK, Hero-Bild fehlgeschlagen")
    elif success2:
        print("⚠️ Hero-Bild OK, Preview-Bild fehlgeschlagen")
    else:
        print("❌ BEIDE BILDER FEHLGESCHLAGEN")
    print("=" * 60)

    sys.exit(0 if (success1 and success2) else 1)
