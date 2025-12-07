'use client'

import { Briefcase, ShoppingCart, Truck, Landmark } from 'lucide-react'

const personas = [
  {
    icon: Briefcase,
    title: 'Geschäftsführung',
    subtitle: 'CEO, CFO, Inhaber',
    situation: 'Sie sehen in den Zahlen: Die Einkaufskosten steigen, die Margen sinken. Sie wissen, dass Potenzial da ist – aber wer soll es heben?',
    benefit: 'Wir liefern messbare Einsparungen, die direkt im EBIT ankommen. Ohne Ihr Management-Team zusätzlich zu belasten.',
  },
  {
    icon: ShoppingCart,
    title: 'Einkaufsleitung',
    subtitle: 'CPO, Einkaufsleiter',
    situation: 'Ihr Team ist am Limit. Strategische Projekte bleiben liegen. Rahmenverträge müssten neu verhandelt werden, aber wann?',
    benefit: 'Wir übernehmen definierte Projekte oder entlasten operativ. Ihr Team kann sich auf das Wesentliche konzentrieren.',
  },
  {
    icon: Truck,
    title: 'Supply Chain Management',
    subtitle: 'SCM-Leiter, Logistik',
    situation: 'Lieferengpässe, Qualitätsprobleme, Single-Source-Risiken. Die Lieferkette muss stabiler und gleichzeitig kostengünstiger werden.',
    benefit: 'Wir bauen resiliente Lieferantenstrukturen auf. Mit Alternativen, Risikobewertung und aktivem Lieferantenmanagement.',
  },
  {
    icon: Landmark,
    title: 'Öffentliche Auftraggeber',
    subtitle: 'Kommunen, Stadtwerke',
    situation: 'Eine Ausschreibung steht an. Das Vergaberecht ist komplex. Formfehler können teuer werden. Und die Zeit drängt.',
    benefit: 'Wir begleiten Ihr Vergabeverfahren von A bis Z. Rechtssicher, professionell dokumentiert, effizient durchgeführt.',
  },
]

export default function ZielgruppenSection() {
  return (
    <section className="py-16 sm:py-20 lg:py-28 bg-[#f8f9fa]">
      <div className="w-full max-w-[1800px] mx-auto px-4 sm:px-6 md:px-8 lg:px-12 xl:px-20">

        {/* Header */}
        <div className="max-w-3xl mb-10 sm:mb-12 lg:mb-16">
          <span className="text-[#109387] font-bold text-xs sm:text-sm uppercase tracking-wide mb-3 sm:mb-4 block">
            Für wen ist das?
          </span>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-bold text-[#109387] mb-4 sm:mb-6">
            Beschaffungsmanagement für Entscheider
          </h2>
          <p className="text-base sm:text-lg lg:text-xl text-gray-600 font-semibold leading-relaxed">
            Egal ob Sie die Gesamtkosten im Blick haben, den operativen Einkauf verantworten
            oder öffentliche Beschaffungen durchführen – wir haben die passende Lösung.
          </p>
        </div>

        {/* Personas Grid */}
        <div className="grid md:grid-cols-2 gap-4 sm:gap-6 lg:gap-8">
          {personas.map((persona, index) => (
            <div
              key={index}
              className="group bg-white rounded-[6px] p-5 sm:p-6 lg:p-8 border-2 border-gray-100 hover:border-[#109387] transition-all duration-300 shadow-sm hover:shadow-lg"
            >
              <div className="flex items-start gap-4 sm:gap-5">
                {/* Icon - Outlined Style */}
                <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-[6px] border-2 border-[#109387] group-hover:bg-[#109387] flex items-center justify-center flex-shrink-0 transition-all duration-300">
                  <persona.icon className="w-6 h-6 sm:w-7 sm:h-7 text-[#109387] group-hover:text-white transition-colors duration-300" strokeWidth={1.5} aria-hidden="true" />
                </div>

                <div className="flex-1">
                  {/* Title & Subtitle */}
                  <h3 className="text-lg sm:text-xl lg:text-2xl font-bold text-[#012956] mb-1">
                    {persona.title}
                  </h3>
                  <p className="text-sm text-[#109387] font-semibold mb-3 sm:mb-4">
                    {persona.subtitle}
                  </p>

                  {/* Situation */}
                  <div className="mb-3 sm:mb-4">
                    <p className="text-xs sm:text-sm font-bold text-gray-500 uppercase tracking-wide mb-1">
                      Ihre Situation
                    </p>
                    <p className="text-sm sm:text-base text-gray-600 font-semibold leading-relaxed">
                      {persona.situation}
                    </p>
                  </div>

                  {/* Benefit */}
                  <div className="bg-[#f8f9fa] rounded-[6px] p-3 sm:p-4 border-l-4 border-[#109387]">
                    <p className="text-xs sm:text-sm font-bold text-[#109387] uppercase tracking-wide mb-1">
                      Unser Beitrag
                    </p>
                    <p className="text-sm sm:text-base text-gray-700 font-semibold leading-relaxed">
                      {persona.benefit}
                    </p>
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
