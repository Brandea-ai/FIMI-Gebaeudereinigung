import { Metadata } from 'next'
import ServiceHero from '@/components/services/ServiceHero'
import ServiceCTA from '@/components/services/ServiceCTA'
import Image from 'next/image'
import { CheckCircle2, ParkingCircle, Leaf, Calendar } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Parkplatzreinigung Landshut | Parkhaus & Tiefgarage | FIMI',
  description: 'Professionelle Parkplatzreinigung für Firmenparkplätze, Parkhäuser und Außenanlagen. Ganzjährig sauber. Jetzt anfragen!',
  keywords: 'Parkplatzreinigung, Parkhaus, Außenanlage, Tiefgarage, Firmenparkplatz, Landshut',
}

export default function ParkplatzreinigungPage() {
  return (
    <main className="min-h-screen bg-white pt-24">
      <ServiceHero
        category="Gewerbliche Objektreinigung"
        title="Parkplatzreinigung"
        subtitle="Saubere Parkflächen, Parkhäuser und Außenanlagen das ganze Jahr über in Landshut"
        image="https://images.unsplash.com/photo-1590674899484-d5640e854abe?q=80&w=3540&auto=format&fit=crop"
        usps={['Ganzjährige Pflege', 'Kehrmaschinen-Einsatz', 'Ökologisch']}
      />

      <section className="py-24 bg-white">
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-12 items-center mb-20">
            <div className="relative h-[500px]" style={{ borderRadius: '4px', overflow: 'hidden' }}>
              <Image
                src="https://images.unsplash.com/photo-1506521781263-d8422e82f27a?q=80&w=3540&auto=format&fit=crop"
                alt="Parkplatzreinigung"
                fill
                className="object-cover"
              />
            </div>
            <div>
              <h2 className="text-4xl font-bold text-fimi-navy mb-6">
                Der erste Eindruck zählt - auch draußen
              </h2>
              <p className="text-xl text-gray-600 mb-8">
                Saubere Parkplätze und gepflegte Außenanlagen sind die Visitenkarte Ihres Unternehmens. Wir sorgen für einen einladenden ersten Eindruck.
              </p>
              <div className="space-y-4">
                {[
                  'Kehren mit professionellen Maschinen',
                  'Entfernung von Laub und Unrat',
                  'Müllentsorgung und Papierkörbe',
                  'Grünflächenpflege',
                  'Winterdienst (optional)',
                  'Hochdruckreinigung bei Bedarf'
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
              { icon: ParkingCircle, title: 'Alle Parkflächen', desc: 'Außenparkplätze, Parkhäuser, Tiefgaragen' },
              { icon: Leaf, title: 'Umweltfreundlich', desc: 'Ökologische Reinigungsmittel und Verfahren' },
              { icon: Calendar, title: 'Regelmäßig', desc: 'Täglich, wöchentlich oder nach Bedarf' }
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
