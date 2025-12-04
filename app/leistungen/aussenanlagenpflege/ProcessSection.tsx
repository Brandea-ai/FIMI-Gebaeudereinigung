'use client'

import { Phone, ClipboardList, FileText, Handshake, Leaf } from 'lucide-react'

const schritte = [
  {
    nummer: '01',
    icon: Phone,
    titel: 'Kontaktaufnahme',
    beschreibung: 'Sie rufen an oder füllen unser Formular aus. Wir melden uns innerhalb von 2 Stunden bei Ihnen.',
    detail: 'Telefon, E-Mail oder Kontaktformular',
  },
  {
    nummer: '02',
    icon: ClipboardList,
    titel: 'Kostenfreie Besichtigung',
    beschreibung: 'Wir kommen zu Ihnen und nehmen Ihre Außenanlage persönlich in Augenschein. Was braucht gepflegt werden? Wie oft? Welche Besonderheiten gibt es?',
    detail: 'Vor Ort, unverbindlich, kostenfrei',
  },
  {
    nummer: '03',
    icon: FileText,
    titel: 'Individuelles Angebot',
    beschreibung: 'Innerhalb von 48 Stunden erhalten Sie ein transparentes Festpreisangebot mit allen Leistungen, Intervallen und Kosten.',
    detail: 'Transparenter Festpreis, keine versteckten Kosten',
  },
  {
    nummer: '04',
    icon: Handshake,
    titel: 'Vertrag & Einweisung',
    beschreibung: 'Nach Ihrer Zusage stellen wir Ihr festes Team zusammen und führen eine Einweisung vor Ort durch. Sie erhalten Ihren persönlichen Ansprechpartner.',
    detail: 'Festes Team, ein Ansprechpartner',
  },
  {
    nummer: '05',
    icon: Leaf,
    titel: 'Regelmäßige Pflege',
    beschreibung: 'Wir kümmern uns um Ihre Außenanlagen nach dem vereinbarten Pflegeplan. Pünktlich, zuverlässig, dokumentiert. Sie müssen an nichts denken.',
    detail: 'Termingerecht, dokumentiert, sorgenfrei',
  },
]

export default function ProcessSection() {
  return (
    <section id="ablauf" className="py-12 sm:py-16 lg:py-28 bg-[#f8f9fa]">
      <div className="w-full max-w-[1800px] mx-auto px-4 sm:px-6 md:px-8 lg:px-12 xl:px-20">

        {/* Section Header */}
        <div className="max-w-4xl mb-10 sm:mb-14 lg:mb-20">
          <p className="text-xs sm:text-sm text-[#109387] font-bold uppercase tracking-wide mb-2 sm:mb-3">
            So einfach geht&apos;s
          </p>
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-[#012956] leading-[1.1] mb-4 sm:mb-6 whitespace-nowrap">
            In 5 Schritten zur gepflegten Außenanlage
          </h2>
          <p className="text-sm sm:text-base lg:text-lg text-gray-700 font-semibold leading-relaxed">
            Von der ersten Anfrage bis zur regelmäßigen Pflege – wir machen es Ihnen einfach.
            Transparenter Ablauf, klare Kommunikation, keine Überraschungen.
          </p>
        </div>

        {/* Process Steps */}
        <div className="relative">
          {/* Connection Line - Desktop */}
          <div className="hidden lg:block absolute top-[60px] left-[60px] right-[60px] h-0.5 bg-[#109387]/20" />

          <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-6 lg:gap-4">
            {schritte.map((schritt, index) => {
              const Icon = schritt.icon
              return (
                <div key={schritt.nummer} className="relative">
                  {/* Step Card - Outlined */}
                  <div className="bg-white rounded-[8px] p-5 sm:p-6 border-2 border-gray-200 hover:border-[#109387] hover:shadow-lg transition-all duration-300 h-full group">
                    {/* Number + Icon */}
                    <div className="flex items-center gap-3 mb-4">
                      <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-[6px] border-2 border-[#109387] group-hover:bg-[#109387] flex items-center justify-center relative z-10 transition-all duration-300">
                        <Icon className="w-6 h-6 sm:w-7 sm:h-7 text-[#109387] group-hover:text-white transition-colors" strokeWidth={1.5} />
                      </div>
                      <span className="text-3xl sm:text-4xl font-bold text-[#109387]">
                        {schritt.nummer}
                      </span>
                    </div>

                    {/* Content */}
                    <h3 className="text-base sm:text-lg font-bold text-[#012956] mb-2">
                      {schritt.titel}
                    </h3>
                    <p className="text-gray-600 font-semibold text-xs sm:text-sm leading-relaxed mb-3">
                      {schritt.beschreibung}
                    </p>
                    <p className="text-[#109387] font-bold text-xs">
                      {schritt.detail}
                    </p>
                  </div>

                  {/* Arrow - Mobile/Tablet */}
                  {index < schritte.length - 1 && (
                    <div className="lg:hidden flex justify-center my-2">
                      <svg className="w-6 h-6 text-[#109387]/40" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                      </svg>
                    </div>
                  )}
                </div>
              )
            })}
          </div>
        </div>

        {/* CTA */}
        <div className="mt-10 sm:mt-12 lg:mt-16 text-center">
          <p className="text-gray-600 font-semibold mb-4 text-sm sm:text-base">
            Bereit für gepflegte Außenanlagen?
          </p>
          <a
            href="#kontakt"
            className="inline-flex items-center gap-2 bg-[#109387] hover:bg-[#0d7d72] text-white font-bold px-6 sm:px-8 py-3 sm:py-4 rounded-[6px] transition-colors text-sm sm:text-base"
          >
            Jetzt Schritt 1 starten
          </a>
        </div>

      </div>
    </section>
  )
}
