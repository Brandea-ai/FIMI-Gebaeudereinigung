# 🚀 FIMI Gebäudereinigung - Fresh Start

**Datum:** 15. November 2025
**Status:** CLEAN START - Bereit zum Neuaufbau
**Ziel:** Professionelle Website im BGS-Stil mit FIMI CI-Farben

---

## ⚠️ WICHTIG: Was der Kunde will

Der Kunde will **NICHT** ein individuelles Design!
Der Kunde will **EXAKT das BGS-Design kopieren**: https://github.com/Brandea-ai/bgs-gebaeudeservice

### Kundenanforderungen (in seinen Worten):
> "schau dir doch das repository genau an von bgs-gebäudereinigungsservices über github kopiere diese darstellung wie dort"

> "ja wie bgs nur mit unseren ci und ich will das logo im hero bereich größer und im footer auch"

**Das bedeutet:**
1. ✅ BGS-Repository als Single Source of Truth nehmen
2. ✅ ALLE Komponenten, Animationen, Layouts 1:1 kopieren
3. ✅ NUR Farben (Navy + Turquoise) und Texte auf FIMI anpassen
4. ✅ Logo im Hero UND Footer GRÖSSER machen

---

## 📁 Verfügbare Ressourcen

### Logos (in `public/FIMI-LOGO/`)
```
✓ FIMI-Logo_Transparent_FUER-Webseite.png           # Navy Schrift (für helle BGs)
✓ FIMI-LOGO_Weiße-Schrift_Transparent.png           # Weiße Schrift (für dunkle BGs)
✓ Fimi-Favicon_Transparent.png                      # Favicon Standard
✓ FIMI-FAVICON_Transparenten-Hintergrund_Weiße-Schrift.png  # Favicon weiß
```

**WICHTIG:** Die Datei `FI-Logo_Transparent_FUER-Webseite-Weiß-Schrift.png` existiert NICHT!
Stattdessen: `FIMI-LOGO_Weiße-Schrift_Transparent.png` verwenden

### Environment Variables (.env vorhanden)
- Git-Token
- Vercel-Token
- API-Keys

---

## 🎨 FIMI CI-Farben

```css
/* Primary - Navy Blue */
--fimi-navy: #012956;
--primary: 207 100% 17%;

/* Secondary/Accent - Turquoise */
--fimi-turquoise: #109387;
--accent: 173 83% 31%;

/* Extended */
--fimi-navy-light: #023E7D;
--fimi-navy-dark: #001D3D;
--fimi-turquoise-light: #14B8A6;
--fimi-turquoise-dark: #0D7C71;
```

---

## 🏗️ Schritt-für-Schritt: Projekt neu aufbauen

### Phase 1: Next.js Grundgerüst (Clean & Minimal)

**1.1 package.json erstellen:**
```json
{
  "name": "fimi-gebaeudereinigung",
  "version": "1.0.0",
  "private": true,
  "scripts": {
    "dev": "next dev",
    "build": "next build",
    "start": "next start",
    "lint": "next lint"
  },
  "dependencies": {
    "next": "14.2.33",
    "react": "^18",
    "react-dom": "^18",
    "framer-motion": "^11.18.2",
    "lucide-react": "^0.462.0",
    "clsx": "^2.1.1",
    "tailwind-merge": "^2.5.5",
    "class-variance-authority": "^0.7.1",
    "@radix-ui/react-slot": "^1.1.1"
  },
  "devDependencies": {
    "@types/node": "^20",
    "@types/react": "^18",
    "@types/react-dom": "^18",
    "autoprefixer": "^10",
    "postcss": "^8",
    "tailwindcss": "^3.4.1",
    "typescript": "^5"
  }
}
```

**1.2 Dependencies installieren:**
```bash
npm install
```

**1.3 Basis-Config-Dateien:**

`next.config.js`:
```js
/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ['images.unsplash.com'],
  },
}

module.exports = nextConfig
```

`tailwind.config.ts`:
```ts
import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'fimi-navy': '#012956',
        'fimi-turquoise': '#109387',
        'fimi-navy-light': '#023E7D',
        'fimi-navy-dark': '#001D3D',
        'fimi-turquoise-light': '#14B8A6',
        'fimi-turquoise-dark': '#0D7C71',
      },
    },
  },
  plugins: [],
}
export default config
```

`tsconfig.json`:
```json
{
  "compilerOptions": {
    "target": "ES2017",
    "lib": ["dom", "dom.iterable", "esnext"],
    "allowJs": true,
    "skipLibCheck": true,
    "strict": true,
    "noEmit": true,
    "esModuleInterop": true,
    "module": "esnext",
    "moduleResolution": "bundler",
    "resolveJsonModule": true,
    "isolatedModules": true,
    "jsx": "preserve",
    "incremental": true,
    "plugins": [{ "name": "next" }],
    "paths": {
      "@/*": ["./*"]
    }
  },
  "include": ["next-env.d.ts", "**/*.ts", "**/*.tsx", ".next/types/**/*.ts"],
  "exclude": ["node_modules"]
}
```

`postcss.config.js`:
```js
module.exports = {
  plugins: {
    tailwindcss: {},
    autoprefixer: {},
  },
}
```

---

### Phase 2: App-Struktur erstellen

**2.1 Ordnerstruktur:**
```
app/
├── globals.css              # BGS-Style Utilities
├── layout.tsx               # Root Layout mit Fonts
├── page.tsx                 # Homepage (minimal)
└── favicon.ico              # Kopiere von public/

components/
├── layout/
│   ├── Navigation.tsx       # BGS-Style Navigation
│   └── Footer.tsx           # BGS-Style Footer
└── ui/                      # Shadcn UI Components
    ├── button.tsx
    └── card.tsx

lib/
└── utils.ts                 # cn() Helper

utils/
└── animations.ts            # Framer Motion Variants
```

**2.2 Minimal app/layout.tsx:**
```tsx
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'FIMI Gebäudereinigung - Professionelle Reinigungsdienstleistungen',
  description: 'Professionelle Gebäudereinigung in Landshut und Umgebung',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="de">
      <body className={inter.className}>
        {children}
      </body>
    </html>
  )
}
```

**2.3 Minimal app/page.tsx:**
```tsx
export default function HomePage() {
  return (
    <main className="min-h-screen bg-white flex items-center justify-center">
      <div className="text-center">
        <h1 className="text-5xl font-bold text-fimi-navy mb-4">
          FIMI Gebäudereinigung
        </h1>
        <p className="text-xl text-gray-600">
          Coming soon...
        </p>
      </div>
    </main>
  )
}
```

**2.4 app/globals.css (BGS-Style):**
```css
@tailwind base;
@tailwind components;
@tailwind utilities;

@layer base {
  :root {
    --background: 0 0% 100%;
    --foreground: 210 24% 16%;
    --primary: 207 100% 17%;        /* FIMI Navy */
    --primary-foreground: 0 0% 100%;
    --secondary: 173 83% 31%;       /* FIMI Turquoise */
    --secondary-foreground: 0 0% 100%;
    --accent: 173 83% 31%;
    --accent-foreground: 0 0% 100%;
    --muted: 210 40% 96.1%;
    --muted-foreground: 215.4 16.3% 46.9%;
    --border: 214.3 31.8% 91.4%;
    --input: 214.3 31.8% 91.4%;
    --ring: 173 83% 31%;
    --radius: 0.5rem;
  }

  html {
    scroll-behavior: smooth;
  }

  body {
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }
}

@layer utilities {
  .container {
    @apply mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl;
  }

  /* BGS-Style Glassmorphism (Desktop only) */
  @media (min-width: 1024px) {
    .glass {
      @apply bg-white/70 backdrop-blur-xl border border-white/20;
    }

    .glass-dark {
      @apply bg-slate-900/70 backdrop-blur-xl border border-white/10;
    }
  }

  /* BGS-Style Hover Effects (Desktop only) */
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

  /* Reduced Motion */
  @media (prefers-reduced-motion: reduce) {
    .hover-lift,
    .hover-tilt {
      @apply transition-none;
    }

    .hover-lift:hover {
      @apply translate-y-0;
    }

    .hover-tilt:hover {
      transform: none;
    }
  }
}
```

---

### Phase 3: TEST ob es funktioniert

```bash
npm run dev
```

Öffne http://localhost:3000 - Du solltest "FIMI Gebäudereinigung - Coming soon..." sehen.

**Wenn das funktioniert:** ✅ Phase 1-3 erfolgreich!

---

### Phase 4: BGS-Komponenten hinzufügen

**JETZT erst** die komplexen Komponenten vom BGS-Repo übernehmen:

1. `lib/utils.ts` - cn() Helper
2. `utils/animations.ts` - Framer Motion Variants
3. `components/ui/button.tsx` - Shadcn Button
4. `components/ui/card.tsx` - Shadcn Card
5. `components/PremiumParallax.tsx` - Parallax Components
6. `components/layout/Navigation.tsx` - BGS Navigation
7. `components/layout/Footer.tsx` - BGS Footer

**Wichtig:** Jede Komponente einzeln testen!

---

### Phase 5: Homepage aufbauen

Nach Phase 4, Homepage Schritt für Schritt:

1. `app/HeroSection.tsx` - Hero mit GROSSEM Logo
2. `app/TrustSection.tsx` - 4 Trust Cards
3. `app/BeforeAfterSection.tsx` - Before/After mit Parallax
4. `app/ServicesSection.tsx` - 3 Service Cards
5. `app/page.tsx` - Alles zusammenfügen

---

## 🚫 Was NICHT tun

❌ **Nicht** eigene Design-Ideen einbringen
❌ **Nicht** von BGS abweichen
❌ **Nicht** alle Komponenten auf einmal erstellen
❌ **Nicht** Logo-Pfade raten - nur existierende Dateien verwenden
❌ **Nicht** komplexe Features vor dem Basissetup

---

## ✅ Was TUN

✓ **Schritt für Schritt** vorgehen
✓ **Jede Phase testen** bevor zur nächsten
✓ **BGS-Repo als Referenz** nutzen
✓ **Nur existierende Logo-Dateien** verwenden
✓ **Bei Fehlern stoppen** und fixen

---

## 🎯 Erfolgs-Kriterien

1. ✅ `npm run build` läuft ohne Fehler
2. ✅ Alle Logos laden korrekt
3. ✅ Navigation funktioniert (Desktop + Mobile)
4. ✅ Alle Animationen laufen smooth
5. ✅ Keine 404-Fehler
6. ✅ Responsive auf allen Geräten

---

## 📝 Nächste Schritte

1. Führe Phase 1-3 aus (Grundgerüst)
2. Teste ob `npm run dev` funktioniert
3. Wenn erfolgreich: Phase 4 (Komponenten)
4. Schrittweise Homepage aufbauen
5. Build & Deploy

**Wichtig:** Nicht alles auf einmal! Schritt für Schritt.

---

**Erstellt:** 15. November 2025
**Status:** Bereit für Clean Start
**Nächster Schritt:** Phase 1 ausführen
