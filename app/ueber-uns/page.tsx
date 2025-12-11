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
  title: 'Über FIMI - Gebäudereinigung Bayern seit 2016 | FIMI',
  description: 'Von 2 auf 90 Mitarbeiter: FIMI betreut 120+ Kunden an 8 Standorten in Bayern. Feste Ansprechpartner, dokumentierte Qualität. Lernen Sie uns kennen.',
  keywords: 'Gebäudereinigung, Über uns, FIMI, Landshut, Bayern, Team, Geschäftsführung',
  openGraph: {
    title: 'Über FIMI - Gebäudereinigung Bayern seit 2016 | FIMI',
    description: 'Von 2 auf 90 Mitarbeiter: FIMI betreut 120+ Kunden an 8 Standorten in Bayern. Feste Ansprechpartner, dokumentierte Qualität.',
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
