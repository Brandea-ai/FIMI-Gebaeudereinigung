'use client'

import { useState, useEffect } from 'react'
import { ArrowRight, Phone } from 'lucide-react'

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
    }, 4000)

    return () => clearInterval(interval)
  }, [])

  const scrollToContact = () => {
    const contact = document.getElementById('contact-form')
    if (contact) {
      contact.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background with Overlay */}
      <div className="absolute inset-0">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: 'url(https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=3840&auto=format&fit=crop)',
            backgroundAttachment: 'fixed',
            backgroundPosition: 'center',
            backgroundSize: 'cover',
          }}
        />
        {/* Gradient Overlay für Premium-Look */}
        <div className="absolute inset-0 bg-gradient-to-br from-fimi-navy/95 via-fimi-navy/90 to-fimi-navy/85" />
      </div>

      {/* Content */}
      <div className="relative z-10 w-full">
        <div className="max-w-[1600px] mx-auto px-6 md:px-12 lg:px-16 xl:px-20 py-32 lg:py-40">

          {/* Headline Group */}
          <div className="mb-20">
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold text-white tracking-tight leading-[1.1] mb-6">
              Ihre Gebäudereinigung
              <br />
              <span className="text-white">in </span>
              <span
                className={`text-fimi-turquoise inline-block transition-all duration-500 ease-out ${
                  isAnimating
                    ? 'opacity-0 translate-y-3'
                    : 'opacity-100 translate-y-0'
                }`}
              >
                {städte[currentStadt]}
              </span>
            </h1>

            <p className="text-lg md:text-xl lg:text-2xl text-white/70 max-w-2xl leading-relaxed font-light">
              Professionelle Reinigung für Gewerbe und Industrie in Bayern.
              Zuverlässig, gründlich und individuell auf Ihre Anforderungen abgestimmt.
            </p>
          </div>

          {/* Stats - Minimal & Clean */}
          <div className="flex flex-wrap items-center gap-12 lg:gap-20 mb-16">
            <div>
              <div className="text-5xl md:text-6xl lg:text-7xl font-bold text-fimi-turquoise tracking-tight">
                15<span className="text-3xl md:text-4xl">+</span>
              </div>
              <div className="text-sm md:text-base text-white/50 uppercase tracking-widest mt-1">
                Jahre Erfahrung
              </div>
            </div>

            <div className="w-px h-16 bg-white/20 hidden md:block" />

            <div>
              <div className="text-5xl md:text-6xl lg:text-7xl font-bold text-fimi-turquoise tracking-tight">
                500<span className="text-3xl md:text-4xl">+</span>
              </div>
              <div className="text-sm md:text-base text-white/50 uppercase tracking-widest mt-1">
                Zufriedene Kunden
              </div>
            </div>

            <div className="w-px h-16 bg-white/20 hidden md:block" />

            <div>
              <div className="text-5xl md:text-6xl lg:text-7xl font-bold text-fimi-turquoise tracking-tight">
                8
              </div>
              <div className="text-sm md:text-base text-white/50 uppercase tracking-widest mt-1">
                Standorte in Bayern
              </div>
            </div>
          </div>

          {/* CTA Buttons - Clean & Professional */}
          <div className="flex flex-col sm:flex-row gap-4">
            <button
              onClick={scrollToContact}
              className="group inline-flex items-center justify-center gap-3 bg-fimi-turquoise text-white text-lg font-semibold px-8 py-4 rounded-[6px] transition-all duration-300 hover:bg-[#0e857a] hover:shadow-lg hover:shadow-fimi-turquoise/20"
            >
              Kostenloses Angebot anfordern
              <ArrowRight size={20} className="transition-transform group-hover:translate-x-1" />
            </button>

            <a
              href="tel:+4917472254773"
              className="group inline-flex items-center justify-center gap-3 bg-white/10 backdrop-blur-sm text-white text-lg font-semibold px-8 py-4 rounded-[6px] border border-white/20 transition-all duration-300 hover:bg-white/20"
            >
              <Phone size={20} />
              0174 722 54 773
            </a>
          </div>

        </div>
      </div>

      {/* City Dots - Subtle */}
      <div className="absolute bottom-8 right-8 lg:bottom-12 lg:right-12 hidden md:flex items-center gap-2">
        {städte.map((stadt, index) => (
          <button
            key={stadt}
            onClick={() => setCurrentStadt(index)}
            className={`rounded-full transition-all duration-500 ${
              index === currentStadt
                ? 'bg-fimi-turquoise w-8 h-2'
                : 'bg-white/30 w-2 h-2 hover:bg-white/50'
            }`}
            aria-label={stadt}
          />
        ))}
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 hidden lg:block">
        <div className="w-6 h-10 rounded-full border-2 border-white/30 flex justify-center pt-2">
          <div className="w-1 h-2 bg-white/50 rounded-full animate-bounce" />
        </div>
      </div>
    </section>
  )
}
