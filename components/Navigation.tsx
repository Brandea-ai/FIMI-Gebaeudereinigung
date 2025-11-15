'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { Menu, X, ChevronDown } from 'lucide-react'

const leistungen = {
  'Gewerbliche Objektreinigung': [
    { name: 'Büroreinigung', slug: 'bueroreinigung' },
    { name: 'Unterhaltsreinigung', slug: 'unterhaltsreinigung' },
    { name: 'Baureinigung', slug: 'baureinigung' },
    { name: 'Hallenreinigung', slug: 'hallenreinigung' },
    { name: 'Parkplatzreinigung', slug: 'parkplatzreinigung' },
    { name: 'Fensterreinigung', slug: 'fensterreinigung' },
    { name: 'Glasreinigung', slug: 'glasreinigung' },
  ],
  'Industrielle & Spezialreinigung': [
    { name: 'Industriereinigung', slug: 'industriereinigung' },
    { name: 'Maschinenreinigung', slug: 'maschinenreinigung' },
    { name: 'Fassadenreinigung', slug: 'fassadenreinigung' },
    { name: 'Tiefgaragenreinigung', slug: 'tiefgaragenreinigung' },
    { name: 'Außenanlagenpflege', slug: 'aussenanlagenpflege' },
    { name: 'Sonderleistungen', slug: 'sonderleistungen' },
    { name: 'Sonderreinigung', slug: 'sonderreinigung' },
  ],
  'Facility Management & Services': [
    { name: 'Facility Management', slug: 'facility-management' },
    { name: 'Hausmeisterservice', slug: 'hausmeisterservice' },
    { name: 'Winterdienst', slug: 'winterdienst' },
    { name: 'Beschaffungsmanagement', slug: 'beschaffungsmanagement' },
  ]
}

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false)
  const [showMegaMenu, setShowMegaMenu] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollToContact = (e: React.MouseEvent) => {
    e.preventDefault()
    const footer = document.querySelector('footer')
    if (footer) {
      footer.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled ? 'glass shadow-lg' : 'bg-white/95 backdrop-blur-sm'
    }`}>
      <div className="container">
        <div className="flex items-center justify-between h-24">
          {/* Logo */}
          <Link href="/" className="flex items-center">
            <Image
              src="/FIMI-LOGO/FIMI-Logo_Transparent_FUER-Webseite.png"
              alt="FIMI Gebäudereinigung"
              width={160}
              height={53}
              className="h-16 w-auto"
              priority
            />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-8">
            <Link
              href="/"
              className="text-fimi-navy font-semibold hover:text-fimi-turquoise transition-colors"
            >
              Home
            </Link>

            {/* Leistungen Mega Menu */}
            <div
              className="relative"
              onMouseEnter={() => setShowMegaMenu(true)}
              onMouseLeave={() => setShowMegaMenu(false)}
            >
              <button className="flex items-center gap-1 text-fimi-navy font-semibold hover:text-fimi-turquoise transition-colors">
                Leistungen
                <ChevronDown size={16} className={`transition-transform ${showMegaMenu ? 'rotate-180' : ''}`} />
              </button>

              {/* Mega Menu Dropdown */}
              {showMegaMenu && (
                <div className="absolute top-full left-1/2 -translate-x-1/2 pt-4 w-screen max-w-5xl">
                  <div className="bg-white shadow-2xl border border-gray-100 p-8" style={{ borderRadius: '4px' }}>
                    <div className="grid grid-cols-3 gap-8">
                      {Object.entries(leistungen).map(([kategorie, services]) => (
                        <div key={kategorie}>
                          <h3 className="text-sm font-bold text-fimi-turquoise mb-4 uppercase tracking-wide">
                            {kategorie}
                          </h3>
                          <ul className="space-y-3">
                            {services.map((service) => (
                              <li key={service.slug}>
                                <Link
                                  href={`/leistungen/${service.slug}`}
                                  className="text-fimi-navy hover:text-fimi-turquoise transition-colors block"
                                >
                                  {service.name}
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

            <Link
              href="/ueber-uns"
              className="text-fimi-navy font-semibold hover:text-fimi-turquoise transition-colors"
            >
              Über uns
            </Link>
            <Link
              href="/referenzen"
              className="text-fimi-navy font-semibold hover:text-fimi-turquoise transition-colors"
            >
              Referenzen
            </Link>
            <Link
              href="/kontakt"
              className="text-fimi-navy font-semibold hover:text-fimi-turquoise transition-colors"
            >
              Kontakt
            </Link>

            <a
              href="tel:01747225473"
              className="px-6 py-3 bg-fimi-turquoise text-white font-semibold hover:opacity-90 transition-opacity"
              style={{ borderRadius: '4px' }}
            >
              01747225473
            </a>

            <button
              onClick={scrollToContact}
              className="px-6 py-3 bg-fimi-navy text-white font-semibold hover:opacity-90 transition-opacity"
              style={{ borderRadius: '4px' }}
            >
              Angebot anfordern
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden p-2 text-fimi-navy"
            aria-label="Menu"
          >
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="lg:hidden py-6 border-t border-gray-200">
            <div className="flex flex-col gap-4">
              <Link href="/" className="text-fimi-navy font-semibold hover:text-fimi-turquoise transition-colors">
                Home
              </Link>
              <Link href="/leistungen" className="text-fimi-navy font-semibold hover:text-fimi-turquoise transition-colors">
                Leistungen
              </Link>
              <Link href="/ueber-uns" className="text-fimi-navy font-semibold hover:text-fimi-turquoise transition-colors">
                Über uns
              </Link>
              <Link href="/referenzen" className="text-fimi-navy font-semibold hover:text-fimi-turquoise transition-colors">
                Referenzen
              </Link>
              <Link href="/kontakt" className="text-fimi-navy font-semibold hover:text-fimi-turquoise transition-colors">
                Kontakt
              </Link>
              <a
                href="tel:01747225473"
                className="inline-block text-center px-6 py-3 bg-fimi-turquoise text-white font-semibold hover:opacity-90 transition-opacity"
                style={{ borderRadius: '4px' }}
              >
                01747225473
              </a>
              <button
                onClick={scrollToContact}
                className="inline-block text-center px-6 py-3 bg-fimi-navy text-white font-semibold hover:opacity-90 transition-opacity"
                style={{ borderRadius: '4px' }}
              >
                Angebot anfordern
              </button>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}
