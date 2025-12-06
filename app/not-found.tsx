'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { Home, Phone, ArrowRight, Building2, Briefcase, Mail, Sparkles } from 'lucide-react'

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
      description: 'Zurück zur Hauptseite',
      icon: Home,
      primary: true,
    },
    {
      id: 'branchen',
      name: 'Alle Branchen',
      href: '/branchen',
      description: '12 Branchenlösungen',
      icon: Building2,
    },
    {
      id: 'leistungen',
      name: 'Alle Leistungen',
      href: '/leistungen',
      description: '18 Reinigungsservices',
      icon: Briefcase,
    },
    {
      id: 'kontakt',
      name: 'Kontakt',
      href: '/kontakt',
      description: 'Wir helfen Ihnen',
      icon: Mail,
    },
  ]

  return (
    <section className="relative min-h-screen">
      {/* Background Image - Full Screen */}
      <div className="absolute inset-0">
        <img
          src="/images/404 cover Bild.png"
          alt="Freundliche Reinigungsutensilien - Seite nicht gefunden"
          className="w-full h-full object-cover"
        />
        {/* Overlay für besseren Kontrast */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#012956]/85 via-[#012956]/60 to-[#012956]/40" />
      </div>

      {/* Content */}
      <div className="relative z-10 min-h-screen flex items-center">
        <div className="w-full max-w-[1800px] mx-auto px-6 lg:px-12 xl:px-20 py-32">
          <div className="max-w-4xl">
            {/* 404 Badge */}
            <div
              className={`inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm text-white px-5 py-2.5 rounded-full text-sm font-bold mb-6 transition-all duration-700 ${
                mounted ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-4'
              }`}
            >
              <Sparkles size={18} className="text-[#109387]" />
              Fehler 404 - Seite nicht gefunden
            </div>

            {/* Main Headline */}
            <h1
              className={`text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-white leading-[1.05] mb-5 transition-all duration-700 delay-100 ${
                mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
              }`}
            >
              Ups! Hier ist alles{' '}
              <span className="text-[#109387]">blitzeblank</span>
            </h1>

            {/* Subheadline */}
            <p
              className={`text-xl md:text-2xl lg:text-3xl font-bold text-white mb-10 leading-snug transition-all duration-700 delay-200 ${
                mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
              }`}
            >
              Diese Seite wurde so gründlich gereinigt,
              <br />
              <span className="text-[#109387]">dass sie verschwunden ist!</span>
            </p>

            {/* Navigation Buttons */}
            <div
              className={`grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4 mb-10 max-w-2xl transition-all duration-700 delay-300 ${
                mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
              }`}
            >
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
                    className={`group relative overflow-hidden font-bold px-6 py-4 rounded-[6px] transition-all duration-300 shadow-lg hover:shadow-xl active:scale-[0.98] ${
                      isPrimary
                        ? 'sm:col-span-2 bg-[#109387] hover:bg-[#0d7d72] text-white'
                        : 'bg-white hover:bg-gray-100 text-[#012956]'
                    }`}
                  >
                    {/* Shine Effect */}
                    <div
                      className={`absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full transition-transform duration-700 ${
                        isHovered ? 'translate-x-full' : ''
                      }`}
                    />

                    <div className="relative flex items-center gap-3">
                      <IconComponent
                        size={22}
                        className={`transition-transform duration-300 ${isHovered ? 'scale-110' : ''} ${
                          isPrimary ? 'text-white' : 'text-[#109387]'
                        }`}
                      />
                      <div className="text-left flex-1">
                        <span className="block text-base font-bold">{button.name}</span>
                        <span className={`block text-sm font-semibold ${isPrimary ? 'text-white/80' : 'text-gray-500'}`}>
                          {button.description}
                        </span>
                      </div>
                      <ArrowRight
                        size={20}
                        className={`transition-all duration-300 ${
                          isHovered ? 'translate-x-1' : ''
                        } ${isPrimary ? 'text-white' : 'text-[#109387]'}`}
                      />
                    </div>
                  </Link>
                )
              })}
            </div>

            {/* Direct Contact */}
            <div
              className={`flex flex-col sm:flex-row items-start sm:items-center gap-4 transition-all duration-700 delay-400 ${
                mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
              }`}
            >
              <span className="text-white/70 font-semibold">Oder rufen Sie uns direkt an:</span>
              <a
                href="tel:+4987143033460"
                className="inline-flex items-center gap-3 bg-white hover:bg-gray-100 text-[#012956] font-bold text-lg px-6 py-3.5 rounded-[6px] transition-all duration-300 shadow-lg"
              >
                <Phone size={20} />
                0871 430 334 60
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Floating Badge - Desktop Only */}
      <div className="absolute bottom-8 right-8 lg:bottom-12 lg:right-12 hidden lg:block">
        <div
          className={`bg-white rounded-[6px] p-5 shadow-2xl transition-all duration-700 delay-500 ${
            mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
          }`}
        >
          <div className="flex items-center gap-4">
            <Sparkles size={28} className="text-[#109387]" />
            <div>
              <div className="font-bold text-[#012956] text-lg">
                Wir helfen Ihnen weiter
              </div>
              <div className="text-gray-600 font-semibold">
                Finden Sie die richtige Seite.
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
