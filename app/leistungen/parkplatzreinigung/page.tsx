import { Metadata } from 'next'
import HeroSection from './HeroSection'
import BenefitsSection from './BenefitsSection'
import ProcessSection from './ProcessSection'

export const metadata: Metadata = {
  title: 'Parkplatzreinigung Bayern | FIMI Gebäudereinigung',
  description: 'Professionelle Parkplatzreinigung für saubere Parkflächen in Bayern. Gründlich und zuverlässig.',
  keywords: 'Parkplatzreinigung, Parkflächen, Außenreinigung, Bayern, Landshut',
}

export default function ParkplatzreinigungPage() {
  return (
    <main className="min-h-screen bg-white">
      <HeroSection />
      <BenefitsSection />
      <ProcessSection />
    </main>
  )
}
