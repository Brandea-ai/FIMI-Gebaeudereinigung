# FIMI Gebäudereinigung - Website Masterplan

## Projektübersicht

**Ziel:** Komplette Überarbeitung aller Unterseiten auf das Premium-Niveau der Startseite
**Ansatz:** Seite für Seite, um Token-Limits zu managen und Qualität zu sichern
**CI-Farben:** Navy #012956 | Türkis #109387

---

## Architektur-Prinzipien

### Dateistruktur pro Seite
```
app/
├── leistungen/
│   ├── page.tsx                    # Übersichtsseite (alle Leistungen)
│   ├── [slug]/
│   │   └── page.tsx                # Dynamische Einzelseite
│   └── _components/                # Seiten-spezifische Komponenten
│       ├── LeistungenHero.tsx
│       ├── LeistungenGrid.tsx
│       └── LeistungenFilter.tsx
├── branchen/
│   ├── page.tsx
│   ├── [slug]/
│   │   └── page.tsx
│   └── _components/
└── ...
```

### Wiederverwendbare Komponenten
```
components/
├── ui/
│   ├── SectionHeader.tsx           # Einheitliche Überschriften
│   ├── FilterTabs.tsx              # Filter-Komponente
│   ├── ImageCard.tsx               # Bild-Karten
│   ├── StatsBar.tsx                # Statistiken
│   └── TrustBadges.tsx             # Vertrauens-Elemente
├── sections/
│   ├── CTASection.tsx              # Call-to-Action
│   ├── FAQSection.tsx              # FAQ Akkordeon
│   └── RelatedServices.tsx         # Verwandte Leistungen
└── layout/
    ├── Navigation.tsx              # ✅ Fertig
    └── Footer.tsx                  # ✅ Fertig
```

---

## SEO-Strategie

### Keyword-Recherche Perspektive
**Nicht:** "FIMI Gebäudereinigung"
**Sondern:** Was sucht der Kunde?

| Situation | Suchbegriffe |
|-----------|--------------|
| Unzufrieden mit aktueller Reinigung | "Reinigungsfirma wechseln", "bessere Gebäudereinigung" |
| Neue Immobilie/Büro | "Büroreinigung [Stadt]", "Gebäudereinigung Angebot" |
| Ausschreibung | "Gebäudereinigung Ausschreibung", "Reinigungsdienstleister Bayern" |
| Spezifisches Problem | "Fensterreinigung Gewerbe", "Industriereinigung Maschinen" |
| Qualitätssuche | "professionelle Gebäudereinigung", "zertifizierte Reinigungsfirma" |

### SEO-Elemente pro Seite
- Meta Title (max. 60 Zeichen)
- Meta Description (max. 155 Zeichen)
- H1 mit Haupt-Keyword
- H2/H3 mit Long-Tail Keywords
- Alt-Tags für alle Bilder
- Interne Verlinkungen
- Schema.org Markup (LocalBusiness, Service)

---

## Reihenfolge der Bearbeitung

### Phase 1: Übersichtsseiten (Basis)
| # | Seite | Priorität | Aufwand |
|---|-------|-----------|---------|
| 1 | `/leistungen` | HOCH | Mittel |
| 2 | `/branchen` | HOCH | Mittel |
| 3 | `/ueber-uns` | HOCH | Mittel |
| 4 | `/referenzen` | MITTEL | Mittel |

### Phase 2: Leistungen Einzelseiten (18 Seiten)
| # | Leistung | URL |
|---|----------|-----|
| 1 | Unterhaltsreinigung | `/leistungen/unterhaltsreinigung` |
| 2 | Büroreinigung | `/leistungen/bueroreinigung` |
| 3 | Glasreinigung | `/leistungen/glasreinigung` |
| 4 | Fensterreinigung | `/leistungen/fensterreinigung` |
| 5 | Fassadenreinigung | `/leistungen/fassadenreinigung` |
| 6 | Industriereinigung | `/leistungen/industriereinigung` |
| 7 | Hallenreinigung | `/leistungen/hallenreinigung` |
| 8 | Maschinenreinigung | `/leistungen/maschinenreinigung` |
| 9 | Tiefgaragenreinigung | `/leistungen/tiefgaragenreinigung` |
| 10 | Parkplatzreinigung | `/leistungen/parkplatzreinigung` |
| 11 | Facility Management | `/leistungen/facility-management` |
| 12 | Hausmeisterservice | `/leistungen/hausmeisterservice` |
| 13 | Winterdienst | `/leistungen/winterdienst` |
| 14 | Außenanlagenpflege | `/leistungen/aussenanlagenpflege` |
| 15 | Baureinigung | `/leistungen/baureinigung` |
| 16 | Sonderreinigung | `/leistungen/sonderreinigung` |
| 17 | Sonderleistungen | `/leistungen/sonderleistungen` |
| 18 | Beschaffungsmanagement | `/leistungen/beschaffungsmanagement` |

### Phase 3: Branchen Einzelseiten (12 Seiten)
| # | Branche | URL |
|---|---------|-----|
| 1 | Büro & Verwaltung | `/branchen/buero-verwaltung` |
| 2 | Industrie & Produktion | `/branchen/industrie-produktion` |
| 3 | Gesundheitswesen | `/branchen/gesundheitswesen` |
| 4 | Einzelhandel | `/branchen/einzelhandel` |
| 5 | Gastronomie & Hotellerie | `/branchen/gastronomie-hotel` |
| 6 | Bildung & Schulen | `/branchen/bildung-schulen` |
| 7 | Fitness & Sport | `/branchen/fitness-sport` |
| 8 | Logistik & Lager | `/branchen/logistik-lager` |
| 9 | Wohnungswirtschaft | `/branchen/wohnungswirtschaft` |
| 10 | Öffentliche Einrichtungen | `/branchen/oeffentliche-einrichtungen` |
| 11 | Banken & Versicherungen | `/branchen/banken-versicherungen` |
| 12 | Automotive | `/branchen/automotive` |

### Phase 4: Optimierung
- Performance-Optimierung
- Schema.org Markup
- Sitemap generieren
- robots.txt optimieren

---

## Template-Struktur pro Seitentyp

### Leistungen-Einzelseite Template
```
┌─────────────────────────────────────────────────┐
│ HERO (90vh)                                     │
│ - H1 mit Keyword                                │
│ - Subline mit Benefit                           │
│ - CTA Button                                    │
│ - Hero-Bild rechts                              │
└─────────────────────────────────────────────────┘
┌─────────────────────────────────────────────────┐
│ TRUST-BAR                                       │
│ - 4 Stats (Jahre Erfahrung, Kunden, etc.)       │
└─────────────────────────────────────────────────┘
┌─────────────────────────────────────────────────┐
│ VORTEILE-SECTION                                │
│ - 6 Vorteile mit Icons                          │
│ - Bild daneben                                  │
└─────────────────────────────────────────────────┘
┌─────────────────────────────────────────────────┐
│ LEISTUNGSUMFANG                                 │
│ - Was ist enthalten?                            │
│ - Detaillierte Auflistung                       │
└─────────────────────────────────────────────────┘
┌─────────────────────────────────────────────────┐
│ PROZESS / ABLAUF                                │
│ - 4-5 Schritte visualisiert                     │
└─────────────────────────────────────────────────┘
┌─────────────────────────────────────────────────┐
│ FAQ-SECTION                                     │
│ - 5-6 häufige Fragen                            │
│ - SEO-optimierte Antworten                      │
└─────────────────────────────────────────────────┘
┌─────────────────────────────────────────────────┐
│ VERWANDTE LEISTUNGEN                            │
│ - 3-4 ähnliche Services                         │
│ - Interne Verlinkung                            │
└─────────────────────────────────────────────────┘
┌─────────────────────────────────────────────────┐
│ CTA-SECTION                                     │
│ - Kostenfreie Besichtigung                      │
└─────────────────────────────────────────────────┘
```

### Branchen-Einzelseite Template
```
┌─────────────────────────────────────────────────┐
│ HERO (90vh)                                     │
│ - H1: "[Branche] Reinigung"                     │
│ - Branchenspezifische Benefits                  │
│ - Branchen-Bild                                 │
└─────────────────────────────────────────────────┘
┌─────────────────────────────────────────────────┐
│ HERAUSFORDERUNGEN DER BRANCHE                   │
│ - Spezifische Probleme                          │
│ - Wie wir sie lösen                             │
└─────────────────────────────────────────────────┘
┌─────────────────────────────────────────────────┐
│ PASSENDE LEISTUNGEN                             │
│ - Relevante Services für diese Branche          │
│ - Mit Bildern und Links                         │
└─────────────────────────────────────────────────┘
┌─────────────────────────────────────────────────┐
│ REFERENZEN AUS DER BRANCHE                      │
│ - 2-3 Kundenbeispiele                           │
└─────────────────────────────────────────────────┘
┌─────────────────────────────────────────────────┐
│ FAQ BRANCHENSPEZIFISCH                          │
└─────────────────────────────────────────────────┘
┌─────────────────────────────────────────────────┐
│ CTA-SECTION                                     │
└─────────────────────────────────────────────────┘
```

---

## Design-System (aus Startseite übernommen)

### Typografie
- H1: `text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold leading-[1.05]`
- H2: `text-3xl md:text-4xl lg:text-5xl font-bold`
- H3: `text-xl lg:text-2xl font-bold`
- Body: `text-lg font-medium leading-relaxed`
- Small: `text-sm font-semibold`

### Farben
- Navy (Primary): `#012956` → `bg-[#012956]`, `text-[#012956]`
- Türkis (Accent): `#109387` → `bg-[#109387]`, `text-[#109387]`
- Weiß: `white`, `text-white/70` für Sublines
- Grau: `#f8f9fa` für Hintergründe

### Abstände
- Section Padding: `py-20 lg:py-28`
- Container: `max-w-[1800px] mx-auto px-6 lg:px-12 xl:px-20`
- Border Radius: `rounded-[6px]`

### Animationen
- Hover Transform: `group-hover:translate-x-1 transition-transform`
- Hover Scale: `hover:scale-105 transition-transform duration-500`
- Fade In: Custom mit Intersection Observer

### Interaktive Elemente
- Buttons: `bg-[#109387] hover:bg-[#0d7d72] ... rounded-[6px]`
- Cards: `hover:shadow-xl transition-all`
- Links: `hover:text-[#109387] transition-colors`

---

## Arbeitsablauf pro Seite

### 1. Vorbereitung (5 min)
- [ ] Keyword-Recherche für die Seite
- [ ] Wettbewerber-Analyse
- [ ] Content-Struktur planen

### 2. Entwicklung
- [ ] Page.tsx erstellen
- [ ] Komponenten in _components/
- [ ] SEO-Texte schreiben
- [ ] Bilder auswählen (Unsplash)
- [ ] Responsive testen

### 3. Qualitätskontrolle
- [ ] Mobile Ansicht prüfen
- [ ] Links funktionieren
- [ ] Bilder laden
- [ ] SEO-Tags vorhanden

### 4. Deployment
- [ ] Git commit
- [ ] Push & Vercel Deploy
- [ ] Live testen

---

## Token-Management Strategie

### Problem
- Große Seiten = viel Code = Token-Limit

### Lösung
1. **Modulare Komponenten** - Wiederverwendbar, einmal erstellen
2. **Eine Seite pro Session** - Fokus auf Qualität
3. **Kontext-Zusammenfassung** - Bei neuem Chat: kurzes Briefing
4. **Lib-Dateien für Daten** - Wie `blog-data.ts`

### Daten-Dateien erstellen
```
lib/
├── blog-data.ts          # ✅ Existiert
├── leistungen-data.ts    # NEU - Alle 18 Leistungen
├── branchen-data.ts      # NEU - Alle 12 Branchen
├── referenzen-data.ts    # NEU - Referenz-Projekte
└── faq-data.ts           # NEU - FAQ pro Thema
```

---

## Nächste Schritte

### Sofort starten mit:
1. **`lib/leistungen-data.ts`** - Alle 18 Leistungen mit SEO-Content
2. **`/leistungen` Übersichtsseite** - Mit Filter, Grid, Bildern
3. **Template für Einzelseiten** - Wiederverwendbar

### Befehl für nächste Session:
```
"Wir arbeiten am FIMI Website Redesign.
Starte mit: [Seitenname]
CI: Navy #012956, Türkis #109387
Referenz: Startseite-Design übernehmen
Siehe: MASTERPLAN-WEBSITE-REDESIGN.md"
```

---

## Fortschritt Tracker

| Seite | Status | Datum |
|-------|--------|-------|
| Startseite | ✅ Fertig | Nov 2024 |
| Kontakt | ✅ Fertig | Nov 2024 |
| Navigation | ✅ Fertig | Nov 2024 |
| Footer | ✅ Fertig | Nov 2024 |
| Neuigkeiten | ✅ Fertig | Nov 2024 |
| /leistungen | ⏳ Ausstehend | - |
| /branchen | ⏳ Ausstehend | - |
| /ueber-uns | ⏳ Ausstehend | - |
| /referenzen | ⏳ Ausstehend | - |
| 18x Leistungen-Einzelseiten | ⏳ Ausstehend | - |
| 12x Branchen-Einzelseiten | ⏳ Ausstehend | - |

---

**Gesamtumfang:** ~35 Seiten
**Geschätzte Sessions:** 10-15 (je nach Komplexität)
**Nächster Schritt:** `/leistungen` Übersichtsseite
