# Google Analytics 4 - Enterprise Setup

> **Status:** Code fertig implementiert, wartet auf GA4 Measurement ID

---

## Was bereits implementiert ist

Die komplette Enterprise-Grade Analytics Integration ist in `/components/GoogleAnalytics.tsx` (1498 Zeilen) fertig:

### Core Tracking
- [x] Page Views mit Session-Management
- [x] Scroll Depth (25%, 50%, 75%, 90%, 100%)
- [x] Time on Page (30s, 60s, 120s, 300s)
- [x] External Link Tracking

### Enterprise Features
- [x] **Core Web Vitals** - LCP, CLS, FID, TTFB (Google Ranking-Faktoren)
- [x] **Device Fingerprinting** - Browser, OS, Screen, Touch, Connection, Timezone
- [x] **Rage Click Detection** - Erkennt frustrierte Nutzer (3+ Klicks in 1 Sekunde)
- [x] **Dead Click Detection** - Klicks auf nicht-interaktive Elemente
- [x] **Exit Intent** - Erkennt wenn Nutzer die Seite verlassen wollen
- [x] **Tab Visibility** - Trackt Tab-Wechsel und versteckte Zeit
- [x] **User Engagement Score** - Automatische Bewertung der Nutzer-Qualität
- [x] **Performance Metrics** - DNS, TCP, Response, DOM, Full Page Load

### Auto-Tracking (ohne Code-Änderungen)
- [x] **Phone Links** - Alle `tel:` Links automatisch getrackt
- [x] **Email Links** - Alle `mailto:` Links automatisch getrackt
- [x] **WhatsApp Links** - Automatisch erkannt
- [x] **CTA Buttons** - Buttons mit "Jetzt anfragen", "Kontakt", etc. automatisch getrackt

### Form Tracking (ContactForm integriert)
- [x] Field-Level Tracking (Focus, Complete)
- [x] Form Start & Duration
- [x] Phase 2 Reached
- [x] Form Submission mit Lead Value
- [x] Form Abandonment Detection
- [x] Error Tracking

### Session & Attribution
- [x] Visitor ID (persistent in localStorage)
- [x] Session ID (30 Min Timeout)
- [x] UTM Parameter Tracking (source, medium, campaign, term, content)
- [x] Returning Visitor Detection
- [x] Landing Page & Referrer

### Lead Value Berechnung
Automatische ROI-Berechnung pro Service:
| Service | Geschätzter Lead-Wert |
|---------|----------------------|
| Facility Management | 1000 EUR |
| Industriereinigung | 800 EUR |
| Hallenreinigung | 700 EUR |
| Baureinigung | 600 EUR |
| Fassadenreinigung | 600 EUR |
| Unterhaltsreinigung | 500 EUR |
| ... | ... |

---

## Was noch zu tun ist

### 1. Google Analytics 4 Konto erstellen

1. Gehe zu **https://analytics.google.com**
2. Klicke "Messung starten"
3. **Kontoname:** `FIMI Gebäudereinigung`
4. **Property:** `FIMI Website`
5. **Geschäftsdetails:**
   - Branche: Geschäftsdienstleistungen
   - Größe: Klein (1-10)
6. **Datenstream erstellen:**
   - Plattform: Web
   - URL: `https://fimi-reinigung.ch`
   - Stream-Name: `FIMI Website`

### 2. Measurement ID kopieren

Nach dem Erstellen findest du die ID unter:
- Property → Datenstreams → Web-Stream → **Mess-ID**
- Format: `G-XXXXXXXXXX`

### 3. In Vercel Environment Variables eintragen

1. https://vercel.com → FIMI Projekt → Settings → Environment Variables
2. Neue Variable:
   ```
   Name:  NEXT_PUBLIC_GA_ID
   Value: G-XXXXXXXXXX
   Environments: Production, Preview, Development
   ```
3. Save
4. Deployments → Redeploy auslösen

### 4. Lokal testen (optional)

In `.env` hinzufügen:
```env
NEXT_PUBLIC_GA_ID=G-XXXXXXXXXX
```

---

## Nach der Aktivierung

### Echtzeit-Test
1. Website öffnen
2. GA4 → Berichte → Echtzeit
3. Du solltest deinen Besuch sehen

### Custom Events prüfen
GA4 → Berichte → Engagement → Ereignisse

Wichtige Events die du sehen solltest:
- `form_view` - Formular wurde angezeigt
- `form_start` - Nutzer hat angefangen zu tippen
- `form_submit` - Formular abgeschickt
- `web_vitals` - Performance-Metriken
- `engagement_score` - Nutzer-Bewertung
- `exit_intent` - Nutzer wollte gehen
- `rage_click` - Frustrierte Klicks
- `dead_click` - Klicks auf "tote" Elemente

### Conversions einrichten
GA4 → Konfigurieren → Ereignisse → Event als Conversion markieren:
- `form_submit`
- `phone_click` (wenn implementiert)
- `whatsapp_click`

---

## DSGVO Compliance

Die Implementation ist DSGVO-konform:
- [x] Cookie Banner fragt um Erlaubnis
- [x] Analytics läuft nur bei Consent (`analytics: true`)
- [x] IP-Anonymisierung aktiviert (`anonymize_ip: true`)
- [x] Datenschutz-Seite dokumentiert die Cookies

---

## Technische Details

**Datei:** `/components/GoogleAnalytics.tsx`
**Zeilen:** ~1500
**Integration:**
- Layout: `/app/layout.tsx`
- Form: `/components/ContactForm.tsx`
- Consent: `/components/CookieBanner.tsx`

**Exports für manuelle Nutzung:**
```typescript
import { analytics, useFormTracking, trackEvent, trackConversion } from '@/components/GoogleAnalytics'

// Beispiele:
analytics.servicePageViewed('Büroreinigung', 'Reinigung')
analytics.ctaClicked('Jetzt anfragen', 'header', '/kontakt')
analytics.quoteRequested('Facility Management', { size: '500qm' })
```

---

**Erstellt:** November 2024
**Letztes Update:** Warten auf GA4 Setup
