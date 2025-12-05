'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image'
import { ArrowRight, Phone, CheckCircle, MapPin } from 'lucide-react'

const städte = [
  'Landshut',
  'München',
  'Regensburg',
  'Ingolstadt',
  'Freising',
  'Erding',
  'Straubing',
  'Passau',
]

export default function HeroContainer() {
  const [currentStadt, setCurrentStadt] = useState(0)
  const [isAnimating, setIsAnimating] = useState(false)

  useEffect(() => {
    const interval = setInterval(() => {
      setIsAnimating(true)
      setTimeout(() => {
        setCurrentStadt((prev) => (prev + 1) % städte.length)
        setIsAnimating(false)
      }, 500)
    }, 3500)
    return () => clearInterval(interval)
  }, [])

  return (
    <section id="hero" className="relative min-h-screen">

      {/* Background - Professionelles Reinigungsteam */}
      <div className="absolute inset-0">
        <Image
          src="https://images.unsplash.com/photo-1581578731548-c64695cc6952?q=80&w=1920&auto=format&fit=crop"
          alt="Professionelles Reinigungsteam von FIMI"
          fill
          priority
          sizes="100vw"
          className="object-cover"
          quality={75}
        />
        {/* Overlay für besseren Kontrast */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#012956]/90 via-[#012956]/70 to-[#012956]/40" />
      </div>

      {/* Content */}
      <div className="relative z-10 min-h-screen flex items-center">
        <div className="w-full max-w-[1800px] mx-auto px-6 lg:px-12 xl:px-20 py-32">

          <div className="max-w-4xl">

            {/* Main Headline - Fokus-Keyword */}
            <h1 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-white leading-[1.05] mb-5">
              Gebäudereinigung in{' '}
              <span
                className={`text-[#109387] inline-block transition-all duration-500 ${
                  isAnimating ? 'opacity-0 -translate-y-2' : 'opacity-100 translate-y-0'
                }`}
              >
                {städte[currentStadt]}
              </span>
            </h1>

            {/* Subheadline */}
            <p className="text-xl md:text-2xl lg:text-3xl font-bold text-white mb-10 leading-snug">
              Ihr Gebäude verdient mehr als sauber –
              <br />
              <span className="text-[#109387]">es verdient Zuverlässigkeit.</span>
            </p>

            {/* Trust-Punkte */}
            <div className="flex flex-wrap gap-4 sm:gap-8 mb-10 sm:mb-12">
              <div className="flex items-center gap-2">
                <CheckCircle size={18} className="text-[#109387] sm:w-[22px] sm:h-[22px]" />
                <span className="text-white font-semibold text-sm sm:text-lg">8+ Jahre</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle size={18} className="text-[#109387] sm:w-[22px] sm:h-[22px]" />
                <span className="text-white font-semibold text-sm sm:text-lg">120+ Kunden</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle size={18} className="text-[#109387] sm:w-[22px] sm:h-[22px]" />
                <span className="text-white font-semibold text-sm sm:text-lg">2h Antwort</span>
              </div>
            </div>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 mb-10 sm:mb-12">
              <a
                href="#contact-form"
                className="inline-flex items-center justify-center gap-2 sm:gap-3 bg-[#109387] hover:bg-[#0d7d72] text-white font-bold text-base sm:text-lg px-6 sm:px-8 py-3.5 sm:py-4 rounded-[6px] transition-all duration-300 group shadow-lg"
              >
                <span className="sm:hidden">Kostenfreie Besichtigung</span>
                <span className="hidden sm:inline">Kostenfreie Besichtigung anfragen</span>
                <ArrowRight size={18} className="sm:w-5 sm:h-5 group-hover:translate-x-1 transition-transform" />
              </a>
              <a
                href="tel:+4917472254773"
                className="inline-flex items-center justify-center gap-2 sm:gap-3 bg-white hover:bg-gray-100 text-[#012956] font-bold text-base sm:text-lg px-6 sm:px-8 py-3.5 sm:py-4 rounded-[6px] transition-all duration-300"
              >
                <Phone size={18} className="sm:w-5 sm:h-5" />
                <span className="sm:hidden">Jetzt anrufen</span>
                <span className="hidden sm:inline">0174 722 54 773</span>
              </a>
            </div>

            {/* City Selector - Desktop: Dots, Mobile: Compact Badge */}
            <div className="flex items-center gap-4">
              {/* Mobile: Kompaktes Badge */}
              <div className="flex sm:hidden items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2.5 rounded-[6px]">
                <MapPin size={16} className="text-[#109387]" />
                <span className="text-white font-semibold text-sm">
                  {städte.length} Standorte in Bayern
                </span>
              </div>

              {/* Desktop: Dots */}
              <div className="hidden sm:flex items-center gap-4">
                <span className="text-white/70 font-semibold">Standorte:</span>
                <div className="flex items-center gap-2">
                  {städte.map((stadt, index) => (
                    <button
                      key={stadt}
                      onClick={() => setCurrentStadt(index)}
                      className={`h-2.5 rounded-full transition-all duration-300 ${
                        index === currentStadt
                          ? 'w-10 bg-[#109387]'
                          : 'w-2.5 bg-white/50 hover:bg-white/70'
                      }`}
                      aria-label={stadt}
                    />
                  ))}
                </div>
              </div>
            </div>

          </div>

        </div>
      </div>

      {/* Floating Trust Badge */}
      <div className="absolute bottom-8 right-8 lg:bottom-12 lg:right-12 hidden lg:block">
        <div className="bg-white rounded-[6px] p-5 shadow-2xl">
          <div className="flex items-center gap-4">
            <MapPin size={28} className="text-[#109387]" />
            <div>
              <div className="font-bold text-[#012956] text-lg">
                Kostenfreie Vor-Ort-Besichtigung
              </div>
              <div className="text-gray-600">
                Wir kommen zu Ihnen – unverbindlich.
              </div>
            </div>
          </div>
        </div>
      </div>

    </section>
  )
}
