'use client'

import Image from 'next/image'
import Link from 'next/link'
import { ArrowRight, Clock, Calendar } from 'lucide-react'

// Thematisch passende Artikel für Winterdienst
const relatedPosts = [
  {
    slug: 'winterdienst-pflichten-unternehmen',
    title: 'Winterdienst-Pflichten für Unternehmen: Was Sie wissen müssen',
    excerpt: 'Verkehrssicherungspflicht, Räumzeiten, Haftung – ein Überblick für Gewerbetreibende.',
    image: 'https://images.unsplash.com/photo-1517299321609-52687d1bc55a?q=80&w=800&auto=format&fit=crop',
    category: 'Tipps',
    date: '2025-01-15',
    readTime: 5,
  },
  {
    slug: 'streumittel-vergleich',
    title: 'Streumittel im Vergleich: Salz, Splitt oder Granulat?',
    excerpt: 'Welches Streugut ist für Ihre Flächen geeignet? Umweltaspekte und Wirksamkeit im Check.',
    image: 'https://images.unsplash.com/photo-1610557892470-55d9e80c0571?q=80&w=800&auto=format&fit=crop',
    category: 'Tipps',
    date: '2025-01-08',
    readTime: 4,
  },
  {
    slug: 'winterdienst-kosten-senken',
    title: 'Winterdienst-Kosten senken: Saisonpauschale oder Einsatzabrechnung?',
    excerpt: 'Das passende Abrechnungsmodell für Ihr Unternehmen – wann sich was lohnt.',
    image: 'https://images.unsplash.com/photo-1554224155-6726b3ff858f?q=80&w=800&auto=format&fit=crop',
    category: 'Neuigkeiten',
    date: '2024-12-20',
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
              Wissen rund um Winterdienst
            </h2>
            <p className="text-sm sm:text-base lg:text-lg text-gray-600 font-semibold leading-relaxed">
              Praktische Tipps zur Räumpflicht, Streumittelwahl und Kostenoptimierung.
            </p>
          </div>

          <Link
            href="/neuigkeiten"
            className="inline-flex items-center gap-2 text-[#109387] font-bold hover:gap-3 transition-all whitespace-nowrap text-sm sm:text-base"
          >
            Alle Artikel
            <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5" />
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
                    <Calendar className="w-3 h-3 sm:w-3.5 sm:h-3.5" />
                    {new Date(post.date).toLocaleDateString('de-DE', {
                      day: '2-digit',
                      month: '2-digit',
                      year: 'numeric',
                    })}
                  </span>
                  <span className="flex items-center gap-1 sm:gap-1.5">
                    <Clock className="w-3 h-3 sm:w-3.5 sm:h-3.5" />
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
                  <ArrowRight className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
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
              <p className="text-white/70 font-semibold text-xs sm:text-sm">
                Winterdienst-Mitarbeiter gesucht. Faire Bezahlung, flexible Einsätze.
              </p>
            </div>
            <ArrowRight className="w-5 h-5 sm:w-6 sm:h-6 text-white group-hover:translate-x-2 transition-transform flex-shrink-0 ml-3 sm:ml-4" />
          </Link>

          {/* Facility Management Link */}
          <Link
            href="/leistungen/facility-management"
            className="bg-[#f8f9fa] rounded-[6px] p-5 sm:p-6 lg:p-8 flex items-center justify-between group hover:bg-gray-100 transition-colors"
          >
            <div>
              <span className="text-[#109387] font-bold text-xs sm:text-sm uppercase tracking-wide mb-1.5 sm:mb-2 block">
                Mehr Service
              </span>
              <h3 className="text-base sm:text-lg lg:text-xl font-bold text-[#012956] mb-1.5 sm:mb-2">
                Facility Management aus einer Hand
              </h3>
              <p className="text-gray-600 font-semibold text-xs sm:text-sm">
                Winterdienst + Reinigung + Hausmeister – alles von FIMI.
              </p>
            </div>
            <ArrowRight className="w-5 h-5 sm:w-6 sm:h-6 text-[#012956] group-hover:translate-x-2 transition-transform flex-shrink-0 ml-3 sm:ml-4" />
          </Link>
        </div>

      </div>
    </section>
  )
}
