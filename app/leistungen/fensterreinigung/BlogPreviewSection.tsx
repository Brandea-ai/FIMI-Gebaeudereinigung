'use client'

import Image from 'next/image'
import Link from 'next/link'
import { ArrowRight, Clock } from 'lucide-react'
import { blogPosts, blogCategories, formatDate } from '@/lib/blog-data'

export default function BlogPreviewSection() {
  // Die neuesten 3 Blog-Artikel holen
  const latestPosts = [...blogPosts]
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
    .slice(0, 3)

  return (
    <section className="py-12 sm:py-16 lg:py-28 bg-white">
      <div className="w-full max-w-[1800px] mx-auto px-4 sm:px-6 md:px-8 lg:px-12 xl:px-20">

        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 mb-8 sm:mb-12">
          <div>
            <span className="text-[#109387] font-bold text-xs sm:text-sm uppercase tracking-wide mb-3 sm:mb-4 block">
              Wissen & Ratgeber
            </span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-[#012956] leading-tight">
              Mehr zum Thema Gebäudereinigung
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

        {/* Artikel Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
          {latestPosts.map((artikel) => (
            <Link
              key={artikel.slug}
              href={`/neuigkeiten/${artikel.slug}`}
              className="group bg-[#f8f9fa] rounded-[6px] overflow-hidden hover:shadow-lg transition-shadow"
            >
              {/* Bild */}
              <div className="relative h-[180px] sm:h-[200px] lg:h-[220px] overflow-hidden">
                <Image
                  src={artikel.image}
                  alt={artikel.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute top-3 left-3">
                  <span
                    className="text-white text-xs font-bold px-2.5 py-1 rounded-[4px]"
                    style={{ backgroundColor: blogCategories[artikel.category].color }}
                  >
                    {blogCategories[artikel.category].label}
                  </span>
                </div>
              </div>

              {/* Content */}
              <div className="p-4 sm:p-5 lg:p-6">
                <div className="flex items-center gap-2 text-gray-500 text-xs sm:text-sm font-semibold mb-2 sm:mb-3">
                  <Clock className="w-3.5 h-3.5" />
                  {artikel.readTime} Min. Lesezeit
                </div>

                <h3 className="text-base sm:text-lg lg:text-xl font-bold text-[#012956] group-hover:text-[#109387] transition-colors mb-2 sm:mb-3 line-clamp-2">
                  {artikel.title}
                </h3>

                <p className="text-gray-600 font-semibold text-sm leading-relaxed line-clamp-2 mb-3 sm:mb-4">
                  {artikel.excerpt}
                </p>

                <div className="flex items-center gap-2 text-[#109387] font-bold text-sm group-hover:gap-3 transition-all">
                  <span>Weiterlesen</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            </Link>
          ))}
        </div>

      </div>
    </section>
  )
}
