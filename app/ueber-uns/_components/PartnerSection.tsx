'use client'

import { useState, useRef, useEffect } from 'react'
import { motion } from 'framer-motion'

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
  { name: 'Sill', kategorie: 'Reinigungstechnik' },
]

export default function PartnerSection() {
  const sliderRef = useRef<HTMLDivElement>(null)
  const [canScrollLeft, setCanScrollLeft] = useState(false)
  const [canScrollRight, setCanScrollRight] = useState(true)

  const checkScrollButtons = () => {
    if (sliderRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = sliderRef.current
      setCanScrollLeft(scrollLeft > 0)
      setCanScrollRight(scrollLeft < scrollWidth - clientWidth - 10)
    }
  }

  useEffect(() => {
    checkScrollButtons()
    const slider = sliderRef.current
    if (slider) {
      slider.addEventListener('scroll', checkScrollButtons)
      return () => slider.removeEventListener('scroll', checkScrollButtons)
    }
  }, [])

  const scroll = (direction: 'left' | 'right') => {
    if (sliderRef.current) {
      const scrollAmount = 300
      sliderRef.current.scrollBy({
        left: direction === 'left' ? -scrollAmount : scrollAmount,
        behavior: 'smooth'
      })
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

      {/* Slider with Navigation */}
      <div className="relative w-full max-w-[1800px] mx-auto px-6 lg:px-12 xl:px-20">

        {/* Left Navigation Button */}
        <button
          onClick={() => scroll('left')}
          disabled={!canScrollLeft}
          className={`absolute left-2 lg:left-4 top-1/2 -translate-y-1/2 z-20 w-12 h-12 lg:w-14 lg:h-14 rounded-full bg-white shadow-lg flex items-center justify-center transition-all duration-300 ${
            canScrollLeft
              ? 'hover:bg-[#109387] hover:text-white hover:scale-110 cursor-pointer'
              : 'opacity-40 cursor-not-allowed'
          }`}
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
          disabled={!canScrollRight}
          className={`absolute right-2 lg:right-4 top-1/2 -translate-y-1/2 z-20 w-12 h-12 lg:w-14 lg:h-14 rounded-full bg-white shadow-lg flex items-center justify-center transition-all duration-300 ${
            canScrollRight
              ? 'hover:bg-[#109387] hover:text-white hover:scale-110 cursor-pointer'
              : 'opacity-40 cursor-not-allowed'
          }`}
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
        <div className="absolute left-6 lg:left-12 xl:left-20 top-0 bottom-0 w-16 lg:w-24 bg-gradient-to-r from-[#f8f9fa] to-transparent z-10 pointer-events-none" />
        <div className="absolute right-6 lg:right-12 xl:right-20 top-0 bottom-0 w-16 lg:w-24 bg-gradient-to-l from-[#f8f9fa] to-transparent z-10 pointer-events-none" />

        {/* Slider Track */}
        <div
          ref={sliderRef}
          className="flex gap-6 overflow-x-auto scrollbar-hide scroll-smooth px-8 lg:px-16"
          style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
        >
          {partner.map((item, index) => (
            <motion.div
              key={item.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.05 }}
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
            </motion.div>
          ))}
        </div>
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
