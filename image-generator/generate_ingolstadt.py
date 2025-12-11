#!/usr/bin/env python3
"""Generiert ein Ingolstadt Cityscape-Bild für die Unterhaltsreinigung Regionen."""

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

def generate_ingolstadt_cityscape(retries: int = 5):
    prompt = """Professional high-end travel photography of Ingolstadt, Bavaria, Germany cityscape.

SCENE:
- Historic city view featuring the iconic Kreuztor (medieval city gate) with its distinctive Gothic towers
- The Gothic Liebfrauenmünster church (Münster Zur Schönen Unserer Lieben Frau) with elegant spires rising in the skyline
- Traditional Bavarian old town architecture with red-tiled rooftops
- Historic stone buildings in warm beige and pale ochre tones
- The Danube riverfront or historic town square
- Mix of medieval architecture and modern elements in the distant background

LIGHTING & ATMOSPHERE:
- Soft natural daylight, clear blue sky with light white clouds
- Warm Bavarian atmosphere
- Natural colors: red brick, terracotta roof tiles, beige historic stone
- Soft shadows highlighting architectural details

FORBIDDEN:
- NO people visible (or only very distant tiny silhouettes if necessary)
- NO modern vehicles prominently visible
- NO text or logos
- NO tourists or crowds
- Keep it empty and timeless

STYLE:
- Postcard-quality composition
- Professional travel photography similar to tourism board materials
- Natural, authentic colors (no oversaturation)
- Wide landscape format (16:9 aspect ratio)
- High resolution, sharp architectural details
- Similar to premium cityscape photography

This should capture the character of Ingolstadt as a Bavarian city with rich history (Kreuztor, Liebfrauenmünster) and its unique blend of medieval charm and modern industry."""

    for attempt in range(1, retries + 1):
        try:
            print(f"Generating Ingolstadt cityscape image... (Attempt {attempt}/{retries})")

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
                        output_path = Path("/Users/brandea/Desktop/FIMI-Gebaeudereinigung/public/images/leistungen/unterhaltsreinigung/region-ingolstadt.png")
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
    success = generate_ingolstadt_cityscape()
    sys.exit(0 if success else 1)
