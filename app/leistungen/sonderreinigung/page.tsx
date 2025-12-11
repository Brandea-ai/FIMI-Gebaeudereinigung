import { Metadata } from 'next'
import HeroSection from './HeroSection'
import TrustBarSection from './TrustBarSection'
import NotfallSzenarienSection from './NotfallSzenarienSection'
import LeistungskategorienSection from './LeistungskategorienSection'
import ProblemLoesungSection from './ProblemLoesungSection'
import VerfahrenTechnikSection from './VerfahrenTechnikSection'
import VersicherungSection from './VersicherungSection'
import ProcessSection from './ProcessSection'
import RegionenSection from './RegionenSection'
import BranchenSection from './BranchenSection'
import PartnerLogosSlider from '@/components/PartnerLogosSlider'
import FAQSection from './FAQSection'
import BlogPreviewSection from './BlogPreviewSection'
import CTASection from './CTASection'
import LeistungFloatingNav from '../_components/LeistungFloatingNav'

export const metadata: Metadata = {
  title: 'Sonderreinigung Bayern | Wasserschaden, Brandschaden, Messie, Notfall 24/7 | FIMI',
  description: 'Professionelle Sonderreinigung in Landshut, München, Regensburg und ganz Bayern. Wasserschadenreinigung, Brandschadenreinigung, Messie-Wohnung, Tatortreinigung, Taubenkot-Entfernung. 24h Notdienst, staatl. geprüfte Desinfektoren. Jetzt anrufen!',
  keywords: [
    'Sonderreinigung Bayern',
    'Sonderreinigung München',
    'Sonderreinigung Landshut',
    'Wasserschaden Reinigung',
    'Wasserschaden Sanierung Bayern',
    'Wasserschaden Firma',
    'Brandschaden Reinigung',
    'Brandschadenreinigung Bayern',
    'Brandschaden Sanierung',
    'Messie Wohnung reinigen',
    'Messie Entrümpelung Bayern',
    'Messie Reinigung Kosten',
    'Tatortreinigung Bayern',
    'Tatortreinigung diskret',
    'Leichenfundort Reinigung',
    'Taubenkot entfernen',
    'Taubenkot Reinigung Kosten',
    'Desinfektionsreinigung Bayern',
    'Gefahrstoffreinigung',
    'Notfall Reinigung 24h',
    '24h Notdienst Reinigung',
    'Sonderreinigung Kosten',
    'Versicherung Reinigung Schaden',
  ].join(', '),
  openGraph: {
    title: 'Sonderreinigung Bayern | 24h Notdienst | FIMI Gebäudereinigung',
    description: 'Wasserschaden, Brandschaden, Messie-Wohnung, Tatortreinigung – professionelle Sonderreinigung mit 24h Notdienst. Staatl. geprüfte Desinfektoren.',
    type: 'website',
    locale: 'de_DE',
    url: 'https://fimi-gebaeudereinigung.de/leistungen/sonderreinigung',
    siteName: 'FIMI Gebäudereinigung',
    images: [
      {
        url: 'https://images.unsplash.com/photo-1581578731548-c64695cc6952?q=80&w=1200&auto=format&fit=crop',
        width: 1200,
        height: 630,
        alt: 'Professionelle Sonderreinigung von FIMI - 24h Notdienst Bayern',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Sonderreinigung Bayern | 24h Notdienst | FIMI',
    description: 'Wasserschaden, Brandschaden, Messie, Tatortreinigung – professionelle Sonderreinigung mit 24h Notdienst.',
  },
  alternates: {
    canonical: 'https://fimi-gebaeudereinigung.de/leistungen/sonderreinigung',
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
  name: 'Sonderreinigung',
  description: 'Professionelle Sonderreinigung in Bayern. Wasserschadenreinigung, Brandschadenreinigung, Messie-Wohnung Reinigung, Tatortreinigung, Taubenkot-Entfernung, Gefahrstoffreinigung. 24h Notdienst mit garantierter Reaktionszeit.',
  provider: {
    '@type': 'LocalBusiness',
    name: 'FIMI Gebäudereinigung',
    image: 'https://fimi-gebaeudereinigung.de/FIMI-LOGO/FIMI-LOGO-WEIße_Schrift_mit-Hintergrund.png',
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
    openingHoursSpecification: {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'],
      opens: '00:00',
      closes: '23:59',
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
  serviceType: 'Sonderreinigung',
  hasOfferCatalog: {
    '@type': 'OfferCatalog',
    name: 'Sonderreinigung Leistungen',
    itemListElement: [
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Wasserschadenreinigung' } },
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Brandschadenreinigung' } },
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Messie-Wohnung Reinigung' } },
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Tatortreinigung' } },
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Taubenkot-Entfernung' } },
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Gefahrstoffreinigung' } },
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
      name: 'Was kostet eine Sonderreinigung?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Die Kosten variieren je nach Art und Umfang des Schadens. Wasserschadenreinigung beginnt ab ca. 500€, Messie-Wohnung Reinigung liegt zwischen 800€ und 5.000€, Tatortreinigung ab 1.500€. Nach einer kostenfreien Besichtigung erhalten Sie ein verbindliches Festpreisangebot.',
      },
    },
    {
      '@type': 'Question',
      name: 'Wie schnell können Sie bei einem Notfall kommen?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Unser 24h-Notdienst ist 7 Tage die Woche erreichbar. Im Raum Landshut sind wir innerhalb von 2 Stunden vor Ort, im Großraum München und Regensburg in 3 Stunden, bayernweit in maximal 4 Stunden.',
      },
    },
    {
      '@type': 'Question',
      name: 'Übernimmt meine Versicherung die Kosten?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'In vielen Fällen ja. Hausrat-, Wohngebäude- und Betriebsversicherungen decken oft Wasser- und Brandschäden ab. Wir erstellen eine detaillierte Dokumentation für Ihre Versicherung und kommunizieren auf Wunsch direkt mit dem Sachverständigen.',
      },
    },
    {
      '@type': 'Question',
      name: 'Ist die Tatortreinigung wirklich diskret?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Absolute Diskretion ist bei uns Standard. Unsere Teams kommen in neutralen Fahrzeugen ohne Firmenlogo. Alle Mitarbeiter sind zur Verschwiegenheit verpflichtet. Die Reinigung erfolgt schnell und unauffällig.',
      },
    },
    {
      '@type': 'Question',
      name: 'Welche Qualifikationen haben Ihre Mitarbeiter?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Unsere Spezialteams bestehen aus staatlich geprüften Desinfektoren und ausgebildeten Fachkräften. Alle Mitarbeiter sind geschult im Umgang mit Gefahrstoffen.',
      },
    },
  ],
}

export default function SonderreinigungPage() {
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
        <NotfallSzenarienSection />
        <LeistungskategorienSection />
        <ProblemLoesungSection />
        <VerfahrenTechnikSection />
        <VersicherungSection />
        <ProcessSection />
        <BranchenSection />
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
