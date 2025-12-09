# WICHTIG: Korrektes Modell für Bildgenerierung

**LIES DIES ZUERST!**

---

## Das richtige Modell

| Parameter | Wert |
|-----------|------|
| **Modell-ID** | `gemini-3-pro-image-preview` |
| **Location** | `global` |
| **Projekt** | `fimi-bilder` |

---

## KRITISCH: Location muss "global" sein!

Das Modell `gemini-3-pro-image-preview` funktioniert **NUR** mit `location="global"`.

**FALSCH:**
```python
client = genai.Client(
    vertexai=True,
    project="fimi-bilder",
    location="us-central1"  # FALSCH! 404-Fehler!
)
```

**RICHTIG:**
```python
client = genai.Client(
    vertexai=True,
    project="fimi-bilder",
    location="global"  # RICHTIG!
)
```

---

## Unterstützte Seitenverhältnisse

`1:1`, `3:2`, `2:3`, `3:4`, `4:3`, `4:5`, `5:4`, `9:16`, `16:9`, `21:9`

---

## Bildgenerierung Code-Beispiel

```python
from google import genai
from google.genai import types
from PIL import Image
from io import BytesIO

# Client mit globalem Endpoint
client = genai.Client(
    vertexai=True,
    project="fimi-bilder",
    location="global"
)

# Bild generieren
response = client.models.generate_content(
    model="gemini-3-pro-image-preview",
    contents="Dein Prompt hier...",
    config=types.GenerateContentConfig(
        response_modalities=["IMAGE", "TEXT"],
    )
)

# Bild extrahieren
for part in response.candidates[0].content.parts:
    if hasattr(part, 'inline_data') and part.inline_data:
        img = Image.open(BytesIO(part.inline_data.data))
        img.save("output.png")
        break
```

---

## Dateien die dieses Modell verwenden

- `generate_single.py` - Hauptgenerator
- `generate.py` - Batch-Generator (Legacy)
- `setup_check.py` - Setup-Prüfung
- `config.json` - Konfiguration

**Stand:** 2025-12-09
