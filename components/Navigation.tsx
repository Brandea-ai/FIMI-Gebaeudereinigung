'use client'

import React, { useState, useEffect, useRef, useCallback } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { ArrowRight, Phone, ChevronDown, Building2, Factory, Wrench, Sparkles, Users, Stethoscope, ShoppingBag, GraduationCap, UtensilsCrossed, Dumbbell, Warehouse, Home, Landmark, Banknote, Car } from 'lucide-react'

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
      { name: 'Glasreinigung', href: '/leistungen/glasreinigung' },
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
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [isNavVisible, setIsNavVisible] = useState(true)
  const [lastScrollY, setLastScrollY] = useState(0)
  const [showNavToggle, setShowNavToggle] = useState(false)
  const [showMobileMenuButton, setShowMobileMenuButton] = useState(true)
  const [mobileMenuHalfHidden, setMobileMenuHalfHidden] = useState(false)
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null)
  const [mobileLeistungenOpen, setMobileLeistungenOpen] = useState(false)
  const [mobileBranchenOpen, setMobileBranchenOpen] = useState(false)
  const [mobileUeberFimiOpen, setMobileUeberFimiOpen] = useState(false)
  const lastScrollTime = useRef<number>(Date.now())
  const autoHideIntervalRef = useRef<NodeJS.Timeout | null>(null)
  const dropdownTimeoutRef = useRef<NodeJS.Timeout | null>(null)

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
  }, [lastScrollY])

  const handleShowNav = () => {
    setIsNavVisible(true)
    setShowNavToggle(false)
  }

  const scrollToContact = useCallback((e: React.MouseEvent) => {
    e.preventDefault()
    setIsMobileMenuOpen(false)
    setActiveDropdown(null)
    const footer = document.getElementById('contact-form')
    if (footer) {
      footer.scrollIntoView({ behavior: 'smooth' })
    }
  }, [])

  // Dropdown Handlers
  const handleDropdownEnter = (dropdown: string) => {
    if (dropdownTimeoutRef.current) {
      clearTimeout(dropdownTimeoutRef.current)
    }
    setActiveDropdown(dropdown)
  }

  const handleDropdownLeave = () => {
    dropdownTimeoutRef.current = setTimeout(() => {
      setActiveDropdown(null)
    }, 150)
  }

  // Über FIMI Dropdown Links
  const ueberFimiLinks = [
    { label: 'Über uns', href: '/ueber-uns' },
    { label: 'Referenzen', href: '/referenzen' },
  ]

  const navLinks = [
    { label: 'Neuigkeiten', href: '/neuigkeiten' },
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

            {/* Desktop Navigation - Premium Spacing */}
            <div className="hidden lg:flex items-center gap-2">
              {/* Leistungen Dropdown */}
              <div
                className="relative"
                onMouseEnter={() => handleDropdownEnter('leistungen')}
                onMouseLeave={handleDropdownLeave}
              >
                <button
                  className={`flex items-center gap-2 px-5 py-3 rounded-[6px] text-[15px] font-bold transition-all duration-200 ${
                    activeDropdown === 'leistungen'
                      ? 'text-[#109387] bg-[#109387]/5'
                      : 'text-[#012956] hover:text-[#109387] hover:bg-[#f8f9fa]'
                  }`}
                >
                  <span>Leistungen</span>
                  <ChevronDown
                    size={16}
                    strokeWidth={2.5}
                    className={`transition-transform duration-300 ${activeDropdown === 'leistungen' ? 'rotate-180' : ''}`}
                  />
                </button>
              </div>

              {/* Branchen Dropdown */}
              <div
                className="relative"
                onMouseEnter={() => handleDropdownEnter('branchen')}
                onMouseLeave={handleDropdownLeave}
              >
                <button
                  className={`flex items-center gap-2 px-5 py-3 rounded-[6px] text-[15px] font-bold transition-all duration-200 ${
                    activeDropdown === 'branchen'
                      ? 'text-[#109387] bg-[#109387]/5'
                      : 'text-[#012956] hover:text-[#109387] hover:bg-[#f8f9fa]'
                  }`}
                >
                  <span>Branchen</span>
                  <ChevronDown
                    size={16}
                    strokeWidth={2.5}
                    className={`transition-transform duration-300 ${activeDropdown === 'branchen' ? 'rotate-180' : ''}`}
                  />
                </button>
              </div>

              {/* Über FIMI Dropdown */}
              <div
                className="relative"
                onMouseEnter={() => handleDropdownEnter('ueberfimi')}
                onMouseLeave={handleDropdownLeave}
              >
                <button
                  className={`flex items-center gap-2 px-5 py-3 rounded-[6px] text-[15px] font-bold transition-all duration-200 ${
                    activeDropdown === 'ueberfimi'
                      ? 'text-[#109387] bg-[#109387]/5'
                      : 'text-[#012956] hover:text-[#109387] hover:bg-[#f8f9fa]'
                  }`}
                >
                  <span>Über FIMI</span>
                  <ChevronDown
                    size={16}
                    strokeWidth={2.5}
                    className={`transition-transform duration-300 ${activeDropdown === 'ueberfimi' ? 'rotate-180' : ''}`}
                  />
                </button>

                {/* Über FIMI Dropdown Menu - Premium */}
                <div
                  className={`absolute top-full left-0 mt-3 bg-white rounded-[8px] shadow-2xl border border-gray-100 overflow-hidden transition-all duration-300 ${
                    activeDropdown === 'ueberfimi'
                      ? 'opacity-100 visible translate-y-0'
                      : 'opacity-0 invisible -translate-y-2'
                  }`}
                >
                  <div className="py-3 min-w-[220px]">
                    {ueberFimiLinks.map((link) => (
                      <Link
                        key={link.href}
                        href={link.href}
                        className="flex items-center gap-3 px-5 py-4 text-gray-600 hover:bg-[#f8f9fa] hover:text-[#109387] transition-all text-[15px] font-semibold group"
                        onClick={() => setActiveDropdown(null)}
                      >
                        <ArrowRight size={14} strokeWidth={2.5} className="text-gray-300 group-hover:text-[#109387] group-hover:translate-x-1 transition-all" />
                        {link.label}
                      </Link>
                    ))}
                  </div>
                </div>
              </div>

              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="px-5 py-3 rounded-[6px] text-[#012956] hover:text-[#109387] hover:bg-[#f8f9fa] transition-all duration-200 text-[15px] font-bold"
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

          {/* Mobile Menu - Premium */}
          <div
            className={`lg:hidden overflow-hidden transition-all duration-300 ${
              isMobileMenuOpen ? 'max-h-[1200px] opacity-100' : 'max-h-0 opacity-0'
            }`}
          >
            <div className="py-6 border-t border-gray-100">
              <div className="flex flex-col gap-1">
                {/* Mobile Leistungen Accordion */}
                <div>
                  <button
                    onClick={() => setMobileLeistungenOpen(!mobileLeistungenOpen)}
                    className="flex items-center justify-between w-full text-[#012956] py-4 px-2 -mx-2 rounded-[6px] font-bold text-[16px] hover:bg-[#f8f9fa] transition-all"
                  >
                    <span>Leistungen</span>
                    <ChevronDown
                      size={22}
                      strokeWidth={2.5}
                      className={`transition-transform duration-300 ${mobileLeistungenOpen ? 'rotate-180' : ''}`}
                    />
                  </button>

                  <div
                    className={`overflow-hidden transition-all duration-300 ${
                      mobileLeistungenOpen ? 'max-h-[900px] opacity-100' : 'max-h-0 opacity-0'
                    }`}
                  >
                    <div className="pl-3 pb-4 space-y-5 mt-2">
                      {leistungenCategories.map((category) => (
                        <div key={category.id}>
                          <p className="text-[#109387] font-bold text-[15px] mb-3 flex items-center gap-2">
                            <category.icon size={16} strokeWidth={2} />
                            {category.title}
                          </p>
                          <div className="space-y-1">
                            {category.services.map((service) => (
                              <Link
                                key={service.href}
                                href={service.href}
                                className="block text-gray-600 hover:text-[#109387] text-[15px] py-3 px-3 -mx-3 rounded-[6px] hover:bg-[#f8f9fa] transition-all font-medium"
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
                        className="inline-flex items-center gap-2 text-[#012956] font-bold text-[15px] mt-3 py-3 px-4 bg-[#f8f9fa] rounded-[6px]"
                        onClick={() => setIsMobileMenuOpen(false)}
                      >
                        Alle Leistungen
                        <ArrowRight size={16} strokeWidth={2.5} />
                      </Link>
                    </div>
                  </div>
                </div>

                {/* Mobile Branchen Accordion */}
                <div>
                  <button
                    onClick={() => setMobileBranchenOpen(!mobileBranchenOpen)}
                    className="flex items-center justify-between w-full text-[#012956] py-4 px-2 -mx-2 rounded-[6px] font-bold text-[16px] hover:bg-[#f8f9fa] transition-all"
                  >
                    <span>Branchen</span>
                    <ChevronDown
                      size={22}
                      strokeWidth={2.5}
                      className={`transition-transform duration-300 ${mobileBranchenOpen ? 'rotate-180' : ''}`}
                    />
                  </button>

                  <div
                    className={`overflow-hidden transition-all duration-300 ${
                      mobileBranchenOpen ? 'max-h-[700px] opacity-100' : 'max-h-0 opacity-0'
                    }`}
                  >
                    <div className="pl-3 pb-4 space-y-1 mt-2">
                      {branchenData.map((branche) => (
                        <Link
                          key={branche.href}
                          href={branche.href}
                          className="block text-gray-600 hover:text-[#109387] text-[15px] py-3 px-3 -mx-3 rounded-[6px] hover:bg-[#f8f9fa] transition-all font-medium"
                          onClick={() => setIsMobileMenuOpen(false)}
                        >
                          {branche.name}
                        </Link>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Mobile Über FIMI Accordion */}
                <div>
                  <button
                    onClick={() => setMobileUeberFimiOpen(!mobileUeberFimiOpen)}
                    className="flex items-center justify-between w-full text-[#012956] py-4 px-2 -mx-2 rounded-[6px] font-bold text-[16px] hover:bg-[#f8f9fa] transition-all"
                  >
                    <span>Über FIMI</span>
                    <ChevronDown
                      size={22}
                      strokeWidth={2.5}
                      className={`transition-transform duration-300 ${mobileUeberFimiOpen ? 'rotate-180' : ''}`}
                    />
                  </button>

                  <div
                    className={`overflow-hidden transition-all duration-300 ${
                      mobileUeberFimiOpen ? 'max-h-[200px] opacity-100' : 'max-h-0 opacity-0'
                    }`}
                  >
                    <div className="pl-3 pb-4 space-y-1 mt-2">
                      {ueberFimiLinks.map((link) => (
                        <Link
                          key={link.href}
                          href={link.href}
                          className="block text-gray-600 hover:text-[#109387] text-[15px] py-3 px-3 -mx-3 rounded-[6px] hover:bg-[#f8f9fa] transition-all font-medium"
                          onClick={() => setIsMobileMenuOpen(false)}
                        >
                          {link.label}
                        </Link>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Divider */}
                <div className="h-px bg-gray-100 my-2" />

                {navLinks.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    className="text-[#012956] hover:text-[#109387] transition-all py-4 px-2 -mx-2 rounded-[6px] font-bold text-[16px] hover:bg-[#f8f9fa]"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    {link.label}
                  </Link>
                ))}

                {/* Divider */}
                <div className="h-px bg-gray-100 my-2" />

                <a
                  href="tel:+4987143033460"
                  className="flex items-center gap-3 text-[#012956] py-4 px-2 -mx-2 rounded-[6px] font-bold text-[16px] hover:bg-[#f8f9fa] transition-all"
                >
                  <Phone size={20} strokeWidth={2} />
                  <span>0871 430 334 60</span>
                </a>
                <button
                  onClick={scrollToContact}
                  className="flex items-center justify-center gap-3 bg-[#109387] hover:bg-[#0d7d72] text-white font-bold text-[16px] px-6 py-5 rounded-[8px] transition-all mt-3"
                >
                  <span>Kostenfreie Besichtigung</span>
                  <ArrowRight size={18} strokeWidth={2.5} />
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Leistungen Mega Menu - Premium */}
        <div
          className={`absolute left-0 right-0 bg-white shadow-2xl border-t border-gray-100 transition-all duration-300 ease-[cubic-bezier(0.22,1,0.36,1)] ${
            activeDropdown === 'leistungen'
              ? 'opacity-100 visible translate-y-0'
              : 'opacity-0 invisible -translate-y-4'
          }`}
          onMouseEnter={() => handleDropdownEnter('leistungen')}
          onMouseLeave={handleDropdownLeave}
        >
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

        {/* Branchen Mega Menu - Premium */}
        <div
          className={`absolute left-0 right-0 bg-white shadow-2xl border-t border-gray-100 transition-all duration-300 ease-[cubic-bezier(0.22,1,0.36,1)] ${
            activeDropdown === 'branchen'
              ? 'opacity-100 visible translate-y-0'
              : 'opacity-0 invisible -translate-y-4'
          }`}
          onMouseEnter={() => handleDropdownEnter('branchen')}
          onMouseLeave={handleDropdownLeave}
        >
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
      </nav>

      {/* Floating Nav Toggle Button */}
      <div
        className={`fixed top-16 left-1/2 -translate-x-1/2 z-40 transition-opacity duration-300 ${
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
