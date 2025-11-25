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
        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-fimi-navy/95 via-fimi-navy/85 to-fimi-navy/70" />
        {/* Pattern Overlay */}
        <div className="absolute inset-0 bg-grid opacity-30" />
      </div>

      {/* Content */}
      <div className="container relative z-10 py-32 lg:py-40">
        <div className="max-w-4xl">
          {/* Badge */}
          <div className="inline-flex items-center gap-3 px-5 py-2.5 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full mb-8">
            <span className="w-2 h-2 bg-fimi-turquoise rounded-full animate-pulse" />
            <span className="text-white/90 text-sm font-medium">
              Professionelle Gebaeudereinigung seit 15+ Jahren
            </span>
          </div>

          {/* Main Headline */}
          <h1 className="heading-display text-white mb-4">
            Ihre Gebaeudereinigung
          </h1>

          {/* Animated City Line */}
          <div className="mb-8">
            <span className="heading-display text-white">in </span>
            <span className="relative inline-block">
              <span
                className={`heading-display text-fimi-turquoise transition-all duration-500 ${
                  isAnimating
                    ? 'opacity-0 translate-y-4'
                    : 'opacity-100 translate-y-0'
                }`}
              >
                {staedte[currentStadt]}
              </span>
              {/* Underline */}
              <span className="absolute bottom-2 left-0 right-0 h-2 bg-fimi-turquoise/30 -z-10" />
            </span>
          </div>

          {/* Subheadline */}
          <p className="text-xl lg:text-2xl text-white/80 mb-12 max-w-2xl leading-relaxed">
            Gewerbliche Reinigung, Industriereinigung und Facility Management
            fuer Unternehmen in Bayern. Zuverlaessig, professionell und massgeschneidert.
          </p>

          {/* USP Row */}
          <div className="flex flex-wrap gap-6 mb-12">
            {[
              { value: '500+', label: 'Zufriedene Kunden' },
              { value: '15+', label: 'Jahre Erfahrung' },
              { value: '24/7', label: 'Notfallservice' },
              { value: '8', label: 'Standorte in Bayern' },
            ].map((item, index) => (
              <div
                key={index}
                className="flex items-center gap-3 px-5 py-3 bg-white/5 backdrop-blur-sm border border-white/10 rounded-lg"
              >
                <span className="text-2xl lg:text-3xl font-bold text-fimi-turquoise">
                  {item.value}
                </span>
                <span className="text-white/70 text-sm font-medium">
                  {item.label}
                </span>
              </div>
            ))}
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4">
            <button
              onClick={scrollToFooter}
              className="group btn-primary text-base lg:text-lg px-8 py-4"
            >
              Kostenloses Angebot anfordern
              <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
            </button>

            <a
              href="tel:01747225473"
              className="btn text-base lg:text-lg px-8 py-4 bg-white text-fimi-navy hover:bg-gray-100 transition-colors"
            >
              <Phone size={20} />
              0174 722 5473
            </a>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <button
        onClick={scrollToContent}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-white/60 hover:text-white transition-colors cursor-pointer hidden lg:flex"
        aria-label="Zum Inhalt scrollen"
      >
        <span className="text-xs font-medium uppercase tracking-wider">Mehr erfahren</span>
        <ChevronDown size={24} className="animate-bounce" />
      </button>

      {/* City Indicators */}
      <div className="absolute bottom-8 right-8 hidden lg:flex items-center gap-2">
        {staedte.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentStadt(index)}
            className={`w-2 h-2 rounded-full transition-all duration-300 ${
              index === currentStadt
                ? 'bg-fimi-turquoise w-6'
                : 'bg-white/30 hover:bg-white/50'
            }`}
            aria-label={`Stadt ${index + 1}`}
          />
        ))}
      </div>
    </section>
  )
}
