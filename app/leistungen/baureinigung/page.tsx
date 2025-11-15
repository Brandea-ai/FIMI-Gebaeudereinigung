import { Metadata } from 'next'
import ServiceHero from '@/components/services/ServiceHero'
import ServiceCTA from '@/components/services/ServiceCTA'
import Image from 'next/image'
import { CheckCircle2, HardHat, Trash2, Shield } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Professionelle Baureinigung Landshut | Bauendreinigung | FIMI',
  description: 'Bauendreinigung, Baugrobreinigung und Baufeinreinigung nach DIN. Schnell, gründlich und termingerecht. Jetzt anfragen!',
  keywords: 'Baureinigung, Bauendreinigung, Bauschlussreinigung, Baufeinreinigung, Baugrobreinigung, Landshut',
}

export default function BaureinigungPage() {
  return (
    <main className="min-h-screen bg-white pt-24">
      <ServiceHero
        category="Gewerbliche Objektreinigung"
        title="Baureinigung"
        subtitle="Gründliche Endreinigung nach Bauarbeiten - von Baugrobreinigung bis Baufeinreinigung in Landshut"
        image="https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?q=80&w=3540&auto=format&fit=crop"
        usps={['Baugrob- & Baufeinreinigung', 'Termingerecht', 'Professionelle Ausrüstung']}
      />

      <section className="py-24 bg-white">
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-12 items-center mb-20">
            <div className="relative h-[500px]" style={{ borderRadius: '4px', overflow: 'hidden' }}>
              <Image
                src="https://images.unsplash.com/photo-1541888946425-d81bb19240f5?q=80&w=3540&auto=format&fit=crop"
                alt="Baureinigung"
                fill
                className="object-cover"
              />
            </div>
            <div>
              <h2 className="text-4xl font-bold text-fimi-navy mb-6">
                Von Baustaub befreit in die Nutzung
              </h2>
              <p className="text-xl text-gray-600 mb-8">
                Nach Bauarbeiten, Renovierungen oder Sanierungen übernehmen wir die komplette Reinigung - von der Baugrobreinigung bis zur Baufeinreinigung.
              </p>
              <div className="space-y-4">
                {[
                  'Baugrobreinigung (Grobschmutz entfernen)',
                  'Baufeinreinigung (Feinstaub und Details)',
                  'Glasreinigung innen und außen',
                  'Bodenreinigung und Grundreinigung',
                  'Entsorgung von Bauabfällen',
                  'Abnahmebereit nach DIN-Standards'
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-3">
                    <CheckCircle2 className="text-fimi-turquoise" size={24} />
                    <span className="text-lg">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              { icon: HardHat, title: 'Bauerfahrung', desc: 'Spezialisiert auf Baureinigung seit 15+ Jahren' },
              { icon: Trash2, title: 'Vollständige Entsorgung', desc: 'Wir entsorgen allen Bauschmutz fachgerecht' },
              { icon: Shield, title: 'Termingarantie', desc: 'Pünktlich zur Bauabnahme fertig' }
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
