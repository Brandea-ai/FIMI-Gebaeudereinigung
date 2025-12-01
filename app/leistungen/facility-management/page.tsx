import { Metadata } from 'next'
import HeroSection from './HeroSection'
import BenefitsSection from './BenefitsSection'
import ProcessSection from './ProcessSection'

export const metadata: Metadata = {
  title: 'Facility Management Bayern | FIMI Gebäudereinigung',
  description: 'Ganzheitliches Facility Management für Ihre Immobilie in Bayern. Aus einer Hand.',
  keywords: 'Facility Management, Gebäudebetreuung, Hausmeister, Bayern, Landshut',
}

export default function FacilityManagementPage() {
  return (
    <main className="min-h-screen bg-white">
      <HeroSection />
      <BenefitsSection />
      <ProcessSection />
    </main>
  )
}
