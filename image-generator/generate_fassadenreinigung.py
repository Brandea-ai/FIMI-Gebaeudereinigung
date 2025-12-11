#!/usr/bin/env python3
"""
Generiert Bilder für die Fassadenreinigung-Seite
- Hero-Bild (21:9 Format)
- Vorher/Nachher Bilder (4:3 Format) - 3 Paare

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

# Bildkonfigurationen
IMAGES = {
    "hero": {
        "prompt": """Fotorealistisches Bild einer modernen, sauberen Gebäudefassade in Deutschland.

Zeige ein gepflegtes Mehrfamilienhaus oder Bürogebäude mit strahlend weißer/heller Putzfassade.
Blauer Himmel, Sonnenschein, typisch deutsche Architektur. Die Fassade ist makellos sauber - das Ergebnis professioneller Fassadenreinigung.

Keine Menschen, keine Logos.""",
        "aspect_ratio": "21:9"
    },

    # Vorher/Nachher Paar 1: Mehrfamilienhaus
    "vorher-1": {
        "prompt": """Fotorealistisches Bild einer vergrünten Hausfassade mit Algen und Moos.

Deutsches Mehrfamilienhaus mit WDVS-Fassade (Wärmedämmung). Die weiße Putzfassade ist stark mit grünen Algen und dunklem Moos bedeckt, besonders an der Nordseite und unter Fenstern. Typisches Erscheinungsbild einer vernachlässigten Fassade nach 5-10 Jahren.

Realistisch, authentisch, typisch deutsch. Keine Menschen.""",
        "aspect_ratio": "4:3"
    },
    "nachher-1": {
        "prompt": """Fotorealistisches Bild derselben Hausfassade nach professioneller Reinigung.

Deutsches Mehrfamilienhaus mit WDVS-Fassade. Die Putzfassade ist jetzt strahlend weiß und sauber, komplett frei von Algen und Moos. Frisch gereinigt, wie neu. Blauer Himmel im Hintergrund.

Realistisch, authentisch, typisch deutsch. Keine Menschen.""",
        "aspect_ratio": "4:3"
    },

    # Vorher/Nachher Paar 2: Bürogebäude
    "vorher-2": {
        "prompt": """Fotorealistisches Bild eines verschmutzten Bürogebäudes.

Modernes deutsches Bürogebäude mit heller Putzfassade. Die Fassade zeigt deutliche Verschmutzungen: Grünbelag, Regenspuren, graue Ablagerungen. Besonders unter Fenstern und an Kanten sichtbar.

Realistisch, authentisch. Keine Menschen.""",
        "aspect_ratio": "4:3"
    },
    "nachher-2": {
        "prompt": """Fotorealistisches Bild desselben Bürogebäudes nach professioneller Fassadenreinigung.

Modernes deutsches Bürogebäude mit strahlend sauberer, heller Fassade. Keine Verschmutzungen mehr sichtbar. Professionell gereinigt, repräsentativ. Sonniger Tag.

Realistisch, authentisch. Keine Menschen.""",
        "aspect_ratio": "4:3"
    },

    # Vorher/Nachher Paar 3: Gewerbehalle
    "vorher-3": {
        "prompt": """Fotorealistisches Bild einer verschmutzten Gewerbehalle oder Industriegebäude.

Deutsche Lagerhalle oder Produktionsgebäude mit Metallfassade oder Betonfassade. Sichtbare Verschmutzungen durch Ruß, Umwelteinflüsse, dunkle Ablagerungen. Typisches Industriegebäude.

Realistisch, authentisch. Keine Menschen.""",
        "aspect_ratio": "4:3"
    },
    "nachher-3": {
        "prompt": """Fotorealistisches Bild einer sauberen Gewerbehalle nach professioneller Reinigung.

Deutsche Lagerhalle oder Produktionsgebäude mit sauberer Metallfassade. Professionell gereinigt, keine Verschmutzungen mehr sichtbar. Gepflegter Eindruck. Blauer Himmel.

WICHTIG: Keine Logos, keine Texte, keine Beschriftungen auf dem Gebäude!

Realistisch, authentisch. Keine Menschen.""",
        "aspect_ratio": "4:3"
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
    """Speichert das Bild als AVIF."""
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
    print("FASSADENREINIGUNG BILDER GENERATOR")
    print(f"{'='*60}")
    print(f"Modell: {MODEL_NAME}")
    print(f"Output: {OUTPUT_DIR}")
    print(f"{'='*60}\n")

    for name, config in images_to_generate.items():
        print(f"\n▶ Generiere: {name}")

        full_prompt = f"{config['prompt']}\n\nAspect ratio: {config['aspect_ratio']}"
        img = generate_image(full_prompt)

        if img:
            print(f"  ✓ Original: {img.size[0]}x{img.size[1]}")
            print(f"  💾 Speichere:")
            save_image(img, name)
            print(f"  ✅ {name} erfolgreich!\n")
        else:
            print(f"  ❌ Fehler bei {name}\n")

    print(f"\n{'='*60}")
    print("FERTIG!")
    print(f"{'='*60}\n")


if __name__ == "__main__":
    main()
