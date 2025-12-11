'use client'

import { MapPin, ClipboardList, FileSignature, Snowflake, FileCheck } from 'lucide-react'

const schritte = [
  {
    nummer: '01',
    icon: MapPin,
    title: 'Kostenfreie Besichtigung',
    description: 'Wir kommen zu Ihnen und analysieren Ihre Flächen. Welche Wege müssen geräumt werden? Wo sind kritische Stellen? Welche Räumzeiten benötigen Sie?',
    highlight: 'Innerhalb von 48h',
  },
  {
    nummer: '02',
    icon: ClipboardList,
    title: 'Individueller Räumplan',
    description: 'Basierend auf der Besichtigung erstellen wir einen detaillierten Räum- und Streuplan. Mit Prioritäten, Zeiten und dem passenden Streumittel für Ihre Flächen.',
    highlight: 'Maßgeschneidert',
  },
  {
    nummer: '03',
    icon: FileSignature,
    title: 'Transparentes Angebot',
    description: 'Sie erhalten ein Festpreisangebot ohne versteckte Kosten. Wahl zwischen Saisonpauschale oder Einsatzabrechnung. Haftungsübernahme inklusive.',
    highlight: 'Festpreis-Garantie',
  },
  {
    nummer: '04',
    icon: Snowflake,
    title: '24/7 Einsatzbereitschaft',
    description: 'Ab November sind wir rund um die Uhr einsatzbereit. Bei Schneefall oder Glätte sind wir innerhalb von 2 Stunden vor Ort. Auch nachts und am Wochenende.',
    highlight: 'Nov – März',
  },
  {
    nummer: '05',
    icon: FileCheck,
    title: 'Dokumentation & Berichte',
    description: 'Nach jedem Einsatz erhalten Sie digitale Protokolle mit Zeitstempel und Fotos. Monatliche Berichte geben Überblick über alle durchgeführten Maßnahmen.',
    highlight: 'Rechtssicher',
  },
]

export default function ProcessSection() {
  return (
    <section id="ablauf" className="py-12 sm:py-16 lg:py-28 bg-[#f8f9fa]">
      <div className="w-full max-w-[1800px] mx-auto px-4 sm:px-6 md:px-8 lg:px-12 xl:px-20">

        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-12 lg:mb-16">
          <span className="text-sm text-gray-500 font-semibold uppercase tracking-wide mb-3 block">
            So funktioniert's
          </span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-[#012956] leading-tight mb-4 sm:mb-6">
            In 5 Schritten zum sorgenfreien Winter
          </h2>
          <p className="text-base sm:text-lg text-gray-600 font-semibold leading-relaxed">
            Von der ersten Anfrage bis zum geräumten Parkplatz – so einfach ist die
            Zusammenarbeit mit FIMI. Transparent, professionell, zuverlässig.
          </p>
        </div>

        {/* Process Steps */}
        <div className="relative">
          {/* Connection Line - Desktop */}
          <div className="hidden lg:block absolute top-[60px] left-[10%] right-[10%] h-0.5 bg-[#109387]/20" />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6 lg:gap-4 xl:gap-6">
            {schritte.map((schritt, index) => (
              <div
                key={index}
                className="relative bg-white rounded-[8px] p-5 sm:p-6 shadow-sm hover:shadow-lg transition-shadow duration-300 group"
              >
                {/* Number Badge */}
                <div className="absolute -top-3 sm:-top-4 left-4 sm:left-5">
                  <div className="w-8 h-8 sm:w-10 sm:h-10 bg-[#109387] rounded-full flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform">
                    <span className="text-white font-bold text-xs sm:text-sm">{schritt.nummer}</span>
                  </div>
                </div>

                {/* Icon */}
                <div className="w-12 h-12 sm:w-14 sm:h-14 bg-[#f8f9fa] group-hover:bg-[#109387]/10 rounded-[6px] flex items-center justify-center mb-4 sm:mb-5 mt-2 sm:mt-3 transition-colors">
                  <schritt.icon className="w-6 h-6 sm:w-7 sm:h-7 text-[#109387]" strokeWidth={1.5} />
                </div>

                {/* Content */}
                <h3 className="text-base sm:text-lg lg:text-xl font-bold text-[#012956] mb-2 sm:mb-3">
                  {schritt.title}
                </h3>
                <p className="text-gray-600 font-semibold text-xs sm:text-sm leading-relaxed mb-3 sm:mb-4">
                  {schritt.description}
                </p>

                {/* Highlight Badge */}
                <span className="inline-flex items-center bg-[#109387]/10 text-[#109387] font-bold text-[10px] sm:text-xs px-2 sm:px-3 py-1 sm:py-1.5 rounded-[4px]">
                  {schritt.highlight}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom Info */}
        <div className="mt-10 sm:mt-12 lg:mt-16 bg-[#012956] rounded-[8px] p-6 sm:p-8 lg:p-10">
          <div className="grid md:grid-cols-2 gap-6 sm:gap-8 items-center">
            <div>
              <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold text-white mb-3 sm:mb-4">
                Noch Fragen zum Ablauf?
              </h3>
              <p className="text-white/80 font-semibold text-sm sm:text-base leading-relaxed">
                Jedes Objekt ist anders. Deshalb nehmen wir uns Zeit für eine persönliche Beratung.
                Rufen Sie uns an oder schreiben Sie uns – wir melden uns innerhalb von 2 Stunden.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 md:justify-end">
              <a
                href="tel:+4987120669360"
                className="inline-flex items-center justify-center gap-2 bg-white text-[#012956] font-bold text-sm sm:text-base px-5 sm:px-6 py-3 sm:py-3.5 rounded-[6px] hover:bg-gray-100 transition-colors"
              >
                0871 2066936-0
              </a>
              <a
                href="#kontakt"
                className="inline-flex items-center justify-center gap-2 bg-[#109387] hover:bg-[#0d7d72] text-white font-bold text-sm sm:text-base px-5 sm:px-6 py-3 sm:py-3.5 rounded-[6px] transition-colors"
              >
                Anfrage senden
              </a>
            </div>
          </div>
        </div>

      </div>
    </section>
  )
}
