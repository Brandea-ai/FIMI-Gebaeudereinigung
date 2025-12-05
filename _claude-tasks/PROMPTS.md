# FIMI Tasks - Prompts

## Start-Prompt (JEDE neue Session - PFLICHT)

```
FIMI Website Task-System aktiv.

SCHRITT 1 - Task-System einlesen:
- Lies /_claude-tasks/RULES.md
- Lies /_claude-tasks/FIMI_Website_TODOs.md (DER HEILIGE GRAL!)
- Lies /_claude-tasks/STATUS.md
- Lies ALLE Reports in /_claude-tasks/reports/ (chronologisch)

SCHRITT 2 - Projekt vollstandig verstehen:
- Lies /FIMI-STANDARDS.md
- Lies /MASTERPLAN-WEBSITE-REDESIGN.md
- Verschaffe dir Uberblick uber alle Seiten/Komponenten
- Verstehe die Projektstruktur

SCHRITT 3 - Bestatigung:
- Fasse zusammen was bereits erledigt wurde (aus Reports)
- Nenne den nachsten offenen Task (aus STATUS.md)
- Bei Unklarheiten: Details in FIMI_Website_TODOs.md nachschlagen
- Warte auf meine Bestatigung bevor du arbeitest

WICHTIG:
- FIMI_Website_TODOs.md ist die einzige Quelle der Wahrheit!
- Keine Arbeit ohne vollstandigen Projektuberblick!
```

---

## P0-01: NAP konsistent

```
TASK: P0-01 - NAP konsistent

1. Erstelle lib/site-config.ts mit Kontaktdaten
2. Grep nach Telefon/Adresse/Email
3. Ersetze hardcoded durch Config
4. Prufe: Header, Footer, Kontakt, Impressum, Schema

KEINE visuellen Anderungen!

Danach: Report R0002.md + STATUS.md
```

## P0-02: Kundenlogos

```
TASK: P0-02 - Kundenlogos entfernen

VOR-CHECK: D1 muss bestatigt sein!

1. Finde Logo-Slider Komponenten
2. Finde "Trusted by" Texte
3. Entferne oder ersetze neutral

Danach: Report + STATUS.md
```

## P0-03: ISO-Claims

```
TASK: P0-03 - ISO entfernen

VOR-CHECK: D2 muss bestatigt sein!

1. Grep: ISO, 9001, zertifiziert
2. Liste Fundstellen
3. Entferne

Danach: Report + STATUS.md
```

## P0-04: Placeholder

```
TASK: P0-04 - Placeholder entfernen

1. Grep: folgt, TODO, Lorem, coming soon
2. Liste Fundstellen
3. Frage User was damit passieren soll

Danach: Report + STATUS.md
```

## P0-05: Sonderleistungen

```
TASK: P0-05 - Sonderleistungen

VOR-CHECK: D4 muss bestatigt sein!

Option A: Seite umschreiben
Option B: Seite offline + noindex

Danach: Report + STATUS.md
```

## P0-06: SLAs

```
TASK: P0-06 - SLAs vereinheitlichen

1. Grep: Stunde, Reaktion, melden
2. Liste alle Zeitversprechen
3. Frage User welches SLA gilt
4. Vereinheitliche

Danach: Report + STATUS.md
```

## P0-07 bis P0-20

Weitere Prompts werden erstellt wenn Sprint 1 fortschreitet.

---

## Quick-Reference

| Task | Aktion |
|------|--------|
| P0-01 | site-config.ts |
| P0-02 | Logos weg |
| P0-03 | ISO weg |
| P0-04 | Placeholder |
| P0-05 | Sonderleistungen |
| P0-06 | SLAs |
| P0-07 | Legal audit |
| P0-08 | Consent |
| P0-09 | Formular |
| P0-10 | Spam |
| P0-11 | HTML-Sitemap |
| P0-12 | XML-Sitemap |
| P0-13 | Canonicals |
| P0-14 | Meta |
| P0-15 | OG/Social |
| P0-16 | Error pages |
| P0-17 | Headers |
| P0-18 | A11y |
| P0-19 | DOM |
| P0-20 | Performance |
