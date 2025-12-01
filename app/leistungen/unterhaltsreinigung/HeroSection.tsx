'use client'

import Image from 'next/image'
import Link from 'next/link'
import { ArrowRight, Phone, ArrowLeft, Shield, Clock, Award } from 'lucide-react'

const trustBadges = [
  { icon: Clock, label: '8+ Jahre', sublabel: 'Erfahrung' },
  { icon: Shield, label: 'ISO 9001', sublabel: 'zertifiziert' },
  { icon: Award, label: '120+', sublabel: 'Kunden' },
]

export default function HeroSection() {
  return (
    <section className="relative min-h-[90vh] flex items-center">
      {/* Background Image - Professionelles Büro-Reinigungsbild */}
      <div className="absolute inset-0">
        <Image
          src="https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=3540&auto=format&fit=crop"
          alt="Professionelle Unterhaltsreinigung - Sauberes modernes Büro"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#012956]/95 via-[#012956]/85 to-[#012956]/70" />
      </div>

      {/* Content */}
      <div className="relative z-10 w-full">
        <div className="w-full max-w-[1800px] mx-auto px-6 lg:px-12 xl:px-20 py-24 lg:py-32">

          {/* Breadcrumb */}
          <Link
            href="/leistungen"
            className="inline-flex items-center gap-2 text-white/60 hover:text-white font-semibold mb-8 transition-colors"
          >
            <ArrowLeft size={18} />
            Alle Leistungen
          </Link>

          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            {/* Left: Content */}
            <div>
              <div className="inline-flex items-center bg-[#109387]/20 backdrop-blur-sm border border-[#109387]/30 rounded-[6px] px-4 py-2 mb-6">
                <span className="text-sm font-bold text-[#109387] uppercase tracking-wide">
                  Regelmäßige Gebäudereinigung
                </span>
              </div>

              <h1 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-white leading-[1.05] mb-6">
                Unterhalts­reinigung
                <span className="block text-[#109387] mt-2">die funktioniert</span>
              </h1>

              <p className="text-xl md:text-2xl font-bold text-white/90 mb-6 leading-snug">
                Saubere Räume, zufriedene Mitarbeiter, beeindruckte Kunden – ohne dass Sie sich darum kümmern müssen.
              </p>

              <p className="text-lg text-white/70 font-semibold leading-relaxed mb-8 max-w-xl">
                Sie konzentrieren sich auf Ihr Geschäft. Wir sorgen dafür, dass Ihre Büros, Praxen oder Geschäftsräume jeden Tag so aussehen, als wären sie gerade erst bezogen worden. Täglich, wöchentlich oder nach Ihrem Rhythmus.
              </p>

              {/* CTAs */}
              <div className="flex flex-col sm:flex-row gap-4 mb-10">
                <a
                  href="#contact-form"
                  className="inline-flex items-center justify-center gap-3 bg-[#109387] hover:bg-[#0d7d72] text-white font-bold text-lg px-8 py-4 rounded-[6px] transition-all duration-300 group shadow-lg"
                >
                  Kostenfreie Besichtigung
                  <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
                </a>
                <a
                  href="tel:+4987143033460"
                  className="inline-flex items-center justify-center gap-3 bg-white/10 hover:bg-white/20 backdrop-blur-sm border border-white/30 text-white font-bold text-lg px-8 py-4 rounded-[6px] transition-all duration-300"
                >
                  <Phone size={20} />
                  0871 430 334 60
                </a>
              </div>

              {/* Trust Badges */}
              <div className="flex flex-wrap gap-6">
                {trustBadges.map((badge) => {
                  const Icon = badge.icon
                  return (
                    <div key={badge.label} className="flex items-center gap-3">
                      <div className="w-12 h-12 bg-[#109387]/20 rounded-[6px] flex items-center justify-center">
                        <Icon size={24} className="text-[#109387]" />
                      </div>
                      <div>
                        <div className="text-white font-bold text-lg">{badge.label}</div>
                        <div className="text-white/60 font-semibold text-sm">{badge.sublabel}</div>
                      </div>
                    </div>
                  )
                })}
              </div>
            </div>

            {/* Right: Feature Box - Desktop Only */}
            <div className="hidden lg:block">
              <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-[12px] p-8">
                <h3 className="text-2xl font-bold text-white mb-6">Das bekommen Sie:</h3>
                <ul className="space-y-4">
                  {[
                    'Festes Reinigungsteam das Ihre Räume kennt',
                    'Flexible Reinigungszeiten – auch nachts & am Wochenende',
                    'Transparente Festpreise ohne versteckte Kosten',
                    'Ansprechpartner der innerhalb von 2h reagiert',
                    'Qualitätskontrolle mit dokumentierten Checklisten',
                    'Umweltschonende Reinigungsmittel auf Wunsch',
                  ].map((item, index) => (
                    <li key={index} className="flex items-start gap-3 text-white/90 font-semibold">
                      <span className="w-6 h-6 bg-[#109387] rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                        <svg className="w-4 h-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                        </svg>
                      </span>
                      {item}
                    </li>
                  ))}
                </ul>
                <div className="mt-8 pt-6 border-t border-white/20">
                  <p className="text-white/60 font-semibold text-sm mb-2">Bereits ab</p>
                  <p className="text-3xl font-bold text-[#109387]">0,80 € <span className="text-lg text-white/80">/ m²</span></p>
                  <p className="text-white/60 font-semibold text-sm mt-1">je nach Objekt und Intervall</p>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}
