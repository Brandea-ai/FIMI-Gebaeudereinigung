import { Metadata } from 'next'
import ServiceHero from '@/components/containers/ServiceHero'
import ServiceBenefits from '@/components/containers/ServiceBenefits'
import ServiceProcess from '@/components/containers/ServiceProcess'
import { ParkingCircle, Droplets, Leaf, Shield, Truck, Calendar } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Parkplatzreinigung Landshut | Professionell & Günstig',
  description: 'Parkplatzreinigung & Außenflächenreinigung ✓ Kehrmaschinen ✓ Hochdruckreinigung ✓ Regelmäßig ✓ Jetzt anfragen!',
}

const benefits = [
  { icon: ParkingCircle, title: 'Saubere Parkflächen', description: 'Professionelle Reinigung von Parkplätzen, Zufahrten und Stellplätzen.' },
  { icon: Droplets, title: 'Hochdruckreinigung', description: 'Entfernung hartnäckiger Verschmutzungen wie Öl, Reifenabrieb und Unkraut.' },
  { icon: Leaf, title: 'Grünpflege inklusive', description: 'Entfernung von Laub, Unkraut und organischen Rückständen.' },
  { icon: Shield, title: 'Verkehrssicherheit', description: 'Saubere Markierungen und Wege für sichere Parkplätze.' },
  { icon: Truck, title: 'Professionelle Geräte', description: 'Kehrmaschinen und Hochdruckreiniger für optimale Ergebnisse.' },
  { icon: Calendar, title: 'Regelmäßige Wartung', description: 'Planbare Reinigungsintervalle für dauerhaft gepflegte Außenanlagen.' }
]

const steps = [
  { number: '01', title: 'Flächenerfassung', description: 'Beurteilung der Parkplatzfläche und Verschmutzungsgrad.' },
  { number: '02', title: 'Reinigungsplanung', description: 'Festlegung der Reinigungsmethoden und -intervalle.' },
  { number: '03', title: 'Professionelle Reinigung', description: 'Kehren, Hochdruckreinigung und Grünpflege.' },
  { number: '04', title: 'Wartungsservice', description: 'Regelmäßige Pflege für dauerhaft saubere Parkflächen.' }
]

export default function ParkplatzreinigungPage() {
  return (
    <>
      <ServiceHero
        title="Parkplatzreinigung"
        subtitle="Saubere Außenanlagen, gepflegter erster Eindruck"
        description="Professionelle Parkplatzreinigung für Unternehmen, Einkaufszentren und Wohnanlagen. Sauber, sicher, einladend."
        image="https://images.unsplash.com/photo-1590674899484-d5640e854abe?q=80&w=2940&auto=format&fit=crop"
        category="Gewerbliche Objektreinigung"
      />
      <ServiceBenefits title="Parkplatzreinigung Vorteile" subtitle="Gepflegte Außenanlagen das ganze Jahr" benefits={benefits} />
      <ServiceProcess title="So gehen wir vor" subtitle="Effizient und gründlich" steps={steps} />
    </>
  )
}
