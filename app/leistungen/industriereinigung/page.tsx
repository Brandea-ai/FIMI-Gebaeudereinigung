import { Metadata } from 'next'
import HeroSection from './HeroSection'
import TrustBarSection from './TrustBarSection'
import ProblemLoesungSection from './ProblemLoesungSection'
import LeistungsumfangSection from './LeistungsumfangSection'
import BranchenSection from './BranchenSection'
import VerfahrenSection from './VerfahrenSection'
import ProcessSection from './ProcessSection'
import RegionenSection from './RegionenSection'
import ReferenzenSection from './ReferenzenSection'
import FAQSection from './FAQSection'
import BlogPreviewSection from './BlogPreviewSection'
import CTASection from './CTASection'
import KundenLogosOnly from '@/components/KundenLogosOnly'
import PartnerLogosSlider from '@/components/PartnerLogosSlider'
import FloatingNav from '@/components/FloatingNav'

// Navigation items for FloatingNav
const floatingNavItems = [
  { id: 'hero', label: 'Übersicht' },
  { id: 'probleme', label: 'Herausforderungen' },
  { id: 'leistungen', label: 'Leistungen' },
  { id: 'branchen', label: 'Branchen' },
  { id: 'verfahren', label: 'Verfahren' },
  { id: 'prozess', label: 'Ablauf' },
  { id: 'regionen', label: 'Standorte' },
  { id: 'faq', label: 'FAQ' },
  { id: 'kontakt', label: 'Kontakt' },
]

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
    'Trockeneisreinigung Industrie',
    'Industriereinigung Automotive',
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
    priceRange: '€€',
    openingHoursSpecification: {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
      opens: '07:00',
      closes: '18:00',
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
    { '@type': 'City', name: 'Erding' },
  ],
  serviceType: 'Industriereinigung',
  hasOfferCatalog: {
    '@type': 'OfferCatalog',
    name: 'Industriereinigung Leistungen',
    itemListElement: [
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: 'Hallenreinigung',
          description: 'Professionelle Reinigung von Produktions- und Lagerhallen',
        },
      },
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: 'Maschinenreinigung',
          description: 'Fachgerechte Reinigung von Produktionsmaschinen und Anlagen',
        },
      },
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: 'Trockeneisreinigung',
          description: 'Schonende Reinigung mit CO2-Pellets ohne Rückstände',
        },
      },
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: 'Entölung und Entfettung',
          description: 'Professionelle Entfernung von Ölen und Fetten',
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
    {
      '@type': 'Question',
      name: 'Welche Zertifikate und Standards haben Sie?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Wir arbeiten nach den Standards ISO 9001 (Qualitätsmanagement) und ISO 14001 (Umweltmanagement). Unser Personal ist geschult in Arbeitssicherheit, Gefahrstoffen und branchenspezifischen Anforderungen wie HACCP.',
      },
    },
    {
      '@type': 'Question',
      name: 'Wie lange dauert eine Hallenreinigung?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Eine normale Unterhaltsreinigung einer 2.000 m² Halle dauert etwa 4-6 Stunden. Mit unseren Aufsitz-Scheuersaugmaschinen reinigen wir bis zu 5.000 m² pro Stunde.',
      },
    },
  ],
}

// Schema.org HowTo (Prozess)
const howToSchema = {
  '@context': 'https://schema.org',
  '@type': 'HowTo',
  name: 'So funktioniert Industriereinigung bei FIMI',
  description: 'In 4 Schritten zur professionellen Industriereinigung',
  step: [
    {
      '@type': 'HowToStep',
      name: 'Anfrage & Erstgespräch',
      text: 'Kontaktieren Sie uns per Telefon oder Formular. Wir besprechen Ihre Situation und terminieren eine Besichtigung.',
    },
    {
      '@type': 'HowToStep',
      name: 'Besichtigung & Angebot',
      text: 'Wir besichtigen Ihre Räumlichkeiten vor Ort und erstellen ein transparentes Festpreisangebot.',
    },
    {
      '@type': 'HowToStep',
      name: 'Planung & Vorbereitung',
      text: 'Wir planen den Einsatz und stimmen den Zeitpunkt mit Ihrer Produktion ab.',
    },
    {
      '@type': 'HowToStep',
      name: 'Durchführung & Abnahme',
      text: 'Unser Team führt die Reinigung durch und Sie nehmen das Ergebnis ab.',
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
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(howToSchema) }}
      />

      <main className="min-h-screen bg-white">
        {/* Floating Navigation */}
        <FloatingNav items={floatingNavItems} />

        {/* Hero */}
        <HeroSection />

        {/* Trust Stats */}
        <TrustBarSection />

        {/* Kundenlogos - Social Proof */}
        <KundenLogosOnly />

        {/* Problem → Lösung */}
        <ProblemLoesungSection />

        {/* Leistungsumfang */}
        <LeistungsumfangSection />

        {/* Branchen-Spezialisierung */}
        <BranchenSection />

        {/* Reinigungsverfahren */}
        <VerfahrenSection />

        {/* Prozess / Ablauf */}
        <ProcessSection />

        {/* Regionen Bayern */}
        <RegionenSection />

        {/* Partner/Equipment Logos */}
        <PartnerLogosSlider
          showHeader={true}
          showStats={false}
          bgColor="#ffffff"
        />

        {/* Referenzen */}
        <ReferenzenSection />

        {/* FAQ */}
        <FAQSection />

        {/* Blog Preview */}
        <BlogPreviewSection />

        {/* CTA */}
        <CTASection />
      </main>
    </>
  )
}
