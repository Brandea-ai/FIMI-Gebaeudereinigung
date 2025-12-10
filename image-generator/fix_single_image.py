#!/usr/bin/env python3
"""
Einzelnes Bild mit spezifischer Anweisung regenerieren.
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
PUBLIC_DIR = PROJECT_ROOT / "public" / "images" / "referenzen"

MODEL_NAME = "gemini-3-pro-image-preview"

os.environ["GOOGLE_APPLICATION_CREDENTIALS"] = str(CREDENTIALS_PATH)

client = genai.Client(
    vertexai=True,
    project="fimi-bilder",
    location="global"
)

def fix_image(image_name: str, instruction: str, retries: int = 3):
    """Regeneriert ein Bild mit spezifischer Anweisung."""
    
    # Parse image name (e.g., "ref-005-2")
    parts = image_name.split("-")
    ref_id = f"{parts[0]}-{parts[1]}"
    
    source_path = PUBLIC_DIR / ref_id / f"{image_name}.avif"
    
    if not source_path.exists():
        print(f"❌ Bild nicht gefunden: {source_path}")
        return False
    
    print(f"📷 Lade Bild: {source_path}")
    source_img = Image.open(source_path)
    
    prompt = f"""BILDBEARBEITUNG - EXAKTE REPRODUKTION MIT ÄNDERUNG:

Ich gebe dir ein Referenzbild. Bitte regeneriere dieses Bild EXAKT wie es ist, aber mit folgender KRITISCHER ÄNDERUNG:

{instruction}

BEHALTE EXAKT BEI:
- Die gesamte Raumarchitektur und Perspektive
- Alle Möbel und Einrichtung
- Die Beleuchtung und Lichtstimmung
- Die Kameraposition
- Die Farbstimmung und Bildkomposition
- Das Seitenverhältnis und die Auflösung

Das neue Bild muss dem Referenzbild so ähnlich wie möglich sein - nur die genannte Änderung soll durchgeführt werden.
"""

    for attempt in range(1, retries + 1):
        try:
            print(f"🔄 Regeneriere mit Gemini... (Versuch {attempt}/{retries})")
            
            response = client.models.generate_content(
                model=MODEL_NAME,
                contents=[
                    "REFERENZBILD - Regeneriere dieses Bild EXAKT mit der angegebenen Änderung:",
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
                        
                        # Hauptbild
                        img.save(target_dir / f"{image_name}.avif", 'AVIF', quality=85)
                        print(f"✅ {image_name}.avif gespeichert ({img.size[0]}x{img.size[1]})")
                        return True
            
            print(f"⚠️ Keine Bilddaten (Versuch {attempt}/{retries})")
            if attempt < retries:
                time.sleep(15)
                
        except Exception as e:
            error_str = str(e)
            if "RESOURCE_EXHAUSTED" in error_str:
                wait_time = 30 * attempt
                print(f"⏳ Rate Limit - warte {wait_time}s (Versuch {attempt}/{retries})")
                time.sleep(wait_time)
            else:
                print(f"⚠️ Fehler: {error_str[:100]}... (Versuch {attempt}/{retries})")
                if attempt < retries:
                    time.sleep(10)
    
    print("❌ Regenerierung fehlgeschlagen nach allen Versuchen")
    return False

if __name__ == "__main__":
    if len(sys.argv) < 3:
        print("Usage: python fix_single_image.py <image_name> <instruction>")
        sys.exit(1)
    
    image_name = sys.argv[1]
    instruction = sys.argv[2]
    
    success = fix_image(image_name, instruction)
    sys.exit(0 if success else 1)
