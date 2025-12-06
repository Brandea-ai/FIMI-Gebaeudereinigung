import { Metadata } from 'next'
import HeroSection from './HeroSection'
import TrustBarSection from './TrustBarSection'
import ProblemLoesungSection from './ProblemLoesungSection'
import VerschmutzungsartenSection from './VerschmutzungsartenSection'
import LeistungsumfangSection from './LeistungsumfangSection'
import ZielgruppenSection from './ZielgruppenSection'
import ProcessSection from './ProcessSection'
import RegionenSection from './RegionenSection'
import FAQSection from './FAQSection'
import BlogPreviewSection from './BlogPreviewSection'
import CTASection from './CTASection'
import PartnerLogosSlider from '@/components/PartnerLogosSlider'
import LeistungFloatingNav from '../_components/LeistungFloatingNav'

export const metadata: Metadata = {
  title: 'Tiefgaragenreinigung Bayern | Ölflecken & Reifenabrieb entfernen | FIMI',
  description: 'Professionelle Tiefgaragenreinigung in Landshut, München, Regensburg. ✓ Ölflecken entfernen ✓ 2h Reaktionszeit ✓ Transparente Festpreise. Jetzt kostenfreie Besichtigung!',
  keywords: 'Tiefgaragenreinigung, Tiefgarage reinigen, Parkhaus Reinigung, Ölflecken entfernen, Reifenabrieb, Streusalz entfernen, Garagenreinigung Bayern, Tiefgaragenreinigung Landshut, Tiefgaragenreinigung München, Hausverwaltung, WEG, Facility Management',
  openGraph: {
    title: 'Tiefgaragenreinigung Bayern | FIMI Gebäudereinigung',
    description: 'Professionelle Tiefgaragenreinigung für Hausverwaltungen, WEG und Gewerbe. Ölflecken, Reifenabrieb, Streusalz - wir machen Ihre Tiefgarage wieder sauber.',
    type: 'website',
    locale: 'de_DE',
    url: 'https://fimi-service.de/leistungen/tiefgaragenreinigung',
    siteName: 'FIMI Gebäudereinigung',
    images: [
      {
        url: '/FIMI-LOGO/FIMI-LOGO-WEIße_Schrift_mit-Hintergrund.png',
        width: 1200,
        height: 630,
        alt: 'Professionelle Tiefgaragenreinigung - FIMI Gebäudereinigung Bayern',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Tiefgaragenreinigung Bayern | FIMI',
    description: 'Professionelle Tiefgaragenreinigung für Hausverwaltungen und Gewerbe. 2h Reaktionszeit.',
  },
  alternates: {
    canonical: 'https://fimi-service.de/leistungen/tiefgaragenreinigung',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
}

// Schema.org JSON-LD
const serviceSchema = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  name: 'Tiefgaragenreinigung',
  serviceType: 'Tiefgaragenreinigung',
  description: 'Professionelle Tiefgaragenreinigung für Wohnanlagen, Gewerbeimmobilien und öffentliche Parkhäuser. Entfernung von Ölflecken, Reifenabrieb und Streusalzresten.',
  provider: {
    '@type': 'LocalBusiness',
    name: 'FIMI Gebäudereinigung',
    url: 'https://fimi-service.de',
    telephone: '+4987143033460',
    email: 'info@fimi-service.de',
    address: {
      '@type': 'PostalAddress',
      streetAddress: 'Siemensstraße 11',
      addressLocality: 'Landshut',
      postalCode: '84030',
      addressRegion: 'Bayern',
      addressCountry: 'DE',
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: 48.5442,
      longitude: 12.1529,
    },
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
    { '@type': 'City', name: 'Regensburg' },
    { '@type': 'City', name: 'Ingolstadt' },
    { '@type': 'City', name: 'Freising' },
    { '@type': 'City', name: 'Erding' },
    { '@type': 'City', name: 'Straubing' },
    { '@type': 'City', name: 'Passau' },
  ],
  hasOfferCatalog: {
    '@type': 'OfferCatalog',
    name: 'Tiefgaragenreinigung Leistungen',
    itemListElement: [
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: 'Grundreinigung Tiefgarage',
          description: 'Vollständige Grundreinigung inkl. Ölfleckenentfernung und Hochdruckreinigung',
        },
      },
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: 'Unterhaltsreinigung Tiefgarage',
          description: 'Regelmäßige Reinigung zur Werterhaltung',
        },
      },
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: 'Ölfleckenentfernung',
          description: 'Professionelle Entfernung von Öl- und Betriebsstoffflecken',
        },
      },
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: 'Streusalzentfernung',
          description: 'Beseitigung von Streusalzrückständen nach dem Winter',
        },
      },
    ],
  },
}

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'Was kostet eine Tiefgaragenreinigung pro Quadratmeter?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Die Kosten für eine professionelle Tiefgaragenreinigung liegen je nach Verschmutzungsgrad und Größe zwischen 3,50€ und 6,50€ pro Quadratmeter. Für ein individuelles Angebot bieten wir eine kostenfreie Besichtigung an.',
      },
    },
    {
      '@type': 'Question',
      name: 'Wie oft sollte eine Tiefgarage gereinigt werden?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Wir empfehlen mindestens eine Grundreinigung pro Jahr nach der Wintersaison sowie quartalsweise Unterhaltsreinigungen. Bei stark frequentierten Tiefgaragen in Gewerbeimmobilien können häufigere Intervalle sinnvoll sein.',
      },
    },
    {
      '@type': 'Question',
      name: 'Können Sie auch im laufenden Betrieb reinigen?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Ja, wir reinigen auch bei laufendem Betrieb. Durch abschnittsweise Reinigung stellen wir sicher, dass immer ausreichend Parkplätze verfügbar sind. Die Reinigung erfolgt bevorzugt nachts oder am Wochenende.',
      },
    },
    {
      '@type': 'Question',
      name: 'Wer ist für die Tiefgaragenreinigung zuständig?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Die Verantwortung liegt beim Eigentümer bzw. der Eigentümergemeinschaft (WEG). In der Praxis beauftragt meist die Hausverwaltung einen professionellen Dienstleister. Die Kosten können in der Regel auf die Eigentümer umgelegt werden.',
      },
    },
    {
      '@type': 'Question',
      name: 'Wie werden Ölflecken professionell entfernt?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Ölflecken werden mit speziellen Entölungsmitteln vorbehandelt und anschließend mit Hochdruckreinigung und Scheuersaugmaschinen entfernt. Bei tief eingedrungenen Flecken setzen wir zusätzlich Spezialchemie ein.',
      },
    },
    {
      '@type': 'Question',
      name: 'Kann man Tiefgaragenreinigung auf Mieter umlegen?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Die Umlagefähigkeit hängt vom Mietvertrag ab. Ist die Tiefgaragenreinigung als Betriebskosten vereinbart, können die Kosten auf die Mieter umgelegt werden. Wir stellen entsprechende Dokumentation für Ihre Abrechnung bereit.',
      },
    },
  ],
}

export default function TiefgaragenreinigungPage() {
  return (
    <>
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
        <VerschmutzungsartenSection />
        <LeistungsumfangSection />
        <ZielgruppenSection />
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
