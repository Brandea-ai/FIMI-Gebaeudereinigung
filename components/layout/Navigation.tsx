'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { ChevronDown, Menu, X, Phone, Mail } from 'lucide-react'

const services = {
  gewerblich: {
    title: 'Gewerbliche Objektreinigung',
    items: [
      { name: 'Büroreinigung', href: '/leistungen/bueroreinigung' },
      { name: 'Unterhaltsreinigung', href: '/leistungen/unterhaltsreinigung' },
      { name: 'Baureinigung', href: '/leistungen/baureinigung' },
      { name: 'Hallenreinigung', href: '/leistungen/hallenreinigung' },
      { name: 'Parkplatzreinigung', href: '/leistungen/parkplatzreinigung' },
      { name: 'Fensterreinigung', href: '/leistungen/fensterreinigung' },
    ]
  },
  industrie: {
    title: 'Industrielle & Spezialreinigung',
    items: [
      { name: 'Industriereinigung', href: '/leistungen/industriereinigung' },
      { name: 'Maschinenreinigung', href: '/leistungen/maschinenreinigung' },
      { name: 'Fassadenreinigung', href: '/leistungen/fassadenreinigung' },
      { name: 'Tiefgaragenreinigung', href: '/leistungen/tiefgaragenreinigung' },
      { name: 'Außenanlagenpflege', href: '/leistungen/aussenanlagenpflege' },
      { name: 'Sonderleistungen', href: '/leistungen/sonderleistungen' },
    ]
  },
  facility: {
    title: 'Facility Management & Services',
    items: [
      { name: 'Facility Management', href: '/leistungen/facility-management' },
      { name: 'Hausmeisterservice', href: '/leistungen/hausmeisterservice' },
      { name: 'Winterdienst', href: '/leistungen/winterdienst' },
      { name: 'Beschaffungsmanagement', href: '/leistungen/beschaffungsmanagement' },
    ]
  }
}

export default function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [isServicesOpen, setIsServicesOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollToFooter = () => {
    const footer = document.getElementById('kontakt-formular')
    if (footer) {
      footer.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <nav
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-white shadow-lg py-2'
          : 'bg-white/95 backdrop-blur-sm py-4'
      }`}
    >
      <div className="container-custom">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2">
            <Image
              src="/FIMI-LOGO/FIMI-Logo_Transparent_FUER-Webseite.png"
              alt="FIMI Gebäudereinigung"
              width={180}
              height={60}
              className="h-12 md:h-16 w-auto"
              priority
            />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8">
            <Link
              href="/"
              className="text-fimi-navy hover:text-fimi-turquoise font-medium transition-colors"
            >
              Home
            </Link>

            {/* Mega Menu - Leistungen */}
            <div
              className="relative group"
              onMouseEnter={() => setIsServicesOpen(true)}
              onMouseLeave={() => setIsServicesOpen(false)}
            >
              <button className="flex items-center space-x-1 text-fimi-navy hover:text-fimi-turquoise font-medium transition-colors">
                <span>Leistungen</span>
                <ChevronDown className="w-4 h-4" />
              </button>

              {/* Mega Menu Dropdown */}
              <div
                className={`absolute top-full left-1/2 -translate-x-1/2 mt-2 w-screen max-w-5xl transition-all duration-300 ${
                  isServicesOpen
                    ? 'opacity-100 visible translate-y-0'
                    : 'opacity-0 invisible -translate-y-2'
                }`}
              >
                <div className="bg-white rounded-xl shadow-2xl p-8 border border-gray-100">
                  <div className="grid grid-cols-3 gap-8">
                    {/* Kategorie 1: Gewerblich */}
                    <div>
                      <h3 className="text-fimi-navy font-bold text-lg mb-4 pb-2 border-b-2 border-fimi-turquoise">
                        {services.gewerblich.title}
                      </h3>
                      <ul className="space-y-3">
                        {services.gewerblich.items.map((item) => (
                          <li key={item.href}>
                            <Link
                              href={item.href}
                              className="text-gray-700 hover:text-fimi-turquoise hover:translate-x-1 transition-all inline-block"
                            >
                              {item.name}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Kategorie 2: Industrie */}
                    <div>
                      <h3 className="text-fimi-navy font-bold text-lg mb-4 pb-2 border-b-2 border-fimi-turquoise">
                        {services.industrie.title}
                      </h3>
                      <ul className="space-y-3">
                        {services.industrie.items.map((item) => (
                          <li key={item.href}>
                            <Link
                              href={item.href}
                              className="text-gray-700 hover:text-fimi-turquoise hover:translate-x-1 transition-all inline-block"
                            >
                              {item.name}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Kategorie 3: Facility */}
                    <div>
                      <h3 className="text-fimi-navy font-bold text-lg mb-4 pb-2 border-b-2 border-fimi-turquoise">
                        {services.facility.title}
                      </h3>
                      <ul className="space-y-3">
                        {services.facility.items.map((item) => (
                          <li key={item.href}>
                            <Link
                              href={item.href}
                              className="text-gray-700 hover:text-fimi-turquoise hover:translate-x-1 transition-all inline-block"
                            >
                              {item.name}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <Link
              href="/karriere"
              className="text-fimi-navy hover:text-fimi-turquoise font-medium transition-colors"
            >
              Karriere
            </Link>

            <Link
              href="/ueber-uns"
              className="text-fimi-navy hover:text-fimi-turquoise font-medium transition-colors"
            >
              Über Uns
            </Link>

            <Link
              href="/referenzen"
              className="text-fimi-navy hover:text-fimi-turquoise font-medium transition-colors"
            >
              Referenzen
            </Link>

            <Link
              href="/blog"
              className="text-fimi-navy hover:text-fimi-turquoise font-medium transition-colors"
            >
              Blog
            </Link>

            {/* Kontakt Button - scrollt zum Footer */}
            <button
              onClick={scrollToFooter}
              className="text-fimi-navy hover:text-fimi-turquoise font-medium transition-colors"
            >
              Kontakt
            </button>
          </div>

          {/* CTA Buttons Desktop */}
          <div className="hidden lg:flex items-center space-x-4">
            <a href="tel:01747225473" className="flex items-center space-x-2 text-fimi-turquoise hover:text-fimi-turquoise-dark transition-colors">
              <Phone className="w-5 h-5" />
              <span className="font-semibold">01747225473</span>
            </a>
            <Link href="/kontakt" className="btn-primary">
              Kontaktiere uns jetzt
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="lg:hidden text-fimi-navy p-2"
          >
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="lg:hidden absolute top-full left-0 w-full bg-white shadow-xl border-t border-gray-100 max-h-[80vh] overflow-y-auto">
            <div className="container-custom py-6 space-y-4">
              <Link
                href="/"
                className="block text-fimi-navy hover:text-fimi-turquoise font-medium py-2"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Home
              </Link>

              {/* Mobile Services Accordion */}
              <div>
                <button
                  onClick={() => setIsServicesOpen(!isServicesOpen)}
                  className="flex items-center justify-between w-full text-fimi-navy hover:text-fimi-turquoise font-medium py-2"
                >
                  <span>Leistungen</span>
                  <ChevronDown className={`w-4 h-4 transition-transform ${isServicesOpen ? 'rotate-180' : ''}`} />
                </button>

                {isServicesOpen && (
                  <div className="pl-4 mt-2 space-y-4">
                    {/* Gewerblich */}
                    <div>
                      <p className="text-sm font-bold text-fimi-navy mb-2">{services.gewerblich.title}</p>
                      {services.gewerblich.items.map((item) => (
                        <Link
                          key={item.href}
                          href={item.href}
                          className="block text-gray-700 hover:text-fimi-turquoise py-1 text-sm"
                          onClick={() => setIsMobileMenuOpen(false)}
                        >
                          {item.name}
                        </Link>
                      ))}
                    </div>

                    {/* Industrie */}
                    <div>
                      <p className="text-sm font-bold text-fimi-navy mb-2">{services.industrie.title}</p>
                      {services.industrie.items.map((item) => (
                        <Link
                          key={item.href}
                          href={item.href}
                          className="block text-gray-700 hover:text-fimi-turquoise py-1 text-sm"
                          onClick={() => setIsMobileMenuOpen(false)}
                        >
                          {item.name}
                        </Link>
                      ))}
                    </div>

                    {/* Facility */}
                    <div>
                      <p className="text-sm font-bold text-fimi-navy mb-2">{services.facility.title}</p>
                      {services.facility.items.map((item) => (
                        <Link
                          key={item.href}
                          href={item.href}
                          className="block text-gray-700 hover:text-fimi-turquoise py-1 text-sm"
                          onClick={() => setIsMobileMenuOpen(false)}
                        >
                          {item.name}
                        </Link>
                      ))}
                    </div>
                  </div>
                )}
              </div>

              <Link
                href="/karriere"
                className="block text-fimi-navy hover:text-fimi-turquoise font-medium py-2"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Karriere
              </Link>

              <Link
                href="/ueber-uns"
                className="block text-fimi-navy hover:text-fimi-turquoise font-medium py-2"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Über Uns
              </Link>

              <Link
                href="/referenzen"
                className="block text-fimi-navy hover:text-fimi-turquoise font-medium py-2"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Referenzen
              </Link>

              <Link
                href="/blog"
                className="block text-fimi-navy hover:text-fimi-turquoise font-medium py-2"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Blog
              </Link>

              <button
                onClick={() => {
                  scrollToFooter()
                  setIsMobileMenuOpen(false)
                }}
                className="block text-fimi-navy hover:text-fimi-turquoise font-medium py-2 w-full text-left"
              >
                Kontakt
              </button>

              <div className="pt-4 space-y-3">
                <a href="tel:01747225473" className="flex items-center space-x-2 text-fimi-turquoise">
                  <Phone className="w-5 h-5" />
                  <span className="font-semibold">01747225473</span>
                </a>
                <Link
                  href="/kontakt"
                  className="btn-primary block text-center"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Kontaktiere uns jetzt
                </Link>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}
