#!/usr/bin/env python3
"""
FIMI Bildgenerator - Bayern Karte 9:16 Portrait Format
=======================================================
Generiert eine schwebende Bayern-Karte mit FIMI Standorten.
Basierend auf dem bestehenden Bild als Referenz.

Verwendung: python generate_staedte_karte_9_16.py
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
OUTPUT_DIR = PROJECT_ROOT / "public" / "images" / "home"
REFERENCE_IMAGE = OUTPUT_DIR / "staedte-fimi.avif"

MODEL_NAME = "gemini-3-pro-image-preview"

# 9:16 Portrait Format für 4K
# 4K = 3840x2160, aber wir wollen 9:16
# Bei 9:16: Breite = Höhe * 9/16
# Für hohe Qualität: 2160 x 3840 (4K Portrait)
TARGET_WIDTH = 2160
TARGET_HEIGHT = 3840

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


def load_reference_image():
    """Lädt das Referenzbild."""
    if not REFERENCE_IMAGE.exists():
        print(f"\n❌ REFERENZBILD FEHLT: {REFERENCE_IMAGE}")
        sys.exit(1)

    img = Image.open(REFERENCE_IMAGE)

    # Für API: Bild auf max 1024px skalieren
    max_size = 1024
    if img.width > max_size or img.height > max_size:
        ratio = min(max_size / img.width, max_size / img.height)
        new_size = (int(img.width * ratio), int(img.height * ratio))
        img = img.resize(new_size, Image.Resampling.LANCZOS)

    # RGBA zu RGB konvertieren falls nötig
    if img.mode == 'RGBA':
        background = Image.new('RGB', img.size, (255, 255, 255))
        background.paste(img, mask=img.split()[3])
        img = background
    elif img.mode != 'RGB':
        img = img.convert('RGB')

    print(f"✓ Referenzbild geladen: {img.size[0]}x{img.size[1]}")
    return img


def create_prompt():
    """Erstellt den Prompt für das neue Bild."""
    return """Erstelle eine professionelle, moderne Infografik-Karte von Bayern mit FIMI Gebäudereinigung Standorten.

FORMAT & ABMESSUNGEN:
- STRENG 9:16 Portrait/Hochformat (wie ein Smartphone-Bildschirm)
- Die Karte soll die VOLLE HÖHE ausfüllen
- 4K Qualität, gestochen scharf

DESIGN - SCHWEBENDER EFFEKT:
- WEISSER oder sehr heller, neutraler Hintergrund (#FFFFFF oder #F8F9FA)
- Die Bayern-Karte soll wie ein "schwebendes Element" wirken
- Subtiler Schatten unter der Karte für 3D-Tiefe
- Clean, minimalistisches Design wie eine Premium-Unternehmenswebsite

BAYERN KARTE:
- Stilisierte, moderne Darstellung von Bayern (wie im Referenzbild)
- Hauptfarbe der Karte: Türkis/Teal (#109387) oder helles Blau
- Die 8 Standorte klar markiert: Landshut, München, Regensburg, Ingolstadt, Freising, Erding, Straubing, Passau
- Kleine Icons oder Punkte für jeden Standort
- Verbindungslinien zwischen den Standorten (zeigt Netzwerk)

TEXTELEMENTE:
- Städtenamen neben den Markierungen
- Optional: "8 Standorte in Bayern" oder ähnlich
- Schrift: Modern, sans-serif, gut lesbar

STIL:
- Professionell wie eine Unternehmenswebsite
- Nicht zu verspielt, nicht zu technisch
- Einladend und vertrauenswürdig
- Passend zu den FIMI Farben: Teal (#109387) und Dunkelblau (#012956)

VERBOTEN:
- KEINE 3D-Effekte auf der Karte selbst
- KEINE bunten Hintergründe
- KEINE Clipart-Optik
- KEINE Wasserzeichen oder Stock-Foto-Markierungen
- KEIN dunkler Hintergrund

Das Bild wird auf einer professionellen B2B-Website für Gebäudereinigung verwendet."""


def save_image(img, name, target_dir):
    """Speichert das Bild als AVIF und WebP."""
    target_dir.mkdir(parents=True, exist_ok=True)

    # RGBA zu RGB konvertieren falls nötig
    if img.mode == 'RGBA':
        # Weißer Hintergrund für transparente Bereiche
        background = Image.new('RGB', img.size, (255, 255, 255))
        background.paste(img, mask=img.split()[3])
        img = background
    elif img.mode != 'RGB':
        img = img.convert('RGB')

    print(f"\n💾 Speichere: {img.size[0]}x{img.size[1]}")

    # Responsive Größen generieren
    sizes = [1920, 1440, 1024, 768, 384]
    saved_files = []

    saved_heights = set()
    for size in sizes:
        # Bei Portrait: size bezieht sich auf die Höhe
        if img.height >= size:
            ratio = size / img.height
            new_width = int(img.width * ratio)
            new_height = size
            resized = img.resize((new_width, new_height), Image.Resampling.LANCZOS)
        else:
            resized = img
            new_width = img.width
            new_height = img.height

        # Skip wenn diese Höhe schon gespeichert wurde
        if new_height in saved_heights:
            continue
        saved_heights.add(new_height)

        # AVIF speichern
        avif_path = target_dir / f"{name}-{new_height}h.avif"
        resized.save(avif_path, 'AVIF', quality=85)
        saved_files.append(avif_path)

        # WebP speichern
        webp_path = target_dir / f"{name}-{new_height}h.webp"
        resized.save(webp_path, 'WEBP', quality=85)
        saved_files.append(webp_path)

        print(f"   ✓ {new_height}h: AVIF + WebP ({new_width}x{new_height})")

    # Hauptdatei speichern (wird von der Website verwendet)
    main_avif = target_dir / f"{name}.avif"
    img.save(main_avif, 'AVIF', quality=90)
    saved_files.append(main_avif)
    print(f"   ✓ {name}.avif (Hauptdatei: {img.width}x{img.height})")

    main_webp = target_dir / f"{name}.webp"
    img.save(main_webp, 'WEBP', quality=90)
    saved_files.append(main_webp)
    print(f"   ✓ {name}.webp (Hauptdatei)")

    return saved_files


def generate_image(client):
    """Generiert das neue Stadtbild."""
    print("\n" + "="*60)
    print("📸 GENERIERE: Bayern Karte 9:16 Portrait")
    print("="*60)

    # Referenzbild laden
    ref_img = load_reference_image()

    # Prompt erstellen
    prompt = create_prompt()

    print(f"\n🎨 Generiere mit Gemini 3 Pro Image Preview...")
    print(f"   Zielformat: 9:16 Portrait ({TARGET_WIDTH}x{TARGET_HEIGHT})")

    try:
        # Generation mit Referenzbild
        response = client.models.generate_content(
            model=MODEL_NAME,
            contents=[
                "REFERENZBILD - Dies ist die aktuelle Bayern-Karte mit FIMI Standorten. Nutze dieses Bild als Vorlage für das Kartenlayout und die Standort-Positionen:",
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
            # Backup des alten Bildes
            old_image = OUTPUT_DIR / "staedte-fimi.avif"
            if old_image.exists():
                backup_path = OUTPUT_DIR / "staedte-fimi-OLD-BACKUP.avif"
                old_image.rename(backup_path)
                print(f"\n   📦 Altes Bild gesichert: {backup_path.name}")

            # Neues Bild speichern
            saved_files = save_image(img, "staedte-fimi", OUTPUT_DIR)

            print(f"\n✅ ERFOLGREICH! {len(saved_files)} Dateien erstellt.")
            return True
        else:
            print(f"\n❌ Keine Bilddaten erhalten")
            return False

    except Exception as e:
        print(f"\n❌ FEHLER: {e}")
        import traceback
        traceback.print_exc()
        return False


def main():
    """Hauptfunktion."""
    print("\n" + "="*70)
    print("   FIMI BAYERN KARTE GENERATOR")
    print("   9:16 Portrait Format mit schwebendem Effekt")
    print("   Gemini 3 Pro Image Preview - 4K Qualität")
    print("="*70)

    print(f"\n📁 Referenzbild: {REFERENCE_IMAGE}")
    print(f"📁 Output: {OUTPUT_DIR}")

    # Client initialisieren
    client = init_client()

    # Bild generieren
    success = generate_image(client)

    print("\n" + "="*70)
    if success:
        print("   🎉 BAYERN KARTE ERFOLGREICH GENERIERT!")
        print(f"\n   📁 Dateien in: {OUTPUT_DIR}")
    else:
        print("   ❌ GENERATION FEHLGESCHLAGEN")
    print("="*70 + "\n")


if __name__ == "__main__":
    main()
