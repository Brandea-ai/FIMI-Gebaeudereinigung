'use client'

import Image from 'next/image'
import Link from 'next/link'
import { ArrowRight, Building2, Factory, Wrench } from 'lucide-react'

const serviceKategorien = [
  {
    id: 'gewerblich',
    icon: Building2,
    titel: 'Gewerbliche Reinigung',
    beschreibung: 'Für Büros, Praxen und Geschäftsräume die immer einladend aussehen sollen.',
    image: 'https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=1200&auto=format&fit=crop',
    leistungen: [
      { name: 'Büroreinigung', href: '/leistungen/bueroreinigung' },
      { name: 'Unterhaltsreinigung', href: '/leistungen/unterhaltsreinigung' },
      { name: 'Fensterreinigung', href: '/leistungen/fensterreinigung' },
      { name: 'Glasreinigung', href: '/leistungen/glasreinigung' },
    ],
  },
  {
    id: 'industrie',
    icon: Factory,
    titel: 'Industriereinigung',
    beschreibung: 'Für Produktionshallen und Anlagen die auch unter schwierigen Bedingungen sauber sein müssen.',
    image: 'https://images.unsplash.com/photo-1565688534245-05d6b5be184a?q=80&w=1200&auto=format&fit=crop',
    leistungen: [
      { name: 'Industriereinigung', href: '/leistungen/industriereinigung' },
      { name: 'Hallenreinigung', href: '/leistungen/hallenreinigung' },
      { name: 'Maschinenreinigung', href: '/leistungen/maschinenreinigung' },
      { name: 'Baureinigung', href: '/leistungen/baureinigung' },
    ],
  },
  {
    id: 'facility',
    icon: Wrench,
    titel: 'Facility Management',
    beschreibung: 'Für alle die einen Partner suchen der sich um alles kümmert.',
    image: 'https://images.unsplash.com/photo-1581578731548-c64695cc6952?q=80&w=1200&auto=format&fit=crop',
    leistungen: [
      { name: 'Facility Management', href: '/leistungen/facility-management' },
      { name: 'Hausmeisterservice', href: '/leistungen/hausmeisterservice' },
      { name: 'Winterdienst', href: '/leistungen/winterdienst' },
      { name: 'Außenanlagenpflege', href: '/leistungen/aussenanlagenpflege' },
    ],
  },
]

export default function ServicesContainer() {
  return (
    <section id="leistungen" className="py-20 lg:py-28 bg-[#f8f9fa]" aria-labelledby="services-heading">
      <div className="w-full max-w-[1800px] mx-auto px-6 lg:px-12 xl:px-20">

        <div className="grid lg:grid-cols-[400px_1fr] xl:grid-cols-[450px_1fr] gap-12 lg:gap-20">

          {/* Sticky Sidebar - SEO Text */}
          <aside className="lg:sticky lg:top-32 lg:self-start">
            <h2
              id="services-heading"
              className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#109387] leading-[1.1] mb-8"
            >
              Reinigung die funktioniert
            </h2>

            <div className="space-y-5 mb-10">
              <p className="text-lg text-gray-700 font-semibold leading-relaxed">
                Das Büro sieht nicht mehr einladend aus. Die Reinigungsfirma
                kommt unregelmäßig. Beschwerden von Mitarbeitern häufen sich.
              </p>
              <p className="text-lg text-gray-700 font-semibold leading-relaxed">
                Kommt Ihnen das bekannt vor? Dann sind Sie hier richtig.
              </p>
              <p className="text-lg text-gray-700 font-semibold leading-relaxed">
                Egal ob Sie eine{' '}
                <Link href="/leistungen/bueroreinigung" className="text-[#109387] underline underline-offset-2">
                  Büroreinigung
                </Link>
                {' '}brauchen, Ihre{' '}
                <Link href="/leistungen/industriereinigung" className="text-[#109387] underline underline-offset-2">
                  Produktionshalle
                </Link>
                {' '}gereinigt werden muss oder Sie einen Partner für das komplette{' '}
                <Link href="/leistungen/facility-management" className="text-[#109387] underline underline-offset-2">
                  Gebäudemanagement
                </Link>
                {' '}suchen.
              </p>
            </div>

            <Link
              href="/leistungen"
              className="inline-flex items-center gap-3 text-[#109387] font-bold text-lg hover:gap-4 transition-all"
            >
              Alle Leistungen ansehen
              <ArrowRight size={20} />
            </Link>

            {/* Stats - Größer und prominenter */}
            <div className="mt-12 p-8 bg-[#012956] rounded-[6px]">
              <div className="grid grid-cols-2 gap-8">
                <div>
                  <div className="text-4xl font-bold text-[#109387]">18+</div>
                  <div className="text-white font-semibold mt-1">Leistungen</div>
                </div>
                <div>
                  <div className="text-4xl font-bold text-[#109387]">8</div>
                  <div className="text-white font-semibold mt-1">Standorte</div>
                </div>
              </div>
            </div>
          </aside>

          {/* Service Cards */}
          <div className="space-y-8">
            {serviceKategorien.map((kategorie, index) => {
              const Icon = kategorie.icon
              return (
                <article
                  key={kategorie.id}
                  className="group bg-white rounded-[6px] overflow-hidden border border-gray-200 hover:border-[#109387] transition-colors duration-300"
                >
                  <div className={`grid md:grid-cols-2 ${index % 2 === 1 ? 'md:grid-flow-dense' : ''}`}>

                    {/* Image */}
                    <div className={`relative h-72 md:h-auto md:min-h-[360px] ${index % 2 === 1 ? 'md:col-start-2' : ''}`}>
                      <Image
                        src={kategorie.image}
                        alt={kategorie.titel}
                        fill
                        className="object-cover group-hover:scale-105 transition-transform duration-700"
                      />
                    </div>

                    {/* Content */}
                    <div className={`p-8 lg:p-10 flex flex-col justify-center ${index % 2 === 1 ? 'md:col-start-1 md:row-start-1' : ''}`}>

                      {/* Icon + Titel - Beide grün */}
                      <div className="flex items-center gap-4 mb-4">
                        <Icon size={32} className="text-[#109387]" strokeWidth={1.5} />
                        <h3 className="text-2xl lg:text-3xl font-bold text-[#109387]">
                          {kategorie.titel}
                        </h3>
                      </div>

                      <p className="text-lg text-gray-700 font-semibold mb-8 leading-relaxed">
                        {kategorie.beschreibung}
                      </p>

                      {/* Leistungen Links - Einheitlich */}
                      <div className="flex flex-wrap gap-3 mb-8">
                        {kategorie.leistungen.map((leistung) => (
                          <Link
                            key={leistung.href}
                            href={leistung.href}
                            className="px-4 py-2 bg-[#f8f9fa] text-gray-700 font-semibold rounded-[4px] hover:bg-[#109387] hover:text-white transition-colors"
                          >
                            {leistung.name}
                          </Link>
                        ))}
                      </div>

                      <Link
                        href="/leistungen"
                        className="inline-flex items-center gap-3 text-[#109387] font-bold text-lg hover:gap-4 transition-all"
                      >
                        Mehr erfahren
                        <ArrowRight size={20} />
                      </Link>
                    </div>
                  </div>
                </article>
              )
            })}
          </div>

        </div>

      </div>
    </section>
  )
}
