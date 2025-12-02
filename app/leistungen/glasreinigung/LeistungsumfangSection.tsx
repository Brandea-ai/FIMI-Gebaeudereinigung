'use client'

import { CheckCircle, Layers, Maximize2, Plus } from 'lucide-react'

const leistungsKategorien = [
  {
    icon: Layers,
    titel: 'Glasfassaden',
    beschreibung: 'Komplette Fassadenreinigung für moderne Gebäude',
    leistungen: [
      'Strukturglasfassaden',
      'Pfosten-Riegel-Fassaden',
      'Ganzglasfassaden',
      'Elementfassaden',
      'Aluverbund-Glasfassaden',
    ],
  },
  {
    icon: Maximize2,
    titel: 'Spezialflächen',
    beschreibung: 'Für besondere Glasarten und Einbausituationen',
    leistungen: [
      'Schaufenster und Eingänge',
      'Glasdächer und Oberlichter',
      'Wintergärten komplett',
      'Glastüren und Trennwände',
      'Glasgeländer und Brüstungen',
    ],
  },
  {
    icon: Plus,
    titel: 'Zusatzleistungen',
    beschreibung: 'Erweiterbar nach Ihrem Bedarf',
    leistungen: [
      'Rahmen- und Profilreinigung',
      'Sonnenschutzfolien pflegen',
      'Photovoltaik-Reinigung',
      'Lichtkuppeln und Glasdome',
      'Spiegel und Vitrinen',
    ],
  },
]

export default function LeistungsumfangSection() {
  return (
    <section id="leistungen" className="py-12 sm:py-16 lg:py-28 bg-white">
      <div className="w-full max-w-[1800px] mx-auto px-4 sm:px-6 md:px-8 lg:px-12 xl:px-20">

        {/* Header */}
        <div className="max-w-3xl mb-8 sm:mb-12 lg:mb-16">
          <span className="text-[#109387] font-bold text-xs sm:text-sm uppercase tracking-wide mb-3 sm:mb-4 block">
            Leistungsumfang
          </span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-[#012956] leading-tight mb-4 sm:mb-6">
            Was unsere Glasreinigung umfasst
          </h2>
          <p className="text-base sm:text-lg text-gray-600 font-semibold leading-relaxed">
            Von der einzelnen Glasscheibe bis zur kompletten Hochhausfassade: Wir reinigen alle
            Glasflächen professionell und streifenfrei. Hier sehen Sie unseren Leistungsumfang im Detail.
          </p>
        </div>

        {/* Leistungs-Grid */}
        <div className="grid md:grid-cols-3 gap-4 sm:gap-6 lg:gap-8 mb-12 sm:mb-16 lg:mb-20">
          {leistungsKategorien.map((kategorie, index) => (
            <div
              key={index}
              className="bg-[#f8f9fa] rounded-[6px] p-5 sm:p-6 lg:p-8 hover:shadow-lg transition-shadow group"
            >
              {/* Icon + Titel */}
              <div className="flex items-start gap-3 sm:gap-4 mb-4 sm:mb-6">
                <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-[6px] border-2 border-[#109387] group-hover:bg-[#109387] flex items-center justify-center flex-shrink-0 transition-all duration-300">
                  <kategorie.icon className="w-5 h-5 sm:w-6 sm:h-6 text-[#109387] group-hover:text-white transition-colors duration-300" strokeWidth={1.5} />
                </div>
                <div>
                  <h3 className="text-lg sm:text-xl font-bold text-[#012956]">
                    {kategorie.titel}
                  </h3>
                  <p className="text-gray-500 font-semibold text-sm">
                    {kategorie.beschreibung}
                  </p>
                </div>
              </div>

              {/* Leistungsliste */}
              <ul className="space-y-2 sm:space-y-3">
                {kategorie.leistungen.map((leistung, idx) => (
                  <li key={idx} className="flex items-start gap-2 sm:gap-3">
                    <CheckCircle className="w-4 h-4 sm:w-5 sm:h-5 text-[#109387] flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700 font-semibold text-sm sm:text-base">
                      {leistung}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Qualitätsversprechen */}
        <div className="bg-[#012956] rounded-[6px] p-6 sm:p-8 lg:p-12">
          <div className="max-w-3xl mb-6 sm:mb-8">
            <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold text-white mb-3 sm:mb-4">
              Unser Qualitätsversprechen
            </h3>
            <p className="text-white/70 font-semibold text-sm sm:text-base leading-relaxed">
              Jede Glasreinigung wird von uns kontrolliert. Sind Sie nicht zufrieden,
              kommen wir kostenfrei zurück und bessern nach – garantiert.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
            {[
              { label: 'Streifenfrei-Garantie', beschreibung: '100% oder wir kommen nochmal' },
              { label: 'Feste Ansprechpartner', beschreibung: 'Direkte Kommunikation ohne Umwege' },
              { label: 'Versicherungsschutz', beschreibung: 'Vollumfänglich abgesichert' },
              { label: 'Dokumentation', beschreibung: 'Auf Wunsch mit Fotoprotokoll' },
            ].map((item, index) => (
              <div
                key={index}
                className="bg-white/10 rounded-[6px] p-4 sm:p-5 hover:bg-white/15 transition-colors"
              >
                <h4 className="text-white font-bold mb-2 text-sm sm:text-base">
                  {item.label}
                </h4>
                <p className="text-white/60 font-semibold text-xs sm:text-sm leading-relaxed">
                  {item.beschreibung}
                </p>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  )
}
