'use client'

import Link from 'next/link'
import Image from 'next/image'
import { ArrowRight, Calendar, Clock } from 'lucide-react'

const articles = [
  {
    slug: 'facility-management-vorteile-fuer-unternehmen',
    title: 'Facility Management: 5 Vorteile für Ihr Unternehmen',
    excerpt: 'Warum immer mehr Unternehmen auf gebündelte Gebäudedienstleistungen setzen – und wie Sie davon profitieren können.',
    image: 'https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=800&auto=format&fit=crop',
    date: '2024-11-15',
    readTime: '5 Min.',
    category: 'Facility Management',
  },
  {
    slug: 'winterdienst-pflichten-unternehmen',
    title: 'Winterdienst: Diese Pflichten haben Unternehmen',
    excerpt: 'Räum- und Streupflicht, Dokumentation, Haftung – was Sie als Unternehmer über den Winterdienst wissen müssen.',
    image: 'https://images.unsplash.com/photo-1491002052546-bf38f186af56?q=80&w=800&auto=format&fit=crop',
    date: '2024-10-28',
    readTime: '7 Min.',
    category: 'Winterdienst',
  },
  {
    slug: 'hausmeisterservice-aufgaben-kosten',
    title: 'Hausmeisterservice: Aufgaben, Kosten, Vorteile',
    excerpt: 'Was ein professioneller Hausmeisterservice leistet und warum er sich für Immobilienbesitzer lohnt.',
    image: 'https://images.unsplash.com/photo-1621905251189-08b45d6a269e?q=80&w=800&auto=format&fit=crop',
    date: '2024-10-12',
    readTime: '6 Min.',
    category: 'Hausmeisterservice',
  },
]

function formatDate(dateString: string) {
  const date = new Date(dateString)
  return date.toLocaleDateString('de-DE', {
    day: '2-digit',
    month: 'long',
    year: 'numeric',
  })
}

export default function BlogPreviewSection() {
  return (
    <section className="py-16 sm:py-20 lg:py-28 bg-white">
      <div className="w-full max-w-[1800px] mx-auto px-4 sm:px-6 md:px-8 lg:px-12 xl:px-20">

        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 sm:gap-6 mb-10 sm:mb-12 lg:mb-16">
          <div>
            <span className="text-[#109387] font-bold text-xs sm:text-sm uppercase tracking-wide mb-3 sm:mb-4 block">
              Wissen & Ratgeber
            </span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-[#012956] leading-[1.1]">
              Rund um Facility Management
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

        {/* Articles Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {articles.map((article, index) => (
            <Link
              key={index}
              href={`/neuigkeiten/${article.slug}`}
              className="group bg-[#f8f9fa] rounded-[6px] overflow-hidden hover:shadow-xl transition-all duration-500"
            >
              {/* Image */}
              <div className="relative h-48 sm:h-56 overflow-hidden">
                <Image
                  src={article.image}
                  alt={article.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                {/* Category Badge */}
                <div className="absolute top-4 left-4">
                  <span className="bg-[#109387] text-white font-bold text-xs px-3 py-1 rounded-[6px]">
                    {article.category}
                  </span>
                </div>
              </div>

              {/* Content */}
              <div className="p-5 sm:p-6">
                {/* Meta */}
                <div className="flex items-center gap-4 text-gray-500 text-xs sm:text-sm mb-3">
                  <span className="flex items-center gap-1">
                    <Calendar className="w-3.5 h-3.5" />
                    {formatDate(article.date)}
                  </span>
                  <span className="flex items-center gap-1">
                    <Clock className="w-3.5 h-3.5" />
                    {article.readTime}
                  </span>
                </div>

                {/* Title */}
                <h3 className="text-lg sm:text-xl font-bold text-[#012956] mb-3 group-hover:text-[#109387] transition-colors leading-tight">
                  {article.title}
                </h3>

                {/* Excerpt */}
                <p className="text-gray-600 font-semibold text-sm sm:text-base leading-relaxed mb-4">
                  {article.excerpt}
                </p>

                {/* Read More */}
                <div className="flex items-center gap-2 text-[#109387] font-bold text-sm group-hover:text-[#012956] transition-colors">
                  Weiterlesen
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
