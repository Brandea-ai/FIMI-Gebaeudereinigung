import { Metadata } from 'next'
import HeroSection from './HeroSection'
import TrustBarSection from './TrustBarSection'
import ProblemLoesungSection from './ProblemLoesungSection'
import MaschinentypenSection from './MaschinentypenSection'
import VerfahrenSection from './VerfahrenSection'
import LeistungsumfangSection from './LeistungsumfangSection'
import ProcessSection from './ProcessSection'
import BranchenSection from './BranchenSection'
import KundenLogosOnly from '@/components/KundenLogosOnly'
import PartnerLogosSlider from '@/components/PartnerLogosSlider'
import RegionenSection from './RegionenSection'
import FAQSection from './FAQSection'
import BlogPreviewSection from './BlogPreviewSection'
import CTASection from './CTASection'
import LeistungFloatingNav from '../_components/LeistungFloatingNav'

export const metadata: Metadata = {
  title: 'Maschinenreinigung Bayern | CNC, Spritzguss & Produktionsanlagen professionell gereinigt',
  description: 'Professionelle Maschinenreinigung in Landshut, München, Ingolstadt und ganz Bayern. CNC-Fräsen, Spritzgussmaschinen, Bearbeitungszentren. Im laufenden Betrieb, 2h Reaktionszeit. Jetzt kostenfreie Besichtigung!',
  keywords: [
    'Maschinenreinigung Bayern',
    'Maschinenreinigung München',
    'Maschinenreinigung Landshut',
    'Maschinenreinigung Ingolstadt',
    'CNC Reinigung',
    'CNC Maschine reinigen lassen',
    'Spritzgussmaschine reinigen',
    'Produktionsanlagen reinigen',
    'Trockeneisreinigung Maschinen',
    'Maschinenreinigung Kosten',
    'Maschinenreinigung Dienstleister',
    'Industriereinigung Maschinen',
    'Anlagenreinigung Bayern',
    'Maschinenreinigung im laufenden Betrieb',
  ].join(', '),
  openGraph: {
    title: 'Maschinenreinigung Bayern | FIMI Gebäudereinigung',
    description: 'CNC-Fräsen, Spritzgussmaschinen, Bearbeitungszentren professionell gereinigt. Im laufenden Betrieb möglich. 2h Reaktionszeit bei Notfällen.',
    type: 'website',
    locale: 'de_DE',
    url: 'https://fimi-service.de/leistungen/maschinenreinigung',
    siteName: 'FIMI Gebäudereinigung',
    images: [
      {
        url: 'https://images.unsplash.com/photo-1565193566173-7a0ee3dbe261?q=80&w=1200&auto=format&fit=crop',
        width: 1200,
        height: 630,
        alt: 'Professionelle Maschinenreinigung von FIMI - CNC-Maschine',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Maschinenreinigung Bayern | FIMI',
    description: 'CNC, Spritzguss & Produktionsanlagen professionell gereinigt. Im laufenden Betrieb möglich.',
  },
  alternates: {
    canonical: 'https://fimi-service.de/leistungen/maschinenreinigung',
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
  name: 'Maschinenreinigung',
  description: 'Professionelle Maschinenreinigung in Bayern. CNC-Fräsen, Spritzgussmaschinen, Bearbeitungszentren, Pressen und Produktionsanlagen. Trockeneisreinigung, Hochdruckreinigung, Heißdampfreinigung. Im laufenden Betrieb möglich.',
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
  serviceType: 'Maschinenreinigung',
  hasOfferCatalog: {
    '@type': 'OfferCatalog',
    name: 'Maschinenreinigung Leistungen',
    itemListElement: [
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'CNC-Maschinenreinigung' } },
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Spritzgussmaschinen-Reinigung' } },
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Trockeneisreinigung' } },
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Hochdruckreinigung' } },
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
      name: 'Was kostet professionelle Maschinenreinigung?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Die Kosten für Maschinenreinigung variieren je nach Maschinentyp, Verschmutzungsgrad und Reinigungsverfahren. Für eine einzelne CNC-Maschine liegen die Kosten typischerweise zwischen 300 und 800 Euro. Nach einer kostenlosen Besichtigung erhalten Sie ein transparentes Festpreisangebot.',
      },
    },
    {
      '@type': 'Question',
      name: 'Können Sie Maschinen im laufenden Betrieb reinigen?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Ja, wir sind darauf spezialisiert, Maschinenreinigung ohne Produktionsunterbrechung durchzuführen. Wir arbeiten in Schichtpausen, nachts oder am Wochenende. Bei Maschinen, die stillstehen müssen, stimmen wir den optimalen Zeitpunkt mit Ihrem Produktionsplan ab.',
      },
    },
    {
      '@type': 'Question',
      name: 'Welche Reinigungsverfahren nutzen Sie für Maschinen?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Je nach Maschinentyp und Verschmutzung setzen wir unterschiedliche Verfahren ein: Trockeneisreinigung für empfindliche Elektronik und Oberflächen, Heißdampfreinigung für KSS-Tanks und Fettablagerungen, Hochdruckreinigung für robuste Komponenten und manuelle Reinigung für Präzisionsarbeiten.',
      },
    },
    {
      '@type': 'Question',
      name: 'Wie kurzfristig können Sie zur Maschinenreinigung kommen?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Bei dringenden Anfragen wie einem bevorstehenden Audit garantieren wir eine Reaktionszeit von 2 Stunden im Raum Landshut und 4 Stunden in ganz Bayern. Für reguläre Einsätze benötigen wir 2-5 Werktage Vorlauf.',
      },
    },
  ],
}

export default function MaschinenreinigungPage() {
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
        <KundenLogosOnly />
        <ProblemLoesungSection />
        <MaschinentypenSection />
        <VerfahrenSection />
        <LeistungsumfangSection />
        <ProcessSection />
        <BranchenSection />
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
