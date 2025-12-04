'use client'

import Image from 'next/image'
import { CheckCircle, Truck, Droplets, Hand } from 'lucide-react'

const verfahren = [
  {
    icon: Truck,
    titel: 'Maschinelle Kehrarbeit',
    untertitel: 'Für große Flächen von 100 bis 100.000 m²',
    beschreibung: 'Unsere modernen Aufsitz-Kehrmaschinen reinigen selbst riesige Parkplatzflächen in kürzester Zeit. Das Saugprinzip verhindert Staubaufwirbelung und sammelt auch feinen Schmutz zuverlässig auf.',
    vorteile: [
      'Schnell und kostengünstig',
      'Staubfreie Reinigung durch Saugtechnik',
      'Auch für Asphalt, Pflaster, Beton',
      'Ideal für regelmäßige Intervalle',
    ],
    image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?q=80&w=1200&auto=format&fit=crop',
    specs: ['bis 15.000 m²/h', 'Tank: 200L', 'Breite: 1,5m'],
  },
  {
    icon: Droplets,
    titel: 'Hochdruckreinigung',
    untertitel: 'Gegen hartnäckige Verschmutzungen',
    beschreibung: 'Heißwasser-Hochdruckreinigung mit bis zu 300 Bar und 155°C löst selbst jahrelang festsitzende Öl- und Fettflecken, Kaugummi, Moos und Algen. Das Verfahren ist oberflächenschonend und umweltfreundlich.',
    vorteile: [
      'Ölflecken & Kaugummi entfernen',
      'Moos & Algen beseitigen',
      'Keine Chemikalien nötig',
      'Schont Oberflächen und Markierungen',
    ],
    image: 'https://images.unsplash.com/photo-1581578731548-c64695cc6952?q=80&w=1200&auto=format&fit=crop',
    specs: ['bis 300 Bar', '155°C Heißwasser', 'Flächenreiniger'],
  },
  {
    icon: Hand,
    titel: 'Manuelle Reinigung',
    untertitel: 'Für Details und schwer zugängliche Stellen',
    beschreibung: 'Wo Maschinen nicht hinkommen, arbeiten unsere Teams von Hand. Ecken, Kanten, Bordsteine, Grünstreifen und Beete – erst die Detailarbeit macht den Unterschied zwischen „gekehrt" und „gepflegt".',
    vorteile: [
      'Ecken und Winkel erreichen',
      'Bordsteine säubern',
      'Grünstreifen pflegen',
      'Abfallbehälter leeren',
    ],
    image: 'https://images.unsplash.com/photo-1628177142898-93e36e4e3a50?q=80&w=1200&auto=format&fit=crop',
    specs: ['Besen & Schaufel', 'Laubbläser', 'Greifzangen'],
  },
]

export default function VerfahrenSection() {
  return (
    <section id="verfahren" className="py-12 sm:py-16 lg:py-28 bg-[#f8f9fa]">
      <div className="w-full max-w-[1800px] mx-auto px-4 sm:px-6 md:px-8 lg:px-12 xl:px-20">

        {/* Section Header */}
        <div className="text-center max-w-4xl mx-auto mb-10 sm:mb-14 lg:mb-20">
          <p className="text-xs sm:text-sm text-[#109387] font-bold uppercase tracking-wide mb-2 sm:mb-3">
            Unsere Verfahren
          </p>
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-[#012956] leading-[1.1] mb-4 sm:mb-6">
            Drei Methoden für perfekte Ergebnisse
          </h2>
          <p className="text-sm sm:text-base lg:text-lg text-gray-700 font-semibold leading-relaxed">
            Je nach Verschmutzungsgrad und Fläche setzen wir unterschiedliche Verfahren ein.
            Oft kombinieren wir alle drei für das beste Ergebnis – maschinell für die Fläche,
            Hochdruck für Flecken, manuell für die Details.
          </p>
        </div>

        {/* Verfahren Grid */}
        <div className="space-y-8 sm:space-y-12 lg:space-y-16">
          {verfahren.map((item, index) => (
            <div
              key={index}
              className={`grid lg:grid-cols-2 gap-6 sm:gap-8 lg:gap-12 items-center ${
                index % 2 === 1 ? 'lg:direction-rtl' : ''
              }`}
            >
              {/* Image */}
              <div className={`relative h-[250px] sm:h-[300px] lg:h-[400px] rounded-[6px] lg:rounded-[12px] overflow-hidden ${
                index % 2 === 1 ? 'lg:order-2' : ''
              }`}>
                <Image
                  src={item.image}
                  alt={item.titel}
                  fill
                  className="object-cover"
                />
                {/* Specs Badges */}
                <div className="absolute bottom-4 left-4 right-4 flex flex-wrap gap-2">
                  {item.specs.map((spec, i) => (
                    <span
                      key={i}
                      className="bg-[#012956]/90 backdrop-blur-sm text-white text-xs sm:text-sm font-bold px-3 py-1.5 rounded-[6px]"
                    >
                      {spec}
                    </span>
                  ))}
                </div>
              </div>

              {/* Content */}
              <div className={index % 2 === 1 ? 'lg:order-1' : ''}>
                {/* Icon + Title */}
                <div className="flex items-center gap-3 sm:gap-4 mb-4 sm:mb-6">
                  <div className="w-12 h-12 sm:w-14 sm:h-14 bg-[#109387] rounded-[6px] flex items-center justify-center flex-shrink-0">
                    <item.icon className="w-6 h-6 sm:w-7 sm:h-7 text-white" strokeWidth={1.5} />
                  </div>
                  <div>
                    <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold text-[#012956]">
                      {item.titel}
                    </h3>
                    <p className="text-[#109387] font-semibold text-sm sm:text-base">
                      {item.untertitel}
                    </p>
                  </div>
                </div>

                {/* Description */}
                <p className="text-gray-700 font-semibold text-sm sm:text-base lg:text-lg leading-relaxed mb-5 sm:mb-6">
                  {item.beschreibung}
                </p>

                {/* Vorteile */}
                <div className="space-y-2 sm:space-y-3">
                  {item.vorteile.map((vorteil, i) => (
                    <div key={i} className="flex items-center gap-3">
                      <CheckCircle className="w-5 h-5 text-[#109387] flex-shrink-0" />
                      <span className="text-[#012956] font-semibold text-sm sm:text-base">
                        {vorteil}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Info Box */}
        <div className="mt-12 sm:mt-16 lg:mt-20 bg-[#012956] rounded-[6px] lg:rounded-[12px] p-6 sm:p-8 lg:p-10">
          <div className="grid md:grid-cols-2 gap-6 items-center">
            <div>
              <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold text-white mb-3 sm:mb-4">
                Welches Verfahren brauchen Sie?
              </h3>
              <p className="text-white/80 font-semibold text-sm sm:text-base leading-relaxed">
                Bei der kostenlosen Besichtigung analysieren wir Ihre Flächen und empfehlen
                das optimale Verfahren – oder die richtige Kombination. Transparent und
                nachvollziehbar.
              </p>
            </div>
            <div className="flex justify-start md:justify-end">
              <a
                href="/kontakt"
                className="inline-flex items-center justify-center gap-2 bg-[#109387] hover:bg-[#0d7d72] text-white font-bold text-sm sm:text-base lg:text-lg px-6 sm:px-8 py-3 sm:py-4 rounded-[6px] transition-colors"
              >
                Beratung anfordern
              </a>
            </div>
          </div>
        </div>

      </div>
    </section>
  )
}
