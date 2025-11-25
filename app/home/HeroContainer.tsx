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
      }, 400)
    }, 3500)

    return () => clearInterval(interval)
  }, [])

  const scrollToContact = () => {
    const contact = document.getElementById('contact-form')
    if (contact) {
      contact.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <section className="relative min-h-screen flex items-center">
      {/* Parallax Background */}
      <div
        className="absolute inset-0 parallax"
        style={{
          backgroundImage: 'url(https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=2000&auto=format&fit=crop)',
        }}
      >
        <div className="absolute inset-0 bg-fimi-navy/85" />
      </div>

      {/* Content */}
      <div className="container relative z-10 py-24 lg:py-32">
        <div className="max-w-5xl">
          {/* Headline */}
          <h1 className="heading-hero mb-2">
            Ihre Gebäudereinigung
          </h1>

          {/* Animated City */}
          <div className="mb-10">
            <span className="heading-hero">in </span>
            <span
              className={`heading-hero text-fimi-turquoise inline-block transition-all duration-400 ${
                isAnimating ? 'opacity-0 -translate-y-2' : 'opacity-100 translate-y-0'
              }`}
            >
              {städte[currentStadt]}
            </span>
          </div>

          {/* Subheadline */}
          <p className="text-xl md:text-2xl font-bold text-white/80 mb-12 max-w-4xl leading-relaxed">
            Professionelle Reinigung für Gewerbe und Industrie in Bayern.
            Zuverlässig, gründlich und individuell auf Ihre Anforderungen abgestimmt.
          </p>

          {/* Stats - Clean */}
          <div className="flex flex-wrap gap-12 mb-12">
            <div>
              <span className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-fimi-turquoise">15+</span>
              <span className="text-white/70 ml-3 text-xl font-bold">Jahre Erfahrung</span>
            </div>
            <div>
              <span className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-fimi-turquoise">500+</span>
              <span className="text-white/70 ml-3 text-xl font-bold">Kunden</span>
            </div>
            <div>
              <span className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-fimi-turquoise">8</span>
              <span className="text-white/70 ml-3 text-xl font-bold">Standorte</span>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4">
            <button
              onClick={scrollToContact}
              className="btn-primary"
            >
              Kostenloses Angebot
              <ArrowRight size={18} />
            </button>

            <a href="tel:+4917472254773" className="btn-white">
              <Phone size={18} />
              0174 722 54 773
            </a>
          </div>
        </div>
      </div>

      {/* City Dots */}
      <div className="absolute bottom-8 right-8 hidden lg:flex items-center gap-1.5">
        {städte.map((stadt, index) => (
          <button
            key={stadt}
            onClick={() => setCurrentStadt(index)}
            className={`h-2 rounded-full transition-all duration-300 ${
              index === currentStadt
                ? 'bg-fimi-turquoise w-6'
                : 'bg-white/30 w-2 hover:bg-white/50'
            }`}
            aria-label={stadt}
          />
        ))}
      </div>
    </section>
  )
}
