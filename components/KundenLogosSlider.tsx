'use client'

import { useState, useEffect } from 'react'
import { motion, useAnimationControls } from 'framer-motion'
import Image from 'next/image'

// Kunden/Referenzen mit Logos
const kunden = [
  {
    name: 'Stadt Landshut',
    branche: 'Öffentlicher Sektor',
    logoAvif: '/images/ueber-uns/avif-2/Logo_Stadt_Landshut_Fiimi.avif',
    logoWebp: '/images/ueber-uns/webp-2/Logo_Stadt_Landshut_Fiimi.webp',
  },
  {
    name: 'TÜV Süd',
    branche: 'Prüfdienstleistungen',
    logoAvif: '/images/ueber-uns/avif-2/Logo_Tüv-Süd_Fimi.avif',
    logoWebp: '/images/ueber-uns/webp-2/Logo_Tüv-Süd_Fimi.webp',
  },
  {
    name: 'Allianz Versicherung',
    branche: 'Versicherung',
    logoAvif: '/images/ueber-uns/avif-2/Logo_Allianz-Versicherung_Fimi.avif',
    logoWebp: '/images/ueber-uns/webp-2/Logo_Allianz-Versicherung_Fimi.webp',
  },
  {
    name: 'Texas Instruments',
    branche: 'Technologie',
    logoAvif: '/images/ueber-uns/avif-2/Logo_Texas-Intruments_Fimi.avif',
    logoWebp: '/images/ueber-uns/webp-2/Logo_Texas-Intruments_Fimi.webp',
  },
  {
    name: 'Volksbank Raiffeisenbank',
    branche: 'Finanzwesen',
    logoAvif: '/images/ueber-uns/avif-2/Logo_volksbank-Raiffeisenbank_Fimi.avif',
    logoWebp: '/images/ueber-uns/webp-2/Logo_volksbank-Raiffeisenbank_Fimi.webp',
  },
  {
    name: 'Flottweg',
    branche: 'Maschinenbau',
    logoAvif: '/images/ueber-uns/avif-2/Logo_Flottweg_Fimi.avif',
    logoWebp: '/images/ueber-uns/webp-2/Logo_Flottweg_Fimi.webp',
  },
  {
    name: 'ALDI',
    branche: 'Einzelhandel',
    logoAvif: '/images/ueber-uns/avif-2/Logo_Aldi_Fimi.avif',
    logoWebp: '/images/ueber-uns/webp-2/Logo_Aldi_Fimi.webp',
  },
  {
    name: 'EDEKA',
    branche: 'Einzelhandel',
    logoAvif: '/images/ueber-uns/avif-2/Logo_Edeka_Fimi.avif',
    logoWebp: '/images/ueber-uns/webp-2/Logo_Edeka_Fimi.webp',
  },
  {
    name: 'Einhell',
    branche: 'Werkzeuge',
    logoAvif: '/images/ueber-uns/avif-2/Logo_Einhell_Fimi.avif',
    logoWebp: '/images/ueber-uns/webp-2/Logo_Einhell_Fimi.webp',
  },
  {
    name: 'Europcar Landshut',
    branche: 'Mobilität',
    logoAvif: '/images/ueber-uns/avif-2/Logo_Europcar-Landshut_Fimi.avif',
    logoWebp: '/images/ueber-uns/webp-2/Logo_Europcar-Landshut_Fimi.webp',
  },
  {
    name: 'Staudinger Loiching',
    branche: 'Gewerbe',
    logoAvif: '/images/ueber-uns/avif-2/Logo_Staudinger-Loiching_Fimi.avif',
    logoWebp: '/images/ueber-uns/webp-2/Logo_Staudinger-Loiching_Fimi.webp',
  },
  {
    name: 'Strama MPS',
    branche: 'Industrie',
    logoAvif: '/images/ueber-uns/avif-2/Logo_Strama-mps_Fimi.avif',
    logoWebp: '/images/ueber-uns/webp-2/Logo_Strama-mps_Fimi.webp',
  },
]

// Kunden Card Komponente
function KundeCard({ item }: { item: typeof kunden[0] }) {
  return (
    <div className="flex-shrink-0 w-36 sm:w-44 lg:w-52 h-24 sm:h-28 lg:h-32 relative group">
      <div className="absolute inset-0 bg-white rounded-[6px] shadow-sm transition-all duration-300 group-hover:shadow-md flex items-center justify-center p-4 sm:p-5 lg:p-6">
        <div className="h-12 w-24 sm:h-14 sm:w-28 lg:h-16 lg:w-32 relative">
          <picture>
            <source srcSet={item.logoAvif} type="image/avif" />
            <source srcSet={item.logoWebp} type="image/webp" />
            <Image
              src={item.logoWebp}
              alt={`${item.name} Logo`}
              fill
              className="object-contain filter grayscale opacity-70 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-300"
              sizes="(max-width: 640px) 96px, (max-width: 1024px) 112px, 128px"
            />
          </picture>
        </div>
      </div>
    </div>
  )
}

interface KundenLogosSliderProps {
  showHeader?: boolean
  showStats?: boolean
  bgColor?: string
  className?: string
  direction?: 'left' | 'right'
}

export default function KundenLogosSlider({
  showHeader = true,
  showStats = true,
  bgColor = '#ffffff',
  className = '',
  direction = 'left'
}: KundenLogosSliderProps) {
  const controls = useAnimationControls()
  const [isPaused, setIsPaused] = useState(false)

  const cardWidth = 208 + 16 // w-52 (208px) + gap-4 (16px)
  const totalWidth = kunden.length * cardWidth

  useEffect(() => {
    if (!isPaused) {
      controls.start({
        x: direction === 'left' ? -totalWidth : 0,
        transition: {
          duration: 60,
          repeat: Infinity,
          ease: 'linear',
          repeatType: 'loop',
        },
      })
    } else {
      controls.stop()
    }
  }, [isPaused, controls, totalWidth, direction])

  return (
    <section className={`py-16 lg:py-24 overflow-hidden ${className}`} style={{ backgroundColor: bgColor }}>
      {showHeader && (
        <div className="w-full max-w-[1800px] mx-auto px-6 lg:px-12 xl:px-20 mb-10 lg:mb-14">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <p className="text-sm text-[#109387] font-semibold uppercase tracking-wider mb-3">
              Referenzen
            </p>
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-[#012956] leading-[1.1] mb-4">
              Diese Unternehmen vertrauen
              <span className="text-[#109387]"> FIMI</span>
            </h2>
            <p className="text-base lg:text-lg text-gray-600 font-medium max-w-2xl mx-auto">
              Von lokalen Betrieben bis hin zu internationalen Konzernen – wir liefern zuverlässig Qualität.
            </p>
          </motion.div>
        </div>
      )}

      {/* Infinite Slider */}
      <div
        className="relative"
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
      >
        <div
          className="absolute left-0 top-0 bottom-0 w-12 sm:w-20 lg:w-28 z-10 pointer-events-none"
          style={{ background: `linear-gradient(to right, ${bgColor}, transparent)` }}
        />
        <div
          className="absolute right-0 top-0 bottom-0 w-12 sm:w-20 lg:w-28 z-10 pointer-events-none"
          style={{ background: `linear-gradient(to left, ${bgColor}, transparent)` }}
        />

        <motion.div
          animate={controls}
          initial={{ x: direction === 'right' ? -totalWidth : 0 }}
          className="flex gap-3 sm:gap-4 py-2"
        >
          {[...kunden, ...kunden, ...kunden].map((item, index) => (
            <KundeCard
              key={`${item.name}-${index}`}
              item={item}
            />
          ))}
        </motion.div>
      </div>

      {showStats && (
        <div className="w-full max-w-[1800px] mx-auto px-6 lg:px-12 xl:px-20 mt-10 lg:mt-14">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex justify-center items-center gap-6 sm:gap-8 lg:gap-12 text-center"
          >
            <div>
              <p className="text-2xl sm:text-3xl lg:text-4xl font-bold text-[#012956]">120+</p>
              <p className="text-gray-500 font-semibold text-xs sm:text-sm">Zufriedene Kunden</p>
            </div>
            <div className="w-px h-10 sm:h-12 bg-gray-200" />
            <div>
              <p className="text-2xl sm:text-3xl lg:text-4xl font-bold text-[#012956]">8+</p>
              <p className="text-gray-500 font-semibold text-xs sm:text-sm">Jahre Erfahrung</p>
            </div>
            <div className="w-px h-10 sm:h-12 bg-gray-200" />
            <div>
              <p className="text-2xl sm:text-3xl lg:text-4xl font-bold text-[#012956]">98%</p>
              <p className="text-gray-500 font-semibold text-xs sm:text-sm">Weiterempfehlung</p>
            </div>
          </motion.div>
        </div>
      )}
    </section>
  )
}
