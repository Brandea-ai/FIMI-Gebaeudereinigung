import { Metadata } from 'next'
import ServiceHero from '@/components/services/ServiceHero'
import ServiceCTA from '@/components/services/ServiceCTA'
import Image from 'next/image'
import { CheckCircle2, Sparkles, ShieldCheck, Sun } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Professionelle Glasreinigung Landshut | Glasfassaden | FIMI',
  description: 'Professionelle Glas- und Glasfassadenreinigung in Landshut. Streifenfrei, materialschonend. Auch für große Glasflächen. Jetzt anfragen!',
  keywords: 'Glasreinigung, Glasfassade, Schaufensterreinigung, Fensterreinigung, streifenfrei, Landshut',
}

export default function GlasreinigungPage() {
  return (
    <main className="min-h-screen bg-white pt-24">
      <ServiceHero
        category="Gewerbliche Objektreinigung"
        title="Glasreinigung"
        subtitle="Professionelle Reinigung von Glasflächen, Glasfassaden und Schaufenstern in Landshut und Umgebung"
        image="https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=3540&auto=format&fit=crop"
        usps={['Streifenfreie Reinigung', 'Auch große Glasflächen', 'Spezialausrüstung']}
      />

      <section className="py-24 bg-white">
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-12 items-center mb-20">
            <div>
              <h2 className="text-4xl font-bold text-fimi-navy mb-6">
                Kristallklare Glasflächen
              </h2>
              <p className="text-xl text-gray-600 mb-8">
                Saubere Glasflächen sorgen für Lichtdurchflutung und einen professionellen Eindruck. Wir reinigen alle Arten von Glasflächen streifenfrei und materialschonend.
              </p>
              <div className="space-y-4">
                {[
                  'Glasfassaden und Außenverglasung',
                  'Schaufenster und Ladenfronten',
                  'Innenverglasung und Trennwände',
                  'Wintergärten und Glasdächer',
                  'Rahmenreinigung inklusive',
                  'Spezialreiniger für streifenfreie Ergebnisse'
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
                src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=3540&auto=format&fit=crop"
                alt="Glasreinigung"
                fill
                className="object-cover"
              />
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              { icon: Sparkles, title: 'Streifenfrei', desc: 'Perfektes Ergebnis ohne Schlieren und Streifen' },
              { icon: ShieldCheck, title: 'Materialschonend', desc: 'Spezialreiniger für jede Glasart' },
              { icon: Sun, title: 'Mehr Licht', desc: 'Sauberes Glas lässt mehr Tageslicht durch' }
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
