'use client'

import Image from 'next/image'
import Link from 'next/link'
import { ArrowRight, Clock, Calendar } from 'lucide-react'
import { blogPosts, blogCategories } from '@/lib/blog-data'

// Thematisch passende Artikel-Slugs für Fassadenreinigung
const relatedSlugs = [
  'eu-oekodesign-verordnung-espr-reinigung',
  'gesundheitsschutz-reinigung-ergonomie-hautschutz-bg-bau',
  'industriereinigung-arbeitssicherheit-dguv-gefahrstoffv',
]

// Hole die echten Blog-Daten
const relatedPosts = relatedSlugs
  .map(slug => blogPosts.find(post => post.slug === slug))
  .filter((post): post is NonNullable<typeof post> => post !== undefined)

export default function BlogPreviewSection() {
  return (
    <section className="py-12 sm:py-16 lg:py-28 bg-white">
      <div className="w-full max-w-[1800px] mx-auto px-4 sm:px-6 md:px-8 lg:px-12 xl:px-20">

        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 mb-8 sm:mb-12">
          <div>
            <span className="text-[#109387] font-bold text-xs sm:text-sm uppercase tracking-wide mb-3 block">
              Wissen & Tipps
            </span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#012956] leading-tight">
              Aktuelles zur Fassadenreinigung
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
          {relatedPosts.map((post) => (
            <Link
              key={post.slug}
              href={`/neuigkeiten/${post.slug}`}
              className="group bg-[#f8f9fa] rounded-[6px] overflow-hidden hover:shadow-lg transition-all duration-300"
            >
              {/* Bild */}
              <div className="relative h-[180px] sm:h-[200px] overflow-hidden">
                <Image
                  src={post.image}
                  alt={post.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                />
                <div className="absolute top-3 left-3">
                  <span
                    className="text-white text-xs font-bold px-2.5 py-1 rounded-[4px]"
                    style={{ backgroundColor: blogCategories[post.category].color }}
                  >
                    {blogCategories[post.category].label}
                  </span>
                </div>
              </div>

              {/* Content */}
              <div className="p-4 sm:p-5">
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

                <h3 className="text-lg font-bold text-[#012956] group-hover:text-[#109387] transition-colors mb-2 line-clamp-2">
                  {post.title}
                </h3>
                <p className="text-gray-600 font-semibold text-sm leading-relaxed mb-4 line-clamp-2">
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
