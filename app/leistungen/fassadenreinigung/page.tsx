import { Metadata } from 'next'
import ServiceHero from '@/components/services/ServiceHero'
import ServiceCTA from '@/components/services/ServiceCTA'
import Image from 'next/image'
import { CheckCircle2, Building2, Zap, ShieldCheck } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Professionelle Fassadenreinigung Landshut | FIMI',
  description: 'Fassadenreinigung für Gewerbeimmobilien, Bürogebäude und Industriehallen. Mit Hebebühnen bis 30m Höhe. Jetzt Angebot einholen!',
  keywords: 'Fassadenreinigung, Gebäudereinigung außen, Fassadenpflege, Hochdruckreinigung, Landshut',
}

export default function FassadenreinigungPage() {
  return (
    <main className="min-h-screen bg-white pt-24">
      <ServiceHero
        category="Industrielle & Spezialreinigung"
        title="Fassadenreinigung"
        subtitle="Professionelle Reinigung von Fassaden, Außenwänden und Gebäudehüllen bis 30 Meter Höhe in Landshut"
        image="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=3540&auto=format&fit=crop"
        usps={['Bis 30m Höhe', 'Hebebühnen-Einsatz', 'Materialschonend']}
      />

      <section className="py-24 bg-white">
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-12 items-center mb-20">
            <div>
              <h2 className="text-4xl font-bold text-fimi-navy mb-6">
                Der erste Eindruck zählt - von außen
              </h2>
              <p className="text-xl text-gray-600 mb-8">
                Eine saubere Fassade ist die Visitenkarte Ihres Unternehmens. Wir entfernen Verschmutzungen, Algen, Grünbelag und Umweltverschmutzung materialschonend.
              </p>
              <div className="space-y-4">
                {[
                  'Alle Fassadentypen (Putz, Klinker, Glas, Metall)',
                  'Hochdruckreinigung mit angepasstem Druck',
                  'Entfernung von Algen und Grünbelag',
                  'Reinigung mit Hebebühnen bis 30m Höhe',
                  'Schutzimprägnierung auf Wunsch',
                  'Graffiti-Entfernung'
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
                src="https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?q=80&w=3540&auto=format&fit=crop"
                alt="Fassadenreinigung"
                fill
                className="object-cover"
              />
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              { icon: Building2, title: 'Alle Fassaden', desc: 'Erfahrung mit allen Materialien und Höhen' },
              { icon: Zap, title: 'Schnell & Effizient', desc: 'Professionelle Ausrüstung und Verfahren' },
              { icon: ShieldCheck, title: 'Sicher', desc: 'DGUV-zertifizierte Höhenarbeiter' }
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
