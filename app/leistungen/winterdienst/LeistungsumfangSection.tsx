'use client'

import Image from 'next/image'
import { Check, Snowflake, Truck, FileCheck, Leaf } from 'lucide-react'

const leistungen = [
  {
    kategorie: 'Räumdienst',
    icon: Snowflake,
    items: [
      'Schneeräumung auf Gehwegen und Zufahrten',
      'Parkplatz- und Stellflächenräumung',
      'Räumung von Laderampen und Anlieferzonen',
      'Freihaltung von Notausgängen und Fluchtwegen',
      'Dachrinnen- und Fallrohrkontrolle',
    ],
  },
  {
    kategorie: 'Streudienst',
    icon: Truck,
    items: [
      'Präventives Streuen bei Glättegefahr',
      'Einsatz von Splitt, Sand oder Salz (nach Vorschrift)',
      'Umweltfreundliche Streumittel verfügbar',
      'Streugutentfernung nach der Saison',
      'Nachstreuen bei anhaltendem Frost',
    ],
  },
  {
    kategorie: 'Dokumentation',
    icon: FileCheck,
    items: [
      'Digitale Einsatzprotokolle mit Zeitstempel',
      'Fotodokumentation vor und nach Einsatz',
      'GPS-Tracking der Einsatzfahrzeuge',
      'Monatliche Einsatzberichte',
      'Rechtssichere Nachweise für Versicherung',
    ],
  },
  {
    kategorie: 'Zusatzleistungen',
    icon: Leaf,
    items: [
      'Dachlawinen-Warnschilder aufstellen',
      'Eiszapfenentfernung an Gebäuden',
      'Kontrollfahrten bei Wetterumschwung',
      '24/7-Notfall-Bereitschaft',
      'Betreuung mehrerer Standorte',
    ],
  },
]

export default function LeistungsumfangSection() {
  return (
    <section id="leistungen" className="py-12 sm:py-16 lg:py-28 bg-[#f8f9fa]">
      <div className="w-full max-w-[1800px] mx-auto px-4 sm:px-6 md:px-8 lg:px-12 xl:px-20">

        <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 xl:gap-20 items-start">

          {/* Left: Image + Stats */}
          <div className="lg:sticky lg:top-32">
            <span className="text-sm text-gray-500 font-semibold uppercase tracking-wide mb-3 block">
              Leistungsumfang
            </span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-[#012956] leading-tight mb-4 sm:mb-6">
              Alles aus einer Hand – von Räumung bis Dokumentation
            </h2>
            <p className="text-base sm:text-lg text-gray-600 font-semibold leading-relaxed mb-6 sm:mb-8">
              Unser Winterdienst umfasst weit mehr als Schneeschippen. Wir übernehmen die komplette
              Verkehrssicherung Ihrer Flächen – inklusive rechtssicherer Dokumentation und
              professioneller Streumittelwahl.
            </p>

            {/* Image */}
            <div className="relative h-64 sm:h-80 lg:h-96 rounded-[8px] overflow-hidden mb-6 sm:mb-8">
              <Image
                src="https://images.unsplash.com/photo-1478719059408-592965723cbc?q=80&w=1200&auto=format&fit=crop"
                alt="Professionelle Schneeräumung mit Räumfahrzeug"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#012956]/60 to-transparent" />
              <div className="absolute bottom-4 sm:bottom-6 left-4 sm:left-6 right-4 sm:right-6">
                <p className="text-white font-bold text-sm sm:text-base lg:text-lg">
                  Moderne Räumtechnik für jede Flächengröße
                </p>
              </div>
            </div>

            {/* Quick Stats */}
            <div className="grid grid-cols-3 gap-3 sm:gap-4">
              <div className="bg-white rounded-[6px] p-3 sm:p-4 text-center">
                <div className="text-xl sm:text-2xl lg:text-3xl font-bold text-[#109387]">5:30</div>
                <div className="text-gray-500 font-semibold text-xs sm:text-sm">Uhr Räumbeginn</div>
              </div>
              <div className="bg-white rounded-[6px] p-3 sm:p-4 text-center">
                <div className="text-xl sm:text-2xl lg:text-3xl font-bold text-[#109387]">24/7</div>
                <div className="text-gray-500 font-semibold text-xs sm:text-sm">Bereitschaft</div>
              </div>
              <div className="bg-white rounded-[6px] p-3 sm:p-4 text-center">
                <div className="text-xl sm:text-2xl lg:text-3xl font-bold text-[#109387]">100%</div>
                <div className="text-gray-500 font-semibold text-xs sm:text-sm">Dokumentiert</div>
              </div>
            </div>
          </div>

          {/* Right: Leistungskategorien */}
          <div className="space-y-4 sm:space-y-6">
            {leistungen.map((kategorie, index) => (
              <div
                key={index}
                className="bg-white rounded-[8px] p-5 sm:p-6 lg:p-8 shadow-sm hover:shadow-lg transition-shadow duration-300"
              >
                {/* Kategorie Header */}
                <div className="flex items-center gap-3 sm:gap-4 mb-4 sm:mb-5">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 bg-[#109387]/10 rounded-[6px] flex items-center justify-center">
                    <kategorie.icon className="w-5 h-5 sm:w-6 sm:h-6 text-[#109387]" strokeWidth={1.5} />
                  </div>
                  <h3 className="text-lg sm:text-xl lg:text-2xl font-bold text-[#012956]">
                    {kategorie.kategorie}
                  </h3>
                </div>

                {/* Items */}
                <ul className="space-y-2 sm:space-y-3">
                  {kategorie.items.map((item, itemIndex) => (
                    <li key={itemIndex} className="flex items-start gap-2 sm:gap-3">
                      <Check className="w-4 h-4 sm:w-5 sm:h-5 text-[#109387] flex-shrink-0 mt-0.5" />
                      <span className="text-gray-600 font-semibold text-sm sm:text-base">
                        {item}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

        </div>

      </div>
    </section>
  )
}
