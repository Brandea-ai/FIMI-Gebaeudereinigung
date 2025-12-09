# FIMI Bildgenerator - Starter Prompt

## Schnellstart für neue Session

Kopiere diesen Text in einen neuen Claude Code Chat:

---

```
FIMI Bildgenerator Session starten:

1. Lies das Regelwerk:
/Users/brandea/Desktop/FIMI-Gebaeudereinigung/image-generator/GOLDENES-REGELWERK.md

2. Führe den Setup-Check aus:
cd /Users/brandea/Desktop/FIMI-Gebaeudereinigung/image-generator && python3 setup_check.py

3. Falls alles OK: Prüfe welche Seite als nächstes Bilder braucht und generiere sie.
   Falls Fehler: Behebe sie gemäß QUICKSTART im Regelwerk.

4. Nach Generierung: git add, commit, push
```

---

## Bei Problemen

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
