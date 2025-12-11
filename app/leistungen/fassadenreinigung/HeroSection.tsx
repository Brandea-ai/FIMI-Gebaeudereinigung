'use client'

import Image from 'next/image'
import Link from 'next/link'
import { ArrowRight, Phone, CheckCircle, Shield, Clock, Leaf } from 'lucide-react'

export default function HeroSection() {
  return (
    <section id="hero" className="relative min-h-[85vh] sm:min-h-[90vh] flex items-center">
      {/* Background Image - Saubere Fassade */}
      <div className="absolute inset-0">
        <Image
          src="/images/leistungen/fassadenreinigung/hero.avif"
          alt="Professionelle Fassadenreinigung - Algen und Moos entfernen in Bayern"
          fill
          className="object-cover"
          priority
          sizes="100vw"
        />
        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#012956]/95 via-[#012956]/85 to-[#012956]/60" />
      </div>

      {/* Content */}
      <div className="relative z-10 w-full">
        <div className="w-full max-w-[1800px] mx-auto px-4 sm:px-6 md:px-8 lg:px-12 xl:px-20 py-16 sm:py-20 lg:py-32">

          {/* Breadcrumb */}
          <nav className="mb-6 sm:mb-8" aria-label="Breadcrumb">
            <ol className="flex items-center gap-1.5 sm:gap-2 text-xs sm:text-sm font-semibold">
              <li>
                <Link href="/" className="text-white/80 hover:text-white transition-colors">
                  Home
                </Link>
              </li>
              <li className="text-white/60" aria-hidden="true">/</li>
              <li>
                <Link href="/leistungen" className="text-white/80 hover:text-white transition-colors">
                  Leistungen
                </Link>
              </li>
              <li className="text-white/60" aria-hidden="true">/</li>
              <li className="text-[#109387]" aria-current="page">Fassadenreinigung</li>
            </ol>
          </nav>

          <div className="max-w-4xl">
            {/* Category Badge */}
            <div className="inline-flex items-center bg-[#109387]/20 backdrop-blur-sm border border-[#109387]/30 rounded-[6px] px-3 sm:px-4 py-1.5 sm:py-2 mb-4 sm:mb-6">
              <span className="text-xs sm:text-sm font-bold text-[#109387] uppercase tracking-wide">
                Algen, Moos & Grünbelag entfernen
              </span>
            </div>

            {/* H1 - SEO optimiert */}
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-white leading-[1.05] mb-4 sm:mb-6">
              Fassadenreinigung
              <span className="block">in Bayern</span>
            </h1>

            {/* Subheadline - Kundennutzen & Pain Point */}
            <p className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold text-[#109387] mb-4 sm:mb-6">
              Ihre Fassade ist grün? Wir machen sie wieder sauber.
            </p>

            {/* Description - Leicht verständlich, hoher Flesch-Index */}
            <p className="text-sm sm:text-base lg:text-xl text-white/80 font-semibold leading-relaxed mb-6 sm:mb-8 lg:mb-10 max-w-3xl">
              Vergrünte Fassaden sehen nicht nur schlecht aus – sie mindern den Wert Ihrer Immobilie.
              Wir entfernen Algen, Moos und Verschmutzungen schonend und nachhaltig.
              Das Ergebnis: Eine saubere Fassade, die 5-10 Jahre so bleibt.
              Günstiger als ein Neuanstrich und ohne Gerüst möglich.
            </p>

            {/* Trust Points - 3 Säulen mit USPs */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 sm:gap-4 mb-6 sm:mb-8 lg:mb-10" role="list" aria-label="Vorteile">
              <div className="flex items-center gap-2.5 sm:gap-3 bg-white/10 backdrop-blur-sm rounded-[6px] px-3 sm:px-4 py-2.5 sm:py-3" role="listitem">
                <Shield className="w-5 h-5 sm:w-6 sm:h-6 text-[#109387] flex-shrink-0" aria-hidden="true" />
                <div>
                  <span className="text-white font-bold block text-sm sm:text-base">5-10 Jahre Schutz</span>
                  <span className="text-white/80 text-xs sm:text-sm font-semibold">Mit Imprägnierung</span>
                </div>
              </div>
              <div className="flex items-center gap-2.5 sm:gap-3 bg-white/10 backdrop-blur-sm rounded-[6px] px-3 sm:px-4 py-2.5 sm:py-3" role="listitem">
                <Clock className="w-5 h-5 sm:w-6 sm:h-6 text-[#109387] flex-shrink-0" aria-hidden="true" />
                <div>
                  <span className="text-white font-bold block text-sm sm:text-base">Ohne Gerüst</span>
                  <span className="text-white/80 text-xs sm:text-sm font-semibold">Bis 18m Höhe</span>
                </div>
              </div>
              <div className="flex items-center gap-2.5 sm:gap-3 bg-white/10 backdrop-blur-sm rounded-[6px] px-3 sm:px-4 py-2.5 sm:py-3" role="listitem">
                <Leaf className="w-5 h-5 sm:w-6 sm:h-6 text-[#109387] flex-shrink-0" aria-hidden="true" />
                <div>
                  <span className="text-white font-bold block text-sm sm:text-base">Materialschonend</span>
                  <span className="text-white/80 text-xs sm:text-sm font-semibold">Auch für WDVS</span>
                </div>
              </div>
            </div>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
              <a
                href="#kontakt"
                className="inline-flex items-center justify-center gap-2 sm:gap-3 bg-[#109387] hover:bg-[#0d7d72] text-white font-bold text-sm sm:text-base lg:text-lg px-5 sm:px-6 lg:px-8 py-3 sm:py-3.5 lg:py-4 rounded-[6px] transition-all duration-300 group shadow-lg hover:shadow-xl"
              >
                Kostenfreie Besichtigung
                <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 group-hover:translate-x-1 transition-transform" aria-hidden="true" />
              </a>
              <a
                href="tel:+4987143033460"
                className="inline-flex items-center justify-center gap-2 sm:gap-3 bg-white hover:bg-gray-100 text-[#012956] font-bold text-sm sm:text-base lg:text-lg px-5 sm:px-6 lg:px-8 py-3 sm:py-3.5 lg:py-4 rounded-[6px] transition-all duration-300 shadow-lg"
              >
                <Phone className="w-4 h-4 sm:w-5 sm:h-5" aria-hidden="true" />
                0871 430 334 60
              </a>
            </div>

            {/* Micro-Trust */}
            <p className="mt-4 sm:mt-6 text-white/80 font-semibold text-xs sm:text-sm flex items-center gap-1.5 sm:gap-2">
              <CheckCircle className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-[#109387]" aria-hidden="true" />
              Unverbindlich & kostenfrei – Festpreisangebot nach Besichtigung
            </p>
          </div>

        </div>
      </div>
    </section>
  )
}
