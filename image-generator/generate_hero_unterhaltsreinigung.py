#!/usr/bin/env python3
"""
Generiert Bilder für die Unterhaltsreinigung-Seite
- Hero-Bild (21:9 Format)
- Leistungsumfang-2 Bild (4:3 Format) - Reinigungsintervalle

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
OUTPUT_DIR = PROJECT_ROOT / "public" / "images" / "leistungen" / "unterhaltsreinigung"

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
        "prompt": """Professionelles Architekturfoto eines modernen deutschen Bürogebäudes mit MAKELLOSER Sauberkeit.

SZENE:
- Großzügiger, lichtdurchfluteter Empfangsbereich oder Lobby eines deutschen Unternehmens
- Hochwertige Materialien: polierter Steinboden (Marmor oder Granit), Glasfassade, elegante Deckenbeleuchtung
- Klare, aufgeräumte Linien - minimalistisches deutsches Design
- Morgen- oder Tageslicht durch große Fensterfront
- Der Boden GLÄNZT makellos - spiegelt das Licht wider
- Grünpflanzen als dezente Dekoration

QUALITÄT:
- Ultrahochauflösend, gestochen scharf
- Professionelle Architekturfotografie-Ästhetik
- Warme, einladende Farbpalette
- Natürliches Licht mit weichen Schatten

ABSOLUT VERBOTEN:
- KEINE Menschen oder Personen
- KEINE Reinigungsgeräte oder -mittel
- KEINE Logos oder Texte
- KEINE Putzwagen oder Eimer
- KEINE sichtbaren Reinigungskräfte

Das Bild soll den EFFEKT professioneller Unterhaltsreinigung zeigen: ein perfekt gepflegter, einladender Raum.

Aspect ratio: 21:9""",
        "sizes": [(1376, 590), (1024, 439), (768, 329), (384, 165)]
    },
    "leistungsumfang-2": {
        "prompt": """Professionelles Architekturfoto eines einzigen, zusammenhängenden modernen deutschen Büroraums.

WICHTIG: EIN EINZIGES FOTO - keine Collage, kein Zusammenschnitt, keine geteilten Bilder!

SZENE:
- Ein großer, offener Büroraum in einem modernen deutschen Unternehmen
- Mehrere Arbeitsplätze mit weißen Schreibtischen in Reihen angeordnet
- Alle Monitore AUSGESCHALTET (komplett schwarze Bildschirme)
- Große Fensterfront mit natürlichem Tageslicht
- Hochwertiger Bodenbelag (helles Parkett oder polierter Beton)
- Dezente Grünpflanzen zur Dekoration
- Klare, minimalistische Einrichtung
- Im Hintergrund evtl. ein Besprechungstisch oder Lounge-Ecke sichtbar

STIL:
- Weitwinkel-Aufnahme des gesamten Raums
- Einheitliche Perspektive - KEIN Splitscreen oder Collage
- Warmes, natürliches Licht
- Skandinavisch-deutsches Design
- Aufgeräumt und makellos sauber

QUALITÄT:
- Fotorealistisch, gestochen scharf
- Professionelle Architekturfotografie
- Natürliche Farben ohne Filter

ABSOLUT VERBOTEN:
- KEINE Collage oder zusammengeschnittene Bilder
- KEINE Menschen oder Personen
- KEINE Reinigungsgeräte
- KEINE Logos oder Texte
- Monitore müssen komplett AUS sein

Aspect ratio: 4:3""",
        "sizes": [(1024, 768), (768, 576), (384, 288)]
    }
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


def save_image_variants(img: Image.Image, name: str, sizes: list):
    """Speichert das Bild in verschiedenen Größen und Formaten."""
    OUTPUT_DIR.mkdir(parents=True, exist_ok=True)

    for width, height in sizes:
        # Bild skalieren
        resized = img.resize((width, height), Image.Resampling.LANCZOS)

        # WebP speichern
        webp_path = OUTPUT_DIR / f"{name}-{width}w.webp"
        resized.save(webp_path, "WEBP", quality=85)
        print(f"    ✓ {webp_path.name}")

        # AVIF speichern
        avif_path = OUTPUT_DIR / f"{name}-{width}w.avif"
        resized.save(avif_path, "AVIF", quality=80)
        print(f"    ✓ {avif_path.name}")

    # Hauptversion (größte Größe) als .avif
    largest_width, largest_height = sizes[0]
    main_img = img.resize((largest_width, largest_height), Image.Resampling.LANCZOS)
    main_path = OUTPUT_DIR / f"{name}.avif"
    main_img.save(main_path, "AVIF", quality=85)
    print(f"    ✓ {main_path.name} (Hauptversion)")


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
    print("UNTERHALTSREINIGUNG BILDER GENERATOR")
    print(f"{'='*60}")
    print(f"Modell: {MODEL_NAME}")
    print(f"Output: {OUTPUT_DIR}")
    print(f"{'='*60}\n")

    for name, config in images_to_generate.items():
        print(f"\n▶ Generiere: {name}")

        img = generate_image(config['prompt'])

        if img:
            print(f"  ✓ Original: {img.size[0]}x{img.size[1]}")
            print(f"  💾 Speichere Varianten:")
            save_image_variants(img, name, config['sizes'])
            print(f"  ✅ {name} erfolgreich!\n")
        else:
            print(f"  ❌ Fehler bei {name}\n")

    print(f"\n{'='*60}")
    print("FERTIG!")
    print(f"{'='*60}\n")


if __name__ == "__main__":
    main()
