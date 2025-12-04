'use client'

import { Phone, MapPin, FileText, Sparkles, Handshake, ArrowRight } from 'lucide-react'

const processSteps = [
  {
    number: '01',
    icon: Phone,
    title: 'Notfall-Anruf',
    description: 'Sie rufen an – 24/7 erreichbar. Wir erfassen die Situation und planen den Einsatz.',
    time: 'Sofort',
  },
  {
    number: '02',
    icon: MapPin,
    title: 'Vor-Ort-Begutachtung',
    description: 'Wir kommen zu Ihnen, bewerten den Schaden und besprechen das Vorgehen.',
    time: '2-4 Stunden',
  },
  {
    number: '03',
    icon: FileText,
    title: 'Angebot & Freigabe',
    description: 'Sie erhalten ein verbindliches Festpreisangebot. Nach Ihrer Freigabe starten wir.',
    time: 'Vor Ort',
  },
  {
    number: '04',
    icon: Sparkles,
    title: 'Reinigung',
    description: 'Unser Spezialteam führt die Sonderreinigung durch – professionell und gründlich.',
    time: 'Je nach Umfang',
  },
  {
    number: '05',
    icon: Handshake,
    title: 'Abnahme & Doku',
    description: 'Gemeinsame Abnahme, vollständige Dokumentation für Sie und Ihre Versicherung.',
    time: 'Nach Abschluss',
  },
]

export default function ProcessSection() {
  return (
    <section id="prozess" className="py-12 sm:py-16 lg:py-28 bg-[#f8f9fa]">
      <div className="w-full max-w-[1800px] mx-auto px-4 sm:px-6 md:px-8 lg:px-12 xl:px-20">

        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-8 sm:mb-12 lg:mb-16">
          <span className="text-[#109387] font-bold text-xs sm:text-sm uppercase tracking-wide mb-3 sm:mb-4 block">
            Unser Prozess
          </span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-[#012956] leading-tight mb-4 sm:mb-6">
            In 5 Schritten zum sauberen Ergebnis
          </h2>
          <p className="text-base sm:text-lg text-gray-600 font-semibold leading-relaxed">
            Vom ersten Anruf bis zur abgeschlossenen Reinigung – wir führen Sie
            durch jeden Schritt. Transparent, professionell und stressfrei.
          </p>
        </div>

        {/* Process Steps - Outlined Icons */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-4 sm:gap-6">
          {processSteps.map((step, index) => (
            <div
              key={index}
              className="relative bg-white rounded-[6px] p-5 sm:p-6 shadow-sm hover:shadow-lg transition-shadow group"
            >
              {/* Connector Line (not on last item) - Desktop only */}
              {index < processSteps.length - 1 && (
                <div className="hidden lg:block absolute top-1/2 -right-3 w-6 h-0.5 bg-[#109387]/30" />
              )}

              {/* Number Badge */}
              <div className="absolute -top-3 left-5 bg-[#109387] text-white text-xs font-bold px-2.5 py-1 rounded-[6px]">
                {step.number}
              </div>

              {/* Icon - Outlined Style */}
              <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-[6px] border-2 border-[#109387] group-hover:bg-[#109387] flex items-center justify-center mb-4 transition-all duration-300">
                <step.icon className="w-6 h-6 sm:w-7 sm:h-7 text-[#109387] group-hover:text-white transition-colors duration-300" strokeWidth={1.5} />
              </div>

              {/* Content */}
              <h3 className="text-base sm:text-lg font-bold text-[#012956] mb-2">
                {step.title}
              </h3>
              <p className="text-gray-600 font-semibold text-xs sm:text-sm leading-relaxed mb-3">
                {step.description}
              </p>

              {/* Time Badge */}
              <div className="inline-flex items-center bg-[#f8f9fa] rounded-[6px] px-2.5 py-1">
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
          <div>
            <p className="text-sm sm:text-base lg:text-lg text-gray-700 font-semibold">
              <strong className="text-[#012956]">Notfall?</strong> Rufen Sie jetzt an – wir sind sofort für Sie da.
            </p>
            <p className="text-gray-500 font-semibold text-sm mt-1">
              24h erreichbar, 7 Tage die Woche
            </p>
          </div>
          <span className="inline-flex items-center justify-center gap-2 bg-[#109387] group-hover:bg-[#0d7d72] text-white font-bold px-5 sm:px-8 py-3 sm:py-4 rounded-[6px] transition-colors text-sm sm:text-base whitespace-nowrap flex-shrink-0">
            Jetzt Schritt 1 starten
            <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 group-hover:translate-x-1 transition-transform" />
          </span>
        </a>

      </div>
    </section>
  )
}
