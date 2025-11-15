import { Metadata } from 'next'
import ServiceHero from '@/components/containers/ServiceHero'
import ServiceBenefits from '@/components/containers/ServiceBenefits'
import ServiceProcess from '@/components/containers/ServiceProcess'
import { Shield, Clock, Sparkles, Award, Users, Leaf } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Professionelle Unterhaltsreinigung Landshut | FIMI',
  description: 'Zuverlässige Unterhaltsreinigung für Gewerbe & Industrie ✓ Regelmäßig ✓ Flexibel ✓ Günstig ✓ Jetzt Angebot anfordern!',
}

const benefits = [
  { icon: Shield, title: 'Konstante Sauberkeit', description: 'Regelmäßige Reinigungsintervalle garantieren dauerhaft gepflegte Räumlichkeiten.' },
  { icon: Clock, title: 'Planbare Kosten', description: 'Transparente Festpreise für verlässliche Budgetplanung.' },
  { icon: Sparkles, title: 'Umfassende Pflege', description: 'Alle Bereiche werden kontinuierlich gepflegt und instand gehalten.' },
  { icon: Award, title: 'Langfristige Partnerschaft', description: 'Wir lernen Ihre Anforderungen kennen und optimieren stetig unseren Service.' },
  { icon: Users, title: 'Festes Team', description: 'Dieselben vertrauten Reinigungskräfte sorgen für Kontinuität und Qualität.' },
  { icon: Leaf, title: 'Nachhaltige Pflege', description: 'Ressourcenschonende Reinigungsmethoden für langlebige Oberflächen.' }
]

const steps = [
  { number: '01', title: 'Bedarfsanalyse', description: 'Gemeinsame Festlegung der Reinigungsintervalle und -bereiche.' },
  { number: '02', title: 'Reinigungsplan', description: 'Erstellung eines detaillierten Wartungsplans für Ihre Immobilie.' },
  { number: '03', title: 'Regelmäßige Durchführung', description: 'Zuverlässige Ausführung nach festem Zeitplan.' },
  { number: '04', title: 'Kontinuierliche Optimierung', description: 'Laufende Anpassung an veränderte Anforderungen.' }
]

export default function UnterhaltsreinigungPage() {
  return (
    <>
      <ServiceHero
        title="Unterhaltsreinigung"
        subtitle="Dauerhafte Sauberkeit durch regelmäßige Pflege"
        description="Professionelle Unterhaltsreinigung für konstant gepflegte Immobilien. Individuell planbar, zuverlässig durchgeführt."
        image="https://images.unsplash.com/photo-1581578731548-c64695cc6952?q=80&w=2940&auto=format&fit=crop"
        category="Gewerbliche Objektreinigung"
      />
      <ServiceBenefits title="Ihre Vorteile" subtitle="Kontinuierliche Sauberkeit als Standard" benefits={benefits} />
      <ServiceProcess title="Unser Vorgehen" subtitle="Systematisch und zuverlässig" steps={steps} />
    </>
  )
}
