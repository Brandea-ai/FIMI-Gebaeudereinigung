'use client'

import Image from 'next/image'
import Link from 'next/link'
import { ArrowRight, Clock, Calendar } from 'lucide-react'
import { blogPosts, blogCategories } from '@/lib/blog-data'

// Thematisch passende Artikel-Slugs für Hausmeisterservice
const relatedSlugs = [
  'winterdienst-bayern-pflichten-haftung-bgh-urteil-2025',
  'tariflohn-gebaeudereinigung-2025-2026',
  'reinigungsintervalle-buero-schule-praxis-din-ral',
]

// Hole die echten Blog-Daten
const relatedPosts = relatedSlugs
  .map(slug => blogPosts.find(post => post.slug === slug))
  .filter((post): post is NonNullable<typeof post> => post !== undefined)

export default function BlogPreviewSection() {
  return (
    <section className="py-12 sm:py-16 lg:py-28 bg-[#f8f9fa]">
      <div className="w-full max-w-[1800px] mx-auto px-4 sm:px-6 md:px-8 lg:px-12 xl:px-20">

        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 mb-8 sm:mb-10 lg:mb-12">
          <div>
            <p className="text-xs sm:text-sm text-[#109387] font-semibold uppercase tracking-wide mb-2 sm:mb-3">
              Wissen & Tipps
            </p>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-[#012956]">
              Aktuelles zum Hausmeisterservice
            </h2>
          </div>
          <Link
            href="/neuigkeiten"
            className="inline-flex items-center gap-2 text-[#109387] font-bold text-sm sm:text-base hover:gap-3 transition-all"
          >
            Alle Artikel
            <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5" />
          </Link>
        </div>

        {/* Blog Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
          {relatedPosts.map((post) => (
            <Link
              key={post.slug}
              href={`/neuigkeiten/${post.slug}`}
              className="group bg-white rounded-[6px] overflow-hidden shadow-sm hover:shadow-lg transition-all duration-300"
            >
              {/* Image */}
              <div className="relative aspect-[16/10] overflow-hidden">
                <Image
                  src={post.image}
                  alt={post.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                />
                <div className="absolute top-3 left-3 sm:top-4 sm:left-4">
                  <span
                    className="px-2 sm:px-3 py-1 sm:py-1.5 rounded-[4px] text-white text-[10px] sm:text-xs font-bold"
                    style={{ backgroundColor: blogCategories[post.category].color }}
                  >
                    {blogCategories[post.category].label}
                  </span>
                </div>
              </div>

              {/* Content */}
              <div className="p-4 sm:p-5 lg:p-6">
                <div className="flex items-center gap-3 text-gray-500 text-xs sm:text-sm font-semibold mb-2 sm:mb-3">
                  <span className="flex items-center gap-1">
                    <Calendar className="w-3 h-3 sm:w-3.5 sm:h-3.5" />
                    {new Date(post.date).toLocaleDateString('de-DE', {
                      day: '2-digit',
                      month: '2-digit',
                      year: 'numeric',
                    })}
                  </span>
                  <span className="flex items-center gap-1">
                    <Clock className="w-3 h-3 sm:w-3.5 sm:h-3.5" />
                    {post.readTime} Min.
                  </span>
                </div>

                <h3 className="text-base sm:text-lg font-bold text-[#012956] group-hover:text-[#109387] transition-colors mb-2 sm:mb-3 leading-snug">
                  {post.title}
                </h3>

                <p className="text-gray-600 font-semibold text-xs sm:text-sm leading-relaxed mb-3 sm:mb-4 line-clamp-2">
                  {post.excerpt}
                </p>

                <span className="inline-flex items-center gap-1.5 sm:gap-2 text-[#109387] font-bold text-xs sm:text-sm group-hover:gap-3 transition-all">
                  Weiterlesen
                  <ArrowRight className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
                </span>
              </div>
            </Link>
          ))}
        </div>

      </div>
    </section>
  )
}
