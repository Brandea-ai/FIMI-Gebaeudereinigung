import { Metadata } from 'next'
import ServiceHero from '@/components/containers/ServiceHero'
import ServiceBenefits from '@/components/containers/ServiceBenefits'
import ServiceProcess from '@/components/containers/ServiceProcess'
import { ParkingCircle, Droplets, Shield, Truck, Sparkles, CheckCircle } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Tiefgaragenreinigung Landshut - Sauber & Sicher',
  description: 'Professionelle Tiefgaragenreinigung ✓ Öl- & Reifenabrieb ✓ Hochdruckreinigung ✓ Regelmäßig ✓ Verkehrssicher',
}

const benefits = [
  { icon: ParkingCircle, title: 'Garagenreinigung Komplett', description: 'Bodenreinigung, Wände, Decken und Einfahrtsbereiche.' },
  { icon: Droplets, title: 'Hochdruckreinigung', description: 'Entfernung von Öl, Reifenabrieb und hartnäckigen Verschmutzungen.' },
  { icon: Shield, title: 'Verkehrssicherheit', description: 'Saubere Markierungen und rutschfeste Böden für sichere Garagen.' },
  { icon: Truck, title: 'Spezialgeräte', description: 'Industriekehrmaschinen und Hochdruckreiniger für optimale Ergebnisse.' },
  { icon: Sparkles, title: 'Hygienisch Sauber', description: 'Beseitigung von Gerüchen und Bakterien für angenehmes Klima.' },
  { icon: CheckCircle, title: 'Regelmäßige Wartung', description: 'Planbare Reinigungsintervalle für dauerhaft saubere Tiefgaragen.' }
]

const steps = [
  { number: '01', title: 'Garagenbesichtigung', description: 'Erfassung der Garagenfläche und Verschmutzungsgrad.' },
  { number: '02', title: 'Reinigungsplan', description: 'Erstellung eines Konzepts inkl. Reinigungsintervalle.' },
  { number: '03', title: 'Gründliche Reinigung', description: 'Hochdruckreinigung und Flächenkehren mit Profi-Geräten.' },
  { number: '04', title: 'Kontinuierliche Pflege', description: 'Regelmäßige Wartung für dauerhaft saubere Tiefgaragen.' }
]

export default function TiefgaragenreinigungPage() {
  return (
    <>
      <ServiceHero
        title="Tiefgaragenreinigung"
        subtitle="Saubere und sichere Tiefgaragen"
        description="Professionelle Tiefgaragenreinigung für Wohn- und Geschäftsgebäude. Gründlich, verkehrssicher und hygienisch."
        image="https://images.unsplash.com/photo-1506521781263-d8422e82f27a?q=80&w=2940&auto=format&fit=crop"
        category="Industrielle & Spezialreinigung"
      />
      <ServiceBenefits title="Tiefgaragenreinigung Vorteile" subtitle="Sauber, sicher und gepflegt" benefits={benefits} />
      <ServiceProcess title="Unser Vorgehen" subtitle="Systematisch und gründlich" steps={steps} />
    </>
  )
}
