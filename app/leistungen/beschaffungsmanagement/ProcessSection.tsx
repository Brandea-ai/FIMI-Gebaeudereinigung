'use client'

import { Search, Target, Rocket, BarChart3, GraduationCap } from 'lucide-react'

const steps = [
  {
    number: '01',
    icon: Search,
    title: 'Analyse',
    duration: '1-2 Wochen',
    description: 'Wir analysieren Ihre Einkaufsdaten, Prozesse und Lieferantenstruktur. Die Spend-Analyse zeigt, wo die größten Potenziale liegen.',
    deliverables: ['Spend-Analyse', 'Potenzialeinschätzung', 'Quick Wins identifiziert'],
  },
  {
    number: '02',
    icon: Target,
    title: 'Strategie',
    duration: '1-2 Wochen',
    description: 'Gemeinsam definieren wir Ziele, priorisieren Warengruppen und entwickeln den Maßnahmenplan. Sie entscheiden, was umgesetzt wird.',
    deliverables: ['Maßnahmenplan', 'Priorisierung', 'Ressourcenplanung'],
  },
  {
    number: '03',
    icon: Rocket,
    title: 'Umsetzung',
    duration: '2-6 Monate',
    description: 'Wir setzen die vereinbarten Maßnahmen um: Ausschreibungen, Verhandlungen, Lieferantenwechsel, Prozessoptimierungen.',
    deliverables: ['Neue Verträge', 'Optimierte Prozesse', 'Dokumentation'],
  },
  {
    number: '04',
    icon: BarChart3,
    title: 'Controlling',
    duration: 'Laufend',
    description: 'Transparentes Tracking der erzielten Einsparungen. Regelmäßiges Reporting zeigt den Fortschritt und den ROI.',
    deliverables: ['Savings-Report', 'KPI-Dashboard', 'Abweichungsanalyse'],
  },
  {
    number: '05',
    icon: GraduationCap,
    title: 'Transfer',
    duration: 'Projektende',
    description: 'Wissen bleibt in Ihrem Unternehmen. Wir schulen Ihr Team, übergeben Dokumentation und stellen nachhaltige Verankerung sicher.',
    deliverables: ['Schulungen', 'Dokumentation', 'Übergabe'],
  },
]

export default function ProcessSection() {
  return (
    <section className="py-16 sm:py-20 lg:py-28 bg-white">
      <div className="w-full max-w-[1800px] mx-auto px-4 sm:px-6 md:px-8 lg:px-12 xl:px-20">

        {/* Header */}
        <div className="max-w-3xl mb-10 sm:mb-12 lg:mb-16">
          <span className="text-[#109387] font-bold text-xs sm:text-sm uppercase tracking-wide mb-3 sm:mb-4 block">
            Unser Vorgehen
          </span>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-bold text-[#109387] mb-4 sm:mb-6">
            So arbeiten wir zusammen
          </h2>
          <p className="text-base sm:text-lg lg:text-xl text-gray-600 font-semibold leading-relaxed">
            Strukturiert, transparent, ergebnisorientiert. Von der ersten Analyse bis zum
            nachhaltigen Wissenstransfer begleiten wir Sie durch alle Projektphasen.
          </p>
        </div>

        {/* Process Steps */}
        <div className="space-y-4 sm:space-y-6">
          {steps.map((step, index) => (
            <div
              key={index}
              className="group bg-[#f8f9fa] hover:bg-[#012956] rounded-[6px] p-5 sm:p-6 lg:p-8 transition-all duration-500"
            >
              <div className="flex flex-col lg:flex-row lg:items-start gap-4 sm:gap-6 lg:gap-8">

                {/* Number & Icon */}
                <div className="flex items-center gap-4 lg:flex-col lg:items-center lg:w-24 flex-shrink-0">
                  <span className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#109387]">
                    {step.number}
                  </span>
                  <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-[6px] bg-[#109387]/10 group-hover:bg-[#109387] flex items-center justify-center transition-all duration-500">
                    <step.icon className="w-6 h-6 sm:w-7 sm:h-7 text-[#109387] group-hover:text-white transition-colors duration-500" strokeWidth={1.5} />
                  </div>
                </div>

                {/* Content */}
                <div className="flex-1">
                  <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4 mb-2 sm:mb-3">
                    <h3 className="text-lg sm:text-xl lg:text-2xl font-bold text-[#012956] group-hover:text-white transition-colors duration-500">
                      {step.title}
                    </h3>
                    <span className="inline-flex items-center bg-[#109387]/10 group-hover:bg-[#109387]/30 text-[#109387] group-hover:text-white text-xs sm:text-sm font-bold px-3 py-1 rounded-[6px] transition-all duration-500 w-fit">
                      {step.duration}
                    </span>
                  </div>

                  <p className="text-sm sm:text-base lg:text-lg text-gray-600 group-hover:text-white/80 font-semibold leading-relaxed mb-4 transition-colors duration-500">
                    {step.description}
                  </p>

                  {/* Deliverables */}
                  <div className="flex flex-wrap gap-2">
                    {step.deliverables.map((item, idx) => (
                      <span
                        key={idx}
                        className="inline-flex items-center bg-white group-hover:bg-white/10 text-[#012956] group-hover:text-white text-xs sm:text-sm font-semibold px-3 py-1.5 rounded-[6px] border border-gray-200 group-hover:border-white/20 transition-all duration-500"
                      >
                        {item}
                      </span>
                    ))}
                  </div>
                </div>

              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}
