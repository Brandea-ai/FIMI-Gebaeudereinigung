'use client'

import Image from 'next/image'
import Link from 'next/link'
import { ArrowRight, Calendar, Clock } from 'lucide-react'
import FadeIn from '@/components/FadeIn'

// Relevante Blogartikel für Maschinenreinigung (nur existierende Artikel)
const blogPosts = [
  {
    slug: 'industriereinigung-arbeitssicherheit-dguv-gefahrstoffv',
    titel: 'Industriereinigung: Arbeitssicherheit und Gefahrstoffmanagement',
    auszug: 'Die Reinigung von Produktionsanlagen und Maschinen stellt hohe Anforderungen an die Arbeitssicherheit. Der Umgang mit spezialisierten Chemikalien erfordert strikte Einhaltung der DGUV-Vorschriften.',
    bild: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80&w=800&auto=format&fit=crop',
    datum: '18. November 2024',
    lesezeit: '9 Min',
    kategorie: 'Ratgeber',
  },
  {
    slug: 'digitalisierung-gebaeudereinigung-2025-ki-robotik-iot',
    titel: 'Digitalisierung 2025: KI und Robotik in der Reinigung',
    auszug: 'Die Gebäudereinigungsbranche steht 2025 im Zeichen tiefgreifender technologischer Veränderungen. Unternehmen setzen verstärkt auf digitale Lösungen für Effizienz und Qualität.',
    bild: 'https://images.unsplash.com/photo-1485827404703-89b55fcc595e?q=80&w=800&auto=format&fit=crop',
    datum: '25. November 2024',
    lesezeit: '8 Min',
    kategorie: 'Wissen',
  },
  {
    slug: 'reinigungsintervalle-buero-schule-praxis-din-ral',
    titel: 'Reinigungsintervalle: Wie oft muss gereinigt werden?',
    auszug: 'Die Festlegung der richtigen Reinigungsintervalle ist entscheidend für Hygiene, Werterhalt und Kosteneffizienz. Frequenz individuell auf Basis von Nutzungsintensität ermitteln.',
    bild: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?q=80&w=800&auto=format&fit=crop',
    datum: '10. November 2024',
    lesezeit: '7 Min',
    kategorie: 'Tipps',
  },
]

export default function BlogPreviewSection() {
  return (
    <section className="py-12 sm:py-16 lg:py-28 bg-[#f8f9fa]" aria-labelledby="blog-heading">
      <div className="w-full max-w-[1800px] mx-auto px-4 sm:px-6 md:px-8 lg:px-12 xl:px-20">

        {/* Section Header */}
        <FadeIn className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-4 sm:gap-6 mb-8 sm:mb-12">
          <div>
            <p className="text-xs sm:text-sm text-[#109387] font-bold uppercase tracking-wide mb-2 sm:mb-3">
              Wissen & Tipps
            </p>
            <h2
              id="blog-heading"
              className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-[#012956] leading-[1.1]"
            >
              Aktuelles zur Maschinenreinigung
            </h2>
          </div>
          <Link
            href="/neuigkeiten"
            className="inline-flex items-center gap-2 text-[#109387] font-bold hover:text-[#012956] transition-colors group text-sm sm:text-base"
          >
            Alle Artikel
            <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
          </Link>
        </FadeIn>

        {/* Blog Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
          {blogPosts.map((post, index) => (
            <FadeIn key={post.slug} delay={index * 0.1}>
              <article className="group bg-white rounded-[6px] overflow-hidden h-full flex flex-col shadow-sm hover:shadow-lg transition-shadow duration-300">
                {/* Image */}
                <Link href={`/neuigkeiten/${post.slug}`} className="relative h-40 sm:h-48 overflow-hidden">
                  <Image
                    src={post.bild}
                    alt={post.titel}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  {/* Kategorie Badge */}
                  <div className="absolute top-3 sm:top-4 left-3 sm:left-4">
                    <span className="bg-[#109387] text-white font-bold text-[10px] sm:text-xs px-2 sm:px-3 py-1 rounded-full">
                      {post.kategorie}
                    </span>
                  </div>
                </Link>

                {/* Content */}
                <div className="p-4 sm:p-5 lg:p-6 flex flex-col flex-grow">
                  {/* Meta */}
                  <div className="flex items-center gap-3 sm:gap-4 text-gray-500 text-xs sm:text-sm font-semibold mb-2 sm:mb-3">
                    <span className="flex items-center gap-1">
                      <Calendar size={12} className="sm:w-[14px] sm:h-[14px]" />
                      {post.datum}
                    </span>
                    <span className="flex items-center gap-1">
                      <Clock size={12} className="sm:w-[14px] sm:h-[14px]" />
                      {post.lesezeit}
                    </span>
                  </div>

                  {/* Title */}
                  <Link href={`/neuigkeiten/${post.slug}`}>
                    <h3 className="text-base sm:text-lg lg:text-xl font-bold text-[#012956] mb-2 sm:mb-3 group-hover:text-[#109387] transition-colors line-clamp-2">
                      {post.titel}
                    </h3>
                  </Link>

                  {/* Excerpt */}
                  <p className="text-gray-700 font-semibold leading-relaxed mb-3 sm:mb-4 flex-grow line-clamp-3 text-xs sm:text-sm">
                    {post.auszug}
                  </p>

                  {/* Read More */}
                  <Link
                    href={`/neuigkeiten/${post.slug}`}
                    className="inline-flex items-center gap-1.5 sm:gap-2 text-[#109387] font-bold text-xs sm:text-sm group-hover:text-[#012956] transition-colors"
                  >
                    Weiterlesen
                    <ArrowRight size={14} className="sm:w-4 sm:h-4 group-hover:translate-x-1 transition-transform" />
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
