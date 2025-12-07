'use client'

import Link from 'next/link'
import { ArrowRight, Phone, CheckCircle, TrendingDown, Clock, Shield } from 'lucide-react'

const trustPoints = [
  'Kostenfreie Erstberatung',
  'Potenzialanalyse in 2 Wochen',
  'Keine Vertragsbindung',
  'Erfolgsabhängige Vergütung möglich',
]

export default function CTASection() {
  return (
    <section id="kontakt" className="py-16 sm:py-20 lg:py-28 bg-[#012956]">
      <div className="w-full max-w-[1800px] mx-auto px-4 sm:px-6 md:px-8 lg:px-12 xl:px-20">

        <div className="grid lg:grid-cols-2 gap-8 sm:gap-10 lg:gap-16">

          {/* Left: Content */}
          <div>
            <span className="text-[#109387] font-bold text-xs sm:text-sm uppercase tracking-wide mb-3 sm:mb-4 block">
              Jetzt starten
            </span>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-bold text-white mb-4 sm:mb-6">
              Einsparpotenziale aufdecken
            </h2>
            <p className="text-base sm:text-lg lg:text-xl text-white/80 font-semibold leading-relaxed mb-6 sm:mb-8">
              In einem unverbindlichen Erstgespräch analysieren wir Ihre Situation und zeigen auf,
              wo Einsparpotenziale liegen. Keine Verpflichtungen, keine versteckten Kosten.
            </p>

            {/* Value Props */}
            <div className="grid sm:grid-cols-3 gap-4 sm:gap-6 mb-8 sm:mb-10">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-[6px] bg-[#109387]/20 flex items-center justify-center flex-shrink-0">
                  <TrendingDown className="w-5 h-5 sm:w-6 sm:h-6 text-[#109387]" aria-hidden="true" />
                </div>
                <div>
                  <span className="text-white font-bold text-sm sm:text-base block">5-15%</span>
                  <span className="text-white/80 text-xs sm:text-sm font-semibold">Einsparpotenzial</span>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-[6px] bg-[#109387]/20 flex items-center justify-center flex-shrink-0">
                  <Clock className="w-5 h-5 sm:w-6 sm:h-6 text-[#109387]" aria-hidden="true" />
                </div>
                <div>
                  <span className="text-white font-bold text-sm sm:text-base block">2 Wochen</span>
                  <span className="text-white/80 text-xs sm:text-sm font-semibold">bis Potenzialanalyse</span>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-[6px] bg-[#109387]/20 flex items-center justify-center flex-shrink-0">
                  <Shield className="w-5 h-5 sm:w-6 sm:h-6 text-[#109387]" aria-hidden="true" />
                </div>
                <div>
                  <span className="text-white font-bold text-sm sm:text-base block">Kostenfrei</span>
                  <span className="text-white/80 text-xs sm:text-sm font-semibold">Erstberatung</span>
                </div>
              </div>
            </div>

            {/* Trust Points */}
            <ul className="space-y-2 sm:space-y-3">
              {trustPoints.map((point, index) => (
                <li key={index} className="flex items-center gap-2 sm:gap-3">
                  <CheckCircle className="w-4 h-4 sm:w-5 sm:h-5 text-[#109387] flex-shrink-0" aria-hidden="true" />
                  <span className="text-white/80 font-semibold text-sm sm:text-base">{point}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Right: CTA Box */}
          <div className="bg-white rounded-[6px] p-5 sm:p-6 lg:p-10">
            <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold text-[#012956] mb-3 sm:mb-4">
              Kostenfreie Erstberatung anfragen
            </h3>
            <p className="text-sm sm:text-base text-gray-600 font-semibold leading-relaxed mb-5 sm:mb-6">
              Wir melden uns innerhalb von 2 Stunden bei Ihnen, um einen Termin zu vereinbaren.
            </p>

            {/* CTA Button - Kontaktformular */}
            <Link
              href="/kontakt"
              className="flex items-center justify-center gap-2 bg-[#109387] hover:bg-[#0d7d72] text-white font-bold text-sm sm:text-base lg:text-lg px-5 sm:px-6 lg:px-8 py-3 sm:py-3.5 lg:py-4 rounded-[6px] transition-colors w-full group mb-4 sm:mb-5"
            >
              Beratungsgespräch vereinbaren
              <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 group-hover:translate-x-1 transition-transform" aria-hidden="true" />
            </Link>

            {/* Telefon */}
            <a
              href="tel:+4987143033460"
              className="flex items-center gap-3 sm:gap-4 bg-[#f8f9fa] hover:bg-[#012956] rounded-[6px] p-3 sm:p-4 lg:p-5 mb-5 sm:mb-6 group transition-colors"
            >
              <div className="w-10 h-10 sm:w-11 sm:h-11 lg:w-12 lg:h-12 border-2 border-[#109387] group-hover:bg-[#109387] rounded-[6px] flex items-center justify-center flex-shrink-0 transition-all duration-300">
                <Phone className="w-4 h-4 sm:w-5 sm:h-5 lg:w-6 lg:h-6 text-[#109387] group-hover:text-white transition-colors duration-300" strokeWidth={1.5} aria-hidden="true" />
              </div>
              <div>
                <span className="text-gray-500 group-hover:text-white/80 text-xs sm:text-sm font-semibold block transition-colors">Oder direkt anrufen</span>
                <span className="text-[#012956] group-hover:text-white font-bold text-base sm:text-lg lg:text-xl transition-colors">
                  0871 430 334 60
                </span>
              </div>
            </a>

            {/* Bottom Note */}
            <div className="border-t border-gray-200 pt-5 sm:pt-6">
              <p className="text-sm text-gray-500 font-semibold text-center">
                Montag bis Freitag, 08:00 - 18:00 Uhr
              </p>
              <p className="text-xs text-gray-400 font-semibold text-center mt-1">
                Ihr Ansprechpartner: FIMI Einkaufsberatung
              </p>
            </div>
          </div>

        </div>

      </div>
    </section>
  )
}
