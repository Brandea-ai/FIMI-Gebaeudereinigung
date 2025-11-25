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
    }, 3500)
    return () => clearInterval(interval)
  }, [])

  return (
    <section className="relative min-h-screen">

      {/* Background Image - Sauberes, modernes Büro */}
      <div className="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=3840&auto=format&fit=crop"
          alt="Sauberes modernes Bürogebäude"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-fimi-navy via-fimi-navy/90 to-fimi-navy/60" />
      </div>

      {/* Content */}
      <div className="relative z-10 min-h-screen">
        <div className="max-w-[1800px] mx-auto px-6 lg:px-12 xl:px-20 min-h-screen flex items-center">

          <div className="grid lg:grid-cols-2 gap-16 xl:gap-24 items-center w-full py-32">

            {/* Left - Main Content */}
            <div>

              {/* Headline - Problem → Lösung */}
              <h1 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-white leading-[1.1] mb-8">
                Endlich eine
                <br />
                <span className="text-fimi-turquoise">Reinigungsfirma,</span>
                <br />
                <span className="inline-flex items-center gap-3">
                  <span className="text-white/60 font-normal">die</span>
                  <span className="text-white">zuverlässig ist</span>
                </span>
              </h1>

              {/* Subline - Kundensprache, SEO */}
              <p className="text-xl lg:text-2xl text-white/70 max-w-xl mb-6 leading-relaxed">
                Büroreinigung, Industriereinigung und Gebäudeservice in
                <span
                  className={`text-fimi-turquoise font-semibold ml-2 inline-block transition-all duration-500 ${
                    isAnimating ? 'opacity-0 -translate-y-1' : 'opacity-100 translate-y-0'
                  }`}
                >
                  {städte[currentStadt]}
                </span>
                <span className="ml-1">und Umgebung.</span>
              </p>

              <p className="text-lg text-white/50 max-w-lg mb-10">
                Schluss mit unzuverlässigen Reinigungskräften, verschobenen Terminen
                und mangelhafter Qualität. Wir übernehmen – Sie konzentrieren sich auf Ihr Geschäft.
              </p>

              {/* CTAs */}
              <div className="flex flex-col sm:flex-row gap-4 mb-10">
                <a
                  href="#contact-form"
                  className="inline-flex items-center justify-center gap-3 bg-fimi-turquoise hover:bg-[#0d7d72] text-white font-semibold text-lg px-8 py-4 rounded-[6px] transition-all duration-300 group"
                >
                  Angebot in 24h erhalten
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

              {/* City Selector */}
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

            {/* Right - Trust Card */}
            <div className="hidden lg:block">
              <div className="bg-white rounded-[6px] p-10 xl:p-12 shadow-2xl max-w-md ml-auto">

                <h2 className="text-2xl font-bold text-fimi-navy mb-2">
                  Das sagen unsere Kunden
                </h2>
                <p className="text-gray-500 mb-8">
                  Über 500 Unternehmen in Bayern vertrauen uns
                </p>

                <div className="space-y-6">

                  {/* Testimonial Quote */}
                  <blockquote className="text-gray-700 italic border-l-4 border-fimi-turquoise pl-4">
                    „Seit 3 Jahren betreut FIMI unsere Büroräume. Pünktlich, gründlich,
                    und wir müssen uns um nichts kümmern."
                  </blockquote>
                  <div className="text-sm text-gray-500">
                    — Geschäftsführer, Maschinenbau-Unternehmen, Landshut
                  </div>

                  <div className="w-full h-px bg-gray-200 my-6" />

                  {/* Stats Row */}
                  <div className="grid grid-cols-3 gap-4 text-center">
                    <div>
                      <div className="text-3xl font-bold text-fimi-turquoise">15+</div>
                      <div className="text-xs text-gray-500 uppercase tracking-wide">Jahre</div>
                    </div>
                    <div>
                      <div className="text-3xl font-bold text-fimi-turquoise">500+</div>
                      <div className="text-xs text-gray-500 uppercase tracking-wide">Kunden</div>
                    </div>
                    <div>
                      <div className="text-3xl font-bold text-fimi-turquoise">98%</div>
                      <div className="text-xs text-gray-500 uppercase tracking-wide">Zufrieden</div>
                    </div>
                  </div>

                </div>

                <div className="mt-8 pt-6 border-t border-gray-200">
                  <div className="flex items-center gap-3 text-sm text-gray-600">
                    <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
                    Kostenlose Beratung – Antwort in 24 Stunden
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
