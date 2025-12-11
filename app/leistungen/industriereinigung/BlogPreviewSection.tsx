'use client'

import Image from 'next/image'
import Link from 'next/link'
import { ArrowRight, Calendar, Clock } from 'lucide-react'
import FadeIn from '@/components/FadeIn'
import { blogPosts, blogCategories } from '@/lib/blog-data'

// Thematisch passende Artikel-Slugs für Industriereinigung
const relatedSlugs = [
  'industriereinigung-arbeitssicherheit-dguv-gefahrstoffv',
  'gesundheitsschutz-reinigung-ergonomie-hautschutz-bg-bau',
  'tariflohn-gebaeudereinigung-2025-2026',
]

// Hole die echten Blog-Daten
const relatedPosts = relatedSlugs
  .map(slug => blogPosts.find(post => post.slug === slug))
  .filter((post): post is NonNullable<typeof post> => post !== undefined)

export default function BlogPreviewSection() {
  return (
    <section className="py-20 lg:py-28 bg-[#f8f9fa]" aria-labelledby="blog-heading">
      <div className="w-full max-w-[1800px] mx-auto px-6 lg:px-12 xl:px-20">

        {/* Section Header */}
        <FadeIn className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6 mb-12">
          <div>
            <p className="text-sm text-[#109387] font-semibold uppercase tracking-wide mb-3">
              Wissen & Tipps
            </p>
            <h2 id="blog-heading" className="text-3xl lg:text-4xl font-bold text-[#012956] mb-4">
              Aktuelles zur Industriereinigung
            </h2>
            <p className="text-gray-600 font-semibold max-w-xl">
              Fachbeiträge, Praxistipps und Branchennews rund um die professionelle Industriereinigung.
            </p>
          </div>
          <Link
            href="/neuigkeiten"
            className="inline-flex items-center gap-2 text-[#109387] font-bold hover:gap-3 transition-all"
          >
            Alle Artikel
            <ArrowRight size={18} />
          </Link>
        </FadeIn>

        {/* Blog Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {relatedPosts.map((post, index) => (
            <FadeIn key={post.slug} delay={index * 0.1}>
              <Link
                href={`/neuigkeiten/${post.slug}`}
                className="group block bg-white rounded-[6px] overflow-hidden shadow-sm hover:shadow-lg transition-all duration-300"
              >
                {/* Image */}
                <div className="relative aspect-[16/10] overflow-hidden">
                  <Image
                    src={post.image}
                    alt={post.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  />
                  <div className="absolute top-4 left-4">
                    <span
                      className="px-3 py-1.5 rounded-[4px] text-white text-xs font-bold"
                      style={{ backgroundColor: blogCategories[post.category].color }}
                    >
                      {blogCategories[post.category].label}
                    </span>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <div className="flex items-center gap-4 text-sm text-gray-500 font-semibold mb-3">
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

                  <h3 className="text-lg font-bold text-[#012956] group-hover:text-[#109387] transition-colors mb-3 leading-snug">
                    {post.title}
                  </h3>

                  <p className="text-gray-600 font-semibold text-sm leading-relaxed mb-4 line-clamp-2">
                    {post.excerpt}
                  </p>

                  <span className="inline-flex items-center gap-2 text-[#109387] font-bold text-sm group-hover:gap-3 transition-all">
                    Weiterlesen
                    <ArrowRight size={16} />
                  </span>
                </div>
              </Link>
            </FadeIn>
          ))}
        </div>

      </div>
    </section>
  )
}
