'use client'

import { Phone, MapPin, FileText, Calendar, Sparkles, ArrowRight } from 'lucide-react'

const processSteps = [
  {
    number: '01',
    icon: Phone,
    title: 'Anfrage',
    description: 'Sie rufen an oder füllen das Formular aus. Wir melden uns innerhalb von 2 Stunden.',
    time: '5 Minuten',
  },
  {
    number: '02',
    icon: MapPin,
    title: 'Besichtigung',
    description: 'Wir kommen kostenfrei zu Ihnen und begutachten die Tiefgarage vor Ort.',
    time: '1-2 Tage',
  },
  {
    number: '03',
    icon: FileText,
    title: 'Angebot',
    description: 'Sie erhalten ein transparentes Festpreisangebot – keine versteckten Kosten.',
    time: '48 Stunden',
  },
  {
    number: '04',
    icon: Calendar,
    title: 'Terminplanung',
    description: 'Wir stimmen den Termin ab und informieren bei Bedarf alle Nutzer.',
    time: 'Nach Absprache',
  },
  {
    number: '05',
    icon: Sparkles,
    title: 'Reinigung',
    description: 'Professionelle Durchführung mit Dokumentation und Abnahme.',
    time: '1 Tag',
  },
]

export default function ProcessSection() {
  return (
    <section id="prozess" className="py-12 sm:py-16 lg:py-28 bg-[#f8f9fa]">
      <div className="w-full max-w-[1800px] mx-auto px-4 sm:px-6 md:px-8 lg:px-12 xl:px-20">

        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-8 sm:mb-12 lg:mb-16">
          <span className="text-[#109387] font-bold text-xs sm:text-sm uppercase tracking-wide mb-3 sm:mb-4 block">
            So funktioniert es
          </span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-[#012956] leading-tight mb-4 sm:mb-6">
            In 5 Schritten zur sauberen Tiefgarage
          </h2>
          <p className="text-base sm:text-lg text-gray-600 font-semibold leading-relaxed">
            Vom ersten Kontakt bis zur blitzsauberen Tiefgarage –
            unkompliziert, transparent und ohne böse Überraschungen.
          </p>
        </div>

        {/* Process Steps */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-4 sm:gap-6">
          {processSteps.map((step, index) => (
            <div
              key={index}
              className="relative bg-white rounded-[6px] p-5 sm:p-6 shadow-sm hover:shadow-lg transition-shadow group"
            >
              {/* Connector Line (not on last item) */}
              {index < processSteps.length - 1 && (
                <div className="hidden lg:block absolute top-1/2 -right-3 w-6 h-0.5 bg-[#109387]/30" />
              )}

              {/* Number Badge */}
              <div className="absolute -top-3 sm:-top-4 left-5 bg-[#109387] text-white text-xs sm:text-sm font-bold px-2.5 sm:px-3 py-1 rounded-[6px]">
                {step.number}
              </div>

              {/* Icon */}
              <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-[6px] border-2 border-[#109387] group-hover:bg-[#109387] flex items-center justify-center mb-3 sm:mb-4 transition-all duration-300">
                <step.icon className="w-5 h-5 sm:w-6 sm:h-6 text-[#109387] group-hover:text-white transition-colors duration-300" strokeWidth={1.5} />
              </div>

              {/* Content */}
              <h3 className="text-base sm:text-lg font-bold text-[#012956] mb-1.5 sm:mb-2">
                {step.title}
              </h3>
              <p className="text-xs sm:text-sm text-gray-600 font-semibold leading-relaxed mb-2 sm:mb-3">
                {step.description}
              </p>

              {/* Time Badge */}
              <div className="inline-flex items-center bg-[#f8f9fa] rounded-[6px] px-2 sm:px-2.5 py-1">
                <span className="text-[10px] sm:text-xs font-bold text-gray-500 uppercase tracking-wide">
                  {step.time}
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <a
          href="#kontakt"
          className="mt-10 sm:mt-12 lg:mt-16 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 sm:gap-6 bg-white hover:bg-gray-50 rounded-[6px] p-5 sm:p-6 lg:p-8 transition-colors group cursor-pointer"
        >
          <p className="text-sm sm:text-base lg:text-lg text-gray-600 font-semibold">
            <strong className="text-[#012956]">Schnellstart:</strong> Bei dringendem Bedarf sind wir auch innerhalb von 24 Stunden einsatzbereit.
          </p>
          <span className="inline-flex items-center justify-center gap-2 bg-[#109387] group-hover:bg-[#0d7d72] text-white font-bold px-5 sm:px-6 lg:px-8 py-3 sm:py-3.5 lg:py-4 rounded-[6px] transition-colors text-sm sm:text-base whitespace-nowrap flex-shrink-0">
            Jetzt Schritt 1 starten
            <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 group-hover:translate-x-1 transition-transform" />
          </span>
        </a>

      </div>
    </section>
  )
}
