'use client'

import { useState, useEffect, useCallback } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { Menu, X, ChevronDown, Phone, Mail, MapPin, ArrowRight } from 'lucide-react'

const leistungen = {
  'Gewerbliche Objektreinigung': [
    { name: 'Buroreinigung', slug: 'bueroreinigung', desc: 'Professionelle Reinigung fur Burogebaude' },
    { name: 'Unterhaltsreinigung', slug: 'unterhaltsreinigung', desc: 'Regelmaessige Gebaeudereinigung' },
    { name: 'Baureinigung', slug: 'baureinigung', desc: 'Reinigung nach Bauarbeiten' },
    { name: 'Hallenreinigung', slug: 'hallenreinigung', desc: 'Reinigung von Produktionshallen' },
    { name: 'Parkplatzreinigung', slug: 'parkplatzreinigung', desc: 'Aussenflaechen und Parkplaetze' },
    { name: 'Fensterreinigung', slug: 'fensterreinigung', desc: 'Glas- und Fensterreinigung' },
  ],
  'Industrielle Reinigung': [
    { name: 'Industriereinigung', slug: 'industriereinigung', desc: 'Spezialreinigung fuer Industrie' },
    { name: 'Maschinenreinigung', slug: 'maschinenreinigung', desc: 'Reinigung von Maschinen' },
    { name: 'Fassadenreinigung', slug: 'fassadenreinigung', desc: 'Professionelle Fassadenpflege' },
    { name: 'Tiefgaragenreinigung', slug: 'tiefgaragenreinigung', desc: 'Reinigung von Tiefgaragen' },
    { name: 'Aussenanlagenpflege', slug: 'aussenanlagenpflege', desc: 'Pflege von Aussenanlagen' },
    { name: 'Sonderreinigung', slug: 'sonderreinigung', desc: 'Spezielle Reinigungsaufgaben' },
  ],
  'Facility Management': [
    { name: 'Facility Management', slug: 'facility-management', desc: 'Ganzheitliche Gebaeudebewirtschaftung' },
    { name: 'Hausmeisterservice', slug: 'hausmeisterservice', desc: 'Technische Betreuung' },
    { name: 'Winterdienst', slug: 'winterdienst', desc: 'Schneeraeumung und Streuservice' },
    { name: 'Beschaffungsmanagement', slug: 'beschaffungsmanagement', desc: 'Materialversorgung' },
  ],
}

const branchen = [
  'Buro & Verwaltung',
  'Gesundheitswesen',
  'Hotellerie & Gastronomie',
  'Bildungseinrichtungen',
  'Handel & Einkaufszentren',
  'Industrie & Produktion',
  'Logistik & Automotive',
  'Immobilienverwaltung',
  'Oeffentliche Hand',
]

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false)
  const [showMegaMenu, setShowMegaMenu] = useState(false)
  const [showBranchen, setShowBranchen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollToFooter = useCallback((e: React.MouseEvent) => {
    e.preventDefault()
    setIsOpen(false)
    const footer = document.getElementById('contact-form')
    if (footer) {
      footer.scrollIntoView({ behavior: 'smooth' })
    }
  }, [])

  const closeMobileMenu = useCallback(() => {
    setIsOpen(false)
  }, [])

  return (
    <>
      {/* Top Bar */}
      <div className="hidden lg:block bg-fimi-navy text-white py-2">
        <div className="container">
          <div className="flex items-center justify-between text-sm">
            <div className="flex items-center gap-6">
              <a href="tel:01747225473" className="flex items-center gap-2 hover:text-fimi-turquoise transition-colors">
                <Phone size={14} />
                <span>0174 722 5473</span>
              </a>
              <a href="mailto:info@fimi-service.de" className="flex items-center gap-2 hover:text-fimi-turquoise transition-colors">
                <Mail size={14} />
                <span>info@fimi-service.de</span>
              </a>
              <span className="flex items-center gap-2 text-gray-300">
                <MapPin size={14} />
                <span>Landshut und Umgebung</span>
              </span>
            </div>
            <div className="flex items-center gap-4">
              <Link href="/sitemap" className="hover:text-fimi-turquoise transition-colors">
                Sitemap
              </Link>
              <span className="text-gray-500">|</span>
              <span className="text-fimi-turquoise font-medium">24/7 Notfallservice</span>
            </div>
          </div>
        </div>
      </div>

      {/* Main Navigation */}
      <nav className={`sticky-nav ${isScrolled ? 'scrolled' : 'bg-white'}`}>
        <div className="container">
          <div className="flex items-center justify-between h-20 lg:h-24">
            {/* Logo */}
            <Link href="/" className="relative z-10 flex-shrink-0">
              <Image
                src="/FIMI-LOGO/FIMI-Logo_Transparent_FUER-Webseite.png"
                alt="FIMI Gebaeudereinigung"
                width={280}
                height={93}
                className="h-16 lg:h-20 w-auto"
                priority
              />
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center gap-1">
              <Link
                href="/"
                className="px-4 py-2 text-fimi-navy font-medium hover:text-fimi-turquoise transition-colors"
              >
                Home
              </Link>

              {/* Leistungen Mega Menu */}
              <div
                className="relative"
                onMouseEnter={() => setShowMegaMenu(true)}
                onMouseLeave={() => setShowMegaMenu(false)}
              >
                <button className="flex items-center gap-1 px-4 py-2 text-fimi-navy font-medium hover:text-fimi-turquoise transition-colors">
                  Leistungen
                  <ChevronDown size={16} className={`transition-transform duration-300 ${showMegaMenu ? 'rotate-180' : ''}`} />
                </button>

                {/* Mega Menu */}
                <div className={`absolute top-full left-1/2 -translate-x-1/2 pt-4 transition-all duration-300 ${
                  showMegaMenu ? 'opacity-100 visible translate-y-0' : 'opacity-0 invisible translate-y-2'
                }`}>
                  <div className="bg-white shadow-glass-lg border border-gray-100 rounded-lg p-8 w-[900px]">
                    <div className="grid grid-cols-3 gap-8">
                      {Object.entries(leistungen).map(([kategorie, services]) => (
                        <div key={kategorie}>
                          <h3 className="text-xs font-bold text-fimi-turquoise mb-4 uppercase tracking-wider">
                            {kategorie}
                          </h3>
                          <ul className="space-y-1">
                            {services.map((service) => (
                              <li key={service.slug}>
                                <Link
                                  href={`/leistungen/${service.slug}`}
                                  className="group flex items-start gap-2 p-2 rounded-md hover:bg-gray-50 transition-colors"
                                >
                                  <ArrowRight size={14} className="mt-1 text-fimi-turquoise opacity-0 group-hover:opacity-100 transition-opacity" />
                                  <div>
                                    <span className="block text-fimi-navy font-medium group-hover:text-fimi-turquoise transition-colors">
                                      {service.name}
                                    </span>
                                    <span className="text-xs text-gray-500">{service.desc}</span>
                                  </div>
                                </Link>
                              </li>
                            ))}
                          </ul>
                        </div>
                      ))}
                    </div>
                    <div className="mt-6 pt-6 border-t border-gray-100 flex items-center justify-between">
                      <span className="text-sm text-gray-500">18 Dienstleistungen in 3 Kategorien</span>
                      <Link
                        href="/leistungen"
                        className="flex items-center gap-2 text-fimi-turquoise font-medium hover:gap-3 transition-all"
                      >
                        Alle Leistungen ansehen
                        <ArrowRight size={16} />
                      </Link>
                    </div>
                  </div>
                </div>
              </div>

              {/* Branchen Dropdown */}
              <div
                className="relative"
                onMouseEnter={() => setShowBranchen(true)}
                onMouseLeave={() => setShowBranchen(false)}
              >
                <button className="flex items-center gap-1 px-4 py-2 text-fimi-navy font-medium hover:text-fimi-turquoise transition-colors">
                  Branchen
                  <ChevronDown size={16} className={`transition-transform duration-300 ${showBranchen ? 'rotate-180' : ''}`} />
                </button>

                <div className={`absolute top-full left-0 pt-4 transition-all duration-300 ${
                  showBranchen ? 'opacity-100 visible translate-y-0' : 'opacity-0 invisible translate-y-2'
                }`}>
                  <div className="bg-white shadow-glass-lg border border-gray-100 rounded-lg py-2 w-64">
                    {branchen.map((branche) => (
                      <Link
                        key={branche}
                        href={`/branchen/${branche.toLowerCase().replace(/[^a-z0-9]/g, '-')}`}
                        className="block px-4 py-2 text-gray-700 hover:bg-gray-50 hover:text-fimi-turquoise transition-colors"
                      >
                        {branche}
                      </Link>
                    ))}
                  </div>
                </div>
              </div>

              <Link
                href="/ueber-uns"
                className="px-4 py-2 text-fimi-navy font-medium hover:text-fimi-turquoise transition-colors"
              >
                Unternehmen
              </Link>

              <Link
                href="/referenzen"
                className="px-4 py-2 text-fimi-navy font-medium hover:text-fimi-turquoise transition-colors"
              >
                Referenzen
              </Link>

              <Link
                href="/kontakt"
                className="px-4 py-2 text-fimi-navy font-medium hover:text-fimi-turquoise transition-colors"
              >
                Kontakt
              </Link>
            </div>

            {/* CTA Buttons */}
            <div className="hidden lg:flex items-center gap-3">
              <a
                href="tel:01747225473"
                className="btn-outline text-sm"
              >
                <Phone size={16} />
                Anrufen
              </a>
              <button
                onClick={scrollToFooter}
                className="btn-primary text-sm"
              >
                Angebot anfordern
              </button>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="lg:hidden p-2 text-fimi-navy focus-ring rounded-md"
              aria-label="Menu"
            >
              {isOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        <div className={`lg:hidden fixed inset-0 top-20 bg-white z-50 transform transition-transform duration-300 ${
          isOpen ? 'translate-x-0' : 'translate-x-full'
        }`}>
          <div className="h-full overflow-y-auto py-6 px-4">
            <div className="space-y-1">
              <Link
                href="/"
                onClick={closeMobileMenu}
                className="block py-3 px-4 text-fimi-navy font-medium hover:bg-gray-50 rounded-lg"
              >
                Home
              </Link>

              <Link
                href="/leistungen"
                onClick={closeMobileMenu}
                className="block py-3 px-4 text-fimi-navy font-medium hover:bg-gray-50 rounded-lg"
              >
                Leistungen
              </Link>

              <Link
                href="/ueber-uns"
                onClick={closeMobileMenu}
                className="block py-3 px-4 text-fimi-navy font-medium hover:bg-gray-50 rounded-lg"
              >
                Unternehmen
              </Link>

              <Link
                href="/referenzen"
                onClick={closeMobileMenu}
                className="block py-3 px-4 text-fimi-navy font-medium hover:bg-gray-50 rounded-lg"
              >
                Referenzen
              </Link>

              <Link
                href="/kontakt"
                onClick={closeMobileMenu}
                className="block py-3 px-4 text-fimi-navy font-medium hover:bg-gray-50 rounded-lg"
              >
                Kontakt
              </Link>
            </div>

            <div className="mt-8 pt-8 border-t border-gray-200 space-y-4">
              <a
                href="tel:01747225473"
                className="flex items-center justify-center gap-2 w-full btn-outline"
              >
                <Phone size={18} />
                0174 722 5473
              </a>
              <button
                onClick={scrollToFooter}
                className="w-full btn-primary"
              >
                Angebot anfordern
              </button>
            </div>

            <div className="mt-8 pt-8 border-t border-gray-200">
              <p className="text-sm text-gray-500 mb-4">Kontakt</p>
              <div className="space-y-3 text-sm">
                <a href="mailto:info@fimi-service.de" className="flex items-center gap-2 text-fimi-navy">
                  <Mail size={16} className="text-fimi-turquoise" />
                  info@fimi-service.de
                </a>
                <div className="flex items-start gap-2 text-gray-600">
                  <MapPin size={16} className="text-fimi-turquoise mt-0.5" />
                  <span>Kellerstr. 39, 84036 Landshut</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </>
  )
}
