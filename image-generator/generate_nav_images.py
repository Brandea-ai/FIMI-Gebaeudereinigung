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
        "prompt": """AUTHENTISCHES STOCKFOTO für eine Unternehmenswebsite

SZENE: Professionelle Reinigungskraft bei der Arbeit in einem modernen Büro
- Eine echte Reinigungskraft (Frau oder Mann, ca. 35-50 Jahre) wischt den Boden in einem hellen, modernen Büro
- Die Person trägt professionelle Arbeitskleidung (Poloshirt, Arbeitshose) - KEINE spezifische Firmenfarbe
- Natürliche Arbeitsszene, nicht gestellt
- Modernes, helles Büroumfeld mit Schreibtischen im Hintergrund

FOTOSTIL:
- Wie ein echtes Stockfoto von Getty Images oder Shutterstock
- Natürliches Tageslicht oder Bürobeleuchtung
- Authentische, dokumentarische Qualität
- DSLR-Kamera-Look, leichte Tiefenschärfe
- Warme, natürliche Farben - KEINE Corporate-Farben

TECHNISCH:
- Querformat 16:9
- Hohe Auflösung, professionelle Schärfe
- Wie ein Foto, das man bei Google Bildersuche "Büroreinigung" findet

WICHTIG:
- KEINE künstlichen CI-Farben (kein Türkis, kein Navy)
- KEINE Logos auf der Kleidung
- Realistische, alltägliche Arbeitsszene
- Person soll freundlich und professionell wirken"""
    },
    {
        "filename": "industriereinigung",
        "title": "Industriereinigung",
        "prompt": """AUTHENTISCHES STOCKFOTO für eine Unternehmenswebsite

SZENE: Industriereinigung in einer großen Produktionshalle
- Ein Arbeiter mit Scheuersaugmaschine (z.B. Kärcher, GELB) reinigt den Boden einer Industriehalle
- Die Person trägt Sicherheitskleidung: Warnweste, Sicherheitsschuhe
- Große, helle Industriehalle mit hohen Decken
- Maschinen oder Regale im Hintergrund

FOTOSTIL:
- Wie ein echtes Industriefoto von Getty Images
- Authentische Industrieatmosphäre
- Natürliches Hallenlicht (große Fenster oder Oberlichter)
- Dokumentarischer Stil, nicht inszeniert
- Realistische Farben der Umgebung

TECHNISCH:
- Querformat 16:9
- Professionelle Qualität
- Weitwinkel-Perspektive zeigt Größe der Halle

WICHTIG:
- KEINE künstlichen CI-Farben
- Echte Industrieumgebung
- Authentische Arbeitsszene
- Professionelle aber alltägliche Situation"""
    },
    {
        "filename": "facility-management",
        "title": "Facility Management",
        "prompt": """AUTHENTISCHES STOCKFOTO für eine Unternehmenswebsite

SZENE: Hausmeister/Facility Manager bei der Außenanlagenpflege
- Ein Hausmeister (Mann, ca. 40-55 Jahre) bei der Arbeit im Außenbereich
- Gepflegter Eingangsbereich eines Bürogebäudes oder Wohnanlage
- Die Person harkt Laub, pflegt Grünanlagen oder reinigt Wege
- Professionelle Arbeitskleidung, evtl. Handschuhe

FOTOSTIL:
- Wie ein echtes Stockfoto bei der Google-Suche "Hausmeisterservice"
- Natürliches Tageslicht, leicht bewölkt oder sonnig
- Authentische Außenaufnahme
- Dokumentarischer, nicht gestellter Stil
- Natürliche Farben der Jahreszeit

TECHNISCH:
- Querformat 16:9
- Professionelle Qualität
- Gute Schärfentiefe

WICHTIG:
- KEINE künstlichen CI-Farben
- Realistische deutsche Architektur im Hintergrund
- Authentische Arbeitsszene
- Freundlicher, kompetenter Eindruck"""
    },
    {
        "filename": "spezialreinigung",
        "title": "Spezialreinigung",
        "prompt": """AUTHENTISCHES STOCKFOTO für eine Unternehmenswebsite

SZENE: Professionelle Fensterreinigung oder Spezialreinigung
- Ein Fensterputzer bei der Arbeit an großen Glasflächen
- Professionelle Ausrüstung: Einwascher, Abzieher (z.B. UNGER, GRÜN)
- Große Fensterfront eines modernen Gebäudes
- Konzentrierte, professionelle Arbeit

FOTOSTIL:
- Wie ein echtes Stockfoto von Shutterstock
- Natürliches Tageslicht
- Klare, scharfe Aufnahme
- Authentische Arbeitsszene
- Natürliche Farben

TECHNISCH:
- Querformat 16:9
- Professionelle Qualität
- Interessante Perspektive (evtl. von innen nach außen oder Seitenperspektive)

WICHTIG:
- KEINE künstlichen CI-Farben
- Authentische Reinigungstechnik sichtbar
- Professioneller Eindruck
- Wie ein Foto das man bei "professionelle Fensterreinigung" findet"""
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
