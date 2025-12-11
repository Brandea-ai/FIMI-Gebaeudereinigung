/**
 * FIMI Gebäudereinigung - Zentrale Konfiguration
 *
 * SINGLE SOURCE OF TRUTH für alle Kontaktdaten
 * Alle Komponenten sollen diese Config importieren
 *
 * @see P0-01 NAP konsistent
 */

export const siteConfig = {
  // Firmenname
  company: {
    name: 'FIMI Gebäudereinigung GmbH',
    shortName: 'FIMI',
    legalName: 'FIMI Gebäudereinigung GmbH',
    slogan: 'Professionelle Gebäudereinigung in Bayern',
  },

  // Kontaktdaten (NAP = Name, Address, Phone)
  contact: {
    // Zentrale
    phone: {
      display: '0871 2066936 0',
      href: 'tel:+4987120669360',
      international: '+49 871 2066936 0',
    },
    email: {
      display: 'info@fimi-gebaeudereinigung.de',
      href: 'mailto:info@fimi-gebaeudereinigung.de',
    },
    // Team-Durchwahlen
    team: {
      zentrale: { name: 'Zentrale', email: 'info@fimi-gebaeudereinigung.de', phone: '0871 2066936 0' },
      geschaeftsfuehrung: [
        { name: 'Donald Tzoutzis', position: 'Geschäftsführer', email: 'd.tzoutzis@fimi-gebaeudereinigung.de', phone: '0871 2066936 1' },
        { name: 'Ergkest Qirjaj', position: 'Geschäftsführer', email: 'e.qirjaj@fimi-gebaeudereinigung.de', phone: '0871 2066936 2' },
      ],
      officeManagement: { name: 'Fatima Krasniqi', position: 'Office Management', email: 'info@fimi-gebaeudereinigung.de', phone: '0871 2066936 0' },
      vertrieb: { name: 'Markus Lehner', position: 'Vertriebsleiter', email: 'angebot@fimi-gebaeudereinigung.de', phone: '0871 2066936 3' },
      kundenbetreuung: { name: 'Elena Popescu', position: 'Kundenbetreuung', email: 'kontakt@fimi-gebaeudereinigung.de', phone: '0871 2066936 4' },
      buchhaltung: { name: 'Thomas Berger', position: 'Buchhaltung', email: 'buchhaltung@fimi-gebaeudereinigung.de', phone: '0871 2066936 5' },
      personal: { name: 'Svetlana Morozova', position: 'Personalwesen', email: 'bewerbung@fimi-gebaeudereinigung.de', phone: '0871 2066936 6' },
      qualitaet: { name: 'Claudia Wimmer', position: 'Qualitätsmanagement', email: 'datenschutz@fimi-gebaeudereinigung.de', phone: '0871 2066936 7' },
      objektleitung: { email: 'partner@fimi-gebaeudereinigung.de', phone: '0871 2066936 8' },
    },
    address: {
      street: 'Kellerstr. 39',
      zip: '84036',
      city: 'Landshut',
      region: 'Bayern',
      country: 'Deutschland',
      countryCode: 'DE',
      full: 'Kellerstr. 39, 84036 Landshut',
      multiline: 'Kellerstr. 39\n84036 Landshut',
    },
    geo: {
      latitude: 48.5369,
      longitude: 12.1522,
    },
  },

  // Öffnungszeiten
  hours: {
    display: 'Mo-Fr: 08:00-18:00',
    days: 'Monday-Friday',
    open: '08:00',
    close: '18:00',
    emergency: '2h Reaktionszeit',
  },

  // URLs
  urls: {
    website: 'https://fimi-gebaeudereinigung.de',
    mapsDirection: 'https://www.google.com/maps/dir/?api=1&destination=Kellerstr.+39,+84036+Landshut',
    mapsEmbed: 'https://maps.google.com/maps?q=Kellerstra%C3%9Fe+39,+84036+Landshut,+Germany&t=&z=15&ie=UTF8&iwloc=&output=embed',
  },

  // Registerdaten
  legal: {
    registergericht: 'Amtsgericht Landshut',
    handelsregister: 'In Bearbeitung',
    ustId: 'DE347549925',
    geschaeftsfuehrer: 'Donald Tzoutzis & Ergkest Qirjaj',
  },

  // Servicegebiet
  serviceAreas: [
    'Landshut',
    'München',
    'Regensburg',
    'Ingolstadt',
    'Freising',
    'Erding',
    'Straubing',
    'Passau',
  ],

  // Statistiken
  stats: {
    yearsExperience: '8+',
    customerProjects: '120+',
    serviceLocations: 8,
    services: 18,
    industries: 12,
  },
} as const

// Type Export
export type SiteConfig = typeof siteConfig
