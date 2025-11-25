'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image'
import { ArrowRight, Phone, ChevronDown } from 'lucide-react'

const staedte = [
  'Landshut',
  'Muenchen',
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
        setCurrentStadt((prev) => (prev + 1) % staedte.length)
        setIsAnimating(false)
      }, 500)
    }, 3000)

    return () => clearInterval(interval)
  }, [])

  const scrollToFooter = () => {
    const footer = document.getElementById('contact-form')
    if (footer) {
      footer.scrollIntoView({ behavior: 'smooth' })
    }
  }

  const scrollToContent = () => {
    const content = document.getElementById('trust-section')
    if (content) {
      content.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <section id="hero" className="relative min-h-screen flex items-center">
      {/* Background Image */}
      <div className="absolute inset-0">
        <Image
          src="https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=3540&auto=format&fit=crop"
          alt="Professionelle Gebaeudereinigung - Modernes Buerogebaeude"
          fill
          className="object-cover"
          priority
          quality={90}
        />
        {/* Overlay - Einheitlich Navy */}
        <div className="absolute inset-0 bg-fimi-navy/90" />
      </div>

      {/* Content */}
      <div className="container relative z-10 py-32 lg:py-40">
        <div className="max-w-5xl">
          {/* Main Headline - Gross und Fett */}
          <h1 className="text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-extrabold text-white mb-4 leading-tight">
            Ihre Gebaeudereinigung
          </h1>

          {/* Animated City Line */}
          <div className="mb-10">
            <span className="text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-extrabold text-white">in </span>
            <span className="relative inline-block">
              <span
                className={`text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-extrabold text-fimi-turquoise transition-all duration-500 ${
                  isAnimating
                    ? 'opacity-0 translate-y-4'
                    : 'opacity-100 translate-y-0'
                }`}
              >
                {staedte[currentStadt]}
              </span>
            </span>
          </div>

          {/* Subheadline - Groesser und Fett */}
          <p className="text-xl md:text-2xl lg:text-3xl font-bold text-white mb-14 max-w-4xl">
            Gewerbliche Reinigung, Industriereinigung und Facility Management
            fuer Unternehmen in Bayern. Zuverlaessig, professionell und massgeschneidert.
          </p>

          {/* USP Row - Nur Text, keine Boxen */}
          <div className="flex flex-wrap gap-x-12 gap-y-4 mb-14">
            {[
              { value: '500+', label: 'Zufriedene Kunden' },
              { value: '15+', label: 'Jahre Erfahrung' },
              { value: '24/7', label: 'Notfallservice' },
              { value: '8', label: 'Standorte' },
            ].map((item, index) => (
              <div key={index} className="flex items-center gap-3">
                <span className="text-4xl lg:text-5xl font-extrabold text-fimi-turquoise">
                  {item.value}
                </span>
                <span className="text-white text-lg lg:text-xl font-bold">
                  {item.label}
                </span>
              </div>
            ))}
          </div>

          {/* CTA Buttons - 6px Rundungen */}
          <div className="flex flex-col sm:flex-row gap-4">
            <button
              onClick={scrollToFooter}
              className="inline-flex items-center justify-center gap-3 bg-fimi-turquoise text-white text-lg lg:text-xl font-bold px-10 py-5 rounded-[6px] hover:opacity-90 transition-all"
            >
              Kostenloses Angebot anfordern
              <ArrowRight size={24} strokeWidth={3} />
            </button>

            <a
              href="tel:01747225473"
              className="inline-flex items-center justify-center gap-3 bg-white text-fimi-navy text-lg lg:text-xl font-bold px-10 py-5 rounded-[6px] hover:bg-gray-100 transition-all"
            >
              <Phone size={24} strokeWidth={3} />
              0174 722 5473
            </a>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <button
        onClick={scrollToContent}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-white hover:text-fimi-turquoise transition-colors cursor-pointer hidden lg:flex"
        aria-label="Zum Inhalt scrollen"
      >
        <span className="text-sm font-bold uppercase tracking-wider">Mehr erfahren</span>
        <ChevronDown size={28} strokeWidth={3} className="animate-bounce" />
      </button>

      {/* City Indicators - 6px Rundungen */}
      <div className="absolute bottom-8 right-8 hidden lg:flex items-center gap-2">
        {staedte.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentStadt(index)}
            className={`h-3 rounded-[6px] transition-all duration-300 ${
              index === currentStadt
                ? 'bg-fimi-turquoise w-8'
                : 'bg-white/40 w-3 hover:bg-white/60'
            }`}
            aria-label={`Stadt ${index + 1}`}
          />
        ))}
      </div>
    </section>
  )
}
