'use client'

import Link from 'next/link'
import Image from 'next/image'
import { ArrowRight, Building2, Home, Factory, Stethoscope, ShoppingBag, UtensilsCrossed } from 'lucide-react'

const branchen = [
  {
    slug: 'buero-verwaltung',
    name: 'Büro & Verwaltung',
    icon: Building2,
    description: 'Bürokomplexe, Kanzleien, Agenturen – Facility Management für professionelle Arbeitsumgebungen.',
    image: 'https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=800&auto=format&fit=crop',
    beispiele: ['Bürogebäude', 'Kanzleien', 'Agenturen', 'Co-Working'],
  },
  {
    slug: 'wohnungswirtschaft',
    name: 'Wohnungswirtschaft',
    icon: Home,
    description: 'Hausverwaltungen, WEGs, Wohnanlagen – komplette Objektbetreuung für zufriedene Mieter.',
    image: 'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?q=80&w=800&auto=format&fit=crop',
    beispiele: ['Wohnanlagen', 'Hausverwaltungen', 'WEGs', 'Mehrfamilienhäuser'],
  },
  {
    slug: 'industrie-produktion',
    name: 'Industrie & Produktion',
    icon: Factory,
    description: 'Werksgelände, Produktionsstätten – ganzheitliche Betreuung für den laufenden Betrieb.',
    image: 'https://images.unsplash.com/photo-1565688534245-05d6b5be184a?q=80&w=800&auto=format&fit=crop',
    beispiele: ['Produktionshallen', 'Werksgelände', 'Logistikzentren', 'Lagerhallen'],
  },
  {
    slug: 'gesundheitswesen',
    name: 'Gesundheitswesen',
    icon: Stethoscope,
    description: 'Praxen, Kliniken, Pflegeheime – Facility Management mit höchsten Hygieneanforderungen.',
    image: 'https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?q=80&w=800&auto=format&fit=crop',
    beispiele: ['Arztpraxen', 'MVZ', 'Pflegeheime', 'Rehakliniken'],
  },
  {
    slug: 'einzelhandel',
    name: 'Einzelhandel',
    icon: ShoppingBag,
    description: 'Filialen, Shopping-Center, Supermärkte – professionelle Betreuung für den ersten Eindruck.',
    image: 'https://images.unsplash.com/photo-1441986300917-64674bd600d8?q=80&w=800&auto=format&fit=crop',
    beispiele: ['Filialen', 'Shopping-Center', 'Supermärkte', 'Fachgeschäfte'],
  },
  {
    slug: 'gastronomie-hotel',
    name: 'Gastronomie & Hotel',
    icon: UtensilsCrossed,
    description: 'Hotels, Restaurants, Catering – Facility Management für Gastgeber mit Anspruch.',
    image: 'https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?q=80&w=800&auto=format&fit=crop',
    beispiele: ['Hotels', 'Restaurants', 'Pensionen', 'Tagungshotels'],
  },
]

export default function BranchenSection() {
  return (
    <section className="py-16 sm:py-20 lg:py-28 bg-[#012956]">
      <div className="w-full max-w-[1800px] mx-auto px-4 sm:px-6 md:px-8 lg:px-12 xl:px-20">

        {/* Section Header */}
        <div className="text-center mb-12 sm:mb-16">
          <span className="text-[#109387] font-bold text-xs sm:text-sm uppercase tracking-wide mb-3 sm:mb-4 block">
            Branchenkompetenz
          </span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white leading-[1.1] mb-4 sm:mb-6">
            Facility Management für Ihre Branche
          </h2>
          <p className="text-base sm:text-lg text-white/70 font-semibold max-w-3xl mx-auto">
            Jede Branche hat eigene Anforderungen. Wir kennen sie – und haben die passenden Lösungen.
          </p>
        </div>

        {/* Branchen Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 mb-12 sm:mb-16">
          {branchen.map((branche, index) => (
            <Link
              key={index}
              href={`/branchen/${branche.slug}`}
              className="group relative bg-white rounded-[6px] overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500"
            >
              {/* Image */}
              <div className="relative h-48 overflow-hidden">
                <Image
                  src={branche.image}
                  alt={branche.name}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#012956]/90 via-[#012956]/40 to-transparent" />

                {/* Icon Badge */}
                <div className="absolute top-4 left-4 w-12 h-12 bg-[#109387] rounded-[6px] flex items-center justify-center">
                  <branche.icon className="w-6 h-6 text-white" strokeWidth={1.5} />
                </div>

                {/* Title on Image */}
                <div className="absolute bottom-4 left-4 right-4">
                  <h3 className="text-xl sm:text-2xl font-bold text-white">
                    {branche.name}
                  </h3>
                </div>
              </div>

              {/* Content */}
              <div className="p-5 sm:p-6">
                <p className="text-gray-600 font-semibold text-sm sm:text-base mb-4 leading-relaxed">
                  {branche.description}
                </p>

                {/* Beispiele */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {branche.beispiele.map((beispiel, idx) => (
                    <span
                      key={idx}
                      className="text-xs font-semibold text-[#109387] bg-[#109387]/10 px-2 py-1 rounded"
                    >
                      {beispiel}
                    </span>
                  ))}
                </div>

                {/* Link */}
                <div className="flex items-center gap-2 text-[#109387] font-bold text-sm group-hover:text-[#012956] transition-colors">
                  FM für {branche.name}
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            </Link>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center">
          <Link
            href="/branchen"
            className="inline-flex items-center gap-2 sm:gap-3 bg-white hover:bg-gray-100 text-[#012956] font-bold text-sm sm:text-base lg:text-lg px-6 sm:px-8 py-3 sm:py-4 rounded-[6px] transition-all duration-300 group"
          >
            Alle 12 Branchen entdecken
            <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>

      </div>
    </section>
  )
}
