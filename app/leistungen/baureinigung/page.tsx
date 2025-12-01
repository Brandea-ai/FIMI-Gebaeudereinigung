import { Metadata } from 'next'
import HeroSection from './HeroSection'
import BenefitsSection from './BenefitsSection'
import ProcessSection from './ProcessSection'

export const metadata: Metadata = {
  title: 'Baureinigung Bayern | FIMI Gebäudereinigung',
  description: 'Professionelle Baureinigung und Bauendreinigung in Bayern. Bezugsfertig.',
  keywords: 'Baureinigung, Bauendreinigung, Bauschlussreinigung, Bayern, Landshut',
}

export default function BaureinigungPage() {
  return (
    <main className="min-h-screen bg-white">
      <HeroSection />
      <BenefitsSection />
      <ProcessSection />
    </main>
  )
}
