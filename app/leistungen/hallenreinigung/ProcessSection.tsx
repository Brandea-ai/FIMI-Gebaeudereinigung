'use client'

import { Phone, MapPin, FileText, Sparkles, ArrowRight } from 'lucide-react'

const processSteps = [
  {
    number: '01',
    icon: Phone,
    title: 'Anfrage',
    description: 'Sie rufen an oder füllen das Formular aus. Wir melden uns innerhalb von 2 Stunden – auch bei Notfällen.',
    time: '5 Minuten',
  },
  {
    number: '02',
    icon: MapPin,
    title: 'Besichtigung',
    description: 'Wir kommen kostenfrei zu Ihnen und analysieren Ihre Halle: Größe, Verschmutzung, Zeitfenster.',
    time: '1-2 Tage',
  },
  {
    number: '03',
    icon: FileText,
    title: 'Angebot',
    description: 'Sie erhalten ein transparentes Festpreisangebot. Keine versteckten Kosten, keine Überraschungen.',
    time: '24 Stunden',
  },
  {
    number: '04',
    icon: Sparkles,
    title: 'Reinigung',
    description: 'Unser Team reinigt Ihre Halle – termingerecht, gründlich und dokumentiert. Im laufenden Betrieb oder außerhalb.',
    time: 'Nach Vereinbarung',
  },
]

export default function ProcessSection() {
  return (
    <section id="prozess" className="py-12 sm:py-16 lg:py-28 bg-white">
      <div className="w-full max-w-[1800px] mx-auto px-4 sm:px-6 md:px-8 lg:px-12 xl:px-20">

        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-8 sm:mb-12 lg:mb-16">
          <span className="text-[#109387] font-bold text-xs sm:text-sm uppercase tracking-wide mb-3 sm:mb-4 block">
            Unser Prozess
          </span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-[#012956] leading-tight mb-4 sm:mb-6">
            In 4 Schritten zur sauberen Halle
          </h2>
          <p className="text-base sm:text-lg text-gray-600 font-semibold leading-relaxed">
            Vom ersten Kontakt bis zur gereinigten Halle –
            unkompliziert, transparent und professionell.
          </p>
        </div>

        {/* Process Steps */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 lg:gap-8">
          {processSteps.map((step, index) => (
            <div
              key={index}
              className="relative bg-[#f8f9fa] rounded-[6px] p-5 sm:p-6 lg:p-8 shadow-sm hover:shadow-lg transition-shadow group"
            >
              {/* Connector Line (not on last item) */}
              {index < processSteps.length - 1 && (
                <div className="hidden lg:block absolute top-1/2 -right-4 w-8 h-0.5 bg-[#109387]/30" />
              )}

              {/* Number Badge */}
              <div className="absolute -top-3 sm:-top-4 left-5 sm:left-8 bg-[#109387] text-white text-xs sm:text-sm font-bold px-2.5 sm:px-3 py-1 rounded-[6px]">
                {step.number}
              </div>

              {/* Icon + Content */}
              <div className="flex items-start gap-3 sm:gap-4">
                {/* Icon */}
                <div className="w-10 h-10 sm:w-12 sm:h-12 lg:w-14 lg:h-14 rounded-[6px] border-2 border-[#109387] group-hover:bg-[#109387] flex items-center justify-center flex-shrink-0 transition-all duration-300">
                  <step.icon className="w-5 h-5 sm:w-6 sm:h-6 lg:w-7 lg:h-7 text-[#109387] group-hover:text-white transition-colors duration-300" strokeWidth={1.5} />
                </div>

                {/* Content */}
                <div className="flex-1 min-w-0">
                  <h3 className="text-base sm:text-lg lg:text-xl font-bold text-[#012956] mb-1.5 sm:mb-2">
                    {step.title}
                  </h3>
                  <p className="text-xs sm:text-sm lg:text-base text-gray-600 font-semibold leading-relaxed mb-2 sm:mb-3">
                    {step.description}
                  </p>

                  {/* Time Badge */}
                  <div className="inline-flex items-center bg-white rounded-[6px] px-2 sm:px-2.5 py-1">
                    <span className="text-[10px] sm:text-xs font-bold text-gray-500 uppercase tracking-wide">
                      Dauer: {step.time}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <a
          href="#kontakt"
          className="mt-10 sm:mt-12 lg:mt-16 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 sm:gap-6 bg-[#f8f9fa] hover:bg-gray-100 rounded-[6px] p-5 sm:p-6 lg:p-8 transition-colors group cursor-pointer"
        >
          <p className="text-sm sm:text-base lg:text-lg text-gray-600 font-semibold">
            <strong className="text-[#012956]">Schnellstart möglich:</strong> Bei dringenden Anfragen können wir innerhalb von 48 Stunden mit der Reinigung beginnen.
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
