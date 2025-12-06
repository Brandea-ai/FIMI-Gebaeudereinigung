'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { Home, Phone, ArrowRight, Mail } from 'lucide-react'

export default function NotFound() {
  const [mounted, setMounted] = useState(false)
  const [hoveredButton, setHoveredButton] = useState<string | null>(null)

  useEffect(() => {
    setMounted(true)
  }, [])

  const navigationButtons = [
    {
      id: 'home',
      name: 'Zur Startseite',
      href: '/',
      icon: Home,
      primary: true,
    },
    {
      id: 'branchen',
      name: 'Alle Branchen',
      href: '/branchen',
      icon: null,
    },
    {
      id: 'leistungen',
      name: 'Alle Leistungen',
      href: '/leistungen',
      icon: null,
    },
    {
      id: 'kontakt',
      name: 'Kontakt',
      href: '/kontakt',
      icon: Mail,
      fullWidth: true,
    },
  ]

  return (
    <section className="relative min-h-screen">
      {/* Background Image - Full Screen, Fully Visible */}
      <div className="absolute inset-0">
        <img
          src="/images/404 cover Bild.png"
          alt="Freundliche Reinigungsutensilien"
          className="w-full h-full object-cover"
        />
      </div>

      {/* Content - Centered */}
      <div className="relative z-10 min-h-screen flex items-center justify-center px-6 py-12">
        {/* Outer Teal Gradient Container - Transparent */}
        <div
          className={`bg-gradient-to-br from-[#109387]/40 to-[#0d7d72]/40 backdrop-blur-sm rounded-[6px] p-4 sm:p-5 shadow-2xl transition-all duration-700 ${
            mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <div className="text-center">
            {/* Big 404 */}
            <h1 className="text-[80px] sm:text-[100px] md:text-[140px] lg:text-[180px] font-black text-white leading-none mb-0 drop-shadow-lg">
              404
            </h1>

            {/* Title */}
            <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-[#012956] mb-2 -mt-2 sm:-mt-4">
              Seite nicht gefunden
            </h2>

            {/* Subtitle */}
            <p className="text-sm sm:text-base md:text-lg text-[#012956] font-semibold mb-5 max-w-sm mx-auto">
              Diese Seite wurde so gründlich gereinigt, dass sie verschwunden ist!
            </p>

            {/* CTA Box with Dark Background */}
            <div className="bg-gradient-to-br from-[#012956] to-[#01203d] rounded-[6px] p-4 sm:p-5 max-w-sm mx-auto">
            {/* Navigation Buttons */}
            <div className="grid grid-cols-2 gap-2 sm:gap-3 mb-4">
              {navigationButtons.map((button) => {
                const IconComponent = button.icon
                const isHovered = hoveredButton === button.id
                const isPrimary = button.primary
                const isFullWidth = button.primary || button.fullWidth

                return (
                  <Link
                    key={button.id}
                    href={button.href}
                    onMouseEnter={() => setHoveredButton(button.id)}
                    onMouseLeave={() => setHoveredButton(null)}
                    className={`group flex items-center justify-center gap-2 font-bold px-4 py-3 rounded-[6px] transition-all duration-300 text-sm sm:text-base ${
                      isFullWidth ? 'col-span-2' : ''
                    } ${
                      isPrimary
                        ? 'bg-[#109387] hover:bg-[#0d7d72] text-white'
                        : 'bg-white hover:bg-gray-100 text-[#012956]'
                    }`}
                  >
                    {IconComponent && (
                      <IconComponent
                        size={18}
                        className={`transition-transform duration-300 ${isHovered ? 'scale-110' : ''} ${
                          isPrimary ? 'text-white' : 'text-[#109387]'
                        }`}
                      />
                    )}
                    <span>{button.name}</span>
                    <ArrowRight
                      size={16}
                      className={`transition-all duration-300 ${
                        isHovered ? 'translate-x-1' : ''
                      } ${isPrimary ? 'text-white' : 'text-[#109387]'}`}
                    />
                  </Link>
                )
              })}
            </div>

              {/* Phone */}
              <a
                href="tel:+4987143033460"
                className="flex items-center justify-center gap-2 text-white/80 hover:text-white font-semibold text-sm transition-colors"
              >
                <Phone size={16} />
                0871 430 334 60
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
