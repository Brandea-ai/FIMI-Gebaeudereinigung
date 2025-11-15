import { Metadata } from 'next'
import ServiceHero from '@/components/services/ServiceHero'
import ServiceCTA from '@/components/services/ServiceCTA'
import Image from 'next/image'
import { CheckCircle2, Building, Wrench, ClipboardCheck } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Facility Management Landshut | Gebäudebetreuung | FIMI',
  description: 'Umfassendes Facility Management für Gewerbeimmobilien. Reinigung, Wartung und Betreuung aus einer Hand. ISO-zertifiziert. Jetzt anfragen!',
  keywords: 'Facility Management, Gebäudemanagement, Objektbetreuung, FM Service, Landshut',
}

export default function FacilityManagementPage() {
  return (
    <main className="min-h-screen bg-white pt-24">
      <ServiceHero
        category="Facility Management & Services"
        title="Facility Management"
        subtitle="Umfassende Gebäudebetreuung aus einer Hand - von Reinigung bis Wartung in Landshut und Umgebung"
        image="https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?q=80&w=3540&auto=format&fit=crop"
        usps={['Alles aus einer Hand', 'Kostenkontrolle', 'Persönlicher Ansprechpartner']}
      />

      <section className="py-24 bg-white">
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-12 items-center mb-20">
            <div>
              <h2 className="text-4xl font-bold text-fimi-navy mb-6">
                Ihr Partner für Gebäudebetreuung
              </h2>
              <p className="text-xl text-gray-600 mb-8">
                Facility Management bedeutet mehr als nur Reinigung. Wir übernehmen die komplette Betreuung Ihrer Immobilie - damit Sie sich auf Ihr Kerngeschäft konzentrieren können.
              </p>
              <div className="space-y-4">
                {[
                  'Reinigungsmanagement (alle Reinigungsleistungen)',
                  'Hausmeisterdienste und Objektbetreuung',
                  'Winterdienst und Schneeräumung',
                  'Wartung und Instandhaltung',
                  'Grünflächenpflege',
                  'Koordination von Fremdgewerken'
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
                alt="Facility Management"
                fill
                className="object-cover"
              />
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              { icon: Building, title: 'Komplettbetreuung', desc: 'Alle Dienstleistungen aus einer Hand' },
              { icon: Wrench, title: 'Wartung inklusive', desc: 'Technische Betreuung und Instandhaltung' },
              { icon: ClipboardCheck, title: 'Dokumentation', desc: 'Transparente Leistungsnachweise und Berichte' }
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
