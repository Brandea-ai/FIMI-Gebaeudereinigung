// Leistungen Data - Alle 18 professionellen Reinigungsservices
// SEO-optimiert aus Kundenperspektive

export interface Leistung {
  id: string
  slug: string
  name: string
  shortName: string
  category: 'gewerblich' | 'industrie' | 'facility' | 'spezial'
  description: string
  longDescription: string
  image: string
  icon: string
  benefits: string[]
  keywords: string[]
  metaTitle: string
  metaDescription: string
}

export const categories = {
  gewerblich: {
    id: 'gewerblich',
    label: 'Gewerbliche Reinigung',
    description: 'Professionelle Reinigung für Büros, Praxen und Geschäftsräume',
    color: '#109387',
  },
  industrie: {
    id: 'industrie',
    label: 'Industriereinigung',
    description: 'Spezialisierte Reinigung für Produktion und Industrie',
    color: '#012956',
  },
  facility: {
    id: 'facility',
    label: 'Facility Management',
    description: 'Ganzheitliche Gebäudebetreuung und Hausmeisterservices',
    color: '#0d7d72',
  },
  spezial: {
    id: 'spezial',
    label: 'Spezialreinigung',
    description: 'Sonderreinigungen und individuelle Lösungen',
    color: '#01203d',
  },
}

export const leistungen: Leistung[] = [
  // ============ GEWERBLICHE REINIGUNG ============
  {
    id: '1',
    slug: 'unterhaltsreinigung',
    name: 'Unterhaltsreinigung',
    shortName: 'Unterhaltsreinigung',
    category: 'gewerblich',
    description: 'Regelmäßige professionelle Reinigung Ihrer Geschäftsräume - täglich, wöchentlich oder nach Bedarf.',
    longDescription: 'Die Unterhaltsreinigung ist das Fundament für ein sauberes und hygienisches Arbeitsumfeld. Unsere geschulten Reinigungskräfte sorgen durch regelmäßige Intervalle dafür, dass Ihre Räumlichkeiten stets einen gepflegten Eindruck hinterlassen. Von der täglichen Büroreinigung bis zur wöchentlichen Grundreinigung - wir passen uns Ihren Anforderungen an.',
    image: 'https://images.unsplash.com/photo-1581578731548-c64695cc6952?q=80&w=800&auto=format&fit=crop',
    icon: 'Sparkles',
    benefits: [
      'Flexible Reinigungsintervalle',
      'Geschultes Stammpersonal',
      'Umweltfreundliche Reinigungsmittel',
      'Qualitätskontrolle inklusive',
    ],
    keywords: ['Unterhaltsreinigung', 'regelmäßige Reinigung', 'Gebäudereinigung', 'Büroreinigung'],
    metaTitle: 'Unterhaltsreinigung Bayern | Professionelle Gebäudereinigung',
    metaDescription: 'Professionelle Unterhaltsreinigung in Bayern. Regelmäßige Reinigung für Büros & Gewerbe. ✓ Flexible Intervalle ✓ Geschultes Personal ✓ Kostenfreie Besichtigung',
  },
  {
    id: '2',
    slug: 'bueroreinigung',
    name: 'Büroreinigung',
    shortName: 'Büroreinigung',
    category: 'gewerblich',
    description: 'Saubere Büros für produktive Mitarbeiter - professionelle Reinigung Ihrer Arbeitsflächen.',
    longDescription: 'Ein sauberes Büro steigert die Produktivität und das Wohlbefinden Ihrer Mitarbeiter. Unsere Büroreinigung umfasst alle Bereiche: Arbeitsplätze, Konferenzräume, Küchen, Sanitäranlagen und Empfangsbereiche. Wir arbeiten diskret außerhalb Ihrer Geschäftszeiten und hinterlassen jeden Tag ein frisches, hygienisches Arbeitsumfeld.',
    image: 'https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=800&auto=format&fit=crop',
    icon: 'Building2',
    benefits: [
      'Reinigung außerhalb der Geschäftszeiten',
      'Hygienische Arbeitsplätze',
      'Desinfektion von Kontaktflächen',
      'Müllentsorgung & Recycling',
    ],
    keywords: ['Büroreinigung', 'Office Cleaning', 'Arbeitsplatzreinigung', 'Gewerbereinigung'],
    metaTitle: 'Büroreinigung Bayern | Saubere Büros für Ihr Unternehmen',
    metaDescription: 'Professionelle Büroreinigung in Bayern. Saubere Arbeitsplätze für produktive Mitarbeiter. ✓ Außerhalb Geschäftszeiten ✓ Desinfektion ✓ Festpreise',
  },
  {
    id: '3',
    slug: 'glasreinigung',
    name: 'Glasreinigung',
    shortName: 'Glasreinigung',
    category: 'gewerblich',
    description: 'Streifenfreie Glasflächen für einen brillanten ersten Eindruck.',
    longDescription: 'Saubere Glasflächen sind die Visitenkarte Ihres Unternehmens. Unsere professionelle Glasreinigung sorgt für streifenfreie Fenster, Glasfassaden und Innenverglasungen. Mit modernster Ausrüstung und erfahrenen Fachkräften reinigen wir auch schwer zugängliche Bereiche sicher und effizient.',
    image: 'https://images.unsplash.com/photo-1527515637462-cff94eecc1ac?q=80&w=800&auto=format&fit=crop',
    icon: 'Droplets',
    benefits: [
      'Streifenfreie Ergebnisse',
      'Höhenarbeiten mit Sicherung',
      'Rahmen & Simse inklusive',
      'Regelmäßige Intervalle möglich',
    ],
    keywords: ['Glasreinigung', 'Fensterreinigung Gewerbe', 'Glasfassade reinigen', 'professionelle Fensterreinigung'],
    metaTitle: 'Glasreinigung Bayern | Streifenfreie Fenster & Fassaden',
    metaDescription: 'Professionelle Glasreinigung in Bayern. Streifenfreie Fenster & Glasfassaden. ✓ Höhenarbeiten ✓ Rahmenreinigung ✓ Alle Glasflächen',
  },
  {
    id: '4',
    slug: 'fensterreinigung',
    name: 'Fensterreinigung',
    shortName: 'Fensterreinigung',
    category: 'gewerblich',
    description: 'Klare Sicht, helle Räume - professionelle Fensterreinigung für Ihr Gebäude.',
    longDescription: 'Saubere Fenster lassen mehr Tageslicht in Ihre Räume und verbessern das Arbeitsklima. Unsere Fensterreinigung umfasst Innen- und Außenreinigung, Rahmen, Fensterbänke und auf Wunsch auch Rollläden und Jalousien. Für Höhenarbeiten setzen wir geschultes Personal mit entsprechender Sicherheitsausrüstung ein.',
    image: 'https://images.unsplash.com/photo-1527515637462-cff94eecc1ac?q=80&w=800&auto=format&fit=crop',
    icon: 'Sun',
    benefits: [
      'Innen- & Außenreinigung',
      'Rahmen & Fensterbänke',
      'Rollläden auf Wunsch',
      'Sicherheitsgerechte Höhenarbeiten',
    ],
    keywords: ['Fensterreinigung', 'Fenster putzen lassen', 'Fensterreinigung Firma', 'gewerbliche Fensterreinigung'],
    metaTitle: 'Fensterreinigung Bayern | Professionell & Gründlich',
    metaDescription: 'Professionelle Fensterreinigung in Bayern. Innen & außen, Rahmen & Bänke. ✓ Höhenarbeiten ✓ Rollläden ✓ Regelmäßige Intervalle',
  },
  {
    id: '5',
    slug: 'fassadenreinigung',
    name: 'Fassadenreinigung',
    shortName: 'Fassadenreinigung',
    category: 'gewerblich',
    description: 'Werterhalten durch professionelle Fassadenpflege - für ein repräsentatives Erscheinungsbild.',
    longDescription: 'Die Fassade ist das Gesicht Ihres Gebäudes. Umwelteinflüsse, Algen und Verschmutzungen beeinträchtigen nicht nur die Optik, sondern können auch die Bausubstanz schädigen. Unsere schonende Fassadenreinigung entfernt Verschmutzungen materialgerecht und erhält den Wert Ihrer Immobilie.',
    image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=800&auto=format&fit=crop',
    icon: 'Building',
    benefits: [
      'Materialschonende Reinigung',
      'Algen- & Moosentfernung',
      'Werterhaltung der Immobilie',
      'Verschiedene Reinigungsverfahren',
    ],
    keywords: ['Fassadenreinigung', 'Hausfassade reinigen', 'Algenentfernung Fassade', 'Gebäudefassade säubern'],
    metaTitle: 'Fassadenreinigung Bayern | Werterhaltende Gebäudepflege',
    metaDescription: 'Professionelle Fassadenreinigung in Bayern. Materialschonend & werterhaltend. ✓ Algenentfernung ✓ Alle Fassadenarten ✓ Kostenfreie Besichtigung',
  },

  // ============ INDUSTRIEREINIGUNG ============
  {
    id: '6',
    slug: 'industriereinigung',
    name: 'Industriereinigung',
    shortName: 'Industriereinigung',
    category: 'industrie',
    description: 'Spezialisierte Reinigungslösungen für Produktion, Fertigung und Industrieanlagen.',
    longDescription: 'Industriebetriebe stellen besondere Anforderungen an die Reinigung. Öle, Fette, Produktionsrückstände und strenge Hygienevorschriften erfordern spezialisiertes Know-how. Unsere Industriereinigung umfasst alle Bereiche - von der Produktionshalle bis zum Reinraum. Wir kennen die Vorschriften und arbeiten nach höchsten Sicherheitsstandards.',
    image: 'https://images.unsplash.com/photo-1565688534245-05d6b5be184a?q=80&w=800&auto=format&fit=crop',
    icon: 'Factory',
    benefits: [
      'Branchenspezifisches Know-how',
      'Einhaltung aller Vorschriften',
      'Minimale Produktionsunterbrechung',
      'Spezialgeräte & -mittel',
    ],
    keywords: ['Industriereinigung', 'Fabrikreinigung', 'Produktionsreinigung', 'industrielle Gebäudereinigung'],
    metaTitle: 'Industriereinigung Bayern | Spezialist für Produktion & Fertigung',
    metaDescription: 'Professionelle Industriereinigung in Bayern. Produktionshallen, Maschinen, Reinräume. ✓ Vorschriftskonform ✓ Minimale Ausfallzeiten ✓ Spezialausrüstung',
  },
  {
    id: '7',
    slug: 'hallenreinigung',
    name: 'Hallenreinigung',
    shortName: 'Hallenreinigung',
    category: 'industrie',
    description: 'Großflächenreinigung für Produktions-, Lager- und Logistikhallen.',
    longDescription: 'Große Hallenflächen erfordern effiziente Reinigungskonzepte und leistungsstarke Maschinen. Ob Produktionshalle, Lagerhalle oder Logistikzentrum - wir reinigen Ihre Großflächen schnell und gründlich. Mit Aufsitz-Scheuersaugmaschinen und erfahrenem Personal bewältigen wir auch größte Flächen in kurzer Zeit.',
    image: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?q=80&w=800&auto=format&fit=crop',
    icon: 'Warehouse',
    benefits: [
      'Großflächenmaschinen',
      'Schnelle Durchführung',
      'Auch am Wochenende',
      'Bodenmarkierungen erhalten',
    ],
    keywords: ['Hallenreinigung', 'Lagerhalle reinigen', 'Produktionshalle Reinigung', 'Großflächenreinigung'],
    metaTitle: 'Hallenreinigung Bayern | Effiziente Großflächenreinigung',
    metaDescription: 'Professionelle Hallenreinigung in Bayern. Produktions- & Lagerhallen. ✓ Großflächenmaschinen ✓ Schnelle Durchführung ✓ Minimale Störung',
  },
  {
    id: '8',
    slug: 'maschinenreinigung',
    name: 'Maschinenreinigung',
    shortName: 'Maschinenreinigung',
    category: 'industrie',
    description: 'Fachgerechte Reinigung von Produktionsmaschinen und Anlagen.',
    longDescription: 'Saubere Maschinen sind die Voraussetzung für reibungslose Produktion und lange Lebensdauer. Unsere Maschinenreinigung entfernt Öle, Fette, Späne und Produktionsrückstände fachgerecht. Wir arbeiten nach Herstellervorgaben und dokumentieren alle Arbeiten für Ihre Qualitätssicherung.',
    image: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80&w=800&auto=format&fit=crop',
    icon: 'Cog',
    benefits: [
      'Nach Herstellervorgaben',
      'Dokumentation inklusive',
      'Verlängerte Maschinenlebensdauer',
      'Spezielle Reinigungsmittel',
    ],
    keywords: ['Maschinenreinigung', 'Produktionsmaschinen reinigen', 'Anlagenreinigung', 'technische Reinigung'],
    metaTitle: 'Maschinenreinigung Bayern | Fachgerechte Anlagenreinigung',
    metaDescription: 'Professionelle Maschinenreinigung in Bayern. Fachgerecht nach Herstellervorgaben. ✓ Dokumentation ✓ Längere Lebensdauer ✓ Alle Maschinentypen',
  },
  {
    id: '9',
    slug: 'tiefgaragenreinigung',
    name: 'Tiefgaragenreinigung',
    shortName: 'Tiefgaragenreinigung',
    category: 'industrie',
    description: 'Professionelle Reinigung von Tiefgaragen und Parkhäusern.',
    longDescription: 'Tiefgaragen und Parkhäuser sind besonderen Belastungen ausgesetzt: Reifenabrieb, Öl, Streusalz und Abgase hinterlassen hartnäckige Verschmutzungen. Unsere Tiefgaragenreinigung sorgt für Sauberkeit, Sicherheit und ein gepflegtes Erscheinungsbild. Wir reinigen Böden, Wände, Stützen und entfernen auch hartnäckige Ölflecken.',
    image: 'https://images.unsplash.com/photo-1506521781263-d8422e82f27a?q=80&w=800&auto=format&fit=crop',
    icon: 'Car',
    benefits: [
      'Ölfleckenentfernung',
      'Streusalzbeseitigung',
      'Wände & Stützen inklusive',
      'Nassreinigung mit Absaugung',
    ],
    keywords: ['Tiefgaragenreinigung', 'Parkhaus reinigen', 'Garagenreinigung', 'Parkdeck Reinigung'],
    metaTitle: 'Tiefgaragenreinigung Bayern | Parkhäuser & Tiefgaragen',
    metaDescription: 'Professionelle Tiefgaragenreinigung in Bayern. Ölflecken, Streusalz, Reifenabrieb. ✓ Nassreinigung ✓ Wände & Böden ✓ Regelmäßig oder einmalig',
  },
  {
    id: '10',
    slug: 'parkplatzreinigung',
    name: 'Parkplatzreinigung',
    shortName: 'Parkplatzreinigung',
    category: 'industrie',
    description: 'Saubere Parkflächen für einen positiven ersten Eindruck.',
    longDescription: 'Der Parkplatz ist oft der erste Kontaktpunkt mit Ihrem Unternehmen. Ein gepflegter Parkplatz vermittelt Professionalität und Wertschätzung. Unsere Parkplatzreinigung umfasst Kehren, Laubentfernung, Unkrautbeseitigung und die Reinigung von Markierungen. Auch größte Flächen reinigen wir effizient mit Kehrmaschinen.',
    image: 'https://images.unsplash.com/photo-1590674899484-d5640e854abe?q=80&w=800&auto=format&fit=crop',
    icon: 'ParkingCircle',
    benefits: [
      'Maschinelle Reinigung',
      'Laubentfernung',
      'Unkrautbeseitigung',
      'Markierungen erhalten',
    ],
    keywords: ['Parkplatzreinigung', 'Parkfläche reinigen', 'Außenflächenreinigung', 'Betriebshof Reinigung'],
    metaTitle: 'Parkplatzreinigung Bayern | Gepflegte Außenflächen',
    metaDescription: 'Professionelle Parkplatzreinigung in Bayern. Kehren, Laub, Unkraut. ✓ Maschinelle Reinigung ✓ Große Flächen ✓ Regelmäßiger Service',
  },

  // ============ FACILITY MANAGEMENT ============
  {
    id: '11',
    slug: 'facility-management',
    name: 'Facility Management',
    shortName: 'Facility Management',
    category: 'facility',
    description: 'Ganzheitliche Gebäudebetreuung aus einer Hand - von Reinigung bis Instandhaltung.',
    longDescription: 'Facility Management bedeutet mehr als nur Reinigung. Als Ihr Partner übernehmen wir die komplette Betreuung Ihrer Immobilie: Reinigung, Hausmeisterservice, Grünpflege, Winterdienst und kleinere Instandhaltungen. Ein Ansprechpartner, alle Leistungen - das spart Zeit, Koordinationsaufwand und Kosten.',
    image: 'https://images.unsplash.com/photo-1497366754035-f200968a6e72?q=80&w=800&auto=format&fit=crop',
    icon: 'Settings',
    benefits: [
      'Alles aus einer Hand',
      'Ein Ansprechpartner',
      'Koordination aller Gewerke',
      'Kostenersparnis durch Bündelung',
    ],
    keywords: ['Facility Management', 'Gebäudemanagement', 'Objektbetreuung', 'Full-Service Gebäude'],
    metaTitle: 'Facility Management Bayern | Komplette Gebäudebetreuung',
    metaDescription: 'Professionelles Facility Management in Bayern. Reinigung, Hausmeister, Grünpflege. ✓ Alles aus einer Hand ✓ Ein Ansprechpartner ✓ Kosteneffizient',
  },
  {
    id: '12',
    slug: 'hausmeisterservice',
    name: 'Hausmeisterservice',
    shortName: 'Hausmeisterservice',
    category: 'facility',
    description: 'Zuverlässiger Hausmeisterservice für Ihre Immobilie.',
    longDescription: 'Ein guter Hausmeister ist Gold wert. Unser Hausmeisterservice übernimmt alle anfallenden Arbeiten rund um Ihre Immobilie: Kleinreparaturen, Kontrollgänge, Müllmanagement, Grünpflege und Winterdienst. Regelmäßig oder auf Abruf - wir sind für Sie da, wenn Sie uns brauchen.',
    image: 'https://images.unsplash.com/photo-1581578731548-c64695cc6952?q=80&w=800&auto=format&fit=crop',
    icon: 'Wrench',
    benefits: [
      'Kleinreparaturen',
      'Regelmäßige Kontrollgänge',
      'Müllmanagement',
      'Flexible Einsatzzeiten',
    ],
    keywords: ['Hausmeisterservice', 'Hausmeister', 'Objektbetreuung', 'Gebäudebetreuung'],
    metaTitle: 'Hausmeisterservice Bayern | Zuverlässige Objektbetreuung',
    metaDescription: 'Professioneller Hausmeisterservice in Bayern. Reparaturen, Kontrollen, Pflege. ✓ Zuverlässig ✓ Flexibel ✓ Erfahren',
  },
  {
    id: '13',
    slug: 'winterdienst',
    name: 'Winterdienst',
    shortName: 'Winterdienst',
    category: 'facility',
    description: 'Professioneller Winterdienst - für sichere Wege auch bei Schnee und Eis.',
    longDescription: 'Schnee und Eis bedeuten Rutschgefahr und Haftungsrisiken. Unser professioneller Winterdienst sorgt für geräumte und gestreute Wege, Zufahrten und Parkplätze. Wir sind ab den frühen Morgenstunden im Einsatz und dokumentieren alle Maßnahmen für Ihre rechtliche Absicherung.',
    image: 'https://images.unsplash.com/photo-1491002052546-bf38f186af56?q=80&w=800&auto=format&fit=crop',
    icon: 'Snowflake',
    benefits: [
      'Räumdienst ab 4:00 Uhr',
      'Streuen mit Umweltgranulat',
      'Dokumentation für Versicherung',
      '24/7 Bereitschaft',
    ],
    keywords: ['Winterdienst', 'Schneeräumung', 'Streudienst', 'Räumpflicht'],
    metaTitle: 'Winterdienst Bayern | Schneeräumung & Streudienst',
    metaDescription: 'Professioneller Winterdienst in Bayern. Räumen, Streuen, Dokumentieren. ✓ Ab 4:00 Uhr ✓ 24/7 Bereitschaft ✓ Rechtssicher',
  },
  {
    id: '14',
    slug: 'aussenanlagenpflege',
    name: 'Außenanlagenpflege',
    shortName: 'Außenanlagenpflege',
    category: 'facility',
    description: 'Gepflegte Außenanlagen für ein repräsentatives Erscheinungsbild.',
    longDescription: 'Der Außenbereich prägt den ersten Eindruck von Ihrem Unternehmen. Unsere Außenanlagenpflege umfasst Rasenpflege, Heckenschnitt, Beetpflege, Laubentfernung und die Reinigung von Wegen und Plätzen. Ganzjährig oder saisonal - wir halten Ihre Außenanlagen in Bestform.',
    image: 'https://images.unsplash.com/photo-1558904541-efa843a96f01?q=80&w=800&auto=format&fit=crop',
    icon: 'Trees',
    benefits: [
      'Rasenpflege & Mähen',
      'Heckenschnitt',
      'Beetpflege',
      'Laubentfernung',
    ],
    keywords: ['Außenanlagenpflege', 'Grünpflege', 'Gartenpflege Gewerbe', 'Rasenpflege Firma'],
    metaTitle: 'Außenanlagenpflege Bayern | Grünpflege für Unternehmen',
    metaDescription: 'Professionelle Außenanlagenpflege in Bayern. Rasen, Hecken, Beete. ✓ Ganzjährig ✓ Erfahrene Gärtner ✓ Repräsentativer Eindruck',
  },

  // ============ SPEZIALREINIGUNG ============
  {
    id: '15',
    slug: 'baureinigung',
    name: 'Baureinigung',
    shortName: 'Baureinigung',
    category: 'spezial',
    description: 'Professionelle Bauendreinigung für bezugsfertige Immobilien.',
    longDescription: 'Nach Bauarbeiten oder Renovierungen hinterlassen Handwerker oft Staub, Schmutz und Rückstände. Unsere Baureinigung macht Ihre Immobilie bezugsfertig: Grobvorreinigung, Feinreinigung und Endabnahme-Reinigung. Wir entfernen Baustaub, reinigen alle Oberflächen und sorgen für einen perfekten Übergabezustand.',
    image: 'https://images.unsplash.com/photo-1504307651254-35680f356dfd?q=80&w=800&auto=format&fit=crop',
    icon: 'HardHat',
    benefits: [
      'Grob- und Feinreinigung',
      'Baustaubentfernung',
      'Fenster & Rahmen',
      'Übergabefertig',
    ],
    keywords: ['Baureinigung', 'Bauendreinigung', 'Bauschlussreinigung', 'Neubaureinigung'],
    metaTitle: 'Baureinigung Bayern | Bauendreinigung & Feinreinigung',
    metaDescription: 'Professionelle Baureinigung in Bayern. Grob- & Feinreinigung für Neubau & Renovierung. ✓ Bezugsfertig ✓ Alle Oberflächen ✓ Termingerecht',
  },
  {
    id: '16',
    slug: 'sonderreinigung',
    name: 'Sonderreinigung',
    shortName: 'Sonderreinigung',
    category: 'spezial',
    description: 'Spezielle Reinigungsleistungen für besondere Anforderungen.',
    longDescription: 'Manche Reinigungsaufgaben erfordern spezielles Know-how und Ausrüstung. Unsere Sonderreinigung umfasst Teppichreinigung, Polsterreinigung, Steinreinigung, Graffitientfernung und vieles mehr. Für jede Herausforderung finden wir die passende Lösung.',
    image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?q=80&w=800&auto=format&fit=crop',
    icon: 'Sparkles',
    benefits: [
      'Teppich- & Polsterreinigung',
      'Steinreinigung',
      'Graffitientfernung',
      'Spezialausrüstung',
    ],
    keywords: ['Sonderreinigung', 'Spezialreinigung', 'Teppichreinigung Gewerbe', 'Graffitientfernung'],
    metaTitle: 'Sonderreinigung Bayern | Spezialreinigung & mehr',
    metaDescription: 'Professionelle Sonderreinigung in Bayern. Teppiche, Polster, Stein, Graffiti. ✓ Spezialausrüstung ✓ Erfahrene Fachkräfte ✓ Individuelle Lösungen',
  },
  {
    id: '17',
    slug: 'sonderleistungen',
    name: 'Sonderleistungen',
    shortName: 'Sonderleistungen',
    category: 'spezial',
    description: 'Individuelle Reinigungslösungen nach Ihren Wünschen.',
    longDescription: 'Sie haben besondere Anforderungen? Wir entwickeln individuelle Reinigungskonzepte passend zu Ihren Bedürfnissen. Von der Eventeinigung über Umzugsreinigungen bis hin zu speziellen Hygieneanforderungen - sprechen Sie uns an, gemeinsam finden wir eine Lösung.',
    image: 'https://images.unsplash.com/photo-1600880292203-757bb62b4baf?q=80&w=800&auto=format&fit=crop',
    icon: 'ListChecks',
    benefits: [
      'Individuelle Konzepte',
      'Eventreinigung',
      'Umzugsreinigung',
      'Flexible Terminierung',
    ],
    keywords: ['Sonderleistungen', 'Eventreinigung', 'Umzugsreinigung', 'individuelle Reinigung'],
    metaTitle: 'Sonderleistungen Bayern | Individuelle Reinigungslösungen',
    metaDescription: 'Individuelle Reinigungslösungen in Bayern. Events, Umzüge, Spezialanforderungen. ✓ Maßgeschneidert ✓ Flexibel ✓ Persönliche Beratung',
  },
  {
    id: '18',
    slug: 'beschaffungsmanagement',
    name: 'Beschaffungsmanagement',
    shortName: 'Beschaffung',
    category: 'spezial',
    description: 'Professionelles Beschaffungsmanagement für Hygieneartikel und Reinigungsbedarf.',
    longDescription: 'Konzentrieren Sie sich auf Ihr Kerngeschäft - wir kümmern uns um die Beschaffung. Unser Beschaffungsmanagement umfasst Hygieneartikel, Reinigungsmittel, Papierwaren und Verbrauchsmaterialien. Sie profitieren von unseren Einkaufskonditionen und sparen Zeit bei Bestellung und Lagerhaltung.',
    image: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?q=80&w=800&auto=format&fit=crop',
    icon: 'Package',
    benefits: [
      'Günstige Einkaufskonditionen',
      'Automatische Nachbestellung',
      'Keine Lagerhaltung nötig',
      'Qualitätsprodukte',
    ],
    keywords: ['Beschaffungsmanagement', 'Hygieneartikel', 'Reinigungsmittel Beschaffung', 'Facility Services'],
    metaTitle: 'Beschaffungsmanagement Bayern | Hygiene & Reinigungsbedarf',
    metaDescription: 'Professionelles Beschaffungsmanagement in Bayern. Hygieneartikel, Reinigungsmittel. ✓ Günstige Konditionen ✓ Automatisch ✓ Qualitätsprodukte',
  },
]

// Helper Functions
export function getLeistungBySlug(slug: string): Leistung | undefined {
  return leistungen.find(l => l.slug === slug)
}

export function getLeistungenByCategory(category: Leistung['category']): Leistung[] {
  return leistungen.filter(l => l.category === category)
}

export function getAllCategories() {
  return Object.values(categories)
}

export function getCategoryById(id: string) {
  return categories[id as keyof typeof categories]
}
