import { Metadata } from 'next'
import ServiceHero from '@/components/services/ServiceHero'
import ServiceCTA from '@/components/services/ServiceCTA'
import Image from 'next/image'
import { CheckCircle2, Warehouse, Truck, Settings } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Hallenreinigung Landshut | Lager & Produktionshallen | FIMI',
  description: 'Professionelle Reinigung von Produktionshallen, Lagerhallen und Industriehallen. Leistungsstark und effizient. Jetzt Angebot einholen!',
  keywords: 'Hallenreinigung, Produktionshalle, Lagerhalle, Industriehalle, Gewerbehalle, Landshut',
}

export default function HallenreinigungPage() {
  return (
    <main className="min-h-screen bg-white pt-24">
      <ServiceHero
        category="Gewerbliche Objektreinigung"
        title="Hallenreinigung"
        subtitle="Reinigung von Produktions-, Lager- und Industriehallen mit professioneller Technik in Landshut"
        image="https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?q=80&w=3540&auto=format&fit=crop"
        usps={['Große Flächen', 'Spezialgeräte', 'Flexibl e Zeiten']}
      />

      <section className="py-24 bg-white">
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-12 items-center mb-20">
            <div>
              <h2 className="text-4xl font-bold text-fimi-navy mb-6">
                Effiziente Reinigung großer Flächen
              </h2>
              <p className="text-xl text-gray-600 mb-8">
                Produktions-, Lager- und Industriehallen erfordern spezielle Reinigungstechniken und -geräte. Wir haben die Expertise und Ausrüstung.
              </p>
              <div className="space-y-4">
                {[
                  'Bodenreinigung mit Kehrmaschinen',
                  'Hochregallager und Regalsysteme',
                  'Produktionsbereiche (auch unter Betrieb)',
                  'Entfernung von Industri estaub',
                  'Tor- und Toranlagenreinigung',
                  'Sozialräume und Sanitäranlagen'
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
                src="https://images.unsplash.com/photo-1565688534245-05d6b5be184a?q=80&w=3540&auto=format&fit=crop"
                alt="Hallenreinigung"
                fill
                className="object-cover"
              />
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              { icon: Warehouse, title: 'Große Flächen', desc: 'Spezialisiert auf Hallen jeder Größe' },
              { icon: Truck, title: 'Professionelle Geräte', desc: 'Kehrmaschinen, Scheuersaugmaschinen, Hubarbeitsbühnen' },
              { icon: Settings, title: 'Laufender Betrieb', desc: 'Reinigung auch während Produktion möglich' }
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
