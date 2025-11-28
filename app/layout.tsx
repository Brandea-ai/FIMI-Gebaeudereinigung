import type { Metadata, Viewport } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Navigation from '@/components/Navigation'
import Footer from '@/components/layout/Footer'

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
  metadataBase: new URL('https://fimi-service.de'),
  title: {
    default: 'Gebaeudereinigung Bayern | FIMI - Professionelle Reinigung',
    template: '%s | FIMI Gebaeudereinigung',
  },
  description: 'Professionelle Gebaeudereinigung in Bayern. Bueroreinigung, Industriereinigung, Facility Management in Landshut, Muenchen, Regensburg. 15+ Jahre Erfahrung.',
  keywords: [
    'Gebaeudereinigung',
    'Bueroreinigung',
    'Industriereinigung',
    'Facility Management',
    'Unterhaltsreinigung',
    'Landshut',
    'Muenchen',
    'Regensburg',
    'Bayern',
    'gewerbliche Reinigung',
    'Hallenreinigung',
    'Fassadenreinigung',
  ],
  authors: [{ name: 'FIMI Gebaeudereinigung' }],
  creator: 'FIMI Gebaeudereinigung',
  publisher: 'FIMI Gebaeudereinigung',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    type: 'website',
    locale: 'de_DE',
    url: 'https://fimi-service.de',
    siteName: 'FIMI Gebaeudereinigung',
    title: 'Gebaeudereinigung Bayern | FIMI - Professionelle Reinigung',
    description: 'Professionelle Gebaeudereinigung in Bayern. 15+ Jahre Erfahrung. 500+ zufriedene Kunden.',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'FIMI Gebaeudereinigung',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Gebaeudereinigung Bayern | FIMI',
    description: 'Professionelle Gebaeudereinigung in Bayern',
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
}

// JSON-LD Structured Data
const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'LocalBusiness',
  name: 'FIMI Gebaeudereinigung',
  image: 'https://fimi-service.de/og-image.jpg',
  '@id': 'https://fimi-service.de',
  url: 'https://fimi-service.de',
  telephone: '+4917472254773',
  email: 'info@fimi-service.de',
  address: {
    '@type': 'PostalAddress',
    streetAddress: 'Kellerstr. 39',
    addressLocality: 'Landshut',
    postalCode: '84036',
    addressRegion: 'Bayern',
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
  sameAs: [],
  priceRange: '$$',
  areaServed: [
    { '@type': 'City', name: 'Landshut' },
    { '@type': 'City', name: 'Muenchen' },
    { '@type': 'City', name: 'Regensburg' },
    { '@type': 'City', name: 'Straubing' },
    { '@type': 'City', name: 'Dingolfing' },
    { '@type': 'City', name: 'Moosburg' },
    { '@type': 'City', name: 'Freising' },
    { '@type': 'City', name: 'Ingolstadt' },
  ],
  serviceType: [
    'Gebaeudereinigung',
    'Bueroreinigung',
    'Industriereinigung',
    'Facility Management',
    'Unterhaltsreinigung',
  ],
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="de" className={inter.variable}>
      <head>
        {/* Favicon für Light Mode (blaues Icon auf transparent) */}
        <link rel="icon" href="/FIMI-LOGO/Fimi-Favicon_Transparent.png" media="(prefers-color-scheme: light)" />
        {/* Favicon für Dark Mode (weißes Icon auf blau) */}
        <link rel="icon" href="/FIMI-LOGO/Fimi-Favicon.png" media="(prefers-color-scheme: dark)" />
        {/* Fallback */}
        <link rel="icon" href="/FIMI-LOGO/Fimi-Favicon_Transparent.png" />
        <link rel="apple-touch-icon" href="/FIMI-LOGO/Fimi-Favicon.png" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className={`${inter.className} antialiased`}>
        <Navigation />
        {children}
        <Footer />
      </body>
    </html>
  )
}
