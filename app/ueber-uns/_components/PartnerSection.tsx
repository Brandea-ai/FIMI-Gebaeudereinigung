'use client'

import { useState, useEffect } from 'react'
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

// Minimalist Partner Card with subtle hover overlay - responsive
function PartnerCard({ item, onHover }: { item: typeof partner[0]; onHover: (hovering: boolean) => void }) {
  const [isHovered, setIsHovered] = useState(false)

  return (
    <a
      href={item.url}
      target="_blank"
      rel="noopener noreferrer"
      className="flex-shrink-0 w-44 sm:w-56 lg:w-64 h-36 sm:h-44 lg:h-48 relative group"
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
        <div className={`absolute inset-0 flex flex-col items-center justify-center p-4 sm:p-6 transition-opacity duration-500 ${isHovered ? 'opacity-0' : 'opacity-100'}`}>
          <div className="h-10 w-10 sm:h-14 sm:w-14 bg-gray-50 rounded-[6px] flex items-center justify-center mb-2 sm:mb-4">
            <span className="text-base sm:text-xl font-bold text-[#109387]">
              {item.name.charAt(0)}
            </span>
          </div>
          <p className="text-sm sm:text-base font-bold text-[#012956] text-center">
            {item.kategorie}
          </p>
        </div>

        {/* Hover Content - Subtle fade in */}
        <div className={`absolute inset-0 flex flex-col justify-between p-3 sm:p-5 transition-opacity duration-500 ${isHovered ? 'opacity-100' : 'opacity-0'}`}>
          <div>
            <p className="text-[10px] sm:text-xs text-[#109387] font-semibold uppercase tracking-wide mb-1 sm:mb-2">
              {item.name}
            </p>
            <p className="text-xs sm:text-sm text-gray-600 leading-relaxed line-clamp-3 sm:line-clamp-none">
              {item.seitentext}
            </p>
          </div>
          <div className="flex items-center gap-1 text-[10px] sm:text-xs text-[#109387] font-medium">
            <span>Website</span>
            <svg className="w-2.5 h-2.5 sm:w-3 sm:h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
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

  // Card width + gap für endlose Animation
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
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#012956] leading-[1.1] mb-6">
            Ausgestattet mit den
            <span className="text-[#109387]"> Besten</span>
          </h2>
          <p className="text-lg text-gray-700 font-semibold max-w-2xl mx-auto">
            Professionelle Ausrüstung ist die Grundlage für professionelle Ergebnisse.
          </p>
        </motion.div>

      </div>

      {/* Infinite Slider - läuft auf allen Bildschirmgrößen */}
      <div className="relative">

        {/* Gradient Overlays */}
        <div className="absolute left-0 top-0 bottom-0 w-16 sm:w-24 lg:w-32 bg-gradient-to-r from-[#f8f9fa] to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-16 sm:w-24 lg:w-32 bg-gradient-to-l from-[#f8f9fa] to-transparent z-10 pointer-events-none" />

        {/* Infinite Slider Track */}
        <motion.div
          animate={controls}
          className="flex gap-4 sm:gap-6 py-4"
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
