#!/usr/bin/env python3
"""
Generiert 5 Verfahren-Bilder für Fassadenreinigung.
21:9 Seitenverhältnis (ultrawide), Produktfotos mit echten Geräten.
KEINE Personen - nur Equipment auf neutralem Hintergrund.
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

OUTPUT_DIR = Path(__file__).parent.parent / "public" / "images" / "leistungen" / "fassadenreinigung"

# 5 Verfahren mit echten Produkten/Geräten
VERFAHREN_IMAGES = [
    {
        "filename": "verfahren-niederdruck",
        "title": "Niederdruck-Reinigung - KÄRCHER",
        "prompt": """PREMIUM PRODUKTFOTO - FASSADENREINIGUNG EQUIPMENT

PRODUKT: KÄRCHER Hochdruckreiniger für Niederdruck-Fassadenreinigung

EQUIPMENT:
- KÄRCHER HD/HDS Hochdruckreiniger (professionell)
- Charakteristisches GELB mit schwarzen Akzenten
- Niederdruck-Flächenreiniger Aufsatz
- Professionelle Lanze/Sprühpistole
- Schlauchsystem sichtbar

ARRANGEMENT:
- Equipment arrangiert auf neutralem hellgrauem Hintergrund
- Produktfoto-Stil wie B2B-Katalog
- Hauptgerät + Zubehör elegant platziert
- Nano-Banner-Format (sehr breit, 21:9)

HINTERGRUND:
- Neutraler hellgrauer Studio-Hintergrund
- Clean, minimalistisch
- Dezente Schatten für Tiefe

FOTOSTIL:
- Premium Produktfotografie
- Hochwertig wie aus Kärcher-Katalog
- Professionell, seriös
- Deutsche Ingenieursqualität

TECHNISCH:
- ULTRAWIDE 21:9 Format (sehr breit!)
- Studioqualität
- Höchste Schärfe

ABSOLUT WICHTIG:
- KEINE PERSONEN
- KÄRCHER = GELB/SCHWARZ
- Professionelles Equipment"""
    },
    {
        "filename": "verfahren-teleskop",
        "title": "Teleskop-System - UNGER",
        "prompt": """PREMIUM PRODUKTFOTO - FASSADENREINIGUNG EQUIPMENT

PRODUKT: UNGER Teleskop-System für Fassadenreinigung bis 18m

EQUIPMENT:
- UNGER nLite Teleskopstange (SILBER/Aluminium, ausziehbar)
- GRÜNE UNGER-Akzente an Griffen und Verbindungen
- Wasserfed-Bürste am Ende
- HydroPower Reinwasser-System (kompakter Tank)
- Schläuche und Anschlüsse

ARRANGEMENT:
- Teleskopstange diagonal im Bild (zeigt Länge)
- Reinwasser-System daneben
- Produktfoto-Stil auf neutralem Hintergrund
- Nano-Banner-Format (sehr breit, 21:9)

HINTERGRUND:
- Neutraler hellgrauer Studio-Hintergrund
- Clean, minimalistisch
- Dezente Schatten

FOTOSTIL:
- Premium B2B Produktfotografie
- Wie aus UNGER Professional Katalog
- Hochwertig, professionell

TECHNISCH:
- ULTRAWIDE 21:9 Format (sehr breit!)
- Studioqualität
- Scharfe Details

ABSOLUT WICHTIG:
- KEINE PERSONEN
- UNGER = GRÜN/SILBER
- Professionelles Teleskop-System"""
    },
    {
        "filename": "verfahren-drohne",
        "title": "Drohnen-Reinigung - DJI",
        "prompt": """PREMIUM PRODUKTFOTO - FASSADENREINIGUNG EQUIPMENT

PRODUKT: Professionelle Industrie-Drohne für Fassadenreinigung

EQUIPMENT:
- DJI Agras oder ähnliche Industrie-Drohne
- Grau/Schwarz professionelle Bauweise
- Sprüh-Tank-System montiert
- 4-6 Rotoren sichtbar
- Robuste Bauweise für gewerblichen Einsatz
- Fernsteuerung daneben

ARRANGEMENT:
- Drohne als Hauptobjekt
- Controller/Fernsteuerung daneben
- Auf neutralem hellgrauem Hintergrund
- Produktfoto-Stil
- Nano-Banner-Format (sehr breit, 21:9)

HINTERGRUND:
- Neutraler hellgrauer Studio-Hintergrund
- Clean, minimalistisch
- Professionell

FOTOSTIL:
- High-Tech Produktfotografie
- Premium Business-Look
- Zukunftsorientiert, innovativ

TECHNISCH:
- ULTRAWIDE 21:9 Format (sehr breit!)
- Studioqualität
- Höchste Detailschärfe

ABSOLUT WICHTIG:
- KEINE PERSONEN
- Professionelle Industrie-Drohne (nicht Consumer!)
- Seriös und hochwertig"""
    },
    {
        "filename": "verfahren-biozid",
        "title": "Biozid-Behandlung - Sprühsystem",
        "prompt": """PREMIUM PRODUKTFOTO - FASSADENREINIGUNG EQUIPMENT

PRODUKT: Professionelles Biozid-Sprühsystem für Fassadenbehandlung

EQUIPMENT:
- GLORIA oder MESTO Rückensprühgerät (professionell)
- Blau/Weiß oder Gelb professionelle Ausführung
- Biozid-Kanister (5-10 Liter)
- Professionelle Sprühlanze
- Schutzhandschuhe (Chemie-beständig)
- Dosierbecher

ARRANGEMENT:
- Sprühgerät als Hauptobjekt
- Chemie-Kanister und Zubehör arrangiert
- Auf neutralem hellgrauem Hintergrund
- Produktfoto-Stil
- Nano-Banner-Format (sehr breit, 21:9)

HINTERGRUND:
- Neutraler hellgrauer Studio-Hintergrund
- Clean, minimalistisch
- Professionell

FOTOSTIL:
- Technische Produktfotografie
- Wie aus Profi-Equipment-Katalog
- Seriös, professionell

TECHNISCH:
- ULTRAWIDE 21:9 Format (sehr breit!)
- Studioqualität
- Scharfe Details

ABSOLUT WICHTIG:
- KEINE PERSONEN
- Professionelles Sprühequipment
- Chemie-Behandlung erkennbar"""
    },
    {
        "filename": "verfahren-impraegnierung",
        "title": "Langzeit-Imprägnierung - Versiegelung",
        "prompt": """PREMIUM PRODUKTFOTO - FASSADENREINIGUNG EQUIPMENT

PRODUKT: Professionelles Imprägnierung-/Versiegelungssystem

EQUIPMENT:
- Profi-Imprägniermittel Kanister (REMMERS oder SIKA Stil)
- Airless-Sprühgerät oder HVLP-Sprühpistole
- Farbroller und Teleskopstiel
- Pinsel für Details
- Abdeckfolie/Schutzplane
- Professionelle Ausführung

ARRANGEMENT:
- Imprägnierkanister im Zentrum
- Auftragswerkzeuge drumherum arrangiert
- Auf neutralem hellgrauem Hintergrund
- Produktfoto-Stil
- Nano-Banner-Format (sehr breit, 21:9)

HINTERGRUND:
- Neutraler hellgrauer Studio-Hintergrund
- Clean, minimalistisch
- Premium-Look

FOTOSTIL:
- Premium Produktfotografie
- Wie aus Fachhandel-Katalog
- Professionell, hochwertig

TECHNISCH:
- ULTRAWIDE 21:9 Format (sehr breit!)
- Studioqualität
- Höchste Qualität

ABSOLUT WICHTIG:
- KEINE PERSONEN
- Professionelle Versiegelungs-Produkte
- Langzeitschutz erkennbar"""
    },
]


def generate_image(image_item: dict, retries: int = 5) -> bool:
    """Generiert ein einzelnes Bild im 21:9 Format."""

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

                        # Crop zu 21:9 wenn nötig
                        target_ratio = 21 / 9
                        current_ratio = img.width / img.height

                        if abs(current_ratio - target_ratio) > 0.1:
                            # Crop zu 21:9
                            if current_ratio > target_ratio:
                                # Zu breit - links/rechts croppen
                                new_width = int(img.height * target_ratio)
                                left = (img.width - new_width) // 2
                                img = img.crop((left, 0, left + new_width, img.height))
                            else:
                                # Zu hoch - oben/unten croppen
                                new_height = int(img.width / target_ratio)
                                top = (img.height - new_height) // 2
                                img = img.crop((0, top, img.width, top + new_height))

                        base_name = image_item['filename']

                        # Haupt-Bild speichern (AVIF für die Seite)
                        avif_path = OUTPUT_DIR / f"{base_name}.avif"
                        webp_path = OUTPUT_DIR / f"{base_name}.webp"

                        img.save(avif_path, 'AVIF', quality=85)
                        img.save(webp_path, 'WEBP', quality=85)

                        # Responsive Größen
                        sizes = [1376, 1024, 768, 512]
                        for size in sizes:
                            ratio = size / img.width
                            new_height = int(img.height * ratio)
                            resized = img.resize((size, new_height), Image.LANCZOS)

                            resized.save(OUTPUT_DIR / f"{base_name}-{size}w.avif", 'AVIF', quality=80)
                            resized.save(OUTPUT_DIR / f"{base_name}-{size}w.webp", 'WEBP', quality=80)

                        print(f"   ✅ {base_name} gespeichert ({img.width}x{img.height}) - 21:9")
                        return True

            print(f"   ⚠️ Kein Bild in Antwort")

        except Exception as e:
            print(f"   ❌ Fehler: {e}")
            if attempt < retries:
                time.sleep(5)

    return False


def main():
    print("=" * 60)
    print("FASSADENREINIGUNG VERFAHREN - EQUIPMENT PRODUKTFOTOS")
    print("21:9 Nano-Banner Format")
    print("=" * 60)
    print()

    OUTPUT_DIR.mkdir(parents=True, exist_ok=True)

    print(f"Generiere {len(VERFAHREN_IMAGES)} Verfahren-Bilder...")
    print("KEINE Personen - nur professionelles Equipment")
    print()

    success = 0
    for i, item in enumerate(VERFAHREN_IMAGES, 1):
        print(f"\n[{i}/{len(VERFAHREN_IMAGES)}] {item['title']}")
        if generate_image(item):
            success += 1
        if i < len(VERFAHREN_IMAGES):
            print("   ⏳ Warte 15 Sekunden...")
            time.sleep(15)

    print()
    print("=" * 60)
    print(f"FERTIG: {success}/{len(VERFAHREN_IMAGES)} Bilder generiert")
    print(f"Ausgabe: {OUTPUT_DIR}")
    print("=" * 60)


if __name__ == "__main__":
    main()
