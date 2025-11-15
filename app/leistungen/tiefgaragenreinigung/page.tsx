import { Metadata } from 'next'
import ServiceHero from '@/components/services/ServiceHero'
import ServiceCTA from '@/components/services/ServiceCTA'
import Image from 'next/image'
import { CheckCircle2, ParkingSquare, Droplets, Wind } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Professionelle Tiefgaragenreinigung Landshut | FIMI',
  description: 'Tiefgaragen- und Parkhaus-Reinigung für Gewerbe und Wohnimmobilien. Gründlich und schnell. Jetzt Angebot anfordern!',
  keywords: 'Tiefgaragenreinigung, Parkhaus Reinigung, Garage reinigen, Tiefgarage, Landshut',
}

export default function TiefgaragenreinigungPage() {
  return (
    <main className="min-h-screen bg-white pt-24">
      <ServiceHero
        category="Industrielle & Spezialreinigung"
        title="Tiefgaragenreinigung"
        subtitle="Gründliche Reinigung von Tiefgaragen, Parkhäusern und Parkdecks in Landshut und Umgebung"
        image="https://images.unsplash.com/photo-1590674899484-d5640e854abe?q=80&w=3540&auto=format&fit=crop"
        usps={['Kehrmaschinen-Einsatz', 'Hochdruckreinigung', 'Schnelle Trocknung']}
      />

      <section className="py-24 bg-white">
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-12 items-center mb-20">
            <div className="relative h-[500px]" style={{ borderRadius: '4px', overflow: 'hidden' }}>
              <Image
                src="https://images.unsplash.com/photo-1574928854809-c9925e8d0dbc?q=80&w=3540&auto=format&fit=crop"
                alt="Tiefgaragenreinigung"
                fill
                className="object-cover"
              />
            </div>
            <div>
              <h2 className="text-4xl font-bold text-fimi-navy mb-6">
                Saubere Tiefgaragen erhöhen die Sicherheit
              </h2>
              <p className="text-xl text-gray-600 mb-8">
                Verschmutzte Tiefgaragen sind unattraktiv und können gefährlich sein. Wir reinigen Böden, Wände, Decken und sorgen für Sauberkeit und Sicherheit.
              </p>
              <div className="space-y-4">
                {[
                  'Bodenreinigung mit Kehrmaschinen',
                  'Hochdruckreinigung von Ölflecken',
                  'Wand- und Deckenreinigung',
                  'Entfernung von Reifenabrieb',
                  'Reinigung von Gullys und Abläufen',
                  'Endreinigung nach Sanierung'
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
              { icon: ParkingSquare, title: 'Alle Garagen', desc: 'Tiefgaragen, Parkhäuser, Parkdecks' },
              { icon: Droplets, title: 'Ölfleck-Entfernung', desc: 'Spezielle Reiniger für hartnäckige Verschmutzungen' },
              { icon: Wind, title: 'Schnelle Trocknung', desc: 'Absauggeräte für kurze Sperrung' }
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
