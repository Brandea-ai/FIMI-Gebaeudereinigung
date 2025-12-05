import { Metadata } from 'next'
import HeroSection from './HeroSection'
import TrustBarSection from './TrustBarSection'
import ProblemLoesungSection from './ProblemLoesungSection'
import PhasenSection from './PhasenSection'
import LeistungsumfangSection from './LeistungsumfangSection'
import ProcessSection from './ProcessSection'
import AnwendungsfelderSection from './AnwendungsfelderSection'
import PartnerLogosSlider from '@/components/PartnerLogosSlider'
import RegionenSection from './RegionenSection'
import FAQSection from './FAQSection'
import CTASection from './CTASection'
import LeistungFloatingNav from '../_components/LeistungFloatingNav'

export const metadata: Metadata = {
  title: 'Baureinigung Bayern | Bauendreinigung & Bauschlussreinigung | FIMI',
  description: 'Professionelle Baureinigung in Landshut, München, Regensburg und ganz Bayern. Baugrobreinigung, Baufeinreinigung, Bauschlussreinigung. 24h Notfall-Service. Bezugsfertig garantiert. Jetzt kostenfreie Besichtigung!',
  keywords: [
    'Baureinigung',
    'Bauendreinigung',
    'Bauschlussreinigung',
    'Baugrobreinigung',
    'Baufeinreinigung',
    'Zwischenreinigung Bau',
    'Baureinigung Bayern',
    'Baureinigung Landshut',
    'Baureinigung München',
    'Baureinigung Regensburg',
    'Baureinigung Kosten',
    'Baureinigung pro qm',
    'Baureinigung Angebot',
    'Baureinigung Neubau',
    'Baureinigung Generalunternehmer',
    'Baureinigung vor Übergabe',
    'Baureinigung Gewerbe',
    'bezugsfertig Reinigung',
  ].join(', '),
  openGraph: {
    title: 'Baureinigung Bayern | FIMI Gebäudereinigung',
    description: 'Vom Rohbau zur bezugsfertigen Immobilie. Baugrobreinigung, Baufeinreinigung, Bauschlussreinigung – termingerecht und mit Qualitätsgarantie.',
    type: 'website',
    locale: 'de_DE',
    url: 'https://fimi-service.de/leistungen/baureinigung',
    siteName: 'FIMI Gebäudereinigung',
    images: [
      {
        url: 'https://images.unsplash.com/photo-1504307651254-35680f356dfd?q=80&w=1200&auto=format&fit=crop',
        width: 1200,
        height: 630,
        alt: 'Professionelle Baureinigung von FIMI - Neubau bezugsfertig',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Baureinigung Bayern | FIMI',
    description: 'Bauendreinigung & Bauschlussreinigung. Bezugsfertig garantiert. 24h Notfall-Service.',
  },
  alternates: {
    canonical: 'https://fimi-service.de/leistungen/baureinigung',
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
  name: 'Baureinigung',
  alternateName: ['Bauendreinigung', 'Bauschlussreinigung', 'Baufeinreinigung'],
  description: 'Professionelle Baureinigung in Bayern. Baugrobreinigung während der Bauphase, Baufeinreinigung nach Abschluss der Bauarbeiten, Bauschlussreinigung für bezugsfertige Übergabe. Für Neubauten, Sanierungen und Renovierungen.',
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
    priceRange: '€€',
  },
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
  serviceType: 'Baureinigung',
  hasOfferCatalog: {
    '@type': 'OfferCatalog',
    name: 'Baureinigung Leistungen',
    itemListElement: [
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: 'Baugrobreinigung',
          description: 'Reinigung während der Bauphase zwischen den Gewerken',
        },
      },
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: 'Baufeinreinigung',
          description: 'Detailreinigung nach Abschluss der Bauarbeiten',
        },
      },
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: 'Bauschlussreinigung',
          description: 'Bezugsfertige Endreinigung vor Übergabe',
        },
      },
    ],
  },
}

// Schema.org FAQ
const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'Was kostet Baureinigung pro Quadratmeter?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Die Kosten für professionelle Baureinigung liegen typischerweise zwischen 3 und 9 Euro pro Quadratmeter. Der genaue Preis hängt von Umfang der Reinigung (Grob-, Fein- oder Schlussreinigung), Verschmutzungsgrad und Objektgröße ab. Nach einer kostenfreien Besichtigung erhalten Sie ein verbindliches Festpreisangebot.',
      },
    },
    {
      '@type': 'Question',
      name: 'Was ist der Unterschied zwischen Baugrobreinigung und Baufeinreinigung?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Die Baugrobreinigung findet während der aktiven Bauphase statt und umfasst das Entfernen von grobem Bauschutt und Verpackungsmaterial. Die Baufeinreinigung erfolgt nach Abschluss der Bauarbeiten und macht das Gebäude bezugsfertig – inklusive Fensterreinigung und Entfernung von Farbspritzern.',
      },
    },
    {
      '@type': 'Question',
      name: 'Wie kurzfristig können Sie für eine Baureinigung kommen?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Bei dringendem Bedarf bieten wir einen Notfall-Service innerhalb von 24 Stunden an. Für reguläre Projekte benötigen wir typischerweise 3-5 Werktage Vorlauf für Besichtigung, Angebotserstellung und Teamplanung.',
      },
    },
    {
      '@type': 'Question',
      name: 'Wer ist für die Baureinigung verantwortlich?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Das hängt von der vertraglichen Vereinbarung ab. In der Regel ist die Bauendreinigung im Bauvertrag geregelt. Wir arbeiten sowohl direkt mit Bauherren als auch mit Generalunternehmern zusammen.',
      },
    },
  ],
}

export default function BaureinigungPage() {
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
        <PhasenSection />
        <LeistungsumfangSection />
        <ProcessSection />
        <AnwendungsfelderSection />
        <RegionenSection />
        <PartnerLogosSlider
          showHeader={true}
          showStats={false}
          bgColor="#f8f9fa"
        />
        <FAQSection />
        <CTASection />
      </main>
    </>
  )
}
