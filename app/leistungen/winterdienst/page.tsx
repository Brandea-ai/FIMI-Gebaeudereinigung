import { Metadata } from 'next'
import ServiceHero from '@/components/services/ServiceHero'
import ServiceCTA from '@/components/services/ServiceCTA'
import Image from 'next/image'
import { CheckCircle2, Snowflake, Truck, ShieldCheck } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Winterdienst Landshut | Schneeräumung & Streudienst | FIMI',
  description: 'Professioneller Winterdienst in Landshut: Schneeräumung, Streudienst, Eisbeseitigung. 24/7 Notdienst. Verkehrssicherheit garantiert!',
  keywords: 'Winterdienst, Schneeräumung, Streudienst, Räumdienst, Eisbeseitigung, Landshut',
}

export default function WinterdienstPage() {
  return (
    <main className="min-h-screen bg-white pt-24">
      <ServiceHero
        category="Facility Management & Services"
        title="Winterdienst"
        subtitle="Professioneller Winterdienst und Schneeräumung für sichere Wege und Parkplätze in Landshut"
        image="https://images.unsplash.com/photo-1547754980-3df97fed72a8?q=80&w=3540&auto=format&fit=crop"
        usps={['24/7 Bereitschaft', 'Professionelle Ausrüstung', 'Verkehrssicherheit']}
      />

      <section className="py-24 bg-white">
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-12 items-center mb-20">
            <div className="relative h-[500px]" style={{ borderRadius: '4px', overflow: 'hidden' }}>
              <Image
                src="https://images.unsplash.com/photo-1612119572323-962bed4f8a8f?q=80&w=3540&auto=format&fit=crop"
                alt="Winterdienst"
                fill
                className="object-cover"
              />
            </div>
            <div>
              <h2 className="text-4xl font-bold text-fimi-navy mb-6">
                Sicher durch den Winter
              </h2>
              <p className="text-xl text-gray-600 mb-8">
                Schnee und Eis bedeuten Unfallgefahr und Haftungsrisiko. Unser Winterdienst sorgt für sichere Wege, Zufahrten und Parkplätze - rund um die Uhr.
              </p>
              <div className="space-y-4">
                {[
                  'Schneeräumung von Wegen und Parkplätzen',
                  'Streudienst (Salz und Splitt)',
                  'Eisbeseitigung',
                  'Räumung von Dächern (Schneelasten)',
                  'Notdienst 24/7 bei Schneefall',
                  'Dokumentation für Verkehrssicherungspflicht'
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
              { icon: Snowflake, title: '24/7 Winterdienst', desc: 'Rund um die Uhr einsatzbereit bei Schneefall' },
              { icon: Truck, title: 'Profi-Ausrüstung', desc: 'Moderne Räum- und Streufahrzeuge' },
              { icon: ShieldCheck, title: 'Verkehrssicherheit', desc: 'Erfüllung der Verkehrssicherungspflicht' }
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
