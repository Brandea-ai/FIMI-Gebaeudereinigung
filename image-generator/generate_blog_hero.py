#!/usr/bin/env python3
"""Generates blog hero images with custom prompts."""

import os
import sys
import time
from pathlib import Path
from io import BytesIO

from google import genai
from google.genai import types
from PIL import Image

SCRIPT_DIR = Path(__file__).parent
PROJECT_ROOT = SCRIPT_DIR.parent
CREDENTIALS_PATH = SCRIPT_DIR / "credentials" / "fimi-bilder-credentials.json"

MODEL_NAME = "gemini-3-pro-image-preview"

os.environ["GOOGLE_APPLICATION_CREDENTIALS"] = str(CREDENTIALS_PATH)

client = genai.Client(
    vertexai=True,
    project="fimi-bilder",
    location="global"
)

def generate_blog_hero(output_path: str, prompt: str, retries: int = 5):
    """Generate a blog hero image with custom prompt and save to specified path."""

    for attempt in range(1, retries + 1):
        try:
            print(f"🔄 Generating blog hero image... (Attempt {attempt}/{retries})")

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

                        # Create output directory
                        os.makedirs(os.path.dirname(output_path), exist_ok=True)

                        # Save as PNG
                        img.save(output_path, 'PNG', quality=95)
                        print(f"✅ Image saved: {output_path}")
                        print(f"   Size: {img.size[0]}x{img.size[1]} px")
                        file_size_kb = os.path.getsize(output_path) / 1024
                        print(f"   File size: {file_size_kb:.1f} KB")
                        return True

            print(f"⚠️ No image data received (Attempt {attempt}/{retries})")
            if attempt < retries:
                time.sleep(20)

        except Exception as e:
            error_str = str(e)
            if "RESOURCE_EXHAUSTED" in error_str:
                wait_time = 30 * attempt
                print(f"⏳ Rate limit reached - waiting {wait_time}s")
                time.sleep(wait_time)
            else:
                print(f"⚠️ Error: {error_str[:200]}")
                if attempt < retries:
                    time.sleep(15)

    return False

if __name__ == "__main__":
    if len(sys.argv) < 3:
        print("Usage: python generate_blog_hero.py <output_path> <prompt>")
        sys.exit(1)

    output_path = sys.argv[1]
    prompt = sys.argv[2]

    success = generate_blog_hero(output_path, prompt)
    sys.exit(0 if success else 1)
