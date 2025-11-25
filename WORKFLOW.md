# 🤖 WORKFLOW - Zusammenarbeit mit Claude Code

## Projektübersicht
**FIMI Gebäudereinigung** - Professionelle Website für Reinigungsdienstleistungen

---

## 🎯 Arbeitsmodus

### Deine Rolle (User)
- **Nutze NUR natürliche Sprache** (Deutsch)
- Beschreibe, was du möchtest
- Keine Code-Kenntnisse erforderlich
- Keine technischen Befehle nötig

### Meine Rolle (Claude)
- **Vollautomatisches Development**
- Code schreiben
- Git Commits & Push
- Vercel Deployment
- Fehleranalyse & Fixes
- Optimierung & Testing

---

## 🚀 Session-Start Kommando

**Bei jeder neuen Session sagst du einfach:**

```
"Lies alle MD-Dateien im Projekt und lass uns starten"
```

Ich werde dann:
1. WORKFLOW.md lesen (diese Datei)
2. Alle anderen relevanten .md Dateien lesen
3. Den Projektstand verstehen
4. Bereit sein für deine Anfragen

---

## 📋 Typische Anfragen

### Website-Änderungen
```
"Ändere die Farbe der Buttons zu Blau"
"Füge eine neue Seite für Kontakt hinzu"
"Mach die Navigation sticky"
```

### Neue Features
```
"Ich brauche ein Kontaktformular"
"Füge eine Galerie mit Vorher/Nachher Bildern hinzu"
"Ich will einen Chatbot auf der Seite"
```

### Deployment
```
"Deploye die Änderungen auf Vercel"
"Pushe alles zu GitHub"
"Erstelle einen neuen Branch für Tests"
```

---

## 🔄 Workflow-Ablauf

### 1. Du beschreibst dein Wunsch
Beispiel: *"Ich möchte eine moderne Startseite mit Hero-Section und Testimonials"*

### 2. Ich erstelle einen Plan
- Zeige dir eine Todo-Liste
- Erkläre die Schritte
- Du kannst Feedback geben

### 3. Ich implementiere
- Schreibe den Code
- Teste lokal
- Zeige dir Fortschritt

### 4. Ich deploye
- Git Commit mit Beschreibung
- Push zu GitHub
- Vercel Auto-Deploy
- Gebe dir die Live-URL

---

## 🛠️ Technischer Stack

### Frontend
- **Next.js 14** (React Framework)
- **TypeScript** (Type-Safety)
- **Tailwind CSS** (Styling)
- **shadcn/ui** (UI Components)

### Backend
- **Next.js API Routes**
- **Resend** (Email Service)
- **Google Maps API** (Karten)
- **Gemini AI** (Chatbot)

### Deployment
- **Vercel** (Hosting & Auto-Deploy)
- **GitHub** (Version Control)

---

## 📁 Wichtige Dateien

### Konfiguration
- `.env` - API Keys & Tokens (GEHEIM, nie committen!)
- `package.json` - Dependencies
- `next.config.ts` - Next.js Config
- `vercel.json` - Vercel Config

### Dokumentation
- `WORKFLOW.md` - Diese Datei
- `README.md` - Projekt-Info
- `DEPLOYMENT.md` - Deployment-Anleitung (falls vorhanden)

---

## 🔐 Sicherheit & Tokens

### .env Datei
Diese Datei enthält sensible Tokens und bleibt **LOKAL**:

```env
# GitHub Token (für Deployment)
GITHUB_TOKEN=ghp_xxxxx

# Vercel Token (für Deployment)
VERCEL_TOKEN=xxxxx

# API Keys
GEMINI_API_KEY=xxxxx
RESEND_API_KEY=xxxxx
VITE_GOOGLE_MAPS_API_KEY=xxxxx
```

**WICHTIG:** Diese Datei wird NIEMALS zu Git gepusht!

---

## ✅ Best Practices

### Kommunikation
1. Sei spezifisch: *"Ändere die Button-Farbe zu #3B82F6"*
2. Gib Kontext: *"Für die Startseite brauche ich..."*
3. Frag nach: *"Zeig mir erst das Design"*

### Workflow
1. Kleine Schritte: Feature für Feature
2. Teste zwischendurch: *"Zeig mir das lokal"*
3. Deploye oft: Schnelles Feedback

### Git Commits
Ich erstelle automatisch sinnvolle Commit-Messages:
- `feat: Add contact form with validation`
- `fix: Repair navigation mobile responsiveness`
- `style: Update color scheme to brand colors`

---

## 🎨 Design-Prinzipien

### FIMI Gebäudereinigung Branding
- **Modern & Professionell**
- **Vertrauenswürdig & Sauber**
- **Responsive & Schnell**
- **Accessibility-First**

### Farben (Beispiel - anpassbar)
- Primary: Blau (#3B82F6)
- Secondary: Grün (#10B981)
- Accent: Gold (#F59E0B)
- Neutral: Grau-Töne

---

## 📞 Typische Use Cases

### 1. Neue Seite hinzufügen
```
Du: "Ich brauche eine Über-Uns Seite mit Team-Fotos"
Ich: [Erstelle Seite, füge Routing hinzu, deploye]
```

### 2. Design anpassen
```
Du: "Die Schrift ist zu klein auf Mobile"
Ich: [Analysiere, passe Responsive-Styles an, teste, deploye]
```

### 3. Feature hinzufügen
```
Du: "Ich will ein Anfrageformular mit Email-Benachrichtigung"
Ich: [Formular-Komponente, API Route, Email-Integration, Testing, Deploy]
```

### 4. Bug fixen
```
Du: "Die Navigation funktioniert nicht auf iPhone"
Ich: [Reproduziere, fixe Bug, teste iOS, deploye]
```

---

## 🔮 Erweiterte Features (auf Anfrage)

- **SEO Optimierung** - Meta Tags, Sitemap, Structured Data
- **Analytics** - Google Analytics, Vercel Analytics
- **Performance** - Image Optimization, Code Splitting
- **Internationalisierung** - Multi-Language Support
- **CMS Integration** - Headless CMS (Sanity, Strapi)
- **E-Commerce** - Preisrechner, Buchungssystem

---

## 📊 Deployment-Status Tracking

Nach jedem Deployment gebe ich dir:

```
✅ Code geschrieben
✅ Lokal getestet
✅ Git Commit erstellt
✅ Zu GitHub gepusht
✅ Vercel Build gestartet
✅ Live unter: https://deine-domain.vercel.app
```

---

## 🆘 Troubleshooting

### Build Fehler
Ich analysiere und fixe automatisch:
- TypeScript Errors
- ESLint Warnings
- Build Failures
- Deployment Issues

### Du musst nichts tun!
Sag einfach: *"Da ist ein Fehler"* und ich kümmere mich drum.

---

## 💡 Profi-Tipps

1. **Screenshots teilen**: Zeig mir Designs, die dir gefallen
2. **Beispiele nennen**: "Wie bei Firma X"
3. **Iterieren**: Wir können jederzeit anpassen
4. **Fragen stellen**: Keine Frage ist zu klein

---

## 🎯 Projekt-Ziele

- ✅ Moderne, professionelle Website
- ✅ Vollständig responsive
- ✅ SEO-optimiert
- ✅ Schnelle Ladezeiten
- ✅ Einfache Wartung
- ✅ Skalierbar für Wachstum

---

## 🚦 Nächste Schritte (Beispiel)

Wenn du eine komplett neue Website aufbauen willst:

1. **Startseite** - Hero, Services, Testimonials, CTA
2. **Services-Seite** - Detaillierte Leistungsübersicht
3. **Über Uns** - Team, Geschichte, Werte
4. **Kontakt** - Formular, Map, Kontaktdaten
5. **Features** - Chatbot, Preisrechner, Buchung
6. **Polish** - SEO, Performance, Analytics

Sag einfach: *"Lass uns mit Schritt 1 starten"*

---

**Version:** 1.0
**Erstellt:** 15. November 2025
**Letztes Update:** 15. November 2025

---

**Bereit? Dann lass uns loslegen! 🚀**
