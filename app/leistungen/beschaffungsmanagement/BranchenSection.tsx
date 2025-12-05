'use client'

import Link from 'next/link'
import { Factory, Building2, Stethoscope, Landmark, ShoppingBag, Truck, ArrowRight } from 'lucide-react'

const branchen = [
  {
    slug: 'industrie-produktion',
    name: 'Industrie & Produktion',
    icon: Factory,
    beschreibung: 'Materialkosten optimieren, Lieferantenrisiken reduzieren, Fertigungsabläufe absichern.',
  },
  {
    slug: 'buero-verwaltung',
    name: 'Büro & Verwaltung',
    icon: Building2,
    beschreibung: 'Büromaterial, IT-Beschaffung, Dienstleistungsverträge effizient managen.',
  },
  {
    slug: 'gesundheitswesen',
    name: 'Gesundheitswesen',
    icon: Stethoscope,
    beschreibung: 'Medizinprodukte, Laborartikel, Dienstleistungen unter Qualitätsanforderungen.',
  },
  {
    slug: 'oeffentliche-einrichtungen',
    name: 'Öffentlicher Sektor',
    icon: Landmark,
    beschreibung: 'Vergabeverfahren nach VOL, VOB, VgV rechtssicher und effizient durchführen.',
  },
  {
    slug: 'einzelhandel',
    name: 'Einzelhandel',
    icon: ShoppingBag,
    beschreibung: 'Wareneinstand optimieren, Lieferantenkonditionen verhandeln, Margen sichern.',
  },
  {
    slug: 'logistik-lager',
    name: 'Logistik & Transport',
    icon: Truck,
    beschreibung: 'Fuhrpark, Speditionsverträge, Logistikdienstleister systematisch ausschreiben.',
  },
]

export default function BranchenSection() {
  return (
    <section className="py-16 sm:py-20 lg:py-28 bg-[#f8f9fa]">
      <div className="w-full max-w-[1800px] mx-auto px-4 sm:px-6 md:px-8 lg:px-12 xl:px-20">

        {/* Header */}
        <div className="max-w-3xl mb-10 sm:mb-12 lg:mb-16">
          <span className="text-[#109387] font-bold text-xs sm:text-sm uppercase tracking-wide mb-3 sm:mb-4 block">
            Branchenkompetenz
          </span>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-bold text-[#109387] mb-4 sm:mb-6">
            Beschaffungsmanagement für Ihre Branche
          </h2>
          <p className="text-base sm:text-lg lg:text-xl text-gray-600 font-semibold leading-relaxed">
            Jede Branche hat eigene Anforderungen an den Einkauf. Wir bringen branchenübergreifendes
            Know-how mit und passen unsere Methoden an Ihre Spezifika an.
          </p>
        </div>

        {/* Branchen Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5 lg:gap-6">
          {branchen.map((branche) => {
            const Icon = branche.icon
            return (
              <Link
                key={branche.slug}
                href={`/branchen/${branche.slug}`}
                className="group bg-white hover:bg-[#012956] rounded-[6px] p-5 sm:p-6 lg:p-8 border-2 border-transparent hover:border-[#109387] transition-all duration-500 shadow-sm hover:shadow-lg"
              >
                {/* Icon */}
                <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-[6px] border-2 border-[#109387] group-hover:bg-[#109387] flex items-center justify-center mb-4 sm:mb-5 transition-all duration-500">
                  <Icon className="w-6 h-6 sm:w-7 sm:h-7 text-[#109387] group-hover:text-white transition-colors duration-500" strokeWidth={1.5} />
                </div>

                {/* Title */}
                <h3 className="text-lg sm:text-xl lg:text-2xl font-bold text-[#012956] group-hover:text-white mb-2 sm:mb-3 transition-colors duration-500">
                  {branche.name}
                </h3>

                {/* Description */}
                <p className="text-sm sm:text-base text-gray-600 group-hover:text-white/80 font-semibold leading-relaxed mb-4 transition-colors duration-500">
                  {branche.beschreibung}
                </p>

                {/* Link */}
                <span className="inline-flex items-center gap-2 text-[#109387] group-hover:text-white font-bold text-sm transition-colors duration-500">
                  Mehr erfahren
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </span>
              </Link>
            )
          })}
        </div>

        {/* All Branchen CTA */}
        <div className="mt-10 sm:mt-12 text-center">
          <Link
            href="/branchen"
            className="inline-flex items-center gap-2 bg-[#012956] hover:bg-[#109387] text-white font-bold text-sm sm:text-base px-6 sm:px-8 py-3 sm:py-4 rounded-[6px] transition-all group"
          >
            Alle Branchen entdecken
            <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>

      </div>
    </section>
  )
}
