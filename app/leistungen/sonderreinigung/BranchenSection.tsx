'use client'

import Link from 'next/link'
import { Building2, Factory, Home, Hotel, Store, Landmark, ArrowRight } from 'lucide-react'

const branchen = [
  {
    icon: Building2,
    name: 'Hausverwaltungen',
    slug: 'wohnungswirtschaft',
    beschreibung: 'Messie-Wohnungen, Wasserschäden in Mietobjekten, Taubenkot auf Dachböden – wir sind der Partner für Hausverwaltungen.',
    einsaetze: ['Messie-Wohnung', 'Wasserschaden', 'Taubenkot'],
  },
  {
    icon: Factory,
    name: 'Industrie & Produktion',
    slug: 'industrie-produktion',
    beschreibung: 'Ölunfälle, Brandschäden, Gefahrstoff-Austritt – unsere Teams kennen industrielle Anforderungen.',
    einsaetze: ['Ölunfall', 'Brandschaden', 'Gefahrstoffe'],
  },
  {
    icon: Home,
    name: 'Privatpersonen',
    slug: null,
    beschreibung: 'Wasserschaden im Keller, Brand in der Küche, Erbe einer verwahrlosten Wohnung – wir helfen schnell und diskret.',
    einsaetze: ['Wasserschaden', 'Küchenbrand', 'Erbschaft'],
  },
  {
    icon: Hotel,
    name: 'Hotels & Gastronomie',
    slug: 'gastronomie-hotel',
    beschreibung: 'Schnelle Wiederherstellung nach Schadensfällen. Minimale Ausfallzeit, maximale Diskretion für Ihre Gäste.',
    einsaetze: ['Wasserschaden', 'Schädlinge', 'Desinfektion'],
  },
  {
    icon: Store,
    name: 'Einzelhandel',
    slug: 'einzelhandel',
    beschreibung: 'Wasserschaden im Lager, Brand in der Filiale – wir sorgen dafür, dass Sie schnell wieder öffnen können.',
    einsaetze: ['Wasserschaden', 'Brandschaden', 'Schnell-Service'],
  },
  {
    icon: Landmark,
    name: 'Öffentliche Einrichtungen',
    slug: 'oeffentliche-einrichtungen',
    beschreibung: 'Schulen, Behörden, Krankenhäuser – Sonderreinigung nach höchsten Hygiene-Standards.',
    einsaetze: ['Desinfektion', 'Wasserschaden', 'Hygiene'],
  },
]

export default function BranchenSection() {
  return (
    <section id="branchen" className="py-12 sm:py-16 lg:py-28 bg-white">
      <div className="w-full max-w-[1800px] mx-auto px-4 sm:px-6 md:px-8 lg:px-12 xl:px-20">

        {/* Header */}
        <div className="max-w-3xl mb-8 sm:mb-12 lg:mb-16">
          <span className="text-[#109387] font-bold text-xs sm:text-sm uppercase tracking-wide mb-3 sm:mb-4 block">
            Branchenkompetenz
          </span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-[#012956] leading-tight mb-4 sm:mb-6">
            Wer braucht Sonderreinigung?
          </h2>
          <p className="text-base sm:text-lg text-gray-600 font-semibold leading-relaxed">
            Notfälle kennen keine Branchengrenzen. Wir unterstützen Hausverwaltungen,
            Industrie, Privatpersonen und alle, die schnelle und professionelle Hilfe brauchen.
          </p>
        </div>

        {/* Branchen Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
          {branchen.map((branche, index) => {
            const Icon = branche.icon
            const cardContent = (
              <>
                {/* Icon */}
                <div className="w-12 h-12 sm:w-14 sm:h-14 border-2 border-[#109387] group-hover:bg-[#109387] rounded-[6px] flex items-center justify-center mb-4 transition-all duration-300">
                  <Icon className="w-6 h-6 sm:w-7 sm:h-7 text-[#109387] group-hover:text-white transition-colors duration-300" strokeWidth={1.5} />
                </div>

                {/* Name */}
                <h3 className="text-lg sm:text-xl font-bold text-[#012956] group-hover:text-white mb-2 sm:mb-3 transition-colors">
                  {branche.name}
                </h3>

                {/* Beschreibung */}
                <p className="text-gray-600 font-semibold text-sm leading-relaxed mb-4 group-hover:text-white/80 transition-colors">
                  {branche.beschreibung}
                </p>

                {/* Einsätze Tags */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {branche.einsaetze.map((einsatz, idx) => (
                    <span
                      key={idx}
                      className="text-xs font-bold text-[#109387] bg-[#109387]/10 group-hover:bg-white/20 group-hover:text-white px-2 py-1 rounded transition-colors"
                    >
                      {einsatz}
                    </span>
                  ))}
                </div>

                {/* Link */}
                {branche.slug && (
                  <span className="inline-flex items-center gap-1.5 text-[#109387] group-hover:text-white font-bold text-sm transition-colors">
                    Mehr erfahren
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </span>
                )}
              </>
            )

            const cardClass = "group bg-[#f8f9fa] rounded-[6px] p-5 sm:p-6 lg:p-8 hover:bg-[#012956] transition-all duration-300 cursor-pointer"

            return branche.slug ? (
              <Link key={index} href={`/branchen/${branche.slug}`} className={cardClass}>
                {cardContent}
              </Link>
            ) : (
              <div key={index} className={cardClass}>
                {cardContent}
              </div>
            )
          })}
        </div>

        {/* Bottom CTA */}
        <div className="mt-10 sm:mt-12 lg:mt-16 text-center">
          <Link
            href="/branchen"
            className="inline-flex items-center gap-2 bg-[#012956] hover:bg-[#01203d] text-white font-bold px-6 sm:px-8 py-3 sm:py-4 rounded-[6px] transition-colors group text-sm sm:text-base"
          >
            Alle 12 Branchen entdecken
            <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>

      </div>
    </section>
  )
}
