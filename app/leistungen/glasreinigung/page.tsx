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
  title: 'Glasreinigung Bayern | Professionelle Fenster- & Fassadenreinigung',
  description: 'Professionelle Glasreinigung in Landshut, München, Regensburg und ganz Bayern. Streifenfreie Fenster, Glasfassaden & Schaufenster. Jetzt kostenfreies Angebot anfragen.',
  keywords: [
    'Glasreinigung Bayern',
    'Glasreinigung Landshut',
    'Glasreinigung München',
    'Fensterreinigung Bayern',
    'Glasfassadenreinigung',
    'Schaufensterreinigung',
    'professionelle Glasreinigung',
    'Fensterputzer Bayern',
    'Glasreinigung Gewerbe',
    'Glasreinigung in der Nähe',
  ].join(', '),
  openGraph: {
    title: 'Glasreinigung Bayern | FIMI Gebäudereinigung',
    description: 'Streifenfreie Fenster und Glasflächen, die Eindruck machen. Professionelle Glasreinigung mit Ergebnis-Garantie.',
    type: 'website',
    locale: 'de_DE',
    url: 'https://fimi-service.de/leistungen/glasreinigung',
    siteName: 'FIMI Gebäudereinigung',
    images: [
      {
        url: 'https://images.unsplash.com/photo-1527515637462-cff94eecc1ac?q=80&w=1200&auto=format&fit=crop',
        width: 1200,
        height: 630,
        alt: 'Professionelle Glasreinigung von FIMI',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Glasreinigung Bayern | FIMI',
    description: 'Professionelle Glasreinigung mit Ergebnis-Garantie. Streifenfrei garantiert.',
  },
  alternates: {
    canonical: 'https://fimi-service.de/leistungen/glasreinigung',
  },
  robots: {
    index: true,
    follow: true,
  },
}

// Schema.org Structured Data
const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  name: 'Glasreinigung',
  description: 'Professionelle Glasreinigung in Bayern. Streifenfreie Reinigung von Fenstern, Glasfassaden, Schaufenstern und Glasflächen aller Art.',
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
    { '@type': 'City', name: 'Regensburg' },
    { '@type': 'City', name: 'Ingolstadt' },
    { '@type': 'City', name: 'Freising' },
    { '@type': 'City', name: 'Erding' },
    { '@type': 'City', name: 'Straubing' },
    { '@type': 'City', name: 'Passau' },
  ],
  serviceType: 'Glasreinigung',
  offers: {
    '@type': 'Offer',
    availability: 'https://schema.org/InStock',
    areaServed: {
      '@type': 'State',
      name: 'Bayern',
    },
  },
}

// FAQ Schema
const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'Was kostet Glasreinigung pro Quadratmeter?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Die Kosten für professionelle Glasreinigung liegen typischerweise zwischen 2 und 5 Euro pro Quadratmeter, abhängig von Art der Glasfläche, Verschmutzungsgrad und Erreichbarkeit.',
      },
    },
    {
      '@type': 'Question',
      name: 'Wie oft sollten Fenster professionell gereinigt werden?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Schaufenster sollten wöchentlich, Bürofenster monatlich oder alle 6-8 Wochen gereinigt werden. Glasfassaden werden meist vierteljährlich oder halbjährlich gereinigt.',
      },
    },
    {
      '@type': 'Question',
      name: 'Was ist Osmose-Reinigung?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Bei der Osmose-Reinigung verwenden wir vollentsalztes Wasser, das Schmutz besonders effektiv löst und streifenfrei abtrocknet. Diese Methode ist umweltfreundlich und ideal für Glasfassaden.',
      },
    },
  ],
}

export default function GlasreinigungPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
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
