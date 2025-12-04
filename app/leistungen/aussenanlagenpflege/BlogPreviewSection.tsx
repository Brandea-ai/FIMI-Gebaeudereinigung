'use client'

import Image from 'next/image'
import Link from 'next/link'
import { ArrowRight, Calendar } from 'lucide-react'

const artikel = [
  {
    slug: 'verkehrssicherungspflicht-aussenanlagen',
    titel: 'Verkehrssicherungspflicht bei Außenanlagen: Was Eigentümer wissen müssen',
    beschreibung: 'Herabfallende Äste, rutschiges Laub, Stolperfallen auf Wegen – als Eigentümer haften Sie. So schützen Sie sich rechtlich ab.',
    bild: 'https://images.unsplash.com/photo-1450101499163-c8848c66ca85?q=80&w=800&auto=format&fit=crop',
    datum: '2024-11-15',
    kategorie: 'Recht & Pflichten',
  },
  {
    slug: 'rasenpflege-gewerbe-tipps',
    titel: 'Rasenpflege für Gewerbeimmobilien: 7 Tipps vom Profi',
    beschreibung: 'Ein gepflegter Rasen ist die Visitenkarte Ihres Unternehmens. Diese 7 Tipps sorgen für sattes Grün das ganze Jahr.',
    bild: 'https://images.unsplash.com/photo-1558904541-efa843a96f01?q=80&w=800&auto=format&fit=crop',
    datum: '2024-10-28',
    kategorie: 'Tipps & Tricks',
  },
  {
    slug: 'herbstlaub-richtig-entsorgen',
    titel: 'Herbstlaub richtig entsorgen: Pflicht, Kosten und Methoden',
    beschreibung: 'Wohin mit dem Laub? Was kostet die Entsorgung? Wer ist verantwortlich? Alle Antworten für Hausverwalter und Eigentümer.',
    bild: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=800&auto=format&fit=crop',
    datum: '2024-10-10',
    kategorie: 'Saisonales',
  },
]

export default function BlogPreviewSection() {
  return (
    <section id="blog" className="py-12 sm:py-16 lg:py-28 bg-[#f8f9fa]">
      <div className="w-full max-w-[1800px] mx-auto px-4 sm:px-6 md:px-8 lg:px-12 xl:px-20">

        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 mb-8 sm:mb-10 lg:mb-12">
          <div className="max-w-2xl">
            <p className="text-xs sm:text-sm text-[#109387] font-bold uppercase tracking-wide mb-2 sm:mb-3">
              Wissen & Ratgeber
            </p>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#012956] leading-[1.1]">
              Aktuelles zur Außenanlagenpflege
            </h2>
          </div>
          <Link
            href="/neuigkeiten"
            className="inline-flex items-center gap-2 text-[#109387] font-bold hover:gap-3 transition-all text-sm sm:text-base"
          >
            Alle Artikel
            <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5" />
          </Link>
        </div>

        {/* Artikel Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {artikel.map((artikel) => (
            <Link
              key={artikel.slug}
              href={`/neuigkeiten/${artikel.slug}`}
              className="group bg-white rounded-[8px] overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300"
            >
              {/* Bild */}
              <div className="relative h-48 sm:h-52 lg:h-56 overflow-hidden">
                <Image
                  src={artikel.bild}
                  alt={artikel.titel}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute top-3 left-3">
                  <span className="bg-[#109387] text-white text-xs font-bold px-3 py-1 rounded-[4px]">
                    {artikel.kategorie}
                  </span>
                </div>
              </div>

              {/* Content */}
              <div className="p-4 sm:p-5 lg:p-6">
                <div className="flex items-center gap-2 text-gray-500 text-xs sm:text-sm mb-2 sm:mb-3">
                  <Calendar className="w-3.5 h-3.5" />
                  <span className="font-semibold">
                    {new Date(artikel.datum).toLocaleDateString('de-DE', {
                      day: '2-digit',
                      month: 'long',
                      year: 'numeric',
                    })}
                  </span>
                </div>
                <h3 className="text-base sm:text-lg font-bold text-[#012956] mb-2 group-hover:text-[#109387] transition-colors line-clamp-2">
                  {artikel.titel}
                </h3>
                <p className="text-gray-600 font-semibold text-xs sm:text-sm leading-relaxed line-clamp-2">
                  {artikel.beschreibung}
                </p>
                <div className="mt-3 sm:mt-4 flex items-center gap-1.5 text-[#109387] font-bold text-xs sm:text-sm">
                  <span>Weiterlesen</span>
                  <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            </Link>
          ))}
        </div>

      </div>
    </section>
  )
}
