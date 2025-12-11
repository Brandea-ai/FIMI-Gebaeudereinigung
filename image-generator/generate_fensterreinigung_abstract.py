#!/usr/bin/env python3
"""
Generiert ein minimalistisches/abstraktes Bild für die Fensterreinigung "Warum" Sektion.
KEINE Fenster, KEINE Personen - nur grafisch/abstrakt.
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

# Verschiedene Konzept-Optionen
ABSTRACT_CONCEPTS = [
    {
        "filename": "warum-abstract-1",
        "title": "Wassertropfen Makro",
        "prompt": """MINIMALISTISCHES KUNSTFOTO - ABSTRAKT

SZENE: Makroaufnahme von kristallklaren Wassertropfen
- Perfekt runde, glänzende Wassertropfen
- Auf einer glatten, sauberen Oberfläche
- Lichtreflexionen in den Tropfen
- Extrem sauber und klar
- Hellblauer oder weißer Hintergrund

FOTOSTIL:
- High-End Produktfotografie
- Makro/Close-up
- Sehr minimalistisch
- Premium-Qualität
- Symbolisiert Reinheit und Klarheit

TECHNISCH:
- Querformat 16:9
- Professionelle Studiobeleuchtung
- Schärfe auf Tropfen

ABSOLUT WICHTIG:
- KEINE PERSONEN
- KEINE Fenster oder Gebäude
- Nur abstrakte Reinheits-Symbolik
- Clean, minimalistisch, premium"""
    },
    {
        "filename": "warum-abstract-2",
        "title": "Lichtbrechung Prismen",
        "prompt": """MINIMALISTISCHES KUNSTFOTO - ABSTRAKT

SZENE: Lichtbrechung durch Glas oder Kristall
- Regenbogen-Spektrum durch Prisma
- Klare, geometrische Lichtlinien
- Weißer oder hellgrauer Hintergrund
- Sehr clean und modern
- Symbolisiert Transparenz und Klarheit

FOTOSTIL:
- Abstrakte Kunstfotografie
- Minimalistisch
- High-End Editorial Style
- Wie aus einem Design-Magazin

TECHNISCH:
- Querformat 16:9
- Studioqualität
- Perfekte Belichtung

ABSOLUT WICHTIG:
- KEINE PERSONEN
- KEINE Fenster oder Gebäude
- Rein abstrakt/grafisch
- Premium, seriös"""
    },
    {
        "filename": "warum-abstract-3",
        "title": "Geometrische Klarheit",
        "prompt": """MINIMALISTISCHES KUNSTFOTO - ABSTRAKT

SZENE: Geometrische, klare Glasformen
- Abstrakte Glasobjekte oder Kristalle
- Perfekte Kanten und Linien
- Licht spielt durch das Material
- Hellblau, Türkis und Weiß Töne
- Extrem aufgeräumt und clean

FOTOSTIL:
- Skandinavisches Minimal-Design
- Produktfotografie-Qualität
- Sehr modern und zeitlos
- Premium Business-Ästhetik

TECHNISCH:
- Querformat 16:9
- Studiobeleuchtung
- Höchste Qualität

ABSOLUT WICHTIG:
- KEINE PERSONEN
- KEINE Fenster, Gebäude, Ausblicke
- Nur abstrakte Formen
- Symbolisiert Professionalität und Klarheit"""
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

                        # Basis-Dateiname
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
    print("FENSTERREINIGUNG ABSTRACT BILD GENERATOR")
    print("=" * 60)
    print()

    OUTPUT_DIR.mkdir(parents=True, exist_ok=True)

    print(f"Generiere {len(ABSTRACT_CONCEPTS)} Konzept-Varianten...")
    print("KEINE Fenster, KEINE Personen - nur abstrakt/grafisch")
    print()

    success = 0
    for i, item in enumerate(ABSTRACT_CONCEPTS, 1):
        print(f"\n[{i}/{len(ABSTRACT_CONCEPTS)}] {item['title']}")
        if generate_image(item):
            success += 1
        if i < len(ABSTRACT_CONCEPTS):
            print("   ⏳ Warte 15 Sekunden...")
            time.sleep(15)

    print()
    print("=" * 60)
    print(f"FERTIG: {success}/{len(ABSTRACT_CONCEPTS)} Varianten generiert")
    print(f"Ausgabe: {OUTPUT_DIR}")
    print("=" * 60)


if __name__ == "__main__":
    main()
