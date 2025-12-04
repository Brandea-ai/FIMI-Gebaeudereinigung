'use client'

import { Phone, ClipboardCheck, FileText, Handshake, Rocket } from 'lucide-react'

const steps = [
  {
    number: '01',
    icon: Phone,
    title: 'Erstgespräch',
    description: 'Sie rufen an oder schreiben uns. Wir besprechen Ihre Situation und vereinbaren einen Termin zur Besichtigung.',
    duration: 'Innerhalb von 2 Stunden',
  },
  {
    number: '02',
    icon: ClipboardCheck,
    title: 'Besichtigung vor Ort',
    description: 'Wir schauen uns Ihr Objekt an, erfassen alle Details und verstehen Ihre Anforderungen.',
    duration: 'Kostenlos & unverbindlich',
  },
  {
    number: '03',
    icon: FileText,
    title: 'Individuelles Angebot',
    description: 'Sie erhalten ein transparentes Festpreisangebot – alle Leistungen, keine versteckten Kosten.',
    duration: 'Innerhalb von 48 Stunden',
  },
  {
    number: '04',
    icon: Handshake,
    title: 'Vertrag & Planung',
    description: 'Ein Vertrag für alle Leistungen. Wir planen gemeinsam den Start und stellen Ihr Team zusammen.',
    duration: 'Flexibler Starttermin',
  },
  {
    number: '05',
    icon: Rocket,
    title: 'Los geht\'s',
    description: 'Ihr persönlicher Ansprechpartner übernimmt. Sie lehnen sich zurück – wir kümmern uns um alles.',
    duration: 'Dauerhaft betreut',
  },
]

export default function ProcessSection() {
  return (
    <section className="py-16 sm:py-20 lg:py-28 bg-[#f8f9fa]">
      <div className="w-full max-w-[1800px] mx-auto px-4 sm:px-6 md:px-8 lg:px-12 xl:px-20">

        {/* Section Header */}
        <div className="text-center mb-12 sm:mb-16">
          <span className="text-[#109387] font-bold text-xs sm:text-sm uppercase tracking-wide mb-3 sm:mb-4 block">
            So funktioniert's
          </span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-[#012956] leading-[1.1] mb-4 sm:mb-6">
            In 5 Schritten zu Ihrem Facility Management
          </h2>
          <p className="text-base sm:text-lg text-gray-600 font-semibold max-w-3xl mx-auto">
            Vom ersten Anruf bis zur laufenden Betreuung – transparent, planbar, unkompliziert.
          </p>
        </div>

        {/* Process Steps */}
        <div className="relative">

          {/* Connection Line - Desktop */}
          <div className="hidden lg:block absolute top-24 left-0 right-0 h-1 bg-[#109387]/20" />

          {/* Steps Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-6 sm:gap-8">
            {steps.map((step, index) => (
              <div
                key={index}
                className="relative"
              >
                {/* Card */}
                <div className="bg-white rounded-[6px] p-6 sm:p-8 h-full shadow-sm hover:shadow-lg transition-shadow duration-300">

                  {/* Number & Icon */}
                  <div className="flex items-center gap-4 mb-6">
                    <div className="relative">
                      <div className="w-14 h-14 sm:w-16 sm:h-16 bg-[#012956] rounded-[6px] flex items-center justify-center">
                        <step.icon className="w-6 h-6 sm:w-7 sm:h-7 text-[#109387]" strokeWidth={1.5} />
                      </div>
                      {/* Number Badge */}
                      <div className="absolute -top-2 -right-2 w-7 h-7 bg-[#109387] rounded-full flex items-center justify-center">
                        <span className="text-white font-bold text-xs">{step.number}</span>
                      </div>
                    </div>
                  </div>

                  {/* Content */}
                  <h3 className="text-lg sm:text-xl font-bold text-[#012956] mb-3">
                    {step.title}
                  </h3>
                  <p className="text-gray-600 font-semibold text-sm sm:text-base leading-relaxed mb-4">
                    {step.description}
                  </p>

                  {/* Duration Badge */}
                  <div className="inline-flex items-center bg-[#109387]/10 text-[#109387] font-bold text-xs sm:text-sm px-3 py-1.5 rounded-[6px]">
                    {step.duration}
                  </div>
                </div>

                {/* Arrow - Desktop only, not on last item */}
                {index < steps.length - 1 && (
                  <div className="hidden lg:flex absolute top-20 -right-4 w-8 h-8 bg-[#109387] rounded-full items-center justify-center z-10">
                    <svg className="w-4 h-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="text-center mt-12 sm:mt-16">
          <p className="text-gray-600 font-semibold mb-4">
            Bereit für den ersten Schritt?
          </p>
          <a
            href="#contact-form"
            className="inline-flex items-center gap-2 sm:gap-3 bg-[#109387] hover:bg-[#0d7d72] text-white font-bold text-sm sm:text-base lg:text-lg px-6 sm:px-8 py-3 sm:py-4 rounded-[6px] transition-all duration-300 group"
          >
            Jetzt Erstgespräch vereinbaren
            <Phone className="w-4 h-4 sm:w-5 sm:h-5" />
          </a>
        </div>

      </div>
    </section>
  )
}
