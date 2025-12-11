#!/usr/bin/env python3
"""
Generiert AUTHENTISCHE Vorher/Nachher Bilder für Fassadenreinigung V3.

WICHTIG - AUTHENTIZITÄT:
- Gleiche Beleuchtung/Wetter in beiden Bildern
- LEICHT unterschiedlicher Winkel (wie Handy-Fotos von Reinigungskraft)
- NUR die Fassade ändert sich - Umgebung bleibt IDENTISCH
- Keine Farbänderungen der Umgebung (Pflanzen, Himmel, etc.)

Modell: gemini-2.0-flash-exp
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

MODEL = "gemini-2.0-flash-exp"

os.environ["GOOGLE_APPLICATION_CREDENTIALS"] = str(CREDENTIALS_PATH)

client = genai.Client(
    vertexai=True,
    project="fimi-bilder",
    location="us-central1"
)

# Konfigurationen - AUTHENTISCH wie Handy-Fotos
PAARE = {
    "1": {
        "typ": "Mehrfamilienhaus",
        "vorher_prompt": """Erstelle ein authentisches Handyfoto eines deutschen Mehrfamilienhauses mit verschmutzter Fassade.

SZENE:
- Typisches deutsches Mehrfamilienhaus, 3 Stockwerke
- Weiße Putzfassade mit DEUTLICH SICHTBAREN grauen Regenstreifen und grünlichem Algenbelag
- Normale Fenster, Balkone
- Bewölkter Tag, diffuses Licht

VERSCHMUTZUNG:
- Graue vertikale Regenstreifen unter den Fenstern
- Grünlicher Algenbelag an schattigen Stellen
- Staubige, matte Oberfläche

AUTHENTIZITÄT:
- Wie ein Handy-Foto von einem Reinigungsmitarbeiter
- Leicht schräge Perspektive (nicht perfekt gerade)
- Normaler bewölkter Tag

KEINE Menschen, KEINE Logos, KEINE Texte.
Aspect ratio: 4:3""",

        "nachher_prompt": """Entferne NUR die Verschmutzung von der Fassade in diesem Bild.

EINZIGE ÄNDERUNG:
- Entferne die grauen Regenstreifen und den grünen Algenbelag von der Putzfassade
- Die Fassade wird weiß/sauber

ABSOLUT VERBOTEN ZU ÄNDERN:
- Der GRAUE BEWÖLKTE HIMMEL muss EXAKT gleich bleiben - KEIN blauer Himmel!
- Die Pflanzen müssen EXAKT gleich bleiben - KEINE grüneren oder andere Pflanzen!
- Die Beleuchtung muss EXAKT gleich bleiben - KEIN Sonnenschein!
- Der Bildwinkel muss FAST gleich bleiben (nur minimale Abweichung erlaubt)

Dies ist ein Vorher/Nachher Foto vom GLEICHEN TAG, GLEICHEN WETTER. Nur die Fassade wurde gereinigt."""
    },

    "2": {
        "typ": "Bürogebäude",
        "vorher_prompt": """Erstelle ein authentisches Handyfoto eines deutschen Bürogebäudes mit verschmutzter Fassade.

SZENE:
- Modernes Bürogebäude, 4-5 Stockwerke
- Helle Fassade mit großen Fensterflächen
- Sichtbare Staubablagerungen und graue Verfärbungen
- Bewölkter Tag, normale Beleuchtung

VERSCHMUTZUNG:
- Staubfilm auf der Fassade - wirkt grau und matt
- Schmutzstreifen an Fensterkanten
- Verfärbungen durch Stadtluft

AUTHENTIZITÄT:
- Wie ein Handy-Foto von einem Reinigungsmitarbeiter
- Normaler Blickwinkel vom Boden aus
- Alltägliche Szene

KEINE Menschen, KEINE Logos, KEINE Firmennamen.
Aspect ratio: 4:3""",

        "nachher_prompt": """Entferne NUR die Verschmutzung von der Fassade in diesem Bild.

EINZIGE ÄNDERUNG:
- Entferne Staub und Verfärbungen von der Fassade
- Die Fenster werden sauberer

ABSOLUT VERBOTEN ZU ÄNDERN:
- Der Himmel muss EXAKT gleich bleiben - gleiche Wolken, gleiche Farbe!
- Die Umgebung muss EXAKT gleich bleiben!
- Die Beleuchtung muss EXAKT gleich bleiben!
- Der Bildwinkel muss FAST gleich bleiben (nur minimale Abweichung erlaubt)

Dies ist ein Vorher/Nachher Foto vom GLEICHEN TAG, GLEICHEN WETTER. Nur die Fassade wurde gereinigt."""
    },

    "3": {
        "typ": "Gewerbehalle",
        "vorher_prompt": """Erstelle ein authentisches Handyfoto einer deutschen Gewerbehalle mit verschmutzter Metallfassade.

SZENE:
- Typische Lagerhalle/Gewerbehalle
- Helle Metallfassade (Trapezblech)
- Sichtbare Verschmutzungen und Verfärbungen
- Bewölkter Tag, normale Beleuchtung

VERSCHMUTZUNG:
- Staubschicht auf dem Metall
- Rostfarbene Laufspuren/Verfärbungen
- Regenspuren und Ablagerungen
- Metall wirkt matt statt glänzend

AUTHENTIZITÄT:
- Wie ein Handy-Foto von einem Reinigungsmitarbeiter
- Industriegebiet-Atmosphäre
- Normale Perspektive

KEINE Logos, KEINE Beschriftungen, KEINE Firmennamen.
Aspect ratio: 4:3""",

        "nachher_prompt": """Entferne NUR die Verschmutzung von der Metallfassade in diesem Bild.

EINZIGE ÄNDERUNG:
- Entferne Staub und Rostflecken von der Metallfassade
- Das Metall sieht sauberer aus

ABSOLUT VERBOTEN ZU ÄNDERN:
- Der Himmel muss EXAKT gleich bleiben!
- Der Asphalt und die Umgebung müssen EXAKT gleich bleiben!
- Die Beleuchtung muss EXAKT gleich bleiben!
- Der Bildwinkel muss FAST gleich bleiben (nur minimale Abweichung erlaubt)

Dies ist ein Vorher/Nachher Foto vom GLEICHEN TAG, GLEICHEN WETTER. Nur die Fassade wurde gereinigt."""
    }
}


def generate_image(prompt: str, retries: int = 3):
    """Generiert ein neues Bild."""
    for attempt in range(1, retries + 1):
        try:
            print(f"    🔄 Generiere... (Versuch {attempt}/{retries})")

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
    """Bearbeitet ein Bild mit Referenz."""
    for attempt in range(1, retries + 1):
        try:
            print(f"    🔄 Bearbeite... (Versuch {attempt}/{retries})")

            response = client.models.generate_content(
                model=MODEL,
                contents=[edit_prompt, reference_image],
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


def save_image(img: Image.Image, name: str):
    """Speichert das Bild als AVIF + Preview."""
    OUTPUT_DIR.mkdir(parents=True, exist_ok=True)

    avif_path = OUTPUT_DIR / f"{name}.avif"
    img.save(avif_path, 'AVIF', quality=85)
    print(f"      ✓ {avif_path.name} ({img.size[0]}x{img.size[1]})")

    preview_path = OUTPUT_DIR / f"{name}-preview.png"
    img.save(preview_path, 'PNG', optimize=True)
    print(f"      ✓ {preview_path.name}")


def main():
    if len(sys.argv) > 1:
        pair_num = sys.argv[1]
        if pair_num not in PAARE:
            print(f"Unbekanntes Paar: {pair_num}")
            print(f"Verfügbar: {', '.join(PAARE.keys())}")
            sys.exit(1)
        pairs_to_generate = {pair_num: PAARE[pair_num]}
    else:
        pairs_to_generate = PAARE

    print(f"\n{'='*60}")
    print("FASSADENREINIGUNG - VORHER/NACHHER V3 (AUTHENTISCH)")
    print(f"{'='*60}")
    print(f"Modell: {MODEL}")
    print(f"Output: {OUTPUT_DIR}")
    print(f"Paare: {len(pairs_to_generate)}")
    print(f"{'='*60}\n")

    erfolg = 0
    fehler = 0

    for num, config in pairs_to_generate.items():
        vorher_name = f"vorher-{num}"
        nachher_name = f"nachher-{num}"

        print(f"\n▶ Paar {num}: {config['typ']}")
        print(f"  {vorher_name} → {nachher_name}")

        # SCHRITT 1: Vorher-Bild
        print(f"\n  📸 Generiere Vorher-Bild...")
        vorher_img = generate_image(config['vorher_prompt'])

        if not vorher_img:
            print(f"  ❌ Fehler bei {vorher_name}")
            fehler += 1
            continue

        print(f"    💾 Speichere:")
        save_image(vorher_img, vorher_name)

        time.sleep(5)

        # SCHRITT 2: Nachher-Bild
        print(f"\n  🧹 Generiere Nachher-Bild (mit Referenz)...")
        nachher_img = edit_image(vorher_img, config['nachher_prompt'])

        if not nachher_img:
            print(f"  ❌ Fehler bei {nachher_name}")
            fehler += 1
            continue

        print(f"    💾 Speichere:")
        save_image(nachher_img, nachher_name)

        print(f"\n  ✅ Paar {num} erfolgreich!")
        erfolg += 1

        if len(pairs_to_generate) > 1:
            time.sleep(10)

    print(f"\n{'='*60}")
    print(f"FERTIG! Erfolg: {erfolg} | Fehler: {fehler}")
    print(f"{'='*60}\n")


if __name__ == "__main__":
    main()
