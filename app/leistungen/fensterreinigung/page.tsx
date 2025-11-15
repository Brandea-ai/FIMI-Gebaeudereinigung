import { Metadata } from 'next'
import ServiceHero from '@/components/containers/ServiceHero'
import ServiceBenefits from '@/components/containers/ServiceBenefits'
import ServiceProcess from '@/components/containers/ServiceProcess'
import { Sparkles, Shield, Droplets, Sun, Building, Award } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Fensterreinigung Landshut - Streifenfrei & Professionell',
  description: 'Professionelle Fensterreinigung für Gewerbe & Privat ✓ Streifenfrei ✓ Auch Höhen ✓ Regelmäßig ✓ Günstig',
}

const benefits = [
  { icon: Sparkles, title: 'Streifenfreier Glanz', description: 'Professionelle Reinigungstechnik für kristallklare Fenster ohne Schlieren.' },
  { icon: Shield, title: 'Sicher in der Höhe', description: 'Absicherung und Ausrüstung für Fensterreinigung auch in großen Höhen.' },
  { icon: Droplets, title: 'Rahmenreinigung inklusive', description: 'Fensterrahmen, Fensterbänke und Dichtungen werden mitgereinigt.' },
  { icon: Sun, title: 'Mehr Licht & Transparenz', description: 'Saubere Fenster sorgen für hellere Räume und besseres Wohlbefinden.' },
  { icon: Building, title: 'Für alle Gebäudetypen', description: 'Von Bürogebäuden über Produktionshallen bis zu Privathäusern.' },
  { icon: Award, title: 'Erfahrene Fachkräfte', description: 'Geschultes Personal mit langjähriger Erfahrung in der Fensterreinigung.' }
]

const steps = [
  { number: '01', title: 'Objektbesichtigung', description: 'Analyse der Fensterflächen und Zugänglichkeit.' },
  { number: '02', title: 'Angebot erstellen', description: 'Transparentes Festpreisangebot basierend auf Fläche und Aufwand.' },
  { number: '03', title: 'Professionelle Reinigung', description: 'Streifenfreie Reinigung mit Profi-Equipment.' },
  { number: '04', title: 'Regelmäßiger Service', description: 'Planbare Reinigungsintervalle für dauerhaft klare Sicht.' }
]

export default function FensterreinigungPage() {
  return (
    <>
      <ServiceHero
        title="Fensterreinigung"
        subtitle="Kristallklare Fenster für mehr Durchblick"
        description="Professionelle Fensterreinigung für Gewerbe, Industrie und Privat. Streifenfrei, sicher und zuverlässig."
        image="https://images.unsplash.com/photo-1527515637462-cff94eecc1ac?q=80&w=2940&auto=format&fit=crop"
        category="Gewerbliche Objektreinigung"
      />
      <ServiceBenefits title="Fensterreinigung Expertise" subtitle="Professionell und streifenfrei" benefits={benefits} />
      <ServiceProcess title="Unser Vorgehen" subtitle="Von der Planung bis zur Durchführung" steps={steps} />
    </>
  )
}
