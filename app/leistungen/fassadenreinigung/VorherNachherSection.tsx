'use client'

import { useState } from 'react'
import Image from 'next/image'
import { ArrowRight, ChevronLeft, ChevronRight } from 'lucide-react'

const projekte = [
  {
    id: 1,
    titel: 'Mehrfamilienhaus Landshut',
    beschreibung: 'WDVS-Fassade mit starkem Algenbefall. Nach 12 Jahren erstmals gereinigt.',
    vorher: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?q=80&w=1200&auto=format&fit=crop',
    nachher: 'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?q=80&w=1200&auto=format&fit=crop',
    ersparnis: '8.500€ gespart vs. Neuanstrich',
    flaeche: '320 m²',
  },
  {
    id: 2,
    titel: 'Bürogebäude München',
    beschreibung: 'Putzfassade mit Moos und Grünbelag an der Nordseite.',
    vorher: 'https://images.unsplash.com/photo-1486718448742-163732cd1544?q=80&w=1200&auto=format&fit=crop',
    nachher: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=1200&auto=format&fit=crop',
    ersparnis: '12.000€ gespart vs. Neuanstrich',
    flaeche: '480 m²',
  },
  {
    id: 3,
    titel: 'Gewerbehalle Regensburg',
    beschreibung: 'Industriefassade mit Ruß und Verschmutzungen.',
    vorher: 'https://images.unsplash.com/photo-1504307651254-35680f356dfd?q=80&w=1200&auto=format&fit=crop',
    nachher: 'https://images.unsplash.com/photo-1565008447742-97f6f38c985c?q=80&w=1200&auto=format&fit=crop',
    ersparnis: '6.200€ gespart vs. Neuanstrich',
    flaeche: '250 m²',
  },
]

export default function VorherNachherSection() {
  const [activeIndex, setActiveIndex] = useState(0)
  const [sliderPosition, setSliderPosition] = useState(50)

  const projekt = projekte[activeIndex]

  const goTo = (index: number) => {
    if (index < 0) index = projekte.length - 1
    if (index >= projekte.length) index = 0
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
            Bilder sagen mehr als Worte. Sehen Sie selbst, wie wir vergrünte Fassaden
            in Bayern wieder in ihren Originalzustand versetzen.
          </p>
        </div>

        {/* Slider */}
        <div className="grid lg:grid-cols-5 gap-6 lg:gap-10">

          {/* Bild-Container - 3 Spalten */}
          <div className="lg:col-span-3">
            <div
              className="relative aspect-[4/3] rounded-[6px] overflow-hidden select-none"
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
                src={projekt.nachher}
                alt={`${projekt.titel} - Nachher`}
                fill
                className="object-cover"
              />

              {/* Vorher (Overlay) */}
              <div
                className="absolute inset-0 overflow-hidden"
                style={{ width: `${sliderPosition}%` }}
              >
                <Image
                  src={projekt.vorher}
                  alt={`${projekt.titel} - Vorher`}
                  fill
                  className="object-cover"
                  style={{ width: `${100 / (sliderPosition / 100)}%`, maxWidth: 'none' }}
                />
              </div>

              {/* Slider Line */}
              <div
                className="absolute top-0 bottom-0 w-1 bg-white shadow-lg cursor-ew-resize"
                style={{ left: `${sliderPosition}%`, transform: 'translateX(-50%)' }}
              >
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-10 h-10 bg-white rounded-full shadow-xl flex items-center justify-center">
                  <ChevronLeft className="w-4 h-4 text-[#012956] -mr-1" />
                  <ChevronRight className="w-4 h-4 text-[#012956] -ml-1" />
                </div>
              </div>

              {/* Labels */}
              <div className="absolute top-4 left-4 bg-[#012956]/90 text-white text-xs sm:text-sm font-bold px-3 py-1.5 rounded-[4px]">
                Vorher
              </div>
              <div className="absolute top-4 right-4 bg-[#109387]/90 text-white text-xs sm:text-sm font-bold px-3 py-1.5 rounded-[4px]">
                Nachher
              </div>
            </div>

            {/* Navigation Dots */}
            <div className="flex items-center justify-center gap-2 mt-4">
              {projekte.map((_, index) => (
                <button
                  key={index}
                  onClick={() => goTo(index)}
                  className={`w-3 h-3 rounded-full transition-all ${
                    index === activeIndex
                      ? 'bg-[#109387] w-8'
                      : 'bg-gray-300 hover:bg-gray-400'
                  }`}
                  aria-label={`Projekt ${index + 1}`}
                />
              ))}
            </div>
          </div>

          {/* Info-Panel - 2 Spalten */}
          <div className="lg:col-span-2 flex flex-col">
            <div className="bg-[#f8f9fa] rounded-[6px] p-5 sm:p-6 lg:p-8 flex-1">
              {/* Navigation */}
              <div className="flex items-center justify-between mb-4 sm:mb-6">
                <button
                  onClick={() => goTo(activeIndex - 1)}
                  className="w-10 h-10 rounded-[6px] border-2 border-[#012956] flex items-center justify-center hover:bg-[#012956] hover:text-white text-[#012956] transition-all"
                >
                  <ChevronLeft className="w-5 h-5" />
                </button>
                <span className="text-gray-500 font-semibold text-sm">
                  {activeIndex + 1} / {projekte.length}
                </span>
                <button
                  onClick={() => goTo(activeIndex + 1)}
                  className="w-10 h-10 rounded-[6px] border-2 border-[#012956] flex items-center justify-center hover:bg-[#012956] hover:text-white text-[#012956] transition-all"
                >
                  <ChevronRight className="w-5 h-5" />
                </button>
              </div>

              {/* Projekt Info */}
              <h3 className="text-xl sm:text-2xl font-bold text-[#012956] mb-2">
                {projekt.titel}
              </h3>
              <p className="text-gray-600 font-semibold mb-6 text-sm sm:text-base">
                {projekt.beschreibung}
              </p>

              {/* Stats */}
              <div className="grid grid-cols-2 gap-4 mb-6">
                <div className="bg-white rounded-[6px] p-4">
                  <div className="text-[#109387] font-bold text-lg sm:text-xl">
                    {projekt.flaeche}
                  </div>
                  <div className="text-gray-500 text-sm font-semibold">
                    Fassadenfläche
                  </div>
                </div>
                <div className="bg-white rounded-[6px] p-4">
                  <div className="text-[#109387] font-bold text-lg sm:text-xl">
                    {projekt.ersparnis.split(' ')[0]}
                  </div>
                  <div className="text-gray-500 text-sm font-semibold">
                    Ersparnis
                  </div>
                </div>
              </div>

              {/* CTA */}
              <a
                href="#kontakt"
                className="flex items-center justify-center gap-2 bg-[#109387] hover:bg-[#0d7d72] text-white font-bold px-6 py-3 rounded-[6px] transition-colors group w-full"
              >
                Ähnliches Projekt anfragen
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </a>
            </div>
          </div>

        </div>

      </div>
    </section>
  )
}
