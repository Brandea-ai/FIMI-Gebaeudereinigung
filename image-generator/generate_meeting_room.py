#!/usr/bin/env python3
"""Generiert ein Bild eines sauberen Konferenzraums für Bürorreinigung."""

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

MODEL_NAME = "gemini-3-pro-image-preview"

os.environ["GOOGLE_APPLICATION_CREDENTIALS"] = str(CREDENTIALS_PATH)

client = genai.Client(
    vertexai=True,
    project="fimi-bilder",
    location="global"
)

def generate_meeting_room(output_path: str, retries: int = 5):
    prompt = """Professional interior photography of a clean German meeting room (Besprechungsraum). Typical German business style: rectangular wooden conference table (light oak or beech, NOT glass), 6-8 grey office chairs, a whiteboard or flipchart on the wall, maybe a projector screen. Regular windows with blinds (not floor-to-ceiling). The room is spotlessly clean - table surface gleaming, no fingerprints, vacuumed carpet or clean linoleum floor. A few plants for warmth. This looks like a real German Mittelstand company meeting room - functional, professional, but not flashy. Natural daylight. NO PEOPLE. Photorealistic architectural photography."""

    for attempt in range(1, retries + 1):
        try:
            print(f"🔄 Generiere Konferenzraum-Bild... (Versuch {attempt}/{retries})")

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

                        # Resize to 1400x900 if needed
                        if img.size != (1400, 900):
                            # Crop to 1400x900 maintaining aspect ratio
                            target_ratio = 1400 / 900
                            current_ratio = img.width / img.height

                            if current_ratio > target_ratio:
                                # Image is too wide
                                new_width = int(img.height * target_ratio)
                                left = (img.width - new_width) // 2
                                img = img.crop((left, 0, left + new_width, img.height))
                            else:
                                # Image is too tall
                                new_height = int(img.width / target_ratio)
                                top = (img.height - new_height) // 2
                                img = img.crop((0, top, img.width, top + new_height))

                            img = img.resize((1400, 900), Image.Resampling.LANCZOS)

                        # Ensure directory exists
                        Path(output_path).parent.mkdir(parents=True, exist_ok=True)

                        # Save as PNG
                        img.save(output_path, 'PNG')
                        print(f"✅ Bild gespeichert: {output_path} ({img.size[0]}x{img.size[1]})")
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
    output_path = "/Users/brandea/Desktop/FIMI-Gebaeudereinigung/public/images/leistungen/bueroreinigung/leistungsumfang-2.png"
    success = generate_meeting_room(output_path)
    sys.exit(0 if success else 1)
