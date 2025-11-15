import { Metadata } from 'next'
import ServiceHero from '@/components/containers/ServiceHero'
import ServiceBenefits from '@/components/containers/ServiceBenefits'
import ServiceProcess from '@/components/containers/ServiceProcess'
import { Building, Users, Shield, Award, Zap, TrendingUp } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Facility Management Landshut - Komplettservice für Immobilien',
  description: 'Professionelles Facility Management ✓ Gebäudemanagement ✓ Reinigung ✓ Wartung ✓ Alles aus einer Hand',
}

const benefits = [
  { icon: Building, title: 'Komplettbetreuung', description: 'Alle Facility-Services aus einer Hand für Ihre Immobilie.' },
  { icon: Users, title: 'Fester Ansprechpartner', description: 'Ein dedizierter Facility Manager koordiniert alle Dienstleistungen.' },
  { icon: Shield, title: 'Zuverlässige Abwicklung', description: 'Professionelles Management aller technischen und infrastrukturellen Aufgaben.' },
  { icon: Award, title: 'Langfristige Partnerschaft', description: 'Entwicklung nachhaltiger Lösungen für Ihre Immobilie.' },
  { icon: Zap, title: 'Effizienzsteigerung', description: 'Optimierung aller Prozesse für maximale Wirtschaftlichkeit.' },
  { icon: TrendingUp, title: 'Wertsteigerung', description: 'Professionelles Facility Management erhöht den Wert Ihrer Immobilie.' }
]

const steps = [
  { number: '01', title: 'Objektanalyse', description: 'Umfassende Bestandsaufnahme Ihrer Immobilie und Anforderungen.' },
  { number: '02', title: 'Konzepterstellung', description: 'Entwicklung eines maßgeschneiderten Facility-Management-Konzepts.' },
  { number: '03', title: 'Implementierung', description: 'Strukturierte Einführung aller FM-Prozesse und Services.' },
  { number: '04', title: 'Kontinuierliche Optimierung', description: 'Laufende Verbesserung und Anpassung an Ihre Bedürfnisse.' }
]

export default function FacilityManagementPage() {
  return (
    <>
      <ServiceHero
        title="Facility Management"
        subtitle="Professionelles Gebäudemanagement aus einer Hand"
        description="Umfassendes Facility Management für Ihre Immobilie. Von Reinigung über Wartung bis zum kompletten Gebäudemanagement."
        image="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2940&auto=format&fit=crop"
        category="Facility Management & Services"
      />
      <ServiceBenefits title="Facility Management Vorteile" subtitle="Alles aus einer Hand für Ihre Immobilie" benefits={benefits} />
      <ServiceProcess title="Unser Vorgehen" subtitle="Von der Analyse bis zur kontinuierlichen Betreuung" steps={steps} />
    </>
  )
}
