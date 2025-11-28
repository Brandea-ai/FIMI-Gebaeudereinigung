// Referenzen Data - Modular & erweiterbar
// Projekte können einfach hinzugefügt/entfernt werden

export interface Referenz {
  id: string
  projektName: string
  firma: string
  jahr: number
  leistungen: string[] // Slugs aus leistungen-data
  branche: string // Slug aus branchen-data
  kurzbeschreibung: string
  beschreibung: string
  bilder: string[] // Unsplash Platzhalter - später durch echte Bilder ersetzen
  standort: string
  flaeche?: string // Optional: Quadratmeter
}

export const referenzen: Referenz[] = [
  // ==================== BÜRO & VERWALTUNG ====================
  {
    id: 'ref-001',
    projektName: 'Hauptverwaltung Landshut',
    firma: 'Stadtwerke Landshut',
    jahr: 2025,
    leistungen: ['unterhaltsreinigung', 'glasreinigung', 'bueroreinigung'],
    branche: 'buero-verwaltung',
    kurzbeschreibung: 'Komplette Gebäudereinigung der Hauptverwaltung',
    beschreibung: 'Seit 2024 betreuen wir die Hauptverwaltung der Stadtwerke Landshut mit täglicher Unterhaltsreinigung, wöchentlicher Glasreinigung und monatlicher Grundreinigung. Das Gebäude umfasst 5 Etagen mit Büros, Konferenzräumen und Kundenbereich.',
    bilder: [
      'https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=800&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1497366811353-6870744d04b2?q=80&w=800&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1524758631624-e2822e304c36?q=80&w=800&auto=format&fit=crop',
    ],
    standort: 'Landshut',
    flaeche: '4.500 m²',
  },
  {
    id: 'ref-002',
    projektName: 'IT-Campus München',
    firma: 'TechVision GmbH',
    jahr: 2025,
    leistungen: ['bueroreinigung', 'unterhaltsreinigung'],
    branche: 'buero-verwaltung',
    kurzbeschreibung: 'Open-Space Büroreinigung im Tech-Umfeld',
    beschreibung: 'Moderne Open-Space Büroflächen mit besonderen Anforderungen an Flexibilität. Reinigung erfolgt in den Abendstunden, um den Betrieb nicht zu stören.',
    bilder: [
      'https://images.unsplash.com/photo-1497215842964-222b430dc094?q=80&w=800&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1504384308090-c894fdcc538d?q=80&w=800&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1519389950473-47ba0277781c?q=80&w=800&auto=format&fit=crop',
    ],
    standort: 'München',
    flaeche: '3.200 m²',
  },
  {
    id: 'ref-003',
    projektName: 'Rechtsanwaltskanzlei',
    firma: 'Dr. Huber & Partner',
    jahr: 2025,
    leistungen: ['bueroreinigung', 'glasreinigung'],
    branche: 'buero-verwaltung',
    kurzbeschreibung: 'Diskrete Kanzleireinigung mit Sicherheitsanforderungen',
    beschreibung: 'Hochwertige Kanzleiräume erfordern besondere Sorgfalt und Diskretion. Unsere Mitarbeiter sind sicherheitsüberprüft und arbeiten nach strengen Vertraulichkeitsrichtlinien.',
    bilder: [
      'https://images.unsplash.com/photo-1556761175-4b46a572b786?q=80&w=800&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1497366412874-3415097a27e7?q=80&w=800&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1568992687947-868a62a9f521?q=80&w=800&auto=format&fit=crop',
    ],
    standort: 'Landshut',
    flaeche: '850 m²',
  },
  {
    id: 'ref-004',
    projektName: 'Steuerberatung Komplex',
    firma: 'Müller & Kollegen Steuerberatung',
    jahr: 2025,
    leistungen: ['unterhaltsreinigung', 'fensterreinigung'],
    branche: 'buero-verwaltung',
    kurzbeschreibung: 'Bürokomplex mit mehreren Mietern',
    beschreibung: 'Mehrstöckiges Bürogebäude mit verschiedenen Steuerberatungsgesellschaften. Koordinierte Reinigung aller Gemeinschaftsflächen und Einzelbüros.',
    bilder: [
      'https://images.unsplash.com/photo-1554469384-e58fac16e23a?q=80&w=800&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1497366754035-f200968a6e72?q=80&w=800&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1560179707-f14e90ef3623?q=80&w=800&auto=format&fit=crop',
    ],
    standort: 'Straubing',
    flaeche: '2.100 m²',
  },

  // ==================== INDUSTRIE & PRODUKTION ====================
  {
    id: 'ref-005',
    projektName: 'Produktionshallen West',
    firma: 'BMW Werk Dingolfing',
    jahr: 2025,
    leistungen: ['industriereinigung', 'hallenreinigung', 'maschinenreinigung'],
    branche: 'industrie-produktion',
    kurzbeschreibung: 'Industriereinigung im Automobilwerk',
    beschreibung: 'Regelmäßige Reinigung der Produktionshallen und Fertigungslinien. Einsatz von Spezialgeräten für die maschinelle Bodenreinigung und Maschinenreinigung nach Produktionsschluss.',
    bilder: [
      'https://images.unsplash.com/photo-1565688534245-05d6b5be184a?q=80&w=800&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80&w=800&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?q=80&w=800&auto=format&fit=crop',
    ],
    standort: 'Dingolfing',
    flaeche: '25.000 m²',
  },
  {
    id: 'ref-006',
    projektName: 'Metallverarbeitung',
    firma: 'Präzisionstechnik Berger GmbH',
    jahr: 2024,
    leistungen: ['industriereinigung', 'maschinenreinigung'],
    branche: 'industrie-produktion',
    kurzbeschreibung: 'CNC-Reinigung und Hallenreinigung',
    beschreibung: 'Spezialisierte Reinigung von CNC-Fräsen und Drehmaschinen. Entfernung von Spänen, Kühlmittelresten und Öl. Wöchentliche Komplettreinigung der Fertigungshalle.',
    bilder: [
      'https://images.unsplash.com/photo-1567789884554-0b844b597180?q=80&w=800&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1717386255773-1e3037c81788?q=80&w=800&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1533417479674-32d5f8e6b1bf?q=80&w=800&auto=format&fit=crop',
    ],
    standort: 'Ergolding',
    flaeche: '3.500 m²',
  },
  {
    id: 'ref-007',
    projektName: 'Lebensmittelproduktion',
    firma: 'Bäckerei Großmann',
    jahr: 2024,
    leistungen: ['industriereinigung', 'sonderreinigung'],
    branche: 'industrie-produktion',
    kurzbeschreibung: 'Hygienereinigung nach HACCP-Standards',
    beschreibung: 'Tägliche Hygienereinigung der Produktionsräume nach HACCP-Standards. Spezielle Desinfektionsverfahren für Lebensmittelbetriebe.',
    bilder: [
      'https://images.unsplash.com/photo-1556911220-bda9f7f7597e?q=80&w=800&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?q=80&w=800&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1581092160607-ee22621dd758?q=80&w=800&auto=format&fit=crop',
    ],
    standort: 'Landshut',
    flaeche: '1.800 m²',
  },
  {
    id: 'ref-008',
    projektName: 'Elektronikfertigung',
    firma: 'MicroTech Electronics',
    jahr: 2024,
    leistungen: ['industriereinigung', 'sonderreinigung'],
    branche: 'industrie-produktion',
    kurzbeschreibung: 'Reinraumreinigung und ESD-konforme Reinigung',
    beschreibung: 'Spezialisierte Reinigung von Reinräumen und ESD-Schutzzonen. Einsatz von antistatischen Reinigungsmitteln und geschultem Personal.',
    bilder: [
      'https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=800&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1573164713714-d95e436ab8d6?q=80&w=800&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1588508065123-287b28e013da?q=80&w=800&auto=format&fit=crop',
    ],
    standort: 'München',
    flaeche: '2.200 m²',
  },

  // ==================== GESUNDHEITSWESEN ====================
  {
    id: 'ref-009',
    projektName: 'MVZ Landshut Zentrum',
    firma: 'Medizinisches Versorgungszentrum Landshut',
    jahr: 2024,
    leistungen: ['unterhaltsreinigung', 'sonderreinigung'],
    branche: 'gesundheitswesen',
    kurzbeschreibung: 'RKI-konforme Praxisreinigung',
    beschreibung: 'Tägliche Hygienereinigung nach RKI-Richtlinien. Desinfektion aller Behandlungsräume, Wartebereiche und Sanitäranlagen. Geschultes Personal mit Gesundheitszeugnis.',
    bilder: [
      'https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?q=80&w=800&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1538108149393-fbbd81895907?q=80&w=800&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1579684385127-1ef15d508118?q=80&w=800&auto=format&fit=crop',
    ],
    standort: 'Landshut',
    flaeche: '1.200 m²',
  },
  {
    id: 'ref-010',
    projektName: 'Zahnarztpraxis Premium',
    firma: 'Dr. med. dent. Schmitt',
    jahr: 2024,
    leistungen: ['unterhaltsreinigung', 'sonderreinigung'],
    branche: 'gesundheitswesen',
    kurzbeschreibung: 'Hochwertige Praxisreinigung mit Desinfektion',
    beschreibung: 'Moderne Zahnarztpraxis mit hohen Hygieneanforderungen. Tägliche Desinfektion aller Behandlungsstühle und Oberflächen.',
    bilder: [
      'https://images.unsplash.com/photo-1629909613654-28e377c37b09?q=80&w=800&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1606811841689-23dfddce3e95?q=80&w=800&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?q=80&w=800&auto=format&fit=crop',
    ],
    standort: 'Landshut',
    flaeche: '450 m²',
  },
  {
    id: 'ref-011',
    projektName: 'Physiotherapie-Zentrum',
    firma: 'PhysioPlus Landshut',
    jahr: 2023,
    leistungen: ['unterhaltsreinigung', 'glasreinigung'],
    branche: 'gesundheitswesen',
    kurzbeschreibung: 'Reinigung von Therapieräumen und Geräten',
    beschreibung: 'Tägliche Reinigung und Desinfektion der Behandlungsliegen, Therapiegeräte und Trainingsräume. Besondere Sorgfalt bei Bodenflächen.',
    bilder: [
      'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?q=80&w=800&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1576091160550-2173dba999ef?q=80&w=800&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1598970434795-0c54fe7c0648?q=80&w=800&auto=format&fit=crop',
    ],
    standort: 'Landshut',
    flaeche: '680 m²',
  },
  {
    id: 'ref-012',
    projektName: 'Seniorenpflegeheim',
    firma: 'Caritas Seniorenheim St. Elisabeth',
    jahr: 2023,
    leistungen: ['unterhaltsreinigung', 'sonderreinigung', 'glasreinigung'],
    branche: 'gesundheitswesen',
    kurzbeschreibung: 'Vollständige Gebäudereinigung Pflegeeinrichtung',
    beschreibung: 'Umfassende Reinigung aller Bewohnerzimmer, Gemeinschaftsräume, Küche und Außenbereiche. Besondere Rücksichtnahme auf Bewohner.',
    bilder: [
      'https://images.unsplash.com/photo-1586105251261-72a756497a11?q=80&w=800&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1576765608535-5f04d1e3f289?q=80&w=800&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1559839734-2b71ea197ec2?q=80&w=800&auto=format&fit=crop',
    ],
    standort: 'Vilsbiburg',
    flaeche: '3.800 m²',
  },

  // ==================== EINZELHANDEL ====================
  {
    id: 'ref-013',
    projektName: 'Einkaufszentrum City',
    firma: 'Landshut Arkaden',
    jahr: 2023,
    leistungen: ['unterhaltsreinigung', 'glasreinigung', 'aussenanlagenpflege'],
    branche: 'einzelhandel',
    kurzbeschreibung: 'Vollreinigung Einkaufszentrum',
    beschreibung: 'Tägliche Reinigung aller Gemeinschaftsflächen, Rolltreppen, Aufzüge und Sanitäranlagen. Glasreinigung der Eingangsbereiche und Schaufenster.',
    bilder: [
      'https://images.unsplash.com/photo-1441986300917-64674bd600d8?q=80&w=800&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1567449303078-57ad995bd329?q=80&w=800&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1555529669-e69e7aa0ba9a?q=80&w=800&auto=format&fit=crop',
    ],
    standort: 'Landshut',
    flaeche: '12.000 m²',
  },
  {
    id: 'ref-014',
    projektName: 'Möbelhaus Premium',
    firma: 'Möbel Mahler',
    jahr: 2023,
    leistungen: ['unterhaltsreinigung', 'glasreinigung'],
    branche: 'einzelhandel',
    kurzbeschreibung: 'Verkaufsflächen und Ausstellungsräume',
    beschreibung: 'Nächtliche Reinigung der großflächigen Verkaufsräume. Besondere Vorsicht bei hochwertigen Ausstellungsstücken.',
    bilder: [
      'https://images.unsplash.com/photo-1555041469-a586c61ea9bc?q=80&w=800&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1524758631624-e2822e304c36?q=80&w=800&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1493663284031-b7e3aefcae8e?q=80&w=800&auto=format&fit=crop',
    ],
    standort: 'Landshut',
    flaeche: '8.500 m²',
  },
  {
    id: 'ref-015',
    projektName: 'Supermarkt-Kette',
    firma: 'EDEKA Müller',
    jahr: 2023,
    leistungen: ['unterhaltsreinigung', 'glasreinigung'],
    branche: 'einzelhandel',
    kurzbeschreibung: '3 Filialen im Großraum Landshut',
    beschreibung: 'Tägliche Reinigung von drei Supermarkt-Filialen. Fokus auf Hygiene im Lebensmittelbereich und saubere Eingangsbereiche.',
    bilder: [
      'https://images.unsplash.com/photo-1604719312566-8912e9227c6a?q=80&w=800&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1542838132-92c53300491e?q=80&w=800&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1578916171728-46686eac8d58?q=80&w=800&auto=format&fit=crop',
    ],
    standort: 'Landshut / Ergolding / Vilsbiburg',
    flaeche: '4.200 m²',
  },

  // ==================== GASTRONOMIE & HOTEL ====================
  {
    id: 'ref-016',
    projektName: 'Hotel Residence',
    firma: 'Hotel Goldene Sonne',
    jahr: 2022,
    leistungen: ['unterhaltsreinigung', 'glasreinigung', 'sonderreinigung'],
    branche: 'gastronomie-hotel',
    kurzbeschreibung: '4-Sterne Hotel Komplettreinigung',
    beschreibung: 'Zimmerreinigung, Lobby, Restaurant und Wellnessbereich. Tägliche Reinigung von 85 Zimmern und allen Gemeinschaftsbereichen.',
    bilder: [
      'https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?q=80&w=800&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1566073771259-6a8506099945?q=80&w=800&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1582719508461-905c673771fd?q=80&w=800&auto=format&fit=crop',
    ],
    standort: 'Landshut',
    flaeche: '5.500 m²',
  },
  {
    id: 'ref-017',
    projektName: 'Restaurant-Kette',
    firma: 'Wirtshaus zur Post',
    jahr: 2022,
    leistungen: ['unterhaltsreinigung', 'sonderreinigung'],
    branche: 'gastronomie-hotel',
    kurzbeschreibung: 'HACCP-konforme Gastroreinigung',
    beschreibung: 'Tägliche Reinigung von Gastraum, Küche und Sanitäranlagen. Strenge Einhaltung der Lebensmittelhygiene-Vorschriften.',
    bilder: [
      'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?q=80&w=800&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1466978913421-dad2ebd01d17?q=80&w=800&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1552566626-52f8b828add9?q=80&w=800&auto=format&fit=crop',
    ],
    standort: 'Landshut',
    flaeche: '420 m²',
  },
  {
    id: 'ref-018',
    projektName: 'Tagungshotel',
    firma: 'Parkhotel Landshut',
    jahr: 2022,
    leistungen: ['unterhaltsreinigung', 'glasreinigung', 'sonderreinigung'],
    branche: 'gastronomie-hotel',
    kurzbeschreibung: 'Business-Hotel mit Konferenzbereich',
    beschreibung: 'Reinigung von 120 Zimmern, 5 Konferenzräumen und dem Restaurantbereich. Flexible Einsatzzeiten bei Veranstaltungen.',
    bilder: [
      'https://images.unsplash.com/photo-1564501049412-61c2a3083791?q=80&w=800&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1590490360182-c33d57733427?q=80&w=800&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1611892440504-42a792e24d32?q=80&w=800&auto=format&fit=crop',
    ],
    standort: 'Landshut',
    flaeche: '6.200 m²',
  },

  // ==================== BILDUNG & SCHULEN ====================
  {
    id: 'ref-019',
    projektName: 'Gymnasium Landshut',
    firma: 'Hans-Leinberger-Gymnasium',
    jahr: 2022,
    leistungen: ['unterhaltsreinigung', 'glasreinigung'],
    branche: 'bildung-schulen',
    kurzbeschreibung: 'Schulreinigung mit 40 Klassenzimmern',
    beschreibung: 'Tägliche Reinigung aller Klassenzimmer, Fachräume, Turnhalle und Sanitäranlagen. Ferienreinigung und Grundreinigung.',
    bilder: [
      'https://images.unsplash.com/photo-1580582932707-520aed937b7b?q=80&w=800&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1562774053-701939374585?q=80&w=800&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1509062522246-3755977927d7?q=80&w=800&auto=format&fit=crop',
    ],
    standort: 'Landshut',
    flaeche: '7.500 m²',
  },
  {
    id: 'ref-020',
    projektName: 'Kindertagesstätte',
    firma: 'AWO Kindergarten Sonnenschein',
    jahr: 2022,
    leistungen: ['unterhaltsreinigung', 'sonderreinigung'],
    branche: 'bildung-schulen',
    kurzbeschreibung: 'Kindgerechte Reinigung mit Hygienefokus',
    beschreibung: 'Tägliche Reinigung mit kindersicheren, allergikerfreundlichen Reinigungsmitteln. Besonderer Fokus auf Hygiene im Sanitär- und Essbereich.',
    bilder: [
      'https://images.unsplash.com/photo-1567057419565-4349c49d8a04?q=80&w=800&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1576495199011-eb94736d05d6?q=80&w=800&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1503454537195-1dcabb73ffb9?q=80&w=800&auto=format&fit=crop',
    ],
    standort: 'Landshut',
    flaeche: '680 m²',
  },
  {
    id: 'ref-021',
    projektName: 'Hochschule Campus',
    firma: 'Hochschule Landshut',
    jahr: 2021,
    leistungen: ['unterhaltsreinigung', 'glasreinigung', 'aussenanlagenpflege'],
    branche: 'bildung-schulen',
    kurzbeschreibung: 'Universitätsgebäude und Außenanlagen',
    beschreibung: 'Reinigung von Hörsälen, Seminarräumen, Bibliothek, Mensa und Verwaltungsgebäuden. Pflege der Campus-Außenanlagen.',
    bilder: [
      'https://images.unsplash.com/photo-1541339907198-e08756dedf3f?q=80&w=800&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1523050854058-8df90110c9f1?q=80&w=800&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1498243691581-b145c3f54a5a?q=80&w=800&auto=format&fit=crop',
    ],
    standort: 'Landshut',
    flaeche: '15.000 m²',
  },

  // ==================== FITNESS & SPORT ====================
  {
    id: 'ref-022',
    projektName: 'Fitness-Center XXL',
    firma: 'FitX Landshut',
    jahr: 2021,
    leistungen: ['unterhaltsreinigung', 'sonderreinigung'],
    branche: 'fitness-sport',
    kurzbeschreibung: '24h Fitnessstudio Reinigung',
    beschreibung: 'Tägliche Reinigung und Desinfektion aller Trainingsgeräte, Umkleiden, Duschen und Wellness-Bereich. Flexible Einsatzzeiten.',
    bilder: [
      'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?q=80&w=800&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1540497077202-7c8a3999166f?q=80&w=800&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1571902943202-507ec2618e8f?q=80&w=800&auto=format&fit=crop',
    ],
    standort: 'Landshut',
    flaeche: '2.800 m²',
  },
  {
    id: 'ref-023',
    projektName: 'Schwimmbad Kommunal',
    firma: 'Hallenbad Landshut',
    jahr: 2021,
    leistungen: ['unterhaltsreinigung', 'sonderreinigung', 'glasreinigung'],
    branche: 'fitness-sport',
    kurzbeschreibung: 'Schwimmbad und Wellnessbereich',
    beschreibung: 'Tägliche Reinigung aller Nassbereiche, Umkleiden, Saunalandschaft und Foyer. Spezielle Reinigungsmittel für Schwimmbadbereich.',
    bilder: [
      'https://images.unsplash.com/photo-1576013551627-0cc20b96c2a7?q=80&w=800&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1560185893-a55cbc8c57e8?q=80&w=800&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1544551763-46a013bb70d5?q=80&w=800&auto=format&fit=crop',
    ],
    standort: 'Landshut',
    flaeche: '4.500 m²',
  },
  {
    id: 'ref-024',
    projektName: 'Tennis-Center',
    firma: 'TC Landshut',
    jahr: 2021,
    leistungen: ['unterhaltsreinigung', 'glasreinigung'],
    branche: 'fitness-sport',
    kurzbeschreibung: 'Indoor-Tennishalle und Clubhaus',
    beschreibung: 'Reinigung der 6 Hallenplätze, Umkleiden, Gastronomiebereich und Clubräume. Regelmäßige Grundreinigung der Hallenböden.',
    bilder: [
      'https://images.unsplash.com/photo-1551773188-d63e5e268a29?q=80&w=800&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1622279457486-62dcc4a431d6?q=80&w=800&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?q=80&w=800&auto=format&fit=crop',
    ],
    standort: 'Landshut',
    flaeche: '3.200 m²',
  },

  // ==================== LOGISTIK & LAGER ====================
  {
    id: 'ref-025',
    projektName: 'Logistikzentrum Nord',
    firma: 'Amazon Logistik',
    jahr: 2021,
    leistungen: ['hallenreinigung', 'industriereinigung'],
    branche: 'logistik-lager',
    kurzbeschreibung: 'Großflächige Hallenreinigung',
    beschreibung: 'Tägliche maschinelle Reinigung der Logistikflächen. Reinigung von Verladerampen, Sozialräumen und Bürobereichen.',
    bilder: [
      'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?q=80&w=800&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1553413077-190dd305871c?q=80&w=800&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1565891741441-64926e441838?q=80&w=800&auto=format&fit=crop',
    ],
    standort: 'Ergolding',
    flaeche: '35.000 m²',
  },
  {
    id: 'ref-026',
    projektName: 'Speditionszentrum',
    firma: 'Dachser SE',
    jahr: 2020,
    leistungen: ['hallenreinigung', 'aussenanlagenpflege'],
    branche: 'logistik-lager',
    kurzbeschreibung: 'Umschlagshalle und Außenflächen',
    beschreibung: 'Reinigung der Umschlagshalle, Bürogebäude und gepflasterten Außenflächen. Winterdienst auf dem Betriebsgelände.',
    bilder: [
      'https://images.unsplash.com/photo-1494412574643-ff11b0a5c1c3?q=80&w=800&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1578575437130-527eed3abbec?q=80&w=800&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1580674285054-bed31e145f59?q=80&w=800&auto=format&fit=crop',
    ],
    standort: 'Landshut',
    flaeche: '18.000 m²',
  },
  {
    id: 'ref-027',
    projektName: 'Kühllogistik',
    firma: 'Fresh Logistics GmbH',
    jahr: 2020,
    leistungen: ['industriereinigung', 'sonderreinigung'],
    branche: 'logistik-lager',
    kurzbeschreibung: 'Kühllager und Frischelogistik',
    beschreibung: 'Spezialreinigung in Kühlräumen unter Einhaltung der Kühlkette. HACCP-konforme Hygienereinigung.',
    bilder: [
      'https://images.unsplash.com/photo-1590247813693-5541d1c609fd?q=80&w=800&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1600880292203-757bb62b4baf?q=80&w=800&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1570216043748-eb07a8c0e9b4?q=80&w=800&auto=format&fit=crop',
    ],
    standort: 'Ergolding',
    flaeche: '8.500 m²',
  },

  // ==================== WOHNUNGSWIRTSCHAFT ====================
  {
    id: 'ref-028',
    projektName: 'Wohnanlage Süd',
    firma: 'Städtische Wohnbau Landshut',
    jahr: 2020,
    leistungen: ['unterhaltsreinigung', 'glasreinigung', 'winterdienst'],
    branche: 'wohnungswirtschaft',
    kurzbeschreibung: '12 Mehrfamilienhäuser mit 240 Einheiten',
    beschreibung: 'Wöchentliche Treppenhausreinigung, Glasreinigung und Winterdienst für große Wohnanlage. Zuverlässiger Service seit 2024.',
    bilder: [
      'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?q=80&w=800&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=800&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1494526585095-c41746248156?q=80&w=800&auto=format&fit=crop',
    ],
    standort: 'Landshut',
    flaeche: '8.400 m²',
  },
  {
    id: 'ref-029',
    projektName: 'Eigentümergemeinschaft',
    firma: 'WEG Residenz am Park',
    jahr: 2020,
    leistungen: ['unterhaltsreinigung', 'aussenanlagenpflege', 'winterdienst'],
    branche: 'wohnungswirtschaft',
    kurzbeschreibung: 'Luxus-Wohnanlage mit Tiefgarage',
    beschreibung: 'Hochwertige Treppenhausreinigung, Tiefgaragenreinigung und Gartenpflege. Monatliche Fensterreinigung im Eingangsbereich.',
    bilder: [
      'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?q=80&w=800&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?q=80&w=800&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?q=80&w=800&auto=format&fit=crop',
    ],
    standort: 'Landshut',
    flaeche: '2.800 m²',
  },
  {
    id: 'ref-030',
    projektName: 'Hausverwaltung Portfolio',
    firma: 'Immobilien Huber GmbH',
    jahr: 2020,
    leistungen: ['unterhaltsreinigung', 'glasreinigung', 'hausmeisterservice'],
    branche: 'wohnungswirtschaft',
    kurzbeschreibung: '25 Objekte unter einer Verwaltung',
    beschreibung: 'Komplettbetreuung von 25 Wohnobjekten mit Treppenhausreinigung, Glasreinigung und Hausmeisterservice aus einer Hand.',
    bilder: [
      'https://images.unsplash.com/photo-1580587771525-78b9dba3b914?q=80&w=800&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1564013799919-ab600027ffc6?q=80&w=800&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=800&auto=format&fit=crop',
    ],
    standort: 'Landshut / Umgebung',
    flaeche: '15.000 m²',
  },

  // ==================== ÖFFENTLICHE EINRICHTUNGEN ====================
  {
    id: 'ref-031',
    projektName: 'Rathaus Landshut',
    firma: 'Stadt Landshut',
    jahr: 2019,
    leistungen: ['unterhaltsreinigung', 'glasreinigung', 'sonderreinigung'],
    branche: 'oeffentliche-einrichtungen',
    kurzbeschreibung: 'Historisches Rathaus mit Bürgerbüro',
    beschreibung: 'Tägliche Reinigung des historischen Rathauses mit besonderer Sorgfalt für denkmalgeschützte Bereiche. Bürgerbüro und Verwaltungsräume.',
    bilder: [
      'https://images.unsplash.com/photo-1555431189-0fabf2667795?q=80&w=800&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1577415124269-fc1140815c63?q=80&w=800&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1541873676-a18131494184?q=80&w=800&auto=format&fit=crop',
    ],
    standort: 'Landshut',
    flaeche: '4.200 m²',
  },
  {
    id: 'ref-032',
    projektName: 'Stadtbibliothek',
    firma: 'Stadtbibliothek Landshut',
    jahr: 2019,
    leistungen: ['unterhaltsreinigung', 'glasreinigung'],
    branche: 'oeffentliche-einrichtungen',
    kurzbeschreibung: 'Öffentliche Bibliothek mit Lesebereich',
    beschreibung: 'Tägliche Reinigung der Lese- und Arbeitsbereiche, Regalgänge und Veranstaltungsräume. Staubfreie Umgebung für Bücher.',
    bilder: [
      'https://images.unsplash.com/photo-1521587760476-6c12a4b040da?q=80&w=800&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1507842217343-583bb7270b66?q=80&w=800&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1568667256549-094345857637?q=80&w=800&auto=format&fit=crop',
    ],
    standort: 'Landshut',
    flaeche: '1.800 m²',
  },
  {
    id: 'ref-033',
    projektName: 'Feuerwache Hauptwache',
    firma: 'Freiwillige Feuerwehr Landshut',
    jahr: 2019,
    leistungen: ['unterhaltsreinigung', 'hallenreinigung'],
    branche: 'oeffentliche-einrichtungen',
    kurzbeschreibung: 'Feuerwache mit Fahrzeughalle',
    beschreibung: 'Reinigung der Fahrzeughalle, Sozialräume, Schulungsräume und Verwaltung. Besondere Anforderungen an Einsatzbereitschaft.',
    bilder: [
      'https://images.unsplash.com/photo-1586953208448-b95a79798f07?q=80&w=800&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1562037555-94b9a00eb7cd?q=80&w=800&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1578662996442-48f60103fc96?q=80&w=800&auto=format&fit=crop',
    ],
    standort: 'Landshut',
    flaeche: '2.400 m²',
  },

  // ==================== BANKEN & VERSICHERUNGEN ====================
  {
    id: 'ref-034',
    projektName: 'Sparkassen-Zentrale',
    firma: 'Sparkasse Landshut',
    jahr: 2019,
    leistungen: ['unterhaltsreinigung', 'glasreinigung'],
    branche: 'banken-versicherungen',
    kurzbeschreibung: 'Hauptverwaltung und 5 Filialen',
    beschreibung: 'Diskrete Reinigung der Hauptverwaltung und Filialen. Sicherheitsüberprüftes Personal für Schalterhallen und Tresorräume.',
    bilder: [
      'https://images.unsplash.com/photo-1541354329998-f4d9a9f9297f?q=80&w=800&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?q=80&w=800&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1556742400-b5b7c512f396?q=80&w=800&auto=format&fit=crop',
    ],
    standort: 'Landshut',
    flaeche: '6.500 m²',
  },
  {
    id: 'ref-035',
    projektName: 'Versicherungsagentur',
    firma: 'Allianz Generalvertretung Meier',
    jahr: 2019,
    leistungen: ['bueroreinigung', 'glasreinigung'],
    branche: 'banken-versicherungen',
    kurzbeschreibung: 'Repräsentative Agenturräume',
    beschreibung: 'Tägliche Reinigung der Kundenberatungsräume und Büros. Hochwertige Ausstattung erfordert besondere Sorgfalt.',
    bilder: [
      'https://images.unsplash.com/photo-1556761175-4b46a572b786?q=80&w=800&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1600880292203-757bb62b4baf?q=80&w=800&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1568992688065-536aad8a12f6?q=80&w=800&auto=format&fit=crop',
    ],
    standort: 'Landshut',
    flaeche: '380 m²',
  },
  {
    id: 'ref-036',
    projektName: 'Raiffeisenbank',
    firma: 'VR-Bank Landshut-Ergolding',
    jahr: 2018,
    leistungen: ['unterhaltsreinigung', 'glasreinigung', 'sonderreinigung'],
    branche: 'banken-versicherungen',
    kurzbeschreibung: 'Genossenschaftsbank mit 3 Standorten',
    beschreibung: 'Reinigung der Hauptstelle und zwei Filialen. Diskretion und Zuverlässigkeit sind oberstes Gebot.',
    bilder: [
      'https://images.unsplash.com/photo-1601597111158-2fceff292cdc?q=80&w=800&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1554224155-6726b3ff858f?q=80&w=800&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1556742502-ec7c0e9f34b1?q=80&w=800&auto=format&fit=crop',
    ],
    standort: 'Landshut / Ergolding',
    flaeche: '2.100 m²',
  },

  // ==================== AUTOMOTIVE ====================
  {
    id: 'ref-037',
    projektName: 'Autohaus BMW',
    firma: 'BMW Autohaus Reisinger',
    jahr: 2018,
    leistungen: ['unterhaltsreinigung', 'glasreinigung', 'industriereinigung'],
    branche: 'automotive',
    kurzbeschreibung: 'Premium Showroom und Werkstatt',
    beschreibung: 'Tägliche Reinigung des hochwertigen Showrooms, Kundenbereich, Werkstatt und Außenflächen. Fahrzeugpräsentation muss stets perfekt sein.',
    bilder: [
      'https://images.unsplash.com/photo-1503376780353-7e6692767b70?q=80&w=800&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1580273916550-e323be2ae537?q=80&w=800&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1552519507-da3b142c6e3d?q=80&w=800&auto=format&fit=crop',
    ],
    standort: 'Landshut',
    flaeche: '4.200 m²',
  },
  {
    id: 'ref-038',
    projektName: 'KFZ-Werkstatt',
    firma: 'Auto Service Huber',
    jahr: 2018,
    leistungen: ['industriereinigung', 'unterhaltsreinigung'],
    branche: 'automotive',
    kurzbeschreibung: 'Freie Werkstatt mit TÜV-Service',
    beschreibung: 'Wöchentliche Werkstattreinigung mit Ölfleck-Entfernung. Kundenbereich und Sanitäranlagen täglich.',
    bilder: [
      'https://images.unsplash.com/photo-1486262715619-67b85e0b08d3?q=80&w=800&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1619642751034-765dfdf7c58e?q=80&w=800&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1632823471406-4c5c7e4c6f24?q=80&w=800&auto=format&fit=crop',
    ],
    standort: 'Ergolding',
    flaeche: '1.200 m²',
  },
  {
    id: 'ref-039',
    projektName: 'Autohaus Mercedes',
    firma: 'Mercedes-Benz Niederlassung Landshut',
    jahr: 2018,
    leistungen: ['unterhaltsreinigung', 'glasreinigung', 'aussenanlagenpflege'],
    branche: 'automotive',
    kurzbeschreibung: 'Niederlassung mit großem Außengelände',
    beschreibung: 'Showroom-Reinigung nach höchsten Standards. Glasflächen, Ausstellungsfahrzeuge, Werkstatt und 8.000m² Außenfläche.',
    bilder: [
      'https://images.unsplash.com/photo-1617531653332-bd46c24f2068?q=80&w=800&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1606016159991-dfe4f2746ad5?q=80&w=800&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1542362567-b07e54358753?q=80&w=800&auto=format&fit=crop',
    ],
    standort: 'Landshut',
    flaeche: '5.800 m²',
  },

  // ==================== SPEZIAL / FACILITY ====================
  {
    id: 'ref-040',
    projektName: 'Baureinigung Neubau',
    firma: 'STRABAG Wohnbau',
    jahr: 2018,
    leistungen: ['baureinigung', 'fensterreinigung', 'sonderreinigung'],
    branche: 'buero-verwaltung',
    kurzbeschreibung: 'Bauendreinigung 48 Wohneinheiten',
    beschreibung: 'Komplette Bauendreinigung eines Neubauprojekts. Feinreinigung aller Wohnungen, Treppenhäuser und Gemeinschaftsflächen.',
    bilder: [
      'https://images.unsplash.com/photo-1504307651254-35680f356dfd?q=80&w=800&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1503387762-592deb58ef4e?q=80&w=800&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1541888946425-d81bb19240f5?q=80&w=800&auto=format&fit=crop',
    ],
    standort: 'Landshut',
    flaeche: '4.800 m²',
  },
  {
    id: 'ref-041',
    projektName: 'Fassadenreinigung Hochhaus',
    firma: 'Hochhaus am Hauptplatz',
    jahr: 2017,
    leistungen: ['fassadenreinigung', 'glasreinigung'],
    branche: 'buero-verwaltung',
    kurzbeschreibung: '12-stöckiges Bürogebäude',
    beschreibung: 'Jährliche Fassadenreinigung mittels Hubarbeitsbühne. Komplette Glasfassade und Betonelemente.',
    bilder: [
      'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=800&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1554435493-93422e8220c8?q=80&w=800&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1545558014-8692077e9b5c?q=80&w=800&auto=format&fit=crop',
    ],
    standort: 'Landshut',
    flaeche: '3.200 m²',
  },
  {
    id: 'ref-042',
    projektName: 'Tiefgarage Zentrum',
    firma: 'Parkhaus Landshut GmbH',
    jahr: 2017,
    leistungen: ['tiefgaragenreinigung', 'parkplatzreinigung'],
    branche: 'wohnungswirtschaft',
    kurzbeschreibung: 'Öffentliche Tiefgarage 450 Stellplätze',
    beschreibung: 'Monatliche maschinelle Reinigung der Tiefgarage. Ölfleck-Entfernung und Beschriftung nachziehen.',
    bilder: [
      'https://images.unsplash.com/photo-1573348722427-f1d6819fdf98?q=80&w=800&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1506521781263-d8422e82f27a?q=80&w=800&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1470224114660-3f6686c562eb?q=80&w=800&auto=format&fit=crop',
    ],
    standort: 'Landshut',
    flaeche: '12.000 m²',
  },
  {
    id: 'ref-043',
    projektName: 'Winterdienst Gewerbegebiet',
    firma: 'Gewerbepark Landshut Süd',
    jahr: 2017,
    leistungen: ['winterdienst', 'aussenanlagenpflege'],
    branche: 'industrie-produktion',
    kurzbeschreibung: 'Winterdienst für 15 Gewerbebetriebe',
    beschreibung: '24/7 Winterdienst-Bereitschaft für das komplette Gewerbegebiet. Räumen und Streuen aller Zufahrten und Parkplätze.',
    bilder: [
      'https://images.unsplash.com/photo-1516912481808-3406841bd33c?q=80&w=800&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1491002052546-bf38f186af56?q=80&w=800&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1477601263568-180e2c6d046e?q=80&w=800&auto=format&fit=crop',
    ],
    standort: 'Landshut',
    flaeche: '45.000 m²',
  },
  {
    id: 'ref-044',
    projektName: 'Hausmeisterservice Komplex',
    firma: 'Bürozentrum City',
    jahr: 2017,
    leistungen: ['hausmeisterservice', 'unterhaltsreinigung', 'winterdienst'],
    branche: 'buero-verwaltung',
    kurzbeschreibung: 'Full-Service Gebäudebetreuung',
    beschreibung: 'Komplette Gebäudebetreuung inkl. Hausmeisterservice, Reinigung und Winterdienst. Ein Ansprechpartner für alles.',
    bilder: [
      'https://images.unsplash.com/photo-1560179707-f14e90ef3623?q=80&w=800&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1497366811353-6870744d04b2?q=80&w=800&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=800&auto=format&fit=crop',
    ],
    standort: 'Landshut',
    flaeche: '5.600 m²',
  },
  {
    id: 'ref-045',
    projektName: 'Graffiti-Entfernung',
    firma: 'Deutsche Bahn AG',
    jahr: 2017,
    leistungen: ['sonderreinigung', 'fassadenreinigung'],
    branche: 'oeffentliche-einrichtungen',
    kurzbeschreibung: 'Graffiti-Entfernung an Bahnhöfen',
    beschreibung: 'Schnelle Graffiti-Entfernung an Unterführungen und Bahnhofsgebäuden. Spezialverfahren ohne Oberflächenschäden.',
    bilder: [
      'https://images.unsplash.com/photo-1574169208507-84376144848b?q=80&w=800&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1579762715118-a6f1d4b934f1?q=80&w=800&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?q=80&w=800&auto=format&fit=crop',
    ],
    standort: 'Landshut',
    flaeche: '800 m²',
  },

  // ==================== WEITERE PROJEKTE ====================
  {
    id: 'ref-046',
    projektName: 'Seniorenzentrum',
    firma: 'BRK Seniorenzentrum',
    jahr: 2016,
    leistungen: ['unterhaltsreinigung', 'sonderreinigung', 'glasreinigung'],
    branche: 'gesundheitswesen',
    kurzbeschreibung: 'Pflegeheim mit 120 Plätzen',
    beschreibung: 'Tägliche Reinigung aller Bewohnerzimmer, Gemeinschaftsräume und Außenbereiche. Besondere Rücksichtnahme auf Bewohner.',
    bilder: [
      'https://images.unsplash.com/photo-1586105251261-72a756497a11?q=80&w=800&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1576765608535-5f04d1e3f289?q=80&w=800&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1559839734-2b71ea197ec2?q=80&w=800&auto=format&fit=crop',
    ],
    standort: 'Vilsbiburg',
    flaeche: '4.500 m²',
  },
  {
    id: 'ref-047',
    projektName: 'Yoga-Studio',
    firma: 'Yoga Landshut',
    jahr: 2016,
    leistungen: ['unterhaltsreinigung'],
    branche: 'fitness-sport',
    kurzbeschreibung: 'Hochwertiges Yoga-Studio',
    beschreibung: 'Tägliche Reinigung der Yogaräume mit hypoallergenen Reinigungsmitteln. Matten- und Hilfsmittel-Desinfektion.',
    bilder: [
      'https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?q=80&w=800&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1506126613408-eca07ce68773?q=80&w=800&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1571902943202-507ec2618e8f?q=80&w=800&auto=format&fit=crop',
    ],
    standort: 'Landshut',
    flaeche: '320 m²',
  },
  {
    id: 'ref-048',
    projektName: 'Biergarten Isarpromenade',
    firma: 'Gasthaus zur Isar',
    jahr: 2016,
    leistungen: ['unterhaltsreinigung', 'aussenanlagenpflege'],
    branche: 'gastronomie-hotel',
    kurzbeschreibung: 'Traditioneller Biergarten',
    beschreibung: 'Tägliche Reinigung von Gastraum und Küche. Wöchentliche Grundreinigung des Außenbereichs mit 400 Plätzen.',
    bilder: [
      'https://images.unsplash.com/photo-1555992336-fb0d29498b13?q=80&w=800&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1514933651103-005eec06c04b?q=80&w=800&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1559339352-11d035aa65de?q=80&w=800&auto=format&fit=crop',
    ],
    standort: 'Landshut',
    flaeche: '1.800 m²',
  },
  {
    id: 'ref-049',
    projektName: 'Einkaufsmarkt Bio',
    firma: 'BioMarkt Naturkost',
    jahr: 2016,
    leistungen: ['unterhaltsreinigung', 'glasreinigung'],
    branche: 'einzelhandel',
    kurzbeschreibung: 'Biomarkt mit Café',
    beschreibung: 'Tägliche Reinigung von Verkaufsfläche und Bio-Café. Verwendung ökologischer Reinigungsmittel entsprechend dem Geschäftskonzept.',
    bilder: [
      'https://images.unsplash.com/photo-1542838132-92c53300491e?q=80&w=800&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1506617420156-8e4536971650?q=80&w=800&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1550989460-0adf9ea622e2?q=80&w=800&auto=format&fit=crop',
    ],
    standort: 'Landshut',
    flaeche: '650 m²',
  },
  {
    id: 'ref-050',
    projektName: 'Rechenzentrum',
    firma: 'DataCenter Bavaria',
    jahr: 2016,
    leistungen: ['sonderreinigung', 'unterhaltsreinigung'],
    branche: 'buero-verwaltung',
    kurzbeschreibung: 'Hochsicherheits-Rechenzentrum',
    beschreibung: 'Spezialreinigung in klimatisierten Serverräumen. Sicherheitsüberprüftes Personal, staubfreie Reinigung.',
    bilder: [
      'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?q=80&w=800&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1544197150-b99a580bb7a8?q=80&w=800&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1573164713714-d95e436ab8d6?q=80&w=800&auto=format&fit=crop',
    ],
    standort: 'München',
    flaeche: '1.500 m²',
  },
]

// ==================== HELPER FUNCTIONS ====================

// Alle Jahre für Filter
export function getAllJahre(): number[] {
  const jahre = [...new Set(referenzen.map(r => r.jahr))]
  return jahre.sort((a, b) => b - a) // Neueste zuerst
}

// Alle Leistungen die in Referenzen vorkommen
export function getAllLeistungenFromReferenzen(): string[] {
  const leistungen = new Set<string>()
  referenzen.forEach(r => r.leistungen.forEach(l => leistungen.add(l)))
  return Array.from(leistungen)
}

// Alle Branchen die in Referenzen vorkommen
export function getAllBranchenFromReferenzen(): string[] {
  const branchen = new Set<string>()
  referenzen.forEach(r => branchen.add(r.branche))
  return Array.from(branchen)
}

// Referenz nach ID
export function getReferenzById(id: string): Referenz | undefined {
  return referenzen.find(r => r.id === id)
}

// Referenzen filtern
export function filterReferenzen(
  jahr?: number,
  leistung?: string,
  branche?: string
): Referenz[] {
  let result = referenzen

  if (jahr) {
    result = result.filter(r => r.jahr === jahr)
  }

  if (leistung) {
    result = result.filter(r => r.leistungen.includes(leistung))
  }

  if (branche) {
    result = result.filter(r => r.branche === branche)
  }

  return result
}

// Statistiken
export function getReferenzStatistiken() {
  const totalProjekte = referenzen.length
  const totalFlaeche = referenzen.reduce((sum, r) => {
    const flaeche = r.flaeche ? parseInt(r.flaeche.replace(/[^\d]/g, '')) : 0
    return sum + flaeche
  }, 0)
  const branchen = getAllBranchenFromReferenzen().length

  return {
    projekte: totalProjekte,
    flaeche: totalFlaeche,
    branchen: branchen,
  }
}
