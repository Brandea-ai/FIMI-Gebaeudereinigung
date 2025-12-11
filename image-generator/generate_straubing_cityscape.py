#!/usr/bin/env python3
"""Generiert ein Straubing Stadtbild für die Unterhaltsreinigung Seite."""

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
OUTPUT_PATH = PROJECT_ROOT / "public" / "images" / "leistungen" / "unterhaltsreinigung" / "region-straubing.png"

MODEL_NAME = "gemini-3-pro-image-preview"

os.environ["GOOGLE_APPLICATION_CREDENTIALS"] = str(CREDENTIALS_PATH)

client = genai.Client(
    vertexai=True,
    project="fimi-bilder",
    location="global"
)

def generate_straubing_cityscape(retries: int = 5):
    prompt = """Professional high-quality cityscape photography of Straubing, Lower Bavaria, Germany.

SCENE:
- Elevated view of Straubing's historic market square and city center
- The iconic Stadtturm (City Tower) - tall Gothic city tower with distinctive pointed spire as the main focal point
- Large historic market square Theresienplatz with cobblestone paving
- Colorful traditional Bavarian building facades surrounding the square
- Gothic church spires visible in the background
- Historic buildings with traditional Lower Bavarian architecture
- Charming Danube river town atmosphere
- Clear blue sky with soft white clouds

LIGHTING & ATMOSPHERE:
- Soft natural daylight or late morning golden light
- Warm natural tones on the historic facades
- Beautiful Lower Bavarian market town character
- Postcard-quality travel photography
- Known for the Gäubodenvolksfest, historic market town on the Danube

CRITICAL - FORBIDDEN:
- NO people visible (or only very distant/tiny figures if absolutely necessary)
- NO modern advertising or billboards
- NO text or watermarks
- NO cars or traffic in focus
- NO festival tents or temporary structures

STYLE:
- Photorealistic, professional travel/cityscape photography
- Natural authentic colors - warm building facades, blue sky
- High detail and sharpness on architectural features
- Wide cinematic landscape composition (16:9 ratio)
- Captures the essence and historic beauty of Straubing
- Similar to high-end travel magazine or postcard photography
- Premium quality representing Lower Bavaria's heritage

The image should showcase Straubing as a beautiful, clean, historic Lower Bavarian market town with its distinctive city tower - perfect for representing the Straubing region in a professional cleaning company's service area."""

    for attempt in range(1, retries + 1):
        try:
            print(f"Generating Straubing cityscape image... (Attempt {attempt}/{retries})")

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

                        # Resize to approximately 1600x900
                        target_width = 1600
                        if img.width > target_width:
                            ratio = target_width / img.width
                            target_height = int(img.height * ratio)
                            img = img.resize((target_width, target_height), Image.Resampling.LANCZOS)

                        # Ensure output directory exists
                        OUTPUT_PATH.parent.mkdir(parents=True, exist_ok=True)

                        # Save as PNG
                        img.save(OUTPUT_PATH, 'PNG', optimize=True)
                        print(f"SUCCESS: Image saved to {OUTPUT_PATH}")
                        print(f"Dimensions: {img.size[0]}x{img.size[1]}")

                        # Get file size
                        file_size = OUTPUT_PATH.stat().st_size
                        file_size_mb = file_size / (1024 * 1024)
                        print(f"File size: {file_size:,} bytes ({file_size_mb:.2f} MB)")
                        return True

            print(f"No image data received (Attempt {attempt}/{retries})")
            if attempt < retries:
                time.sleep(20)

        except Exception as e:
            error_str = str(e)
            if "RESOURCE_EXHAUSTED" in error_str:
                wait_time = 30 * attempt
                print(f"Rate limit reached - waiting {wait_time}s")
                time.sleep(wait_time)
            else:
                print(f"Error: {error_str}")
                if attempt < retries:
                    time.sleep(15)

    return False

if __name__ == "__main__":
    success = generate_straubing_cityscape()
    sys.exit(0 if success else 1)
