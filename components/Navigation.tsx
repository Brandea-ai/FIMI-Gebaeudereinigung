'use client'

import React, { useState, useEffect, useRef, useCallback } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { ArrowRight, Phone, ChevronDown, Building2, Factory, Wrench, Sparkles, Stethoscope, ShoppingBag, GraduationCap, UtensilsCrossed, Dumbbell, Warehouse, Home, Landmark, Banknote, Car } from 'lucide-react'

// Type für Dropdown States
type DropdownType = 'leistungen' | 'branchen' | 'ueberfimi' | null

// Mega Menu - Leistungen (ALLE 18 Services)
const leistungenCategories = [
  {
    id: 'gewerblich',
    title: 'Gewerbliche Reinigung',
    icon: Building2,
    image: 'https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=400&auto=format&fit=crop',
    services: [
      { name: 'Unterhaltsreinigung', href: '/leistungen/unterhaltsreinigung' },
      { name: 'Büroreinigung', href: '/leistungen/bueroreinigung' },
      { name: 'Fensterreinigung', href: '/leistungen/fensterreinigung' },
      { name: 'Fassadenreinigung', href: '/leistungen/fassadenreinigung' },
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
      { name: 'Parkplatzreinigung', href: '/leistungen/parkplatzreinigung' },
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
      { name: 'Baureinigung', href: '/leistungen/baureinigung' },
      { name: 'Sonderreinigung', href: '/leistungen/sonderreinigung' },
      { name: 'Sonderleistungen', href: '/leistungen/sonderleistungen' },
      { name: 'Beschaffungsmanagement', href: '/leistungen/beschaffungsmanagement' },
    ],
  },
]

// Mega Menu - Branchen (12 Branchen)
const branchenData = [
  { name: 'Büro & Verwaltung', href: '/branchen/buero-verwaltung', icon: Building2 },
  { name: 'Industrie & Produktion', href: '/branchen/industrie-produktion', icon: Factory },
  { name: 'Gesundheitswesen', href: '/branchen/gesundheitswesen', icon: Stethoscope },
  { name: 'Einzelhandel', href: '/branchen/einzelhandel', icon: ShoppingBag },
  { name: 'Gastronomie & Hotellerie', href: '/branchen/gastronomie-hotel', icon: UtensilsCrossed },
  { name: 'Bildung & Schulen', href: '/branchen/bildung-schulen', icon: GraduationCap },
  { name: 'Fitness & Sport', href: '/branchen/fitness-sport', icon: Dumbbell },
  { name: 'Logistik & Lager', href: '/branchen/logistik-lager', icon: Warehouse },
  { name: 'Wohnungswirtschaft', href: '/branchen/wohnungswirtschaft', icon: Home },
  { name: 'Öffentliche Einrichtungen', href: '/branchen/oeffentliche-einrichtungen', icon: Landmark },
  { name: 'Banken & Versicherungen', href: '/branchen/banken-versicherungen', icon: Banknote },
  { name: 'Automotive', href: '/branchen/automotive', icon: Car },
]

export default function Navigation() {
  const pathname = usePathname()
  const isHomePage = pathname === '/'

  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [isNavVisible, setIsNavVisible] = useState(true)
  const [lastScrollY, setLastScrollY] = useState(0)
  const [showNavToggle, setShowNavToggle] = useState(false)
  const [showMobileMenuButton, setShowMobileMenuButton] = useState(true)
  const [mobileMenuHalfHidden, setMobileMenuHalfHidden] = useState(false)
  const [activeDropdown, setActiveDropdown] = useState<DropdownType>(null)
  const [mobileLeistungenOpen, setMobileLeistungenOpen] = useState(false)
  const [mobileBranchenOpen, setMobileBranchenOpen] = useState(false)
  const [mobileUeberFimiOpen, setMobileUeberFimiOpen] = useState(false)
  const lastScrollTime = useRef<number>(Date.now())
  const autoHideIntervalRef = useRef<NodeJS.Timeout | null>(null)
  const dropdownTimeoutRef = useRef<NodeJS.Timeout | null>(null)
  const mobileMenuRef = useRef<HTMLDivElement>(null)
  const navRef = useRef<HTMLElement>(null)
  const leistungenCardRef = useRef<HTMLDivElement>(null)
  const branchenCardRef = useRef<HTMLDivElement>(null)
  const ueberFimiCardRef = useRef<HTMLDivElement>(null)

  // Body Scroll Lock wenn Mobile Menu offen ist
  useEffect(() => {
    if (isMobileMenuOpen) {
      // Speichere aktuelle Scroll Position
      const scrollY = window.scrollY
      document.body.style.position = 'fixed'
      document.body.style.top = `-${scrollY}px`
      document.body.style.width = '100%'
      document.body.style.overflow = 'hidden'
    } else {
      // Stelle Scroll Position wieder her
      const scrollY = document.body.style.top
      document.body.style.position = ''
      document.body.style.top = ''
      document.body.style.width = ''
      document.body.style.overflow = ''
      if (scrollY) {
        window.scrollTo(0, parseInt(scrollY || '0') * -1)
      }
    }

    return () => {
      document.body.style.position = ''
      document.body.style.top = ''
      document.body.style.width = ''
      document.body.style.overflow = ''
    }
  }, [isMobileMenuOpen])

  // Auto-Hide Interval
  useEffect(() => {
    autoHideIntervalRef.current = setInterval(() => {
      const timeSinceLastScroll = Date.now() - lastScrollTime.current

      if (timeSinceLastScroll >= 1500) {
        const currentScrollY = window.scrollY

        if (currentScrollY > 100 && !isMobileMenuOpen) {
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
  }, [isMobileMenuOpen])

  useEffect(() => {
    const handleScroll = () => {
      // Ignoriere Scroll Events wenn Mobile Menu offen ist
      if (isMobileMenuOpen) return

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
          setActiveDropdown(null)
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
  }, [lastScrollY, isMobileMenuOpen])

  const handleShowNav = () => {
    setIsNavVisible(true)
    setShowNavToggle(false)
  }

  const scrollToContact = useCallback((e: React.MouseEvent) => {
    e.preventDefault()
    setIsMobileMenuOpen(false)
    setActiveDropdown(null)
    // Kurze Verzögerung damit Body Scroll Lock aufgehoben wird
    setTimeout(() => {
      const footer = document.getElementById('contact-form')
      if (footer) {
        footer.scrollIntoView({ behavior: 'smooth' })
      }
    }, 50)
  }, [])

  // VERBESSERTE Dropdown Handlers - sofortiges Umschalten
  const handleDropdownEnter = useCallback((dropdown: DropdownType) => {
    // Immer sofort den Timeout clearen
    if (dropdownTimeoutRef.current) {
      clearTimeout(dropdownTimeoutRef.current)
      dropdownTimeoutRef.current = null
    }
    // Sofort das neue Dropdown setzen
    setActiveDropdown(dropdown)
  }, [])

  const handleDropdownLeave = useCallback(() => {
    // Timeout nur wenn wir wirklich verlassen (nicht zu anderem Dropdown wechseln)
    dropdownTimeoutRef.current = setTimeout(() => {
      setActiveDropdown(null)
    }, 100) // Reduziert von 150ms auf 100ms
  }, [])

  // Cleanup Timeout on unmount
  useEffect(() => {
    return () => {
      if (dropdownTimeoutRef.current) {
        clearTimeout(dropdownTimeoutRef.current)
      }
    }
  }, [])

  // Handlers für Mobile Dropdowns mit Auto-Scroll
  const handleMobileLeistungenToggle = useCallback(() => {
    const newState = !mobileLeistungenOpen

    // Zuerst andere schließen
    setMobileBranchenOpen(false)
    setMobileUeberFimiOpen(false)
    setMobileLeistungenOpen(newState)

    if (newState && mobileMenuRef.current) {
      // Leistungen ist erste Card - scroll to top
      mobileMenuRef.current.scrollTo({ top: 0, behavior: 'smooth' })
    }
  }, [mobileLeistungenOpen])

  const handleMobileBranchenToggle = useCallback(() => {
    const newState = !mobileBranchenOpen

    // Zuerst andere schließen und SOFORT scroll to top
    setMobileLeistungenOpen(false)
    setMobileUeberFimiOpen(false)

    if (newState && mobileMenuRef.current) {
      // Sofort nach oben scrollen - Branchen wird dann direkt sichtbar sein
      mobileMenuRef.current.scrollTo({ top: 0, behavior: 'instant' })
    }

    setMobileBranchenOpen(newState)
  }, [mobileBranchenOpen])

  const handleMobileUeberFimiToggle = useCallback(() => {
    const newState = !mobileUeberFimiOpen

    // Zuerst andere schließen und SOFORT scroll to top
    setMobileLeistungenOpen(false)
    setMobileBranchenOpen(false)

    if (newState && mobileMenuRef.current) {
      // Sofort nach oben scrollen
      mobileMenuRef.current.scrollTo({ top: 0, behavior: 'instant' })
    }

    setMobileUeberFimiOpen(newState)
  }, [mobileUeberFimiOpen])

  // Über FIMI Dropdown Links
  const ueberFimiLinks = [
    { label: 'Über uns', href: '/ueber-uns' },
    { label: 'Referenzen', href: '/referenzen' },
    { label: 'Karriere', href: '/karriere' },
  ]

  const navLinks = [
    { label: 'Neuigkeiten', href: '/neuigkeiten' },
  ]

  return (
    <>
      {/* Main Navigation */}
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] ${
          isScrolled ? 'bg-white/95 backdrop-blur-lg shadow-lg' : 'bg-white'
        } ${isNavVisible ? 'translate-y-0' : '-translate-y-full'}`}
      >
        <div className="w-full max-w-[1800px] mx-auto px-4 lg:px-8 xl:px-12 2xl:px-20">
          <div className="flex items-center justify-between h-24 lg:h-28 xl:h-32">
            {/* Logo - Noch größer */}
            <Link href="/" className="relative z-10 flex-shrink-0">
              <Image
                src="/FIMI-LOGO/FIMI-Logo_Transparent_FUER-Webseite.png"
                alt="FIMI Gebäudereinigung"
                width={450}
                height={150}
                className="h-24 lg:h-28 xl:h-32 w-auto"
                priority
              />
            </Link>

            {/* Desktop Navigation - Premium Design mit visuellen Trennern */}
            <div className="hidden lg:flex items-center bg-[#109387]/[0.06] rounded-[6px] px-2 py-1.5 xl:px-3 xl:py-2">
              {/* Leistungen Dropdown */}
              <div
                className="relative"
                onMouseEnter={() => handleDropdownEnter('leistungen')}
                onMouseLeave={handleDropdownLeave}
              >
                <button
                  className={`flex items-center gap-2 px-5 xl:px-6 py-2.5 xl:py-3 rounded-[6px] text-[15px] xl:text-[16px] font-bold transition-all duration-200 ${
                    activeDropdown === 'leistungen'
                      ? 'text-white bg-[#109387] shadow-lg'
                      : 'text-[#012956] hover:text-[#109387] hover:bg-white hover:shadow-md'
                  }`}
                >
                  <span>Leistungen</span>
                  <ChevronDown
                    size={16}
                    strokeWidth={2.5}
                    className={`transition-transform duration-200 ${activeDropdown === 'leistungen' ? 'rotate-180' : ''}`}
                  />
                </button>
              </div>

              {/* Trenner */}
              <div className="w-px h-5 bg-[#109387]/20 mx-1" />

              {/* Branchen Dropdown */}
              <div
                className="relative"
                onMouseEnter={() => handleDropdownEnter('branchen')}
                onMouseLeave={handleDropdownLeave}
              >
                <button
                  className={`flex items-center gap-2 px-5 xl:px-6 py-2.5 xl:py-3 rounded-[6px] text-[15px] xl:text-[16px] font-bold transition-all duration-200 ${
                    activeDropdown === 'branchen'
                      ? 'text-white bg-[#109387] shadow-lg'
                      : 'text-[#012956] hover:text-[#109387] hover:bg-white hover:shadow-md'
                  }`}
                >
                  <span>Branchen</span>
                  <ChevronDown
                    size={16}
                    strokeWidth={2.5}
                    className={`transition-transform duration-200 ${activeDropdown === 'branchen' ? 'rotate-180' : ''}`}
                  />
                </button>
              </div>

              {/* Trenner */}
              <div className="w-px h-5 bg-[#109387]/20 mx-1" />

              {/* Über FIMI Dropdown */}
              <div
                className="relative"
                onMouseEnter={() => handleDropdownEnter('ueberfimi')}
                onMouseLeave={handleDropdownLeave}
              >
                <button
                  className={`flex items-center gap-2 px-5 xl:px-6 py-2.5 xl:py-3 rounded-[6px] text-[15px] xl:text-[16px] font-bold transition-all duration-200 ${
                    activeDropdown === 'ueberfimi'
                      ? 'text-white bg-[#109387] shadow-lg'
                      : 'text-[#012956] hover:text-[#109387] hover:bg-white hover:shadow-md'
                  }`}
                >
                  <span>Über FIMI</span>
                  <ChevronDown
                    size={16}
                    strokeWidth={2.5}
                    className={`transition-transform duration-200 ${activeDropdown === 'ueberfimi' ? 'rotate-180' : ''}`}
                  />
                </button>

                {/* Über FIMI Dropdown Menu - mit Bridge für smooth hovering */}
                <div
                  className={`absolute top-full left-1/2 -translate-x-1/2 pt-2 transition-all duration-200 ${
                    activeDropdown === 'ueberfimi'
                      ? 'opacity-100 visible translate-y-0'
                      : 'opacity-0 invisible -translate-y-2 pointer-events-none'
                  }`}
                >
                  <div className="bg-white rounded-[8px] shadow-2xl border border-gray-100 overflow-hidden">
                    <div className="py-3 min-w-[200px] xl:min-w-[220px]">
                      {ueberFimiLinks.map((link) => (
                        <Link
                          key={link.href}
                          href={link.href}
                          className="flex items-center gap-3 px-4 xl:px-5 py-3 xl:py-4 text-gray-600 hover:bg-[#f8f9fa] hover:text-[#109387] transition-all text-[14px] xl:text-[15px] font-semibold group"
                          onClick={() => setActiveDropdown(null)}
                        >
                          <ArrowRight size={14} strokeWidth={2.5} className="text-gray-300 group-hover:text-[#109387] group-hover:translate-x-1 transition-all" />
                          {link.label}
                        </Link>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              {/* Trenner */}
              <div className="w-px h-5 bg-[#109387]/20 mx-1" />

              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="px-5 xl:px-6 py-2.5 xl:py-3 rounded-[6px] text-[#012956] hover:text-[#109387] hover:bg-white hover:shadow-md transition-all duration-200 text-[15px] xl:text-[16px] font-bold"
                >
                  {link.label}
                </Link>
              ))}
            </div>

            {/* CTA Buttons - Größer und unternehmerischer */}
            <div className="hidden lg:flex items-center gap-3 xl:gap-4 ml-4 xl:ml-6 2xl:ml-8">
              <Link
                href="/kontakt"
                className="flex items-center gap-2.5 bg-[#109387] hover:bg-[#0d7d72] text-white font-bold text-[15px] xl:text-[16px] px-6 xl:px-8 py-3.5 xl:py-4 rounded-[6px] transition-all whitespace-nowrap shadow-md hover:shadow-lg hover:-translate-y-0.5"
              >
                <span>Jetzt anfragen</span>
                <ArrowRight size={18} strokeWidth={2.5} />
              </Link>
              <a
                href="tel:+4987143033460"
                className="flex items-center gap-2.5 text-[#012956] hover:text-white bg-white hover:bg-[#012956] border-2 border-[#012956] font-bold text-[15px] xl:text-[16px] px-5 xl:px-7 py-3 xl:py-3.5 rounded-[6px] transition-all whitespace-nowrap shadow-sm hover:shadow-md"
              >
                <Phone size={18} strokeWidth={2} />
                <span>0871 430 334 60</span>
              </a>
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

          {/* Mobile Menu - Premium, Strukturiert, Hochwertig */}
          <div
            ref={mobileMenuRef}
            className={`lg:hidden transition-[max-height,opacity] duration-250 ease-out ${
              isMobileMenuOpen
                ? 'max-h-[calc(100vh-5rem)] opacity-100 overflow-y-auto overscroll-contain'
                : 'max-h-0 opacity-0 overflow-hidden pointer-events-none'
            }`}
            style={{
              WebkitOverflowScrolling: 'touch',
              touchAction: 'pan-y'
            }}
            onTouchStart={(e) => e.stopPropagation()}
            onTouchMove={(e) => e.stopPropagation()}
            role="menu"
            aria-label="Hauptnavigation"
          >
            <div className="pt-6 pb-32 border-t border-gray-100">

              {/* Hauptnavigation - Cards */}
              <div className="space-y-3 mb-6">

                {/* Leistungen Card */}
                <div ref={leistungenCardRef} className="bg-[#f8f9fa] rounded-[8px] overflow-hidden">
                  <div className="flex items-center justify-between px-5 py-4">
                    <button
                      onClick={handleMobileLeistungenToggle}
                      className="flex items-center gap-3 touch-manipulation"
                      aria-expanded={mobileLeistungenOpen}
                      aria-controls="mobile-leistungen"
                    >
                      <div className="text-left">
                        <p className="text-[#012956] font-bold text-[16px]">Leistungen</p>
                        <p className="text-gray-500 text-[13px] font-medium">18 Services</p>
                      </div>
                      <ChevronDown
                        size={22}
                        strokeWidth={2}
                        className={`text-[#012956] transition-transform duration-200 ${mobileLeistungenOpen ? 'rotate-180' : ''}`}
                      />
                    </button>
                    <Link
                      href="/leistungen"
                      className="flex items-center gap-1.5 text-white font-bold text-[13px] px-4 py-2.5 bg-[#109387] rounded-[6px] active:bg-[#0d7d72] touch-manipulation"
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      Übersicht
                      <ArrowRight size={14} strokeWidth={2.5} />
                    </Link>
                  </div>

                  <div
                    id="mobile-leistungen"
                    className={`overflow-hidden transition-[max-height,opacity] duration-250 ease-out ${
                      mobileLeistungenOpen ? 'max-h-[1200px] opacity-100' : 'max-h-0 opacity-0'
                    }`}
                    role="menu"
                  >
                    <div className="px-5 pb-5 space-y-4">
                      {leistungenCategories.map((category) => (
                        <div key={category.id} className="bg-white rounded-[6px] p-4">
                          <div className="flex items-center gap-2 mb-3">
                            <category.icon size={16} className="text-[#109387]" strokeWidth={2} />
                            <p className="text-[#109387] font-bold text-[14px]">{category.title}</p>
                          </div>
                          <div className="space-y-1">
                            {category.services.map((service) => (
                              <Link
                                key={service.href}
                                href={service.href}
                                className="flex items-center gap-2 text-gray-600 text-[15px] py-2.5 px-3 -mx-1 rounded-[6px] font-medium active:bg-[#f8f9fa] active:text-[#109387] touch-manipulation"
                                onClick={() => setIsMobileMenuOpen(false)}
                                role="menuitem"
                              >
                                <ArrowRight size={14} className="text-gray-300" />
                                {service.name}
                              </Link>
                            ))}
                          </div>
                        </div>
                      ))}
                      <Link
                        href="/leistungen"
                        className="flex items-center justify-center gap-2 w-full text-white font-bold text-[15px] py-3.5 bg-[#109387] rounded-[6px] active:bg-[#0d7d72] touch-manipulation"
                        onClick={() => setIsMobileMenuOpen(false)}
                        role="menuitem"
                      >
                        Alle Leistungen ansehen
                        <ArrowRight size={16} strokeWidth={2.5} />
                      </Link>
                    </div>
                  </div>
                </div>

                {/* Branchen Card */}
                <div ref={branchenCardRef} className="bg-[#f8f9fa] rounded-[8px] overflow-hidden">
                  <div className="flex items-center justify-between px-5 py-4">
                    <button
                      onClick={handleMobileBranchenToggle}
                      className="flex items-center gap-3 touch-manipulation"
                      aria-expanded={mobileBranchenOpen}
                      aria-controls="mobile-branchen"
                    >
                      <div className="text-left">
                        <p className="text-[#012956] font-bold text-[16px]">Branchen</p>
                        <p className="text-gray-500 text-[13px] font-medium">12 Spezialisierungen</p>
                      </div>
                      <ChevronDown
                        size={22}
                        strokeWidth={2}
                        className={`text-[#012956] transition-transform duration-200 ${mobileBranchenOpen ? 'rotate-180' : ''}`}
                      />
                    </button>
                    <Link
                      href="/branchen"
                      className="flex items-center gap-1.5 text-white font-bold text-[13px] px-4 py-2.5 bg-[#109387] rounded-[6px] active:bg-[#0d7d72] touch-manipulation"
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      Übersicht
                      <ArrowRight size={14} strokeWidth={2.5} />
                    </Link>
                  </div>

                  <div
                    id="mobile-branchen"
                    className={`overflow-hidden transition-[max-height,opacity] duration-250 ease-out ${
                      mobileBranchenOpen ? 'max-h-[800px] opacity-100' : 'max-h-0 opacity-0'
                    }`}
                    role="menu"
                  >
                    <div className="px-5 pb-5">
                      <div className="bg-white rounded-[6px] p-4 space-y-1">
                        {branchenData.map((branche) => {
                          const BrancheIcon = branche.icon
                          return (
                            <Link
                              key={branche.href}
                              href={branche.href}
                              className="flex items-center gap-3 text-gray-600 text-[15px] py-2.5 px-3 -mx-1 rounded-[6px] font-medium active:bg-[#f8f9fa] active:text-[#109387] touch-manipulation"
                              onClick={() => setIsMobileMenuOpen(false)}
                              role="menuitem"
                            >
                              <BrancheIcon size={16} className="text-gray-400" />
                              {branche.name}
                            </Link>
                          )
                        })}
                      </div>
                      <Link
                        href="/branchen"
                        className="flex items-center justify-center gap-2 w-full text-white font-bold text-[15px] py-3.5 bg-[#109387] rounded-[6px] mt-4 active:bg-[#0d7d72] touch-manipulation"
                        onClick={() => setIsMobileMenuOpen(false)}
                        role="menuitem"
                      >
                        Alle Branchen ansehen
                        <ArrowRight size={16} strokeWidth={2.5} />
                      </Link>
                    </div>
                  </div>
                </div>

                {/* Über FIMI Card */}
                <div ref={ueberFimiCardRef} className="bg-[#f8f9fa] rounded-[8px] overflow-hidden">
                  <button
                    onClick={handleMobileUeberFimiToggle}
                    className="flex items-center justify-between w-full px-5 py-4 touch-manipulation"
                    aria-expanded={mobileUeberFimiOpen}
                    aria-controls="mobile-ueberfimi"
                  >
                    <div className="text-left">
                      <p className="text-[#012956] font-bold text-[16px]">Über FIMI</p>
                      <p className="text-gray-500 text-[13px] font-medium">Unternehmen</p>
                    </div>
                    <ChevronDown
                      size={22}
                      strokeWidth={2}
                      className={`text-[#012956] transition-transform duration-200 ${mobileUeberFimiOpen ? 'rotate-180' : ''}`}
                    />
                  </button>

                  <div
                    id="mobile-ueberfimi"
                    className={`overflow-hidden transition-[max-height,opacity] duration-250 ease-out ${
                      mobileUeberFimiOpen ? 'max-h-[300px] opacity-100' : 'max-h-0 opacity-0'
                    }`}
                    role="menu"
                  >
                    <div className="px-5 pb-5">
                      <div className="bg-white rounded-[6px] p-4 space-y-1">
                        {ueberFimiLinks.map((link) => (
                          <Link
                            key={link.href}
                            href={link.href}
                            className="flex items-center gap-2 text-gray-600 text-[15px] py-2.5 px-3 -mx-1 rounded-[6px] font-medium active:bg-[#f8f9fa] active:text-[#109387] touch-manipulation"
                            onClick={() => setIsMobileMenuOpen(false)}
                            role="menuitem"
                          >
                            <ArrowRight size={14} className="text-gray-300" />
                            {link.label}
                          </Link>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Direkte Links */}
              <div className="flex gap-3 mb-6">
                {navLinks.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    className="flex-1 flex items-center justify-center text-[#012956] font-bold text-[15px] py-4 bg-[#f8f9fa] rounded-[8px] active:bg-gray-200 touch-manipulation"
                    onClick={() => setIsMobileMenuOpen(false)}
                    role="menuitem"
                  >
                    {link.label}
                  </Link>
                ))}
              </div>

              {/* CTA Bereich - Premium */}
              <div className="bg-[#012956] rounded-[8px] p-5 space-y-4">
                <div className="text-center mb-2">
                  <p className="text-white/70 text-[13px] font-semibold uppercase tracking-wide mb-1">Jetzt Kontakt aufnehmen</p>
                  <p className="text-white font-bold text-[18px]">Kostenfreie Beratung</p>
                </div>
                <a
                  href="tel:+4987143033460"
                  className="flex items-center justify-center gap-3 w-full text-white py-4 font-bold text-[16px] bg-white/10 rounded-[6px] active:bg-white/20 touch-manipulation"
                  role="menuitem"
                >
                  <Phone size={20} strokeWidth={2} />
                  <span>0871 430 334 60</span>
                </a>
                <button
                  onClick={scrollToContact}
                  className="flex items-center justify-center gap-2 w-full bg-[#109387] active:bg-[#0d7d72] text-white font-bold text-[16px] py-4 rounded-[6px] touch-manipulation"
                  role="menuitem"
                >
                  <span>Besichtigung vereinbaren</span>
                  <ArrowRight size={18} strokeWidth={2.5} />
                </button>
              </div>

              {/* Schließen Button */}
              <button
                onClick={() => setIsMobileMenuOpen(false)}
                className="flex items-center justify-center gap-2 w-full text-gray-500 font-semibold text-[15px] py-4 mt-4 border border-gray-200 rounded-[8px] active:bg-gray-100 touch-manipulation"
                aria-label="Menü schließen"
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <line x1="18" y1="6" x2="6" y2="18"></line>
                  <line x1="6" y1="6" x2="18" y2="18"></line>
                </svg>
                <span>Menü schließen</span>
              </button>
            </div>
          </div>
        </div>

        {/* Leistungen Mega Menu - Premium mit Bridge */}
        <div
          className={`absolute left-0 right-0 transition-all duration-200 ${
            activeDropdown === 'leistungen'
              ? 'opacity-100 visible translate-y-0'
              : 'opacity-0 invisible -translate-y-2 pointer-events-none'
          }`}
          onMouseEnter={() => handleDropdownEnter('leistungen')}
          onMouseLeave={handleDropdownLeave}
        >
          {/* Invisible Bridge für smooth hovering */}
          <div className="h-2 bg-transparent" />
          <div className="bg-white shadow-2xl border-t border-gray-100">
          <div className="w-full max-w-[1800px] mx-auto px-6 lg:px-12 xl:px-20 py-12">
            <div className="grid grid-cols-4 gap-12">
              {leistungenCategories.map((category) => {
                const IconComponent = category.icon
                return (
                  <div key={category.id} className="group">
                    {/* Category Header Card */}
                    <div className="relative h-36 mb-6 rounded-[8px] overflow-hidden">
                      <Image
                        src={category.image}
                        alt={category.title}
                        fill
                        className="object-cover transition-transform duration-500 group-hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-[#012956]/90 via-[#012956]/40 to-transparent" />
                      <div className="absolute bottom-4 left-4 flex items-center gap-3">
                        <div className="w-10 h-10 bg-[#109387] rounded-[6px] flex items-center justify-center">
                          <IconComponent size={20} strokeWidth={2} className="text-white" />
                        </div>
                        <span className="text-white font-bold text-base">{category.title}</span>
                      </div>
                    </div>

                    {/* Service Links - Premium Spacing */}
                    <ul className="space-y-1">
                      {category.services.map((service) => (
                        <li key={service.href}>
                          <Link
                            href={service.href}
                            className="flex items-center gap-3 px-4 py-3.5 -mx-4 rounded-[6px] text-gray-600 hover:text-[#109387] hover:bg-[#f8f9fa] transition-all text-[15px] font-semibold group/link"
                            onClick={() => setActiveDropdown(null)}
                          >
                            <ArrowRight
                              size={14}
                              strokeWidth={2.5}
                              className="text-gray-300 group-hover/link:text-[#109387] group-hover/link:translate-x-1 transition-all"
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

            {/* Footer CTA */}
            <Link
              href="/leistungen"
              onClick={() => setActiveDropdown(null)}
              className="mt-10 pt-8 border-t border-gray-100 flex items-center justify-between group cursor-pointer hover:bg-[#f8f9fa] -mx-6 px-6 py-5 rounded-[8px] transition-all"
            >
              <div>
                <p className="text-[#012956] font-bold text-lg group-hover:text-[#109387] transition-colors">Alle Leistungen entdecken</p>
                <p className="text-gray-500 text-[15px] mt-1">18 professionelle Reinigungsservices im Überblick</p>
              </div>
              <div className="flex items-center gap-3 bg-[#012956] group-hover:bg-[#109387] text-white font-bold text-[15px] px-8 py-4 rounded-[6px] transition-all">
                <span>Zur Übersicht</span>
                <ArrowRight size={18} strokeWidth={2.5} className="group-hover:translate-x-1 transition-transform" />
              </div>
            </Link>
          </div>
          </div>
        </div>

        {/* Branchen Mega Menu - Premium mit Bridge */}
        <div
          className={`absolute left-0 right-0 transition-all duration-200 ${
            activeDropdown === 'branchen'
              ? 'opacity-100 visible translate-y-0'
              : 'opacity-0 invisible -translate-y-2 pointer-events-none'
          }`}
          onMouseEnter={() => handleDropdownEnter('branchen')}
          onMouseLeave={handleDropdownLeave}
        >
          {/* Invisible Bridge für smooth hovering */}
          <div className="h-2 bg-transparent" />
          <div className="bg-white shadow-2xl border-t border-gray-100">
          <div className="w-full max-w-[1800px] mx-auto px-6 lg:px-12 xl:px-20 py-12">
            <div className="grid grid-cols-4 xl:grid-cols-6 gap-5">
              {branchenData.map((branche) => {
                const IconComponent = branche.icon
                return (
                  <Link
                    key={branche.href}
                    href={branche.href}
                    className="group p-6 bg-[#f8f9fa] rounded-[8px] hover:bg-[#012956] transition-all duration-300 text-center min-h-[120px] flex flex-col items-center justify-center"
                    onClick={() => setActiveDropdown(null)}
                  >
                    <div className="w-12 h-12 bg-white rounded-[6px] flex items-center justify-center mb-4 group-hover:bg-[#109387] transition-all shadow-sm">
                      <IconComponent
                        size={24}
                        strokeWidth={1.5}
                        className="text-[#109387] group-hover:text-white transition-colors"
                      />
                    </div>
                    <p className="text-[#012956] group-hover:text-white font-bold text-[14px] transition-colors leading-tight">
                      {branche.name}
                    </p>
                  </Link>
                )
              })}
            </div>

            {/* Footer CTA */}
            <Link
              href="/branchen"
              onClick={() => setActiveDropdown(null)}
              className="mt-10 pt-8 border-t border-gray-100 flex items-center justify-between group cursor-pointer hover:bg-[#f8f9fa] -mx-6 px-6 py-5 rounded-[8px] transition-all"
            >
              <div>
                <p className="text-[#012956] font-bold text-lg group-hover:text-[#109387] transition-colors">Branchenspezifische Lösungen</p>
                <p className="text-gray-500 text-[15px] mt-1">12 spezialisierte Reinigungskonzepte für Ihre Branche</p>
              </div>
              <div className="flex items-center gap-3 bg-[#109387] group-hover:bg-[#0d7d72] text-white font-bold text-[15px] px-8 py-4 rounded-[6px] transition-all">
                <span>Alle Branchen</span>
                <ArrowRight size={18} strokeWidth={2.5} className="group-hover:translate-x-1 transition-transform" />
              </div>
            </Link>
          </div>
          </div>
        </div>
      </nav>

      {/* Desktop Floating Home Button - LINKS */}
      {!isHomePage && (
      <div
        className={`fixed top-5 left-6 xl:left-12 2xl:left-20 z-50 hidden lg:block transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] ${
          !isNavVisible && isScrolled
            ? 'opacity-100 translate-y-0'
            : 'opacity-0 -translate-y-4 pointer-events-none'
        }`}
      >
        <Link
          href="/"
          className="group flex items-center justify-center w-12 h-12 bg-[#012956] hover:bg-[#109387] rounded-full shadow-lg hover:shadow-xl transition-all duration-300"
          aria-label="Zur Startseite"
        >
          <Home size={20} className="text-white transition-colors" />
        </Link>
      </div>
      )}

      {/* Desktop Floating CTAs - RECHTS, klebt an Browser-Kante */}
      {!isHomePage && (
      <div
        className={`fixed top-0 right-0 z-50 hidden lg:flex items-stretch transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] ${
          !isNavVisible && isScrolled
            ? 'opacity-100 translate-y-0'
            : 'opacity-0 -translate-y-full pointer-events-none'
        }`}
      >
        {/* CTA */}
        <Link
          href="/kontakt"
          className="group flex items-center gap-2.5 bg-[#109387] hover:bg-[#0d7d72] text-white font-bold text-sm px-6 py-4 rounded-bl-[6px] transition-all duration-300"
        >
          <span>Jetzt anfragen</span>
          <ArrowRight size={16} className="group-hover:translate-x-0.5 transition-transform" />
        </Link>

        {/* Telefon */}
        <a
          href="tel:+4987143033460"
          className="group flex items-center gap-2.5 bg-[#012956] hover:bg-[#012956]/90 text-white px-6 py-4 transition-all duration-300"
        >
          <Phone size={16} />
          <span className="font-bold text-sm">0871 430 334 60</span>
        </a>
      </div>
      )}

      {/* Floating Nav Toggle Button - Mitte (Desktop & Mobile) */}
      <div
        className={`fixed top-6 lg:top-6 left-1/2 -translate-x-1/2 z-50 transition-all duration-300 ${
          !isNavVisible && isScrolled ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-4 pointer-events-none'
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
      <div className="h-24 lg:h-28 xl:h-32" />
    </>
  )
}
