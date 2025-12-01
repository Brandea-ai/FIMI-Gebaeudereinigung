import { Metadata } from 'next'
import HeroSection from './HeroSection'
import BenefitsSection from './BenefitsSection'
import ProcessSection from './ProcessSection'

export const metadata: Metadata = {
  title: 'Sonderleistungen Bayern | FIMI Gebäudereinigung',
  description: 'Individuelle Reinigungslösungen und Sonderleistungen in Bayern. Nach Ihren Wünschen.',
  keywords: 'Sonderleistungen, individuelle Reinigung, Reinigungsservice, Bayern, Landshut',
}

export default function SonderleistungenPage() {
  return (
    <main className="min-h-screen bg-white">
      <HeroSection />
      <BenefitsSection />
      <ProcessSection />
    </main>
  )
}
