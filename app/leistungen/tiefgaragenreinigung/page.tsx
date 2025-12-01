import { Metadata } from 'next'
import HeroSection from './HeroSection'
import BenefitsSection from './BenefitsSection'
import ProcessSection from './ProcessSection'

export const metadata: Metadata = {
  title: 'Tiefgaragenreinigung Bayern | FIMI Gebäudereinigung',
  description: 'Professionelle Tiefgaragenreinigung für Parkhäuser und Tiefgaragen in Bayern. Gründlich, schnell und zuverlässig.',
  keywords: 'Tiefgaragenreinigung, Parkhaus Reinigung, Garage reinigen, Bayern, Landshut',
}

export default function TiefgaragenreinigungPage() {
  return (
    <main className="min-h-screen bg-white">
      <HeroSection />
      <BenefitsSection />
      <ProcessSection />
    </main>
  )
}
