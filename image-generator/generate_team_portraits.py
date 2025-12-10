#!/usr/bin/env python3
"""
FIMI Team Profilbilder Generator
================================
Generiert authentische, hochwertige Profilbilder für das Team.
Neutraler Hintergrund, keine Logos, keine Maschinen.
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
PUBLIC_DIR = PROJECT_ROOT / "public" / "images" / "ueber-uns"

MODEL_NAME = "gemini-3-pro-image-preview"

os.environ["GOOGLE_APPLICATION_CREDENTIALS"] = str(CREDENTIALS_PATH)

client = genai.Client(
    vertexai=True,
    project="fimi-bilder",
    location="global"
)

# Team-Mitglieder mit Eigenschaften für authentische Darstellung
TEAM_MEMBERS = [
    {
        "filename": "team-elena-popescu",
        "name": "Elena Popescu",
        "geschlecht": "weiblich",
        "herkunft": "rumänisch",
        "alter": "35-40",
        "position": "Key Account Managerin",
        "beschreibung": "Professionelle Geschäftsfrau, rumänischer Herkunft, dunkle Haare, freundliches Lächeln, Business-Kleidung"
    },
    {
        "filename": "team-markus-lehner",
        "name": "Markus Lehner",
        "geschlecht": "männlich",
        "herkunft": "deutsch/österreichisch",
        "alter": "45-50",
        "position": "Vertriebsleiter",
        "beschreibung": "Deutscher Mann mittleren Alters, kurze graue/braune Haare, selbstbewusster Blick, Hemd oder Anzug"
    },
    {
        "filename": "team-fatima-krasniqi",
        "name": "Fatima Krasniqi",
        "geschlecht": "weiblich",
        "herkunft": "albanisch/kosovarisch",
        "alter": "30-35",
        "position": "Office Managerin",
        "beschreibung": "Albanische Frau, dunkle Haare, professionell gekleidet, warmes Lächeln, kompetenter Ausdruck"
    },
    {
        "filename": "team-svetlana-morozova",
        "name": "Svetlana Morozova",
        "geschlecht": "weiblich",
        "herkunft": "russisch",
        "alter": "40-45",
        "position": "Disposition",
        "beschreibung": "Russische Frau, blonde oder hellbraune Haare, professioneller Look, freundlich aber fokussiert"
    },
    {
        "filename": "team-thomas-berger",
        "name": "Thomas Berger",
        "geschlecht": "männlich",
        "herkunft": "deutsch",
        "alter": "50-55",
        "position": "Buchhaltung",
        "beschreibung": "Deutscher Mann, Brille, kurze graue Haare, seriöser aber freundlicher Ausdruck, Hemd"
    },
    {
        "filename": "team-dragan-petrovic",
        "name": "Dragan Petrović",
        "geschlecht": "männlich",
        "herkunft": "serbisch/balkanisch",
        "alter": "40-45",
        "position": "Objektleiter Gewerbe",
        "beschreibung": "Südosteuropäischer Mann, kräftige Statur, kurze dunkle Haare, selbstbewusst, Arbeitskleidung oder Polo"
    },
    {
        "filename": "team-maria-ionescu",
        "name": "Maria Ionescu",
        "geschlecht": "weiblich",
        "herkunft": "rumänisch",
        "alter": "35-40",
        "position": "Objektleiterin Industrie",
        "beschreibung": "Rumänische Frau, praktischer Look, dunkle Haare zusammengebunden, energischer Ausdruck"
    },
    {
        "filename": "team-blerim-hoxha",
        "name": "Blerim Hoxha",
        "geschlecht": "männlich",
        "herkunft": "albanisch",
        "alter": "35-40",
        "position": "Objektleiter Sonderreinigung",
        "beschreibung": "Albanischer Mann, dunkle kurze Haare, freundlicher Ausdruck, arbeitsbereit, Polo oder Arbeitskleidung"
    },
    {
        "filename": "team-claudia-wimmer",
        "name": "Claudia Wimmer",
        "geschlecht": "weiblich",
        "herkunft": "deutsch/bayerisch",
        "alter": "45-50",
        "position": "QM-Beauftragte",
        "beschreibung": "Deutsche Frau, mittellange Haare, professionell, Brille möglich, kompetenter Ausdruck, Business-Kleidung"
    },
]


def generate_portrait(member: dict, retries: int = 5) -> bool:
    """Generiert ein authentisches Profilbild für einen Mitarbeiter."""

    # Verschiedene Lächeln-Stile für Abwechslung
    smile_styles = [
        "breites freundliches Lächeln mit sichtbaren Zähnen",
        "warmes herzliches Lächeln mit Zähnen",
        "freundliches Lächeln ohne Zähne, geschlossener Mund",
        "selbstbewusstes Lächeln mit leicht sichtbaren Zähnen",
        "natürliches entspanntes Lächeln",
    ]
    import hashlib
    smile_index = int(hashlib.md5(member['filename'].encode()).hexdigest(), 16) % len(smile_styles)
    smile_style = smile_styles[smile_index]

    prompt = f"""GENERIERE EIN PROFESSIONELLES PROFILBILD

PERSON:
- Geschlecht: {member['geschlecht']}
- Alter: ca. {member['alter']} Jahre
- Herkunft: {member['herkunft']}
- Position: {member['position']}
- Beschreibung: {member['beschreibung']}

AUTHENTISCHER LOOK:
- Normale, echte Person - KEIN Supermodel
- Natürliche Haut (leichte Falten oder Unreinheiten sind OK)
- Durchschnittliche Körperform
- Wie ein echter Mitarbeiter einer deutschen Firma

GESICHTSAUSDRUCK - WICHTIG:
- {smile_style}
- Freundlich, sympathisch, einladend
- Augen strahlen Wärme aus
- Natürlich und authentisch, nicht gestellt

FOTOSTIL:
- Professionelles Kopf-Schulter-Portrait (Brustbild)
- GUTE BELEUCHTUNG - professionell ausgeleuchtet, weich
- Neutraler, unscharfer Hintergrund (grau, beige oder hellblau)
- Hochwertige Kameraqualität
- Person schaut freundlich in die Kamera

KLEIDUNG:
- Business-casual oder professionell
- Hemd, Bluse oder Blazer
- KEINE Logos

VERBOTEN:
- KEINE Stock-Foto-Atmosphäre
- KEINE anderen Personen
- KEINE Maschinen oder Geräte

SEITENVERHÄLTNIS: Portrait 4:5 (hochformat)

Erstelle ein hochwertiges, professionelles Mitarbeiterfoto wie für eine moderne Firmenwebsite."""

    for attempt in range(1, retries + 1):
        try:
            print(f"   🔄 Generiere... (Versuch {attempt}/{retries})")

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

                        PUBLIC_DIR.mkdir(parents=True, exist_ok=True)

                        filename = member['filename']

                        # Responsive Größen für Portraits
                        sizes = [928, 768, 384]
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
                        print(f"   ✅ {filename}.avif gespeichert ({img.size[0]}x{img.size[1]})")
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
    print("FIMI TEAM PROFILBILDER GENERATOR")
    print("="*60)
    print(f"\nGeneriere {len(TEAM_MEMBERS)} Profilbilder...")
    print("Geschätzte Zeit: ~15-20 Minuten")
    print("Geschätzte Kosten: ~$2.40\n")

    success_count = 0

    for i, member in enumerate(TEAM_MEMBERS, 1):
        print(f"\n[{i}/{len(TEAM_MEMBERS)}] {member['name']} - {member['position']}")

        if generate_portrait(member):
            success_count += 1

        # Pause zwischen Bildern
        if i < len(TEAM_MEMBERS):
            print("   ⏳ Warte 15 Sekunden...")
            time.sleep(15)

    print("\n" + "="*60)
    print(f"FERTIG: {success_count}/{len(TEAM_MEMBERS)} Profilbilder generiert")
    print("="*60 + "\n")

    return 0 if success_count == len(TEAM_MEMBERS) else 1


if __name__ == "__main__":
    # Einzelnes Bild generieren mit Argument
    if len(sys.argv) > 1:
        name = sys.argv[1]
        for member in TEAM_MEMBERS:
            if name in member['filename'] or name in member['name'].lower():
                print(f"\nGeneriere Einzelbild: {member['name']}")
                success = generate_portrait(member)
                sys.exit(0 if success else 1)
        print(f"Mitarbeiter '{name}' nicht gefunden!")
        sys.exit(1)

    # Alle generieren
    sys.exit(main())
