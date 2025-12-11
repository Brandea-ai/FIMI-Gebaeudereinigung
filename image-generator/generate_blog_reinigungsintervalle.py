#!/usr/bin/env python3
"""Generiert Blog-Bild für Reinigungsintervalle Artikel."""

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
OUTPUT_PATH = PROJECT_ROOT / "public" / "images" / "blog" / "reinigungsintervalle-buero-schule-praxis-din-ral.png"

MODEL_NAME = "gemini-3-pro-image-preview"

os.environ["GOOGLE_APPLICATION_CREDENTIALS"] = str(CREDENTIALS_PATH)

client = genai.Client(
    vertexai=True,
    project="fimi-bilder",
    location="global"
)

def generate_blog_image(retries: int = 5):
    prompt = """GENERIERE EIN PROFESSIONELLES BLOG-BILD - Reinigungsintervalle und Planung

Erstelle ein fotorealistisches Bild zum Thema "Reinigungsplanung und -intervalle".

HAUPTELEMENTE:
- Professionelles Klemmbrett mit detailliertem Reinigungsplan/Checkliste
- Wandkalender mit markierten Reinigungstagen (farbige Markierungen, Haken)
- Checkliste mit Checkmarks/Häkchen
- Uhr oder Timer im Bild sichtbar
- Alles auf einem sauberen, professionellen Schreibtisch oder an einer Wand arrangiert

STIL UND ATMOSPHÄRE:
- Organisiert und strukturiert
- Saubere, professionelle Ästhetik
- Warmes, natürliches Licht
- Büro- oder Planungsumgebung
- Hochwertige Fotografie, scharf und klar

KRITISCH - ABSOLUT VERBOTEN:
- KEINE Menschen im Bild
- KEINE Hände sichtbar
- KEINE Gesichter oder Körperteile
- KEINE Personen im Hintergrund
- Das Bild zeigt nur die Planungsmaterialien und Gegenstände

FARBEN:
- Professionelle Bürofarben
- Weiß, Grau, Blau-Töne
- Akzente durch Markierungen auf Kalender/Checkliste

PERSPEKTIVE:
- Leicht schräge Aufsicht oder frontale Ansicht
- Gute Lesbarkeit der Checkliste/Kalender
- Professionelle Produktfotografie-Stil

Das Bild soll Organisation, Struktur und professionelle Reinigungsplanung vermitteln."""

    for attempt in range(1, retries + 1):
        try:
            print(f"🔄 Generiere Blog-Bild... (Versuch {attempt}/{retries})")

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

                        # Erstelle Verzeichnis falls nicht vorhanden
                        OUTPUT_PATH.parent.mkdir(parents=True, exist_ok=True)

                        # Speichere als PNG
                        img.save(OUTPUT_PATH, 'PNG', quality=95)
                        print(f"✅ Bild gespeichert: {OUTPUT_PATH}")
                        print(f"   Größe: {img.size[0]}x{img.size[1]} Pixel")
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
