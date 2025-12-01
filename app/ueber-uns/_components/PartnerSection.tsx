'use client'

import { useState, useRef, useEffect } from 'react'
import { motion, useAnimationControls } from 'framer-motion'

// Partner/Hersteller mit denen typische Reinigungsfirmen arbeiten
const partner = [
  { name: 'Kärcher', kategorie: 'Reinigungsgeräte' },
  { name: 'Unger', kategorie: 'Fensterreinigung' },
  { name: 'Vermop', kategorie: 'Reinigungssysteme' },
  { name: 'Tana', kategorie: 'Reinigungsmittel' },
  { name: 'Dr. Schnell', kategorie: 'Hygiene' },
  { name: 'Ecolab', kategorie: 'Desinfektion' },
  { name: 'Numatic', kategorie: 'Staubsauger' },
  { name: 'Taski', kategorie: 'Bodenreinigung' },
  { name: 'Hagleitner', kategorie: 'Spendersysteme' },
  { name: 'Wetrok', kategorie: 'Maschinen' },
  { name: 'Copterclean', kategorie: 'Drohnenreinigung' },
  { name: 'Deolo', kategorie: 'Reinigungslösungen' },
  { name: 'STIHL', kategorie: 'Reinigungstechnik & Kommunalgeräte' },
  { name: 'Hako', kategorie: 'Kommunalmaschinen' },
]

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
    }
  }, [isPaused, controls, totalWidth])

  const scroll = (direction: 'left' | 'right') => {
    setIsPaused(true)
    if (containerRef.current) {
      const currentX = containerRef.current.getBoundingClientRect().left
      const scrollAmount = direction === 'left' ? cardWidth : -cardWidth

      controls.stop()
      controls.set({ x: `+=${scrollAmount}` })

      // Resume auto-scroll after 3 seconds
      setTimeout(() => {
        setIsPaused(false)
      }, 3000)
    }
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
            Ausgestattet mit den
            <span className="text-[#109387]"> Besten</span>
          </h2>
          <p className="text-lg text-gray-700 font-semibold max-w-2xl mx-auto mb-2">
            Wir arbeiten nur mit führenden Herstellern zusammen.
          </p>
          <p className="text-lg text-gray-700 font-semibold max-w-2xl mx-auto">
            Professionelle Ausrüstung ist die Grundlage für professionelle Ergebnisse.
          </p>
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
          className="flex gap-6"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          {/* Triple the items for seamless infinite loop */}
          {[...partner, ...partner, ...partner].map((item, index) => (
            <div
              key={`${item.name}-${index}`}
              className="flex-shrink-0 bg-white rounded-[6px] p-8 w-64 shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
            >
              {/* Logo Placeholder */}
              <div className="h-16 bg-gradient-to-br from-gray-50 to-gray-100 rounded-[6px] flex items-center justify-center mb-4">
                <span className="text-2xl font-bold text-[#109387]">
                  {item.name.charAt(0)}
                </span>
              </div>

              <h3 className="text-lg font-bold text-[#012956] text-center mb-1">
                {item.name}
              </h3>
              <p className="text-sm text-gray-500 font-semibold text-center">
                {item.kategorie}
              </p>
            </div>
          ))}
        </motion.div>
      </div>

      {/* Static Grid for smaller screens */}
      <div className="lg:hidden mt-8 w-full max-w-[1800px] mx-auto px-6">
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
          {partner.slice(0, 6).map((item) => (
            <div
              key={item.name}
              className="bg-white rounded-[6px] p-4 shadow-sm text-center"
            >
              <div className="h-12 bg-gray-100 rounded-[6px] flex items-center justify-center mb-2">
                <span className="text-xl font-bold text-[#109387]">
                  {item.name.charAt(0)}
                </span>
              </div>
              <p className="text-sm font-bold text-[#012956]">{item.name}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom Info */}
      <div className="w-full max-w-[1800px] mx-auto px-6 lg:px-12 xl:px-20 mt-12">
        <div className="flex flex-wrap justify-center gap-8 text-center">
          <div>
            <p className="text-3xl font-bold text-[#109387]">14+</p>
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
