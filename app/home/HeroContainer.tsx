'use client'

import { useState, useEffect } from 'react'
import { ArrowRight, Phone, CheckCircle, MapPin } from 'lucide-react'

const städte = [
  'Landshut',
  'München',
  'Regensburg',
  'Straubing',
  'Dingolfing',
  'Moosburg',
  'Freising',
  'Ingolstadt',
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
    <section className="relative min-h-screen">

      {/* Background - Lachende Menschen/Team */}
      <div className="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?q=80&w=3840&auto=format&fit=crop"
          alt="Professionelles Reinigungsteam"
          className="w-full h-full object-cover"
        />
        {/* Overlay für besseren Kontrast */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#012956]/90 via-[#012956]/70 to-[#012956]/40" />
      </div>

      {/* Content */}
      <div className="relative z-10 min-h-screen flex items-center">
        <div className="w-full max-w-[1800px] mx-auto px-6 lg:px-12 xl:px-20 py-32">

          <div className="max-w-4xl">

            {/* Main Headline - Fokus-Keyword */}
            <h1 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-white leading-[1.05] mb-4">
              Gebäudereinigung in{' '}
              <span
                className={`text-[#109387] inline-block transition-all duration-500 ${
                  isAnimating ? 'opacity-0 -translate-y-2' : 'opacity-100 translate-y-0'
                }`}
              >
                {städte[currentStadt]}
              </span>
            </h1>

            {/* Subheadline - Zwei Zeilen */}
            <p className="text-xl lg:text-2xl xl:text-3xl font-bold text-white mb-10 leading-relaxed">
              Ihr Büro verdient mehr als sauber –
              <br />
              <span className="text-[#109387]">es verdient Zuverlässigkeit.</span>
            </p>

            {/* Trust-Punkte - Fett für Kontrast */}
            <div className="flex flex-wrap gap-8 mb-12">
              <div className="flex items-center gap-3">
                <CheckCircle size={24} className="text-[#109387]" />
                <span className="text-white font-semibold text-lg">8 Jahre Erfahrung</span>
              </div>
              <div className="flex items-center gap-3">
                <CheckCircle size={24} className="text-[#109387]" />
                <span className="text-white font-semibold text-lg">85 zufriedene Kunden</span>
              </div>
              <div className="flex items-center gap-3">
                <CheckCircle size={24} className="text-[#109387]" />
                <span className="text-white font-semibold text-lg">Antwort in 2 Stunden</span>
              </div>
            </div>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-4 mb-12">
              <a
                href="#contact-form"
                className="inline-flex items-center justify-center gap-3 bg-[#109387] hover:bg-[#0d7d72] text-white font-bold text-lg px-8 py-4 rounded-[6px] transition-all duration-300 group shadow-lg"
              >
                Kostenlose Besichtigung anfragen
                <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
              </a>
              <a
                href="tel:+4917472254773"
                className="inline-flex items-center justify-center gap-3 bg-white hover:bg-gray-100 text-[#012956] font-bold text-lg px-8 py-4 rounded-[6px] transition-all duration-300"
              >
                <Phone size={20} />
                0174 722 54 773
              </a>
            </div>

            {/* City Selector */}
            <div className="flex items-center gap-4">
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

      {/* Floating Trust Badge - Clean, ohne Icon-Hintergrund */}
      <div className="absolute bottom-8 right-8 lg:bottom-12 lg:right-12 hidden lg:block">
        <div className="bg-white rounded-[6px] p-5 shadow-2xl">
          <div className="flex items-center gap-4">
            <MapPin size={28} className="text-[#109387]" />
            <div>
              <div className="font-bold text-[#012956] text-lg">
                Kostenfreie Vor-Ort-Besichtigung
              </div>
              <div className="text-gray-600 font-medium">
                Wir kommen zu Ihnen – unverbindlich.
              </div>
            </div>
          </div>
        </div>
      </div>

    </section>
  )
}
