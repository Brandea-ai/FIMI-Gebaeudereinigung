import { Metadata } from 'next'
import HeroSection from './HeroSection'
import BenefitsSection from './BenefitsSection'
import ProcessSection from './ProcessSection'

export const metadata: Metadata = {
  title: 'Fassadenreinigung Bayern | FIMI Gebäudereinigung',
  description: 'Professionelle Fassadenreinigung für werterhaltende Fassadenpflege in Bayern. Materialschonend und effektiv.',
  keywords: 'Fassadenreinigung, Gebäudereinigung außen, Fassadenpflege, Bayern, Landshut',
}

export default function FassadenreinigungPage() {
  return (
    <main className="min-h-screen bg-white">
      <HeroSection />
      <BenefitsSection />
      <ProcessSection />
    </main>
  )
}
