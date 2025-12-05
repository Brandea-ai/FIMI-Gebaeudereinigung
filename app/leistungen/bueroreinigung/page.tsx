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
  title: 'Büroreinigung Bayern | Professionelle Reinigung für Ihr Büro',
  description: 'Professionelle Büroreinigung in Landshut, München, Regensburg und ganz Bayern. Festes Personal, 2h Reaktionszeit, ISO-Standards. Jetzt kostenfreie Besichtigung anfragen.',
  keywords: [
    'Büroreinigung Bayern',
    'Büroreinigung Landshut',
    'Büroreinigung München',
    'Büroreinigung Regensburg',
    'Unterhaltsreinigung Büro',
    'professionelle Büroreinigung',
    'Gebäudereinigung Büro',
    'Reinigungsfirma Büro',
    'Office Cleaning Bayern',
    'Büroreinigung in der Nähe',
  ].join(', '),
  openGraph: {
    title: 'Büroreinigung Bayern | FIMI Gebäudereinigung',
    description: 'Saubere Räume, in denen sich Mitarbeiter und Kunden wohlfühlen. Professionelle Büroreinigung mit festem Personal und 2h Reaktionszeit.',
    type: 'website',
    locale: 'de_DE',
    url: 'https://fimi-service.de/leistungen/bueroreinigung',
    siteName: 'FIMI Gebäudereinigung',
    images: [
      {
        url: 'https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=1200&auto=format&fit=crop',
        width: 1200,
        height: 630,
        alt: 'Professionelle Büroreinigung von FIMI',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Büroreinigung Bayern | FIMI',
    description: 'Professionelle Büroreinigung mit festem Personal. 2h Reaktionszeit garantiert.',
  },
  alternates: {
    canonical: 'https://fimi-service.de/leistungen/bueroreinigung',
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
  name: 'Büroreinigung',
  description: 'Professionelle Büroreinigung in Bayern. Regelmäßige Reinigung von Büroflächen, Sanitärbereichen, Teeküchen und Gemeinschaftsräumen.',
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
  serviceType: 'Büroreinigung',
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
      name: 'Was kostet Büroreinigung pro Quadratmeter?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Die Kosten für professionelle Büroreinigung liegen typischerweise zwischen 0,80 und 2,50 Euro pro Quadratmeter, abhängig von Reinigungsintervall und Umfang der Leistungen.',
      },
    },
    {
      '@type': 'Question',
      name: 'Wie oft sollte ein Büro professionell gereinigt werden?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Für Büros mit normalem Publikumsverkehr empfehlen wir 2-3 Mal pro Woche. Arztpraxen oder Räume mit hohem Besucheraufkommen sollten täglich gereinigt werden.',
      },
    },
    {
      '@type': 'Question',
      name: 'Reinigen Sie auch außerhalb der Geschäftszeiten?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Ja, das ist sogar unser Standard. Die meisten Kunden wünschen Reinigung früh morgens, abends oder am Wochenende, um den Betriebsablauf nicht zu stören.',
      },
    },
  ],
}

export default function BueroreinigungPage() {
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
          bgColor="#f8f9fa"
        />
        <FAQSection />
        <BlogPreviewSection />
        <CTASection />
      </main>
    </>
  )
}
