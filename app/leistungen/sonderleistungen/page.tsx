import { Metadata } from 'next'
import HeroSection from './HeroSection'
import TrustBarSection from './TrustBarSection'
import LeistungskategorienSection from './LeistungskategorienSection'
import EinsatzszenarienSection from './EinsatzszenarienSection'
import VorteileSection from './VorteileSection'
import ProcessSection from './ProcessSection'
import RegionenSection from './RegionenSection'
import KundenLogosOnly from '@/components/KundenLogosOnly'
import PartnerLogosSlider from '@/components/PartnerLogosSlider'
import FAQSection from './FAQSection'
import BlogPreviewSection from './BlogPreviewSection'
import CTASection from './CTASection'

export const metadata: Metadata = {
  title: 'Personaldienstleistungen Bayern | Empfangsdienst, Housekeeping, Servicekräfte | FIMI',
  description: 'Professionelle Personaldienstleistungen in Landshut, München und Bayern. Empfangsdienst, Rezeptionsservice, Housekeeping, Servicekräfte für Events. Kurzfristig verfügbar, 2h Reaktionszeit. Jetzt anfragen!',
  keywords: [
    'Personaldienstleistungen Bayern',
    'Empfangsdienst Bayern',
    'Empfangsdienst München',
    'Rezeptionsservice Unternehmen',
    'Rezeptionistin auf Zeit',
    'Housekeeping Hotel Bayern',
    'Housekeeping Personal',
    'Zimmermädchen Zeitarbeit',
    'Servicekräfte Event',
    'Servicekräfte mieten Bayern',
    'Catering Personal München',
    'Messepersonal Bayern',
    'Pfortendienst Bayern',
    'Empfangspersonal kurzfristig',
    'Tagesdame Hotel',
    'Büroservice Bayern',
    'Personalvermittlung Reinigung',
    'Urlaubsvertretung Empfang',
    'Krankheitsvertretung Rezeption',
  ].join(', '),
  openGraph: {
    title: 'Personaldienstleistungen Bayern | Empfangsdienst & Housekeeping | FIMI',
    description: 'Empfangsdienst, Housekeeping, Servicekräfte für Events – professionelles Personal kurzfristig verfügbar. 2h Reaktionszeit in Bayern.',
    type: 'website',
    locale: 'de_DE',
    url: 'https://fimi-service.de/leistungen/sonderleistungen',
    siteName: 'FIMI Gebäudereinigung',
    images: [
      {
        url: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?q=80&w=1200&auto=format&fit=crop',
        width: 1200,
        height: 630,
        alt: 'Professioneller Empfangsdienst von FIMI - Personaldienstleistungen Bayern',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Personaldienstleistungen Bayern | FIMI',
    description: 'Empfangsdienst, Housekeeping, Servicekräfte – professionelles Personal kurzfristig verfügbar.',
  },
  alternates: {
    canonical: 'https://fimi-service.de/leistungen/sonderleistungen',
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
  name: 'Personaldienstleistungen',
  alternateName: ['Sonderleistungen', 'Empfangsdienst', 'Housekeeping Service'],
  description: 'Professionelle Personaldienstleistungen in Bayern. Empfangsdienst, Rezeptionsservice, Housekeeping für Hotels, Servicekräfte für Events und Catering, Pfortendienst. Kurzfristig verfügbar mit 2h Reaktionszeit.',
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
    openingHoursSpecification: {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
      opens: '08:00',
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
  serviceType: 'Personaldienstleistungen',
  hasOfferCatalog: {
    '@type': 'OfferCatalog',
    name: 'Personaldienstleistungen Angebot',
    itemListElement: [
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Empfangsdienst & Rezeptionsservice' } },
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Housekeeping & Hotelservice' } },
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Servicekräfte für Events & Catering' } },
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Pfortendienst & Besuchermanagement' } },
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Büroservice & Telefonzentrale' } },
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Urlaubs- & Krankheitsvertretung' } },
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
      name: 'Was kostet Empfangspersonal pro Stunde?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Die Kosten für professionelles Empfangspersonal liegen je nach Qualifikation und Einsatzumfang zwischen 22 und 35 Euro pro Stunde. Bei regelmäßigen Einsätzen bieten wir attraktive Pauschalpreise. Nach einer kostenfreien Bedarfsanalyse erhalten Sie ein transparentes Festpreisangebot.',
      },
    },
    {
      '@type': 'Question',
      name: 'Wie kurzfristig können Sie Personal stellen?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Im Raum Landshut garantieren wir eine Reaktionszeit von 2 Stunden. In München und Umgebung sind wir innerhalb von 3 Stunden vor Ort. Für geplante Einsätze empfehlen wir eine Vorlaufzeit von 2-3 Werktagen, um optimale Personalauswahl zu gewährleisten.',
      },
    },
    {
      '@type': 'Question',
      name: 'Welche Qualifikationen hat Ihr Personal?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Unser Personal ist speziell für den Kundenkontakt geschult. Empfangskräfte verfügen über Erfahrung in Kundenservice und Telefonzentrale, Housekeeping-Personal ist in Hotellerie-Standards ausgebildet. Alle Mitarbeiter werden sorgfältig ausgewählt und durchlaufen unsere internen Schulungen.',
      },
    },
    {
      '@type': 'Question',
      name: 'Übernehmen Sie auch Housekeeping im Hotel?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Ja, Housekeeping ist einer unserer Kernbereiche. Wir stellen Zimmermädchen, Etagenservice und Tagesdamen für Hotels, Pensionen und Ferienwohnungen. Ob Hochsaison-Verstärkung oder dauerhafte Zusammenarbeit – wir passen uns Ihrem Bedarf an.',
      },
    },
    {
      '@type': 'Question',
      name: 'Können Sie Servicekräfte für Events vermitteln?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Absolut. Für Firmenevents, Messen, Hochzeiten und Caterings stellen wir erfahrene Servicekräfte. Von der Begrüßung der Gäste über Getränkeservice bis zum Abbau – unsere Teams sorgen für einen reibungslosen Ablauf Ihrer Veranstaltung.',
      },
    },
    {
      '@type': 'Question',
      name: 'Ist eine dauerhafte Zusammenarbeit möglich?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Selbstverständlich. Viele unserer Kunden nutzen unsere Personaldienstleistungen dauerhaft – für den Empfang, regelmäßiges Housekeeping oder als flexible Reserve. Langfristige Partnerschaften belohnen wir mit Vorzugskonditionen und garantierten Verfügbarkeiten.',
      },
    },
  ],
}

export default function SonderleistungenPage() {
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
        <HeroSection />
        <TrustBarSection />
        <KundenLogosOnly />
        <LeistungskategorienSection />
        <EinsatzszenarienSection />
        <VorteileSection />
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
