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
NAV_IMAGES = [
    {
        "filename": "gewerbliche-reinigung",
        "title": "Gewerbliche Reinigung",
        "prompt": """PROFESSIONELLES BILD für Navigation-Menü einer Gebäudereinigungsfirma

SZENE: Gewerbliche Reinigung
- Modernes, sauberes Bürogebäude-Foyer oder Empfangsbereich
- Glänzende Böden, gepflegte Oberflächen
- Helle, einladende Atmosphäre
- Professionelles Business-Ambiente

STIL:
- Hochwertige Architektur-/Interiorfotografie
- Warme, einladende Beleuchtung
- Sauberkeit und Professionalität ausstrahlen
- KEINE Personen, KEINE Reinigungsgeräte sichtbar
- Fokus auf das saubere Ergebnis

TECHNISCH:
- Querformat 16:9
- Hohe Qualität, scharfes Bild
- Professionelle Bildkomposition

VERBOTEN:
- KEINE Menschen
- KEINE Reinigungsmaschinen oder -geräte
- KEINE Logos oder Texte
- KEINE Eimer, Wischmops, etc."""
    },
    {
        "filename": "industriereinigung",
        "title": "Industriereinigung",
        "prompt": """PROFESSIONELLES BILD für Navigation-Menü einer Gebäudereinigungsfirma

SZENE: Industriereinigung
- Saubere, moderne Industriehalle oder Produktionsstätte
- Makellose Industrieböden (Epoxidboden)
- Organisierte, aufgeräumte Umgebung
- Professionelle Industriearchitektur

STIL:
- Hochwertige Industriefotografie
- Gute Beleuchtung, kein dunkles Ambiente
- Sauberkeit und Ordnung ausstrahlen
- KEINE Personen, KEINE Reinigungsgeräte sichtbar
- Fokus auf die saubere, gepflegte Halle

TECHNISCH:
- Querformat 16:9
- Hohe Qualität, scharfes Bild
- Weitwinkel-Perspektive

VERBOTEN:
- KEINE Menschen
- KEINE Reinigungsmaschinen oder -geräte
- KEINE Logos oder Texte
- KEINE Eimer, Wischmops, etc."""
    },
    {
        "filename": "facility-management",
        "title": "Facility Management",
        "prompt": """PROFESSIONELLES BILD für Navigation-Menü einer Gebäudereinigungsfirma

SZENE: Facility Management
- Modernes Gebäude mit gepflegter Außenanlage
- Sauberer Eingangsbereich eines Bürogebäudes
- Gepflegte Grünflächen, saubere Wege
- Professionell gewartetes Gebäude

STIL:
- Hochwertige Architektur-/Immobilienfotografie
- Sonniges, freundliches Wetter
- Gepflegte Gesamtansicht
- KEINE Personen, KEINE Geräte sichtbar
- Fokus auf das gut gewartete Gebäude und Außenanlage

TECHNISCH:
- Querformat 16:9
- Hohe Qualität, scharfes Bild
- Schöne Perspektive auf Gebäude und Umgebung

VERBOTEN:
- KEINE Menschen
- KEINE Fahrzeuge
- KEINE Logos oder Texte
- KEINE Arbeitsgeräte"""
    },
    {
        "filename": "spezialreinigung",
        "title": "Spezialreinigung",
        "prompt": """PROFESSIONELLES BILD für Navigation-Menü einer Gebäudereinigungsfirma

SZENE: Spezialreinigung / Baureinigung
- Frisch renovierter oder neu gebauter Raum
- Makellos saubere Fenster mit Tageslichteinfall
- Glänzende, perfekt gereinigte Oberflächen
- Hochwertiges Finish nach Bauarbeiten

STIL:
- Hochwertige Interiorfotografie
- Helle, strahlende Atmosphäre
- Perfektion und Sauberkeit ausstrahlen
- KEINE Personen, KEINE Reinigungsgeräte sichtbar
- Fokus auf das perfekte Endergebnis

TECHNISCH:
- Querformat 16:9
- Hohe Qualität, scharfes Bild
- Professionelle Beleuchtung

VERBOTEN:
- KEINE Menschen
- KEINE Reinigungsmaschinen oder -geräte
- KEINE Logos oder Texte
- KEINE Eimer, Wischmops, etc."""
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
