#!/usr/bin/env python3
"""Generiert ein München Stadtbild für die Unterhaltsreinigung Seite."""

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
OUTPUT_PATH = PROJECT_ROOT / "public" / "images" / "leistungen" / "unterhaltsreinigung" / "region-muenchen.png"

MODEL_NAME = "gemini-3-pro-image-preview"

os.environ["GOOGLE_APPLICATION_CREDENTIALS"] = str(CREDENTIALS_PATH)

client = genai.Client(
    vertexai=True,
    project="fimi-bilder",
    location="global"
)

def generate_munich_cityscape(retries: int = 5):
    prompt = """Professional high-quality cityscape photography of Munich, Bavaria, Germany.

SCENE:
- Aerial or elevated view of Munich's historic city center
- Iconic landmarks visible: Marienplatz with the ornate Gothic New Town Hall (Neues Rathaus) and its famous Glockenspiel tower
- The distinctive twin onion-shaped copper domes of Frauenkirche (Cathedral of Our Lady) dominating the skyline
- Historic Bavarian architecture with traditional terracotta/red-orange roofs
- Mix of medieval and baroque buildings
- Tree-lined streets and green spaces visible
- Clear blue sky with soft white clouds

LIGHTING & ATMOSPHERE:
- Golden hour lighting or soft daylight
- Warm natural tones on the historic buildings
- Beautiful Bavarian capital city atmosphere
- Postcard-quality travel photography

CRITICAL - FORBIDDEN:
- NO people visible (or only very distant/small figures if necessary)
- NO modern advertising or billboards
- NO text or watermarks
- NO cars or traffic in focus

STYLE:
- Photorealistic, professional travel/cityscape photography
- Natural authentic colors
- High detail and sharpness
- Wide cinematic composition
- Captures the essence and beauty of Munich
- Similar to high-end travel magazine photography

The image should showcase Munich as a beautiful, clean, historic Bavarian city - perfect for representing the Munich region in a professional cleaning company's service area."""

    for attempt in range(1, retries + 1):
        try:
            print(f"Generating Munich cityscape image... (Attempt {attempt}/{retries})")

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
    success = generate_munich_cityscape()
    sys.exit(0 if success else 1)
