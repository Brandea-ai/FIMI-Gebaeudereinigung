#!/usr/bin/env python3
"""
Generiert ein authentisches Büro-Bild für die ProblemLösungSection.

Zeigt ein sauberes, modernes Büro - KEIN Infografik, KEINE Unternehmensdarstellung.
Einfach ein fotorealistisches Bild eines gepflegten Büros.

Modell: gemini-2.0-flash-exp
"""

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

MODEL = "gemini-2.0-flash-exp"

os.environ["GOOGLE_APPLICATION_CREDENTIALS"] = str(CREDENTIALS_PATH)

client = genai.Client(
    vertexai=True,
    project="fimi-bilder",
    location="us-central1"
)

PROMPT = """Erstelle ein fotorealistisches Bild eines sauberen, modernen Büros.

SZENE:
- Modernes deutsches Büro / Open Space
- Saubere Schreibtische mit Monitoren (Bildschirme AUS oder zeigen neutrale Farbe)
- Gepflegte Böden (Teppich oder Laminat)
- Große saubere Fenster mit Tageslicht
- Ordentliche, aufgeräumte Atmosphäre

WICHTIG:
- Das Büro soll LEER sein - KEINE Menschen
- Sauber und gepflegt - das Ergebnis professioneller Reinigung
- Authentisches Stockfoto-Feeling
- KEINE Logos, KEINE Texte, KEINE Infografiken
- KEINE Unternehmensdarstellungen oder Diagramme

Das Bild soll zeigen: "So sieht ein Büro aus, wenn Profis es reinigen"

Aspect ratio: 4:3"""


def generate_image(prompt: str, retries: int = 3):
    """Generiert ein Bild."""
    for attempt in range(1, retries + 1):
        try:
            print(f"  🔄 Generiere... (Versuch {attempt}/{retries})")

            response = client.models.generate_content(
                model=MODEL,
                contents=[prompt],
                config=types.GenerateContentConfig(
                    response_modalities=["IMAGE", "TEXT"],
                )
            )

            if response.candidates:
                for part in response.candidates[0].content.parts:
                    if hasattr(part, 'inline_data') and part.inline_data:
                        img = Image.open(BytesIO(part.inline_data.data))
                        if img.mode == 'RGBA':
                            img = img.convert('RGB')
                        return img

            print(f"  ⚠️ Keine Bilddaten")
            if attempt < retries:
                time.sleep(15)

        except Exception as e:
            error_str = str(e)
            if "RESOURCE_EXHAUSTED" in error_str:
                wait_time = 30 * attempt
                print(f"  ⏳ Rate Limit - warte {wait_time}s")
                time.sleep(wait_time)
            else:
                print(f"  ⚠️ Fehler: {error_str[:150]}")
                if attempt < retries:
                    time.sleep(10)

    return None


def save_image(img: Image.Image, name: str):
    """Speichert das Bild."""
    OUTPUT_DIR.mkdir(parents=True, exist_ok=True)

    avif_path = OUTPUT_DIR / f"{name}.avif"
    img.save(avif_path, 'AVIF', quality=85)
    print(f"  ✓ {avif_path.name} ({img.size[0]}x{img.size[1]})")

    preview_path = OUTPUT_DIR / f"{name}-preview.png"
    img.save(preview_path, 'PNG', optimize=True)
    print(f"  ✓ {preview_path.name}")


def main():
    print(f"\n{'='*50}")
    print("BÜROREINIGUNG - PROBLEM-LÖSUNG BILD")
    print(f"{'='*50}")
    print(f"Modell: {MODEL}")
    print(f"Output: {OUTPUT_DIR}")
    print(f"{'='*50}\n")

    print("📸 Generiere sauberes Büro-Bild...")
    img = generate_image(PROMPT)

    if img:
        print(f"\n💾 Speichere:")
        save_image(img, "problem-loesung")
        print(f"\n✅ Erfolgreich!")
    else:
        print(f"\n❌ Fehler!")

    print(f"\n{'='*50}\n")


if __name__ == "__main__":
    main()
