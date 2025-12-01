import { Metadata } from 'next'
import HeroSection from './HeroSection'
import BenefitsSection from './BenefitsSection'
import ProcessSection from './ProcessSection'

export const metadata: Metadata = {
  title: 'Glasreinigung Bayern | FIMI Gebäudereinigung',
  description: 'Professionelle Glasreinigung in Bayern. Streifenfreie Fenster und Glasfassaden.',
  keywords: 'Glasreinigung, Fensterreinigung, Glasfassade, Bayern',
}

export default function GlasreinigungPage() {
  return (
    <main className="min-h-screen bg-white">
      <HeroSection />
      <BenefitsSection />
      <ProcessSection />
    </main>
  )
}
