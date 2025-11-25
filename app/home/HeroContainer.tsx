'use client'

import { useState, useEffect } from 'react'
import { ArrowRight } from 'lucide-react'

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
      }, 600)
    }, 4000)
    return () => clearInterval(interval)
  }, [])

  return (
    <section className="relative min-h-screen bg-fimi-navy overflow-hidden">

      {/* Subtle Grid Pattern */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `linear-gradient(rgba(255,255,255,.1) 1px, transparent 1px),
                           linear-gradient(90deg, rgba(255,255,255,.1) 1px, transparent 1px)`,
          backgroundSize: '60px 60px'
        }}
      />

      {/* Main Content */}
      <div className="relative z-10 min-h-screen flex flex-col justify-center">
        <div className="w-full max-w-[1800px] mx-auto px-8 md:px-16 lg:px-24">

          {/* Hero Text */}
          <div className="space-y-8">

            {/* Main Headline */}
            <h1 className="text-[clamp(3rem,8vw,8rem)] font-bold text-white leading-[0.95] tracking-[-0.02em]">
              Gebäudereinigung
            </h1>

            {/* City Line */}
            <div className="flex items-center gap-4">
              <span className="text-[clamp(1.5rem,4vw,3.5rem)] font-light text-white/60">
                in
              </span>
              <span
                className={`text-[clamp(1.5rem,4vw,3.5rem)] font-semibold text-fimi-turquoise transition-all duration-600 ${
                  isAnimating ? 'opacity-0 blur-sm' : 'opacity-100 blur-0'
                }`}
              >
                {städte[currentStadt]}
              </span>
            </div>

            {/* Divider */}
            <div className="w-24 h-[2px] bg-fimi-turquoise" />

            {/* Description */}
            <p className="text-xl md:text-2xl text-white/50 max-w-xl font-light leading-relaxed">
              Professionelle Reinigungslösungen für Gewerbe und Industrie.
              Seit über 15 Jahren Ihr Partner in Bayern.
            </p>

            {/* CTA */}
            <div className="pt-8">
              <a
                href="#contact-form"
                className="group inline-flex items-center gap-4 text-fimi-turquoise text-lg font-medium hover:gap-6 transition-all duration-300"
              >
                <span>Angebot anfordern</span>
                <ArrowRight size={20} className="transition-transform group-hover:translate-x-2" />
              </a>
            </div>

          </div>

        </div>
      </div>

      {/* Right Side - Stats Column */}
      <div className="absolute right-0 top-0 bottom-0 w-px bg-white/10 hidden lg:block" style={{ right: '25%' }} />

      <div className="absolute right-8 md:right-16 lg:right-24 top-1/2 -translate-y-1/2 hidden md:flex flex-col gap-12 text-right">
        <div>
          <div className="text-5xl lg:text-6xl font-bold text-white">15+</div>
          <div className="text-sm text-white/40 uppercase tracking-wider mt-1">Jahre</div>
        </div>
        <div>
          <div className="text-5xl lg:text-6xl font-bold text-white">500+</div>
          <div className="text-sm text-white/40 uppercase tracking-wider mt-1">Kunden</div>
        </div>
        <div>
          <div className="text-5xl lg:text-6xl font-bold text-white">8</div>
          <div className="text-sm text-white/40 uppercase tracking-wider mt-1">Standorte</div>
        </div>
      </div>

      {/* City Indicator - Bottom */}
      <div className="absolute bottom-12 left-8 md:left-16 lg:left-24 flex items-center gap-3">
        {städte.map((stadt, index) => (
          <button
            key={stadt}
            onClick={() => setCurrentStadt(index)}
            className={`h-1 rounded-full transition-all duration-500 ${
              index === currentStadt
                ? 'w-12 bg-fimi-turquoise'
                : 'w-1 bg-white/20 hover:bg-white/40'
            }`}
            aria-label={stadt}
          />
        ))}
      </div>

      {/* Phone Number - Bottom Right */}
      <a
        href="tel:+4917472254773"
        className="absolute bottom-12 right-8 md:right-16 lg:right-24 text-white/60 hover:text-white transition-colors text-sm tracking-wider"
      >
        +49 174 722 54 773
      </a>

    </section>
  )
}
