'use client'

import Image from 'next/image'
import Link from 'next/link'
import { ArrowRight, Building2, Factory, Wrench } from 'lucide-react'

const serviceKategorien = [
  {
    id: 'gewerblich',
    icon: Building2,
    titel: 'Gewerbliche Reinigung',
    beschreibung: 'Saubere Büros, Praxen und Geschäftsräume - damit Ihre Mitarbeiter und Kunden sich wohlfühlen.',
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
    beschreibung: 'Produktionshallen, Maschinen und Anlagen - wir reinigen auch unter schwierigen Bedingungen.',
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
    beschreibung: 'Alles aus einer Hand - von der Außenanlage bis zum Winterdienst.',
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

        <div className="grid lg:grid-cols-[380px_1fr] xl:grid-cols-[420px_1fr] gap-12 lg:gap-16">

          {/* Sticky Sidebar - SEO Text */}
          <aside className="lg:sticky lg:top-32 lg:self-start">
            <h2
              id="services-heading"
              className="text-3xl md:text-4xl font-bold text-[#012956] leading-[1.15] mb-6"
            >
              Professionelle Gebäudereinigung{' '}
              <span className="text-[#109387]">für jeden Bedarf</span>
            </h2>

            <div className="text-gray-600 space-y-4 mb-8">
              <p>
                Sie suchen eine <strong>zuverlässige Reinigungsfirma in Bayern</strong>?
                FIMI bietet Ihnen das komplette Spektrum der Gebäudereinigung - von der
                täglichen Büroreinigung bis zur spezialisierten Industriereinigung.
              </p>
              <p>
                Ob <Link href="/leistungen/bueroreinigung" className="text-[#109387] hover:underline">Büroreinigung in Landshut</Link>,
                {' '}<Link href="/leistungen/industriereinigung" className="text-[#109387] hover:underline">Industriereinigung in München</Link> oder
                {' '}<Link href="/leistungen/facility-management" className="text-[#109387] hover:underline">Facility Management in Regensburg</Link> -
                wir sind Ihr Partner für saubere Gebäude in ganz Bayern.
              </p>
              <p>
                Unsere <strong>geschulten Teams</strong> arbeiten nach ISO 9001 und 14001 Standards.
                Das bedeutet für Sie: gleichbleibend hohe Qualität, nachhaltige Reinigungsmittel
                und ein fester Ansprechpartner für alle Ihre Anliegen.
              </p>
            </div>

            <Link
              href="/leistungen"
              className="inline-flex items-center gap-2 text-[#109387] font-semibold hover:gap-3 transition-all"
            >
              Alle 18 Leistungen ansehen
              <ArrowRight size={18} />
            </Link>

            {/* Quick Stats */}
            <div className="mt-10 pt-8 border-t border-gray-200">
              <div className="grid grid-cols-2 gap-6">
                <div>
                  <div className="text-2xl font-bold text-[#012956]">18+</div>
                  <div className="text-sm text-gray-500">Leistungen</div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-[#012956]">8</div>
                  <div className="text-sm text-gray-500">Standorte in Bayern</div>
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
                    <div className={`relative h-64 md:h-auto md:min-h-[320px] ${index % 2 === 1 ? 'md:col-start-2' : ''}`}>
                      <Image
                        src={kategorie.image}
                        alt={kategorie.titel}
                        fill
                        className="object-cover group-hover:scale-105 transition-transform duration-700"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent md:bg-gradient-to-r md:from-transparent md:to-black/20" />
                    </div>

                    {/* Content */}
                    <div className={`p-8 lg:p-10 flex flex-col justify-center ${index % 2 === 1 ? 'md:col-start-1 md:row-start-1' : ''}`}>
                      <Icon size={32} className="text-[#109387] mb-4" strokeWidth={1.5} />

                      <h3 className="text-2xl font-bold text-[#012956] mb-3">
                        {kategorie.titel}
                      </h3>

                      <p className="text-gray-600 mb-6">
                        {kategorie.beschreibung}
                      </p>

                      {/* Leistungen Links */}
                      <div className="flex flex-wrap gap-2 mb-6">
                        {kategorie.leistungen.map((leistung) => (
                          <Link
                            key={leistung.href}
                            href={leistung.href}
                            className="text-sm px-3 py-1.5 bg-gray-100 text-gray-700 rounded-[4px] hover:bg-[#109387] hover:text-white transition-colors"
                          >
                            {leistung.name}
                          </Link>
                        ))}
                      </div>

                      <Link
                        href="/leistungen"
                        className="inline-flex items-center gap-2 text-[#109387] font-semibold group-hover:gap-3 transition-all"
                      >
                        Mehr erfahren
                        <ArrowRight size={18} />
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
