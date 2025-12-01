import { Metadata } from 'next'
import HeroSection from './HeroSection'
import TrustBarSection from './TrustBarSection'
import ProblemLoesungSection from './ProblemLoesungSection'
import LeistungsumfangSection from './LeistungsumfangSection'
import ProcessSection from './ProcessSection'
import KundenLogosSlider from '@/components/KundenLogosSlider'
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
  { id: 'leistungen', label: 'Leistungen' },
  { id: 'prozess', label: 'Ablauf' },
  { id: 'regionen', label: 'Standorte' },
  { id: 'faq', label: 'FAQ' },
  { id: 'kontakt', label: 'Kontakt' },
]

export const metadata: Metadata = {
  title: 'Unterhaltsreinigung Bayern | Regelmäßige Gebäudereinigung',
  description: 'Professionelle Unterhaltsreinigung in Landshut, München, Regensburg und ganz Bayern. Festes Personal, 2h Reaktionszeit, ISO-Standards. Jetzt kostenfreie Besichtigung anfragen.',
  keywords: [
    'Unterhaltsreinigung Bayern',
    'Unterhaltsreinigung Landshut',
    'Unterhaltsreinigung München',
    'Unterhaltsreinigung Regensburg',
    'regelmäßige Gebäudereinigung',
    'professionelle Reinigung',
    'Gebäudereinigung Bayern',
    'Reinigungsfirma Bayern',
    'Facility Cleaning Bayern',
    'Unterhaltsreinigung in der Nähe',
  ].join(', '),
  openGraph: {
    title: 'Unterhaltsreinigung Bayern | FIMI Gebäudereinigung',
    description: 'Regelmäßige Reinigung für Büros, Praxen, Einzelhandel und mehr. Festes Personal, 2h Reaktionszeit garantiert.',
    type: 'website',
    locale: 'de_DE',
    url: 'https://fimi-service.de/leistungen/unterhaltsreinigung',
    siteName: 'FIMI Gebäudereinigung',
    images: [
      {
        url: 'https://images.unsplash.com/photo-1600880292203-757bb62b4baf?q=80&w=1200&auto=format&fit=crop',
        width: 1200,
        height: 630,
        alt: 'Professionelle Unterhaltsreinigung von FIMI',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Unterhaltsreinigung Bayern | FIMI',
    description: 'Professionelle regelmäßige Reinigung mit festem Personal. 2h Reaktionszeit garantiert.',
  },
  alternates: {
    canonical: 'https://fimi-service.de/leistungen/unterhaltsreinigung',
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
  name: 'Unterhaltsreinigung',
  description: 'Professionelle Unterhaltsreinigung in Bayern. Regelmäßige Reinigung von Büros, Praxen, Einzelhandel, Produktion und mehr.',
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
  serviceType: 'Unterhaltsreinigung',
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
      name: 'Was kostet Unterhaltsreinigung pro Quadratmeter?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Die Kosten für professionelle Unterhaltsreinigung liegen typischerweise zwischen 0,80 und 2,50 Euro pro Quadratmeter, abhängig von Reinigungsintervall und Umfang der Leistungen.',
      },
    },
    {
      '@type': 'Question',
      name: 'Was ist der Unterschied zwischen Unterhaltsreinigung und Büroreinigung?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Unterhaltsreinigung ist der Oberbegriff für alle regelmäßigen Reinigungsarbeiten. Büroreinigung ist eine spezifische Form davon, die sich auf Büroumgebungen konzentriert.',
      },
    },
    {
      '@type': 'Question',
      name: 'Wie oft sollte eine Unterhaltsreinigung stattfinden?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Die optimale Frequenz hängt von der Nutzung ab. Stark frequentierte Bereiche empfehlen wir täglich, Büroflächen 2-3x pro Woche, selten genutzte Räume wöchentlich.',
      },
    },
  ],
}

export default function UnterhaltsreinigungPage() {
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
        <FloatingNav items={floatingNavItems} />
        <HeroSection />
        <TrustBarSection />
        <KundenLogosSlider
          showHeader={true}
          showStats={false}
          bgColor="#ffffff"
        />
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
