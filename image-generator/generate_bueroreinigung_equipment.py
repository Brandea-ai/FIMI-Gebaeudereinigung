#!/usr/bin/env python3
"""Generiert realistisches Reinigungsequipment-Bild für Büroreinigung."""

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
OUTPUT_DIR = PROJECT_ROOT / "public" / "images" / "leistungen" / "bueroreinigung"

MODEL_NAME = "gemini-3-pro-image-preview"

os.environ["GOOGLE_APPLICATION_CREDENTIALS"] = str(CREDENTIALS_PATH)

client = genai.Client(
    vertexai=True,
    project="fimi-bilder",
    location="global"
)

def generate_equipment_image(retries: int = 5):
    prompt = """Erstelle ein fotorealistisches Produktfoto von professionellem Reinigungsequipment.

SZENE:
Ein professioneller Reinigungswagen wie er von deutschen Gebäudereinigungsfirmen verwendet wird.
- Grau/silbernes Metallgestell auf Rollen
- BLAUE Kunststoffeimer (zwei Stück - einer für sauberes Wasser, einer für Schmutzwasser)
- Eine Moppresse/Auswringer am Wagen befestigt
- Ein blauer Mikrofaser-Flachmopp liegt bereit
- Seitlich Halterungen für Sprühflaschen
- Ein kleiner Müllsackhalter

WICHTIG - Das Equipment muss PHYSIKALISCH KORREKT sein:
- Alle Teile sind fest verbunden oder stehen stabil
- Nichts schwebt in der Luft
- Realistische Proportionen
- Das sieht aus wie ein echtes Foto aus einem Reinigungsgeräte-Katalog

STIL:
- Weißer/hellgrauer Studio-Hintergrund
- Professionelle Produktfotografie
- Weiche Schatten
- Scharfe Details
- KEINE Menschen, KEINE Hände

Das Foto soll aussehen wie aus einem deutschen Fachhandel-Katalog für Reinigungsbedarf."""

    for attempt in range(1, retries + 1):
        try:
            print(f"🔄 Generiere Equipment-Bild... (Versuch {attempt}/{retries})")

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
                        target_width = 1400
                        target_height = 900
                        img = img.resize((target_width, target_height), Image.Resampling.LANCZOS)

                        OUTPUT_DIR.mkdir(parents=True, exist_ok=True)

                        # Save as AVIF
                        output_path = OUTPUT_DIR / "leistungsumfang-1.avif"
                        img.save(output_path, 'AVIF', quality=80)
                        print(f"✅ leistungsumfang-1.avif gespeichert ({img.size[0]}x{img.size[1]})")

                        # Also save PNG for review
                        png_path = OUTPUT_DIR / "leistungsumfang-1-preview.png"
                        img.save(png_path, 'PNG')
                        print(f"✅ Preview PNG gespeichert")

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
                print(f"⚠️ Fehler: {error_str}")
                if attempt < retries:
                    time.sleep(15)

    return False

if __name__ == "__main__":
    success = generate_equipment_image()
    exit(0 if success else 1)
