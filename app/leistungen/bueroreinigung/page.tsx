import { Metadata } from 'next'
import HeroSection from './HeroSection'
import BenefitsSection from './BenefitsSection'
import ProcessSection from './ProcessSection'

export const metadata: Metadata = {
  title: 'Büroreinigung Bayern | FIMI Gebäudereinigung',
  description: 'Professionelle Büroreinigung in Bayern. Saubere Arbeitsplätze für produktive Mitarbeiter.',
  keywords: 'Büroreinigung, Office Cleaning, Arbeitsplatzreinigung, Bayern',
}

export default function BueroreinigungPage() {
  return (
    <main className="min-h-screen bg-white">
      <HeroSection />
      <BenefitsSection />
      <ProcessSection />
    </main>
  )
}
