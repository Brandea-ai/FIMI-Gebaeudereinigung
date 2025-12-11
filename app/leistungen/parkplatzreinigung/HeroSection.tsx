'use client'

import Image from 'next/image'
import Link from 'next/link'
import { ArrowRight, Phone, ArrowLeft, Clock, Shield, Users } from 'lucide-react'

const trustPoints = [
  { icon: Clock, text: '2h Reaktionszeit' },
  { icon: Users, text: 'Festes Personal' },
  { icon: Shield, text: 'Geprüfte Qualität' },
]

export default function HeroSection() {
  return (
    <section id="hero" className="relative min-h-[85vh] flex items-center">
      {/* Background Image */}
      <div className="absolute inset-0">
        <Image
          src="https://images.unsplash.com/photo-1621929747188-0b4dc28498d2?q=80&w=3540&auto=format&fit=crop"
          alt="Sauberer Gewerbeparkplatz - Professionelle Parkplatzreinigung"
          fill
          className="object-cover"
          priority
        />
        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#012956]/95 via-[#012956]/80 to-[#012956]/60" />
      </div>

      {/* Content */}
      <div className="relative z-10 w-full">
        <div className="w-full max-w-[1800px] mx-auto px-4 sm:px-6 md:px-8 lg:px-12 xl:px-20 py-20 sm:py-24 lg:py-32">

          {/* Back Link */}
          <Link
            href="/leistungen"
            className="inline-flex items-center gap-2 text-white/70 hover:text-white font-semibold mb-6 sm:mb-8 transition-colors text-sm sm:text-base"
          >
            <ArrowLeft size={18} />
            Alle Leistungen
          </Link>

          <div className="max-w-4xl">
            {/* Category Badge */}
            <div className="inline-flex items-center bg-[#109387]/20 backdrop-blur-sm border border-[#109387]/30 rounded-[6px] px-3 sm:px-4 py-1.5 sm:py-2 mb-4 sm:mb-6">
              <span className="text-xs sm:text-sm font-bold text-[#109387] uppercase tracking-wide">
                Außenflächenreinigung
              </span>
            </div>

            {/* H1 Headline */}
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-white leading-[1.05] mb-4 sm:mb-6">
              Parkplatzreinigung
              <span className="block">in Bayern</span>
            </h1>

            {/* Subheadline */}
            <p className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold text-[#109387] mb-4 sm:mb-6 leading-tight">
              Ihr Kundenparkplatz ist Ihre Visitenkarte
            </p>

            {/* Description - SEO-optimiert */}
            <p className="text-base sm:text-lg lg:text-xl text-white/80 font-semibold leading-relaxed mb-6 sm:mb-8 max-w-3xl">
              Ölflecken, Kaugummi, Laub und Müll lassen selbst das beste Geschäft
              ungepflegt wirken. Unsere professionelle Parkplatzreinigung sorgt dafür,
              dass Ihre Kunden schon beim Aussteigen den richtigen Eindruck bekommen.
            </p>

            {/* Trust Points */}
            <div className="flex flex-wrap gap-3 sm:gap-4 lg:gap-6 mb-8 sm:mb-10">
              {trustPoints.map((point, index) => (
                <div
                  key={index}
                  className="flex items-center gap-2 bg-white/10 backdrop-blur-sm rounded-[6px] px-3 sm:px-4 py-2"
                >
                  <point.icon className="w-4 h-4 sm:w-5 sm:h-5 text-[#109387]" strokeWidth={2} />
                  <span className="text-white font-semibold text-sm sm:text-base">{point.text}</span>
                </div>
              ))}
            </div>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
              <a
                href="#kontakt"
                className="inline-flex items-center justify-center gap-2 sm:gap-3 bg-[#109387] hover:bg-[#0d7d72] text-white font-bold text-base sm:text-lg px-6 sm:px-8 py-3.5 sm:py-4 rounded-[6px] transition-all duration-300 group shadow-lg"
              >
                Kostenfreie Besichtigung
                <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
              </a>

              <a
                href="tel:+4987120669360"
                className="inline-flex items-center justify-center gap-2 sm:gap-3 bg-white hover:bg-gray-100 text-[#012956] font-bold text-base sm:text-lg px-6 sm:px-8 py-3.5 sm:py-4 rounded-[6px] transition-all duration-300"
              >
                <Phone size={20} />
                0871 20669360
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator - Hidden on Mobile */}
      <div className="hidden lg:block absolute bottom-8 left-1/2 -translate-x-1/2 z-10">
        <div className="flex flex-col items-center gap-2 text-white/60">
          <span className="text-sm font-semibold">Mehr erfahren</span>
          <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center pt-2">
            <div className="w-1.5 h-1.5 bg-white/60 rounded-full animate-bounce" />
          </div>
        </div>
      </div>
    </section>
  )
}
