import { Metadata } from 'next'
import ServiceHero from '@/components/containers/ServiceHero'
import ServiceBenefits from '@/components/containers/ServiceBenefits'
import ServiceProcess from '@/components/containers/ServiceProcess'
import { Trees, Leaf, Droplets, Sun, Award, Calendar } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Außenanlagenpflege Landshut - Garten & Grünflächen',
  description: 'Professionelle Außenanlagenpflege ✓ Grünflächenpflege ✓ Gehwegreinigung ✓ Unkrautentfernung ✓ Ganzjährig',
}

const benefits = [
  { icon: Trees, title: 'Grünflächenpflege', description: 'Professionelle Pflege von Rasen, Beeten und Grünanlagen.' },
  { icon: Leaf, title: 'Unkrautbekämpfung', description: 'Entfernung von Unkraut auf Wegen, Parkplätzen und Grünflächen.' },
  { icon: Droplets, title: 'Gehwegreinigung', description: 'Hochdruckreinigung von Gehwegen, Terrassen und Pflasterflächen.' },
  { icon: Sun, title: 'Ganzjährige Pflege', description: 'Saisonale Außenanlagenpflege von Frühjahr bis Winter.' },
  { icon: Award, title: 'Gepflegter Eindruck', description: 'Professionell gepflegte Außenanlagen steigern Ihr Unternehmensimage.' },
  { icon: Calendar, title: 'Regelmäßige Wartung', description: 'Planbare Pflegeintervalle für dauerhaft schöne Außenanlagen.' }
]

const steps = [
  { number: '01', title: 'Anlagenbegehung', description: 'Erfassung aller Außenanlagen und Pflegeanforderungen.' },
  { number: '02', title: 'Jahrespflegeplan', description: 'Erstellung eines saisonalen Pflegeplans für Ihre Anlagen.' },
  { number: '03', title: 'Professionelle Pflege', description: 'Regelmäßige Durchführung aller Pflegearbeiten.' },
  { number: '04', title: 'Saisonale Anpassung', description: 'Anpassung der Pflege an Jahreszeiten und Witterung.' }
]

export default function AussenanlagenpflegePage() {
  return (
    <>
      <ServiceHero
        title="Außenanlagenpflege"
        subtitle="Gepflegte Grünflächen das ganze Jahr"
        description="Professionelle Außenanlagenpflege für ein repräsentatives Erscheinungsbild. Ganzjährig, zuverlässig und fachgerecht."
        image="https://images.unsplash.com/photo-1558904541-efa843a96f01?q=80&w=2940&auto=format&fit=crop"
        category="Industrielle & Spezialreinigung"
      />
      <ServiceBenefits title="Außenanlagenpflege Expertise" subtitle="Professionelle Grünpflege und mehr" benefits={benefits} />
      <ServiceProcess title="Unser Vorgehen" subtitle="Ganzjährig und saisonal angepasst" steps={steps} />
    </>
  )
}
