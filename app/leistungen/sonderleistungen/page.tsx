import { Metadata } from 'next'
import ServiceHero from '@/components/containers/ServiceHero'
import ServiceBenefits from '@/components/containers/ServiceBenefits'
import ServiceProcess from '@/components/containers/ServiceProcess'
import { Zap, Award, Sparkles, Shield, Clock, CheckCircle } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Sonderleistungen Reinigung Landshut - Spezialreinigung',
  description: 'Spezialisierte Reinigungsleistungen ✓ Grundreinigung ✓ Teppichreinigung ✓ Glasreinigung ✓ Individuelle Lösungen',
}

const benefits = [
  { icon: Zap, title: 'Maßgeschneiderte Lösungen', description: 'Individuelle Reinigungskonzepte für spezielle Anforderungen.' },
  { icon: Award, title: 'Spezialisten-Know-how', description: 'Fachkräfte mit Expertise in verschiedenen Spezialreinigungen.' },
  { icon: Sparkles, title: 'Grundreinigung', description: 'Intensive Tiefenreinigung für besondere Anlässe oder Intervalle.' },
  { icon: Shield, title: 'Qualitätsgarantie', description: 'Höchste Standards auch bei außergewöhnlichen Reinigungsaufgaben.' },
  { icon: Clock, title: 'Schnelle Verfügbarkeit', description: 'Auch kurzfristige Sonderreinigungen sind möglich.' },
  { icon: CheckCircle, title: 'Komplettservice', description: 'Von der Beratung bis zur Durchführung alles aus einer Hand.' }
]

const steps = [
  { number: '01', title: 'Bedarfsanalyse', description: 'Detaillierte Erfassung Ihrer speziellen Reinigungsanforderungen.' },
  { number: '02', title: 'Individuelles Konzept', description: 'Entwicklung einer maßgeschneiderten Reinigungslösung.' },
  { number: '03', title: 'Fachgerechte Durchführung', description: 'Professionelle Umsetzung mit Spezialausrüstung.' },
  { number: '04', title: 'Qualitätssicherung', description: 'Abschlusskontrolle und Dokumentation der Ergebnisse.' }
]

export default function SonderleistungenPage() {
  return (
    <>
      <ServiceHero
        title="Sonderleistungen"
        subtitle="Spezialisierte Reinigung für besondere Anforderungen"
        description="Individuelle Reinigungslösungen für außergewöhnliche Aufgaben. Grundreinigung, Teppichpflege und mehr."
        image="https://images.unsplash.com/photo-1563453392212-326f5e854473?q=80&w=2940&auto=format&fit=crop"
        category="Industrielle & Spezialreinigung"
      />
      <ServiceBenefits title="Sonderleistungen im Detail" subtitle="Maßgeschneiderte Reinigungslösungen" benefits={benefits} />
      <ServiceProcess title="Unser Vorgehen" subtitle="Individuell und professionell" steps={steps} />
    </>
  )
}
