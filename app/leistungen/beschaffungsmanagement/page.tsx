import { Metadata } from 'next'
import ServiceHero from '@/components/containers/ServiceHero'
import ServiceBenefits from '@/components/containers/ServiceBenefits'
import ServiceProcess from '@/components/containers/ServiceProcess'
import { Package, TrendingDown, Clock, Shield, Award, CheckCircle } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Beschaffungsmanagement Landshut - Facility Supplies',
  description: 'Professionelles Beschaffungsmanagement ✓ Reinigungsmittel ✓ Verbrauchsmaterialien ✓ Kostenoptimiert ✓ Lagerhaltung',
}

const benefits = [
  { icon: Package, title: 'Komplette Beschaffung', description: 'Reinigungsmittel, Hygieneartikel und alle Verbrauchsmaterialien.' },
  { icon: TrendingDown, title: 'Kostenoptimierung', description: 'Günstige Konditionen durch Rahmenverträge und Großabnahme.' },
  { icon: Clock, title: 'Zeitersparnis', description: 'Wir kümmern uns um Bestellung, Lieferung und Lagerverwaltung.' },
  { icon: Shield, title: 'Qualitätsprodukte', description: 'Ausschließlich geprüfte und zertifizierte Produkte.' },
  { icon: Award, title: 'Individuelle Beratung', description: 'Produktempfehlungen basierend auf Ihren spezifischen Anforderungen.' },
  { icon: CheckCircle, title: 'Bestandsmanagement', description: 'Automatische Nachbestellung bei Mindestbestand.' }
]

const steps = [
  { number: '01', title: 'Bedarfsanalyse', description: 'Erfassung Ihres Verbrauchs und Ihrer Anforderungen.' },
  { number: '02', title: 'Produktauswahl', description: 'Zusammenstellung optimaler Produkte für Ihre Bedürfnisse.' },
  { number: '03', title: 'Lieferung & Lagerung', description: 'Regelmäßige Belieferung und optional Lagerverwaltung.' },
  { number: '04', title: 'Bestandsoptimierung', description: 'Kontinuierliche Anpassung an Ihren tatsächlichen Bedarf.' }
]

export default function BeschaffungsmanagementPage() {
  return (
    <>
      <ServiceHero
        title="Beschaffungsmanagement"
        subtitle="Professionelle Beschaffung aller Facility-Produkte"
        description="Umfassendes Beschaffungsmanagement für Reinigungsmittel und Verbrauchsmaterialien. Kosteneffizient und zeitsparend."
        image="https://images.unsplash.com/photo-1553413077-190dd305871c?q=80&w=2940&auto=format&fit=crop"
        category="Facility Management & Services"
      />
      <ServiceBenefits title="Beschaffungsmanagement Vorteile" subtitle="Optimierte Beschaffung für Ihre Facility" benefits={benefits} />
      <ServiceProcess title="Unser Vorgehen" subtitle="Von der Bedarfsanalyse bis zur Belieferung" steps={steps} />
    </>
  )
}
