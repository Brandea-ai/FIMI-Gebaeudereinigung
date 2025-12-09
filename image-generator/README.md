# FIMI Bildgenerator

KI-gestützte Bildgenerierung für die FIMI Gebäudereinigung Website.

---

## WICHTIG: Goldenes Regelwerk

**LIES ZUERST:** [GOLDENES-REGELWERK.md](./GOLDENES-REGELWERK.md)

Dort findest du:
- Alle Regeln und Standards
- Arbeitskleidung pro Service-Typ (Engelbert Strauss Style)
- Logo-Platzierung auf Uniformen
- Qualitätskriterien-Checkliste
- Workflow-Beschreibung (Seite für Seite)
- Fortschritts-Tracking aller Seiten

---

## Schnellstart für neue Session

```bash
# 1. Regelwerk lesen
cat GOLDENES-REGELWERK.md

# 2. Fortschritts-Tabelle prüfen (im Regelwerk unten)

# 3. Nächste unbearbeitete Seite finden

# 4. page.tsx dieser Seite lesen (NICHT Shotlist!)

# 5. Bilder generieren (manuell, Bild für Bild)
```

---

## Technologie

| Was | Wert |
|-----|------|
| **Modell** | Nano Banana Pro (`gemini-3-pro-image-preview`) |
| **Auflösung** | 4K (dann responsive skalieren) |
| **Output** | AVIF (primär) + WebP (fallback) |
| **KEIN JPG** | Originale werden nach Konvertierung gelöscht |
| **API** | Google Cloud Vertex AI |
| **Projekt** | `fimi-bilder` |
| **Guthaben** | $300 (91 Tage ab 09.12.2025) |

---

## Ordnerstruktur

```
image-generator/
├── GOLDENES-REGELWERK.md   ← HAUPTDOKUMENTATION (immer zuerst lesen!)
├── README.md               ← Diese Datei
├── config.json             ← Technische Konfiguration
├── requirements.txt        ← Python Dependencies
├── credentials/            ← Google Cloud Keys
│   └── fimi-bilder-credentials.json  (NICHT COMMITTEN!)
└── output/
    └── optimized/          ← Fertige AVIF + WebP Bilder
```

---

## Workflow (Kurzfassung)

1. **Seite analysieren** → TSX lesen (NICHT Shotlist!)
2. **Bilder identifizieren** → Größen, Kontext, Seitenverhältnis
3. **Prompt erstellen** → Master Style + Service-spezifisch
4. **Generieren** → Nano Banana Pro 4K
5. **Qualität prüfen** → Manuell (Checkliste im Regelwerk)
6. **Konvertieren** → AVIF + WebP, responsive Größen
7. **Original löschen** → Kein JPG/PNG behalten
8. **In Website integrieren** → `<picture>` mit srcset
9. **Committen** → Git Push
10. **User-Review** → Feedback, ggf. neu generieren

**Details:** Siehe [GOLDENES-REGELWERK.md](./GOLDENES-REGELWERK.md)

---

## Setup (einmalig)

### 1. Credentials

Die JSON-Datei liegt bereits in:
```
./credentials/fimi-bilder-credentials.json
```

### 2. Dependencies

```bash
cd image-generator
pip install -r requirements.txt
```

### 3. Umgebungsvariable

```bash
export GOOGLE_APPLICATION_CREDENTIALS="./credentials/fimi-bilder-credentials.json"
```

---

## Kosten

| Was | Preis |
|-----|-------|
| 1 Bild (4K) | ~$0.24 |
| Geschätzt gesamt | ~$100-150 |
| Verfügbar | $300 |

Mehr als genug Budget vorhanden.
