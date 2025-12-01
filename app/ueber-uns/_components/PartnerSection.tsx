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
  },
  {
    name: 'Unger',
    kategorie: 'Fensterreinigung',
    url: 'https://www.ungerglobal.com/de/startseite',
    seitentext: 'Für Glas- und Fensterreinigung nutzen wir ergonomische Werkzeuge und Systeme von Unger.',
  },
  {
    name: 'Vermop',
    kategorie: 'Reinigungssysteme',
    url: 'https://www.vermop.com/de-de/',
    seitentext: 'Unsere Wagen- und Moppsysteme stammen von Vermop, einem führenden Hersteller professioneller Reinigungssysteme.',
  },
  {
    name: 'Tana',
    kategorie: 'Reinigungsmittel',
    url: 'https://wmprof.com/brands/tana-professional/',
    seitentext: 'Bei Reinigungs- und Pflegemitteln setzen wir auf Produkte von Tana Professional.',
  },
  {
    name: 'Dr. Schnell',
    kategorie: 'Hygiene',
    url: 'https://www.dr-schnell.com/',
    seitentext: 'Für Küchen-, Sanitär- und Flächenhygiene verwenden wir Reinigungs- und Desinfektionsmittel von DR.SCHNELL.',
  },
  {
    name: 'Ecolab',
    kategorie: 'Desinfektion',
    url: 'https://en-de.ecolab.com/',
    seitentext: 'In hygienekritischen Bereichen arbeiten wir mit Desinfektions- und Hygienelösungen von Ecolab.',
  },
  {
    name: 'Numatic',
    kategorie: 'Staubsauger',
    url: 'https://www.numatic.de/',
    seitentext: 'Für die tägliche Unterhaltsreinigung setzen wir auf robuste Profistaubsauger von Numatic.',
  },
  {
    name: 'Taski',
    kategorie: 'Bodenreinigung',
    url: 'https://taski.com/',
    seitentext: 'Auf großen Flächen kommen bei uns Scheuersaugmaschinen und Bodenreinigungstechnik von TASKI zum Einsatz.',
  },
  {
    name: 'Hagleitner',
    kategorie: 'Spendersysteme',
    url: 'https://www.hagleitner.com/de/',
    seitentext: 'Unsere Waschraum- und Spendersysteme beziehen wir von Hagleitner, Spezialist für digitale Hygienelösungen.',
  },
  {
    name: 'Wetrok',
    kategorie: 'Maschinen',
    url: 'https://wetrok.de/',
    seitentext: 'Je nach Objekt setzen wir Reinigungsmaschinen und -chemie von Wetrok ein.',
  },
  {
    name: 'CopterClean',
    kategorie: 'Drohnenreinigung',
    url: 'https://www.copterclean.de/',
    seitentext: 'Für schwer zugängliche Fassaden, Dächer und PV-Anlagen arbeiten wir mit der Drohnenreinigung von CopterClean.',
  },
  {
    name: 'STIHL',
    kategorie: 'Außenanlagen',
    url: 'https://www.stihl.de/',
    seitentext: 'Bei der Reinigung von Außenanlagen nutzen wir Hochdruckreiniger und Geräte von STIHL.',
  },
  {
    name: 'Hako',
    kategorie: 'Kommunalmaschinen',
    url: 'https://www.hako.com/',
    seitentext: 'Für großflächige Außen- und Kommunalreinigung kommen Kehr- und Reinigungsmaschinen von Hako zum Einsatz.',
  },
]

// Minimalist Partner Card with subtle hover overlay
function PartnerCard({ item, onHover }: { item: typeof partner[0]; onHover: (hovering: boolean) => void }) {
  const [isHovered, setIsHovered] = useState(false)

  return (
    <a
      href={item.url}
      target="_blank"
      rel="noopener noreferrer"
      className="flex-shrink-0 w-64 h-48 relative group"
      onMouseEnter={() => {
        setIsHovered(true)
        onHover(true)
      }}
      onMouseLeave={() => {
        setIsHovered(false)
        onHover(false)
      }}
    >
      {/* Base Card */}
      <div className="absolute inset-0 bg-white rounded-[6px] shadow-sm transition-shadow duration-500 group-hover:shadow-md">
        {/* Default Content */}
        <div className={`absolute inset-0 flex flex-col items-center justify-center p-6 transition-opacity duration-500 ${isHovered ? 'opacity-0' : 'opacity-100'}`}>
          <div className="h-14 w-14 bg-gray-50 rounded-[6px] flex items-center justify-center mb-4">
            <span className="text-xl font-bold text-[#109387]">
              {item.name.charAt(0)}
            </span>
          </div>
          <p className="text-base font-bold text-[#012956] text-center">
            {item.kategorie}
          </p>
        </div>

        {/* Hover Content - Subtle fade in */}
        <div className={`absolute inset-0 flex flex-col justify-between p-5 transition-opacity duration-500 ${isHovered ? 'opacity-100' : 'opacity-0'}`}>
          <div>
            <p className="text-xs text-[#109387] font-semibold uppercase tracking-wide mb-2">
              {item.name}
            </p>
            <p className="text-sm text-gray-600 leading-relaxed">
              {item.seitentext}
            </p>
          </div>
          <div className="flex items-center gap-1 text-xs text-[#109387] font-medium">
            <span>Website besuchen</span>
            <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </div>
        </div>
      </div>
    </a>
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
          duration: 80, // Viel langsamer - 80 Sekunden
          repeat: Infinity,
          ease: 'linear',
          repeatType: 'loop',
        },
      })
    } else {
      controls.stop()
    }
  }, [isPaused, controls, totalWidth])

  const scrollTimeoutRef = useRef<NodeJS.Timeout | null>(null)

  const scroll = (direction: 'left' | 'right') => {
    // Clear any existing timeout
    if (scrollTimeoutRef.current) {
      clearTimeout(scrollTimeoutRef.current)
    }

    const scrollAmount = direction === 'left' ? cardWidth : -cardWidth
    controls.stop()
    controls.set({ x: `+=${scrollAmount}` })
    setIsPaused(true)

    // Resume auto-scroll after 2 seconds
    scrollTimeoutRef.current = setTimeout(() => {
      setIsPaused(false)
    }, 2000)
  }

  const handleCardHover = (hovering: boolean) => {
    setIsPaused(hovering)
  }

  return (
    <section id="partner" className="py-20 lg:py-28 bg-[#f8f9fa] overflow-hidden">
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

        {/* Left Navigation Button - z-30 und pointer-events für unabhängige Funktionalität */}
        <button
          onClick={(e) => {
            e.stopPropagation()
            scroll('left')
          }}
          onMouseEnter={(e) => e.stopPropagation()}
          onMouseLeave={(e) => e.stopPropagation()}
          className="absolute left-4 lg:left-8 top-1/2 -translate-y-1/2 z-30 w-11 h-11 lg:w-12 lg:h-12 rounded-[6px] bg-white shadow-md flex items-center justify-center transition-all duration-300 hover:bg-[#109387] hover:text-white cursor-pointer"
          aria-label="Nach links scrollen"
        >
          <svg
            className="w-5 h-5"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
        </button>

        {/* Right Navigation Button - z-30 und pointer-events für unabhängige Funktionalität */}
        <button
          onClick={(e) => {
            e.stopPropagation()
            scroll('right')
          }}
          onMouseEnter={(e) => e.stopPropagation()}
          onMouseLeave={(e) => e.stopPropagation()}
          className="absolute right-4 lg:right-8 top-1/2 -translate-y-1/2 z-30 w-11 h-11 lg:w-12 lg:h-12 rounded-[6px] bg-white shadow-md flex items-center justify-center transition-all duration-300 hover:bg-[#109387] hover:text-white cursor-pointer"
          aria-label="Nach rechts scrollen"
        >
          <svg
            className="w-5 h-5"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </button>

        {/* Gradient Overlays */}
        <div className="absolute left-0 top-0 bottom-0 w-24 lg:w-32 bg-gradient-to-r from-[#f8f9fa] to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-24 lg:w-32 bg-gradient-to-l from-[#f8f9fa] to-transparent z-10 pointer-events-none" />

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
              className="bg-white rounded-[6px] p-4 shadow-sm text-center"
            >
              <div className="h-10 bg-gray-50 rounded-[6px] flex items-center justify-center mb-2">
                <span className="text-lg font-bold text-[#109387]">
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
