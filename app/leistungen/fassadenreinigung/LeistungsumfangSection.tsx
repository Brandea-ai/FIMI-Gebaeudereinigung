'use client'

import { Check, ArrowRight } from 'lucide-react'
import Link from 'next/link'

const leistungen = [
  {
    kategorie: 'Reinigung',
    items: [
      'Algen- und Moosentfernung',
      'Grünbelag beseitigen',
      'Rußentfernung',
      'Vogelkot entfernen',
      'Graffiti-Entfernung',
      'Kaugummi entfernen',
    ],
  },
  {
    kategorie: 'Fassadentypen',
    items: [
      'WDVS / Dämmfassaden',
      'Putzfassaden',
      'Klinkerfassaden',
      'Betonfassaden',
      'Holzfassaden',
      'Metallfassaden',
    ],
  },
  {
    kategorie: 'Nachbehandlung',
    items: [
      'Langzeit-Imprägnierung',
      'Hydrophobierung',
      'Algenschutz-Versiegelung',
      'Graffiti-Schutz',
      'Farbauffrischung',
      'Fugensanierung',
    ],
  },
  {
    kategorie: 'Zusatzleistungen',
    items: [
      'Dachrinnenreinigung',
      'Fensterreinigung',
      'Sockelreinigung',
      'Eingangsbereiche',
      'Balkone & Terrassen',
      'Vordächer',
    ],
  },
]

const crossLinks = [
  { name: 'Fensterreinigung', href: '/leistungen/fensterreinigung', desc: 'Fenster gleich mit reinigen?' },
  { name: 'Unterhaltsreinigung', href: '/leistungen/unterhaltsreinigung', desc: 'Regelmäßige Gebäudereinigung' },
  { name: 'Baureinigung', href: '/leistungen/baureinigung', desc: 'Nach Renovierungen' },
]

export default function LeistungsumfangSection() {
  return (
    <section id="leistungen" className="py-12 sm:py-16 lg:py-28 bg-[#f8f9fa]">
      <div className="w-full max-w-[1800px] mx-auto px-4 sm:px-6 md:px-8 lg:px-12 xl:px-20">

        {/* Header */}
        <div className="max-w-3xl mb-8 sm:mb-12 lg:mb-16">
          <span className="text-[#109387] font-bold text-xs sm:text-sm uppercase tracking-wide mb-3 sm:mb-4 block">
            Alles aus einer Hand
          </span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-[#012956] leading-tight mb-4 sm:mb-6">
            Was ist bei uns enthalten?
          </h2>
          <p className="text-base sm:text-lg text-gray-600 font-semibold leading-relaxed">
            Professionelle Fassadenreinigung bedeutet mehr als nur Abspritzen.
            Wir analysieren Ihre Fassade, wählen das richtige Verfahren und
            schützen sie langfristig vor erneutem Befall.
          </p>
        </div>

        {/* Leistungen Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 mb-10 sm:mb-12 lg:mb-16">
          {leistungen.map((gruppe, index) => (
            <div
              key={index}
              className="bg-white rounded-[6px] p-5 sm:p-6 shadow-sm"
            >
              <h3 className="text-lg sm:text-xl font-bold text-[#012956] mb-4 pb-3 border-b border-gray-100">
                {gruppe.kategorie}
              </h3>
              <ul className="space-y-2.5">
                {gruppe.items.map((item, itemIndex) => (
                  <li key={itemIndex} className="flex items-start gap-2.5">
                    <Check className="w-4 h-4 sm:w-5 sm:h-5 text-[#109387] flex-shrink-0 mt-0.5" strokeWidth={2.5} />
                    <span className="text-gray-700 font-semibold text-sm sm:text-base">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Cross-Links */}
        <div className="bg-[#012956] rounded-[6px] p-5 sm:p-6 lg:p-8">
          <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6">
            <div>
              <h3 className="text-xl sm:text-2xl font-bold text-white mb-2">
                Gleich mit erledigen?
              </h3>
              <p className="text-white/70 font-semibold text-sm sm:text-base">
                Wenn wir schon da sind – diese Leistungen passen perfekt zur Fassadenreinigung:
              </p>
            </div>
            <div className="flex flex-wrap gap-3">
              {crossLinks.map((link, index) => (
                <Link
                  key={index}
                  href={link.href}
                  className="flex items-center gap-2 bg-white/10 hover:bg-white/20 text-white font-semibold px-4 py-2.5 rounded-[6px] transition-colors group"
                >
                  {link.name}
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Link>
              ))}
            </div>
          </div>
        </div>

      </div>
    </section>
  )
}
