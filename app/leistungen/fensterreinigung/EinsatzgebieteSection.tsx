'use client'

import Link from 'next/link'
import { ArrowRight, Building2, ShoppingBag, Stethoscope, UtensilsCrossed, Factory, Home } from 'lucide-react'

const branchen = [
  {
    slug: 'buero-verwaltung',
    name: 'Büro & Verwaltung',
    icon: Building2,
    besonderheit: 'Reinigung außerhalb der Geschäftszeiten',
    beschreibung: 'Großflächige Fensterfronten, Glastrennwände, Empfangsbereiche – diskret und ohne Störung Ihres Betriebs.',
  },
  {
    slug: 'einzelhandel',
    name: 'Einzelhandel',
    icon: ShoppingBag,
    besonderheit: 'Schaufenster täglich oder wöchentlich',
    beschreibung: 'Saubere Schaufenster sind Ihre beste Werbung. Wir reinigen vor Ladenöffnung oder nach Ladenschluss.',
  },
  {
    slug: 'gesundheitswesen',
    name: 'Arztpraxen & Kliniken',
    icon: Stethoscope,
    besonderheit: 'Hygiene-Standards erfüllt',
    beschreibung: 'Patienten erwarten Sauberkeit. Wir arbeiten mit medizinverträglichen Mitteln und höchster Sorgfalt.',
  },
  {
    slug: 'gastronomie-hotel',
    name: 'Gastronomie & Hotels',
    icon: UtensilsCrossed,
    besonderheit: 'Wochenend-Service verfügbar',
    beschreibung: 'Restaurant-Fenster, Hotel-Lobbys, Wintergärten – gepflegter Eindruck für Ihre Gäste.',
  },
  {
    slug: 'industrie-produktion',
    name: 'Industrie & Produktion',
    icon: Factory,
    besonderheit: 'Hallenfenster und Oberlichter',
    beschreibung: 'Mehr Tageslicht in Produktionshallen steigert Wohlbefinden und Produktivität. Wir reinigen auch große Höhen.',
  },
  {
    slug: 'wohnungswirtschaft',
    name: 'Wohnungswirtschaft',
    icon: Home,
    besonderheit: 'Treppenhausfenster regelmäßig',
    beschreibung: 'Für Hausverwaltungen und WEGs: Treppenhäuser, Eingangsbereiche und Gemeinschaftsflächen.',
  },
]

export default function EinsatzgebieteSection() {
  return (
    <section id="einsatzgebiete" className="py-12 sm:py-16 lg:py-28 bg-[#f8f9fa]">
      <div className="w-full max-w-[1800px] mx-auto px-4 sm:px-6 md:px-8 lg:px-12 xl:px-20">

        {/* Header */}
        <div className="max-w-3xl mb-8 sm:mb-12 lg:mb-16">
          <span className="text-[#109387] font-bold text-xs sm:text-sm uppercase tracking-wide mb-3 sm:mb-4 block">
            Branchenkompetenz
          </span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-[#012956] leading-tight mb-4 sm:mb-6">
            Fensterreinigung für Ihre Branche
          </h2>
          <p className="text-base sm:text-lg text-gray-600 font-semibold leading-relaxed">
            Jede Branche hat eigene Anforderungen an Sauberkeit und Reinigungsintervalle.
            Wir kennen die Besonderheiten und passen unseren Service entsprechend an.
          </p>
        </div>

        {/* Branchen Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
          {branchen.map((branche) => {
            const Icon = branche.icon
            return (
              <Link
                key={branche.slug}
                href={`/branchen/${branche.slug}`}
                className="group bg-white rounded-[6px] p-5 sm:p-6 lg:p-8 shadow-sm hover:shadow-lg transition-all duration-300 border-2 border-transparent hover:border-[#109387]"
              >
                {/* Icon + Name */}
                <div className="flex items-start gap-3 sm:gap-4 mb-4">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-[6px] border-2 border-[#109387] group-hover:bg-[#109387] flex items-center justify-center flex-shrink-0 transition-all duration-300">
                    <Icon className="w-5 h-5 sm:w-6 sm:h-6 text-[#109387] group-hover:text-white transition-colors duration-300" strokeWidth={1.5} />
                  </div>
                  <div>
                    <h3 className="text-lg sm:text-xl font-bold text-[#012956] group-hover:text-[#109387] transition-colors">
                      {branche.name}
                    </h3>
                    <p className="text-[#109387] font-semibold text-xs sm:text-sm">
                      {branche.besonderheit}
                    </p>
                  </div>
                </div>

                {/* Beschreibung */}
                <p className="text-gray-600 font-semibold text-sm sm:text-base leading-relaxed mb-4">
                  {branche.beschreibung}
                </p>

                {/* Link */}
                <div className="flex items-center gap-2 text-[#109387] font-bold text-sm group-hover:gap-3 transition-all">
                  <span>Mehr erfahren</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </div>
              </Link>
            )
          })}
        </div>

        {/* Alle Branchen CTA */}
        <div className="mt-8 sm:mt-12 text-center">
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
