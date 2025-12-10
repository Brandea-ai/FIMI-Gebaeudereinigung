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
  bilder: string[] // Generierte FIMI-Bilder
  standort: string
  flaeche?: string // Optional: Quadratmeter
}

export const referenzen: Referenz[] = [
  // ==================== BÜRO & VERWALTUNG ====================
  {
    id: 'ref-001',
    projektName: 'Verwaltungsgebäude 5 Etagen',
    firma: 'Kommunaler Versorger',
    jahr: 2025,
    leistungen: ['unterhaltsreinigung', 'fensterreinigung', 'bueroreinigung'],
    branche: 'buero-verwaltung',
    kurzbeschreibung: 'Komplette Gebäudereinigung der Hauptverwaltung',
    beschreibung: 'Tägliche Unterhaltsreinigung, wöchentliche Glasreinigung und monatliche Grundreinigung. Das Gebäude umfasst 5 Etagen mit Büros, Konferenzräumen und Kundenbereich.',
    bilder: ['/images/referenzen/ref-001/ref-001-1.avif'],
    standort: 'Landshut',
    flaeche: '4.500 m²',
  },
  {
    id: 'ref-002',
    projektName: 'IT-Campus Open Space',
    firma: 'Technologieunternehmen',
    jahr: 2025,
    leistungen: ['bueroreinigung', 'unterhaltsreinigung'],
    branche: 'buero-verwaltung',
    kurzbeschreibung: 'Open-Space Büroreinigung im Tech-Umfeld',
    beschreibung: 'Moderne Open-Space Büroflächen mit besonderen Anforderungen an Flexibilität. Reinigung erfolgt in den Abendstunden, um den Betrieb nicht zu stören.',
    bilder: ['/images/referenzen/ref-002/ref-002-1.avif'],
    standort: 'München',
    flaeche: '3.200 m²',
  },
  {
    id: 'ref-003',
    projektName: 'Anwaltskanzlei Premium',
    firma: 'Rechtsanwaltskanzlei',
    jahr: 2025,
    leistungen: ['bueroreinigung', 'fensterreinigung'],
    branche: 'buero-verwaltung',
    kurzbeschreibung: 'Diskrete Kanzleireinigung mit Sicherheitsanforderungen',
    beschreibung: 'Hochwertige Kanzleiräume erfordern besondere Sorgfalt und Diskretion. Unsere Mitarbeiter sind sicherheitsüberprüft und arbeiten nach strengen Vertraulichkeitsrichtlinien.',
    bilder: ['/images/referenzen/ref-003/ref-003-1.avif'],
    standort: 'Regensburg',
    flaeche: '850 m²',
  },
  {
    id: 'ref-004',
    projektName: 'Bürokomplex Mehrmandant',
    firma: 'Steuerberatungsgesellschaft',
    jahr: 2025,
    leistungen: ['unterhaltsreinigung', 'fensterreinigung'],
    branche: 'buero-verwaltung',
    kurzbeschreibung: 'Bürokomplex mit mehreren Mietern',
    beschreibung: 'Mehrstöckiges Bürogebäude mit verschiedenen Steuerberatungsgesellschaften. Koordinierte Reinigung aller Gemeinschaftsflächen und Einzelbüros.',
    bilder: ['/images/referenzen/ref-004/ref-004-1.avif'],
    standort: 'Ingolstadt',
    flaeche: '2.100 m²',
  },

  // ==================== INDUSTRIE & PRODUKTION ====================
  {
    id: 'ref-005',
    projektName: 'Produktionshallen Automotive',
    firma: 'Automobilzulieferer',
    jahr: 2025,
    leistungen: ['industriereinigung', 'hallenreinigung', 'maschinenreinigung'],
    branche: 'industrie-produktion',
    kurzbeschreibung: 'Industriereinigung im Automobilwerk',
    beschreibung: 'Regelmäßige Reinigung der Produktionshallen und Fertigungslinien. Einsatz von Spezialgeräten für die maschinelle Bodenreinigung und Maschinenreinigung nach Produktionsschluss.',
    bilder: ['/images/referenzen/ref-005/ref-005-1.avif'],
    standort: 'Raum Niederbayern',
    flaeche: '25.000 m²',
  },
  {
    id: 'ref-006',
    projektName: 'CNC-Fertigung Metallbau',
    firma: 'Präzisionstechnik-Betrieb',
    jahr: 2024,
    leistungen: ['industriereinigung', 'maschinenreinigung'],
    branche: 'industrie-produktion',
    kurzbeschreibung: 'CNC-Reinigung und Hallenreinigung',
    beschreibung: 'Spezialisierte Reinigung von CNC-Fräsen und Drehmaschinen. Entfernung von Spänen, Kühlmittelresten und Öl. Wöchentliche Komplettreinigung der Fertigungshalle.',
    bilder: ['/images/referenzen/ref-006/ref-006-1.avif'],
    standort: 'Raum München',
    flaeche: '3.500 m²',
  },
  {
    id: 'ref-007',
    projektName: 'Lebensmittelproduktion HACCP',
    firma: 'Lebensmittelhersteller',
    jahr: 2024,
    leistungen: ['industriereinigung', 'sonderreinigung'],
    branche: 'industrie-produktion',
    kurzbeschreibung: 'Hygienereinigung nach HACCP-Standards',
    beschreibung: 'Tägliche Hygienereinigung der Produktionsräume nach HACCP-Standards. Spezielle Desinfektionsverfahren für Lebensmittelbetriebe.',
    bilder: ['/images/referenzen/ref-007/ref-007-1.avif'],
    standort: 'Niederbayern',
    flaeche: '1.800 m²',
  },
  {
    id: 'ref-008',
    projektName: 'Elektronikfertigung Reinraum',
    firma: 'Elektronikhersteller',
    jahr: 2024,
    leistungen: ['industriereinigung', 'sonderreinigung'],
    branche: 'industrie-produktion',
    kurzbeschreibung: 'Reinraumreinigung und ESD-konforme Reinigung',
    beschreibung: 'Spezialisierte Reinigung von Reinräumen und ESD-Schutzzonen. Einsatz von antistatischen Reinigungsmitteln und geschultem Personal.',
    bilder: ['/images/referenzen/ref-008/ref-008-1.avif'],
    standort: 'Ostbayern',
    flaeche: '2.200 m²',
  },

  // ==================== GESUNDHEITSWESEN ====================
  {
    id: 'ref-009',
    projektName: 'Medizinisches Versorgungszentrum',
    firma: 'MVZ mit mehreren Fachrichtungen',
    jahr: 2024,
    leistungen: ['unterhaltsreinigung', 'sonderreinigung'],
    branche: 'gesundheitswesen',
    kurzbeschreibung: 'RKI-konforme Praxisreinigung',
    beschreibung: 'Tägliche Hygienereinigung nach RKI-Richtlinien. Desinfektion aller Behandlungsräume, Wartebereiche und Sanitäranlagen. Geschultes Personal mit Gesundheitszeugnis.',
    bilder: ['/images/referenzen/ref-009/ref-009-1.avif'],
    standort: 'Niederbayern',
    flaeche: '1.200 m²',
  },
  {
    id: 'ref-010',
    projektName: 'Zahnarztpraxis Premium',
    firma: 'Zahnmedizinische Praxis',
    jahr: 2024,
    leistungen: ['unterhaltsreinigung', 'sonderreinigung'],
    branche: 'gesundheitswesen',
    kurzbeschreibung: 'Hochwertige Praxisreinigung mit Desinfektion',
    beschreibung: 'Moderne Zahnarztpraxis mit hohen Hygieneanforderungen. Tägliche Desinfektion aller Behandlungsstühle und Oberflächen.',
    bilder: ['/images/referenzen/ref-010/ref-010-1.avif'],
    standort: 'Oberbayern',
    flaeche: '450 m²',
  },
  {
    id: 'ref-011',
    projektName: 'Physiotherapie-Zentrum',
    firma: 'Physiotherapie-Praxis',
    jahr: 2023,
    leistungen: ['unterhaltsreinigung', 'fensterreinigung'],
    branche: 'gesundheitswesen',
    kurzbeschreibung: 'Reinigung von Therapieräumen und Geräten',
    beschreibung: 'Tägliche Reinigung und Desinfektion der Behandlungsliegen, Therapiegeräte und Trainingsräume. Besondere Sorgfalt bei Bodenflächen.',
    bilder: ['/images/referenzen/ref-011/ref-011-1.avif'],
    standort: 'Oberpfalz',
    flaeche: '680 m²',
  },
  {
    id: 'ref-012',
    projektName: 'Seniorenpflegeheim',
    firma: 'Pflegeeinrichtung',
    jahr: 2023,
    leistungen: ['unterhaltsreinigung', 'sonderreinigung', 'fensterreinigung'],
    branche: 'gesundheitswesen',
    kurzbeschreibung: 'Vollständige Gebäudereinigung Pflegeeinrichtung',
    beschreibung: 'Umfassende Reinigung aller Bewohnerzimmer, Gemeinschaftsräume, Küche und Außenbereiche. Besondere Rücksichtnahme auf Bewohner.',
    bilder: ['/images/referenzen/ref-012/ref-012-1.avif'],
    standort: 'Oberbayern',
    flaeche: '3.800 m²',
  },

  // ==================== EINZELHANDEL ====================
  {
    id: 'ref-013',
    projektName: 'Einkaufszentrum Vollreinigung',
    firma: 'Einkaufszentrum',
    jahr: 2023,
    leistungen: ['unterhaltsreinigung', 'fensterreinigung', 'aussenanlagenpflege'],
    branche: 'einzelhandel',
    kurzbeschreibung: 'Vollreinigung Einkaufszentrum',
    beschreibung: 'Tägliche Reinigung aller Gemeinschaftsflächen, Rolltreppen, Aufzüge und Sanitäranlagen. Glasreinigung der Eingangsbereiche und Schaufenster.',
    bilder: ['/images/referenzen/ref-013/ref-013-1.avif'],
    standort: 'Oberbayern',
    flaeche: '12.000 m²',
  },
  {
    id: 'ref-014',
    projektName: 'Möbelhaus Großfläche',
    firma: 'Einrichtungshaus',
    jahr: 2023,
    leistungen: ['unterhaltsreinigung', 'fensterreinigung'],
    branche: 'einzelhandel',
    kurzbeschreibung: 'Verkaufsflächen und Ausstellungsräume',
    beschreibung: 'Nächtliche Reinigung der großflächigen Verkaufsräume. Besondere Vorsicht bei hochwertigen Ausstellungsstücken.',
    bilder: ['/images/referenzen/ref-014/ref-014-1.avif'],
    standort: 'Oberbayern',
    flaeche: '8.500 m²',
  },
  {
    id: 'ref-015',
    projektName: 'Supermarkt-Filialen',
    firma: 'Lebensmitteleinzelhandel',
    jahr: 2023,
    leistungen: ['unterhaltsreinigung', 'fensterreinigung'],
    branche: 'einzelhandel',
    kurzbeschreibung: '3 Filialen in der Region',
    beschreibung: 'Tägliche Reinigung von drei Supermarkt-Filialen. Fokus auf Hygiene im Lebensmittelbereich und saubere Eingangsbereiche.',
    bilder: ['/images/referenzen/ref-015/ref-015-1.avif'],
    standort: 'Niederbayern',
    flaeche: '4.200 m²',
  },

  // ==================== GASTRONOMIE & HOTEL ====================
  {
    id: 'ref-016',
    projektName: '4-Sterne Hotel Komplett',
    firma: 'Stadthotel',
    jahr: 2022,
    leistungen: ['unterhaltsreinigung', 'fensterreinigung', 'sonderreinigung'],
    branche: 'gastronomie-hotel',
    kurzbeschreibung: '4-Sterne Hotel Komplettreinigung',
    beschreibung: 'Zimmerreinigung, Lobby, Restaurant und Wellnessbereich. Tägliche Reinigung von 85 Zimmern und allen Gemeinschaftsbereichen.',
    bilder: ['/images/referenzen/ref-016/ref-016-1.avif'],
    standort: 'Ostbayern',
    flaeche: '5.500 m²',
  },
  {
    id: 'ref-017',
    projektName: 'Gastronomie HACCP',
    firma: 'Traditionsgaststätte',
    jahr: 2022,
    leistungen: ['unterhaltsreinigung', 'sonderreinigung'],
    branche: 'gastronomie-hotel',
    kurzbeschreibung: 'HACCP-konforme Gastroreinigung',
    beschreibung: 'Tägliche Reinigung von Gastraum, Küche und Sanitäranlagen. Strenge Einhaltung der Lebensmittelhygiene-Vorschriften.',
    bilder: ['/images/referenzen/ref-017/ref-017-1.avif'],
    standort: 'Niederbayern',
    flaeche: '420 m²',
  },
  {
    id: 'ref-018',
    projektName: 'Business-Hotel Tagungen',
    firma: 'Tagungshotel',
    jahr: 2022,
    leistungen: ['unterhaltsreinigung', 'fensterreinigung', 'sonderreinigung'],
    branche: 'gastronomie-hotel',
    kurzbeschreibung: 'Business-Hotel mit Konferenzbereich',
    beschreibung: 'Reinigung von 120 Zimmern, 5 Konferenzräumen und dem Restaurantbereich. Flexible Einsatzzeiten bei Veranstaltungen.',
    bilder: ['/images/referenzen/ref-018/ref-018-1.avif'],
    standort: 'Oberbayern',
    flaeche: '6.200 m²',
  },

  // ==================== BILDUNG & SCHULEN ====================
  {
    id: 'ref-019',
    projektName: 'Gymnasium 40 Klassen',
    firma: 'Weiterführende Schule',
    jahr: 2022,
    leistungen: ['unterhaltsreinigung', 'fensterreinigung'],
    branche: 'bildung-schulen',
    kurzbeschreibung: 'Schulreinigung mit 40 Klassenzimmern',
    beschreibung: 'Tägliche Reinigung aller Klassenzimmer, Fachräume, Turnhalle und Sanitäranlagen. Ferienreinigung und Grundreinigung.',
    bilder: ['/images/referenzen/ref-019/ref-019-1.avif'],
    standort: 'Regensburg',
    flaeche: '7.500 m²',
  },
  {
    id: 'ref-020',
    projektName: 'Kindertagesstätte',
    firma: 'Kinderbetreuungseinrichtung',
    jahr: 2022,
    leistungen: ['unterhaltsreinigung', 'sonderreinigung'],
    branche: 'bildung-schulen',
    kurzbeschreibung: 'Kindgerechte Reinigung mit Hygienefokus',
    beschreibung: 'Tägliche Reinigung mit kindersicheren, allergikerfreundlichen Reinigungsmitteln. Besonderer Fokus auf Hygiene im Sanitär- und Essbereich.',
    bilder: ['/images/referenzen/ref-020/ref-020-1.avif'],
    standort: 'Ingolstadt',
    flaeche: '680 m²',
  },
  {
    id: 'ref-021',
    projektName: 'Hochschule Campus',
    firma: 'Bildungseinrichtung',
    jahr: 2021,
    leistungen: ['unterhaltsreinigung', 'fensterreinigung', 'aussenanlagenpflege'],
    branche: 'bildung-schulen',
    kurzbeschreibung: 'Universitätsgebäude und Außenanlagen',
    beschreibung: 'Reinigung von Hörsälen, Seminarräumen, Bibliothek, Mensa und Verwaltungsgebäuden. Pflege der Campus-Außenanlagen.',
    bilder: ['/images/referenzen/ref-021/ref-021-1.avif'],
    standort: 'Freising',
    flaeche: '15.000 m²',
  },

  // ==================== FITNESS & SPORT ====================
  {
    id: 'ref-022',
    projektName: 'Fitness-Center XXL',
    firma: 'Fitnessstudio-Kette',
    jahr: 2021,
    leistungen: ['unterhaltsreinigung', 'sonderreinigung'],
    branche: 'fitness-sport',
    kurzbeschreibung: '24h Fitnessstudio Reinigung',
    beschreibung: 'Tägliche Reinigung und Desinfektion aller Trainingsgeräte, Umkleiden, Duschen und Wellness-Bereich. Flexible Einsatzzeiten.',
    bilder: ['/images/referenzen/ref-022/ref-022-1.avif'],
    standort: 'Erding',
    flaeche: '2.800 m²',
  },
  {
    id: 'ref-023',
    projektName: 'Schwimmbad Kommunal',
    firma: 'Kommunales Schwimmbad',
    jahr: 2021,
    leistungen: ['unterhaltsreinigung', 'sonderreinigung', 'fensterreinigung'],
    branche: 'fitness-sport',
    kurzbeschreibung: 'Schwimmbad und Wellnessbereich',
    beschreibung: 'Tägliche Reinigung aller Nassbereiche, Umkleiden, Saunalandschaft und Foyer. Spezielle Reinigungsmittel für Schwimmbadbereich.',
    bilder: ['/images/referenzen/ref-023/ref-023-1.avif'],
    standort: 'Straubing',
    flaeche: '4.500 m²',
  },
  {
    id: 'ref-024',
    projektName: 'Tennis-Center',
    firma: 'Tennisclub',
    jahr: 2021,
    leistungen: ['unterhaltsreinigung', 'fensterreinigung'],
    branche: 'fitness-sport',
    kurzbeschreibung: 'Indoor-Tennishalle und Clubhaus',
    beschreibung: 'Reinigung der 6 Hallenplätze, Umkleiden, Gastronomiebereich und Clubräume. Regelmäßige Grundreinigung der Hallenböden.',
    bilder: ['/images/referenzen/ref-024/ref-024-1.avif'],
    standort: 'Passau',
    flaeche: '3.200 m²',
  },

  // ==================== LOGISTIK & LAGER ====================
  {
    id: 'ref-025',
    projektName: 'Logistikzentrum Nord',
    firma: 'Logistikdienstleister',
    jahr: 2021,
    leistungen: ['hallenreinigung', 'industriereinigung'],
    branche: 'logistik-lager',
    kurzbeschreibung: 'Großflächige Hallenreinigung',
    beschreibung: 'Tägliche maschinelle Reinigung der Logistikflächen. Reinigung von Verladerampen, Sozialräumen und Bürobereichen.',
    bilder: ['/images/referenzen/ref-025/ref-025-1.avif'],
    standort: 'Landshut',
    flaeche: '35.000 m²',
  },
  {
    id: 'ref-026',
    projektName: 'Speditionszentrum',
    firma: 'Speditionsunternehmen',
    jahr: 2020,
    leistungen: ['hallenreinigung', 'aussenanlagenpflege'],
    branche: 'logistik-lager',
    kurzbeschreibung: 'Umschlagshalle und Außenflächen',
    beschreibung: 'Reinigung der Umschlagshalle, Bürogebäude und gepflasterten Außenflächen. Winterdienst auf dem Betriebsgelände.',
    bilder: ['/images/referenzen/ref-026/ref-026-1.avif'],
    standort: 'München',
    flaeche: '18.000 m²',
  },
  {
    id: 'ref-027',
    projektName: 'Kühllogistik',
    firma: 'Kühllogistik-Unternehmen',
    jahr: 2020,
    leistungen: ['industriereinigung', 'sonderreinigung'],
    branche: 'logistik-lager',
    kurzbeschreibung: 'Kühllager und Frischelogistik',
    beschreibung: 'Spezialreinigung in Kühlräumen unter Einhaltung der Kühlkette. HACCP-konforme Hygienereinigung.',
    bilder: ['/images/referenzen/ref-027/ref-027-1.avif'],
    standort: 'Regensburg',
    flaeche: '8.500 m²',
  },

  // ==================== WOHNUNGSWIRTSCHAFT ====================
  {
    id: 'ref-028',
    projektName: 'Wohnanlage Süd',
    firma: 'Kommunale Wohnungsbaugesellschaft',
    jahr: 2020,
    leistungen: ['unterhaltsreinigung', 'fensterreinigung', 'winterdienst'],
    branche: 'wohnungswirtschaft',
    kurzbeschreibung: '12 Mehrfamilienhäuser mit 240 Einheiten',
    beschreibung: 'Wöchentliche Treppenhausreinigung, Glasreinigung und Winterdienst für große Wohnanlage. Zuverlässiger Service seit 2024.',
    bilder: ['/images/referenzen/ref-028/ref-028-1.avif'],
    standort: 'Ingolstadt',
    flaeche: '8.400 m²',
  },
  {
    id: 'ref-029',
    projektName: 'Eigentümergemeinschaft',
    firma: 'Wohnungseigentümergemeinschaft',
    jahr: 2020,
    leistungen: ['unterhaltsreinigung', 'aussenanlagenpflege', 'winterdienst'],
    branche: 'wohnungswirtschaft',
    kurzbeschreibung: 'Luxus-Wohnanlage mit Tiefgarage',
    beschreibung: 'Hochwertige Treppenhausreinigung, Tiefgaragenreinigung und Gartenpflege. Monatliche Fensterreinigung im Eingangsbereich.',
    bilder: ['/images/referenzen/ref-029/ref-029-1.avif'],
    standort: 'Freising',
    flaeche: '2.800 m²',
  },
  {
    id: 'ref-030',
    projektName: 'Hausverwaltung Portfolio',
    firma: 'Hausverwaltung',
    jahr: 2020,
    leistungen: ['unterhaltsreinigung', 'fensterreinigung', 'hausmeisterservice'],
    branche: 'wohnungswirtschaft',
    kurzbeschreibung: '25 Objekte unter einer Verwaltung',
    beschreibung: 'Komplettbetreuung von 25 Wohnobjekten mit Treppenhausreinigung, Glasreinigung und Hausmeisterservice aus einer Hand.',
    bilder: ['/images/referenzen/ref-030/ref-030-1.avif'],
    standort: 'Erding',
    flaeche: '15.000 m²',
  },

  // ==================== ÖFFENTLICHE EINRICHTUNGEN ====================
  {
    id: 'ref-031',
    projektName: 'Historisches Rathaus',
    firma: 'Kommunale Verwaltung',
    jahr: 2019,
    leistungen: ['unterhaltsreinigung', 'fensterreinigung', 'sonderreinigung'],
    branche: 'oeffentliche-einrichtungen',
    kurzbeschreibung: 'Historisches Rathaus mit Bürgerbüro',
    beschreibung: 'Tägliche Reinigung des historischen Rathauses mit besonderer Sorgfalt für denkmalgeschützte Bereiche. Bürgerbüro und Verwaltungsräume.',
    bilder: ['/images/referenzen/ref-031/ref-031-1.avif'],
    standort: 'Straubing',
    flaeche: '4.200 m²',
  },
  {
    id: 'ref-032',
    projektName: 'Öffentliche Bibliothek',
    firma: 'Städtische Bibliothek',
    jahr: 2019,
    leistungen: ['unterhaltsreinigung', 'fensterreinigung'],
    branche: 'oeffentliche-einrichtungen',
    kurzbeschreibung: 'Öffentliche Bibliothek mit Lesebereich',
    beschreibung: 'Tägliche Reinigung der Lese- und Arbeitsbereiche, Regalgänge und Veranstaltungsräume. Staubfreie Umgebung für Bücher.',
    bilder: ['/images/referenzen/ref-032/ref-032-1.avif'],
    standort: 'Passau',
    flaeche: '1.800 m²',
  },
  {
    id: 'ref-033',
    projektName: 'Feuerwache Hauptwache',
    firma: 'Freiwillige Feuerwehr',
    jahr: 2019,
    leistungen: ['unterhaltsreinigung', 'hallenreinigung'],
    branche: 'oeffentliche-einrichtungen',
    kurzbeschreibung: 'Feuerwache mit Fahrzeughalle',
    beschreibung: 'Reinigung der Fahrzeughalle, Sozialräume, Schulungsräume und Verwaltung. Besondere Anforderungen an Einsatzbereitschaft.',
    bilder: ['/images/referenzen/ref-033/ref-033-1.avif'],
    standort: 'Landshut',
    flaeche: '2.400 m²',
  },

  // ==================== BANKEN & VERSICHERUNGEN ====================
  {
    id: 'ref-034',
    projektName: 'Bankzentrale mit Filialen',
    firma: 'Regionale Sparkasse',
    jahr: 2019,
    leistungen: ['unterhaltsreinigung', 'fensterreinigung'],
    branche: 'banken-versicherungen',
    kurzbeschreibung: 'Hauptverwaltung und 5 Filialen',
    beschreibung: 'Diskrete Reinigung der Hauptverwaltung und Filialen. Sicherheitsüberprüftes Personal für Schalterhallen und Tresorräume.',
    bilder: ['/images/referenzen/ref-034/ref-034-1.avif'],
    standort: 'München',
    flaeche: '6.500 m²',
  },
  {
    id: 'ref-035',
    projektName: 'Versicherungsagentur',
    firma: 'Versicherungsagentur',
    jahr: 2019,
    leistungen: ['bueroreinigung', 'fensterreinigung'],
    branche: 'banken-versicherungen',
    kurzbeschreibung: 'Repräsentative Agenturräume',
    beschreibung: 'Tägliche Reinigung der Kundenberatungsräume und Büros. Hochwertige Ausstattung erfordert besondere Sorgfalt.',
    bilder: ['/images/referenzen/ref-035/ref-035-1.avif'],
    standort: 'Regensburg',
    flaeche: '380 m²',
  },
  {
    id: 'ref-036',
    projektName: 'Genossenschaftsbank',
    firma: 'VR-Bank',
    jahr: 2018,
    leistungen: ['unterhaltsreinigung', 'fensterreinigung', 'sonderreinigung'],
    branche: 'banken-versicherungen',
    kurzbeschreibung: 'Genossenschaftsbank mit 3 Standorten',
    beschreibung: 'Reinigung der Hauptstelle und zwei Filialen. Diskretion und Zuverlässigkeit sind oberstes Gebot.',
    bilder: ['/images/referenzen/ref-036/ref-036-1.avif'],
    standort: 'Ingolstadt',
    flaeche: '2.100 m²',
  },

  // ==================== AUTOMOTIVE ====================
  {
    id: 'ref-037',
    projektName: 'Premium Autohaus',
    firma: 'Automobilhändler',
    jahr: 2018,
    leistungen: ['unterhaltsreinigung', 'fensterreinigung', 'industriereinigung'],
    branche: 'automotive',
    kurzbeschreibung: 'Premium Showroom und Werkstatt',
    beschreibung: 'Tägliche Reinigung des hochwertigen Showrooms, Kundenbereich, Werkstatt und Außenflächen. Fahrzeugpräsentation muss stets perfekt sein.',
    bilder: ['/images/referenzen/ref-037/ref-037-1.avif'],
    standort: 'Freising',
    flaeche: '4.200 m²',
  },
  {
    id: 'ref-038',
    projektName: 'KFZ-Werkstatt',
    firma: 'Freie Werkstatt',
    jahr: 2018,
    leistungen: ['industriereinigung', 'unterhaltsreinigung'],
    branche: 'automotive',
    kurzbeschreibung: 'Freie Werkstatt mit TÜV-Service',
    beschreibung: 'Wöchentliche Werkstattreinigung mit Ölfleck-Entfernung. Kundenbereich und Sanitäranlagen täglich.',
    bilder: ['/images/referenzen/ref-038/ref-038-1.avif'],
    standort: 'Erding',
    flaeche: '1.200 m²',
  },
  {
    id: 'ref-039',
    projektName: 'Autohaus Niederlassung',
    firma: 'Automobilniederlassung',
    jahr: 2018,
    leistungen: ['unterhaltsreinigung', 'fensterreinigung', 'aussenanlagenpflege'],
    branche: 'automotive',
    kurzbeschreibung: 'Niederlassung mit großem Außengelände',
    beschreibung: 'Showroom-Reinigung nach höchsten Standards. Glasflächen, Ausstellungsfahrzeuge, Werkstatt und 8.000m² Außenfläche.',
    bilder: ['/images/referenzen/ref-039/ref-039-1.avif'],
    standort: 'Straubing',
    flaeche: '5.800 m²',
  },

  // ==================== SPEZIAL / FACILITY ====================
  {
    id: 'ref-040',
    projektName: 'Bauendreinigung Wohnbau',
    firma: 'Bauträger',
    jahr: 2018,
    leistungen: ['baureinigung', 'fensterreinigung', 'sonderreinigung'],
    branche: 'buero-verwaltung',
    kurzbeschreibung: 'Bauendreinigung 48 Wohneinheiten',
    beschreibung: 'Komplette Bauendreinigung eines Neubauprojekts. Feinreinigung aller Wohnungen, Treppenhäuser und Gemeinschaftsflächen.',
    bilder: ['/images/referenzen/ref-040/ref-040-1.avif'],
    standort: 'Passau',
    flaeche: '4.800 m²',
  },
  {
    id: 'ref-041',
    projektName: 'Fassadenreinigung Hochhaus',
    firma: 'Bürogebäude 12 Etagen',
    jahr: 2017,
    leistungen: ['fassadenreinigung', 'fensterreinigung'],
    branche: 'buero-verwaltung',
    kurzbeschreibung: '12-stöckiges Bürogebäude',
    beschreibung: 'Jährliche Fassadenreinigung mittels Hubarbeitsbühne. Komplette Glasfassade und Betonelemente.',
    bilder: ['/images/referenzen/ref-041/ref-041-1.avif'],
    standort: 'Landshut',
    flaeche: '3.200 m²',
  },
  {
    id: 'ref-042',
    projektName: 'Tiefgarage Zentrum',
    firma: 'Parkhausbetreiber',
    jahr: 2017,
    leistungen: ['tiefgaragenreinigung', 'parkplatzreinigung'],
    branche: 'wohnungswirtschaft',
    kurzbeschreibung: 'Öffentliche Tiefgarage 450 Stellplätze',
    beschreibung: 'Monatliche maschinelle Reinigung der Tiefgarage. Ölfleck-Entfernung und Beschriftung nachziehen.',
    bilder: ['/images/referenzen/ref-042/ref-042-1.avif'],
    standort: 'München',
    flaeche: '12.000 m²',
  },
  {
    id: 'ref-043',
    projektName: 'Winterdienst Gewerbegebiet',
    firma: 'Gewerbepark',
    jahr: 2017,
    leistungen: ['winterdienst', 'aussenanlagenpflege'],
    branche: 'industrie-produktion',
    kurzbeschreibung: 'Winterdienst für 15 Gewerbebetriebe',
    beschreibung: '24/7 Winterdienst-Bereitschaft für das komplette Gewerbegebiet. Räumen und Streuen aller Zufahrten und Parkplätze.',
    bilder: ['/images/referenzen/ref-043/ref-043-1.avif'],
    standort: 'Regensburg',
    flaeche: '45.000 m²',
  },
  {
    id: 'ref-044',
    projektName: 'Hausmeisterservice Full-Service',
    firma: 'Bürozentrum',
    jahr: 2017,
    leistungen: ['hausmeisterservice', 'unterhaltsreinigung', 'winterdienst'],
    branche: 'buero-verwaltung',
    kurzbeschreibung: 'Full-Service Gebäudebetreuung',
    beschreibung: 'Komplette Gebäudebetreuung inkl. Hausmeisterservice, Reinigung und Winterdienst. Ein Ansprechpartner für alles.',
    bilder: ['/images/referenzen/ref-044/ref-044-1.avif'],
    standort: 'Ingolstadt',
    flaeche: '5.600 m²',
  },
  {
    id: 'ref-045',
    projektName: 'Graffiti-Entfernung',
    firma: 'Verkehrsunternehmen',
    jahr: 2017,
    leistungen: ['sonderreinigung', 'fassadenreinigung'],
    branche: 'oeffentliche-einrichtungen',
    kurzbeschreibung: 'Graffiti-Entfernung an Bahnhöfen',
    beschreibung: 'Schnelle Graffiti-Entfernung an Unterführungen und Bahnhofsgebäuden. Spezialverfahren ohne Oberflächenschäden.',
    bilder: ['/images/referenzen/ref-045/ref-045-1.avif'],
    standort: 'Freising',
    flaeche: '800 m²',
  },

  // ==================== WEITERE PROJEKTE ====================
  {
    id: 'ref-046',
    projektName: 'Seniorenzentrum',
    firma: 'Wohlfahrtsverband',
    jahr: 2016,
    leistungen: ['unterhaltsreinigung', 'sonderreinigung', 'fensterreinigung'],
    branche: 'gesundheitswesen',
    kurzbeschreibung: 'Pflegeheim mit 120 Plätzen',
    beschreibung: 'Tägliche Reinigung aller Bewohnerzimmer, Gemeinschaftsräume und Außenbereiche. Besondere Rücksichtnahme auf Bewohner.',
    bilder: ['/images/referenzen/ref-046/ref-046-1.avif'],
    standort: 'Erding',
    flaeche: '4.500 m²',
  },
  {
    id: 'ref-047',
    projektName: 'Yoga-Studio',
    firma: 'Yoga-Studio',
    jahr: 2016,
    leistungen: ['unterhaltsreinigung'],
    branche: 'fitness-sport',
    kurzbeschreibung: 'Hochwertiges Yoga-Studio',
    beschreibung: 'Tägliche Reinigung der Yogaräume mit hypoallergenen Reinigungsmitteln. Matten- und Hilfsmittel-Desinfektion.',
    bilder: ['/images/referenzen/ref-047/ref-047-1.avif'],
    standort: 'Straubing',
    flaeche: '320 m²',
  },
  {
    id: 'ref-048',
    projektName: 'Traditioneller Biergarten',
    firma: 'Gaststätte mit Biergarten',
    jahr: 2016,
    leistungen: ['unterhaltsreinigung', 'aussenanlagenpflege'],
    branche: 'gastronomie-hotel',
    kurzbeschreibung: 'Traditioneller Biergarten',
    beschreibung: 'Tägliche Reinigung von Gastraum und Küche. Wöchentliche Grundreinigung des Außenbereichs mit 400 Plätzen.',
    bilder: ['/images/referenzen/ref-048/ref-048-1.avif'],
    standort: 'Passau',
    flaeche: '1.800 m²',
  },
  {
    id: 'ref-049',
    projektName: 'Biomarkt mit Café',
    firma: 'Bio-Supermarkt',
    jahr: 2016,
    leistungen: ['unterhaltsreinigung', 'fensterreinigung'],
    branche: 'einzelhandel',
    kurzbeschreibung: 'Biomarkt mit Café',
    beschreibung: 'Tägliche Reinigung von Verkaufsfläche und Bio-Café. Verwendung ökologischer Reinigungsmittel entsprechend dem Geschäftskonzept.',
    bilder: ['/images/referenzen/ref-049/ref-049-1.avif'],
    standort: 'Landshut',
    flaeche: '650 m²',
  },
  {
    id: 'ref-050',
    projektName: 'Rechenzentrum',
    firma: 'Rechenzentrum-Betreiber',
    jahr: 2016,
    leistungen: ['sonderreinigung', 'unterhaltsreinigung'],
    branche: 'buero-verwaltung',
    kurzbeschreibung: 'Hochsicherheits-Rechenzentrum',
    beschreibung: 'Spezialreinigung in klimatisierten Serverräumen. Sicherheitsüberprüftes Personal, staubfreie Reinigung.',
    bilder: ['/images/referenzen/ref-050/ref-050-1.avif'],
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
