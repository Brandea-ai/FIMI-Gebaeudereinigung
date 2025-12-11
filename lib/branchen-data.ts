// Branchen Data - Alle 12 Branchen
// SEO-optimiert aus KUNDENPERSPEKTIVE
// Keywords basierend auf echten Suchanfragen

export interface DetailedChallenge {
  titel: string
  beschreibung: string
  loesung: string
}

export interface FAQ {
  frage: string
  antwort: string
}

export interface GalleryImage {
  src: string
  alt: string
  caption: string
}

export interface ProcessStep {
  schritt: number
  titel: string
  beschreibung: string
}

export interface Branche {
  id: string
  slug: string
  name: string
  shortName: string
  // SEO Meta
  metaTitle: string
  metaDescription: string
  keywords: string[]
  // Kurztexte
  headline: string
  subheadline: string
  description: string
  // Langer SEO-Content (500+ Wörter)
  seoContent: string
  // Bilder
  heroImage: string
  gallery: GalleryImage[]
  icon: string
  // Detaillierte Inhalte
  detailedChallenges: DetailedChallenge[]
  services: string[]
  benefits: string[]
  processSteps: ProcessStep[]
  faqs: FAQ[]
}

export const branchen: Branche[] = [
  // ============================================
  // 1. BÜRO & VERWALTUNG
  // ============================================
  {
    id: '1',
    slug: 'buero-verwaltung',
    name: 'Büro & Verwaltung',
    shortName: 'Büro',
    metaTitle: 'Büroreinigung Landshut & München | Professionelle Gebäudereinigung',
    metaDescription: 'Professionelle Büroreinigung in Landshut, München & Bayern. Saubere Arbeitsplätze steigern Produktivität. ✓ Flexible Zeiten ✓ Festes Team ✓ Ab 2h Reaktionszeit',
    keywords: [
      'Büroreinigung Landshut', 'Büroreinigung München', 'Gebäudereinigung Büro',
      'Office Cleaning Bayern', 'Reinigungsfirma Büro', 'Unterhaltsreinigung Büro',
      'Büroreinigung wechseln', 'neue Reinigungsfirma Büro', 'Büro putzen lassen'
    ],
    headline: 'Büroreinigung die Ihre Mitarbeiter verdienen',
    subheadline: 'Produktive Teams brauchen saubere Arbeitsplätze',
    description: 'Professionelle Reinigung für Bürogebäude, Verwaltungen und Geschäftsräume in Landshut, München und ganz Bayern.',
    seoContent: `
## Warum professionelle Büroreinigung den Unterschied macht

Sie kennen das: Montag morgen, der erste Mitarbeiter betritt das Büro – und der Mülleimer ist noch voll vom Freitag. Die Kaffeeküche klebt, und im Konferenzraum stehen noch die Gläser vom letzten Meeting. Kein guter Start in die Woche.

**Saubere Büros sind keine Nebensache.** Studien zeigen, dass Mitarbeiter in sauberen Arbeitsumgebungen bis zu 15% produktiver sind. Krankmeldungen sinken, die Motivation steigt. Und wenn Kunden oder Geschäftspartner zu Besuch kommen, ist der erste Eindruck entscheidend.

### Was uns von anderen Reinigungsfirmen unterscheidet

Bei FIMI arbeiten **feste Teams**. Das bedeutet: Dieselben Reinigungskräfte kennen Ihr Büro, Ihre Abläufe, Ihre Besonderheiten. Kein ständiges Erklären, wo der Schlüssel liegt oder welche Bereiche besonders wichtig sind.

Wir reinigen **außerhalb Ihrer Kernarbeitszeiten** – früh morgens oder abends. So stören wir niemanden und Sie kommen in ein frisches Büro. Auf Wunsch auch am Wochenende.

### Unser Leistungsspektrum für Büros

- **Tägliche Unterhaltsreinigung**: Böden, Oberflächen, Papierkörbe, Sanitär
- **Regelmäßige Glasreinigung**: Fenster, Glastrennwände, Eingangsbereiche
- **Teppichreinigung**: Tiefenreinigung für langlebige, frische Teppiche
- **Küchen & Sozialräume**: Gründliche Reinigung inklusive Geräte
- **Sonderreinigung**: Nach Events, Umzügen oder Renovierungen

### Für wen wir arbeiten

Vom 3-Mann-Startup bis zum Verwaltungsgebäude mit 500 Mitarbeitern – wir betreuen Büros jeder Größe. Unsere Kunden in Landshut, München, Regensburg und Umgebung schätzen besonders:

- Zuverlässigkeit (8+ Jahre ohne Beschwerden bei Stammkunden)
- Flexibilität bei kurzfristigen Änderungen
- Persönliche Ansprechpartner statt Callcenter
- Faire, transparente Preise ohne versteckte Kosten

### So starten wir zusammen

1. **Kostenfreie Besichtigung** – Wir schauen uns Ihre Räume an
2. **Individuelles Angebot** – Auf Ihre Bedürfnisse zugeschnitten
3. **Probereinigung** – Überzeugen Sie sich selbst
4. **Regelbetrieb** – Mit festem Team und Qualitätsgarantie

**Unzufrieden mit Ihrer aktuellen Reinigungsfirma?** Sie sind nicht allein. Viele unserer besten Kunden kamen zu uns, weil der vorherige Dienstleister unzuverlässig war. Bei FIMI ist das anders – seit 2016 setzen wir auf Qualität statt Quantität.
    `,
    heroImage: '/images/branchen/buero-verwaltung/hero.avif',
    gallery: [
      { src: '/images/branchen/buero-verwaltung/hero.avif', alt: 'Modernes Büro mit Glasfronten', caption: 'Saubere Arbeitsplätze für produktive Teams' },
      { src: '/images/branchen/buero-verwaltung/gallery-1.avif', alt: 'Konferenzraum', caption: 'Repräsentative Meetingräume' },
      { src: '/images/branchen/buero-verwaltung/gallery-2.avif', alt: 'Büroküche', caption: 'Hygienische Sozialräume' },
    ],
    icon: 'Building2',
    detailedChallenges: [
      {
        titel: 'Reinigung außerhalb der Arbeitszeiten',
        beschreibung: 'Niemand möchte arbeiten, während um ihn herum gesaugt wird. Aber wann soll gereinigt werden, wenn das Büro von 8-18 Uhr besetzt ist?',
        loesung: 'Wir bieten Früh- und Spätschichten an. Unsere Teams kommen ab 5:30 Uhr oder nach 19 Uhr – ganz wie es für Sie passt.'
      },
      {
        titel: 'Wechselnde Reinigungskräfte',
        beschreibung: 'Bei vielen Reinigungsfirmen kommt jede Woche jemand anderes. Das führt zu Qualitätsschwankungen und Sicherheitsbedenken.',
        loesung: 'Bei FIMI arbeiten feste Teams. Dieselben Mitarbeiter betreuen Ihr Büro dauerhaft – mit Personalausweis-Prüfung und Vertrauensvorschuss.'
      },
      {
        titel: 'Sensible Bereiche & Vertraulichkeit',
        beschreibung: 'In Büros liegen oft vertrauliche Dokumente. Nicht jeder Reinigungsdienst nimmt Datenschutz ernst.',
        loesung: 'Unsere Mitarbeiter sind geschult im Umgang mit sensiblen Bereichen. Dokumente werden nicht angerührt, Schreibtische nur nach Freigabe gereinigt.'
      }
    ],
    services: ['Unterhaltsreinigung', 'Büroreinigung', 'Glasreinigung', 'Sanitärreinigung', 'Teppichreinigung', 'Küchenreinigung'],
    benefits: [
      'Feste Reinigungsteams für Ihr Büro',
      'Flexible Reinigungszeiten (früh/spät)',
      'Persönlicher Ansprechpartner',
      'Qualitätsgarantie mit Nachbesserung',
      'Umweltfreundliche Reinigungsmittel',
      'Kurzfristige Sonderreinigungen möglich'
    ],
    processSteps: [
      { schritt: 1, titel: 'Kostenfreie Besichtigung', beschreibung: 'Wir schauen uns Ihre Räume vor Ort an und besprechen Ihre Anforderungen.' },
      { schritt: 2, titel: 'Individuelles Angebot', beschreibung: 'Sie erhalten ein transparentes Angebot ohne versteckte Kosten.' },
      { schritt: 3, titel: 'Probereinigung', beschreibung: 'Überzeugen Sie sich von unserer Qualität bei einer Testreinigung.' },
      { schritt: 4, titel: 'Regelmäßige Betreuung', beschreibung: 'Ihr festes Team startet mit der regelmäßigen Reinigung.' }
    ],
    faqs: [
      {
        frage: 'Wie oft sollte ein Büro gereinigt werden?',
        antwort: 'Das hängt von der Nutzung ab. Bei normaler Büronutzung empfehlen wir 2-3x wöchentlich Unterhaltsreinigung, Sanitär täglich. Bei hohem Publikumsverkehr entsprechend häufiger.'
      },
      {
        frage: 'Was kostet Büroreinigung pro Quadratmeter?',
        antwort: 'Die Preise variieren je nach Umfang und Häufigkeit. Für eine realistische Einschätzung vereinbaren wir am besten eine kostenfreie Besichtigung – dann können wir Ihnen ein verbindliches Angebot machen.'
      },
      {
        frage: 'Können Sie auch kurzfristig einspringen?',
        antwort: 'Ja, für Bestandskunden bieten wir Sonderreinigungen mit 2 Stunden Reaktionszeit. Bei Neukunden versuchen wir, innerhalb von 24-48 Stunden zu starten.'
      },
      {
        frage: 'Bringen Sie eigene Reinigungsmittel mit?',
        antwort: 'Ja, wir arbeiten mit professionellen, umweltfreundlichen Mitteln von Dreiturm und Kiehl. Auf Wunsch nutzen wir auch Ihre bevorzugten Produkte.'
      },
      {
        frage: 'Arbeiten immer dieselben Reinigungskräfte bei uns?',
        antwort: 'Ja, wir setzen auf feste Teams. Dieselben Mitarbeiter kennen Ihr Büro und Ihre Anforderungen. Das sorgt für gleichbleibende Qualität und Vertrauen.'
      },
      {
        frage: 'Wie läuft die Qualitätskontrolle ab?',
        antwort: 'Unsere Objektleiter führen regelmäßige Kontrollen durch. Bei Reklamationen reagieren wir innerhalb von 24 Stunden mit kostenloser Nachbesserung.'
      }
    ]
  },

  // ============================================
  // 2. INDUSTRIE & PRODUKTION
  // ============================================
  {
    id: '2',
    slug: 'industrie-produktion',
    name: 'Industrie & Produktion',
    shortName: 'Industrie',
    metaTitle: 'Industriereinigung Landshut & Bayern | Hallen, Maschinen, Produktion',
    metaDescription: 'Professionelle Industriereinigung in Landshut, München & Bayern. Hallenreinigung, Maschinenreinigung, minimale Ausfallzeiten. ✓ Nachts & Wochenende ✓ Spezialausrüstung',
    keywords: [
      'Industriereinigung Landshut', 'Hallenreinigung Bayern', 'Maschinenreinigung',
      'Produktionshalle reinigen', 'Industriereinigung Nachtschicht', 'Fertigungshalle Reinigung',
      'Bodenreinigung Industrie', 'Reinigungsfirma Produktion'
    ],
    headline: 'Industriereinigung ohne Produktionsstopp',
    subheadline: 'Professionelle Hallenreinigung – auch nachts und am Wochenende',
    description: 'Spezialisierte Reinigung für Produktionshallen, Fertigungsbetriebe und Industrieanlagen in Landshut und ganz Bayern.',
    seoContent: `
## Industriereinigung: Sauberkeit ohne Stillstand

In der Produktion zählt jede Minute. Ein ungeplanter Stillstand kostet Geld – viel Geld. Deshalb verstehen wir bei FIMI, dass Reinigung in Industriebetrieben anders funktionieren muss als im Büro.

**Wir reinigen, wenn Sie nicht produzieren.** Nachts, am Wochenende, in den Betriebsferien. Unsere Teams sind flexibel und arbeiten dann, wenn Ihre Anlagen stillstehen.

### Die besonderen Anforderungen der Industrie

Industriereinigung ist kein Standardjob. Hier geht es um:

- **Große Flächen**: Produktionshallen mit 5.000+ m² erfordern leistungsstarke Maschinen
- **Spezielle Verschmutzungen**: Öl, Fett, Metallspäne, Kühlmittel – das normale Reinigungsequipment versagt hier
- **Sicherheitsvorschriften**: Arbeiten in der Nähe von Maschinen, Gabelstaplerverkehr, Gefahrstoffe
- **Hygienestandards**: Je nach Branche gelten strenge Vorgaben (Lebensmittel, Pharma, etc.)

### Unsere Spezialausrüstung

Für Industriereinigung braucht es mehr als einen Staubsauger. Wir setzen ein:

- **Scheuersaugmaschinen** für große Bodenflächen (Kärcher, Nilfisk, Hako)
- **Hochdruckreiniger** für hartnäckige Verschmutzungen
- **Industriesauger** für Späne, Staub und Flüssigkeiten
- **Hebebühnen** für Reinigung in der Höhe
- **Spezialreiniger** für Öl, Fett und industrielle Verschmutzungen

### Branchen, die wir betreuen

Unsere Industriekunden kommen aus verschiedenen Bereichen:

- **Metallverarbeitung**: Dreh- und Fräsbetriebe, Schweißereien
- **Automobilzulieferer**: Komponentenfertigung, Montage
- **Kunststoffverarbeitung**: Spritzguss, Extrusion
- **Lebensmittelproduktion**: Nach HACCP-Standards
- **Elektronikfertigung**: Reinraumnahe Bereiche

### Warum FIMI für Industriebetriebe?

Nach 8 Jahren Erfahrung wissen wir: Industriekunden brauchen einen Partner, der mitdenkt. Einer, der versteht, dass um 14 Uhr keine Reinigung stattfinden kann, weil dann die Schicht läuft. Der weiß, wo er nicht hintreten darf und welche Bereiche Priorität haben.

**Wir stellen uns auf Ihre Produktion ein – nicht umgekehrt.**
    `,
    heroImage: '/images/branchen/industrie-produktion/hero.avif',
    gallery: [
      { src: '/images/branchen/industrie-produktion/hero.avif', alt: 'Moderne Produktionshalle', caption: 'Große Flächen, effizient gereinigt' },
      { src: '/images/branchen/industrie-produktion/gallery-1.avif', alt: 'Maschinenpark', caption: 'Maschinenreinigung ohne Beschädigung' },
      { src: '/images/branchen/industrie-produktion/gallery-2.avif', alt: 'Fertigungslinie', caption: 'Sauberkeit für reibungslose Produktion' },
    ],
    icon: 'Factory',
    detailedChallenges: [
      {
        titel: 'Minimale Produktionsunterbrechung',
        beschreibung: 'Jede Stunde Stillstand kostet Geld. Aber die Halle muss trotzdem sauber sein.',
        loesung: 'Wir arbeiten in Randzeiten: Nachtschicht, Wochenende, Betriebsferien. Und bei Bedarf reinigen wir in Abschnitten, ohne den Gesamtbetrieb zu stören.'
      },
      {
        titel: 'Hartnäckige Industrieverschmutzungen',
        beschreibung: 'Öl, Fett, Kühlmittelreste, Metallspäne – normale Reinigungsmittel versagen hier.',
        loesung: 'Wir setzen Spezialreiniger und Industriemaschinen ein. Unsere Teams sind im Umgang mit Industrieverschmutzungen geschult.'
      },
      {
        titel: 'Arbeitssicherheit in der Halle',
        beschreibung: 'Gabelstapler, laufende Maschinen, Gefahrstoffe – die Reinigung muss sicher ablaufen.',
        loesung: 'Unsere Mitarbeiter tragen PSA und sind in Arbeitssicherheit unterwiesen. Wir koordinieren uns mit Ihrem Werksschutz.'
      }
    ],
    services: ['Hallenreinigung', 'Maschinenreinigung', 'Bodenreinigung', 'Hochregalreinigung', 'Fassadenreinigung', 'Grundreinigung'],
    benefits: [
      'Reinigung nachts & am Wochenende',
      'Leistungsstarke Industriemaschinen',
      'Geschultes Personal mit PSA',
      'Minimale Betriebsunterbrechung',
      'Erfahrung mit Industrieverschmutzungen',
      'Flexible Einsatzplanung'
    ],
    processSteps: [
      { schritt: 1, titel: 'Werksbesichtigung', beschreibung: 'Wir analysieren Ihre Hallen, Maschinen und besonderen Anforderungen.' },
      { schritt: 2, titel: 'Reinigungskonzept', beschreibung: 'Wir erstellen einen Plan, der zu Ihren Produktionszeiten passt.' },
      { schritt: 3, titel: 'Pilotbereich', beschreibung: 'Wir starten mit einem Testbereich, um die Qualität zu demonstrieren.' },
      { schritt: 4, titel: 'Rollout', beschreibung: 'Schrittweise Übernahme aller vereinbarten Bereiche.' }
    ],
    faqs: [
      {
        frage: 'Können Sie auch während der Produktion reinigen?',
        antwort: 'Ja, in vielen Fällen ist eine abschnittsweise Reinigung möglich, ohne den Betrieb zu stören. Bei laufenden Maschinen halten wir Sicherheitsabstände ein.'
      },
      {
        frage: 'Wie gehen Sie mit Ölverschmutzungen um?',
        antwort: 'Wir nutzen Spezialreiniger und Ölbindemittel. Bei größeren Ölmengen setzen wir Absauggeräte ein. Die Entsorgung erfolgt fachgerecht.'
      },
      {
        frage: 'Haben Ihre Mitarbeiter Sicherheitsschulungen?',
        antwort: 'Ja, alle Industrieteams sind in Arbeitssicherheit unterwiesen und tragen die vorgeschriebene PSA. Auf Wunsch absolvieren wir auch werksübergreifende Schulungen.'
      },
      {
        frage: 'Wie schnell können Sie starten?',
        antwort: 'Nach der Erstbesichtigung und Auftragserteilung können wir meist innerhalb von 1-2 Wochen beginnen. Bei dringendem Bedarf geht es auch schneller.'
      },
      {
        frage: 'Welche Maschinen setzen Sie ein?',
        antwort: 'Je nach Anforderung nutzen wir Scheuersaugmaschinen, Hochdruckreiniger, Dampfreiniger und Spezialsauger. Alle Geräte sind für den Industrieeinsatz ausgelegt.'
      },
      {
        frage: 'Reinigen Sie auch Hochregale und Decken?',
        antwort: 'Ja, wir verfügen über Hubarbeitsbühnen und geschultes Personal für Arbeiten in der Höhe. Hochregale, Lüftungsanlagen und Hallenkräne gehören zu unserem Leistungsspektrum.'
      }
    ]
  },

  // ============================================
  // 3. GESUNDHEITSWESEN
  // ============================================
  {
    id: '3',
    slug: 'gesundheitswesen',
    name: 'Gesundheitswesen',
    shortName: 'Gesundheit',
    metaTitle: 'Praxisreinigung Landshut & Bayern | Hygienische Reinigung RKI-konform',
    metaDescription: 'Professionelle Praxisreinigung in Landshut & Bayern. RKI-konforme Hygiene für Arztpraxen, Kliniken, Pflegeheime. ✓ Geschultes Personal ✓ Desinfektion ✓ Dokumentiert',
    keywords: [
      'Praxisreinigung Landshut', 'Arztpraxis reinigen', 'Klinik Reinigung Bayern',
      'RKI Reinigung', 'Desinfektion Arztpraxis', 'Hygiene Gesundheitswesen',
      'Pflegeheim Reinigung', 'Zahnarzt Reinigung'
    ],
    headline: 'Hygienische Reinigung für Ihre Praxis',
    subheadline: 'RKI-konform, dokumentiert, von geschultem Personal',
    description: 'Professionelle Reinigung für Arztpraxen, Kliniken und Pflegeeinrichtungen nach den Richtlinien des Robert Koch-Instituts.',
    seoContent: `
## Praxisreinigung: Hygiene ist kein Zufall

Als Arzt, Zahnarzt oder Praxismanager wissen Sie: Hygiene ist im Gesundheitswesen nicht verhandelbar. Ihre Patienten vertrauen darauf, dass Ihre Räume nicht nur sauber aussehen, sondern auch hygienisch einwandfrei sind.

**Bei FIMI verstehen wir die besonderen Anforderungen des Gesundheitswesens.** Unsere Reinigungskräfte sind speziell geschult und arbeiten nach den Richtlinien des Robert Koch-Instituts (RKI).

### Was Praxisreinigung von normaler Büroreinigung unterscheidet

In einer Arztpraxis geht es um mehr als Staubwischen:

- **Flächendesinfektion**: Behandlungsliegen, Türklinken, Lichtschalter – alle Kontaktflächen
- **Raumhygiene**: Wartezimmer, Behandlungsräume, Labor
- **Sanitärhygiene**: Patientenbäder mit erhöhten Anforderungen
- **Abfallentsorgung**: Fachgerechter Umgang mit medizinischen Abfällen
- **Dokumentation**: Nachweisbare Reinigung für Ihre QM-Unterlagen

### Unser Personal: Geschult und geprüft

Nicht jeder kann in einer Arztpraxis reinigen. Unsere Mitarbeiter für Gesundheitseinrichtungen:

- Haben eine Schulung in Hygiene und Infektionsschutz absolviert
- Kennen die Unterschiede zwischen Reinigung und Desinfektion
- Wissen, welche Mittel für welche Oberflächen geeignet sind
- Arbeiten diskret im Umgang mit Patienten

### Für welche Einrichtungen wir arbeiten

- **Arztpraxen**: Allgemeinmedizin, Fachärzte, Gemeinschaftspraxen
- **Zahnarztpraxen**: Besondere Anforderungen durch Aerosole
- **Kliniken & MVZ**: Mehrere Fachabteilungen, hoher Durchlauf
- **Pflegeeinrichtungen**: Seniorenheime, betreutes Wohnen
- **Physiotherapie & Reha**: Behandlungsräume, Trainingsgeräte

### Hygienepläne und Dokumentation

Auf Wunsch erstellen wir gemeinsam mit Ihnen einen Hygieneplan, der alle Reinigungsintervalle und -methoden dokumentiert. So sind Sie für Prüfungen des Gesundheitsamts vorbereitet und können die Einhaltung jederzeit nachweisen.

**Ihre Patienten vertrauen Ihnen. Vertrauen Sie uns.**
    `,
    heroImage: '/images/branchen/gesundheitswesen/hero.avif',
    gallery: [
      { src: '/images/branchen/gesundheitswesen/hero.avif', alt: 'Moderne Arztpraxis', caption: 'Hygiene auf höchstem Niveau' },
      { src: '/images/branchen/gesundheitswesen/gallery-1.avif', alt: 'Behandlungsraum', caption: 'Sterile Behandlungsräume' },
      { src: '/images/branchen/gesundheitswesen/gallery-2.avif', alt: 'Klinikflur', caption: 'Saubere Verkehrswege' },
    ],
    icon: 'Stethoscope',
    detailedChallenges: [
      {
        titel: 'RKI-konforme Hygiene',
        beschreibung: 'Das Robert Koch-Institut gibt strenge Richtlinien vor. Nicht jede Reinigungsfirma kennt diese.',
        loesung: 'Unsere Mitarbeiter sind in RKI-Hygiene geschult. Wir unterscheiden zwischen Reinigung, Desinfektion und Sterilisation und wissen, wann was erforderlich ist.'
      },
      {
        titel: 'Reinigung im Patientenbetrieb',
        beschreibung: 'In Praxen und Kliniken sind oft Patienten anwesend. Die Reinigung muss diskret und störungsfrei ablaufen.',
        loesung: 'Wir reinigen bevorzugt außerhalb der Sprechzeiten. Wenn nötig, arbeiten wir leise und rücksichtsvoll im laufenden Betrieb.'
      },
      {
        titel: 'Umgang mit sensiblen Bereichen',
        beschreibung: 'Labor, Behandlungsräume, Sterilisationsbereich – hier gelten besondere Regeln.',
        loesung: 'Unsere Teams wissen, welche Bereiche wie zu behandeln sind. Kritische Bereiche werden von speziell geschultem Personal gereinigt.'
      }
    ],
    services: ['Praxisreinigung', 'Flächendesinfektion', 'Sanitärreinigung', 'Wartezimmerreinigung', 'Laborreinigung', 'Grundreinigung'],
    benefits: [
      'RKI-geschultes Personal',
      'Dokumentierte Reinigung für QM',
      'Geeignete Desinfektionsmittel',
      'Diskretes Arbeiten bei Patienten',
      'Flexible Zeiten um Sprechstunden',
      'Erfahrung mit Gesundheitsämtern'
    ],
    processSteps: [
      { schritt: 1, titel: 'Hygieneberatung', beschreibung: 'Wir analysieren Ihre Praxis und besprechen die Hygieneanforderungen.' },
      { schritt: 2, titel: 'Reinigungsplan', beschreibung: 'Gemeinsam erstellen wir einen Plan nach RKI-Vorgaben.' },
      { schritt: 3, titel: 'Personaleinweisung', beschreibung: 'Unser Team wird auf Ihre Praxis eingewiesen.' },
      { schritt: 4, titel: 'Dokumentierter Betrieb', beschreibung: 'Regelmäßige Reinigung mit Leistungsnachweis.' }
    ],
    faqs: [
      {
        frage: 'Sind Ihre Mitarbeiter in Hygiene geschult?',
        antwort: 'Ja, alle Mitarbeiter für Gesundheitseinrichtungen durchlaufen eine Hygieneschulung nach RKI-Empfehlungen. Auffrischungen erfolgen regelmäßig.'
      },
      {
        frage: 'Können Sie Desinfektionsprotokolle bereitstellen?',
        antwort: 'Ja, auf Wunsch dokumentieren wir alle Reinigungen und Desinfektionen. Diese Protokolle können Sie für Ihr QM-System und für Prüfungen nutzen.'
      },
      {
        frage: 'Welche Desinfektionsmittel verwenden Sie?',
        antwort: 'Wir setzen VAH-gelistete Desinfektionsmittel ein, die für den medizinischen Bereich zugelassen sind. Die Auswahl erfolgt passend zu den Oberflächen und Anforderungen.'
      },
      {
        frage: 'Wie gehen Sie mit medizinischen Abfällen um?',
        antwort: 'Wir entsorgen haushaltsähnliche Abfälle. Für medizinische Abfälle (z.B. kontaminiertes Material) empfehlen wir einen spezialisierten Entsorger – wir stellen gerne den Kontakt her.'
      },
      {
        frage: 'Reinigen Sie auch OP-Bereiche?',
        antwort: 'Für OP-Bereiche und Reinräume arbeiten wir mit speziell geschultem Personal und nach strengen Hygieneprotokollen. Die Anforderungen werden vorab genau abgestimmt.'
      },
      {
        frage: 'Wie oft sollte eine Arztpraxis gereinigt werden?',
        antwort: 'Die Behandlungsräume sollten täglich gereinigt und desinfiziert werden. Wartebereiche und Sanitärräume ebenfalls täglich, Böden je nach Patientenaufkommen.'
      }
    ]
  },

  // ============================================
  // 4. EINZELHANDEL
  // ============================================
  {
    id: '4',
    slug: 'einzelhandel',
    name: 'Einzelhandel',
    shortName: 'Handel',
    metaTitle: 'Ladenreinigung Landshut & Bayern | Saubere Verkaufsflächen',
    metaDescription: 'Professionelle Reinigung für Einzelhandel in Landshut & Bayern. Verkaufsflächen, Schaufenster, Lagerbereiche. ✓ Während Öffnungszeiten möglich ✓ Diskret ✓ Umsatzsteigernd',
    keywords: [
      'Ladenreinigung Landshut', 'Einzelhandel Reinigung', 'Geschäft reinigen lassen',
      'Schaufensterreinigung', 'Verkaufsfläche reinigen', 'Supermarkt Reinigung',
      'Boutique Reinigung', 'Einkaufszentrum Reinigung'
    ],
    headline: 'Saubere Läden verkaufen besser',
    subheadline: 'Professionelle Reinigung – auch während der Öffnungszeiten',
    description: 'Saubere Verkaufsflächen für zufriedene Kunden und mehr Umsatz. Reinigung für Geschäfte, Boutiquen und Einkaufszentren.',
    seoContent: `
## Einzelhandelsreinigung: Der erste Eindruck zählt

Kunden entscheiden in Sekunden, ob sie ein Geschäft betreten oder weitergehen. Ein sauberer Eingang, glänzende Schaufenster und gepflegte Verkaufsflächen sind keine Nebensache – sie sind Ihr Aushängeschild.

**Studien zeigen: Saubere Geschäfte erzielen bis zu 20% mehr Umsatz.** Die Kunden bleiben länger, fühlen sich wohler und kaufen mehr. Schmutzige Ecken, staubige Regale oder fleckige Böden haben den gegenteiligen Effekt.

### Die Herausforderung im Einzelhandel

Anders als in Büros oder Industriehallen muss im Einzelhandel oft während der Öffnungszeiten gereinigt werden. Das erfordert besondere Fähigkeiten:

- **Diskrete Arbeitsweise**: Der Kunde soll nicht gestört werden
- **Schnelle Einsätze**: Verschüttete Getränke, Glasbruch – sofort handeln
- **Hohe Frequenz**: Eingangsbereiche mehrmals täglich
- **Präsentation**: Die Ware muss während der Reinigung zugänglich bleiben

### Unser Konzept für den Handel

Wir haben ein dreistufiges System entwickelt:

**1. Vor Ladenöffnung (Grundreinigung)**
- Böden maschinell reinigen
- Staubwischen auf allen Regalen
- Sanitärräume grundreinigen
- Umkleidekabinen checken

**2. Während der Öffnungszeiten (Sichtreinigung)**
- Eingangsbereich und Schaufenster
- Kassenbereich sauber halten
- Schnelle Reaktion bei Verschmutzungen
- Toiletten regelmäßig kontrollieren

**3. Nach Ladenschluss (Intensivreinigung)**
- Böden nass reinigen
- Teppiche absaugen
- Müllentsorgung
- Nächster Tag vorbereiten

### Unsere Einzelhandelskunden

- **Boutiquen & Modehäuser**: Exklusive Präsentation erfordert makellose Sauberkeit
- **Supermärkte**: Hohe Frequenz, ständige Reinigungsbedarf
- **Einkaufszentren**: Mall-Bereiche, Rolltreppen, Parkbereiche
- **Baumärkte**: Große Flächen, Staubentwicklung
- **Drogerien & Apotheken**: Hygiene für Gesundheitsprodukte

**Ihr Geschäft verdient eine Reinigung, die zu Ihrem Qualitätsanspruch passt.**
    `,
    heroImage: '/images/branchen/einzelhandel/hero.avif',
    gallery: [
      { src: '/images/branchen/einzelhandel/hero.avif', alt: 'Modernes Einkaufszentrum', caption: 'Einladende Verkaufsflächen' },
      { src: '/images/branchen/einzelhandel/gallery-1.avif', alt: 'Boutique', caption: 'Repräsentative Ladengestaltung' },
      { src: '/images/branchen/einzelhandel/gallery-2.avif', alt: 'Schaufenster', caption: 'Blitzsaubere Schaufenster' },
    ],
    icon: 'ShoppingBag',
    detailedChallenges: [
      {
        titel: 'Reinigung während Öffnungszeiten',
        beschreibung: 'Im Einzelhandel kann man nicht einfach schließen. Die Reinigung muss neben dem Kundenverkehr stattfinden.',
        loesung: 'Unsere Teams sind im diskreten Arbeiten geschult. Mit leisen Geräten und unauffälliger Arbeitskleidung fallen wir kaum auf.'
      },
      {
        titel: 'Schnelle Reaktion bei Zwischenfällen',
        beschreibung: 'Ein Glas fällt, ein Kind verschüttet etwas – das muss sofort weg, bevor jemand ausrutscht.',
        loesung: 'Bei Bedarf stellen wir Tagesreiniger ab, die vor Ort sind und sofort eingreifen können.'
      },
      {
        titel: 'Eingangsbereich immer sauber',
        beschreibung: 'Der Eingang ist das Aushängeschild – bei Regen, Schnee und hoher Frequenz eine Herausforderung.',
        loesung: 'Wir reinigen Eingangsbereiche mehrmals täglich. Bei schlechtem Wetter erhöhen wir die Frequenz automatisch.'
      }
    ],
    services: ['Unterhaltsreinigung', 'Schaufensterreinigung', 'Bodenreinigung', 'Tagesreinigung', 'Kassenbereichsreinigung', 'Lagerreinigung'],
    benefits: [
      'Diskrete Reinigung während Öffnungszeiten',
      'Schnelle Reaktion bei Verschmutzungen',
      'Mehrstufiges Reinigungskonzept',
      'Schaufenster immer glänzend',
      'Eingangsbereich mehrmals täglich',
      'Angepasst an Ihre Öffnungszeiten'
    ],
    processSteps: [
      { schritt: 1, titel: 'Geschäftsanalyse', beschreibung: 'Wir analysieren Kundenfrequenz, Öffnungszeiten und besondere Anforderungen.' },
      { schritt: 2, titel: 'Reinigungskonzept', beschreibung: 'Dreistufiges Konzept: vor, während und nach der Öffnung.' },
      { schritt: 3, titel: 'Testphase', beschreibung: 'Wir starten mit einer Testphase, um das Konzept zu optimieren.' },
      { schritt: 4, titel: 'Regelbetrieb', beschreibung: 'Zuverlässige Reinigung, angepasst an Ihre Stoßzeiten.' }
    ],
    faqs: [
      {
        frage: 'Können Sie auch sonntags reinigen?',
        antwort: 'Ja, für den Einzelhandel bieten wir auch Sonntagsreinigung an – vor oder nach den Öffnungszeiten.'
      },
      {
        frage: 'Wie gehen Sie mit sensiblen Waren um?',
        antwort: 'In Bereichen mit empfindlichen Produkten (z.B. Elektronik, Lebensmittel) arbeiten wir besonders vorsichtig und nur mit geeigneten Mitteln.'
      },
      {
        frage: 'Bieten Sie auch Schaufensterreinigung an?',
        antwort: 'Ja, Schaufenster reinigen wir auf Wunsch täglich oder nach Bedarf. Mit streifenfreier Technik und professionellem Equipment.'
      },
      {
        frage: 'Was machen Sie bei starkem Kundenandrang?',
        antwort: 'Bei Stoßzeiten konzentrieren wir uns auf kritische Bereiche (Eingang, Toiletten) und verschieben andere Aufgaben auf ruhigere Zeiten.'
      },
      {
        frage: 'Reinigen Sie auch Schaufenster?',
        antwort: 'Ja, Schaufensterreinigung gehört zu unserem Standard. Wir sorgen für streifenfreie Scheiben, die Ihre Produkte optimal präsentieren.'
      },
      {
        frage: 'Können Sie auch vor Ladeneröffnung reinigen?',
        antwort: 'Ja, wir sind flexibel und können früh morgens vor Geschäftsöffnung reinigen. So starten Sie jeden Tag mit einem sauberen Laden.'
      }
    ]
  },

  // ============================================
  // 5. GASTRONOMIE & HOTELLERIE
  // ============================================
  {
    id: '5',
    slug: 'gastronomie-hotel',
    name: 'Gastronomie & Hotellerie',
    shortName: 'Gastro',
    metaTitle: 'Hotelreinigung & Restaurantreinigung Landshut | HACCP-konform',
    metaDescription: 'Professionelle Reinigung für Hotels & Restaurants in Landshut & Bayern. Zimmerreinigung, Küchenreinigung, HACCP-konform. ✓ Erfahren ✓ Schnell ✓ Hygienisch',
    keywords: [
      'Hotelreinigung Landshut', 'Restaurantreinigung Bayern', 'Küchenreinigung HACCP',
      'Zimmerreinigung Hotel', 'Gastronomie Reinigung', 'Hotel Housekeeping',
      'Küchenhygiene', 'Gaststätte reinigen'
    ],
    headline: 'Hotelreinigung für zufriedene Gäste',
    subheadline: 'HACCP-konforme Hygiene für Gastronomie und Hotellerie',
    description: 'Professionelle Reinigung für Hotels, Restaurants und gastronomische Betriebe nach höchsten Hygienestandards.',
    seoContent: `
## Gastronomie & Hotelreinigung: Hygiene als Qualitätsmerkmal

In der Gastronomie und Hotellerie entscheiden Bewertungen über Erfolg oder Misserfolg. Ein einziger negativer Kommentar über mangelnde Sauberkeit kann Ihren Ruf nachhaltig schädigen. Andersherum: Strahlende Sauberkeit wird von Gästen bemerkt und positiv bewertet.

**Bei FIMI verstehen wir, dass Ihre Gäste das Beste erwarten.** Deshalb arbeiten wir nach HACCP-Standards und sorgen dafür, dass Ihre Küche, Ihre Zimmer und Ihre Gasträume makellos sind.

### Besondere Anforderungen in der Gastronomie

- **HACCP-Konformität**: In Küchen gelten strenge Hygienevorschriften
- **Schnelle Zimmerreinigung**: Check-out um 11, Check-in um 14 – das Zeitfenster ist eng
- **Tägliche Grundreinigung**: Gasträume müssen jeden Tag frisch wirken
- **Veranstaltungsreinigung**: Nach Events muss es schnell gehen

### Unser Angebot für die Hotellerie

**Zimmerreinigung**
- Betten beziehen, Staub wischen, Sanitär reinigen
- Minibar auffüllen, Amenities erneuern
- Check-out-Reinigung und Check-in-Ready-Check

**Öffentliche Bereiche**
- Lobby, Flure, Treppenhäuser
- Konferenzräume, Wellnessbereiche
- Außenanlagen und Parkflächen

**Gastronomie im Hotel**
- Restaurant, Bar, Frühstücksraum
- Küchenhygiene nach HACCP
- Bankett- und Eventflächen

### Für Restaurants und Gaststätten

Ihre Küche ist das Herzstück Ihres Betriebs. Wir sorgen dafür, dass sie nicht nur sauber aussieht, sondern auch allen Hygienevorschriften entspricht:

- **Tägliche Küchenreinigung**: Arbeitsflächen, Geräte, Böden
- **Wöchentliche Intensivreinigung**: Dunstabzug, Fritteuse, Kühlräume
- **Monatliche Grundreinigung**: Decken, Wände, schwer zugängliche Bereiche

**HACCP-Dokumentation auf Wunsch** – für Ihre Unterlagen und Kontrollen.
    `,
    heroImage: '/images/branchen/gastronomie-hotel/hero.avif',
    gallery: [
      { src: '/images/branchen/gastronomie-hotel/hero.avif', alt: 'Elegante Hotellobby', caption: 'Erster Eindruck zählt' },
      { src: '/images/branchen/gastronomie-hotel/gallery-1.avif', alt: 'Hotelzimmer', caption: 'Makellose Hotelzimmer' },
      { src: '/images/branchen/gastronomie-hotel/gallery-2.avif', alt: 'Profiküche', caption: 'Hygienische Gastro-Küchen' },
    ],
    icon: 'UtensilsCrossed',
    detailedChallenges: [
      {
        titel: 'Enge Zeitfenster bei Zimmerreinigung',
        beschreibung: 'Zwischen Check-out und Check-in liegen oft nur 3 Stunden. In dieser Zeit müssen alle Zimmer fertig sein.',
        loesung: 'Unsere Teams sind auf schnelle, gründliche Zimmerreinigung trainiert. Bei hoher Auslastung verstärken wir das Team flexibel.'
      },
      {
        titel: 'HACCP-Anforderungen in der Küche',
        beschreibung: 'Lebensmittelhygiene ist streng geregelt. Fehler können zu Schließungen führen.',
        loesung: 'Unsere Küchenteams sind HACCP-geschult und dokumentieren alle Reinigungen. So sind Sie für Kontrollen gewappnet.'
      },
      {
        titel: '24/7 Betrieb',
        beschreibung: 'Hotels und Restaurants haben keine klassischen "Schließzeiten" – wann soll gereinigt werden?',
        loesung: 'Wir passen unsere Einsatzzeiten an Ihre Belegung an. Reinigung in Randzeiten, ohne Gäste zu stören.'
      }
    ],
    services: ['Zimmerreinigung', 'Küchenreinigung', 'Gastraumreinigung', 'Lobbyreinigung', 'Wellnessreinigung', 'Veranstaltungsreinigung'],
    benefits: [
      'HACCP-geschultes Küchenpersonal',
      'Schnelle Zimmerreinigung',
      'Flexible Einsatzzeiten',
      'Dokumentation für Kontrollen',
      'Erfahrung mit Hotelbetrieb',
      'Verstärkung bei hoher Auslastung'
    ],
    processSteps: [
      { schritt: 1, titel: 'Betriebsanalyse', beschreibung: 'Wir analysieren Ihren Betrieb: Zimmeranzahl, Küchengröße, Öffnungszeiten.' },
      { schritt: 2, titel: 'Hygienkonzept', beschreibung: 'Gemeinsam erstellen wir ein HACCP-konformes Reinigungskonzept.' },
      { schritt: 3, titel: 'Team-Einarbeitung', beschreibung: 'Unser Team wird auf Ihre Standards und Abläufe eingearbeitet.' },
      { schritt: 4, titel: 'Qualitätssicherung', beschreibung: 'Regelmäßige Checks und Feedback-Schleifen.' }
    ],
    faqs: [
      {
        frage: 'Können Sie auch kurzfristig Zimmer reinigen?',
        antwort: 'Ja, bei Early-Check-in oder Late-Check-out reagieren wir flexibel. Unser Team kann kurzfristig verstärkt werden.'
      },
      {
        frage: 'Wie dokumentieren Sie die HACCP-Reinigung?',
        antwort: 'Wir führen Reinigungsprotokolle für alle Küchenbereiche. Diese können Sie für Ihre HACCP-Dokumentation nutzen.'
      },
      {
        frage: 'Übernehmen Sie auch Wäscheservice?',
        antwort: 'Wir konzentrieren uns auf Reinigung. Für Wäscheservice arbeiten wir aber mit einem zuverlässigen Partner zusammen, den wir Ihnen vermitteln können.'
      },
      {
        frage: 'Was passiert bei Veranstaltungen?',
        antwort: 'Für Events bieten wir Vor- und Nachreinigung. Bei mehrtägigen Veranstaltungen auch Zwischenreinigungen. Sprechen Sie uns frühzeitig an.'
      },
      {
        frage: 'Reinigen Sie auch Küchenabluftanlagen?',
        antwort: 'Ja, die Reinigung von Dunstabzugshauben und Abluftrohren gehört zu unserem Leistungsspektrum. Eine regelmäßige Reinigung ist brandschutztechnisch wichtig.'
      },
      {
        frage: 'Arbeiten Sie auch an Feiertagen?',
        antwort: 'Ja, gerade in der Gastronomie sind Feiertage Hochbetrieb. Wir reinigen auch an Wochenenden und Feiertagen – nach Vereinbarung.'
      }
    ]
  },

  // ============================================
  // 6. BILDUNG & SCHULEN
  // ============================================
  {
    id: '6',
    slug: 'bildung-schulen',
    name: 'Bildung & Schulen',
    shortName: 'Bildung',
    metaTitle: 'Schulreinigung Landshut & Bayern | Kindergarten & Bildungseinrichtungen',
    metaDescription: 'Professionelle Schulreinigung in Landshut & Bayern. Klassenzimmer, Turnhallen, Sanitär. ✓ Kindgerecht ✓ Hygienisch ✓ Ferienreinigung',
    keywords: [
      'Schulreinigung Landshut', 'Kindergarten Reinigung', 'Klassenzimmer reinigen',
      'Turnhalle Reinigung', 'Bildungseinrichtung Reinigung', 'Kita Reinigung',
      'Schule putzen', 'Ferienreinigung Schule'
    ],
    headline: 'Saubere Schulen für gesunde Kinder',
    subheadline: 'Hygienische Reinigung für Kindergärten, Schulen und Bildungseinrichtungen',
    description: 'Professionelle Reinigung für Schulen, Kindergärten und Bildungseinrichtungen mit kindgerechten Methoden.',
    seoContent: `
## Schulreinigung: Hygiene für unsere Kinder

In Schulen und Kindergärten treffen täglich viele Kinder aufeinander. Keime verbreiten sich schnell, Krankheitswellen können ganze Klassen lahmlegen. Eine professionelle, hygienische Reinigung ist hier keine Option – sie ist Pflicht.

**Bei FIMI nehmen wir die Gesundheit Ihrer Schüler und Kitakinder ernst.** Wir setzen kindgerechte Reinigungsmittel ein und achten besonders auf Hygiene in Sanitärbereichen, Mensen und Turnhallen.

### Was Schulreinigung besonders macht

- **Kindgerechte Mittel**: Keine aggressiven Chemikalien, keine Geruchsbelästigung
- **Hohe Frequenz**: Toiletten mehrmals täglich, Klassenräume täglich
- **Ferienreinigung**: Grundreinigung in den Ferien, ohne Unterrichtsstörung
- **Besondere Bereiche**: Turnhallen, Mensen, Werkräume, Labore

### Unser Konzept für Bildungseinrichtungen

**Tägliche Reinigung (während der Schulzeit)**
- Klassenräume: Tafeln, Tische, Böden
- Sanitäranlagen: Mehrmals täglich
- Eingangsbereiche und Flure
- Müllentsorgung

**Wöchentliche Reinigung**
- Turnhallen und Umkleiden
- Mensen und Küchenbereiche
- Fachräume (Chemie, Werken, IT)

**Ferienreinigung (Intensiv)**
- Grundreinigung aller Böden
- Fensterreinigung
- Teppiche und Polstermöbel
- Renovierungsarbeiten unterstützen

### Für welche Einrichtungen wir arbeiten

- **Kindergärten & Kitas**: Besonders sensibel, besonders gründlich
- **Grundschulen**: Hohe Frequenz, viele kleine Hände
- **Weiterführende Schulen**: Größere Gebäude, mehr Fachräume
- **Berufsschulen**: Werkstätten, Labore, Fachräume
- **Universitäten & Hochschulen**: Hörsäle, Bibliotheken, Mensen

**Gesunde Kinder lernen besser.** Mit FIMI sorgen Sie für ein hygienisches Lernumfeld.
    `,
    heroImage: '/images/branchen/bildung-schulen/hero.avif',
    gallery: [
      { src: '/images/branchen/bildung-schulen/hero.avif', alt: 'Modernes Klassenzimmer', caption: 'Saubere Lernumgebungen' },
      { src: '/images/branchen/bildung-schulen/gallery-1.avif', alt: 'Schulaula', caption: 'Gepflegte Veranstaltungsräume' },
      { src: '/images/branchen/bildung-schulen/gallery-2.avif', alt: 'Schulflur', caption: 'Saubere Verkehrswege' },
    ],
    icon: 'GraduationCap',
    detailedChallenges: [
      {
        titel: 'Kindgerechte Reinigungsmittel',
        beschreibung: 'Kinder reagieren empfindlicher auf Chemikalien. Aggressive Mittel können Allergien auslösen.',
        loesung: 'Wir verwenden nur zertifizierte, umwelt- und kindgerechte Reinigungsmittel. Auf Wunsch auch Produkte ohne Duftstoffe.'
      },
      {
        titel: 'Reinigung im laufenden Betrieb',
        beschreibung: 'Während der Unterrichtszeit kann nicht überall gereinigt werden. Aber die Toiletten müssen trotzdem sauber sein.',
        loesung: 'Wir reinigen Sanitärbereiche während der Pausen, Klassenräume nach Unterrichtsende. In den Ferien Grundreinigung.'
      },
      {
        titel: 'Viele verschiedene Räume',
        beschreibung: 'Turnhalle, Werkraum, Labor, Mensa – jeder Bereich hat andere Anforderungen.',
        loesung: 'Unser Team ist auf die verschiedenen Bereiche geschult. Jeder Raum bekommt die Reinigung, die er braucht.'
      }
    ],
    services: ['Klassenraumreinigung', 'Sanitärreinigung', 'Turnhallenreinigung', 'Mensareinigung', 'Ferienreinigung', 'Grundreinigung'],
    benefits: [
      'Kindgerechte Reinigungsmittel',
      'Ferienreinigung ohne Störung',
      'Erfahrung mit Bildungseinrichtungen',
      'Flexible Zeiten um Unterricht',
      'Turnhallen und Spezialräume',
      'Dokumentation für Träger'
    ],
    processSteps: [
      { schritt: 1, titel: 'Begehung', beschreibung: 'Wir besichtigen alle Räume und besprechen die Anforderungen mit der Schulleitung.' },
      { schritt: 2, titel: 'Reinigungsplan', beschreibung: 'Wir erstellen einen Plan, der den Unterrichtsbetrieb nicht stört.' },
      { schritt: 3, titel: 'Team-Schulung', beschreibung: 'Unser Team wird auf Ihre Schule und den Umgang mit Kindern eingewiesen.' },
      { schritt: 4, titel: 'Regelmäßige Abstimmung', beschreibung: 'Regelmäßige Feedback-Gespräche mit Schulleitung oder Hausmeister.' }
    ],
    faqs: [
      {
        frage: 'Sind Ihre Reinigungsmittel kindersicher?',
        antwort: 'Ja, wir verwenden ausschließlich zertifizierte, kindgerechte Reinigungsmittel ohne aggressive Chemikalien. Auf Wunsch auch parfümfrei.'
      },
      {
        frage: 'Können Sie auch in den Ferien grundreinigen?',
        antwort: 'Ja, Ferienreinigung ist unser Spezialgebiet. Wir planen Grundreinigungen so, dass alles zum Schulstart fertig ist.'
      },
      {
        frage: 'Wie oft sollten Schultoiletten gereinigt werden?',
        antwort: 'Bei normaler Schülerzahl empfehlen wir mindestens 2-3x täglich. Bei hoher Frequenz entsprechend häufiger.'
      },
      {
        frage: 'Reinigen Sie auch Schulküchen?',
        antwort: 'Ja, Mensen und Schulküchen reinigen wir nach Lebensmittelhygienestandards. Dokumentation für Kontrollen inklusive.'
      },
      {
        frage: 'Reinigen Sie auch in den Ferien?',
        antwort: 'Ja, die Ferien eignen sich ideal für Grundreinigungen und intensive Bodenpflege. So starten Schüler und Lehrer frisch ins neue Schuljahr.'
      },
      {
        frage: 'Wie gehen Sie mit Allergikern um?',
        antwort: 'Wir verwenden auf Wunsch allergikerfreundliche und duftneutrale Reinigungsmittel. Sprechen Sie uns an, wir passen uns an.'
      }
    ]
  },

  // ============================================
  // 7. FITNESS & SPORT
  // ============================================
  {
    id: '7',
    slug: 'fitness-sport',
    name: 'Fitness & Sport',
    shortName: 'Fitness',
    metaTitle: 'Fitnessstudio Reinigung Landshut | Hygiene für Sportanlagen',
    metaDescription: 'Professionelle Reinigung für Fitnessstudios in Landshut & Bayern. Geräte, Umkleiden, Wellness. ✓ Desinfektion ✓ Hygienisch ✓ Täglich',
    keywords: [
      'Fitnessstudio Reinigung', 'Sportstätte reinigen', 'Gym Cleaning',
      'Wellnessbereich Reinigung', 'Umkleide Reinigung', 'Sauna Reinigung',
      'Sportverein Reinigung', 'Schwimmbad Reinigung'
    ],
    headline: 'Hygiene, die Ihre Mitglieder schätzen',
    subheadline: 'Professionelle Reinigung für Fitnessstudios und Sportanlagen',
    description: 'Hygienische Reinigung für Fitnessstudios, Wellnessbereiche und Sportanlagen. Gerätedesinfektion, Umkleiden, Duschen.',
    seoContent: `
## Fitnessstudio-Reinigung: Hygiene ist Mitgliederbindung

In Fitnessstudios wird geschwitzt – das ist der Sinn der Sache. Aber genau deshalb ist Hygiene hier besonders wichtig. Mitglieder achten sehr genau darauf, ob Geräte sauber sind, ob es in den Umkleiden riecht und ob die Duschen hygienisch aussehen.

**Schlechte Bewertungen wegen mangelnder Hygiene kosten Sie Mitglieder.** Gute Hygiene hingegen wird bemerkt und geschätzt. Bei FIMI sorgen wir dafür, dass Ihre Mitglieder sich wohlfühlen.

### Besondere Herausforderungen im Fitnessbereich

- **Gerätedesinfektion**: Handkontaktflächen, Polster, Griffe
- **Umkleiden & Duschen**: Hohe Feuchtigkeit, Pilzgefahr
- **Wellnessbereiche**: Sauna, Dampfbad, Ruheräume
- **Kursräume**: Matten, Spiegel, Böden
- **Öffnungszeiten**: Oft 6-23 Uhr, wann soll gereinigt werden?

### Unser Konzept für Fitnessstudios

**Laufende Sichtreinigung (während Öffnungszeiten)**
- Geräteflächen regelmäßig desinfizieren
- Umkleiden und Toiletten checken
- Mülleimer leeren
- Wasserspender sauber halten

**Intensivreinigung (außerhalb Stoßzeiten)**
- Komplette Gerätedesinfektion
- Duschen und Umkleiden gründlich
- Böden maschinell reinigen
- Spiegel und Glasflächen

**Wellness-Reinigung (spezialisiert)**
- Sauna und Dampfbad hygienisch reinigen
- Ruheräume und Liegen
- Poolbereich (falls vorhanden)

### Warum Studios uns wählen

- **Erfahrung**: Wir betreuen seit Jahren Fitnessstudios in der Region
- **Verständnis**: Wir wissen, welche Bereiche kritisch sind
- **Flexibilität**: Reinigung auch spätabends oder früh morgens
- **Zuverlässigkeit**: Ihre Mitglieder kommen in ein sauberes Studio

**Saubere Studios binden Mitglieder.** Investieren Sie in Hygiene.
    `,
    heroImage: '/images/branchen/fitness-sport/hero.avif',
    gallery: [
      { src: '/images/branchen/fitness-sport/hero.avif', alt: 'Modernes Fitnessstudio', caption: 'Hygienische Trainingsumgebung' },
      { src: '/images/branchen/fitness-sport/gallery-1.avif', alt: 'Umkleideraum', caption: 'Saubere Umkleidebereiche' },
      { src: '/images/branchen/fitness-sport/gallery-2.avif', alt: 'Sporthalle', caption: 'Gepflegte Sportflächen' },
    ],
    icon: 'Dumbbell',
    detailedChallenges: [
      {
        titel: 'Gerätedesinfektion',
        beschreibung: 'Trainingsgeräte werden von vielen Menschen berührt. Schweiß und Hautabrieb sammeln sich schnell an.',
        loesung: 'Regelmäßige Desinfektion aller Kontaktflächen mit sportgerätetauglichen Mitteln. Keine Beschädigung der Polster.'
      },
      {
        titel: 'Feuchte Umkleiden',
        beschreibung: 'Duschen und Umkleiden sind feucht – idealer Nährboden für Schimmel und Pilze.',
        loesung: 'Spezielle Reiniger gegen Schimmel und Pilzbefall. Gute Trocknung und regelmäßige Intensivreinigung.'
      },
      {
        titel: 'Lange Öffnungszeiten',
        beschreibung: 'Wenn das Studio von 6-23 Uhr geöffnet ist, wann soll dann gereinigt werden?',
        loesung: 'Wir arbeiten in den schwächeren Zeiten: früh morgens, nachmittags, spätabends. Laufende Sichtreinigung während der Öffnung.'
      }
    ],
    services: ['Gerätedesinfektion', 'Umkleidenreinigung', 'Duschbereichsreinigung', 'Wellnessreinigung', 'Kursraumreinigung', 'Saunareinigung'],
    benefits: [
      'Gerätedesinfektion ohne Beschädigung',
      'Spezialreiniger gegen Pilze',
      'Reinigung in Randzeiten',
      'Erfahrung mit Fitnessstudios',
      'Wellness- und Saunabereiche',
      'Laufende Sichtreinigung möglich'
    ],
    processSteps: [
      { schritt: 1, titel: 'Studio-Check', beschreibung: 'Wir analysieren alle Bereiche: Trainingsfläche, Umkleiden, Wellness.' },
      { schritt: 2, titel: 'Hygieneplan', beschreibung: 'Gemeinsam erstellen wir einen Plan für alle Bereiche und Zeiten.' },
      { schritt: 3, titel: 'Einarbeitung', beschreibung: 'Unser Team lernt Ihre Geräte und Besonderheiten kennen.' },
      { schritt: 4, titel: 'Regelbetrieb', beschreibung: 'Zuverlässige Reinigung, abgestimmt auf Ihre Stoßzeiten.' }
    ],
    faqs: [
      {
        frage: 'Wie oft sollten Fitnessgeräte desinfiziert werden?',
        antwort: 'Bei hoher Frequenz empfehlen wir mindestens 2x täglich. Zusätzlich sollten Desinfektionsmittel für Mitglieder bereitstehen.'
      },
      {
        frage: 'Reinigen Sie auch Saunen?',
        antwort: 'Ja, Saunareinigung gehört zu unserem Angebot. Mit speziellen Mitteln für Holzoberflächen und hohe Temperaturen.'
      },
      {
        frage: 'Können Sie während der Öffnungszeiten reinigen?',
        antwort: 'Ja, Sichtreinigung ist auch bei laufendem Betrieb möglich. Intensivreinigung planen wir in Randzeiten.'
      },
      {
        frage: 'Was machen Sie gegen Geruch in Umkleiden?',
        antwort: 'Gute Reinigung ist die Basis. Zusätzlich können wir Geruchsneutralisierer einsetzen und Lüftungsintervalle empfehlen.'
      },
      {
        frage: 'Reinigen Sie auch Sportgeräte?',
        antwort: 'Ja, die hygienische Reinigung von Fitnessgeräten gehört dazu. Wir desinfizieren Griffe, Polster und Kontaktflächen regelmäßig.'
      },
      {
        frage: 'Können Sie mehrmals täglich reinigen?',
        antwort: 'Ja, bei hoher Frequenz bieten wir auch mehrfache tägliche Reinigungsdurchgänge an, besonders für Sanitärbereiche und Umkleiden.'
      }
    ]
  },

  // ============================================
  // 8. LOGISTIK & LAGER
  // ============================================
  {
    id: '8',
    slug: 'logistik-lager',
    name: 'Logistik & Lager',
    shortName: 'Logistik',
    metaTitle: 'Lagerreinigung Landshut | Hallenreinigung für Logistik',
    metaDescription: 'Professionelle Lagerreinigung in Landshut & Bayern. Große Flächen, effizient, maschinell. ✓ Minimale Störung ✓ Nachtschicht möglich',
    keywords: [
      'Lagerreinigung Landshut', 'Logistikzentrum Reinigung', 'Lagerhalle reinigen',
      'Hochregallager Reinigung', 'Distributionszentrum Reinigung', 'Kommissionierung Reinigung',
      'Versandzentrum Reinigung'
    ],
    headline: 'Lagerreinigung ohne Betriebsstörung',
    subheadline: 'Große Flächen, effizient gereinigt – auch nachts',
    description: 'Effiziente Reinigung für Lagerhallen, Logistikzentren und Distributionsflächen mit leistungsstarken Maschinen.',
    seoContent: `
## Lagerreinigung: Große Flächen, große Herausforderungen

Logistikzentren und Lagerhallen haben eine Gemeinsamkeit: Sie sind groß. Sehr groß. 10.000, 20.000 oder mehr Quadratmeter sind keine Seltenheit. Hier kommt man mit Besen und Wischmopp nicht weit.

**Bei FIMI haben wir die Maschinen und die Erfahrung für große Flächen.** Scheuersaugmaschinen, Kehrmaschinen und Industriesauger ermöglichen eine effiziente Reinigung – auch während des laufenden Betriebs.

### Die Herausforderungen in der Logistik

- **Große Flächen**: 5.000-50.000+ m² sind Standard
- **24/7 Betrieb**: Viele Lager laufen rund um die Uhr
- **Staub und Abrieb**: Kartons, Paletten, Verpackungsmaterial
- **Sicherheit**: Gabelstapler, Fördertechnik, Hochregale
- **Ware schützen**: Keine Beschädigung durch Reinigung

### Unsere Ausstattung für Lagerhallen

- **Aufsitz-Kehrmaschinen** für schnelle Flächenreinigung
- **Scheuersaugmaschinen** für Industrieböden
- **Hochdruckreiniger** für Außenbereiche
- **Industriesauger** für Feinstaub und Verpackungsreste
- **Hebebühnen** für Hochregalreinigung

### Unser Konzept für Logistikzentren

**Laufende Reinigung (während Betrieb)**
- Hauptgänge freihalten
- Verpackungsmaterial entsorgen
- Sozialräume reinigen
- Sanitär sauber halten

**Intensive Reinigung (Randzeiten/Nacht)**
- Komplette Bodenflächen maschinell
- Regalsysteme abstauben
- Ladezonen reinigen
- Außenbereiche und Parkplätze

**Sonderreinigung (bei Bedarf)**
- Nach Inventur
- Saisonwechsel (Umräumung)
- Vor Audits
- Schadensfälle (Auslauf, Bruch)

**Wir reinigen, wenn Sie es brauchen – nicht wenn es uns passt.**
    `,
    heroImage: '/images/branchen/logistik-lager/hero.avif',
    gallery: [
      { src: '/images/branchen/logistik-lager/hero.avif', alt: 'Modernes Hochregallager', caption: 'Saubere Lagerflächen' },
      { src: '/images/branchen/logistik-lager/gallery-1.avif', alt: 'Versandbereich', caption: 'Effiziente Arbeitsbereiche' },
      { src: '/images/branchen/logistik-lager/gallery-2.avif', alt: 'Laderampen', caption: 'Saubere Laderampen' },
    ],
    icon: 'Warehouse',
    detailedChallenges: [
      {
        titel: 'Riesige Flächen',
        beschreibung: '20.000 m² Lagerfläche mit Wischmopp? Das dauert ewig und bindet Personal.',
        loesung: 'Wir setzen Aufsitz-Kehrmaschinen und Scheuersaugmaschinen ein. Damit schaffen wir 5.000+ m²/Stunde.'
      },
      {
        titel: '24/7 Betrieb',
        beschreibung: 'Ihr Lager läuft rund um die Uhr. Wann soll gereinigt werden?',
        loesung: 'Wir arbeiten in Schichten und passen uns Ihrem Betrieb an. Auch Nachtschichten sind möglich.'
      },
      {
        titel: 'Sicherheit bei Gabelstaplerverkehr',
        beschreibung: 'Wenn Stapler fahren, muss die Reinigung sicher ablaufen.',
        loesung: 'Unsere Mitarbeiter sind eingewiesen und tragen Warnwesten. Wir koordinieren uns mit Ihrer Logistik.'
      }
    ],
    services: ['Hallenreinigung', 'Bodenreinigung', 'Hochregalreinigung', 'Außenflächenreinigung', 'Rampenreinigung', 'Grundreinigung'],
    benefits: [
      'Leistungsstarke Maschinen für große Flächen',
      'Nachtschicht und Wochenende möglich',
      'Koordination mit Ihrem Lagerbetrieb',
      'Erfahrung mit Logistikzentren',
      'Sicherheitsunterweisungen',
      'Schnelle Flächenleistung'
    ],
    processSteps: [
      { schritt: 1, titel: 'Flächenanalyse', beschreibung: 'Wir vermessen die Bereiche und analysieren Verschmutzungsquellen.' },
      { schritt: 2, titel: 'Einsatzplanung', beschreibung: 'Gemeinsam planen wir Reinigungszeiten, die zu Ihrem Betrieb passen.' },
      { schritt: 3, titel: 'Maschineneinsatz', beschreibung: 'Wir wählen die richtigen Maschinen für Ihre Böden und Flächen.' },
      { schritt: 4, titel: 'Regelmäßige Abstimmung', beschreibung: 'Kurze Wege zu Ihrer Lagerleitung für flexible Anpassungen.' }
    ],
    faqs: [
      {
        frage: 'Wie schnell können Sie 10.000 m² reinigen?',
        antwort: 'Mit unseren Aufsitz-Maschinen schaffen wir ca. 5.000 m²/Stunde. 10.000 m² sind also in 2-3 Stunden machbar.'
      },
      {
        frage: 'Können Sie auch nachts arbeiten?',
        antwort: 'Ja, Nachtschichten sind für uns Standard in der Logistik. Wir passen uns Ihrem 24/7-Betrieb an.'
      },
      {
        frage: 'Reinigen Sie auch Hochregale?',
        antwort: 'Ja, mit Hebebühnen und Teleskopgeräten erreichen wir auch die oberen Regalebenen.'
      },
      {
        frage: 'Was passiert bei Auslauf von Flüssigkeiten?',
        antwort: 'Wir reagieren schnell mit Absauggeräten und Bindemitteln. Bei gefährlichen Stoffen ziehen wir Spezialisten hinzu.'
      },
      {
        frage: 'Reinigen Sie auch Kühlhäuser?',
        antwort: 'Ja, wir reinigen auch temperaturgeführte Bereiche. Unsere Teams sind entsprechend ausgerüstet und arbeiten effizient trotz niedriger Temperaturen.'
      },
      {
        frage: 'Wie gehen Sie mit 24/7-Betrieben um?',
        antwort: 'Wir passen uns Ihren Schichtzeiten an und reinigen in Arbeitspausen, Schichtwechseln oder weniger frequentierten Zeiten.'
      }
    ]
  },

  // ============================================
  // 9. WOHNUNGSWIRTSCHAFT
  // ============================================
  {
    id: '9',
    slug: 'wohnungswirtschaft',
    name: 'Wohnungswirtschaft',
    shortName: 'Wohnen',
    metaTitle: 'Treppenhausreinigung Landshut | Hausverwaltung Reinigung',
    metaDescription: 'Professionelle Treppenhausreinigung in Landshut & Bayern. Wohnanlagen, Außenbereiche, Winterdienst. ✓ Zuverlässig ✓ Regelmäßig ✓ Faire Preise',
    keywords: [
      'Treppenhausreinigung Landshut', 'Hausverwaltung Reinigung', 'Wohnanlage Reinigung',
      'Hausflur reinigen', 'Tiefgarage Reinigung', 'Winterdienst Wohnanlage',
      'Außenanlagenpflege Wohnen'
    ],
    headline: 'Saubere Treppenhäuser, zufriedene Mieter',
    subheadline: 'Zuverlässige Reinigung für Hausverwaltungen und Wohnanlagen',
    description: 'Zuverlässige Reinigung für Wohnanlagen, Treppenhäuser und Außenbereiche. Treppenhausreinigung, Winterdienst und Hausmeisterservice.',
    seoContent: `
## Treppenhausreinigung: Der erste Eindruck für Ihre Mieter

Das Treppenhaus ist die Visitenkarte einer Wohnanlage. Wenn Mieter oder Besucher das Haus betreten, sehen sie sofort, ob hier Wert auf Sauberkeit gelegt wird. Ein vernachlässigtes Treppenhaus mindert den Wohnwert – und führt zu Beschwerden.

**Für Hausverwaltungen und Eigentümer ist eine zuverlässige Treppenhausreinigung Gold wert.** Keine Beschwerden, keine Nachreinigung, keine Erklärungen nötig.

### Was Wohnanlagen brauchen

- **Treppenhausreinigung**: Regelmäßig, gründlich, zuverlässig
- **Eingangsbereich**: Sauber und einladend
- **Mülltonnenstellplätze**: Hygienisch, geruchsfrei
- **Tiefgaragen**: Frei von Schmutz und Laub
- **Außenanlagen**: Gepflegt und sicher
- **Winterdienst**: Schnee räumen und streuen

### Unser Konzept für die Wohnungswirtschaft

**Regelmäßige Treppenhausreinigung**
- Wöchentlich oder nach Bedarf
- Böden, Geländer, Briefkästen
- Aufzüge und Gemeinschaftsräume
- Dokumentation für die Verwaltung

**Saisonale Leistungen**
- Frühjahrsputz: Fenster, Kellergänge
- Herbst: Laub entfernen, Regenrinnen
- Winter: Winterdienst, Streugut

**Zusatzleistungen**
- Hausmeisterservice
- Grünflächenpflege
- Tiefgaragenreinigung
- Sperrmüllkoordination

### Warum Hausverwaltungen uns wählen

- **Zuverlässigkeit**: Wir kommen, wann vereinbart – ohne Ausnahme
- **Dokumentation**: Sie erhalten Nachweise für Ihre Unterlagen
- **Ein Ansprechpartner**: Nicht mit 10 verschiedenen Dienstleistern reden
- **Faire Preise**: Transparent kalkuliert, ohne Überraschungen

**Weniger Mieterbeschwerden, weniger Stress für Sie.**
    `,
    heroImage: '/images/branchen/wohnungswirtschaft/hero.avif',
    gallery: [
      { src: '/images/branchen/wohnungswirtschaft/hero.avif', alt: 'Gepflegtes Mehrfamilienhaus', caption: 'Gepflegte Wohnanlagen' },
      { src: '/images/branchen/wohnungswirtschaft/gallery-1.avif', alt: 'Treppenhaus', caption: 'Saubere Treppenhäuser' },
      { src: '/images/branchen/wohnungswirtschaft/gallery-2.avif', alt: 'Tiefgarage', caption: 'Gepflegte Tiefgaragen' },
    ],
    icon: 'Home',
    detailedChallenges: [
      {
        titel: 'Viele Parteien, viele Meinungen',
        beschreibung: 'In Wohnanlagen gibt es immer jemanden, der unzufrieden ist. Jede Beschwerde landet bei der Verwaltung.',
        loesung: 'Wir arbeiten so zuverlässig, dass Beschwerden die Ausnahme sind. Und wenn doch: Schnelle Nachbesserung.'
      },
      {
        titel: 'Regelmäßigkeit ist alles',
        beschreibung: 'Wenn die Reinigung ausfällt, merken es die Mieter sofort. Und beschweren sich.',
        loesung: 'Feste Termine, feste Teams, dokumentierte Leistungen. Ausfälle werden sofort nachgeholt.'
      },
      {
        titel: 'Außenbereiche und Winterdienst',
        beschreibung: 'Neben dem Treppenhaus gibt es Außenanlagen, Müllplätze, im Winter Schnee...',
        loesung: 'Wir bieten alles aus einer Hand: Treppenhausreinigung, Außenpflege, Winterdienst. Ein Ansprechpartner für Sie.'
      }
    ],
    services: ['Treppenhausreinigung', 'Tiefgaragenreinigung', 'Außenanlagenpflege', 'Winterdienst', 'Hausmeisterservice', 'Glasreinigung'],
    benefits: [
      'Zuverlässig wie ein Uhrwerk',
      'Dokumentation für Verwaltung',
      'Treppenhausreinigung + Außen + Winter',
      'Feste Ansprechpartner',
      'Flexible Intervalle',
      'Faire, transparente Preise'
    ],
    processSteps: [
      { schritt: 1, titel: 'Objektbesichtigung', beschreibung: 'Wir schauen uns alle Gebäude und Außenbereiche an.' },
      { schritt: 2, titel: 'Leistungspaket', beschreibung: 'Wir stellen ein Paket zusammen: Reinigung, Pflege, Winterdienst.' },
      { schritt: 3, titel: 'Feste Termine', beschreibung: 'Wir vereinbaren verbindliche Termine, an die wir uns halten.' },
      { schritt: 4, titel: 'Regelmäßige Berichte', beschreibung: 'Sie erhalten Dokumentation für Ihre Unterlagen und die Eigentümer.' }
    ],
    faqs: [
      {
        frage: 'Wie oft sollte ein Treppenhaus gereinigt werden?',
        antwort: 'Das hängt von der Nutzung ab. Standard ist wöchentlich, bei hoher Frequenz auch 2x wöchentlich.'
      },
      {
        frage: 'Bieten Sie auch Winterdienst an?',
        antwort: 'Ja, Winterdienst gehört zu unserem Angebot für Wohnanlagen. Schneräumung und Streudienst nach Bedarf.'
      },
      {
        frage: 'Können Sie mehrere Objekte betreuen?',
        antwort: 'Ja, wir betreuen Hausverwaltungen mit mehreren Objekten. Ein Ansprechpartner für alle Ihre Anlagen.'
      },
      {
        frage: 'Was passiert bei Beschwerden?',
        antwort: 'Wir nehmen jede Beschwerde ernst und reagieren schnell. In der Regel innerhalb von 24 Stunden gelöst.'
      },
      {
        frage: 'Bieten Sie auch Winterdienst an?',
        antwort: 'Ja, Winterdienst inklusive Räum- und Streupflicht gehört zu unserem Angebot für Wohnanlagen. Wir sorgen für sichere Gehwege.'
      },
      {
        frage: 'Kümmern Sie sich auch um die Müllentsorgung?',
        antwort: 'Ja, wir können die Bereitstellung der Mülltonnen und die Reinigung der Müllstandplätze übernehmen.'
      }
    ]
  },

  // ============================================
  // 10. ÖFFENTLICHE EINRICHTUNGEN
  // ============================================
  {
    id: '10',
    slug: 'oeffentliche-einrichtungen',
    name: 'Öffentliche Einrichtungen',
    shortName: 'Öffentlich',
    metaTitle: 'Behördenreinigung Landshut | Öffentliche Gebäude',
    metaDescription: 'Professionelle Reinigung für Behörden in Landshut & Bayern. Rathäuser, Ämter, öffentliche Gebäude. ✓ Zuverlässig ✓ Referenzen',
    keywords: [
      'Behördenreinigung Landshut', 'Rathaus Reinigung', 'Amt Reinigung',
      'Öffentliche Gebäude Reinigung', 'Verwaltungsgebäude Reinigung', 'Kultureinrichtung Reinigung',
      'Bibliothek Reinigung'
    ],
    headline: 'Zuverlässige Reinigung für öffentliche Einrichtungen',
    subheadline: 'Repräsentative Sauberkeit für Bürger und Besucher',
    description: 'Professionelle Reinigung für Behörden, Rathäuser und öffentliche Gebäude. Repräsentative Sauberkeit, zuverlässige Leistung.',
    seoContent: `
## Behördenreinigung: Repräsentativ und zuverlässig

Öffentliche Einrichtungen sind Anlaufstellen für Bürger. Ob Rathaus, Amt oder Bibliothek – diese Gebäude repräsentieren die Stadt oder Gemeinde. Entsprechend hoch sind die Anforderungen an Sauberkeit und Ordnung.

**Bei FIMI verstehen wir die besonderen Bedürfnisse öffentlicher Auftraggeber.** Zuverlässigkeit, Diskretion und ein tadelloses Erscheinungsbild sind für uns selbstverständlich.

### Besonderheiten öffentlicher Einrichtungen

- **Hoher Publikumsverkehr**: Täglich kommen viele Bürger
- **Repräsentative Räume**: Ratssäle, Empfangshallen, Bürgerbüros
- **Sicherheitsbereiche**: Standesämter, Archive, Serverräume
- **Längere Entscheidungswege**: Öffentliche Ausschreibungen, Vergaberecht

### Unsere Erfahrung mit öffentlichen Auftraggebern

Wir kennen die Anforderungen:
- Dokumentierte Leistungsnachweise
- Einhaltung von Vergaberichtlinien
- Regelmäßige Qualitätskontrollen
- Sicherheitsüberprüfung bei Bedarf

### Was wir für öffentliche Einrichtungen leisten

**Tägliche Reinigung**
- Bürgerbüros und Wartebereiche
- Sanitäranlagen
- Eingangshallen und Flure
- Büroräume der Verwaltung

**Regelmäßige Intensivreinigung**
- Repräsentative Räume (Ratssäle, Foyers)
- Fenster und Glasflächen
- Teppichböden und textile Beläge
- Technische Bereiche

**Sonderleistungen**
- Veranstaltungsreinigung (Wahlen, Events)
- Grundreinigung in Ferienzeiten
- Winterdienst für Außenbereiche

**Wir verstehen öffentliche Auftraggeber – und liefern, was Sie brauchen.**
    `,
    heroImage: '/images/branchen/oeffentliche-einrichtungen/hero.avif',
    gallery: [
      { src: '/images/branchen/oeffentliche-einrichtungen/hero.avif', alt: 'Rathaus Foyer', caption: 'Repräsentative Eingangsbereiche' },
      { src: '/images/branchen/oeffentliche-einrichtungen/gallery-1.avif', alt: 'Bibliothek Lesesaal', caption: 'Saubere Lernumgebungen' },
      { src: '/images/branchen/oeffentliche-einrichtungen/gallery-2.avif', alt: 'Hallenbad', caption: 'Hygienische Bäder' },
    ],
    icon: 'Landmark',
    detailedChallenges: [
      {
        titel: 'Hoher Publikumsverkehr',
        beschreibung: 'Täglich kommen Hunderte Bürger. Die Reinigung muss trotzdem stattfinden.',
        loesung: 'Wir reinigen vor Öffnung, in der Mittagspause und nach Schließung. Kritische Bereiche auch zwischendurch.'
      },
      {
        titel: 'Repräsentative Ansprüche',
        beschreibung: 'Ratssäle und Empfangshallen müssen immer tadellos aussehen.',
        loesung: 'Besondere Aufmerksamkeit für repräsentative Räume. Regelmäßige Sichtkontrollen.'
      },
      {
        titel: 'Vergaberechtliche Anforderungen',
        beschreibung: 'Öffentliche Aufträge haben besondere formale Anforderungen.',
        loesung: 'Wir kennen das Vergaberecht und erstellen alle erforderlichen Nachweise und Dokumentationen.'
      }
    ],
    services: ['Unterhaltsreinigung', 'Glasreinigung', 'Ratssaalreinigung', 'Sanitärreinigung', 'Winterdienst', 'Veranstaltungsreinigung'],
    benefits: [
      'Erfahrung mit öffentlichen Auftraggebern',
      'Dokumentierte Leistungsnachweise',
      'Zuverlässig und pünktlich',
      'Sicherheitsgeprüftes Personal',
      'Flexible Einsatzzeiten',
      'Repräsentative Qualität'
    ],
    processSteps: [
      { schritt: 1, titel: 'Bedarfsermittlung', beschreibung: 'Wir analysieren die Anforderungen und erstellen ein Leistungsverzeichnis.' },
      { schritt: 2, titel: 'Angebot', beschreibung: 'Transparentes Angebot, das den vergaberechtlichen Anforderungen entspricht.' },
      { schritt: 3, titel: 'Einarbeitung', beschreibung: 'Gründliche Einarbeitung unseres Teams in die Gegebenheiten vor Ort.' },
      { schritt: 4, titel: 'Qualitätssicherung', beschreibung: 'Regelmäßige Abstimmung und dokumentierte Qualitätskontrollen.' }
    ],
    faqs: [
      {
        frage: 'Können Sie an öffentlichen Ausschreibungen teilnehmen?',
        antwort: 'Ja, wir erfüllen alle Voraussetzungen für öffentliche Ausschreibungen und erstellen die erforderlichen Nachweise.'
      },
      {
        frage: 'Wie gehen Sie mit Sicherheitsbereichen um?',
        antwort: 'Sensible Bereiche werden nur von geprüftem Personal gereinigt. Auf Wunsch können wir Sicherheitsüberprüfungen vorlegen.'
      },
      {
        frage: 'Bieten Sie auch Winterdienst an?',
        antwort: 'Ja, für öffentliche Einrichtungen bieten wir auch Winterdienst für Außenbereiche und Zugangswege an.'
      },
      {
        frage: 'Können Sie kurzfristig für Veranstaltungen einspringen?',
        antwort: 'Ja, bei Wahlen, Bürgerversammlungen oder Events unterstützen wir mit zusätzlichen Teams.'
      },
      {
        frage: 'Erfüllen Sie die Anforderungen öffentlicher Ausschreibungen?',
        antwort: 'Ja, wir sind erfahren mit öffentlichen Auftraggebern und erfüllen alle formalen Anforderungen für Vergabeverfahren.'
      },
      {
        frage: 'Können Sie auch Veranstaltungsräume reinigen?',
        antwort: 'Ja, wir reinigen Veranstaltungsräume vor und nach Events. Auch kurzfristige Einsätze sind möglich.'
      }
    ]
  },

  // ============================================
  // 11. BANKEN & VERSICHERUNGEN
  // ============================================
  {
    id: '11',
    slug: 'banken-versicherungen',
    name: 'Banken & Versicherungen',
    shortName: 'Finanzen',
    metaTitle: 'Bankreinigung Landshut | Diskrete Reinigung für Finanzdienstleister',
    metaDescription: 'Professionelle Reinigung für Banken in Landshut & Bayern. Diskret, zuverlässig, sicherheitsgeprüft. ✓ Schalterräume ✓ Büros ✓ Tresorräume',
    keywords: [
      'Bankreinigung Landshut', 'Versicherung Reinigung', 'Finanzdienstleister Reinigung',
      'Bankfiliale reinigen', 'Diskrete Reinigung Bank', 'Schalterraum Reinigung',
      'Tresorraum Reinigung'
    ],
    headline: 'Diskrete Reinigung für höchste Ansprüche',
    subheadline: 'Vertrauenswürdig, zuverlässig, sicherheitsgeprüft',
    description: 'Diskrete und zuverlässige Reinigung für Banken und Versicherungen. Sicherheitsgeprüftes Personal, repräsentative Qualität.',
    seoContent: `
## Bankreinigung: Vertrauen ist unser Geschäft

In Banken und Versicherungen geht es um Vertrauen. Ihre Kunden vertrauen Ihnen ihr Geld an. Sie müssen darauf vertrauen können, dass Ihr Reinigungsdienstleister ebenso zuverlässig und diskret arbeitet.

**Bei FIMI verstehen wir diese besonderen Anforderungen.** Unsere Mitarbeiter für Finanzdienstleister sind besonders sorgfältig ausgewählt und auf Diskretion geschult.

### Die besonderen Anforderungen

- **Höchste Diskretion**: Vertrauliche Dokumente, sensible Gespräche
- **Sicherheitsbereiche**: Tresorräume, Serverräume, Archive
- **Repräsentative Kundenbereiche**: Schalterräume, Beratungsbüros
- **Außerhalb Geschäftszeiten**: Reinigung darf Kunden nicht stören

### Unser Personal

Für Banken und Versicherungen wählen wir unser Personal besonders sorgfältig aus:
- Langjährige, zuverlässige Mitarbeiter
- Auf Wunsch: Führungszeugnis
- Einweisung in Sicherheitsvorschriften
- Diskretion als oberste Priorität

### Was wir für Sie reinigen

**Kundenbereiche**
- Schalterräume und SB-Bereiche
- Beratungszimmer
- Wartebereiche
- Eingänge und Parkplätze

**Mitarbeiterbereiche**
- Büros und Besprechungsräume
- Sozialräume und Küchen
- Sanitäranlagen

**Besondere Bereiche**
- Serverräume (nach Einweisung)
- Archive (staubfrei)
- Auf Wunsch: Tresorraum-Vorräume

**Ihr guter Ruf ist unser Auftrag.**
    `,
    heroImage: '/images/branchen/banken-versicherungen/hero.avif',
    gallery: [
      { src: '/images/branchen/banken-versicherungen/hero.avif', alt: 'Bankschalterhalle', caption: 'Vertrauenswürdige Atmosphäre' },
      { src: '/images/branchen/banken-versicherungen/gallery-1.avif', alt: 'Beratungszimmer', caption: 'Diskrete Beratungsräume' },
      { src: '/images/branchen/banken-versicherungen/gallery-2.avif', alt: 'Versicherung Empfang', caption: 'Professioneller Empfang' },
    ],
    icon: 'Banknote',
    detailedChallenges: [
      {
        titel: 'Höchste Diskretion',
        beschreibung: 'In Banken liegen sensible Dokumente. Reinigungskräfte dürfen diese nicht einsehen.',
        loesung: 'Unsere Mitarbeiter sind auf Diskretion geschult. Dokumente werden nicht berührt, Schreibtische nur nach Freigabe gereinigt.'
      },
      {
        titel: 'Sicherheitsbereiche',
        beschreibung: 'Tresorräume und Serverräume erfordern besondere Vorsicht.',
        loesung: 'Nur besonders geschultes Personal für Sicherheitsbereiche. Einweisung durch Ihre Haustechnik.'
      },
      {
        titel: 'Repräsentative Kundenbereiche',
        beschreibung: 'Kunden erwarten in einer Bank makellose Sauberkeit. Flecken oder Staub fallen sofort auf.',
        loesung: 'Tägliche Kontrolle der Kundenbereiche. Bei Bedarf Sondereinsätze für repräsentative Räume.'
      }
    ],
    services: ['Schalterraumreinigung', 'Büroreinigung', 'Glasreinigung', 'Teppichreinigung', 'Sanitärreinigung', 'SB-Bereichsreinigung'],
    benefits: [
      'Sicherheitsgeprüftes Personal',
      'Höchste Diskretion',
      'Reinigung außerhalb Geschäftszeiten',
      'Repräsentative Qualität',
      'Zuverlässig und pünktlich',
      'Erfahrung mit Finanzbranche'
    ],
    processSteps: [
      { schritt: 1, titel: 'Vertrauliches Gespräch', beschreibung: 'Wir besprechen Ihre Anforderungen und Sicherheitsvorschriften.' },
      { schritt: 2, titel: 'Personalauswahl', beschreibung: 'Wir wählen besonders zuverlässige Mitarbeiter für Ihren Einsatz aus.' },
      { schritt: 3, titel: 'Sicherheitseinweisung', beschreibung: 'Unser Team wird auf Ihre Sicherheitsvorschriften eingewiesen.' },
      { schritt: 4, titel: 'Diskreter Betrieb', beschreibung: 'Zuverlässige Reinigung, ohne dass es jemand bemerkt.' }
    ],
    faqs: [
      {
        frage: 'Können Ihre Mitarbeiter ein Führungszeugnis vorlegen?',
        antwort: 'Ja, auf Wunsch stellen wir Führungszeugnisse zur Verfügung. Für Sicherheitsbereiche ist das Standard.'
      },
      {
        frage: 'Wie gehen Sie mit vertraulichen Dokumenten um?',
        antwort: 'Dokumente werden nie berührt. Schreibtische werden nur gereinigt, wenn sie freigeräumt sind oder nach ausdrücklicher Freigabe.'
      },
      {
        frage: 'Reinigen Sie auch SB-Bereiche?',
        antwort: 'Ja, SB-Bereiche und Geldautomaten-Räume reinigen wir regelmäßig. Auf Wunsch auch mehrmals täglich.'
      },
      {
        frage: 'Können Sie außerhalb der Öffnungszeiten arbeiten?',
        antwort: 'Ja, für Banken arbeiten wir standardmäßig vor Öffnung oder nach Schließung. Schlüsselübergabe oder Alarmcode nach Absprache.'
      },
      {
        frage: 'Wie gewährleisten Sie die Sicherheit?',
        antwort: 'Unsere Mitarbeiter sind sicherheitsüberprüft und unterschreiben Vertraulichkeitserklärungen. Zutrittskontrollen werden strikt eingehalten.'
      },
      {
        frage: 'Reinigen Sie auch Schließfachbereiche?',
        antwort: 'Auf Wunsch ja, unter Einhaltung aller Sicherheitsprotokolle und in Begleitung Ihres Personals.'
      }
    ]
  },

  // ============================================
  // 12. AUTOMOTIVE
  // ============================================
  {
    id: '12',
    slug: 'automotive',
    name: 'Automotive',
    shortName: 'Auto',
    metaTitle: 'Autohaus Reinigung Landshut | Showroom & Werkstatt',
    metaDescription: 'Professionelle Reinigung für Autohäuser in Landshut & Bayern. Showroom, Werkstatt, Außenflächen. ✓ Präsentabel ✓ Gründlich ✓ Regelmäßig',
    keywords: [
      'Autohaus Reinigung Landshut', 'Showroom Reinigung', 'Werkstatt Reinigung',
      'KFZ Betrieb Reinigung', 'Autohaus putzen', 'Verkaufsraum Auto Reinigung',
      'Gebrauchtwagen Reinigung'
    ],
    headline: 'Showrooms, die verkaufen',
    subheadline: 'Professionelle Reinigung für Autohäuser und KFZ-Betriebe',
    description: 'Spezialisierte Reinigung für Autohäuser, Werkstätten und Showrooms. Der erste Eindruck entscheidet – wir sorgen dafür, dass er stimmt.',
    seoContent: `
## Autohaus-Reinigung: Glanz, der verkauft

Im Autohaus entscheidet der erste Eindruck. Wenn ein Kunde den Showroom betritt, muss alles glänzen: die Fahrzeuge, der Boden, die Fenster. Ein staubiger Showroom oder eine schmutzige Werkstatt hinterlassen einen schlechten Eindruck – und kosten Sie Verkäufe.

**Bei FIMI verstehen wir die Automobilbranche.** Wir wissen, dass Samstag der wichtigste Verkaufstag ist und dass der Showroom dann perfekt aussehen muss.

### Die besonderen Anforderungen

- **Showroom**: Hochglanzböden, riesige Glasfronten, präsentierte Fahrzeuge
- **Werkstatt**: Öl, Fett, Bremsstaub – hartnäckige Verschmutzungen
- **Außenflächen**: Große Parkflächen, Fahnenmasten, Einfahrten
- **Kundenbereich**: Wartelounge, Café-Ecke, Kinderspielbereich

### Unser Konzept für Autohäuser

**Showroom (täglich)**
- Boden polieren und entstauben
- Glasfronten streifenfrei
- Fahrzeugpräsentation entstauben
- Empfangsbereich makellos

**Werkstatt (regelmäßig)**
- Böden maschinell reinigen
- Ölflecken entfernen
- Werkbänke reinigen
- Sozialräume für Mechaniker

**Außenbereich**
- Parkplätze kehren
- Schaufläche für Fahrzeuge
- Fahnenmasten und Beschilderung
- Winterdienst

### Warum Autohäuser uns wählen

- **Samstag-Garantie**: Wir sorgen dafür, dass der Showroom vor Öffnung perfekt ist
- **Hochglanz-Kompetenz**: Erfahrung mit polierten Böden und großen Glasflächen
- **Werkstatt-Know-how**: Wir kennen die speziellen Verschmutzungen
- **Flexible Zeiten**: Reinigung vor Öffnung, damit Verkäufer starten können

**Lassen Sie Ihre Fahrzeuge glänzen – und Ihr Autohaus auch.**
    `,
    heroImage: '/images/branchen/automotive/hero.avif',
    gallery: [
      { src: '/images/branchen/automotive/hero.avif', alt: 'Autohaus Showroom', caption: 'Makellose Präsentation' },
      { src: '/images/branchen/automotive/gallery-1.avif', alt: 'KFZ-Werkstatt', caption: 'Saubere Werkstätten' },
      { src: '/images/branchen/automotive/gallery-2.avif', alt: 'Waschanlage', caption: 'Gepflegte Waschanlagen' },
    ],
    icon: 'Car',
    detailedChallenges: [
      {
        titel: 'Hochglanzboden im Showroom',
        beschreibung: 'Polierte Böden zeigen jeden Fußabdruck. Und Kunden hinterlassen viele davon.',
        loesung: 'Tägliche Reinigung mit Hochglanz-Finish. Spezielle Polierpads für empfindliche Böden.'
      },
      {
        titel: 'Riesige Glasfronten',
        beschreibung: 'Showrooms haben oft Glasfassaden über mehrere Etagen. Fingerabdrücke und Vogelkot fallen sofort auf.',
        loesung: 'Regelmäßige Glasreinigung mit Hebebühne oder Teleskopstange. Streifenfrei und professionell.'
      },
      {
        titel: 'Werkstatt-Verschmutzungen',
        beschreibung: 'Öl, Fett, Bremsstaub – in der Werkstatt ist es schmutzig. Normale Reinigung reicht nicht.',
        loesung: 'Industriemaschinen und Spezialreiniger für Werkstattböden. Ölbindemittel bei Bedarf.'
      }
    ],
    services: ['Showroom-Reinigung', 'Werkstattreinigung', 'Glasreinigung', 'Außenflächenreinigung', 'Empfangsbereichsreinigung', 'Sanitärreinigung'],
    benefits: [
      'Hochglanz-Kompetenz für Showrooms',
      'Erfahrung mit Werkstatt-Verschmutzungen',
      'Große Glasflächen kein Problem',
      'Reinigung vor Samstagsöffnung',
      'Außenflächen und Parkplätze',
      'Flexible Einsatzzeiten'
    ],
    processSteps: [
      { schritt: 1, titel: 'Showroom-Check', beschreibung: 'Wir analysieren Böden, Glasflächen und besondere Anforderungen.' },
      { schritt: 2, titel: 'Reinigungskonzept', beschreibung: 'Tägliche Showroom-Pflege, regelmäßige Werkstattreinigung, Außenbereiche.' },
      { schritt: 3, titel: 'Zeitplanung', beschreibung: 'Abstimmung auf Ihre Öffnungszeiten – besonders samstags.' },
      { schritt: 4, titel: 'Regelbetrieb', beschreibung: 'Zuverlässige Reinigung, damit Sie verkaufen können.' }
    ],
    faqs: [
      {
        frage: 'Können Sie vor der Samstagsöffnung fertig sein?',
        antwort: 'Ja, samstags ist für Autohäuser der wichtigste Tag. Wir planen so, dass der Showroom vor Öffnung perfekt ist.'
      },
      {
        frage: 'Wie reinigen Sie große Glasfronten?',
        antwort: 'Mit Teleskopstangen oder Hebebühnen erreichen wir auch hohe Glasflächen. Streifenfrei und professionell.'
      },
      {
        frage: 'Können Sie Ölflecken aus Werkstattböden entfernen?',
        antwort: 'Ja, mit Industriereinigern und Spezialmaschinen entfernen wir auch hartnäckige Öl- und Fettflecken.'
      },
      {
        frage: 'Reinigen Sie auch die Ausstellungsfahrzeuge?',
        antwort: 'Nein, Fahrzeuge reinigen wir nicht – das überlassen wir Ihren Aufbereitern. Aber wir sorgen dafür, dass die Umgebung glänzt.'
      },
      {
        frage: 'Reinigen Sie auch Werkstattbereiche?',
        antwort: 'Ja, Werkstattreinigung inklusive Ölfleckenentfernung und Bodenreinigung gehört zu unserem Angebot für Autohäuser.'
      },
      {
        frage: 'Können Sie auch Fahrzeugaufbereitung übernehmen?',
        antwort: 'Wir konzentrieren uns auf die Gebäudereinigung. Für Fahrzeugaufbereitung empfehlen wir spezialisierte Partner.'
      }
    ]
  }
]

// Helper Functions
export function getBrancheBySlug(slug: string): Branche | undefined {
  return branchen.find(b => b.slug === slug)
}

export function getAllBranchen(): Branche[] {
  return branchen
}

export function getBranchenByKeyword(keyword: string): Branche[] {
  const lowerKeyword = keyword.toLowerCase()
  return branchen.filter(b =>
    b.keywords.some(k => k.toLowerCase().includes(lowerKeyword)) ||
    b.name.toLowerCase().includes(lowerKeyword) ||
    b.seoContent.toLowerCase().includes(lowerKeyword)
  )
}
