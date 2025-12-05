import { Metadata } from 'next'
import HeroSection from './HeroSection'
import TrustBarSection from './TrustBarSection'
import ProblemLoesungSection from './ProblemLoesungSection'
import LeistungsumfangSection from './LeistungsumfangSection'
import HaftungSection from './HaftungSection'
import EinsatzgebieteSection from './EinsatzgebieteSection'
import ProcessSection from './ProcessSection'
import KundenLogosOnly from '@/components/KundenLogosOnly'
import PartnerLogosSlider from '@/components/PartnerLogosSlider'
import RegionenSection from './RegionenSection'
import FAQSection from './FAQSection'
import BlogPreviewSection from './BlogPreviewSection'
import CTASection from './CTASection'
import LeistungFloatingNav from '../_components/LeistungFloatingNav'

export const metadata: Metadata = {
  title: 'Winterdienst Bayern | Professionelle Schneeräumung & Streudienst',
  description: 'Professioneller Winterdienst in Landshut, München, Regensburg und ganz Bayern. ✓ 24/7 Bereitschaft ✓ Haftungsübernahme ✓ 2h Reaktionszeit ✓ Rechtssichere Dokumentation. Jetzt kostenfreie Besichtigung!',
  keywords: [
    'Winterdienst Bayern',
    'Winterdienst Landshut',
    'Winterdienst München',
    'Winterdienst Regensburg',
    'Winterdienst Gewerbe',
    'Schneeräumung Firma',
    'Streudienst Bayern',
    'Winterdienst Firmenparkplatz',
    'Winterdienst Hausverwaltung',
    'Räumdienst Bayern',
    'professioneller Winterdienst',
    'Winterdienst mit Haftungsübernahme',
    'Winterdienst 24 Stunden',
    'Verkehrssicherungspflicht Winterdienst',
  ].join(', '),
  openGraph: {
    title: 'Winterdienst Bayern | FIMI Gebäudereinigung',
    description: 'Professionelle Schneeräumung und Streudienst für Gewerbe, Hausverwaltungen und Industrie. 24/7 Bereitschaft, Haftungsübernahme, 2h Reaktionszeit.',
    type: 'website',
    locale: 'de_DE',
    url: 'https://fimi-service.de/leistungen/winterdienst',
    siteName: 'FIMI Gebäudereinigung',
    images: [
      {
        url: 'https://images.unsplash.com/photo-1517299321609-52687d1bc55a?q=80&w=1200&auto=format&fit=crop',
        width: 1200,
        height: 630,
        alt: 'Professioneller Winterdienst von FIMI - Schneeräumung Bayern',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Winterdienst Bayern | FIMI',
    description: 'Professionelle Schneeräumung mit Haftungsübernahme. 24/7 Bereitschaft, 2h Reaktionszeit.',
  },
  alternates: {
    canonical: 'https://fimi-service.de/leistungen/winterdienst',
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
  name: 'Winterdienst',
  description: 'Professioneller Winterdienst in Bayern. Schneeräumung, Streudienst, Verkehrssicherung für Gewerbe, Hausverwaltungen und Industrie. Mit Haftungsübernahme und rechtssicherer Dokumentation.',
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
  serviceType: 'Winterdienst',
  hasOfferCatalog: {
    '@type': 'OfferCatalog',
    name: 'Winterdienst Leistungen',
    itemListElement: [
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: 'Schneeräumung',
        },
      },
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: 'Streudienst',
        },
      },
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: 'Verkehrssicherung',
        },
      },
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: 'Einsatzdokumentation',
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
      name: 'Was kostet Winterdienst für Gewerbe pro Saison?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Die Kosten hängen von Flächengröße, Räumfrequenz und Vertragslaufzeit ab. Für einen mittelgroßen Firmenparkplatz (500-1000 m²) liegt die Saisonpauschale zwischen 1.500 und 3.500 Euro. Bei einer Einsatzabrechnung zahlen Sie nur bei tatsächlichem Schneefall.',
      },
    },
    {
      '@type': 'Question',
      name: 'Wer haftet, wenn jemand auf meinem Grundstück ausrutscht?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Ohne Winterdienst-Vertrag haften Sie als Grundstückseigentümer gemäß § 823 BGB. Mit einem FIMI-Vertrag übertragen Sie die Verkehrssicherungspflicht vertraglich auf uns. Unsere Betriebshaftpflicht (5 Mio. € Deckung) sichert Schäden ab.',
      },
    },
    {
      '@type': 'Question',
      name: 'Ab wann morgens muss geräumt sein?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Werktags gilt die Räumpflicht ab 7:00 Uhr, an Sonn- und Feiertagen ab 8:00 oder 9:00 Uhr. Unsere Teams starten bei Bedarf bereits um 5:30 Uhr, damit Ihre Flächen pünktlich sicher sind.',
      },
    },
    {
      '@type': 'Question',
      name: 'Räumen Sie auch am Wochenende und an Feiertagen?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Ja, unsere 24/7-Bereitschaft gilt von November bis März durchgehend – auch an Weihnachten und Silvester. Für Objekte mit hohem Publikumsverkehr bieten wir auch Räumung bis in die späten Abendstunden.',
      },
    },
    {
      '@type': 'Question',
      name: 'Welche Streumittel verwenden Sie?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Wir setzen auf umweltfreundliche Streumittel wie Splitt, Sand oder spezielles Winterstreu-Granulat. Salz verwenden wir nur dort, wo es kommunal erlaubt und notwendig ist. Nach der Saison entfernen wir das Streugut fachgerecht.',
      },
    },
    {
      '@type': 'Question',
      name: 'Was passiert bei Schneefall in der Nacht?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Unsere Einsatzleitung überwacht die Wetterlage rund um die Uhr. Bei nächtlichem Schneefall alarmieren wir unsere Teams automatisch, sodass die Räumung vor Ihrem Betriebsbeginn abgeschlossen ist.',
      },
    },
    {
      '@type': 'Question',
      name: 'Können Sie mehrere Standorte gleichzeitig betreuen?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Ja, viele unserer Kunden – besonders Hausverwaltungen und Filialisten – betreuen wir an mehreren Standorten in Bayern. Sie haben einen zentralen Ansprechpartner, und wir koordinieren alle Objekte intern.',
      },
    },
    {
      '@type': 'Question',
      name: 'Wie kurzfristig kann ich Winterdienst buchen?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Grundsätzlich empfehlen wir, den Winterdienst im Herbst (September/Oktober) zu beauftragen. Aber auch kurzfristige Anfragen nehmen wir gerne an – je nach Kapazität können wir innerhalb von 3-5 Werktagen starten.',
      },
    },
  ],
}

export default function WinterdienstPage() {
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
        {/* Hero + Trust + Social Proof */}
        <HeroSection />
        <TrustBarSection />
        <KundenLogosOnly />

        {/* Problem → Lösung */}
        <ProblemLoesungSection />

        {/* Was wir tun */}
        <LeistungsumfangSection />

        {/* Differenzierung: Haftung */}
        <HaftungSection />

        {/* Zielgruppen */}
        <EinsatzgebieteSection />

        {/* Prozess */}
        <ProcessSection />

        {/* Lokale Relevanz */}
        <RegionenSection />

        {/* Trust */}
        <PartnerLogosSlider
          showHeader={true}
          showStats={false}
          bgColor="#f8f9fa"
        />

        {/* SEO + Content */}
        <FAQSection />
        <BlogPreviewSection />

        {/* Final CTA */}
        <CTASection />
      </main>
    </>
  )
}
