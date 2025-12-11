import { Metadata } from 'next'
import HeroSection from './HeroSection'
import TrustBarSection from './TrustBarSection'
import ProblemLoesungSection from './ProblemLoesungSection'
import HallentypenSection from './HallentypenSection'
import LeistungsumfangSection from './LeistungsumfangSection'
import ProcessSection from './ProcessSection'
import PartnerLogosSlider from '@/components/PartnerLogosSlider'
import RegionenSection from './RegionenSection'
import FAQSection from './FAQSection'
import BlogPreviewSection from './BlogPreviewSection'
import CTASection from './CTASection'
import LeistungFloatingNav from '../_components/LeistungFloatingNav'

export const metadata: Metadata = {
  title: 'Hallenreinigung Bayern | Lagerhallen & Produktionshallen reinigen | FIMI',
  description: 'Professionelle Hallenreinigung in Landshut, München, Ingolstadt und ganz Bayern. ✓ Im laufenden Betrieb ✓ 2h Reaktionszeit ✓ Transparente Festpreise. Lagerhallen, Produktionshallen, Logistikzentren – jetzt kostenfreie Besichtigung!',
  keywords: [
    'Hallenreinigung Bayern',
    'Hallenreinigung München',
    'Hallenreinigung Landshut',
    'Hallenreinigung Ingolstadt',
    'Hallenreinigung Regensburg',
    'Lagerhalle reinigen',
    'Produktionshalle reinigen',
    'Industriehalle Reinigung',
    'Hallenboden reinigen',
    'Hallenreinigung Kosten',
    'Hallenreinigung Firma',
    'Großflächenreinigung',
    'Industriereinigung Halle',
    'Logistikhalle reinigen',
  ].join(', '),
  openGraph: {
    title: 'Hallenreinigung Bayern | FIMI Gebäudereinigung',
    description: 'Lagerhallen, Produktionshallen, Logistikzentren professionell gereinigt. Im laufenden Betrieb möglich. 2h Reaktionszeit bei Notfällen.',
    type: 'website',
    locale: 'de_DE',
    url: 'https://fimi-gebaeudereinigung.de/leistungen/hallenreinigung',
    siteName: 'FIMI Gebäudereinigung',
    images: [
      {
        url: 'https://fimi-gebaeudereinigung.de/images/leistungen/hallenreinigung/hero-halle.avif',
        width: 1376,
        height: 768,
        alt: 'Professionelle Hallenreinigung von FIMI - Saubere Industriehalle',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Hallenreinigung Bayern | FIMI',
    description: 'Lagerhallen & Produktionshallen professionell gereinigt. Im laufenden Betrieb möglich.',
  },
  alternates: {
    canonical: 'https://fimi-gebaeudereinigung.de/leistungen/hallenreinigung',
  },
  robots: {
    index: true,
    follow: true,
  },
}

// Schema.org Structured Data - Service
const serviceSchema = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  name: 'Hallenreinigung',
  description: 'Professionelle Hallenreinigung in Bayern. Lagerhallen, Produktionshallen, Logistikzentren, Sporthallen. Großflächenreinigung mit Industriegeräten. Im laufenden Betrieb möglich.',
  provider: {
    '@type': 'LocalBusiness',
    name: 'FIMI Gebäudereinigung',
    image: 'https://fimi-gebaeudereinigung.de/FIMI-LOGO/fimi-logo-weiss-mit-hintergrund.png',
    telephone: '+4987120669360',
    email: 'info@fimi-gebaeudereinigung.de',
    address: {
      '@type': 'PostalAddress',
      streetAddress: 'Kellerstr. 39',
      addressLocality: 'Landshut',
      postalCode: '84036',
      addressRegion: 'Bayern',
      addressCountry: 'DE',
    },
  },
  areaServed: [
    { '@type': 'City', name: 'Landshut' },
    { '@type': 'City', name: 'München' },
    { '@type': 'City', name: 'Ingolstadt' },
    { '@type': 'City', name: 'Regensburg' },
    { '@type': 'City', name: 'Freising' },
    { '@type': 'City', name: 'Erding' },
    { '@type': 'City', name: 'Straubing' },
    { '@type': 'City', name: 'Passau' },
  ],
  serviceType: 'Hallenreinigung',
  offers: {
    '@type': 'Offer',
    availability: 'https://schema.org/InStock',
    areaServed: {
      '@type': 'State',
      name: 'Bayern',
    },
  },
}

// Schema.org FAQ
const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'Was kostet Hallenreinigung pro Quadratmeter?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Die Kosten für professionelle Hallenreinigung liegen typischerweise zwischen 0,50 und 2,00 Euro pro Quadratmeter. Der genaue Preis hängt von Größe der Halle, Art der Verschmutzung und gewünschter Reinigungstiefe ab. Nach einer kostenlosen Besichtigung erhalten Sie ein transparentes Festpreisangebot.',
      },
    },
    {
      '@type': 'Question',
      name: 'Können Sie auch im laufenden Betrieb reinigen?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Ja, wir sind darauf spezialisiert, Hallenreinigung ohne Produktionsunterbrechung durchzuführen. Unsere Teams arbeiten in Schichtpausen, am Wochenende oder parallel zur Produktion in abgegrenzten Bereichen.',
      },
    },
    {
      '@type': 'Question',
      name: 'Wie kurzfristig können Sie kommen?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Bei Notfällen garantieren wir eine Reaktionszeit von 2 Stunden im Raum Landshut und 4 Stunden in ganz Bayern. Für geplante Einsätze benötigen wir normalerweise 2-5 Werktage Vorlauf.',
      },
    },
    {
      '@type': 'Question',
      name: 'Welche Maschinen nutzen Sie für Hallenreinigung?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Wir setzen professionelle Industriegeräte ein: Scheuersaugmaschinen für große Bodenflächen, Hochdruckreiniger für hartnäckige Verschmutzungen, Industriestaubsauger für Feinstaub und Späne, sowie Hubarbeitsbühnen für Arbeiten an Decken und Hochregalen.',
      },
    },
  ],
}

export default function HallenreinigungPage() {
  return (
    <>
      {/* Schema.org Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      <main className="min-h-screen bg-white">
        <LeistungFloatingNav />
        <HeroSection />
        <TrustBarSection />
        <ProblemLoesungSection />
        <HallentypenSection />
        <LeistungsumfangSection />
        <ProcessSection />
        <RegionenSection />
        <PartnerLogosSlider
          showHeader={true}
          showStats={false}
          bgColor="#ffffff"
        />
        <FAQSection />
        <BlogPreviewSection />
        <CTASection />
      </main>
    </>
  )
}
