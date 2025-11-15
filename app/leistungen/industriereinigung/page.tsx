import { Metadata } from 'next'
import ServiceHero from '@/components/containers/ServiceHero'
import ServiceBenefits from '@/components/containers/ServiceBenefits'
import ServiceProcess from '@/components/containers/ServiceProcess'
import { Factory, Shield, Zap, Award, Truck, Clock } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Industriereinigung Landshut - Produktionsstätten & Anlagen',
  description: 'Professionelle Industriereinigung ✓ Produktionsanlagen ✓ Maschinen ✓ Hallenböden ✓ Fachgerecht & Sicher',
}

const benefits = [
  { icon: Factory, title: 'Produktionserfahrung', description: 'Spezialisiert auf Reinigung in laufenden Produktionsanlagen und Industriebetrieben.' },
  { icon: Shield, title: 'Höchste Sicherheitsstandards', description: 'Einhaltung aller Arbeitssicherheits- und Hygienevorschriften im Industrieumfeld.' },
  { icon: Zap, title: 'Minimale Betriebsunterbrechung', description: 'Effiziente Reinigung mit minimalem Einfluss auf Ihre Produktionsabläufe.' },
  { icon: Award, title: 'Spezialisten-Team', description: 'Geschulte Fachkräfte mit Erfahrung in verschiedenen Industriebranchen.' },
  { icon: Truck, title: 'Industriegeräte', description: 'Professionelle Reinigungsmaschinen für anspruchsvolle Industrieumgebungen.' },
  { icon: Clock, title: 'Flexible Einsatzzeiten', description: 'Reinigung während Schichtpausen, nachts oder am Wochenende möglich.' }
]

const steps = [
  { number: '01', title: 'Betriebsanalyse', description: 'Begehung und Analyse der Produktions- und Reinigungsanforderungen.' },
  { number: '02', title: 'Sicherheitskonzept', description: 'Erstellung eines Reinigungsplans unter Berücksichtigung aller Sicherheitsaspekte.' },
  { number: '03', title: 'Fachgerechte Reinigung', description: 'Durchführung mit Spezialausrüstung und geschultem Personal.' },
  { number: '04', title: 'Dokumentation', description: 'Lückenlose Dokumentation für Ihre Qualitätssicherung.' }
]

export default function IndustriereinigungPage() {
  return (
    <>
      <ServiceHero
        title="Industriereinigung"
        subtitle="Fachgerechte Reinigung für Produktionsanlagen"
        description="Professionelle Industriereinigung für produzierende Betriebe. Sicher, effizient und produktionsschonend."
        image="https://images.unsplash.com/photo-1581092580497-e0d23cbdf1dc?q=80&w=2940&auto=format&fit=crop"
        category="Industrielle & Spezialreinigung"
      />
      <ServiceBenefits title="Industriereinigung Expertise" subtitle="Professionell und sicher in jedem Industrieumfeld" benefits={benefits} />
      <ServiceProcess title="Unser Vorgehen" subtitle="Systematisch und sicher" steps={steps} />
    </>
  )
}
