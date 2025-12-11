#!/usr/bin/env python3
"""Generiert das problem-loesung.png Bild für Bueroreinigung."""

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
OUTPUT_PATH = PROJECT_ROOT / "public" / "images" / "leistungen" / "bueroreinigung" / "problem-loesung.png"

MODEL_NAME = "gemini-3-pro-image-preview"

os.environ["GOOGLE_APPLICATION_CREDENTIALS"] = str(CREDENTIALS_PATH)

client = genai.Client(
    vertexai=True,
    project="fimi-bilder",
    location="global"
)

def generate_image(retries: int = 5):
    prompt = """Professional interior photography of a clean German office workspace after professional cleaning. Show 3-4 individual desk workstations (NOT American open-plan cubicles). Each desk has a monitor, keyboard, office supplies neatly arranged. Grey or blue low partition walls between desks (typical German 'Großraumbüro' style). Clean grey carpet, freshly vacuumed with visible vacuum lines. Waste bins emptied with fresh bin liners. The space radiates cleanliness - dust-free monitors, clean desk surfaces, organized cables. Natural daylight from windows with blinds. Plants adding green accents. NO PEOPLE. This is authentic German office cleaning result. Photorealistic interior photography."""

    for attempt in range(1, retries + 1):
        try:
            print(f"🔄 Generiere Bild... (Versuch {attempt}/{retries})")

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

                        # Convert RGBA to RGB if needed
                        if img.mode == 'RGBA':
                            img = img.convert('RGB')

                        # Resize to 1400x900 if needed
                        if img.size != (1400, 900):
                            img = img.resize((1400, 900), Image.Resampling.LANCZOS)

                        # Ensure output directory exists
                        OUTPUT_PATH.parent.mkdir(parents=True, exist_ok=True)

                        # Save as PNG
                        img.save(OUTPUT_PATH, 'PNG')
                        print(f"✅ Bild gespeichert: {OUTPUT_PATH} ({img.size[0]}x{img.size[1]})")
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
    success = generate_image()
    sys.exit(0 if success else 1)
