// Blog/Neuigkeiten Data - Modular & erweiterbar
// Neue Beiträge einfach hier hinzufügen

export interface BlogPost {
  id: string
  slug: string
  title: string
  excerpt: string
  content: string // HTML content
  image: string
  category: 'news' | 'tipps' | 'projekt' | 'team'
  author: string
  date: string // ISO format
  readTime: number // minutes
  featured?: boolean
}

export const blogCategories = {
  news: { label: 'Neuigkeiten', color: '#109387' },
  tipps: { label: 'Reinigungstipps', color: '#012956' },
  projekt: { label: 'Projekte', color: '#0d7d72' },
  team: { label: 'Team & Karriere', color: '#01203d' },
}

export const blogPosts: BlogPost[] = [
  {
    id: '1',
    slug: 'fimi-erhaelt-iso-14001-zertifizierung',
    title: 'FIMI erhält ISO 14001 Umweltzertifizierung',
    excerpt: 'Wir freuen uns, unsere erfolgreiche ISO 14001 Zertifizierung bekannt zu geben. Nachhaltigkeit ist für uns mehr als ein Trend.',
    content: `
      <p>Die FIMI Gebäudereinigung hat erfolgreich die ISO 14001 Zertifizierung für Umweltmanagement erhalten. Diese Auszeichnung bestätigt unser Engagement für umweltfreundliche Reinigungspraktiken.</p>
      <h3>Was bedeutet ISO 14001?</h3>
      <p>Die ISO 14001 ist ein international anerkannter Standard für Umweltmanagementsysteme. Sie bescheinigt, dass ein Unternehmen systematisch daran arbeitet, seine Umweltauswirkungen zu minimieren.</p>
      <h3>Unsere Maßnahmen</h3>
      <ul>
        <li>Verwendung umweltfreundlicher Reinigungsmittel</li>
        <li>Optimierte Fahrtrouten zur CO2-Reduktion</li>
        <li>Schulung aller Mitarbeiter in nachhaltigen Praktiken</li>
        <li>Regelmäßige Überprüfung und Verbesserung unserer Prozesse</li>
      </ul>
    `,
    image: 'https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=800&auto=format&fit=crop',
    category: 'news',
    author: 'FIMI Team',
    date: '2024-11-15',
    readTime: 3,
    featured: true,
  },
  {
    id: '2',
    slug: '5-tipps-fuer-saubere-bueroflaechen',
    title: '5 Tipps für dauerhaft saubere Büroflächen',
    excerpt: 'Mit diesen einfachen Maßnahmen halten Sie Ihr Büro zwischen den professionellen Reinigungen sauber und hygienisch.',
    content: `
      <p>Ein sauberes Büro steigert nicht nur das Wohlbefinden, sondern auch die Produktivität Ihrer Mitarbeiter. Hier sind unsere Top-Tipps:</p>
      <h3>1. Tägliche Routine etablieren</h3>
      <p>Räumen Sie jeden Abend Ihren Schreibtisch auf. Entfernen Sie Tassen und Geschirr.</p>
      <h3>2. Müll richtig trennen</h3>
      <p>Stellen Sie ausreichend Mülleimer für Papier, Restmüll und Wertstoffe bereit.</p>
      <h3>3. Desinfektionstücher bereitstellen</h3>
      <p>Besonders für Telefone, Tastaturen und Türklinken - die größten Keimschleudern im Büro.</p>
      <h3>4. Pflanzen pflegen</h3>
      <p>Zimmerpflanzen verbessern das Raumklima und sehen gepflegt aus.</p>
      <h3>5. Regelmäßige Profi-Reinigung</h3>
      <p>Mindestens wöchentlich sollte eine professionelle Grundreinigung erfolgen.</p>
    `,
    image: 'https://images.unsplash.com/photo-1497366811353-6870744d04b2?q=80&w=800&auto=format&fit=crop',
    category: 'tipps',
    author: 'FIMI Team',
    date: '2024-11-10',
    readTime: 4,
  },
  {
    id: '3',
    slug: 'neues-grossprojekt-in-muenchen',
    title: 'Neues Großprojekt: Bürokomplex in München',
    excerpt: 'FIMI übernimmt die Gebäudereinigung für einen modernen Bürokomplex mit über 15.000 m² Fläche in München.',
    content: `
      <p>Wir freuen uns, ein neues Großprojekt in München bekannt zu geben. Ab Januar 2025 übernehmen wir die komplette Gebäudereinigung eines modernen Bürokomplexes im Werksviertel.</p>
      <h3>Das Projekt im Überblick</h3>
      <ul>
        <li>15.000 m² Bürofläche</li>
        <li>6 Etagen + Tiefgarage</li>
        <li>Tägliche Unterhaltsreinigung</li>
        <li>Wöchentliche Glasreinigung</li>
        <li>Monatliche Grundreinigung</li>
      </ul>
      <h3>Unser Konzept</h3>
      <p>Für dieses Projekt setzen wir ein 12-köpfiges Team ein, das speziell für moderne Büroumgebungen geschult wurde. Die Reinigung erfolgt außerhalb der Kernarbeitszeiten.</p>
    `,
    image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=800&auto=format&fit=crop',
    category: 'projekt',
    author: 'FIMI Team',
    date: '2024-11-05',
    readTime: 3,
  },
  {
    id: '4',
    slug: 'winterdienst-saison-startet',
    title: 'Winterdienst-Saison 2024/25 startet',
    excerpt: 'Unsere Winterdienst-Teams sind einsatzbereit. Sichern Sie sich jetzt noch freie Kapazitäten für die kommende Saison.',
    content: `
      <p>Der Winter steht vor der Tür und unsere Winterdienst-Teams sind bereit. Mit modernster Ausrüstung und erfahrenen Mitarbeitern sorgen wir für sichere Wege und Zufahrten.</p>
      <h3>Unser Winterdienst-Angebot</h3>
      <ul>
        <li>Räumdienst ab 3:00 Uhr morgens</li>
        <li>Streuen mit umweltfreundlichem Granulat</li>
        <li>24/7 Bereitschaft bei Schneefall</li>
        <li>Dokumentation für Ihre Versicherung</li>
      </ul>
      <h3>Jetzt anfragen</h3>
      <p>Die Nachfrage ist hoch - sichern Sie sich jetzt noch einen Platz in unserem Winterdienst-Programm!</p>
    `,
    image: 'https://images.unsplash.com/photo-1491002052546-bf38f186af56?q=80&w=800&auto=format&fit=crop',
    category: 'news',
    author: 'FIMI Team',
    date: '2024-10-28',
    readTime: 2,
  },
  {
    id: '5',
    slug: 'team-verstärkung-gesucht',
    title: 'Wir suchen Verstärkung: Reinigungskräfte (m/w/d)',
    excerpt: 'Aufgrund unseres Wachstums suchen wir motivierte Reinigungskräfte für verschiedene Standorte in Bayern.',
    content: `
      <p>FIMI wächst und wir suchen Sie! Werden Sie Teil unseres Teams und arbeiten Sie bei einem der führenden Gebäudereinigungsunternehmen in Bayern.</p>
      <h3>Das bieten wir</h3>
      <ul>
        <li>Übertarifliche Bezahlung</li>
        <li>Geregelte Arbeitszeiten</li>
        <li>Moderne Arbeitsmittel</li>
        <li>Weiterbildungsmöglichkeiten</li>
        <li>Unbefristeter Arbeitsvertrag</li>
      </ul>
      <h3>Standorte</h3>
      <p>Wir suchen Verstärkung in Landshut, München und Regensburg. Sowohl Vollzeit als auch Teilzeit möglich.</p>
      <h3>Interesse?</h3>
      <p>Bewerben Sie sich jetzt per E-Mail an karriere@fimi-service.de oder rufen Sie uns an!</p>
    `,
    image: 'https://images.unsplash.com/photo-1521737711867-e3b97375f902?q=80&w=800&auto=format&fit=crop',
    category: 'team',
    author: 'FIMI Team',
    date: '2024-10-20',
    readTime: 3,
  },
]

// Helper functions
export function getFeaturedPost(): BlogPost | undefined {
  return blogPosts.find(post => post.featured)
}

export function getRecentPosts(count: number = 3): BlogPost[] {
  return [...blogPosts]
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
    .slice(0, count)
}

export function getPostsByCategory(category: BlogPost['category']): BlogPost[] {
  return blogPosts.filter(post => post.category === category)
}

export function getPostBySlug(slug: string): BlogPost | undefined {
  return blogPosts.find(post => post.slug === slug)
}

export function formatDate(dateString: string): string {
  return new Date(dateString).toLocaleDateString('de-DE', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  })
}
