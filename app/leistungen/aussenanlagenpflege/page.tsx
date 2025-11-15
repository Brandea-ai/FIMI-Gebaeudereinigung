import { Metadata } from 'next'
import ServiceHero from '@/components/services/ServiceHero'
import ServiceCTA from '@/components/services/ServiceCTA'
import Image from 'next/image'
import { CheckCircle2, Trees, Leaf, Sun } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Professionelle Außenanlagenpflege Landshut | FIMI',
  description: 'Pflege und Reinigung von Außenanlagen, Grünflächen und Firmengeländen. Ganzjährig gepflegt. Jetzt anfragen!',
  keywords: 'Außenanlagenpflege, Grünpflege, Geländereinigung, Firmenaußenanlage, Landshut',
}

export default function AussenanlagenpflegePage() {
  return (
    <main className="min-h-screen bg-white pt-24">
      <ServiceHero
        category="Industrielle & Spezialreinigung"
        title="Außenanlagenpflege"
        subtitle="Professionelle Pflege und Reinigung von Außenanlagen, Grünflächen und Firmengeländen in Landshut"
        image="https://images.unsplash.com/photo-1558618666-fcd25c85cd64?q=80&w=3540&auto=format&fit=crop"
        usps={['Ganzjährige Pflege', 'Grünflächenpflege', 'Winterdienst optional']}
      />

      <section className="py-24 bg-white">
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-12 items-center mb-20">
            <div>
              <h2 className="text-4xl font-bold text-fimi-navy mb-6">
                Gepflegte Außenanlagen das ganze Jahr
              </h2>
              <p className="text-xl text-gray-600 mb-8">
                Ihre Außenanlagen sind das Aushängeschild Ihres Unternehmens. Wir sorgen ganzjährig für Sauberkeit, Ordnung und ein gepflegtes Erscheinungsbild.
              </p>
              <div className="space-y-4">
                {[
                  'Gehwege und Zufahrten reinigen',
                  'Grünflächen mähen und pflegen',
                  'Laub- und Unkrautentfernung',
                  'Hecken- und Strauchschnitt',
                  'Müllentsorgung und Papierkörbe',
                  'Winterdienst (Schneeräumung, Streuen)'
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
                src="https://images.unsplash.com/photo-1586773860418-d37222d8fce3?q=80&w=3540&auto=format&fit=crop"
                alt="Außenanlagenpflege"
                fill
                className="object-cover"
              />
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              { icon: Trees, title: 'Ganzjahresservice', desc: 'Von Frühjahr bis Winter - wir sind für Sie da' },
              { icon: Leaf, title: 'Grünpflege', desc: 'Professionelle Pflege von Rasenflächen und Pflanzen' },
              { icon: Sun, title: 'Saisonal', desc: 'Angepasste Pflege je nach Jahreszeit' }
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
