import { Metadata } from 'next'
import HeroSection from './HeroSection'
import BenefitsSection from './BenefitsSection'
import ProcessSection from './ProcessSection'

export const metadata: Metadata = {
  title: 'Maschinenreinigung Bayern | FIMI Gebäudereinigung',
  description: 'Professionelle Maschinenreinigung für Produktionsmaschinen in Bayern. Fachgerecht, materialschonend und zuverlässig.',
  keywords: 'Maschinenreinigung, Anlagenreinigung, Produktionsmaschinen, CNC-Reinigung, Bayern, Landshut',
}

export default function MaschinenreinigungPage() {
  return (
    <main className="min-h-screen bg-white">
      <HeroSection />
      <BenefitsSection />
      <ProcessSection />
    </main>
  )
}
