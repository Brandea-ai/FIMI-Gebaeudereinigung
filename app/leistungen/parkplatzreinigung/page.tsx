import { Metadata } from 'next'
import HeroSection from './HeroSection'
import TrustBarSection from './TrustBarSection'
import ProblemLoesungSection from './ProblemLoesungSection'
import LeistungsumfangSection from './LeistungsumfangSection'
import ProcessSection from './ProcessSection'
import PartnerLogosSlider from '@/components/PartnerLogosSlider'
import RegionenSection from './RegionenSection'
import FAQSection from './FAQSection'
import BlogPreviewSection from './BlogPreviewSection'
import CTASection from './CTASection'
import LeistungFloatingNav from '../_components/LeistungFloatingNav'

export const metadata: Metadata = {
  title: 'Parkplatzreinigung Bayern | Professionelle Außenflächenreinigung | FIMI',
  description: 'Professionelle Parkplatzreinigung in Landshut, München, Regensburg und ganz Bayern. Ölflecken entfernen, Kehrarbeiten, Hochdruckreinigung. ✓ 2h Reaktionszeit ✓ Kostenfreie Besichtigung ✓ Transparente Festpreise.',
  keywords: [
    'Parkplatzreinigung Bayern',
    'Parkplatzreinigung Landshut',
    'Parkplatzreinigung München',
    'Parkplatzreinigung Regensburg',
    'Außenflächenreinigung Gewerbe',
    'Parkplatz reinigen lassen',
    'Ölflecken Parkplatz entfernen',
    'Kehrmaschine Parkplatz',
    'Graureinigung',
    'Firmenparkplatz reinigen',
    'Kundenparkplatz Reinigung',
    'Supermarkt Parkplatz Reinigung',
    'Betriebshof reinigen',
    'Großflächenreinigung',
  ].join(', '),
  openGraph: {
    title: 'Parkplatzreinigung Bayern | FIMI Gebäudereinigung',
    description: 'Gepflegte Parkplätze sind Ihre Visitenkarte. Professionelle Parkplatzreinigung mit Kehrmaschinen und Hochdruckreinigung. 2h Reaktionszeit garantiert.',
    type: 'website',
    locale: 'de_DE',
    url: 'https://fimi-service.de/leistungen/parkplatzreinigung',
    siteName: 'FIMI Gebäudereinigung',
    images: [
      {
        url: 'https://images.unsplash.com/photo-1590674899484-d5640e854abe?q=80&w=1200&auto=format&fit=crop',
        width: 1200,
        height: 630,
        alt: 'Professionelle Parkplatzreinigung von FIMI - Sauberer Gewerbeparkplatz',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Parkplatzreinigung Bayern | FIMI',
    description: 'Professionelle Parkplatzreinigung mit Kehrmaschinen und Hochdruckreinigung. 2h Reaktionszeit garantiert.',
  },
  alternates: {
    canonical: 'https://fimi-service.de/leistungen/parkplatzreinigung',
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
  name: 'Parkplatzreinigung',
  description: 'Professionelle Parkplatzreinigung in Bayern. Maschinelle Kehrarbeiten, Hochdruckreinigung, Ölfleckenentfernung, Kaugummientfernung. Für Supermärkte, Firmenparkplätze, Gewerbehöfe und Wohnanlagen.',
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
    geo: {
      '@type': 'GeoCoordinates',
      latitude: 48.5442,
      longitude: 12.1522,
    },
    openingHoursSpecification: {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
      opens: '08:00',
      closes: '18:00',
    },
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
  serviceType: 'Parkplatzreinigung',
  offers: {
    '@type': 'Offer',
    availability: 'https://schema.org/InStock',
    areaServed: {
      '@type': 'State',
      name: 'Bayern',
    },
    priceSpecification: {
      '@type': 'PriceSpecification',
      priceCurrency: 'EUR',
      description: 'Individuelle Preisgestaltung nach kostenloser Besichtigung',
    },
  },
  hasOfferCatalog: {
    '@type': 'OfferCatalog',
    name: 'Parkplatzreinigung Leistungen',
    itemListElement: [
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: 'Maschinelle Kehrreinigung',
        },
      },
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: 'Hochdruckreinigung',
        },
      },
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: 'Ölfleckenentfernung',
        },
      },
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: 'Kaugummientfernung',
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
      name: 'Was kostet Parkplatzreinigung pro Quadratmeter?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Die Kosten für professionelle Parkplatzreinigung beginnen bei etwa 0,50 Euro pro Quadratmeter für regelmäßige Kehrarbeiten. Bei Intensivreinigung mit Hochdruck oder Ölfleckenentfernung liegen die Preise höher. Nach einer kostenlosen Besichtigung erhalten Sie ein transparentes Festpreisangebot.',
      },
    },
    {
      '@type': 'Question',
      name: 'Wie oft sollte ein Parkplatz gereinigt werden?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Die optimale Reinigungsfrequenz hängt von der Nutzung ab. Supermarkt-Parkplätze mit hoher Frequenz empfehlen wir wöchentlich, Firmenparkplätze alle 2 Wochen, Wohnanlagen monatlich. Zusätzlich empfehlen wir eine Intensivreinigung im Frühjahr nach dem Winter.',
      },
    },
    {
      '@type': 'Question',
      name: 'Können Sie Ölflecken auf dem Parkplatz komplett entfernen?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Frische Ölflecken können wir in den meisten Fällen rückstandslos entfernen. Bei älteren, tief eingezogenen Flecken erreichen wir eine deutliche Verbesserung, aber nicht immer 100% Entfernung. Je schneller Sie uns rufen, desto besser das Ergebnis.',
      },
    },
    {
      '@type': 'Question',
      name: 'Was ist der Unterschied zwischen Parkplatzreinigung und Tiefgaragenreinigung?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Parkplatzreinigung betrifft Außenflächen mit Wetter-Verschmutzungen wie Laub, Splitt und Müll. Tiefgaragenreinigung fokussiert auf geschlossene Räume mit Reifenabrieb, Abgasen und Feinstaub. Die Verfahren und Geräte unterscheiden sich entsprechend.',
      },
    },
  ],
}

export default function ParkplatzreinigungPage() {
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
