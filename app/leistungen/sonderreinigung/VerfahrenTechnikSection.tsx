'use client'

import Image from 'next/image'
import { Wind, Snowflake, Droplets, Gauge, ArrowRight } from 'lucide-react'

const verfahren = [
  {
    icon: Wind,
    titel: 'Ozonbehandlung',
    beschreibung: 'Ozon neutralisiert Gerüche biologisch und dauerhaft. Ideal nach Brand, Todesfall oder bei hartnäckigen Gerüchen wie Nikotin oder Tiergeruch.',
    einsatz: 'Geruchsbeseitigung',
    vorteil: 'Ohne Chemie, ohne Rückstände',
  },
  {
    icon: Snowflake,
    titel: 'Trockeneisstrahlen',
    beschreibung: 'Gefrorenes CO2 entfernt Ruß, Farbe und Verschmutzungen schonend von empfindlichen Oberflächen. Das Eis sublimiert – kein Wasser, kein Abfall.',
    einsatz: 'Rußentfernung, Fassaden',
    vorteil: 'Schonend, umweltfreundlich',
  },
  {
    icon: Gauge,
    titel: 'Hochdruckreinigung',
    beschreibung: 'Mit bis zu 500 bar entfernen wir hartnäckigste Verschmutzungen von Beton, Asphalt und robusten Oberflächen. Ideal für Industrieflächen.',
    einsatz: 'Böden, Fassaden, Hallen',
    vorteil: 'Kraftvoll, effizient',
  },
  {
    icon: Droplets,
    titel: 'Technische Trocknung',
    beschreibung: 'Professionelle Entfeuchtungsgeräte und Turbinen trocknen durchfeuchtete Räume, Estriche und Wände schnell und kontrolliert.',
    einsatz: 'Nach Wasserschaden',
    vorteil: 'Verhindert Schimmel',
  },
]

export default function VerfahrenTechnikSection() {
  return (
    <section id="verfahren" className="py-12 sm:py-16 lg:py-28 bg-white">
      <div className="w-full max-w-[1800px] mx-auto px-4 sm:px-6 md:px-8 lg:px-12 xl:px-20">

        {/* Header */}
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-center mb-10 sm:mb-14 lg:mb-20">
          <div>
            <p className="text-xs sm:text-sm text-[#109387] font-bold uppercase tracking-wide mb-2 sm:mb-3">
              Unsere Technologie
            </p>
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-[#012956] leading-[1.1] mb-4 sm:mb-6">
              Professionelle Verfahren für perfekte Ergebnisse
            </h2>
            <p className="text-sm sm:text-base lg:text-lg text-gray-700 font-semibold leading-relaxed">
              Sonderreinigung erfordert mehr als Wasser und Seife. Wir setzen modernste
              Verfahren und Spezialgeräte ein, um auch die hartnäckigsten Probleme zu lösen –
              schonend, effektiv und nachhaltig.
            </p>
          </div>

          {/* Image */}
          <div className="relative h-[250px] sm:h-[300px] lg:h-[350px] rounded-[6px] overflow-hidden">
            <Image
              src="https://images.unsplash.com/photo-1581092160607-ee22621dd758?q=80&w=1600&auto=format&fit=crop"
              alt="Professionelle Reinigungsausrüstung für Sonderreinigung"
              fill
              className="object-cover"
            />
          </div>
        </div>

        {/* Verfahren Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          {verfahren.map((item, index) => {
            const Icon = item.icon
            return (
              <div
                key={index}
                className="group bg-[#f8f9fa] p-5 sm:p-6 lg:p-8 rounded-[6px] hover:bg-[#012956] transition-all duration-300"
              >
                {/* Icon - Outlined Style */}
                <div className="w-12 h-12 sm:w-14 sm:h-14 border-2 border-[#109387] group-hover:bg-[#109387] rounded-[6px] flex items-center justify-center mb-4 sm:mb-5 transition-all duration-300">
                  <Icon className="w-6 h-6 sm:w-7 sm:h-7 text-[#109387] group-hover:text-white transition-colors duration-300" strokeWidth={1.5} />
                </div>

                {/* Titel */}
                <h3 className="text-lg sm:text-xl font-bold text-[#012956] group-hover:text-white mb-2 sm:mb-3 transition-colors">
                  {item.titel}
                </h3>

                {/* Beschreibung */}
                <p className="text-gray-600 font-semibold text-sm leading-relaxed mb-4 group-hover:text-white/80 transition-colors">
                  {item.beschreibung}
                </p>

                {/* Tags */}
                <div className="space-y-2">
                  <div className="flex items-center gap-2">
                    <span className="text-[#109387] font-bold text-xs uppercase">Einsatz:</span>
                    <span className="text-gray-700 group-hover:text-white/70 font-semibold text-xs transition-colors">
                      {item.einsatz}
                    </span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-[#109387] font-bold text-xs uppercase">Vorteil:</span>
                    <span className="text-gray-700 group-hover:text-white/70 font-semibold text-xs transition-colors">
                      {item.vorteil}
                    </span>
                  </div>
                </div>
              </div>
            )
          })}
        </div>

        {/* Bottom Info - Komplett klickbar */}
        <a
          href="#kontakt"
          className="mt-10 sm:mt-12 lg:mt-16 bg-[#012956] hover:bg-[#01203d] rounded-[6px] p-6 sm:p-8 lg:p-10 block transition-colors group cursor-pointer"
        >
          <div className="grid md:grid-cols-[2fr_1fr] gap-6 items-center">
            <div>
              <h3 className="text-xl sm:text-2xl font-bold text-white mb-3">
                Staatlich geprüfte Desinfektoren
              </h3>
              <p className="text-white/80 font-semibold text-sm sm:text-base leading-relaxed">
                Unsere Spezialteams sind ausgebildete und staatlich geprüfte Desinfektoren.
                Das bedeutet: Fachgerechter Umgang mit Gefahrstoffen, Biostoff-Verordnung,
                und alle notwendigen Zulassungen für die Entsorgung von Sondermüll.
              </p>
            </div>
            <div className="flex justify-start md:justify-end">
              <span className="inline-flex items-center gap-2 bg-[#109387] group-hover:bg-[#0d7d72] text-white font-bold px-6 py-3 rounded-[6px] transition-colors text-sm sm:text-base">
                Beratung anfragen
                <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 group-hover:translate-x-1 transition-transform" />
              </span>
            </div>
          </div>
        </a>

      </div>
    </section>
  )
}
