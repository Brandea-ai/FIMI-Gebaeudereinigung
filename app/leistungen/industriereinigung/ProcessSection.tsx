'use client'

import { Phone, ClipboardList, Users, Sparkles, ArrowRight } from 'lucide-react'
import FadeIn from '@/components/FadeIn'

const steps = [
  {
    nummer: '01',
    icon: Phone,
    titel: 'Anfrage & Erstgespräch',
    beschreibung: 'Sie kontaktieren uns per Telefon oder Formular. Wir besprechen Ihre Situation, Anforderungen und terminieren einen Besichtigungstermin.',
    dauer: 'Gleicher Tag',
    details: [
      'Telefonisch oder per Formular',
      'Kostenfreie Erstberatung',
      'Schnelle Terminvergabe',
    ],
  },
  {
    nummer: '02',
    icon: ClipboardList,
    titel: 'Besichtigung & Angebot',
    beschreibung: 'Wir besichtigen Ihre Räumlichkeiten vor Ort, analysieren den Reinigungsbedarf und erstellen ein transparentes Festpreisangebot.',
    dauer: '1-2 Tage',
    details: [
      'Vor-Ort-Analyse',
      'Fotodokumentation',
      'Festpreisgarantie',
    ],
  },
  {
    nummer: '03',
    icon: Users,
    titel: 'Planung & Vorbereitung',
    beschreibung: 'Wir planen den Einsatz, stimmen den Zeitpunkt mit Ihrer Produktion ab und weisen unser Team ein. Sie erhalten einen festen Ansprechpartner.',
    dauer: '1-3 Tage',
    details: [
      'Abstimmung mit Ihrer Produktion',
      'Fester Ansprechpartner',
      'Sicherheitsunterweisung',
    ],
  },
  {
    nummer: '04',
    icon: Sparkles,
    titel: 'Durchführung & Abnahme',
    beschreibung: 'Unser Team führt die Reinigung durch, dokumentiert alle Arbeiten und Sie nehmen das Ergebnis ab. Erst wenn Sie zufrieden sind, sind wir fertig.',
    dauer: 'Nach Vereinbarung',
    details: [
      'Professionelle Durchführung',
      'Reinigungsprotokoll',
      'Abnahme mit Ihnen',
    ],
  },
]

export default function ProcessSection() {
  return (
    <section id="prozess" className="py-20 lg:py-28 bg-[#f8f9fa]" aria-labelledby="prozess-heading">
      <div className="w-full max-w-[1800px] mx-auto px-6 lg:px-12 xl:px-20">

        {/* Section Header */}
        <FadeIn className="text-center mb-16">
          <p className="text-sm text-[#109387] font-semibold uppercase tracking-wide mb-3">
            So arbeiten wir
          </p>
          <h2
            id="prozess-heading"
            className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#012956] leading-[1.1] mb-6"
          >
            In 4 Schritten zur sauberen Produktion
          </h2>
          <p className="text-lg text-gray-700 font-semibold leading-relaxed max-w-2xl mx-auto">
            Von der ersten Anfrage bis zur Abnahme – ein klarer Prozess,
            der Ihnen Zeit und Nerven spart.
          </p>
        </FadeIn>

        {/* Process Steps */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => {
            const Icon = step.icon
            return (
              <FadeIn key={index} delay={index * 0.1}>
                <article className="relative bg-white rounded-[6px] p-6 lg:p-8 h-full flex flex-col">
                  {/* Step Number */}
                  <div className="absolute -top-4 left-6 bg-[#109387] text-white font-bold text-sm px-3 py-1 rounded-full">
                    Schritt {step.nummer}
                  </div>

                  {/* Icon */}
                  <div className="w-14 h-14 bg-[#012956] rounded-[6px] flex items-center justify-center mb-6 mt-2">
                    <Icon size={28} className="text-white" strokeWidth={1.5} />
                  </div>

                  {/* Content */}
                  <h3 className="text-xl font-bold text-[#012956] mb-3">
                    {step.titel}
                  </h3>

                  <p className="text-gray-700 font-semibold leading-relaxed mb-4 flex-grow">
                    {step.beschreibung}
                  </p>

                  {/* Details */}
                  <ul className="space-y-2 mb-4">
                    {step.details.map((detail, i) => (
                      <li key={i} className="flex items-center gap-2 text-gray-600 font-semibold text-sm">
                        <span className="w-1.5 h-1.5 bg-[#109387] rounded-full" />
                        {detail}
                      </li>
                    ))}
                  </ul>

                  {/* Duration Badge */}
                  <div className="pt-4 border-t border-gray-100">
                    <span className="inline-flex items-center gap-2 text-[#109387] font-bold text-sm">
                      <span className="w-2 h-2 bg-[#109387] rounded-full" />
                      {step.dauer}
                    </span>
                  </div>

                  {/* Arrow to next step (hidden on last) */}
                  {index < steps.length - 1 && (
                    <div className="hidden lg:block absolute -right-4 top-1/2 -translate-y-1/2 z-10">
                      <div className="w-8 h-8 bg-[#f8f9fa] rounded-full flex items-center justify-center">
                        <ArrowRight size={16} className="text-[#109387]" />
                      </div>
                    </div>
                  )}
                </article>
              </FadeIn>
            )
          })}
        </div>

        {/* CTA */}
        <FadeIn className="text-center mt-12">
          <p className="text-gray-700 font-semibold mb-4">
            Bereit für Schritt 1?
          </p>
          <a
            href="#contact-form"
            className="inline-flex items-center gap-3 bg-[#109387] hover:bg-[#0d7d72] text-white font-bold text-lg px-8 py-4 rounded-[6px] transition-all duration-300 group"
          >
            Jetzt Besichtigung vereinbaren
            <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
          </a>
        </FadeIn>

      </div>
    </section>
  )
}
