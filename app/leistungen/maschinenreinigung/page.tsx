import { Metadata } from 'next'
import ServiceHero from '@/components/containers/ServiceHero'
import ServiceBenefits from '@/components/containers/ServiceBenefits'
import ServiceProcess from '@/components/containers/ServiceProcess'
import { Settings, Shield, Droplets, Award, Wrench, CheckCircle } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Maschinenreinigung Landshut - Professionell & Schonend',
  description: 'Fachgerechte Maschinenreinigung ✓ Produktionsanlagen ✓ CNC-Maschinen ✓ Schonend ✓ Ohne Betriebsunterbrechung',
}

const benefits = [
  { icon: Settings, title: 'Maschinenschonend', description: 'Spezielle Reinigungsmittel und -methoden die Ihre Maschinen nicht beschädigen.' },
  { icon: Shield, title: 'Werkserhaltung', description: 'Professionelle Reinigung verlängert die Lebensdauer Ihrer Produktionsmaschinen.' },
  { icon: Droplets, title: 'Entfettung & Pflege', description: 'Entfernung von Öl, Fett und Produktionsrückständen für optimale Funktion.' },
  { icon: Award, title: 'Technisches Know-how', description: 'Unser Team kennt sich mit verschiedenen Maschinentypen aus.' },
  { icon: Wrench, title: 'Detailreinigung', description: 'Auch schwer zugängliche Bereiche werden gründlich gereinigt.' },
  { icon: CheckCircle, title: 'Qualitätssicherung', description: 'Reinigung nach Herstellervorgaben und Qualitätsstandards.' }
]

const steps = [
  { number: '01', title: 'Maschinenanalyse', description: 'Erfassung der Maschinentypen und Reinigungsanforderungen.' },
  { number: '02', title: 'Reinigungskonzept', description: 'Abstimmung der Reinigungsmethoden mit Ihren technischen Vorgaben.' },
  { number: '03', title: 'Schonende Reinigung', description: 'Fachgerechte Durchführung ohne Betriebsunterbrechung.' },
  { number: '04', title: 'Wartungsprotokoll', description: 'Dokumentation für Ihre Maschinenwartung.' }
]

export default function MaschinenreinigungPage() {
  return (
    <>
      <ServiceHero
        title="Maschinenreinigung"
        subtitle="Fachgerechte Pflege Ihrer Produktionsanlagen"
        description="Professionelle Maschinenreinigung für optimale Funktion und lange Lebensdauer. Schonend und effektiv."
        image="https://images.unsplash.com/photo-1565688534245-05d6b5be184a?q=80&w=2940&auto=format&fit=crop"
        category="Industrielle & Spezialreinigung"
      />
      <ServiceBenefits title="Maschinenreinigung Vorteile" subtitle="Professionelle Pflege für Ihre Anlagen" benefits={benefits} />
      <ServiceProcess title="Unser Vorgehen" subtitle="Fachgerecht und schonend" steps={steps} />
    </>
  )
}
