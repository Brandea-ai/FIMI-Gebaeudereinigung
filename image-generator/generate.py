#!/usr/bin/env python3
"""
FIMI Bildgenerator - Automatische Bildgenerierung mit Nano Banana Pro (Gemini 3 Pro Image)
==========================================================================================
Generiert alle Bilder aus der Shotlist in 4K Qualität mit konsistentem FIMI-Branding
"""

import os
import sys
import json
import time
import base64
import argparse
from pathlib import Path
from datetime import datetime
from io import BytesIO

# Google Cloud Imports
try:
    from google import genai
    from google.genai import types
    GENAI_AVAILABLE = True
except ImportError:
    GENAI_AVAILABLE = False
    print("WARNUNG: google-genai nicht installiert. Bitte 'pip install google-genai' ausfuehren.")

# Pillow fuer Bildverarbeitung
try:
    from PIL import Image
    PILLOW_AVAILABLE = True
except ImportError:
    PILLOW_AVAILABLE = False
    print("WARNUNG: Pillow nicht installiert. Bitte 'pip install Pillow pillow-avif-plugin' ausfuehren.")


# ============================================================================
# FIMI CORPORATE STYLE GUIDE
# ============================================================================

FIMI_MASTER_STYLE = """
FIMI Gebäudereinigung - Corporate Photography Style Guide:

BRAND IDENTITY:
- Professional German commercial cleaning company
- Premium quality, trustworthy, competent
- Modern, clean, authentic look

COLOR PALETTE:
- Primary: Deep navy blue uniforms (#012956)
- Secondary: Clean whites, light grays
- Accent: Professional silver/chrome equipment
- Environment: Modern German architecture, bright spaces

PEOPLE & UNIFORMS:
- Diverse team, professional appearance
- Navy blue polo shirts or work jackets with FIMI branding
- Clean, well-maintained uniforms
- Friendly but professional expressions
- Natural poses, authentic interactions

LIGHTING & ATMOSPHERE:
- Bright, natural daylight feel
- Soft professional shadows
- Clean, crisp image quality
- High contrast for professional look

PHOTOGRAPHY STYLE:
- Commercial corporate photography
- Sharp focus, professional composition
- Documentary/authentic feel - NOT stock photo aesthetic
- Slight depth of field for subject focus
- Eye-level or slightly elevated angles

ENVIRONMENT:
- Modern German office buildings, industrial facilities
- Clean, well-maintained spaces
- Professional equipment visible
- Real working environments

QUALITY STANDARDS:
- Photorealistic, high resolution
- No artificial or CGI look
- Subtle lens characteristics for realism
- Professional color grading
"""

FIMI_TEAM_CHARACTERS = """
CHARACTER CONSISTENCY - FIMI Team Members:

TEAM LEAD - "Thomas":
- German man, mid-40s
- Professional appearance, slight smile
- Navy blue FIMI polo shirt
- Confident, experienced look

TEAM MEMBER 1 - "Sarah":
- German woman, early 30s
- Friendly, approachable
- Navy blue work uniform
- Competent, efficient

TEAM MEMBER 2 - "Mehmet":
- German-Turkish man, late 20s
- Energetic, hardworking
- Navy blue uniform
- Professional demeanor

TEAM MEMBER 3 - "Anna":
- German woman, mid-50s
- Experienced, reliable
- Navy blue uniform
- Warm, trustworthy expression

Keep these characters consistent across all team images.
"""


class FIMIImageGenerator:
    """Hauptklasse fuer die Bildgenerierung mit Nano Banana Pro"""

    def __init__(self, config_path: str = "config.json"):
        self.base_dir = Path(__file__).parent
        self.config = self._load_config(config_path)
        self.progress_file = self.base_dir / "progress.json"
        self.progress = self._load_progress()
        self.client = None

        # Initialisiere Google GenAI Client
        if GENAI_AVAILABLE:
            credentials_path = os.environ.get(
                "GOOGLE_APPLICATION_CREDENTIALS",
                str(self.base_dir / "credentials" / "fimi-bilder-credentials.json")
            )
            os.environ["GOOGLE_APPLICATION_CREDENTIALS"] = credentials_path

            # Initialisiere mit Vertex AI Backend
            self.client = genai.Client(
                vertexai=True,
                project=self.config["project"]["id"],
                location=self.config["project"]["region"]
            )
            print(f"✓ Nano Banana Pro initialisiert")
            print(f"  Projekt: {self.config['project']['id']}")
            print(f"  Region: {self.config['project']['region']}")
            print(f"  Model: gemini-3-pro-image-preview (4K)")

    def _load_config(self, config_path: str) -> dict:
        """Laedt die Konfiguration"""
        config_file = self.base_dir / config_path
        if config_file.exists():
            with open(config_file, "r", encoding="utf-8") as f:
                return json.load(f)
        else:
            raise FileNotFoundError(f"Konfiguration nicht gefunden: {config_file}")

    def _load_progress(self) -> dict:
        """Laedt den Fortschritt fuer Resume-Funktion"""
        if self.progress_file.exists():
            with open(self.progress_file, "r", encoding="utf-8") as f:
                return json.load(f)
        return {"completed": [], "failed": [], "last_run": None}

    def _save_progress(self):
        """Speichert den Fortschritt"""
        self.progress["last_run"] = datetime.now().isoformat()
        with open(self.progress_file, "w", encoding="utf-8") as f:
            json.dump(self.progress, f, indent=2, ensure_ascii=False)

    def parse_shotlist(self, shotlist_dir: str) -> list:
        """Parst alle Markdown-Dateien in der Shotlist"""
        shotlist_path = Path(shotlist_dir)
        images = []

        if not shotlist_path.exists():
            print(f"FEHLER: Shotlist-Verzeichnis nicht gefunden: {shotlist_path}")
            return images

        # Finde alle .md Dateien
        md_files = list(shotlist_path.rglob("*.md"))
        print(f"Gefunden: {len(md_files)} Markdown-Dateien")

        for md_file in md_files:
            images.extend(self._parse_markdown(md_file))

        print(f"Insgesamt {len(images)} Bilder in der Shotlist")
        return images

    def _parse_markdown(self, md_file: Path) -> list:
        """Parst eine einzelne Markdown-Datei"""
        images = []

        with open(md_file, "r", encoding="utf-8") as f:
            content = f.read()

        # Extrahiere Tabellen mit Bildinfos
        lines = content.split("\n")
        current_section = ""
        in_table = False

        for line in lines:
            # Erkennt Sektionen
            if line.startswith("## "):
                current_section = line[3:].strip()
            elif line.startswith("### "):
                current_section = line[4:].strip()

            # Erkennt Tabellenheader
            if "|" in line and "Bildtyp" in line:
                in_table = True
                continue

            # Ueberspringe Trennlinie
            if in_table and line.startswith("|") and "---" in line:
                continue

            # Parse Tabellenzeilen (nur unerledigte [ ])
            if in_table and line.startswith("|") and "[ ]" in line:
                cells = [c.strip() for c in line.split("|") if c.strip()]
                if len(cells) >= 3:
                    image_info = {
                        "id": f"{md_file.stem}-{cells[0]}".replace(" ", "-"),
                        "type": cells[1] if len(cells) > 1 else "",
                        "description": cells[2] if len(cells) > 2 else "",
                        "format": cells[3] if len(cells) > 3 else "1920x1080px",
                        "section": current_section,
                        "source_file": str(md_file.relative_to(md_file.parent.parent)),
                        "category": self._determine_category(md_file, current_section)
                    }
                    images.append(image_info)

            # Ende der Tabelle
            if in_table and not line.startswith("|") and line.strip() and not line.startswith("#"):
                in_table = False

        return images

    def _determine_category(self, md_file: Path, section: str) -> str:
        """Bestimmt die Bildkategorie fuer konsistenten Stil"""
        filename = md_file.stem.lower()
        section_lower = section.lower()

        if "hero" in section_lower:
            return "HERO"
        elif "team" in section_lower or "mitarbeiter" in section_lower:
            return "TEAM"
        elif "equipment" in section_lower or "maschine" in section_lower:
            return "EQUIPMENT"
        elif "vorher" in section_lower or "nachher" in section_lower:
            return "BEFORE_AFTER"
        elif "portrait" in section_lower or "geschaeftsfuehr" in section_lower:
            return "PORTRAIT"
        elif "prozess" in section_lower or "ablauf" in section_lower:
            return "PROCESS"
        else:
            return "GENERAL"

    def generate_image(self, image_info: dict) -> dict:
        """Generiert ein einzelnes Bild mit Nano Banana Pro"""
        if not GENAI_AVAILABLE or not self.client:
            return {"success": False, "error": "Google GenAI nicht verfuegbar"}

        # Baue den optimierten Prompt
        prompt = self._build_prompt(image_info)

        # Bestimme Seitenverhaeltnis
        aspect_ratio = self._determine_aspect_ratio(image_info)

        print(f"\n{'='*60}")
        print(f"Generiere: {image_info['id']}")
        print(f"Kategorie: {image_info['category']}")
        print(f"Seitenverhaeltnis: {aspect_ratio}")
        print(f"Aufloesung: 4K")
        print(f"{'='*60}")

        try:
            # Nano Banana Pro API Call
            response = self.client.models.generate_content(
                model="gemini-3-pro-image-preview",
                contents=prompt,
                config=types.GenerateContentConfig(
                    response_modalities=["IMAGE", "TEXT"],
                    image_config=types.ImageConfig(
                        aspect_ratio=aspect_ratio,
                        image_size="4K"  # Maximale Aufloesung
                    )
                )
            )

            # Extrahiere Bild aus Response
            if response.candidates and response.candidates[0].content.parts:
                for part in response.candidates[0].content.parts:
                    if hasattr(part, 'inline_data') and part.inline_data:
                        # Speichere das Bild
                        image_data = part.inline_data.data
                        output_path = self._save_image(image_data, image_info)

                        # Qualitaetspruefung
                        quality_result = self._check_quality(output_path, image_info)

                        return {
                            "success": True,
                            "path": str(output_path),
                            "quality_score": quality_result["score"],
                            "quality_feedback": quality_result.get("feedback", ""),
                            "aspect_ratio": aspect_ratio,
                            "resolution": "4K"
                        }

            return {"success": False, "error": "Kein Bild in der Response"}

        except Exception as e:
            print(f"FEHLER: {str(e)}")
            return {"success": False, "error": str(e)}

    def _build_prompt(self, image_info: dict) -> str:
        """Baut den optimierten Prompt fuer Nano Banana Pro"""
        category = image_info.get("category", "GENERAL")
        description = image_info["description"]

        # Basis-Prompt mit Style Guide
        prompt_parts = [FIMI_MASTER_STYLE]

        # Kategorie-spezifische Anweisungen
        if category == "TEAM":
            prompt_parts.append(FIMI_TEAM_CHARACTERS)
            prompt_parts.append("Show FIMI team members working professionally.")

        elif category == "HERO":
            prompt_parts.append("""
HERO IMAGE REQUIREMENTS:
- Wide composition, cinematic feel
- Team or impressive facility as main subject
- Inspirational, premium quality
- Perfect for website header
""")

        elif category == "EQUIPMENT":
            prompt_parts.append("""
EQUIPMENT IMAGE REQUIREMENTS:
- Professional cleaning equipment in focus
- Modern, well-maintained machines
- Branded FIMI colors where appropriate
- Technical but approachable
""")

        elif category == "PORTRAIT":
            prompt_parts.append("""
PORTRAIT REQUIREMENTS:
- Professional headshot style
- Neutral or blurred background
- Confident, friendly expression
- Business casual or uniform
""")

        # Hauptbeschreibung
        prompt_parts.append(f"\nGENERATE THIS IMAGE:\n{description}")

        # Qualitaetsanweisungen
        prompt_parts.append("""
QUALITY REQUIREMENTS:
- Photorealistic, not AI-generated looking
- Sharp focus, professional lighting
- Authentic German business environment
- 4K resolution, print-ready quality
""")

        return "\n".join(prompt_parts)

    def _determine_aspect_ratio(self, image_info: dict) -> str:
        """Bestimmt das Seitenverhaeltnis basierend auf Format"""
        format_str = image_info.get("format", "").lower()

        if "16:9" in format_str or "1920x1080" in format_str:
            return "16:9"
        elif "9:16" in format_str or "1080x1920" in format_str:
            return "9:16"
        elif "4:3" in format_str or "800x600" in format_str:
            return "4:3"
        elif "3:4" in format_str or "600x800" in format_str:
            return "3:4"
        elif "1:1" in format_str:
            return "1:1"
        elif "21:9" in format_str:
            return "21:9"
        else:
            # Standard basierend auf Kategorie
            category = image_info.get("category", "")
            if category == "HERO":
                return "16:9"
            elif category == "PORTRAIT":
                return "3:4"
            else:
                return "16:9"

    def _save_image(self, image_data: bytes, image_info: dict) -> Path:
        """Speichert das generierte Bild"""
        output_dir = self.base_dir / self.config["output"]["originals_dir"]

        # Erstelle Unterordner basierend auf source_file
        source = image_info.get("source_file", "misc")
        subdir = Path(source).stem if source else "misc"
        target_dir = output_dir / subdir
        target_dir.mkdir(parents=True, exist_ok=True)

        # Dateiname
        safe_id = "".join(c if c.isalnum() or c in "-_" else "-" for c in image_info['id'])
        filename = f"fimi-{safe_id}.jpg"
        output_path = target_dir / filename

        # Speichere als JPG
        if PILLOW_AVAILABLE:
            image = Image.open(BytesIO(image_data))
            image.save(output_path, "JPEG", quality=95)
        else:
            with open(output_path, "wb") as f:
                f.write(image_data)

        print(f"✓ Gespeichert: {output_path}")
        return output_path

    def _check_quality(self, image_path: Path, image_info: dict) -> dict:
        """Prueft die Bildqualitaet mit Gemini"""
        try:
            # Lade Bild
            with open(image_path, "rb") as f:
                image_data = f.read()

            # Quality Check Prompt
            check_prompt = f"""
Analysiere dieses Bild für die FIMI Gebäudereinigung Website.

Erwartete Beschreibung: {image_info['description']}

Bewerte von 1-10:
1. PROFESSIONELL: Sieht es wie kommerzielle Firmenfotografie aus?
2. MARKENFIT: Navy-blaue Uniformen, saubere Umgebung?
3. AUTHENTIZITÄT: Wirkt es echt und nicht künstlich/KI-generiert?
4. TECHNISCH: Schärfe, Belichtung, Komposition?
5. RELEVANZ: Passt es zur Beschreibung?

Antworte im Format:
SCORE: [Zahl 1-10]
FEEDBACK: [Kurze Verbesserungsvorschläge falls Score < 8]
"""

            response = self.client.models.generate_content(
                model="gemini-2.0-flash",
                contents=[
                    types.Part.from_bytes(data=image_data, mime_type="image/jpeg"),
                    check_prompt
                ]
            )

            result_text = response.text if response.text else ""

            # Parse Score
            score = 7.0  # Default
            feedback = ""

            for line in result_text.split("\n"):
                if "SCORE:" in line:
                    try:
                        score = float(''.join(c for c in line if c.isdigit() or c == '.'))
                    except:
                        pass
                elif "FEEDBACK:" in line:
                    feedback = line.replace("FEEDBACK:", "").strip()

            print(f"  Qualitätsscore: {score}/10")
            if feedback:
                print(f"  Feedback: {feedback}")

            return {"score": score, "feedback": feedback}

        except Exception as e:
            print(f"  Qualitätsprüfung übersprungen: {e}")
            return {"score": 7.0, "feedback": ""}

    def convert_to_avif(self, image_path: Path) -> list:
        """Konvertiert Bild zu AVIF in verschiedenen Groessen"""
        if not PILLOW_AVAILABLE:
            print("  WARNUNG: Pillow nicht verfügbar, überspringe AVIF")
            return []

        output_files = []
        optimized_dir = self.base_dir / self.config["output"]["optimized_dir"]

        try:
            # Erstelle Unterordner
            relative_path = image_path.relative_to(self.base_dir / self.config["output"]["originals_dir"])
            image_name = image_path.stem
            target_dir = optimized_dir / relative_path.parent / image_name
            target_dir.mkdir(parents=True, exist_ok=True)

            img = Image.open(image_path)
            original_width, original_height = img.size
            aspect_ratio = original_width / original_height

            for width in self.config["output"]["responsive_sizes"]:
                if width <= original_width:
                    height = int(width / aspect_ratio)
                    resized = img.resize((width, height), Image.LANCZOS)

                    output_path = target_dir / f"{width}w.avif"
                    resized.save(output_path, "AVIF", quality=80)
                    output_files.append(output_path)

            print(f"  ✓ AVIF erstellt: {len(output_files)} Größen")

        except Exception as e:
            print(f"  AVIF-Fehler: {e}")

        return output_files

    def run(self, shotlist_dir: str, mode: str = "all", test_count: int = 5, resume: bool = True):
        """Hauptmethode zum Ausfuehren der Generierung"""
        print("\n" + "="*60)
        print("FIMI BILDGENERATOR - Nano Banana Pro (4K)")
        print("="*60)

        # Parse Shotlist
        images = self.parse_shotlist(shotlist_dir)

        if not images:
            print("Keine Bilder in der Shotlist gefunden!")
            return

        # Filter basierend auf Modus
        if mode == "test":
            images = images[:test_count]
            print(f"\n🧪 TESTMODUS: Generiere nur {test_count} Bilder")
        elif resume and self.progress["completed"]:
            completed_ids = set(self.progress["completed"])
            images = [img for img in images if img["id"] not in completed_ids]
            print(f"\n🔄 RESUME: {len(self.progress['completed'])} fertig, {len(images)} verbleibend")

        if not images:
            print("\n✓ Alle Bilder bereits generiert!")
            return

        # Kostenberechnung
        cost_per_image = 0.24  # $0.24 für 4K
        total_cost = len(images) * cost_per_image
        print(f"\n💰 Geschätzte Kosten: ${total_cost:.2f} ({len(images)} Bilder × ${cost_per_image})")

        # Generiere Bilder
        total = len(images)
        delay = self.config["generation"]["delay_between_requests"]
        successful = 0
        failed = 0

        for i, image_info in enumerate(images, 1):
            print(f"\n[{i}/{total}] {image_info['id']}")

            result = self.generate_image(image_info)

            if result["success"]:
                successful += 1
                self.progress["completed"].append(image_info["id"])

                # Konvertiere zu AVIF
                if "path" in result:
                    self.convert_to_avif(Path(result["path"]))

                # Regenerate bei schlechter Qualität
                if result.get("quality_score", 10) < self.config["generation"]["quality_threshold"]:
                    print(f"  ⚠️ Niedriger Score - markiert für Review")
            else:
                failed += 1
                self.progress["failed"].append({
                    "id": image_info["id"],
                    "error": result.get("error", "Unbekannt")
                })

            self._save_progress()

            # Rate Limit Pause
            if i < total:
                print(f"  ⏳ Warte {delay}s (Rate Limit)...")
                time.sleep(delay)

        # Zusammenfassung
        print("\n" + "="*60)
        print("ZUSAMMENFASSUNG")
        print("="*60)
        print(f"✓ Erfolgreich: {successful}")
        print(f"✗ Fehlgeschlagen: {failed}")
        print(f"💰 Tatsächliche Kosten: ~${successful * cost_per_image:.2f}")

        if self.progress["failed"]:
            print("\n❌ Fehlgeschlagene Bilder:")
            for f in self.progress["failed"][-10:]:
                print(f"  - {f['id']}: {f['error'][:50]}")


def main():
    parser = argparse.ArgumentParser(
        description="FIMI Bildgenerator - Nano Banana Pro (4K)"
    )
    parser.add_argument("--shotlist", "-s",
                        default="/Users/brandea/Desktop/FIMI-Bild-Shotlist",
                        help="Pfad zum Shotlist-Verzeichnis")
    parser.add_argument("--mode", "-m",
                        choices=["all", "test", "retry-failed"],
                        default="all",
                        help="Ausführungsmodus")
    parser.add_argument("--test-count", "-t",
                        type=int, default=5,
                        help="Anzahl Bilder im Testmodus")
    parser.add_argument("--no-resume",
                        action="store_true",
                        help="Ignoriere vorherigen Fortschritt")
    parser.add_argument("--dry-run",
                        action="store_true",
                        help="Zeige nur was gemacht würde")

    args = parser.parse_args()

    generator = FIMIImageGenerator()

    if args.dry_run:
        images = generator.parse_shotlist(args.shotlist)
        print("\n📋 DRY RUN - Folgende Bilder würden generiert:\n")

        # Gruppiere nach Kategorie
        by_category = {}
        for img in images:
            cat = img.get("category", "GENERAL")
            if cat not in by_category:
                by_category[cat] = []
            by_category[cat].append(img)

        for cat, imgs in sorted(by_category.items()):
            print(f"\n{cat} ({len(imgs)} Bilder):")
            for img in imgs[:3]:
                print(f"  • {img['id']}: {img['description'][:50]}...")
            if len(imgs) > 3:
                print(f"  ... und {len(imgs)-3} weitere")

        total = len(images)
        cost = total * 0.24
        print(f"\n{'='*60}")
        print(f"GESAMT: {total} Bilder")
        print(f"KOSTEN: ~${cost:.2f} (4K Auflösung)")
        print(f"ZEIT: ~{total * 30 / 60:.0f} Minuten")
        print(f"{'='*60}")
    else:
        generator.run(
            shotlist_dir=args.shotlist,
            mode=args.mode,
            test_count=args.test_count,
            resume=not args.no_resume
        )


if __name__ == "__main__":
    main()
