import { Metadata } from 'next'
import ServiceHero from '@/components/services/ServiceHero'
import ServiceCTA from '@/components/services/ServiceCTA'
import Image from 'next/image'
import { CheckCircle2, Sparkles, Clock, Users } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Sonderleistungen Gebäudereinigung Landshut | FIMI',
  description: 'Spezielle Reinigungsleistungen: Grundreinigung, Teppichreinigung, Polsterreinigung und mehr. Individuell und professionell. Jetzt anfragen!',
  keywords: 'Sonderreinigung, Grundreinigung, Teppichreinigung, Polsterreinigung, Spezialreinigung, Landshut',
}

export default function SonderleistungenPage() {
  return (
    <main className="min-h-screen bg-white pt-24">
      <ServiceHero
        category="Industrielle & Spezialreinigung"
        title="Sonderleistungen"
        subtitle="Spezielle Reinigungsdienstleistungen für besondere Anforderungen in Landshut und Umgebung"
        image="https://images.unsplash.com/photo-1628177142898-93e36e4e3a50?q=80&w=3540&auto=format&fit=crop"
        usps={['Grundreinigung', 'Teppichreinigung', 'Spezialverfahren']}
      />

      <section className="py-24 bg-white">
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-12 items-center mb-20">
            <div className="relative h-[500px]" style={{ borderRadius: '4px', overflow: 'hidden' }}>
              <Image
                src="https://images.unsplash.com/photo-1584622650111-993a426fbf0a?q=80&w=3540&auto=format&fit=crop"
                alt="Sonderleistungen"
                fill
                className="object-cover"
              />
            </div>
            <div>
              <h2 className="text-4xl font-bold text-fimi-navy mb-6">
                Mehr als Standard-Reinigung
              </h2>
              <p className="text-xl text-gray-600 mb-8">
                Manchmal braucht es mehr als die übliche Reinigung. Wir bieten spezielle Reinigungsleistungen für besondere Anforderungen und Situationen.
              </p>
              <div className="space-y-4">
                {[
                  'Grundreinigung (intensive Tiefenreinigung)',
                  'Teppichreinigung und Teppichpflege',
                  'Polsterreinigung (Stühle, Sofas)',
                  'Treppenhausreinigung',
                  'Jalousien- und Lamellenreinigung',
                  'Eventreining (vor/nach Veranstaltungen)'
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
              { icon: Sparkles, title: 'Grundreinigung', desc: 'Intensive Tiefenreinigung für perfekte Sauberkeit' },
              { icon: Clock, title: 'Eventreinigung', desc: 'Schnelle Reinigung vor und nach Events' },
              { icon: Users, title: 'Individuelle Lösungen', desc: 'Wir entwickeln Konzepte für Ihre Anforderungen' }
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
