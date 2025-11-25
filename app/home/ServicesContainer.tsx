'use client'

import Image from 'next/image'
import Link from 'next/link'
import { ArrowRight, Building2, Factory, Wrench } from 'lucide-react'

const serviceKategorien = [
  {
    id: 'gewerblich',
    icon: Building2,
    titel: 'Gewerbliche Reinigung',
    problem: 'Das Büro macht keinen guten Eindruck mehr',
    loesung: 'Saubere Räume in denen sich Mitarbeiter und Kunden wohlfühlen. Regelmäßig, zuverlässig, ohne dass Sie sich darum kümmern müssen.',
    image: 'https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=1200&auto=format&fit=crop',
  },
  {
    id: 'industrie',
    icon: Factory,
    titel: 'Industriereinigung',
    problem: 'Produktionshallen und Maschinen brauchen Spezialwissen',
    loesung: 'Fachgerechte Reinigung auch unter schwierigen Bedingungen. Im laufenden Betrieb oder außerhalb der Produktionszeiten.',
    image: 'https://images.unsplash.com/photo-1565688534245-05d6b5be184a?q=80&w=1200&auto=format&fit=crop',
  },
  {
    id: 'facility',
    icon: Wrench,
    titel: 'Facility Management',
    problem: 'Zu viele Ansprechpartner für zu viele Aufgaben',
    loesung: 'Ein Partner der sich um alles kümmert. Reinigung, Hausmeister, Winterdienst, Außenanlagen. Alles aus einer Hand.',
    image: 'https://images.unsplash.com/photo-1581578731548-c64695cc6952?q=80&w=1200&auto=format&fit=crop',
  },
]

export default function ServicesContainer() {
  return (
    <section id="leistungen" className="py-20 lg:py-28 bg-[#f8f9fa]" aria-labelledby="services-heading">
      <div className="w-full max-w-[1800px] mx-auto px-6 lg:px-12 xl:px-20">

        <div className="grid lg:grid-cols-[400px_1fr] xl:grid-cols-[450px_1fr] gap-12 lg:gap-20">

          {/* Sticky Sidebar */}
          <aside className="lg:sticky lg:top-32 lg:self-start">

            {/* Headline */}
            <h2
              id="services-heading"
              className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#109387] leading-[1.1] mb-8"
            >
              Was brauchen Sie?
            </h2>

            {/* Content - Psychologisch aus Kundensicht */}
            <div className="space-y-5 mb-10">
              <p className="text-lg text-gray-700 font-semibold leading-relaxed">
                Jedes Unternehmen hat andere Anforderungen. Manche brauchen
                nur eine zuverlässige Büroreinigung. Andere suchen einen
                Partner der das komplette Gebäudemanagement übernimmt.
              </p>
              <p className="text-lg text-gray-700 font-semibold leading-relaxed">
                Wir hören erst zu. Dann schauen wir uns Ihre Räume an.
                Und dann machen wir Ihnen ein Angebot das zu Ihrem
                Bedarf passt. Nicht mehr und nicht weniger.
              </p>
            </div>

            {/* CTAs */}
            <div className="space-y-4">
              <a
                href="#contact-form"
                className="flex items-center justify-center gap-3 bg-[#109387] hover:bg-[#0d7d72] text-white font-bold text-lg px-8 py-4 rounded-[6px] transition-all duration-300 group w-full"
              >
                Unverbindlich anfragen
                <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
              </a>
              <Link
                href="/leistungen"
                className="flex items-center justify-center gap-3 border-2 border-[#109387] text-[#109387] font-bold text-lg px-8 py-4 rounded-[6px] hover:bg-[#109387] hover:text-white transition-all w-full"
              >
                Alle Leistungen ansehen
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <line x1="7" y1="17" x2="17" y2="7"></line>
                  <polyline points="7 7 17 7 17 17"></polyline>
                </svg>
              </Link>
            </div>

            {/* ISO Standards - dezent */}
            <div className="mt-10 pt-8 border-t border-gray-200">
              <p className="text-sm text-gray-500 font-semibold uppercase tracking-wide">
                Qualitätsstandards
              </p>
              <p className="text-lg text-gray-700 font-bold mt-2">
                ISO 9001 & 14001
              </p>
            </div>
          </aside>

          {/* Service Cards - Fokus auf Problem → Lösung */}
          <div className="space-y-8" role="list" aria-label="Unsere Leistungsbereiche">
            {serviceKategorien.map((kategorie, index) => {
              const Icon = kategorie.icon
              return (
                <article
                  key={kategorie.id}
                  className="group bg-white rounded-[6px] overflow-hidden"
                  role="listitem"
                >
                  <div className={`grid md:grid-cols-2 ${index % 2 === 1 ? 'md:grid-flow-dense' : ''}`}>

                    {/* Image */}
                    <div className={`relative h-72 md:h-auto md:min-h-[380px] ${index % 2 === 1 ? 'md:col-start-2' : ''}`}>
                      <Image
                        src={kategorie.image}
                        alt={kategorie.titel}
                        fill
                        className="object-cover"
                      />
                    </div>

                    {/* Content - Problem → Lösung Struktur */}
                    <div className={`p-8 lg:p-12 flex flex-col justify-center ${index % 2 === 1 ? 'md:col-start-1 md:row-start-1' : ''}`}>

                      {/* Icon + Titel */}
                      <div className="flex items-center gap-4 mb-6">
                        <Icon size={32} className="text-[#109387]" strokeWidth={1.5} aria-hidden="true" />
                        <h3 className="text-2xl lg:text-3xl font-bold text-[#109387]">
                          {kategorie.titel}
                        </h3>
                      </div>

                      {/* Problem */}
                      <p className="text-lg text-gray-500 font-semibold mb-4 italic">
                        „{kategorie.problem}"
                      </p>

                      {/* Lösung */}
                      <p className="text-lg text-gray-700 font-semibold leading-relaxed">
                        {kategorie.loesung}
                      </p>

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
