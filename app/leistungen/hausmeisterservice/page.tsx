import { Metadata } from 'next'
import HeroSection from './HeroSection'
import TrustBarSection from './TrustBarSection'
import ProblemLoesungSection from './ProblemLoesungSection'
import LeistungsumfangSection from './LeistungsumfangSection'
import ZielgruppenSection from './ZielgruppenSection'
import ProcessSection from './ProcessSection'
import PartnerLogosSlider from '@/components/PartnerLogosSlider'
import RegionenSection from './RegionenSection'
import VorteileTabelleSection from './VorteileTabelleSection'
import FAQSection from './FAQSection'
import BlogPreviewSection from './BlogPreviewSection'
import CTASection from './CTASection'
import LeistungFloatingNav from '../_components/LeistungFloatingNav'

export const metadata: Metadata = {
  title: 'Hausmeisterservice Bayern | Objektbetreuung & Kleinreparaturen | FIMI',
  description: 'Professioneller Hausmeisterservice in Landshut, München, Regensburg und ganz Bayern. Kleinreparaturen, Kontrollgänge, Winterdienst, Grünpflege. ✓ 2h Reaktionszeit ✓ Festes Team ✓ Kostenfreie Beratung',
  keywords: [
    'Hausmeisterservice Bayern',
    'Hausmeisterservice Landshut',
    'Hausmeisterservice München',
    'Hausmeisterservice Regensburg',
    'Hausmeister für Wohnanlage',
    'Hausmeister Eigentümergemeinschaft',
    'Hausmeister WEG',
    'Objektbetreuung Bayern',
    'Hausmeister Vertretung',
    'Hausmeisterservice Kosten',
    'Hausmeister Mietobjekte',
    'Technischer Hausmeister',
    'Kleinreparaturen Hausmeister',
    'Kontrollgänge Objekt',
    'Hausmeisterdienst Gewerbe',
  ].join(', '),
  openGraph: {
    title: 'Hausmeisterservice Bayern | FIMI Gebäudereinigung',
    description: 'Professionelle Objektbetreuung für Wohnanlagen, Hausverwaltungen und Gewerbe. Kleinreparaturen, Kontrollgänge, Winterdienst. 2h Reaktionszeit garantiert.',
    type: 'website',
    locale: 'de_DE',
    url: 'https://fimi-gebaeudereinigung.de/leistungen/hausmeisterservice',
    siteName: 'FIMI Gebäudereinigung',
    images: [
      {
        url: 'https://images.unsplash.com/photo-1581578731548-c64695cc6952?q=80&w=1200&auto=format&fit=crop',
        width: 1200,
        height: 630,
        alt: 'Professioneller Hausmeisterservice von FIMI in Bayern',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Hausmeisterservice Bayern | FIMI',
    description: 'Professionelle Objektbetreuung für Wohnanlagen und Gewerbe. Kleinreparaturen, Kontrollgänge, Winterdienst. 2h Reaktionszeit.',
  },
  alternates: {
    canonical: 'https://fimi-gebaeudereinigung.de/leistungen/hausmeisterservice',
  },
  robots: {
    index: true,
    follow: true,
  },
}

// Schema.org Service
const serviceSchema = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  name: 'Hausmeisterservice',
  description: 'Professioneller Hausmeisterservice in Bayern. Kleinreparaturen, Kontrollgänge, technische Objektbetreuung, Winterdienst und Grünpflege für Wohnanlagen, Hausverwaltungen und Gewerbeobjekte. Zuverlässige Vertretung bei Ausfall.',
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
  serviceType: 'Hausmeisterservice',
  hasOfferCatalog: {
    '@type': 'OfferCatalog',
    name: 'Hausmeisterservice Leistungen',
    itemListElement: [
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: 'Kleinreparaturen',
          description: 'Leuchtmittel tauschen, Türklinken reparieren, Wasserhähne abdichten, Heizkörper entlüften',
        },
      },
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: 'Kontrollgänge',
          description: 'Regelmäßige Objektbegehungen mit dokumentierter Mängelerfassung',
        },
      },
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: 'Technische Betreuung',
          description: 'Heizungsanlagen überwachen, Aufzüge kontrollieren, Wartungen koordinieren',
        },
      },
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: 'Winterdienst',
          description: 'Schneeräumung ab 4 Uhr morgens, Streuen bei Glätte, Dokumentation',
        },
      },
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: 'Grünpflege',
          description: 'Rasenmähen, Heckenpflege, Laub kehren, Unkraut entfernen',
        },
      },
    ],
  },
  offers: {
    '@type': 'Offer',
    availability: 'https://schema.org/InStock',
    areaServed: {
      '@type': 'State',
      name: 'Bayern',
    },
  },
}

// Schema.org FAQ
const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'Was kostet ein Hausmeisterservice pro Monat?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Die Kosten hängen von der Objektgröße und dem Leistungsumfang ab. Bei einer typischen Wohnanlage mit 20 Einheiten liegen die Kosten zwischen 400 und 800 Euro monatlich. Die Kosten können über die Betriebskostenabrechnung auf Mieter umgelegt werden.',
      },
    },
    {
      '@type': 'Question',
      name: 'Können die Kosten auf Mieter umgelegt werden?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Ja, Hausmeisterkosten sind als Betriebskosten gemäß § 2 BetrKV umlagefähig, sofern dies im Mietvertrag vereinbart ist. Wir erstellen betriebskostenkonforme Abrechnungen.',
      },
    },
    {
      '@type': 'Question',
      name: 'Wie schnell können Sie bei einem Ausfall einspringen?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Bei dringendem Bedarf sind wir innerhalb von 2 Stunden vor Ort. Für eine reguläre Übernahme planen wir 3-5 Werktage ein.',
      },
    },
    {
      '@type': 'Question',
      name: 'Bekomme ich immer denselben Hausmeister?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Ja, für jedes Objekt stellen wir ein festes Team zusammen, das Ihre Räumlichkeiten und Anforderungen kennt. Bei Urlaub oder Krankheit sorgen wir für eingearbeitete Vertretungen.',
      },
    },
    {
      '@type': 'Question',
      name: 'Welche Kleinreparaturen führen Sie durch?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Wir übernehmen alle Arbeiten, die ohne Fachbetrieb sicher durchgeführt werden können: Leuchtmittel tauschen, Türklinken reparieren, Wasserhähne abdichten, Türschließer einstellen, Heizkörper entlüften.',
      },
    },
    {
      '@type': 'Question',
      name: 'Ist der Winterdienst im Hausmeisterservice enthalten?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Winterdienst kann als Zusatzleistung gebucht werden. Unsere Teams sind ab 4 Uhr morgens im Einsatz. Bei Beauftragung übernehmen wir die Verkehrssicherungspflicht.',
      },
    },
  ],
}

export default function HausmeisterservicePage() {
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

        {/* Leistungsumfang */}
        <LeistungsumfangSection />

        {/* Zielgruppen */}
        <ZielgruppenSection />

        {/* Prozess */}
        <ProcessSection />

        {/* Regionen */}
        <RegionenSection />

        {/* Partner Logos */}
        <PartnerLogosSlider
          showHeader={true}
          showStats={false}
          bgColor="#f8f9fa"
        />

        {/* Vergleichstabelle */}
        <VorteileTabelleSection />

        {/* FAQ */}
        <FAQSection />

        {/* Blog */}
        <BlogPreviewSection />

        {/* Final CTA */}
        <CTASection />
      </main>
    </>
  )
}
