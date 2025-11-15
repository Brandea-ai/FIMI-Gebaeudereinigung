import { Metadata } from 'next'
import ServiceHero from '@/components/services/ServiceHero'
import ServiceCTA from '@/components/services/ServiceCTA'
import Image from 'next/image'
import { CheckCircle2, TrendingDown, Clock, Award } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Beschaffungsmanagement Reinigung Landshut | FIMI',
  description: 'Professionelles Beschaffungsmanagement für Reinigungsmittel und Verbrauchsmaterialien. Kosteneinsparung und Zeitersparnis garantiert!',
  keywords: 'Beschaffungsmanagement, Reinigungsmittel, Verbrauchsmaterial, Einkauf, Kostenkontrolle, Landshut',
}

export default function BeschaffungsmanagementPage() {
  return (
    <main className="min-h-screen bg-white pt-24">
      <ServiceHero
        category="Facility Management & Services"
        title="Beschaffungsmanagement"
        subtitle="Professionelle Beschaffung von Reinigungsmitteln und Verbrauchsmaterialien mit Kostenkontrolle in Landshut"
        image="https://images.unsplash.com/photo-1553413077-190dd305871c?q=80&w=3540&auto=format&fit=crop"
        usps={['Kosteneinsparung', 'Zeitersparnis', 'Qualitätsgarantie']}
      />

      <section className="py-24 bg-white">
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-12 items-center mb-20">
            <div>
              <h2 className="text-4xl font-bold text-fimi-navy mb-6">
                Professionelle Beschaffung spart Zeit und Geld
              </h2>
              <p className="text-xl text-gray-600 mb-8">
                Die Beschaffung von Reinigungsmitteln, Verbrauchsmaterialien und Betriebsstoffen kostet Zeit und Geld. Wir übernehmen das komplette Beschaffungsmanagement für Sie.
              </p>
              <div className="space-y-4">
                {[
                  'Beschaffung aller Reinigungsmittel',
                  'Lagerverwaltung und Bestandskontrolle',
                  'Kostenoptimierung durch Großeinkauf',
                  'Qualitätssicherung der Produkte',
                  'Nachhaltige und umweltfreundliche Produkte',
                  'Koordination mit Lieferanten'
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
                src="https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?q=80&w=3540&auto=format&fit=crop"
                alt="Beschaffungsmanagement"
                fill
                className="object-cover"
              />
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              { icon: TrendingDown, title: 'Kosteneinsparung', desc: 'Günstigere Preise durch professionellen Einkauf' },
              { icon: Clock, title: 'Zeitersparnis', desc: 'Wir kümmern uns um alles - Sie sparen Zeit' },
              { icon: Award, title: 'Qualität garantiert', desc: 'Nur hochwertige und geprüfte Produkte' }
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
