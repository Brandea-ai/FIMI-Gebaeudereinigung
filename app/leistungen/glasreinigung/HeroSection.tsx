'use client'

import Image from 'next/image'
import { ArrowRight, Phone, CheckCircle } from 'lucide-react'

const trustPoints = [
  'Streifenfrei garantiert',
  'Alle Höhen erreichbar',
  'Umweltschonende Osmose-Technik',
]

export default function HeroSection() {
  return (
    <section
      id="hero"
      className="relative min-h-[90vh] lg:min-h-[85vh] flex items-center bg-[#012956] overflow-hidden"
    >
      {/* Background Image */}
      <div className="absolute inset-0">
        <Image
          src="https://images.unsplash.com/photo-1596178060671-7a80dc8059ea?q=80&w=2400&auto=format&fit=crop"
          alt="Professionelle Glasreinigung - Glasfassade eines modernen Gebäudes"
          fill
          className="object-cover opacity-30"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#012956] via-[#012956]/95 to-[#012956]/70" />
      </div>

      {/* Content */}
      <div className="relative w-full max-w-[1800px] mx-auto px-4 sm:px-6 md:px-8 lg:px-12 xl:px-20 py-12 lg:py-20">
        <div className="max-w-3xl">
          {/* Badge */}
          <span className="inline-flex items-center gap-2 bg-[#109387]/20 text-[#109387] font-bold text-xs sm:text-sm px-3 sm:px-4 py-1.5 sm:py-2 rounded-full mb-4 sm:mb-6">
            <span className="w-2 h-2 bg-[#109387] rounded-full animate-pulse" />
            Glasreinigung Bayern
          </span>

          {/* Headline */}
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-white leading-[1.1] mb-4 sm:mb-6">
            Glasflächen, die
            <span className="block text-[#109387] mt-1 sm:mt-2">beeindrucken</span>
          </h1>

          {/* Subheadline */}
          <p className="text-sm sm:text-base lg:text-xl text-white/80 font-semibold leading-relaxed mb-6 sm:mb-8 lg:mb-10 max-w-2xl">
            Ihre Glasfassade ist das Gesicht Ihres Unternehmens. Wir sorgen dafür, dass es strahlt.
            Mit modernster Osmose-Technik, erfahrenen Industriekletterern und einem festen Team
            reinigen wir jede Glasfläche in Bayern – streifenfrei und zuverlässig.
          </p>

          {/* Trust Points */}
          <div className="flex flex-wrap gap-x-4 sm:gap-x-6 gap-y-2 sm:gap-y-3 mb-8 sm:mb-10">
            {trustPoints.map((point, index) => (
              <div key={index} className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 sm:w-5 sm:h-5 text-[#109387]" />
                <span className="text-white/90 font-semibold text-xs sm:text-sm">{point}</span>
              </div>
            ))}
          </div>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
            <a
              href="#kontakt"
              className="flex items-center justify-center gap-2 sm:gap-3 bg-[#109387] hover:bg-[#0d7d72] text-white font-bold text-sm sm:text-base lg:text-lg px-5 sm:px-6 lg:px-8 py-3 sm:py-4 rounded-[6px] transition-all duration-300 group"
            >
              Kostenfreie Besichtigung
              <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 group-hover:translate-x-1 transition-transform" />
            </a>
            <a
              href="tel:+4987143033460"
              className="flex items-center justify-center gap-2 sm:gap-3 bg-white/10 hover:bg-white/20 text-white font-bold text-sm sm:text-base lg:text-lg px-5 sm:px-6 lg:px-8 py-3 sm:py-4 rounded-[6px] transition-all duration-300 backdrop-blur-sm"
            >
              <Phone className="w-4 h-4 sm:w-5 sm:h-5" />
              0871 430 334 60
            </a>
          </div>
        </div>
      </div>

      {/* Stats Bar - Desktop */}
      <div className="hidden lg:block absolute bottom-0 left-0 right-0 bg-white/5 backdrop-blur-sm border-t border-white/10">
        <div className="w-full max-w-[1800px] mx-auto px-12 xl:px-20 py-6">
          <div className="grid grid-cols-4 gap-8">
            {[
              { value: '8+', label: 'Jahre Erfahrung' },
              { value: '500+', label: 'Glasflächen-Projekte' },
              { value: '18m', label: 'Höhe ohne Gerüst' },
              { value: '100%', label: 'Streifenfrei-Garantie' },
            ].map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-2xl xl:text-3xl font-bold text-[#109387]">{stat.value}</div>
                <div className="text-sm text-white/60 font-semibold">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
