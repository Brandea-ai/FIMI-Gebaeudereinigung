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
    slug: 'artikel-1',
    title: 'Artikel 1 - Platzhalter',
    excerpt: 'Kurzbeschreibung folgt.',
    content: '<p>Inhalt folgt.</p>',
    image: 'https://images.unsplash.com/photo-1554224155-6726b3ff858f?q=80&w=800&auto=format&fit=crop',
    category: 'news',
    author: 'FIMI Team',
    date: '2025-01-15',
    readTime: 3,
    featured: true,
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
