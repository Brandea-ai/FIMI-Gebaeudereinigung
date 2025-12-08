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
  title: 'Fensterreinigung Bayern | Professionelle Glasreinigung für Gewerbe',
  description: 'Professionelle Fensterreinigung in Landshut, München, Regensburg und ganz Bayern. Streifenfrei garantiert. Feste Teams. Flexible Intervalle. Jetzt kostenfreie Besichtigung anfragen.',
  keywords: [
    'Fensterreinigung Bayern',
    'Fensterreinigung Landshut',
    'Fensterreinigung München',
    'Fensterreinigung Regensburg',
    'Glasreinigung Gewerbe',
    'Fenster putzen lassen Firma',
    'professionelle Fensterreinigung',
    'Schaufensterreinigung',
    'Glasfassade reinigen',
    'gewerbliche Fensterreinigung',
    'Fensterreinigung Unternehmen',
    'Fensterreinigung in der Nähe',
  ].join(', '),
  openGraph: {
    title: 'Fensterreinigung Bayern | FIMI Gebäudereinigung',
    description: 'Klarer Durchblick für Ihr Unternehmen. Professionelle Fensterreinigung mit festem Team und streifenfreier Garantie.',
    type: 'website',
    locale: 'de_DE',
    url: 'https://fimi-gebaeudereinigung.de/leistungen/fensterreinigung',
    siteName: 'FIMI Gebäudereinigung',
    images: [
      {
        url: 'https://images.unsplash.com/photo-1527515637462-cff94eecc1ac?q=80&w=1200&auto=format&fit=crop',
        width: 1200,
        height: 630,
        alt: 'Professionelle Fensterreinigung von FIMI',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Fensterreinigung Bayern | FIMI',
    description: 'Professionelle Fensterreinigung mit festem Team. Streifenfrei garantiert.',
  },
  alternates: {
    canonical: 'https://fimi-gebaeudereinigung.de/leistungen/fensterreinigung',
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
  name: 'Fensterreinigung',
  description: 'Professionelle Fensterreinigung in Bayern. Streifenfreie Glasflächen für Büros, Geschäfte, Praxen und Industriegebäude. Rahmenreinigung, Schaufenster, Glasfassaden.',
  provider: {
    '@type': 'LocalBusiness',
    name: 'FIMI Gebäudereinigung',
    image: 'https://fimi-gebaeudereinigung.de/FIMI-LOGO/FIMI-LOGO-WEIße_Schrift_mit-Hintergrund.png',
    telephone: '+4987143033460',
    email: 'info@fimi-gebaeudereinigung.de',
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
  serviceType: 'Fensterreinigung',
  hasOfferCatalog: {
    '@type': 'OfferCatalog',
    name: 'Fensterreinigung Leistungen',
    itemListElement: [
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: 'Fensterreinigung innen und außen',
        },
      },
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: 'Rahmenreinigung',
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
          name: 'Glasfassadenreinigung',
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
      name: 'Was kostet Fensterreinigung pro Quadratmeter?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Professionelle Fensterreinigung kostet typischerweise zwischen 2 und 5 Euro pro Quadratmeter. Der genaue Preis hängt von Zugänglichkeit, Verschmutzungsgrad und Reinigungsintervall ab. Bei einer kostenfreien Besichtigung erstellen wir Ihnen ein transparentes Festpreisangebot.',
      },
    },
    {
      '@type': 'Question',
      name: 'Wie oft sollte man Fenster professionell reinigen lassen?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Die optimale Frequenz hängt von der Nutzung ab. Schaufenster im Einzelhandel empfehlen wir wöchentlich bis 14-tägig. Bürofenster sind meist mit monatlicher oder vierteljährlicher Reinigung gut bedient. Wir erstellen gemeinsam einen Plan, der zu Ihrem Bedarf passt.',
      },
    },
    {
      '@type': 'Question',
      name: 'Reinigen Sie auch schwer erreichbare Fenster?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Ja, mit Teleskopstangen erreichen wir Höhen bis 18 Meter. Für höhere Glasflächen oder Glasfassaden setzen wir Hubsteiger ein. Unsere Teams sind für Arbeiten in der Höhe geschult und verfügen über alle notwendigen Sicherheitszertifikate.',
      },
    },
  ],
}

export default function FensterreinigungPage() {
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
