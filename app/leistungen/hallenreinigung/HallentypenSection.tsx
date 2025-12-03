'use client'

import Image from 'next/image'
import { Warehouse, Factory, Truck, Dumbbell, Building2, Wrench, ArrowRight } from 'lucide-react'

const hallentypen = [
  {
    icon: Warehouse,
    titel: 'Lagerhallen',
    beschreibung: 'Hochregallager, Kommissionierbereiche, Palettenstellplätze. Wir reinigen Böden, Regale und Verkehrswege.',
    keywords: ['Hochregallager', 'Kommissionierung', 'Logistikzentrum'],
    image: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?q=80&w=800&auto=format&fit=crop',
  },
  {
    icon: Factory,
    titel: 'Produktionshallen',
    beschreibung: 'Fertigungslinien, Maschinenparks, Montagebereiche. Reinigung auch im laufenden Betrieb möglich.',
    keywords: ['Fertigung', 'Montage', 'Maschinenpark'],
    image: 'https://images.unsplash.com/photo-1565688534245-05d6b5be184a?q=80&w=800&auto=format&fit=crop',
  },
  {
    icon: Truck,
    titel: 'Logistikhallen',
    beschreibung: 'Umschlagplätze, Versandbereiche, Laderampen. Schnelle Reinigung ohne Betriebsunterbrechung.',
    keywords: ['Umschlag', 'Versand', 'Laderampe'],
    image: 'https://images.unsplash.com/photo-1553413077-190dd305871c?q=80&w=800&auto=format&fit=crop',
  },
  {
    icon: Dumbbell,
    titel: 'Sport- & Eventhallen',
    beschreibung: 'Turnhallen, Mehrzweckhallen, Veranstaltungsflächen. Grundreinigung nach Events.',
    keywords: ['Sporthalle', 'Turnhalle', 'Eventhalle'],
    image: 'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?q=80&w=800&auto=format&fit=crop',
  },
  {
    icon: Building2,
    titel: 'Messehallen',
    beschreibung: 'Ausstellungsflächen, Messestände, Kongresshallen. Vor und nach Veranstaltungen.',
    keywords: ['Messe', 'Ausstellung', 'Kongress'],
    image: 'https://images.unsplash.com/photo-1540575467063-178a50c2df87?q=80&w=800&auto=format&fit=crop',
  },
  {
    icon: Wrench,
    titel: 'Werkstatthallen',
    beschreibung: 'KFZ-Werkstätten, Handwerksbetriebe, Reparaturhallen. Öl- und Fettentfernung.',
    keywords: ['KFZ-Werkstatt', 'Handwerk', 'Reparatur'],
    image: 'https://images.unsplash.com/photo-1487754180451-c456f719a1fc?q=80&w=800&auto=format&fit=crop',
  },
]

export default function HallentypenSection() {
  return (
    <section id="hallentypen" className="py-12 sm:py-16 lg:py-28 bg-white">
      <div className="w-full max-w-[1800px] mx-auto px-4 sm:px-6 md:px-8 lg:px-12 xl:px-20">

        {/* Header */}
        <div className="max-w-3xl mb-8 sm:mb-12 lg:mb-16">
          <span className="text-[#109387] font-bold text-xs sm:text-sm uppercase tracking-wide mb-3 sm:mb-4 block">
            Spezialisierung
          </span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-[#012956] leading-tight mb-4 sm:mb-6">
            Welche Hallen reinigen wir?
          </h2>
          <p className="text-base sm:text-lg text-gray-600 font-semibold leading-relaxed">
            Von der kleinen Werkstatthalle bis zum Logistikzentrum – wir haben für jeden
            Hallentyp die passende Reinigungslösung. Jede Halle hat ihre eigenen
            Anforderungen, und wir kennen sie alle.
          </p>
        </div>

        {/* Hallentypen Grid - 3 Spalten */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
          {hallentypen.map((halle, index) => {
            const Icon = halle.icon
            return (
              <article
                key={index}
                className="group bg-[#f8f9fa] rounded-[6px] overflow-hidden hover:shadow-lg transition-all duration-300"
              >
                {/* Bild */}
                <div className="relative h-40 sm:h-48 overflow-hidden">
                  <Image
                    src={halle.image}
                    alt={`${halle.titel} reinigen`}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#012956]/60 to-transparent" />

                  {/* Icon Badge */}
                  <div className="absolute bottom-3 left-3 w-10 h-10 sm:w-12 sm:h-12 bg-[#109387] rounded-[6px] flex items-center justify-center">
                    <Icon className="w-5 h-5 sm:w-6 sm:h-6 text-white" strokeWidth={1.5} />
                  </div>
                </div>

                {/* Content */}
                <div className="p-4 sm:p-5 lg:p-6">
                  <h3 className="text-lg sm:text-xl font-bold text-[#012956] mb-2 group-hover:text-[#109387] transition-colors">
                    {halle.titel}
                  </h3>
                  <p className="text-gray-600 font-semibold text-sm sm:text-base leading-relaxed mb-3">
                    {halle.beschreibung}
                  </p>

                  {/* Keywords */}
                  <div className="flex flex-wrap gap-1.5 sm:gap-2">
                    {halle.keywords.map((keyword, idx) => (
                      <span
                        key={idx}
                        className="text-[10px] sm:text-xs font-bold text-[#109387] bg-[#109387]/10 px-2 py-1 rounded-[4px]"
                      >
                        {keyword}
                      </span>
                    ))}
                  </div>
                </div>
              </article>
            )
          })}
        </div>

        {/* Bottom CTA */}
        <div className="mt-10 sm:mt-12 lg:mt-16 bg-[#012956] rounded-[6px] p-6 sm:p-8 lg:p-10">
          <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6">
            <div>
              <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold text-white mb-2">
                Ihr Hallentyp nicht dabei?
              </h3>
              <p className="text-white/70 font-semibold text-sm sm:text-base">
                Wir reinigen jede Art von Halle – sprechen Sie uns an für eine individuelle Lösung.
              </p>
            </div>
            <a
              href="#kontakt"
              className="inline-flex items-center justify-center gap-2 bg-[#109387] hover:bg-[#0d7d72] text-white font-bold px-6 sm:px-8 py-3 sm:py-4 rounded-[6px] transition-colors group whitespace-nowrap"
            >
              Individuelle Anfrage
              <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 group-hover:translate-x-1 transition-transform" />
            </a>
          </div>
        </div>

      </div>
    </section>
  )
}
