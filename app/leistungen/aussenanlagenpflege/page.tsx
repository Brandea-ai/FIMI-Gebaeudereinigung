import { Metadata } from 'next'
import HeroSection from './HeroSection'
import BenefitsSection from './BenefitsSection'
import ProcessSection from './ProcessSection'

export const metadata: Metadata = {
  title: 'Außenanlagenpflege Bayern | FIMI Gebäudereinigung',
  description: 'Professionelle Außenanlagenpflege für gepflegte Außenbereiche in Bayern.',
  keywords: 'Außenanlagenpflege, Grünflächenpflege, Außenbereich, Bayern, Landshut',
}

export default function AussenanlagenpflegePage() {
  return (
    <main className="min-h-screen bg-white">
      <HeroSection />
      <BenefitsSection />
      <ProcessSection />
    </main>
  )
}
