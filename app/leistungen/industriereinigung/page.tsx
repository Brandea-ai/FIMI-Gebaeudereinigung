import { Metadata } from 'next'
import ServiceHero from '@/components/services/ServiceHero'
import ServiceCTA from '@/components/services/ServiceCTA'
import Image from 'next/image'
import { CheckCircle2, Factory, Shield, Clock } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Professionelle Industriereinigung Landshut | FIMI',
  description: 'Spezialisierte Industriereinigung für Produktionsstätten und Fertigungsanlagen. Wir arbeiten nach ISO-Standards. Auch im laufenden Betrieb. Jetzt anfragen!',
  keywords: 'Industriereinigung, Produktionsreinigung, Fertigungsreinigung, Betriebsreinigung, Landshut',
}

export default function IndustriereinigungPage() {
  return (
    <main className="min-h-screen bg-white pt-24">
      <ServiceHero
        category="Industrielle & Spezialreinigung"
        title="Industriereinigung"
        subtitle="Spezialisierte Reinigung für Produktionsstätten, Fertigungsanlagen und Industriebetriebe in Landshut"
        image="https://images.unsplash.com/photo-1565688534245-05d6b5be184a?q=80&w=3540&auto=format&fit=crop"
        usps={['Laufender Betrieb möglich', 'Spezialausrüstung', 'Fachpersonal']}
      />

      <section className="py-24 bg-white">
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-12 items-center mb-20">
            <div>
              <h2 className="text-4xl font-bold text-fimi-navy mb-6">
                Reinigung unter industriellen Bedingungen
              </h2>
              <p className="text-xl text-gray-600 mb-8">
                Industrieanlagen erfordern spezielles Know-how und Ausrüstung. Wir reinigen Produktionshallen, Maschinen und Anlagen fachgerecht - auch während des laufenden Betriebs.
              </p>
              <div className="space-y-4">
                {[
                  'Produktionshallen und Fertigungsbereiche',
                  'Lager- und Logistikflächen',
                  'Sozialräume und Umkleiden',
                  'Entfernung von Industriestaub und Spänen',
                  'Ölbindemittel-Einsatz bei Bedarf',
                  'Einhaltung von Sicherheitsvorschriften'
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-3">
                    <CheckCircle2 className="text-fimi-turquoise" size={24} />
                    <span className="text-lg">{item}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative h-[500px]" style={{ borderRadius: '4px', overflow: 'hidden' }}>
              <Image
                src="https://images.unsplash.com/photo-1581094288338-2314dddb7ece?q=80&w=3540&auto=format&fit=crop"
                alt="Industriereinigung"
                fill
                className="object-cover"
              />
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              { icon: Factory, title: 'Industrieerfahrung', desc: '15+ Jahre Erfahrung in der Industriereinigung' },
              { icon: Shield, title: 'Arbeitssicherheit', desc: 'DGUV-zertifiziertes Personal und Verfahren' },
              { icon: Clock, title: 'Flexible Zeiten', desc: 'Reinigung außerhalb der Produktionszeiten möglich' }
            ].map((item, i) => {
              const Icon = item.icon
              return (
                <div key={i} className="bg-gray-50 p-8 text-center" style={{ borderRadius: '4px' }}>
                  <div className="bg-fimi-turquoise text-white w-16 h-16 flex items-center justify-center mx-auto mb-6" style={{ borderRadius: '4px' }}>
                    <Icon size={32} />
                  </div>
                  <h3 className="text-xl font-bold text-fimi-navy mb-3">{item.title}</h3>
                  <p className="text-gray-600">{item.desc}</p>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      <ServiceCTA />
    </main>
  )
}
