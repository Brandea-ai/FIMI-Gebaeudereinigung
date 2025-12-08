import { MetadataRoute } from 'next'
import { branchen } from '@/lib/branchen-data'
import { blogPosts } from '@/lib/blog-data'

/**
 * Dynamische Sitemap - Enterprise-Level SEO
 *
 * Prioritäten:
 * - 1.0: Startseite (höchste Priorität)
 * - 0.9: Hauptkategorien (Leistungen, Branchen)
 * - 0.8: Detailseiten (einzelne Leistungen, Branchen)
 * - 0.7: Sekundäre Seiten (Über uns, Karriere, Referenzen)
 * - 0.6: Blog-Artikel
 * - 0.5: Tertiäre Seiten (Glossar, Kontakt)
 * - 0.3: Rechtliche Seiten (Impressum, Datenschutz, AGB)
 *
 * changefreq:
 * - always: Startseite
 * - weekly: Hauptkategorien, Neuigkeiten
 * - monthly: Detailseiten, statische Seiten
 * - yearly: Rechtliche Seiten
 */

const baseUrl = 'https://fimi-gebaeudereinigung.de'

// Alle 17 Leistungen-Slugs
const leistungenSlugs = [
  'unterhaltsreinigung',
  'bueroreinigung',
  'fensterreinigung',
  'industriereinigung',
  'fassadenreinigung',
  'maschinenreinigung',
  'hallenreinigung',
  'parkplatzreinigung',
  'tiefgaragenreinigung',
  'facility-management',
  'hausmeisterservice',
  'winterdienst',
  'aussenanlagenpflege',
  'baureinigung',
  'sonderreinigung',
  'sonderleistungen',
  'beschaffungsmanagement',
]

export default function sitemap(): MetadataRoute.Sitemap {
  const currentDate = new Date().toISOString()

  // ============================================
  // 1. HAUPTSEITEN (Höchste Priorität)
  // ============================================
  const mainPages: MetadataRoute.Sitemap = [
    {
      url: baseUrl,
      lastModified: currentDate,
      changeFrequency: 'weekly',
      priority: 1.0,
    },
    {
      url: `${baseUrl}/leistungen`,
      lastModified: currentDate,
      changeFrequency: 'weekly',
      priority: 0.9,
    },
    {
      url: `${baseUrl}/branchen`,
      lastModified: currentDate,
      changeFrequency: 'weekly',
      priority: 0.9,
    },
  ]

  // ============================================
  // 2. LEISTUNGEN-DETAILSEITEN (17 Seiten)
  // ============================================
  const leistungenPages: MetadataRoute.Sitemap = leistungenSlugs.map((slug) => ({
    url: `${baseUrl}/leistungen/${slug}`,
    lastModified: currentDate,
    changeFrequency: 'monthly' as const,
    priority: 0.8,
  }))

  // ============================================
  // 3. BRANCHEN-DETAILSEITEN (12 Seiten)
  // ============================================
  const branchenPages: MetadataRoute.Sitemap = branchen.map((branche) => ({
    url: `${baseUrl}/branchen/${branche.slug}`,
    lastModified: currentDate,
    changeFrequency: 'monthly' as const,
    priority: 0.8,
  }))

  // ============================================
  // 4. SEKUNDÄRE SEITEN
  // ============================================
  const secondaryPages: MetadataRoute.Sitemap = [
    {
      url: `${baseUrl}/ueber-uns`,
      lastModified: currentDate,
      changeFrequency: 'monthly',
      priority: 0.7,
    },
    {
      url: `${baseUrl}/karriere`,
      lastModified: currentDate,
      changeFrequency: 'weekly',
      priority: 0.7,
    },
    {
      url: `${baseUrl}/referenzen`,
      lastModified: currentDate,
      changeFrequency: 'monthly',
      priority: 0.7,
    },
    {
      url: `${baseUrl}/neuigkeiten`,
      lastModified: currentDate,
      changeFrequency: 'weekly',
      priority: 0.7,
    },
  ]

  // ============================================
  // 5. BLOG-ARTIKEL (Dynamisch aus blog-data.ts)
  // ============================================
  const blogPages: MetadataRoute.Sitemap = blogPosts.map((post) => ({
    url: `${baseUrl}/neuigkeiten/${post.slug}`,
    lastModified: post.date,
    changeFrequency: 'monthly' as const,
    priority: 0.6,
  }))

  // ============================================
  // 6. TERTIÄRE SEITEN
  // ============================================
  const tertiaryPages: MetadataRoute.Sitemap = [
    {
      url: `${baseUrl}/kontakt`,
      lastModified: currentDate,
      changeFrequency: 'monthly',
      priority: 0.6,
    },
    {
      url: `${baseUrl}/glossar`,
      lastModified: currentDate,
      changeFrequency: 'monthly',
      priority: 0.5,
    },
    {
      url: `${baseUrl}/sitemap`,
      lastModified: currentDate,
      changeFrequency: 'monthly',
      priority: 0.3,
    },
  ]

  // ============================================
  // 7. RECHTLICHE SEITEN (Niedrigste Priorität)
  // ============================================
  const legalPages: MetadataRoute.Sitemap = [
    {
      url: `${baseUrl}/impressum`,
      lastModified: currentDate,
      changeFrequency: 'yearly',
      priority: 0.2,
    },
    {
      url: `${baseUrl}/datenschutz`,
      lastModified: currentDate,
      changeFrequency: 'yearly',
      priority: 0.2,
    },
    {
      url: `${baseUrl}/agb`,
      lastModified: currentDate,
      changeFrequency: 'yearly',
      priority: 0.2,
    },
  ]

  // ============================================
  // ZUSAMMENFÜHREN (Reihenfolge = Priorität)
  // ============================================
  return [
    ...mainPages,
    ...leistungenPages,
    ...branchenPages,
    ...secondaryPages,
    ...blogPages,
    ...tertiaryPages,
    ...legalPages,
  ]
}
