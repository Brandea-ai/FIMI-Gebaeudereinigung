import { Metadata } from 'next'
import ServiceHero from '@/components/services/ServiceHero'
import ServiceCTA from '@/components/services/ServiceCTA'
import Image from 'next/image'
import { CheckCircle2, AlertCircle, Zap, Award } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Sonderreinigung Landshut | Spezialreinigung nach Maß | FIMI',
  description: 'Sonderreinigung für außergewöhnliche Anforderungen: nach Brand, Wasserschaden, Vandalismus. Schnell und professionell. Jetzt anfragen!',
  keywords: 'Sonderreinigung, Spezialreinigung, Schadensanierung, Brandreinigung, Tatortreinigung, Landshut',
}

export default function SonderreinigungPage() {
  return (
    <main className="min-h-screen bg-white pt-24">
      <ServiceHero
        category="Industrielle & Spezialreinigung"
        title="Sonderreinigung"
        subtitle="Professionelle Sonderreinigung für außergewöhnliche Situationen und spezielle Anforderungen in Landshut"
        image="https://images.unsplash.com/photo-1581578731548-c64695cc6952?q=80&w=3540&auto=format&fit=crop"
        usps={['24/7 Notdienst', 'Diskrete Abwicklung', 'Spezialausrüstung']}
      />

      <section className="py-24 bg-white">
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-12 items-center mb-20">
            <div className="relative h-[500px]" style={{ borderRadius: '4px', overflow: 'hidden' }}>
              <Image
                src="https://images.unsplash.com/photo-1628177142898-93e36e4e3a50?q=80&w=3540&auto=format&fit=crop"
                alt="Sonderreinigung"
                fill
                className="object-cover"
              />
            </div>
            <div>
              <h2 className="text-4xl font-bold text-fimi-navy mb-6">
                Professionelle Reinigung in besonderen Situationen
              </h2>
              <p className="text-xl text-gray-600 mb-8">
                Bei Schadensfällen, Notfällen oder besonderen Verschmutzungen braucht es Spezialisten. Wir sind rund um die Uhr für Sie da - diskret und professionell.
              </p>
              <div className="space-y-4">
                {[
                  'Reinigung nach Wasserschäden',
                  'Brandschadensanierung (Rußentfernung)',
                  'Reinigung nach Vandalismus / Einbruch',
                  'Geruchsbeseitigung',
                  'Desinfektionsreinigung',
                  'Tatortreinigung (diskret und professionell)'
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
              { icon: AlertCircle, title: '24/7 Notdienst', desc: 'Sofortige Hilfe in Notfällen - Tag und Nacht' },
              { icon: Zap, title: 'Schnelle Reaktion', desc: 'Schneller Einsatz bei zeitkritischen Situationen' },
              { icon: Award, title: 'Diskret & Professionell', desc: 'Vertrauliche und professionelle Abwicklung' }
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
