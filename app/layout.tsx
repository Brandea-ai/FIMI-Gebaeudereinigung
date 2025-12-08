import type { Metadata, Viewport } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Navigation from '@/components/Navigation'
import Footer from '@/components/layout/Footer'
import CookieBanner from '@/components/CookieBanner'
import GoogleAnalytics from '@/components/GoogleAnalytics'

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
})

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
  themeColor: '#012956',
}

export const metadata: Metadata = {
  metadataBase: new URL('https://fimi-gebaeudereinigung.de'),
  title: {
    default: 'Gebäudereinigung Bayern | FIMI - Professionelle Reinigung',
    template: '%s | FIMI Gebäudereinigung',
  },
  description: 'Professionelle Gebäudereinigung in Bayern. Büroreinigung, Industriereinigung, Facility Management in Landshut, München, Regensburg. 15+ Jahre Erfahrung.',
  keywords: [
    'Gebäudereinigung',
    'Büroreinigung',
    'Industriereinigung',
    'Facility Management',
    'Unterhaltsreinigung',
    'Landshut',
    'München',
    'Regensburg',
    'Bayern',
    'gewerbliche Reinigung',
    'Hallenreinigung',
    'Fassadenreinigung',
  ],
  authors: [{ name: 'FIMI Gebäudereinigung' }],
  creator: 'FIMI Gebäudereinigung',
  publisher: 'FIMI Gebäudereinigung',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    type: 'website',
    locale: 'de_DE',
    url: 'https://fimi-gebaeudereinigung.de',
    siteName: 'FIMI Gebäudereinigung',
    title: 'Gebäudereinigung Bayern | FIMI - Professionelle Reinigung',
    description: 'Professionelle Gebäudereinigung in Bayern. 8+ Jahre Erfahrung. 120+ zufriedene Kunden.',
    images: [
      {
        url: '/FIMI-LOGO/FIMI-LOGO-WEIße_Schrift_mit-Hintergrund.png',
        width: 1200,
        height: 630,
        alt: 'FIMI Gebäudereinigung - Professionelle Reinigung in Bayern',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Gebäudereinigung Bayern | FIMI',
    description: 'Professionelle Gebäudereinigung in Bayern. 8+ Jahre Erfahrung.',
    images: ['/FIMI-LOGO/FIMI-LOGO-WEIße_Schrift_mit-Hintergrund.png'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: 'verification_token', // TODO: Add actual token
  },
  category: 'business',
  icons: {
    icon: [
      { url: '/FIMI-LOGO/Fimi-Favicon.png', sizes: '16x16', type: 'image/png' },
      { url: '/FIMI-LOGO/Fimi-Favicon.png', sizes: '32x32', type: 'image/png' },
      { url: '/FIMI-LOGO/Fimi-Favicon.png', sizes: '48x48', type: 'image/png' },
      { url: '/FIMI-LOGO/Fimi-Favicon.png', sizes: '64x64', type: 'image/png' },
      { url: '/FIMI-LOGO/Fimi-Favicon.png', sizes: '128x128', type: 'image/png' },
      { url: '/FIMI-LOGO/Fimi-Favicon.png', sizes: '192x192', type: 'image/png' },
      { url: '/FIMI-LOGO/Fimi-Favicon.png', sizes: '512x512', type: 'image/png' },
    ],
    apple: { url: '/FIMI-LOGO/Fimi-Favicon.png', sizes: '180x180', type: 'image/png' },
    shortcut: '/FIMI-LOGO/Fimi-Favicon.png',
  },
}

// ============================================
// SCHEMA.ORG STRUCTURED DATA - Enterprise Level
// ============================================

// 1. Organization Schema - Für Knowledge Panel
const organizationSchema = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  '@id': 'https://fimi-gebaeudereinigung.de/#organization',
  name: 'FIMI Gebäudereinigung',
  alternateName: ['FIMI', 'FIMI Service', 'FIMI Gebäudeservice'],
  url: 'https://fimi-gebaeudereinigung.de',
  logo: {
    '@type': 'ImageObject',
    '@id': 'https://fimi-gebaeudereinigung.de/#logo',
    url: 'https://fimi-gebaeudereinigung.de/FIMI-LOGO/Fimi-Favicon.png',
    contentUrl: 'https://fimi-gebaeudereinigung.de/FIMI-LOGO/Fimi-Favicon.png',
    caption: 'FIMI Gebäudereinigung Logo',
    width: 512,
    height: 512,
  },
  image: 'https://fimi-gebaeudereinigung.de/FIMI-LOGO/FIMI-LOGO-WEIße_Schrift_mit-Hintergrund.png',
  email: 'info@fimi-gebaeudereinigung.de',
  telephone: '+4987143033460',
  foundingDate: '2016',
  numberOfEmployees: {
    '@type': 'QuantitativeValue',
    minValue: 50,
    maxValue: 100,
  },
  slogan: 'Professionelle Gebäudereinigung in Bayern',
  description: 'FIMI ist ein führender Anbieter für professionelle Gebäudereinigung in Bayern. Seit 2016 bieten wir Unterhaltsreinigung, Industriereinigung und Facility Management für über 120 zufriedene Kunden.',
  address: {
    '@type': 'PostalAddress',
    streetAddress: 'Kellerstr. 39',
    addressLocality: 'Landshut',
    postalCode: '84036',
    addressRegion: 'Bayern',
    addressCountry: 'DE',
  },
  contactPoint: [
    {
      '@type': 'ContactPoint',
      telephone: '+4987143033460',
      contactType: 'customer service',
      availableLanguage: ['German'],
      areaServed: 'DE',
    },
    {
      '@type': 'ContactPoint',
      telephone: '+4987143033460',
      contactType: 'sales',
      availableLanguage: ['German'],
      areaServed: 'DE',
    },
  ],
  areaServed: [
    { '@type': 'State', name: 'Bayern', '@id': 'https://www.wikidata.org/wiki/Q980' },
  ],
  knowsAbout: [
    'Gebäudereinigung',
    'Büroreinigung',
    'Industriereinigung',
    'Facility Management',
    'Unterhaltsreinigung',
    'Fensterreinigung',
    'Fassadenreinigung',
    'Winterdienst',
  ],
}

// 2. WebSite Schema - Für Sitelinks Searchbox
const websiteSchema = {
  '@context': 'https://schema.org',
  '@type': 'WebSite',
  '@id': 'https://fimi-gebaeudereinigung.de/#website',
  url: 'https://fimi-gebaeudereinigung.de',
  name: 'FIMI Gebäudereinigung',
  description: 'Professionelle Gebäudereinigung in Bayern - Landshut, München, Regensburg',
  publisher: {
    '@id': 'https://fimi-gebaeudereinigung.de/#organization',
  },
  inLanguage: 'de-DE',
  potentialAction: {
    '@type': 'SearchAction',
    target: {
      '@type': 'EntryPoint',
      urlTemplate: 'https://fimi-gebaeudereinigung.de/leistungen?q={search_term_string}',
    },
    'query-input': 'required name=search_term_string',
  },
}

// 3. LocalBusiness Schema - Für Local SEO & Maps
const localBusinessSchema = {
  '@context': 'https://schema.org',
  '@type': 'LocalBusiness',
  '@id': 'https://fimi-gebaeudereinigung.de/#localbusiness',
  name: 'FIMI Gebäudereinigung',
  image: 'https://fimi-gebaeudereinigung.de/FIMI-LOGO/FIMI-LOGO-WEIße_Schrift_mit-Hintergrund.png',
  url: 'https://fimi-gebaeudereinigung.de',
  telephone: '+4987143033460',
  email: 'info@fimi-gebaeudereinigung.de',
  address: {
    '@type': 'PostalAddress',
    streetAddress: 'Kellerstr. 39',
    addressLocality: 'Landshut',
    postalCode: '84036',
    addressRegion: 'BY',
    addressCountry: 'DE',
  },
  geo: {
    '@type': 'GeoCoordinates',
    latitude: 48.5369,
    longitude: 12.1522,
  },
  openingHoursSpecification: [
    {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
      opens: '08:00',
      closes: '18:00',
    },
  ],
  priceRange: '€€',
  currenciesAccepted: 'EUR',
  paymentAccepted: 'Cash, Credit Card, Bank Transfer',
  areaServed: [
    { '@type': 'City', name: 'Landshut' },
    { '@type': 'City', name: 'München' },
    { '@type': 'City', name: 'Regensburg' },
    { '@type': 'City', name: 'Ingolstadt' },
    { '@type': 'City', name: 'Freising' },
    { '@type': 'City', name: 'Erding' },
    { '@type': 'City', name: 'Straubing' },
    { '@type': 'City', name: 'Passau' },
  ],
  hasOfferCatalog: {
    '@type': 'OfferCatalog',
    name: 'Gebäudereinigung Leistungen',
    itemListElement: [
      {
        '@type': 'OfferCatalog',
        name: 'Reinigungsleistungen',
        itemListElement: [
          { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Unterhaltsreinigung' } },
          { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Büroreinigung' } },
          { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Industriereinigung' } },
          { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Fensterreinigung' } },
          { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Fassadenreinigung' } },
        ],
      },
      {
        '@type': 'OfferCatalog',
        name: 'Facility Management & Gebäudeservice',
        itemListElement: [
          { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Facility Management' } },
          { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Hausmeisterservice' } },
          { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Winterdienst' } },
          { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Außenanlagenpflege' } },
        ],
      },
    ],
  },
  aggregateRating: {
    '@type': 'AggregateRating',
    ratingValue: '4.9',
    reviewCount: '47',
    bestRating: '5',
    worstRating: '1',
  },
}

// 4. BreadcrumbList Schema - Für Breadcrumb Rich Results
const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  '@id': 'https://fimi-gebaeudereinigung.de/#breadcrumb',
  itemListElement: [
    {
      '@type': 'ListItem',
      position: 1,
      name: 'Home',
      item: 'https://fimi-gebaeudereinigung.de',
    },
  ],
}

// Combined Schema Array
const jsonLdSchemas = [
  organizationSchema,
  websiteSchema,
  localBusinessSchema,
  breadcrumbSchema,
]

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="de" className={inter.variable}>
      <head>
        {jsonLdSchemas.map((schema, index) => (
          <script
            key={index}
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
          />
        ))}
      </head>
      <body className={`${inter.className} antialiased`}>
        <GoogleAnalytics />
        <Navigation />
        {children}
        <Footer />
        <CookieBanner />
      </body>
    </html>
  )
}
