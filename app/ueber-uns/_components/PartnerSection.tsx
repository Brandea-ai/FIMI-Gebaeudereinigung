'use client'

import { useState, useRef, useEffect } from 'react'
import { motion, useAnimationControls } from 'framer-motion'

// Partner/Hersteller mit URLs und Beschreibungen
const partner = [
  {
    name: 'Kärcher',
    kategorie: 'Reinigungsgeräte',
    url: 'https://www.kaercher.com/de/professional.html',
    seitentext: 'Für maschinelle Innen- und Außenreinigung setzen wir auf professionelle Reinigungsgeräte von Kärcher.',
    linktext: 'Kärcher – professionelle Reinigungsgeräte für gewerbliche Anwendungen',
  },
  {
    name: 'Unger',
    kategorie: 'Fensterreinigung',
    url: 'https://www.ungerglobal.com/de/startseite',
    seitentext: 'Für Glas- und Fensterreinigung nutzen wir ergonomische Werkzeuge und Systeme von Unger.',
    linktext: 'Unger – Systeme für professionelle Glas- und Fensterreinigung',
  },
  {
    name: 'Vermop',
    kategorie: 'Reinigungssysteme',
    url: 'https://www.vermop.com/de-de/',
    seitentext: 'Unsere Wagen- und Moppsysteme stammen von Vermop, einem führenden Hersteller professioneller Reinigungssysteme.',
    linktext: 'Vermop – professionelle Reinigungssysteme für Gebäudedienste',
  },
  {
    name: 'Tana',
    kategorie: 'Reinigungsmittel',
    url: 'https://wmprof.com/brands/tana-professional/',
    seitentext: 'Bei Reinigungs- und Pflegemitteln setzen wir auf Produkte von Tana Professional.',
    linktext: 'Tana Professional – Reinigungs- und Pflegemittel für Profis',
  },
  {
    name: 'Dr. Schnell',
    kategorie: 'Hygiene',
    url: 'https://www.dr-schnell.com/',
    seitentext: 'Für Küchen-, Sanitär- und Flächenhygiene verwenden wir Reinigungs- und Desinfektionsmittel von DR.SCHNELL.',
    linktext: 'DR.SCHNELL – Reinigungs- und Hygienelösungen',
  },
  {
    name: 'Ecolab',
    kategorie: 'Desinfektion',
    url: 'https://en-de.ecolab.com/',
    seitentext: 'In hygienekritischen Bereichen arbeiten wir mit Desinfektions- und Hygienelösungen von Ecolab.',
    linktext: 'Ecolab – Lösungen für Hygiene und Desinfektion',
  },
  {
    name: 'Numatic',
    kategorie: 'Staubsauger',
    url: 'https://www.numatic.de/',
    seitentext: 'Für die tägliche Unterhaltsreinigung setzen wir auf robuste Profistaubsauger von Numatic.',
    linktext: 'Numatic – Profi-Staubsauger und Bodenreinigungstechnik',
  },
  {
    name: 'Taski',
    kategorie: 'Bodenreinigung',
    url: 'https://taski.com/',
    seitentext: 'Auf großen Flächen kommen bei uns Scheuersaugmaschinen und Bodenreinigungstechnik von TASKI zum Einsatz.',
    linktext: 'TASKI – Maschinen für professionelle Bodenreinigung',
  },
  {
    name: 'Hagleitner',
    kategorie: 'Spendersysteme',
    url: 'https://www.hagleitner.com/de/',
    seitentext: 'Unsere Waschraum- und Spendersysteme beziehen wir von Hagleitner, Spezialist für digitale Hygienelösungen.',
    linktext: 'Hagleitner – Hygienespender und Dosiersysteme',
  },
  {
    name: 'Wetrok',
    kategorie: 'Maschinen',
    url: 'https://wetrok.de/',
    seitentext: 'Je nach Objekt setzen wir Reinigungsmaschinen und -chemie von Wetrok ein.',
    linktext: 'Wetrok – Reinigungsmaschinen und -chemie',
  },
  {
    name: 'CopterClean',
    kategorie: 'Drohnenreinigung',
    url: 'https://www.copterclean.de/',
    seitentext: 'Für schwer zugängliche Fassaden, Dächer und PV-Anlagen arbeiten wir mit der Drohnenreinigung von CopterClean.',
    linktext: 'CopterClean – Drohnenreinigung für Fassade, Dach & PV',
  },
  {
    name: 'STIHL',
    kategorie: 'Außenanlagen',
    url: 'https://www.stihl.de/',
    seitentext: 'Bei der Reinigung von Außenanlagen nutzen wir Hochdruckreiniger und Geräte von STIHL.',
    linktext: 'STIHL – Geräte für Außenreinigung und Hochdruckreinigung',
  },
  {
    name: 'Hako',
    kategorie: 'Kommunalmaschinen',
    url: 'https://www.hako.com/',
    seitentext: 'Für großflächige Außen- und Kommunalreinigung kommen Kehr- und Reinigungsmaschinen von Hako zum Einsatz.',
    linktext: 'Hako – Reinigungs- und Kommunaltechnik',
  },
]

// Flip Card Component
function PartnerCard({ item, onHover }: { item: typeof partner[0]; onHover: (hovering: boolean) => void }) {
  const [isFlipped, setIsFlipped] = useState(false)

  return (
    <div
      className="flex-shrink-0 w-64 h-52 perspective-1000"
      onMouseEnter={() => {
        setIsFlipped(true)
        onHover(true)
      }}
      onMouseLeave={() => {
        setIsFlipped(false)
        onHover(false)
      }}
    >
      <div
        className={`relative w-full h-full transition-transform duration-500 transform-style-3d ${
          isFlipped ? 'rotate-y-180' : ''
        }`}
        style={{
          transformStyle: 'preserve-3d',
          transform: isFlipped ? 'rotateY(180deg)' : 'rotateY(0deg)',
          transition: 'transform 0.6s ease-out',
        }}
      >
        {/* Front Side */}
        <div
          className="absolute inset-0 bg-white rounded-[6px] p-6 shadow-sm flex flex-col items-center justify-center backface-hidden"
          style={{ backfaceVisibility: 'hidden' }}
        >
          <div className="h-16 w-16 bg-gradient-to-br from-gray-50 to-gray-100 rounded-[6px] flex items-center justify-center mb-4">
            <span className="text-2xl font-bold text-[#109387]">
              {item.name.charAt(0)}
            </span>
          </div>
          <p className="text-lg font-bold text-[#012956] text-center">
            {item.kategorie}
          </p>
        </div>

        {/* Back Side */}
        <div
          className="absolute inset-0 bg-gradient-to-br from-[#012956] to-[#01406e] rounded-[6px] p-5 shadow-lg flex flex-col justify-between backface-hidden"
          style={{
            backfaceVisibility: 'hidden',
            transform: 'rotateY(180deg)',
          }}
        >
          <div>
            <p className="text-xs text-[#109387] font-semibold uppercase tracking-wide mb-2">
              {item.kategorie}
            </p>
            <p className="text-sm text-white/90 leading-relaxed">
              {item.seitentext}
            </p>
          </div>
          <a
            href={item.url}
            target="_blank"
            rel="noopener noreferrer"
            className="text-xs text-[#109387] hover:text-white transition-colors duration-200 font-medium flex items-center gap-1 mt-3"
          >
            {item.name} besuchen
            <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
            </svg>
          </a>
        </div>
      </div>
    </div>
  )
}

export default function PartnerSection() {
  const controls = useAnimationControls()
  const [isPaused, setIsPaused] = useState(false)
  const containerRef = useRef<HTMLDivElement>(null)

  // Card width + gap
  const cardWidth = 256 + 24 // w-64 (256px) + gap-6 (24px)
  const totalWidth = partner.length * cardWidth

  useEffect(() => {
    if (!isPaused) {
      controls.start({
        x: -totalWidth,
        transition: {
          duration: 40,
          repeat: Infinity,
          ease: 'linear',
          repeatType: 'loop',
        },
      })
    } else {
      controls.stop()
    }
  }, [isPaused, controls, totalWidth])

  const scroll = (direction: 'left' | 'right') => {
    setIsPaused(true)
    const scrollAmount = direction === 'left' ? cardWidth : -cardWidth
    controls.stop()
    controls.set({ x: `+=${scrollAmount}` })

    // Resume auto-scroll after 3 seconds
    setTimeout(() => {
      setIsPaused(false)
    }, 3000)
  }

  const handleCardHover = (hovering: boolean) => {
    setIsPaused(hovering)
  }

  return (
    <section className="py-20 lg:py-28 bg-[#f8f9fa] overflow-hidden">
      <div className="w-full max-w-[1800px] mx-auto px-6 lg:px-12 xl:px-20">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12 lg:mb-16"
        >
          <p className="text-sm text-gray-500 font-semibold uppercase tracking-wide mb-3">
            Unsere Partner
          </p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#012956] leading-[1.1] mb-6">
            Wir arbeiten nur mit führenden
            <span className="text-[#109387]"> Herstellern</span> zusammen
          </h2>
        </motion.div>

      </div>

      {/* Infinite Slider with Navigation */}
      <div className="relative">

        {/* Left Navigation Button */}
        <button
          onClick={() => scroll('left')}
          className="absolute left-4 lg:left-8 top-1/2 -translate-y-1/2 z-20 w-12 h-12 lg:w-14 lg:h-14 rounded-[6px] bg-white shadow-lg flex items-center justify-center transition-all duration-300 hover:bg-[#109387] hover:text-white hover:scale-105 cursor-pointer"
          aria-label="Nach links scrollen"
        >
          <svg
            className="w-6 h-6 lg:w-7 lg:h-7"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M15 19l-7-7 7-7" />
          </svg>
        </button>

        {/* Right Navigation Button */}
        <button
          onClick={() => scroll('right')}
          className="absolute right-4 lg:right-8 top-1/2 -translate-y-1/2 z-20 w-12 h-12 lg:w-14 lg:h-14 rounded-[6px] bg-white shadow-lg flex items-center justify-center transition-all duration-300 hover:bg-[#109387] hover:text-white hover:scale-105 cursor-pointer"
          aria-label="Nach rechts scrollen"
        >
          <svg
            className="w-6 h-6 lg:w-7 lg:h-7"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 5l7 7-7 7" />
          </svg>
        </button>

        {/* Gradient Overlays */}
        <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-[#f8f9fa] to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-[#f8f9fa] to-transparent z-10 pointer-events-none" />

        {/* Infinite Slider Track */}
        <motion.div
          ref={containerRef}
          animate={controls}
          className="flex gap-6 py-4"
        >
          {/* Triple the items for seamless infinite loop */}
          {[...partner, ...partner, ...partner].map((item, index) => (
            <PartnerCard
              key={`${item.name}-${index}`}
              item={item}
              onHover={handleCardHover}
            />
          ))}
        </motion.div>
      </div>

      {/* Static Grid for smaller screens */}
      <div className="lg:hidden mt-8 w-full max-w-[1800px] mx-auto px-6">
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
          {partner.slice(0, 6).map((item) => (
            <a
              key={item.name}
              href={item.url}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white rounded-[6px] p-4 shadow-sm text-center hover:shadow-md transition-shadow"
            >
              <div className="h-12 bg-gray-100 rounded-[6px] flex items-center justify-center mb-2">
                <span className="text-xl font-bold text-[#109387]">
                  {item.name.charAt(0)}
                </span>
              </div>
              <p className="text-sm font-bold text-[#012956]">{item.kategorie}</p>
            </a>
          ))}
        </div>
      </div>

      {/* Bottom Info */}
      <div className="w-full max-w-[1800px] mx-auto px-6 lg:px-12 xl:px-20 mt-12">
        <div className="flex flex-wrap justify-center gap-8 text-center">
          <div>
            <p className="text-3xl font-bold text-[#109387]">13+</p>
            <p className="text-gray-600 font-semibold">Premium Partner</p>
          </div>
          <div className="w-px bg-gray-300 hidden sm:block" />
          <div>
            <p className="text-3xl font-bold text-[#109387]">100%</p>
            <p className="text-gray-600 font-semibold">Markenqualität</p>
          </div>
          <div className="w-px bg-gray-300 hidden sm:block" />
          <div>
            <p className="text-3xl font-bold text-[#109387]">72h</p>
            <p className="text-gray-600 font-semibold">Zulieferung</p>
          </div>
        </div>
      </div>
    </section>
  )
}
