import { Metadata } from 'next'
import HeroSection from './HeroSection'
import TrustBarSection from './TrustBarSection'
import ProblemLoesungSection from './ProblemLoesungSection'
import LeistungsumfangSection from './LeistungsumfangSection'
import TechnikenSection from './TechnikenSection'
import BranchenSection from './BranchenSection'
import ProcessSection from './ProcessSection'
import KundenLogosOnly from '@/components/KundenLogosOnly'
import PartnerLogosSlider from '@/components/PartnerLogosSlider'
import RegionenSection from './RegionenSection'
import FAQSection from './FAQSection'
import CTASection from './CTASection'
import FloatingNav from '@/components/FloatingNav'

// Navigation items for FloatingNav
const floatingNavItems = [
  { id: 'hero', label: 'Übersicht' },
  { id: 'probleme', label: 'Herausforderungen' },
  { id: 'leistungen', label: 'Leistungen' },
  { id: 'techniken', label: 'Techniken' },
  { id: 'branchen', label: 'Branchen' },
  { id: 'prozess', label: 'Ablauf' },
  { id: 'regionen', label: 'Standorte' },
  { id: 'faq', label: 'FAQ' },
  { id: 'kontakt', label: 'Kontakt' },
]

export const metadata: Metadata = {
  title: 'Glasreinigung Bayern | Professionelle Fassadenreinigung für Gewerbe',
  description: 'Professionelle Glasreinigung in Landshut, München, Regensburg und ganz Bayern. Osmose-Technik für streifenfreie Glasfassaden. Industriekletterer für alle Höhen. Jetzt kostenfreie Besichtigung anfragen.',
  keywords: [
    'Glasreinigung Bayern',
    'Glasreinigung Landshut',
    'Glasreinigung München',
    'Glasreinigung Regensburg',
    'Glasfassadenreinigung',
    'Fassadenreinigung Glas',
    'Osmose Glasreinigung',
    'Industriekletterer Glasreinigung',
    'Glasreinigung Gewerbe',
    'professionelle Glasreinigung',
    'Glasflächen reinigen lassen',
    'Glasreinigung in der Nähe',
    'Schaufensterreinigung',
    'Wintergartenreinigung',
  ].join(', '),
  openGraph: {
    title: 'Glasreinigung Bayern | FIMI Gebäudereinigung',
    description: 'Glasflächen, die beeindrucken. Professionelle Glasreinigung mit Osmose-Technik und Industriekletterern für alle Höhen.',
    type: 'website',
    locale: 'de_DE',
    url: 'https://fimi-service.de/leistungen/glasreinigung',
    siteName: 'FIMI Gebäudereinigung',
    images: [
      {
        url: 'https://images.unsplash.com/photo-1596178060671-7a80dc8059ea?q=80&w=1200&auto=format&fit=crop',
        width: 1200,
        height: 630,
        alt: 'Professionelle Glasreinigung von FIMI',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Glasreinigung Bayern | FIMI',
    description: 'Professionelle Glasreinigung mit Osmose-Technik. Streifenfrei garantiert.',
  },
  alternates: {
    canonical: 'https://fimi-service.de/leistungen/glasreinigung',
  },
  robots: {
    index: true,
    follow: true,
  },
}

// Schema.org Structured Data - Service
const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  name: 'Glasreinigung',
  description: 'Professionelle Glasreinigung in Bayern. Streifenfreie Glasfassaden mit Osmose-Technik, Industriekletterern und modernster Ausstattung. Für Bürogebäude, Einkaufszentren, Hotels und Industrieobjekte.',
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
  serviceType: 'Glasreinigung',
  hasOfferCatalog: {
    '@type': 'OfferCatalog',
    name: 'Glasreinigung Leistungen',
    itemListElement: [
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: 'Glasfassadenreinigung',
        },
      },
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: 'Osmose-Reinigung',
        },
      },
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: 'Schaufensterreinigung',
        },
      },
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: 'Wintergartenreinigung',
        },
      },
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: 'Industriekletterer-Reinigung',
        },
      },
    ],
  },
}

// FAQ Schema
const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'Was kostet professionelle Glasreinigung?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Professionelle Glasreinigung kostet typischerweise zwischen 3 und 8 Euro pro Quadratmeter. Der genaue Preis hängt von Zugänglichkeit, Höhe, Verschmutzungsgrad und Technik ab. Für Glasfassaden mit Industriekletterern oder Osmose-Technik liegt der Preis meist im oberen Bereich. Bei einer kostenfreien Besichtigung erstellen wir Ihnen ein transparentes Festpreisangebot.',
      },
    },
    {
      '@type': 'Question',
      name: 'Was ist Osmose-Reinigung und warum ist sie besser?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Bei der Osmose-Reinigung wird Leitungswasser durch spezielle Filter von allen Mineralien befreit. Dieses Reinwasser hat eine starke Lösekraft und hinterlässt beim Trocknen keine Kalk- oder Wasserflecken. Das Ergebnis: Streifenfreie Glasflächen, die deutlich länger sauber bleiben als bei herkömmlicher Reinigung.',
      },
    },
    {
      '@type': 'Question',
      name: 'Reinigen Sie auch Glasfassaden in großer Höhe?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Ja, wir sind auf Höhenarbeiten spezialisiert. Mit Teleskopstangen erreichen wir bis 18 Meter vom Boden aus. Für höhere Glasfassaden setzen wir zertifizierte Industriekletterer oder Hubarbeitsbühnen ein. Unsere Teams haben alle erforderlichen Sicherheitszertifikate und arbeiten nach DGUV-Vorschriften.',
      },
    },
    {
      '@type': 'Question',
      name: 'Wie oft sollte man Glasfassaden reinigen lassen?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Die optimale Frequenz hängt von Standort und Umgebung ab. Glasfassaden an stark befahrenen Straßen empfehlen wir 4-6 mal jährlich. In ruhigeren Lagen reicht oft eine vierteljährliche Reinigung. Schaufenster im Einzelhandel sollten wöchentlich bis 14-tägig gereinigt werden. Wir erstellen einen individuellen Plan für Ihr Objekt.',
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
        <FloatingNav items={floatingNavItems} />
        <HeroSection />
        <TrustBarSection />
        <KundenLogosOnly />
        <ProblemLoesungSection />
        <LeistungsumfangSection />
        <TechnikenSection />
        <BranchenSection />
        <ProcessSection />
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
