import { Metadata } from 'next'
import ServiceHero from '@/components/containers/ServiceHero'
import ServiceBenefits from '@/components/containers/ServiceBenefits'
import ServiceProcess from '@/components/containers/ServiceProcess'
import { Wrench, Clock, Shield, CheckCircle, Phone, Award } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Hausmeisterservice Landshut - Zuverlässig & Flexibel',
  description: 'Professioneller Hausmeisterservice ✓ Wartung ✓ Kleinreparaturen ✓ Kontrollen ✓ 24/7 Erreichbar ✓ Zuverlässig',
}

const benefits = [
  { icon: Wrench, title: 'Umfassende Betreuung', description: 'Von Kleinreparaturen über Kontrollen bis zur Objektpflege.' },
  { icon: Clock, title: 'Flexibel verfügbar', description: 'Regelmäßige Präsenz oder nach Bedarf - ganz wie Sie es wünschen.' },
  { icon: Shield, title: 'Zuverlässig & Vertrauenswürdig', description: 'Geprüfte und erfahrene Hausmeister für Ihre Immobilie.' },
  { icon: CheckCircle, title: 'Vorbeugende Wartung', description: 'Regelmäßige Kontrollen vermeiden teure Reparaturen.' },
  { icon: Phone, title: '24/7 Erreichbarkeit', description: 'Notfall-Hotline für dringende Angelegenheiten.' },
  { icon: Award, title: 'Handwerkliches Know-how', description: 'Qualifizierte Hausmeister mit vielfältigen Fähigkeiten.' }
]

const steps = [
  { number: '01', title: 'Bedarfsermittlung', description: 'Analyse Ihrer Anforderungen und Objektgröße.' },
  { number: '02', title: 'Leistungsumfang', description: 'Definition aller Hausmeisteraufgaben und Einsatzzeiten.' },
  { number: '03', title: 'Zuverlässige Betreuung', description: 'Regelmäßige Durchführung aller vereinbarten Tätigkeiten.' },
  { number: '04', title: 'Dokumentation', description: 'Lückenlose Protokollierung aller Arbeiten und Kontrollen.' }
]

export default function HausmeisterservicePage() {
  return (
    <>
      <ServiceHero
        title="Hausmeisterservice"
        subtitle="Zuverlässige Betreuung Ihrer Immobilie"
        description="Professioneller Hausmeisterservice für Wohn- und Gewerbeimmobilien. Immer verfügbar, stets zuverlässig."
        image="https://images.unsplash.com/photo-1581092918484-8313e1f7f195?q=80&w=2940&auto=format&fit=crop"
        category="Facility Management & Services"
      />
      <ServiceBenefits title="Hausmeisterservice Vorteile" subtitle="Rundum-Betreuung für Ihre Immobilie" benefits={benefits} />
      <ServiceProcess title="Unser Vorgehen" subtitle="Strukturiert und zuverlässig" steps={steps} />
    </>
  )
}
