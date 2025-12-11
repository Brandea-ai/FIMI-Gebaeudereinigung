#!/usr/bin/env python3
"""Generiert Blog-Bilder für Winterdienst-Artikel."""

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
BLOG_DIR = PROJECT_ROOT / "public" / "images" / "blog"

MODEL_NAME = "gemini-3-pro-image-preview"

os.environ["GOOGLE_APPLICATION_CREDENTIALS"] = str(CREDENTIALS_PATH)

client = genai.Client(
    vertexai=True,
    project="fimi-bilder",
    location="global"
)

def generate_preview_image(retries: int = 5):
    """Generiert Preview-Bild 1408x768."""

    prompt = """Fotorealistisches Stockfoto von Winterdienst-Ausrüstung auf einem verschneiten Weg.

SZENE:
- Im Vordergrund: eine orange Schneeschaufel, ein grauer Sack mit Streusalz/Auftausalz, und ein orange-weißer Warnkegel
- Die Gegenstände sind natürlich arrangiert auf frischem, weißem Schnee
- Ein verschneiter Gehweg/Pfad
- Weiches, natürliches Wintermorgen-Licht mit sanften Schatten
- Verschwommener Hintergrund zeigt einen grauen Winterhimmel

STIL:
- Professionelle Stockfotografie wie Shutterstock oder Getty Images
- Natürliche Winterfarben: reines Weiß (Schnee), Grau (Himmel), Orange (Ausrüstung)
- Gestochen scharfer Fokus auf die Ausrüstung
- Authentische, realistische Winteratmosphäre
- Horizontale Komposition
- Hochauflösend

KRITISCH - VERBOTEN:
- KEINE Menschen im Bild
- KEINE sichtbaren Logos oder Schriftzüge
- KEINE Markenlogos
- KEIN Text im Bild

Das Bild soll professionelle Winterdienst-Ausrüstung in natürlicher Winterumgebung zeigen."""

    for attempt in range(1, retries + 1):
        try:
            print(f"Generiere Preview-Bild... (Versuch {attempt}/{retries})")

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

                        # Resize to 1408x768
                        img_resized = img.resize((1408, 768), Image.Resampling.LANCZOS)

                        BLOG_DIR.mkdir(parents=True, exist_ok=True)
                        output_path = BLOG_DIR / "winterdienst-bayern-pflichten-haftung-bgh-urteil-2025.png"
                        img_resized.save(output_path, 'PNG', optimize=True)

                        print(f"Preview-Bild gespeichert: {output_path} ({img_resized.size[0]}x{img_resized.size[1]})")
                        return True

            print(f"Keine Bilddaten (Versuch {attempt}/{retries})")
            if attempt < retries:
                time.sleep(20)

        except Exception as e:
            error_str = str(e)
            if "RESOURCE_EXHAUSTED" in error_str:
                wait_time = 30 * attempt
                print(f"Rate Limit - warte {wait_time}s")
                time.sleep(wait_time)
            else:
                print(f"Fehler: {error_str[:200]}")
                if attempt < retries:
                    time.sleep(15)

    return False

def generate_hero_image(retries: int = 5):
    """Generiert Hero-Bild 1584x672 ultra-wide."""

    prompt = """Fotorealistisches, panoramisches Winterlandschaftsfoto eines professionell geräumten Weges.

SZENE:
- Ultra-breite, kinematische Komposition
- Ein dunkelgrauer, geräumter Gehweg/Pfad schneidet durch den Bildmittelpunkt
- Auf beiden Seiten des Weges: makelloser, weißer Schnee
- Im Vordergrund am Wegrand: professionelle Schneeräum-Ausrüstung - eine orange Schneeschaufel, ein Salzstreuer/Streugerät, und ein Wartungsbesen
- Im Hintergrund: Eingang eines modernen Geschäftsgebäudes mit Glastüren, leicht unscharf
- Weiches Wintermorgen-Licht erzeugt sanfte, lange Schatten
- Weitwinkel-Perspektive

STIL:
- Editorial-Qualität wie National Geographic oder hochwertige Stockfotografie
- Natürliche, authentische Farben: Weiß (Schnee), Grau (Asphalt), Orange (Ausrüstung), Blassblau-Grau (Himmel)
- Professionelle Winter-Wartungsszene
- Horizontales Ultra-Breitformat
- Hochauflösend, gestochen scharf

KRITISCH - VERBOTEN:
- KEINE Menschen im Bild
- KEINE sichtbaren Logos oder Schriftzüge
- KEINE Markenlogos
- KEIN Text im Bild

Das Bild soll eine professionell geräumte Winterszene zeigen - das Ergebnis von professionellem Winterdienst."""

    for attempt in range(1, retries + 1):
        try:
            print(f"Generiere Hero-Bild... (Versuch {attempt}/{retries})")

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

                        # Resize to 1584x672
                        img_resized = img.resize((1584, 672), Image.Resampling.LANCZOS)

                        BLOG_DIR.mkdir(parents=True, exist_ok=True)
                        output_path = BLOG_DIR / "winterdienst-bayern-pflichten-haftung-bgh-urteil-2025-hero.png"
                        img_resized.save(output_path, 'PNG', optimize=True)

                        print(f"Hero-Bild gespeichert: {output_path} ({img_resized.size[0]}x{img_resized.size[1]})")
                        return True

            print(f"Keine Bilddaten (Versuch {attempt}/{retries})")
            if attempt < retries:
                time.sleep(20)

        except Exception as e:
            error_str = str(e)
            if "RESOURCE_EXHAUSTED" in error_str:
                wait_time = 30 * attempt
                print(f"Rate Limit - warte {wait_time}s")
                time.sleep(wait_time)
            else:
                print(f"Fehler: {error_str[:200]}")
                if attempt < retries:
                    time.sleep(15)

    return False

if __name__ == "__main__":
    print("=== Winterdienst Blog-Bilder Generator ===\n")

    print("1/2: Preview-Bild (1408x768)")
    success1 = generate_preview_image()

    if success1:
        print("\nWarte 25 Sekunden vor dem nächsten Bild...\n")
        time.sleep(25)

    print("2/2: Hero-Bild (1584x672)")
    success2 = generate_hero_image()

    if success1 and success2:
        print("\n=== Beide Bilder erfolgreich generiert! ===")
        sys.exit(0)
    else:
        print("\n=== FEHLER: Nicht alle Bilder konnten generiert werden ===")
        sys.exit(1)
