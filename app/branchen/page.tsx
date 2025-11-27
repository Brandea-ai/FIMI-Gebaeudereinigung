'use client'

import Image from 'next/image'
import Link from 'next/link'
import { ArrowRight, Building2, Factory, Stethoscope, ShoppingBag, UtensilsCrossed, GraduationCap, Dumbbell, Warehouse, Home, Landmark, Banknote, Car } from 'lucide-react'
import { branchen } from '@/lib/branchen-data'

const branchenIcons: Record<string, any> = {
  Building2, Factory, Stethoscope, ShoppingBag, UtensilsCrossed, GraduationCap,
  Dumbbell, Warehouse, Home, Landmark, Banknote, Car
}

export default function BranchenPage() {
  return (
    <main className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative bg-[#012956] py-12 md:py-20 lg:py-28 overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-[#109387]/10 to-transparent" />
        </div>

        <div className="relative w-full max-w-[1800px] mx-auto px-4 md:px-6 lg:px-12 xl:px-20">
          <div className="text-center lg:text-left max-w-3xl">
            <p className="text-[#109387] font-bold text-xs md:text-sm uppercase tracking-[0.2em] mb-4">
              Unsere Branchen
            </p>

            <h1 className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-white leading-[1.1] mb-4 md:mb-6">
              Branchenspezifische
              <span className="block text-[#109387]">Reinigungslösungen</span>
            </h1>

            <p className="text-white/70 font-medium text-base md:text-lg lg:text-xl leading-relaxed mb-6 md:mb-8">
              Jede Branche hat ihre eigenen Anforderungen an Sauberkeit und Hygiene.
              Wir kennen die Besonderheiten und bieten maßgeschneiderte Konzepte.
            </p>

            {/* Stats */}
            <div className="flex flex-wrap justify-center lg:justify-start gap-6 md:gap-8 mb-6 md:mb-8">
              <div className="text-center">
                <div className="text-[#109387] font-bold text-2xl md:text-3xl">12</div>
                <div className="text-white/50 text-xs md:text-sm">Branchen</div>
              </div>
              <div className="text-center">
                <div className="text-[#109387] font-bold text-2xl md:text-3xl">8+</div>
                <div className="text-white/50 text-xs md:text-sm">Jahre Erfahrung</div>
              </div>
              <div className="text-center">
                <div className="text-[#109387] font-bold text-2xl md:text-3xl">100%</div>
                <div className="text-white/50 text-xs md:text-sm">Branchenkenntnis</div>
              </div>
            </div>

            <a
              href="#contact-form"
              className="inline-flex items-center gap-2 md:gap-3 bg-[#109387] hover:bg-[#0d7d72] text-white font-bold text-sm md:text-lg px-6 md:px-8 py-3 md:py-4 rounded-[6px] transition-all group"
            >
              <span>Branche anfragen</span>
              <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
            </a>
          </div>
        </div>
      </section>

      {/* Branchen Grid */}
      <section className="py-10 md:py-16 lg:py-24 bg-[#f8f9fa]">
        <div className="w-full max-w-[1800px] mx-auto px-4 md:px-6 lg:px-12 xl:px-20">
          <div className="text-center mb-8 md:mb-12">
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-[#012956] mb-3 md:mb-4">
              Alle Branchen im Überblick
            </h2>
            <p className="text-gray-500 font-medium text-sm md:text-lg max-w-2xl mx-auto">
              Finden Sie die passende Reinigungslösung für Ihre Branche.
            </p>
          </div>

          {/* Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 md:gap-6">
            {branchen.map((branche) => {
              const IconComponent = branchenIcons[branche.icon] || Building2
              return (
                <Link
                  key={branche.id}
                  href={`/branchen/${branche.slug}`}
                  className="group bg-white rounded-[6px] overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100 active:scale-[0.98]"
                >
                  {/* Image */}
                  <div className="relative h-36 md:h-44 overflow-hidden">
                    <Image
                      src={branche.image}
                      alt={branche.name}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#012956]/80 via-[#012956]/20 to-transparent" />

                    {/* Icon & Title */}
                    <div className="absolute bottom-3 left-3 right-3">
                      <div className="flex items-center gap-2 mb-1">
                        <IconComponent size={18} strokeWidth={1.5} className="text-[#109387]" />
                        <span className="text-white/70 text-xs">{branche.shortName}</span>
                      </div>
                      <h3 className="text-white font-bold text-base md:text-lg">
                        {branche.name}
                      </h3>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-4">
                    <p className="text-gray-600 font-medium text-xs md:text-sm leading-relaxed mb-3 line-clamp-2">
                      {branche.description}
                    </p>

                    {/* CTA */}
                    <div className="flex items-center justify-between pt-3 border-t border-gray-100">
                      <span className="text-[#109387] font-bold text-xs md:text-sm">
                        Mehr erfahren
                      </span>
                      <ArrowRight
                        size={14}
                        strokeWidth={2}
                        className="text-[#109387] group-hover:translate-x-1 transition-transform"
                      />
                    </div>
                  </div>
                </Link>
              )
            })}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-12 md:py-20 lg:py-28 bg-[#012956]">
        <div className="w-full max-w-[1800px] mx-auto px-4 md:px-6 lg:px-12 xl:px-20">
          <div className="text-center max-w-3xl mx-auto">
            <p className="text-[#109387] font-bold text-xs md:text-sm uppercase tracking-[0.2em] mb-3 md:mb-4">
              Ihre Branche nicht dabei?
            </p>
            <h2 className="text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold text-white leading-[1.1] mb-4 md:mb-6">
              Wir finden die passende
              <span className="block text-[#109387]">Lösung für Sie</span>
            </h2>
            <p className="text-white/70 font-medium text-sm md:text-lg mb-6 md:mb-8">
              Kontaktieren Sie uns für ein individuelles Reinigungskonzept.
            </p>

            <div className="flex flex-col sm:flex-row gap-3 md:gap-4 justify-center">
              <a
                href="#contact-form"
                className="inline-flex items-center justify-center gap-2 md:gap-3 bg-[#109387] hover:bg-[#0d7d72] text-white font-bold text-sm md:text-lg px-6 md:px-8 py-3 md:py-4 rounded-[6px] transition-all group"
              >
                <span>Kostenfreie Beratung</span>
                <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
              </a>
              <a
                href="tel:+4987143033460"
                className="inline-flex items-center justify-center gap-2 bg-white/10 hover:bg-white/20 text-white font-bold text-sm md:text-lg px-6 md:px-8 py-3 md:py-4 rounded-[6px] transition-all"
              >
                <span>0871 430 334 60</span>
              </a>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
