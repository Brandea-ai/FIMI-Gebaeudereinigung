#!/usr/bin/env python3
"""
FIMI Einzelbild-Generator
Generiert einzelne Bilder mit Nano Banana Pro für manuelle Qualitätskontrolle.
"""

import os
import sys
import time
from pathlib import Path

# Google GenAI
from google import genai
from google.genai import types

# Pillow für Bildverarbeitung
from PIL import Image
import pillow_avif

# Pfade
SCRIPT_DIR = Path(__file__).parent
CREDENTIALS_PATH = SCRIPT_DIR / "credentials" / "fimi-bilder-credentials.json"
PUBLIC_DIR = SCRIPT_DIR.parent / "public" / "images"

# Master Style aus GOLDENES-REGELWERK.md
MASTER_STYLE = """FIMI Corporate Photography Style - Premium German Cleaning Company

BRAND IDENTITY:
- Company: FIMI Gebäudereinigung (Professional cleaning services)
- Primary Color: Deep navy blue (#012956)
- Accent Color: Teal (#109387)
- Mood: Trustworthy, competent, premium quality, authentically German

PHOTOGRAPHY STYLE:
- Style: High-end commercial corporate photography
- Lighting: Bright natural daylight, soft professional shadows
- Focus: Sharp with subtle depth of field
- Post-processing: Clean, vibrant but not oversaturated

WORKWEAR (Engelbert Strauss Style):
- Navy blue (#012956) polo shirts, jackets, or work pants
- FIMI logo: small on left chest, large on back
- Clean, professional appearance
- Quality German workwear look

CRITICAL REQUIREMENTS:
- NO stock photo aesthetic - must look authentic
- NO generic/international look - German environment
- MUST be photorealistic (not illustration)
- NO AI artifacts (extra fingers, distorted faces)
- Professional corporate photography feel

EQUIPMENT BRANDS (for authenticity):
- Kärcher (yellow/black) - floor scrubbers, pressure washers
- Unger (green) - window cleaning tools
- Vermop - mop systems, cleaning carts
- Numatic Henry (red) - vacuum cleaners
"""


def init_client():
    """Initialisiert den Google GenAI Client mit Vertex AI."""
    os.environ["GOOGLE_APPLICATION_CREDENTIALS"] = str(CREDENTIALS_PATH)

    client = genai.Client(
        vertexai=True,
        project="fimi-bilder",
        location="us-central1"
    )
    print("✓ Client initialisiert (Vertex AI)")
    return client


def generate_image(client, prompt: str, aspect_ratio: str = "16:9") -> bytes:
    """
    Generiert ein Bild mit der Imagen API.

    Args:
        client: Google GenAI Client
        prompt: Bildprompt
        aspect_ratio: z.B. "16:9", "3:4", "1:1"

    Returns:
        Bild als Bytes (PNG)
    """
    full_prompt = f"{MASTER_STYLE}\n\n---\n\nGENERATE THIS IMAGE:\n{prompt}"

    print(f"\nGeneriere Bild...")
    print(f"Aspect Ratio: {aspect_ratio}")
    print(f"Prompt: {prompt[:100]}...")

    # Versuche zuerst Imagen 3
    try:
        response = client.models.generate_images(
            model="imagen-3.0-generate-002",
            prompt=full_prompt,
            config=types.GenerateImagesConfig(
                number_of_images=1,
                aspect_ratio=aspect_ratio,
                safety_filter_level="BLOCK_MEDIUM_AND_ABOVE",
                person_generation="ALLOW_ADULT",
            )
        )

        if response.generated_images:
            print("✓ Bild generiert mit Imagen 3")
            return response.generated_images[0].image.image_bytes

    except Exception as e:
        print(f"Imagen 3 fehlgeschlagen: {e}")
        print("Versuche alternatives Modell...")

    # Fallback: Gemini mit Bildgenerierung
    try:
        response = client.models.generate_content(
            model="gemini-2.0-flash-exp",
            contents=full_prompt,
            config=types.GenerateContentConfig(
                response_modalities=["IMAGE", "TEXT"],
            )
        )

        if response.candidates:
            for part in response.candidates[0].content.parts:
                if hasattr(part, 'inline_data') and part.inline_data:
                    print("✓ Bild generiert mit Gemini")
                    return part.inline_data.data

    except Exception as e:
        print(f"Gemini fehlgeschlagen: {e}")

    raise Exception("Bildgenerierung fehlgeschlagen mit allen Modellen")


def save_image(image_bytes: bytes, name: str, target_dir: Path) -> Path:
    """
    Speichert Bild als AVIF + WebP in verschiedenen Größen.

    Args:
        image_bytes: Rohes Bild
        name: Dateiname ohne Erweiterung
        target_dir: Zielverzeichnis

    Returns:
        Pfad zur Hauptdatei
    """
    target_dir.mkdir(parents=True, exist_ok=True)

    # Temporär speichern
    temp_path = target_dir / f"{name}_temp.png"
    with open(temp_path, 'wb') as f:
        f.write(image_bytes)

    # Mit Pillow öffnen
    img = Image.open(temp_path)
    if img.mode == 'RGBA':
        img = img.convert('RGB')

    print(f"Original: {img.size[0]}x{img.size[1]}")

    # Responsive Größen
    sizes = [1920, 1440, 1024, 768, 384]

    for size in sizes:
        if img.width >= size:
            ratio = size / img.width
            new_height = int(img.height * ratio)
            resized = img.resize((size, new_height), Image.Resampling.LANCZOS)
        else:
            resized = img
            size = img.width

        # AVIF
        avif_path = target_dir / f"{name}-{size}w.avif"
        resized.save(avif_path, 'AVIF', quality=80)

        # WebP
        webp_path = target_dir / f"{name}-{size}w.webp"
        resized.save(webp_path, 'WEBP', quality=80)

        print(f"  Saved: {size}w (AVIF + WebP)")

    # Hauptdatei (höchste Qualität)
    main_avif = target_dir / f"{name}.avif"
    img.save(main_avif, 'AVIF', quality=85)
    print(f"  Main: {name}.avif")

    # Temp löschen
    temp_path.unlink()

    return main_avif


def generate_startseite_images():
    """Generiert die fehlenden Startseiten-Bilder."""

    print("\n" + "="*60)
    print("FIMI BILDGENERATOR - STARTSEITE")
    print("="*60)

    client = init_client()
    home_dir = PUBLIC_DIR / "home"

    # BILD 1: Process Contact (Ansprechpartner)
    print("\n" + "-"*60)
    print("BILD 1: process-contact.avif")
    print("Kontext: Ansprechpartner im Prozess-Bereich")
    print("Seitenverhältnis: 3:4 (Portrait)")
    print("-"*60)

    prompt_contact = """A friendly German customer service representative at FIMI Gebäudereinigung.

PERSON:
- German man, mid-30s to mid-40s
- Professional, trustworthy appearance
- Friendly, confident smile with direct eye contact to camera
- Clean-shaven or neatly trimmed beard

CLOTHING:
- Navy blue (#012956) polo shirt
- Small FIMI logo embroidered on left chest (white logo on dark fabric)
- Looks like premium Engelbert Strauss workwear
- Clean, professional appearance

POSE:
- Three-quarter view, slightly turned toward camera
- Standing confidently
- Arms relaxed or holding a tablet/clipboard
- Professional but approachable

BACKGROUND:
- Modern German office environment
- Glass partitions, natural daylight
- Clean, minimalist design
- Slightly blurred for depth of field

MOOD: This is someone you would trust to manage your building's cleaning. Professional, competent, approachable.
"""

    try:
        image_bytes = generate_image(client, prompt_contact, "3:4")
        save_image(image_bytes, "process-contact", home_dir)
        print("\n✅ process-contact.avif erfolgreich!")
    except Exception as e:
        print(f"\n❌ Fehler: {e}")
        return 1

    print("\nWarte 10 Sekunden (Rate Limit)...")
    time.sleep(10)

    # BILD 2: FAQ Service (Kundenservice)
    print("\n" + "-"*60)
    print("BILD 2: faq-service.avif")
    print("Kontext: Kundenservice in FAQ-Sidebar")
    print("Seitenverhältnis: 16:9 (Landscape)")
    print("-"*60)

    prompt_faq = """A professional customer service scene at FIMI Gebäudereinigung.

PERSON:
- Friendly German woman, mid-20s to mid-30s
- Professional, helpful appearance
- Warm smile, engaged in conversation (on phone)
- Not looking directly at camera - natural working moment

CLOTHING:
- Navy blue (#012956) blouse or polo shirt
- Small FIMI logo visible
- Professional, clean appearance

SETTING:
- Modern reception desk or customer service area
- Computer monitor visible on desk
- Modern desk phone or headset
- Some green plants for warmth
- Natural light from windows
- Clean, organized workspace

BACKGROUND:
- German office interior
- Light gray or white walls
- Professional but welcoming atmosphere

FRAMING: Landscape format (16:9). Desk and person as focal point. Office background slightly blurred.

MOOD: Professional customer service. Shows that customers receive personal attention and care.
"""

    try:
        image_bytes = generate_image(client, prompt_faq, "16:9")
        save_image(image_bytes, "faq-service", home_dir)
        print("\n✅ faq-service.avif erfolgreich!")
    except Exception as e:
        print(f"\n❌ Fehler: {e}")
        return 1

    print("\n" + "="*60)
    print("FERTIG!")
    print(f"Bilder gespeichert in: {home_dir}")
    print("="*60)

    return 0


if __name__ == "__main__":
    sys.exit(generate_startseite_images())
