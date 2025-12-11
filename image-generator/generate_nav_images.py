#!/usr/bin/env python3
"""
FIMI Navigation Dropdown Bilder Generator
==========================================
Generiert 4 Bilder für das Leistungen-Dropdown-Menü:
1. Gewerbliche Reinigung
2. Industriereinigung
3. Facility Management
4. Spezialreinigung
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
PUBLIC_DIR = PROJECT_ROOT / "public" / "images" / "nav"

MODEL_NAME = "gemini-3-pro-image-preview"

os.environ["GOOGLE_APPLICATION_CREDENTIALS"] = str(CREDENTIALS_PATH)

client = genai.Client(
    vertexai=True,
    project="fimi-bilder",
    location="global"
)

# Die 4 Leistungskategorien für das Dropdown-Menü
# WICHTIG: KEINE PERSONEN - nur Räume, Equipment und Umgebungen
NAV_IMAGES = [
    {
        "filename": "gewerbliche-reinigung",
        "title": "Gewerbliche Reinigung",
        "prompt": """AUTHENTISCHES STOCKFOTO - KEINE PERSONEN

SZENE: Sauberes, modernes Büro nach professioneller Reinigung
- Helles, modernes Open-Space Büro mit glänzendem Boden
- Professioneller Reinigungswagen mit Zubehör steht bereit (Eimer, Mopps, Sprühflaschen)
- Makellos saubere Oberflächen, spiegelnder Boden
- Schreibtische und Bürostühle im Hintergrund
- Pflanzen und natürliches Licht durch große Fenster

FOTOSTIL:
- Wie ein echtes Stockfoto von Getty Images oder Shutterstock
- Natürliches Tageslicht, warme Atmosphäre
- DSLR-Kamera-Look, professionelle Tiefenschärfe
- Architektur-/Interiorfotografie-Stil
- Warme, einladende Farben

TECHNISCH:
- Querformat 16:9
- Hohe Auflösung, professionelle Schärfe
- Leichte Weitwinkel-Perspektive

WICHTIG:
- ABSOLUT KEINE PERSONEN/MENSCHEN im Bild
- KEINE künstlichen CI-Farben (kein Türkis, kein Navy)
- Fokus auf Sauberkeit und Professionalität
- Reinigungsequipment als visuelles Element"""
    },
    {
        "filename": "industriereinigung",
        "title": "Industriereinigung",
        "prompt": """AUTHENTISCHES STOCKFOTO - KEINE PERSONEN

SZENE: Große Industriehalle mit professioneller Reinigungsmaschine
- Weitläufige, saubere Produktions- oder Lagerhalle
- Gelbe Kärcher Scheuersaugmaschine (Aufsitz-Reinigungsmaschine) steht auf dem glänzenden Industrieboden
- Hohe Decken mit Stahlträgern und Oberlichtern
- Industrieregale oder Maschinen im Hintergrund
- Frisch gereinigter, glänzender Betonboden

FOTOSTIL:
- Wie ein echtes Industriefoto von Getty Images
- Authentische Industrieatmosphäre
- Natürliches Hallenlicht durch große Fenster/Oberlichter
- Dokumentarischer Architektur-Stil
- Realistische Industriefarben (grau, gelb, metallisch)

TECHNISCH:
- Querformat 16:9
- Professionelle Qualität
- Weitwinkel zeigt Größe der Halle

WICHTIG:
- ABSOLUT KEINE PERSONEN/MENSCHEN im Bild
- KEINE künstlichen CI-Farben
- Industriemaschine als Hauptmotiv
- Sauberkeit und Größe der Halle betonen"""
    },
    {
        "filename": "facility-management",
        "title": "Facility Management",
        "prompt": """AUTHENTISCHES STOCKFOTO - KEINE PERSONEN

SZENE: Gepflegter Außenbereich eines modernen Gebäudes
- Eingangsbereich eines Bürogebäudes oder einer Wohnanlage
- Perfekt gepflegte Grünanlage mit geschnittenem Rasen
- Saubere Gehwege und Pflastersteine
- Moderne deutsche Architektur (Backstein oder Glas)
- Herbstlaub ordentlich zusammengeharkt (optional)
- Gartengeräte wie Rechen oder Laubbläser im Vordergrund

FOTOSTIL:
- Wie ein echtes Immobilien-/Architektur-Stockfoto
- Natürliches Tageslicht, goldene Stunde oder leicht bewölkt
- Professionelle Außenaufnahme
- Immobilienfotografie-Stil
- Natürliche, saisonale Farben

TECHNISCH:
- Querformat 16:9
- Professionelle Qualität
- Mittlere Brennweite, gute Schärfentiefe

WICHTIG:
- ABSOLUT KEINE PERSONEN/MENSCHEN im Bild
- KEINE künstlichen CI-Farben
- Gepflegte, einladende Atmosphäre
- Deutsche Architektur erkennbar"""
    },
    {
        "filename": "spezialreinigung",
        "title": "Spezialreinigung",
        "prompt": """AUTHENTISCHES STOCKFOTO - KEINE PERSONEN

SZENE: Große Glasfassade mit professionellem Fensterreinigungsequipment
- Moderne Glasfassade eines Bürogebäudes
- Professionelles Fensterreinigungsequipment: Abzieher, Einwascher, Teleskopstange (grün/UNGER)
- Kristallklare, frisch gereinigte Glasflächen
- Spiegelungen in der Glasfassade
- Wassertropfen oder Reinigungsschaum als Detail

FOTOSTIL:
- Wie ein echtes Architektur-Stockfoto von Shutterstock
- Natürliches Tageslicht, klarer Tag
- Klare, scharfe Aufnahme
- Architektur-/Produktfotografie-Stil
- Natürliche Farben, Blau des Himmels in Spiegelungen

TECHNISCH:
- Querformat 16:9
- Professionelle Qualität
- Interessante Perspektive von unten nach oben oder Detailaufnahme

WICHTIG:
- ABSOLUT KEINE PERSONEN/MENSCHEN im Bild
- KEINE künstlichen CI-Farben
- Reinigungsequipment und sauberes Glas als Hauptmotiv
- Professioneller, hochwertiger Eindruck"""
    },
]


def generate_nav_image(nav_item: dict, retries: int = 5) -> bool:
    """Generiert ein Bild für das Navigation-Dropdown."""

    for attempt in range(1, retries + 1):
        try:
            print(f"   🔄 Generiere... (Versuch {attempt}/{retries})")

            response = client.models.generate_content(
                model=MODEL_NAME,
                contents=[nav_item['prompt']],
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

                        PUBLIC_DIR.mkdir(parents=True, exist_ok=True)

                        filename = nav_item['filename']

                        # Responsive Größen für Navigation-Bilder
                        sizes = [800, 600, 400]
                        for size in sizes:
                            if img.width >= size:
                                ratio = size / img.width
                                new_height = int(img.height * ratio)
                                resized = img.resize((size, new_height), Image.Resampling.LANCZOS)
                            else:
                                resized = img

                            resized.save(PUBLIC_DIR / f"{filename}-{size}w.avif", 'AVIF', quality=80)
                            resized.save(PUBLIC_DIR / f"{filename}-{size}w.webp", 'WEBP', quality=80)

                        # Hauptbild
                        img.save(PUBLIC_DIR / f"{filename}.avif", 'AVIF', quality=85)
                        img.save(PUBLIC_DIR / f"{filename}.webp", 'WEBP', quality=85)
                        print(f"   ✅ {filename} gespeichert ({img.size[0]}x{img.size[1]})")
                        return True

            print(f"   ⚠️ Keine Bilddaten (Versuch {attempt}/{retries})")
            if attempt < retries:
                time.sleep(20)

        except Exception as e:
            error_str = str(e)
            if "RESOURCE_EXHAUSTED" in error_str:
                wait_time = 30 * attempt
                print(f"   ⏳ Rate Limit - warte {wait_time}s")
                time.sleep(wait_time)
            else:
                print(f"   ⚠️ Fehler: {error_str[:100]}")
                if attempt < retries:
                    time.sleep(15)

    return False


def main():
    print("\n" + "="*60)
    print("FIMI NAVIGATION DROPDOWN BILDER GENERATOR")
    print("="*60)
    print(f"\nGeneriere {len(NAV_IMAGES)} Navigationsbilder...")
    print("Geschätzte Zeit: ~5-8 Minuten")
    print("Geschätzte Kosten: ~$1.00\n")

    success_count = 0

    for i, nav_item in enumerate(NAV_IMAGES, 1):
        print(f"\n[{i}/{len(NAV_IMAGES)}] {nav_item['title']}")

        if generate_nav_image(nav_item):
            success_count += 1

        # Pause zwischen Bildern
        if i < len(NAV_IMAGES):
            print("   ⏳ Warte 15 Sekunden...")
            time.sleep(15)

    print("\n" + "="*60)
    print(f"FERTIG: {success_count}/{len(NAV_IMAGES)} Navigationsbilder generiert")
    print("="*60 + "\n")

    return 0 if success_count == len(NAV_IMAGES) else 1


if __name__ == "__main__":
    # Einzelnes Bild generieren mit Argument
    if len(sys.argv) > 1:
        name = sys.argv[1]
        for nav_item in NAV_IMAGES:
            if name in nav_item['filename'] or name in nav_item['title'].lower():
                print(f"\nGeneriere Einzelbild: {nav_item['title']}")
                success = generate_nav_image(nav_item)
                sys.exit(0 if success else 1)
        print(f"Bild '{name}' nicht gefunden!")
        sys.exit(1)

    # Alle generieren
    sys.exit(main())
