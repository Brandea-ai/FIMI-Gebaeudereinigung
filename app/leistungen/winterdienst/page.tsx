import { Metadata } from 'next'
import ServiceHero from '@/components/containers/ServiceHero'
import ServiceBenefits from '@/components/containers/ServiceBenefits'
import ServiceProcess from '@/components/containers/ServiceProcess'
import { Snowflake, Clock, Shield, Truck, Phone, Award } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Winterdienst Landshut - Schneeräumung & Streudienst',
  description: 'Zuverlässiger Winterdienst ✓ Schneeräumung ✓ Streudienst ✓ 24/7 Bereitschaft ✓ Verkehrssicherheit garantiert',
}

const benefits = [
  { icon: Snowflake, title: 'Kompletter Winterdienst', description: 'Schneeräumung, Streudienst und Eisbeseitigung für sichere Wege.' },
  { icon: Clock, title: '24/7 Bereitschaft', description: 'Rund-um-die-Uhr-Service auch an Wochenenden und Feiertagen.' },
  { icon: Shield, title: 'Verkehrssicherheit', description: 'Erfüllung Ihrer Räum- und Streupflicht für rechtliche Sicherheit.' },
  { icon: Truck, title: 'Professionelle Ausrüstung', description: 'Moderne Räum- und Streufahrzeuge für effiziente Schneebeseitigung.' },
  { icon: Phone, title: 'Wetterüberwachung', description: 'Proaktiver Einsatz bei Wettervorhersagen für präventive Maßnahmen.' },
  { icon: Award, title: 'Erfahrenes Team', description: 'Geschulte Mitarbeiter mit langjähriger Winterdienst-Erfahrung.' }
]

const steps = [
  { number: '01', title: 'Objektbegehung', description: 'Erfassung aller zu räumenden Flächen und Prioritäten.' },
  { number: '02', title: 'Winterdienst-Vertrag', description: 'Festlegung von Leistungsumfang und Bereitschaftszeiten.' },
  { number: '03', title: 'Proaktiver Einsatz', description: 'Schneeräumung und Streuen bei Wettervorhersagen.' },
  { number: '04', title: 'Dokumentation', description: 'Lückenlose Protokollierung aller Winterdienst-Einsätze.' }
]

export default function WinterdienstPage() {
  return (
    <>
      <ServiceHero
        title="Winterdienst"
        subtitle="Sicherheit bei Schnee und Eis"
        description="Professioneller Winterdienst für Unternehmen, Kommunen und Wohnanlagen. Zuverlässig, schnell und rechtssicher."
        image="https://images.unsplash.com/photo-1547754980-3df97fed72a8?q=80&w=2940&auto=format&fit=crop"
        category="Facility Management & Services"
      />
      <ServiceBenefits title="Winterdienst Vorteile" subtitle="Sicher durch den Winter" benefits={benefits} />
      <ServiceProcess title="Unser Vorgehen" subtitle="Proaktiv und zuverlässig" steps={steps} />
    </>
  )
}
