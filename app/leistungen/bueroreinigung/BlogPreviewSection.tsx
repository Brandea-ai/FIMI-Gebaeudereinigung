'use client'

import Image from 'next/image'
import Link from 'next/link'
import { ArrowRight, Clock, Calendar } from 'lucide-react'

// Thematisch passende Artikel fuer Bueroreinigung
const relatedPosts = [
  {
    slug: 'tariflohn-gebaeudereinigung-2025-2026',
    title: 'Tarifabschluss 2025/2026: Was bedeutet das fuer Ihre Reinigungskosten?',
    excerpt: 'Die neuen Loehne in der Gebaeudereinigung und ihre Auswirkungen auf Qualitaet und Preise.',
    image: 'https://images.unsplash.com/photo-1554224155-6726b3ff858f?q=80&w=800&auto=format&fit=crop',
    category: 'Neuigkeiten',
    date: '2025-01-18',
    readTime: 4,
  },
  {
    slug: 'bueroreinigung-ausserhalb-geschaeftszeiten',
    title: 'Warum Bueroreinigung ausserhalb der Geschaeftszeiten sinnvoll ist',
    excerpt: 'Produktivitaet steigern, Stoerungen vermeiden: Die Vorteile von Nacht- und Wochenendreinigung.',
    image: 'https://images.unsplash.com/photo-1497366811353-6870744d04b2?q=80&w=800&auto=format&fit=crop',
    category: 'Tipps',
    date: '2025-01-10',
    readTime: 3,
  },
  {
    slug: 'hygiene-arbeitsplatz-mitarbeitergesundheit',
    title: 'Sauberkeit am Arbeitsplatz: So bleibt Ihr Team gesund',
    excerpt: 'Desinfektion, Luftqualitaet, Kontaktflaechen - was professionelle Reinigung fuer die Gesundheit leistet.',
    image: 'https://images.unsplash.com/photo-1581578731548-c64695cc6952?q=80&w=800&auto=format&fit=crop',
    category: 'Tipps',
    date: '2025-01-05',
    readTime: 5,
  },
]

export default function BlogPreviewSection() {
  return (
    <section id="blog" className="py-20 lg:py-28 bg-white">
      <div className="w-full max-w-[1800px] mx-auto px-6 lg:px-12 xl:px-20">

        {/* Header */}
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6 mb-12">
          <div className="max-w-2xl">
            <span className="text-[#109387] font-bold text-sm uppercase tracking-wide mb-4 block">
              Neuigkeiten & Tipps
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#012956] leading-tight mb-4">
              Wissen rund um Bueroreinigung
            </h2>
            <p className="text-lg text-gray-600 font-semibold leading-relaxed">
              Aktuelle Branchennews, praktische Tipps und Einblicke in professionelle Gebaeudereinigung.
            </p>
          </div>

          <Link
            href="/neuigkeiten"
            className="inline-flex items-center gap-2 text-[#109387] font-bold hover:gap-3 transition-all whitespace-nowrap"
          >
            Alle Artikel
            <ArrowRight size={18} />
          </Link>
        </div>

        {/* Blog Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {relatedPosts.map((post, index) => (
            <Link
              key={index}
              href={`/neuigkeiten/${post.slug}`}
              className="group bg-[#f8f9fa] rounded-[6px] overflow-hidden hover:shadow-xl transition-all duration-300"
            >
              {/* Image */}
              <div className="relative h-[200px] overflow-hidden">
                <Image
                  src={post.image}
                  alt={post.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute top-4 left-4">
                  <span className="bg-[#109387] text-white text-xs font-bold px-3 py-1.5 rounded-[6px]">
                    {post.category}
                  </span>
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                {/* Meta */}
                <div className="flex items-center gap-4 text-gray-500 text-sm font-semibold mb-3">
                  <span className="flex items-center gap-1.5">
                    <Calendar size={14} />
                    {new Date(post.date).toLocaleDateString('de-DE', {
                      day: '2-digit',
                      month: '2-digit',
                      year: 'numeric',
                    })}
                  </span>
                  <span className="flex items-center gap-1.5">
                    <Clock size={14} />
                    {post.readTime} Min.
                  </span>
                </div>

                {/* Title */}
                <h3 className="text-lg font-bold text-[#012956] group-hover:text-[#109387] transition-colors mb-3 leading-snug">
                  {post.title}
                </h3>

                {/* Excerpt */}
                <p className="text-gray-600 font-semibold text-sm leading-relaxed mb-4">
                  {post.excerpt}
                </p>

                {/* Read More */}
                <span className="inline-flex items-center gap-2 text-[#109387] font-bold text-sm group-hover:gap-3 transition-all">
                  Weiterlesen
                  <ArrowRight size={16} />
                </span>
              </div>
            </Link>
          ))}
        </div>

        {/* Bottom Links */}
        <div className="mt-16 grid md:grid-cols-2 gap-6">
          {/* Karriere Link */}
          <Link
            href="/karriere"
            className="bg-[#012956] rounded-[6px] p-8 flex items-center justify-between group hover:bg-[#01203d] transition-colors"
          >
            <div>
              <span className="text-[#109387] font-bold text-sm uppercase tracking-wide mb-2 block">
                Karriere
              </span>
              <h3 className="text-xl font-bold text-white mb-2">
                Werden Sie Teil unseres Teams
              </h3>
              <p className="text-white/70 font-semibold text-sm">
                Faire Bezahlung, feste Arbeitszeiten, gutes Teamklima.
              </p>
            </div>
            <ArrowRight size={24} className="text-white group-hover:translate-x-2 transition-transform flex-shrink-0 ml-4" />
          </Link>

          {/* Ueber uns Link */}
          <Link
            href="/ueber-uns"
            className="bg-[#f8f9fa] rounded-[6px] p-8 flex items-center justify-between group hover:bg-gray-100 transition-colors"
          >
            <div>
              <span className="text-[#109387] font-bold text-sm uppercase tracking-wide mb-2 block">
                Ueber FIMI
              </span>
              <h3 className="text-xl font-bold text-[#012956] mb-2">
                8+ Jahre Erfahrung in Bayern
              </h3>
              <p className="text-gray-600 font-semibold text-sm">
                Lernen Sie uns und unsere Werte kennen.
              </p>
            </div>
            <ArrowRight size={24} className="text-[#012956] group-hover:translate-x-2 transition-transform flex-shrink-0 ml-4" />
          </Link>
        </div>

      </div>
    </section>
  )
}
