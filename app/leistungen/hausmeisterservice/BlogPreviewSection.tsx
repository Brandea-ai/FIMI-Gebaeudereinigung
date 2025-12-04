'use client'

import Image from 'next/image'
import Link from 'next/link'
import { ArrowRight, Clock, Tag } from 'lucide-react'

// Relevante Blog-Artikel für Hausmeisterservice
const blogPosts = [
  {
    slug: 'winterdienst-bayern-pflichten-haftung-bgh-urteil-2025',
    title: 'Winterdienst Bayern: Pflichten, Haftung & BGH-Urteil 2025',
    excerpt: 'Wer haftet bei Glatteis? Welche Pflichten haben Eigentümer und Verwalter? Ein Überblick über rechtliche Grundlagen und aktuelle BGH-Urteile.',
    image: 'https://images.unsplash.com/photo-1491002052546-bf38f186af56?q=80&w=800&auto=format&fit=crop',
    kategorie: 'Winterdienst',
    lesezeit: '8 Min.',
  },
  {
    slug: 'tariflohn-gebaeudereinigung-2025-2026',
    title: 'Tariflohn Gebäudereinigung 2025/2026: Aktuelle Löhne & Zulagen',
    excerpt: 'Was verdienen Reinigungskräfte und Hausmeister nach Tarif? Alle aktuellen Lohngruppen, Zulagen und regionale Unterschiede im Überblick.',
    image: 'https://images.unsplash.com/photo-1554224155-6726b3ff858f?q=80&w=800&auto=format&fit=crop',
    kategorie: 'Branche',
    lesezeit: '10 Min.',
  },
  {
    slug: 'fachkraeftemangel-gebaeudereinigung-loesungen-2025',
    title: 'Fachkräftemangel Gebäudereinigung: Lösungen für 2025',
    excerpt: 'Der Fachkräftemangel trifft auch den Hausmeisterservice. Welche Strategien helfen Unternehmen, qualifiziertes Personal zu finden und zu halten?',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=800&auto=format&fit=crop',
    kategorie: 'Branche',
    lesezeit: '9 Min.',
  },
]

export default function BlogPreviewSection() {
  return (
    <section id="blog" className="py-16 sm:py-20 lg:py-28 bg-[#f8f9fa]">
      <div className="w-full max-w-[1800px] mx-auto px-4 sm:px-6 md:px-8 lg:px-12 xl:px-20">

        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 sm:gap-6 mb-10 sm:mb-12 lg:mb-14">
          <div>
            <span className="text-[#109387] font-bold text-xs sm:text-sm uppercase tracking-wide mb-3 sm:mb-4 block">
              Wissen
            </span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-[#012956] leading-[1.1]">
              Ratgeber & Praxis-Tipps
            </h2>
          </div>
          <Link
            href="/neuigkeiten"
            className="inline-flex items-center gap-2 text-[#109387] font-bold hover:text-[#012956] transition-colors text-sm sm:text-base whitespace-nowrap"
          >
            Alle Artikel
            <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5" />
          </Link>
        </div>

        {/* Blog Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {blogPosts.map((post, index) => (
            <Link
              key={index}
              href={`/neuigkeiten/${post.slug}`}
              className="group bg-white rounded-[6px] overflow-hidden shadow-sm hover:shadow-xl transition-all duration-500"
            >
              {/* Image */}
              <div className="relative h-48 sm:h-52 overflow-hidden">
                <Image
                  src={post.image}
                  alt={post.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute top-4 left-4">
                  <span className="inline-flex items-center gap-1.5 bg-white/90 backdrop-blur-sm px-3 py-1.5 rounded-[6px]">
                    <Tag className="w-3.5 h-3.5 text-[#109387]" />
                    <span className="text-xs font-bold text-[#012956]">{post.kategorie}</span>
                  </span>
                </div>
              </div>

              {/* Content */}
              <div className="p-5 sm:p-6">
                <h3 className="text-base sm:text-lg font-bold text-[#012956] mb-2 sm:mb-3 line-clamp-2 group-hover:text-[#109387] transition-colors">
                  {post.title}
                </h3>
                <p className="text-gray-600 font-semibold text-sm leading-relaxed mb-4 line-clamp-2">
                  {post.excerpt}
                </p>

                {/* Meta */}
                <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                  <div className="flex items-center gap-1.5 text-gray-500">
                    <Clock className="w-4 h-4" />
                    <span className="text-xs font-semibold">{post.lesezeit}</span>
                  </div>
                  <span className="text-[#109387] font-bold text-sm flex items-center gap-1 group-hover:gap-2 transition-all">
                    Lesen
                    <ArrowRight className="w-4 h-4" />
                  </span>
                </div>
              </div>
            </Link>
          ))}
        </div>

      </div>
    </section>
  )
}
