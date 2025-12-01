'use client'

import Image from 'next/image'
import Link from 'next/link'
import { ArrowRight, Phone, CheckCircle, Clock, Users, Shield } from 'lucide-react'

export default function HeroSection() {
  return (
    <section id="hero" className="relative min-h-[90vh] flex items-center">
      {/* Background Image - 4K Unsplash */}
      <div className="absolute inset-0">
        <Image
          src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?q=80&w=3840&auto=format&fit=crop"
          alt="Professionelle Unterhaltsreinigung in modernen Geschäftsräumen"
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
        <div className="w-full max-w-[1800px] mx-auto px-6 lg:px-12 xl:px-20 py-24 lg:py-32">

          {/* Breadcrumb */}
          <nav className="mb-8" aria-label="Breadcrumb">
            <ol className="flex items-center gap-2 text-sm font-semibold">
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
              <li className="text-[#109387]">Unterhaltsreinigung</li>
            </ol>
          </nav>

          <div className="max-w-4xl">
            {/* Category Badge */}
            <div className="inline-flex items-center bg-[#109387]/20 backdrop-blur-sm border border-[#109387]/30 rounded-[6px] px-4 py-2 mb-6">
              <span className="text-sm font-bold text-[#109387] uppercase tracking-wide">
                Regelmäßige Gebäudereinigung
              </span>
            </div>

            {/* H1 - SEO optimiert */}
            <h1 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-white leading-[1.05] mb-6">
              Unterhaltsreinigung in Bayern
            </h1>

            {/* Subheadline - Kundennutzen */}
            <p className="text-xl md:text-2xl lg:text-3xl font-bold text-[#109387] mb-6">
              Saubere Räume – jeden Tag, ohne dass Sie daran denken müssen
            </p>

            {/* Description */}
            <p className="text-lg lg:text-xl text-white/80 font-semibold leading-relaxed mb-10 max-w-3xl">
              Unterhaltsreinigung ist die regelmäßige Pflege Ihrer Geschäftsräume – ob Büro, Praxis,
              Einzelhandel oder Produktion. Ein festes Team, das Ihre Anforderungen kennt.
              Planbar, zuverlässig, professionell.
            </p>

            {/* Trust Points - 3 Säulen */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-10">
              <div className="flex items-center gap-3 bg-white/10 backdrop-blur-sm rounded-[6px] px-4 py-3">
                <Clock size={24} className="text-[#109387] flex-shrink-0" />
                <div>
                  <span className="text-white font-bold block">2h Reaktionszeit</span>
                  <span className="text-white/60 text-sm font-semibold">Garantiert</span>
                </div>
              </div>
              <div className="flex items-center gap-3 bg-white/10 backdrop-blur-sm rounded-[6px] px-4 py-3">
                <Users size={24} className="text-[#109387] flex-shrink-0" />
                <div>
                  <span className="text-white font-bold block">Festes Personal</span>
                  <span className="text-white/60 text-sm font-semibold">Keine Fremden</span>
                </div>
              </div>
              <div className="flex items-center gap-3 bg-white/10 backdrop-blur-sm rounded-[6px] px-4 py-3">
                <Shield size={24} className="text-[#109387] flex-shrink-0" />
                <div>
                  <span className="text-white font-bold block">ISO-Standards</span>
                  <span className="text-white/60 text-sm font-semibold">9001 & 14001</span>
                </div>
              </div>
            </div>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="#kontakt"
                className="inline-flex items-center justify-center gap-3 bg-[#109387] hover:bg-[#0d7d72] text-white font-bold text-lg px-8 py-4 rounded-[6px] transition-all duration-300 group shadow-lg hover:shadow-xl"
              >
                Kostenfreie Besichtigung
                <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
              </a>
              <a
                href="tel:+4987143033460"
                className="inline-flex items-center justify-center gap-3 bg-white hover:bg-gray-100 text-[#012956] font-bold text-lg px-8 py-4 rounded-[6px] transition-all duration-300 shadow-lg"
              >
                <Phone size={20} />
                0871 430 334 60
              </a>
            </div>

            {/* Micro-Trust */}
            <p className="mt-6 text-white/60 font-semibold text-sm flex items-center gap-2">
              <CheckCircle size={16} className="text-[#109387]" />
              Unverbindlich & kostenfrei – Wir melden uns innerhalb von 2 Stunden
            </p>
          </div>

        </div>
      </div>
    </section>
  )
}
