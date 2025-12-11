#!/usr/bin/env python3
"""Generiert alle 4 Büroreinigung-Bilder mit dem korrekten Modell."""

import os
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
OUTPUT_DIR = PROJECT_ROOT / "public" / "images" / "leistungen" / "bueroreinigung"

# KORREKT: gemini-3-pro-image-preview mit location="global"
MODEL_NAME = "gemini-3-pro-image-preview"

os.environ["GOOGLE_APPLICATION_CREDENTIALS"] = str(CREDENTIALS_PATH)

client = genai.Client(
    vertexai=True,
    project="fimi-bilder",
    location="global"
)

# Alle 4 Bilder für die Büroreinigung-Seite
IMAGES = [
    {
        "filename": "hero",
        "width": 1920,
        "height": 1080,
        "prompt": """Fotorealistisches Bild eines modernen deutschen Büros im Mittelstand-Stil.

SZENE:
- Ein typisches deutsches Großraumbüro mit 6-8 Arbeitsplätzen
- Helle, funktionale Büromöbel (nicht zu modern/amerikanisch)
- Schreibtische mit Monitoren, Tastatur, Maus
- Trennwände zwischen den Arbeitsplätzen (typisch deutsch)
- Große Fensterfront mit Tageslicht
- Grüne Zimmerpflanzen
- Sauberer, gepflegter Eindruck

STIL:
- Deutsches Mittelstandsunternehmen, nicht Silicon Valley
- Funktional und professionell
- Warmes Tageslicht
- Aufgeräumt aber authentisch (nicht steril)
- KEINE Menschen im Bild
- KEINE amerikanischen Großraumbüros mit Kickertisch

Professionelle Architekturfotografie-Qualität."""
    },
    {
        "filename": "leistungsumfang-1",
        "width": 1400,
        "height": 900,
        "prompt": """Fotorealistisches Produktfoto von professionellem deutschem Reinigungsequipment.

PRODUKT - VERMOP Reinigungswagen:
- Grau/silbernes Metallgestell auf Rollen
- BLAUE Kunststoffeimer (zwei Stück - 4-Farben-System: Blau = Büroreinigung)
- Moppresse/Auswringer am Wagen befestigt
- Blauer Mikrofaser-Flachmopp
- Seitliche Halterungen für Sprühflaschen
- Kleiner Müllsackhalter

PHYSIKALISCH KORREKT:
- Alle Teile sind FEST verbunden oder stehen STABIL
- NICHTS schwebt in der Luft
- Realistische Proportionen
- Das sieht aus wie ein echtes Foto aus einem Reinigungsgeräte-Katalog

STIL:
- Weißer/hellgrauer Studio-Hintergrund
- Professionelle Produktfotografie
- Weiche Schatten
- Scharfe Details
- KEINE Menschen, KEINE Hände

Wie aus einem deutschen Fachhandel-Katalog für Reinigungsbedarf."""
    },
    {
        "filename": "leistungsumfang-2",
        "width": 1400,
        "height": 900,
        "prompt": """Fotorealistisches Bild eines deutschen Konferenzraums nach professioneller Reinigung.

SZENE:
- Typischer deutscher Besprechungsraum
- HOLZTISCH (massiv oder Furnier) - KEIN Glastisch!
- 8 moderne Bürostühle um den Tisch
- Flipchart oder Whiteboard an der Wand
- Fenster mit Blick nach draußen
- Eventuell ein Sideboard mit Wassergläsern
- Der Raum ist makellos sauber

TYPISCH DEUTSCH:
- Funktional, nicht übertrieben modern
- Keine amerikanischen "creative spaces"
- Holz statt Glas
- Ordnung und Sauberkeit

STIL:
- Warmes Tageslicht
- Professionelle Immobilienfotografie
- KEINE Menschen
- Natürliche Farben (Grau, Weiß, Holztöne)

Der Raum wirkt einladend und professionell gepflegt."""
    },
    {
        "filename": "problem-loesung",
        "width": 1400,
        "height": 900,
        "prompt": """Fotorealistisches Bild eines sauberen deutschen Büro-Empfangsbereichs.

SZENE:
- Rezeption/Empfangstresen eines deutschen Unternehmens
- Heller, einladender Eingangsbereich
- Sitzgelegenheit für Besucher (dezente Polstermöbel)
- Grünpflanzen
- Sauberer Boden (Fliesen oder Parkett)
- Glaselemente (sauber und streifenfrei)
- Eventuell Firmenlogo an der Wand (neutral/unkenntlich)

QUALITÄT SICHTBAR:
- Glänzende, saubere Oberflächen
- Keine Fingerabdrücke
- Gepflegte Pflanzen
- Professioneller erster Eindruck

STIL:
- Deutsches Unternehmen, nicht amerikanisch
- Funktional und einladend
- Warmes Licht
- KEINE Menschen
- Natürliche Farben

Der erste Eindruck eines gut gepflegten Unternehmens."""
    }
]

def generate_image(image_config: dict, retries: int = 5) -> bool:
    """Generiert ein einzelnes Bild."""
    filename = image_config["filename"]
    prompt = image_config["prompt"]
    width = image_config["width"]
    height = image_config["height"]

    print(f"\n{'='*60}")
    print(f"📷 Generiere: {filename}.avif ({width}x{height})")
    print(f"{'='*60}")

    for attempt in range(1, retries + 1):
        try:
            print(f"🔄 Versuch {attempt}/{retries}...")

            response = client.models.generate_content(
                model=MODEL_NAME,
                contents=[prompt],
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

                        # Resize
                        img = img.resize((width, height), Image.Resampling.LANCZOS)

                        OUTPUT_DIR.mkdir(parents=True, exist_ok=True)

                        # AVIF speichern
                        avif_path = OUTPUT_DIR / f"{filename}.avif"
                        img.save(avif_path, 'AVIF', quality=80)
                        print(f"✅ {filename}.avif gespeichert ({width}x{height})")

                        # PNG Preview
                        png_path = OUTPUT_DIR / f"{filename}-preview.png"
                        img.save(png_path, 'PNG')
                        print(f"✅ Preview PNG gespeichert")

                        return True

            print(f"⚠️ Keine Bilddaten erhalten")
            if attempt < retries:
                time.sleep(20)

        except Exception as e:
            error_str = str(e)
            if "RESOURCE_EXHAUSTED" in error_str:
                wait_time = 30 * attempt
                print(f"⏳ Rate Limit - warte {wait_time}s")
                time.sleep(wait_time)
            else:
                print(f"⚠️ Fehler: {error_str}")
                if attempt < retries:
                    time.sleep(15)

    print(f"❌ {filename} konnte nicht generiert werden")
    return False

def main():
    print("=" * 60)
    print("🏢 BÜROREINIGUNG - Alle 4 Bilder generieren")
    print(f"📡 Modell: {MODEL_NAME}")
    print(f"📍 Location: global")
    print("=" * 60)

    success_count = 0

    for i, image_config in enumerate(IMAGES, 1):
        print(f"\n[{i}/{len(IMAGES)}]")
        if generate_image(image_config):
            success_count += 1

        # Pause zwischen Bildern (Rate Limiting vermeiden)
        if i < len(IMAGES):
            print("⏳ Warte 10s vor nächstem Bild...")
            time.sleep(10)

    print("\n" + "=" * 60)
    print(f"✅ Fertig: {success_count}/{len(IMAGES)} Bilder erfolgreich generiert")
    print("=" * 60)

    return success_count == len(IMAGES)

if __name__ == "__main__":
    success = main()
    exit(0 if success else 1)
