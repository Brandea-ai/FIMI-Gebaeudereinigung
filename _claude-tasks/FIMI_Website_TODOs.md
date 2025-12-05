# FIMI Website – To‑Do Backlog (Go‑Live → Premium)
Stand: **2025‑12‑05**  
Ziel: Website wirkt **premium & vertrauenswürdig**, ist **rechts-/claim-sicher**, **SEO‑sauber** und **conversion‑stark**.

> Hinweis: Das ist keine Rechtsberatung. Für Impressum/DSGVO/AGB bitte final mit Fachanwalt/Datenschutzberater gegenprüfen.

---

## Entscheidungen (damit alles konsistent wird)
**D1 (jetzt):** Logos/Kundennamen entfernen, solange keine **schriftliche Freigabe** oder eindeutig belegbare Direktbeauftragung vorliegt.  
**D2 (jetzt):** ISO‑Zertifizierungs-Claims vollständig entfernen (bis Zertifikat vorliegt).  
**D3 (statt “Referenzen”):** Seite bleibt, aber wird zu **„Projekte & Qualität“** (anonymisierte Case‑Cards + Qualitätsnachweise).  
**D4:** Seite „Sonderleistungen / Personaldienstleistungen“ entweder **umstellen auf Reinigungs‑Add‑ons** oder **offline nehmen** (AÜG‑Risiko vermeiden).

---

## Prioritäten
- **P0 = Go‑Live‑Blocker** (Trust/Legal/Conversion/Indexierung)
- **P1 = Wachstum** (SEO/CRO/Content)
- **P2 = Moat** (Systematik, Flywheel, Skalierung ohne Qualitätsverlust)

Jeder Punkt hat:
- **Warum** (Impact)
- **Wie** (konkret)
- **Definition of Done (DoD)** (Abnahmekriterium)
- **Owner** (Rolle) + grober Aufwand

---

# P0 – Go‑Live‑Blocker (muss vor Live)
## 1) NAP konsistent (Name/Adresse/Telefon/E‑Mail) – Single Source of Truth
**Warum:** Vertrauen + Local‑SEO. Inkonsequenz wirkt wie Scam/Schlamperei.  
**Wie:** Ein zentraler Datensatz (z.B. `siteConfig.ts`) -> Header/Footer/Kontakt/Impressum/Schema speisen.  
**DoD:** Site‑weit kommt **nur eine** Telefonnummer/E‑Mail/Adresse vor (Suchlauf/grep bestätigt).  
**Owner:** Dev + Founder | Aufwand: M

## 2) „Trusted by / Logos / große Kunden“ komplett entfernen (bis Freigaben da sind)
**Warum:** Ohne Freigabe/klare Direktbeauftragung riskierst du irreführende Wirkung.  
**Wie:** Logo‑Sektionen/“Unternehmen vertrauen uns” entfernen oder durch neutrale „Einsatzumfelder“ ersetzen.  
**DoD:** Keine Logos, keine Großkundennamen, keine implizite Direktbeauftragung.  
**Owner:** Marketing/Founder + Dev | Aufwand: S

## 3) ISO‑Claims vollständig entfernen (bis zertifiziert)
**Warum:** „Nach ISO Standards“ wird oft als „zertifiziert“ verstanden -> Trust/Legal‑Risiko.  
**Wie:** Alle ISO‑Nennungen raus; stattdessen QM‑Belege (Checklisten/Abnahme/Eskalation) zeigen.  
**DoD:** Site‑Suche nach „ISO“ liefert 0 Treffer (oder nur in Roadmap intern, nicht öffentlich).  
**Owner:** Content/Founder + Dev | Aufwand: S

## 4) Unfertige Inhalte entfernen (z.B. „Beschreibung folgt“)
**Warum:** Killer für Premium‑Wahrnehmung.  
**Wie:** Seite fertig schreiben oder aus Navigation/Sitemap entfernen + ggf. `noindex`.  
**DoD:** Keine Placeholder‑Texte mehr im Frontend.  
**Owner:** Content + Dev | Aufwand: S–M

## 5) Sonderleistungen/Personaldienstleistungen: Positionierung fix (AÜG‑Risiko)
**Warum:** „Personal stellen“ kann Arbeitnehmerüberlassung sein -> Erlaubnis-/Risiko‑Thema.  
**Wie (Option A):** Seite umbauen auf **Reinigungs‑Add‑ons** (Grundreinigung, Sonderreinigung, Bauendreinigung, etc.).  
**Wie (Option B):** Seite offline + `noindex`, bis legal/geschäftlich sauber entschieden.  
**DoD:** Keine Formulierungen wie „Personaldienstleistungen“/„Zeitarbeit“/„Personal stellen“ ohne rechtliche Basis.  
**Owner:** Founder + ggf. Legal + Dev | Aufwand: M

## 6) SLAs & Versprechen vereinheitlichen (z.B. „2h“ vs „24h“)
**Warum:** Widersprüche = „Marketing‑Fantasie“.  
**Wie:** Ein klares Versprechen + Bedingungen (Werktage, Region, Notfälle). In allen Templates identisch.  
**DoD:** Jede CTA‑Sektion nutzt denselben SLA‑Text aus zentraler Config.  
**Owner:** Founder + Marketing + Dev | Aufwand: S

## 7) Rechtliches auditieren: Impressum, Datenschutz, AGB (Realität ≙ Text)
**Warum:** Abmahn-/Trust‑Risiko.  
**Wie:** Tools/Forms/Tracking/Hosting exakt abbilden; Verantwortlichkeiten korrekt; Kontakt identisch zu NAP.  
**DoD:** Checkliste abgehakt (siehe Anhang „Legal‑Check“).  
**Owner:** Founder + Legal/DSB + Dev | Aufwand: L

## 8) Consent/Tracking: nichts tracken vor Zustimmung
**Warum:** DSGVO + Seriosität.  
**Wie:** Consent‑Banner mit „Ablehnen“ gleichwertig; Blocken für Analytics/Maps/Fonts von Dritten.  
**DoD:** Netzwerkanalyse zeigt: vor Consent keine Tracking‑Requests.  
**Owner:** Dev + DSB | Aufwand: M

## 9) Kontaktformulare: Validiere sauber + klare Success‑UX
**Warum:** Leads gehen sonst verloren.  
**Wie:** Inline‑Validierung, klare Fehlermeldungen, Success‑State + nächster Schritt („Wir melden uns bis …“).  
**DoD:** Formular-Flow getestet (Mobile/Desktop, Error-Fälle).  
**Owner:** Dev + Marketing | Aufwand: M

## 10) Spam-Schutz (ohne UX zu zerstören)
**Warum:** Öffentliche Forms werden gespammt.  
**Wie:** Honeypot + Rate‑Limit + serverseitige Validierung; optional Turnstile/reCAPTCHA nur wenn nötig.  
**DoD:** Spam‑Tests (10 Requests/s) werden geblockt, echte User nicht.  
**Owner:** Dev | Aufwand: S–M

## 11) HTML‑Sitemap/Navigation: Vollständigkeit & keine toten Links
**Warum:** Nutzerführung + Crawl.  
**Wie:** Sitemap aus derselben Route‑Quelle generieren wie Navigation.  
**DoD:** Kein 404 aus Sitemap; enthält alle indexierbaren Seiten.  
**Owner:** Dev | Aufwand: S

## 12) XML‑Sitemap + robots.txt + Search Console Setup
**Warum:** Indexierung kontrollieren.  
**Wie:** `/sitemap.xml` generieren; robots verlinkt; Search Console Property + Einreichung.  
**DoD:** Search Console zeigt Sitemap „Success“ + Indexierung läuft.  
**Owner:** Dev + SEO | Aufwand: S–M

## 13) Canonicals pro Seite
**Warum:** Duplicate/Param‑Chaos verhindern.  
**Wie:** Self‑canonical für alle statischen Seiten, saubere URLs.  
**DoD:** Crawl zeigt korrektes `rel=canonical` überall.  
**Owner:** Dev | Aufwand: S

## 14) Title/Meta unique je Seite (kein generisches Pattern)
**Warum:** CTR + Google rewrites vermeiden.  
**Wie:** Title‑Generator + Unique Hook (Service/Ort/USP).  
**DoD:** 0 doppelte Titles in SEO‑Crawl.  
**Owner:** SEO + Content + Dev | Aufwand: M

## 15) OG/Twitter + Favicons
**Warum:** Teilen/Brand wirkt sonst billig.  
**Wie:** globale Defaults + Template‑OG images (Service/Branche/News).  
**DoD:** Social share preview sieht sauber aus.  
**Owner:** Dev + Design | Aufwand: M

## 16) 404/500 UX + Logging
**Warum:** Sackgassen kosten Vertrauen.  
**Wie:** 404 mit „Top 5 Seiten“ + Kontakt CTA; Error logging (Sentry o.ä.).  
**DoD:** Test: falsche URL -> 404 Seite mit funktionierender Navigation.  
**Owner:** Dev | Aufwand: S–M

## 17) Security-Headers Basis
**Warum:** Profi‑Signal + Grundschutz.  
**Wie:** HSTS, X‑Content‑Type‑Options, Referrer‑Policy, Permissions‑Policy, CSP (vorsichtig).  
**DoD:** Securityheaders‑Check grün (ohne die Seite zu brechen).  
**Owner:** Dev | Aufwand: S–M

## 18) Accessibility Basics
**Warum:** Qualität/Professionalität + weniger Risiko.  
**Wie:** Labels, Fokuszustand, Tastaturbedienung, Heading‑Hierarchie (1×H1).  
**DoD:** Lighthouse Accessibility > 90; manuelles Tab‑Testing ok.  
**Owner:** Dev | Aufwand: M

## 19) Doppelte DOM‑Inhalte durch Slider/Marquee korrigieren
**Warum:** Screenreader/SEO/Performance.  
**Wie:** Duplikate `aria-hidden`, semantisch nur 1 Liste.  
**DoD:** Screenreader liest keine doppelten Listen; DOM‑Größe reduziert.  
**Owner:** Dev | Aufwand: S

## 20) Core Web Vitals absichern (LCP/INP/CLS)
**Warum:** Ranking + Conversion.  
**Wie:** Above‑the‑fold schlank, Layout‑Stabilität, JS minimieren, Lazyload below fold.  
**DoD:** Lighthouse Performance > 85; keine Layout‑Shifts.  
**Owner:** Dev | Aufwand: M–L

---

# P1 – Wachstum (nach Go‑Live)
## 21) Startseite: 1 primärer CTA + glasklare Value Prop
**Warum:** Weniger Verwirrung -> mehr Leads.  
**Wie:** „Angebot anfordern“ primär, „Anrufen“ sekundär; 1 Satz: für wen + was + Region.  
**DoD:** Above‑the‑fold hat 1 klare Handlungsoption.  
**Owner:** Marketing + Dev | Aufwand: S

## 22) „Warum wir?“ von Behauptung → Beleg
**Warum:** Adjektive überzeugen nicht, Belege schon.  
**Wie:** Proof‑Tiles: Checklisten, Objektleiter, Reaktionszeit, Abnahmen, Versicherung/Arbeitsschutz (nur wahr).  
**DoD:** Jede Kachel hat ein konkretes, überprüfbares Detail.  
**Owner:** Marketing/Founder | Aufwand: M

## 23) Referenzseite umbauen zu „Projekte & Qualität“ (ohne Kundennamen)
**Warum:** Premium‑Trust ohne Logo‑Risiko.  
**Wie:** 6–10 anonymisierte Case‑Cards + „Referenzen auf Anfrage“ + QM‑Nachweise.  
**DoD:** Seite ersetzt Logo‑Wand vollständig; klingt nicht defensiv, sondern souverän.  
**Owner:** Content + Marketing + Dev | Aufwand: M–L

## 24) Jede Leistungseite: Scope‑Box (drin / nicht drin / Intervalle)
**Warum:** Weniger Rückfragen, höhere Abschlussrate.  
**Wie:** Standard‑Checkliste + Add‑ons.  
**DoD:** Auf jeder Leistungsseite vorhanden.  
**Owner:** Content | Aufwand: M

## 25) Jede Branchenseite: 1–2 branchenspezifische Proofs
**Warum:** Differenzierung.  
**Wie:** typische Pain Points/Hotspots + Lösung (ohne Überclaim).  
**DoD:** Pro Branche 2 „nur dort relevante“ Details.  
**Owner:** Content + Ops | Aufwand: M

## 26) Interne Verlinkung: Branche → Leistungen → Kontakt
**Warum:** Kürzerer Weg zur Conversion.  
**Wie:** Modul „Typische Leistungen in dieser Branche“.  
**DoD:** Jede Branche verlinkt mind. 3 Leistungen + Kontakt.  
**Owner:** SEO + Dev | Aufwand: S–M

## 27) Glossar: Related Services/Artikel
**Warum:** TOFU → MOFU.  
**Wie:** Am Ende jedes Glossarartikels: „In der Praxis…“ + 2 Links.  
**DoD:** 80% der Glossarartikel haben Related‑Block.  
**Owner:** SEO + Content | Aufwand: M

## 28) News: E‑E‑A‑T (Autor, Datum, Quellen, Updates)
**Warum:** Vertrauen + Qualitätssignal.  
**Wie:** Autorenbox, Quellenliste, „zuletzt aktualisiert“.  
**DoD:** Jeder Artikel hat Autor + Quellen.  
**Owner:** Content | Aufwand: M

## 29) Stil/Orthografie: einheitlich (Sie/Du, aa/ae etc.)
**Warum:** Micro‑Qualität = Macro‑Trust.  
**Wie:** einmal redaktionell glätten + Linter/Spellcheck.  
**DoD:** 0 sichtbare „ae/ue“ Artefakte, konsistente Anrede.  
**Owner:** Content | Aufwand: M

## 30) Navigation nach Umsatzwahrscheinlichkeit sortieren
**Warum:** Weniger Entscheidungsstress.  
**Wie:** Top‑Leistungen in Menü; Rest über Hub.  
**DoD:** Menü zeigt max. 6 Top‑Items pro Kategorie.  
**Owner:** Marketing + Dev | Aufwand: S

## 31) Mobile Sticky CTA (Anrufen / Angebot)
**Warum:** Mobile konvertiert über direkte Actions.  
**Wie:** Sticky bar mit 2 Buttons, nicht mehr.  
**DoD:** Sticky nur auf Mobile, keine Überdeckung.  
**Owner:** Dev | Aufwand: S

## 32) Kontaktseite: “Rückrufzeitfenster” + Upload optional
**Warum:** Planbarkeit erhöht Conversion.  
**Wie:** Dropdown „Rückruf: 9–12 / 12–15 / 15–18“. Upload für Grundriss/Bilder.  
**DoD:** Formular bleibt kurz; optionaler Upload funktioniert.  
**Owner:** Dev + Marketing | Aufwand: M

## 33) Notfall‑Claims nur, wenn operativ garantiert
**Warum:** Sonst 1‑Stern‑Reviews.  
**Wie:** Bedingungen definieren (Region/Zeiten).  
**DoD:** Notfalltext ist wahr + intern abgesichert.  
**Owner:** Ops/Founder | Aufwand: S

## 34) Bild‑Shotlist pro Seite (bevor echte Bilder gebaut werden)
**Warum:** Verhindert Stock‑Matsch.  
**Wie:** Pro Template 6‑10 Motive (Team, Equipment, Vorher/Nachher, Objektarten).  
**DoD:** Shotlist existiert als Doc.  
**Owner:** Marketing/Design | Aufwand: S–M

## 35) Vertrauen: Versicherungen/Arbeitsschutz/Schulungen (nur belegbar)
**Warum:** B2B Risiko senken.  
**Wie:** kurze Sektion + Beleg (ohne vertrauliche Dokumente öffentlich).  
**DoD:** Keine unbelegbaren Superlative.  
**Owner:** Founder/Ops | Aufwand: M

## 36) Google Business Profile (GBP) + NAP anpassen
**Warum:** Local‑SEO Währung.  
**Wie:** Kategorien, Services, Fotos, Q&A, Beiträge, Review‑Prozess.  
**DoD:** GBP vollständig + konsistent.  
**Owner:** Marketing | Aufwand: M

## 37) Service Area klar (ohne Keyword‑Spam)
**Warum:** Relevanz.  
**Wie:** Karte + Radius + Liste wichtiger Orte.  
**DoD:** Lesbar, nicht spammy.  
**Owner:** SEO + Content | Aufwand: S–M

## 38) Schema.org: LocalBusiness/Service/FAQ/Article/Breadcrumb
**Warum:** Machine readability + evtl. Rich Results.  
**Wie:** JSON‑LD je Template.  
**DoD:** Rich Results test „valid“.  
**Owner:** Dev + SEO | Aufwand: M

## 39) Breadcrumb UI + Schema
**Warum:** Orientierung + Linkkraft.  
**Wie:** Breadcrumb oben, konsistent.  
**DoD:** Auf Leistung/Branche/Artikel vorhanden.  
**Owner:** Dev | Aufwand: S

## 40) Heading Audit (1×H1, logisch H2/H3)
**Warum:** Accessibility/SEO.  
**Wie:** Template‑Fix + Content‑Review.  
**DoD:** Keine Heading‑Sprünge.  
**Owner:** Dev + Content | Aufwand: S–M

## 41) „18 Services“ Claim nur, wenn überall wahr
**Warum:** Details entscheiden.  
**Wie:** Zentrale Liste + Anzeige daraus. oder Claim entfernen.  
**DoD:** Zählung stimmt auf allen Seiten.  
**Owner:** Dev + Marketing | Aufwand: S

## 42) Template‑Nähe reduzieren: 10–20% Unique Proof je Seite
**Warum:** Vermeidet Thin‑Content Eindruck.  
**Wie:** 1 Mini‑Case, 1 Prozessdetail, 1 regionaler Bezug pro Seite.  
**DoD:** Content‑Check zeigt Unique‑Absätze.  
**Owner:** Content | Aufwand: L

## 43) Fonts optimieren (self-host/subset)
**Warum:** LCP/CLS.  
**Wie:** Variable font subset, preload minimal.  
**DoD:** Lighthouse: keine Font‑Shift.  
**Owner:** Dev | Aufwand: S–M

## 44) Bilder später: AVIF/WebP, fixe Dimensions, Lazyload
**Warum:** CWV.  
**Wie:** next/image, `sizes`, placeholder blur.  
**DoD:** LCP bleibt stabil nach Bild‑Rollout.  
**Owner:** Dev + Design | Aufwand: M

## 45) prefers-reduced-motion respektieren
**Warum:** Accessibility + Profi.  
**Wie:** Animationen deaktivieren/vereinfachen für Nutzerpräferenz.  
**DoD:** OS setting -> weniger Motion sichtbar.  
**Owner:** Dev | Aufwand: S

## 46) “Kunden vertrauen uns” ersetzen durch “So sichern wir Qualität”
**Warum:** Social Proof ohne Logos.  
**Wie:** Prozess/Artefakte statt Logos.  
**DoD:** Keine unbewiesenen Trust‑Behauptungen.  
**Owner:** Marketing | Aufwand: S

## 47) Karriere: Prozess klar (Dauer, Schritte, Ansprechpartner)
**Warum:** weniger Dropoff.  
**Wie:** 3‑Step Timeline + Ansprechpartner.  
**DoD:** Bewerber weiß: was passiert wann.  
**Owner:** HR/Founder + Content | Aufwand: S

## 48) Tracking/Attribution: Events definieren
**Warum:** Optimierung ohne Blindflug.  
**Wie:** Events: call click, form submit, CTA click, scroll depth.  
**DoD:** Dashboard mit Baseline‑CR.  
**Owner:** Dev + Marketing | Aufwand: M

## 49) Lead‑Qualifizierung light (3–5 Pflichtfragen)
**Warum:** bessere Angebote, weniger Müll‑Leads.  
**Wie:** Objektart, PLZ, Fläche grob, Frequenz, Startdatum.  
**DoD:** Formular bleibt < 60 Sekunden.  
**Owner:** Marketing + Dev | Aufwand: S

## 50) Content‑Design: Tabellen/Checklisten statt Fließtext
**Warum:** Scanbarkeit + Professionalität.  
**Wie:** Paket‑Boxen, Listen, „Was ist inklusive“.  
**DoD:** Auf Top‑Seiten umgesetzt.  
**Owner:** Content + Dev | Aufwand: M

---

# P2 – Moat (Premium-System, Skalierung)
## 51) 1 klarer Positionierungs‑Pfeiler (kein “wir sind zuverlässig”)
**Warum:** Sonst Preiskampf.  
**Wie:** z.B. „Messbare Sauberkeit“ (Audits/Protokolle), oder „Industrie‑Spezialist“.  
**DoD:** 1 Satz Positionierung überall konsistent.  
**Owner:** Founder + Marketing | Aufwand: M

## 52) Flywheel operationalisieren (Case → Proof → Premium Clients)
**Warum:** Wachstum ohne Qualitätsverlust.  
**Wie:** Case‑Template + Review‑System + Content‑Rhythmus.  
**DoD:** 1 Case/Monat publiziert.  
**Owner:** Marketing | Aufwand: M

## 53) Angebotsprozess produktisieren (Audit → Angebot → Start)
**Warum:** Time‑to‑Value runter.  
**Wie:** Standardpaket „Objekt‑Check“ + Angebots‑SLA.  
**DoD:** Prozess dokumentiert + trainiert.  
**Owner:** Ops/Founder | Aufwand: M

## 54) Preislogik transparent light (Range + Faktoren)
**Warum:** filtert schlechte Leads, erhöht Trust.  
**Wie:** „ab …“ + 5 Preisfaktoren.  
**DoD:** Keine falschen Erwartungen.  
**Owner:** Founder + Marketing | Aufwand: S–M

## 55) Vergleichsseite (ohne Namen) “So unterscheiden wir uns”
**Warum:** Käufer vergleichen ohnehin.  
**Wie:** Kriterienliste (SLA, QA, Doku, Personal).  
**DoD:** Seite wirkt sachlich, nicht aggressiv.  
**Owner:** Marketing | Aufwand: M

## 56) Download‑Artefakte: Muster‑Checkliste / Audit‑Protokoll (anonym)
**Warum:** “Show, don’t tell”.  
**Wie:** PDF Download + CTA.  
**DoD:** 1–2 Downloads live, sauber gebrandet.  
**Owner:** Ops + Marketing | Aufwand: M

## 57) Lead Magnet pro Branche (Reinigungsplan‑Vorlage)
**Warum:** E‑Mail Leads + Authority.  
**Wie:** Template + DSGVO‑sauberer Opt‑in.  
**DoD:** 1 Lead Magnet live.  
**Owner:** Marketing + Dev | Aufwand: L

## 58) Review‑Engine (automatisierte Bitte nach 2–4 Wochen)
**Warum:** Local‑Rank + Vertrauen.  
**Wie:** Prozess + Timing + Link.  
**DoD:** 10 neue Reviews/Monat als Ziel.  
**Owner:** Ops/Marketing | Aufwand: M

## 59) SEO‑Pillar/Cluster (Leistung → FAQ/Glossar/Branchen)
**Warum:** Autorität statt Streuung.  
**Wie:** 1 Pillar/Monat + 3 Cluster‑Artikel.  
**DoD:** Interlinking‑Map existiert.  
**Owner:** SEO/Content | Aufwand: L

## 60) Template‑Governance: Metadata/Schema/CTAs zentralisieren
**Warum:** 41 Seiten = Fehler multiplizieren sich.  
**Wie:** Shared components + content schema.  
**DoD:** Neue Seiten erben alle Standards automatisch.  
**Owner:** Dev | Aufwand: M

## 61) Monitoring: CWV + Uptime + Error Tracking
**Warum:** Profi‑Betrieb.  
**Wie:** Vercel Analytics + Sentry + UptimeRobot o.ä.  
**DoD:** Alerts existieren.  
**Owner:** Dev | Aufwand: S–M

## 62) Claim‑Policy (was darf gesagt werden, was braucht Beleg)
**Warum:** verhindert neue Trust‑Cracks.  
**Wie:** interne Checkliste vor Publish.  
**DoD:** Jede neue Seite geht durch Claim‑Check.  
**Owner:** Founder | Aufwand: S

## 63) Fokus: DACH/Region sitzt, bevor Internationalisierung
**Warum:** Streuverlust vermeiden.  
**Wie:** erst Local dominieren (GBP, Reviews, Cases).  
**DoD:** klare Roadmap.  
**Owner:** Founder | Aufwand: S

## 64) A/B Tests (Start, Kontakt, Top‑Leistung)
**Warum:** CRO‑Hebel.  
**Wie:** CTA‑Text, Proof‑Block, Formularlänge.  
**DoD:** 1 Test/Monat.  
**Owner:** Marketing + Dev | Aufwand: M

## 65) Operations‑Proof: echte Bilder + Prozess‑Video (später)
**Warum:** Gebäudereinigung = Ausführung.  
**Wie:** 60–90 Sek „So arbeiten wir“ + echte Fotos.  
**DoD:** 1 Video + neue Bildwelt live.  
**Owner:** Marketing + Ops | Aufwand: L

---

# Anhang A – “Projekte & Qualität” (Copy‑Baukasten)
**Seitenname:** Projekte & Qualität  
**Intro (Beispiel):**  
„Wir liefern messbare Sauberkeit durch klare Abläufe, Objektleitung und dokumentierte Abnahmen. Ein Teil unserer Einsätze erfolgt direkt für Kunden, ein Teil als Nachunternehmer im Auftrag von Partnerunternehmen.“

## Case‑Card Template (anonym)
- Objektart: (z.B. Industrie, Büro, Praxis, Wohnanlage)  
- Region: (z.B. Raum Landshut/Niederbayern)  
- Umfang: (m² grob)  
- Frequenz: (täglich / 3×Woche)  
- Leistungen: (3–5 konkrete Punkte)  
- Rolle: Direkt / Nachunternehmer  
- Qualitätsnachweis: (z.B. Abnahmeprotokoll, Checkliste, Objektleiter, Reklamationsprozess)

## “Referenzen auf Anfrage” (sauber)
„Referenzkontakte stellen wir – abhängig von Freigaben und Projektart – auf Anfrage bereit.“

---

# Anhang B – Legal‑Check (Kurzliste)
- Impressum: Rechtsform, Vertretungsberechtigte, Adresse, Kontakt, ggf. Register/USt‑ID korrekt  
- Datenschutz: eingesetzte Tools (Analytics, Maps, Fonts, Formprovider), Rechtsgrundlagen, Auftragsverarbeitung  
- AGB: Leistungsumfang, Abnahme, Mängel, Haftung, Zahlungsziele, Kündigung, Datenschutz-Verweise  
- Claims: keine “Zertifizierung” ohne Zertifikat, keine “Großkunden” ohne Freigabe, keine unrealistischen SLA‑Versprechen

---

# Umsetzungsvorschlag (Mini‑Sprintplan)
**Sprint 1 (P0, 5–10 Tage):** 1–20 + D1–D4 umsetzen.  
**Sprint 2 (P1, 2–3 Wochen):** 21–50 auf Top‑Seiten zuerst (Start, Kontakt, 5 Top‑Leistungen, 3 Top‑Branchen).  
**Sprint 3 (P2, 1–3 Monate):** 51–65, Cases/Reviews/Monitoring.

