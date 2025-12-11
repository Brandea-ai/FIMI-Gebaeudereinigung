#!/usr/bin/env python3
"""Generiert ein Regensburg Cityscape-Bild für die Unterhaltsreinigung Regionen."""

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

MODEL_NAME = "gemini-3-pro-image-preview"

os.environ["GOOGLE_APPLICATION_CREDENTIALS"] = str(CREDENTIALS_PATH)

client = genai.Client(
    vertexai=True,
    project="fimi-bilder",
    location="global"
)

def generate_regensburg_cityscape(retries: int = 5):
    prompt = """Professional high-end travel photography of Regensburg, Germany cityscape.

SCENE:
- View from across the Danube River
- The famous medieval Stone Bridge (Steinerne Brücke) spanning the river in the foreground
- Historic old town (UNESCO World Heritage) with medieval architecture
- The Gothic Dom St. Peter cathedral with its distinctive twin spires rising prominently in the skyline
- Colorful historic buildings along the riverbank
- The calm blue Danube River

LIGHTING & ATMOSPHERE:
- Soft natural daylight, clear blue sky with few white clouds
- Warm stone tones from medieval architecture
- Natural river blues
- Terracotta roof tiles

FORBIDDEN:
- NO people visible (or only very distant tiny silhouettes)
- NO modern vehicles or cars prominently visible
- NO text or logos
- NO tourists or crowds

STYLE:
- Postcard-quality composition
- Professional travel photography
- Natural, authentic colors
- Wide landscape format
- High resolution, sharp details
- Similar to professional tourism board photography

This should look like a classic, timeless postcard view of Regensburg showing its most famous landmarks."""

    for attempt in range(1, retries + 1):
        try:
            print(f"Generating Regensburg cityscape image... (Attempt {attempt}/{retries})")

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

                        # Save to specified location
                        output_path = Path("/Users/brandea/Desktop/FIMI-Gebaeudereinigung/public/images/leistungen/unterhaltsreinigung/region-regensburg.png")
                        output_path.parent.mkdir(parents=True, exist_ok=True)

                        img.save(output_path, 'PNG', quality=95)
                        print(f"✅ Image saved successfully: {output_path}")
                        print(f"   Dimensions: {img.size[0]}x{img.size[1]}px")
                        return True

            print(f"⚠️ No image data received (Attempt {attempt}/{retries})")
            if attempt < retries:
                time.sleep(20)

        except Exception as e:
            error_str = str(e)
            if "RESOURCE_EXHAUSTED" in error_str:
                wait_time = 30 * attempt
                print(f"⏳ Rate limit reached - waiting {wait_time}s")
                time.sleep(wait_time)
            else:
                print(f"⚠️ Error: {error_str}")
                if attempt < retries:
                    time.sleep(15)

    return False

if __name__ == "__main__":
    success = generate_regensburg_cityscape()
    sys.exit(0 if success else 1)
