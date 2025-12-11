#!/usr/bin/env python3
"""
Generate TWO blog images for Reinigungsintervalle article
- Preview image (1408x768)
- Hero image (1584x672)
"""

import os
import sys
import time
from pathlib import Path
from google import genai
from google.genai import types
from PIL import Image
from io import BytesIO

# Setup
SCRIPT_DIR = Path(__file__).parent
PROJECT_ROOT = SCRIPT_DIR.parent
CREDENTIALS_PATH = SCRIPT_DIR / "credentials" / "fimi-bilder-credentials.json"

OUTPUT_PATH_1 = PROJECT_ROOT / "public" / "images" / "blog" / "reinigungsintervalle-buero-schule-praxis-din-ral.png"
OUTPUT_PATH_2 = PROJECT_ROOT / "public" / "images" / "blog" / "reinigungsintervalle-buero-schule-praxis-din-ral-hero.png"

MODEL_NAME = "gemini-3-pro-image-preview"

os.environ["GOOGLE_APPLICATION_CREDENTIALS"] = str(CREDENTIALS_PATH)

client = genai.Client(
    vertexai=True,
    project="fimi-bilder",
    location="global"
)

def generate_image(prompt: str, target_size: tuple, image_name: str, retries: int = 5) -> bool:
    """Generate a single image with retries."""

    for attempt in range(1, retries + 1):
        try:
            print(f"\n🔄 Generating {image_name}... (Attempt {attempt}/{retries})")

            response = client.models.generate_content(
                model=MODEL_NAME,
                contents=[prompt],
                config=types.GenerateContentConfig(
                    response_modalities=["IMAGE"],
                )
            )

            if response.candidates:
                for part in response.candidates[0].content.parts:
                    if hasattr(part, 'inline_data') and part.inline_data:
                        image_data = part.inline_data.data
                        img = Image.open(BytesIO(image_data))

                        if img.mode == 'RGBA':
                            img = img.convert('RGB')

                        # Resize to exact target dimensions
                        img_resized = img.resize(target_size, Image.Resampling.LANCZOS)

                        # Save based on which image we're generating
                        output_path = OUTPUT_PATH_1 if image_name == "Image 1 (Preview)" else OUTPUT_PATH_2
                        output_path.parent.mkdir(parents=True, exist_ok=True)

                        img_resized.save(output_path, 'PNG', quality=95)
                        print(f"✅ {image_name} saved: {output_path}")
                        print(f"   Size: {img_resized.size[0]}x{img_resized.size[1]} pixels")
                        return True

            print(f"⚠️ No image data (Attempt {attempt}/{retries})")
            if attempt < retries:
                time.sleep(20)

        except Exception as e:
            error_str = str(e)
            if "RESOURCE_EXHAUSTED" in error_str:
                wait_time = 30 * attempt
                print(f"⏳ Rate Limit - waiting {wait_time}s")
                time.sleep(wait_time)
            else:
                print(f"⚠️ Error: {error_str[:100]}")
                if attempt < retries:
                    time.sleep(15)

    return False

def main():
    print("=" * 80)
    print("GENERATING TWO BLOG IMAGES - REINIGUNGSINTERVALLE")
    print("=" * 80)

    # Prompt for Image 1 (Preview 1408x768)
    prompt1 = """GENERATE PROFESSIONAL STOCK PHOTOGRAPH - Cleaning Schedule Planning

Create a photorealistic image showing professional planning and scheduling materials.

MAIN ELEMENTS:
- Wall calendar with cleaning schedules marked with colorful markers/highlights
- Clipboard with a detailed checklist showing checkmarks
- Analog clock on the wall showing business hours
- Organized desk surface with planning materials
- Everything neatly arranged, professional office setting

STYLE & ATMOSPHERE:
- Professional stock photo quality (iStock/Getty Images style)
- Natural office lighting from window - soft, warm light
- Warm, natural tones: beige, wood browns, soft whites
- Clean, organized, structured composition
- High-quality photography, sharp and clear details
- Authentic, realistic look

CRITICAL REQUIREMENTS - ABSOLUTELY FORBIDDEN:
- NO PEOPLE in the image
- NO HANDS visible
- NO FACES or body parts
- NO PERSONS in background
- Show ONLY the planning materials and objects

COLORS:
- Natural warm tones
- Wood, beige, cream, soft white
- Colorful accents from markers/highlights on calendar
- NO artificial blue or cyan tints
- Authentic, realistic stock photo colors

PERSPECTIVE:
- Slightly angled overhead view or frontal view
- Good readability of checklist/calendar
- Professional product photography style
- Natural composition

ASPECT RATIO: 16:9 landscape orientation
Image should convey organization, structure, and professional cleaning schedule planning."""

    # Prompt for Image 2 (Hero 1584x672 ultra-wide)
    prompt2 = """GENERATE ULTRA-WIDE PANORAMIC STOCK PHOTOGRAPH - Planning Materials

Create a photorealistic wide panoramic shot of organized planning materials.

MAIN ELEMENTS:
- Open calendar with schedules spread on wooden desk
- Planning sheets and documents
- Kitchen timer or small analog timer
- Multiple checklists with green checkmarks
- White coffee cup with coffee
- All beautifully arranged on a warm wooden desk surface

STYLE & ATMOSPHERE:
- Editorial quality lifestyle photography (Getty Images/Unsplash style)
- Soft natural window light from the left side creating gentle shadows
- Shallow depth of field - foreground sharp, background slightly soft
- Natural warm tones throughout
- Cinematic ultra-wide composition
- Professional commercial photography quality

CRITICAL REQUIREMENTS - ABSOLUTELY FORBIDDEN:
- NO PEOPLE in frame
- NO HANDS visible
- NO FACES or body parts
- NO PERSONS anywhere in the image
- Show ONLY the materials and objects

COLORS:
- Natural warm tones only
- Honey/medium wood desk
- Cream/off-white paper
- Soft whites
- Warm beige tones
- NO corporate blue tints
- NO artificial cyan or teal colors
- Authentic realistic stock photo colors

PERSPECTIVE:
- Wide panoramic ultra-wide view
- Slightly elevated angle looking down at desk
- Materials spread naturally across frame
- Professional editorial photography composition
- Cinematic wide-screen feel

ASPECT RATIO: Ultra-wide panoramic (approximately 21:9 or wider)
Lighting: Soft natural side lighting from left, creating depth and warmth

Image should convey planning, organization, professionalism in a warm, inviting editorial style."""

    # Generate Image 1
    success1 = generate_image(prompt1, (1408, 768), "Image 1 (Preview)")

    if not success1:
        print("\n❌ Failed to generate Image 1")
        return False

    # Wait between generations to avoid rate limits
    print("\n⏳ Waiting 25 seconds before generating Image 2...")
    time.sleep(25)

    # Generate Image 2
    success2 = generate_image(prompt2, (1584, 672), "Image 2 (Hero)")

    if not success2:
        print("\n❌ Failed to generate Image 2")
        return False

    print("\n" + "=" * 80)
    print("✅ SUCCESS! Both images generated and saved!")
    print("=" * 80)
    print(f"\nImage 1 (Preview): {OUTPUT_PATH_1}")
    print(f"  Dimensions: 1408x768")
    print(f"\nImage 2 (Hero): {OUTPUT_PATH_2}")
    print(f"  Dimensions: 1584x672")

    return True

if __name__ == "__main__":
    success = main()
    sys.exit(0 if success else 1)
