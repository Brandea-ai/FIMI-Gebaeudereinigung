import { Metadata } from 'next'
import HeroSection from './HeroSection'
import BenefitsSection from './BenefitsSection'
import ProcessSection from './ProcessSection'

export const metadata: Metadata = {
  title: 'Hallenreinigung Bayern | FIMI Gebäudereinigung',
  description: 'Professionelle Hallenreinigung für Produktions- und Lagerhallen in Bayern. Großflächenreinigung effizient und zuverlässig.',
  keywords: 'Hallenreinigung, Produktionshalle, Lagerhalle, Industriereinigung, Bayern, Landshut',
}

export default function HallenreinigungPage() {
  return (
    <main className="min-h-screen bg-white">
      <HeroSection />
      <BenefitsSection />
      <ProcessSection />
    </main>
  )
}
