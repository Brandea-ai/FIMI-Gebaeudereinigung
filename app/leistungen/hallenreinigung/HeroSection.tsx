'use client'

import Image from 'next/image'
import Link from 'next/link'
import { ArrowRight, Phone, CheckCircle, Clock, Factory, Shield } from 'lucide-react'

export default function HeroSection() {
  return (
    <section id="hero" className="relative min-h-[85vh] sm:min-h-[90vh] flex items-center">
      {/* Background Image - 4K Unsplash Industriehalle */}
      <div className="absolute inset-0">
        <Image
          src="https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?q=80&w=3840&auto=format&fit=crop"
          alt="Professionelle Hallenreinigung in Industriehalle"
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
                <Link href="/" className="text-white/60 hover:text-white transition-colors">
                  Home
                </Link>
              </li>
              <li className="text-white/40">/</li>
              <li>
                <Link href="/leistungen" className="text-white/60 hover:text-white transition-colors">
                  Leistungen
                </Link>
              </li>
              <li className="text-white/40">/</li>
              <li className="text-[#109387]">Hallenreinigung</li>
            </ol>
          </nav>

          <div className="max-w-4xl">
            {/* Category Badge */}
            <div className="inline-flex items-center bg-[#109387]/20 backdrop-blur-sm border border-[#109387]/30 rounded-[6px] px-3 sm:px-4 py-1.5 sm:py-2 mb-4 sm:mb-6">
              <span className="text-xs sm:text-sm font-bold text-[#109387] uppercase tracking-wide">
                Industriereinigung Bayern
              </span>
            </div>

            {/* H1 - SEO optimiert */}
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-white leading-[1.05] mb-4 sm:mb-6">
              Hallenreinigung
              <span className="block text-[#109387]">in Bayern</span>
            </h1>

            {/* Subheadline - Problem-orientiert, Kundensprache */}
            <p className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold text-[#109387] mb-4 sm:mb-6">
              Ihr Hallenboden ist verschmutzt – der Betrieb muss weiterlaufen?
            </p>

            {/* Description - SEO-optimiert mit WDF*IDF Termen */}
            <p className="text-sm sm:text-base lg:text-xl text-white/80 font-semibold leading-relaxed mb-6 sm:mb-8 lg:mb-10 max-w-3xl">
              Lagerhallen, Produktionshallen, Logistikzentren – wir reinigen Ihre Industriehalle
              gründlich und effizient. Auch im laufenden Betrieb, auch kurzfristig.
              Von der Bodenreinigung bis zur Decke, von verstaubten Regalen bis zu öligen Hallenboden.
            </p>

            {/* Trust Points - 3 Säulen */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 sm:gap-4 mb-6 sm:mb-8 lg:mb-10">
              <div className="flex items-center gap-2.5 sm:gap-3 bg-white/10 backdrop-blur-sm rounded-[6px] px-3 sm:px-4 py-2.5 sm:py-3">
                <Factory className="w-5 h-5 sm:w-6 sm:h-6 text-[#109387] flex-shrink-0" />
                <div>
                  <span className="text-white font-bold block text-sm sm:text-base">Im laufenden Betrieb</span>
                  <span className="text-white/60 text-xs sm:text-sm font-semibold">Keine Produktionspause</span>
                </div>
              </div>
              <div className="flex items-center gap-2.5 sm:gap-3 bg-white/10 backdrop-blur-sm rounded-[6px] px-3 sm:px-4 py-2.5 sm:py-3">
                <Clock className="w-5 h-5 sm:w-6 sm:h-6 text-[#109387] flex-shrink-0" />
                <div>
                  <span className="text-white font-bold block text-sm sm:text-base">2h Reaktionszeit</span>
                  <span className="text-white/60 text-xs sm:text-sm font-semibold">Bei Notfällen</span>
                </div>
              </div>
              <div className="flex items-center gap-2.5 sm:gap-3 bg-white/10 backdrop-blur-sm rounded-[6px] px-3 sm:px-4 py-2.5 sm:py-3">
                <Shield className="w-5 h-5 sm:w-6 sm:h-6 text-[#109387] flex-shrink-0" />
                <div>
                  <span className="text-white font-bold block text-sm sm:text-base">ISO-zertifiziert</span>
                  <span className="text-white/60 text-xs sm:text-sm font-semibold">9001 & 14001</span>
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
                <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 group-hover:translate-x-1 transition-transform" />
              </a>
              <a
                href="tel:+4987143033460"
                className="inline-flex items-center justify-center gap-2 sm:gap-3 bg-white hover:bg-gray-100 text-[#012956] font-bold text-sm sm:text-base lg:text-lg px-5 sm:px-6 lg:px-8 py-3 sm:py-3.5 lg:py-4 rounded-[6px] transition-all duration-300 shadow-lg"
              >
                <Phone className="w-4 h-4 sm:w-5 sm:h-5" />
                0871 430 334 60
              </a>
            </div>

            {/* Micro-Trust */}
            <p className="mt-4 sm:mt-6 text-white/60 font-semibold text-xs sm:text-sm flex items-center gap-1.5 sm:gap-2">
              <CheckCircle className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-[#109387]" />
              Unverbindlich & kostenfrei – Wir melden uns innerhalb von 2 Stunden
            </p>
          </div>

        </div>
      </div>
    </section>
  )
}
