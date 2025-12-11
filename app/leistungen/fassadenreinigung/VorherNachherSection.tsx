'use client'

import { useState } from 'react'
import Image from 'next/image'
import { ArrowRight, ChevronLeft, ChevronRight, Check, Sparkles } from 'lucide-react'

// Vorher/Nachher Beispiele mit lokalen Bildern
const beispiele = [
  {
    id: 1,
    typ: 'Mehrfamilienhaus',
    beschreibung: 'WDVS-Fassade mit Algen- und Moosbefall',
    vorher: '/images/leistungen/fassadenreinigung/vorher-1.avif',
    nachher: '/images/leistungen/fassadenreinigung/nachher-1.avif',
  },
  {
    id: 2,
    typ: 'Bürogebäude',
    beschreibung: 'Putzfassade mit Grünbelag und Verschmutzungen',
    vorher: '/images/leistungen/fassadenreinigung/vorher-2.avif',
    nachher: '/images/leistungen/fassadenreinigung/nachher-2.avif',
  },
  {
    id: 3,
    typ: 'Gewerbehalle',
    beschreibung: 'Industriefassade mit Ruß und Umweltverschmutzung',
    vorher: '/images/leistungen/fassadenreinigung/vorher-3.avif',
    nachher: '/images/leistungen/fassadenreinigung/nachher-3.avif',
  },
]

// SEO-Content für die rechte Seite
const seoContent = {
  headline: 'Fassade wie neu – ohne Neuanstrich',
  intro: 'Eine professionelle Fassadenreinigung entfernt Algen, Moos und Grünbelag schonend und nachhaltig. Das Ergebnis: Ihre Fassade erstrahlt wieder im ursprünglichen Glanz.',
  vorteile: [
    'Schonende Niederdruck-Reinigung für alle Fassadentypen',
    'Langzeit-Imprägnierung für 5-10 Jahre Schutz',
    'Ohne Gerüst bis 18 Meter Höhe möglich',
    'Umweltschonende, biologisch abbaubare Reinigungsmittel',
    'Dokumentierte Qualitätskontrolle nach Abschluss',
  ],
  cta: 'Kostenfreie Besichtigung vereinbaren',
}

export default function VorherNachherSection() {
  const [activeIndex, setActiveIndex] = useState(0)
  const [sliderPosition, setSliderPosition] = useState(50)

  const beispiel = beispiele[activeIndex]

  const goTo = (index: number) => {
    if (index < 0) index = beispiele.length - 1
    if (index >= beispiele.length) index = 0
    setActiveIndex(index)
    setSliderPosition(50)
  }

  return (
    <section id="vorher-nachher" className="py-12 sm:py-16 lg:py-28 bg-white">
      <div className="w-full max-w-[1800px] mx-auto px-4 sm:px-6 md:px-8 lg:px-12 xl:px-20">

        {/* Header */}
        <div className="max-w-3xl mb-8 sm:mb-12 lg:mb-16">
          <span className="text-[#109387] font-bold text-xs sm:text-sm uppercase tracking-wide mb-3 sm:mb-4 block">
            Echte Ergebnisse
          </span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-[#012956] leading-tight mb-4 sm:mb-6">
            Vorher & Nachher
          </h2>
          <p className="text-base sm:text-lg text-gray-600 font-semibold leading-relaxed">
            Sehen Sie selbst, wie wir vergrünte Fassaden wieder in ihren Originalzustand versetzen.
            Bewegen Sie den Slider, um den Unterschied zu sehen.
          </p>
        </div>

        {/* Slider + SEO Content */}
        <div className="grid lg:grid-cols-5 gap-6 lg:gap-10">

          {/* Bild-Container mit Slider - 3 Spalten */}
          <div className="lg:col-span-3">
            <div
              className="relative aspect-[4/3] rounded-[6px] overflow-hidden select-none cursor-ew-resize"
              onMouseMove={(e) => {
                const rect = e.currentTarget.getBoundingClientRect()
                const x = ((e.clientX - rect.left) / rect.width) * 100
                setSliderPosition(Math.max(0, Math.min(100, x)))
              }}
              onTouchMove={(e) => {
                const rect = e.currentTarget.getBoundingClientRect()
                const touch = e.touches[0]
                const x = ((touch.clientX - rect.left) / rect.width) * 100
                setSliderPosition(Math.max(0, Math.min(100, x)))
              }}
            >
              {/* Nachher (Basis) */}
              <Image
                src={beispiel.nachher}
                alt={`${beispiel.typ} nach der Fassadenreinigung`}
                fill
                className="object-cover"
              />

              {/* Vorher (Overlay) */}
              <div
                className="absolute inset-0 overflow-hidden"
                style={{ width: `${sliderPosition}%` }}
              >
                <Image
                  src={beispiel.vorher}
                  alt={`${beispiel.typ} vor der Fassadenreinigung`}
                  fill
                  className="object-cover"
                  style={{ width: `${100 / (sliderPosition / 100)}%`, maxWidth: 'none' }}
                />
              </div>

              {/* Slider Line */}
              <div
                className="absolute top-0 bottom-0 w-1 bg-white shadow-lg cursor-ew-resize"
                style={{ left: `${sliderPosition}%`, transform: 'translateX(-50%)' }}
                aria-hidden="true"
              >
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-10 h-10 bg-white rounded-[6px] shadow-xl flex items-center justify-center">
                  <ChevronLeft className="w-4 h-4 text-[#012956] -mr-1" />
                  <ChevronRight className="w-4 h-4 text-[#012956] -ml-1" />
                </div>
              </div>

              {/* Labels */}
              <div className="absolute top-4 left-4 bg-[#012956]/90 text-white text-xs sm:text-sm font-bold px-3 py-1.5 rounded-[6px]">
                Vorher
              </div>
              <div className="absolute top-4 right-4 bg-[#109387]/90 text-white text-xs sm:text-sm font-bold px-3 py-1.5 rounded-[6px]">
                Nachher
              </div>
            </div>

            {/* Navigation + Typ-Anzeige */}
            <div className="flex items-center justify-between mt-4 bg-[#f8f9fa] rounded-[6px] p-3 sm:p-4">
              <button
                onClick={() => goTo(activeIndex - 1)}
                aria-label="Vorheriges Beispiel"
                className="w-11 h-11 sm:w-12 sm:h-12 rounded-[6px] border-2 border-[#012956] flex items-center justify-center hover:bg-[#012956] hover:text-white text-[#012956] transition-all"
              >
                <ChevronLeft className="w-5 h-5" aria-hidden="true" />
              </button>

              <div className="text-center">
                <div className="text-[#012956] font-bold text-sm sm:text-base">{beispiel.typ}</div>
                <div className="text-gray-600 font-semibold text-xs sm:text-sm">{beispiel.beschreibung}</div>
              </div>

              <button
                onClick={() => goTo(activeIndex + 1)}
                aria-label="Nächstes Beispiel"
                className="w-11 h-11 sm:w-12 sm:h-12 rounded-[6px] border-2 border-[#012956] flex items-center justify-center hover:bg-[#012956] hover:text-white text-[#012956] transition-all"
              >
                <ChevronRight className="w-5 h-5" aria-hidden="true" />
              </button>
            </div>

            {/* Dots */}
            <div className="flex items-center justify-center gap-3 mt-3" role="tablist" aria-label="Beispiel-Navigation">
              {beispiele.map((_, index) => (
                <button
                  key={index}
                  onClick={() => goTo(index)}
                  role="tab"
                  aria-selected={index === activeIndex}
                  aria-label={`Beispiel ${index + 1}: ${beispiele[index].typ}`}
                  className={`min-w-[44px] min-h-[44px] flex items-center justify-center transition-all ${
                    index === activeIndex
                      ? ''
                      : ''
                  }`}
                >
                  <span className={`h-2.5 rounded-full transition-all ${
                    index === activeIndex
                      ? 'bg-[#109387] w-7'
                      : 'bg-gray-300 hover:bg-gray-400 w-2.5'
                  }`} aria-hidden="true" />
                </button>
              ))}
            </div>
          </div>

          {/* SEO Content - 2 Spalten */}
          <div className="lg:col-span-2 flex flex-col">
            <div className="bg-[#f8f9fa] rounded-[6px] p-5 sm:p-6 lg:p-8 flex-1">
              {/* Icon + Headline */}
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 rounded-[6px] bg-[#109387]/10 flex items-center justify-center" aria-hidden="true">
                  <Sparkles className="w-6 h-6 text-[#109387]" />
                </div>
                <h3 className="text-xl sm:text-2xl font-bold text-[#012956]">
                  {seoContent.headline}
                </h3>
              </div>

              {/* Intro Text */}
              <p className="text-gray-600 font-semibold leading-relaxed mb-6 text-sm sm:text-base">
                {seoContent.intro}
              </p>

              {/* Vorteile Liste */}
              <div className="space-y-3 mb-6" role="list" aria-label="Vorteile der Fassadenreinigung">
                {seoContent.vorteile.map((vorteil, index) => (
                  <div key={index} className="flex items-start gap-3" role="listitem">
                    <div className="w-5 h-5 rounded-[4px] bg-[#109387] flex items-center justify-center flex-shrink-0 mt-0.5" aria-hidden="true">
                      <Check className="w-3 h-3 text-white" strokeWidth={3} />
                    </div>
                    <span className="text-gray-700 font-semibold text-sm">{vorteil}</span>
                  </div>
                ))}
              </div>

              {/* CTA */}
              <a
                href="#kontakt"
                className="flex items-center justify-center gap-2 bg-[#109387] hover:bg-[#0d7d72] text-white font-bold px-6 py-3 rounded-[6px] transition-colors group w-full"
              >
                {seoContent.cta}
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" aria-hidden="true" />
              </a>
            </div>
          </div>

        </div>

      </div>
    </section>
  )
}
