import { Metadata } from 'next'
import HeroSection from './HeroSection'
import TrustBarSection from './TrustBarSection'
import ProblemLoesungSection from './ProblemLoesungSection'
import LeistungsumfangSection from './LeistungsumfangSection'
import ProcessSection from './ProcessSection'
import RegionenSection from './RegionenSection'
import FAQSection from './FAQSection'
import BlogPreviewSection from './BlogPreviewSection'
import CTASection from './CTASection'

export const metadata: Metadata = {
  title: 'Bueroreinigung Bayern | Professionelle Reinigung fuer Ihr Buero',
  description: 'Professionelle Bueroreinigung in Landshut, Muenchen, Regensburg und ganz Bayern. Festes Personal, 2h Reaktionszeit, ISO-Standards. Jetzt kostenfreie Besichtigung anfragen.',
  keywords: [
    'Bueroreinigung Bayern',
    'Bueroreinigung Landshut',
    'Bueroreinigung Muenchen',
    'Bueroreinigung Regensburg',
    'Unterhaltsreinigung Buero',
    'professionelle Bueroreinigung',
    'Gebaeudereinigung Buero',
    'Reinigungsfirma Buero',
    'Office Cleaning Bayern',
  ].join(', '),
  openGraph: {
    title: 'Bueroreinigung Bayern | FIMI Gebaeudereinigung',
    description: 'Saubere Raeume, in denen sich Mitarbeiter und Kunden wohlfuehlen. Professionelle Bueroreinigung mit festem Personal und 2h Reaktionszeit.',
    type: 'website',
    locale: 'de_DE',
    url: 'https://fimi-service.de/leistungen/bueroreinigung',
    siteName: 'FIMI Gebaeudereinigung',
    images: [
      {
        url: 'https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=1200&auto=format&fit=crop',
        width: 1200,
        height: 630,
        alt: 'Professionelle Bueroreinigung von FIMI',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Bueroreinigung Bayern | FIMI',
    description: 'Professionelle Bueroreinigung mit festem Personal. 2h Reaktionszeit garantiert.',
  },
  alternates: {
    canonical: 'https://fimi-service.de/leistungen/bueroreinigung',
  },
  robots: {
    index: true,
    follow: true,
  },
}

// Schema.org Structured Data
const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  name: 'Bueroreinigung',
  description: 'Professionelle Bueroreinigung in Bayern. Regelmaessige Reinigung von Bueroflaechen, Sanitaerbereichen, Teekuechen und Gemeinschaftsraeumen.',
  provider: {
    '@type': 'LocalBusiness',
    name: 'FIMI Gebaeudereinigung',
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
  },
  areaServed: [
    { '@type': 'City', name: 'Landshut' },
    { '@type': 'City', name: 'Muenchen' },
    { '@type': 'City', name: 'Regensburg' },
    { '@type': 'City', name: 'Ingolstadt' },
    { '@type': 'City', name: 'Freising' },
    { '@type': 'City', name: 'Erding' },
    { '@type': 'City', name: 'Straubing' },
    { '@type': 'City', name: 'Passau' },
  ],
  serviceType: 'Bueroreinigung',
  offers: {
    '@type': 'Offer',
    availability: 'https://schema.org/InStock',
    areaServed: {
      '@type': 'State',
      name: 'Bayern',
    },
  },
}

// FAQ Schema
const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'Was kostet Bueroreinigung pro Quadratmeter?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Die Kosten fuer professionelle Bueroreinigung liegen typischerweise zwischen 0,80 und 2,50 Euro pro Quadratmeter, abhaengig von Reinigungsintervall und Umfang der Leistungen.',
      },
    },
    {
      '@type': 'Question',
      name: 'Wie oft sollte ein Buero professionell gereinigt werden?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Fuer Bueros mit normalem Publikumsverkehr empfehlen wir 2-3 Mal pro Woche. Arztpraxen oder Raeume mit hohem Besucheraufkommen sollten taeglich gereinigt werden.',
      },
    },
    {
      '@type': 'Question',
      name: 'Reinigen Sie auch ausserhalb der Geschaeftszeiten?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Ja, das ist sogar unser Standard. Die meisten Kunden wuenschen Reinigung frueh morgens, abends oder am Wochenende, um den Betriebsablauf nicht zu stoeren.',
      },
    },
  ],
}

export default function BueroreinigungPage() {
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
        <HeroSection />
        <TrustBarSection />
        <ProblemLoesungSection />
        <LeistungsumfangSection />
        <ProcessSection />
        <RegionenSection />
        <FAQSection />
        <BlogPreviewSection />
        <CTASection />
      </main>
    </>
  )
}
