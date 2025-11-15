import { Metadata } from 'next'
import BueroreinigungHero from './BueroreinigungHero'
import BueroreinigungFeatures from './BueroreinigungFeatures'
import BueroreinigungBenefits from './BueroreinigungBenefits'
import BueroreinigungProcess from './BueroreinigungProcess'
import BueroreinigungFAQ from './BueroreinigungFAQ'

export const metadata: Metadata = {
  title: 'Professionelle Büroreinigung Landshut | ISO-zertifiziert | FIMI',
  description: 'Zuverlässige Büroreinigung in Landshut und Umgebung. Täglich, wöchentlich oder nach Bedarf. ISO 9001 & 14001 zertifiziert. Festangestelltes Personal. Jetzt Angebot einholen!',
  keywords: 'Büroreinigung Landshut, Büroreinigung, Officereinigung, Unternehmensreinigung, ISO-zertifiziert, professionelle Reinigung',
}

export default function BueroreinigungPage() {
  return (
    <main className="min-h-screen bg-white pt-24">
      <BueroreinigungHero />
      <BueroreinigungFeatures />
      <BueroreinigungBenefits />
      <BueroreinigungProcess />
      <BueroreinigungFAQ />
    </main>
  )
}
