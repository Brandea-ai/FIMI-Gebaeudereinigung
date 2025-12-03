import { Metadata } from 'next'
import HeroSection from './HeroSection'

export const metadata: Metadata = {
  title: 'Hallenreinigung Bayern | Lagerhallen & Produktionshallen reinigen | FIMI',
  description: 'Professionelle Hallenreinigung in Landshut, München, Ingolstadt und ganz Bayern. ✓ Im laufenden Betrieb ✓ 2h Reaktionszeit ✓ Transparente Festpreise. Jetzt kostenfreie Besichtigung!',
}

export default function HallenreinigungPage() {
  return (
    <main className="min-h-screen bg-white">
      <HeroSection />
    </main>
  )
}
