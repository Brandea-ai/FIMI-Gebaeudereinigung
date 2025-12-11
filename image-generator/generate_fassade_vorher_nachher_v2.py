#!/usr/bin/env python3
"""
Generiert realistische Vorher/Nachher Bilder für Fassadenreinigung V2.

VERBESSERUNGEN:
- 2K Auflösung (2048px)
- Detailliertere Prompts für realistische Ergebnisse
- Bessere Logik: Nachher zeigt echte Veränderungen (saubere Fenster = klarere Spiegelungen)
- Explizite Anweisungen für Konsistenz

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

# Konfigurationen für realistische Vorher/Nachher Paare
PAARE = {
    "1": {
        "typ": "Mehrfamilienhaus",
        "vorher_prompt": """Erstelle ein fotorealistisches Bild eines deutschen Mehrfamilienhauses mit leicht verschmutzter Fassade.

GEBÄUDE:
- Typisches deutsches Mehrfamilienhaus, 3-4 Stockwerke
- Weiße/hellgraue Putzfassade
- Balkone, normale Fenster mit weißen Rahmen
- Gepflegter Vorgarten mit Hecke

VERSCHMUTZUNG (LEICHT, REALISTISCH):
- Dezente graue Regenstreifen unter einigen Fenstern
- Leichter grünlicher Schimmer an der Nordseite (links)
- Staubablagerungen in Ecken und Kanten
- Die Fenster sind leicht staubig, Spiegelungen gedämpft

WICHTIG:
- Tageslicht, leicht bewölkt
- Perspektive: Schrägansicht von vorne
- KEINE Menschen, KEINE Logos, KEINE Texte
- Fotorealistische Qualität, 2K Auflösung

Aspect ratio: 4:3""",

        "nachher_prompt": """Bearbeite dieses Bild: Zeige das EXAKT GLEICHE Gebäude nach professioneller Fassadenreinigung.

KRITISCHE ÄNDERUNGEN - ALLE müssen sichtbar sein:
1. FASSADE KOMPLETT WEISS - ALLE grauen Regenstreifen und Verfärbungen MÜSSEN ENTFERNT werden! Die gesamte Putzfassade muss strahlend weiß sein.
2. FENSTER GEPUTZT - Spiegelungen sind jetzt kristallklar und zeigen den blauen Himmel scharf
3. KEINE Verschmutzung mehr sichtbar - weder Streifen, noch Flecken, noch Grünbelag

BLEIBT GLEICH:
- Exakt gleiche Perspektive, Bildausschnitt, Architektur
- Gleiche Tageszeit und Umgebung

WICHTIG: Die Fassade muss KOMPLETT SAUBER sein - keine einzige Verschmutzung darf übrig bleiben!"""
    },

    "2": {
        "typ": "Bürogebäude",
        "vorher_prompt": """Erstelle ein fotorealistisches Bild eines modernen deutschen Bürogebäudes mit leicht verschmutzter Fassade.

GEBÄUDE:
- Modernes Bürogebäude, 4-5 Stockwerke
- Helle Fassade mit großen Fensterflächen
- Klare, geometrische Architektur
- Gepflegter Eingangsbereich

VERSCHMUTZUNG (LEICHT, REALISTISCH):
- Staubfilm auf den Fenstern - Reflexionen sind matt und unklar
- Leichte graue Verfärbungen an der Fassade durch Stadtluft
- Wasserflecken an Fensterkanten
- Spinnweben in oberen Ecken

WICHTIG:
- Tageslicht, sonnig
- Perspektive: Leichte Untersicht, Eingangsbereich sichtbar
- KEINE Menschen, KEINE Logos, KEINE Firmennamen
- Fotorealistische Qualität, 2K Auflösung

Aspect ratio: 4:3""",

        "nachher_prompt": """Bearbeite dieses Bild: Zeige das EXAKT GLEICHE Bürogebäude nach professioneller Reinigung.

ÄNDERUNGEN:
1. Alle Fenster sind geputzt - Reflexionen sind jetzt KRISTALLKLAR (man sieht den blauen Himmel und Wolken scharf gespiegelt)
2. Fassade ist sauber - keine grauen Verfärbungen mehr
3. Keine Wasserflecken oder Spinnweben mehr
4. Das Gebäude wirkt repräsentativ und einladend

BLEIBT GLEICH:
- Exakt gleiche Perspektive und Bildausschnitt
- Gleiche Tageszeit und Sonneneinstrahlung
- Gleiche Umgebung

WICHTIG: Der größte sichtbare Unterschied sind die FENSTER - vorher matt, nachher kristallklar mit scharfen Spiegelungen!"""
    },

    "3": {
        "typ": "Gewerbehalle",
        "vorher_prompt": """Erstelle ein fotorealistisches Bild einer deutschen Gewerbehalle/Lagerhalle mit leicht verschmutzter Fassade.

GEBÄUDE:
- Typische Gewerbehalle/Logistikhalle
- Helle Metallfassade (Trapezblech), silber/weiß
- Große Rolltore/Laderampen
- Asphaltierter Vorplatz

VERSCHMUTZUNG (LEICHT, REALISTISCH):
- Staubschicht auf der Metallfassade - wirkt matt statt glänzend
- Leichte rostfarbene Verfärbungen an Kanten und Schrauben
- Regenspuren/Laufspuren auf dem Metall
- Die Fassade reflektiert das Licht gedämpft

WICHTIG:
- Tageslicht, klarer Himmel
- Perspektive: Seitenansicht mit Laderampe
- KEINE Logos, KEINE Firmennamen, KEINE Beschriftungen
- Fotorealistische Qualität, 2K Auflösung

Aspect ratio: 4:3""",

        "nachher_prompt": """Bearbeite dieses Bild: Zeige die EXAKT GLEICHE Gewerbehalle nach professioneller Fassadenreinigung.

ÄNDERUNGEN:
1. Metallfassade ist sauber - glänzt wieder und reflektiert Licht stärker
2. Keine Staubschicht mehr - Oberfläche sieht frisch aus
3. Rostflecken und Verfärbungen sind entfernt
4. Die Fassade sieht aus wie neu installiert

BLEIBT GLEICH:
- Exakt gleiche Perspektive und Bildausschnitt
- Gleiche Tageszeit und Beleuchtung
- Gleicher Vorplatz und Umgebung
- Gleiche Architektur

WICHTIG: Die Metallfassade muss GLÄNZENDER sein - sauberes Metall reflektiert mehr Licht!"""
    }
}


def generate_image(prompt: str, retries: int = 3):
    """Generiert ein neues Bild in 2K."""
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
    print("FASSADENREINIGUNG - VORHER/NACHHER V2 (2K)")
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
