'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { Home, Phone, ArrowRight, Building2, Briefcase, Mail } from 'lucide-react'

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
      icon: Building2,
    },
    {
      id: 'leistungen',
      name: 'Alle Leistungen',
      href: '/leistungen',
      icon: Briefcase,
    },
    {
      id: 'kontakt',
      name: 'Kontakt',
      href: '/kontakt',
      icon: Mail,
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
        <div
          className={`text-center transition-all duration-700 ${
            mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          {/* Big 404 */}
          <h1 className="text-[120px] sm:text-[180px] md:text-[220px] lg:text-[280px] font-black text-[#012956] leading-none mb-0 drop-shadow-lg">
            404
          </h1>

          {/* Title */}
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-[#012956] mb-2 -mt-4 sm:-mt-6 md:-mt-8">
            Seite nicht gefunden
          </h2>

          {/* Subtitle */}
          <p className="text-base sm:text-lg md:text-xl text-[#012956]/70 font-semibold mb-6 max-w-md mx-auto">
            Diese Seite wurde so gründlich gereinigt, dass sie verschwunden ist!
          </p>

          {/* CTA Box with Gradient Background */}
          <div className="bg-gradient-to-br from-[#012956] to-[#01203d] rounded-[6px] p-5 sm:p-6 max-w-md mx-auto shadow-2xl">
            {/* Navigation Buttons */}
            <div className="grid grid-cols-2 gap-2 sm:gap-3 mb-4">
              {navigationButtons.map((button) => {
                const IconComponent = button.icon
                const isHovered = hoveredButton === button.id
                const isPrimary = button.primary

                return (
                  <Link
                    key={button.id}
                    href={button.href}
                    onMouseEnter={() => setHoveredButton(button.id)}
                    onMouseLeave={() => setHoveredButton(null)}
                    className={`group flex items-center justify-center gap-2 font-bold px-4 py-3 rounded-[6px] transition-all duration-300 text-sm sm:text-base ${
                      isPrimary
                        ? 'col-span-2 bg-[#109387] hover:bg-[#0d7d72] text-white'
                        : 'bg-white hover:bg-gray-100 text-[#012956]'
                    }`}
                  >
                    <IconComponent
                      size={18}
                      className={`transition-transform duration-300 ${isHovered ? 'scale-110' : ''} ${
                        isPrimary ? 'text-white' : 'text-[#109387]'
                      }`}
                    />
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
    </section>
  )
}
