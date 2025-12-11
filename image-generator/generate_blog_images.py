#!/usr/bin/env python3
"""
Generate blog images for FIMI Gebäudereinigung Neuigkeiten
- Vorschaubild: 1200x750 (16:10 Format) für Übersichtsseite
- Hero-Bild: 2100x900 (21:9 Format) für Detailseite
"""

import anthropic
import base64
import os
from pathlib import Path

# Blog posts with image descriptions (NO PEOPLE, just objects/scenes)
BLOG_POSTS = [
    {
        "slug": "tariflohn-gebaeudereinigung-2025-2026",
        "title": "Tarifabschluss 2025/2026",
        "preview_prompt": "Professional still life of German Euro banknotes, a calculator, and official documents with salary tables on a clean wooden desk. Business atmosphere, soft lighting, no people visible. Focus on financial/wage theme.",
        "hero_prompt": "Wide panoramic view of an elegant office desk with German Euro banknotes fanned out, a modern calculator, official wage documents with tables and charts, and a pen. Professional business atmosphere with soft natural lighting from the side. Clean, modern aesthetic. No people. Ultra-wide 21:9 composition."
    },
    {
        "slug": "eu-oekodesign-verordnung-espr-reinigung",
        "title": "EU-Ökodesign-Verordnung",
        "preview_prompt": "Eco-friendly cleaning products with green leaf accents, recycling symbol, and EU flag colors subtly integrated. Sustainable cleaning bottles, natural sponges on a light background. Environmental theme, no people.",
        "hero_prompt": "Wide panoramic composition of eco-friendly cleaning supplies: green glass bottles with plant-based labels, natural brushes, biodegradable sponges, fresh green leaves, and a subtle EU recycling symbol. Bright, clean, sustainable aesthetic with natural lighting. No people. Ultra-wide 21:9 format."
    },
    {
        "slug": "digitalisierung-gebaeudereinigung-2025-ki-robotik-iot",
        "title": "Digitalisierung 2025",
        "preview_prompt": "Modern cleaning robot (Roomba-style) next to a tablet showing cleaning schedules and IoT dashboard. Futuristic but realistic, blue accent lighting, professional setting. No people visible.",
        "hero_prompt": "Wide panoramic view of modern cleaning technology: an autonomous cleaning robot, a tablet displaying IoT sensor data and cleaning schedules, smart home devices, and sensor equipment. Professional facility management setting with subtle blue tech lighting. No people. Ultra-wide 21:9 composition."
    },
    {
        "slug": "hygiene-arbeitsplatz-standards-buero-bmas-baua",
        "title": "Hygiene am Arbeitsplatz",
        "preview_prompt": "Immaculately clean modern office desk with hand sanitizer dispenser, disinfectant spray, and fresh white towels. Pristine workspace, bright natural lighting, hygienic atmosphere. No people.",
        "hero_prompt": "Wide panoramic view of a perfectly clean, modern open-plan office with gleaming desks, hand sanitizer stations, air purifiers, and professional cleaning supplies neatly arranged. Bright, sterile, healthy atmosphere with natural daylight. No people. Ultra-wide 21:9 format."
    },
    {
        "slug": "reinigungsintervalle-buero-schule-praxis-din-ral",
        "title": "Reinigungsintervalle",
        "preview_prompt": "Professional cleaning schedule on a clipboard, wall calendar with marked cleaning days, checklist with checkmarks, timer/clock. Organized planning theme, clean aesthetic. No people.",
        "hero_prompt": "Wide panoramic composition of cleaning planning materials: a large wall calendar with color-coded cleaning schedules, clipboards with checklists, a digital timer, cleaning frequency charts, and organized planning documents. Professional office setting. No people. Ultra-wide 21:9 format."
    },
    {
        "slug": "winterdienst-bayern-pflichten-haftung-bgh-urteil-2025",
        "title": "Winterdienst Bayern",
        "preview_prompt": "Winter service equipment: orange snow shovel, bag of road salt, warning signs on a snowy pathway. Bavarian winter scene, morning light, fresh snow. No people visible.",
        "hero_prompt": "Wide panoramic winter scene: professional snow clearing equipment including orange shovels, salt spreader, warning cones on a cleared pathway next to fresh snow. Typical Bavarian commercial property entrance in winter, soft morning light. No people. Ultra-wide 21:9 composition."
    },
    {
        "slug": "praxisreinigung-rki-krinko-richtlinien-hygiene-gesundheitswesen",
        "title": "Praxisreinigung RKI-Richtlinien",
        "preview_prompt": "Medical practice cleaning: disinfectant bottles, sterile wipes, examination table freshly cleaned, medical waste bin. Clinical hygiene setting, bright sterile lighting. No people.",
        "hero_prompt": "Wide panoramic view of a clean, empty medical examination room: freshly disinfected examination table, medical-grade cleaning supplies, sterile surfaces, organized medical equipment. Clinical, hygienic atmosphere with bright medical lighting. No people. Ultra-wide 21:9 format."
    },
    {
        "slug": "industriereinigung-arbeitssicherheit-dguv-gefahrstoffv",
        "title": "Industriereinigung Arbeitssicherheit",
        "preview_prompt": "Industrial cleaning safety equipment: yellow hard hat, safety goggles, chemical-resistant gloves, hazard warning signs in a factory setting. Safety focus, industrial aesthetic. No people.",
        "hero_prompt": "Wide panoramic view of industrial safety equipment and cleaning supplies in a factory: yellow hard hats, safety goggles, chemical-resistant suits hanging, hazard warning signs, industrial cleaning machines. Professional manufacturing environment. No people. Ultra-wide 21:9 composition."
    },
    {
        "slug": "schulreinigung-bayern-rahmenhygieneplan-hygienestandards",
        "title": "Schulreinigung Bayern",
        "preview_prompt": "Clean, empty classroom: freshly wiped student desks arranged neatly, clean chalkboard, hand sanitizer dispenser by the door. Bright, inviting school atmosphere. No people.",
        "hero_prompt": "Wide panoramic view of an immaculately clean, empty German classroom: rows of clean wooden desks, spotless chalkboard, large windows with natural light, hand sanitizer station, and gleaming floor. Welcoming educational environment. No people. Ultra-wide 21:9 format."
    },
    {
        "slug": "ausbildung-gebaeudereiniger-gehalt-karriere-2025",
        "title": "Ausbildung Gebäudereiniger",
        "preview_prompt": "Career and training theme: German apprenticeship certificate, professional cleaning equipment catalog, career ladder diagram, training manual. Achievement and growth focus. No people.",
        "hero_prompt": "Wide panoramic composition showing career development materials: German Gesellenbrief (apprenticeship certificate), professional cleaning equipment training manuals, career progression charts, modern cleaning tools and certificates. Aspirational, professional atmosphere. No people. Ultra-wide 21:9 format."
    },
    {
        "slug": "fachkraeftemangel-gebaeudereinigung-loesungen-2025",
        "title": "Fachkräftemangel Lösungen",
        "preview_prompt": "Recruitment theme: job posting board with 'Stellenangebot' signs, application folders, employer branding materials, team building puzzle pieces. Hiring challenge concept. No people.",
        "hero_prompt": "Wide panoramic view of recruitment materials: German job posting boards with 'Stellenangebot Gebäudereiniger' signs, stacks of application folders, company brochures, puzzle pieces symbolizing team building. Modern HR office setting. No people. Ultra-wide 21:9 composition."
    },
    {
        "slug": "gesundheitsschutz-reinigung-ergonomie-hautschutz-bg-bau",
        "title": "Gesundheitsschutz Reinigung",
        "preview_prompt": "Occupational health protection: ergonomic cleaning mop with adjustable handle, protective gloves, skin care cream, back support belt. Worker health focus. No people.",
        "hero_prompt": "Wide panoramic composition of health and safety equipment for cleaners: ergonomic cleaning tools with adjustable handles, various protective gloves, professional skin care products, back support belt, and safety information posters. Wellness and protection focus. No people. Ultra-wide 21:9 format."
    }
]

def generate_image(prompt: str, size: str = "1024x1024") -> bytes:
    """Generate an image using Claude's image generation capability."""
    client = anthropic.Anthropic()

    # Map our sizes to supported sizes
    if "2100" in size or "21:9" in size.lower() or "hero" in size.lower():
        # For hero images (21:9), use landscape
        actual_size = "1792x1024"  # Will crop to 21:9 later
    else:
        # For preview images (16:10), use square and crop
        actual_size = "1024x1024"

    message = client.messages.create(
        model="claude-sonnet-4-20250514",
        max_tokens=1024,
        messages=[
            {
                "role": "user",
                "content": f"""Generate a professional, photorealistic image for a German building cleaning company's blog.

IMPORTANT REQUIREMENTS:
- NO PEOPLE, NO FACES, NO HANDS visible in the image
- Professional, clean aesthetic suitable for corporate blog
- High quality, sharp details
- Good lighting, modern look
- Colors should complement teal (#109387) and dark blue (#012956)

Image description: {prompt}

Generate this image now."""
            }
        ]
    )

    # Extract image from response
    for block in message.content:
        if block.type == "image":
            return base64.b64decode(block.source.data)

    raise Exception("No image generated in response")

def save_image(image_data: bytes, filepath: str):
    """Save image data to file."""
    with open(filepath, 'wb') as f:
        f.write(image_data)
    print(f"✓ Saved: {filepath}")

def main():
    output_dir = Path("/Users/brandea/Desktop/FIMI-Gebaeudereinigung/public/images/blog")
    output_dir.mkdir(parents=True, exist_ok=True)

    print("=" * 60)
    print("FIMI Blog Image Generator")
    print("=" * 60)

    for i, post in enumerate(BLOG_POSTS, 1):
        slug = post["slug"]
        print(f"\n[{i}/{len(BLOG_POSTS)}] {post['title']}")
        print("-" * 40)

        # Generate preview image (16:10)
        preview_path = output_dir / f"{slug}-preview.png"
        if not preview_path.exists():
            print(f"  Generating preview image...")
            try:
                img_data = generate_image(post["preview_prompt"], "preview")
                save_image(img_data, str(preview_path))
            except Exception as e:
                print(f"  ✗ Error: {e}")
        else:
            print(f"  ✓ Preview already exists")

        # Generate hero image (21:9)
        hero_path = output_dir / f"{slug}-hero.png"
        if not hero_path.exists():
            print(f"  Generating hero image...")
            try:
                img_data = generate_image(post["hero_prompt"], "hero")
                save_image(img_data, str(hero_path))
            except Exception as e:
                print(f"  ✗ Error: {e}")
        else:
            print(f"  ✓ Hero already exists")

    print("\n" + "=" * 60)
    print("Done! Now run image optimization script.")
    print("=" * 60)

if __name__ == "__main__":
    main()
