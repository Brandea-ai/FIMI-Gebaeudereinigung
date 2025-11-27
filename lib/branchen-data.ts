// Branchen Data - Alle 12 Branchen
// SEO-optimiert aus Kundenperspektive

export interface Branche {
  id: string
  slug: string
  name: string
  shortName: string
  description: string
  longDescription: string
  image: string
  icon: string
  challenges: string[]
  services: string[]
  keywords: string[]
  metaTitle: string
  metaDescription: string
}

export const branchen: Branche[] = [
  {
    id: '1',
    slug: 'buero-verwaltung',
    name: 'Büro & Verwaltung',
    shortName: 'Büro',
    description: 'Professionelle Reinigung für Bürogebäude, Verwaltungen und Geschäftsräume.',
    longDescription: 'Saubere Büros steigern die Produktivität und das Wohlbefinden Ihrer Mitarbeiter. Wir bieten maßgeschneiderte Reinigungskonzepte für Bürogebäude jeder Größe - von der täglichen Unterhaltsreinigung bis zur regelmäßigen Glasreinigung.',
    image: 'https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=800&auto=format&fit=crop',
    icon: 'Building2',
    challenges: ['Hohe Besucherfrequenz', 'Sensible Bereiche', 'Flexible Arbeitszeiten'],
    services: ['Unterhaltsreinigung', 'Büroreinigung', 'Glasreinigung', 'Sanitärreinigung'],
    keywords: ['Büroreinigung', 'Verwaltungsgebäude Reinigung', 'Office Cleaning'],
    metaTitle: 'Büroreinigung Bayern | Professionelle Gebäudereinigung für Büros',
    metaDescription: 'Professionelle Büroreinigung in Bayern. Saubere Arbeitsplätze für produktive Mitarbeiter. ✓ Flexible Zeiten ✓ Festes Team ✓ Kostenfreie Besichtigung',
  },
  {
    id: '2',
    slug: 'industrie-produktion',
    name: 'Industrie & Produktion',
    shortName: 'Industrie',
    description: 'Spezialisierte Reinigung für Produktionshallen, Fertigungsbetriebe und Industrieanlagen.',
    longDescription: 'Industriebetriebe stellen besondere Anforderungen an die Reinigung. Wir kennen die Vorschriften und arbeiten nach höchsten Sicherheitsstandards - von der Hallenreinigung bis zur Maschinenreinigung.',
    image: 'https://images.unsplash.com/photo-1565688534245-05d6b5be184a?q=80&w=800&auto=format&fit=crop',
    icon: 'Factory',
    challenges: ['Strenge Hygienevorschriften', 'Minimale Produktionsunterbrechung', 'Spezielle Verschmutzungen'],
    services: ['Industriereinigung', 'Hallenreinigung', 'Maschinenreinigung', 'Bodenreinigung'],
    keywords: ['Industriereinigung', 'Produktionsreinigung', 'Hallenreinigung'],
    metaTitle: 'Industriereinigung Bayern | Reinigung für Produktion & Fertigung',
    metaDescription: 'Professionelle Industriereinigung in Bayern. Hallen, Maschinen, Produktionsflächen. ✓ Vorschriftskonform ✓ Minimale Ausfallzeiten ✓ Spezialausrüstung',
  },
  {
    id: '3',
    slug: 'gesundheitswesen',
    name: 'Gesundheitswesen',
    shortName: 'Gesundheit',
    description: 'Hygienische Reinigung für Arztpraxen, Kliniken und Pflegeeinrichtungen.',
    longDescription: 'Im Gesundheitswesen gelten höchste Hygieneanforderungen. Unsere geschulten Teams arbeiten nach den Richtlinien des RKI und sorgen für hygienisch einwandfreie Räumlichkeiten.',
    image: 'https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?q=80&w=800&auto=format&fit=crop',
    icon: 'Stethoscope',
    challenges: ['RKI-Richtlinien', 'Höchste Hygieneanforderungen', 'Sensible Patientenbereiche'],
    services: ['Praxisreinigung', 'Desinfektion', 'Sanitärreinigung', 'Sonderreinigung'],
    keywords: ['Praxisreinigung', 'Klinik Reinigung', 'Hygiene Gesundheitswesen'],
    metaTitle: 'Praxisreinigung Bayern | Hygienische Reinigung Gesundheitswesen',
    metaDescription: 'Professionelle Reinigung für Arztpraxen & Kliniken in Bayern. RKI-konform, höchste Hygiene. ✓ Geschultes Personal ✓ Desinfektion ✓ Zertifiziert',
  },
  {
    id: '4',
    slug: 'einzelhandel',
    name: 'Einzelhandel',
    shortName: 'Handel',
    description: 'Saubere Verkaufsflächen für zufriedene Kunden und mehr Umsatz.',
    longDescription: 'Im Einzelhandel ist Sauberkeit ein wichtiger Faktor für das Einkaufserlebnis. Wir reinigen Verkaufsflächen, Schaufenster und Lager - auch während der Öffnungszeiten diskret und unauffällig.',
    image: 'https://images.unsplash.com/photo-1441986300917-64674bd600d8?q=80&w=800&auto=format&fit=crop',
    icon: 'ShoppingBag',
    challenges: ['Reinigung während Öffnungszeiten', 'Hohe Kundenfrequenz', 'Schaufenster & Eingangsbereiche'],
    services: ['Unterhaltsreinigung', 'Glasreinigung', 'Bodenreinigung', 'Sanitärreinigung'],
    keywords: ['Einzelhandel Reinigung', 'Ladenreinigung', 'Verkaufsflächen Reinigung'],
    metaTitle: 'Einzelhandel Reinigung Bayern | Saubere Verkaufsflächen',
    metaDescription: 'Professionelle Reinigung für Einzelhandel in Bayern. Verkaufsflächen, Schaufenster, Lager. ✓ Diskret ✓ Während Öffnungszeiten ✓ Mehr Umsatz',
  },
  {
    id: '5',
    slug: 'gastronomie-hotel',
    name: 'Gastronomie & Hotellerie',
    shortName: 'Gastro',
    description: 'Hygienische Reinigung für Restaurants, Hotels und gastronomische Betriebe.',
    longDescription: 'In der Gastronomie und Hotellerie ist Sauberkeit ein Qualitätsmerkmal. Wir reinigen Gaststätten, Hotelzimmer und Küchenbereiche nach HACCP-Standards.',
    image: 'https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?q=80&w=800&auto=format&fit=crop',
    icon: 'UtensilsCrossed',
    challenges: ['HACCP-Standards', 'Schnelle Zimmerreinigung', 'Küchenhygiene'],
    services: ['Hotelreinigung', 'Küchenreinigung', 'Gastraumreinigung', 'Glasreinigung'],
    keywords: ['Hotelreinigung', 'Restaurant Reinigung', 'Gastronomie Hygiene'],
    metaTitle: 'Hotel & Restaurant Reinigung Bayern | Gastronomie Hygiene',
    metaDescription: 'Professionelle Reinigung für Hotels & Restaurants in Bayern. HACCP-konform, Zimmerreinigung, Küchen. ✓ Schnell ✓ Hygienisch ✓ Erfahren',
  },
  {
    id: '6',
    slug: 'bildung-schulen',
    name: 'Bildung & Schulen',
    shortName: 'Bildung',
    description: 'Saubere Lernumgebungen für Schulen, Kindergärten und Bildungseinrichtungen.',
    longDescription: 'In Bildungseinrichtungen treffen viele Menschen aufeinander. Wir sorgen für hygienisch saubere Klassenzimmer, Turnhallen und Sanitäranlagen - kindgerecht und sicher.',
    image: 'https://images.unsplash.com/photo-1580582932707-520aed937b7b?q=80&w=800&auto=format&fit=crop',
    icon: 'GraduationCap',
    challenges: ['Kindgerechte Reinigungsmittel', 'Ferienreinigung', 'Hohe Hygieneanforderungen'],
    services: ['Unterhaltsreinigung', 'Sanitärreinigung', 'Turnhallenreinigung', 'Grundreinigung'],
    keywords: ['Schulreinigung', 'Kindergarten Reinigung', 'Bildungseinrichtung Reinigung'],
    metaTitle: 'Schulreinigung Bayern | Reinigung für Bildungseinrichtungen',
    metaDescription: 'Professionelle Schulreinigung in Bayern. Klassenzimmer, Turnhallen, Sanitär. ✓ Kindgerecht ✓ Hygienisch ✓ Ferienreinigung',
  },
  {
    id: '7',
    slug: 'fitness-sport',
    name: 'Fitness & Sport',
    shortName: 'Fitness',
    description: 'Hygienische Reinigung für Fitnessstudios, Sportanlagen und Wellnessbereiche.',
    longDescription: 'In Sportstätten ist Hygiene besonders wichtig. Wir reinigen Trainingsgeräte, Umkleiden, Duschen und Wellnessbereiche nach höchsten Hygienestandards.',
    image: 'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?q=80&w=800&auto=format&fit=crop',
    icon: 'Dumbbell',
    challenges: ['Gerätedesinfektion', 'Dusch- & Umkleidebereiche', 'Wellnesshygiene'],
    services: ['Unterhaltsreinigung', 'Desinfektion', 'Sanitärreinigung', 'Saunareinigung'],
    keywords: ['Fitnessstudio Reinigung', 'Sportstätten Reinigung', 'Wellnessreinigung'],
    metaTitle: 'Fitnessstudio Reinigung Bayern | Hygiene für Sportanlagen',
    metaDescription: 'Professionelle Reinigung für Fitnessstudios in Bayern. Geräte, Umkleiden, Wellness. ✓ Desinfektion ✓ Hygienisch ✓ Regelmäßig',
  },
  {
    id: '8',
    slug: 'logistik-lager',
    name: 'Logistik & Lager',
    shortName: 'Logistik',
    description: 'Effiziente Reinigung für Lagerhallen, Logistikzentren und Distributionsflächen.',
    longDescription: 'In der Logistik zählt Effizienz. Wir reinigen große Lagerflächen schnell und gründlich mit leistungsstarken Maschinen - ohne Ihren Betrieb zu stören.',
    image: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?q=80&w=800&auto=format&fit=crop',
    icon: 'Warehouse',
    challenges: ['Große Flächen', 'Minimale Störung des Betriebs', 'Staubentwicklung'],
    services: ['Hallenreinigung', 'Bodenreinigung', 'Hochregalreinigung', 'Außenreinigung'],
    keywords: ['Lagerreinigung', 'Logistikzentrum Reinigung', 'Hallenreinigung'],
    metaTitle: 'Lager & Logistik Reinigung Bayern | Hallenreinigung',
    metaDescription: 'Professionelle Reinigung für Lagerhallen in Bayern. Große Flächen, effizient, maschinell. ✓ Schnell ✓ Gründlich ✓ Minimale Störung',
  },
  {
    id: '9',
    slug: 'wohnungswirtschaft',
    name: 'Wohnungswirtschaft',
    shortName: 'Wohnen',
    description: 'Zuverlässige Reinigung für Wohnanlagen, Treppenhäuser und Außenbereiche.',
    longDescription: 'Für Hausverwaltungen und Wohnungsbaugesellschaften bieten wir zuverlässige Treppenhausreinigung, Außenanlagenpflege und Winterdienst aus einer Hand.',
    image: 'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?q=80&w=800&auto=format&fit=crop',
    icon: 'Home',
    challenges: ['Viele Parteien', 'Regelmäßige Intervalle', 'Außenbereiche'],
    services: ['Treppenhausreinigung', 'Außenanlagenpflege', 'Winterdienst', 'Hausmeisterservice'],
    keywords: ['Treppenhausreinigung', 'Hausverwaltung Reinigung', 'Wohnanlage Reinigung'],
    metaTitle: 'Treppenhausreinigung Bayern | Reinigung für Wohnanlagen',
    metaDescription: 'Professionelle Treppenhausreinigung in Bayern. Wohnanlagen, Außenbereiche, Winterdienst. ✓ Zuverlässig ✓ Regelmäßig ✓ Hausverwaltungen',
  },
  {
    id: '10',
    slug: 'oeffentliche-einrichtungen',
    name: 'Öffentliche Einrichtungen',
    shortName: 'Öffentlich',
    description: 'Professionelle Reinigung für Behörden, Rathäuser und öffentliche Gebäude.',
    longDescription: 'Öffentliche Einrichtungen haben hohe Anforderungen an Sauberkeit und Hygiene. Wir reinigen Amtsgebäude, Rathäuser und kulturelle Einrichtungen zuverlässig.',
    image: 'https://images.unsplash.com/photo-1555431189-0fabf2667795?q=80&w=800&auto=format&fit=crop',
    icon: 'Landmark',
    challenges: ['Repräsentative Räume', 'Hoher Publikumsverkehr', 'Sicherheitsbereiche'],
    services: ['Unterhaltsreinigung', 'Glasreinigung', 'Sanitärreinigung', 'Grundreinigung'],
    keywords: ['Behördenreinigung', 'Rathaus Reinigung', 'Öffentliche Gebäude Reinigung'],
    metaTitle: 'Behördenreinigung Bayern | Öffentliche Einrichtungen',
    metaDescription: 'Professionelle Reinigung für Behörden in Bayern. Rathäuser, Ämter, öffentliche Gebäude. ✓ Repräsentativ ✓ Zuverlässig ✓ Erfahren',
  },
  {
    id: '11',
    slug: 'banken-versicherungen',
    name: 'Banken & Versicherungen',
    shortName: 'Finanzen',
    description: 'Diskrete und zuverlässige Reinigung für Banken und Versicherungen.',
    longDescription: 'Banken und Versicherungen verlangen höchste Diskretion und Zuverlässigkeit. Unsere geprüften Mitarbeiter reinigen Schalterräume, Büros und Sicherheitsbereiche.',
    image: 'https://images.unsplash.com/photo-1541354329998-f4d9a9f9297f?q=80&w=800&auto=format&fit=crop',
    icon: 'Banknote',
    challenges: ['Höchste Diskretion', 'Sicherheitsbereiche', 'Repräsentative Kundenbereiche'],
    services: ['Unterhaltsreinigung', 'Glasreinigung', 'Teppichreinigung', 'Sonderreinigung'],
    keywords: ['Bankreinigung', 'Versicherung Reinigung', 'Finanzdienstleister Reinigung'],
    metaTitle: 'Bankreinigung Bayern | Reinigung für Finanzdienstleister',
    metaDescription: 'Professionelle Reinigung für Banken in Bayern. Diskret, zuverlässig, geprüftes Personal. ✓ Sicherheitsbereiche ✓ Kundenräume ✓ Vertrauenswürdig',
  },
  {
    id: '12',
    slug: 'automotive',
    name: 'Automotive',
    shortName: 'Auto',
    description: 'Spezialisierte Reinigung für Autohäuser, Werkstätten und Showrooms.',
    longDescription: 'Im Automotive-Bereich ist der erste Eindruck entscheidend. Wir reinigen Showrooms, Werkstätten und Außenflächen für Autohäuser und Kfz-Betriebe.',
    image: 'https://images.unsplash.com/photo-1503376780353-7e6692767b70?q=80&w=800&auto=format&fit=crop',
    icon: 'Car',
    challenges: ['Showroom-Präsentation', 'Werkstatt-Verschmutzungen', 'Große Außenflächen'],
    services: ['Showroom-Reinigung', 'Werkstattreinigung', 'Glasreinigung', 'Außenreinigung'],
    keywords: ['Autohaus Reinigung', 'Werkstatt Reinigung', 'Showroom Reinigung'],
    metaTitle: 'Autohaus Reinigung Bayern | Showroom & Werkstatt',
    metaDescription: 'Professionelle Reinigung für Autohäuser in Bayern. Showroom, Werkstatt, Außenflächen. ✓ Präsentabel ✓ Gründlich ✓ Regelmäßig',
  },
]

// Helper Functions
export function getBrancheBySlug(slug: string): Branche | undefined {
  return branchen.find(b => b.slug === slug)
}

export function getAllBranchen(): Branche[] {
  return branchen
}
