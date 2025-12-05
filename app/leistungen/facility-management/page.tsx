import { Metadata } from 'next'
import HeroSection from './HeroSection'
import TrustBarSection from './TrustBarSection'
import ProblemLoesungSection from './ProblemLoesungSection'
import LeistungspaketSection from './LeistungspaketSection'
import VorteileSection from './VorteileSection'
import BranchenSection from './BranchenSection'
import ProcessSection from './ProcessSection'
import KundenLogosOnly from '@/components/KundenLogosOnly'
import PartnerLogosSlider from '@/components/PartnerLogosSlider'
import RegionenSection from './RegionenSection'
import FAQSection from './FAQSection'
import BlogPreviewSection from './BlogPreviewSection'
import CTASection from './CTASection'
import LeistungFloatingNav from '../_components/LeistungFloatingNav'

export const metadata: Metadata = {
  title: 'Facility Management Bayern | Gebäudeservice aus einer Hand | FIMI',
  description: 'Professionelles Facility Management in Landshut, München, Regensburg und ganz Bayern. Reinigung, Hausmeister, Winterdienst, Grünpflege – ein Ansprechpartner, ein Vertrag. ✓ 2h Reaktionszeit ✓ ISO-zertifiziert ✓ Kostenfreie Beratung',
  keywords: [
    'Facility Management Bayern',
    'Facility Management Landshut',
    'Facility Management München',
    'Facility Management Regensburg',
    'Gebäudemanagement Bayern',
    'Gebäudeservice aus einer Hand',
    'Objektbetreuung Bayern',
    'Gebäudedienstleistungen komplett',
    'Hausmeister Reinigung Winterdienst',
    'Facility Services Bayern',
    'FM Dienstleister Bayern',
    'Gebäudebetreuung',
    'Immobilienservice Bayern',
    'Facility Management Anbieter',
    'Gebäudemanagement Dienstleister',
  ].join(', '),
  openGraph: {
    title: 'Facility Management Bayern | FIMI Gebäudereinigung',
    description: 'Alle Gebäudedienstleistungen aus einer Hand: Reinigung, Hausmeister, Winterdienst, Grünpflege. Ein Ansprechpartner für Ihr Objekt. 2h Reaktionszeit garantiert.',
    type: 'website',
    locale: 'de_DE',
    url: 'https://fimi-service.de/leistungen/facility-management',
    siteName: 'FIMI Gebäudereinigung',
    images: [
      {
        url: 'https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=1200&auto=format&fit=crop',
        width: 1200,
        height: 630,
        alt: 'Professionelles Facility Management von FIMI in Bayern',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Facility Management Bayern | FIMI',
    description: 'Gebäudeservice aus einer Hand: Reinigung, Hausmeister, Winterdienst. Ein Ansprechpartner. 2h Reaktionszeit.',
  },
  alternates: {
    canonical: 'https://fimi-service.de/leistungen/facility-management',
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
  name: 'Facility Management',
  description: 'Professionelles Facility Management in Bayern. Alle Gebäudedienstleistungen aus einer Hand: Unterhaltsreinigung, Hausmeisterservice, Winterdienst und Außenanlagenpflege. Ein Ansprechpartner koordiniert alle Leistungen für Ihr Objekt.',
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
  serviceType: 'Facility Management',
  hasOfferCatalog: {
    '@type': 'OfferCatalog',
    name: 'Facility Management Leistungen',
    itemListElement: [
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: 'Unterhaltsreinigung',
          description: 'Regelmäßige professionelle Reinigung aller Gebäudebereiche',
        },
      },
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: 'Hausmeisterservice',
          description: 'Technische Betreuung, Kleinreparaturen, Kontrollgänge',
        },
      },
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: 'Winterdienst',
          description: 'Professioneller Räum- und Streudienst ab 4 Uhr',
        },
      },
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: 'Außenanlagenpflege',
          description: 'Grünpflege, Rasenmähen, Heckenschnitt, Laubentfernung',
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
      name: 'Was genau umfasst Facility Management?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Facility Management bedeutet: Alle Dienstleistungen rund um Ihr Gebäude aus einer Hand. Das umfasst typischerweise Reinigung, Hausmeisterservice, Winterdienst und Außenanlagenpflege. Bei FIMI koordiniert ein persönlicher Ansprechpartner alle Leistungen.',
      },
    },
    {
      '@type': 'Question',
      name: 'Lohnt sich Facility Management auch für kleinere Objekte?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Ja, besonders für kleinere Objekte kann sich Facility Management lohnen. Bereits ab einer Objektgröße von 500 m² oder bei Bedarf für mindestens zwei verschiedene Dienstleistungen rechnet sich die Bündelung – sowohl zeitlich als auch finanziell.',
      },
    },
    {
      '@type': 'Question',
      name: 'Wie schnell können Sie bei einem Notfall reagieren?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Wir garantieren eine Reaktionszeit von 2 Stunden in ganz Bayern. In Landshut und direkter Umgebung sind wir oft noch schneller vor Ort. Bei Winterdienst sind unsere Teams ab 4 Uhr morgens im Einsatz.',
      },
    },
    {
      '@type': 'Question',
      name: 'Was kostet Facility Management im Vergleich zu Einzeldienstleistern?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Erfahrungsgemäß sparen unsere Kunden durch die Bündelung 10-15% der Gesamtkosten. Dazu kommt die Zeitersparnis: keine Koordination mehr, keine Mehrfachtermine, keine Schnittstellenprobleme.',
      },
    },
    {
      '@type': 'Question',
      name: 'Wie läuft der Wechsel zu FIMI ab?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Wir übernehmen die komplette Übergangsplanung für Sie. Nach einer Besichtigung erstellen wir einen Transitionsplan, der sicherstellt, dass keine Lücke entsteht. Wir koordinieren den nahtlosen Übergang aller Leistungen.',
      },
    },
    {
      '@type': 'Question',
      name: 'Bekomme ich immer die gleichen Mitarbeiter für mein Objekt?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Ja, das ist unser Prinzip. Für jedes Objekt stellen wir ein festes Team zusammen, das Ihre Räumlichkeiten und Anforderungen kennt. Bei Urlaub oder Krankheit sorgen wir für eingearbeitete Vertretungen.',
      },
    },
  ],
}

export default function FacilityManagementPage() {
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

        {/* Leistungsumfang */}
        <LeistungspaketSection />

        {/* Vorteile (Vergleichstabelle) */}
        <VorteileSection />

        {/* Branchen */}
        <BranchenSection />

        {/* Prozess */}
        <ProcessSection />

        {/* Regionen */}
        <RegionenSection />

        {/* Partner Logos */}
        <PartnerLogosSlider
          showHeader={true}
          showStats={false}
          bgColor="#ffffff"
        />

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
