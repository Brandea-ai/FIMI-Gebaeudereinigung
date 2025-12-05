'use client'

import { useState, useMemo } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { ArrowRight, Calendar, Clock } from 'lucide-react'
import { blogPosts, blogCategories, formatDate, BlogPost } from '@/lib/blog-data'
import FadeIn from '@/components/FadeIn'

type CategoryKey = keyof typeof blogCategories | 'all'

export default function NeuigkeitenPage() {
  const [activeCategory, setActiveCategory] = useState<CategoryKey>('all')

  // Sort all posts by date (newest first)
  const sortedPosts = useMemo(() => {
    return [...blogPosts].sort((a, b) =>
      new Date(b.date).getTime() - new Date(a.date).getTime()
    )
  }, [])

  // Filter posts by category
  const filteredPosts = useMemo(() => {
    if (activeCategory === 'all') {
      return sortedPosts
    }
    return sortedPosts.filter(post => post.category === activeCategory)
  }, [sortedPosts, activeCategory])

  // Featured post is the newest one in filtered results
  const featuredPost = filteredPosts[0]
  const otherPosts = filteredPosts.slice(1)

  return (
    <main className="min-h-screen bg-white">
      {/* Hero - kompakter auf Mobile */}
      <section className="bg-[#012956] py-12 sm:py-16 lg:py-28">
        <div className="w-full max-w-[1800px] mx-auto px-4 sm:px-6 lg:px-12 xl:px-20">
          <FadeIn direction="left">
            <p className="text-[#109387] font-semibold text-xs sm:text-sm uppercase tracking-wider mb-2 sm:mb-4">
              Blog
            </p>
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-[1.1] mb-4 sm:mb-6">
              Neuigkeiten
            </h1>
            <p className="text-white/70 font-semibold text-base sm:text-lg max-w-2xl">
              Aktuelles aus der Welt der professionellen Gebäudereinigung.
              Tipps, Projekte und Einblicke hinter die Kulissen.
            </p>
          </FadeIn>
        </div>
      </section>

      {/* Category Filter - Sticky, besser scrollbar auf Mobile */}
      <section className="sticky top-0 z-20 bg-white border-b border-gray-200 shadow-sm">
        <div className="w-full max-w-[1800px] mx-auto px-4 sm:px-6 lg:px-12 xl:px-20">
          <div className="flex gap-1.5 sm:gap-2 py-3 sm:py-4 overflow-x-auto scrollbar-hide -mx-4 px-4 sm:mx-0 sm:px-0">
            <button
              onClick={() => setActiveCategory('all')}
              className={`px-3 sm:px-5 py-2 rounded-[6px] font-semibold text-xs sm:text-sm whitespace-nowrap transition-colors cursor-pointer ${
                activeCategory === 'all'
                  ? 'bg-[#012956] text-white'
                  : 'bg-[#f8f9fa] text-[#012956] hover:bg-[#012956] hover:text-white'
              }`}
            >
              Alle
            </button>
            {(Object.entries(blogCategories) as [keyof typeof blogCategories, typeof blogCategories[keyof typeof blogCategories]][]).map(([key, value]) => (
              <button
                key={key}
                onClick={() => setActiveCategory(key)}
                className={`px-3 sm:px-5 py-2 rounded-[6px] font-semibold text-xs sm:text-sm whitespace-nowrap transition-colors cursor-pointer ${
                  activeCategory === key
                    ? 'bg-[#012956] text-white'
                    : 'bg-[#f8f9fa] text-[#012956] hover:bg-[#012956] hover:text-white'
                }`}
              >
                {value.label}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Post - Mobile optimiert */}
      {featuredPost && (
        <section className="py-8 sm:py-12 lg:py-20">
          <div className="w-full max-w-[1800px] mx-auto px-4 sm:px-6 lg:px-12 xl:px-20">
            <Link
              href={`/neuigkeiten/${featuredPost.slug}`}
              className="group block lg:grid lg:grid-cols-2 lg:gap-12 lg:items-center"
            >
              {/* Image */}
              <div className="relative aspect-[16/10] sm:aspect-[16/9] lg:aspect-[4/3] rounded-[6px] overflow-hidden mb-4 sm:mb-6 lg:mb-0">
                <Image
                  src={featuredPost.image}
                  alt={featuredPost.title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute top-3 left-3 sm:top-4 sm:left-4">
                  <span
                    className="px-2 sm:px-3 py-1 rounded-[4px] text-white text-[10px] sm:text-xs font-bold uppercase"
                    style={{ backgroundColor: blogCategories[featuredPost.category].color }}
                  >
                    {blogCategories[featuredPost.category].label}
                  </span>
                </div>
              </div>

              {/* Content */}
              <div>
                <div className="flex items-center gap-3 sm:gap-4 text-gray-500 text-xs sm:text-sm mb-2 sm:mb-4">
                  <span className="flex items-center gap-1 sm:gap-1.5">
                    <Calendar size={12} className="sm:w-3.5 sm:h-3.5" />
                    {formatDate(featuredPost.date)}
                  </span>
                  <span className="flex items-center gap-1 sm:gap-1.5">
                    <Clock size={12} className="sm:w-3.5 sm:h-3.5" />
                    {featuredPost.readTime} Min.
                  </span>
                </div>

                <h2 className="text-xl sm:text-2xl lg:text-4xl font-bold text-[#012956] mb-2 sm:mb-4 group-hover:text-[#109387] transition-colors leading-tight">
                  {featuredPost.title}
                </h2>

                <p className="text-gray-600 font-semibold text-sm sm:text-base lg:text-lg leading-relaxed mb-4 sm:mb-6 line-clamp-3 sm:line-clamp-none">
                  {featuredPost.excerpt}
                </p>

                <span className="inline-flex items-center gap-2 text-[#109387] font-bold text-sm sm:text-base group-hover:gap-3 transition-all">
                  Weiterlesen
                  <ArrowRight size={16} className="sm:w-[18px] sm:h-[18px]" />
                </span>
              </div>
            </Link>
          </div>
        </section>
      )}

      {/* All Posts Grid - 1 Spalte Mobile, 2 Tablet, 3 Desktop */}
      {otherPosts.length > 0 && (
        <section className="py-8 sm:py-12 lg:py-20 bg-[#f8f9fa]">
          <div className="w-full max-w-[1800px] mx-auto px-4 sm:px-6 lg:px-12 xl:px-20">
            <h2 className="text-xl sm:text-2xl font-bold text-[#012956] mb-6 sm:mb-10">
              Weitere Beiträge
            </h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
              {otherPosts.map((post) => (
                <Link
                  key={post.id}
                  href={`/neuigkeiten/${post.slug}`}
                  className="group bg-white rounded-[6px] overflow-hidden shadow-sm hover:shadow-lg transition-all flex sm:flex-col"
                >
                  {/* Image - kleiner auf Mobile (horizontal Card) */}
                  <div className="relative w-28 sm:w-full aspect-square sm:aspect-[16/10] flex-shrink-0 overflow-hidden">
                    <Image
                      src={post.image}
                      alt={post.title}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="absolute top-2 left-2 sm:top-3 sm:left-3">
                      <span
                        className="px-1.5 sm:px-2.5 py-0.5 sm:py-1 rounded-[4px] text-white text-[8px] sm:text-xs font-bold uppercase"
                        style={{ backgroundColor: blogCategories[post.category].color }}
                      >
                        {blogCategories[post.category].label}
                      </span>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-3 sm:p-5 lg:p-6 flex flex-col justify-center sm:justify-start flex-1 min-w-0">

                    <h3 className="text-sm sm:text-base lg:text-lg font-bold text-[#012956] mb-1 sm:mb-2 group-hover:text-[#109387] transition-colors line-clamp-2 leading-tight">
                      {post.title}
                    </h3>

                    {/* Excerpt - auf Mobile gekürzt, aber sichtbar für SEO */}
                    <p className="text-gray-600 text-xs sm:text-sm font-medium line-clamp-1 sm:line-clamp-2 mb-1 sm:mb-3">
                      {post.excerpt}
                    </p>

                    {/* Meta: Datum */}
                    <p className="text-gray-400 text-[10px] sm:text-xs mb-1 sm:mb-0">
                      {formatDate(post.date)} · {post.readTime} Min.
                    </p>

                    <span className="inline-flex items-center gap-1 sm:gap-1.5 text-[#109387] font-semibold text-xs sm:text-sm group-hover:gap-2 sm:group-hover:gap-2.5 transition-all">
                      Lesen
                      <ArrowRight size={12} className="sm:w-3.5 sm:h-3.5" />
                    </span>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Newsletter CTA */}
      <section className="py-12 sm:py-16 lg:py-20 bg-[#012956]">
        <div className="w-full max-w-[1800px] mx-auto px-4 sm:px-6 lg:px-12 xl:px-20 text-center">
          <FadeIn>
            <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold text-white mb-3 sm:mb-4">
              Keine Neuigkeit verpassen
            </h2>
            <p className="text-white/60 font-semibold text-sm sm:text-base mb-6 sm:mb-8 max-w-xl mx-auto">
              Erhalten Sie regelmäßig Tipps und Neuigkeiten rund um professionelle Gebäudereinigung.
            </p>
            <a
              href="#contact-form"
              className="inline-flex items-center gap-2 bg-[#109387] hover:bg-[#0d7d72] text-white font-bold px-6 sm:px-8 py-3 sm:py-4 rounded-[6px] transition-all group text-sm sm:text-base"
            >
              <span>Kontakt aufnehmen</span>
              <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform sm:w-[18px] sm:h-[18px]" />
            </a>
          </FadeIn>
        </div>
      </section>
    </main>
  )
}
