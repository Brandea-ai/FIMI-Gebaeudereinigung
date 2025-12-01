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
import KundenLogosSlider from '@/components/KundenLogosSlider'

// Navigation items for FloatingNav
const floatingNavItems = [
  { id: 'hero', label: 'Übersicht' },
  { id: 'timeline', label: 'Geschichte' },
  { id: 'team', label: 'Team' },
  { id: 'philosophie', label: 'Philosophie' },
  { id: 'gruender', label: 'Geschäftsführung' },
  { id: 'partner', label: 'Partner' },
  { id: 'kunden', label: 'Kunden' },
  { id: 'regionen', label: 'Standorte' },
]

export const metadata: Metadata = {
  title: 'Über uns - FIMI Gebäudereinigung | Seit 2016 Ihr Partner für Sauberkeit',
  description: 'Lernen Sie FIMI kennen: 8+ Jahre Erfahrung, 90+ Mitarbeiter, 8 Standorte in Bayern. ISO 9001 & 14001 zertifiziert. Von der kleinen GbR zum regionalen Marktführer.',
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
      <FloatingNav items={floatingNavItems} />
      <HeroSection />
      <TimelineSection />
      <TeamSection />
      <PhilosophieSection />
      <GruenderSection />
      <PartnerSection />
      <div id="kunden">
        <KundenLogosSlider
          showHeader={true}
          showStats={false}
          bgColor="#ffffff"
        />
      </div>
      <RegionenSection />
    </main>
  )
}
