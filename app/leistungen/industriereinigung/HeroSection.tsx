'use client'

import Image from 'next/image'
import Link from 'next/link'
import { ArrowRight, Clock, Shield, Factory, CheckCircle } from 'lucide-react'

const heroFeatures = [
  { icon: Factory, text: 'Im laufenden Betrieb' },
  { icon: Clock, text: '2h Reaktionszeit' },
  { icon: Shield, text: 'ISO 9001 & 14001' },
]

export default function HeroSection() {
  return (
    <section
      id="hero"
      className="relative min-h-[90vh] flex items-center bg-[#012956] overflow-hidden"
      aria-labelledby="hero-heading"
    >
      {/* Background Image */}
      <div className="absolute inset-0">
        <Image
          src="https://images.unsplash.com/photo-1565688534245-05d6b5be184a?q=80&w=2000&auto=format&fit=crop"
          alt="Industriehalle mit Maschinen - Professionelle Industriereinigung"
          fill
          className="object-cover"
          priority
        />
        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#012956] via-[#012956]/95 to-[#012956]/70" />
      </div>

      {/* Content */}
      <div className="relative z-10 w-full max-w-[1800px] mx-auto px-6 lg:px-12 xl:px-20 py-20 lg:py-28">
        <div className="max-w-3xl">
          {/* Breadcrumb */}
          <nav aria-label="Breadcrumb" className="mb-6">
            <ol className="flex items-center gap-2 text-sm text-white/60 font-semibold">
              <li>
                <Link href="/" className="hover:text-white transition-colors">Start</Link>
              </li>
              <li>/</li>
              <li>
                <Link href="/leistungen" className="hover:text-white transition-colors">Leistungen</Link>
              </li>
              <li>/</li>
              <li className="text-[#109387]">Industriereinigung</li>
            </ol>
          </nav>

          {/* Badge */}
          <div className="inline-flex items-center gap-2 bg-[#109387]/20 border border-[#109387]/30 rounded-full px-4 py-2 mb-6">
            <span className="w-2 h-2 bg-[#109387] rounded-full animate-pulse" />
            <span className="text-[#109387] font-semibold text-sm">Spezialist für Produktion & Fertigung</span>
          </div>

          {/* Headline */}
          <h1
            id="hero-heading"
            className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-white leading-[1.08] mb-6"
          >
            Industriereinigung
            <span className="block text-[#109387] mt-2">Bayern</span>
          </h1>

          {/* Subheadline - SEO optimiert, kundenorientiert */}
          <p className="text-xl md:text-2xl text-white/80 font-semibold leading-relaxed mb-8 max-w-2xl">
            Produktionshallen, Maschinen und Anlagen professionell gereinigt.
            Ohne Produktionsausfall. Auch kurzfristig vor Audits.
          </p>

          {/* Hero Features */}
          <div className="flex flex-wrap gap-4 mb-10">
            {heroFeatures.map((feature, index) => {
              const Icon = feature.icon
              return (
                <div
                  key={index}
                  className="flex items-center gap-3 bg-white/10 backdrop-blur-sm rounded-[6px] px-4 py-3"
                >
                  <Icon size={20} className="text-[#109387]" strokeWidth={2} />
                  <span className="text-white font-semibold">{feature.text}</span>
                </div>
              )
            })}
          </div>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row gap-4">
            <a
              href="#contact-form"
              className="inline-flex items-center justify-center gap-3 bg-[#109387] hover:bg-[#0d7d72] text-white font-bold text-lg px-8 py-4 rounded-[6px] transition-all duration-300 group shadow-lg hover:shadow-xl"
            >
              Kostenfreie Besichtigung
              <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
            </a>
            <a
              href="tel:+4987143033460"
              className="inline-flex items-center justify-center gap-3 bg-white/10 hover:bg-white/20 backdrop-blur-sm text-white font-bold text-lg px-8 py-4 rounded-[6px] transition-all duration-300 border border-white/20"
            >
              0871 430 334 60
            </a>
          </div>

          {/* Trust Indicators */}
          <div className="mt-12 pt-8 border-t border-white/10">
            <p className="text-white/50 font-semibold text-sm uppercase tracking-wide mb-4">
              Vertrauen von Industrieunternehmen in ganz Bayern
            </p>
            <div className="flex flex-wrap items-center gap-6">
              {[
                'Automotive-Zulieferer',
                'Metallverarbeitung',
                'Lebensmittelproduktion',
                'Maschinenbau',
              ].map((branche, index) => (
                <div key={index} className="flex items-center gap-2">
                  <CheckCircle size={16} className="text-[#109387]" />
                  <span className="text-white/70 font-semibold text-sm">{branche}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 hidden lg:flex flex-col items-center gap-2">
        <span className="text-white/40 text-xs font-semibold uppercase tracking-widest">Mehr erfahren</span>
        <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center pt-2">
          <div className="w-1.5 h-3 bg-[#109387] rounded-full animate-bounce" />
        </div>
      </div>
    </section>
  )
}
