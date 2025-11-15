import { Metadata } from 'next'
import ServiceHero from '@/components/services/ServiceHero'
import ServiceCTA from '@/components/services/ServiceCTA'
import Image from 'next/image'
import { CheckCircle2, Cog, Droplets, Award } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Professionelle Maschinenreinigung Landshut | FIMI',
  description: 'Fachgerechte Maschinenreinigung und Anlagenreinigung für Industrie und Produktion. Schonend und gründlich. Jetzt anfragen!',
  keywords: 'Maschinenreinigung, Anlagenreinigung, Produktionsmaschinen, CNC-Reinigung, Landshut',
}

export default function MaschinenreinigungPage() {
  return (
    <main className="min-h-screen bg-white pt-24">
      <ServiceHero
        category="Industrielle & Spezialreinigung"
        title="Maschinenreinigung"
        subtitle="Fachgerechte Reinigung von Produktionsmaschinen und technischen Anlagen in Landshut und Umgebung"
        image="https://images.unsplash.com/photo-1537462715879-360eeb61a0ad?q=80&w=3540&auto=format&fit=crop"
        usps={['Materialschonend', 'Fachkundiges Personal', 'Keine Betriebsunterbrechung']}
      />

      <section className="py-24 bg-white">
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-12 items-center mb-20">
            <div className="relative h-[500px]" style={{ borderRadius: '4px', overflow: 'hidden' }}>
              <Image
                src="https://images.unsplash.com/photo-1581092160607-ee67f9a1535c?q=80&w=3540&auto=format&fit=crop"
                alt="Maschinenreinigung"
                fill
                className="object-cover"
              />
            </div>
            <div>
              <h2 className="text-4xl font-bold text-fimi-navy mb-6">
                Saubere Maschinen = Höhere Produktivität
              </h2>
              <p className="text-xl text-gray-600 mb-8">
                Verschmutzte Maschinen führen zu höherem Verschleiß und Ausfällen. Wir reinigen Ihre Produktionsmaschinen fachgerecht und materialschonend.
              </p>
              <div className="space-y-4">
                {[
                  'CNC-Maschinen und Bearbeitungszentren',
                  'Dreh- und Fräsmaschinen',
                  'Stanz- und Umformmaschinen',
                  'Entfernung von Spänen, Öl und Kühlmittel',
                  'Schonende Spezialreiniger',
                  'Wartungsfreundliche Aufbereitung'
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
              { icon: Cog, title: 'Maschinenkenntnisse', desc: 'Erfahrung mit allen gängigen Maschinentypen' },
              { icon: Droplets, title: 'Spezialreiniger', desc: 'Materialschonende Reinigungsmittel' },
              { icon: Award, title: 'Zertifiziert', desc: 'ISO 9001 & 14001 Standards' }
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
