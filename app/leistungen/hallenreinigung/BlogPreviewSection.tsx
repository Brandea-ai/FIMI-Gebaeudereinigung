'use client'

import Image from 'next/image'
import Link from 'next/link'
import { ArrowRight, Clock } from 'lucide-react'

const blogArtikel = [
  {
    slug: 'hallenreinigung-tipps',
    titel: 'Hallenreinigung: 5 Tipps für saubere Industriehallen',
    excerpt: 'Wie Sie die Sauberkeit in Ihrer Produktions- oder Lagerhalle effizient aufrechterhalten und worauf Sie bei der Wahl eines Reinigungsdienstleisters achten sollten.',
    kategorie: 'Ratgeber',
    lesezeit: '6 Min.',
    image: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?q=80&w=800&auto=format&fit=crop',
  },
  {
    slug: 'arbeitssicherheit-hallenreinigung',
    titel: 'Arbeitssicherheit: Warum saubere Hallenböden Leben retten',
    excerpt: 'Ölige Böden, Stolperfallen, schlechte Sicht – verschmutzte Hallen sind ein Sicherheitsrisiko. So minimieren Sie Unfallgefahren durch professionelle Reinigung.',
    kategorie: 'Arbeitssicherheit',
    lesezeit: '5 Min.',
    image: 'https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?q=80&w=800&auto=format&fit=crop',
  },
  {
    slug: 'industriereinigung-kosten',
    titel: 'Was kostet Industriereinigung? Ein Überblick',
    excerpt: 'Faktoren, die den Preis beeinflussen, typische Preismodelle und wie Sie das beste Angebot für Ihre Anforderungen finden.',
    kategorie: 'Kosten',
    lesezeit: '4 Min.',
    image: 'https://images.unsplash.com/photo-1553413077-190dd305871c?q=80&w=800&auto=format&fit=crop',
  },
]

export default function BlogPreviewSection() {
  return (
    <section className="py-12 sm:py-16 lg:py-28 bg-[#f8f9fa]">
      <div className="w-full max-w-[1800px] mx-auto px-4 sm:px-6 md:px-8 lg:px-12 xl:px-20">

        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 mb-8 sm:mb-10 lg:mb-12">
          <div>
            <span className="text-[#109387] font-bold text-xs sm:text-sm uppercase tracking-wide mb-3 sm:mb-4 block">
              Wissen & Ratgeber
            </span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#012956] leading-tight">
              Mehr zum Thema Hallenreinigung
            </h2>
          </div>
          <Link
            href="/neuigkeiten"
            className="inline-flex items-center gap-2 text-[#109387] font-bold hover:text-[#012956] transition-colors group text-sm sm:text-base"
          >
            Alle Artikel
            <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>

        {/* Blog Cards Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
          {blogArtikel.map((artikel) => (
            <article
              key={artikel.slug}
              className="group bg-white rounded-[6px] overflow-hidden hover:shadow-lg transition-all duration-300"
            >
              {/* Image */}
              <div className="relative h-44 sm:h-48 lg:h-52 overflow-hidden">
                <Image
                  src={artikel.image}
                  alt={artikel.titel}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute top-3 left-3">
                  <span className="bg-[#109387] text-white text-[10px] sm:text-xs font-bold px-2.5 py-1 rounded-[4px]">
                    {artikel.kategorie}
                  </span>
                </div>
              </div>

              {/* Content */}
              <div className="p-4 sm:p-5 lg:p-6">
                <h3 className="text-base sm:text-lg font-bold text-[#012956] mb-2 group-hover:text-[#109387] transition-colors line-clamp-2">
                  {artikel.titel}
                </h3>
                <p className="text-gray-600 font-semibold text-xs sm:text-sm leading-relaxed mb-4 line-clamp-2">
                  {artikel.excerpt}
                </p>

                {/* Meta */}
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-1.5 text-gray-400">
                    <Clock className="w-3.5 h-3.5" />
                    <span className="text-xs font-semibold">{artikel.lesezeit}</span>
                  </div>
                  <Link
                    href={`/neuigkeiten/${artikel.slug}`}
                    className="inline-flex items-center gap-1 text-[#109387] font-bold text-xs sm:text-sm hover:text-[#012956] transition-colors group/link"
                  >
                    Lesen
                    <ArrowRight className="w-3.5 h-3.5 group-hover/link:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </div>
            </article>
          ))}
        </div>

      </div>
    </section>
  )
}
