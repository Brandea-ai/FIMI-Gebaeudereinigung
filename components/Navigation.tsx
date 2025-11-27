'use client'

import React, { useState, useEffect, useRef, useCallback } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { ArrowRight, Phone, ChevronDown, Building2, Factory, Wrench, Sparkles } from 'lucide-react'

// Mega Menu Data
const leistungenCategories = [
  {
    id: 'gewerblich',
    title: 'Gewerbliche Reinigung',
    icon: Building2,
    image: 'https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=400&auto=format&fit=crop',
    services: [
      { name: 'Unterhaltsreinigung', href: '/leistungen/unterhaltsreinigung' },
      { name: 'Büroreinigung', href: '/leistungen/bueroreinigung' },
      { name: 'Glasreinigung', href: '/leistungen/glasreinigung' },
      { name: 'Fensterreinigung', href: '/leistungen/fensterreinigung' },
    ],
  },
  {
    id: 'industrie',
    title: 'Industriereinigung',
    icon: Factory,
    image: 'https://images.unsplash.com/photo-1565688534245-05d6b5be184a?q=80&w=400&auto=format&fit=crop',
    services: [
      { name: 'Industriereinigung', href: '/leistungen/industriereinigung' },
      { name: 'Hallenreinigung', href: '/leistungen/hallenreinigung' },
      { name: 'Maschinenreinigung', href: '/leistungen/maschinenreinigung' },
      { name: 'Tiefgaragenreinigung', href: '/leistungen/tiefgaragenreinigung' },
    ],
  },
  {
    id: 'facility',
    title: 'Facility Management',
    icon: Wrench,
    image: 'https://images.unsplash.com/photo-1581578731548-c64695cc6952?q=80&w=400&auto=format&fit=crop',
    services: [
      { name: 'Facility Management', href: '/leistungen/facility-management' },
      { name: 'Hausmeisterservice', href: '/leistungen/hausmeisterservice' },
      { name: 'Winterdienst', href: '/leistungen/winterdienst' },
      { name: 'Außenanlagenpflege', href: '/leistungen/aussenanlagenpflege' },
    ],
  },
  {
    id: 'spezial',
    title: 'Spezialreinigung',
    icon: Sparkles,
    image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?q=80&w=400&auto=format&fit=crop',
    services: [
      { name: 'Fassadenreinigung', href: '/leistungen/fassadenreinigung' },
      { name: 'Baureinigung', href: '/leistungen/baureinigung' },
      { name: 'Sonderreinigung', href: '/leistungen/sonderreinigung' },
      { name: 'Parkplatzreinigung', href: '/leistungen/parkplatzreinigung' },
    ],
  },
]

export default function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [isNavVisible, setIsNavVisible] = useState(true)
  const [lastScrollY, setLastScrollY] = useState(0)
  const [showNavToggle, setShowNavToggle] = useState(false)
  const [showMobileMenuButton, setShowMobileMenuButton] = useState(true)
  const [mobileMenuHalfHidden, setMobileMenuHalfHidden] = useState(false)
  const [isMegaMenuOpen, setIsMegaMenuOpen] = useState(false)
  const [mobileLeistungenOpen, setMobileLeistungenOpen] = useState(false)
  const lastScrollTime = useRef<number>(Date.now())
  const autoHideIntervalRef = useRef<NodeJS.Timeout | null>(null)
  const megaMenuTimeoutRef = useRef<NodeJS.Timeout | null>(null)

  // Auto-Hide Interval
  useEffect(() => {
    autoHideIntervalRef.current = setInterval(() => {
      const timeSinceLastScroll = Date.now() - lastScrollTime.current

      if (timeSinceLastScroll >= 1500) {
        const currentScrollY = window.scrollY

        if (currentScrollY > 100) {
          setShowNavToggle(false)
          setMobileMenuHalfHidden(true)
        }
      }
    }, 200)

    return () => {
      if (autoHideIntervalRef.current) {
        clearInterval(autoHideIntervalRef.current)
      }
    }
  }, [])

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY
      setIsScrolled(currentScrollY > 20)

      lastScrollTime.current = Date.now()

      if (currentScrollY < 100) {
        setIsNavVisible(true)
        setShowNavToggle(false)
        setShowMobileMenuButton(true)
        setMobileMenuHalfHidden(false)
      } else {
        if (currentScrollY > lastScrollY && currentScrollY > 100) {
          setIsNavVisible(false)
          setShowNavToggle(false)
          setShowMobileMenuButton(false)
          setMobileMenuHalfHidden(false)
          setIsMegaMenuOpen(false)
        } else if (currentScrollY < lastScrollY) {
          setShowNavToggle(true)
          setShowMobileMenuButton(true)
          setMobileMenuHalfHidden(false)
        }
      }

      setLastScrollY(currentScrollY)
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [lastScrollY])

  const handleShowNav = () => {
    setIsNavVisible(true)
    setShowNavToggle(false)
  }

  const scrollToContact = useCallback((e: React.MouseEvent) => {
    e.preventDefault()
    setIsMobileMenuOpen(false)
    setIsMegaMenuOpen(false)
    const footer = document.getElementById('contact-form')
    if (footer) {
      footer.scrollIntoView({ behavior: 'smooth' })
    }
  }, [])

  // Mega Menu Handlers
  const handleMegaMenuEnter = () => {
    if (megaMenuTimeoutRef.current) {
      clearTimeout(megaMenuTimeoutRef.current)
    }
    setIsMegaMenuOpen(true)
  }

  const handleMegaMenuLeave = () => {
    megaMenuTimeoutRef.current = setTimeout(() => {
      setIsMegaMenuOpen(false)
    }, 150)
  }

  const navLinks = [
    { label: 'Über FIMI', href: '/ueber-uns' },
    { label: 'Referenzen', href: '/referenzen' },
    { label: 'Kontakt', href: '/kontakt' },
  ]

  return (
    <>
      {/* Main Navigation */}
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] ${
          isScrolled ? 'bg-white/95 backdrop-blur-lg shadow-lg' : 'bg-white'
        } ${isNavVisible ? 'translate-y-0' : '-translate-y-full'}`}
      >
        <div className="w-full max-w-[1800px] mx-auto px-6 lg:px-12 xl:px-20">
          <div className="flex items-center justify-between h-24 lg:h-32">
            {/* Logo */}
            <Link href="/" className="relative z-10 flex-shrink-0">
              <Image
                src="/FIMI-LOGO/FIMI-Logo_Transparent_FUER-Webseite.png"
                alt="FIMI Gebäudereinigung"
                width={320}
                height={107}
                className="h-20 lg:h-28 w-auto"
                priority
              />
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center gap-8">
              {/* Leistungen with Mega Menu */}
              <div
                className="relative"
                onMouseEnter={handleMegaMenuEnter}
                onMouseLeave={handleMegaMenuLeave}
              >
                <button
                  className={`flex items-center gap-1.5 text-sm font-semibold transition-colors ${
                    isMegaMenuOpen ? 'text-[#109387]' : 'text-[#012956] hover:text-[#109387]'
                  }`}
                >
                  <span>Leistungen</span>
                  <ChevronDown
                    size={16}
                    className={`transition-transform duration-300 ${isMegaMenuOpen ? 'rotate-180' : ''}`}
                  />
                </button>
              </div>

              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-[#012956] hover:text-[#109387] transition-colors text-sm font-semibold"
                >
                  {link.label}
                </Link>
              ))}
            </div>

            {/* CTA Buttons */}
            <div className="hidden lg:flex items-center gap-4">
              <a
                href="tel:+4987143033460"
                className="flex items-center gap-2 text-[#012956] hover:text-[#109387] transition-colors font-semibold text-sm"
              >
                <Phone size={18} />
                <span>0871 430 334 60</span>
              </a>
              <button
                onClick={scrollToContact}
                className="flex items-center gap-2 bg-[#109387] hover:bg-[#0d7d72] text-white font-bold text-sm px-6 py-3 rounded-[6px] transition-all"
              >
                <span>Kostenfreie Besichtigung</span>
                <ArrowRight size={16} />
              </button>
            </div>

            {/* Mobile Menu Button */}
            <div
              className={`lg:hidden transition-all duration-500 ease-out ${
                !showMobileMenuButton
                  ? 'opacity-0 pointer-events-none'
                  : mobileMenuHalfHidden
                    ? 'translate-y-1/2 opacity-70'
                    : 'translate-y-0 opacity-100'
              }`}
            >
              <button
                onClick={() => {
                  if (mobileMenuHalfHidden) {
                    setMobileMenuHalfHidden(false)
                    lastScrollTime.current = Date.now()
                  }
                  setIsMobileMenuOpen(!isMobileMenuOpen)
                }}
                className="p-2 text-[#012956]"
                aria-label="Toggle menu"
              >
                <svg width="28" height="28" viewBox="0 0 24 24" fill="none">
                  {isMobileMenuOpen ? (
                    <path
                      d="M18 6L6 18M6 6l12 12"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  ) : (
                    <path
                      d="M3 12h18M3 6h18M3 18h18"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  )}
                </svg>
              </button>
            </div>
          </div>

          {/* Mobile Menu */}
          <div
            className={`lg:hidden overflow-hidden transition-all duration-300 ${
              isMobileMenuOpen ? 'max-h-[800px] opacity-100' : 'max-h-0 opacity-0'
            }`}
          >
            <div className="py-6 border-t border-gray-100">
              <div className="flex flex-col gap-2">
                {/* Mobile Leistungen Accordion */}
                <div>
                  <button
                    onClick={() => setMobileLeistungenOpen(!mobileLeistungenOpen)}
                    className="flex items-center justify-between w-full text-[#012956] py-3 font-semibold"
                  >
                    <span>Leistungen</span>
                    <ChevronDown
                      size={20}
                      className={`transition-transform duration-300 ${mobileLeistungenOpen ? 'rotate-180' : ''}`}
                    />
                  </button>

                  {/* Mobile Leistungen Content */}
                  <div
                    className={`overflow-hidden transition-all duration-300 ${
                      mobileLeistungenOpen ? 'max-h-[600px] opacity-100' : 'max-h-0 opacity-0'
                    }`}
                  >
                    <div className="pl-4 pb-4 space-y-4">
                      {leistungenCategories.map((category) => (
                        <div key={category.id}>
                          <p className="text-[#109387] font-bold text-sm mb-2">{category.title}</p>
                          <div className="space-y-1">
                            {category.services.map((service) => (
                              <Link
                                key={service.href}
                                href={service.href}
                                className="block text-gray-600 hover:text-[#109387] text-sm py-1 transition-colors"
                                onClick={() => setIsMobileMenuOpen(false)}
                              >
                                {service.name}
                              </Link>
                            ))}
                          </div>
                        </div>
                      ))}
                      <Link
                        href="/leistungen"
                        className="inline-flex items-center gap-2 text-[#012956] font-bold text-sm mt-2"
                        onClick={() => setIsMobileMenuOpen(false)}
                      >
                        Alle Leistungen
                        <ArrowRight size={14} />
                      </Link>
                    </div>
                  </div>
                </div>

                {navLinks.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    className="text-[#012956] hover:text-[#109387] transition-colors py-3 font-semibold"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    {link.label}
                  </Link>
                ))}
                <a
                  href="tel:+4987143033460"
                  className="flex items-center gap-2 text-[#012956] py-3 font-semibold"
                >
                  <Phone size={18} />
                  <span>0871 430 334 60</span>
                </a>
                <button
                  onClick={scrollToContact}
                  className="flex items-center justify-center gap-2 bg-[#109387] hover:bg-[#0d7d72] text-white font-bold px-6 py-4 rounded-[6px] transition-all mt-2"
                >
                  <span>Kostenfreie Besichtigung</span>
                  <ArrowRight size={16} />
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Mega Menu Dropdown */}
        <div
          className={`absolute left-0 right-0 bg-white shadow-2xl border-t border-gray-100 transition-all duration-300 ease-[cubic-bezier(0.22,1,0.36,1)] ${
            isMegaMenuOpen
              ? 'opacity-100 visible translate-y-0'
              : 'opacity-0 invisible -translate-y-4'
          }`}
          onMouseEnter={handleMegaMenuEnter}
          onMouseLeave={handleMegaMenuLeave}
        >
          <div className="w-full max-w-[1800px] mx-auto px-6 lg:px-12 xl:px-20 py-10">
            {/* Category Grid */}
            <div className="grid grid-cols-4 gap-8">
              {leistungenCategories.map((category) => {
                const IconComponent = category.icon
                return (
                  <div key={category.id} className="group">
                    {/* Category Image */}
                    <div className="relative h-32 mb-4 rounded-[6px] overflow-hidden">
                      <Image
                        src={category.image}
                        alt={category.title}
                        fill
                        className="object-cover transition-transform duration-500 group-hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-[#012956]/80 to-transparent" />
                      <div className="absolute bottom-3 left-3 flex items-center gap-2">
                        <IconComponent size={18} className="text-white" />
                        <span className="text-white font-bold text-sm">{category.title}</span>
                      </div>
                    </div>

                    {/* Services List */}
                    <ul className="space-y-2">
                      {category.services.map((service) => (
                        <li key={service.href}>
                          <Link
                            href={service.href}
                            className="flex items-center gap-2 text-gray-600 hover:text-[#109387] transition-colors text-sm font-medium group/link"
                            onClick={() => setIsMegaMenuOpen(false)}
                          >
                            <ArrowRight
                              size={12}
                              className="text-gray-300 group-hover/link:text-[#109387] group-hover/link:translate-x-0.5 transition-all"
                            />
                            {service.name}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                )
              })}
            </div>

            {/* Bottom CTA */}
            <div className="mt-8 pt-6 border-t border-gray-100 flex items-center justify-between">
              <div>
                <p className="text-[#012956] font-bold">Alle Leistungen entdecken</p>
                <p className="text-gray-500 text-sm">16+ professionelle Reinigungsservices</p>
              </div>
              <Link
                href="/leistungen"
                className="flex items-center gap-2 bg-[#012956] hover:bg-[#01203d] text-white font-bold text-sm px-6 py-3 rounded-[6px] transition-all group"
                onClick={() => setIsMegaMenuOpen(false)}
              >
                <span>Zur Übersicht</span>
                <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </div>
        </div>
      </nav>

      {/* Floating Nav Toggle Button */}
      <div
        className={`fixed top-4 left-1/2 -translate-x-1/2 z-40 transition-opacity duration-300 ${
          showNavToggle ? 'opacity-100' : 'opacity-0 pointer-events-none'
        }`}
      >
        <button
          onClick={handleShowNav}
          className="group"
          aria-label="Navigation anzeigen"
        >
          <div
            className="bg-[#109387]/95 backdrop-blur-md px-6 py-3 rounded-[6px]
              shadow-[0_4px_20px_rgba(16,147,135,0.3)]
              transition-all duration-300 ease-[cubic-bezier(0.22,1,0.36,1)]
              hover:bg-[#109387] hover:shadow-[0_6px_25px_rgba(16,147,135,0.4)]
              flex items-center gap-3"
          >
            <ChevronDown size={18} className="text-white/90" />
            <span className="text-white/90 text-sm font-semibold">Menü</span>
          </div>
        </button>
      </div>

      {/* Spacer für fixed Navigation */}
      <div className="h-24 lg:h-32" />
    </>
  )
}
