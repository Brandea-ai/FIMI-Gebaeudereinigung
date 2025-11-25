# FIMI Gebäudereinigung - Design & Content Standards

**Stand:** November 2025
**Website:** https://fimi-service.de

---

## CI-Farben

| Farbe | Hex | Rolle | Verwendung |
|-------|-----|-------|------------|
| **Türkis** | `#109387` | PRIMARY | Headlines, Icons, Titel, primäre CTAs, Akzente |
| **Navy** | `#012956` | SECONDARY | Hintergründe, sekundäre Buttons, Stats-Bars, Flächen |

### Farbregeln

- **Türkis (#109387)** = Primärfarbe für alle Akzente
- **Navy (#012956)** = Nur für Hintergründe/Flächen, NICHT im Fließtext
- **Keine Mischung** von Grün und Blau im selben Textelement
- Icon + Titel = Immer dieselbe Farbe (Türkis)

### Erweiterte Farbpalette

```css
--fimi-turquoise: #109387;
--fimi-turquoise-hover: #0d7d72;
--fimi-navy: #012956;
--fimi-navy-hover: #01203d;
```

---

## Typografie

### Font Weights

| Element | Weight | Klasse |
|---------|--------|--------|
| Headlines (H1-H3) | Bold | `font-bold` |
| Body-Text | Semi-Bold | `font-semibold` |
| Labels/Subtitles | Semi-Bold | `font-semibold` |
| Buttons/Links | Bold | `font-bold` |

**Wichtig:** Kein `font-normal` verwenden - alles mindestens `font-semibold` für besseren Kontrast.

### Text-Farben

| Element | Farbe | Klasse |
|---------|-------|--------|
| Headlines | Türkis | `text-[#109387]` |
| Body-Text | Dunkelgrau | `text-gray-700` |
| Subtitles/Labels | Grau | `text-gray-500` |
| Auf dunklem Hintergrund | Weiß | `text-white` |
| Sekundär auf dunkel | Weiß/70% | `text-white/70` |

---

## UI-Komponenten

### Buttons

**Primär (Türkis):**
```jsx
className="bg-[#109387] hover:bg-[#0d7d72] text-white font-bold px-8 py-4 rounded-[6px]"
```

**Sekundär (Navy):**
```jsx
className="bg-[#012956] hover:bg-[#01203d] text-white font-bold px-6 py-3 rounded-[6px]"
```

**Outline (Türkis):**
```jsx
className="border-2 border-[#109387] text-[#109387] font-bold px-8 py-4 rounded-[6px] hover:bg-[#109387] hover:text-white"
```

### Cards

- Hintergrund: `bg-white` oder `bg-[#f8f9fa]`
- Border-Radius: `rounded-[6px]`
- Hover auf dunklem Hintergrund: `hover:bg-[#012956]`
- Bei Hover: Icon + Titel werden weiß

### Icons

- Größe: `size={28-32}` für Feature-Icons
- Stroke: `strokeWidth={1.5}`
- Farbe: Türkis `text-[#109387]`
- Bei Hover (dunkler BG): `text-white`

---

## Content-Strategie

### Perspektive

**IMMER aus Kundensicht schreiben, NICHT aus Firmensicht.**

❌ Falsch: "Wir bieten professionelle Reinigung"
✅ Richtig: "Saubere Räume in denen sich Mitarbeiter wohlfühlen"

### Problem → Lösung Format

Für Service-Beschreibungen:

1. **Problem** (italic, grau): Das Schmerzpunkt des Kunden
2. **Lösung** (normal, dunkelgrau): Wie FIMI das Problem löst

Beispiel:
```
Problem: „Das Büro macht keinen guten Eindruck mehr"
Lösung: Saubere Räume in denen sich Mitarbeiter und Kunden wohlfühlen.
```

### Tonalität

- Direkt und konkret
- Keine Marketing-Floskeln
- Vertrauenswürdig und professionell
- Fokus auf Kundennutzen

---

## SEO-Standards

### Meta-Daten

- Title: Max. 60 Zeichen, Keyword vorne
- Description: Max. 160 Zeichen, Call-to-Action am Ende
- H1: Nur eine pro Seite, enthält Hauptkeyword

### Strukturierte Daten

- `role="list"` und `role="listitem"` für Listen
- `aria-label` für Sections
- `aria-labelledby` für Überschriften-Referenzen
- `aria-hidden="true"` für dekorative Icons

### Keywords

Primär:
- Gebäudereinigung Bayern
- Gebäudereinigung Landshut
- Büroreinigung München
- Industriereinigung Regensburg

Sekundär:
- Unterhaltsreinigung
- Facility Management
- Winterdienst
- Fensterreinigung

---

## Firmen-Fakten

### Wichtig - ISO-Standards

**FIMI ist NICHT ISO-zertifiziert, sondern arbeitet NACH ISO-Standards.**

❌ Falsch: "ISO-zertifiziert", "ISO 9001 zertifiziert"
✅ Richtig: "Wir arbeiten nach ISO-Standards", "ISO 9001 & 14001 Standards"

### Zahlen & Fakten

| Fakt | Wert |
|------|------|
| Erfahrung | 8+ Jahre |
| ISO-Standards | 9001 & 14001 |
| Reaktionszeit | 2 Stunden (garantiert) |
| Zufriedenheit | 100% oder nochmal |

### Regionen

- Hauptsitz: Landshut
- Servicegebiet: Ganz Bayern
- Schwerpunkte: Landshut, München, Regensburg, Ingolstadt

---

## Layout-Patterns

### Sticky Sidebar

Für längere Sektionen mit mehreren Cards:

```jsx
<div className="grid lg:grid-cols-[400px_1fr] xl:grid-cols-[450px_1fr] gap-12 lg:gap-20">
  <aside className="lg:sticky lg:top-32 lg:self-start">
    {/* Headline, Text, CTAs */}
  </aside>
  <div>
    {/* Cards */}
  </div>
</div>
```

### Container-Breiten

- Max-Width: `max-w-[1800px]`
- Padding: `px-6 lg:px-12 xl:px-20`
- Section-Padding: `py-20 lg:py-28`

### Alternating Cards

Bei mehreren Cards mit Bild:
```jsx
className={`grid md:grid-cols-2 ${index % 2 === 1 ? 'md:grid-flow-dense' : ''}`}
```

---

## CTAs (Call-to-Actions)

### Einheitlicher CTA-Text

**Primärer CTA:** "Kostenfreie Besichtigung" oder "Unverbindlich anfragen"

**Sekundärer CTA:** "Alle Leistungen ansehen" (mit ↗ für externe Seite)

### CTA-Platzierung

- Im Hero: Prominent, unter der Headline
- In Sektionen: Neben der Headline (Desktop) oder darunter
- In Cards: Am Ende des Contents

---

## Responsive Design

### Breakpoints

- Mobile: Default
- Tablet: `md:` (768px)
- Desktop: `lg:` (1024px)
- Large Desktop: `xl:` (1280px)

### Mobile-First Regeln

- Keine hover-Effekte auf Mobile (nur `lg:hover:`)
- Touch-freundliche Button-Größen (min. 44px)
- Lesbare Schriftgrößen (min. 16px für Body)

---

## Dateien & Assets

### Logos (in `public/FIMI-LOGO/`)

| Datei | Verwendung |
|-------|------------|
| `FIMI-Logo_Transparent_FUER-Webseite.png` | Helle Hintergründe |
| `FIMI-LOGO_Weiße-Schrift_Transparent.png` | Dunkle Hintergründe |
| `Fimi-Favicon_Transparent.png` | Favicon |

### Bilder

- Externe Bilder: Unsplash (images.unsplash.com)
- Format: WebP bevorzugt, JPEG als Fallback
- Größe: Max. 1200px Breite für Hero, 800px für Cards

---

## Tech Stack

- **Framework:** Next.js 14 (App Router)
- **Sprache:** TypeScript
- **Styling:** Tailwind CSS
- **Icons:** Lucide React
- **Animationen:** Framer Motion (optional)
- **Deployment:** Vercel (Auto-Deploy via GitHub)

### Deployment

- Repository: `github.com/Brandea-ai/FIMI-Gebaeudereinigung`
- Branch: `main` → Auto-Deploy zu Vercel
- Domain: fimi-service.de

---

## Checkliste für neue Komponenten

- [ ] Türkis (#109387) als Primärfarbe für Akzente
- [ ] Navy (#012956) nur für Hintergründe
- [ ] Alle Texte mindestens `font-semibold`
- [ ] Icon + Titel = gleiche Farbe
- [ ] Content aus Kundenperspektive
- [ ] ARIA-Labels für Accessibility
- [ ] ISO = "Standards", nicht "zertifiziert"
- [ ] Responsive getestet
- [ ] CTAs einheitlich formuliert

---

**Letzte Aktualisierung:** November 2025
