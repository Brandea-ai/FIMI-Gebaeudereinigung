'use client'

import Image from 'next/image'
import Link from 'next/link'
import { ArrowRight, Clock } from 'lucide-react'

// Relevante Blog-Artikel für Fassadenreinigung
const artikel = [
  {
    slug: 'fassadenreinigung-kosten-leitfaden',
    titel: 'Fassadenreinigung Kosten: Der komplette Leitfaden 2024',
    beschreibung: 'Was kostet Fassadenreinigung pro m²? Alle Preisfaktoren, Vergleich zum Neuanstrich und Tipps zum Sparen.',
    bild: '/images/leistungen/fassadenreinigung/blog-kosten.avif',
    kategorie: 'Ratgeber',
    lesezeit: '8 Min.',
  },
  {
    slug: 'algen-fassade-entfernen',
    titel: 'Algen an der Fassade: Ursachen und professionelle Lösungen',
    beschreibung: 'Warum wird meine Fassade grün? Was hilft wirklich gegen Algenbefall? Expertenwissen verständlich erklärt.',
    bild: '/images/leistungen/fassadenreinigung/blog-algen.avif',
    kategorie: 'Wissen',
    lesezeit: '6 Min.',
  },
  {
    slug: 'wdvs-fassade-reinigen',
    titel: 'WDVS-Fassade reinigen: So geht es richtig',
    beschreibung: 'Gedämmte Fassaden brauchen besondere Pflege. Welche Verfahren eignen sich und was sollte man vermeiden?',
    bild: '/images/leistungen/fassadenreinigung/blog-wdvs.avif',
    kategorie: 'Anleitung',
    lesezeit: '5 Min.',
  },
]

export default function BlogPreviewSection() {
  return (
    <section className="py-12 sm:py-16 lg:py-28 bg-white">
      <div className="w-full max-w-[1800px] mx-auto px-4 sm:px-6 md:px-8 lg:px-12 xl:px-20">

        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 mb-8 sm:mb-12">
          <div>
            <span className="text-[#109387] font-bold text-xs sm:text-sm uppercase tracking-wide mb-3 block">
              Wissen & Ratgeber
            </span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#012956] leading-tight">
              Mehr zum Thema Fassadenreinigung
            </h2>
          </div>
          <Link
            href="/neuigkeiten"
            className="inline-flex items-center gap-2 text-[#109387] hover:text-[#012956] font-bold transition-colors group"
          >
            Alle Artikel
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>

        {/* Artikel Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {artikel.map((art) => (
            <Link
              key={art.slug}
              href={`/neuigkeiten/${art.slug}`}
              className="group bg-[#f8f9fa] rounded-[6px] overflow-hidden hover:shadow-lg transition-all duration-300"
            >
              {/* Bild */}
              <div className="relative h-[180px] sm:h-[200px] overflow-hidden">
                <Image
                  src={art.bild}
                  alt={art.titel}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute top-3 left-3">
                  <span className="bg-[#109387] text-white text-xs font-bold px-2.5 py-1 rounded-[4px]">
                    {art.kategorie}
                  </span>
                </div>
              </div>

              {/* Content */}
              <div className="p-4 sm:p-5">
                <h3 className="text-lg font-bold text-[#012956] group-hover:text-[#109387] transition-colors mb-2 line-clamp-2">
                  {art.titel}
                </h3>
                <p className="text-gray-600 font-semibold text-sm leading-relaxed mb-4 line-clamp-2">
                  {art.beschreibung}
                </p>
                <div className="flex items-center gap-2 text-gray-400 text-sm font-semibold">
                  <Clock className="w-4 h-4" />
                  {art.lesezeit} Lesezeit
                </div>
              </div>
            </Link>
          ))}
        </div>

      </div>
    </section>
  )
}
