#!/usr/bin/env python3
"""Generates occupational health blog images."""

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
BLOG_DIR = PROJECT_ROOT / "public" / "images" / "blog"

MODEL_NAME = "gemini-3-pro-image-preview"

os.environ["GOOGLE_APPLICATION_CREDENTIALS"] = str(CREDENTIALS_PATH)

client = genai.Client(
    vertexai=True,
    project="fimi-bilder",
    location="global"
)

def generate_image(prompt: str, target_width: int, target_height: int, output_path: Path, retries: int = 5):
    """Generate a single image with specific dimensions."""

    for attempt in range(1, retries + 1):
        try:
            print(f"🔄 Generating image... (Attempt {attempt}/{retries})")
            print(f"   Target: {target_width}x{target_height}")

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

                        # Resize to exact dimensions
                        img_resized = img.resize((target_width, target_height), Image.Resampling.LANCZOS)

                        # Ensure directory exists
                        output_path.parent.mkdir(parents=True, exist_ok=True)

                        # Save as PNG
                        img_resized.save(output_path, 'PNG', optimize=True)
                        print(f"✅ Saved: {output_path.name} ({img_resized.size[0]}x{img_resized.size[1]})")
                        return True

            print(f"⚠️ No image data (Attempt {attempt}/{retries})")
            if attempt < retries:
                time.sleep(20)

        except Exception as e:
            error_str = str(e)
            if "RESOURCE_EXHAUSTED" in error_str:
                wait_time = 30 * attempt
                print(f"⏳ Rate limit - waiting {wait_time}s")
                time.sleep(wait_time)
            else:
                print(f"⚠️ Error: {error_str[:100]}")
                if attempt < retries:
                    time.sleep(15)

    return False

if __name__ == "__main__":
    # Image 1: Preview (1408x768)
    prompt1 = """Create a professional product photography image of protective equipment for cleaning work.

SCENE:
- Various colored protective gloves (rubber gloves, nitrile gloves)
- Colors: blue gloves, yellow gloves, natural realistic colors
- Skin cream and lotion bottles (white cream tubes)
- Ergonomic cleaning tools arranged professionally
- Clean white/grey background
- Studio lighting setup

STYLE:
- Professional product photography
- Stock photo quality
- Clean, minimal composition
- Natural, authentic colors (no oversaturation)
- Sharp focus, high resolution
- Bright, even lighting

CRITICAL - FORBIDDEN:
- NO people in the image
- NO hands visible
- NO faces
- NO text or logos on products
- NO brand names visible

The image should look like high-end healthcare/safety product photography - professional, clean, trustworthy."""

    # Image 2: Hero (1584x672 ultra-wide)
    prompt2 = """Create a wide panoramic product photography image of occupational health equipment for professional cleaning.

SCENE:
- Wide horizontal arrangement on neutral surface
- Protective gloves (various types)
- Hand cream bottles
- Ergonomic mop handle (portion visible)
- Safety information booklet
- First aid supplies
- All items arranged in professional panoramic layout

STYLE:
- High-end product photography
- Ultra-wide panoramic format
- Bright studio-style lighting
- Neutral grey/white surface
- Authentic natural colors
- Professional healthcare marketing aesthetic
- Sharp, high resolution

CRITICAL - FORBIDDEN:
- NO people in the image
- NO hands visible
- NO faces
- NO text or logos readable
- NO brand names

Wide panoramic composition showing professional occupational health and safety equipment for cleaning industry."""

    output1 = BLOG_DIR / "gesundheitsschutz-reinigung-ergonomie-hautschutz-bg-bau.png"
    output2 = BLOG_DIR / "gesundheitsschutz-reinigung-ergonomie-hautschutz-bg-bau-hero.png"

    print("\n" + "="*60)
    print("IMAGE 1: Preview (1408x768)")
    print("="*60)
    success1 = generate_image(prompt1, 1408, 768, output1)

    if success1:
        print("\n⏳ Waiting 30 seconds before generating second image...")
        time.sleep(30)

        print("\n" + "="*60)
        print("IMAGE 2: Hero (1584x672)")
        print("="*60)
        success2 = generate_image(prompt2, 1584, 672, output2)

        if success2:
            print("\n🎉 Both images generated successfully!")
        else:
            print("\n❌ Failed to generate image 2")
    else:
        print("\n❌ Failed to generate image 1")
