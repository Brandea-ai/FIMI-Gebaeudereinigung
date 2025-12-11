#!/usr/bin/env python3
"""Generiert Blog-Bild: Schulreinigung Bayern - Rahmenhygieneplan."""

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

def generate_blog_image(retries: int = 5):
    prompt = """GENERIERE EIN FOTOREALISTISCHES BILD - Sauberes bayerisches Klassenzimmer

Erstelle ein professionelles, fotorealistisches Bild eines LEEREN, FRISCH GEREINIGTEN Klassenzimmers.

SZENE:
- Modernes bayerisches Klassenzimmer
- Schülertische sauber abgewischt, ordentlich angeordnet
- Saubere grüne oder schwarze Tafel (Kreidetafel oder Whiteboard)
- Handdesinfektionsspender an der Tür montiert
- Helle, einladende Atmosphäre durch Tageslicht
- Sauberer Boden (Linoleum oder PVC)
- Evtl. Regale mit ordentlichen Büchern im Hintergrund
- Fenster mit Blick nach draußen (optional)

KRITISCH - ABSOLUT VERBOTEN:
- KEINE Menschen im Bild
- KEINE Hände sichtbar
- KEINE Gesichter oder Körperteile
- KEINE Reinigungsgeräte aktiv im Einsatz
- KEINE Logos oder Markennamen
- KEINE Personen jedweder Art

STIL:
- Fotorealistisch, professionelle Architekturfotografie
- Helle, freundliche Beleuchtung (natürliches Tageslicht)
- Weitwinkel-Perspektive
- Scharfe Details
- Warme, einladende Farbgebung
- Das Klassenzimmer soll sauber, hygienisch und bereit für den Unterricht aussehen

FOKUS: Das Bild soll die hohen Hygienestandards in bayerischen Schulen zeigen - ein perfekt gereinigtes, leeres Klassenzimmer."""

    for attempt in range(1, retries + 1):
        try:
            print(f"🔄 Generiere Blog-Bild Schulreinigung... (Versuch {attempt}/{retries})")

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

                        PUBLIC_DIR.mkdir(parents=True, exist_ok=True)

                        # Speichere als PNG
                        output_path = PUBLIC_DIR / "schulreinigung-bayern-rahmenhygieneplan-hygienestandards.png"
                        img.save(output_path, 'PNG', optimize=True)
                        print(f"✅ Blog-Bild gespeichert: {output_path} ({img.size[0]}x{img.size[1]})")
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
    success = generate_blog_image()
    sys.exit(0 if success else 1)
