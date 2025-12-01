import { Metadata } from 'next'
import HeroSection from './HeroSection'
import BenefitsSection from './BenefitsSection'
import ProcessSection from './ProcessSection'

export const metadata: Metadata = {
  title: 'Beschaffungsmanagement Bayern | FIMI Gebäudereinigung',
  description: 'Professionelles Beschaffungsmanagement für Ihre Immobilie in Bayern.',
  keywords: 'Beschaffungsmanagement, Einkauf, Facility Services, Bayern, Landshut',
}

export default function BeschaffungsmanagementPage() {
  return (
    <main className="min-h-screen bg-white">
      <HeroSection />
      <BenefitsSection />
      <ProcessSection />
    </main>
  )
}
