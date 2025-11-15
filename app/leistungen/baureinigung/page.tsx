import { Metadata } from 'next'
import ServiceHero from '@/components/containers/ServiceHero'
import ServiceBenefits from '@/components/containers/ServiceBenefits'
import ServiceProcess from '@/components/containers/ServiceProcess'
import { HardHat, Truck, Sparkles, Clock, Shield, CheckCircle } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Professionelle Baureinigung Landshut | FIMI',
  description: 'Baureinigung & Bauschlussreinigung in Landshut ✓ Schnell ✓ Gründlich ✓ Termingerecht ✓ Für Baufirmen & Bauherren',
}

const benefits = [
  { icon: HardHat, title: 'Baustellenreinigung', description: 'Professionelle Reinigung während und nach der Bauphase für sicheres Arbeiten.' },
  { icon: Truck, title: 'Entsorgung inklusive', description: 'Fachgerechte Entsorgung von Baustellenabfällen und Reinigungsresten.' },
  { icon: Sparkles, title: 'Bauschlussreinigung', description: 'Perfekte Übergabequalität durch gründliche Endreinigung aller Bereiche.' },
  { icon: Clock, title: 'Termintreue', description: 'Pünktliche Fertigstellung damit Übergabetermine eingehalten werden.' },
  { icon: Shield, title: 'Versichert & Zertifiziert', description: 'Vollumfängliche Absicherung und fachgerechte Durchführung.' },
  { icon: CheckCircle, title: 'Abnahmegarantie', description: 'Reinigung bis zur erfolgreichen Abnahme durch Bauherren oder Mieter.' }
]

const steps = [
  { number: '01', title: 'Baustellenbesichtigung', description: 'Vor-Ort-Begehung zur Erfassung des Reinigungsaufwands.' },
  { number: '02', title: 'Angebot & Terminplanung', description: 'Transparentes Angebot abgestimmt auf Ihren Bauzeitplan.' },
  { number: '03', title: 'Professionelle Reinigung', description: 'Gründliche Entfernung aller Baurückstände und Verschmutzungen.' },
  { number: '04', title: 'Übergabekontrolle', description: 'Finale Qualitätsprüfung für die perfekte Übergabe.' }
]

export default function BaureinigungPage() {
  return (
    <>
      <ServiceHero
        title="Baureinigung"
        subtitle="Perfekte Sauberkeit für die Bauübergabe"
        description="Professionelle Baureinigung für Neubauten, Umbauten und Renovierungen. Termintreu und abnahmebereit."
        image="https://images.unsplash.com/photo-1504307651254-35680f356dfd?q=80&w=2940&auto=format&fit=crop"
        category="Gewerbliche Objektreinigung"
      />
      <ServiceBenefits title="Baureinigung mit FIMI" subtitle="Von der Baustellenreinigung bis zur Schlussreinigung" benefits={benefits} />
      <ServiceProcess title="Ablauf der Baureinigung" subtitle="Effizient und termingerecht" steps={steps} />
    </>
  )
}
