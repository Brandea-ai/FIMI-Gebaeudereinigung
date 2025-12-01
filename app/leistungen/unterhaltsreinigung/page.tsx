import { Metadata } from 'next'
import HeroSection from './HeroSection'
import LeistungenSection from './LeistungenSection'
import VorteileSection from './VorteileSection'
import BranchenRegionenSection from './BranchenRegionenSection'
import ProcessSection from './ProcessSection'
import RelatedSection from './RelatedSection'
import FAQSection from './FAQSection'
import CTASection from './CTASection'

export const metadata: Metadata = {
  title: 'Unterhaltsreinigung Bayern | Regelmäßige Gebäudereinigung | FIMI',
  description: 'Professionelle Unterhaltsreinigung in Bayern ✓ Feste Teams ✓ Flexible Intervalle ✓ ISO-zertifiziert ✓ Ab 0,80€/m² ✓ Kostenlose Besichtigung. Jetzt anfragen!',
  keywords: 'Unterhaltsreinigung, regelmäßige Reinigung, Gebäudereinigung Bayern, Büroreinigung, gewerbliche Reinigung, Reinigungsfirma Landshut, München, Regensburg',
  openGraph: {
    title: 'Unterhaltsreinigung Bayern | FIMI Gebäudereinigung',
    description: 'Professionelle Unterhaltsreinigung für Büros, Praxen und Gewerbe. Feste Teams, flexible Zeiten, transparente Preise.',
    type: 'website',
  },
}

// FAQ Schema für SEO
const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'Was kostet Unterhaltsreinigung pro Quadratmeter?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Die Kosten für Unterhaltsreinigung liegen typischerweise zwischen 0,80 € und 2,50 € pro Quadratmeter, abhängig von Fläche, Intervall und Anforderungen.',
      },
    },
    {
      '@type': 'Question',
      name: 'Wie oft sollte eine Unterhaltsreinigung stattfinden?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Das hängt von der Nutzung ab. Stark frequentierte Bereiche empfehlen wir täglich, Büroflächen 2-3x pro Woche, selten genutzte Räume wöchentlich.',
      },
    },
    {
      '@type': 'Question',
      name: 'Arbeiten immer dieselben Reinigungskräfte?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Ja, bei FIMI setzen wir auf feste Teams. Ihre Reinigungskräfte kennen Ihre Räume und Ihre Wünsche.',
      },
    },
  ],
}

export default function UnterhaltsreinigungPage() {
  return (
    <>
      {/* Schema.org FAQ für SEO */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      <main className="min-h-screen bg-white">
        <HeroSection />
        <LeistungenSection />
        <VorteileSection />
        <BranchenRegionenSection />
        <ProcessSection />
        <RelatedSection />
        <FAQSection />
        <CTASection />
      </main>
    </>
  )
}
