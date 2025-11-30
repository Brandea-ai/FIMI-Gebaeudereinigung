import { Metadata } from 'next'
import HeroSection from './HeroSection'
import BenefitsSection from './BenefitsSection'
import ProcessSection from './ProcessSection'

export const metadata: Metadata = {
  title: 'Unterhaltsreinigung Bayern | Professionelle Gebäudereinigung',
  description: 'Professionelle Unterhaltsreinigung in Bayern. Regelmäßige Reinigung für Büros & Gewerbe. Flexible Intervalle, geschultes Personal.',
  keywords: 'Unterhaltsreinigung, regelmäßige Reinigung, Gebäudereinigung, Bayern, Landshut',
}

export default function UnterhaltsreinigungPage() {
  return (
    <main className="min-h-screen bg-white">
      <HeroSection />
      <BenefitsSection />
      <ProcessSection />
    </main>
  )
}
