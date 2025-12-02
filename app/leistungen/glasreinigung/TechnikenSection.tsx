'use client'

import Image from 'next/image'
import { CheckCircle, Droplets, ArrowUpRight, Wrench, Cpu } from 'lucide-react'

const techniken = [
  {
    icon: Droplets,
    name: 'Osmose-Reinigung',
    highlight: 'Unser Standard',
    beschreibung: 'Demineralisiertes Reinwasser löst Schmutz ohne Chemie. Das Wasser trocknet rückstandsfrei ab – keine Kalkflecken, keine Streifen. Ideal für Glasfassaden und große Flächen.',
    vorteile: [
      'Streifenfrei ohne Nachpolieren',
      'Längere Sauberkeitsdauer',
      'Umweltschonend ohne Chemie',
      'Auch für empfindliche Beschichtungen',
    ],
    bild: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?q=80&w=1200&auto=format&fit=crop',
  },
  {
    icon: ArrowUpRight,
    name: 'Industriekletterer',
    highlight: 'Für Höhenarbeiten',
    beschreibung: 'Unsere zertifizierten Seilzugangstechniker erreichen jede Glasfläche – ohne Gerüst, ohne Hubsteiger. Ideal für komplexe Fassaden und Gebäude mit eingeschränktem Zugang.',
    vorteile: [
      'Keine Gerüstkosten',
      'Flexibler Einsatz',
      'Minimale Störung des Betriebs',
      'FISAT-zertifizierte Teams',
    ],
    bild: 'https://images.unsplash.com/photo-1504307651254-35680f356dfd?q=80&w=1200&auto=format&fit=crop',
  },
  {
    icon: Wrench,
    name: 'Teleskopstangen',
    highlight: 'Bis 18 Meter',
    beschreibung: 'Vom Boden aus erreichen wir mit Carbonstangen bis zu 18 Meter Höhe. Schnell, sicher und ohne aufwendige Absperrungen – perfekt für regelmäßige Reinigungsintervalle.',
    vorteile: [
      'Keine Absperrungen nötig',
      'Schnelle Durchführung',
      'Kosteneffizient',
      'Kombiniert mit Osmose-Technik',
    ],
    bild: 'https://images.unsplash.com/photo-1527515637462-cff94eecc1ac?q=80&w=1200&auto=format&fit=crop',
  },
  {
    icon: Cpu,
    name: 'Drohnen-Reinigung',
    highlight: 'Innovation',
    beschreibung: 'Für unerreichbare Stellen setzen wir Drohnen ein: Glasdächer, Kuppeln, Atrien. Die Zukunft der Glasreinigung – präzise, schonend und ohne Personeneinsatz in der Höhe.',
    vorteile: [
      'Unerreichbare Stellen möglich',
      'Minimales Unfallrisiko',
      'Foto-Dokumentation inklusive',
      'Ideal für Inspektionen',
    ],
    bild: 'https://images.unsplash.com/photo-1473968512647-3e447244af8f?q=80&w=1200&auto=format&fit=crop',
  },
]

export default function TechnikenSection() {
  return (
    <section id="techniken" className="py-12 sm:py-16 lg:py-28 bg-[#f8f9fa]">
      <div className="w-full max-w-[1800px] mx-auto px-4 sm:px-6 md:px-8 lg:px-12 xl:px-20">

        {/* Header */}
        <div className="max-w-3xl mb-8 sm:mb-12 lg:mb-16">
          <span className="text-[#109387] font-bold text-xs sm:text-sm uppercase tracking-wide mb-3 sm:mb-4 block">
            Unsere Techniken
          </span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-[#012956] leading-tight mb-4 sm:mb-6">
            Modernste Glasreinigungstechnik
          </h2>
          <p className="text-base sm:text-lg text-gray-600 font-semibold leading-relaxed">
            Je nach Objekt, Höhe und Anforderung setzen wir die optimale Reinigungstechnik ein.
            Von der bewährten Osmose-Reinigung bis zur innovativen Drohnen-Technologie.
          </p>
        </div>

        {/* Techniken Grid */}
        <div className="grid md:grid-cols-2 gap-6 sm:gap-8">
          {techniken.map((technik, index) => (
            <div
              key={index}
              className="bg-white rounded-[6px] overflow-hidden shadow-sm hover:shadow-xl transition-shadow duration-300 group"
            >
              {/* Bild */}
              <div className="relative h-[180px] sm:h-[220px] lg:h-[260px] overflow-hidden">
                <Image
                  src={technik.bild}
                  alt={`${technik.name} - Glasreinigungstechnik`}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />

                {/* Badge */}
                <div className="absolute top-4 left-4 bg-[#109387] text-white font-bold text-xs sm:text-sm px-3 py-1.5 rounded-[4px]">
                  {technik.highlight}
                </div>

                {/* Icon + Name Overlay */}
                <div className="absolute bottom-4 left-4 right-4 flex items-center gap-3">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-[6px] bg-white/20 backdrop-blur-sm flex items-center justify-center">
                    <technik.icon className="w-5 h-5 sm:w-6 sm:h-6 text-white" strokeWidth={1.5} />
                  </div>
                  <h3 className="text-xl sm:text-2xl font-bold text-white">
                    {technik.name}
                  </h3>
                </div>
              </div>

              {/* Content */}
              <div className="p-5 sm:p-6 lg:p-8">
                <p className="text-gray-600 font-semibold leading-relaxed mb-4 sm:mb-6 text-sm sm:text-base">
                  {technik.beschreibung}
                </p>

                {/* Vorteile */}
                <ul className="space-y-2 sm:space-y-3">
                  {technik.vorteile.map((vorteil, idx) => (
                    <li key={idx} className="flex items-start gap-2 sm:gap-3">
                      <CheckCircle className="w-4 h-4 sm:w-5 sm:h-5 text-[#109387] flex-shrink-0 mt-0.5" />
                      <span className="text-gray-700 font-semibold text-sm sm:text-base">
                        {vorteil}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="mt-10 sm:mt-12 lg:mt-16 text-center">
          <p className="text-gray-600 font-semibold mb-4 text-sm sm:text-base">
            Unsicher, welche Technik die richtige für Ihr Objekt ist?
          </p>
          <a
            href="#kontakt"
            className="inline-flex items-center gap-2 bg-[#012956] hover:bg-[#01203d] text-white font-bold px-6 sm:px-8 py-3 sm:py-4 rounded-[6px] transition-colors text-sm sm:text-base"
          >
            Kostenfreie Beratung anfragen
          </a>
        </div>

      </div>
    </section>
  )
}
