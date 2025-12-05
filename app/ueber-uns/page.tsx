import { Metadata } from 'next'
import {
  HeroSection,
  TimelineSection,
  GruenderSection,
  TeamSection,
  PhilosophieSection,
  PartnerSection,
  RegionenSection,
} from './_components'
import FloatingNav from '@/components/FloatingNav'

const navItems = [
  { id: 'hero', label: 'Start' },
  { id: 'timeline', label: 'Geschichte' },
  { id: 'team', label: 'Team' },
  { id: 'philosophie', label: 'Philosophie' },
  { id: 'gruender', label: 'Gründer' },
  { id: 'partner', label: 'Partner' },
  { id: 'regionen', label: 'Regionen' },
]

export const metadata: Metadata = {
  title: 'Über uns - FIMI Gebäudereinigung | Seit 2016 Ihr Partner für Sauberkeit',
  description: 'Lernen Sie FIMI kennen: 8+ Jahre Erfahrung, 90+ Mitarbeiter, 8 Standorte in Bayern. Wir arbeiten nach ISO 9001 & 14001 Standards. Von der kleinen GbR zum regionalen Marktführer.',
  keywords: 'Gebäudereinigung, Über uns, FIMI, Landshut, Bayern, Team, Geschäftsführung, ISO 9001, ISO 14001',
  openGraph: {
    title: 'Über FIMI Gebäudereinigung - Ihr Partner für professionelle Sauberkeit',
    description: 'Seit 2016: 90+ Mitarbeiter, 120+ zufriedene Kunden, 8 Standorte in Bayern. Keine Lösung zu haben ist keine Option.',
    type: 'website',
    locale: 'de_DE',
  },
}

export default function UeberUnsPage() {
  return (
    <main className="min-h-screen bg-white">
      <FloatingNav items={navItems} />
      <HeroSection />
      <TimelineSection />
      <TeamSection />
      <PhilosophieSection />
      <GruenderSection />
      <PartnerSection />
      <RegionenSection />
    </main>
  )
}
