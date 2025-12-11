#!/usr/bin/env python3
"""Generiert das Erding Stadtbild für Unterhaltsreinigung Region."""

import os
import sys
import time
from pathlib import Path
from io import BytesIO

from google import genai
from google.genai import types
from PIL import Image

SCRIPT_DIR = Path(__file__).parent
PROJECT_ROOT = SCRIPT_DIR.parent
CREDENTIALS_PATH = SCRIPT_DIR / "credentials" / "fimi-bilder-credentials.json"
OUTPUT_PATH = PROJECT_ROOT / "public" / "images" / "leistungen" / "unterhaltsreinigung" / "region-erding.png"

MODEL_NAME = "gemini-3-pro-image-preview"

os.environ["GOOGLE_APPLICATION_CREDENTIALS"] = str(CREDENTIALS_PATH)

client = genai.Client(
    vertexai=True,
    project="fimi-bilder",
    location="global"
)

def generate_erding_cityscape(retries: int = 5):
    prompt = """Professional high-end cityscape photography of Erding, Bavaria, Germany.

SCENE:
- Wide scenic view of the historic old town of Erding
- Featuring the iconic Schöner Turm (Beautiful Tower) - the landmark medieval tower
- Traditional Bavarian architecture with colorful painted facades
- The main square (Schrannenplatz) with historic buildings
- Church towers and spires visible in the skyline
- Traditional Bavarian market town atmosphere
- Charming small-town German architecture

LIGHTING & ATMOSPHERE:
- Soft natural daylight, blue sky with some white clouds
- Warm, inviting atmosphere of a Bavarian market town
- Natural warm colors - ochre, cream, pastel painted building facades typical of Bavaria
- Postcard-quality travel photography

CRITICAL - FORBIDDEN:
- NO people visible in the foreground or middle ground
- Only very tiny distant figures allowed if absolutely necessary
- NO modern signage or advertising
- NO vehicles in focus

STYLE:
- Photorealistic, professional travel/cityscape photography
- 16:9 aspect ratio, horizontal landscape orientation
- High resolution, sharp focus
- Authentic German small town charm
- The kind of image you'd see in a high-quality Bavaria travel guide

The image should capture the authentic charm and traditional character of Erding as a historic Bavarian market town."""

    for attempt in range(1, retries + 1):
        try:
            print(f"Generating Erding cityscape... (Attempt {attempt}/{retries})")

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

                        # Create output directory if it doesn't exist
                        OUTPUT_PATH.parent.mkdir(parents=True, exist_ok=True)

                        # Save as PNG
                        img.save(OUTPUT_PATH, 'PNG', optimize=True)
                        print(f"SUCCESS: Image saved to {OUTPUT_PATH}")
                        print(f"Size: {img.size[0]}x{img.size[1]}")
                        return True

            print(f"WARNING: No image data received (Attempt {attempt}/{retries})")
            if attempt < retries:
                time.sleep(20)

        except Exception as e:
            error_str = str(e)
            if "RESOURCE_EXHAUSTED" in error_str:
                wait_time = 30 * attempt
                print(f"Rate limit hit - waiting {wait_time}s")
                time.sleep(wait_time)
            else:
                print(f"ERROR: {error_str}")
                if attempt < retries:
                    time.sleep(15)

    return False

if __name__ == "__main__":
    success = generate_erding_cityscape()
    sys.exit(0 if success else 1)
