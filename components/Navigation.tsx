'use client'

import React, { useState, useEffect, useRef, useCallback } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { ArrowRight, Phone, ChevronDown } from 'lucide-react'

export default function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [isNavVisible, setIsNavVisible] = useState(true)
  const [lastScrollY, setLastScrollY] = useState(0)
  const [showNavToggle, setShowNavToggle] = useState(false)
  const [showMobileMenuButton, setShowMobileMenuButton] = useState(true)
  const [mobileMenuHalfHidden, setMobileMenuHalfHidden] = useState(false)
  const lastScrollTime = useRef<number>(Date.now())
  const autoHideIntervalRef = useRef<NodeJS.Timeout | null>(null)

  // Auto-Hide Interval: Prüft alle 200ms ob seit 1,5s nicht mehr gescrollt wurde
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
    const footer = document.getElementById('contact-form')
    if (footer) {
      footer.scrollIntoView({ behavior: 'smooth' })
    }
  }, [])

  const navLinks = [
    { label: 'Leistungen', href: '/leistungen' },
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
              isMobileMenuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
            }`}
          >
            <div className="py-6 border-t border-gray-100">
              <div className="flex flex-col gap-4">
                {navLinks.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    className="text-[#012956] hover:text-[#109387] transition-colors py-2 font-semibold"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    {link.label}
                  </Link>
                ))}
                <a
                  href="tel:+4987143033460"
                  className="flex items-center gap-2 text-[#012956] py-2 font-semibold"
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
      </nav>

      {/* Floating Nav Toggle Button (zentriert oben) */}
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
