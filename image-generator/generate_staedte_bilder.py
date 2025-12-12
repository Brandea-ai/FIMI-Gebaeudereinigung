#!/usr/bin/env python3
"""
FIMI Bildgenerator - BAYERISCHE STÄDTE MIT REFERENZBILDERN
==========================================================
Generiert realistische 4K Stadtpanoramen basierend auf echten Referenzfotos.
Die Referenzbilder zeigen die echten Wahrzeichen der Städte.

Verwendung: python generate_staedte_bilder.py
"""

import os
import sys
import time
from pathlib import Path
from datetime import datetime
from io import BytesIO

def check_dependencies():
    """Prüft ob alle Dependencies installiert sind."""
    missing = []
    try:
        from google import genai
        from google.genai import types
    except ImportError:
        missing.append("google-genai")
    try:
        from PIL import Image
    except ImportError:
        missing.append("Pillow")
    try:
        import pillow_avif
    except ImportError:
        missing.append("pillow-avif-plugin")
    if missing:
        print(f"\n❌ FEHLENDE DEPENDENCIES: pip install {' '.join(missing)}\n")
        sys.exit(1)

check_dependencies()

from google import genai
from google.genai import types
from PIL import Image
import pillow_avif

# ============================================================================
# KONFIGURATION
# ============================================================================

SCRIPT_DIR = Path(__file__).parent
PROJECT_ROOT = SCRIPT_DIR.parent
CREDENTIALS_PATH = SCRIPT_DIR / "credentials" / "fimi-bilder-credentials.json"
OUTPUT_DIR = PROJECT_ROOT / "public" / "images" / "leistungen" / "unterhaltsreinigung"
REFERENCE_DIR = Path("/Users/brandea/Desktop/Alle Einsatzorte 12")

MODEL_NAME = "gemini-3-pro-image-preview"

# Städte mit ihren Wahrzeichen und Referenzbildern
STAEDTE = {
    "landshut": {
        "name": "Landshut",
        "reference_file": "Landshut/caption.jpg",
        "wahrzeichen": "St. Martin Kirche mit dem höchsten Backsteinturm der Welt (130,6m)",
        "beschreibung": "Panoramablick über die Altstadt mit roten Ziegeldächern, die gotische St. Martin Kirche dominiert das Bild",
        "details": "Typisch bayerische Altstadt, Isar im Hintergrund, grüne Hügel, warmes Licht"
    },
    "muenchen": {
        "name": "München",
        "reference_file": "München/Unknown.jpeg",
        "wahrzeichen": "Frauenkirche mit den charakteristischen Zwiebeltürmen und Neues Rathaus",
        "beschreibung": "Skyline von München mit Frauenkirche, Rathaus und Marienplatz von oben",
        "details": "Goldene Stunde Beleuchtung, Alpen im Hintergrund sichtbar, moderne und historische Architektur"
    },
    "regensburg": {
        "name": "Regensburg",
        "reference_file": "Regensburg/Unknown.jpeg",
        "wahrzeichen": "Dom St. Peter mit den markanten gotischen Doppeltürmen",
        "beschreibung": "UNESCO-Welterbe Altstadt mit Dom, Steinerne Brücke und mittelalterlichen Patrizierhäusern",
        "details": "Donau sichtbar, historische Türme, rote Dächer, klarer blauer Himmel"
    },
    "ingolstadt": {
        "name": "Ingolstadt",
        "reference_file": "Ingolstadt/photo-47245372.jpg",
        "wahrzeichen": "Liebfrauenmünster (Münster Zur Schönen Unserer Lieben Frau)",
        "beschreibung": "Luftaufnahme der Altstadt mit dem gotischen Münster und barocken Gebäuden",
        "details": "Donau im Hintergrund, grüne Parks, historische Festungsanlagen sichtbar"
    },
    "freising": {
        "name": "Freising",
        "reference_file": "Freising/Unknown.jpeg",
        "wahrzeichen": "Freisinger Dom St. Maria und St. Korbinian auf dem Domberg",
        "beschreibung": "Blick auf den Domberg mit der romanisch-gotischen Doppelturmfassade",
        "details": "Weihenstephaner Hügel, grüne Landschaft, historische Universitätsstadt"
    },
    "erding": {
        "name": "Erding",
        "reference_file": "Erding/images.jpeg",
        "wahrzeichen": "Stadtturm und Pfarrkirche St. Johannes am Schrannenplatz",
        "beschreibung": "Blick auf den historischen Stadtplatz mit dem weißen Kirchturm",
        "details": "Typisch oberbayerische Kleinstadt, bunte Häuserfassaden, gemütliche Atmosphäre"
    },
    "straubing": {
        "name": "Straubing",
        "reference_file": "Straubing/Unknown.jpeg",
        "wahrzeichen": "Stadtturm und Dreifaltigkeitssäule am Ludwigsplatz",
        "beschreibung": "Der lange Ludwigsplatz mit Stadtturm, bunten Bürgerhäusern und Straßencafés",
        "details": "Gäubodenstadt, gotischer Stadtturm, lebendiger Marktplatz, sommerliche Stimmung"
    },
    "passau": {
        "name": "Passau",
        "reference_file": "Passau/Unknown.jpeg",
        "wahrzeichen": "Dom St. Stephan mit der größten Domorgel der Welt",
        "beschreibung": "Dreiflüssestadt am Zusammenfluss von Donau, Inn und Ilz mit barocker Altstadt",
        "details": "Flusskreuzfahrtschiffe, pastellfarbene Häuser am Innufer, Dom auf dem Hügel"
    }
}

# ============================================================================
# FUNKTIONEN
# ============================================================================

def init_client():
    """Initialisiert den Google Gemini Client."""
    if not CREDENTIALS_PATH.exists():
        print(f"\n❌ CREDENTIALS FEHLEN: {CREDENTIALS_PATH}")
        print("Bitte die Google Cloud Credentials dort ablegen!")
        sys.exit(1)

    os.environ["GOOGLE_APPLICATION_CREDENTIALS"] = str(CREDENTIALS_PATH)

    try:
        client = genai.Client(
            vertexai=True,
            project="fimi-bilder",
            location="global"
        )
        print("✓ Client initialisiert (Gemini 3 Pro Image Preview)")
        return client
    except Exception as e:
        print(f"\n❌ CLIENT-FEHLER: {e}\n")
        sys.exit(1)


def load_reference_image(stadt_key):
    """Lädt das Referenzbild für eine Stadt."""
    stadt = STAEDTE[stadt_key]
    ref_path = REFERENCE_DIR / stadt["reference_file"]

    if not ref_path.exists():
        print(f"   ⚠️ Referenzbild nicht gefunden: {ref_path}")
        return None

    img = Image.open(ref_path)
    print(f"   ✓ Referenzbild geladen: {img.size[0]}x{img.size[1]}")
    return img


def create_prompt(stadt_key):
    """Erstellt den Prompt für eine Stadt."""
    stadt = STAEDTE[stadt_key]

    return f"""Erstelle ein hochauflösendes, fotorealistisches Stadtpanorama von {stadt['name']}, Bayern, Deutschland.

WICHTIG - NUTZE DAS REFERENZBILD:
Das Referenzbild zeigt das ECHTE {stadt['name']} mit den tatsächlichen Wahrzeichen.
Dein generiertes Bild MUSS diese Wahrzeichen EXAKT so darstellen wie im Referenzbild!

HAUPTMOTIV - {stadt['wahrzeichen']}:
{stadt['beschreibung']}

STIL & QUALITÄT:
- Fotorealistisch wie ein professionelles Architekturfoto
- 4K Qualität, gestochen scharf
- Seitenverhältnis: 16:9 (Breitformat für Website-Hero)
- Natürliches, warmes Tageslicht (goldene Stunde oder blauer Himmel)

ATMOSPHÄRE:
- {stadt['details']}
- Professionelle Reisefotografie-Ästhetik
- Einladend und authentisch

VERBOTEN:
- KEINE künstlich aussehenden oder erfundenen Gebäude
- KEINE falschen Wahrzeichen
- KEINE übertriebenen Farben oder HDR-Look
- KEINE Personen im Vordergrund
- KEINE Wasserzeichen oder Text

Das Bild soll auf einer professionellen Unternehmenswebsite für Gebäudereinigung in Bayern verwendet werden."""


def save_image(img, name, target_dir):
    """Speichert das Bild in verschiedenen Größen als AVIF und WebP."""
    target_dir.mkdir(parents=True, exist_ok=True)

    # RGBA zu RGB konvertieren falls nötig
    if img.mode == 'RGBA':
        img = img.convert('RGB')

    print(f"\n   💾 Speichere: {img.size[0]}x{img.size[1]}")

    # Responsive Größen generieren
    sizes = [1920, 1440, 1024, 768, 384]
    saved_sizes = []

    for size in sizes:
        if img.width >= size:
            ratio = size / img.width
            new_height = int(img.height * ratio)
            resized = img.resize((size, new_height), Image.Resampling.LANCZOS)
            actual_size = size
        else:
            resized = img
            actual_size = img.width

        if actual_size in saved_sizes:
            continue
        saved_sizes.append(actual_size)

        # AVIF speichern
        resized.save(target_dir / f"{name}-{actual_size}w.avif", 'AVIF', quality=80)
        # WebP speichern
        resized.save(target_dir / f"{name}-{actual_size}w.webp", 'WEBP', quality=80)
        print(f"      ✓ {actual_size}w: AVIF + WebP")

    # Hauptdatei speichern (wird von der Website verwendet)
    main_avif = target_dir / f"{name}.avif"
    img.save(main_avif, 'AVIF', quality=85)
    print(f"      ✓ {name}.avif (Hauptdatei)")

    return main_avif


def generate_city_image(client, stadt_key):
    """Generiert ein Stadtbild mit Referenz."""
    stadt = STAEDTE[stadt_key]
    print(f"\n{'='*60}")
    print(f"📸 GENERIERE: {stadt['name']}")
    print(f"{'='*60}")

    # Referenzbild laden
    ref_img = load_reference_image(stadt_key)
    if ref_img is None:
        print(f"   ❌ Überspringe {stadt['name']} - kein Referenzbild")
        return False

    # Prompt erstellen
    prompt = create_prompt(stadt_key)

    print(f"   🎨 Generiere mit Gemini 3 Pro Image Preview...")

    try:
        # Generation mit Referenzbild
        response = client.models.generate_content(
            model=MODEL_NAME,
            contents=[
                f"REFERENZBILD - Das ist das ECHTE {stadt['name']}. Nutze dieses Foto als exakte visuelle Vorlage für die Wahrzeichen, Gebäude und Atmosphäre:",
                ref_img,
                prompt
            ],
            config=types.GenerateContentConfig(
                response_modalities=["IMAGE", "TEXT"],
            )
        )

        # Bild aus Response extrahieren
        img = None
        if response.candidates:
            for part in response.candidates[0].content.parts:
                if hasattr(part, 'inline_data') and part.inline_data:
                    image_data = part.inline_data.data
                    img = Image.open(BytesIO(image_data))
                    print(f"   ✓ Bild generiert: {img.size[0]}x{img.size[1]}")
                    break

        if img:
            # Speichern als region-{stadt}.avif
            output_name = f"region-{stadt_key}"
            save_image(img, output_name, OUTPUT_DIR)
            print(f"\n   ✅ {stadt['name']} ERFOLGREICH!")
            return True
        else:
            print(f"\n   ❌ Keine Bilddaten für {stadt['name']} erhalten")
            return False

    except Exception as e:
        print(f"\n   ❌ FEHLER bei {stadt['name']}: {e}")
        return False


def main():
    """Hauptfunktion - generiert alle Städtebilder."""
    print("\n" + "="*70)
    print("   FIMI STÄDTEBILDER GENERATOR")
    print("   Bayerische Städte mit echten Referenzbildern")
    print("   Gemini 3 Pro Image Preview - 4K Qualität")
    print("="*70)

    # Prüfe Referenzbilder-Ordner
    if not REFERENCE_DIR.exists():
        print(f"\n❌ REFERENZBILDER-ORDNER FEHLT: {REFERENCE_DIR}")
        sys.exit(1)

    print(f"\n📁 Referenzbilder: {REFERENCE_DIR}")
    print(f"📁 Output: {OUTPUT_DIR}")

    # Client initialisieren
    client = init_client()

    # Statistiken
    erfolge = 0
    fehler = 0

    # Alle Städte generieren
    for stadt_key in STAEDTE:
        success = generate_city_image(client, stadt_key)
        if success:
            erfolge += 1
        else:
            fehler += 1

        # Pause zwischen Requests (API Rate Limiting)
        if stadt_key != list(STAEDTE.keys())[-1]:
            print("\n   ⏳ Warte 15 Sekunden (API Rate Limit)...")
            time.sleep(15)

    # Zusammenfassung
    print("\n" + "="*70)
    print("   ZUSAMMENFASSUNG")
    print("="*70)
    print(f"   ✅ Erfolgreich: {erfolge}/{len(STAEDTE)}")
    print(f"   ❌ Fehler: {fehler}/{len(STAEDTE)}")
    print(f"\n   📁 Bilder gespeichert in: {OUTPUT_DIR}")

    if fehler == 0:
        print("\n   🎉 ALLE STÄDTEBILDER ERFOLGREICH GENERIERT!")
    else:
        print(f"\n   ⚠️ {fehler} Bilder konnten nicht generiert werden.")

    print("="*70 + "\n")


if __name__ == "__main__":
    main()
