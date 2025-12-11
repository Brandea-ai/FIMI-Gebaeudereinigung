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

# 5 Verfahren - IN ACTION, authentisch, subtil
# Personen nur angedeutet (Hände, Rücken), Equipment im Einsatz
VERFAHREN_IMAGES = [
    {
        "filename": "verfahren-niederdruck",
        "title": "Niederdruck-Reinigung - In Action",
        "prompt": """AUTHENTISCHES ARBEITSFOTO - FASSADENREINIGUNG IN ACTION

SZENE: Niederdruck-Reinigung an einer Putzfassade
- KÄRCHER Hochdruckreiniger (GELB/SCHWARZ) im Einsatz
- Wasserstrahl trifft auf verschmutzte helle Fassade
- Sichtbarer Reinigungseffekt (sauber vs. schmutzig)
- Schlauch führt zum Gerät am Boden

PERSON (SUBTIL):
- Nur Hände und Unterarme sichtbar, die Lanze halten
- Arbeitshandschuhe
- KEIN Gesicht, KEIN voller Körper
- Von hinten oder seitlich angedeutet

UMGEBUNG:
- Deutsches Wohnhaus oder Mehrfamilienhaus
- Typisch deutsche Architektur (Putzfassade, WDVS)
- Bewölkter Himmel oder diffuses Licht
- Professionelle Arbeitsszene

FOTOSTIL:
- Authentische Dokumentarfotografie
- Wie echtes Arbeitsfoto, nicht gestellt
- Hochwertig aber natürlich
- 21:9 Ultrawide Format

ABSOLUT WICHTIG:
- KÄRCHER = GELB mit schwarzen Details
- Person nur angedeutet (Hände/Arme)
- Authentisch, nicht künstlich"""
    },
    {
        "filename": "verfahren-teleskop",
        "title": "Teleskop-System - In Action",
        "prompt": """AUTHENTISCHES ARBEITSFOTO - TELESKOP-REINIGUNG IN ACTION

SZENE: Fassadenreinigung mit Teleskopstange bis in große Höhe
- UNGER nLite Teleskopstange (SILBER mit GRÜNEN Akzenten)
- Stange reicht hoch an Gebäudefassade (2-3 Stockwerke)
- Wasserfed-Bürste oben an der Fassade
- Reinwasser-System/Tank am Boden sichtbar

PERSON (SUBTIL):
- Arbeiter von HINTEN gesehen
- Dunkle Arbeitskleidung
- Hält Teleskopstange, schaut nach oben
- Gesicht NICHT sichtbar
- Silhouette gegen Gebäude

UMGEBUNG:
- Modernes deutsches Bürogebäude oder Mehrfamilienhaus
- Helle Fassade
- Professionelle Arbeitsszene
- Tageslicht

FOTOSTIL:
- Authentische Arbeitsdokumentation
- Perspektive von unten nach oben (zeigt Höhe)
- Hochwertig, professionell
- 21:9 Ultrawide Format

ABSOLUT WICHTIG:
- UNGER = SILBER/GRÜN
- Person von hinten (kein Gesicht!)
- Höhe der Teleskopstange betonen"""
    },
    {
        "filename": "verfahren-drohne",
        "title": "Drohnen-Reinigung - In Action",
        "prompt": """AUTHENTISCHES ARBEITSFOTO - DROHNEN-REINIGUNG IN ACTION

SZENE: Industrie-Drohne im Einsatz an hohem Gebäude
- Professionelle graue Industrie-Drohne (DJI Agras Stil)
- Drohne schwebt an hoher Glasfassade/Hochhaus
- Sprühnebel sichtbar vom Reinigungssystem
- Dramatische Perspektive von unten

PERSON (SUBTIL - OPTIONAL):
- Pilot am Boden nur klein im Hintergrund
- Oder: Nur Hände mit Controller sichtbar im Vordergrund
- Fokus auf Drohne am Gebäude

UMGEBUNG:
- Modernes Hochhaus oder Industriegebäude
- Glasfassade oder hohe Betonfassade
- Blauer Himmel mit Wolken
- Professionelle High-Tech Atmosphäre

FOTOSTIL:
- Spektakuläre Perspektive
- Drohne als Hauptmotiv am Gebäude
- Modern, innovativ, zukunftsorientiert
- 21:9 Ultrawide Format

ABSOLUT WICHTIG:
- Professionelle Industrie-Drohne (grau/schwarz)
- Drohne IN DER LUFT am Gebäude
- Hochwertig, nicht billig wirkend"""
    },
    {
        "filename": "verfahren-biozid",
        "title": "Biozid-Behandlung - In Action",
        "prompt": """AUTHENTISCHES ARBEITSFOTO - BIOZID-BEHANDLUNG IN ACTION

SZENE: Professionelle Biozid-Behandlung an befallener Fassade
- Fassade mit sichtbarem Algen-/Moosbefall (grünlich)
- Sprühnebel wird aufgetragen
- Rückensprühgerät (GLORIA/MESTO, weiß/blau) sichtbar

PERSON (SUBTIL):
- Arbeiter von HINTEN oder SEITE
- Trägt Rückensprühgerät
- Schutzkleidung/Overall
- Sprüht auf Fassade
- Gesicht NICHT sichtbar

UMGEBUNG:
- Deutsches Wohnhaus mit Nordseite
- Sichtbarer grüner Algenbefall auf Putz
- Teilweise schon behandelt (Kontrast)
- Authentische Arbeitsszene

FOTOSTIL:
- Dokumentarischer Stil
- Problem (Befall) und Lösung (Behandlung) sichtbar
- Professionell, überzeugend
- 21:9 Ultrawide Format

ABSOLUT WICHTIG:
- Schutzausrüstung sichtbar
- Algenbefall erkennbar
- Person von hinten (kein Gesicht!)"""
    },
    {
        "filename": "verfahren-impraegnierung",
        "title": "Langzeit-Imprägnierung - In Action",
        "prompt": """AUTHENTISCHES ARBEITSFOTO - IMPRÄGNIERUNG IN ACTION

SZENE: Professionelle Fassaden-Imprägnierung wird aufgetragen
- Frisch gereinigte, helle Fassade
- Imprägnierung wird aufgesprüht (leichter Glanz)
- Airless-Sprühgerät oder Farbroller im Einsatz
- Professionelle Kanister am Boden (SIKA/REMMERS Stil)

PERSON (SUBTIL):
- Arbeiter auf Leiter oder Gerüst
- Von HINTEN oder SEITE fotografiert
- Trägt Imprägniermittel auf
- Arbeitskleidung
- Gesicht NICHT sichtbar

UMGEBUNG:
- Saubere, helle deutsche Hausfassade
- Nach der Reinigung, vor der Versiegelung
- Abdeckfolie am Boden zum Schutz
- Professionelle Arbeitsszene

FOTOSTIL:
- Authentische Arbeitsdokumentation
- Zeigt den Schutzauftrag
- Hochwertig, vertrauenserweckend
- 21:9 Ultrawide Format

ABSOLUT WICHTIG:
- Saubere Fassade (nach Reinigung)
- Person von hinten (kein Gesicht!)
- Professionelle Ausrüstung"""
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
