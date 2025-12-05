'use client'

import { Search, Target, Rocket, BarChart3, GraduationCap, ArrowRight } from 'lucide-react'

const processSteps = [
  {
    number: '01',
    icon: Search,
    title: 'Analyse',
    description: 'Spend-Analyse, Lieferantenstruktur, Potenziale identifizieren.',
    time: '1-2 Wochen',
  },
  {
    number: '02',
    icon: Target,
    title: 'Strategie',
    description: 'Ziele definieren, Warengruppen priorisieren, Maßnahmenplan entwickeln.',
    time: '1-2 Wochen',
  },
  {
    number: '03',
    icon: Rocket,
    title: 'Umsetzung',
    description: 'Ausschreibungen, Verhandlungen, Lieferantenwechsel, Prozesse optimieren.',
    time: '2-6 Monate',
  },
  {
    number: '04',
    icon: BarChart3,
    title: 'Controlling',
    description: 'Savings-Tracking, KPIs überwachen, Fortschritt dokumentieren.',
    time: 'Laufend',
  },
  {
    number: '05',
    icon: GraduationCap,
    title: 'Transfer',
    description: 'Schulungen, Dokumentation, nachhaltige Verankerung im Unternehmen.',
    time: 'Projektende',
  },
]

export default function ProcessSection() {
  return (
    <section id="prozess" className="py-12 sm:py-16 lg:py-28 bg-[#f8f9fa]">
      <div className="w-full max-w-[1800px] mx-auto px-4 sm:px-6 md:px-8 lg:px-12 xl:px-20">

        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-8 sm:mb-12 lg:mb-16">
          <span className="text-[#109387] font-bold text-xs sm:text-sm uppercase tracking-wide mb-3 sm:mb-4 block">
            Unser Vorgehen
          </span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-[#012956] leading-tight mb-4 sm:mb-6">
            So arbeiten wir zusammen
          </h2>
          <p className="text-base sm:text-lg text-gray-600 font-semibold leading-relaxed">
            Strukturiert, transparent, ergebnisorientiert – von der Analyse bis zum Wissenstransfer.
          </p>
        </div>

        {/* Process Steps - Compact Grid with Outlined Icons */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-4 sm:gap-5 lg:gap-6">
          {processSteps.map((step, index) => (
            <div
              key={index}
              className="relative bg-white rounded-[6px] p-5 sm:p-6 shadow-sm hover:shadow-lg transition-shadow group"
            >
              {/* Number Badge */}
              <div className="absolute -top-3 sm:-top-4 left-5 sm:left-6 bg-[#109387] text-white text-xs sm:text-sm font-bold px-2.5 sm:px-3 py-1 rounded-[6px]">
                {step.number}
              </div>

              {/* Icon - Outlined Style */}
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

        {/* Bottom CTA - Komplett klickbar */}
        <a
          href="#kontakt"
          className="mt-10 sm:mt-12 lg:mt-16 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 sm:gap-6 bg-white hover:bg-gray-50 rounded-[6px] p-5 sm:p-6 lg:p-8 transition-colors group cursor-pointer"
        >
          <p className="text-sm sm:text-base lg:text-lg text-gray-600 font-semibold">
            <strong className="text-[#012956]">Erste Ergebnisse:</strong> Potenzialanalyse bereits nach 2-3 Wochen. Messbare Einsparungen ab Monat 3.
          </p>
          <span className="inline-flex items-center justify-center gap-2 bg-[#109387] group-hover:bg-[#0d7d72] text-white font-bold px-5 sm:px-6 lg:px-8 py-3 sm:py-3.5 lg:py-4 rounded-[6px] transition-colors text-sm sm:text-base whitespace-nowrap flex-shrink-0">
            Kostenfreie Erstberatung
            <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 group-hover:translate-x-1 transition-transform" />
          </span>
        </a>

      </div>
    </section>
  )
}
