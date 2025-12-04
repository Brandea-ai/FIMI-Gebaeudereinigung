'use client'

import Link from 'next/link'
import { ArrowRight, Check, X, AlertCircle } from 'lucide-react'

const vergleich = [
  {
    aspekt: 'Verfügbarkeit',
    eigenHM: 'Urlaub, Krankheit = Ausfall',
    fimi: 'Immer Vertretung garantiert',
    fimiWins: true,
  },
  {
    aspekt: 'Kosten',
    eigenHM: 'Fixkosten auch bei wenig Arbeit',
    fimi: 'Nur zahlen was gebraucht wird',
    fimiWins: true,
  },
  {
    aspekt: 'Expertise',
    eigenHM: 'Wissen einer Person',
    fimi: 'Know-how eines ganzen Teams',
    fimiWins: true,
  },
  {
    aspekt: 'Haftung',
    eigenHM: 'Arbeitgeberhaftung bei Ihnen',
    fimi: 'Vollversichert durch uns',
    fimiWins: true,
  },
  {
    aspekt: 'Skalierbarkeit',
    eigenHM: 'Neue Objekte = neuer HM',
    fimi: 'Flexibel erweiterbar',
    fimiWins: true,
  },
  {
    aspekt: 'Dokumentation',
    eigenHM: 'Oft lückenhaft',
    fimi: 'Digitale Berichte inklusive',
    fimiWins: true,
  },
  {
    aspekt: 'Qualitätskontrolle',
    eigenHM: 'Selbstkontrolle',
    fimi: 'Regelmäßige Audits',
    fimiWins: true,
  },
  {
    aspekt: 'Personalverwaltung',
    eigenHM: 'Ihr Aufwand',
    fimi: 'Komplett bei uns',
    fimiWins: true,
  },
]

export default function VorteileTabelleSection() {
  return (
    <section id="vergleich" className="py-16 sm:py-20 lg:py-28 bg-[#f8f9fa]">
      <div className="w-full max-w-[1800px] mx-auto px-4 sm:px-6 md:px-8 lg:px-12 xl:px-20">

        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-14 lg:mb-16">
          <span className="text-[#109387] font-bold text-xs sm:text-sm uppercase tracking-wide mb-3 sm:mb-4 block">
            Vergleich
          </span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-[#012956] leading-[1.1] mb-4 sm:mb-6">
            Eigener Hausmeister vs. FIMI
          </h2>
          <p className="text-base sm:text-lg text-gray-600 font-semibold leading-relaxed">
            Sie überlegen, ob ein externer Hausmeisterservice das Richtige ist?
            Hier der ehrliche Vergleich.
          </p>
        </div>

        {/* Comparison Table - Desktop */}
        <div className="hidden lg:block bg-white rounded-[6px] overflow-hidden shadow-sm mb-10">
          <table className="w-full">
            <thead>
              <tr className="border-b-2 border-gray-100">
                <th className="text-left p-6 text-sm font-bold text-gray-500 uppercase tracking-wide w-1/4">
                  Aspekt
                </th>
                <th className="text-left p-6 text-sm font-bold text-gray-500 uppercase tracking-wide w-[37.5%]">
                  <div className="flex items-center gap-2">
                    <AlertCircle className="w-5 h-5 text-gray-400" />
                    Eigener Hausmeister
                  </div>
                </th>
                <th className="text-left p-6 text-sm font-bold text-[#109387] uppercase tracking-wide w-[37.5%] bg-[#109387]/5">
                  <div className="flex items-center gap-2">
                    <Check className="w-5 h-5 text-[#109387]" />
                    FIMI Hausmeisterservice
                  </div>
                </th>
              </tr>
            </thead>
            <tbody>
              {vergleich.map((row, index) => (
                <tr
                  key={index}
                  className={`border-b border-gray-100 ${index % 2 === 0 ? 'bg-white' : 'bg-gray-50/50'}`}
                >
                  <td className="p-6 font-bold text-[#012956]">
                    {row.aspekt}
                  </td>
                  <td className="p-6">
                    <div className="flex items-start gap-2">
                      <X className="w-5 h-5 text-red-400 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-600 font-semibold">{row.eigenHM}</span>
                    </div>
                  </td>
                  <td className="p-6 bg-[#109387]/5">
                    <div className="flex items-start gap-2">
                      <Check className="w-5 h-5 text-[#109387] flex-shrink-0 mt-0.5" />
                      <span className="text-[#012956] font-bold">{row.fimi}</span>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Comparison Cards - Mobile/Tablet */}
        <div className="lg:hidden space-y-4 mb-10">
          {vergleich.map((row, index) => (
            <div key={index} className="bg-white rounded-[6px] overflow-hidden shadow-sm">
              {/* Aspekt Header */}
              <div className="bg-[#012956] px-4 py-3">
                <span className="font-bold text-white text-sm">{row.aspekt}</span>
              </div>

              {/* Vergleich */}
              <div className="grid grid-cols-2 divide-x divide-gray-100">
                {/* Eigener HM */}
                <div className="p-4">
                  <div className="flex items-center gap-1.5 mb-2">
                    <X className="w-4 h-4 text-red-400" />
                    <span className="text-xs font-bold text-gray-500 uppercase">Eigener HM</span>
                  </div>
                  <p className="text-gray-600 font-semibold text-sm">{row.eigenHM}</p>
                </div>

                {/* FIMI */}
                <div className="p-4 bg-[#109387]/5">
                  <div className="flex items-center gap-1.5 mb-2">
                    <Check className="w-4 h-4 text-[#109387]" />
                    <span className="text-xs font-bold text-[#109387] uppercase">FIMI</span>
                  </div>
                  <p className="text-[#012956] font-bold text-sm">{row.fimi}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="bg-[#012956] rounded-[6px] p-6 sm:p-8 lg:p-10">
          <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6">
            <div>
              <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold text-white mb-2">
                Überzeugt? Starten Sie jetzt.
              </h3>
              <p className="text-white/70 font-semibold text-sm sm:text-base">
                Wir zeigen Ihnen in einer kostenfreien Beratung, wie viel Sie sparen können.
              </p>
            </div>
            <a
              href="#kontakt"
              className="inline-flex items-center justify-center gap-2 bg-[#109387] hover:bg-[#0d7d72] text-white font-bold text-sm sm:text-base lg:text-lg px-6 sm:px-8 py-3 sm:py-4 rounded-[6px] transition-all duration-300 group whitespace-nowrap flex-shrink-0"
            >
              Jetzt wechseln
              <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 group-hover:translate-x-1 transition-transform" />
            </a>
          </div>
        </div>

      </div>
    </section>
  )
}
