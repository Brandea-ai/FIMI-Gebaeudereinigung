#!/usr/bin/env python3
"""
Generiert minimalistische Produktfotos von Fensterreinigung-Equipment.
Wie professionelle Katalog-/Produktfotos auf neutralem Hintergrund.
KEINE Personen - nur Equipment.
"""

import os
from pathlib import Path
from google import genai
from google.genai import types
from PIL import Image
import pillow_avif
import io
import time

# Credentials
credentials_path = Path(__file__).parent / "credentials" / "fimi-bilder-credentials.json"
os.environ["GOOGLE_APPLICATION_CREDENTIALS"] = str(credentials_path)

MODEL_NAME = "gemini-3-pro-image-preview"

client = genai.Client(
    vertexai=True,
    project="fimi-bilder",
    location="global"
)

OUTPUT_DIR = Path(__file__).parent.parent / "public" / "images" / "leistungen" / "fensterreinigung"

# Fensterreinigung Equipment - UNGER Produktfotos (aus LIEFERANTEN.md)
# UNGER = Fensterreinigung Spezialist aus Solingen
# Farben: GRÜN (Griffe), Silber/Aluminium (Stangen), Blau/Weiß (Bezüge)
EQUIPMENT_IMAGES = [
    {
        "filename": "equipment-unger-set",
        "title": "UNGER ErgoTec Fensterreinigung Komplett-Set",
        "prompt": """PREMIUM PRODUKTFOTO - UNGER FENSTERREINIGUNG

PRODUKT: UNGER ErgoTec Profi-Fensterreinigung Set (Solingen, Deutschland)

ENTHÄLT:
- UNGER ErgoTec Fensterabzieher mit GRÜNEM ergonomischem Griff
- UNGER ErgoTec Einwascher mit GRÜNEM Griff und WEISSEM/BLAUEM Mikrofaser-Bezug
- UNGER OptiLoc Teleskopstange SILBER/Aluminium
- UNGER Profi-Eimer GRÜN mit Sieb

FARBEN (WICHTIG - UNGER Corporate):
- Griffe: Charakteristisches UNGER GRÜN
- Stangen: SILBER/Aluminium
- Bezüge: WEISS oder BLAU
- Eimer: GRÜN

HINTERGRUND:
- Reiner weißer oder sehr hellgrauer Studio-Hintergrund
- Perfekte Studiobeleuchtung
- Dezente Schatten für Tiefe

FOTOSTIL:
- Premium B2B Produktfotografie
- Wie aus UNGER Profi-Katalog
- Minimalistisch, aufgeräumt, hochwertig
- Alle Produkte schön arrangiert
- Schärfe auf allen Details

TECHNISCH:
- Querformat 16:9
- 4K Qualität
- Produktfoto-Stil

ABSOLUT WICHTIG:
- KEINE PERSONEN
- UNGER = GRÜN (nicht rot, nicht gelb!)
- Premium deutsche Qualität ausstrahlen"""
    },
    {
        "filename": "equipment-unger-abzieher",
        "title": "UNGER ErgoTec Fensterabzieher Detail",
        "prompt": """PREMIUM PRODUKTFOTO - UNGER ABZIEHER DETAIL

PRODUKT: UNGER ErgoTec S Fensterabzieher (Solingen, Deutschland)

DETAILS:
- Ergonomischer GRÜNER Griff (UNGER typisch)
- Hochglanz-Edelstahl Schiene
- Professionelle Gummilippe
- Perfekte Verarbeitung sichtbar
- Deutsche Qualität

ARRANGEMENT:
- Ein oder zwei Abzieher elegant platziert
- Verschiedene Größen möglich (35cm, 45cm)
- Detail-Fokus auf Qualität

HINTERGRUND:
- Reiner weißer Studio-Hintergrund
- Perfekte Produktbeleuchtung
- Minimalistisch

FOTOSTIL:
- Close-up Produktfotografie
- Hochwertig wie Apple-Produktfotos
- Jedes Detail scharf
- Premium-Qualität

TECHNISCH:
- Querformat 16:9
- Höchste Schärfe
- Studio-Qualität

ABSOLUT WICHTIG:
- KEINE PERSONEN
- GRÜNER Griff = UNGER
- Seriös, professionell, hochwertig"""
    },
    {
        "filename": "equipment-unger-reinwasser",
        "title": "UNGER HydroPower Reinwasser-System",
        "prompt": """PREMIUM PRODUKTFOTO - UNGER REINWASSER SYSTEM

PRODUKT: UNGER HydroPower Reinwasser-System für Glasreinigung

DETAILS:
- UNGER HydroPower DI Reinwasser-Filter (kompakter Tank)
- Silberne/graue professionelle Bauweise
- Anschlüsse und Schläuche
- GRÜNE UNGER Akzente
- Teleskopstange mit Wasserzufuhr
- nlite Bürsten-Aufsatz

ARRANGEMENT:
- System kompakt zusammengestellt
- Professionell arrangiert
- Zubehör daneben

HINTERGRUND:
- Hellgrauer oder weißer Studio-Hintergrund
- Clean, minimalistisch
- Dezente Schatten

FOTOSTIL:
- Technische B2B Produktfotografie
- Wie aus Profi-Katalog
- Hochwertig, seriös
- Deutsche Ingenieurskunst

TECHNISCH:
- Querformat 16:9
- Detailreich
- Premium-Qualität

ABSOLUT WICHTIG:
- KEINE PERSONEN
- UNGER = GRÜN Akzente
- Professionelles Reinwasser-System"""
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
                        img = Image.open(io.BytesIO(image_data))

                        if img.mode in ('RGBA', 'P'):
                            img = img.convert('RGB')

                        base_name = image_item['filename']

                        # Haupt-Bild speichern
                        avif_path = OUTPUT_DIR / f"{base_name}.avif"
                        webp_path = OUTPUT_DIR / f"{base_name}.webp"

                        img.save(avif_path, 'AVIF', quality=85)
                        img.save(webp_path, 'WEBP', quality=85)

                        # Responsive Größen
                        sizes = [1376, 1024, 768, 384]
                        for size in sizes:
                            ratio = size / img.width
                            new_height = int(img.height * ratio)
                            resized = img.resize((size, new_height), Image.LANCZOS)

                            resized.save(OUTPUT_DIR / f"{base_name}-{size}w.avif", 'AVIF', quality=80)
                            resized.save(OUTPUT_DIR / f"{base_name}-{size}w.webp", 'WEBP', quality=80)

                        print(f"   ✅ {base_name} gespeichert ({img.width}x{img.height})")
                        return True

            print(f"   ⚠️ Kein Bild in Antwort")

        except Exception as e:
            print(f"   ❌ Fehler: {e}")
            if attempt < retries:
                time.sleep(5)

    return False


def main():
    print("=" * 60)
    print("FENSTERREINIGUNG EQUIPMENT PRODUKTFOTOS")
    print("=" * 60)
    print()

    OUTPUT_DIR.mkdir(parents=True, exist_ok=True)

    print(f"Generiere {len(EQUIPMENT_IMAGES)} Equipment-Produktfotos...")
    print("Minimalistisch, neutraler Hintergrund, Katalog-Stil")
    print()

    success = 0
    for i, item in enumerate(EQUIPMENT_IMAGES, 1):
        print(f"\n[{i}/{len(EQUIPMENT_IMAGES)}] {item['title']}")
        if generate_image(item):
            success += 1
        if i < len(EQUIPMENT_IMAGES):
            print("   ⏳ Warte 15 Sekunden...")
            time.sleep(15)

    print()
    print("=" * 60)
    print(f"FERTIG: {success}/{len(EQUIPMENT_IMAGES)} Produktfotos generiert")
    print(f"Ausgabe: {OUTPUT_DIR}")
    print("=" * 60)


if __name__ == "__main__":
    main()
