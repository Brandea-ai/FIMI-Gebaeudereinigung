'use client'

import { Phone, MapPin, FileText, Sparkles, ArrowRight } from 'lucide-react'

const processSteps = [
  {
    number: '01',
    icon: Phone,
    title: 'Anfrage',
    description: 'Sie rufen an oder fuellen das Formular aus. Wir melden uns innerhalb von 2 Stunden.',
    time: '5 Minuten',
  },
  {
    number: '02',
    icon: MapPin,
    title: 'Besichtigung',
    description: 'Wir kommen kostenfrei zu Ihnen und schauen uns die Raeumlichkeiten an.',
    time: '1-2 Tage',
  },
  {
    number: '03',
    icon: FileText,
    title: 'Angebot',
    description: 'Sie erhalten ein massgeschneidertes Angebot mit transparenten Festpreisen.',
    time: '24 Stunden',
  },
  {
    number: '04',
    icon: Sparkles,
    title: 'Start',
    description: 'Nach Ihrer Zusage starten wir innerhalb weniger Tage mit der Reinigung.',
    time: '3-5 Tage',
  },
]

export default function ProcessSection() {
  return (
    <section id="prozess" className="py-20 lg:py-28 bg-[#f8f9fa]">
      <div className="w-full max-w-[1800px] mx-auto px-6 lg:px-12 xl:px-20">

        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-[#109387] font-bold text-sm uppercase tracking-wide mb-4 block">
            So starten wir zusammen
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#012956] leading-tight mb-6">
            In 4 Schritten zum sauberen Buero
          </h2>
          <p className="text-lg text-gray-600 font-semibold leading-relaxed">
            Vom ersten Kontakt bis zur regelmaessigen Reinigung -
            unkompliziert und transparent.
          </p>
        </div>

        {/* Process Steps */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {processSteps.map((step, index) => (
            <div
              key={index}
              className="relative bg-white rounded-[6px] p-8 shadow-sm hover:shadow-lg transition-shadow group"
            >
              {/* Connector Line (not on last item) */}
              {index < processSteps.length - 1 && (
                <div className="hidden lg:block absolute top-1/2 -right-4 w-8 h-0.5 bg-[#109387]/30" />
              )}

              {/* Number Badge */}
              <div className="absolute -top-4 left-8 bg-[#109387] text-white text-sm font-bold px-3 py-1 rounded-[6px]">
                {step.number}
              </div>

              {/* Icon */}
              <div className="w-16 h-16 rounded-[6px] bg-[#012956] group-hover:bg-[#109387] flex items-center justify-center mb-6 transition-colors">
                <step.icon size={32} className="text-white" strokeWidth={1.5} />
              </div>

              {/* Content */}
              <h3 className="text-xl font-bold text-[#012956] mb-3">
                {step.title}
              </h3>
              <p className="text-gray-600 font-semibold leading-relaxed mb-4">
                {step.description}
              </p>

              {/* Time Badge */}
              <div className="inline-flex items-center bg-[#f8f9fa] rounded-[6px] px-3 py-1.5">
                <span className="text-xs font-bold text-gray-500 uppercase tracking-wide">
                  Dauer: {step.time}
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="mt-16 text-center">
          <p className="text-lg text-gray-600 font-semibold mb-6">
            <strong className="text-[#012956]">Gesamtdauer:</strong> Durchschnittlich 5-7 Werktage vom Erstkontakt bis zum sauberen Buero.
          </p>
          <a
            href="#kontakt"
            className="inline-flex items-center gap-2 bg-[#109387] hover:bg-[#0d7d72] text-white font-bold px-8 py-4 rounded-[6px] transition-colors group"
          >
            Jetzt Schritt 1 starten
            <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
          </a>
        </div>

      </div>
    </section>
  )
}
