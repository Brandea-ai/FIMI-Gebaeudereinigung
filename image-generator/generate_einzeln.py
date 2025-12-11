#!/usr/bin/env python3
"""
Generiert einzelne Bilder für Niederdruck und Biozid.
NUR EINE PERSON, physikalisch korrekt!
"""

import os
import sys
from pathlib import Path
from google import genai
from google.genai import types
from PIL import Image
import pillow_avif
import io
import time

credentials_path = Path(__file__).parent / "credentials" / "fimi-bilder-credentials.json"
os.environ["GOOGLE_APPLICATION_CREDENTIALS"] = str(credentials_path)

MODEL_NAME = "gemini-3-pro-image-preview"

client = genai.Client(
    vertexai=True,
    project="fimi-bilder",
    location="global"
)

OUTPUT_DIR = Path(__file__).parent.parent / "public" / "images" / "leistungen" / "fassadenreinigung"

PROMPTS = {
    "niederdruck": """REALISTISCHES STOCKFOTO - FASSADENREINIGUNG

Fotografiere einen EINZELNEN Arbeiter bei der Fassadenreinigung.

SZENE:
- EIN Mann reinigt eine helle Hausfassade mit einem Hochdruckreiniger
- Er steht mit dem Rücken zur Kamera
- Er hält EINE Reinigungslanze mit beiden Händen
- Sanfter Wasserstrahl trifft auf die Wand
- Gelber KÄRCHER Hochdruckreiniger steht am Boden
- Leichte Verschmutzung auf der Fassade (dezent)

WICHTIG:
- NUR EINE PERSON!
- EINE Lanze, gehalten mit ZWEI Händen
- Physikalisch korrekt (keine doppelten Arme oder Geräte)
- Person von HINTEN, Gesicht nicht sichtbar
- Deutsches Einfamilienhaus, gepflegter Garten
- Natürliches Tageslicht, bewölkt
- 21:9 Breitformat
- Wie echtes Getty Images Stockfoto""",

    "biozid": """REALISTISCHES STOCKFOTO - BIOZID-BEHANDLUNG

Fotografiere einen EINZELNEN Arbeiter bei der Fassadenbehandlung.

SZENE:
- EIN Mann behandelt eine Hausfassade mit einem Rückensprühgerät
- Er steht mit dem Rücken zur Kamera
- Er trägt EIN weißes/blaues Sprühgerät auf dem Rücken
- Er hält EINE Sprühlanze und sprüht auf die Wand
- Feiner Sprühnebel sichtbar
- Leichter grünlicher Algenbelag auf heller Putzfassade (dezent!)

WICHTIG:
- NUR EINE PERSON!
- EIN Sprühgerät auf dem Rücken
- Physikalisch korrekt (keine doppelten Arme oder Geräte)
- Person von HINTEN, Gesicht nicht sichtbar
- Blaue Arbeitskleidung
- Deutsches Wohnhaus, Rasen im Vordergrund
- Natürliches Tageslicht, bewölkt
- 21:9 Breitformat
- Wie echtes Getty Images Stockfoto
- DEZENTER Algenbefall (kein Horror-Bild!)"""
}


def generate_single(name: str):
    """Generiert ein einzelnes Bild."""

    if name not in PROMPTS:
        print(f"Unbekannt: {name}. Verfügbar: {list(PROMPTS.keys())}")
        return

    prompt = PROMPTS[name]
    filename = f"verfahren-{name}"

    print(f"\n🔄 Generiere {name}...")

    try:
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
                    img = Image.open(io.BytesIO(image_data))

                    if img.mode in ('RGBA', 'P'):
                        img = img.convert('RGB')

                    # Crop zu 21:9
                    target_ratio = 21 / 9
                    current_ratio = img.width / img.height

                    if abs(current_ratio - target_ratio) > 0.1:
                        if current_ratio > target_ratio:
                            new_width = int(img.height * target_ratio)
                            left = (img.width - new_width) // 2
                            img = img.crop((left, 0, left + new_width, img.height))
                        else:
                            new_height = int(img.width / target_ratio)
                            top = (img.height - new_height) // 2
                            img = img.crop((0, top, img.width, top + new_height))

                    # Speichern
                    img.save(OUTPUT_DIR / f"{filename}.avif", 'AVIF', quality=85)
                    img.save(OUTPUT_DIR / f"{filename}.webp", 'WEBP', quality=85)

                    # Responsive
                    for size in [1376, 1024, 768, 512]:
                        ratio = size / img.width
                        new_height = int(img.height * ratio)
                        resized = img.resize((size, new_height), Image.LANCZOS)
                        resized.save(OUTPUT_DIR / f"{filename}-{size}w.avif", 'AVIF', quality=80)
                        resized.save(OUTPUT_DIR / f"{filename}-{size}w.webp", 'WEBP', quality=80)

                    print(f"✅ {filename} gespeichert ({img.width}x{img.height})")
                    return True

        print("⚠️ Kein Bild generiert")
        return False

    except Exception as e:
        print(f"❌ Fehler: {e}")
        return False


if __name__ == "__main__":
    if len(sys.argv) < 2:
        print("Usage: python3 generate_einzeln.py <niederdruck|biozid>")
        sys.exit(1)

    name = sys.argv[1]
    generate_single(name)
