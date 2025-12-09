#!/usr/bin/env python3
"""
FIMI Bildgenerator - Setup & Voraussetzungen Check
===================================================
Führe dieses Skript aus BEVOR du Bilder generierst.
Es prüft alle Voraussetzungen und gibt klare Fehlermeldungen.

Usage:
    python3 setup_check.py
"""

import os
import sys
import json
from pathlib import Path

# Farben für Terminal
GREEN = "\033[92m"
RED = "\033[91m"
YELLOW = "\033[93m"
RESET = "\033[0m"
BOLD = "\033[1m"

def check_mark(success: bool) -> str:
    return f"{GREEN}✓{RESET}" if success else f"{RED}✗{RESET}"

def print_header(text: str):
    print(f"\n{BOLD}{'='*60}{RESET}")
    print(f"{BOLD}{text}{RESET}")
    print(f"{BOLD}{'='*60}{RESET}\n")

def print_result(name: str, success: bool, details: str = ""):
    status = check_mark(success)
    print(f"  {status} {name}")
    if details and not success:
        print(f"      {YELLOW}→ {details}{RESET}")

def main():
    print_header("FIMI BILDGENERATOR - SETUP CHECK")

    script_dir = Path(__file__).parent
    all_ok = True

    # =========================================================================
    # 1. PYTHON DEPENDENCIES
    # =========================================================================
    print(f"{BOLD}1. Python Dependencies{RESET}")

    # google-genai
    try:
        from google import genai
        print_result("google-genai", True)
    except ImportError:
        print_result("google-genai", False, "pip install google-genai")
        all_ok = False

    # Pillow
    try:
        from PIL import Image
        print_result("Pillow", True)
    except ImportError:
        print_result("Pillow", False, "pip install Pillow")
        all_ok = False

    # pillow-avif-plugin
    try:
        import pillow_avif
        print_result("pillow-avif-plugin", True)
    except ImportError:
        print_result("pillow-avif-plugin", False, "pip install pillow-avif-plugin")
        all_ok = False

    # =========================================================================
    # 2. CREDENTIALS
    # =========================================================================
    print(f"\n{BOLD}2. Google Cloud Credentials{RESET}")

    creds_path = script_dir / "credentials" / "fimi-bilder-credentials.json"

    if creds_path.exists():
        print_result("Credentials-Datei existiert", True)

        # Prüfe Inhalt
        try:
            with open(creds_path) as f:
                creds = json.load(f)

            if creds.get("type") == "service_account":
                print_result("Service Account Format", True)
                print(f"      Email: {creds.get('client_email', 'N/A')}")
                print(f"      Projekt: {creds.get('project_id', 'N/A')}")
            else:
                print_result("Service Account Format", False, "Falscher Credentials-Typ")
                all_ok = False
        except json.JSONDecodeError:
            print_result("Credentials lesbar", False, "JSON-Fehler in Credentials")
            all_ok = False
    else:
        print_result("Credentials-Datei existiert", False,
                    f"Erwartet: {creds_path}")
        all_ok = False

    # =========================================================================
    # 3. VERTEX AI CONNECTION TEST
    # =========================================================================
    print(f"\n{BOLD}3. Vertex AI Verbindung{RESET}")

    if creds_path.exists():
        os.environ["GOOGLE_APPLICATION_CREDENTIALS"] = str(creds_path)

        try:
            from google import genai
            # WICHTIG: gemini-3-pro-image-preview erfordert location="global"!
            client = genai.Client(
                vertexai=True,
                project="fimi-bilder",
                location="global"
            )
            print_result("Client initialisiert (Location: global)", True)

            # Test API Zugriff (ohne Bild zu generieren)
            try:
                # Einfacher Test - Liste verfügbare Modelle
                models = client.models.list()
                print_result("API-Zugriff", True)
            except Exception as e:
                error_msg = str(e)
                if "PERMISSION_DENIED" in error_msg:
                    print_result("API-Zugriff", False,
                        "Service Account braucht 'Vertex AI User' Rolle!")
                    print(f"\n      {YELLOW}LÖSUNG:{RESET}")
                    print(f"      1. Öffne: https://console.cloud.google.com/iam-admin/iam?project=fimi-bilder")
                    print(f"      2. Finde: fimi-bildgenerator@fimi-bilder.iam.gserviceaccount.com")
                    print(f"      3. Klicke 'Bearbeiten' → Rolle hinzufügen: 'Vertex AI User'")
                    print(f"      4. Speichern")
                    all_ok = False
                else:
                    print_result("API-Zugriff", False, error_msg[:80])
                    all_ok = False

        except Exception as e:
            print_result("Client initialisiert", False, str(e)[:80])
            all_ok = False
    else:
        print_result("Vertex AI Test", False, "Credentials fehlen")
        all_ok = False

    # =========================================================================
    # 4. OUTPUT DIRECTORIES
    # =========================================================================
    print(f"\n{BOLD}4. Verzeichnisse{RESET}")

    public_images = script_dir.parent / "public" / "images" / "home"
    output_dir = script_dir / "output"

    if public_images.exists():
        print_result(f"public/images/home/", True)
    else:
        public_images.mkdir(parents=True, exist_ok=True)
        print_result(f"public/images/home/ (erstellt)", True)

    if not output_dir.exists():
        output_dir.mkdir(parents=True, exist_ok=True)
    print_result("image-generator/output/", True)

    # =========================================================================
    # 5. CONFIG
    # =========================================================================
    print(f"\n{BOLD}5. Konfiguration{RESET}")

    config_path = script_dir / "config.json"
    if config_path.exists():
        try:
            with open(config_path) as f:
                config = json.load(f)
            print_result("config.json", True)
            print(f"      Projekt: {config.get('project', {}).get('id', 'N/A')}")
            print(f"      Region: {config.get('project', {}).get('region', 'N/A')}")
        except:
            print_result("config.json", False, "Kann nicht gelesen werden")
            all_ok = False
    else:
        print_result("config.json", False, "Datei fehlt")
        all_ok = False

    # =========================================================================
    # 6. GIT STATUS
    # =========================================================================
    print(f"\n{BOLD}6. Git Repository{RESET}")

    git_dir = script_dir.parent / ".git"
    if git_dir.exists():
        # Prüfe ob HEAD existiert (Repository nicht korrupt)
        head_file = git_dir / "HEAD"
        if head_file.exists():
            print_result("Git Repository", True)
        else:
            print_result("Git Repository", False,
                "Repository korrupt - führe aus: git fetch origin && git reset --hard origin/main")
            all_ok = False
    else:
        print_result("Git Repository", False, "Kein Git-Repository gefunden")
        all_ok = False

    # =========================================================================
    # ZUSAMMENFASSUNG
    # =========================================================================
    print_header("ERGEBNIS")

    if all_ok:
        print(f"  {GREEN}{BOLD}ALLES OK!{RESET} Du kannst Bilder generieren.\n")
        print(f"  Nächster Schritt:")
        print(f"  {BOLD}python3 generate_single.py{RESET}\n")
        return 0
    else:
        print(f"  {RED}{BOLD}PROBLEME GEFUNDEN{RESET} - Bitte behebe die Fehler oben.\n")
        print(f"  Schnellfix für Dependencies:")
        print(f"  {BOLD}pip install google-genai Pillow pillow-avif-plugin{RESET}\n")
        return 1


if __name__ == "__main__":
    sys.exit(main())
