import { Metadata } from 'next'
import ServiceHero from '@/components/services/ServiceHero'
import ServiceCTA from '@/components/services/ServiceCTA'
import Image from 'next/image'
import { CheckCircle2, Eye, Droplet, Shield } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Professionelle Fensterreinigung Landshut | Glasreinigung | FIMI',
  description: 'Streifenfreie Fensterreinigung für Büros und Gewerbe. Innen und außen. Mit Teleskopstangen und Hebebühnen. Jetzt Termin vereinbaren!',
  keywords: 'Fensterreinigung, Glasreinigung, Scheibenreinigung, Fassadenreinigung, streifenfrei, Landshut',
}

export default function FensterreinigungPage() {
  return (
    <main className="min-h-screen bg-white pt-24">
      <ServiceHero
        category="Gewerbliche Objektreinigung"
        title="Fensterreinigung"
        subtitle="Streifenfreie Glas- und Fensterreinigung für klare Durchsicht in Landshut und Umgebung"
        image="https://images.unsplash.com/photo-1607400201515-c2c41c07d307?q=80&w=3540&auto=format&fit=crop"
        usps={['Streifenfrei', 'Innen & Außen', 'Bis 15m Höhe']}
      />

      <section className="py-24 bg-white">
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-12 items-center mb-20">
            <div>
              <h2 className="text-4xl font-bold text-fimi-navy mb-6">
                Klare Sicht für Ihr Unternehmen
              </h2>
              <p className="text-xl text-gray-600 mb-8">
                Saubere Fenster sorgen für helle Räume, einen professionellen Eindruck und steigern das Wohlbefinden. Wir reinigen streifenfrei und sicher.
              </p>
              <div className="space-y-4">
                {[
                  'Fenster innen und außen',
                  'Glasfassaden und Wintergärten',
                  'Rahmen und Fensterbänke',
                  'Glastrennwände im Büro',
                  'Schaufenster und Vitrinen',
                  'Bis 15 Meter Höhe (Teleskop/Hebebühne)'
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
                src="https://images.unsplash.com/photo-1556912172-45b7abe8b7e1?q=80&w=3540&auto=format&fit=crop"
                alt="Fensterreinigung"
                fill
                className="object-cover"
              />
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              { icon: Eye, title: 'Streifenfrei', desc: 'Professionelle Reinigung ohne Streifen und Schlieren' },
              { icon: Droplet, title: 'Spezialreiniger', desc: 'Hochwertige, umweltfreundliche Glasreiniger' },
              { icon: Shield, title: 'Sicher', desc: 'Arbeitssicherheit nach DGUV mit zertifiziertem Personal' }
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
