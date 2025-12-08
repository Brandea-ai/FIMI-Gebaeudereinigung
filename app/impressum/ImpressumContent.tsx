'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { Phone, Mail, MapPin, Clock, Copy, Check, Shield, FileText, MessageSquare, ExternalLink } from 'lucide-react'
import GoogleMapsWrapper from '@/components/GoogleMapsWrapper'

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
            Rechtliche Informationen zur FIMI Gebäudereinigung GmbH i.Gr.
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
                  <a href="mailto:info@fimi-gebaeudereinigung.de" className="text-white font-extrabold text-lg hover:text-[#109387] transition-colors">
                    info@fimi-gebaeudereinigung.de
                  </a>
                  <p className="text-white/50 font-bold mt-2">Mo-Fr: 08:00-18:00</p>
                  <p className="text-[#109387] font-bold text-sm">Notfall: 2h Reaktionszeit</p>
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
                    <div className="text-[#012956] font-extrabold text-lg">FIMI Gebäudereinigung GmbH i.Gr.</div>
                  </div>

                  <div className="flex flex-col sm:flex-row sm:items-start gap-2 sm:gap-8 py-3 border-b border-gray-100">
                    <div className="text-gray-500 font-bold w-40 flex-shrink-0">Webseite</div>
                    <div className="flex items-center gap-3">
                      <a href="https://fimi-gebaeudereinigung.de" className="text-[#109387] font-bold hover:text-[#012956] transition-colors">www.fimi-gebaeudereinigung.de</a>
                      <button
                        onClick={() => copyToClipboard('fimi-gebaeudereinigung.de', 'domain')}
                        className="p-2 rounded-[6px] bg-[#f8f9fa] hover:bg-[#109387] hover:text-white text-gray-500 transition-all"
                        title="Domain kopieren"
                      >
                        {copiedItem === 'domain' ? <Check size={16} /> : <Copy size={16} />}
                      </button>
                    </div>
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
                      <div className="text-[#012956] font-extrabold">Donald Tzoutzis & Ergkest Qirjaj</div>
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
                    <div className="flex items-center gap-3">
                      <div className="text-[#012956] font-extrabold font-mono text-lg">In Bearbeitung</div>
                      <button
                        onClick={() => copyToClipboard('In Bearbeitung', 'hrb')}
                        className="p-2 rounded-[6px] bg-[#f8f9fa] hover:bg-[#109387] hover:text-white text-gray-500 transition-all"
                        title="HRB-Nummer kopieren"
                      >
                        {copiedItem === 'hrb' ? <Check size={16} /> : <Copy size={16} />}
                      </button>
                    </div>
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
                      <a href="tel:+4987143033460" className="text-[#109387] font-extrabold text-lg hover:text-[#012956] transition-colors">
                        0871 430 334 60
                      </a>
                      <button
                        onClick={() => copyToClipboard('+49 871 430 334 60', 'phone')}
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
                      <a href="mailto:info@fimi-gebaeudereinigung.de" className="text-[#109387] font-extrabold text-lg hover:text-[#012956] transition-colors">
                        info@fimi-gebaeudereinigung.de
                      </a>
                      <button
                        onClick={() => copyToClipboard('info@fimi-gebaeudereinigung.de', 'email')}
                        className="p-2 rounded-[6px] bg-[#f8f9fa] hover:bg-[#109387] hover:text-white text-gray-500 transition-all"
                        title="E-Mail kopieren"
                      >
                        {copiedItem === 'email' ? <Check size={16} /> : <Copy size={16} />}
                      </button>
                    </div>
                  </div>

                  <div className="flex flex-col sm:flex-row sm:items-start gap-2 sm:gap-8 py-3 border-b border-gray-100">
                    <div className="text-gray-500 font-bold w-40 flex-shrink-0">Antwortzeit</div>
                    <div className="text-[#012956] font-bold">Innerhalb von 2 Stunden</div>
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
                  {/* Map Overlay Info - breiter um Google-Text zu verdecken */}
                  <div className="absolute top-4 left-4 z-10 bg-white rounded-[6px] p-5 shadow-lg w-80">
                    {/* Favicon + Firmenname */}
                    <div className="flex items-center gap-3 mb-3">
                      <Image
                        src="/FIMI-LOGO/Fimi-Favicon.png"
                        alt="FIMI"
                        width={40}
                        height={40}
                        className="flex-shrink-0 rounded-[6px]"
                      />
                      <h3 className="font-extrabold text-[#012956] text-lg leading-tight">FIMI Gebäudereinigung GmbH i.Gr.</h3>
                    </div>
                    <p className="text-gray-600 font-semibold mb-4">
                      Kellerstr. 39<br />
                      84036 Landshut, Bayern
                    </p>
                    <div className="flex gap-2">
                      <a
                        href="https://www.google.com/maps/dir/?api=1&destination=Kellerstr.+39,+84036+Landshut"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-1 bg-[#109387] hover:bg-[#0d7d72] text-white font-bold text-sm px-4 py-2.5 rounded-[6px] transition-colors"
                      >
                        Route planen
                        <ExternalLink size={14} />
                      </a>
                      <a
                        href="tel:+4987143033460"
                        className="flex items-center gap-1 bg-[#012956] hover:bg-[#01203d] text-white font-bold text-sm px-4 py-2.5 rounded-[6px] transition-colors"
                      >
                        Anrufen
                      </a>
                    </div>
                  </div>

                  {/* Custom Favicon Map Pin */}
                  <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-full z-10 pointer-events-none">
                    <div className="relative">
                      <div className="w-12 h-12 rounded-full flex items-center justify-center shadow-lg border-2 border-white overflow-hidden">
                        <Image
                          src="/FIMI-LOGO/Fimi-Favicon.png"
                          alt="FIMI Standort"
                          width={48}
                          height={48}
                          className="object-cover"
                        />
                      </div>
                      {/* Pin Spitze */}
                      <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-0 h-0 border-l-[8px] border-r-[8px] border-t-[12px] border-l-transparent border-r-transparent border-t-[#012956]" />
                    </div>
                  </div>

                  {/* Map with Cookie Consent */}
                  <GoogleMapsWrapper
                    src="https://maps.google.com/maps?q=Kellerstra%C3%9Fe+39,+84036+Landshut,+Germany&t=&z=15&ie=UTF8&iwloc=&output=embed"
                    height={350}
                    title="FIMI Gebaeudereinigung Standort - Kellerstr. 39, 84036 Landshut"
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
