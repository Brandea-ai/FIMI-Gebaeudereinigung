'use client'

import { useState, useEffect } from 'react'
import { ArrowRight, Phone, MapPin } from 'lucide-react'

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

      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=3840&auto=format&fit=crop"
          alt="Modernes Bürogebäude"
          className="w-full h-full object-cover"
        />
        {/* Overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-fimi-navy via-fimi-navy/95 to-fimi-navy/70" />
      </div>

      {/* Content Grid */}
      <div className="relative z-10 min-h-screen">
        <div className="max-w-[1800px] mx-auto px-6 lg:px-12 xl:px-20 min-h-screen flex items-center">

          <div className="grid lg:grid-cols-2 gap-16 xl:gap-24 items-center w-full py-32">

            {/* Left - Text Content */}
            <div>

              {/* Badge */}
              <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full mb-8">
                <MapPin size={16} className="text-fimi-turquoise" />
                <span className="text-white/80 text-sm font-medium">8 Standorte in Bayern</span>
              </div>

              {/* Headline */}
              <h1 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-white leading-[1.1] mb-6">
                Professionelle
                <br />
                <span className="text-fimi-turquoise">Gebäudereinigung</span>
                <br />
                <span className="inline-flex items-center gap-3">
                  <span className="text-white/60 font-normal">in</span>
                  <span
                    className={`transition-all duration-500 ${
                      isAnimating ? 'opacity-0 -translate-y-2' : 'opacity-100 translate-y-0'
                    }`}
                  >
                    {städte[currentStadt]}
                  </span>
                </span>
              </h1>

              {/* Subline */}
              <p className="text-lg lg:text-xl text-white/60 max-w-lg mb-10 leading-relaxed">
                Ihr zuverlässiger Partner für Gewerbe- und Industriereinigung.
                Maßgeschneiderte Lösungen seit über 15 Jahren.
              </p>

              {/* CTAs */}
              <div className="flex flex-col sm:flex-row gap-4 mb-12">
                <a
                  href="#contact-form"
                  className="inline-flex items-center justify-center gap-3 bg-fimi-turquoise hover:bg-[#0d7d72] text-white font-semibold text-lg px-8 py-4 rounded-[6px] transition-all duration-300 group"
                >
                  Kostenlos anfragen
                  <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
                </a>
                <a
                  href="tel:+4917472254773"
                  className="inline-flex items-center justify-center gap-3 bg-white/10 hover:bg-white/20 backdrop-blur-sm text-white font-semibold text-lg px-8 py-4 rounded-[6px] border border-white/20 transition-all duration-300"
                >
                  <Phone size={20} />
                  0174 722 54 773
                </a>
              </div>

              {/* City Dots */}
              <div className="flex items-center gap-2">
                {städte.map((stadt, index) => (
                  <button
                    key={stadt}
                    onClick={() => setCurrentStadt(index)}
                    className={`h-1.5 rounded-full transition-all duration-300 ${
                      index === currentStadt
                        ? 'w-8 bg-fimi-turquoise'
                        : 'w-1.5 bg-white/30 hover:bg-white/50'
                    }`}
                    aria-label={stadt}
                  />
                ))}
              </div>

            </div>

            {/* Right - Stats Card */}
            <div className="hidden lg:block">
              <div className="bg-white rounded-[6px] p-10 xl:p-12 shadow-2xl max-w-md ml-auto">

                <h2 className="text-2xl font-bold text-fimi-navy mb-8">
                  Warum FIMI?
                </h2>

                <div className="space-y-8">
                  <div className="flex items-start gap-5">
                    <div className="text-4xl xl:text-5xl font-bold text-fimi-turquoise">15+</div>
                    <div>
                      <div className="font-semibold text-fimi-navy">Jahre Erfahrung</div>
                      <div className="text-gray-500 text-sm">in professioneller Gebäudereinigung</div>
                    </div>
                  </div>

                  <div className="w-full h-px bg-gray-200" />

                  <div className="flex items-start gap-5">
                    <div className="text-4xl xl:text-5xl font-bold text-fimi-turquoise">500+</div>
                    <div>
                      <div className="font-semibold text-fimi-navy">Zufriedene Kunden</div>
                      <div className="text-gray-500 text-sm">Unternehmen vertrauen auf uns</div>
                    </div>
                  </div>

                  <div className="w-full h-px bg-gray-200" />

                  <div className="flex items-start gap-5">
                    <div className="text-4xl xl:text-5xl font-bold text-fimi-turquoise">98%</div>
                    <div>
                      <div className="font-semibold text-fimi-navy">Kundenzufriedenheit</div>
                      <div className="text-gray-500 text-sm">durch höchste Qualitätsstandards</div>
                    </div>
                  </div>
                </div>

                <div className="mt-10 pt-8 border-t border-gray-200">
                  <div className="flex items-center gap-3 text-sm text-gray-500">
                    <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
                    24/7 Notfallservice verfügbar
                  </div>
                </div>

              </div>
            </div>

          </div>

        </div>
      </div>

    </section>
  )
}
