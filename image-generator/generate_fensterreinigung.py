#!/usr/bin/env python3
"""
FIMI Fensterreinigung Bilder Generator
======================================
Generiert hochwertige Bilder für die Fensterreinigung-Seite:
- Hero-Bild
- Leistungsbilder
- Feature-Bilder

KEINE Menschen, KEINE Reinigungsgeräte
Typisch deutsche Architektur, saubere Glasflächen, seriös
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
PUBLIC_DIR = PROJECT_ROOT / "public" / "images" / "leistungen" / "fensterreinigung"

MODEL_NAME = "gemini-3-pro-image-preview"

os.environ["GOOGLE_APPLICATION_CREDENTIALS"] = str(CREDENTIALS_PATH)

client = genai.Client(
    vertexai=True,
    project="fimi-bilder",
    location="global"
)

# Fensterreinigung Bilder - KEINE Menschen, KEINE Geräte
FENSTERREINIGUNG_IMAGES = [
    {
        "filename": "hero",
        "title": "Hero - Moderne Glasfassade",
        "prompt": """HOCHWERTIGE ARCHITEKTURFOTOGRAFIE - KEINE PERSONEN, KEINE REINIGUNGSGERÄTE

SZENE: Moderne deutsche Bürogebäude-Glasfassade von außen
- Beeindruckende, kristallklare Glasfassade eines modernen Bürogebäudes
- Typisch deutsche/europäische Architektur (München, Frankfurt, Düsseldorf Stil)
- Makellos saubere, spiegelnde Glasflächen
- Blauer Himmel und Wolken spiegeln sich in den Fenstern
- Elegante Stahl-Glas-Konstruktion

FOTOSTIL:
- Professionelle Architekturfotografie wie von Getty Images
- Goldene Stunde oder blauer Himmel
- Dynamische Perspektive von unten nach oben
- Scharfe Details, perfekte Belichtung
- Premium Business-Atmosphäre

TECHNISCH:
- Querformat 16:9
- Höchste Qualität, 4K-Look
- Architektur-Weitwinkel

ABSOLUT WICHTIG:
- KEINE PERSONEN/MENSCHEN im Bild
- KEINE Reinigungsgeräte, Leitern, Gerüste
- Nur die reine, saubere Architektur
- Seriöser, professioneller Business-Look
- Typisch deutsche Präzision und Qualität"""
    },
    {
        "filename": "buero-fenster",
        "title": "Modernes Büro mit großen Fenstern",
        "prompt": """HOCHWERTIGE INTERIORFOTOGRAFIE - KEINE PERSONEN, KEINE REINIGUNGSGERÄTE

SZENE: Modernes deutsches Büro mit großen, sauberen Fenstern
- Helles, modernes Open-Space Büro
- Große, bodentiefe Fenster mit Blick nach draußen
- Kristallklare, makellos saubere Glasflächen
- Elegante Büromöbel (leer, keine Personen)
- Natürliches Tageslicht flutet den Raum
- Grünpflanzen als Akzent

FOTOSTIL:
- Professionelle Immobilien-/Interiorfotografie
- Helles, freundliches Ambiente
- Warme, einladende Farben
- Premium-Qualität wie Architectural Digest
- Deutsche Ordnung und Klarheit

TECHNISCH:
- Querformat 16:9
- Professionelle Qualität
- Interieur-Weitwinkel

ABSOLUT WICHTIG:
- KEINE PERSONEN/MENSCHEN im Bild
- KEINE Reinigungsgeräte oder Equipment
- Fokus auf saubere, klare Glasflächen
- Professioneller, seriöser Look"""
    },
    {
        "filename": "schaufenster",
        "title": "Elegantes Schaufenster Geschäft",
        "prompt": """HOCHWERTIGE ARCHITEKTURFOTOGRAFIE - KEINE PERSONEN, KEINE REINIGUNGSGERÄTE

SZENE: Elegantes deutsches Geschäft mit großem Schaufenster
- Hochwertiges Ladengeschäft in einer deutschen Innenstadt
- Großes, kristallklares Schaufenster
- Elegante Fassade (Backstein, Stuck oder modern)
- Typisch deutsche Einkaufsstraße (wie Maximilianstraße München)
- Saubere, gepflegte Umgebung
- Evtl. dezente Begrünung

FOTOSTIL:
- Professionelle Stadtfotografie/Architekturfotografie
- Schönes Tageslicht, evtl. blaue Stunde
- Premium Einzelhandel-Atmosphäre
- Hochwertig und einladend
- Deutsche Qualität und Tradition

TECHNISCH:
- Querformat 16:9
- Professionelle Qualität
- Straßenperspektive

ABSOLUT WICHTIG:
- KEINE PERSONEN/MENSCHEN im Bild
- KEINE Reinigungsgeräte
- KEINE Autos im Vordergrund
- Fokus auf das saubere, einladende Schaufenster
- Seriös und hochwertig"""
    },
    {
        "filename": "glastrennwand",
        "title": "Moderne Glastrennwand Büro",
        "prompt": """HOCHWERTIGE INTERIORFOTOGRAFIE - KEINE PERSONEN, KEINE REINIGUNGSGERÄTE

SZENE: Modernes Büro mit eleganten Glastrennwänden
- Hochwertiges Büro mit Glas-Raumteilern
- Kristallklare Glaswände zwischen Bürobereichen
- Modernes, minimalistisches Design
- Elegante Konferenzräume hinter Glas sichtbar
- Premium Büroausstattung
- Natürliches Licht

FOTOSTIL:
- Professionelle Corporate-Interiorfotografie
- Modern, clean, aufgeräumt
- Business-Premium-Atmosphäre
- Wie ein Foto für einen Büromöbel-Katalog
- Deutsche Präzision und Qualität

TECHNISCH:
- Querformat 16:9
- Professionelle Qualität
- Weitwinkel-Interior

ABSOLUT WICHTIG:
- KEINE PERSONEN/MENSCHEN im Bild
- KEINE Reinigungsgeräte
- Fokus auf klare, saubere Glasflächen
- Professioneller Business-Look"""
    },
    {
        "filename": "wintergarten",
        "title": "Eleganter Wintergarten",
        "prompt": """HOCHWERTIGE ARCHITEKTURFOTOGRAFIE - KEINE PERSONEN, KEINE REINIGUNGSGERÄTE

SZENE: Eleganter deutscher Wintergarten an einem Wohnhaus
- Hochwertiger Wintergarten mit viel Glas
- Kristallklare Glasflächen (Dach und Seiten)
- Schöne deutsche Garten-Umgebung sichtbar
- Elegante Möbel im Inneren (leer)
- Hochwertige Materialien (Aluminium, Holz)
- Gepflegter Garten im Hintergrund

FOTOSTIL:
- Professionelle Immobilienfotografie
- Helles, freundliches Tageslicht
- Premium Wohn-Atmosphäre
- Wie aus einem Architektur-Magazin
- Deutsche Handwerksqualität

TECHNISCH:
- Querformat 16:9
- Professionelle Qualität
- Leichte Außenperspektive

ABSOLUT WICHTIG:
- KEINE PERSONEN/MENSCHEN im Bild
- KEINE Reinigungsgeräte
- Fokus auf saubere Glasflächen
- Hochwertig und einladend"""
    },
]


def generate_image(image_item: dict, retries: int = 5) -> bool:
    """Generiert ein einzelnes Bild."""

    for attempt in range(1, retries + 1):
        try:
            print(f"   🔄 Generiere... (Versuch {attempt}/{retries})")

            response = client.models.generate_content(
                model=MODEL_NAME,
                contents=[image_item['prompt']],
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

                        filename = image_item['filename']

                        # Responsive Größen
                        sizes = [1376, 1024, 768, 384]
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
    print("FIMI FENSTERREINIGUNG BILDER GENERATOR")
    print("="*60)
    print(f"\nGeneriere {len(FENSTERREINIGUNG_IMAGES)} Bilder...")
    print("KEINE Menschen, KEINE Reinigungsgeräte")
    print("Typisch deutsche Architektur, saubere Glasflächen\n")

    success_count = 0

    for i, image_item in enumerate(FENSTERREINIGUNG_IMAGES, 1):
        print(f"\n[{i}/{len(FENSTERREINIGUNG_IMAGES)}] {image_item['title']}")

        if generate_image(image_item):
            success_count += 1

        # Pause zwischen Bildern
        if i < len(FENSTERREINIGUNG_IMAGES):
            print("   ⏳ Warte 15 Sekunden...")
            time.sleep(15)

    print("\n" + "="*60)
    print(f"FERTIG: {success_count}/{len(FENSTERREINIGUNG_IMAGES)} Bilder generiert")
    print(f"Ausgabe: {PUBLIC_DIR}")
    print("="*60 + "\n")

    return 0 if success_count == len(FENSTERREINIGUNG_IMAGES) else 1


if __name__ == "__main__":
    # Einzelnes Bild generieren mit Argument
    if len(sys.argv) > 1:
        name = sys.argv[1]
        for image_item in FENSTERREINIGUNG_IMAGES:
            if name in image_item['filename'] or name.lower() in image_item['title'].lower():
                print(f"\nGeneriere Einzelbild: {image_item['title']}")
                success = generate_image(image_item)
                sys.exit(0 if success else 1)
        print(f"Bild '{name}' nicht gefunden!")
        print("Verfügbare Bilder:")
        for img in FENSTERREINIGUNG_IMAGES:
            print(f"  - {img['filename']}: {img['title']}")
        sys.exit(1)

    # Alle generieren
    sys.exit(main())
