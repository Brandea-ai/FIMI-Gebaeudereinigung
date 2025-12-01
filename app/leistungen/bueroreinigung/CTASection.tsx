'use client'

import Link from 'next/link'
import { ArrowRight, Phone, CheckCircle, Building2, Stethoscope, GraduationCap, Banknote, Landmark, ShoppingBag, Factory, UtensilsCrossed, Dumbbell } from 'lucide-react'

// Kompakte Branchen-Liste
const branchen = [
  { slug: 'buero-verwaltung', name: 'Büro & Verwaltung', icon: Building2 },
  { slug: 'gesundheitswesen', name: 'Gesundheitswesen', icon: Stethoscope },
  { slug: 'banken-versicherungen', name: 'Banken & Versicherungen', icon: Banknote },
  { slug: 'bildung-schulen', name: 'Bildung & Schulen', icon: GraduationCap },
  { slug: 'oeffentliche-einrichtungen', name: 'Öffentliche Einrichtungen', icon: Landmark },
  { slug: 'einzelhandel', name: 'Einzelhandel', icon: ShoppingBag },
  { slug: 'industrie-produktion', name: 'Industrie', icon: Factory },
  { slug: 'gastronomie-hotel', name: 'Gastronomie & Hotel', icon: UtensilsCrossed },
  { slug: 'fitness-sport', name: 'Fitness & Sport', icon: Dumbbell },
]

export default function CTASection() {
  return (
    <section id="kontakt" className="py-20 lg:py-28 bg-[#012956]">
      <div className="w-full max-w-[1800px] mx-auto px-6 lg:px-12 xl:px-20">

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">

          {/* LINKS: Branchen kompakt */}
          <div>
            <span className="text-[#109387] font-bold text-sm uppercase tracking-wide mb-4 block">
              Unsere Branchen
            </span>
            <h3 className="text-2xl lg:text-3xl font-bold text-white mb-6">
              Büroreinigung für jede Branche
            </h3>
            <p className="text-white/70 font-semibold leading-relaxed mb-8">
              Wir kennen die Anforderungen Ihrer Branche und bieten maßgeschneiderte Reinigungskonzepte.
            </p>

            {/* Branchen als kompakte Chips */}
            <div className="flex flex-wrap gap-3 mb-8">
              {branchen.map((branche) => {
                const Icon = branche.icon
                return (
                  <Link
                    key={branche.slug}
                    href={`/branchen/${branche.slug}`}
                    className="inline-flex items-center gap-2 bg-white/10 hover:bg-white/20 text-white font-semibold text-sm px-4 py-2.5 rounded-[6px] transition-all group"
                  >
                    <Icon size={16} className="text-[#109387]" />
                    {branche.name}
                  </Link>
                )
              })}
            </div>

            {/* Alle Branchen Link */}
            <Link
              href="/branchen"
              className="inline-flex items-center gap-2 text-[#109387] font-bold hover:gap-3 transition-all"
            >
              Alle 12 Branchen ansehen
              <ArrowRight size={18} />
            </Link>
          </div>

          {/* RECHTS: CTA - Lead abholen */}
          <div className="bg-white rounded-[6px] p-8 lg:p-10">
            <h3 className="text-2xl lg:text-3xl font-bold text-[#012956] mb-4">
              Jetzt starten
            </h3>
            <p className="text-gray-600 font-semibold leading-relaxed mb-8">
              Kostenfreie Besichtigung, transparentes Angebot, schneller Start.
            </p>

            {/* Telefon prominent */}
            <a
              href="tel:+4987143033460"
              className="flex items-center gap-4 bg-[#012956] hover:bg-[#01203d] rounded-[6px] p-5 mb-6 group transition-colors"
            >
              <div className="w-14 h-14 bg-[#109387] rounded-[6px] flex items-center justify-center flex-shrink-0">
                <Phone size={24} className="text-white" />
              </div>
              <div>
                <span className="text-white/60 text-sm font-semibold block">Direkt anrufen</span>
                <span className="text-white font-bold text-2xl group-hover:text-[#109387] transition-colors">
                  0871 430 334 60
                </span>
              </div>
            </a>

            {/* CTA Button */}
            <Link
              href="/kontakt"
              className="flex items-center justify-center gap-2 bg-[#109387] hover:bg-[#0d7d72] text-white font-bold text-lg px-8 py-4 rounded-[6px] transition-colors w-full group mb-8"
            >
              Kostenfreie Besichtigung anfragen
              <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
            </Link>

            {/* Trust-Elemente */}
            <div className="space-y-3">
              <div className="flex items-center gap-3">
                <CheckCircle size={20} className="text-[#109387] flex-shrink-0" />
                <span className="text-gray-700 font-semibold">Antwort innerhalb von 2 Stunden</span>
              </div>
              <div className="flex items-center gap-3">
                <CheckCircle size={20} className="text-[#109387] flex-shrink-0" />
                <span className="text-gray-700 font-semibold">100% unverbindlich & kostenfrei</span>
              </div>
              <div className="flex items-center gap-3">
                <CheckCircle size={20} className="text-[#109387] flex-shrink-0" />
                <span className="text-gray-700 font-semibold">Transparente Festpreise</span>
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  )
}
