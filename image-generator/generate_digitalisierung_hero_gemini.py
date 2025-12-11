#!/usr/bin/env python3
"""
Generate hero image for digitalisierung blog post using Google Gemini
"""

import os
import time
from pathlib import Path
from io import BytesIO

from google import genai
from google.genai import types
from PIL import Image

SCRIPT_DIR = Path(__file__).parent
PROJECT_ROOT = SCRIPT_DIR.parent
CREDENTIALS_PATH = SCRIPT_DIR / "credentials" / "fimi-bilder-credentials.json"
OUTPUT_PATH = PROJECT_ROOT / "public" / "images" / "blog" / "digitalisierung-gebaeudereinigung-2025-ki-robotik-iot-hero.png"

MODEL_NAME = "gemini-3-pro-image-preview"

os.environ["GOOGLE_APPLICATION_CREDENTIALS"] = str(CREDENTIALS_PATH)

client = genai.Client(
    vertexai=True,
    project="fimi-bilder",
    location="global"
)

def generate_blog_hero(retries: int = 5):
    """Generate hero image for digitalisierung blog post."""

    prompt = """GENERIERE EIN FOTOREALISTISCHES BILD - Moderne Reinigungstechnologie & Digitalisierung

Erstelle ein breites Panoramabild (21:9 Format) einer professionellen Facility-Management-Umgebung mit moderner Technologie.

SZENE:
- Ein autonomer Reinigungsroboter (modern, professionell)
- Ein Tablet-Computer, der IoT-Sensordaten und Reinigungspläne anzeigt
- Smart-Home-Geräte und Sensorausrüstung
- Professionelle Facility-Management-Umgebung
- Subtile blaue technische Beleuchtung (ergänzt Teal #109387 und Dunkelblau #012956)
- Moderne, saubere Ästhetik

KRITISCH - ABSOLUT VERBOTEN:
- KEINE Menschen im Bild
- KEINE Hände sichtbar
- KEINE Gesichter
- KEINE Personen im Hintergrund

STIL:
- Fotorealistisch, professionelle Technologie-Fotografie
- Ultra-weite Panorama-Komposition (21:9)
- Blaue technische Akzentbeleuchtung
- Moderne, futuristische aber realistische Darstellung
- Hohe Auflösung, scharf, klar
- Fokus auf Technologie und Digitalisierung

Das Bild soll die Zukunft der Gebäudereinigung zeigen - Digitalisierung, KI, Robotik, IoT."""

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

                        # Convert RGBA to RGB if necessary
                        if img.mode == 'RGBA':
                            img = img.convert('RGB')

                        # Create output directory if needed
                        OUTPUT_PATH.parent.mkdir(parents=True, exist_ok=True)

                        # Save as PNG
                        img.save(OUTPUT_PATH, 'PNG')

                        file_size = os.path.getsize(OUTPUT_PATH)
                        print(f"✅ Bild gespeichert: {OUTPUT_PATH}")
                        print(f"   Größe: {img.size[0]}x{img.size[1]}")
                        print(f"   Dateigröße: {file_size:,} bytes ({file_size / 1024:.1f} KB)")
                        return True

            print(f"⚠️ Keine Bilddaten erhalten (Versuch {attempt}/{retries})")
            if attempt < retries:
                time.sleep(20)

        except Exception as e:
            error_str = str(e)
            if "RESOURCE_EXHAUSTED" in error_str:
                wait_time = 30 * attempt
                print(f"⏳ Rate Limit erreicht - warte {wait_time}s")
                time.sleep(wait_time)
            else:
                print(f"⚠️ Fehler: {error_str[:200]}")
                if attempt < retries:
                    time.sleep(15)

    return False

if __name__ == "__main__":
    print("=" * 70)
    print("FIMI Blog Hero Image Generator - Digitalisierung 2025")
    print("=" * 70)
    print(f"\nOutput: {OUTPUT_PATH}\n")

    success = generate_blog_hero()

    if success:
        print("\n" + "=" * 70)
        print("✅ ERFOLG! Bild wurde erfolgreich generiert.")
        print("=" * 70)
        exit(0)
    else:
        print("\n" + "=" * 70)
        print("❌ FEHLER! Bild konnte nicht generiert werden.")
        print("=" * 70)
        exit(1)
