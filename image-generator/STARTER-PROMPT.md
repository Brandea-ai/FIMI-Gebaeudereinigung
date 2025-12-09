# FIMI Bildgenerator - Starter Prompt

## WICHTIG: Modell-Information

| Parameter | Wert |
|-----------|------|
| **Modell** | `gemini-3-pro-image-preview` |
| **Location** | `global` (NICHT us-central1!) |
| **Projekt** | `fimi-bilder` |

**Siehe auch:** `!MODEL-INFO.md` für Details

---

## KRITISCHE REGELN (VOR JEDER SESSION LESEN!)

### Lieferanten & Marken
- **LIEFERANTEN.md** enthält vollständige Übersicht was jeder Hersteller produziert!
- Kärcher macht KEINE Reinigungswagen → VERMOP verwenden!
- Kärcher macht KEINE Einscheibenmaschinen → CLEANFIX/COLUMBUS verwenden!
- Geräte behalten ORIGINALFARBEN (Kärcher=gelb, Unger=grün, etc.)

### 4-Farben-Prinzip für Mops
- BLAU = Büro (NICHT GRÜN!)
- ROT = Sanitär
- GELB = Küche
- GRÜN = Krankenhaus

### Logo auf Kleidung
- FIMI Logo MUSS auf linker Brustseite sichtbar sein!

### CTA-Bilder
- DIREKTER BLICKKONTAKT zur Kamera erforderlich!

---

## Schnellstart für neue Session

Kopiere diesen Text in einen neuen Claude Code Chat:

---

```
FIMI Bildgenerator Session starten:

1. Lies zuerst die Modell-Info:
/Users/brandea/Desktop/FIMI-Gebaeudereinigung/image-generator/!MODEL-INFO.md

2. Lies die Lieferanten-Übersicht (WICHTIG!):
/Users/brandea/Desktop/FIMI-Gebaeudereinigung/image-generator/LIEFERANTEN.md

3. Lies das Regelwerk:
/Users/brandea/Desktop/FIMI-Gebaeudereinigung/image-generator/GOLDENES-REGELWERK.md

4. Führe den Setup-Check aus:
cd /Users/brandea/Desktop/FIMI-Gebaeudereinigung/image-generator && python3 setup_check.py

5. Falls alles OK: Prüfe welche Seite als nächstes Bilder braucht und generiere sie.
   Falls Fehler: Behebe sie gemäß QUICKSTART im Regelwerk.

6. Nach Generierung: git add, commit, push

WICHTIG:
- Nutze Modell "gemini-3-pro-image-preview" mit Location "global"!
- Kärcher macht KEINE Reinigungswagen (VERMOP!) oder Einscheibenmaschinen (CLEANFIX!)
- Mops im Büro sind BLAU (4-Farben-Prinzip)
- Logo muss auf Kleidung sichtbar sein
```

---

## Bei Problemen

### Problem: "404 NOT_FOUND" bei Bildgenerierung
```
Ursache: Falsche Location (us-central1 statt global)
Lösung: location="global" verwenden!

client = genai.Client(
    vertexai=True,
    project="fimi-bilder",
    location="global"  # NICHT us-central1!
)
```

### Problem: "Permission Denied" bei Bildgenerierung
```
Lösung: Service Account braucht "Vertex AI User" Rolle
→ https://console.cloud.google.com/iam-admin/iam?project=fimi-bilder
→ fimi-bildgenerator@fimi-bilder.iam.gserviceaccount.com
→ Rolle "Vertex AI User" hinzufügen
```

### Problem: Git push funktioniert nicht
```
cd /Users/brandea/Desktop/FIMI-Gebaeudereinigung
rm -rf .git
git init
git remote add origin https://github.com/Brandea-ai/FIMI-Gebaeudereinigung.git
git fetch origin
git reset --hard origin/main
```

### Problem: Dependencies fehlen
```
pip install google-genai Pillow pillow-avif-plugin
```

---

## Direkter Befehl für Bildgenerierung

```bash
cd /Users/brandea/Desktop/FIMI-Gebaeudereinigung/image-generator

# Setup prüfen:
python3 setup_check.py

# Fehlende Startseiten-Bilder generieren:
python3 generate_single.py --startseite

# Einzelnes Bild:
python3 generate_single.py --name "bild-name" --prompt "Beschreibung" --ratio "16:9" --output "home"
```
