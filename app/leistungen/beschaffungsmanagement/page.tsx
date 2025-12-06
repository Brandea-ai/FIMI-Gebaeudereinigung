import { Metadata } from 'next'
import HeroSection from './HeroSection'
import TrustBarSection from './TrustBarSection'
import ProblemSection from './ProblemSection'
import LoesungSection from './LoesungSection'
import LeistungsumfangSection from './LeistungsumfangSection'
import ZielgruppenSection from './ZielgruppenSection'
import ProcessSection from './ProcessSection'
import VorteileSection from './VorteileSection'
import PartnerLogosSlider from '@/components/PartnerLogosSlider'
import RegionenSection from './RegionenSection'
import FAQSection from './FAQSection'
import BranchenSection from './BranchenSection'
import CTASection from './CTASection'
import LeistungFloatingNav from '../_components/LeistungFloatingNav'

export const metadata: Metadata = {
  title: 'Beschaffungsmanagement Bayern | Einkaufsoptimierung & Strategischer Einkauf',
  description: 'Professionelles Beschaffungsmanagement in Bayern. Einkaufskosten senken, Lieferantenmanagement optimieren, Ausschreibungen begleiten. 5-15% Einsparpotenzial. Kostenfreie Erstberatung.',
  keywords: [
    'Beschaffungsmanagement Bayern',
    'Einkaufsoptimierung',
    'strategischer Einkauf',
    'Einkaufsberatung',
    'Procurement Consulting',
    'Lieferantenmanagement',
    'Kostenoptimierung Einkauf',
    'Einkaufskosten senken',
    'Ausschreibung Unterstützung',
    'Vergabeberatung',
    'Rahmenvertrag Verhandlung',
    'Supply Chain Optimierung',
    'Einkaufsprozesse optimieren',
    'externes Beschaffungsmanagement',
    'Einkauf externe Unterstützung',
  ].join(', '),
  openGraph: {
    title: 'Beschaffungsmanagement Bayern | FIMI',
    description: 'Einkaufskosten senken, Prozesse optimieren, Lieferanten managen. Professionelles Beschaffungsmanagement mit 5-15% Einsparpotenzial.',
    type: 'website',
    locale: 'de_DE',
    url: 'https://fimi-service.de/leistungen/beschaffungsmanagement',
    siteName: 'FIMI Gebäudereinigung',
    images: [
      {
        url: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?q=80&w=1200&auto=format&fit=crop',
        width: 1200,
        height: 630,
        alt: 'Professionelles Beschaffungsmanagement von FIMI',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Beschaffungsmanagement Bayern | FIMI',
    description: 'Einkaufskosten senken mit professionellem Beschaffungsmanagement. 5-15% Einsparpotenzial.',
  },
  alternates: {
    canonical: 'https://fimi-service.de/leistungen/beschaffungsmanagement',
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
  name: 'Beschaffungsmanagement',
  description: 'Professionelles Beschaffungsmanagement und Einkaufsoptimierung in Bayern. Strategischer Einkauf, Lieferantenmanagement, Kostenoptimierung, Ausschreibungsbegleitung für Unternehmen und öffentliche Auftraggeber.',
  provider: {
    '@type': 'LocalBusiness',
    name: 'FIMI Gebäudereinigung',
    image: 'https://fimi-service.de/FIMI-LOGO/FIMI-LOGO-WEIße_Schrift_mit-Hintergrund.png',
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
    { '@type': 'City', name: 'Straubing' },
    { '@type': 'City', name: 'Passau' },
    { '@type': 'City', name: 'Dingolfing' },
  ],
  serviceType: 'Beschaffungsmanagement',
  hasOfferCatalog: {
    '@type': 'OfferCatalog',
    name: 'Beschaffungsmanagement Leistungen',
    itemListElement: [
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: 'Strategischer Einkauf',
        },
      },
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: 'Lieferantenmanagement',
        },
      },
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: 'Ausschreibungsbegleitung',
        },
      },
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: 'Kostenoptimierung',
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
      name: 'Wie viel kann man durch Beschaffungsmanagement einsparen?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Erfahrungsgemäß lassen sich durch professionelles Beschaffungsmanagement 5 bis 15 Prozent der Einkaufskosten einsparen. Bei einem Einkaufsvolumen von 1 Million Euro bedeutet das 50.000 bis 150.000 Euro, die direkt den Gewinn erhöhen.',
      },
    },
    {
      '@type': 'Question',
      name: 'Für welche Unternehmen lohnt sich externes Beschaffungsmanagement?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Externes Beschaffungsmanagement lohnt sich für produzierende Unternehmen mit hohem Materialanteil, Unternehmen mit überlasteten Einkaufsabteilungen, öffentliche Auftraggeber bei Ausschreibungen sowie Firmen, die ihre Lieferantenstruktur optimieren möchten.',
      },
    },
    {
      '@type': 'Question',
      name: 'Wie lange dauert ein Beschaffungsmanagement-Projekt?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Die Projektdauer hängt vom Umfang ab. Erste Einsparungen durch Bündelung und Neuverhandlungen sind oft innerhalb von 3 bis 6 Monaten sichtbar. Prozessuale Änderungen wie die Einführung von E-Procurement benötigen 6 bis 12 Monate.',
      },
    },
    {
      '@type': 'Question',
      name: 'Was kostet Beschaffungsmanagement-Beratung?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Wir bieten verschiedene Modelle an: Projektbasierte Festpreise, Tagessätze oder erfolgsabhängige Vergütung. Bei der erfolgsabhängigen Variante zahlen Sie nur, wenn tatsächlich Einsparungen erzielt werden. Die kostenfreie Erstberatung zeigt Ihre Potenziale auf.',
      },
    },
    {
      '@type': 'Question',
      name: 'Können Sie auch bei öffentlichen Ausschreibungen unterstützen?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Ja, wir unterstützen öffentliche Auftraggeber bei der Vorbereitung und Durchführung von Vergabeverfahren nach VOL, VOB und VgV. Von der Bedarfsermittlung über die Erstellung des Leistungsverzeichnisses bis zur Angebotswertung.',
      },
    },
    {
      '@type': 'Question',
      name: 'Arbeiten Sie auch vor Ort in unserem Unternehmen?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Ja, wir arbeiten hybrid. Die Analysephase und Workshops finden bei Ihnen vor Ort statt, um Prozesse und Strukturen zu verstehen. Recherchen und Verhandlungsvorbereitungen erfolgen remote. Bei Lieferantenverhandlungen begleiten wir Sie persönlich.',
      },
    },
  ],
}

export default function BeschaffungsmanagementPage() {
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
        <ProblemSection />
        <LoesungSection />
        <LeistungsumfangSection />
        <ZielgruppenSection />
        <ProcessSection />
        <VorteileSection />
        <RegionenSection />
        <PartnerLogosSlider
          showHeader={true}
          showStats={false}
          bgColor="#f8f9fa"
        />
        <FAQSection />
        <BranchenSection />
        <CTASection />
      </main>
    </>
  )
}
