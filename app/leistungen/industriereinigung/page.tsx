import { Metadata } from 'next'
import HeroSection from './HeroSection'
import TrustBarSection from './TrustBarSection'
import ProblemLoesungSection from './ProblemLoesungSection'
import LeistungsumfangSection from './LeistungsumfangSection'
import ProcessSection from './ProcessSection'
import KundenLogosOnly from '@/components/KundenLogosOnly'
import PartnerLogosSlider from '@/components/PartnerLogosSlider'
import RegionenSection from './RegionenSection'
import FAQSection from './FAQSection'
import BlogPreviewSection from './BlogPreviewSection'
import CTASection from './CTASection'

export const metadata: Metadata = {
  title: 'Industriereinigung Bayern | Produktionshallen & Maschinen professionell gereinigt',
  description: 'Professionelle Industriereinigung in Landshut, München, Ingolstadt und ganz Bayern. Hallenreinigung, Maschinenreinigung, Entölung. Im laufenden Betrieb möglich. 2h Reaktionszeit. Kostenfreie Besichtigung.',
  keywords: [
    'Industriereinigung Bayern',
    'Industriereinigung München',
    'Industriereinigung Landshut',
    'Industriereinigung Ingolstadt',
    'Industriereinigung Regensburg',
    'Hallenreinigung',
    'Produktionshalle reinigen',
    'Maschinenreinigung',
    'Fabrikreinigung',
    'Industriereinigung Kosten',
    'Hallenreinigung Preise',
    'Produktionsreinigung Bayern',
    'gewerbliche Industriereinigung',
  ].join(', '),
  openGraph: {
    title: 'Industriereinigung Bayern | FIMI Gebäudereinigung',
    description: 'Produktionshallen, Maschinen und Anlagen professionell gereinigt. Im laufenden Betrieb möglich. 2h Reaktionszeit bei Notfällen.',
    type: 'website',
    locale: 'de_DE',
    url: 'https://fimi-service.de/leistungen/industriereinigung',
    siteName: 'FIMI Gebäudereinigung',
    images: [
      {
        url: 'https://images.unsplash.com/photo-1565688534245-05d6b5be184a?q=80&w=1200&auto=format&fit=crop',
        width: 1200,
        height: 630,
        alt: 'Professionelle Industriereinigung von FIMI - Produktionshalle',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Industriereinigung Bayern | FIMI',
    description: 'Produktionshallen & Maschinen professionell gereinigt. Im laufenden Betrieb möglich.',
  },
  alternates: {
    canonical: 'https://fimi-service.de/leistungen/industriereinigung',
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
  name: 'Industriereinigung',
  description: 'Professionelle Industriereinigung in Bayern. Produktionshallen, Maschinen, Anlagen. Hallenreinigung, Maschinenreinigung, Entölung. Im laufenden Betrieb möglich.',
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
    { '@type': 'City', name: 'Dingolfing' },
    { '@type': 'City', name: 'Straubing' },
    { '@type': 'City', name: 'Passau' },
    { '@type': 'City', name: 'Freising' },
  ],
  serviceType: 'Industriereinigung',
}

// Schema.org FAQ
const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'Was kostet Industriereinigung pro Quadratmeter?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Die Kosten für Industriereinigung variieren je nach Verschmutzungsgrad und Verfahren. Für regelmäßige Hallenreinigung liegen die Preise typischerweise zwischen 0,50 und 2,00 Euro pro Quadratmeter. Nach einer kostenlosen Besichtigung erhalten Sie ein transparentes Festpreisangebot.',
      },
    },
    {
      '@type': 'Question',
      name: 'Können Sie auch im laufenden Betrieb reinigen?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Ja, wir sind darauf spezialisiert, Industriereinigung ohne Produktionsunterbrechung durchzuführen. Unsere Teams arbeiten in Schichtpausen, am Wochenende oder parallel zur Produktion in abgegrenzten Bereichen.',
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
  ],
}

export default function IndustriereinigungPage() {
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
        <HeroSection />
        <TrustBarSection />
        <KundenLogosOnly />
        <ProblemLoesungSection />
        <LeistungsumfangSection />
        <ProcessSection />
        <RegionenSection />
        <PartnerLogosSlider
          showHeader={true}
          showStats={false}
          bgColor="#f8f9fa"
        />
        <FAQSection />
        <BlogPreviewSection />
        <CTASection />
      </main>
    </>
  )
}
