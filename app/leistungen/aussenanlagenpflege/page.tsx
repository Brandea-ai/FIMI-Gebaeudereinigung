import { Metadata } from 'next'
import HeroSection from './HeroSection'
import TrustBarSection from './TrustBarSection'
import ProblemLoesungSection from './ProblemLoesungSection'
import LeistungsumfangSection from './LeistungsumfangSection'
import JahreszeitenSection from './JahreszeitenSection'
import ProcessSection from './ProcessSection'
import PartnerLogosSlider from '@/components/PartnerLogosSlider'
import RegionenSection from './RegionenSection'
import FAQSection from './FAQSection'
import BlogPreviewSection from './BlogPreviewSection'
import CTASection from './CTASection'
import LeistungFloatingNav from '../_components/LeistungFloatingNav'

export const metadata: Metadata = {
  title: 'Außenanlagenpflege Bayern | Grünpflege für Gewerbe & Wohnanlagen',
  description: 'Professionelle Außenanlagenpflege in Landshut, München, Regensburg und ganz Bayern. Rasenpflege, Heckenschnitt, Laubbeseitigung. Festes Team, alles aus einer Hand. Jetzt kostenfreie Besichtigung!',
  keywords: [
    'Außenanlagenpflege Bayern',
    'Außenanlagenpflege Landshut',
    'Außenanlagenpflege München',
    'Grünflächenpflege Gewerbe',
    'Grünpflege Wohnanlage',
    'Gartenpflege Firma Bayern',
    'Rasenpflege Unternehmen',
    'Heckenschnitt Gewerbe',
    'Grundstückspflege Bayern',
    'Grünpflege Hausverwaltung',
    'Außenanlagen pflegen lassen',
    'Grünflächenpflege in der Nähe',
  ].join(', '),
  openGraph: {
    title: 'Außenanlagenpflege Bayern | FIMI Gebäudereinigung',
    description: 'Gepflegte Außenanlagen für Gewerbe und Wohnanlagen. Rasenpflege, Heckenschnitt, Laubbeseitigung – alles aus einer Hand. Festes Team, keine Sorgen.',
    type: 'website',
    locale: 'de_DE',
    url: 'https://fimi-service.de/leistungen/aussenanlagenpflege',
    siteName: 'FIMI Gebäudereinigung',
    images: [
      {
        url: 'https://images.unsplash.com/photo-1558904541-efa843a96f01?q=80&w=1200&auto=format&fit=crop',
        width: 1200,
        height: 630,
        alt: 'Professionelle Außenanlagenpflege von FIMI – gepflegte Grünflächen',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Außenanlagenpflege Bayern | FIMI',
    description: 'Gepflegte Grünflächen für Gewerbe und Wohnanlagen. Alles aus einer Hand.',
  },
  alternates: {
    canonical: 'https://fimi-service.de/leistungen/aussenanlagenpflege',
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
  name: 'Außenanlagenpflege',
  description: 'Professionelle Außenanlagenpflege in Bayern. Rasenpflege, Heckenschnitt, Beetpflege, Laubbeseitigung, Baumpflege und Grauflächenpflege für Gewerbeimmobilien und Wohnanlagen.',
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
    { '@type': 'City', name: 'Erding' },
    { '@type': 'City', name: 'Straubing' },
    { '@type': 'City', name: 'Passau' },
  ],
  serviceType: 'Außenanlagenpflege',
  hasOfferCatalog: {
    '@type': 'OfferCatalog',
    name: 'Außenanlagenpflege Leistungen',
    itemListElement: [
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: 'Rasenpflege',
          description: 'Mähen, Vertikutieren, Düngen, Nachsaat',
        },
      },
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: 'Gehölzschnitt',
          description: 'Hecken, Sträucher, Formschnitt',
        },
      },
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: 'Beetpflege',
          description: 'Unkrautentfernung, Pflanzung, Mulchen',
        },
      },
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: 'Laubbeseitigung',
          description: 'Grünflächen, Wege, Dachrinnen',
        },
      },
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: 'Baumpflege',
          description: 'Kontrolle, Schnitt, Fällung',
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
      name: 'Was kostet Außenanlagenpflege pro Quadratmeter?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Die Kosten für professionelle Außenanlagenpflege liegen typischerweise zwischen 0,50 und 2,00 Euro pro Quadratmeter, abhängig von Pflegeumfang, Bepflanzung und Intervall. Nach einer kostenlosen Besichtigung erhalten Sie ein transparentes Festpreisangebot ohne versteckte Kosten.',
      },
    },
    {
      '@type': 'Question',
      name: 'Wie oft sollte der Rasen gemäht werden?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'In der Hauptwachstumszeit von April bis Oktober empfehlen wir eine Mahd alle 7 bis 14 Tage, je nach Witterung und gewünschter Rasenhöhe. Im Frühjahr und Herbst reicht oft ein 14-tägiger Rhythmus. Wir erstellen einen individuellen Pflegeplan für Ihre Flächen.',
      },
    },
    {
      '@type': 'Question',
      name: 'Übernehmen Sie auch Winterdienst für die Außenanlagen?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Ja, wir bieten Außenanlagenpflege und Winterdienst als Komplettpaket an. So haben Sie einen Ansprechpartner für das ganze Jahr. Der Winterdienst umfasst Räumen, Streuen und die Dokumentation zur Erfüllung Ihrer Verkehrssicherungspflicht.',
      },
    },
    {
      '@type': 'Question',
      name: 'Was ist mit der Verkehrssicherungspflicht bei Außenanlagen?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Als Grundstückseigentümer oder Verwalter tragen Sie die Verkehrssicherungspflicht. Wir dokumentieren alle Pflegemaßnahmen lückenlos und führen regelmäßige Kontrollgänge durch. Bei Bäumen prüfen wir auf Totholz und Standsicherheit. Diese Dokumentation dient Ihrer rechtlichen Absicherung.',
      },
    },
    {
      '@type': 'Question',
      name: 'Pflegen Sie auch große Gewerbeflächen?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Ja, wir betreuen Außenanlagen jeder Größe – vom Bürogebäude mit 500 Quadratmetern bis zum Industriegelände mit 50.000 Quadratmetern. Für große Flächen setzen wir professionelle Aufsitzmäher und Industriegeräte ein, um effizient und kostengünstig zu arbeiten.',
      },
    },
    {
      '@type': 'Question',
      name: 'Wie kurzfristig können Sie mit der Pflege beginnen?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Für reguläre Pflegeverträge benötigen wir nach der Besichtigung etwa 3-5 Werktage Vorlauf. Bei dringenden Fällen – etwa wenn der bisherige Dienstleister ausgefallen ist – können wir oft innerhalb von 24 bis 48 Stunden einspringen.',
      },
    },
  ],
}

export default function AussenanlagenpflegePage() {
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

        {/* Problem → Lösung */}
        <ProblemLoesungSection />

        {/* Was wir tun */}
        <LeistungsumfangSection />

        {/* Saisonale Expertise */}
        <JahreszeitenSection />

        {/* Prozess */}
        <ProcessSection />

        {/* Lokale Relevanz */}
        <RegionenSection />

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
