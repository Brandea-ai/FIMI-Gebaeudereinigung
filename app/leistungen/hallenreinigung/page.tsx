import { Metadata } from 'next'
import HeroSection from './HeroSection'
import TrustBarSection from './TrustBarSection'
import ProblemLoesungSection from './ProblemLoesungSection'
import HallentypenSection from './HallentypenSection'
import LeistungsumfangSection from './LeistungsumfangSection'
import ProcessSection from './ProcessSection'
import KundenLogosOnly from '@/components/KundenLogosOnly'
import PartnerLogosSlider from '@/components/PartnerLogosSlider'
import RegionenSection from './RegionenSection'
import FAQSection from './FAQSection'
import BlogPreviewSection from './BlogPreviewSection'
import CTASection from './CTASection'
import FloatingNav from '@/components/FloatingNav'

// Navigation items for FloatingNav
const floatingNavItems = [
  { id: 'hero', label: 'Übersicht' },
  { id: 'probleme', label: 'Herausforderungen' },
  { id: 'hallentypen', label: 'Hallentypen' },
  { id: 'leistungen', label: 'Leistungen' },
  { id: 'prozess', label: 'Ablauf' },
  { id: 'regionen', label: 'Standorte' },
  { id: 'faq', label: 'FAQ' },
  { id: 'kontakt', label: 'Kontakt' },
]

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
    url: 'https://fimi-service.de/leistungen/hallenreinigung',
    siteName: 'FIMI Gebäudereinigung',
    images: [
      {
        url: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?q=80&w=1200&auto=format&fit=crop',
        width: 1200,
        height: 630,
        alt: 'Professionelle Hallenreinigung von FIMI - Industriehalle',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Hallenreinigung Bayern | FIMI',
    description: 'Lagerhallen & Produktionshallen professionell gereinigt. Im laufenden Betrieb möglich.',
  },
  alternates: {
    canonical: 'https://fimi-service.de/leistungen/hallenreinigung',
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
    image: 'https://fimi-service.de/og-image.jpg',
    telephone: '+4987143033460',
    email: 'info@fimi-service.de',
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
        <FloatingNav items={floatingNavItems} />
        <HeroSection />
        <TrustBarSection />
        <KundenLogosOnly />
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
