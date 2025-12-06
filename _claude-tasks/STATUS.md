# FIMI Website Tasks - Status-Tracker

**Quelle:** FIMI_Website_TODOs.md (HEILIGER GRAL - alle Tasks basieren darauf!)
**Stand:** 2025-12-06
**Letzter Report:** R0007
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
| 4 | Unfertige Inhalte entfernen (z.B. "Beschreibung folgt") | [X] | R0003 | Keine Placeholder-Texte im Frontend |
| 5 | Sonderleistungen/Personaldienstleistungen: Positionierung fix (AUG-Risiko) | [X] | R0002 | Keine "Personaldienstleistungen" ohne rechtliche Basis |
| 6 | SLAs & Versprechen vereinheitlichen (z.B. "2h" vs "24h") | [X] | R0004 | Jede CTA-Sektion nutzt denselben SLA-Text |
| 7 | Rechtliches auditieren: Impressum, Datenschutz, AGB | [X] | R0004 | Checkliste abgehakt (Anhang B) |
| 8 | Consent/Tracking: nichts tracken vor Zustimmung | [X] | R0004 | Vor Consent keine Tracking-Requests |
| 9 | Kontaktformulare: Validiere sauber + klare Success-UX | [X] | R0004 | Formular-Flow getestet (Mobile/Desktop) |
| 10 | Spam-Schutz (ohne UX zu zerstoren) | [X] | R0004 | Spam-Tests werden geblockt, echte User nicht |
| 11 | HTML-Sitemap/Navigation: Vollstandigkeit & keine toten Links | [X] | R0005 | Kein 404 aus Sitemap |
| 12 | XML-Sitemap + robots.txt + Search Console Setup | [X] | R0005 | Technisch fertig, SC manuell |
| 13 | Canonicals pro Seite | [X] | R0005 | metadataBase gesetzt, auto-canonicals |
| 14 | Title/Meta unique je Seite (kein generisches Pattern) | [X] | R0005 | 0 doppelte Titles |
| 15 | OG/Twitter + Favicons | [X] | R0006 | Social share preview sieht sauber aus |
| 16 | 404/500 UX + Logging | [X] | R0006 | 404 Seite mit funktionierender Navigation |
| 17 | Security-Headers Basis | [X] | R0006 | Securityheaders-Check grun |
| 18 | Accessibility Basics | [~] | R0007 | Startseite fertig, weitere Seiten offen |
| 19 | Doppelte DOM-Inhalte durch Slider/Marquee korrigieren | [~] | R0007 | Startseite fertig (PartnerLogosSlider) |
| 20 | Core Web Vitals absichern (LCP/INP/CLS) | [~] | R0007 | Startseite fertig, Lighthouse-Test offen |

**Sprint 1 Fortschritt:** 17/20 (85%)

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
| P0 | 20 | 17 | 85% |
| P1 | 30 | 0 | 0% |
| P2 | 15 | 0 | 0% |
| **TOTAL** | **65** | **17** | **26%** |

---

## Anderungs-Log

| Datum | Report | Was |
|-------|--------|-----|
| 2025-12-05 | R0001 | D1: Kundenlogos von 19 Seiten entfernt |
| 2025-12-05 | R0001 | D2: ISO-Claims von 35+ Dateien entfernt (inkl. Nachbesserung) |
| 2025-12-05 | R0002 | D3: Referenzen → Projekte (50 Einträge anonymisiert, Nav geändert) |
| 2025-12-06 | R0002 | D4: Sonderleistungen → Event-Reinigung (AUG-Risiko beseitigt, 6 Dateien) |
| 2025-12-06 | R0003 | P0-01: NAP konsistent - Telefonnummer vereinheitlicht (10 Dateien, 19 Ersetzungen) |
| 2025-12-06 | R0003 | P0-04: Placeholder entfernt - 11 unbenutzte Dateien gelöscht |
| 2025-12-06 | R0004 | P0-06 bis P0-10: SLAs, Rechtliches, Consent, Formular, Spam-Schutz + Re-Audit P0-07 (9 Dateien, Lieferanten-Disclaimer) |
| 2025-12-06 | R0005 | P0-11: HTML-Sitemap vollständig (2 Leistungen ergänzt, Referenzen → Projekte) |
| 2025-12-06 | R0005 | P0-12: XML-Sitemap + robots.txt bereits korrekt |
| 2025-12-06 | R0005 | P0-13: Canonicals via metadataBase bereits korrekt |
| 2025-12-06 | R0005 | P0-14: Title/Meta unique - 4 layout.tsx erstellt, 2 Titles verbessert |
| 2025-12-06 | R0006 | P0-15: OG/Twitter + Favicons - Logo als temp. OG-Image, 20 Dateien korrigiert |
| 2025-12-06 | R0006 | P0-16: 404/500 Error-Seiten erstellt (3 neue Dateien) |
| 2025-12-06 | R0006 | P0-17: Security-Headers in next.config.js (8 Header inkl. CSP) |
| 2025-12-06 | R0007 | P0-18/19/20: Startseite A11y-Fixes (PartnerLogosSlider, ProcessContainer, HeroContainer) |
| 2025-12-06 | R0007 | P0-18/19/20: Über-uns A11y-Fixes (7 Komponenten: aria-labelledby, aria-hidden) |
