#!/usr/bin/env python3
"""Entfernt spezifisches Logo von einem Bild."""

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
PUBLIC_DIR = PROJECT_ROOT / "public" / "images" / "referenzen"

MODEL_NAME = "gemini-3-pro-image-preview"

os.environ["GOOGLE_APPLICATION_CREDENTIALS"] = str(CREDENTIALS_PATH)

client = genai.Client(
    vertexai=True,
    project="fimi-bilder",
    location="global"
)

def fix_logo(image_name: str, retries: int = 5):
    parts = image_name.split("-")
    ref_id = f"{parts[0]}-{parts[1]}"
    
    source_path = PUBLIC_DIR / ref_id / f"{image_name}.avif"
    
    if not source_path.exists():
        print(f"❌ Bild nicht gefunden: {source_path}")
        return False
    
    print(f"📷 Lade Bild: {source_path}")
    source_img = Image.open(source_path)
    
    # Sehr spezifischer Prompt für Logo-Entfernung
    prompt = """KRITISCHE BILDBEARBEITUNG - LOGO ENTFERNEN:

Sieh dir das Bild genau an. An der Seite des Reinigungsgeräts/der Maschine ist ein blaues "FIMI" Logo/Schriftzug sichtbar.

DEINE AUFGABE:
1. ENTFERNE den blauen "FIMI" Schriftzug komplett von der Maschine/dem Gerät
2. Ersetze die Stelle wo das Logo war mit der passenden Maschinenoberfläche (grau/silber, je nach Umgebung)
3. Die Maschine soll danach NEUTRAL aussehen - OHNE jegliche Beschriftung oder Logo

BEHALTE ALLES ANDERE EXAKT BEI:
- Die gesamte Szene, Raum, Perspektive
- Die Maschine selbst (nur Logo entfernen!)
- Alle anderen Details, Beleuchtung, Farben

Das Ergebnis soll so aussehen, als hätte die Maschine NIE ein Logo gehabt - einfach eine neutrale, unbeschriftete Oberfläche."""

    for attempt in range(1, retries + 1):
        try:
            print(f"🔄 Entferne FIMI-Logo... (Versuch {attempt}/{retries})")
            
            response = client.models.generate_content(
                model=MODEL_NAME,
                contents=[
                    "BILD MIT LOGO - Entferne den blauen FIMI-Schriftzug von der Maschine:",
                    source_img,
                    prompt
                ],
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
                        
                        target_dir = PUBLIC_DIR / ref_id
                        
                        # Speichere alle Größen
                        sizes = [1024, 768, 384]
                        for size in sizes:
                            if img.width >= size:
                                ratio = size / img.width
                                new_height = int(img.height * ratio)
                                resized = img.resize((size, new_height), Image.Resampling.LANCZOS)
                            else:
                                resized = img
                            
                            resized.save(target_dir / f"{image_name}-{size}w.avif", 'AVIF', quality=80)
                            resized.save(target_dir / f"{image_name}-{size}w.webp", 'WEBP', quality=80)
                        
                        img.save(target_dir / f"{image_name}.avif", 'AVIF', quality=85)
                        print(f"✅ {image_name}.avif gespeichert ({img.size[0]}x{img.size[1]})")
                        return True
            
            print(f"⚠️ Keine Bilddaten (Versuch {attempt}/{retries})")
            if attempt < retries:
                time.sleep(20)
                
        except Exception as e:
            error_str = str(e)
            if "RESOURCE_EXHAUSTED" in error_str:
                wait_time = 30 * attempt
                print(f"⏳ Rate Limit - warte {wait_time}s")
                time.sleep(wait_time)
            else:
                print(f"⚠️ Fehler: {error_str[:100]}")
                if attempt < retries:
                    time.sleep(15)
    
    return False

if __name__ == "__main__":
    image_name = sys.argv[1] if len(sys.argv) > 1 else "ref-005-2"
    success = fix_logo(image_name)
    sys.exit(0 if success else 1)
