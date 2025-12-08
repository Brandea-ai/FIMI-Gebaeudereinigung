import { Metadata } from 'next'
import HeroSection from './HeroSection'
import TrustBarSection from './TrustBarSection'
import LeistungskategorienSection from './LeistungskategorienSection'
import EinsatzszenarienSection from './EinsatzszenarienSection'
import VorteileSection from './VorteileSection'
import ProcessSection from './ProcessSection'
import RegionenSection from './RegionenSection'
import PartnerLogosSlider from '@/components/PartnerLogosSlider'
import FAQSection from './FAQSection'
import BlogPreviewSection from './BlogPreviewSection'
import CTASection from './CTASection'
import LeistungFloatingNav from '../_components/LeistungFloatingNav'

export const metadata: Metadata = {
  title: 'Event- & Veranstaltungsreinigung Bayern | Messe, Hotel, Tagung | FIMI',
  description: 'Professionelle Veranstaltungsreinigung in Landshut, München und Bayern. Event-Reinigung, Messe-Reinigung, Hotelzimmer-Reinigung, Tagungsraum-Reinigung. Vor, während und nach Ihrer Veranstaltung. Jetzt anfragen!',
  keywords: [
    'Veranstaltungsreinigung Bayern',
    'Event Reinigung München',
    'Messe Reinigung Bayern',
    'Messestand Reinigung',
    'Hotel Zimmerreinigung Bayern',
    'Tagungsraum Reinigung',
    'Konferenzraum Reinigung',
    'Eventlocation Reinigung',
    'Veranstaltungshalle Reinigung',
    'Catering Reinigung',
    'Hochzeit Reinigung',
    'Firmenfeier Reinigung',
    'Kongress Reinigung',
    'VIP Reinigung Bayern',
    'Premium Gebäudereinigung',
    'Hotelreinigung Bayern',
    'Zimmerreinigung Hotel',
    'Lobby Reinigung',
  ].join(', '),
  openGraph: {
    title: 'Event- & Veranstaltungsreinigung Bayern | FIMI Gebäudereinigung',
    description: 'Event-Reinigung, Messe-Reinigung, Hotel-Reinigung – professionelle Reinigung vor, während und nach Ihrer Veranstaltung.',
    type: 'website',
    locale: 'de_DE',
    url: 'https://fimi-gebaeudereinigung.de/leistungen/sonderleistungen',
    siteName: 'FIMI Gebäudereinigung',
    images: [
      {
        url: 'https://images.unsplash.com/photo-1540575467063-178a50c2df87?q=80&w=1200&auto=format&fit=crop',
        width: 1200,
        height: 630,
        alt: 'Professionelle Veranstaltungsreinigung von FIMI - Event-Reinigung Bayern',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Event- & Veranstaltungsreinigung Bayern | FIMI',
    description: 'Event-Reinigung, Messe-Reinigung, Hotel-Reinigung – professionelle Reinigung für Ihre Veranstaltung.',
  },
  alternates: {
    canonical: 'https://fimi-gebaeudereinigung.de/leistungen/sonderleistungen',
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
  name: 'Event- & Veranstaltungsreinigung',
  alternateName: ['Veranstaltungsreinigung', 'Event-Reinigung', 'Messe-Reinigung'],
  description: 'Professionelle Veranstaltungsreinigung in Bayern. Event-Reinigung, Messe-Reinigung, Hotelzimmer-Reinigung, Tagungsraum-Reinigung. Vor, während und nach Ihrer Veranstaltung.',
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
  serviceType: 'Veranstaltungsreinigung',
  hasOfferCatalog: {
    '@type': 'OfferCatalog',
    name: 'Event- & Veranstaltungsreinigung',
    itemListElement: [
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Event-Reinigung' } },
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Messe-Reinigung' } },
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Hotelzimmer-Reinigung' } },
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Tagungsraum-Reinigung' } },
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Catering-Bereich-Reinigung' } },
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'VIP- & Premium-Reinigung' } },
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
      name: 'Was kostet eine Event-Reinigung?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Die Kosten hängen von Veranstaltungsgröße, Fläche und Leistungsumfang ab. Kleinere Events beginnen ab ca. 300€, größere Veranstaltungen werden individuell kalkuliert. Nach einer kostenfreien Besichtigung erhalten Sie ein transparentes Festpreisangebot.',
      },
    },
    {
      '@type': 'Question',
      name: 'Wann sollte ich die Event-Reinigung buchen?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Für optimale Planung empfehlen wir eine Buchung 1-2 Wochen vor dem Event. Bei kurzfristigen Anfragen sind wir oft auch innerhalb von 24-48 Stunden einsatzbereit. Für große Events oder Messen planen Sie bitte 3-4 Wochen Vorlauf ein.',
      },
    },
    {
      '@type': 'Question',
      name: 'Reinigen Sie auch während der Veranstaltung?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Ja, wir bieten Reinigung vor, während und nach Ihrer Veranstaltung. Während des Events sorgen unsere Teams diskret für saubere Sanitäranlagen, leeren Mülleimer und beseitigen Verschmutzungen – ohne Ihre Gäste zu stören.',
      },
    },
    {
      '@type': 'Question',
      name: 'Bieten Sie auch Hotelzimmer-Reinigung an?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Ja, Hotelzimmer-Reinigung ist einer unserer Kernbereiche. Wir übernehmen die komplette Zimmerreinigung, Bettwäschewechsel und Etagenreinigung für Hotels und Pensionen – als dauerhafte Lösung oder zur Verstärkung in der Hochsaison.',
      },
    },
    {
      '@type': 'Question',
      name: 'Können Sie auch Messestände reinigen?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Absolut. Messe-Reinigung gehört zu unseren Spezialitäten. Wir reinigen vor Messebeginn, halten Ihren Stand während der Messe sauber und übernehmen die Endreinigung nach Abbau. In ganz Bayern für Sie im Einsatz.',
      },
    },
    {
      '@type': 'Question',
      name: 'Was ist mit VIP- oder Premium-Reinigung gemeint?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'VIP-Reinigung bedeutet höchste Ansprüche: Besonders gründliche Reinigung, premium Reinigungsmittel, erfahrene Fachkräfte und flexible Einsatzzeiten. Ideal für repräsentative Räume, Vorstandsetagen oder exklusive Veranstaltungen.',
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
        <LeistungFloatingNav />
        <HeroSection />
        <TrustBarSection />
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
