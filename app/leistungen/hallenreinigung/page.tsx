import { Metadata } from 'next'
import ServiceHero from '@/components/containers/ServiceHero'
import ServiceBenefits from '@/components/containers/ServiceBenefits'
import ServiceProcess from '@/components/containers/ServiceProcess'
import { Warehouse, Truck, Shield, Clock, Zap, Award } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Hallenreinigung Landshut - Industrie & Lager | FIMI',
  description: 'Professionelle Hallenreinigung für Industrie, Lager & Logistik ✓ Große Flächen ✓ Spezialgeräte ✓ Effizient',
}

const benefits = [
  { icon: Warehouse, title: 'Großflächenreinigung', description: 'Spezialisiert auf die Reinigung großer Hallen- und Lagerflächen.' },
  { icon: Truck, title: 'Industriegeräte', description: 'Einsatz professioneller Maschinen für effiziente Flächenreinigung.' },
  { icon: Shield, title: 'Arbeitssicherheit', description: 'Reinigung nach Arbeitssicherheitsvorschriften für sichere Betriebsabläufe.' },
  { icon: Clock, title: 'Schichtbetrieb möglich', description: 'Flexible Reinigungszeiten auch nachts oder am Wochenende.' },
  { icon: Zap, title: 'Schnelle Durchführung', description: 'Effiziente Reinigung großer Flächen in kurzer Zeit.' },
  { icon: Award, title: 'Erfahren im Industriebereich', description: 'Langjährige Expertise in der Reinigung von Produktions- und Lagerhallen.' }
]

const steps = [
  { number: '01', title: 'Hallenbesichtigung', description: 'Analyse der Hallenfläche und spezifischen Anforderungen.' },
  { number: '02', title: 'Reinigungskonzept', description: 'Maßgeschneidertes Konzept für Ihre Hallengröße und Nutzung.' },
  { number: '03', title: 'Professionelle Durchführung', description: 'Reinigung mit Spezialgeräten und geschultem Personal.' },
  { number: '04', title: 'Regelmäßige Wartung', description: 'Kontinuierliche Pflege für dauerhaft saubere Hallenflächen.' }
]

export default function HallenreinigungPage() {
  return (
    <>
      <ServiceHero
        title="Hallenreinigung"
        subtitle="Professionelle Reinigung großer Flächen"
        description="Spezialisierte Hallenreinigung für Industrie, Lager und Logistik. Effizient, sicher und zuverlässig."
        image="https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?q=80&w=2940&auto=format&fit=crop"
        category="Gewerbliche Objektreinigung"
      />
      <ServiceBenefits title="Hallenreinigung Expertise" subtitle="Großflächen professionell gereinigt" benefits={benefits} />
      <ServiceProcess title="Unser Vorgehen" subtitle="Systematisch und effizient" steps={steps} />
    </>
  )
}
