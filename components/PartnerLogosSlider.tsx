'use client'

import { useState, useEffect } from 'react'
import { motion, useAnimationControls } from 'framer-motion'
import Image from 'next/image'

// Partner/Hersteller mit URLs, Beschreibungen und Logos
const partner = [
  {
    name: 'Kärcher',
    kategorie: 'Reinigungsgeräte',
    url: 'https://www.kaercher.com/de/professional.html',
    seitentext: 'Für maschinelle Innen- und Außenreinigung setzen wir auf professionelle Reinigungsgeräte von Kärcher.',
    logoAvif: '/images/ueber-uns/avif/Logo_Kärcher_Fimi.avif',
    logoWebp: '/images/ueber-uns/webp/Logo_Kärcher_Fimi.webp',
  },
  {
    name: 'Unger',
    kategorie: 'Fensterreinigung',
    url: 'https://www.ungerglobal.com/de/startseite',
    seitentext: 'Für Glas- und Fensterreinigung nutzen wir ergonomische Werkzeuge und Systeme von Unger.',
    logoAvif: '/images/ueber-uns/avif/Logo_Unger_Fimi.avif',
    logoWebp: '/images/ueber-uns/webp/Logo_Unger_Fimi.webp',
  },
  {
    name: 'Vermop',
    kategorie: 'Reinigungssysteme',
    url: 'https://www.vermop.com/de-de/',
    seitentext: 'Unsere Wagen- und Moppsysteme stammen von Vermop, einem führenden Hersteller professioneller Reinigungssysteme.',
    logoAvif: '/images/ueber-uns/avif/Logo_Vermop_Fimi.avif',
    logoWebp: '/images/ueber-uns/webp/Logo_Vermop_Fimi.webp',
  },
  {
    name: 'Dreiturm',
    kategorie: 'Reinigungsmittel',
    url: 'https://dreiturm-reinigungsmittel.de/',
    seitentext: 'Bei Reinigungs- und Pflegemitteln setzen wir auf hochwertige Produkte von Dreiturm.',
    logoAvif: '/images/ueber-uns/avif/Logo_Dreitrum_Fimi.avif',
    logoWebp: '/images/ueber-uns/webp/Logo_Dreitrum_Fimi.webp',
  },
  {
    name: 'Dr. Schnell',
    kategorie: 'Hygiene',
    url: 'https://www.dr-schnell.com/',
    seitentext: 'Für Küchen-, Sanitär- und Flächenhygiene verwenden wir Reinigungs- und Desinfektionsmittel von DR.SCHNELL.',
    logoAvif: '/images/ueber-uns/avif/Logo_DrSchnell_Fimi.avif',
    logoWebp: '/images/ueber-uns/webp/Logo_DrSchnell_Fimi.webp',
  },
  {
    name: 'Ecolab',
    kategorie: 'Desinfektion',
    url: 'https://en-de.ecolab.com/',
    seitentext: 'In hygienekritischen Bereichen arbeiten wir mit Desinfektions- und Hygienelösungen von Ecolab.',
    logoAvif: '/images/ueber-uns/avif/Logo_Ecolab_Fimi.avif',
    logoWebp: '/images/ueber-uns/webp/Logo_Ecolab_Fimi.webp',
  },
  {
    name: 'Numatic',
    kategorie: 'Staubsauger',
    url: 'https://www.numatic.de/',
    seitentext: 'Für die tägliche Unterhaltsreinigung setzen wir auf robuste Profistaubsauger von Numatic.',
    logoAvif: '/images/ueber-uns/avif/Logo_Numatic.avif',
    logoWebp: '/images/ueber-uns/webp/Logo_Numatic.webp',
  },
  {
    name: 'Taski',
    kategorie: 'Bodenreinigung',
    url: 'https://taski.com/',
    seitentext: 'Auf großen Flächen kommen bei uns Scheuersaugmaschinen und Bodenreinigungstechnik von TASKI zum Einsatz.',
    logoAvif: '/images/ueber-uns/avif/Logo_Taksi_fimi.avif',
    logoWebp: '/images/ueber-uns/webp/Logo_Taksi_fimi.webp',
  },
  {
    name: 'Hagleitner',
    kategorie: 'Spendersysteme',
    url: 'https://www.hagleitner.com/de/',
    seitentext: 'Unsere Waschraum- und Spendersysteme beziehen wir von Hagleitner, Spezialist für digitale Hygienelösungen.',
    logoAvif: '/images/ueber-uns/avif/Logo_Hagleitner_Fimi.avif',
    logoWebp: '/images/ueber-uns/webp/Logo_Hagleitner_Fimi.webp',
  },
  {
    name: 'Wetrok',
    kategorie: 'Maschinen',
    url: 'https://wetrok.de/',
    seitentext: 'Je nach Objekt setzen wir Reinigungsmaschinen und -chemie von Wetrok ein.',
    logoAvif: '/images/ueber-uns/avif/Logo_Wtrok_Fimi.avif',
    logoWebp: '/images/ueber-uns/webp/Logo_Wtrok_Fimi.webp',
  },
  {
    name: 'CopterClean',
    kategorie: 'Drohnenreinigung',
    url: 'https://www.copterclean.de/',
    seitentext: 'Für schwer zugängliche Fassaden, Dächer und PV-Anlagen arbeiten wir mit der Drohnenreinigung von CopterClean.',
    logoAvif: '/images/ueber-uns/avif/Logo_Copterclean_Fimi.avif',
    logoWebp: '/images/ueber-uns/webp/Logo_Copterclean_Fimi.webp',
  },
  {
    name: 'STIHL',
    kategorie: 'Außenanlagen',
    url: 'https://www.stihl.de/',
    seitentext: 'Bei der Reinigung von Außenanlagen nutzen wir Hochdruckreiniger und Geräte von STIHL.',
    logoAvif: '/images/ueber-uns/avif/Logo_Stihl_Fimi.avif',
    logoWebp: '/images/ueber-uns/webp/Logo_Stihl_Fimi.webp',
  },
  {
    name: 'Hako',
    kategorie: 'Kommunalmaschinen',
    url: 'https://www.hako.com/',
    seitentext: 'Für großflächige Außen- und Kommunalreinigung kommen Kehr- und Reinigungsmaschinen von Hako zum Einsatz.',
    logoAvif: '/images/ueber-uns/avif/Logo_Hako_Fimi.avif',
    logoWebp: '/images/ueber-uns/webp/Logo_Hako_Fimi.webp',
  },
]

// Partner Card Komponente
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
      <div className="absolute inset-0 bg-white rounded-[6px] shadow-sm transition-shadow duration-500 group-hover:shadow-md">
        {/* Default Content - Logo */}
        <div className={`absolute inset-0 flex flex-col items-center justify-center p-4 sm:p-6 transition-opacity duration-500 ${isHovered ? 'opacity-0' : 'opacity-100'}`}>
          <div className="h-16 w-28 sm:h-20 sm:w-36 lg:h-24 lg:w-40 relative mb-2 sm:mb-3">
            <picture>
              <source srcSet={item.logoAvif} type="image/avif" />
              <source srcSet={item.logoWebp} type="image/webp" />
              <Image
                src={item.logoWebp}
                alt={`${item.name} Logo`}
                fill
                className="object-contain"
                sizes="(max-width: 640px) 112px, (max-width: 1024px) 144px, 160px"
              />
            </picture>
          </div>
          <p className="text-xs sm:text-sm font-semibold text-gray-500 text-center">
            {item.kategorie}
          </p>
        </div>

        {/* Hover Content */}
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

interface PartnerLogosSliderProps {
  showHeader?: boolean
  showStats?: boolean
  bgColor?: string
  className?: string
}

export default function PartnerLogosSlider({
  showHeader = false,
  showStats = false,
  bgColor = '#f8f9fa',
  className = ''
}: PartnerLogosSliderProps) {
  const controls = useAnimationControls()
  const [isPaused, setIsPaused] = useState(false)

  const cardWidth = 256 + 24
  const totalWidth = partner.length * cardWidth

  useEffect(() => {
    if (!isPaused) {
      controls.start({
        x: -totalWidth,
        transition: {
          duration: 80,
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
    <section className={`py-12 lg:py-16 overflow-hidden ${className}`} style={{ backgroundColor: bgColor }} aria-label="Partner und Hersteller">
      {showHeader && (
        <div className="w-full max-w-[1800px] mx-auto px-6 lg:px-12 xl:px-20 mb-8 lg:mb-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-[#012956] leading-[1.1] mb-4">
              Ausgestattet mit den
              <span className="text-[#109387]"> Besten</span>
            </h2>
            <p className="text-base lg:text-lg text-gray-700 font-semibold max-w-2xl mx-auto">
              Professionelle Ausrüstung ist die Grundlage für professionelle Ergebnisse.
            </p>
          </motion.div>
        </div>
      )}

      {/* Infinite Slider */}
      <div className="relative">
        <div
          className="absolute left-0 top-0 bottom-0 w-16 sm:w-24 lg:w-32 z-10 pointer-events-none"
          style={{ background: `linear-gradient(to right, ${bgColor}, transparent)` }}
        />
        <div
          className="absolute right-0 top-0 bottom-0 w-16 sm:w-24 lg:w-32 z-10 pointer-events-none"
          style={{ background: `linear-gradient(to left, ${bgColor}, transparent)` }}
        />

        <motion.div
          animate={controls}
          className="flex gap-4 sm:gap-6 py-4"
          aria-hidden="true"
        >
          {[...partner, ...partner, ...partner].map((item, index) => (
            <PartnerCard
              key={`${item.name}-${index}`}
              item={item}
              onHover={handleCardHover}
            />
          ))}
        </motion.div>
        {/* Screenreader-only: Liste ohne Duplikate */}
        <ul className="sr-only" role="list">
          {partner.map((item) => (
            <li key={item.name}>{item.name} - {item.kategorie}</li>
          ))}
        </ul>
      </div>

      {showStats && (
        <div className="w-full max-w-[1800px] mx-auto px-6 lg:px-12 xl:px-20 mt-8 lg:mt-12">
          <div className="flex justify-center items-center gap-4 sm:gap-6 lg:gap-8 text-center">
            <div>
              <p className="text-xl sm:text-2xl lg:text-3xl font-bold text-[#109387]">13+</p>
              <p className="text-gray-600 font-semibold text-xs sm:text-sm">Premium Hersteller</p>
            </div>
            <div className="w-px h-8 sm:h-10 bg-gray-300" />
            <div>
              <p className="text-xl sm:text-2xl lg:text-3xl font-bold text-[#109387]">100%</p>
              <p className="text-gray-600 font-semibold text-xs sm:text-sm">Markenqualität</p>
            </div>
            <div className="w-px h-8 sm:h-10 bg-gray-300" />
            <div>
              <p className="text-xl sm:text-2xl lg:text-3xl font-bold text-[#109387]">72h</p>
              <p className="text-gray-600 font-semibold text-xs sm:text-sm">Zulieferung</p>
            </div>
          </div>
        </div>
      )}

      {/* Rechtlicher Hinweis zu Marken */}
      <div className="w-full max-w-[1800px] mx-auto px-6 lg:px-12 xl:px-20 mt-6 lg:mt-8">
        <p className="text-xs text-gray-400 text-center leading-relaxed max-w-4xl mx-auto">
          Hinweis: Die aufgeführten Marken und Hersteller dienen ausschließlich der Information über von uns eingesetzte oder potenziell einsetzbare Produkte und Geräte. Es besteht keine Geschäftspartnerschaft, Kooperation oder Exklusivvereinbarung mit den genannten Unternehmen. Der Einsatz erfolgt projektbezogen je nach Anforderung und Verfügbarkeit.
        </p>
      </div>
    </section>
  )
}
