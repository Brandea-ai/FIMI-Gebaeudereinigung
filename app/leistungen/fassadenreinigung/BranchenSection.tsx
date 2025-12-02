'use client'

import Link from 'next/link'
import { Building2, Home, Factory, Landmark, ShoppingBag, GraduationCap, ArrowRight } from 'lucide-react'

const branchen = [
  {
    icon: Home,
    name: 'Wohnungswirtschaft',
    slug: 'wohnungswirtschaft',
    text: 'Mehrfamilienhäuser, WEGs, Hausverwaltungen',
    beispiel: '300 m² Fassade ab 3.000€',
  },
  {
    icon: Building2,
    name: 'Büro & Verwaltung',
    slug: 'buero-verwaltung',
    text: 'Bürogebäude, Verwaltungsbauten, Kanzleien',
    beispiel: '500 m² Fassade ab 4.500€',
  },
  {
    icon: Factory,
    name: 'Industrie & Produktion',
    slug: 'industrie-produktion',
    text: 'Produktionshallen, Lagerhallen, Gewerbeobjekte',
    beispiel: '800 m² Fassade ab 6.000€',
  },
  {
    icon: Landmark,
    name: 'Öffentliche Einrichtungen',
    slug: 'oeffentliche-einrichtungen',
    text: 'Rathäuser, Schulen, Kindergärten',
    beispiel: 'Individuelle Angebote',
  },
  {
    icon: ShoppingBag,
    name: 'Einzelhandel',
    slug: 'einzelhandel',
    text: 'Geschäfte, Einkaufszentren, Märkte',
    beispiel: '200 m² Fassade ab 2.000€',
  },
  {
    icon: GraduationCap,
    name: 'Bildung & Schulen',
    slug: 'bildung-schulen',
    text: 'Schulen, Universitäten, Kitas',
    beispiel: 'Ferienzeit-Service',
  },
]

export default function BranchenSection() {
  return (
    <section className="py-12 sm:py-16 lg:py-28 bg-white">
      <div className="w-full max-w-[1800px] mx-auto px-4 sm:px-6 md:px-8 lg:px-12 xl:px-20">

        {/* Header */}
        <div className="max-w-3xl mb-8 sm:mb-12 lg:mb-16">
          <span className="text-[#109387] font-bold text-xs sm:text-sm uppercase tracking-wide mb-3 sm:mb-4 block">
            Für jede Branche
          </span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-[#012956] leading-tight mb-4 sm:mb-6">
            Wer profitiert von Fassadenreinigung?
          </h2>
          <p className="text-base sm:text-lg text-gray-600 font-semibold leading-relaxed">
            Egal ob Hausverwaltung, Gewerbebetrieb oder öffentliche Einrichtung –
            wir kennen die Anforderungen Ihrer Branche und liefern passgenaue Lösungen.
          </p>
        </div>

        {/* Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
          {branchen.map((branche) => (
            <Link
              key={branche.slug}
              href={`/branchen/${branche.slug}`}
              className="group bg-[#f8f9fa] hover:bg-[#012956] rounded-[6px] p-5 sm:p-6 transition-all duration-300"
            >
              {/* Icon */}
              <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-[6px] bg-[#109387]/10 group-hover:bg-[#109387] flex items-center justify-center mb-4 transition-colors">
                <branche.icon className="w-6 h-6 sm:w-7 sm:h-7 text-[#109387] group-hover:text-white transition-colors" />
              </div>

              {/* Content */}
              <h3 className="text-lg sm:text-xl font-bold text-[#012956] group-hover:text-white mb-2 transition-colors">
                {branche.name}
              </h3>
              <p className="text-gray-600 group-hover:text-white/70 font-semibold text-sm mb-3 transition-colors">
                {branche.text}
              </p>

              {/* Beispiel */}
              <div className="text-[#109387] group-hover:text-[#109387] font-bold text-sm">
                {branche.beispiel}
              </div>

              {/* Arrow */}
              <div className="flex items-center gap-2 mt-4 text-[#109387] group-hover:text-white font-bold text-sm transition-colors">
                Mehr erfahren
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </div>
            </Link>
          ))}
        </div>

        {/* Alle Branchen Link */}
        <div className="mt-8 sm:mt-10 text-center">
          <Link
            href="/branchen"
            className="inline-flex items-center gap-3 bg-[#012956] hover:bg-[#01203d] text-white font-bold px-6 sm:px-8 py-3 sm:py-4 rounded-[6px] transition-colors group"
          >
            Alle 12 Branchen ansehen
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>

      </div>
    </section>
  )
}
