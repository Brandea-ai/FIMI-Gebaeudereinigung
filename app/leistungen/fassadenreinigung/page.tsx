import { Metadata } from 'next'
import HeroSection from './HeroSection'
import TrustBarSection from './TrustBarSection'
import ProblemLoesungSection from './ProblemLoesungSection'
import VorherNachherSection from './VorherNachherSection'
import LeistungsumfangSection from './LeistungsumfangSection'
import VerfahrenSection from './VerfahrenSection'
import RegionenSection from './RegionenSection'
import BranchenSection from './BranchenSection'
import ProcessSection from './ProcessSection'
import FAQSection from './FAQSection'
import BlogPreviewSection from './BlogPreviewSection'
import CTASection from './CTASection'
import PartnerLogosSlider from '@/components/PartnerLogosSlider'
import LeistungFloatingNav from '../_components/LeistungFloatingNav'

export const metadata: Metadata = {
  title: 'Fassadenreinigung Bayern | Algen & Moos entfernen | FIMI',
  description: 'Professionelle Fassadenreinigung in Landshut, München, Regensburg. Algen, Moos, Grünbelag schonend entfernen. 5-10 Jahre Schutz mit Imprägnierung. Kostenfreie Besichtigung.',
  keywords: [
    'Fassadenreinigung Bayern',
    'Fassadenreinigung Landshut',
    'Fassadenreinigung München',
    'Fassadenreinigung Regensburg',
    'Algen Fassade entfernen',
    'Moos Hauswand entfernen',
    'WDVS reinigen',
    'Dämmfassade reinigen',
    'Fassadenreinigung Angebot',
    'Fassadenreinigung Mehrfamilienhaus',
    'Grünbelag Fassade entfernen',
    'Fassadenreinigung Gewerbe',
    'professionelle Fassadenreinigung',
    'Hausfassade reinigen lassen',
  ].join(', '),
  openGraph: {
    title: 'Fassadenreinigung Bayern | FIMI Gebäudereinigung',
    description: 'Vergrünte Fassade? Wir entfernen Algen, Moos und Grünbelag schonend und nachhaltig. Günstiger als Neuanstrich. Kostenfreie Besichtigung.',
    type: 'website',
    locale: 'de_DE',
    url: 'https://fimi-gebaeudereinigung.de/leistungen/fassadenreinigung',
    siteName: 'FIMI Gebäudereinigung',
    images: [
      {
        url: 'https://fimi-gebaeudereinigung.de/images/leistungen/fassadenreinigung/hero.avif',
        width: 1376,
        height: 590,
        alt: 'Professionelle Fassadenreinigung von FIMI',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Fassadenreinigung Bayern | FIMI',
    description: 'Algen & Moos entfernen. Günstiger als Neuanstrich. Kostenfreie Besichtigung.',
  },
  alternates: {
    canonical: 'https://fimi-gebaeudereinigung.de/leistungen/fassadenreinigung',
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
  name: 'Fassadenreinigung',
  description: 'Professionelle Fassadenreinigung in Bayern. Schonende Entfernung von Algen, Moos und Grünbelag. Geeignet für WDVS, Putz, Klinker und alle Fassadentypen. Mit Langzeit-Imprägnierung.',
  provider: {
    '@type': 'LocalBusiness',
    name: 'FIMI Gebäudereinigung',
    image: 'https://fimi-gebaeudereinigung.de/FIMI-LOGO/fimi-logo-weiss-mit-hintergrund.png',
    telephone: '+4987120669360',
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
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: '4.9',
      reviewCount: '47',
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
  serviceType: 'Fassadenreinigung',
  hasOfferCatalog: {
    '@type': 'OfferCatalog',
    name: 'Fassadenreinigung Leistungen',
    itemListElement: [
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: 'Algen- und Moosentfernung',
        },
      },
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: 'WDVS-Fassadenreinigung',
        },
      },
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: 'Fassaden-Imprägnierung',
        },
      },
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: 'Graffiti-Entfernung',
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
      name: 'Wie läuft eine professionelle Fassadenreinigung ab?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Nach einer kostenfreien Besichtigung erstellen wir ein individuelles Angebot. Die Reinigung erfolgt mit schonenden Niederdruckverfahren, die Algen und Moos entfernen ohne die Fassade zu beschädigen. Auf Wunsch folgt eine Langzeit-Imprägnierung.',
      },
    },
    {
      '@type': 'Question',
      name: 'Wie lange hält eine professionelle Fassadenreinigung?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Mit einer professionellen Imprägnierung bleibt Ihre Fassade 5-10 Jahre sauber. Der Schutzfilm verhindert, dass sich neue Algen und Moose ansiedeln können. Ohne Imprägnierung beginnt die Vergrünung je nach Standort nach 2-3 Jahren erneut.',
      },
    },
    {
      '@type': 'Question',
      name: 'Kann man WDVS-Fassaden (Dämmfassaden) reinigen?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Ja, mit dem richtigen Verfahren. Wir verwenden ein schonendes Niederdruck-System, das die empfindliche Putzoberfläche nicht beschädigt. Hochdruckreiniger sind für WDVS ungeeignet und können die Fassade zerstören.',
      },
    },
    {
      '@type': 'Question',
      name: 'Warum wird meine Fassade grün?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Moderne Dämmfassaden (WDVS) speichern keine Wärme an der Oberfläche. Nachts kühlt die Fassade stark ab, Feuchtigkeit kondensiert. Diese feuchte Umgebung ist ideal für Algen und Moose. Besonders Nordseiten und schattige Bereiche sind betroffen.',
      },
    },
    {
      '@type': 'Question',
      name: 'Brauche ich ein Gerüst für die Fassadenreinigung?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'In den meisten Fällen nicht. Mit unserem Teleskopsystem erreichen wir Höhen bis 18 Meter ohne Gerüst. Bei sehr hohen Gebäuden setzen wir Drohnentechnologie oder Hubsteiger ein.',
      },
    },
    {
      '@type': 'Question',
      name: 'Welche Fassadentypen können Sie reinigen?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Wir reinigen alle gängigen Fassadentypen: WDVS, Putzfassaden, Klinker, Naturstein, Beton und Holz. Für jeden Untergrund wählen wir das passende Verfahren, um optimale Ergebnisse zu erzielen.',
      },
    },
  ],
}

export default function FassadenreinigungPage() {
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
        {/* Hero + Trust + Social Proof */}
        <HeroSection />
        <TrustBarSection />

        {/* Problem → Lösung → Beweis */}
        <ProblemLoesungSection />
        <VorherNachherSection />

        {/* Was wir tun + Wie wir es tun */}
        <LeistungsumfangSection />
        <VerfahrenSection />

        {/* Lokale Relevanz + Zielgruppen */}
        <RegionenSection />
        <BranchenSection />

        {/* Prozess */}
        <ProcessSection />

        {/* Trust + SEO */}
        <PartnerLogosSlider
          showHeader={true}
          showStats={false}
          bgColor="#f8f9fa"
        />
        <FAQSection />
        <BlogPreviewSection />

        {/* Final CTA */}
        <CTASection />
      </main>
    </>
  )
}
