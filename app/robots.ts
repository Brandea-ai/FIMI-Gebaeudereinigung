import { MetadataRoute } from 'next'

/**
 * robots.txt - Professionelle Konfiguration für optimales Crawling
 *
 * Best Practices:
 * - Erlaubt alle wichtigen Crawler
 * - Blockiert unwichtige Pfade (API, Admin, etc.)
 * - Verweist auf Sitemap
 * - Crawl-Delay nur für aggressive Bots
 */
export default function robots(): MetadataRoute.Robots {
  const baseUrl = 'https://fimi-service.de'

  return {
    rules: [
      {
        // Googlebot - Hauptcrawler, keine Einschränkungen
        userAgent: 'Googlebot',
        allow: '/',
        disallow: [
          '/api/',
          '/_next/',
          '/admin/',
          '/*.json$',
          '/private/',
        ],
      },
      {
        // Bingbot
        userAgent: 'Bingbot',
        allow: '/',
        disallow: [
          '/api/',
          '/_next/',
          '/admin/',
          '/*.json$',
        ],
      },
      {
        // Google Bilder-Crawler - explizit erlaubt
        userAgent: 'Googlebot-Image',
        allow: [
          '/images/',
          '/FIMI-LOGO/',
          '/*.jpg',
          '/*.jpeg',
          '/*.png',
          '/*.webp',
          '/*.avif',
        ],
      },
      {
        // Alle anderen Crawler
        userAgent: '*',
        allow: '/',
        disallow: [
          '/api/',
          '/_next/static/chunks/',
          '/_next/static/development/',
          '/admin/',
          '/private/',
          '/*.json$',
          '/cdn-cgi/',
        ],
      },
      {
        // AI-Crawler blockieren (optional - für Content-Schutz)
        userAgent: 'GPTBot',
        disallow: '/',
      },
      {
        userAgent: 'ChatGPT-User',
        disallow: '/',
      },
      {
        userAgent: 'CCBot',
        disallow: '/',
      },
      {
        userAgent: 'anthropic-ai',
        disallow: '/',
      },
    ],
    sitemap: `${baseUrl}/sitemap.xml`,
    host: baseUrl,
  }
}
