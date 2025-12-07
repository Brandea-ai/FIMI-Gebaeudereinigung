'use client'

import Image from 'next/image'
import Link from 'next/link'
import { ArrowRight, Clock, Calendar } from 'lucide-react'

// Thematisch passende Artikel für Event-Reinigung
const relatedPosts = [
  {
    slug: 'tariflohn-gebaeudereinigung-2025-2026',
    title: 'Tarifabschluss 2025/2026: Was bedeutet das für Personalkosten?',
    excerpt: 'Die neuen Löhne in der Gebäudereinigung und ihre Auswirkungen auf Personaldienstleistungen.',
    image: 'https://images.unsplash.com/photo-1554224155-6726b3ff858f?q=80&w=800&auto=format&fit=crop',
    category: 'Neuigkeiten',
    date: '2025-01-18',
    readTime: 4,
  },
  {
    slug: 'personalengpass-gastronomie-loesungen',
    title: 'Personalengpass in der Gastronomie: Flexible Lösungen für Hotels',
    excerpt: 'Wie Hotels und Restaurants mit externem Personal Engpässe überbrücken können.',
    image: 'https://images.unsplash.com/photo-1590490360182-c33d57733427?q=80&w=800&auto=format&fit=crop',
    category: 'Tipps',
    date: '2025-01-12',
    readTime: 5,
  },
  {
    slug: 'empfangsdienst-visitenkarte-unternehmen',
    title: 'Der Empfang als Visitenkarte: Worauf es wirklich ankommt',
    excerpt: 'Professioneller Empfangsservice macht den entscheidenden ersten Eindruck.',
    image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?q=80&w=800&auto=format&fit=crop',
    category: 'Tipps',
    date: '2025-01-05',
    readTime: 3,
  },
]

export default function BlogPreviewSection() {
  return (
    <section id="blog" className="py-12 sm:py-16 lg:py-28 bg-white">
      <div className="w-full max-w-[1800px] mx-auto px-4 sm:px-6 md:px-8 lg:px-12 xl:px-20">

        {/* Header */}
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-4 sm:gap-6 mb-8 sm:mb-10 lg:mb-12">
          <div className="max-w-2xl">
            <span className="text-[#109387] font-bold text-xs sm:text-sm uppercase tracking-wide mb-3 sm:mb-4 block">
              Neuigkeiten & Tipps
            </span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-[#012956] leading-tight mb-3 sm:mb-4">
              Wissen rund um Event-Reinigung
            </h2>
            <p className="text-sm sm:text-base lg:text-lg text-gray-600 font-semibold leading-relaxed">
              Aktuelle Branchennews, praktische Tipps und Einblicke in professionelle Veranstaltungsreinigung.
            </p>
          </div>

          <Link
            href="/neuigkeiten"
            className="inline-flex items-center gap-2 text-[#109387] font-bold hover:gap-3 transition-all whitespace-nowrap text-sm sm:text-base"
          >
            Alle Artikel
            <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5" aria-hidden="true" />
          </Link>
        </div>

        {/* Blog Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
          {relatedPosts.map((post, index) => (
            <Link
              key={index}
              href={`/neuigkeiten/${post.slug}`}
              className="group bg-[#f8f9fa] rounded-[6px] overflow-hidden hover:shadow-xl transition-all duration-300"
            >
              {/* Image */}
              <div className="relative h-[160px] sm:h-[180px] lg:h-[200px] overflow-hidden">
                <Image
                  src={post.image}
                  alt={post.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                />
                <div className="absolute top-3 left-3 sm:top-4 sm:left-4">
                  <span className="bg-[#109387] text-white text-[10px] sm:text-xs font-bold px-2.5 sm:px-3 py-1 sm:py-1.5 rounded-[6px]">
                    {post.category}
                  </span>
                </div>
              </div>

              {/* Content */}
              <div className="p-4 sm:p-5 lg:p-6">
                {/* Meta */}
                <div className="flex items-center gap-3 sm:gap-4 text-gray-500 text-xs sm:text-sm font-semibold mb-2 sm:mb-3">
                  <span className="flex items-center gap-1 sm:gap-1.5">
                    <Calendar className="w-3 h-3 sm:w-3.5 sm:h-3.5" aria-hidden="true" />
                    {new Date(post.date).toLocaleDateString('de-DE', {
                      day: '2-digit',
                      month: '2-digit',
                      year: 'numeric',
                    })}
                  </span>
                  <span className="flex items-center gap-1 sm:gap-1.5">
                    <Clock className="w-3 h-3 sm:w-3.5 sm:h-3.5" aria-hidden="true" />
                    {post.readTime} Min.
                  </span>
                </div>

                {/* Title */}
                <h3 className="text-base sm:text-lg font-bold text-[#012956] group-hover:text-[#109387] transition-colors mb-2 sm:mb-3 leading-snug">
                  {post.title}
                </h3>

                {/* Excerpt */}
                <p className="text-gray-600 font-semibold text-xs sm:text-sm leading-relaxed mb-3 sm:mb-4">
                  {post.excerpt}
                </p>

                {/* Read More */}
                <span className="inline-flex items-center gap-1.5 sm:gap-2 text-[#109387] font-bold text-xs sm:text-sm group-hover:gap-3 transition-all">
                  Weiterlesen
                  <ArrowRight className="w-3.5 h-3.5 sm:w-4 sm:h-4" aria-hidden="true" />
                </span>
              </div>
            </Link>
          ))}
        </div>

        {/* Bottom Links */}
        <div className="mt-10 sm:mt-12 lg:mt-16 grid sm:grid-cols-2 gap-4 sm:gap-6">
          {/* Karriere Link */}
          <Link
            href="/karriere"
            className="bg-[#012956] rounded-[6px] p-5 sm:p-6 lg:p-8 flex items-center justify-between group hover:bg-[#01203d] transition-colors"
          >
            <div>
              <span className="text-[#109387] font-bold text-xs sm:text-sm uppercase tracking-wide mb-1.5 sm:mb-2 block">
                Karriere
              </span>
              <h3 className="text-base sm:text-lg lg:text-xl font-bold text-white mb-1.5 sm:mb-2">
                Werden Sie Teil unseres Teams
              </h3>
              <p className="text-white/80 font-semibold text-xs sm:text-sm">
                Faire Bezahlung, flexible Arbeitszeiten, gutes Teamklima.
              </p>
            </div>
            <ArrowRight className="w-5 h-5 sm:w-6 sm:h-6 text-white group-hover:translate-x-2 transition-transform flex-shrink-0 ml-3 sm:ml-4" aria-hidden="true" />
          </Link>

          {/* Über uns Link */}
          <Link
            href="/ueber-uns"
            className="bg-[#f8f9fa] rounded-[6px] p-5 sm:p-6 lg:p-8 flex items-center justify-between group hover:bg-gray-100 transition-colors"
          >
            <div>
              <span className="text-[#109387] font-bold text-xs sm:text-sm uppercase tracking-wide mb-1.5 sm:mb-2 block">
                Über FIMI
              </span>
              <h3 className="text-base sm:text-lg lg:text-xl font-bold text-[#012956] mb-1.5 sm:mb-2">
                8+ Jahre Erfahrung in Bayern
              </h3>
              <p className="text-gray-600 font-semibold text-xs sm:text-sm">
                Lernen Sie uns und unsere Werte kennen.
              </p>
            </div>
            <ArrowRight className="w-5 h-5 sm:w-6 sm:h-6 text-[#012956] group-hover:translate-x-2 transition-transform flex-shrink-0 ml-3 sm:ml-4" aria-hidden="true" />
          </Link>
        </div>

      </div>
    </section>
  )
}
