import { Metadata } from 'next'
import ServiceHero from '@/components/services/ServiceHero'
import ServiceCTA from '@/components/services/ServiceCTA'
import Image from 'next/image'
import { CheckCircle2, Clock, Wrench, Zap } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Hausmeisterservice Landshut | Objektbetreuung | FIMI',
  description: 'Zuverlässiger Hausmeisterservice für Gewerbeimmobilien. Wartung, Reparaturen, Notdienst 24/7. Alles aus einer Hand. Jetzt anfragen!',
  keywords: 'Hausmeisterservice, Hausmeister, Objektbetreuung, Notdienst, Wartung, Reparatur, Landshut',
}

export default function HausmeisterservicePage() {
  return (
    <main className="min-h-screen bg-white pt-24">
      <ServiceHero
        category="Facility Management & Services"
        title="Hausmeisterservice"
        subtitle="Zuverlässige Objektbetreuung und Hausmeisterdienste für Ihre Immobilie in Landshut und Umgebung"
        image="https://images.unsplash.com/photo-1621905251918-48416bd8575a?q=80&w=3540&auto=format&fit=crop"
        usps={['24/7 Notdienst', 'Schnelle Reaktion', 'Alles aus einer Hand']}
      />

      <section className="py-24 bg-white">
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-12 items-center mb-20">
            <div>
              <h2 className="text-4xl font-bold text-fimi-navy mb-6">
                Ihr Hausmeister für alle Fälle
              </h2>
              <p className="text-xl text-gray-600 mb-8">
                Ein gut betreutes Objekt spart Kosten und erhält den Wert. Unser Hausmeisterservice übernimmt alle anfallenden Arbeiten - von Kleinreparaturen bis zum Notdienst.
              </p>
              <div className="space-y-4">
                {[
                  'Kleinreparaturen und Instandhaltung',
                  'Regelmäßige Objektbegehungen',
                  'Notdienst 24/7 (Wasserschaden, Heizung, etc.)',
                  'Schlüsseldienst und Zugangsverwaltung',
                  'Koordination von Handwerkern',
                  'Garten- und Außenpflege'
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
                src="https://images.unsplash.com/photo-1581578731548-c64695cc6952?q=80&w=3540&auto=format&fit=crop"
                alt="Hausmeisterservice"
                fill
                className="object-cover"
              />
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              { icon: Clock, title: '24/7 Erreichbar', desc: 'Notdienst rund um die Uhr für Notfälle' },
              { icon: Wrench, title: 'Alles aus einer Hand', desc: 'Von Kleinreparaturen bis Koordination' },
              { icon: Zap, title: 'Schnelle Reaktion', desc: 'Kurze Reaktionszeiten bei Problemen' }
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
