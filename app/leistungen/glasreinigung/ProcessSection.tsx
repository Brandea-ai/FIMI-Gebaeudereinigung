'use client'

import { MessageSquare, ClipboardCheck, FileText, Sparkles } from 'lucide-react'

const schritte = [
  {
    nummer: '01',
    icon: MessageSquare,
    titel: 'Anfrage',
    beschreibung: 'Sie kontaktieren uns per Formular, Telefon oder E-Mail. Wir melden uns innerhalb von 2 Stunden.',
    details: ['Online-Formular', 'Telefon: 0871 430 334 60', 'E-Mail: info@fimi-service.de'],
  },
  {
    nummer: '02',
    icon: ClipboardCheck,
    titel: 'Besichtigung',
    beschreibung: 'Wir kommen kostenfrei zu Ihnen und erfassen alle Glasflächen, Zugangsmöglichkeiten und Besonderheiten.',
    details: ['Kostenfrei & unverbindlich', 'Aufmaß vor Ort', 'Technik-Empfehlung'],
  },
  {
    nummer: '03',
    icon: FileText,
    titel: 'Angebot',
    beschreibung: 'Sie erhalten ein transparentes Festpreisangebot – inklusive aller Kosten für Technik und Personal.',
    details: ['Innerhalb von 48 Stunden', 'Transparente Festpreise', 'Flexible Intervalle'],
  },
  {
    nummer: '04',
    icon: Sparkles,
    titel: 'Ausführung',
    beschreibung: 'Ihr festes Reinigungsteam übernimmt. Sie genießen streifenfreie Glasflächen – pünktlich und zuverlässig.',
    details: ['Fester Ansprechpartner', 'Geschulte Fachkräfte', 'Qualitätskontrolle'],
  },
]

export default function ProcessSection() {
  return (
    <section id="prozess" className="py-12 sm:py-16 lg:py-28 bg-white">
      <div className="w-full max-w-[1800px] mx-auto px-4 sm:px-6 md:px-8 lg:px-12 xl:px-20">

        {/* Header */}
        <div className="max-w-3xl mb-8 sm:mb-12 lg:mb-16">
          <span className="text-[#109387] font-bold text-xs sm:text-sm uppercase tracking-wide mb-3 sm:mb-4 block">
            So einfach geht&apos;s
          </span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-[#012956] leading-tight mb-4 sm:mb-6">
            In 4 Schritten zu strahlenden Glasflächen
          </h2>
          <p className="text-base sm:text-lg text-gray-600 font-semibold leading-relaxed">
            Von der ersten Anfrage bis zum regelmäßigen Glasreinigungsservice – wir machen es Ihnen so einfach wie möglich.
          </p>
        </div>

        {/* Process Steps */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 lg:gap-8">
          {schritte.map((schritt, index) => (
            <div
              key={index}
              className="group"
            >
              <div className="bg-[#f8f9fa] rounded-[6px] p-5 sm:p-6 lg:p-8 h-full hover:shadow-lg transition-shadow">
                {/* Nummer + Icon */}
                <div className="flex items-start justify-between mb-4 sm:mb-6">
                  <span className="text-4xl sm:text-5xl lg:text-6xl font-bold text-[#109387]/20">
                    {schritt.nummer}
                  </span>
                  <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-[6px] border-2 border-[#109387] group-hover:bg-[#109387] flex items-center justify-center transition-all duration-300">
                    <schritt.icon className="w-5 h-5 sm:w-6 sm:h-6 text-[#109387] group-hover:text-white transition-colors duration-300" strokeWidth={1.5} />
                  </div>
                </div>

                {/* Content */}
                <h3 className="text-lg sm:text-xl font-bold text-[#012956] mb-2 sm:mb-3">
                  {schritt.titel}
                </h3>
                <p className="text-gray-600 font-semibold text-sm sm:text-base leading-relaxed mb-4">
                  {schritt.beschreibung}
                </p>

                {/* Details */}
                <ul className="space-y-1.5 sm:space-y-2">
                  {schritt.details.map((detail, idx) => (
                    <li key={idx} className="text-gray-500 font-semibold text-xs sm:text-sm flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#109387]" />
                      {detail}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-10 sm:mt-12 lg:mt-16 text-center">
          <p className="text-gray-600 font-semibold mb-4 text-sm sm:text-base">
            Bereit für streifenfreie Glasflächen?
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
