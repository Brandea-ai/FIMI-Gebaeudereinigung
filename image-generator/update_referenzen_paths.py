#!/usr/bin/env python3
"""
Updates referenzen-data.ts to use local generated images instead of Unsplash URLs.
"""

import re
import os

def main():
    # Path to the file
    file_path = os.path.join(os.path.dirname(__file__), '..', 'lib', 'referenzen-data.ts')

    # Read the file
    with open(file_path, 'r', encoding='utf-8') as f:
        content = f.read()

    # Replace Unsplash URLs with local paths for each reference
    # Find each id and its bilder array
    def replace_bilder(match):
        ref_id = match.group(1)
        newlines = f"""bilder: [
      '/images/referenzen/{ref_id}/{ref_id}-1.avif',
      '/images/referenzen/{ref_id}/{ref_id}-2.avif',
      '/images/referenzen/{ref_id}/{ref_id}-3.avif',
    ],"""
        return newlines

    # Pattern to match bilder arrays with Unsplash URLs
    # First, find all ref IDs and then replace their bilder arrays

    # Find all reference IDs in order
    ref_ids = re.findall(r"id: '(ref-\d+)'", content)

    for ref_id in ref_ids:
        # Pattern to match the bilder array for this specific ref
        pattern = rf"(id: '{ref_id}'.*?)(bilder: \[)[^\]]+(\])"

        def replacer(m):
            prefix = m.group(1)
            return prefix + f"""bilder: [
      '/images/referenzen/{ref_id}/{ref_id}-1.avif',
      '/images/referenzen/{ref_id}/{ref_id}-2.avif',
      '/images/referenzen/{ref_id}/{ref_id}-3.avif',
    ]"""

        content = re.sub(pattern, replacer, content, flags=re.DOTALL)

    # Also update the comment about Unsplash
    content = content.replace(
        "bilder: string[] // Unsplash Platzhalter - später durch echte Bilder ersetzen",
        "bilder: string[] // Generierte FIMI-Bilder"
    )

    # Write the file back
    with open(file_path, 'w', encoding='utf-8') as f:
        f.write(content)

    print(f"✅ Updated {len(ref_ids)} references with local image paths")
    print(f"   References: {ref_ids[0]} to {ref_ids[-1]}")

if __name__ == '__main__':
    main()
