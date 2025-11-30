import { Metadata } from 'next'
import HeroSection from './HeroSection'
import BenefitsSection from './BenefitsSection'
import ProcessSection from './ProcessSection'

export const metadata: Metadata = {
  title: 'Industriereinigung Landshut & Bayern | FIMI Gebäudereinigung',
  description: 'Professionelle Industriereinigung für Produktionshallen, Fertigungsanlagen und Industriebetriebe. Wir arbeiten nach ISO-Standards. Auch im laufenden Betrieb möglich.',
  keywords: 'Industriereinigung, Produktionsreinigung, Hallenreinigung, Maschinenreinigung, Landshut, München, Bayern',
}

export default function IndustriereinigungPage() {
  return (
    <main className="min-h-screen bg-white">
      <HeroSection />
      <BenefitsSection />
      <ProcessSection />
    </main>
  )
}
