# FIMI Website Tasks - Status-Tracker

**Quelle:** FIMI_Website_TODOs.md (HEILIGER GRAL - alle Tasks basieren darauf!)
**Stand:** 2025-12-06
**Letzter Report:** R0003
**Aktueller Sprint:** Sprint 1 (P0 - Go-Live-Blocker)

---

## Entscheidungen (User muss bestatigen vor Umsetzung)

| ID | Beschreibung (aus TODO-Liste) | Status |
|----|-------------------------------|--------|
| D1 | Logos/Kundennamen entfernen, solange keine schriftliche Freigabe vorliegt | [OK] |
| D2 | ISO-Zertifizierungs-Claims vollstandig entfernen (bis Zertifikat vorliegt) | [OK] |
| D3 | Referenzen-Seite wird zu "Projekte" (anonymisierte Case-Cards) | [OK] |
| D4 | Sonderleistungen: umgebaut zu Event- & Veranstaltungsreinigung (AUG-Risiko beseitigt) | [OK] |

---

## Sprint 1: P0 - Go-Live-Blocker (20 Tasks)

| Nr | Task (exakt aus TODO-Liste) | Status | Report | DoD |
|----|----------------------------|--------|--------|-----|
| 1 | NAP konsistent (Name/Adresse/Telefon/E-Mail) - Single Source of Truth | [X] | R0003 | Site-weit nur eine Telefonnummer/E-Mail/Adresse |
| 2 | "Trusted by / Logos / grosse Kunden" komplett entfernen (bis Freigaben da) | [X] | R0001 | Keine Logos, keine Grosskundennamen |
| 3 | ISO-Claims vollstandig entfernen (bis zertifiziert) | [X] | R0001 | Site-Suche nach "ISO" = 0 Treffer |
| 4 | Unfertige Inhalte entfernen (z.B. "Beschreibung folgt") | [ ] | - | Keine Placeholder-Texte im Frontend |
| 5 | Sonderleistungen/Personaldienstleistungen: Positionierung fix (AUG-Risiko) | [X] | R0002 | Keine "Personaldienstleistungen" ohne rechtliche Basis |
| 6 | SLAs & Versprechen vereinheitlichen (z.B. "2h" vs "24h") | [ ] | - | Jede CTA-Sektion nutzt denselben SLA-Text |
| 7 | Rechtliches auditieren: Impressum, Datenschutz, AGB | [ ] | - | Checkliste abgehakt (Anhang B) |
| 8 | Consent/Tracking: nichts tracken vor Zustimmung | [ ] | - | Vor Consent keine Tracking-Requests |
| 9 | Kontaktformulare: Validiere sauber + klare Success-UX | [ ] | - | Formular-Flow getestet (Mobile/Desktop) |
| 10 | Spam-Schutz (ohne UX zu zerstoren) | [ ] | - | Spam-Tests werden geblockt, echte User nicht |
| 11 | HTML-Sitemap/Navigation: Vollstandigkeit & keine toten Links | [ ] | - | Kein 404 aus Sitemap |
| 12 | XML-Sitemap + robots.txt + Search Console Setup | [ ] | - | Search Console zeigt Sitemap "Success" |
| 13 | Canonicals pro Seite | [ ] | - | Crawl zeigt korrektes rel=canonical |
| 14 | Title/Meta unique je Seite (kein generisches Pattern) | [ ] | - | 0 doppelte Titles |
| 15 | OG/Twitter + Favicons | [ ] | - | Social share preview sieht sauber aus |
| 16 | 404/500 UX + Logging | [ ] | - | 404 Seite mit funktionierender Navigation |
| 17 | Security-Headers Basis | [ ] | - | Securityheaders-Check grun |
| 18 | Accessibility Basics | [ ] | - | Lighthouse Accessibility > 90 |
| 19 | Doppelte DOM-Inhalte durch Slider/Marquee korrigieren | [ ] | - | Screenreader liest keine doppelten Listen |
| 20 | Core Web Vitals absichern (LCP/INP/CLS) | [ ] | - | Lighthouse Performance > 85 |

**Sprint 1 Fortschritt:** 4/20 (20%)

---

## Sprint 2: P1 - Wachstum (30 Tasks: 21-50)

| Nr | Task (exakt aus TODO-Liste) | Status |
|----|----------------------------|--------|
| 21 | Startseite: 1 primarer CTA + glasklare Value Prop | [ ] |
| 22 | "Warum wir?" von Behauptung zu Beleg | [ ] |
| 23 | Referenzseite umbauen zu "Projekte & Qualitat" | [ ] |
| 24 | Jede Leistungseite: Scope-Box (drin/nicht drin/Intervalle) | [ ] |
| 25 | Jede Branchenseite: 1-2 branchenspezifische Proofs | [ ] |
| 26 | Interne Verlinkung: Branche → Leistungen → Kontakt | [ ] |
| 27 | Glossar: Related Services/Artikel | [ ] |
| 28 | News: E-E-A-T (Autor, Datum, Quellen, Updates) | [ ] |
| 29 | Stil/Orthografie: einheitlich (Sie/Du, aa/ae etc.) | [ ] |
| 30 | Navigation nach Umsatzwahrscheinlichkeit sortieren | [ ] |
| 31 | Mobile Sticky CTA (Anrufen/Angebot) | [ ] |
| 32 | Kontaktseite: "Ruckrufzeitfenster" + Upload optional | [ ] |
| 33 | Notfall-Claims nur, wenn operativ garantiert | [ ] |
| 34 | Bild-Shotlist pro Seite | [ ] |
| 35 | Vertrauen: Versicherungen/Arbeitsschutz/Schulungen | [ ] |
| 36 | Google Business Profile (GBP) + NAP anpassen | [ ] |
| 37 | Service Area klar (ohne Keyword-Spam) | [ ] |
| 38 | Schema.org: LocalBusiness/Service/FAQ/Article/Breadcrumb | [ ] |
| 39 | Breadcrumb UI + Schema | [ ] |
| 40 | Heading Audit (1xH1, logisch H2/H3) | [ ] |
| 41 | "18 Services" Claim nur, wenn uberall wahr | [ ] |
| 42 | Template-Nahe reduzieren: 10-20% Unique Proof je Seite | [ ] |
| 43 | Fonts optimieren (self-host/subset) | [ ] |
| 44 | Bilder: AVIF/WebP, fixe Dimensions, Lazyload | [ ] |
| 45 | prefers-reduced-motion respektieren | [ ] |
| 46 | "Kunden vertrauen uns" ersetzen durch "So sichern wir Qualitat" | [ ] |
| 47 | Karriere: Prozess klar (Dauer, Schritte, Ansprechpartner) | [ ] |
| 48 | Tracking/Attribution: Events definieren | [ ] |
| 49 | Lead-Qualifizierung light (3-5 Pflichtfragen) | [ ] |
| 50 | Content-Design: Tabellen/Checklisten statt Fliesstext | [ ] |

**Sprint 2 Fortschritt:** 0/30 (0%)

---

## Sprint 3: P2 - Moat (15 Tasks: 51-65)

| Nr | Task (exakt aus TODO-Liste) | Status |
|----|----------------------------|--------|
| 51 | 1 klarer Positionierungs-Pfeiler | [ ] |
| 52 | Flywheel operationalisieren (Case → Proof → Premium Clients) | [ ] |
| 53 | Angebotsprozess produktisieren (Audit → Angebot → Start) | [ ] |
| 54 | Preislogik transparent light (Range + Faktoren) | [ ] |
| 55 | Vergleichsseite (ohne Namen) "So unterscheiden wir uns" | [ ] |
| 56 | Download-Artefakte: Muster-Checkliste / Audit-Protokoll | [ ] |
| 57 | Lead Magnet pro Branche (Reinigungsplan-Vorlage) | [ ] |
| 58 | Review-Engine (automatisierte Bitte nach 2-4 Wochen) | [ ] |
| 59 | SEO-Pillar/Cluster (Leistung → FAQ/Glossar/Branchen) | [ ] |
| 60 | Template-Governance: Metadata/Schema/CTAs zentralisieren | [ ] |
| 61 | Monitoring: CWV + Uptime + Error Tracking | [ ] |
| 62 | Claim-Policy (was darf gesagt werden, was braucht Beleg) | [ ] |
| 63 | Fokus: DACH/Region sitzt, bevor Internationalisierung | [ ] |
| 64 | A/B Tests (Start, Kontakt, Top-Leistung) | [ ] |
| 65 | Operations-Proof: echte Bilder + Prozess-Video | [ ] |

**Sprint 3 Fortschritt:** 0/15 (0%)

---

## Gesamt-Fortschritt

| Sprint | Tasks | Erledigt | Prozent |
|--------|-------|----------|---------|
| P0 | 20 | 4 | 20% |
| P1 | 30 | 0 | 0% |
| P2 | 15 | 0 | 0% |
| **TOTAL** | **65** | **4** | **6%** |

---

## Anderungs-Log

| Datum | Report | Was |
|-------|--------|-----|
| 2025-12-05 | R0001 | D1: Kundenlogos von 19 Seiten entfernt |
| 2025-12-05 | R0001 | D2: ISO-Claims von 35+ Dateien entfernt (inkl. Nachbesserung) |
| 2025-12-05 | R0002 | D3: Referenzen → Projekte (50 Einträge anonymisiert, Nav geändert) |
| 2025-12-06 | R0002 | D4: Sonderleistungen → Event-Reinigung (AUG-Risiko beseitigt, 6 Dateien) |
| 2025-12-06 | R0003 | P0-01: NAP konsistent - Telefonnummer vereinheitlicht (10 Dateien, 19 Ersetzungen) |
