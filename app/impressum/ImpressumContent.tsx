'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { Phone, Mail, MapPin, Clock, Copy, Check, Shield, FileText, MessageSquare, ExternalLink } from 'lucide-react'

export default function ImpressumContent() {
  const [isOnline, setIsOnline] = useState(false)
  const [copiedItem, setCopiedItem] = useState<string | null>(null)
  const [activeSection, setActiveSection] = useState('anbieter')

  // Check if support is online (Mo-Fr 8-18)
  useEffect(() => {
    const checkOnlineStatus = () => {
      const now = new Date()
      const day = now.getDay()
      const hour = now.getHours()
      setIsOnline(day >= 1 && day <= 5 && hour >= 8 && hour < 18)
    }

    checkOnlineStatus()
    const interval = setInterval(checkOnlineStatus, 60000)
    return () => clearInterval(interval)
  }, [])

  // Scroll spy for sidebar navigation
  useEffect(() => {
    const handleScroll = () => {
      const sections = ['anbieter', 'register', 'kontakt', 'standort', 'streit']
      for (const section of sections) {
        const element = document.getElementById(section)
        if (element) {
          const rect = element.getBoundingClientRect()
          if (rect.top <= 150 && rect.bottom > 100) {
            setActiveSection(section)
            break
          }
        }
      }
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // Copy to clipboard
  const copyToClipboard = async (text: string, itemId: string) => {
    try {
      await navigator.clipboard.writeText(text)
      setCopiedItem(itemId)
      setTimeout(() => setCopiedItem(null), 2000)
    } catch (err) {
      console.error('Failed to copy:', err)
    }
  }

  const navItems = [
    { id: 'anbieter', label: 'Anbieter' },
    { id: 'register', label: 'Register' },
    { id: 'kontakt', label: 'Kontakt' },
    { id: 'standort', label: 'Standort' },
    { id: 'streit', label: 'Streitbeilegung' },
  ]

  return (
    <>
      {/* Hero Section */}
      <section className="bg-[#012956] py-20 lg:py-24">
        <div className="w-full max-w-[1800px] mx-auto px-6 lg:px-12 xl:px-20">
          <p className="text-[#109387] font-semibold text-sm uppercase tracking-wider mb-4">
            Rechtliches
          </p>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-[1.1]">
            Impressum
          </h1>
          <p className="mt-6 text-white/60 font-semibold text-lg max-w-2xl">
            Rechtliche Informationen zur FIMI Gebäudereinigung GmbH
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16 lg:py-24">
        <div className="w-full max-w-[1800px] mx-auto px-6 lg:px-12 xl:px-20">
          <div className="flex gap-12 lg:gap-20">

            {/* Sticky Sidebar */}
            <aside className="hidden lg:block w-72 flex-shrink-0">
              <div className="sticky top-32 space-y-6">

                {/* Navigation */}
                <nav className="bg-[#f8f9fa] rounded-[6px] p-4">
                  <p className="text-sm text-gray-500 font-bold uppercase tracking-wider mb-3">Navigation</p>
                  <div className="space-y-1">
                    {navItems.map((item) => (
                      <a
                        key={item.id}
                        href={`#${item.id}`}
                        className={`block px-3 py-2.5 rounded-[6px] font-bold transition-all ${
                          activeSection === item.id
                            ? 'bg-[#109387] text-white'
                            : 'text-[#012956] hover:bg-white hover:text-[#109387]'
                        }`}
                      >
                        {item.label}
                      </a>
                    ))}
                  </div>
                </nav>

                {/* Support Badge */}
                <div className="bg-[#012956] rounded-[6px] p-4">
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-white/60 font-bold text-sm uppercase tracking-wider">Support</span>
                    <span className={`flex items-center gap-1.5 text-sm font-bold ${isOnline ? 'text-green-400' : 'text-gray-400'}`}>
                      <span className={`w-2 h-2 rounded-full ${isOnline ? 'bg-green-400 animate-pulse' : 'bg-gray-400'}`} />
                      {isOnline ? 'Online' : 'Offline'}
                    </span>
                  </div>
                  <a href="mailto:info@fimi-service.de" className="text-white font-extrabold text-lg hover:text-[#109387] transition-colors">
                    info@fimi-service.de
                  </a>
                  <p className="text-white/50 font-bold mt-1">Mo-Fr: 08:00-18:00</p>
                </div>

                {/* Quick Links */}
                <div className="bg-[#f8f9fa] rounded-[6px] p-4">
                  <p className="text-sm text-gray-500 font-bold uppercase tracking-wider mb-3">Schnellzugriffe</p>
                  <div className="space-y-2">
                    <Link href="/datenschutz" className="flex items-center gap-2 text-[#012956] hover:text-[#109387] font-bold transition-colors">
                      <Shield size={18} />
                      Datenschutz
                    </Link>
                    <Link href="/kontakt" className="flex items-center gap-2 text-[#012956] hover:text-[#109387] font-bold transition-colors">
                      <MessageSquare size={18} />
                      Kontakt
                    </Link>
                    <Link href="/agb" className="flex items-center gap-2 text-[#012956] hover:text-[#109387] font-bold transition-colors">
                      <FileText size={18} />
                      AGB
                    </Link>
                  </div>
                </div>

              </div>
            </aside>

            {/* Main Content */}
            <div className="flex-1 min-w-0 space-y-12">

              {/* Anbieterinformation */}
              <section id="anbieter" className="scroll-mt-8">
                <h2 className="text-2xl font-bold text-[#012956] mb-6 pb-3 border-b-2 border-[#109387]">
                  Anbieterinformation
                </h2>

                <div className="space-y-4">
                  <div className="flex flex-col sm:flex-row sm:items-start gap-2 sm:gap-8 py-3 border-b border-gray-100">
                    <div className="text-gray-500 font-bold w-40 flex-shrink-0">Firma</div>
                    <div className="text-[#012956] font-extrabold text-lg">FIMI Gebäudereinigung GmbH</div>
                  </div>

                  <div className="flex flex-col sm:flex-row sm:items-start gap-2 sm:gap-8 py-3 border-b border-gray-100">
                    <div className="text-gray-500 font-bold w-40 flex-shrink-0">Webseite</div>
                    <div className="text-[#109387] font-bold">www.fimi-gebaeudereinigung.de</div>
                  </div>

                  <div className="flex flex-col sm:flex-row sm:items-start gap-2 sm:gap-8 py-3 border-b border-gray-100">
                    <div className="text-gray-500 font-bold w-40 flex-shrink-0">Adresse</div>
                    <div className="flex items-start gap-3 flex-1">
                      <div className="text-[#012956] font-bold">
                        Kellerstr. 39<br />
                        84036 Landshut<br />
                        Deutschland
                      </div>
                      <button
                        onClick={() => copyToClipboard('Kellerstr. 39, 84036 Landshut, Deutschland', 'adresse')}
                        className="p-2 rounded-[6px] bg-[#f8f9fa] hover:bg-[#109387] hover:text-white text-gray-500 transition-all"
                        title="Adresse kopieren"
                      >
                        {copiedItem === 'adresse' ? <Check size={16} /> : <Copy size={16} />}
                      </button>
                    </div>
                  </div>

                  <div className="flex flex-col sm:flex-row sm:items-start gap-2 sm:gap-8 py-3 border-b border-gray-100">
                    <div className="text-gray-500 font-bold w-40 flex-shrink-0">Geschäftsführung</div>
                    <div>
                      <div className="text-[#012956] font-extrabold">Ntonalnt Tzoutzis & Ergest Qiraj</div>
                      <p className="text-gray-600 font-semibold text-sm mt-1">Vertretungsberechtigte Gesellschafter und inhaltlich verantwortlich gemäß § 18 Abs. 2 MStV</p>
                    </div>
                  </div>
                </div>
              </section>

              {/* Registerdaten */}
              <section id="register" className="scroll-mt-8">
                <h2 className="text-2xl font-bold text-[#012956] mb-6 pb-3 border-b-2 border-[#109387]">
                  Registerdaten
                </h2>

                <div className="space-y-4">
                  <div className="flex flex-col sm:flex-row sm:items-start gap-2 sm:gap-8 py-3 border-b border-gray-100">
                    <div className="text-gray-500 font-bold w-40 flex-shrink-0">Registergericht</div>
                    <div className="text-[#012956] font-bold">Amtsgericht Landshut</div>
                  </div>

                  <div className="flex flex-col sm:flex-row sm:items-start gap-2 sm:gap-8 py-3 border-b border-gray-100">
                    <div className="text-gray-500 font-bold w-40 flex-shrink-0">Handelsregister</div>
                    <div className="text-[#012956] font-bold">In Bearbeitung</div>
                  </div>

                  <div className="flex flex-col sm:flex-row sm:items-start gap-2 sm:gap-8 py-3 border-b border-gray-100">
                    <div className="text-gray-500 font-bold w-40 flex-shrink-0">Umsatzsteuer-ID</div>
                    <div className="flex items-center gap-3">
                      <div className="text-[#012956] font-extrabold font-mono text-lg">DE347549925</div>
                      <button
                        onClick={() => copyToClipboard('DE347549925', 'ust')}
                        className="p-2 rounded-[6px] bg-[#f8f9fa] hover:bg-[#109387] hover:text-white text-gray-500 transition-all"
                        title="UST-ID kopieren"
                      >
                        {copiedItem === 'ust' ? <Check size={16} /> : <Copy size={16} />}
                      </button>
                    </div>
                  </div>
                </div>
              </section>

              {/* Kontakt */}
              <section id="kontakt" className="scroll-mt-8">
                <h2 className="text-2xl font-bold text-[#012956] mb-6 pb-3 border-b-2 border-[#109387]">
                  Kontakt
                </h2>

                <div className="space-y-4">
                  <div className="flex flex-col sm:flex-row sm:items-start gap-2 sm:gap-8 py-3 border-b border-gray-100">
                    <div className="text-gray-500 font-bold w-40 flex-shrink-0">Telefon</div>
                    <div className="flex items-center gap-3">
                      <a href="tel:+4917472254730" className="text-[#109387] font-extrabold text-lg hover:text-[#012956] transition-colors">
                        0174 722 5473
                      </a>
                      <button
                        onClick={() => copyToClipboard('+49 174 722 5473', 'phone')}
                        className="p-2 rounded-[6px] bg-[#f8f9fa] hover:bg-[#109387] hover:text-white text-gray-500 transition-all"
                        title="Telefonnummer kopieren"
                      >
                        {copiedItem === 'phone' ? <Check size={16} /> : <Copy size={16} />}
                      </button>
                    </div>
                  </div>

                  <div className="flex flex-col sm:flex-row sm:items-start gap-2 sm:gap-8 py-3 border-b border-gray-100">
                    <div className="text-gray-500 font-bold w-40 flex-shrink-0">E-Mail</div>
                    <div className="flex items-center gap-3">
                      <a href="mailto:info@fimi-service.de" className="text-[#109387] font-extrabold text-lg hover:text-[#012956] transition-colors">
                        info@fimi-service.de
                      </a>
                      <button
                        onClick={() => copyToClipboard('info@fimi-service.de', 'email')}
                        className="p-2 rounded-[6px] bg-[#f8f9fa] hover:bg-[#109387] hover:text-white text-gray-500 transition-all"
                        title="E-Mail kopieren"
                      >
                        {copiedItem === 'email' ? <Check size={16} /> : <Copy size={16} />}
                      </button>
                    </div>
                  </div>

                  <div className="flex flex-col sm:flex-row sm:items-start gap-2 sm:gap-8 py-3 border-b border-gray-100">
                    <div className="text-gray-500 font-bold w-40 flex-shrink-0">Antwortzeit</div>
                    <div className="text-[#012956] font-bold">Innerhalb von 24 Stunden</div>
                  </div>
                </div>
              </section>

              {/* Standort */}
              <section id="standort" className="scroll-mt-8">
                <h2 className="text-2xl font-bold text-[#012956] mb-6 pb-3 border-b-2 border-[#109387]">
                  Standort
                </h2>

                <p className="text-gray-700 font-bold mb-6">
                  Unser Firmensitz befindet sich in Landshut, Niederbayern. Persönliche Termine sind nach vorheriger Vereinbarung jederzeit möglich.
                </p>

                {/* 8 Einsatzgebiete Badge */}
                <div className="bg-[#012956] rounded-[6px] p-4 mb-6 flex items-center gap-4">
                  <div className="w-12 h-12 bg-[#109387] rounded-[6px] flex items-center justify-center flex-shrink-0">
                    <MapPin size={24} className="text-white" />
                  </div>
                  <div>
                    <p className="text-white font-extrabold text-lg">8 Einsatzgebiete in Bayern</p>
                    <p className="text-white/70 font-bold text-sm">Landshut · München · Regensburg · Ingolstadt · Freising · Erding · Straubing · Passau</p>
                  </div>
                </div>

                {/* Map Card */}
                <div className="relative rounded-[6px] overflow-hidden bg-[#012956]">
                  {/* Map Overlay Info */}
                  <div className="absolute top-4 left-4 z-10 bg-white rounded-[6px] p-4 shadow-lg max-w-xs">
                    <h3 className="font-bold text-[#012956] mb-1">FIMI Gebäudereinigung GmbH</h3>
                    <p className="text-gray-600 text-sm mb-4">
                      Kellerstr. 39<br />
                      84036 Landshut, Bayern
                    </p>
                    <div className="flex gap-2">
                      <a
                        href="https://www.google.com/maps/dir/?api=1&destination=Kellerstr.+39,+84036+Landshut"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-1 bg-[#109387] hover:bg-[#0d7d72] text-white font-semibold text-sm px-3 py-2 rounded-[6px] transition-colors"
                      >
                        Route planen
                        <ExternalLink size={14} />
                      </a>
                      <a
                        href="tel:+4917472254730"
                        className="flex items-center gap-1 bg-[#012956] hover:bg-[#01203d] text-white font-semibold text-sm px-3 py-2 rounded-[6px] transition-colors"
                      >
                        Anrufen
                      </a>
                    </div>
                  </div>

                  {/* Map iframe */}
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2637.5!2d12.152!3d48.537!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNDjCsDMyJzEzLjIiTiAxMsKwMDknMDcuMiJF!5e0!3m2!1sde!2sde!4v1"
                    width="100%"
                    height="350"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title="FIMI Gebäudereinigung Standort"
                    className="grayscale hover:grayscale-0 transition-all duration-500"
                  />
                </div>
              </section>

              {/* Streitbeilegung */}
              <section id="streit" className="scroll-mt-8">
                <h2 className="text-2xl font-bold text-[#012956] mb-6 pb-3 border-b-2 border-[#109387]">
                  Streitbeilegung
                </h2>

                <div className="bg-[#f8f9fa] rounded-[6px] p-6 space-y-4">
                  <div>
                    <h3 className="font-bold text-[#012956] mb-2">EU-Streitschlichtung</h3>
                    <p className="text-gray-700 font-medium">
                      Die Europäische Kommission stellt eine Plattform zur Online-Streitbeilegung (OS) bereit:{' '}
                      <a
                        href="https://ec.europa.eu/consumers/odr"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-[#109387] hover:text-[#012956] font-semibold transition-colors"
                      >
                        ec.europa.eu/consumers/odr
                      </a>
                    </p>
                  </div>

                  <div>
                    <h3 className="font-bold text-[#012956] mb-2">Verbraucherstreitbeilegung</h3>
                    <p className="text-gray-700 font-medium">
                      Wir sind nicht bereit oder verpflichtet, an Streitbeilegungsverfahren vor einer Verbraucherschlichtungsstelle teilzunehmen.
                    </p>
                  </div>
                </div>
              </section>

            </div>

          </div>
        </div>
      </section>
    </>
  )
}
