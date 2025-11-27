import { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { ArrowRight, Calendar, Clock, User } from 'lucide-react'
import { blogPosts, blogCategories, getFeaturedPost, formatDate } from '@/lib/blog-data'

export const metadata: Metadata = {
  title: 'Neuigkeiten',
  description: 'Aktuelle News, Tipps und Einblicke von FIMI Gebäudereinigung. Erfahren Sie mehr über Projekte, Reinigungstipps und unser Team.',
}

export default function NeuigkeitenPage() {
  const featuredPost = getFeaturedPost()
  const otherPosts = blogPosts.filter(post => !post.featured)

  return (
    <main className="min-h-screen bg-white">
      {/* Hero */}
      <section className="bg-[#012956] py-20 lg:py-28">
        <div className="w-full max-w-[1800px] mx-auto px-6 lg:px-12 xl:px-20">
          <p className="text-[#109387] font-semibold text-sm uppercase tracking-wider mb-4">
            Blog
          </p>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-[1.1] mb-6">
            Neuigkeiten
          </h1>
          <p className="text-white/70 font-semibold text-lg max-w-2xl">
            Aktuelles aus der Welt der professionellen Gebäudereinigung.
            Tipps, Projekte und Einblicke hinter die Kulissen.
          </p>
        </div>
      </section>

      {/* Category Filter */}
      <section className="border-b border-gray-200">
        <div className="w-full max-w-[1800px] mx-auto px-6 lg:px-12 xl:px-20">
          <div className="flex gap-2 py-4 overflow-x-auto">
            <button className="px-5 py-2 bg-[#012956] text-white rounded-[6px] font-semibold text-sm whitespace-nowrap">
              Alle
            </button>
            {Object.entries(blogCategories).map(([key, value]) => (
              <button
                key={key}
                className="px-5 py-2 bg-[#f8f9fa] text-[#012956] hover:bg-[#012956] hover:text-white rounded-[6px] font-semibold text-sm whitespace-nowrap transition-colors"
              >
                {value.label}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Post */}
      {featuredPost && (
        <section className="py-16 lg:py-20">
          <div className="w-full max-w-[1800px] mx-auto px-6 lg:px-12 xl:px-20">
            <Link
              href={`/neuigkeiten/${featuredPost.slug}`}
              className="group grid lg:grid-cols-2 gap-8 lg:gap-12 items-center"
            >
              {/* Image */}
              <div className="relative h-64 lg:h-96 rounded-[6px] overflow-hidden">
                <Image
                  src={featuredPost.image}
                  alt={featuredPost.title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute top-4 left-4">
                  <span
                    className="px-3 py-1 rounded-[4px] text-white text-xs font-bold uppercase"
                    style={{ backgroundColor: blogCategories[featuredPost.category].color }}
                  >
                    {blogCategories[featuredPost.category].label}
                  </span>
                </div>
              </div>

              {/* Content */}
              <div>
                <div className="flex items-center gap-4 text-gray-500 text-sm mb-4">
                  <span className="flex items-center gap-1.5">
                    <Calendar size={14} />
                    {formatDate(featuredPost.date)}
                  </span>
                  <span className="flex items-center gap-1.5">
                    <Clock size={14} />
                    {featuredPost.readTime} Min. Lesezeit
                  </span>
                </div>

                <h2 className="text-2xl lg:text-4xl font-bold text-[#012956] mb-4 group-hover:text-[#109387] transition-colors">
                  {featuredPost.title}
                </h2>

                <p className="text-gray-600 font-semibold text-lg leading-relaxed mb-6">
                  {featuredPost.excerpt}
                </p>

                <span className="inline-flex items-center gap-2 text-[#109387] font-bold group-hover:gap-3 transition-all">
                  Weiterlesen
                  <ArrowRight size={18} />
                </span>
              </div>
            </Link>
          </div>
        </section>
      )}

      {/* All Posts Grid */}
      <section className="py-16 lg:py-20 bg-[#f8f9fa]">
        <div className="w-full max-w-[1800px] mx-auto px-6 lg:px-12 xl:px-20">
          <h2 className="text-2xl font-bold text-[#012956] mb-10">
            Weitere Beiträge
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {otherPosts.map((post) => (
              <Link
                key={post.id}
                href={`/neuigkeiten/${post.slug}`}
                className="group bg-white rounded-[6px] overflow-hidden shadow-sm hover:shadow-lg transition-all"
              >
                {/* Image */}
                <div className="relative h-48 overflow-hidden">
                  <Image
                    src={post.image}
                    alt={post.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute top-3 left-3">
                    <span
                      className="px-2.5 py-1 rounded-[4px] text-white text-xs font-bold uppercase"
                      style={{ backgroundColor: blogCategories[post.category].color }}
                    >
                      {blogCategories[post.category].label}
                    </span>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <div className="flex items-center gap-3 text-gray-400 text-xs mb-3">
                    <span className="flex items-center gap-1">
                      <Calendar size={12} />
                      {formatDate(post.date)}
                    </span>
                    <span className="flex items-center gap-1">
                      <Clock size={12} />
                      {post.readTime} Min.
                    </span>
                  </div>

                  <h3 className="text-lg font-bold text-[#012956] mb-2 group-hover:text-[#109387] transition-colors line-clamp-2">
                    {post.title}
                  </h3>

                  <p className="text-gray-600 text-sm font-medium line-clamp-2 mb-4">
                    {post.excerpt}
                  </p>

                  <span className="inline-flex items-center gap-1.5 text-[#109387] font-semibold text-sm group-hover:gap-2.5 transition-all">
                    Lesen
                    <ArrowRight size={14} />
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter CTA */}
      <section className="py-16 lg:py-20 bg-[#012956]">
        <div className="w-full max-w-[1800px] mx-auto px-6 lg:px-12 xl:px-20 text-center">
          <h2 className="text-2xl lg:text-3xl font-bold text-white mb-4">
            Keine Neuigkeit verpassen
          </h2>
          <p className="text-white/60 font-semibold mb-8 max-w-xl mx-auto">
            Erhalten Sie regelmäßig Tipps und Neuigkeiten rund um professionelle Gebäudereinigung.
          </p>
          <a
            href="#contact-form"
            className="inline-flex items-center gap-2 bg-[#109387] hover:bg-[#0d7d72] text-white font-bold px-8 py-4 rounded-[6px] transition-all group"
          >
            <span>Kontakt aufnehmen</span>
            <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
          </a>
        </div>
      </section>
    </main>
  )
}
