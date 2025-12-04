'use client'

import { Phone, FileText, Users, Rocket, ThumbsUp, ArrowRight } from 'lucide-react'

const schritte = [
  {
    nummer: '01',
    icon: Phone,
    title: 'Anfrage',
    subtitle: 'Ihr Bedarf',
    beschreibung: 'Sie kontaktieren uns per Telefon, E-Mail oder Formular. Schildern Sie uns Ihren Personalbedarf – ob kurzfristig oder geplant.',
    zeitrahmen: 'Sofort',
  },
  {
    nummer: '02',
    icon: FileText,
    title: 'Bedarfsanalyse',
    subtitle: 'Wir verstehen',
    beschreibung: 'Wir klären alle Details: Einsatzort, Zeitraum, Anforderungen, Qualifikationen. Auf Wunsch besuchen wir Sie vor Ort.',
    zeitrahmen: 'Innerhalb 2h',
  },
  {
    nummer: '03',
    icon: Users,
    title: 'Personalauswahl',
    subtitle: 'Passende Mitarbeiter',
    beschreibung: 'Wir wählen die passenden Mitarbeiter aus unserem Pool. Geschult, zuverlässig und auf Ihre Anforderungen abgestimmt.',
    zeitrahmen: '2-24h',
  },
  {
    nummer: '04',
    icon: Rocket,
    title: 'Einsatzstart',
    subtitle: 'Wir sind da',
    beschreibung: 'Unser Personal beginnt pünktlich mit der Arbeit. Einweisung vor Ort, professionelles Auftreten, sofort einsatzbereit.',
    zeitrahmen: 'Nach Vereinbarung',
  },
  {
    nummer: '05',
    icon: ThumbsUp,
    title: 'Qualitätssicherung',
    subtitle: 'Ihr Feedback zählt',
    beschreibung: 'Regelmäßige Rücksprache, schnelle Reaktion bei Anpassungswünschen. Ihre Zufriedenheit ist unser Maßstab.',
    zeitrahmen: 'Laufend',
  },
]

export default function ProcessSection() {
  return (
    <section id="ablauf" className="py-12 sm:py-16 lg:py-28 bg-[#f8f9fa]">
      <div className="w-full max-w-[1800px] mx-auto px-4 sm:px-6 md:px-8 lg:px-12 xl:px-20">

        {/* Section Header */}
        <div className="max-w-3xl mb-10 sm:mb-12 lg:mb-16">
          <span className="text-[#109387] font-bold text-xs sm:text-sm uppercase tracking-wide mb-3 sm:mb-4 block">
            So funktioniert es
          </span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-[#012956] leading-tight mb-4 sm:mb-6">
            In 5 Schritten zu Ihrem Personal
          </h2>
          <p className="text-base sm:text-lg text-gray-600 font-semibold leading-relaxed">
            Von der ersten Anfrage bis zum Einsatzstart – unser Prozess ist transparent,
            schnell und auf Ihre Bedürfnisse ausgerichtet.
          </p>
        </div>

        {/* Process Steps */}
        <div className="relative">
          {/* Connection Line - nur Desktop */}
          <div className="hidden lg:block absolute top-[60px] left-[10%] right-[10%] h-0.5 bg-[#109387]/20" />

          {/* Steps Grid */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-6 lg:gap-4">
            {schritte.map((schritt, index) => {
              const Icon = schritt.icon
              return (
                <div
                  key={index}
                  className="relative bg-white rounded-[8px] p-5 sm:p-6 shadow-sm hover:shadow-lg transition-shadow"
                >
                  {/* Step Number Badge */}
                  <div className="absolute -top-3 left-5 bg-[#109387] text-white font-bold text-xs px-3 py-1 rounded-[4px]">
                    Schritt {schritt.nummer}
                  </div>

                  {/* Icon */}
                  <div className="w-14 h-14 bg-[#109387]/10 rounded-[8px] flex items-center justify-center mb-4 mt-2">
                    <Icon className="w-7 h-7 text-[#109387]" strokeWidth={1.5} />
                  </div>

                  {/* Content */}
                  <h3 className="text-lg sm:text-xl font-bold text-[#012956] mb-1">
                    {schritt.title}
                  </h3>
                  <p className="text-[#109387] font-semibold text-sm mb-3">
                    {schritt.subtitle}
                  </p>
                  <p className="text-gray-600 font-semibold text-sm leading-relaxed mb-4">
                    {schritt.beschreibung}
                  </p>

                  {/* Zeitrahmen */}
                  <div className="pt-3 border-t border-gray-100">
                    <span className="text-xs text-gray-500 font-semibold uppercase tracking-wide">
                      Zeitrahmen:
                    </span>
                    <span className="text-sm text-[#012956] font-bold ml-2">
                      {schritt.zeitrahmen}
                    </span>
                  </div>

                  {/* Arrow - nur zwischen Steps auf Desktop */}
                  {index < schritte.length - 1 && (
                    <div className="hidden lg:flex absolute -right-4 top-1/2 -translate-y-1/2 w-8 h-8 bg-[#109387] rounded-full items-center justify-center z-10">
                      <ArrowRight className="w-4 h-4 text-white" />
                    </div>
                  )}
                </div>
              )
            })}
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="mt-12 sm:mt-16 bg-[#012956] rounded-[8px] p-6 sm:p-8 lg:p-10 flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6">
          <div>
            <h3 className="text-xl sm:text-2xl font-bold text-white mb-2">
              Bereit loszulegen?
            </h3>
            <p className="text-white/80 font-semibold">
              Kontaktieren Sie uns jetzt – wir melden uns innerhalb von 2 Stunden.
            </p>
          </div>
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
            <a
              href="#kontakt"
              className="inline-flex items-center justify-center gap-2 bg-[#109387] hover:bg-[#0d7d72] text-white font-bold text-base px-6 py-3 rounded-[6px] transition-all duration-300 group whitespace-nowrap"
            >
              Personal anfragen
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </a>
            <a
              href="tel:+4987143033460"
              className="inline-flex items-center justify-center gap-2 bg-white hover:bg-gray-100 text-[#012956] font-bold text-base px-6 py-3 rounded-[6px] transition-all duration-300 whitespace-nowrap"
            >
              0871 430 334 60
            </a>
          </div>
        </div>

      </div>
    </section>
  )
}
