import { Metadata } from 'next'
import ServiceHero from '@/components/containers/ServiceHero'
import ServiceBenefits from '@/components/containers/ServiceBenefits'
import ServiceProcess from '@/components/containers/ServiceProcess'
import { Building2, Droplets, Shield, Sparkles, Award, Sun } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Fassadenreinigung Landshut - Professionell & Schonend',
  description: 'Professionelle Fassadenreinigung ✓ Alle Materialien ✓ Höhenzugang ✓ Umweltfreundlich ✓ Wertsteigerung',
}

const benefits = [
  { icon: Building2, title: 'Alle Fassadentypen', description: 'Reinigung von Glas, Klinker, Putz, Naturstein und anderen Fassadenmaterialien.' },
  { icon: Droplets, title: 'Materialschonend', description: 'Angepasste Reinigungsmethoden für jedes Fassadenmaterial.' },
  { icon: Shield, title: 'Höhenzugang gesichert', description: 'Professionelle Absturzsicherung und Höhenzugangstechnik.' },
  { icon: Sparkles, title: 'Langzeitschutz', description: 'Optional: Versiegelung zum Schutz vor erneuter Verschmutzung.' },
  { icon: Award, title: 'Wertsteigerung', description: 'Gepflegte Fassaden erhöhen den Wert Ihrer Immobilie.' },
  { icon: Sun, title: 'Umweltfreundlich', description: 'Einsatz biologisch abbaubarer Reinigungsmittel.' }
]

const steps = [
  { number: '01', title: 'Fassadenanalyse', description: 'Beurteilung des Materials, Verschmutzungsgrads und Zugänglichkeit.' },
  { number: '02', title: 'Methodenwahl', description: 'Auswahl der optimalen Reinigungsmethode für Ihre Fassade.' },
  { number: '03', title: 'Professionelle Reinigung', description: 'Schonende Reinigung mit Spezialausrüstung.' },
  { number: '04', title: 'Optionale Versiegelung', description: 'Schutzversiegelung für langanhaltende Sauberkeit.' }
]

export default function FassadenreinigungPage() {
  return (
    <>
      <ServiceHero
        title="Fassadenreinigung"
        subtitle="Saubere Fassaden für einen gepflegten Eindruck"
        description="Professionelle Fassadenreinigung für alle Gebäudetypen und Materialien. Schonend, gründlich und werterhaltend."
        image="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2940&auto=format&fit=crop"
        category="Industrielle & Spezialreinigung"
      />
      <ServiceBenefits title="Fassadenreinigung Expertise" subtitle="Professionell für alle Fassadentypen" benefits={benefits} />
      <ServiceProcess title="Unser Vorgehen" subtitle="Von der Analyse bis zur Versiegelung" steps={steps} />
    </>
  )
}
