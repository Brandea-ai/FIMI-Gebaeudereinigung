'use client'

import { Check, X, ArrowRight } from 'lucide-react'

const vergleich = [
  {
    aspekt: 'Ansprechpartner',
    einzeln: '4-5 verschiedene',
    fimi: '1 persönlicher Betreuer',
  },
  {
    aspekt: 'Rechnungen pro Monat',
    einzeln: '4-5 Einzelrechnungen',
    fimi: '1 Sammelrechnung',
  },
  {
    aspekt: 'Koordination',
    einzeln: 'Sie selbst',
    fimi: 'Wir übernehmen alles',
  },
  {
    aspekt: 'Qualitätsstandard',
    einzeln: 'Unterschiedlich',
    fimi: 'Einheitlich hoch (ISO)',
  },
  {
    aspekt: 'Bei Notfällen',
    einzeln: 'Wer ist zuständig?',
    fimi: '2h Reaktionszeit garantiert',
  },
  {
    aspekt: 'Dokumentation',
    einzeln: 'Fragmentiert',
    fimi: 'Zentral & digital',
  },
]

const zahlen = [
  { value: '30%', label: 'weniger Koordinationsaufwand', description: 'Durch einen zentralen Ansprechpartner' },
  { value: '15%', label: 'Kostenersparnis', description: 'Durch gebündelte Dienstleistungen' },
  { value: '100%', label: 'Transparenz', description: 'Eine Rechnung, klare Leistungen' },
]

export default function VorteileSection() {
  return (
    <section className="py-16 sm:py-20 lg:py-28 bg-white">
      <div className="w-full max-w-[1800px] mx-auto px-4 sm:px-6 md:px-8 lg:px-12 xl:px-20">

        {/* Section Header */}
        <div className="text-center mb-12 sm:mb-16">
          <span className="text-[#109387] font-bold text-xs sm:text-sm uppercase tracking-wide mb-3 sm:mb-4 block">
            Der Unterschied
          </span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-[#012956] leading-[1.1] mb-4 sm:mb-6">
            Warum Facility Management statt Einzeldienstleister?
          </h2>
          <p className="text-base sm:text-lg text-gray-600 font-semibold max-w-3xl mx-auto">
            Der direkte Vergleich zeigt: Gebündelte Leistungen sparen Zeit, Geld und Nerven.
          </p>
        </div>

        {/* Vergleichstabelle */}
        <div className="bg-[#f8f9fa] rounded-[6px] overflow-hidden mb-12 sm:mb-16">

          {/* Header */}
          <div className="grid grid-cols-3 bg-[#012956]">
            <div className="p-4 sm:p-6">
              <span className="text-white/60 font-bold text-xs sm:text-sm uppercase tracking-wide">
                Aspekt
              </span>
            </div>
            <div className="p-4 sm:p-6 text-center border-l border-white/10">
              <span className="text-white/60 font-bold text-xs sm:text-sm uppercase tracking-wide">
                Einzeldienstleister
              </span>
            </div>
            <div className="p-4 sm:p-6 text-center border-l border-white/10 bg-[#109387]">
              <span className="text-white font-bold text-xs sm:text-sm uppercase tracking-wide">
                FIMI Facility Management
              </span>
            </div>
          </div>

          {/* Rows */}
          {vergleich.map((row, index) => (
            <div
              key={index}
              className={`grid grid-cols-3 ${index % 2 === 0 ? 'bg-white' : 'bg-[#f8f9fa]'}`}
            >
              <div className="p-4 sm:p-6 flex items-center">
                <span className="text-[#012956] font-bold text-sm sm:text-base">
                  {row.aspekt}
                </span>
              </div>
              <div className="p-4 sm:p-6 flex items-center justify-center border-l border-gray-200">
                <div className="flex items-center gap-2">
                  <X className="w-4 h-4 sm:w-5 sm:h-5 text-red-400 flex-shrink-0" />
                  <span className="text-gray-600 font-semibold text-xs sm:text-sm text-center">
                    {row.einzeln}
                  </span>
                </div>
              </div>
              <div className="p-4 sm:p-6 flex items-center justify-center border-l border-gray-200 bg-[#109387]/5">
                <div className="flex items-center gap-2">
                  <Check className="w-4 h-4 sm:w-5 sm:h-5 text-[#109387] flex-shrink-0" />
                  <span className="text-[#012956] font-bold text-xs sm:text-sm text-center">
                    {row.fimi}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Zahlen/Stats */}
        <div className="grid md:grid-cols-3 gap-6 sm:gap-8 mb-12 sm:mb-16">
          {zahlen.map((zahl, index) => (
            <div
              key={index}
              className="bg-[#012956] rounded-[6px] p-6 sm:p-8 text-center"
            >
              <div className="text-4xl sm:text-5xl lg:text-6xl font-bold text-[#109387] mb-2">
                {zahl.value}
              </div>
              <div className="text-white font-bold text-base sm:text-lg mb-1">
                {zahl.label}
              </div>
              <div className="text-white/60 font-semibold text-sm">
                {zahl.description}
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center">
          <a
            href="#contact-form"
            className="inline-flex items-center gap-2 sm:gap-3 bg-[#109387] hover:bg-[#0d7d72] text-white font-bold text-sm sm:text-base lg:text-lg px-6 sm:px-8 py-3 sm:py-4 rounded-[6px] transition-all duration-300 group"
          >
            Unverbindliche Beratung anfragen
            <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 group-hover:translate-x-1 transition-transform" />
          </a>
          <p className="mt-4 text-gray-500 font-semibold text-sm">
            Wir erstellen Ihnen ein individuelles Angebot – kostenfrei und unverbindlich
          </p>
        </div>

      </div>
    </section>
  )
}
