#!/usr/bin/env python3
"""
FIMI Referenzen Bildgenerator
=============================
Generiert 3 Bilder pro Referenz (150 Bilder insgesamt).
Bild 1 wird als Hauptbild/Thumbnail verwendet.

Usage:
    python3 generate_referenzen.py --ref ref-001
    python3 generate_referenzen.py --branche buero-verwaltung
    python3 generate_referenzen.py --all
    python3 generate_referenzen.py --list
"""

import os
import sys
import time
import argparse
from pathlib import Path
from datetime import datetime
from io import BytesIO

# ============================================================================
# DEPENDENCY CHECK
# ============================================================================

def check_dependencies():
    """Prüft ob alle Dependencies installiert sind."""
    missing = []
    try:
        from google import genai
        from google.genai import types
    except ImportError:
        missing.append("google-genai")
    try:
        from PIL import Image
    except ImportError:
        missing.append("Pillow")
    try:
        import pillow_avif
    except ImportError:
        missing.append("pillow-avif-plugin")
    if missing:
        print(f"\n❌ FEHLENDE DEPENDENCIES: pip install {' '.join(missing)}\n")
        sys.exit(1)

check_dependencies()

from google import genai
from google.genai import types
from PIL import Image
import pillow_avif

# ============================================================================
# KONFIGURATION
# ============================================================================

SCRIPT_DIR = Path(__file__).parent
PROJECT_ROOT = SCRIPT_DIR.parent
CREDENTIALS_PATH = SCRIPT_DIR / "credentials" / "fimi-bilder-credentials.json"
PUBLIC_DIR = PROJECT_ROOT / "public" / "images" / "referenzen"
LOG_FILE = SCRIPT_DIR / "generation_log.txt"
LOGO_PATH = PROJECT_ROOT / "public" / "FIMI-LOGO" / "FIMI-Logo.png"

MODEL_NAME = "gemini-3-pro-image-preview"

# ============================================================================
# ALLE 50 REFERENZEN MIT PROMPTS
# ============================================================================

REFERENZEN = {
    # ==================== BÜRO & VERWALTUNG ====================
    "ref-001": {
        "name": "Verwaltungsgebäude 5 Etagen",
        "branche": "buero-verwaltung",
        "beschreibung": "Kommunaler Versorger, 4.500 m², Landshut",
        "bilder": [
            {
                "name": "ref-001-1",
                "prompt": """Hauptbild: Modernes 5-stöckiges deutsches Verwaltungsgebäude von außen.
FIMI Reinigungsteam (2 Personen) betritt das Gebäude mit VERMOP Reinigungswagen (grau/silber, blaue Eimer).
Marineblaue Poloshirts mit FIMI Logo auf linker Brust.
Glasfassade, professionelles Erscheinungsbild, deutsche Architektur.
Morgenlicht, Business-Atmosphäre."""
            },
            {
                "name": "ref-001-2",
                "prompt": """Innenaufnahme: Großraumbüro im Verwaltungsgebäude.
FIMI Mitarbeiterin reinigt Schreibtische mit BLAUEM Mikrofasertuch (4-Farben-Prinzip!).
VERMOP Reinigungswagen im Hintergrund (grau/silber Gestell, blaue Kunststoffteile).
Moderne Büromöbel, große Fenster, natürliches Tageslicht.
Marineblaues Poloshirt mit FIMI Logo."""
            },
            {
                "name": "ref-001-3",
                "prompt": """Fensterreinigung im Verwaltungsgebäude.
FIMI Mitarbeiter mit UNGER Fensterabzieher (GRÜNER Griff!) reinigt große Glasflächen.
Silberne UNGER Teleskopstange, professionelle Technik.
Marineblaue Arbeitskleidung mit FIMI Logo.
Heller Flur, moderne deutsche Büroarchitektur."""
            }
        ]
    },
    "ref-002": {
        "name": "IT-Campus Open Space",
        "branche": "buero-verwaltung",
        "beschreibung": "Technologieunternehmen, 3.200 m², München",
        "bilder": [
            {
                "name": "ref-002-1",
                "prompt": """Hauptbild: Modernes Open-Space Büro eines Tech-Unternehmens in München.
FIMI Mitarbeiterin reinigt zwischen Schreibtisch-Inseln.
Hippes Startup-Ambiente: Sitzsäcke, Pflanzen, moderne Möbel.
VERMOP Reinigungswagen (grau/silber), BLAUE Mops.
Marineblaues Poloshirt mit FIMI Logo, abendliche Reinigung."""
            },
            {
                "name": "ref-002-2",
                "prompt": """Tech-Büro Küche/Lounge-Bereich.
FIMI Mitarbeiter reinigt die offene Küche mit professionellem Equipment.
Kaffeemaschine, moderner Kühlschrank, Snack-Bar.
GELBE Reinigungstücher für Küchenbereich (4-Farben-Prinzip!).
Marineblaue Arbeitskleidung mit FIMI Logo."""
            },
            {
                "name": "ref-002-3",
                "prompt": """Meeting-Raum im IT-Campus.
FIMI Mitarbeiterin wischt großen Konferenztisch.
Moderne Technik: Bildschirme, Videokonferenz-Setup.
BLAUES Mikrofasertuch, VERMOP Wagen sichtbar.
Marineblaues Poloshirt mit FIMI Logo, professionelle Atmosphäre."""
            }
        ]
    },
    "ref-003": {
        "name": "Anwaltskanzlei Premium",
        "branche": "buero-verwaltung",
        "beschreibung": "Rechtsanwaltskanzlei, 850 m², Regensburg",
        "bilder": [
            {
                "name": "ref-003-1",
                "prompt": """Hauptbild: Elegante Anwaltskanzlei mit hochwertiger Einrichtung.
FIMI Mitarbeiterin reinigt diskret den Empfangsbereich.
Edle Holzmöbel, Ledersessel, gedämpftes Licht.
VERMOP Wagen dezent im Hintergrund, BLAUE Tücher.
Marineblaues Poloshirt mit FIMI Logo, professionelle Diskretion."""
            },
            {
                "name": "ref-003-2",
                "prompt": """Anwaltsbüro mit Bücherregalen und Akten.
FIMI Mitarbeiter staubsaugt mit NUMATIC HENRY (ROTER Staubsauger mit Smiley!).
Hochwertige Schreibtische, Aktenordner, juristische Bücher.
Marineblaue Arbeitskleidung mit FIMI Logo.
Respektvoller Umgang mit vertraulichen Dokumenten."""
            },
            {
                "name": "ref-003-3",
                "prompt": """Konferenzraum der Anwaltskanzlei.
FIMI Mitarbeiterin poliert großen Besprechungstisch.
Elegante Stühle, Kunstwerke an Wänden.
BLAUES Mikrofasertuch, professionelle Reinigung.
Marineblaues Poloshirt mit FIMI Logo."""
            }
        ]
    },
    "ref-004": {
        "name": "Bürokomplex Mehrmandant",
        "branche": "buero-verwaltung",
        "beschreibung": "Steuerberatungsgesellschaft, 2.100 m², Ingolstadt",
        "bilder": [
            {
                "name": "ref-004-1",
                "prompt": """Hauptbild: Modernes Bürogebäude mit mehreren Mietern.
FIMI Team (2 Personen) im Eingangsbereich mit Reinigungsequipment.
VERMOP Reinigungswagen (grau/silber), professionelles Erscheinungsbild.
Marineblaue Poloshirts mit FIMI Logo.
Glasfront, modernes deutsches Bürogebäude."""
            },
            {
                "name": "ref-004-2",
                "prompt": """Treppenhaus im Bürokomplex.
FIMI Mitarbeiter reinigt Treppengeländer und Stufen.
Modernes Treppenhaus mit Glaswänden.
VERMOP Equipment, BLAUE Mops für allgemeine Flächen.
Marineblaue Arbeitskleidung mit FIMI Logo."""
            },
            {
                "name": "ref-004-3",
                "prompt": """Gemeinschafts-Sanitärbereich im Bürokomplex.
FIMI Mitarbeiterin reinigt Waschbecken und Spiegel.
ROTE Reinigungstücher für Sanitärbereich (4-Farben-Prinzip!).
Moderne Sanitärausstattung, sauber und hygienisch.
Marineblaues Poloshirt mit FIMI Logo."""
            }
        ]
    },

    # ==================== INDUSTRIE & PRODUKTION ====================
    "ref-005": {
        "name": "Produktionshallen Automotive",
        "branche": "industrie-produktion",
        "beschreibung": "Automobilzulieferer, 25.000 m², Niederbayern",
        "bilder": [
            {
                "name": "ref-005-1",
                "prompt": """Hauptbild: Große Produktionshalle eines Automobilzulieferers.
FIMI Mitarbeiter bedient KÄRCHER Scheuersaugmaschine (GELB mit schwarzen Details!).
Industrielle Fertigungslinien, hohe Decken, Stahlkonstruktion.
Marineblaue Arbeitsjacke mit FIMI Logo, Sicherheitsschuhe.
Professionelle Industriereinigung."""
            },
            {
                "name": "ref-005-2",
                "prompt": """Maschinenreinigung in Produktionshalle.
FIMI Mitarbeiter reinigt CNC-Maschine nach Produktionsschluss.
Industriesauger, Reinigungsmittel, Schutzausrüstung.
Marineblaue Arbeitskleidung mit FIMI Logo.
Automotive-Umfeld, Präzisionsfertigung."""
            },
            {
                "name": "ref-005-3",
                "prompt": """FIMI Team bei Hallenreinigung in Autofabrik.
Zwei Mitarbeiter koordinieren die maschinelle Bodenreinigung.
KÄRCHER Scheuersaugmaschine (GELB!), industrielles Umfeld.
Marineblaue Arbeitsjacken mit FIMI Logo, Sicherheitsausrüstung.
Große Industriehalle, deutsche Automobilindustrie."""
            }
        ]
    },
    "ref-006": {
        "name": "CNC-Fertigung Metallbau",
        "branche": "industrie-produktion",
        "beschreibung": "Präzisionstechnik-Betrieb, 3.500 m², München",
        "bilder": [
            {
                "name": "ref-006-1",
                "prompt": """Hauptbild: CNC-Fertigung mit Fräsmaschinen.
FIMI Mitarbeiter reinigt CNC-Maschine, entfernt Metallspäne.
Präzisionsmaschinen, Kühlmittel, industrielles Umfeld.
Marineblaue Arbeitskleidung mit FIMI Logo, Schutzbrille.
Metallverarbeitender Betrieb."""
            },
            {
                "name": "ref-006-2",
                "prompt": """Hallenboden in Metallbau-Werkstatt.
FIMI Mitarbeiter mit KÄRCHER Industriesauger (GELB/schwarz!).
Metallspäne, Öl-Emulsion, industrieller Schmutz.
Marineblaue Arbeitsjacke mit FIMI Logo.
Professionelle Industriereinigung."""
            },
            {
                "name": "ref-006-3",
                "prompt": """Reinigung von Drehmaschinen.
FIMI Mitarbeiter bei der Maschinenreinigung.
Präzisionswerkzeuge, Kühlmittelreste werden entfernt.
Marineblaue Arbeitskleidung mit FIMI Logo.
Saubere, gepflegte Produktionsumgebung."""
            }
        ]
    },
    "ref-007": {
        "name": "Lebensmittelproduktion HACCP",
        "branche": "industrie-produktion",
        "beschreibung": "Lebensmittelhersteller, 1.800 m², Niederbayern",
        "bilder": [
            {
                "name": "ref-007-1",
                "prompt": """Hauptbild: Lebensmittelproduktion mit HACCP-Standards.
FIMI Mitarbeiter in hygienischer Schutzkleidung bei Reinigung.
Edelstahl-Oberflächen, Produktionsanlagen, sterile Umgebung.
GELBE Reinigungstücher für Lebensmittelbereich (4-Farben-Prinzip!).
Haarnetz, Handschuhe, marineblaue Kleidung mit FIMI Logo."""
            },
            {
                "name": "ref-007-2",
                "prompt": """Desinfektion von Produktionsanlagen.
FIMI Mitarbeiterin desinfiziert Edelstahl-Arbeitsflächen.
Sprühdesinfektion, hygienische Reinigung.
Lebensmittelsichere Reinigungsmittel.
Marineblaue Arbeitskleidung mit FIMI Logo, Hygieneausrüstung."""
            },
            {
                "name": "ref-007-3",
                "prompt": """Bodenreinigung in Lebensmittelbetrieb.
FIMI Mitarbeiter mit Hochdruck-Reinigungsgerät.
Geflieste Böden, Abflüsse, hygienische Standards.
Marineblaue Arbeitskleidung mit FIMI Logo.
HACCP-konforme Reinigung."""
            }
        ]
    },
    "ref-008": {
        "name": "Elektronikfertigung Reinraum",
        "branche": "industrie-produktion",
        "beschreibung": "Elektronikhersteller, 2.200 m², Ostbayern",
        "bilder": [
            {
                "name": "ref-008-1",
                "prompt": """Hauptbild: Reinraum-Umgebung in Elektronikfertigung.
FIMI Mitarbeiter in Reinraum-Schutzkleidung.
Antistatische Reinigung, ESD-Schutz, sterile Umgebung.
Spezielle Reinigungstücher, keine Partikel.
Marineblaue Kleidung unter Schutzanzug mit FIMI Logo."""
            },
            {
                "name": "ref-008-2",
                "prompt": """ESD-konforme Reinigung von Arbeitsplätzen.
FIMI Mitarbeiterin reinigt Elektronik-Arbeitsplatz.
Antistatische Matte, Lötstation, Mikroskope.
Spezielle ESD-sichere Reinigungsmittel.
Marineblaue Arbeitskleidung mit FIMI Logo."""
            },
            {
                "name": "ref-008-3",
                "prompt": """Reinigung von Reinraum-Schleusen.
FIMI Mitarbeiter desinfiziert Eingangsbereich zum Reinraum.
Schleusensystem, Partikelkontrolle.
Spezialreinigung für sensible Bereiche.
Marineblaue Arbeitskleidung mit FIMI Logo."""
            }
        ]
    },

    # ==================== GESUNDHEITSWESEN ====================
    "ref-009": {
        "name": "Medizinisches Versorgungszentrum",
        "branche": "gesundheitswesen",
        "beschreibung": "MVZ mit mehreren Fachrichtungen, 1.200 m², Niederbayern",
        "bilder": [
            {
                "name": "ref-009-1",
                "prompt": """Hauptbild: Empfangsbereich eines Medizinischen Versorgungszentrums.
FIMI Mitarbeiterin reinigt den Empfangstresen.
Modernes MVZ, Wartestühle, medizinisches Ambiente.
VERMOP Wagen, professionelle Hygienereinigung.
Marineblaues Poloshirt mit FIMI Logo."""
            },
            {
                "name": "ref-009-2",
                "prompt": """Behandlungsraum in Arztpraxis.
FIMI Mitarbeiter desinfiziert Untersuchungsliege.
Medizinische Geräte, sterile Umgebung.
RKI-konforme Reinigung, Desinfektionsmittel.
Marineblaue Arbeitskleidung mit FIMI Logo, Handschuhe."""
            },
            {
                "name": "ref-009-3",
                "prompt": """Wartezimmer im MVZ.
FIMI Mitarbeiterin wischt Stühle und Tische ab.
Zeitschriften, Pflanzen, freundliche Atmosphäre.
BLAUE Reinigungstücher, hygienische Reinigung.
Marineblaues Poloshirt mit FIMI Logo."""
            }
        ]
    },
    "ref-010": {
        "name": "Zahnarztpraxis Premium",
        "branche": "gesundheitswesen",
        "beschreibung": "Zahnmedizinische Praxis, 450 m², Oberbayern",
        "bilder": [
            {
                "name": "ref-010-1",
                "prompt": """Hauptbild: Moderne Zahnarztpraxis mit hochwertiger Ausstattung.
FIMI Mitarbeiterin reinigt Behandlungsstuhl.
Dental-Equipment, Röntgengerät, moderne Praxis.
Desinfektion aller Oberflächen, hygienische Standards.
Marineblaues Poloshirt mit FIMI Logo, Handschuhe."""
            },
            {
                "name": "ref-010-2",
                "prompt": """Sterilisationsraum der Zahnarztpraxis.
FIMI Mitarbeiter reinigt Edelstahl-Arbeitsflächen.
Autoklav, Sterilisationsgeräte, medizinische Hygiene.
Spezielle Desinfektionsmittel für medizinischen Bereich.
Marineblaue Arbeitskleidung mit FIMI Logo."""
            },
            {
                "name": "ref-010-3",
                "prompt": """Empfangsbereich der Zahnarztpraxis.
FIMI Mitarbeiterin reinigt Glastresen und Wartebereich.
Moderne Einrichtung, freundliche Atmosphäre.
BLAUE Mikrofasertücher, gründliche Reinigung.
Marineblaues Poloshirt mit FIMI Logo."""
            }
        ]
    },
    "ref-011": {
        "name": "Physiotherapie-Zentrum",
        "branche": "gesundheitswesen",
        "beschreibung": "Physiotherapie-Praxis, 680 m², Oberpfalz",
        "bilder": [
            {
                "name": "ref-011-1",
                "prompt": """Hauptbild: Physiotherapie-Praxis mit Behandlungsliegen.
FIMI Mitarbeiterin desinfiziert Therapieliege.
Trainingsgeräte, Sprossenwand, heller Raum.
Desinfektion nach jedem Patienten, Hygiene.
Marineblaues Poloshirt mit FIMI Logo."""
            },
            {
                "name": "ref-011-2",
                "prompt": """Trainingsraum in Physiotherapie.
FIMI Mitarbeiter reinigt Trainingsgeräte.
Hanteln, Bälle, Therapiematten.
Desinfektion aller Kontaktflächen.
Marineblaue Arbeitskleidung mit FIMI Logo."""
            },
            {
                "name": "ref-011-3",
                "prompt": """Fensterreinigung in Physiotherapie-Zentrum.
FIMI Mitarbeiter mit UNGER Fensterabzieher (GRÜNER Griff!).
Große Fenster, viel Tageslicht.
Professionelle Glasreinigung.
Marineblaue Arbeitskleidung mit FIMI Logo."""
            }
        ]
    },
    "ref-012": {
        "name": "Seniorenpflegeheim",
        "branche": "gesundheitswesen",
        "beschreibung": "Pflegeeinrichtung, 3.800 m², Oberbayern",
        "bilder": [
            {
                "name": "ref-012-1",
                "prompt": """Hauptbild: Gemeinschaftsraum in Seniorenpflegeheim.
FIMI Mitarbeiterin reinigt freundlich lächelnd.
Gemütliche Einrichtung, Sofas, Fernseher.
VERMOP Wagen, rücksichtsvolle Reinigung.
Marineblaues Poloshirt mit FIMI Logo."""
            },
            {
                "name": "ref-012-2",
                "prompt": """Bewohnerzimmer im Pflegeheim.
FIMI Mitarbeiter reinigt Zimmer mit Respekt.
Bett, Nachttisch, persönliche Gegenstände.
Sorgfältige, leise Reinigung.
Marineblaue Arbeitskleidung mit FIMI Logo."""
            },
            {
                "name": "ref-012-3",
                "prompt": """Flur im Seniorenpflegeheim.
FIMI Mitarbeiterin mit VERMOP Reinigungswagen (grau/silber).
Handläufe, Türgriffe, barrierefreier Flur.
GRÜNE Mops für Pflegebereich (4-Farben-Prinzip!).
Marineblaues Poloshirt mit FIMI Logo."""
            }
        ]
    },

    # ==================== EINZELHANDEL ====================
    "ref-013": {
        "name": "Einkaufszentrum Vollreinigung",
        "branche": "einzelhandel",
        "beschreibung": "Einkaufszentrum, 12.000 m², Oberbayern",
        "bilder": [
            {
                "name": "ref-013-1",
                "prompt": """Hauptbild: Einkaufszentrum Mall-Bereich.
FIMI Team reinigt vor Ladenöffnung.
Shops, Rolltreppen, großzügiger Bereich.
KÄRCHER Scheuersaugmaschine (GELB!), großflächige Reinigung.
Marineblaue Poloshirts mit FIMI Logo."""
            },
            {
                "name": "ref-013-2",
                "prompt": """Rolltreppe im Einkaufszentrum.
FIMI Mitarbeiter reinigt Rolltreppenstufen.
Spezialreinigung für Rolltreppen.
Professionelles Equipment.
Marineblaue Arbeitskleidung mit FIMI Logo."""
            },
            {
                "name": "ref-013-3",
                "prompt": """Eingangsbereich des Einkaufszentrums.
FIMI Mitarbeiterin reinigt Glasfassade.
UNGER Fensterabzieher (GRÜNER Griff!).
Große Glastüren, Schaufenster.
Marineblaues Poloshirt mit FIMI Logo."""
            }
        ]
    },
    "ref-014": {
        "name": "Möbelhaus Großfläche",
        "branche": "einzelhandel",
        "beschreibung": "Einrichtungshaus, 8.500 m², Oberbayern",
        "bilder": [
            {
                "name": "ref-014-1",
                "prompt": """Hauptbild: Möbelhaus-Ausstellungsfläche.
FIMI Mitarbeiter reinigt zwischen hochwertigen Möbeln.
Sofas, Tische, Schränke in Ausstellung.
Vorsichtige Reinigung um Ausstellungsstücke.
Marineblaue Arbeitskleidung mit FIMI Logo."""
            },
            {
                "name": "ref-014-2",
                "prompt": """Nächtliche Bodenreinigung im Möbelhaus.
FIMI Team mit KÄRCHER Scheuersaugmaschine (GELB!).
Große Ausstellungsfläche, Möbelreihen.
Effiziente maschinelle Reinigung.
Marineblaue Arbeitskleidung mit FIMI Logo."""
            },
            {
                "name": "ref-014-3",
                "prompt": """Kassenbereich im Möbelhaus.
FIMI Mitarbeiterin reinigt Kassentresen.
Self-Checkout, Kundenbereich.
BLAUE Mikrofasertücher, gründliche Reinigung.
Marineblaues Poloshirt mit FIMI Logo."""
            }
        ]
    },
    "ref-015": {
        "name": "Supermarkt-Filialen",
        "branche": "einzelhandel",
        "beschreibung": "Lebensmitteleinzelhandel, 4.200 m², Niederbayern",
        "bilder": [
            {
                "name": "ref-015-1",
                "prompt": """Hauptbild: Supermarkt nach Ladenschluss.
FIMI Mitarbeiter reinigt zwischen Regalen.
Lebensmittelregale, Kühltheken.
KÄRCHER Scheuersaugmaschine (GELB!) für Bodenreinigung.
Marineblaue Arbeitskleidung mit FIMI Logo."""
            },
            {
                "name": "ref-015-2",
                "prompt": """Obst- und Gemüseabteilung im Supermarkt.
FIMI Mitarbeiterin reinigt Warenauslage.
Frische Produkte, Kühlung.
GELBE Reinigungstücher für Lebensmittelbereich (4-Farben!).
Marineblaues Poloshirt mit FIMI Logo."""
            },
            {
                "name": "ref-015-3",
                "prompt": """Eingangsbereich Supermarkt.
FIMI Mitarbeiter reinigt automatische Türen und Eingangsmatten.
Einkaufswagen, Pfandautomat.
Professionelle Eingangsreinigung.
Marineblaue Arbeitskleidung mit FIMI Logo."""
            }
        ]
    },

    # ==================== GASTRONOMIE & HOTEL ====================
    "ref-016": {
        "name": "4-Sterne Hotel Komplett",
        "branche": "gastronomie-hotel",
        "beschreibung": "Stadthotel, 5.500 m², Ostbayern",
        "bilder": [
            {
                "name": "ref-016-1",
                "prompt": """Hauptbild: Elegante Hotellobby.
FIMI Mitarbeiterin reinigt Rezeptionsbereich.
Marmorboden, Kronleuchter, gehobenes Ambiente.
VERMOP Wagen dezent platziert.
Marineblaues Poloshirt mit FIMI Logo."""
            },
            {
                "name": "ref-016-2",
                "prompt": """Hotelzimmer-Reinigung.
FIMI Housekeeping-Mitarbeiterin macht Bett.
Elegantes Hotelzimmer, Doppelbett.
Professionelle Zimmerreinigung.
Marineblaue Arbeitskleidung mit FIMI Logo."""
            },
            {
                "name": "ref-016-3",
                "prompt": """Hotel-Restaurant nach dem Service.
FIMI Mitarbeiter reinigt Restaurantbereich.
Gedeckte Tische, elegante Einrichtung.
VERMOP Wagen, professionelle Reinigung.
Marineblaue Arbeitskleidung mit FIMI Logo."""
            }
        ]
    },
    "ref-017": {
        "name": "Gastronomie HACCP",
        "branche": "gastronomie-hotel",
        "beschreibung": "Traditionsgaststätte, 420 m², Niederbayern",
        "bilder": [
            {
                "name": "ref-017-1",
                "prompt": """Hauptbild: Traditionelle bayerische Gaststätte.
FIMI Mitarbeiter reinigt Gastraum nach Feierabend.
Holztische, Bänke, bayerisches Ambiente.
VERMOP Wagen, gründliche Reinigung.
Marineblaue Arbeitskleidung mit FIMI Logo."""
            },
            {
                "name": "ref-017-2",
                "prompt": """Profi-Küche in Gaststätte.
FIMI Mitarbeiterin reinigt Edelstahl-Küche.
Herd, Fritteuse, Kühlschränke.
GELBE Reinigungstücher für Küchenbereich (4-Farben!).
Marineblaues Poloshirt mit FIMI Logo, Haarnetz."""
            },
            {
                "name": "ref-017-3",
                "prompt": """Sanitäranlagen in Gaststätte.
FIMI Mitarbeiter reinigt WC-Bereich.
ROTE Reinigungstücher für Sanitär (4-Farben-Prinzip!).
Moderne Sanitäreinrichtung.
Marineblaue Arbeitskleidung mit FIMI Logo."""
            }
        ]
    },
    "ref-018": {
        "name": "Business-Hotel Tagungen",
        "branche": "gastronomie-hotel",
        "beschreibung": "Tagungshotel, 6.200 m², Oberbayern",
        "bilder": [
            {
                "name": "ref-018-1",
                "prompt": """Hauptbild: Großer Konferenzraum im Business-Hotel.
FIMI Mitarbeiterin bereitet Raum für Tagung vor.
Bestuhlung, Beamer, Flipcharts.
VERMOP Wagen, professionelle Vorbereitung.
Marineblaues Poloshirt mit FIMI Logo."""
            },
            {
                "name": "ref-018-2",
                "prompt": """Hotel-Foyer mit Tagungsgästen.
FIMI Mitarbeiter reinigt diskret im Hintergrund.
Business-Ambiente, Sitzecken.
VERMOP Wagen, unauffällige Reinigung.
Marineblaue Arbeitskleidung mit FIMI Logo."""
            },
            {
                "name": "ref-018-3",
                "prompt": """Business-Hotelzimmer.
FIMI Housekeeping bei Zimmerreinigung.
Schreibtisch, Doppelbett, modernes Design.
Professionelle Zimmerreinigung.
Marineblaue Arbeitskleidung mit FIMI Logo."""
            }
        ]
    },

    # ==================== BILDUNG & SCHULEN ====================
    "ref-019": {
        "name": "Gymnasium 40 Klassen",
        "branche": "bildung-schulen",
        "beschreibung": "Weiterführende Schule, 7.500 m², Regensburg",
        "bilder": [
            {
                "name": "ref-019-1",
                "prompt": """Hauptbild: Klassenzimmer in modernem Gymnasium.
FIMI Mitarbeiterin reinigt Schülertische.
Stühle, Tafel, Fenster mit Blick auf Schulhof.
VERMOP Wagen, BLAUE Mops.
Marineblaues Poloshirt mit FIMI Logo."""
            },
            {
                "name": "ref-019-2",
                "prompt": """Schulflur mit Schließfächern.
FIMI Mitarbeiter reinigt Flurboden.
Schließfächer, Türen zu Klassenzimmern.
KÄRCHER Scheuersaugmaschine (GELB!).
Marineblaue Arbeitskleidung mit FIMI Logo."""
            },
            {
                "name": "ref-019-3",
                "prompt": """Schul-Turnhalle.
FIMI Mitarbeiter reinigt Sportboden.
Turngeräte, Basketballkörbe, große Halle.
Spezialreinigung für Sportböden.
Marineblaue Arbeitskleidung mit FIMI Logo."""
            }
        ]
    },
    "ref-020": {
        "name": "Kindertagesstätte",
        "branche": "bildung-schulen",
        "beschreibung": "Kinderbetreuungseinrichtung, 680 m², Ingolstadt",
        "bilder": [
            {
                "name": "ref-020-1",
                "prompt": """Hauptbild: Spielzimmer in Kindertagesstätte.
FIMI Mitarbeiterin reinigt kindersicher.
Spielzeug, bunte Möbel, Teppich.
Allergikerfreundliche Reinigungsmittel.
Marineblaues Poloshirt mit FIMI Logo."""
            },
            {
                "name": "ref-020-2",
                "prompt": """Kita-Essbereich.
FIMI Mitarbeiter reinigt Kindertische.
Kleine Stühle, Hochstühle, kinderfreundliches Design.
GELBE Reinigungstücher für Essbereich (4-Farben!).
Marineblaue Arbeitskleidung mit FIMI Logo."""
            },
            {
                "name": "ref-020-3",
                "prompt": """Kita-Sanitärbereich für Kinder.
FIMI Mitarbeiterin reinigt kleine Waschbecken und Toiletten.
Kindgerechte Sanitärausstattung.
ROTE Reinigungstücher für Sanitär (4-Farben!).
Marineblaues Poloshirt mit FIMI Logo."""
            }
        ]
    },
    "ref-021": {
        "name": "Hochschule Campus",
        "branche": "bildung-schulen",
        "beschreibung": "Bildungseinrichtung, 15.000 m², Freising",
        "bilder": [
            {
                "name": "ref-021-1",
                "prompt": """Hauptbild: Universitäts-Hörsaal.
FIMI Mitarbeiter reinigt Hörsaalbestuhlung.
Große Treppe, Tafel, Beamer.
VERMOP Wagen, effiziente Reinigung.
Marineblaue Arbeitskleidung mit FIMI Logo."""
            },
            {
                "name": "ref-021-2",
                "prompt": """Universitäts-Bibliothek.
FIMI Mitarbeiterin staubt Bücherregale ab.
Lange Regalreihen, Lesearbeitsplätze.
Leise, sorgfältige Reinigung.
Marineblaues Poloshirt mit FIMI Logo."""
            },
            {
                "name": "ref-021-3",
                "prompt": """Mensa der Hochschule.
FIMI Team reinigt nach Mittagsservice.
Lange Tischreihen, Ausgabetheken.
KÄRCHER Scheuersaugmaschine (GELB!) für Boden.
Marineblaue Arbeitskleidung mit FIMI Logo."""
            }
        ]
    },

    # ==================== FITNESS & SPORT ====================
    "ref-022": {
        "name": "Fitness-Center XXL",
        "branche": "fitness-sport",
        "beschreibung": "Fitnessstudio-Kette, 2.800 m², Erding",
        "bilder": [
            {
                "name": "ref-022-1",
                "prompt": """Hauptbild: Großer Fitnessbereich mit Geräten.
FIMI Mitarbeiterin desinfiziert Trainingsgeräte.
Laufbänder, Hanteln, moderne Ausstattung.
Sprühdesinfektion, hygienische Reinigung.
Marineblaues Poloshirt mit FIMI Logo."""
            },
            {
                "name": "ref-022-2",
                "prompt": """Umkleidebereich im Fitnessstudio.
FIMI Mitarbeiter reinigt Umkleidekabinen.
Spinde, Bänke, saubere Atmosphäre.
ROTE Reinigungstücher für Sanitärnähe (4-Farben!).
Marineblaue Arbeitskleidung mit FIMI Logo."""
            },
            {
                "name": "ref-022-3",
                "prompt": """Wellnessbereich mit Sauna.
FIMI Mitarbeiterin reinigt Ruhebereich.
Liegen, Handtücher, entspannte Atmosphäre.
Hygienische Desinfektion.
Marineblaues Poloshirt mit FIMI Logo."""
            }
        ]
    },
    "ref-023": {
        "name": "Schwimmbad Kommunal",
        "branche": "fitness-sport",
        "beschreibung": "Kommunales Schwimmbad, 4.500 m², Straubing",
        "bilder": [
            {
                "name": "ref-023-1",
                "prompt": """Hauptbild: Schwimmbad-Beckenbereich.
FIMI Mitarbeiter reinigt Beckenrand.
Schwimmbecken, Sprungturm, große Halle.
Spezialreinigung für Nassbereich.
Marineblaue Arbeitskleidung mit FIMI Logo, rutschfeste Schuhe."""
            },
            {
                "name": "ref-023-2",
                "prompt": """Schwimmbad-Umkleiden.
FIMI Mitarbeiterin reinigt Duschbereich.
Duschen, Fliesen, Ablaufrinnen.
ROTE Reinigungstücher (4-Farben-Prinzip!).
Marineblaues Poloshirt mit FIMI Logo."""
            },
            {
                "name": "ref-023-3",
                "prompt": """Sauna-Landschaft im Schwimmbad.
FIMI Mitarbeiter reinigt Saunabereich.
Holzbänke, Aufguss-Bereich.
Spezialreinigung für Sauna.
Marineblaue Arbeitskleidung mit FIMI Logo."""
            }
        ]
    },
    "ref-024": {
        "name": "Tennis-Center",
        "branche": "fitness-sport",
        "beschreibung": "Tennisclub, 3.200 m², Passau",
        "bilder": [
            {
                "name": "ref-024-1",
                "prompt": """Hauptbild: Indoor-Tennishalle.
FIMI Mitarbeiter reinigt Hallenboden neben Tennisplatz.
Tennisnetze, Linien, große Halle.
Spezialreinigung für Sportböden.
Marineblaue Arbeitskleidung mit FIMI Logo."""
            },
            {
                "name": "ref-024-2",
                "prompt": """Clubhaus des Tenniscenters.
FIMI Mitarbeiterin reinigt Gastronomiebereich.
Bar, Tische mit Blick auf Plätze.
VERMOP Wagen, gründliche Reinigung.
Marineblaues Poloshirt mit FIMI Logo."""
            },
            {
                "name": "ref-024-3",
                "prompt": """Umkleiden im Tennis-Center.
FIMI Mitarbeiter reinigt Spinde und Bänke.
Sportlich-elegante Einrichtung.
Hygienische Reinigung.
Marineblaue Arbeitskleidung mit FIMI Logo."""
            }
        ]
    },

    # ==================== LOGISTIK & LAGER ====================
    "ref-025": {
        "name": "Logistikzentrum Nord",
        "branche": "logistik-lager",
        "beschreibung": "Logistikdienstleister, 35.000 m², Landshut",
        "bilder": [
            {
                "name": "ref-025-1",
                "prompt": """Hauptbild: Riesige Logistikhalle.
FIMI Mitarbeiter auf KÄRCHER Aufsitz-Scheuersaugmaschine (GELB!).
Hochregale, Gabelstapler, große Fläche.
Maschinelle Großflächenreinigung.
Marineblaue Arbeitsjacke mit FIMI Logo."""
            },
            {
                "name": "ref-025-2",
                "prompt": """Verladerampe im Logistikzentrum.
FIMI Mitarbeiter reinigt Ladebereich.
LKW-Rampen, Rolltore.
Industriereinigung, robustes Equipment.
Marineblaue Arbeitskleidung mit FIMI Logo."""
            },
            {
                "name": "ref-025-3",
                "prompt": """Bürobereich im Logistikzentrum.
FIMI Mitarbeiterin reinigt Disponenten-Arbeitsplätze.
Mehrere Bildschirme, Logistiksoftware.
VERMOP Wagen, BLAUE Tücher.
Marineblaues Poloshirt mit FIMI Logo."""
            }
        ]
    },
    "ref-026": {
        "name": "Speditionszentrum",
        "branche": "logistik-lager",
        "beschreibung": "Speditionsunternehmen, 18.000 m², München",
        "bilder": [
            {
                "name": "ref-026-1",
                "prompt": """Hauptbild: Umschlagshalle der Spedition.
FIMI Mitarbeiter reinigt zwischen Paletten.
LKW-Ladezonen, Hubwagen.
KÄRCHER Scheuersaugmaschine (GELB!).
Marineblaue Arbeitsjacke mit FIMI Logo, Sicherheitsschuhe."""
            },
            {
                "name": "ref-026-2",
                "prompt": """Außenfläche der Spedition.
FIMI Mitarbeiter bei Außenreinigung.
Gepflasterter Hof, Parkplätze für LKW.
KÄRCHER Hochdruckreiniger (GELB!).
Marineblaue Arbeitskleidung mit FIMI Logo."""
            },
            {
                "name": "ref-026-3",
                "prompt": """Sozialräume der Spedition.
FIMI Mitarbeiterin reinigt Pausenraum.
Tische, Kaffeemaschine, Spinde.
VERMOP Wagen, gründliche Reinigung.
Marineblaues Poloshirt mit FIMI Logo."""
            }
        ]
    },
    "ref-027": {
        "name": "Kühllogistik",
        "branche": "logistik-lager",
        "beschreibung": "Kühllogistik-Unternehmen, 8.500 m², Regensburg",
        "bilder": [
            {
                "name": "ref-027-1",
                "prompt": """Hauptbild: Kühllager mit Hochregalen.
FIMI Mitarbeiter in Kälteschutzkleidung bei Reinigung.
Tiefkühlregale, Paletten, kalte Umgebung.
HACCP-konforme Reinigung im Kühlbereich.
Marineblaue Kälteschutzjacke mit FIMI Logo."""
            },
            {
                "name": "ref-027-2",
                "prompt": """Kühlschleuse im Kühllager.
FIMI Mitarbeiterin reinigt Schleusenbereich.
Temperaturkontrolle, Kunststoffvorhänge.
Hygienische Reinigung.
Marineblaue Arbeitskleidung mit FIMI Logo."""
            },
            {
                "name": "ref-027-3",
                "prompt": """Kommissionierbereich Kühllogistik.
FIMI Mitarbeiter reinigt Arbeitsflächen.
Kühlboxen, Etiketten, Packbereich.
GELBE Tücher für Lebensmittelbereich (4-Farben!).
Marineblaue Kälteschutzkleidung mit FIMI Logo."""
            }
        ]
    },

    # ==================== WOHNUNGSWIRTSCHAFT ====================
    "ref-028": {
        "name": "Wohnanlage Süd",
        "branche": "wohnungswirtschaft",
        "beschreibung": "Kommunale Wohnungsbaugesellschaft, 8.400 m², Ingolstadt",
        "bilder": [
            {
                "name": "ref-028-1",
                "prompt": """Hauptbild: Treppenhaus in Mehrfamilienhaus.
FIMI Mitarbeiterin wischt Treppenstufen.
Sauberes Treppenhaus, Handlauf, Briefkästen.
VERMOP Wagen, BLAUE Mops.
Marineblaues Poloshirt mit FIMI Logo."""
            },
            {
                "name": "ref-028-2",
                "prompt": """Außenanlage Wohnkomplex.
FIMI Mitarbeiter bei Gehwegreinigung.
Mehrfamilienhäuser, Grünflächen, Parkplätze.
Saubere Außenanlagen.
Marineblaue Arbeitskleidung mit FIMI Logo."""
            },
            {
                "name": "ref-028-3",
                "prompt": """Eingangsbereich Wohnanlage.
FIMI Mitarbeiterin reinigt Glaseingang.
UNGER Fensterabzieher (GRÜNER Griff!).
Modernes Mehrfamilienhaus.
Marineblaues Poloshirt mit FIMI Logo."""
            }
        ]
    },
    "ref-029": {
        "name": "Eigentümergemeinschaft",
        "branche": "wohnungswirtschaft",
        "beschreibung": "Wohnungseigentümergemeinschaft, 2.800 m², Freising",
        "bilder": [
            {
                "name": "ref-029-1",
                "prompt": """Hauptbild: Luxus-Wohnanlage Eingangsbereich.
FIMI Mitarbeiterin reinigt hochwertigen Eingang.
Marmorboden, Glasfront, elegantes Design.
VERMOP Wagen, Premium-Reinigung.
Marineblaues Poloshirt mit FIMI Logo."""
            },
            {
                "name": "ref-029-2",
                "prompt": """Tiefgarage der Wohnanlage.
FIMI Mitarbeiter bei Tiefgaragenreinigung.
Parkplätze, Betonpfeiler, Beleuchtung.
KÄRCHER Scheuersaugmaschine (GELB!).
Marineblaue Arbeitsjacke mit FIMI Logo."""
            },
            {
                "name": "ref-029-3",
                "prompt": """Gartenpflege in Wohnanlage.
FIMI Mitarbeiter bei Grünpflege.
Gepflegte Hecken, Rasen, Blumenbeete.
Professionelle Gartenpflege.
Marineblaue Arbeitskleidung mit FIMI Logo."""
            }
        ]
    },
    "ref-030": {
        "name": "Hausverwaltung Portfolio",
        "branche": "wohnungswirtschaft",
        "beschreibung": "Hausverwaltung, 15.000 m², Erding",
        "bilder": [
            {
                "name": "ref-030-1",
                "prompt": """Hauptbild: FIMI Mitarbeiter vor verschiedenen Wohnobjekten.
Koordinierte Gebäudebetreuung.
FIMI Fahrzeug im Hintergrund.
Professionelles Erscheinungsbild.
Marineblaue Arbeitskleidung mit FIMI Logo."""
            },
            {
                "name": "ref-030-2",
                "prompt": """Hausmeisterservice: Kleine Reparatur.
FIMI Mitarbeiter wechselt Leuchtmittel im Treppenhaus.
Leiter, Werkzeug, Hausmeistertätigkeiten.
Full-Service Gebäudebetreuung.
Marineblaue Arbeitskleidung mit FIMI Logo."""
            },
            {
                "name": "ref-030-3",
                "prompt": """Winterdienst vor Wohnhaus.
FIMI Mitarbeiter räumt Schnee.
Schneeschaufel, gestreuter Gehweg.
Winterdienst für Wohnanlagen.
Marineblaue Winterjacke mit FIMI Logo."""
            }
        ]
    },

    # ==================== ÖFFENTLICHE EINRICHTUNGEN ====================
    "ref-031": {
        "name": "Historisches Rathaus",
        "branche": "oeffentliche-einrichtungen",
        "beschreibung": "Kommunale Verwaltung, 4.200 m², Straubing",
        "bilder": [
            {
                "name": "ref-031-1",
                "prompt": """Hauptbild: Historisches Rathaus von außen.
FIMI Mitarbeiter reinigt Eingangsstufen.
Historische Architektur, Sandsteinfassade.
Sorgfältige Reinigung denkmalgeschützter Bereiche.
Marineblaue Arbeitskleidung mit FIMI Logo."""
            },
            {
                "name": "ref-031-2",
                "prompt": """Bürgerbüro im Rathaus.
FIMI Mitarbeiterin reinigt Schalterbereich.
Wartemarken-System, Informationsmaterial.
VERMOP Wagen, gründliche Reinigung.
Marineblaues Poloshirt mit FIMI Logo."""
            },
            {
                "name": "ref-031-3",
                "prompt": """Historischer Ratssaal.
FIMI Mitarbeiter reinigt behutsam.
Holzvertäfelung, historische Stühle.
Schonende Reinigung wertvoller Oberflächen.
Marineblaue Arbeitskleidung mit FIMI Logo."""
            }
        ]
    },
    "ref-032": {
        "name": "Öffentliche Bibliothek",
        "branche": "oeffentliche-einrichtungen",
        "beschreibung": "Städtische Bibliothek, 1.800 m², Passau",
        "bilder": [
            {
                "name": "ref-032-1",
                "prompt": """Hauptbild: Bibliothek Lesesaal.
FIMI Mitarbeiterin staubt Bücherregale ab.
Lange Regalreihen, Lesetische, ruhige Atmosphäre.
Leise, staubfreie Reinigung.
Marineblaues Poloshirt mit FIMI Logo."""
            },
            {
                "name": "ref-032-2",
                "prompt": """Kinderbuchabteilung der Bibliothek.
FIMI Mitarbeiter reinigt Sitzkissen und Regale.
Bunte Bücher, Kindermöbel.
Kinderfreundliche Reinigung.
Marineblaue Arbeitskleidung mit FIMI Logo."""
            },
            {
                "name": "ref-032-3",
                "prompt": """Bibliotheks-Eingangsbereich.
FIMI Mitarbeiterin reinigt Ausleihtresen.
Selbstausleih-Automaten, Informationstheke.
BLAUE Mikrofasertücher.
Marineblaues Poloshirt mit FIMI Logo."""
            }
        ]
    },
    "ref-033": {
        "name": "Feuerwache Hauptwache",
        "branche": "oeffentliche-einrichtungen",
        "beschreibung": "Freiwillige Feuerwehr, 2.400 m², Landshut",
        "bilder": [
            {
                "name": "ref-033-1",
                "prompt": """Hauptbild: Feuerwehr-Fahrzeughalle.
FIMI Mitarbeiter reinigt Hallenboden.
Feuerwehrfahrzeuge, Geräte, große Halle.
KÄRCHER Scheuersaugmaschine (GELB!).
Marineblaue Arbeitsjacke mit FIMI Logo."""
            },
            {
                "name": "ref-033-2",
                "prompt": """Feuerwehr-Schulungsraum.
FIMI Mitarbeiterin reinigt Schulungsbereich.
Stühle, Projektionsfläche, Ausbildungsmaterial.
VERMOP Wagen, gründliche Reinigung.
Marineblaues Poloshirt mit FIMI Logo."""
            },
            {
                "name": "ref-033-3",
                "prompt": """Sozialräume der Feuerwehr.
FIMI Mitarbeiter reinigt Aufenthaltsraum.
Tische, Küche, Spinde.
Hygienische Reinigung für Einsatzkräfte.
Marineblaue Arbeitskleidung mit FIMI Logo."""
            }
        ]
    },

    # ==================== BANKEN & VERSICHERUNGEN ====================
    "ref-034": {
        "name": "Bankzentrale mit Filialen",
        "branche": "banken-versicherungen",
        "beschreibung": "Regionale Sparkasse, 6.500 m², München",
        "bilder": [
            {
                "name": "ref-034-1",
                "prompt": """Hauptbild: Bankfiliale Kundenbereich.
FIMI Mitarbeiterin reinigt Schalterbereich.
Bankschalter, Beratungstheken, SB-Bereich.
Diskrete, professionelle Reinigung.
Marineblaues Poloshirt mit FIMI Logo."""
            },
            {
                "name": "ref-034-2",
                "prompt": """SB-Bereich der Bank.
FIMI Mitarbeiter reinigt Geldautomaten.
ATMs, Kontoauszugsdrucker.
Sorgfältige Reinigung sensibler Bereiche.
Marineblaue Arbeitskleidung mit FIMI Logo."""
            },
            {
                "name": "ref-034-3",
                "prompt": """Beratungsbüro in Bank.
FIMI Mitarbeiterin reinigt Besprechungsraum.
Schreibtisch, Stühle, Bildschirm.
BLAUE Mikrofasertücher, diskrete Reinigung.
Marineblaues Poloshirt mit FIMI Logo."""
            }
        ]
    },
    "ref-035": {
        "name": "Versicherungsagentur",
        "branche": "banken-versicherungen",
        "beschreibung": "Versicherungsagentur, 380 m², Regensburg",
        "bilder": [
            {
                "name": "ref-035-1",
                "prompt": """Hauptbild: Versicherungsbüro Empfang.
FIMI Mitarbeiterin reinigt Empfangstresen.
Hochwertige Büromöbel, Kundenwartezone.
VERMOP Wagen, professionelle Reinigung.
Marineblaues Poloshirt mit FIMI Logo."""
            },
            {
                "name": "ref-035-2",
                "prompt": """Beratungsraum der Versicherungsagentur.
FIMI Mitarbeiter reinigt Besprechungstisch.
Verträge, Computer, elegante Einrichtung.
Sorgfältige, diskrete Reinigung.
Marineblaue Arbeitskleidung mit FIMI Logo."""
            },
            {
                "name": "ref-035-3",
                "prompt": """Fensterreinigung in Versicherungsagentur.
FIMI Mitarbeiterin reinigt Schaufenster.
UNGER Fensterabzieher (GRÜNER Griff!).
Repräsentative Glasfront.
Marineblaues Poloshirt mit FIMI Logo."""
            }
        ]
    },
    "ref-036": {
        "name": "Genossenschaftsbank",
        "branche": "banken-versicherungen",
        "beschreibung": "VR-Bank, 2.100 m², Ingolstadt",
        "bilder": [
            {
                "name": "ref-036-1",
                "prompt": """Hauptbild: Kundenbereich VR-Bank.
FIMI Mitarbeiter reinigt nach Geschäftsschluss.
Bankschalter, Info-Displays, moderne Einrichtung.
VERMOP Wagen, professionelle Bankreinigung.
Marineblaue Arbeitskleidung mit FIMI Logo."""
            },
            {
                "name": "ref-036-2",
                "prompt": """Vorstandsbereich der Bank.
FIMI Mitarbeiterin reinigt Chefbüro.
Elegante Möbel, Besprechungsecke.
Diskrete, sorgfältige Reinigung.
Marineblaues Poloshirt mit FIMI Logo."""
            },
            {
                "name": "ref-036-3",
                "prompt": """Bank-Konferenzraum.
FIMI Mitarbeiter reinigt großen Besprechungsraum.
Langer Tisch, Präsentationstechnik.
BLAUE Mikrofasertücher, gründliche Reinigung.
Marineblaue Arbeitskleidung mit FIMI Logo."""
            }
        ]
    },

    # ==================== AUTOMOTIVE ====================
    "ref-037": {
        "name": "Premium Autohaus",
        "branche": "automotive",
        "beschreibung": "Automobilhändler, 4.200 m², Freising",
        "bilder": [
            {
                "name": "ref-037-1",
                "prompt": """Hauptbild: Premium Autohaus Showroom.
FIMI Mitarbeiter reinigt glänzenden Showroom-Boden.
Luxusfahrzeuge auf Podesten, elegante Beleuchtung.
KÄRCHER Scheuersaugmaschine (GELB!) für Hochglanzboden.
Marineblaue Arbeitskleidung mit FIMI Logo."""
            },
            {
                "name": "ref-037-2",
                "prompt": """Autohaus-Werkstatt.
FIMI Mitarbeiterin reinigt Werkstattbereich.
Hebebühnen, Werkzeug, sauberer Werkstattboden.
Industriereinigung in KFZ-Umfeld.
Marineblaues Poloshirt mit FIMI Logo."""
            },
            {
                "name": "ref-037-3",
                "prompt": """Kundenlounge im Autohaus.
FIMI Mitarbeiter reinigt Wartebereich.
Ledersofas, Kaffeebar, Autokataloge.
Hochwertige Reinigung für Premium-Ambiente.
Marineblaue Arbeitskleidung mit FIMI Logo."""
            }
        ]
    },
    "ref-038": {
        "name": "KFZ-Werkstatt",
        "branche": "automotive",
        "beschreibung": "Freie Werkstatt, 1.200 m², Erding",
        "bilder": [
            {
                "name": "ref-038-1",
                "prompt": """Hauptbild: Freie KFZ-Werkstatt.
FIMI Mitarbeiter reinigt Werkstattboden.
Hebebühnen, Reifenlager, Werkzeugwagen.
Ölfleck-Entfernung, Industriereinigung.
Marineblaue Arbeitsjacke mit FIMI Logo."""
            },
            {
                "name": "ref-038-2",
                "prompt": """Annahme-/Kundenbereich der Werkstatt.
FIMI Mitarbeiterin reinigt Empfangstresen.
Terminkalender, Ersatzteil-Display.
VERMOP Wagen, sauberer Kundenbereich.
Marineblaues Poloshirt mit FIMI Logo."""
            },
            {
                "name": "ref-038-3",
                "prompt": """Werkstatt-Waschplatz.
FIMI Mitarbeiter reinigt Waschboxen.
Hochdruckreiniger-Bereich, Wasserschieber.
KÄRCHER Hochdruckreiniger (GELB!).
Marineblaue Arbeitskleidung mit FIMI Logo."""
            }
        ]
    },
    "ref-039": {
        "name": "Autohaus Niederlassung",
        "branche": "automotive",
        "beschreibung": "Automobilniederlassung, 5.800 m², Straubing",
        "bilder": [
            {
                "name": "ref-039-1",
                "prompt": """Hauptbild: Große Autohaus-Niederlassung.
FIMI Team vor Autohaus mit FIMI Fahrzeug.
Große Glasfront, Neuwagen auf Außenfläche.
Professionelles Erscheinungsbild.
Marineblaue Arbeitskleidung mit FIMI Logo."""
            },
            {
                "name": "ref-039-2",
                "prompt": """Außenfläche Autohaus.
FIMI Mitarbeiter bei Außenreinigung.
Parkplatz mit Gebrauchtwagen, Fahnen.
KÄRCHER Hochdruckreiniger (GELB!) für Pflaster.
Marineblaue Arbeitsjacke mit FIMI Logo."""
            },
            {
                "name": "ref-039-3",
                "prompt": """Autohaus-Glasfassade.
FIMI Mitarbeiterin bei Glasreinigung.
UNGER Fensterabzieher (GRÜNER Griff!).
Große Schaufenster mit Fahrzeugen dahinter.
Marineblaues Poloshirt mit FIMI Logo."""
            }
        ]
    },

    # ==================== SPEZIAL / FACILITY ====================
    "ref-040": {
        "name": "Bauendreinigung Wohnbau",
        "branche": "buero-verwaltung",
        "beschreibung": "Bauträger, 4.800 m², Passau",
        "bilder": [
            {
                "name": "ref-040-1",
                "prompt": """Hauptbild: Neubau-Wohnung bei Bauendreinigung.
FIMI Team reinigt frisch fertiggestellte Wohnung.
Baustaub, neue Fenster, unverputzte Steckdosen.
Professionelle Baufeinreinigung.
Marineblaue Arbeitskleidung mit FIMI Logo."""
            },
            {
                "name": "ref-040-2",
                "prompt": """Treppenhaus im Neubau.
FIMI Mitarbeiter bei Bauendreinigung.
Betonstaub, neue Handläufe.
Gründliche Staubentfernung.
Marineblaue Arbeitsjacke mit FIMI Logo."""
            },
            {
                "name": "ref-040-3",
                "prompt": """Fensterreinigung im Neubau.
FIMI Mitarbeiterin entfernt Baustaub von Fenstern.
UNGER Fensterabzieher (GRÜNER Griff!).
Neue Fenster, Baufolien-Reste.
Marineblaues Poloshirt mit FIMI Logo."""
            }
        ]
    },
    "ref-041": {
        "name": "Fassadenreinigung Hochhaus",
        "branche": "buero-verwaltung",
        "beschreibung": "Bürogebäude 12 Etagen, 3.200 m², Landshut",
        "bilder": [
            {
                "name": "ref-041-1",
                "prompt": """Hauptbild: Hochhaus-Fassadenreinigung.
FIMI Mitarbeiter auf Hubarbeitsbühne bei Fassadenreinigung.
12-stöckiges Bürogebäude, Glasfassade.
Professionelle Höhenarbeit, Sicherheitsgurt.
Marineblaue Arbeitskleidung mit FIMI Logo."""
            },
            {
                "name": "ref-041-2",
                "prompt": """Nahaufnahme Fassadenreinigung.
FIMI Mitarbeiter reinigt Glasfassade.
UNGER Teleskopstange, Einwascher.
Hochhaus-Reinigung, professionelle Technik.
Marineblaue Arbeitskleidung mit FIMI Logo."""
            },
            {
                "name": "ref-041-3",
                "prompt": """Reinigung von Betonelementen der Fassade.
FIMI Mitarbeiterin reinigt Betonbrüstungen.
Hochdruckreiniger, Fassadenreinigung.
Schonende Reinigung von Fassadenelementen.
Marineblaue Arbeitsjacke mit FIMI Logo."""
            }
        ]
    },
    "ref-042": {
        "name": "Tiefgarage Zentrum",
        "branche": "wohnungswirtschaft",
        "beschreibung": "Parkhausbetreiber, 12.000 m², München",
        "bilder": [
            {
                "name": "ref-042-1",
                "prompt": """Hauptbild: Öffentliche Tiefgarage.
FIMI Mitarbeiter auf KÄRCHER Aufsitz-Scheuersaugmaschine (GELB!).
Parkebenen, Pfeiler, Beleuchtung.
Maschinelle Tiefgaragenreinigung.
Marineblaue Arbeitsjacke mit FIMI Logo."""
            },
            {
                "name": "ref-042-2",
                "prompt": """Ölfleck-Entfernung in Tiefgarage.
FIMI Mitarbeiter behandelt Ölfleck.
Spezialreiniger, Absaugung.
Professionelle Fleckenentfernung.
Marineblaue Arbeitskleidung mit FIMI Logo."""
            },
            {
                "name": "ref-042-3",
                "prompt": """Parkhaus-Einfahrt reinigen.
FIMI Mitarbeiterin reinigt Schrankenanlage.
Ticketautomat, Ein-/Ausfahrt.
Gründliche Reinigung.
Marineblaues Poloshirt mit FIMI Logo."""
            }
        ]
    },
    "ref-043": {
        "name": "Winterdienst Gewerbegebiet",
        "branche": "industrie-produktion",
        "beschreibung": "Gewerbepark, 45.000 m², Regensburg",
        "bilder": [
            {
                "name": "ref-043-1",
                "prompt": """Hauptbild: Winterdienst im Gewerbegebiet.
FIMI Mitarbeiter mit Räumfahrzeug.
Schneeräumung auf Zufahrtsstraße, Gewerbegebäude.
Professioneller Winterdienst.
Marineblaue Winterjacke mit FIMI Logo."""
            },
            {
                "name": "ref-043-2",
                "prompt": """Streufahrzeug im Einsatz.
FIMI Fahrzeug beim Streuen.
Salzstreuung, vereiste Straße.
24/7 Winterdienst-Bereitschaft.
FIMI Logo auf Fahrzeug."""
            },
            {
                "name": "ref-043-3",
                "prompt": """Handräumung vor Firmeneingang.
FIMI Mitarbeiter räumt Schnee per Hand.
Schneeschaufel, Eingangsbereich Firma.
Gründliche Schneeräumung.
Marineblaue Winterjacke mit FIMI Logo."""
            }
        ]
    },
    "ref-044": {
        "name": "Hausmeisterservice Full-Service",
        "branche": "buero-verwaltung",
        "beschreibung": "Bürozentrum, 5.600 m², Ingolstadt",
        "bilder": [
            {
                "name": "ref-044-1",
                "prompt": """Hauptbild: FIMI Hausmeister vor Bürozentrum.
FIMI Mitarbeiter mit Werkzeugkoffer.
Modernes Bürogebäude, Eingangsbereich.
Full-Service Gebäudebetreuung.
Marineblaue Arbeitskleidung mit FIMI Logo."""
            },
            {
                "name": "ref-044-2",
                "prompt": """Hausmeister bei Kleinreparatur.
FIMI Mitarbeiter repariert Türschließer.
Werkzeug, kleine Instandhaltung.
Handwerkliche Tätigkeiten.
Marineblaue Arbeitskleidung mit FIMI Logo."""
            },
            {
                "name": "ref-044-3",
                "prompt": """Grünflächenpflege vor Bürogebäude.
FIMI Mitarbeiter bei Rasenpflege.
Rasenmäher, gepflegte Außenanlage.
Gartenpflege als Teil des Full-Service.
Marineblaue Arbeitskleidung mit FIMI Logo."""
            }
        ]
    },
    "ref-045": {
        "name": "Graffiti-Entfernung",
        "branche": "oeffentliche-einrichtungen",
        "beschreibung": "Verkehrsunternehmen, 800 m², Freising",
        "bilder": [
            {
                "name": "ref-045-1",
                "prompt": """Hauptbild: Graffiti-Entfernung an Unterführung.
FIMI Mitarbeiter bei Graffiti-Reinigung.
Betonwand, Spezialreiniger, Hochdruckreiniger.
Fachgerechte Graffiti-Entfernung.
Marineblaue Arbeitskleidung mit FIMI Logo."""
            },
            {
                "name": "ref-045-2",
                "prompt": """Nahaufnahme Graffiti-Beseitigung.
FIMI Mitarbeiter mit Spezial-Reinigungsmittel.
Graffiti auf Beton, schonende Entfernung.
Ohne Oberflächenschäden.
Marineblaue Arbeitsjacke mit FIMI Logo."""
            },
            {
                "name": "ref-045-3",
                "prompt": """Vorher-Nachher Graffiti-Reinigung.
FIMI Mitarbeiterin vor gereinigter Wand.
Saubere Betonwand, professionelles Ergebnis.
Erfolgreiche Graffiti-Entfernung.
Marineblaues Poloshirt mit FIMI Logo."""
            }
        ]
    },

    # ==================== WEITERE PROJEKTE ====================
    "ref-046": {
        "name": "Seniorenzentrum",
        "branche": "gesundheitswesen",
        "beschreibung": "Wohlfahrtsverband, 4.500 m², Erding",
        "bilder": [
            {
                "name": "ref-046-1",
                "prompt": """Hauptbild: Aufenthaltsraum im Seniorenzentrum.
FIMI Mitarbeiterin reinigt freundlich.
Sitzgruppen, Fernseher, heller Raum.
Rücksichtsvolle Reinigung.
Marineblaues Poloshirt mit FIMI Logo."""
            },
            {
                "name": "ref-046-2",
                "prompt": """Speisesaal im Seniorenzentrum.
FIMI Mitarbeiter reinigt nach dem Essen.
Tische, Stühle, Essensausgabe.
VERMOP Wagen, gründliche Reinigung.
Marineblaue Arbeitskleidung mit FIMI Logo."""
            },
            {
                "name": "ref-046-3",
                "prompt": """Außenbereich Seniorenzentrum.
FIMI Mitarbeiterin reinigt Terrasse.
Gartenmöbel, Sonnenschirme.
Pflege der Außenbereiche.
Marineblaues Poloshirt mit FIMI Logo."""
            }
        ]
    },
    "ref-047": {
        "name": "Yoga-Studio",
        "branche": "fitness-sport",
        "beschreibung": "Yoga-Studio, 320 m², Straubing",
        "bilder": [
            {
                "name": "ref-047-1",
                "prompt": """Hauptbild: Helles Yoga-Studio.
FIMI Mitarbeiterin reinigt Yogaraum.
Holzboden, Spiegel, beruhigende Atmosphäre.
Hypoallergene Reinigung.
Marineblaues Poloshirt mit FIMI Logo."""
            },
            {
                "name": "ref-047-2",
                "prompt": """Yoga-Matten Desinfektion.
FIMI Mitarbeiter desinfiziert Yogamatten.
Stapel Matten, Spray-Desinfektion.
Hygienische Mattenreinigung.
Marineblaue Arbeitskleidung mit FIMI Logo."""
            },
            {
                "name": "ref-047-3",
                "prompt": """Umkleide im Yoga-Studio.
FIMI Mitarbeiterin reinigt Umkleidebereich.
Holzspinde, Bänke, ruhiges Ambiente.
Sorgfältige Reinigung.
Marineblaues Poloshirt mit FIMI Logo."""
            }
        ]
    },
    "ref-048": {
        "name": "Traditioneller Biergarten",
        "branche": "gastronomie-hotel",
        "beschreibung": "Gaststätte mit Biergarten, 1.800 m², Passau",
        "bilder": [
            {
                "name": "ref-048-1",
                "prompt": """Hauptbild: Bayerischer Biergarten.
FIMI Mitarbeiter reinigt Bierbänke.
Kastanienbäume, Biertische, bayerische Atmosphäre.
Außenreinigung, Hochdruckreiniger.
Marineblaue Arbeitskleidung mit FIMI Logo."""
            },
            {
                "name": "ref-048-2",
                "prompt": """Gaststube in traditioneller Wirtschaft.
FIMI Mitarbeiterin reinigt Holztische.
Bayerische Dekoration, Stammtisch.
VERMOP Wagen, gründliche Reinigung.
Marineblaues Poloshirt mit FIMI Logo."""
            },
            {
                "name": "ref-048-3",
                "prompt": """Großküche der Gaststätte.
FIMI Mitarbeiter reinigt Profi-Küche.
Herd, Kühlschränke, Edelstahl.
GELBE Tücher für Küche (4-Farben!).
Marineblaue Arbeitskleidung mit FIMI Logo, Haarnetz."""
            }
        ]
    },
    "ref-049": {
        "name": "Biomarkt mit Café",
        "branche": "einzelhandel",
        "beschreibung": "Bio-Supermarkt, 650 m², Landshut",
        "bilder": [
            {
                "name": "ref-049-1",
                "prompt": """Hauptbild: Biomarkt Verkaufsfläche.
FIMI Mitarbeiterin reinigt zwischen Bio-Regalen.
Naturprodukte, ökologische Verpackungen.
Umweltfreundliche Reinigungsmittel.
Marineblaues Poloshirt mit FIMI Logo."""
            },
            {
                "name": "ref-049-2",
                "prompt": """Bio-Café im Markt.
FIMI Mitarbeiter reinigt Café-Bereich.
Holztische, Pflanzen, nachhaltige Einrichtung.
Ökologische Reinigung.
Marineblaue Arbeitskleidung mit FIMI Logo."""
            },
            {
                "name": "ref-049-3",
                "prompt": """Frischetheke im Biomarkt.
FIMI Mitarbeiterin reinigt Kühltheke.
Bio-Käse, Bio-Wurst, Frischeprodukte.
GELBE Tücher für Lebensmittelbereich (4-Farben!).
Marineblaues Poloshirt mit FIMI Logo."""
            }
        ]
    },
    "ref-050": {
        "name": "Rechenzentrum",
        "branche": "buero-verwaltung",
        "beschreibung": "Rechenzentrum-Betreiber, 1.500 m², München",
        "bilder": [
            {
                "name": "ref-050-1",
                "prompt": """Hauptbild: Rechenzentrum Serverraum.
FIMI Mitarbeiter in Schutzkleidung bei Reinigung.
Serverracks, blaue LED-Beleuchtung, Kühlung.
Staubfreie Spezialreinigung.
Marineblaue Kleidung mit FIMI Logo."""
            },
            {
                "name": "ref-050-2",
                "prompt": """Doppelboden-Reinigung im Rechenzentrum.
FIMI Mitarbeiterin hebt Bodenplatte.
Kabelführung unter Doppelboden.
Spezialreinigung für IT-Umgebung.
Marineblaues Poloshirt mit FIMI Logo."""
            },
            {
                "name": "ref-050-3",
                "prompt": """Kontrollraum im Rechenzentrum.
FIMI Mitarbeiter reinigt Monitoring-Arbeitsplätze.
Viele Bildschirme, Netzwerk-Überwachung.
Sorgfältige Reinigung sensibler Technik.
Marineblaue Arbeitskleidung mit FIMI Logo."""
            }
        ]
    },
}

# ============================================================================
# CLIENT INITIALIZATION
# ============================================================================

def init_client():
    """Initialisiert den Google GenAI Client mit location=global."""
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
        print("✓ Client initialisiert (Gemini 3 Pro Image, Location: global)")
        return client
    except Exception as e:
        print(f"\n❌ CLIENT-FEHLER: {e}\n")
        sys.exit(1)

# ============================================================================
# IMAGE GENERATION
# ============================================================================

def generate_image(client, prompt: str, aspect_ratio: str = "4:3", retries: int = 3) -> Image:
    """Generiert ein Bild mit Gemini 3 Pro Image."""

    if not LOGO_PATH.exists():
        print(f"\n❌ LOGO NICHT GEFUNDEN: {LOGO_PATH}\n")
        sys.exit(1)

    logo = Image.open(LOGO_PATH)

    full_prompt = f"""Generiere ein fotorealistisches Bild für FIMI Gebäudereinigung.

REFERENZ-LOGO (oben): Nutze die Farben als Corporate Identity Referenz:
- Primärfarbe für Arbeitskleidung: Tiefes Marineblau (#012956)
- Akzentfarbe: Türkis (#109387)
Das Logo selbst soll NICHT frei im Bild schweben, aber auf Kleidung sichtbar sein!

BILDANFORDERUNG:
{prompt}

Seitenverhältnis: {aspect_ratio}

STIL:
- Fotorealistisch, High-End Corporate Photography
- Natürliches Tageslicht, professionelle Schatten
- Deutsches Umfeld, authentisch (kein Stock-Photo-Look)
- Keine KI-Artefakte
- Natürliche Gesichter, nicht generisch wirkend

ARBEITSKLEIDUNG:
- Marineblaue Poloshirts/Jacken (#012956) für FIMI Mitarbeiter
- FIMI Logo: WEISS auf dunkler Kleidung, DEZENT und SUBTIL
- Logo auf linker Brustseite, klein und unauffällig
- Sauber, professionell

REINIGUNGSGERÄTE - KRITISCHE REGELN:
1. KÄRCHER: NUR Scheuersaugmaschinen, Hochdruckreiniger, Industriesauger
   - Farbe: GELB mit schwarzen Details (niemals blau!)
   - KÄRCHER macht KEINE Reinigungswagen oder Einscheibenmaschinen!

2. VERMOP: Reinigungswagen, Mopsysteme, Eimer
   - Farbe: Grau/silbernes Gestell mit blauen Kunststoffteilen
   - Für Büroreinigung IMMER VERMOP Wagen verwenden!

3. CLEANFIX/COLUMBUS: Einscheibenmaschinen (Poliermaschinen)
   - Farbe: Silber/grau mit roten oder blauen Akzenten

4. UNGER: Fensterreinigung
   - Farbe: GRÜN (Griffe, Akzente)

5. NUMATIC HENRY: Staubsauger
   - Farbe: ROT mit Smiley-Gesicht

4-FARBEN-PRINZIP FÜR MOPS/TÜCHER:
- BLAU = Büro/allgemeine Flächen (NICHT GRÜN!)
- ROT = Sanitär/WC
- GELB = Küche
- GRÜN = Krankenhaus/OP

Die Geräte behalten IMMER ihre Original-Herstellerfarben, NICHT die FIMI CI-Farben!
"""

    print(f"   → Generiere...")

    last_error = None

    for attempt in range(1, retries + 1):
        try:
            response = client.models.generate_content(
                model=MODEL_NAME,
                contents=[
                    "FIMI Logo - Corporate Identity Referenz:",
                    logo,
                    full_prompt
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
            elif "404" in error_str or "not found" in error_str.lower():
                print(f"\n❌ MODELL NICHT VERFÜGBAR: {MODEL_NAME}")
                sys.exit(1)
            else:
                print(f"   ⚠️ Fehler: {error_str[:80]}... (Versuch {attempt}/{retries})")
                time.sleep(10)

    raise Exception(f"Bildgenerierung fehlgeschlagen: {last_error}")

# ============================================================================
# IMAGE SAVING
# ============================================================================

def save_image(img: Image, name: str, ref_id: str) -> Path:
    """Speichert Bild als AVIF + WebP in responsiven Größen."""
    target_dir = PUBLIC_DIR / ref_id
    target_dir.mkdir(parents=True, exist_ok=True)

    if img.mode == 'RGBA':
        img = img.convert('RGB')

    print(f"   💾 Speichere: {img.size[0]}x{img.size[1]}")

    sizes = [1024, 768, 384]
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

        resized.save(target_dir / f"{name}-{actual_size}w.avif", 'AVIF', quality=80)
        resized.save(target_dir / f"{name}-{actual_size}w.webp", 'WEBP', quality=80)

    main_avif = target_dir / f"{name}.avif"
    img.save(main_avif, 'AVIF', quality=85)
    print(f"   ✓ {name}.avif gespeichert")

    with open(LOG_FILE, 'a') as f:
        f.write(f"{datetime.now().isoformat()} | {name} | {img.size[0]}x{img.size[1]} | referenzen/{ref_id}\n")

    return main_avif

# ============================================================================
# MAIN FUNCTIONS
# ============================================================================

def generate_referenz(client, ref_id: str, force: bool = False):
    """Generiert alle 3 Bilder für eine Referenz."""
    if ref_id not in REFERENZEN:
        print(f"❌ Referenz {ref_id} nicht gefunden!")
        return False

    ref = REFERENZEN[ref_id]
    print(f"\n{'='*60}")
    print(f"REFERENZ: {ref['name']}")
    print(f"Branche: {ref['branche']}")
    print(f"{'='*60}")

    success_count = 0

    for i, bild in enumerate(ref['bilder'], 1):
        name = bild['name']
        target_file = PUBLIC_DIR / ref_id / f"{name}.avif"

        if target_file.exists() and not force:
            print(f"\n⏭️ {name}.avif existiert (--force zum Überschreiben)")
            success_count += 1
            continue

        print(f"\n[{i}/3] Generiere: {name}")

        try:
            img = generate_image(client, bild['prompt'], "4:3")
            save_image(img, name, ref_id)
            success_count += 1

            if i < 3:
                print("   ⏳ Warte 15 Sekunden...")
                time.sleep(15)

        except Exception as e:
            print(f"   ❌ Fehler: {e}")

    return success_count == 3


def generate_branche(client, branche: str, force: bool = False):
    """Generiert alle Bilder einer Branche."""
    refs = [ref_id for ref_id, ref in REFERENZEN.items() if ref['branche'] == branche]

    if not refs:
        print(f"❌ Keine Referenzen für Branche '{branche}' gefunden!")
        return

    print(f"\n{'='*60}")
    print(f"BRANCHE: {branche}")
    print(f"Referenzen: {len(refs)}")
    print(f"{'='*60}")

    for ref_id in refs:
        generate_referenz(client, ref_id, force)
        print("\n⏳ Warte 30 Sekunden zwischen Referenzen...")
        time.sleep(30)


def list_referenzen():
    """Listet alle Referenzen auf."""
    print("\n" + "="*60)
    print("ALLE REFERENZEN")
    print("="*60)

    branchen = {}
    for ref_id, ref in REFERENZEN.items():
        branche = ref['branche']
        if branche not in branchen:
            branchen[branche] = []
        branchen[branche].append((ref_id, ref['name']))

    for branche, refs in sorted(branchen.items()):
        print(f"\n{branche.upper()} ({len(refs)} Referenzen):")
        for ref_id, name in refs:
            target_dir = PUBLIC_DIR / ref_id
            status = "✅" if target_dir.exists() and len(list(target_dir.glob("*.avif"))) >= 3 else "⬜"
            print(f"  {status} {ref_id}: {name}")

    print(f"\nGesamt: {len(REFERENZEN)} Referenzen, {len(REFERENZEN)*3} Bilder")


def main():
    parser = argparse.ArgumentParser(description="FIMI Referenzen Bildgenerator")
    parser.add_argument("--ref", type=str, help="Einzelne Referenz (z.B. ref-001)")
    parser.add_argument("--branche", type=str, help="Alle Referenzen einer Branche")
    parser.add_argument("--all", action="store_true", help="Alle Referenzen generieren")
    parser.add_argument("--list", action="store_true", help="Alle Referenzen auflisten")
    parser.add_argument("--force", action="store_true", help="Existierende überschreiben")

    args = parser.parse_args()

    if args.list:
        list_referenzen()
        return 0

    client = init_client()

    if args.ref:
        return 0 if generate_referenz(client, args.ref, args.force) else 1
    elif args.branche:
        generate_branche(client, args.branche, args.force)
        return 0
    elif args.all:
        print("\n" + "="*60)
        print("GENERIERE ALLE 150 BILDER")
        print("="*60)
        print(f"\n⚠️ Das dauert etwa 2-3 Stunden und kostet ca. $36")
        print("   (150 Bilder × $0.24)")

        for ref_id in REFERENZEN:
            generate_referenz(client, ref_id, args.force)
            print("\n⏳ Warte 30 Sekunden zwischen Referenzen...")
            time.sleep(30)

        return 0
    else:
        parser.print_help()
        return 0


if __name__ == "__main__":
    sys.exit(main())
