import { Metadata } from 'next'
import HeroSection from './HeroSection'
import BenefitsSection from './BenefitsSection'
import ProcessSection from './ProcessSection'

export const metadata: Metadata = {
  title: 'Fensterreinigung Bayern | FIMI Gebäudereinigung',
  description: 'Professionelle Fensterreinigung in Bayern. Streifenfrei, innen und außen.',
  keywords: 'Fensterreinigung, Fenster putzen, Glasreinigung, Bayern',
}

export default function FensterreinigungPage() {
  return (
    <main className="min-h-screen bg-white">
      <HeroSection />
      <BenefitsSection />
      <ProcessSection />
    </main>
  )
}
