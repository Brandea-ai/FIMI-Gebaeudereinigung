import { Metadata } from 'next'
import HeroSection from './HeroSection'
import BenefitsSection from './BenefitsSection'
import ProcessSection from './ProcessSection'

export const metadata: Metadata = {
  title: 'Winterdienst Bayern | FIMI Gebäudereinigung',
  description: 'Professioneller Winterdienst für sichere Wege in Bayern. Schnee- und Eisbeseitigung.',
  keywords: 'Winterdienst, Schneeräumung, Streudienst, Bayern, Landshut',
}

export default function WinterdienstPage() {
  return (
    <main className="min-h-screen bg-white">
      <HeroSection />
      <BenefitsSection />
      <ProcessSection />
    </main>
  )
}
