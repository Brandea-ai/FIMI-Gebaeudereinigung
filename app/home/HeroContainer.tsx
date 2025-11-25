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
        className="absolute inset-0"
        style={{
          backgroundImage: 'url(https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=3840&auto=format&fit=crop)',
          backgroundAttachment: 'fixed',
          backgroundPosition: 'center',
          backgroundSize: 'cover',
        }}
      >
        <div className="absolute inset-0 bg-fimi-navy/90" />
      </div>

      {/* Content - Full Width */}
      <div className="relative z-10 w-full px-6 md:px-12 lg:px-20 py-32">

        {/* Main Content */}
        <div className="max-w-[1800px] mx-auto">

          {/* Headline */}
          <h1 className="text-5xl md:text-7xl lg:text-8xl xl:text-9xl font-extrabold text-white leading-none mb-4">
            Ihre Gebäudereinigung
          </h1>

          {/* Animated City */}
          <div className="mb-12">
            <span className="text-5xl md:text-7xl lg:text-8xl xl:text-9xl font-extrabold text-white">in </span>
            <span
              className={`text-5xl md:text-7xl lg:text-8xl xl:text-9xl font-extrabold text-fimi-turquoise inline-block transition-all duration-300 ${
                isAnimating ? 'opacity-0 -translate-y-4' : 'opacity-100 translate-y-0'
              }`}
            >
              {städte[currentStadt]}
            </span>
          </div>

          {/* Subheadline */}
          <p className="text-xl md:text-2xl lg:text-3xl font-semibold text-white/80 max-w-4xl mb-16 leading-relaxed">
            Professionelle Reinigung für Gewerbe und Industrie in Bayern.
            Zuverlässig, gründlich und individuell auf Ihre Anforderungen abgestimmt.
          </p>

          {/* Stats Row */}
          <div className="flex flex-wrap gap-16 mb-16">
            <div className="flex items-baseline gap-3">
              <span className="text-6xl md:text-7xl lg:text-8xl font-extrabold text-fimi-turquoise">15+</span>
              <span className="text-xl md:text-2xl font-semibold text-white/70">Jahre Erfahrung</span>
            </div>
            <div className="flex items-baseline gap-3">
              <span className="text-6xl md:text-7xl lg:text-8xl font-extrabold text-fimi-turquoise">500+</span>
              <span className="text-xl md:text-2xl font-semibold text-white/70">Kunden</span>
            </div>
            <div className="flex items-baseline gap-3">
              <span className="text-6xl md:text-7xl lg:text-8xl font-extrabold text-fimi-turquoise">8</span>
              <span className="text-xl md:text-2xl font-semibold text-white/70">Standorte</span>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-wrap gap-6">
            <button
              onClick={scrollToContact}
              className="inline-flex items-center gap-3 bg-fimi-turquoise text-white text-xl md:text-2xl font-bold px-10 py-5 rounded-[6px] hover:bg-[#0d7d72] transition-all hover:-translate-y-1"
            >
              Kostenloses Angebot
              <ArrowRight size={28} />
            </button>

            <a
              href="tel:+4917472254773"
              className="inline-flex items-center gap-3 bg-white text-fimi-navy text-xl md:text-2xl font-bold px-10 py-5 rounded-[6px] hover:bg-gray-100 transition-all hover:-translate-y-1"
            >
              <Phone size={28} />
              0174 722 54 773
            </a>
          </div>
        </div>
      </div>

      {/* City Indicator Dots */}
      <div className="absolute bottom-12 right-12 hidden lg:flex items-center gap-2">
        {städte.map((stadt, index) => (
          <button
            key={stadt}
            onClick={() => setCurrentStadt(index)}
            className={`h-3 rounded-full transition-all duration-300 ${
              index === currentStadt
                ? 'bg-fimi-turquoise w-10'
                : 'bg-white/40 w-3 hover:bg-white/60'
            }`}
            aria-label={stadt}
          />
        ))}
      </div>
    </section>
  )
}
