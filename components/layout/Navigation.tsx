'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { ChevronDown, Menu, X, Phone } from 'lucide-react'

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
  const [openMegaMenu, setOpenMegaMenu] = useState<string | null>(null)

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
    setIsMobileMenuOpen(false)
  }

  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-500 ${
      isScrolled
        ? 'bg-white/80 backdrop-blur-xl shadow-lg border-b border-gray-200/50'
        : 'bg-transparent'
    }`}>
      <div className="container">
        <div className="flex items-center justify-between h-20 md:h-24">
          {/* Logo - Größer */}
          <Link href="/" className="flex-shrink-0">
            <Image
              src={isScrolled
                ? "/FIMI-LOGO/FIMI-Logo_Transparent_FUER-Webseite.png"
                : "/FIMI-LOGO/FI-Logo_Transparent_FUER-Webseite-Weiß-Schrift.png"
              }
              alt="FIMI Gebäudereinigung"
              width={180}
              height={60}
              className="h-14 md:h-16 w-auto transition-all duration-500"
              priority
            />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8">
            {/* Leistungen Mega Menu */}
            <div
              className="relative group"
              onMouseEnter={() => setOpenMegaMenu('leistungen')}
              onMouseLeave={() => setOpenMegaMenu(null)}
            >
              <button className={`flex items-center space-x-1 font-semibold hover:text-fimi-turquoise transition-colors py-2 ${
                isScrolled ? 'text-fimi-navy' : 'text-white'
              }`}>
                <span>Leistungen</span>
                <ChevronDown className="w-4 h-4" />
              </button>

              {/* Mega Menu Dropdown */}
              {openMegaMenu === 'leistungen' && (
                <div className="absolute top-full left-1/2 -translate-x-1/2 pt-4 w-screen max-w-5xl">
                  <div className="bg-white border border-gray-200 shadow-xl p-8">
                    <div className="grid grid-cols-3 gap-8">
                      {Object.entries(services).map(([key, category]) => (
                        <div key={key}>
                          <h3 className="text-sm font-bold text-fimi-navy mb-4 uppercase tracking-wide">
                            {category.title}
                          </h3>
                          <ul className="space-y-3">
                            {category.items.map((item) => (
                              <li key={item.href}>
                                <Link
                                  href={item.href}
                                  className="text-gray-700 hover:text-fimi-turquoise transition-colors block py-1"
                                >
                                  {item.name}
                                </Link>
                              </li>
                            ))}
                          </ul>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              )}
            </div>

            <Link href="/blog" className={`font-semibold hover:text-fimi-turquoise transition-colors ${
              isScrolled ? 'text-fimi-navy' : 'text-white'
            }`}>
              Blog
            </Link>

            <button
              onClick={scrollToFooter}
              className={`font-semibold hover:text-fimi-turquoise transition-colors ${
                isScrolled ? 'text-fimi-navy' : 'text-white'
              }`}
            >
              Kontakt
            </button>
          </div>

          {/* CTA Button */}
          <div className="hidden lg:flex items-center space-x-4">
            <a href="tel:01747225473" className={`flex items-center space-x-2 hover:text-fimi-turquoise transition-colors ${
              isScrolled ? 'text-fimi-navy' : 'text-white'
            }`}>
              <Phone className="w-5 h-5" />
              <span className="font-semibold">01747225473</span>
            </a>
            <button
              onClick={scrollToFooter}
              className={isScrolled
                ? "bg-fimi-turquoise text-white px-6 py-3 rounded-lg font-semibold hover:bg-fimi-turquoise/90 shadow-lg hover:shadow-xl transition-all duration-300"
                : "bg-white text-fimi-navy px-6 py-3 rounded-lg font-semibold hover:bg-white/90 shadow-lg hover:shadow-xl transition-all duration-300"
              }
            >
              Angebot anfordern
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className={`lg:hidden p-2 transition-colors ${
              isScrolled ? 'text-fimi-navy' : 'text-white'
            }`}
            aria-label="Menu"
          >
            {isMobileMenuOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="lg:hidden bg-white border-t border-gray-200">
          <div className="container-custom py-6 space-y-6">
            {/* Mobile Services */}
            <div className="space-y-4">
              <p className="text-sm font-bold text-fimi-navy uppercase tracking-wide">Leistungen</p>
              {Object.values(services).flatMap(category =>
                category.items.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    className="block text-gray-700 hover:text-fimi-turquoise transition-colors py-2"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    {item.name}
                  </Link>
                ))
              )}
            </div>

            <Link
              href="/blog"
              className="block text-fimi-navy font-semibold hover:text-fimi-turquoise transition-colors py-2"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Blog
            </Link>

            <button
              onClick={scrollToFooter}
              className="block w-full text-left text-fimi-navy font-semibold hover:text-fimi-turquoise transition-colors py-2"
            >
              Kontakt
            </button>

            <div className="pt-4 border-t border-gray-200 space-y-4">
              <a href="tel:01747225473" className="flex items-center space-x-2 text-fimi-navy">
                <Phone className="w-5 h-5" />
                <span className="font-semibold">01747225473</span>
              </a>
              <button
                onClick={scrollToFooter}
                className="btn-primary w-full"
              >
                Angebot anfordern
              </button>
            </div>
          </div>
        </div>
      )}
    </nav>
  )
}
