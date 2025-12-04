'use client'

import { Droplet, Car, Snowflake, Wind, CircleDot, Droplets } from 'lucide-react'

const verschmutzungen = [
  {
    icon: Droplet,
    name: 'Ölflecken',
    beschreibung: 'Motoröl, Getriebeöl und Bremsflüssigkeit dringen in den Beton ein und verursachen hartnäckige Flecken. Rutschgefahr und optische Beeinträchtigung.',
    loesung: 'Professionelle Entölung mit Spezialchemie, Hochdruckreinigung und Heißwasser.',
  },
  {
    icon: Car,
    name: 'Reifenabrieb',
    beschreibung: 'Schwarze Schlieren durch Rangieren, Einparken und Kurvenfahren. Besonders hartnäckig in Einfahrtsbereichen und an Wendestellen.',
    loesung: 'Scheuersaugmaschinen mit rotierenden Bürsten und speziellen Reinigungsmitteln.',
  },
  {
    icon: Snowflake,
    name: 'Streusalzreste',
    beschreibung: 'Weiße Rückstände und Ausblühungen nach dem Winter. Greift Beton und Beschichtungen an, fördert Korrosion an Metallteilen.',
    loesung: 'Nassreinigung mit neutralisierenden Mitteln, Hochdruck und gründliche Trocknung.',
  },
  {
    icon: Wind,
    name: 'Staub & Feinpartikel',
    beschreibung: 'Bremsstaub, Abgaspartikel und Feinstaub lagern sich auf allen Oberflächen ab. Schlechte Luftqualität und Verschmutzung der Wände.',
    loesung: 'Industriesauger mit HEPA-Filter, Nassreinigung und Entstaubung aller Flächen.',
  },
  {
    icon: CircleDot,
    name: 'Gummiabrieb',
    beschreibung: 'Schwarze Streifen und Spuren von Reifen, besonders bei sportlicher Fahrweise oder schweren Fahrzeugen.',
    loesung: 'Mechanische Reinigung mit Spezialmaschinen und lösungsmittelfreien Reinigern.',
  },
  {
    icon: Droplets,
    name: 'Betriebsflüssigkeiten',
    beschreibung: 'Kühlwasser, Wischwasser, Kraftstoff und andere Flüssigkeiten aus undichten Fahrzeugen. Geruchsbildung und Rutschgefahr.',
    loesung: 'Sofortige Aufnahme mit Bindemittel, anschließende Tiefenreinigung der betroffenen Stellen.',
  },
]

export default function VerschmutzungsartenSection() {
  return (
    <section id="verschmutzungen" className="py-12 sm:py-16 lg:py-28 bg-white">
      <div className="w-full max-w-[1800px] mx-auto px-4 sm:px-6 md:px-8 lg:px-12 xl:px-20">

        {/* Header */}
        <div className="max-w-3xl mb-8 sm:mb-12 lg:mb-16">
          <span className="text-[#109387] font-bold text-xs sm:text-sm uppercase tracking-wide mb-3 sm:mb-4 block">
            Unsere Expertise
          </span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-[#012956] leading-tight mb-4 sm:mb-6">
            Diese Verschmutzungen entfernen wir
          </h2>
          <p className="text-base sm:text-lg text-gray-600 font-semibold leading-relaxed">
            Tiefgaragen sind täglich besonderen Belastungen ausgesetzt. Wir kennen jede Art von
            Verschmutzung und haben die passende Reinigungsmethode – für ein Ergebnis, das überzeugt.
          </p>
        </div>

        {/* Verschmutzungen Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
          {verschmutzungen.map((item, index) => {
            const Icon = item.icon
            return (
              <div
                key={index}
                className="bg-[#f8f9fa] rounded-[6px] p-5 sm:p-6 lg:p-8 group hover:bg-[#012956] transition-all duration-500"
              >
                {/* Icon */}
                <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-[6px] bg-[#109387]/10 group-hover:bg-[#109387] flex items-center justify-center mb-4 transition-all duration-500">
                  <Icon className="w-6 h-6 sm:w-7 sm:h-7 text-[#109387] group-hover:text-white transition-colors duration-500" strokeWidth={1.5} />
                </div>

                {/* Name */}
                <h3 className="text-lg sm:text-xl font-bold text-[#012956] group-hover:text-white mb-2 sm:mb-3 transition-colors duration-500">
                  {item.name}
                </h3>

                {/* Beschreibung */}
                <p className="text-gray-600 group-hover:text-white/80 font-semibold text-sm sm:text-base leading-relaxed mb-4 transition-colors duration-500">
                  {item.beschreibung}
                </p>

                {/* Lösung */}
                <div className="pt-4 border-t border-gray-200 group-hover:border-white/20 transition-colors duration-500">
                  <p className="text-[#109387] group-hover:text-[#109387] font-bold text-xs sm:text-sm uppercase tracking-wide mb-1.5">
                    Unsere Lösung
                  </p>
                  <p className="text-gray-700 group-hover:text-white font-semibold text-sm leading-relaxed transition-colors duration-500">
                    {item.loesung}
                  </p>
                </div>
              </div>
            )
          })}
        </div>

        {/* Bottom CTA */}
        <div className="mt-10 sm:mt-12 lg:mt-16 text-center">
          <p className="text-gray-600 font-semibold mb-4 text-sm sm:text-base">
            Haben Sie eine besondere Verschmutzung? Wir finden die Lösung.
          </p>
          <a
            href="#kontakt"
            className="inline-flex items-center gap-2 bg-[#109387] hover:bg-[#0d7d72] text-white font-bold px-6 py-3 rounded-[6px] transition-colors text-sm sm:text-base"
          >
            Kostenfreie Beratung anfordern
          </a>
        </div>

      </div>
    </section>
  )
}
