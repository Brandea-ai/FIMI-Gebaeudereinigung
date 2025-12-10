#!/usr/bin/env python3
"""Generiert timeline-2026 neu - ISO Zertifizierung OHNE Menschen."""

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
PUBLIC_DIR = PROJECT_ROOT / "public" / "images" / "ueber-uns"

MODEL_NAME = "gemini-3-pro-image-preview"

os.environ["GOOGLE_APPLICATION_CREDENTIALS"] = str(CREDENTIALS_PATH)

client = genai.Client(
    vertexai=True,
    project="fimi-bilder",
    location="global"
)

def generate():
    prompt = """GENERIERE EIN NEUES BILD - Whiteboard mit Roadmap / Strategieplan

Erstelle ein REALISTISCHES Foto eines Whiteboards oder einer Pinnwand mit einer visuellen Roadmap.

SZENE - Strategische Planung visualisiert:
- Großes Whiteboard ODER Glaswand ODER Pinnwand
- Darauf eine ROADMAP / TIMELINE als Grafik:
  - Mehrere Meilensteine auf einer horizontalen Linie
  - Pfeile die nach rechts zeigen (Fortschritt)
  - Farbige Post-its oder Marker-Zeichnungen
  - Checkmarks bei erledigten Punkten
  - Ein Stern oder Ziel-Symbol am Ende
- Eventuell bunte Sticky Notes daneben
- Marker/Stifte am Whiteboard-Rand

WICHTIG - KEINE LESBAREN TEXTE:
- Die Post-its und Beschriftungen sind UNSCHARF oder zu klein
- Man erkennt DASS es Text gibt, aber man kann ihn NICHT lesen
- Nur abstrakte Formen, Pfeile, Linien, Checkmarks

ATMOSPHÄRE:
- Wie in einem Besprechungsraum nach einer Strategiesitzung
- Professionell aber dynamisch
- Fortschritt und Planung
- Zielorientiert

KRITISCH - VERBOTEN:
- KEINE Menschen im Bild!
- KEINE lesbaren Texte oder Wörter!
- KEINE Logos
- KEINE Computer-Bildschirme

STIL:
- Fotorealistisch
- Leicht schräge Perspektive auf das Whiteboard
- Gute Beleuchtung
- Schärfentiefe: Whiteboard scharf, Hintergrund leicht unscharf

Das Bild symbolisiert strategische Planung und Zielerreichung - perfekt für "ISO Zertifizierung als nächstes Ziel"."""

    for attempt in range(1, 6):
        try:
            print(f"🔄 Generiere neues Bild... (Versuch {attempt}/5)")

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

                        image_name = "timeline-2026"

                        # Responsive Größen
                        sizes = [1376, 1024, 768, 384]
                        for size in sizes:
                            if img.width >= size:
                                ratio = size / img.width
                                new_height = int(img.height * ratio)
                                resized = img.resize((size, new_height), Image.Resampling.LANCZOS)
                            else:
                                resized = img

                            resized.save(PUBLIC_DIR / f"{image_name}-{size}w.avif", 'AVIF', quality=80)
                            resized.save(PUBLIC_DIR / f"{image_name}-{size}w.webp", 'WEBP', quality=80)

                        # Hauptbild
                        img.save(PUBLIC_DIR / f"{image_name}.avif", 'AVIF', quality=85)
                        print(f"✅ {image_name}.avif gespeichert ({img.size[0]}x{img.size[1]})")
                        return True

            print(f"⚠️ Keine Bilddaten (Versuch {attempt}/5)")
            if attempt < 5:
                time.sleep(20)

        except Exception as e:
            error_str = str(e)
            if "RESOURCE_EXHAUSTED" in error_str:
                wait_time = 30 * attempt
                print(f"⏳ Rate Limit - warte {wait_time}s")
                time.sleep(wait_time)
            else:
                print(f"⚠️ Fehler: {error_str[:100]}")
                if attempt < 5:
                    time.sleep(15)

    return False

if __name__ == "__main__":
    success = generate()
    exit(0 if success else 1)
