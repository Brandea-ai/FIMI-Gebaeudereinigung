# FIMI Gebäudereinigung - Vollständige Projekt-Dokumentation

**Datum:** 15. November 2025
**Status:** In Entwicklung - BGS-Style Redesign
**Ziel:** Professionelle Reinigungsdienstleister-Website im Stil von BGS Gebäudeservice

---

## 1. PROJEKT-ÜBERSICHT

### 1.1 Hauptziel
Erstelle eine moderne, professionelle Website für FIMI Gebäudereinigung, die **exakt das Design und die Interaktionen von BGS Gebäudeservice** (https://github.com/Brandea-ai/bgs-gebaeudeservice) kopiert, aber mit FIMI CI-Farben.

### 1.2 Design-Anforderungen vom Kunden
- **KOPIERE BGS-Design 1:1** - gleiche Animationen, Parallax, Glassmorphism
- **FIMI CI-Farben verwenden**: Navy Blue (#012956) + Turquoise (#109387)
- **GRÖSSERES LOGO** im Hero-Bereich und im Footer (explizit vom Kunden gewünscht!)
- **Glassmorphism Navigation** die beim Scrollen erscheint
- **Parallax-Effekte** wie bei BGS
- **Premium Hover-Interaktionen** (hover-lift, hover-tilt)
- **Before/After Section** mit Parallax-Bildern
- **Trust Indicators** als 4 Cards (wie bei BGS)

---

## 2. TECHNOLOGIE-STACK

### 2.1 Core Framework
```json
{
  "framework": "Next.js 14.2.33",
  "runtime": "App Router",
  "language": "TypeScript",
  "styling": "Tailwind CSS",
  "animations": "Framer Motion 11.18.2"
}
```

### 2.2 Wichtige Dependencies
```json
{
  "framer-motion": "^11.18.2",
  "clsx": "^2.x",
  "tailwind-merge": "^2.x",
  "class-variance-authority": "^0.x",
  "@radix-ui/react-slot": "^1.x",
  "lucide-react": "latest",
  "next-mdx-remote": "^4.x",
  "gray-matter": "^4.x"
}
```

### 2.3 Ordnerstruktur
```
FIMI-Gebaeudereinigung/
├── app/                          # Next.js App Router
│   ├── globals.css              # Global styles mit BGS utilities
│   ├── layout.tsx               # Root layout
│   ├── page.tsx                 # Homepage
│   ├── HeroSection.tsx          # Hero mit GROSSEM Logo & Parallax
│   ├── TrustSection.tsx         # 4 Trust Cards
│   ├── BeforeAfterSection.tsx   # Before/After mit Parallax
│   ├── ServicesSection.tsx      # 3 Service Cards mit Bildern
│   ├── blog/
│   │   ├── page.tsx            # Blog Übersicht
│   │   ├── [slug]/page.tsx     # Blog Post
│   │   └── posts/              # MDX Blog Posts
│   ├── leistungen/
│   │   ├── [16 Service-Seiten]
│   │   └── */
│   │       ├── page.tsx
│   │       ├── HeroSection.tsx
│   │       ├── BenefitsSection.tsx
│   │       ├── ProcessSection.tsx
│   │       └── LeistungsumfangSection.tsx
│   └── api/
│       └── contact/route.ts     # Contact form API
│
├── components/
│   ├── PremiumParallax.tsx      # Parallax Components wie BGS
│   │   ├── ParallaxImage
│   │   ├── ParallaxBackground
│   │   ├── ZoomOnScroll
│   │   ├── RevealOnScroll
│   │   ├── MagneticHover
│   │   └── FloatingElement
│   ├── ui/                      # Shadcn UI Components
│   │   ├── button.tsx          # Button mit Varianten
│   │   └── card.tsx            # Card Components
│   ├── layout/
│   │   ├── Navigation.tsx      # Glassmorphism Navigation
│   │   └── Footer.tsx          # Footer mit GROSSEM Logo
│   └── containers/
│       └── FAQContainer.tsx     # FAQ Accordion
│
├── utils/
│   └── animations.ts            # Framer Motion Varianten
│
├── lib/
│   └── utils.ts                 # cn() Utility
│
└── public/
    └── FIMI-LOGO/
        ├── FIMI-Logo_Transparent_FUER-Webseite.png           # Blau (für helle Hintergründe)
        ├── FI-Logo_Transparent_FUER-Webseite-Weiß-Schrift.png # Weiß (für dunkle Hintergründe)
        └── FIMI-LOGO_Weiße-Schrift_Transparent.png           # Weiß für Footer
```

---

## 3. DESIGN-SYSTEM (BGS-STYLE)

### 3.1 Farben (FIMI CI)
```css
/* Primary */
--fimi-navy: #012956;           /* HSL: 207 100% 17% */
--fimi-turquoise: #109387;      /* HSL: 173 83% 31% */

/* Extended Palette */
--fimi-navy-light: #023E7D;
--fimi-navy-dark: #001D3D;
--fimi-turquoise-light: #14B8A6;
--fimi-turquoise-dark: #0D7C71;

/* CSS Variables für Theming */
--primary: 207 100% 17%;        /* Navy */
--secondary: 173 83% 31%;       /* Turquoise */
--accent: 173 83% 31%;          /* Turquoise */
```

### 3.2 Typografie
```typescript
// fonts.ts
import { Inter, Montserrat } from 'next/font/google'

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' })
const montserrat = Montserrat({ subsets: ['latin'], variable: '--font-montserrat' })
```

### 3.3 BGS-Style Utilities (globals.css)
```css
/* Glassmorphism (nur Desktop) */
@media (min-width: 1024px) {
  .glass {
    @apply bg-white/70 backdrop-blur-xl border border-white/20;
  }

  .glass-dark {
    @apply bg-slate-900/70 backdrop-blur-xl border border-white/10;
  }
}

/* Premium Hover Effects (nur Desktop) */
@media (min-width: 1024px) {
  .hover-lift {
    @apply transition-all duration-300;
  }

  .hover-lift:hover {
    @apply -translate-y-2 shadow-2xl;
  }

  .hover-tilt {
    @apply transition-transform duration-500;
    transform-style: preserve-3d;
  }

  .hover-tilt:hover {
    transform: perspective(1000px) rotateX(2deg) rotateY(-2deg);
  }
}

/* Parallax */
.parallax-smooth {
  @apply will-change-transform;
}

.parallax-container {
  @apply relative overflow-hidden;
}

/* Performance für reduced motion */
@media (prefers-reduced-motion: reduce) {
  .hover-lift, .hover-tilt, .parallax-smooth {
    @apply transition-none;
  }
}
```

### 3.4 Framer Motion Animationen
```typescript
// utils/animations.ts

export const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: [0.22, 1, 0.36, 1]  // BGS Easing
    }
  }
}

export const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2
    }
  }
}

export const cardHover = {
  rest: { scale: 1 },
  hover: {
    scale: 1.02,
    transition: {
      duration: 0.3,
      ease: "easeOut"
    }
  }
}

export const scaleIn = {
  hidden: { opacity: 0, scale: 0.95 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.5,
      ease: [0.22, 1, 0.36, 1]
    }
  }
}
```

---

## 4. HOMEPAGE-STRUKTUR (BGS-STYLE)

### 4.1 Hero Section
**Datei:** `app/HeroSection.tsx`

**Features:**
- Fullscreen (min-h-screen)
- Parallax Background mit `ParallaxBackground`
- **GROSSES Logo** (h-32 md:h-40 / width: 400px)
- Logo: Weiße Schrift (`FI-Logo_Transparent_FUER-Webseite-Weiß-Schrift.png`)
- Gradient Overlay: Navy Blue mit Transparenz
- Framer Motion staggerContainer für Animationen
- 2 CTA Buttons:
  - Primary: "Kostenlose Beratung anfordern" (Turquoise)
  - Secondary: Telefon-Button (White outline)

**Code-Struktur:**
```tsx
<section className="relative min-h-screen">
  <ParallaxBackground speed={0.5}>
    <Image src="..." />
    <div className="gradient-overlay" />
  </ParallaxBackground>

  <motion.div variants={staggerContainer}>
    <motion.div variants={fadeInUp}>
      {/* GROSSES LOGO */}
      <Image
        src="/FIMI-LOGO/FI-Logo_Transparent_FUER-Webseite-Weiß-Schrift.png"
        width={400}
        height={133}
        className="h-32 md:h-40 w-auto"
      />
    </motion.div>

    <motion.h1 variants={fadeInUp}>
      Exzellente Reinigung<br/>
      <span className="text-fimi-turquoise">für Ihr Unternehmen</span>
    </motion.h1>

    {/* CTAs */}
  </motion.div>
</section>
```

### 4.2 Trust Section
**Datei:** `app/TrustSection.tsx`

**Features:**
- 4 Cards (grid md:grid-cols-2 lg:grid-cols-4)
- Shadcn Card Components
- Icons: Award, Clock, Users, TrendingUp
- hover-lift Effekt
- Background Pattern mit blur circles

**Inhalt:**
1. ISO-Zertifiziert - "Höchste Qualitätsstandards nach ISO-Norm"
2. 24/7 Erreichbar - "Rund um die Uhr für Sie da"
3. 500+ Kunden - "Über 500 zufriedene Unternehmen"
4. 15+ Jahre - "Langjährige Erfahrung"

### 4.3 Before/After Section
**Datei:** `app/BeforeAfterSection.tsx`

**Features:**
- 2-spaltig (grid lg:grid-cols-2)
- Links: ParallaxImage + ZoomOnScroll
- Floating Badge (98% Kundenzufriedenheit)
- Rechts: Content mit Benefits Liste
- CheckCircle Icons

### 4.4 Services Section
**Datei:** `app/ServicesSection.tsx`

**Features:**
- 3 Cards (grid md:grid-cols-3)
- Jede Card hat:
  - Header-Bild (h-48) mit Icon
  - CardTitle
  - Beschreibung
  - Services-Liste (Bullets)
  - "Mehr erfahren" Link
- cardHover Animation
- Image zoom on hover (group-hover:scale-110)

**Services:**
1. Gewerbliche Objektreinigung
2. Industrielle & Spezialreinigung
3. Facility Management & Services

### 4.5 FAQ Section
**Datei:** `components/containers/FAQContainer.tsx`

- 2-spaltig Layout
- Links: Info + CTA Box
- Rechts: Accordion mit 8 FAQs

---

## 5. NAVIGATION (GLASSMORPHISM)

### 5.1 Features
**Datei:** `components/layout/Navigation.tsx`

```tsx
// Zustand
const [isScrolled, setIsScrolled] = useState(false)

// Navigation Klassen
className={`fixed top-0 w-full z-50 transition-all duration-500 ${
  isScrolled
    ? 'bg-white/80 backdrop-blur-xl shadow-lg border-b border-gray-200/50'
    : 'bg-transparent'
}`}

// Logo wechselt
<Image
  src={isScrolled
    ? "/FIMI-LOGO/FIMI-Logo_Transparent_FUER-Webseite.png"  // Navy
    : "/FIMI-LOGO/FI-Logo_Transparent_FUER-Webseite-Weiß-Schrift.png"  // Weiß
  }
  width={180}
  height={60}
  className="h-14 md:h-16 w-auto"
/>

// Text-Farbe wechselt
className={isScrolled ? 'text-fimi-navy' : 'text-white'}
```

### 5.2 Mega Menu
- Leistungen Dropdown
- 3 Spalten (Gewerblich, Industrie, Facility)
- OnMouseEnter/Leave
- Glassmorphism Background

---

## 6. FOOTER (MIT GROSSEM LOGO)

### 6.1 Features
**Datei:** `components/layout/Footer.tsx`

**Struktur:**
1. Kontaktformular Section (id="kontakt-formular")
2. Footer Links (4 Spalten)
3. Copyright

**Logo:**
```tsx
<Image
  src="/FIMI-LOGO/FIMI-LOGO_Weiße-Schrift_Transparent.png"
  width={250}
  height={83}
  className="mb-6 h-20 w-auto"  // GROSS!
/>
```

### 6.2 Kontaktformular
- 2-spaltig Layout
- Links: Kontaktinfos (Telefon, Email, Adresse)
- Rechts: Formular mit:
  - Name, Company
  - Email, Phone
  - Message (Textarea)
  - Submit Button mit Loading State
- API Route: `/api/contact/route.ts`

---

## 7. SERVICE-SEITEN (16 Stück)

### 7.1 Liste der Services
```
/leistungen/bueroreinigung
/leistungen/unterhaltsreinigung
/leistungen/baureinigung
/leistungen/hallenreinigung
/leistungen/parkplatzreinigung
/leistungen/fensterreinigung
/leistungen/industriereinigung
/leistungen/maschinenreinigung
/leistungen/fassadenreinigung
/leistungen/tiefgaragenreinigung
/leistungen/aussenanlagenpflege
/leistungen/sonderleistungen
/leistungen/facility-management
/leistungen/hausmeisterservice
/leistungen/winterdienst
/leistungen/beschaffungsmanagement
```

### 7.2 Struktur jeder Service-Seite
```tsx
// page.tsx
export default function ServicePage() {
  return (
    <>
      <HeroSection />
      <BenefitsSection />
      <ProcessSection />
      <LeistungsumfangSection />
      <FAQContainer />
    </>
  )
}
```

**HeroSection:**
- Hero-Bild mit Gradient
- Breadcrumb
- Category Badge
- Title + Subtitle
- 2 CTA Buttons
- scrollToContact Funktion

**BenefitsSection:**
- 6 Benefits Cards (grid md:grid-cols-2 lg:grid-cols-3)
- Icons: Shield, Clock, Sparkles, Award, Users, Leaf

**ProcessSection:**
- 4-Step Timeline
- Numbered steps mit Icons

**LeistungsumfangSection:**
- 2-spaltig
- Links: Content
- Rechts: Leistungen-Liste

---

## 8. BLOG-SYSTEM (MDX)

### 8.1 Struktur
```
app/blog/
├── page.tsx              # Blog Übersicht
├── [slug]/page.tsx       # Blog Post
└── posts/
    ├── post1.mdx
    ├── post2.mdx
    └── ...
```

### 8.2 MDX Posts
**Format:**
```mdx
---
title: "Titel"
description: "Beschreibung"
date: "2024-03-15"
author: "FIMI Team"
category: "Ratgeber"
image: "https://..."
---

# Content hier

## Überschrift 2
Text...
```

### 8.3 Blog Posts (5 vorhanden)
1. Winterdienst-Vorbereitung
2. Reinigungsdienstleister-Auswahl
3. Industriereinigung-Sicherheit
4. Büroreinigung-Effizienz
5. Nachhaltigkeit-Gebäudereinigung

---

## 9. PARALLAX COMPONENTS

### 9.1 ParallaxImage
```tsx
<ParallaxImage
  src="..."
  alt="..."
  speed={0.3}
  className="h-full"
/>
```
- Nutzt useScroll, useTransform, useSpring
- Y-Translation: -20% bis +20%

### 9.2 ParallaxBackground
```tsx
<ParallaxBackground speed={0.5} className="...">
  <Image src="..." />
  <div className="overlay" />
</ParallaxBackground>
```

### 9.3 ZoomOnScroll
```tsx
<ZoomOnScroll scale={1.2}>
  <Image src="..." />
</ZoomOnScroll>
```
- Scale von 1 bis 1.2 während Scroll

### 9.4 MagneticHover
```tsx
<MagneticHover strength={0.3}>
  <Button>Hover mich</Button>
</MagneticHover>
```
- Element folgt Maus-Bewegung

---

## 10. SHADCN UI COMPONENTS

### 10.1 Button
**Datei:** `components/ui/button.tsx`

**Varianten:**
```typescript
variant: {
  default: "bg-primary text-primary-foreground hover:bg-primary/90 shadow-lg",
  destructive: "bg-destructive text-destructive-foreground",
  outline: "border-2 border-input bg-background hover:bg-accent",
  secondary: "bg-secondary text-secondary-foreground",
  ghost: "hover:bg-accent hover:text-accent-foreground",
  link: "text-primary underline-offset-4 hover:underline",
}

size: {
  default: "h-11 px-6 py-2",
  sm: "h-9 rounded-md px-4",
  lg: "h-12 rounded-lg px-8 text-base",
  xl: "h-14 rounded-lg px-10 text-lg",
  icon: "h-10 w-10",
}
```

### 10.2 Card
**Datei:** `components/ui/card.tsx`

**Exports:**
- Card
- CardHeader
- CardTitle
- CardDescription
- CardContent
- CardFooter

**Verwendung:**
```tsx
<Card className="hover-lift border-2 hover:border-fimi-turquoise">
  <CardHeader>
    <CardTitle>Titel</CardTitle>
  </CardHeader>
  <CardContent>
    Content
  </CardContent>
</Card>
```

---

## 11. BACKEND & API

### 11.1 Contact Form API
**Datei:** `app/api/contact/route.ts`

```typescript
export async function POST(request: Request) {
  const data = await request.json()
  const { name, email, phone, company, message } = data

  // Email-Logik hier (z.B. Resend, SendGrid)

  return NextResponse.json({ success: true })
}
```

### 11.2 Environment Variables
```env
# .env
NEXT_PUBLIC_SITE_URL=https://fimi-gebaeudereinigung.de
RESEND_API_KEY=your_key_here
```

---

## 12. BEKANNTE PROBLEME & LÖSUNGEN

### 12.1 Aktuelle Fehler (Stand 15.11.2025)

**Problem 1: Logo lädt nicht (400 Error)**
```
Failed to load: FI-Logo_Transparent_FUER-Webseite-Weiß-Schrift.png
```
**Lösung:**
- Prüfe ob Datei existiert in `/public/FIMI-LOGO/`
- Dateiname exakt prüfen (Groß-/Kleinschreibung, ß vs ss)
- Next.js Image Optimization konfigurieren

**Problem 2: Fehlende Seiten (404)**
```
/datenschutz
/impressum
/ueber-uns
/referenzen
/agb
/kontakt
```
**Lösung:** Diese Seiten müssen noch erstellt werden:
```
app/
├── datenschutz/page.tsx
├── impressum/page.tsx
├── ueber-uns/page.tsx
├── referenzen/page.tsx
├── agb/page.tsx
└── kontakt/page.tsx
```

### 12.2 Build-Fehler Lösungen

**CSS-Fehler: `border-border` class existiert nicht**
```css
/* NICHT verwenden: */
@apply border-border;

/* Stattdessen direkt: */
border: 1px solid hsl(var(--border));
```

**Event Handler in Server Component**
```tsx
// Falsch (Server Component):
<button onClick={handleClick}>

// Richtig - add 'use client':
'use client'
<button onClick={handleClick}>
```

---

## 13. DEPLOYMENT

### 13.1 Vercel Deployment
```bash
# 1. Zu GitHub pushen
git add .
git commit -m "Deployment ready"
git push origin main

# 2. Vercel automatisch oder manuell
vercel --prod

# 3. Oder via Vercel Dashboard
# https://vercel.com/dashboard
```

### 13.2 Build-Kommando
```json
{
  "scripts": {
    "dev": "next dev",
    "build": "next build",
    "start": "next start",
    "lint": "next lint"
  }
}
```

### 13.3 Vercel-Konfiguration
```json
// vercel.json
{
  "buildCommand": "npm run build",
  "devCommand": "npm run dev",
  "installCommand": "npm install"
}
```

---

## 14. CONTENT & TEXTE

### 14.1 Firmendaten
```
Firma: FIMI Gebäudereinigung
Adresse: Kellerstr. 39, 84036 Landshut
Telefon: 01747225473
Email: info@fimi-service.de
UST-ID: DE347549925

Geschäftsführer:
- Ntonalnt Tzoutzis
- Ergest Qiraj

Öffnungszeiten:
Mo-Fr: 08:00 - 18:00 Uhr
Sa: Nach Vereinbarung
24/7 Notfall-Hotline verfügbar
```

### 14.2 USPs (Unique Selling Points)
1. ISO-zertifizierte Qualitätsstandards
2. 24/7 Verfügbarkeit und Notfall-Hotline
3. 500+ zufriedene Kunden
4. 15+ Jahre Erfahrung
5. Umweltfreundliche Reinigungsmittel (100% biologisch abbaubar)
6. Spezialisierte Fachkräfte mit Zertifizierung

---

## 15. WORKFLOW FÜR NEUEN CHAT

### 15.1 Schnellstart-Kommandos
```bash
# 1. Projekt öffnen
cd /Users/brandea/Desktop/FIMI-Gebaeudereinigung

# 2. Dependencies installieren (falls nötig)
npm install

# 3. Dev-Server starten
npm run dev

# 4. In neuem Terminal: Build testen
npm run build
```

### 15.2 Wichtigste Dateien zum Bearbeiten
1. **Homepage:** `app/page.tsx` + `app/*Section.tsx`
2. **Navigation:** `components/layout/Navigation.tsx`
3. **Footer:** `components/layout/Footer.tsx`
4. **Styles:** `app/globals.css`
5. **Service-Seiten:** `app/leistungen/*/`

### 15.3 Wenn du von vorne starten willst
```bash
# Option 1: Letzten funktionierenden Commit wiederherstellen
git log --oneline  # Finde funktionierenden Commit
git reset --hard <commit-hash>

# Option 2: Alles neu mit diesem Dokument
# - Lösche app/, components/, lib/, utils/ Ordner
# - Erstelle Struktur neu nach diesem Dokument
# - Kopiere Code-Snippets aus diesem Dokument
```

---

## 16. EXAKTE BGS-FEATURES CHECKLISTE

### 16.1 Was bereits implementiert ist ✓
- [x] Framer Motion Animationen (fadeInUp, stagger)
- [x] Parallax Components (ParallaxImage, ParallaxBackground, ZoomOnScroll)
- [x] Glassmorphism Navigation
- [x] Trust Section (4 Cards)
- [x] Services Section (3 Cards mit Bildern)
- [x] Shadcn UI Components (Button, Card)
- [x] Hover-Effekte (hover-lift, hover-tilt)
- [x] Größeres Logo im Hero
- [x] Größeres Logo im Footer

### 16.2 Was noch fehlt / zu fixen ist ✗
- [ ] Logo-Dateien korrekt laden (aktuell 400 Error)
- [ ] Fehlende Seiten erstellen (Datenschutz, Impressum, etc.)
- [ ] MagneticHover implementieren (erstellt aber nicht genutzt)
- [ ] Before/After Section mit echten Vorher/Nachher-Bildern
- [ ] Service-Seiten im BGS-Stil updaten
- [ ] Blog-Posts mit besseren Bildern

### 16.3 BGS vs FIMI Unterschiede
| Feature | BGS | FIMI |
|---------|-----|------|
| Primary Color | Rot #E53E3E | Navy #012956 |
| Accent Color | - | Turquoise #109387 |
| Logo Position Hero | Groß | **GRÖSSER** (h-40) |
| Logo Position Footer | Normal | **GRÖSSER** (h-20) |
| Animationen | Framer Motion | ✓ Gleich |
| Parallax | Ja | ✓ Gleich |
| Glassmorphism | Ja | ✓ Gleich |

---

## 17. WICHTIGE HINWEISE FÜR WEITERARBEIT

### 17.1 Kunde will BGS-Design 1:1
**Zitat:** "schau dir doch das repository genau an von bgs-gebäudereinigungsservices über github du hast den zugang zu der seite kopiere diese darstellung wie dort"

**Das bedeutet:**
- Nicht eigene Design-Ideen einbringen
- BGS Repository als Single Source of Truth
- Alle Komponenten, Animationen, Layouts von BGS übernehmen
- Nur Farben und Texte auf FIMI anpassen

### 17.2 Logo-Größe ist KRITISCH
**Zitat:** "ich will das logo im hero bereich größer und im footer auch"

**Aktuelle Implementierung:**
- Hero: `h-32 md:h-40` (width: 400px)
- Footer: `h-20` (width: 250px)
- Navigation: `h-14 md:h-16` (width: 180px)

### 17.3 Logo-Dateien Übersicht
```
public/FIMI-LOGO/
├── FIMI-Logo_Transparent_FUER-Webseite.png                    # Navy (hell)
├── FI-Logo_Transparent_FUER-Webseite-Weiß-Schrift.png         # Weiß (Hero)
├── FIMI-LOGO_Weiße-Schrift_Transparent.png                    # Weiß (Footer)
├── FIMI_Favicon_navy_blau_Schrift.png                         # Favicon hell
└── FIMI_Favicon_Weiße_schrift.png                             # Favicon dunkel
```

**Verwendung:**
- **Hero (dunkler BG):** FI-Logo_Transparent_FUER-Webseite-Weiß-Schrift.png
- **Navigation (transparent → weiß):** Wechselt zwischen weiß und navy
- **Footer (dunkler BG):** FIMI-LOGO_Weiße-Schrift_Transparent.png

---

## 18. NÄCHSTE SCHRITTE

### 18.1 Sofort zu fixen
1. Logo-Dateien korrekt laden
2. Fehlende Seiten erstellen
3. Favicon korrekt setzen

### 18.2 Optimierungen
1. Service-Seiten im BGS-Stil
2. Bessere Bilder für Before/After
3. Blog-Bilder optimieren

### 18.3 Neue Features
1. Kontaktformular testen
2. Google Maps Integration
3. Cookie-Banner
4. Analytics

---

## 19. GIT COMMITS & HISTORIE

### 19.1 Letzter Commit
```
8473273 - Complete BGS-style redesign with premium animations and parallax effects
```

### 19.2 Wichtige Commits
```
37493d9 - Initial commit - FIMI Gebäudereinigung Project Base
5b9af76 - (vorletzter Commit vor BGS Redesign)
```

### 19.3 Rollback falls nötig
```bash
# Zum letzten funktionierenden Stand
git log --oneline
git reset --hard 5b9af76

# Oder nur bestimmte Dateien
git checkout 5b9af76 -- app/HeroSection.tsx
```

---

## 20. TROUBLESHOOTING

### 20.1 Build schlägt fehl
```bash
# Cache löschen
rm -rf .next
rm -rf node_modules
npm install
npm run build
```

### 20.2 Bilder laden nicht
1. Prüfe `public/` Ordner
2. Prüfe Dateinamen (Groß-/Kleinschreibung!)
3. Prüfe Next.js Image Config

### 20.3 Animationen funktionieren nicht
1. Prüfe ob 'use client' Directive da ist
2. Prüfe Framer Motion Import
3. Prüfe Browser Console für Fehler

---

## ENDE DER DOKUMENTATION

**Letzte Aktualisierung:** 15. November 2025, 22:15 Uhr
**Status:** BGS-Redesign implementiert, Logo-Fehler zu fixen
**Nächster Schritt:** Logo-Dateien korrigieren, fehlende Seiten erstellen

Diese Dokumentation enthält ALLES was du brauchst, um in einem neuen Chat nahtlos weiterzumachen. Kopiere einfach die relevanten Code-Snippets und folge der Struktur!
