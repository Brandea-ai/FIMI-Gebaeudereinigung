'use client'

import Link from 'next/link'
import { ArrowRight, Phone, CheckCircle, Building2, Stethoscope, GraduationCap, Banknote, Landmark, ShoppingBag } from 'lucide-react'

// 6 beliebteste Branchen für Büroreinigung
const branchen = [
  { slug: 'buero-verwaltung', name: 'Büro & Verwaltung', icon: Building2 },
  { slug: 'gesundheitswesen', name: 'Gesundheitswesen', icon: Stethoscope },
  { slug: 'banken-versicherungen', name: 'Banken & Versicherungen', icon: Banknote },
  { slug: 'bildung-schulen', name: 'Bildung & Schulen', icon: GraduationCap },
  { slug: 'oeffentliche-einrichtungen', name: 'Öffentliche Einrichtungen', icon: Landmark },
  { slug: 'einzelhandel', name: 'Einzelhandel', icon: ShoppingBag },
]

export default function CTASection() {
  return (
    <section id="kontakt" className="py-12 sm:py-16 lg:py-28 bg-[#012956]">
      <div className="w-full max-w-[1800px] mx-auto px-4 sm:px-6 md:px-8 lg:px-12 xl:px-20">

        <div className="grid lg:grid-cols-2 gap-8 sm:gap-10 lg:gap-16">

          {/* LINKS: Branchen hochwertig */}
          <div>
            <span className="text-[#109387] font-bold text-xs sm:text-sm uppercase tracking-wide mb-3 sm:mb-4 block">
              Branchenkompetenz
            </span>
            <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold text-white mb-4 sm:mb-6">
              Spezialisiert auf Ihre Branche
            </h3>

            {/* Branchen als hochwertiges 2x3 Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4 mb-6 sm:mb-8">
              {branchen.map((branche) => {
                const Icon = branche.icon
                return (
                  <Link
                    key={branche.slug}
                    href={`/branchen/${branche.slug}`}
                    className="group flex items-center gap-3 sm:gap-4 bg-white/5 hover:bg-white/10 border border-white/10 hover:border-[#109387]/50 rounded-[6px] p-3 sm:p-4 transition-all duration-300"
                  >
                    {/* Icon - Dauerhaft gefüllt für Kontrast */}
                    <div className="w-9 h-9 sm:w-11 sm:h-11 bg-[#109387] rounded-[6px] flex items-center justify-center flex-shrink-0">
                      <Icon className="w-4 h-4 sm:w-5 sm:h-5 text-white" strokeWidth={1.5} />
                    </div>
                    <span className="text-white font-semibold text-xs sm:text-sm group-hover:text-[#109387] transition-colors">
                      {branche.name}
                    </span>
                  </Link>
                )
              })}
            </div>

            {/* Alle Branchen CTA */}
            <Link
              href="/branchen"
              className="inline-flex items-center gap-2 bg-white/10 hover:bg-white/20 border border-white/10 text-white font-bold px-4 sm:px-6 py-2.5 sm:py-3 rounded-[6px] transition-all group text-sm sm:text-base"
            >
              Alle 12 Branchen entdecken
              <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>

          {/* RECHTS: CTA - Lead abholen */}
          <div className="bg-white rounded-[6px] p-5 sm:p-6 lg:p-10">
            <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold text-[#012956] mb-3 sm:mb-4">
              Jetzt starten
            </h3>
            <p className="text-sm sm:text-base text-gray-600 font-semibold leading-relaxed mb-5 sm:mb-8">
              Kostenfreie Besichtigung, transparentes Angebot, schneller Start.
            </p>

            {/* Telefon prominent - Gefüllt für Kontrast */}
            <a
              href="tel:+4987143033460"
              className="flex items-center gap-3 sm:gap-4 bg-[#012956] hover:bg-[#01203d] rounded-[6px] p-3 sm:p-4 lg:p-5 mb-4 sm:mb-6 group transition-colors"
            >
              <div className="w-11 h-11 sm:w-12 sm:h-12 lg:w-14 lg:h-14 bg-[#109387] rounded-[6px] flex items-center justify-center flex-shrink-0">
                <Phone className="w-5 h-5 sm:w-6 sm:h-6 text-white" strokeWidth={1.5} />
              </div>
              <div>
                <span className="text-white/60 text-xs sm:text-sm font-semibold block">Direkt anrufen</span>
                <span className="text-white font-bold text-lg sm:text-xl lg:text-2xl group-hover:text-[#109387] transition-colors">
                  0871 430 334 60
                </span>
              </div>
            </a>

            {/* CTA Button */}
            <Link
              href="/kontakt"
              className="flex items-center justify-center gap-2 bg-[#109387] hover:bg-[#0d7d72] text-white font-bold text-sm sm:text-base lg:text-lg px-5 sm:px-6 lg:px-8 py-3 sm:py-3.5 lg:py-4 rounded-[6px] transition-colors w-full group mb-5 sm:mb-8"
            >
              Kostenfreie Besichtigung anfragen
              <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 group-hover:translate-x-1 transition-transform" />
            </Link>

            {/* Trust-Elemente */}
            <div className="space-y-2 sm:space-y-3">
              <div className="flex items-center gap-2 sm:gap-3">
                <CheckCircle className="w-4 h-4 sm:w-5 sm:h-5 text-[#109387] flex-shrink-0" />
                <span className="text-gray-700 font-semibold text-xs sm:text-sm lg:text-base">Antwort innerhalb von 2 Stunden</span>
              </div>
              <div className="flex items-center gap-2 sm:gap-3">
                <CheckCircle className="w-4 h-4 sm:w-5 sm:h-5 text-[#109387] flex-shrink-0" />
                <span className="text-gray-700 font-semibold text-xs sm:text-sm lg:text-base">100% unverbindlich & kostenfrei</span>
              </div>
              <div className="flex items-center gap-2 sm:gap-3">
                <CheckCircle className="w-4 h-4 sm:w-5 sm:h-5 text-[#109387] flex-shrink-0" />
                <span className="text-gray-700 font-semibold text-xs sm:text-sm lg:text-base">Transparente Festpreise</span>
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  )
}
