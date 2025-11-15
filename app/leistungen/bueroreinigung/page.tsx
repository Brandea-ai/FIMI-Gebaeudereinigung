import { Metadata } from 'next'
import ServiceHero from '@/components/containers/ServiceHero'
import ServiceBenefits from '@/components/containers/ServiceBenefits'
import ServiceProcess from '@/components/containers/ServiceProcess'
import FAQContainer from '@/components/containers/FAQContainer'
import { Shield, Clock, Sparkles, Award, Users, Leaf } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Professionelle Büroreinigung in Landshut',
  description: 'Professionelle Büroreinigung in Landshut ✓ Zertifizierte Fachkräfte ✓ Flexible Zeiten ✓ Umweltfreundlich ✓ Faire Preise. Jetzt Angebot anfordern!',
  keywords: ['Büroreinigung', 'Büroreinigung Landshut', 'Büro reinigen', 'Gewerbereinigung', 'Office Cleaning'],
}

const benefits = [
  {
    icon: Shield,
    title: 'Höchste Qualitätsstandards',
    description: 'ISO-zertifizierte Reinigungsprozesse und regelmäßige Qualitätskontrollen garantieren stets perfekte Ergebnisse in Ihren Büroräumen.'
  },
  {
    icon: Clock,
    title: 'Flexible Einsatzzeiten',
    description: 'Reinigung außerhalb Ihrer Geschäftszeiten - morgens, abends oder am Wochenende. Ihr Tagesgeschäft wird nicht gestört.'
  },
  {
    icon: Sparkles,
    title: 'Gründliche Reinigung',
    description: 'Von Arbeitsflächen über Sanitäranlagen bis zu Gemeinschaftsräumen - wir sorgen für absolute Sauberkeit in jedem Bereich.'
  },
  {
    icon: Award,
    title: 'Erfahrenes Fachpersonal',
    description: 'Geschulte und zuverlässige Reinigungskräfte mit langjähriger Erfahrung in der professionellen Büroreinigung.'
  },
  {
    icon: Users,
    title: 'Fester Ansprechpartner',
    description: 'Ein dedizierter Ansprechpartner koordiniert alle Reinigungsarbeiten und steht Ihnen jederzeit zur Verfügung.'
  },
  {
    icon: Leaf,
    title: 'Ökologische Reinigungsmittel',
    description: 'Umweltschonende und gesundheitsverträgliche Reinigungsmittel für ein gesundes Arbeitsklima.'
  }
]

const processSteps = [
  {
    number: '01',
    title: 'Kostenlose Beratung',
    description: 'Wir analysieren Ihre Räumlichkeiten und Anforderungen vor Ort und erstellen ein maßgeschneidertes Konzept.'
  },
  {
    number: '02',
    title: 'Individuelles Angebot',
    description: 'Sie erhalten ein transparentes Festpreisangebot ohne versteckte Kosten, abgestimmt auf Ihre Bedürfnisse.'
  },
  {
    number: '03',
    title: 'Professionelle Durchführung',
    description: 'Unser geschultes Team reinigt Ihre Büroräume nach höchsten Standards und zu vereinbarten Zeiten.'
  },
  {
    number: '04',
    title: 'Qualitätskontrolle',
    description: 'Regelmäßige Kontrollen und Ihr Feedback sichern dauerhaft höchste Reinigungsqualität.'
  }
]

export default function BueroreinigungPage() {
  return (
    <>
      <ServiceHero
        title="Büroreinigung in Landshut"
        subtitle="Saubere Büros für produktives Arbeiten"
        description="Professionelle Büroreinigung, die Ihren Mitarbeitern ein angenehmes und gesundes Arbeitsumfeld schafft. Verlassen Sie sich auf unsere Erfahrung und Zuverlässigkeit."
        image="https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=2940&auto=format&fit=crop"
        category="Gewerbliche Objektreinigung"
      />

      <ServiceBenefits
        title="Warum FIMI Büroreinigung?"
        subtitle="Unsere Büroreinigung vereint Qualität, Flexibilität und Nachhaltigkeit für Ihr perfektes Arbeitsumfeld."
        benefits={benefits}
      />

      <ServiceProcess
        title="So läuft's ab"
        subtitle="In 4 einfachen Schritten zu sauberen Büroräumen"
        steps={processSteps}
      />

      {/* Leistungsumfang Section */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Left - Image */}
            <div className="relative h-[500px] rounded-2xl overflow-hidden shadow-2xl">
              <img
                src="https://images.unsplash.com/photo-1497366811353-6870744d04b2?q=80&w=2940&auto=format&fit=crop"
                alt="Büroreinigung Leistungen"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-br from-fimi-navy/80 to-fimi-turquoise/80 flex items-center justify-center">
                <div className="text-center text-white p-8">
                  <p className="text-5xl font-bold mb-4">100%</p>
                  <p className="text-2xl">Kundenzufriedenheit</p>
                </div>
              </div>
            </div>

            {/* Right - Leistungen */}
            <div>
              <span className="text-fimi-turquoise font-semibold text-sm uppercase tracking-wider mb-4 block">
                Leistungsumfang
              </span>
              <h3 className="mb-6">Was wir für Sie reinigen</h3>

              <div className="space-y-6">
                <div>
                  <h4 className="text-lg font-bold text-fimi-navy mb-2">Arbeitsplätze & Büros</h4>
                  <ul className="space-y-2 text-gray-600">
                    <li className="flex items-start">
                      <span className="text-fimi-turquoise mr-2">•</span>
                      <span>Schreibtische und Arbeitsflächen</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-fimi-turquoise mr-2">•</span>
                      <span>Staubsaugen und Wischen der Böden</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-fimi-turquoise mr-2">•</span>
                      <span>Papierkörbe leeren und entsorgen</span>
                    </li>
                  </ul>
                </div>

                <div>
                  <h4 className="text-lg font-bold text-fimi-navy mb-2">Sanitärbereiche</h4>
                  <ul className="space-y-2 text-gray-600">
                    <li className="flex items-start">
                      <span className="text-fimi-turquoise mr-2">•</span>
                      <span>Toiletten und Waschbecken reinigen</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-fimi-turquoise mr-2">•</span>
                      <span>Spiegel und Armaturen polieren</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-fimi-turquoise mr-2">•</span>
                      <span>Hygieneartikel auffüllen</span>
                    </li>
                  </ul>
                </div>

                <div>
                  <h4 className="text-lg font-bold text-fimi-navy mb-2">Gemeinschaftsräume</h4>
                  <ul className="space-y-2 text-gray-600">
                    <li className="flex items-start">
                      <span className="text-fimi-turquoise mr-2">•</span>
                      <span>Küchen und Pausenräume</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-fimi-turquoise mr-2">•</span>
                      <span>Besprechungsräume</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-fimi-turquoise mr-2">•</span>
                      <span>Eingangsbereiche und Flure</span>
                    </li>
                  </ul>
                </div>

                <div>
                  <h4 className="text-lg font-bold text-fimi-navy mb-2">Zusatzleistungen</h4>
                  <ul className="space-y-2 text-gray-600">
                    <li className="flex items-start">
                      <span className="text-fimi-turquoise mr-2">•</span>
                      <span>Fensterreinigung</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-fimi-turquoise mr-2">•</span>
                      <span>Teppichreinigung</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-fimi-turquoise mr-2">•</span>
                      <span>Grundreinigung nach Vereinbarung</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <FAQContainer />
    </>
  )
}
