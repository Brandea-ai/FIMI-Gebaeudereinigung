'use client'

import Image from 'next/image'
import Link from 'next/link'
import { ArrowRight, Calendar, Clock } from 'lucide-react'
import FadeIn from '@/components/FadeIn'

// Relevante Blogartikel für Industriereinigung
const blogPosts = [
  {
    slug: 'industriereinigung-kosten-preise-ueberblick',
    titel: 'Industriereinigung Kosten: Was kostet professionelle Hallenreinigung?',
    auszug: 'Ein transparenter Überblick über Preise, Faktoren und Einsparpotenziale bei der Industriereinigung. So kalkulieren Profis.',
    bild: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?q=80&w=800&auto=format&fit=crop',
    datum: '28. November 2024',
    lesezeit: '8 Min',
    kategorie: 'Wissen',
  },
  {
    slug: 'hallenreinigung-tipps-fuer-produktionsbetriebe',
    titel: 'Hallenreinigung: 7 Tipps für saubere Produktionshallen',
    auszug: 'Praktische Tipps für Betriebsleiter: So halten Sie Ihre Produktionshalle sauber und erfüllen alle Vorschriften.',
    bild: 'https://images.unsplash.com/photo-1565688534245-05d6b5be184a?q=80&w=800&auto=format&fit=crop',
    datum: '15. November 2024',
    lesezeit: '6 Min',
    kategorie: 'Tipps',
  },
  {
    slug: 'maschinenreinigung-lebensdauer-verlaengern',
    titel: 'Maschinenreinigung: So verlängern Sie die Lebensdauer Ihrer Anlagen',
    auszug: 'Regelmäßige Reinigung spart Reparaturkosten und verlängert die Lebensdauer. Was Sie beachten sollten.',
    bild: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80&w=800&auto=format&fit=crop',
    datum: '5. November 2024',
    lesezeit: '5 Min',
    kategorie: 'Ratgeber',
  },
]

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
            <h2
              id="blog-heading"
              className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#012956] leading-[1.1]"
            >
              Aktuelles zur Industriereinigung
            </h2>
          </div>
          <Link
            href="/neuigkeiten"
            className="inline-flex items-center gap-2 text-[#109387] font-bold hover:text-[#012956] transition-colors group"
          >
            Alle Artikel
            <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
          </Link>
        </FadeIn>

        {/* Blog Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map((post, index) => (
            <FadeIn key={post.slug} delay={index * 0.1}>
              <article className="group bg-white rounded-[6px] overflow-hidden h-full flex flex-col shadow-sm hover:shadow-lg transition-shadow duration-300">
                {/* Image */}
                <Link href={`/neuigkeiten/${post.slug}`} className="relative h-48 overflow-hidden">
                  <Image
                    src={post.bild}
                    alt={post.titel}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  {/* Kategorie Badge */}
                  <div className="absolute top-4 left-4">
                    <span className="bg-[#109387] text-white font-bold text-xs px-3 py-1 rounded-full">
                      {post.kategorie}
                    </span>
                  </div>
                </Link>

                {/* Content */}
                <div className="p-6 flex flex-col flex-grow">
                  {/* Meta */}
                  <div className="flex items-center gap-4 text-gray-500 text-sm font-semibold mb-3">
                    <span className="flex items-center gap-1">
                      <Calendar size={14} />
                      {post.datum}
                    </span>
                    <span className="flex items-center gap-1">
                      <Clock size={14} />
                      {post.lesezeit}
                    </span>
                  </div>

                  {/* Title */}
                  <Link href={`/neuigkeiten/${post.slug}`}>
                    <h3 className="text-xl font-bold text-[#012956] mb-3 group-hover:text-[#109387] transition-colors line-clamp-2">
                      {post.titel}
                    </h3>
                  </Link>

                  {/* Excerpt */}
                  <p className="text-gray-700 font-semibold leading-relaxed mb-4 flex-grow line-clamp-3">
                    {post.auszug}
                  </p>

                  {/* Read More */}
                  <Link
                    href={`/neuigkeiten/${post.slug}`}
                    className="inline-flex items-center gap-2 text-[#109387] font-bold text-sm group-hover:text-[#012956] transition-colors"
                  >
                    Weiterlesen
                    <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </article>
            </FadeIn>
          ))}
        </div>

      </div>
    </section>
  )
}
