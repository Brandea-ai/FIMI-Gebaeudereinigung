#!/usr/bin/env python3
"""
FIMI Branchen-Bilder Generator
==============================
Generiert hochwertige Branchenbilder OHNE Personen und OHNE Logos.
Fokus auf authentische, vertrauenswürdige Szenen.

36 Bilder total: 12 Branchen × 3 Bilder pro Branche
"""

import os
import sys
import time
import argparse
from pathlib import Path
from datetime import datetime
from io import BytesIO

# Dependency Check
try:
    from google import genai
    from google.genai import types
    from PIL import Image
    import pillow_avif
except ImportError as e:
    print(f"\n❌ FEHLENDE DEPENDENCIES: {e}\n")
    sys.exit(1)

# Konfiguration
SCRIPT_DIR = Path(__file__).parent
PROJECT_ROOT = SCRIPT_DIR.parent
CREDENTIALS_PATH = SCRIPT_DIR / "credentials" / "fimi-bilder-credentials.json"
PUBLIC_DIR = PROJECT_ROOT / "public" / "images"
LOG_FILE = SCRIPT_DIR / "branchen_log.txt"

MODEL_NAME = "gemini-3-pro-image-preview"

# ============================================================================
# BRANCHEN DEFINITIONEN - 12 Branchen × 3 Bilder
# ============================================================================
BRANCHEN = {
    "buero-verwaltung": {
        "name": "Büro & Verwaltung",
        "bilder": [
            {
                "name": "hero",
                "prompt": "Hochmodernes deutsches Großraumbüro, lichtdurchflutet durch große Glasfronten. Ergonomische weiße Schreibtische mit Pflanzen, hell und aufgeräumt. Minimalistisches Design, Holzakzente, Glastrennwände. Morgenlicht fällt durch die Fenster. Premium Corporate Photography.",
                "alt": "Modernes Büro mit Glasfronten",
                "caption": "Saubere Arbeitsplätze für produktive Teams"
            },
            {
                "name": "gallery-1",
                "prompt": "Eleganter Konferenzraum in deutschem Bürogebäude. Langer weißer Konferenztisch, ergonomische Stühle, großer Flatscreen an der Wand. Glaswände, dezente Beleuchtung, sauberer Teppichboden. Aufgeräumt und repräsentativ.",
                "alt": "Konferenzraum",
                "caption": "Repräsentative Meetingräume"
            },
            {
                "name": "gallery-2",
                "prompt": "Moderne Büroküche/Sozialraum in deutschem Unternehmen. Hochwertige Einbauküche mit Edelstahlgeräten, saubere Arbeitsflächen, Kaffeemaschine. Heller, freundlicher Raum mit Sitzgelegenheiten. Absolut sauber und einladend.",
                "alt": "Büroküche",
                "caption": "Hygienische Sozialräume"
            }
        ]
    },
    "industrie-produktion": {
        "name": "Industrie & Produktion",
        "bilder": [
            {
                "name": "hero",
                "prompt": "Deutsche Industriehalle von innen, weite Perspektive. Moderne CNC-Maschinen, sauberer Betonboden mit Markierungen, hohe Decken mit Industriebeleuchtung. Aufgeräumt und organisiert. Metallverarbeitende Industrie, professionell.",
                "alt": "Moderne Produktionshalle",
                "caption": "Große Flächen, effizient gereinigt"
            },
            {
                "name": "gallery-1",
                "prompt": "Maschinenpark in deutscher Fertigungshalle. Mehrere moderne CNC-Fräsmaschinen oder Drehmaschinen, sauber und gepflegt. Industrieboden, gute Beleuchtung. Ordentlich, keine Verschmutzungen sichtbar.",
                "alt": "Maschinenpark",
                "caption": "Maschinenreinigung ohne Beschädigung"
            },
            {
                "name": "gallery-2",
                "prompt": "Automatisierte Fertigungslinie in deutscher Fabrik. Förderbänder, Roboterarme, moderne Produktionstechnik. Sauberer Boden, organisierte Arbeitsplätze. High-Tech Industrie, premium Qualität.",
                "alt": "Fertigungslinie",
                "caption": "Sauberkeit für reibungslose Produktion"
            }
        ]
    },
    "gesundheitswesen": {
        "name": "Gesundheitswesen",
        "bilder": [
            {
                "name": "hero",
                "prompt": "Empfangsbereich einer modernen deutschen Arztpraxis oder Klinik. Helle, freundliche Atmosphäre, weiße Wände, Holzakzente. Bequeme Wartesessel, Empfangstresen. Makellos sauber, einladend und professionell.",
                "alt": "Moderne Arztpraxis",
                "caption": "Hygiene auf höchstem Niveau"
            },
            {
                "name": "gallery-1",
                "prompt": "Behandlungsraum in deutscher Arztpraxis. Untersuchungsliege, medizinische Geräte, weiße Schränke. Absolut steril und sauber, helle Beleuchtung. Professionelle medizinische Umgebung.",
                "alt": "Behandlungsraum",
                "caption": "Sterile Behandlungsräume"
            },
            {
                "name": "gallery-2",
                "prompt": "Flur in deutschem Krankenhaus oder Klinik. Lange, helle Korridore, Handläufe an den Wänden, sauberer Linoleumboden. Moderne Beleuchtung, freundliche Atmosphäre. Blitzsauber und desinfiziert.",
                "alt": "Klinikflur",
                "caption": "Saubere Verkehrswege"
            }
        ]
    },
    "einzelhandel": {
        "name": "Einzelhandel",
        "bilder": [
            {
                "name": "hero",
                "prompt": "Modernes deutsches Einkaufszentrum/Shopping Mall von innen. Großzügige Halle, mehrere Etagen sichtbar, Glasgeländer, Rolltreppen. Hochwertiger Boden, moderne Beleuchtung. Premium Shopping-Atmosphäre, einladend.",
                "alt": "Modernes Einkaufszentrum",
                "caption": "Einladende Verkaufsflächen"
            },
            {
                "name": "gallery-1",
                "prompt": "Elegante Boutique oder Modegeschäft in Deutschland. Hochwertige Präsentation, stilvolle Regale und Kleiderständer. Holzboden oder edler Teppich, dezente Beleuchtung. Premium Retail-Umgebung.",
                "alt": "Boutique",
                "caption": "Repräsentative Ladengestaltung"
            },
            {
                "name": "gallery-2",
                "prompt": "Großes Schaufenster eines deutschen Einzelhandelsgeschäfts von außen. Saubere, blitzende Glasfläche, professionelle Warenpräsentation dahinter. Gepflegte Fassade, einladender Eingangsbereich.",
                "alt": "Schaufenster",
                "caption": "Blitzsaubere Schaufenster"
            }
        ]
    },
    "gastronomie-hotel": {
        "name": "Gastronomie & Hotel",
        "bilder": [
            {
                "name": "hero",
                "prompt": "Elegante Hotellobby eines deutschen 4-Sterne Hotels. Großzügiger Empfangsbereich, hohe Decken, stilvolle Möbel. Marmorboden oder hochwertiger Teppich, dezente Beleuchtung, Pflanzen. Luxuriös und einladend.",
                "alt": "Elegante Hotellobby",
                "caption": "Erster Eindruck zählt"
            },
            {
                "name": "gallery-1",
                "prompt": "Hochwertiges Hotelzimmer in deutschem Hotel. Großes Bett mit weißer Bettwäsche, moderne Einrichtung, sauberer Teppich. Fenster mit Aussicht, stilvolle Beleuchtung. Makellos sauber und einladend.",
                "alt": "Hotelzimmer",
                "caption": "Makellose Hotelzimmer"
            },
            {
                "name": "gallery-2",
                "prompt": "Professionelle Großküche eines deutschen Restaurants oder Hotels. Edelstahl-Arbeitsflächen, professionelle Küchengeräte, Dunstabzugshauben. Absolut sauber und hygienisch, glänzende Oberflächen.",
                "alt": "Profiküche",
                "caption": "Hygienische Gastro-Küchen"
            }
        ]
    },
    "bildung-schulen": {
        "name": "Bildung & Schulen",
        "bilder": [
            {
                "name": "hero",
                "prompt": "Modernes deutsches Klassenzimmer. Helle Räume, große Fenster, weiße Tafeln oder Smartboards. Ordentliche Schultische und Stühle, sauberer Boden. Einladende Lernumgebung, freundlich und hell.",
                "alt": "Modernes Klassenzimmer",
                "caption": "Saubere Lernumgebungen"
            },
            {
                "name": "gallery-1",
                "prompt": "Aula oder Mehrzweckhalle einer deutschen Schule. Große offene Fläche, Parkettboden oder Sportboden, Bühne im Hintergrund. Hohe Decken, gute Beleuchtung. Sauber und gepflegt.",
                "alt": "Schulaula",
                "caption": "Gepflegte Veranstaltungsräume"
            },
            {
                "name": "gallery-2",
                "prompt": "Schulflur in deutschem Schulgebäude. Lange Korridore mit Schließfächern, sauberer Linoleumboden, helle Wände. Gute Beleuchtung, Brandschutztüren. Ordentlich und einladend.",
                "alt": "Schulflur",
                "caption": "Saubere Verkehrswege"
            }
        ]
    },
    "fitness-sport": {
        "name": "Fitness & Sport",
        "bilder": [
            {
                "name": "hero",
                "prompt": "Modernes deutsches Fitnessstudio. Hochwertige Trainingsgeräte (Laufbänder, Kraftgeräte), Spiegelflächen, Gummiboden. Helle Beleuchtung, aufgeräumt und sauber. Premium Fitness-Atmosphäre.",
                "alt": "Modernes Fitnessstudio",
                "caption": "Hygienische Trainingsumgebung"
            },
            {
                "name": "gallery-1",
                "prompt": "Umkleideraum eines gehobenen deutschen Fitnessstudios oder Sportvereins. Moderne Schließfächer, Bänke, sauberer Fliesenboden. Helle Beleuchtung, frische Atmosphäre. Absolut hygienisch.",
                "alt": "Umkleideraum",
                "caption": "Saubere Umkleidebereiche"
            },
            {
                "name": "gallery-2",
                "prompt": "Indoor-Sporthalle in Deutschland. Großer Raum mit Sportboden (Parkett oder Kunststoff), Basketballkörbe, Linienmarkierungen. Hohe Decken, gute Beleuchtung. Gepflegt und sauber.",
                "alt": "Sporthalle",
                "caption": "Gepflegte Sportflächen"
            }
        ]
    },
    "logistik-lager": {
        "name": "Logistik & Lager",
        "bilder": [
            {
                "name": "hero",
                "prompt": "Modernes deutsches Hochregallager. Hohe Regale mit Paletten, sauberer Betonboden mit Fahrspurmarkierungen, industrielle LED-Beleuchtung. Organisiert und aufgeräumt, professionelle Logistik.",
                "alt": "Modernes Hochregallager",
                "caption": "Saubere Lagerflächen"
            },
            {
                "name": "gallery-1",
                "prompt": "Versandbereich eines deutschen Logistikzentrums. Förderbänder, Verpackungsstationen, Paketrollenregale. Sauberer Boden, gute Beleuchtung. Effizient und organisiert.",
                "alt": "Versandbereich",
                "caption": "Effiziente Arbeitsbereiche"
            },
            {
                "name": "gallery-2",
                "prompt": "Laderampen eines deutschen Logistikzentrums von innen. Mehrere Tore, sauberer Betonboden, Industriebeleuchtung. Leere Rampen, aufgeräumt und sauber. Professionelle Logistik-Infrastruktur.",
                "alt": "Laderampen",
                "caption": "Saubere Laderampen"
            }
        ]
    },
    "wohnungswirtschaft": {
        "name": "Wohnungswirtschaft",
        "bilder": [
            {
                "name": "hero",
                "prompt": "Gepflegtes deutsches Mehrfamilienhaus von außen, tagsüber. Moderne Fassade, saubere Fenster, gepflegter Eingangsbereich mit Vordach. Grünflächen, ordentliche Mülltonnenstellplätze. Einladend und gepflegt.",
                "alt": "Gepflegtes Mehrfamilienhaus",
                "caption": "Gepflegte Wohnanlagen"
            },
            {
                "name": "gallery-1",
                "prompt": "Sauberes Treppenhaus eines deutschen Mehrfamilienhauses. Helle Wände, saubere Stufen, Handlauf, Geländer. Briefkästen an der Wand, gute Beleuchtung. Ordentlich und einladend.",
                "alt": "Treppenhaus",
                "caption": "Saubere Treppenhäuser"
            },
            {
                "name": "gallery-2",
                "prompt": "Moderne Tiefgarage eines deutschen Wohnkomplexes. Sauberer Betonboden, weiße Wände, gute LED-Beleuchtung. Parkplatzmarkierungen, Säulen. Aufgeräumt und sicher wirkend.",
                "alt": "Tiefgarage",
                "caption": "Gepflegte Tiefgaragen"
            }
        ]
    },
    "oeffentliche-einrichtungen": {
        "name": "Öffentliche Einrichtungen",
        "bilder": [
            {
                "name": "hero",
                "prompt": "Foyer eines deutschen Rathauses oder öffentlichen Verwaltungsgebäudes. Großzügiger Empfangsbereich, Informationsschalter, hohe Decken. Marmor- oder Steinboden, sauber und repräsentativ. Würdevoll und einladend.",
                "alt": "Rathaus Foyer",
                "caption": "Repräsentative Eingangsbereiche"
            },
            {
                "name": "gallery-1",
                "prompt": "Lesesaal einer deutschen öffentlichen Bibliothek. Lange Tischreihen, Bücherregale im Hintergrund, große Fenster. Ruhige, konzentrierte Atmosphäre, saubere Oberflächen, gute Beleuchtung.",
                "alt": "Bibliothek Lesesaal",
                "caption": "Saubere Lernumgebungen"
            },
            {
                "name": "gallery-2",
                "prompt": "Inneres eines modernen deutschen Schwimmbades/Hallenbades. Saubere Wasserfläche, Fliesenboden um das Becken, Startblöcke. Hohe Glasfronten, natürliches Licht. Hygienisch und einladend.",
                "alt": "Hallenbad",
                "caption": "Hygienische Bäder"
            }
        ]
    },
    "banken-versicherungen": {
        "name": "Banken & Versicherungen",
        "bilder": [
            {
                "name": "hero",
                "prompt": "Elegante Schalterhalle einer deutschen Bank. Hohe Decken, Marmorboden, moderne Schalter. Premium Atmosphäre, dezente Beleuchtung, Pflanzen als Dekoration. Vertrauenswürdig und seriös.",
                "alt": "Bankschalterhalle",
                "caption": "Vertrauenswürdige Atmosphäre"
            },
            {
                "name": "gallery-1",
                "prompt": "Beratungszimmer einer deutschen Bank oder Versicherung. Hochwertiger Schreibtisch, bequeme Stühle, diskrete Atmosphäre. Holzvertäfelung oder moderne Einrichtung, sauber und professionell.",
                "alt": "Beratungszimmer",
                "caption": "Diskrete Beratungsräume"
            },
            {
                "name": "gallery-2",
                "prompt": "Empfangsbereich einer deutschen Versicherungsgesellschaft. Modernes Design, Empfangstresen, Wartesessel. Sauberer Boden, professionelle Beleuchtung, dezente Kunst an Wänden.",
                "alt": "Versicherung Empfang",
                "caption": "Professioneller Empfang"
            }
        ]
    },
    "automotive": {
        "name": "Automotive",
        "bilder": [
            {
                "name": "hero",
                "prompt": "Showroom eines deutschen Premium-Autohauses. Mehrere hochwertige Fahrzeuge (BMW, Mercedes, Audi Style) auf poliertem Boden präsentiert. Große Glasfronten, moderne Beleuchtung. Exklusiv und einladend.",
                "alt": "Autohaus Showroom",
                "caption": "Makellose Präsentation"
            },
            {
                "name": "gallery-1",
                "prompt": "Moderne KFZ-Werkstatt in Deutschland. Hebebühnen, professionelle Werkzeugwände, sauberer Boden mit Epoxidbeschichtung. Gute Beleuchtung, organisiert und aufgeräumt.",
                "alt": "KFZ-Werkstatt",
                "caption": "Saubere Werkstätten"
            },
            {
                "name": "gallery-2",
                "prompt": "Professionelle Autowaschanlage von innen. Moderne Waschtechnik, Bürsten und Düsen, beleuchteter Tunnel. Saubere Anlage, professionelle Ausstattung.",
                "alt": "Waschanlage",
                "caption": "Gepflegte Waschanlagen"
            }
        ]
    }
}


def init_client():
    """Initialisiert den Google GenAI Client."""
    if not CREDENTIALS_PATH.exists():
        print(f"\n❌ CREDENTIALS FEHLEN: {CREDENTIALS_PATH}\n")
        sys.exit(1)

    os.environ["GOOGLE_APPLICATION_CREDENTIALS"] = str(CREDENTIALS_PATH)

    try:
        client = genai.Client(
            vertexai=True,
            project="fimi-bilder",
            location="global"
        )
        print("✓ Client initialisiert (Gemini 3 Pro Image)")
        return client
    except Exception as e:
        print(f"\n❌ CLIENT-FEHLER: {e}\n")
        sys.exit(1)


def generate_image(client, prompt: str, aspect_ratio: str = "16:9", retries: int = 3) -> Image:
    """
    Generiert ein Branchenbild OHNE Personen und OHNE Logos.
    """

    # Prompt mit klaren Anweisungen für hohe Qualität
    full_prompt = f"""Generiere ein HOCHWERTIGES, AUTHENTISCHES Foto für eine deutsche Gebäudereinigungsfirma.

HAUPTANFORDERUNG:
{prompt}

ABSOLUT VERBOTEN - DIESE ELEMENTE DÜRFEN NICHT IM BILD SEIN:
- KEINE MENSCHEN, KEINE PERSONEN, KEINE MITARBEITER, KEINE KUNDEN
- KEINE LOGOS, KEINE FIRMENNAMEN, KEINE SCHRIFTZÜGE
- KEINE REINIGUNGSGERÄTE, KEINE PUTZMITTEL, KEINE EIMER, KEINE WAGEN
- KEINE ARBEITSKLEIDUNG, KEINE UNIFORMEN
- KEINE AI-ARTEFAKTE, KEINE VERZERRTEN TEXTE

QUALITÄTSANFORDERUNGEN:
- Fotorealistisch, High-End Architektur-/Interior-Fotografie
- Natürliches Licht, professionelle Schatten
- Deutsches Umfeld, authentisch (kein generischer Stock-Photo-Look)
- Saubere, gepflegte Räumlichkeiten als Resultat professioneller Reinigung
- Vertrauenswürdig, hochwertig, einladend

TECHNISCH:
- Seitenverhältnis: {aspect_ratio}
- Auflösung: So hoch wie möglich
- Keine künstlichen Filter oder übertriebene Sättigung
"""

    print(f"\n📸 Generiere Bild...")
    print(f"   Aspect Ratio: {aspect_ratio}")
    print(f"   Prompt: {prompt[:60]}...")

    last_error = None

    for attempt in range(1, retries + 1):
        try:
            response = client.models.generate_content(
                model=MODEL_NAME,
                contents=[full_prompt],
                config=types.GenerateContentConfig(
                    response_modalities=["IMAGE", "TEXT"],
                )
            )

            # Bild extrahieren
            if response.candidates:
                for part in response.candidates[0].content.parts:
                    if hasattr(part, 'inline_data') and part.inline_data:
                        image_data = part.inline_data.data
                        img = Image.open(BytesIO(image_data))
                        print(f"   ✓ Bild generiert (Versuch {attempt}/{retries})")
                        return img

            print(f"   ⚠️ Keine Bilddaten (Versuch {attempt}/{retries})")
            time.sleep(10)

        except Exception as e:
            last_error = e
            error_str = str(e)

            if "RESOURCE_EXHAUSTED" in error_str:
                wait_time = 30 * attempt
                print(f"   ⏳ Rate Limit - warte {wait_time}s (Versuch {attempt}/{retries})")
                time.sleep(wait_time)
            else:
                print(f"   ⚠️ Fehler: {error_str[:80]}... (Versuch {attempt}/{retries})")
                time.sleep(10)

    raise Exception(f"Bildgenerierung fehlgeschlagen: {last_error}")


def save_image(img: Image, name: str, target_dir: Path) -> Path:
    """Speichert Bild als AVIF + WebP in responsiven Größen."""
    target_dir.mkdir(parents=True, exist_ok=True)

    if img.mode == 'RGBA':
        img = img.convert('RGB')

    print(f"\n💾 Speichere: {img.size[0]}x{img.size[1]}")

    sizes = [1920, 1440, 1024, 768, 384]
    saved_sizes = []

    for size in sizes:
        if img.width >= size:
            ratio = size / img.width
            new_height = int(img.height * ratio)
            resized = img.resize((size, new_height), Image.Resampling.LANCZOS)
            actual_size = size
        else:
            resized = img
            actual_size = img.width

        if actual_size in saved_sizes:
            continue
        saved_sizes.append(actual_size)

        resized.save(target_dir / f"{name}-{actual_size}w.avif", 'AVIF', quality=85)
        resized.save(target_dir / f"{name}-{actual_size}w.webp", 'WEBP', quality=85)
        print(f"   ✓ {actual_size}w: AVIF + WebP")

    main_avif = target_dir / f"{name}.avif"
    img.save(main_avif, 'AVIF', quality=90)
    print(f"   ✓ {name}.avif (Hauptdatei)")

    with open(LOG_FILE, 'a') as f:
        f.write(f"{datetime.now().isoformat()} | {name} | {img.size[0]}x{img.size[1]}\n")

    return main_avif


def generate_branche(client, branche_slug: str):
    """Generiert alle 3 Bilder für eine Branche."""

    if branche_slug not in BRANCHEN:
        print(f"\n❌ Unbekannte Branche: {branche_slug}")
        print(f"   Verfügbar: {', '.join(BRANCHEN.keys())}")
        return False

    branche = BRANCHEN[branche_slug]
    target_dir = PUBLIC_DIR / "branchen" / branche_slug

    print(f"\n{'='*60}")
    print(f"BRANCHE: {branche['name']}")
    print(f"ORDNER: {target_dir}")
    print(f"{'='*60}")

    for i, bild in enumerate(branche['bilder'], 1):
        print(f"\n[{i}/3] {bild['name']}: {bild['alt']}")

        try:
            # Hero = 16:9, Gallery = 4:3
            ratio = "16:9" if bild['name'] == 'hero' else "4:3"

            img = generate_image(client, bild['prompt'], ratio)
            save_image(img, bild['name'], target_dir)

            # Pause zwischen Generierungen um Rate Limits zu vermeiden
            if i < len(branche['bilder']):
                print("   ⏳ Kurze Pause (15s)...")
                time.sleep(15)

        except Exception as e:
            print(f"\n❌ FEHLER bei {bild['name']}: {e}")
            continue

    return True


def generate_all(client):
    """Generiert alle 36 Bilder für alle 12 Branchen."""

    total = len(BRANCHEN) * 3
    done = 0

    print(f"\n{'#'*60}")
    print(f"GENERIERE ALLE {total} BRANCHENBILDER")
    print(f"{'#'*60}")

    for branche_slug in BRANCHEN:
        generate_branche(client, branche_slug)
        done += 3
        print(f"\n✅ {done}/{total} Bilder fertig")

        # Längere Pause zwischen Branchen
        if done < total:
            print("⏳ Pause zwischen Branchen (30s)...")
            time.sleep(30)

    print(f"\n{'#'*60}")
    print(f"ALLE {total} BILDER ERFOLGREICH GENERIERT!")
    print(f"{'#'*60}")


def main():
    parser = argparse.ArgumentParser(description="FIMI Branchen-Bilder Generator")
    parser.add_argument("--branche", type=str, help="Einzelne Branche generieren (z.B. buero-verwaltung)")
    parser.add_argument("--all", action="store_true", help="Alle 12 Branchen generieren")
    parser.add_argument("--list", action="store_true", help="Verfügbare Branchen auflisten")

    args = parser.parse_args()

    if args.list:
        print("\nVerfügbare Branchen:")
        for slug, data in BRANCHEN.items():
            print(f"  - {slug}: {data['name']}")
        return 0

    client = init_client()

    if args.all:
        generate_all(client)
    elif args.branche:
        generate_branche(client, args.branche)
    else:
        print("\n⚠️ Bitte --branche oder --all angeben")
        print("   Beispiel: python3 generate_branchen.py --branche buero-verwaltung")
        print("   Beispiel: python3 generate_branchen.py --all")
        print("   Hilfe: python3 generate_branchen.py --list")
        return 1

    return 0


if __name__ == "__main__":
    sys.exit(main())
