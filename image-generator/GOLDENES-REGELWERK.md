# FIMI Bildgenerator - Goldenes Regelwerk
**Version:** 1.0
**Letzte Aktualisierung:** 2025-12-09
**Status:** In Bearbeitung

---

## MISSION

Ersetze ALLE Stock-Bilder auf der FIMI Website durch hochwertige, KI-generierte Bilder, die aussehen wie professionelle Unternehmensfotos einer echten deutschen Gebäudereinigungsfirma.

---

## TECHNOLOGIE

| Was | Wert |
|-----|------|
| **Modell** | `gemini-3-pro-image-preview` (Nano Banana Pro) |
| **Auflösung** | 4K (maximale Qualität, dann skalieren) |
| **Output-Formate** | AVIF (primär) + WebP (fallback) |
| **KEIN JPG/PNG** | Originale werden nach Konvertierung GELÖSCHT |
| **API** | Google Cloud Vertex AI |
| **Projekt-ID** | `fimi-bilder` |
| **Guthaben** | $300 (91 Tage gültig ab 09.12.2025) |

---

## ABSOLUTE REGELN (NIEMALS BRECHEN)

### 1. KEINE SHOTLIST-ABHÄNGIGKEIT
```
❌ FALSCH: Shotlist lesen und Bilder daraus generieren
✅ RICHTIG: Jede Seite SELBST analysieren (TSX/CSS lesen)
```

Die Shotlist ist nur eine REFERENZ. Du MUSST:
- Die tatsächliche `.tsx` Datei lesen
- Alle `<Image>` und `<img>` Tags finden
- Exakte Größen aus dem Code ermitteln
- Den Kontext verstehen (Hero? Card? Thumbnail?)

### 2. SEITE-FÜR-SEITE MANUELL
```
❌ FALSCH: Automatisches Batch-Processing
✅ RICHTIG: Jedes Bild einzeln generieren, prüfen, freigeben
```

### 3. QUALITÄT VOR GESCHWINDIGKEIT
```
❌ FALSCH: Schnell viele Bilder generieren
✅ RICHTIG: Jedes Bild muss Premium-Qualität haben
```

### 4. AUTHENTIZITÄT
```
❌ FALSCH: Generische Stock-Foto-Ästhetik
✅ RICHTIG: Echte deutsche Unternehmensfotos
```

---

## FIMI BRAND IDENTITY

### Farben
```
PRIMARY:    #012956 (Deep Navy Blue)
SECONDARY:  #109387 (Türkis/Teal)
ACCENT:     #01203d (Darker Navy)
WHITE:      #FFFFFF
GRAY:       #f8f9fa (Light Background)
```

### Logo-Dateien
```
/public/FIMI-LOGO/
├── FIMI-Logo.png                          ← Original (Navy auf Weiß)
├── FIMI-LOGO_Weiße-Schrift_Transparent.png ← Weiß (für dunkle Kleidung)
├── FIMI-Logo_Transparent.png              ← Transparent
└── FIMI-Logo_FUER-Webseite.png            ← Web-optimiert
```

### Logo-Anwendung auf Kleidung
```
DUNKLE KLEIDUNG (Navy, Schwarz, Dunkelgrau):
└── Weißes Logo verwenden

HELLE KLEIDUNG (Weiß, Hellgrau, Beige):
└── Original Navy Logo verwenden

WARNWESTEN:
└── Navy oder Schwarzes Logo
```

---

## ARBEITSKLEIDUNG - ENGELBERT STRAUSS STYLE

### Grundprinzip
Die Kleidung soll aussehen wie von einem deutschen Premium-Workwear-Hersteller (Engelbert Strauss, Kübler, BP) mit individueller FIMI-Bedruckung.

### Pro Service-Typ

#### UNTERHALTSREINIGUNG / BÜROREINIGUNG
```
- Polo-Shirt (Navy oder Weiß)
- Logo: Brust links (klein) + Rücken (groß)
- Dunkle Stoffhose (keine Jeans)
- Geschlossene Schuhe (sauber)
- Dienstausweis mit Lanyard
```

#### FENSTERREINIGUNG
```
- Softshell-Jacke (Navy) oder T-Shirt
- Logo: Schulter + Rücken
- Arbeitshose mit Stretch
- Werkzeuggürtel für Abzieher
- Rutschfeste Schuhe
```

#### INDUSTRIEREINIGUNG / HALLENREINIGUNG
```
- Arbeits-Overall ODER Jacke + Bundhose
- Farbe: Navy mit Reflektorstreifen
- Logo: Rücken groß + Brust
- Sicherheitsschuhe S3
- Bei Bedarf: Schutzbrille, Handschuhe
```

#### BAUREINIGUNG
```
- Robuste Latzhose oder Overall
- Sicherheitshelm (weiß mit FIMI Logo)
- Warnweste Klasse 2 mit Logo
- S3 Sicherheitsschuhe
- Arbeitshandschuhe
```

#### WINTERDIENST
```
- Wetterfeste Winterjacke (Navy)
- Reflektorstreifen (EN ISO 20471)
- Logo: Rücken + Schulter
- Thermohose
- Gefütterte Winterstiefel
- Handschuhe
```

#### HAUSMEISTERSERVICE
```
- Cargo-Arbeitshose
- Fleecejacke oder Weste (Navy)
- Werkzeuggürtel
- Logo: Brust + Rücken
- Robuste Arbeitsschuhe
```

### Logo-Platzierung Details
```
RÜCKEN:     25-30cm breit, mittig, oberer Rücken
            "FIMI" + Icon + "GEBÄUDEREINIGUNG"

BRUST:      8-10cm, links, Herzhöhe
            Nur Icon + "FIMI"

SCHULTER:   5-8cm, rechte Schulter
            Nur Icon

DIENSTAUSWEIS:
            FIMI Logo oben
            Foto (unscharf/Silhouette im generierten Bild)
            Name nicht lesbar
            Abteilung: "Reinigungsteam" o.ä.
```

---

## BILDQUALITÄT - CHECKLISTE

Jedes Bild MUSS diese Kriterien erfüllen:

### Anatomie
- [ ] Korrekte Anzahl Finger (5 pro Hand)
- [ ] Proportionen stimmen
- [ ] Gesichter nicht verzerrt
- [ ] Natürliche Körperhaltung

### Räume & Umgebung
- [ ] Realistische deutsche Architektur
- [ ] Keine unmöglichen Perspektiven
- [ ] Konsistente Beleuchtung
- [ ] Keine schwebenden Objekte

### Branding
- [ ] Logo lesbar (nicht verschmiert)
- [ ] Richtige Farbe (Navy oder Weiß je nach Untergrund)
- [ ] Platzierung korrekt
- [ ] Kleidungsstil passend zum Service

### Technisch
- [ ] Scharf (kein Blur außer gewollte Tiefenschärfe)
- [ ] Keine AI-Artefakte
- [ ] Keine seltsamen Texturen
- [ ] Konsistente Beleuchtungsrichtung

### Authentizität
- [ ] Sieht aus wie echtes Unternehmensfoto
- [ ] KEINE Stock-Photo-Ästhetik
- [ ] Deutsche Umgebung erkennbar
- [ ] Professionelle Bildkomposition

---

## WORKFLOW PRO SEITE

### Phase 1: ANALYSE
```bash
1. Lese die page.tsx der Seite
2. Finde ALLE Image-Komponenten
3. Identifiziere:
   - Bildgrößen (width/height oder CSS)
   - Seitenverhältnisse
   - Kontext (Hero, Card, Background, etc.)
   - Alt-Text (gibt Hinweis auf Inhalt)
4. Erstelle Liste aller benötigten Bilder
```

### Phase 2: PROMPT-ERSTELLUNG
```
Für jedes Bild:
1. Master-Style (siehe unten)
2. Service-spezifische Kleidung
3. Szenen-Beschreibung
4. Technische Parameter (Aspect Ratio)
```

### Phase 3: GENERIERUNG
```
1. API-Aufruf an Nano Banana Pro
2. 4K Auflösung
3. Mit Logo-Referenz wenn Personen im Bild
4. Warten auf Ergebnis (~10s)
```

### Phase 4: QUALITÄTSPRÜFUNG
```
1. Bild anschauen (Read Tool)
2. Checkliste durchgehen
3. Bei Problemen: neu generieren (max 3 Versuche)
4. Bei wiederholtem Scheitern: Prompt anpassen
```

### Phase 5: KONVERTIERUNG
```bash
# 4K Original zu AVIF (verschiedene Größen)
sharp input.png --resize 1920 --format avif --quality 80 -o 1920w.avif
sharp input.png --resize 1440 --format avif --quality 80 -o 1440w.avif
sharp input.png --resize 1024 --format avif --quality 80 -o 1024w.avif
sharp input.png --resize 768 --format avif --quality 80 -o 768w.avif
sharp input.png --resize 384 --format avif --quality 80 -o 384w.avif

# Gleiche Größen als WebP (Fallback)
sharp input.png --resize 1920 --format webp --quality 80 -o 1920w.webp
# ... etc

# Original LÖSCHEN
rm input.png
```

### Phase 6: INTEGRATION
```tsx
// Ersetze alte Image-Komponente
<picture>
  <source
    type="image/avif"
    srcSet="/images/[seite]/[bild]/384w.avif 384w,
            /images/[seite]/[bild]/768w.avif 768w,
            /images/[seite]/[bild]/1024w.avif 1024w,
            /images/[seite]/[bild]/1440w.avif 1440w,
            /images/[seite]/[bild]/1920w.avif 1920w"
    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
  />
  <source
    type="image/webp"
    srcSet="/images/[seite]/[bild]/384w.webp 384w,
            /images/[seite]/[bild]/768w.webp 768w,
            /images/[seite]/[bild]/1024w.webp 1024w,
            /images/[seite]/[bild]/1440w.webp 1440w,
            /images/[seite]/[bild]/1920w.webp 1920w"
    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
  />
  <img
    src="/images/[seite]/[bild]/1920w.webp"
    alt="[Beschreibender Alt-Text]"
    loading="lazy"
    className="..."
  />
</picture>
```

### Phase 7: COMMIT & PUSH
```bash
git add .
git commit -m "feat(images): [Seitenname] - [X] Bilder generiert

- [Bild 1]: [Kurzbeschreibung]
- [Bild 2]: [Kurzbeschreibung]
- Format: AVIF + WebP, responsive

🤖 Generated with Claude Code"
git push
```

### Phase 8: USER-REVIEW
```
- User prüft auf Vercel Preview
- Feedback sammeln
- Bei Bedarf: einzelne Bilder neu generieren
- Erst wenn User zufrieden: nächste Seite
```

---

## PSYCHOLOGIE & MARKETING BEST PRACTICES

### Vertrauensbildung durch Bilder
```
1. AUTHENTIZITÄT
   - Echte Arbeitsszenen (keine gestellten Posen)
   - Natürliche Gesichtsausdrücke
   - Realistische Umgebungen (deutsche Architektur)
   - Sichtbare Kompetenz durch professionelle Ausrüstung

2. EMOTIONALE VERBINDUNG
   - Blickkontakt mit Kamera erzeugt Vertrauen
   - Lächelnde, aber professionelle Mitarbeiter
   - Saubere, ordentliche Ergebnisse zeigen
   - Vorher/Nachher implizieren (strahlende Sauberkeit)

3. KOMPETENZ-SIGNALE
   - Hochwertige Arbeitskleidung (Engelbert Strauss Niveau)
   - Professionelle Ausrüstung sichtbar (Kärcher, etc.)
   - Konzentrierte, fokussierte Arbeitshaltung
   - Teamarbeit zeigen = größere Kapazität

4. PREMIUM-POSITIONIERUNG
   - Keine "Budget"-Ästhetik
   - Hochwertige Beleuchtung und Komposition
   - Moderne Gebäude und Einrichtungen
   - Deutsche Qualitätsstandards sichtbar
```

### Psychologische Trigger
```
SICHERHEIT:      Uniformierte, identifizierbare Mitarbeiter
KOMPETENZ:       Professionelle Ausrüstung und Technik
ZUVERLÄSSIGKEIT: Konsistente Markenidentität
NÄHE:            Deutsche Umgebung, lokale Authentizität
QUALITÄT:        Premium-Materialien, saubere Ergebnisse
```

### Marketing-Grundsätze
```
1. Zielgruppe im Fokus:
   - B2B Entscheider (Facility Manager, Geschäftsführer)
   - Suchen: Zuverlässigkeit, Professionalität, Qualität

2. Differenzierung:
   - NICHT wie Stock-Fotos aussehen
   - Deutsche Firma = deutsche Qualität
   - Individuell = nicht austauschbar

3. Konsistenz:
   - Gleiche Farbpalette durch alle Bilder
   - Gleiche Kleidungsstil
   - Gleiche Bildsprache/Stimmung
```

---

## NANO BANANA PRO - PROMPTING BEST PRACTICES

### Grundprinzipien
```
1. NATÜRLICHE SPRACHE
   - Schreibe wie ein Briefing für einen Fotografen
   - Kein Keyword-Stuffing
   - Fließende Sätze statt Stichpunkte im Prompt

2. BESCHREIBEND, NICHT WIEDERHOLEND
   - Jedes Detail nur einmal erwähnen
   - Qualität durch Präzision, nicht Wiederholung
   - "extremely detailed" nur einmal, nicht 5x

3. KONTEXT VOR DETAILS
   - Erst die Szene beschreiben
   - Dann Personen/Objekte
   - Dann technische Aspekte (Beleuchtung, Stil)

4. REFERENZBILDER NUTZEN
   - Bis zu 14 Referenzbilder möglich
   - Logo-Dateien als Referenz für Branding
   - Konsistente Charaktere durch Personenreferenz
```

### Prompt-Struktur
```
[SZENE] + [SUBJEKT] + [DETAILS] + [STIL] + [TECHNISCH]

Beispiel:
"A professional cleaning team working in a modern German office building.
Two workers in navy blue Engelbert Strauss workwear with FIMI logo on back
are cleaning glass partitions. Equipment includes Unger professional squeegees.
Natural daylight from large windows, corporate photography style,
sharp focus, 4K resolution."
```

### Was vermeiden
```
❌ "4K, 8K, ultra HD, extremely detailed, masterpiece" (Spam)
❌ Widersprüchliche Anweisungen
❌ Zu viele Elemente in einer Szene
❌ Unrealistische Szenarien
❌ Negative Prompts am Anfang (erst am Ende)
```

### Referenzbilder-Strategie
```
LOGO-KONSISTENZ:
- /public/FIMI-LOGO/FIMI-LOGO_Weiße-Schrift_Transparent.png
  → Für Branding auf dunkler Kleidung

CHARAKTER-KONSISTENZ:
- Bis zu 5 Personen können konsistent gehalten werden
- Erst generieren, dann als Referenz für weitere Bilder nutzen

STIL-KONSISTENZ:
- Erstes gutes Bild als Stilreferenz speichern
- Für weitere Bilder derselben Seite verwenden
```

---

## GLOBALE / WIEDERVERWENDBARE BILDER

### Konzept
Manche Bilder können auf mehreren Seiten verwendet werden, um Konsistenz zu gewährleisten und Kosten zu sparen.

### Kandidaten für globale Bilder
```
KONTAKTFORMULAR-BEREICH:
- Freundlicher Mitarbeiter am Telefon/Computer
- Kann auf: Kontakt, Karriere, alle Service-Seiten

TEAM-BILD:
- Gruppenfoto vor FIMI-Fahrzeug
- Kann auf: Über uns, Startseite, Referenzen

CTA-HINTERGRUND:
- Abstraktes Sauberkeits-Bild (glänzende Oberfläche)
- Kann auf: Allen Seiten als CTA-Hintergrund

QUALITÄTS-SIEGEL BEREICH:
- Professionelle Ausrüstung/Maschinen
- Kann auf: Leistungen-Übersicht, Über uns
```

### Globale Bilder Tracker
| Bild-ID | Beschreibung | Verwendet auf | Status |
|---------|--------------|---------------|--------|
| global-contact-01 | Mitarbeiter am Telefon | Kontakt, Footer | ⬜ |
| global-team-01 | Teamfoto vor Fahrzeug | Über uns, Start | ⬜ |
| global-cta-01 | Saubere Oberfläche abstrakt | Alle CTAs | ⬜ |
| global-equipment-01 | Profi-Ausrüstung | Leistungen | ⬜ |

---

## LIEFERANTEN & AUSRÜSTUNG

### Warum echte Marken?
```
- Erhöht Glaubwürdigkeit (bekannte Qualitätsmarken)
- Zeigt professionelle Ausstattung
- B2B-Kunden erkennen Profi-Equipment
- Differenziert von "Eimer und Lappen" Image
```

### FIMI Partner-Marken für Bilder

#### Reinigungsmaschinen
```
KÄRCHER (Hauptmarke)
- Scheuersaugmaschinen
- Hochdruckreiniger
- Dampfreiniger
- Erkennbar: Gelb/Schwarz Design

HAKO
- Kehrmaschinen
- Scheuersaugmaschinen
- Erkennbar: Grün/Weiß

NUMATIC (Henry)
- Staubsauger
- Erkennbar: Rotes "Gesicht"
```

#### Reinigungswerkzeuge
```
VERMOP
- Wischsysteme
- Mopps und Halter
- Reinigungswagen

UNGER
- Fensterreinigung
- Abzieher
- Teleskopstangen
- Erkennbar: Grün

VILEDA PROFESSIONAL
- Mikrofasertücher
- Moppsysteme
```

#### Chemie & Hygiene
```
DR. SCHNELL
- Reinigungsmittel
- Desinfektionsmittel

ECOLAB
- Professionelle Reinigungschemie
- Hygienesysteme

HAGLEITNER
- Seifenspender
- Hygienesysteme
```

#### Winterdienst
```
STIHL
- Laubbläser
- Motorsägen (für Grünpflege)
- Erkennbar: Orange

KÄRCHER
- Hochdruckreiniger
- Kehrmaschinen
```

### Anwendung in Prompts
```
Statt: "cleaning machine"
Besser: "yellow Kärcher professional floor scrubber"

Statt: "vacuum cleaner"
Besser: "red Numatic Henry commercial vacuum"

Statt: "window cleaning tools"
Besser: "green Unger professional squeegee and extension pole"
```

---

## MASTER STYLE PROMPT

Dieser Prompt wird JEDEM Bild vorangestellt:

```
FIMI Corporate Photography Style - Premium German Cleaning Company

BRAND IDENTITY:
- Company: FIMI Gebäudereinigung (Professional cleaning services)
- Primary Color: Deep navy blue (#012956)
- Accent Color: Teal (#109387)
- Mood: Trustworthy, competent, premium quality, authentically German

PHOTOGRAPHY STYLE:
- Style: High-end commercial corporate photography
- Lighting: Bright natural daylight, soft professional shadows
- Focus: Sharp with subtle depth of field
- Perspective: Slightly elevated angle, professional framing
- Post-processing: Clean, vibrant but not oversaturated

CRITICAL REQUIREMENTS:
- NO stock photo aesthetic
- NO generic/international look
- MUST look like authentic German company photos
- MUST be photorealistic (not illustration)
- Clothing must look like custom-branded Engelbert Strauss workwear
- FIMI logo clearly visible on uniforms where specified

AVOID:
- AI artifacts (extra fingers, distorted faces)
- Unrealistic lighting or shadows
- Generic office environments
- American-style buildings or interiors
- Overly posed/staged looking shots
```

---

## FORTSCHRITT

### Legende
```
⬜ Nicht begonnen
🟡 In Bearbeitung
✅ Fertig & Approved
❌ Probleme
```

### Seiten-Status

#### Hauptseiten
| Seite | Status | Bilder | Notizen |
|-------|--------|--------|---------|
| Startseite | ⬜ | 0/? | |
| Über uns | ⬜ | 0/? | |
| Kontakt | ⬜ | 0/? | |
| Karriere | ⬜ | 0/? | |
| Referenzen | ⬜ | 0/? | |

#### Leistungsseiten
| Seite | Status | Bilder | Notizen |
|-------|--------|--------|---------|
| Leistungen (Übersicht) | ⬜ | 0/? | |
| Unterhaltsreinigung | ⬜ | 0/? | |
| Büroreinigung | ⬜ | 0/? | |
| Fensterreinigung | ⬜ | 0/? | |
| Industriereinigung | ⬜ | 0/? | |
| Hallenreinigung | ⬜ | 0/? | |
| Maschinenreinigung | ⬜ | 0/? | |
| Tiefgaragenreinigung | ⬜ | 0/? | |
| Parkplatzreinigung | ⬜ | 0/? | |
| Fassadenreinigung | ⬜ | 0/? | |
| Baureinigung | ⬜ | 0/? | |
| Sonderreinigung | ⬜ | 0/? | |
| Sonderleistungen | ⬜ | 0/? | |
| Winterdienst | ⬜ | 0/? | |
| Außenanlagenpflege | ⬜ | 0/? | |
| Hausmeisterservice | ⬜ | 0/? | |
| Facility Management | ⬜ | 0/? | |
| Beschaffungsmanagement | ⬜ | 0/? | |

#### Branchenseiten
| Seite | Status | Bilder | Notizen |
|-------|--------|--------|---------|
| Branchen (Übersicht) | ⬜ | 0/? | |
| Büro & Verwaltung | ⬜ | 0/? | |
| Industrie & Produktion | ⬜ | 0/? | |
| Gesundheitswesen | ⬜ | 0/? | |
| Einzelhandel | ⬜ | 0/? | |
| Gastronomie & Hotel | ⬜ | 0/? | |
| Bildung & Schulen | ⬜ | 0/? | |
| Fitness & Sport | ⬜ | 0/? | |
| Logistik & Lager | ⬜ | 0/? | |
| Wohnungswirtschaft | ⬜ | 0/? | |
| Öffentliche Einrichtungen | ⬜ | 0/? | |
| Banken & Versicherungen | ⬜ | 0/? | |
| Automotive | ⬜ | 0/? | |

---

## API-KONFIGURATION

### Credentials
```
Projekt-ID:        fimi-bilder
Region:            us-central1
Service-Account:   fimi-bildgenerator@fimi-bilder.iam.gserviceaccount.com
Credentials-File:  ./credentials/fimi-bilder-credentials.json
```

### Umgebungsvariablen
Siehe `.env.local` im Hauptprojekt.

### Rate Limits
```
Nano Banana Pro:   ~10 Requests/Minute
Empfohlene Pause:  8-10 Sekunden zwischen Bildern
```

### Kosten
```
4K Bild:           ~$0.24
Geschätzt gesamt:  ~$100-150 (inkl. Regenerationen)
Verfügbar:         $300
```

---

## SCHNELLSTART FÜR NEUE SESSION

```
1. Dieses Dokument lesen (du bist hier)
2. Fortschritts-Tabelle oben prüfen
3. Nächste unbearbeitete Seite finden
4. page.tsx dieser Seite lesen
5. Alle Bilder identifizieren
6. Generierung starten (Bild für Bild)
7. Nach jeder Seite: Commit & User-Review
```

---

## KONTAKT & SUPPORT

Bei Fragen zum Projekt:
- Dieses Dokument konsultieren
- config.json für technische Details
- .env.local für Credentials
