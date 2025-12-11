#!/usr/bin/env python3
"""
Generiert ALLE fehlenden Bilder für die Fassadenreinigung-Seite:
- 5 Verfahren-Bilder (4:3)
- 1 ProblemLösung-Bild (4:3)
- 3 Blog-Preview Bilder (16:9)

Modell: gemini-3-pro-image-preview
Location: global
"""

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
OUTPUT_DIR = PROJECT_ROOT / "public" / "images" / "leistungen" / "fassadenreinigung"

MODEL_NAME = "gemini-3-pro-image-preview"

os.environ["GOOGLE_APPLICATION_CREDENTIALS"] = str(CREDENTIALS_PATH)

client = genai.Client(
    vertexai=True,
    project="fimi-bilder",
    location="global"
)

# Bildkonfigurationen - KURZE PROMPTS für mehr Realismus
IMAGES = {
    # ===== VERFAHREN BILDER (4:3) =====
    "verfahren-niederdruck": {
        "prompt": """Fotorealistisches Bild einer professionellen Fassadenreinigung mit Niederdruck-Verfahren.

Zeige einen Fassadenreiniger bei der Arbeit an einer weißen Putzfassade. Schonende Reinigung mit Spezialgerät. Deutsche Architektur. Sonniger Tag.

Keine Logos, keine Texte.""",
        "aspect_ratio": "4:3"
    },

    "verfahren-teleskop": {
        "prompt": """Fotorealistisches Bild eines Teleskop-Reinigungssystems an einem Gebäude.

Zeige eine lange Teleskopstange die bis zur Fassade eines Mehrfamilienhauses reicht. Professionelle Fassadenreinigung ohne Gerüst. Das Gerät sprüht Reinigungsmittel auf die Fassade.

Keine Logos, keine Texte.""",
        "aspect_ratio": "4:3"
    },

    "verfahren-drohne": {
        "prompt": """Fotorealistisches Bild einer professionellen Reinigungsdrohne an einem hohen Gebäude.

Zeige eine Industriedrohne die an der Fassade eines Hochhauses arbeitet. Die Drohne trägt Reinigungsmittel auf. Blauer Himmel im Hintergrund.

Keine Logos, keine Texte auf dem Gebäude.""",
        "aspect_ratio": "4:3"
    },

    "verfahren-biozid": {
        "prompt": """Fotorealistisches Bild einer Biozid-Behandlung an einer vergrünten Fassade.

Zeige einen Fachmann der Biozid auf eine mit Algen befallene Hauswand aufsprüht. Grüner Algenbefall auf weißer Putzfassade. Professionelle Schutzausrüstung.

Keine Logos, keine Texte.""",
        "aspect_ratio": "4:3"
    },

    "verfahren-impraegnierung": {
        "prompt": """Fotorealistisches Bild einer Fassaden-Imprägnierung.

Zeige einen Fachmann der eine klare Schutz-Imprägnierung auf eine frisch gereinigte, weiße Hausfassade aufträgt. Sprühgerät. Saubere, trockene Fassade. Sonniger Tag.

Keine Logos, keine Texte.""",
        "aspect_ratio": "4:3"
    },

    # ===== PROBLEM-LÖSUNG BILD (4:3) =====
    "problem-loesung": {
        "prompt": """Fotorealistisches Bild einer sauberen, gepflegten Hausfassade.

Deutsches Mehrfamilienhaus mit strahlend weißer, sauberer Putzfassade. Das Ergebnis professioneller Fassadenreinigung. Gepflegter Vorgarten. Sonnenschein. Repräsentatives Erscheinungsbild.

Keine Logos, keine Texte.""",
        "aspect_ratio": "4:3"
    },

    # ===== BLOG PREVIEW BILDER (16:9) =====
    "blog-kosten": {
        "prompt": """Fotorealistisches Bild für Blog-Artikel über Fassadenreinigung Kosten.

Zeige ein deutsches Wohnhaus mit halb gereinigter Fassade - links verschmutzt, rechts sauber. Deutlicher Kontrast. Das zeigt den Wert der Reinigung.

WICHTIG: KEINE Texte, KEINE Beschriftungen, KEINE Logos im Bild!

EIN EINZIGES FOTO - keine Collage.""",
        "aspect_ratio": "16:9"
    },

    "blog-algen": {
        "prompt": """Fotorealistisches Bild von Algenbefall an einer Hausfassade.

Nahaufnahme einer weißen Putzfassade mit typischem grünen Algenbefall. Deutlich sichtbare Verfärbungen, besonders unter Fenstern und an Ecken. Authentisches Schadensbild.

EIN EINZIGES FOTO.""",
        "aspect_ratio": "16:9"
    },

    "blog-wdvs": {
        "prompt": """Fotorealistisches Bild eines modernen Gebäudes mit WDVS-Fassade.

Deutsches Mehrfamilienhaus oder Bürogebäude mit gedämmter Fassade (WDVS). Helle, strukturierte Putzoberfläche. Typische deutsche Architektur. Professionell gepflegt.

EIN EINZIGES FOTO - keine Collage.""",
        "aspect_ratio": "16:9"
    },
}


def generate_image(prompt: str, retries: int = 5):
    """Generiert ein Bild mit dem angegebenen Prompt."""
    for attempt in range(1, retries + 1):
        try:
            print(f"  🔄 Versuch {attempt}/{retries}...")

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
                        img = Image.open(BytesIO(part.inline_data.data))
                        if img.mode == 'RGBA':
                            img = img.convert('RGB')
                        return img

            print(f"  ⚠️ Keine Bilddaten (Versuch {attempt}/{retries})")
            if attempt < retries:
                time.sleep(20)

        except Exception as e:
            error_str = str(e)
            if "RESOURCE_EXHAUSTED" in error_str:
                wait_time = 30 * attempt
                print(f"  ⏳ Rate Limit - warte {wait_time}s")
                time.sleep(wait_time)
            else:
                print(f"  ⚠️ Fehler: {error_str[:200]}")
                if attempt < retries:
                    time.sleep(15)

    return None


def save_image(img: Image.Image, name: str):
    """Speichert das Bild als AVIF + Preview."""
    OUTPUT_DIR.mkdir(parents=True, exist_ok=True)

    # Save as AVIF
    avif_path = OUTPUT_DIR / f"{name}.avif"
    img.save(avif_path, 'AVIF', quality=85)
    print(f"    ✓ {avif_path.name}")

    # Save preview PNG
    preview_path = OUTPUT_DIR / f"{name}-preview.png"
    img.save(preview_path, 'PNG', optimize=True)
    print(f"    ✓ {preview_path.name}")


def main():
    # Welches Bild generieren?
    if len(sys.argv) > 1:
        image_name = sys.argv[1]
        if image_name not in IMAGES:
            print(f"Unbekanntes Bild: {image_name}")
            print(f"Verfügbare Bilder: {', '.join(IMAGES.keys())}")
            sys.exit(1)
        images_to_generate = {image_name: IMAGES[image_name]}
    else:
        images_to_generate = IMAGES

    print(f"\n{'='*60}")
    print("FASSADENREINIGUNG - ALLE BILDER GENERATOR")
    print(f"{'='*60}")
    print(f"Modell: {MODEL_NAME}")
    print(f"Output: {OUTPUT_DIR}")
    print(f"Bilder: {len(images_to_generate)}")
    print(f"{'='*60}\n")

    erfolg = 0
    fehler = 0

    for name, config in images_to_generate.items():
        print(f"\n▶ Generiere: {name}")

        full_prompt = f"{config['prompt']}\n\nAspect ratio: {config['aspect_ratio']}"
        img = generate_image(full_prompt)

        if img:
            print(f"  ✓ Original: {img.size[0]}x{img.size[1]}")
            print(f"  💾 Speichere:")
            save_image(img, name)
            print(f"  ✅ {name} erfolgreich!\n")
            erfolg += 1
        else:
            print(f"  ❌ Fehler bei {name}\n")
            fehler += 1

        # Kurze Pause zwischen Generierungen
        if len(images_to_generate) > 1:
            time.sleep(5)

    print(f"\n{'='*60}")
    print(f"FERTIG! Erfolg: {erfolg} | Fehler: {fehler}")
    print(f"{'='*60}\n")


if __name__ == "__main__":
    main()
