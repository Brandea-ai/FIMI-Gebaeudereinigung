#!/usr/bin/env python3
"""Generiert ref-025-2 neu - Logistikzentrum ohne Person und Reinigungsmaschine."""

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
PUBLIC_DIR = PROJECT_ROOT / "public" / "images" / "referenzen"

MODEL_NAME = "gemini-3-pro-image-preview"

os.environ["GOOGLE_APPLICATION_CREDENTIALS"] = str(CREDENTIALS_PATH)

client = genai.Client(
    vertexai=True,
    project="fimi-bilder",
    location="global"
)

def generate():
    prompt = """GENERIERE EIN NEUES BILD - Logistikzentrum Außenbereich / Laderampen

Erstelle ein fotorealistisches Bild eines SAUBEREN Logistikzentrums mit Laderampen von außen.

SZENE - Laderampen-Bereich (OHNE MENSCHEN!):
- Mehrere Laderampen/Ladetore nebeneinander (nummeriert)
- Typische graue Industrietore für LKW-Andockung
- Sauberer Betonboden/Asphalt vor den Rampen
- Gelbe oder schwarze Anfahrschutz-Bügel
- Europaletten gestapelt im Hintergrund
- Industrielle Stahlkonstruktion / Überdachung
- Typisches deutsches Logistikzentrum

ATMOSPHÄRE:
- Tageslicht, leicht bewölkt oder sonnig
- Professionell gepflegte Anlage
- Sauber und aufgeräumt
- Betriebsbereit aber momentan ruhig

KRITISCH - VERBOTEN:
- KEINE Menschen im Bild!
- KEINE Reinigungskräfte oder Arbeiter!
- KEINE Reinigungsmaschinen oder Reinigungsgeräte!
- KEINE gelben Kärcher-Maschinen!
- KEINE Logos oder Marken (kein FIMI, kein Kärcher!)
- KEINE LKWs an den Rampen (Rampen sind frei)

STIL:
- Fotorealistisch, professionelle Industriefotografie
- Weitwinkel-Aufnahme der Laderampen
- Helle, klare Beleuchtung

Das Bild zeigt ein blitzsauberes Logistikzentrum - das Ergebnis professioneller Gebäudereinigung."""

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

                        target_dir = PUBLIC_DIR / "ref-025"
                        target_dir.mkdir(parents=True, exist_ok=True)

                        image_name = "ref-025-2"

                        sizes = [1024, 768, 384]
                        for size in sizes:
                            if img.width >= size:
                                ratio = size / img.width
                                new_height = int(img.height * ratio)
                                resized = img.resize((size, new_height), Image.Resampling.LANCZOS)
                            else:
                                resized = img

                            resized.save(target_dir / f"{image_name}-{size}w.avif", 'AVIF', quality=80)
                            resized.save(target_dir / f"{image_name}-{size}w.webp", 'WEBP', quality=80)

                        img.save(target_dir / f"{image_name}.avif", 'AVIF', quality=85)
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
