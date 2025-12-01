import { Metadata } from 'next'
import HeroSection from './HeroSection'
import BenefitsSection from './BenefitsSection'
import ProcessSection from './ProcessSection'

export const metadata: Metadata = {
  title: 'Hausmeisterservice Bayern | FIMI Gebäudereinigung',
  description: 'Zuverlässiger Hausmeisterservice für Ihre Immobilie in Bayern. Professionell und flexibel.',
  keywords: 'Hausmeisterservice, Hausmeister, Gebäudebetreuung, Bayern, Landshut',
}

export default function HausmeisterservicePage() {
  return (
    <main className="min-h-screen bg-white">
      <HeroSection />
      <BenefitsSection />
      <ProcessSection />
    </main>
  )
}
