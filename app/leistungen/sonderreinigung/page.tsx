import { Metadata } from 'next'
import HeroSection from './HeroSection'
import BenefitsSection from './BenefitsSection'
import ProcessSection from './ProcessSection'

export const metadata: Metadata = {
  title: 'Sonderreinigung Bayern | FIMI Gebäudereinigung',
  description: 'Professionelle Sonderreinigung für besondere Anforderungen in Bayern.',
  keywords: 'Sonderreinigung, Spezialreinigung, Reinigungsservice, Bayern, Landshut',
}

export default function SonderreinigungPage() {
  return (
    <main className="min-h-screen bg-white">
      <HeroSection />
      <BenefitsSection />
      <ProcessSection />
    </main>
  )
}
