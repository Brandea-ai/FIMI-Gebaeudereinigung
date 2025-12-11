#!/usr/bin/env python3
"""
Generiert realistische Vorher/Nachher Bilder für Fassadenreinigung.

METHODE (Best Practice für Nano Banana Pro / Gemini 3 Pro):
1. Generiere ein realistisches "Vorher"-Bild mit LEICHTER Verschmutzung
2. Übergebe dieses Bild als Referenz an Gemini
3. Bitte Gemini das Bild zu "reinigen" → Nachher-Bild

Modell: gemini-2.0-flash-exp (für Bildbearbeitung mit Referenz)
Backup: gemini-3-pro-image-preview

Quellen:
- https://ai.google.dev/gemini-api/docs/image-generation
- https://www.atlabs.ai/blog/the-ultimate-nano-banana-pro-prompting-guide-mastering-gemini-3-pro-image
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

# Modelle
MODEL_GENERATE = "gemini-2.0-flash-exp"  # Für Bildgenerierung
MODEL_EDIT = "gemini-2.0-flash-exp"      # Für Bildbearbeitung mit Referenz

os.environ["GOOGLE_APPLICATION_CREDENTIALS"] = str(CREDENTIALS_PATH)

client = genai.Client(
    vertexai=True,
    project="fimi-bilder",
    location="us-central1"  # Flash benötigt us-central1
)

# Vorher-Bild Konfigurationen - REALISTISCH, LEICHTE Verschmutzung
VORHER_BILDER = {
    "vorher-1": {
        "prompt": """Fotorealistisches Bild eines deutschen Mehrfamilienhauses.

Die weiße Putzfassade zeigt LEICHTE, realistische Verschmutzung:
- Dezente graue Regenspuren unter den Fenstern
- Leichter grünlicher Schimmer an schattigen Stellen
- Typischer Zustand nach 3-5 Jahren ohne Reinigung

Das Gebäude sieht nicht verfallen aus, nur leicht ungepflegt.
Typisch deutsche Architektur, 3-4 Stockwerke, gepflegter Vorgarten.

KEINE Logos, KEINE Texte, KEINE Menschen.""",
        "clean_prompt": "Reinige diese Fassade professionell. Entferne alle Verschmutzungen, Regenspuren und Grünbelag. Die Fassade soll wieder strahlend weiß und sauber sein, aber EXAKT das gleiche Gebäude bleiben. Gleiche Perspektive, gleicher Bildausschnitt, gleiche Beleuchtung. Nur die Fassade ist jetzt sauber.",
        "aspect_ratio": "4:3"
    },
    "vorher-2": {
        "prompt": """Fotorealistisches Bild eines modernen deutschen Bürogebäudes.

Die helle Fassade zeigt LEICHTE, realistische Verschmutzung:
- Staubablagerungen an den Fensterrahmen
- Leichte graue Verfärbungen durch Umwelteinflüsse
- Dezente Regenspuren an hellen Flächen

Das Gebäude wirkt professionell aber etwas ungepflegt.
Moderne Architektur, große Fenster, gepflegte Umgebung.

KEINE Logos, KEINE Texte, KEINE Menschen.""",
        "clean_prompt": "Reinige diese Fassade professionell. Entferne alle Staubablagerungen, Verfärbungen und Regenspuren. Die Fassade soll wieder makellos und repräsentativ sein, aber EXAKT das gleiche Gebäude bleiben. Gleiche Perspektive, gleicher Bildausschnitt, gleiche Beleuchtung.",
        "aspect_ratio": "4:3"
    },
    "vorher-3": {
        "prompt": """Fotorealistisches Bild einer deutschen Gewerbehalle.

Die helle Metallfassade zeigt LEICHTE, realistische Verschmutzung:
- Staubschicht auf horizontalen Flächen
- Leichte Verfärbungen durch Industriestaub
- Dezente Schlieren an der Fassade

Das Gebäude sieht funktional aber etwas staubig aus.
Typische Lagerhalle, Laderampen, Industriegebiet.

KEINE Logos, KEINE Texte, KEINE Beschriftungen, KEINE Menschen.""",
        "clean_prompt": "Reinige diese Fassade professionell. Entferne allen Staub und alle Verfärbungen. Die Metallfassade soll wieder sauber und gepflegt aussehen, aber EXAKT das gleiche Gebäude bleiben. Gleiche Perspektive, gleicher Bildausschnitt, gleiche Beleuchtung.",
        "aspect_ratio": "4:3"
    },
}


def generate_image(prompt: str, retries: int = 3):
    """Generiert ein neues Bild."""
    for attempt in range(1, retries + 1):
        try:
            print(f"    🔄 Generiere... (Versuch {attempt}/{retries})")

            response = client.models.generate_content(
                model=MODEL_GENERATE,
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

            print(f"    ⚠️ Keine Bilddaten")
            if attempt < retries:
                time.sleep(15)

        except Exception as e:
            error_str = str(e)
            if "RESOURCE_EXHAUSTED" in error_str:
                wait_time = 30 * attempt
                print(f"    ⏳ Rate Limit - warte {wait_time}s")
                time.sleep(wait_time)
            else:
                print(f"    ⚠️ Fehler: {error_str[:150]}")
                if attempt < retries:
                    time.sleep(10)

    return None


def edit_image(reference_image: Image.Image, edit_prompt: str, retries: int = 3):
    """Bearbeitet ein Bild mit Referenz (Nano Banana Pro Methode)."""
    for attempt in range(1, retries + 1):
        try:
            print(f"    🔄 Bearbeite mit Referenz... (Versuch {attempt}/{retries})")

            # Bild + Text Prompt kombinieren (Best Practice)
            response = client.models.generate_content(
                model=MODEL_EDIT,
                contents=[
                    edit_prompt,
                    reference_image
                ],
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

            print(f"    ⚠️ Keine Bilddaten bei Bearbeitung")
            if attempt < retries:
                time.sleep(15)

        except Exception as e:
            error_str = str(e)
            if "RESOURCE_EXHAUSTED" in error_str:
                wait_time = 30 * attempt
                print(f"    ⏳ Rate Limit - warte {wait_time}s")
                time.sleep(wait_time)
            else:
                print(f"    ⚠️ Fehler: {error_str[:150]}")
                if attempt < retries:
                    time.sleep(10)

    return None


def save_image(img: Image.Image, name: str):
    """Speichert das Bild als AVIF + Preview."""
    OUTPUT_DIR.mkdir(parents=True, exist_ok=True)

    avif_path = OUTPUT_DIR / f"{name}.avif"
    img.save(avif_path, 'AVIF', quality=85)
    print(f"      ✓ {avif_path.name}")

    preview_path = OUTPUT_DIR / f"{name}-preview.png"
    img.save(preview_path, 'PNG', optimize=True)
    print(f"      ✓ {preview_path.name}")


def main():
    # Welches Paar generieren?
    if len(sys.argv) > 1:
        pair_num = sys.argv[1]
        key = f"vorher-{pair_num}"
        if key not in VORHER_BILDER:
            print(f"Unbekanntes Paar: {pair_num}")
            print(f"Verfügbar: 1, 2, 3")
            sys.exit(1)
        pairs_to_generate = {key: VORHER_BILDER[key]}
    else:
        pairs_to_generate = VORHER_BILDER

    print(f"\n{'='*60}")
    print("FASSADENREINIGUNG - VORHER/NACHHER MIT REFERENZBILD")
    print(f"{'='*60}")
    print(f"Generieren: {MODEL_GENERATE}")
    print(f"Bearbeiten: {MODEL_EDIT}")
    print(f"Output: {OUTPUT_DIR}")
    print(f"Paare: {len(pairs_to_generate)}")
    print(f"{'='*60}\n")

    erfolg = 0
    fehler = 0

    for vorher_key, config in pairs_to_generate.items():
        nachher_key = vorher_key.replace("vorher", "nachher")
        print(f"\n▶ Paar: {vorher_key} → {nachher_key}")

        # SCHRITT 1: Vorher-Bild generieren
        print(f"\n  📸 Schritt 1: Generiere {vorher_key}")
        full_prompt = f"{config['prompt']}\n\nAspect ratio: {config['aspect_ratio']}"
        vorher_img = generate_image(full_prompt)

        if not vorher_img:
            print(f"  ❌ Fehler bei {vorher_key}")
            fehler += 1
            continue

        print(f"    ✓ Vorher-Bild: {vorher_img.size[0]}x{vorher_img.size[1]}")
        print(f"    💾 Speichere:")
        save_image(vorher_img, vorher_key)

        # Kurze Pause
        time.sleep(5)

        # SCHRITT 2: Nachher-Bild durch Bearbeitung erstellen
        print(f"\n  🧹 Schritt 2: Reinige zu {nachher_key}")
        nachher_img = edit_image(vorher_img, config['clean_prompt'])

        if not nachher_img:
            print(f"  ❌ Fehler bei {nachher_key}")
            fehler += 1
            continue

        print(f"    ✓ Nachher-Bild: {nachher_img.size[0]}x{nachher_img.size[1]}")
        print(f"    💾 Speichere:")
        save_image(nachher_img, nachher_key)

        print(f"  ✅ Paar {vorher_key}/{nachher_key} erfolgreich!\n")
        erfolg += 1

        # Pause zwischen Paaren
        if len(pairs_to_generate) > 1:
            time.sleep(10)

    print(f"\n{'='*60}")
    print(f"FERTIG! Paare erfolgreich: {erfolg} | Fehler: {fehler}")
    print(f"{'='*60}\n")


if __name__ == "__main__":
    main()
