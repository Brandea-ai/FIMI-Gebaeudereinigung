import { Metadata } from 'next'
import LeistungenHeroContainer from './LeistungenHeroContainer'
import LeistungenGridContainer from './LeistungenGridContainer'
import LeistungenCTAContainer from './LeistungenCTAContainer'

export const metadata: Metadata = {
  title: 'Unsere Leistungen - Professionelle Gebäudereinigung | FIMI Landshut',
  description: 'Komplettes Leistungsspektrum: Büroreinigung, Industriereinigung, Facility Management und mehr. Wir arbeiten nach ISO 9001 & 14001 Standards. 8+ Jahre Erfahrung in Landshut.',
  keywords: 'Gebäudereinigung Leistungen, Büroreinigung, Industriereinigung, Facility Management, Unterhaltsreinigung, Baureinigung, Landshut',
}

export default function LeistungenPage() {
  return (
    <main className="min-h-screen bg-white pt-24">
      <LeistungenHeroContainer />
      <LeistungenGridContainer />
      <LeistungenCTAContainer />
    </main>
  )
}
