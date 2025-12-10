#!/usr/bin/env python3
"""Generiert ein einzelnes Bild komplett neu (nicht regenerieren)."""

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

def generate_new(image_name: str, retries: int = 5):
    parts = image_name.split("-")
    ref_id = f"{parts[0]}-{parts[1]}"
    image_num = int(parts[2])
    
    # ref-005-2 = Produktionshallen Automotive, Bild 2
    # Bild 2 sollte eine andere Perspektive der Produktionshalle zeigen
    
    prompt = """GENERIERE EIN NEUES BILD - Produktionshalle Automotive

Erstelle ein fotorealistisches Bild einer LEEREN, SAUBEREN Automobilproduktionshalle.

SZENE:
- Große industrielle Produktionshalle eines Automobilzulieferers
- Fertigungslinien, Roboter-Arme, Förderbänder
- Metallische Oberflächen, industrielle Beleuchtung
- Epoxidharzboden, sauber und glänzend
- Die Halle soll professionell gereinigt aussehen

KRITISCH - VERBOTEN:
- KEINE Menschen im Bild
- KEINE sichtbaren Reinigungsgeräte oder Maschinen (keine Scheuersaugmaschinen, keine Reinigungswagen)
- KEINE Logos oder Schriftzüge auf Geräten
- KEINE Markenlogos (Kärcher, FIMI, Nilfisk etc.)

STIL:
- Fotorealistisch, professionelle Industriefotografie
- Warme industrielle Beleuchtung
- Weitwinkel-Perspektive
- Hohe Auflösung, scharf

Das Bild soll eine saubere, professionelle Produktionshalle zeigen - das Ergebnis professioneller Gebäudereinigung."""

    for attempt in range(1, retries + 1):
        try:
            print(f"🔄 Generiere neues Bild... (Versuch {attempt}/{retries})")
            
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
                        
                        target_dir = PUBLIC_DIR / ref_id
                        target_dir.mkdir(parents=True, exist_ok=True)
                        
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
    success = generate_new(image_name)
    sys.exit(0 if success else 1)
