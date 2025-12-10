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
    prompt = """GENERIERE EIN NEUES BILD - Seriöses deutsches Büro mit Zertifikaten

Erstelle ein REALISTISCHES Foto eines klassischen, seriösen deutschen Büros.

SZENE - Traditionelles deutsches Geschäftsbüro:
- Klassischer Holzschreibtisch (Eiche oder Nussbaum)
- Gerahmte Zertifikate/Urkunden an der Wand (2-3 Stück in schlichten schwarzen oder goldenen Rahmen)
- Die Zertifikate sind UNSCHARF oder aus der Ferne - KEINE lesbaren Texte!
- Ordner-Regal im Hintergrund (Leitz-Ordner, grau oder blau)
- Schreibtischlampe (klassisch, nicht modern)
- Vielleicht ein Aktenordner auf dem Schreibtisch
- Fenster mit Tageslicht, eventuell mit Jalousien
- Zimmerpflanze (Ficus oder ähnlich)
- Teppichboden oder Parkett

ATMOSPHÄRE - Typisch deutsches Mittelstands-Unternehmen:
- Seriös, vertrauenswürdig, bodenständig
- NICHT futuristisch oder high-tech
- NICHT steril oder kalt
- Warme, einladende Atmosphäre
- Wie das Büro eines etablierten Handwerksbetriebs oder Dienstleisters

KRITISCH - VERBOTEN:
- KEINE Menschen im Bild!
- KEINE futuristischen Elemente
- KEINE Glaswände oder Start-up-Atmosphäre
- KEINE lesbaren Texte auf Dokumenten
- KEINE Monitore mit Inhalten
- KEINE Reinigungsgeräte
- KEINE Logos

STIL:
- Fotorealistisch wie ein echtes Foto
- Warme Beleuchtung (Tageslicht + Kunstlicht)
- Wie aus einem Imagefilm eines deutschen Mittelständlers
- Vertrauenswürdig und authentisch
- NICHT wie ein Stock-Foto - sondern wie ein echtes Büro

Das Bild zeigt ein seriöses, etabliertes Unternehmensbüro - passend zu einer professionellen Gebäudereinigungsfirma."""

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
