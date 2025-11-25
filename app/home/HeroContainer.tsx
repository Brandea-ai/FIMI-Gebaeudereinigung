'use client'

import { useState, useEffect } from 'react'
import { ArrowRight, Phone, CheckCircle } from 'lucide-react'

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
        {/* Weniger Transparenz - Bild mehr zeigen */}
        <div className="absolute inset-0 bg-gradient-to-r from-fimi-navy/80 via-fimi-navy/60 to-transparent" />
      </div>

      {/* Content */}
      <div className="relative z-10 min-h-screen flex items-center">
        <div className="w-full max-w-[1800px] mx-auto px-6 lg:px-12 xl:px-20 py-32">

          <div className="max-w-3xl">

            {/* Main Headline - Fokus-Keyword */}
            <h1 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-white leading-[1.05] mb-6">
              Gebäudereinigung in{' '}
              <span
                className={`text-fimi-turquoise inline-block transition-all duration-500 ${
                  isAnimating ? 'opacity-0 -translate-y-2' : 'opacity-100 translate-y-0'
                }`}
              >
                {städte[currentStadt]}
              </span>
            </h1>

            {/* Subheadline - Emotional, Vertrauen */}
            <p className="text-xl lg:text-2xl text-white/90 mb-8 leading-relaxed max-w-2xl">
              Ihr Büro verdient mehr als nur sauber.
              <span className="text-fimi-turquoise font-semibold"> Es verdient Zuverlässigkeit.</span>
            </p>

            {/* Trust-Punkte - Direkt im Hero, nicht weit weg */}
            <div className="flex flex-wrap gap-6 mb-10">
              <div className="flex items-center gap-2 text-white">
                <CheckCircle size={20} className="text-fimi-turquoise" />
                <span>Über 15 Jahre Erfahrung</span>
              </div>
              <div className="flex items-center gap-2 text-white">
                <CheckCircle size={20} className="text-fimi-turquoise" />
                <span>500+ zufriedene Kunden</span>
              </div>
              <div className="flex items-center gap-2 text-white">
                <CheckCircle size={20} className="text-fimi-turquoise" />
                <span>Angebot in 24 Stunden</span>
              </div>
            </div>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-4 mb-12">
              <a
                href="#contact-form"
                className="inline-flex items-center justify-center gap-3 bg-fimi-turquoise hover:bg-[#0d7d72] text-white font-semibold text-lg px-8 py-4 rounded-[6px] transition-all duration-300 group shadow-lg shadow-fimi-turquoise/30"
              >
                Kostenloses Angebot anfordern
                <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
              </a>
              <a
                href="tel:+4917472254773"
                className="inline-flex items-center justify-center gap-3 bg-white hover:bg-gray-100 text-fimi-navy font-semibold text-lg px-8 py-4 rounded-[6px] transition-all duration-300"
              >
                <Phone size={20} />
                0174 722 54 773
              </a>
            </div>

            {/* City Selector */}
            <div className="flex items-center gap-3">
              <span className="text-white/60 text-sm">Standorte:</span>
              <div className="flex items-center gap-2">
                {städte.map((stadt, index) => (
                  <button
                    key={stadt}
                    onClick={() => setCurrentStadt(index)}
                    className={`h-2 rounded-full transition-all duration-300 ${
                      index === currentStadt
                        ? 'w-8 bg-fimi-turquoise'
                        : 'w-2 bg-white/40 hover:bg-white/60'
                    }`}
                    aria-label={stadt}
                  />
                ))}
              </div>
            </div>

          </div>

        </div>
      </div>

      {/* Floating Trust Badge - Näher, sichtbarer */}
      <div className="absolute bottom-8 right-8 lg:bottom-12 lg:right-12 hidden lg:block">
        <div className="bg-white rounded-[6px] p-6 shadow-2xl max-w-xs">
          <div className="flex items-start gap-4">
            <div className="w-12 h-12 bg-fimi-turquoise/10 rounded-full flex items-center justify-center flex-shrink-0">
              <CheckCircle size={24} className="text-fimi-turquoise" />
            </div>
            <div>
              <div className="font-bold text-fimi-navy mb-1">
                Kostenlose Erstberatung
              </div>
              <div className="text-sm text-gray-600">
                Wir analysieren Ihren Bedarf und erstellen ein individuelles Angebot.
              </div>
            </div>
          </div>
        </div>
      </div>

    </section>
  )
}
