// Blog/Neuigkeiten Data - Dummy-Artikel als Platzhalter
// Warten auf SEO-Content vom User

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
  sources?: string[] // Quellen-URLs
}

export const blogCategories = {
  news: { label: 'Neuigkeiten', color: '#109387' },
  tipps: { label: 'Reinigungstipps', color: '#012956' },
  projekt: { label: 'Projekte', color: '#0d7d72' },
  team: { label: 'Team & Karriere', color: '#01203d' },
}

export const blogPosts: BlogPost[] = [
  // NEWS (3)
  {
    id: '1',
    slug: 'tariflohn-gebaeudereinigung-2025-2026',
    title: 'Tarifabschluss 2025/2026: Deutliche Lohnsteigerungen in der Gebäudereinigung',
    excerpt: 'Nach intensiven Verhandlungen haben sich die Tarifparteien auf einen neuen Lohntarifvertrag für die rund 700.000 Beschäftigten in der Gebäudereinigung geeinigt. Die Vereinbarung sieht eine stufenweise Erhöhung der Löhne in den Jahren 2025 und 2026 vor, was die Attraktivität der Branche stärkt, aber auch Auswirkungen auf die Dienstleistungspreise haben wird.',
    content: `
      <!-- Key Facts Box -->
      <div style="background: linear-gradient(135deg, #012956 0%, #01203d 100%); border-radius: 12px; padding: 28px 32px; margin-bottom: 40px;">
        <p style="color: #109387; font-size: 12px; font-weight: 700; text-transform: uppercase; letter-spacing: 1px; margin-bottom: 16px;">Das Wichtigste auf einen Blick</p>
        <div style="display: grid; grid-template-columns: repeat(3, 1fr); gap: 24px;">
          <div style="text-align: center;">
            <p style="color: white; font-size: 32px; font-weight: 800; margin-bottom: 4px;">14,25 €</p>
            <p style="color: rgba(255,255,255,0.6); font-size: 13px; font-weight: 600;">Mindestlohn LG 1 (2025)</p>
          </div>
          <div style="text-align: center;">
            <p style="color: white; font-size: 32px; font-weight: 800; margin-bottom: 4px;">+11 %</p>
            <p style="color: rgba(255,255,255,0.6); font-size: 13px; font-weight: 600;">Steigerung bis 2026</p>
          </div>
          <div style="text-align: center;">
            <p style="color: white; font-size: 32px; font-weight: 800; margin-bottom: 4px;">700.000</p>
            <p style="color: rgba(255,255,255,0.6); font-size: 13px; font-weight: 600;">Beschäftigte profitieren</p>
          </div>
        </div>
      </div>

      <p>Die Gebäudereinigung, Deutschlands beschäftigungsstärkstes Handwerk, startet mit neuen finanziellen Rahmenbedingungen ins Jahr 2025. Der Ende 2024 zwischen dem <strong>Bundesinnungsverband des Gebäudereiniger-Handwerks (BIV)</strong> und der <strong>Industriegewerkschaft Bauen-Agrar-Umwelt (IG BAU)</strong> ausgehandelte Lohntarifvertrag ist in Kraft getreten und für allgemeinverbindlich erklärt worden.</p>

      <h3>Die neuen Tarife ab Januar 2025</h3>
      <p>Der Kernpunkt der Einigung ist die Anpassung des Branchenmindestlohns. Zum 1. Januar 2025 steigt der Lohn in der Einstiegs-Lohngruppe (LG 1), die für die klassische <a href="/leistungen/unterhaltsreinigung">Unterhaltsreinigung</a> maßgeblich ist, von 13,50 Euro auf <strong>14,25 Euro</strong> pro Stunde.</p>
      <p>Auch für qualifizierte Fachkräfte gibt es eine signifikante Erhöhung. In der Lohngruppe 6 (z.B. <a href="/leistungen/glasreinigung">Glas-</a> und <a href="/leistungen/fassadenreinigung">Fassadenreinigung</a>) steigt der Stundenlohn von 16,70 Euro auf <strong>17,65 Euro</strong>.</p>

      <!-- Bild mit Caption -->
      <figure style="margin: 40px 0;">
        <img src="/blog/artikel-1/content.avif" alt="Professionelle Reinigungskraft bei der Arbeit mit modernen Geräten" style="width: 100%; border-radius: 12px; box-shadow: 0 8px 30px rgba(0,0,0,0.12);" />
        <figcaption style="text-align: center; color: #6b7280; font-size: 14px; font-weight: 500; margin-top: 12px;">Professionelle Reinigung erfordert qualifiziertes Personal – faire Löhne sichern die Qualität.</figcaption>
      </figure>

      <h3>Ausblick auf 2026</h3>
      <p>Der Tarifvertrag sieht eine weitere Stufe der Erhöhung zum 1. Januar 2026 vor:</p>

      <!-- Tarif-Tabelle -->
      <div style="background: #f8f9fa; border-radius: 12px; padding: 24px; margin: 24px 0;">
        <table style="width: 100%; border-collapse: collapse;">
          <thead>
            <tr style="border-bottom: 2px solid #e5e7eb;">
              <th style="text-align: left; padding: 12px 16px; color: #012956; font-weight: 700;">Lohngruppe</th>
              <th style="text-align: center; padding: 12px 16px; color: #012956; font-weight: 700;">2024</th>
              <th style="text-align: center; padding: 12px 16px; color: #012956; font-weight: 700;">2025</th>
              <th style="text-align: center; padding: 12px 16px; color: #012956; font-weight: 700;">2026</th>
            </tr>
          </thead>
          <tbody>
            <tr style="border-bottom: 1px solid #e5e7eb;">
              <td style="padding: 12px 16px; font-weight: 600;">LG 1 (Unterhaltsreinigung)</td>
              <td style="text-align: center; padding: 12px 16px; color: #6b7280;">13,50 €</td>
              <td style="text-align: center; padding: 12px 16px; color: #109387; font-weight: 700;">14,25 €</td>
              <td style="text-align: center; padding: 12px 16px; color: #109387; font-weight: 700;">15,00 €</td>
            </tr>
            <tr>
              <td style="padding: 12px 16px; font-weight: 600;">LG 6 (Glas-/Fassadenreinigung)</td>
              <td style="text-align: center; padding: 12px 16px; color: #6b7280;">16,70 €</td>
              <td style="text-align: center; padding: 12px 16px; color: #109387; font-weight: 700;">17,65 €</td>
              <td style="text-align: center; padding: 12px 16px; color: #109387; font-weight: 700;">18,40 €</td>
            </tr>
          </tbody>
        </table>
      </div>

      <p>Über die gesamte Laufzeit bedeutet dies eine <strong>Lohnsteigerung von über 11 Prozent</strong> für Einstiegskräfte.</p>

      <h3>Stärkung der Ausbildung</h3>
      <p>Um dem Fachkräftemangel entgegenzuwirken, wurden auch die Ausbildungsvergütungen ab Januar 2025 deutlich angehoben:</p>

      <!-- Ausbildungsvergütung -->
      <div style="display: grid; grid-template-columns: repeat(3, 1fr); gap: 16px; margin: 24px 0;">
        <div style="background: #f8f9fa; border-radius: 12px; padding: 20px; text-align: center; border-left: 4px solid #109387;">
          <p style="color: #6b7280; font-size: 13px; font-weight: 600; margin-bottom: 8px;">1. Lehrjahr</p>
          <p style="color: #012956; font-size: 24px; font-weight: 800;">1.000 €</p>
          <p style="color: #109387; font-size: 12px; font-weight: 600;">+100 € vs. 2024</p>
        </div>
        <div style="background: #f8f9fa; border-radius: 12px; padding: 20px; text-align: center; border-left: 4px solid #109387;">
          <p style="color: #6b7280; font-size: 13px; font-weight: 600; margin-bottom: 8px;">2. Lehrjahr</p>
          <p style="color: #012956; font-size: 24px; font-weight: 800;">1.150 €</p>
          <p style="color: #109387; font-size: 12px; font-weight: 600;">+100 € vs. 2024</p>
        </div>
        <div style="background: #f8f9fa; border-radius: 12px; padding: 20px; text-align: center; border-left: 4px solid #109387;">
          <p style="color: #6b7280; font-size: 13px; font-weight: 600; margin-bottom: 8px;">3. Lehrjahr</p>
          <p style="color: #012956; font-size: 24px; font-weight: 800;">1.300 €</p>
          <p style="color: #109387; font-size: 12px; font-weight: 600;">+100 € vs. 2024</p>
        </div>
      </div>

      <h3>Auswirkungen für Auftraggeber in Bayern</h3>
      <p>Für Unternehmen in Bayern, die Reinigungsdienstleistungen beauftragen, sind diese Entwicklungen relevant. Da die Gebäudereinigung sehr personalintensiv ist, werden sich die Tariferhöhungen in den Preisen der Dienstleister widerspiegeln.</p>
      <p>Gleichzeitig ist die Tarifeinigung ein wichtiges Signal für Qualität. Höhere Löhne steigern die Wertschätzung für die systemrelevante Arbeit und tragen dazu bei, qualifiziertes Personal zu halten. Dies sichert die Qualität der Reinigungsleistung für die Kunden.</p>

      <!-- FIMI Highlight Box -->
      <div style="background: linear-gradient(135deg, #109387 0%, #0d7d72 100%); border-radius: 12px; padding: 28px 32px; margin: 32px 0;">
        <p style="color: white; font-size: 18px; font-weight: 700; margin-bottom: 12px;">FIMI Gebäudereinigung begrüßt diese Entwicklung</p>
        <p style="color: rgba(255,255,255,0.9); font-size: 15px; line-height: 1.7;">Als verantwortungsvoller Arbeitgeber setzen wir auf tarifkonforme Bezahlung und gut geschultes Personal, um unseren Kunden in <a href="/kontakt" style="color: white; font-weight: 700; text-decoration: underline;">Landshut, München, Regensburg und Umgebung</a> stets höchste Qualität zu bieten. Wir stehen bereit, um mit Ihnen transparent über die notwendigen Anpassungen zu sprechen und die optimale Reinigungsstrategie für Ihr Objekt sicherzustellen.</p>
      </div>

      <h3>Weiterführende Informationen</h3>
      <ul>
        <li><a href="https://www.die-gebaeudedienstleister.de/tarifpolitik" target="_blank" rel="noopener noreferrer">BIV – Tarifpolitik und Tarifverträge</a> – Offizielle Informationen des Bundesinnungsverbandes zu den aktuellen Löhnen</li>
        <li><a href="https://igbau.de/Gebaeudereinigung.html" target="_blank" rel="noopener noreferrer">IG BAU Informationen zur Gebäudereinigung</a> – Perspektive der Gewerkschaft auf Arbeitsbedingungen und Tarife</li>
      </ul>
    `,
    image: '/blog/artikel-1/hero.avif',
    category: 'news',
    author: 'FIMI Team',
    date: '2025-01-15',
    readTime: 4,
    featured: true,
    sources: [
      'https://www.die-gebaeudedienstleister.de/tarifpolitik',
      'https://zvoove.de/wissen/blog/neuer-tarif-in-der-gebaeudereinigung'
    ]
  },
  {
    id: '2',
    slug: 'artikel-2',
    title: 'Artikel 2 - Platzhalter',
    excerpt: 'Kurzbeschreibung folgt.',
    content: '<p>Inhalt folgt.</p>',
    image: 'https://images.unsplash.com/photo-1521737711867-e3b97375f902?q=80&w=800&auto=format&fit=crop',
    category: 'news',
    author: 'FIMI Team',
    date: '2024-09-20',
    readTime: 3,
  },
  {
    id: '3',
    slug: 'artikel-3',
    title: 'Artikel 3 - Platzhalter',
    excerpt: 'Kurzbeschreibung folgt.',
    content: '<p>Inhalt folgt.</p>',
    image: 'https://images.unsplash.com/photo-1485827404703-89b55fcc595e?q=80&w=800&auto=format&fit=crop',
    category: 'news',
    author: 'FIMI Team',
    date: '2024-11-28',
    readTime: 3,
  },
  // TIPPS (3)
  {
    id: '4',
    slug: 'artikel-4',
    title: 'Artikel 4 - Platzhalter',
    excerpt: 'Kurzbeschreibung folgt.',
    content: '<p>Inhalt folgt.</p>',
    image: 'https://images.unsplash.com/photo-1491002052546-bf38f186af56?q=80&w=800&auto=format&fit=crop',
    category: 'tipps',
    author: 'FIMI Team',
    date: '2024-10-15',
    readTime: 3,
  },
  {
    id: '5',
    slug: 'artikel-5',
    title: 'Artikel 5 - Platzhalter',
    excerpt: 'Kurzbeschreibung folgt.',
    content: '<p>Inhalt folgt.</p>',
    image: 'https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=800&auto=format&fit=crop',
    category: 'tipps',
    author: 'FIMI Team',
    date: '2024-06-10',
    readTime: 3,
  },
  {
    id: '6',
    slug: 'artikel-6',
    title: 'Artikel 6 - Platzhalter',
    excerpt: 'Kurzbeschreibung folgt.',
    content: '<p>Inhalt folgt.</p>',
    image: 'https://images.unsplash.com/photo-1497366811353-6870744d04b2?q=80&w=800&auto=format&fit=crop',
    category: 'tipps',
    author: 'FIMI Team',
    date: '2024-03-18',
    readTime: 3,
  },
  // PROJEKT (3)
  {
    id: '7',
    slug: 'artikel-7',
    title: 'Artikel 7 - Platzhalter',
    excerpt: 'Kurzbeschreibung folgt.',
    content: '<p>Inhalt folgt.</p>',
    image: 'https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?q=80&w=800&auto=format&fit=crop',
    category: 'projekt',
    author: 'FIMI Team',
    date: '2024-08-22',
    readTime: 3,
  },
  {
    id: '8',
    slug: 'artikel-8',
    title: 'Artikel 8 - Platzhalter',
    excerpt: 'Kurzbeschreibung folgt.',
    content: '<p>Inhalt folgt.</p>',
    image: 'https://images.unsplash.com/photo-1565688534245-05d6b5be184a?q=80&w=800&auto=format&fit=crop',
    category: 'projekt',
    author: 'FIMI Team',
    date: '2024-05-14',
    readTime: 3,
  },
  {
    id: '9',
    slug: 'artikel-9',
    title: 'Artikel 9 - Platzhalter',
    excerpt: 'Kurzbeschreibung folgt.',
    content: '<p>Inhalt folgt.</p>',
    image: 'https://images.unsplash.com/photo-1580582932707-520aed937b7b?q=80&w=800&auto=format&fit=crop',
    category: 'projekt',
    author: 'FIMI Team',
    date: '2023-09-05',
    readTime: 3,
  },
  // TEAM (3)
  {
    id: '10',
    slug: 'artikel-10',
    title: 'Artikel 10 - Platzhalter',
    excerpt: 'Kurzbeschreibung folgt.',
    content: '<p>Inhalt folgt.</p>',
    image: 'https://images.unsplash.com/photo-1524178232363-1fb2b075b655?q=80&w=800&auto=format&fit=crop',
    category: 'team',
    author: 'FIMI Team',
    date: '2024-02-12',
    readTime: 3,
  },
  {
    id: '11',
    slug: 'artikel-11',
    title: 'Artikel 11 - Platzhalter',
    excerpt: 'Kurzbeschreibung folgt.',
    content: '<p>Inhalt folgt.</p>',
    image: 'https://images.unsplash.com/photo-1600880292203-757bb62b4baf?q=80&w=800&auto=format&fit=crop',
    category: 'team',
    author: 'FIMI Team',
    date: '2023-11-30',
    readTime: 3,
  },
  {
    id: '12',
    slug: 'artikel-12',
    title: 'Artikel 12 - Platzhalter',
    excerpt: 'Kurzbeschreibung folgt.',
    content: '<p>Inhalt folgt.</p>',
    image: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=800&auto=format&fit=crop',
    category: 'team',
    author: 'FIMI Team',
    date: '2025-01-08',
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
