import { Metadata } from 'next'
import ServiceHero from '@/components/services/ServiceHero'
import ServiceCTA from '@/components/services/ServiceCTA'
import Image from 'next/image'
import { CheckCircle2, Clock, Users, Sparkles } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Professionelle Unterhaltsreinigung Landshut | FIMI',
  description: 'Zuverlässige Unterhaltsreinigung für Gewerbe und Industrie. Regelmäßige Pflege nach ISO 9001. Jetzt Angebot anfordern!',
  keywords: 'Unterhaltsreinigung, Objektpflege, regelmäßige Reinigung, Gebäudereinigung Landshut',
}

export default function UnterhaltsreinigungPage() {
  return (
    <main className="min-h-screen bg-white pt-24">
      <ServiceHero
        category="Gewerbliche Objektreinigung"
        title="Unterhaltsreinigung"
        subtitle="Regelmäßige professionelle Pflege für dauerhaft saubere Räumlichkeiten in Landshut und Umgebung"
        image="https://images.unsplash.com/photo-1581578731548-c64695cc6952?q=80&w=3540&auto=format&fit=crop"
        usps={['Regelmäßige Intervalle', 'Gleichbleibende Qualität', 'Festpreise']}
      />

      {/* Features */}
      <section className="py-24 bg-white">
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-12 items-center mb-20">
            <div>
              <h2 className="text-4xl font-bold text-fimi-navy mb-6">
                Kontinuierliche Sauberkeit für Ihr Objekt
              </h2>
              <p className="text-xl text-gray-600 mb-8">
                Unterhaltsreinigung bedeutet regelmäßige, professionelle Pflege Ihrer Räumlichkeiten. Wir sorgen für dauerhaft saubere Bedingungen.
              </p>
              <div className="space-y-4">
                {[
                  'Täglich, wöchentlich oder individuell',
                  'Bodenreinigung und -pflege',
                  'Sanitärreinigung und Hygiene',
                  'Oberflächen und Möbel',
                  'Müllentsorgung',
                  'Auffüllen von Verbrauchsmaterialien'
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
                src="https://images.unsplash.com/photo-1600880292089-90a7e086ee0c?q=80&w=3540&auto=format&fit=crop"
                alt="Unterhaltsreinigung"
                fill
                className="object-cover"
              />
            </div>
          </div>

          {/* Benefits Grid */}
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { icon: Clock, title: 'Planbare Kosten', desc: 'Transparente Festpreise ohne versteckte Kosten' },
              { icon: Users, title: 'Feste Teams', desc: 'Immer dieselben geschulten Mitarbeiter' },
              { icon: Sparkles, title: 'ISO-Qualität', desc: 'Nach ISO 9001 & 14001 Standards' }
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
