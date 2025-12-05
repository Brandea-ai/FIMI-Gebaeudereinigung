import { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { ArrowLeft, ArrowRight, Calendar, Clock, User } from 'lucide-react'
import ShareButton from './ShareButton'
import { blogPosts, blogCategories, getPostBySlug, getRecentPosts, formatDate } from '@/lib/blog-data'

interface PageProps {
  params: Promise<{ slug: string }>
}

export async function generateStaticParams() {
  return blogPosts.map((post) => ({
    slug: post.slug,
  }))
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params
  const post = getPostBySlug(slug)

  if (!post) {
    return { title: 'Beitrag nicht gefunden' }
  }

  return {
    title: post.title,
    description: post.excerpt,
    openGraph: {
      title: post.title,
      description: post.excerpt,
      images: [post.image],
    },
  }
}

// Helper function to get related posts (different category or older posts)
function getRelatedPosts(currentPost: typeof blogPosts[0], allPosts: typeof blogPosts, count: number = 3) {
  // Get posts from different categories first, then fill with same category
  const otherCategoryPosts = allPosts
    .filter(p => p.id !== currentPost.id && p.category !== currentPost.category)
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())

  const sameCategoryPosts = allPosts
    .filter(p => p.id !== currentPost.id && p.category === currentPost.category)
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())

  // Mix: prefer different categories for variety
  const result = []
  let otherIdx = 0
  let sameIdx = 0

  while (result.length < count && (otherIdx < otherCategoryPosts.length || sameIdx < sameCategoryPosts.length)) {
    // Alternate: 2 from other categories, 1 from same
    if (result.length % 3 !== 2 && otherIdx < otherCategoryPosts.length) {
      result.push(otherCategoryPosts[otherIdx++])
    } else if (sameIdx < sameCategoryPosts.length) {
      result.push(sameCategoryPosts[sameIdx++])
    } else if (otherIdx < otherCategoryPosts.length) {
      result.push(otherCategoryPosts[otherIdx++])
    }
  }

  return result
}

// Helper function to format title with teal highlight (part before colon)
function formatTitle(title: string) {
  if (title.includes(':')) {
    const [highlight, ...rest] = title.split(':')
    return {
      highlight: highlight.trim(),
      rest: rest.join(':').trim()
    }
  }
  return { highlight: '', rest: title }
}

export default async function BlogPostPage({ params }: PageProps) {
  const { slug } = await params
  const post = getPostBySlug(slug)

  if (!post) {
    notFound()
  }

  const relatedPosts = getRelatedPosts(post, blogPosts, 3)
  const { highlight, rest } = formatTitle(post.title)

  return (
    <main className="min-h-screen bg-white">
      {/* Hero Image - responsive Höhe */}
      <section className="relative min-h-[50vh] sm:min-h-[45vh] lg:min-h-[50vh] flex flex-col">
        <Image
          src={post.image}
          alt={post.title}
          fill
          className="object-cover"
          priority
        />
        {/* Stronger gradient for better text contrast */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#012956] via-[#012956]/70 to-[#012956]/30" />

        {/* Back Button */}
        <div className="relative z-10 pt-4 sm:pt-6">
          <div className="w-full max-w-[1800px] mx-auto px-4 sm:px-6 lg:px-12 xl:px-20">
            <Link
              href="/neuigkeiten"
              className="inline-flex items-center gap-1.5 sm:gap-2 text-white/80 hover:text-white font-semibold text-xs sm:text-sm transition-colors bg-black/20 backdrop-blur-sm px-3 py-1.5 rounded-full"
            >
              <ArrowLeft size={14} className="sm:w-4 sm:h-4" />
              <span className="hidden sm:inline">Zurück zu Neuigkeiten</span>
              <span className="sm:hidden">Zurück</span>
            </Link>
          </div>
        </div>

        {/* Title Overlay - Flexbox für bessere Positionierung */}
        <div className="relative z-10 mt-auto pb-6 sm:pb-8 lg:pb-10">
          <div className="w-full max-w-[1800px] mx-auto px-4 sm:px-6 lg:px-12 xl:px-20">
            <span
              className="inline-block px-2 sm:px-3 py-0.5 sm:py-1 rounded-[4px] text-white text-[10px] sm:text-xs font-bold uppercase mb-2 sm:mb-4"
              style={{ backgroundColor: blogCategories[post.category].color }}
            >
              {blogCategories[post.category].label}
            </span>
            <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold leading-[1.2] sm:leading-[1.15]">
              {highlight ? (
                <>
                  <span className="block text-[#109387] mb-0.5 sm:mb-1">{highlight}</span>
                  <span className="block text-white">{rest}</span>
                </>
              ) : (
                <span className="text-white">{rest}</span>
              )}
            </h1>
          </div>
        </div>
      </section>

      {/* Mobile: CTA Box oben (vor dem Artikel) */}
      <div className="lg:hidden bg-[#012956] py-4 px-4 sm:px-6">
        <div className="w-full max-w-[1800px] mx-auto flex items-center justify-between gap-4">
          <div>
            <p className="text-white font-bold text-sm">Kostenfreie Beratung</p>
            <p className="text-white/60 text-xs">Wir beraten Sie gerne!</p>
          </div>
          <a
            href="#contact-form"
            className="flex items-center gap-2 bg-[#109387] hover:bg-[#0d7d72] text-white font-bold text-xs px-4 py-2.5 rounded-[6px] transition-all whitespace-nowrap"
          >
            Kontakt
            <ArrowRight size={14} />
          </a>
        </div>
      </div>

      {/* Article Content */}
      <article className="py-8 sm:py-10 lg:py-16">
        <div className="w-full max-w-[1800px] mx-auto px-4 sm:px-6 lg:px-12 xl:px-20">
          <div className="lg:grid lg:grid-cols-[70%_30%] lg:gap-12 xl:gap-16">
            {/* Main Content */}
            <div>
              {/* Meta */}
              <div className="flex flex-wrap items-center gap-3 sm:gap-4 text-gray-500 text-xs sm:text-sm pb-6 sm:pb-8 border-b border-gray-200 mb-6 sm:mb-8">
                <span className="flex items-center gap-1 sm:gap-1.5">
                  <User size={14} className="sm:w-4 sm:h-4" />
                  {post.author}
                </span>
                <span className="flex items-center gap-1 sm:gap-1.5">
                  <Calendar size={14} className="sm:w-4 sm:h-4" />
                  {formatDate(post.date)}
                </span>
                <span className="flex items-center gap-1 sm:gap-1.5">
                  <Clock size={14} className="sm:w-4 sm:h-4" />
                  {post.readTime} Min.
                </span>
              </div>

              {/* Lead */}
              <p className="text-base sm:text-lg lg:text-xl text-gray-700 font-semibold leading-relaxed mb-6 sm:mb-8">
                {post.excerpt}
              </p>

              {/* Content - responsive prose */}
              <div
                className="prose prose-sm sm:prose-base lg:prose-lg max-w-none
                  prose-headings:text-[#012956] prose-headings:font-bold
                  prose-h3:text-base prose-h3:sm:text-lg prose-h3:lg:text-xl prose-h3:mt-6 prose-h3:sm:mt-8 prose-h3:mb-3 prose-h3:sm:mb-4
                  prose-p:text-gray-600 prose-p:font-medium prose-p:leading-relaxed prose-p:text-sm prose-p:sm:text-base
                  prose-li:text-gray-600 prose-li:font-medium prose-li:text-sm prose-li:sm:text-base
                  prose-ul:my-3 prose-ul:sm:my-4 prose-li:my-0.5 prose-li:sm:my-1
                  prose-a:text-[#109387] prose-a:no-underline hover:prose-a:underline
                  prose-img:rounded-[6px]"
                dangerouslySetInnerHTML={{ __html: post.content }}
              />

              {/* Share */}
              <div className="mt-8 sm:mt-12 pt-6 sm:pt-8 border-t border-gray-200">
                <div className="flex items-center gap-3 sm:gap-4">
                  <span className="text-gray-500 font-semibold text-xs sm:text-sm">Teilen:</span>
                  <ShareButton title={post.title} />
                </div>
              </div>
            </div>

            {/* Sidebar - nur Desktop */}
            <aside className="hidden lg:block lg:sticky lg:top-24 lg:self-start">
              {/* CTA Box */}
              <div className="bg-[#012956] rounded-[6px] p-5 xl:p-6 mb-6 xl:mb-8">
                <h3 className="text-white font-bold text-base xl:text-lg mb-2 xl:mb-3">
                  Kostenfreie Beratung
                </h3>
                <p className="text-white/70 font-medium text-xs xl:text-sm mb-4 xl:mb-6">
                  Haben Sie Fragen zu unseren Leistungen? Wir beraten Sie gerne!
                </p>
                <a
                  href="#contact-form"
                  className="flex items-center justify-center gap-2 bg-[#109387] hover:bg-[#0d7d72] text-white font-bold text-xs xl:text-sm px-4 xl:px-5 py-2.5 xl:py-3 rounded-[6px] transition-all group w-full"
                >
                  <span>Kontakt aufnehmen</span>
                  <ArrowRight size={14} className="xl:w-4 xl:h-4 group-hover:translate-x-1 transition-transform" />
                </a>
              </div>

              {/* Related Posts */}
              {relatedPosts.length > 0 && (
                <div>
                  <h3 className="text-[#012956] font-bold text-base xl:text-lg mb-3 xl:mb-4">
                    Weitere Beiträge
                  </h3>
                  <div className="space-y-3 xl:space-y-4">
                    {relatedPosts.map((relatedPost) => (
                      <Link
                        key={relatedPost.id}
                        href={`/neuigkeiten/${relatedPost.slug}`}
                        className="group flex gap-3 xl:gap-4"
                      >
                        <div className="relative w-16 h-16 xl:w-20 xl:h-20 flex-shrink-0 rounded-[6px] overflow-hidden">
                          <Image
                            src={relatedPost.image}
                            alt={relatedPost.title}
                            fill
                            className="object-cover"
                          />
                        </div>
                        <div className="flex-1 min-w-0">
                          <span
                            className="inline-block px-1.5 xl:px-2 py-0.5 rounded-[3px] text-white text-[8px] xl:text-[10px] font-bold uppercase mb-1"
                            style={{ backgroundColor: blogCategories[relatedPost.category].color }}
                          >
                            {blogCategories[relatedPost.category].label}
                          </span>
                          <p className="text-[#012956] font-bold text-xs xl:text-sm line-clamp-2 group-hover:text-[#109387] transition-colors leading-tight">
                            {relatedPost.title}
                          </p>
                          <p className="text-gray-400 text-[10px] xl:text-xs mt-1">
                            {formatDate(relatedPost.date)}
                          </p>
                        </div>
                      </Link>
                    ))}
                  </div>
                </div>
              )}
            </aside>
          </div>

          {/* Mobile: Verwandte Beiträge unten */}
          {relatedPosts.length > 0 && (
            <div className="lg:hidden mt-10 sm:mt-12 pt-8 sm:pt-10 border-t border-gray-200">
              <h3 className="text-[#012956] font-bold text-lg sm:text-xl mb-4 sm:mb-6">
                Weitere Beiträge
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {relatedPosts.map((relatedPost) => (
                  <Link
                    key={relatedPost.id}
                    href={`/neuigkeiten/${relatedPost.slug}`}
                    className="group flex gap-3 sm:gap-4 bg-[#f8f9fa] rounded-[6px] p-3 sm:p-4"
                  >
                    <div className="relative w-20 h-20 sm:w-24 sm:h-24 flex-shrink-0 rounded-[6px] overflow-hidden">
                      <Image
                        src={relatedPost.image}
                        alt={relatedPost.title}
                        fill
                        className="object-cover"
                      />
                    </div>
                    <div className="flex-1 min-w-0 flex flex-col justify-center">
                      <span
                        className="inline-block w-fit px-2 py-0.5 rounded-[3px] text-white text-[9px] sm:text-[10px] font-bold uppercase mb-1.5"
                        style={{ backgroundColor: blogCategories[relatedPost.category].color }}
                      >
                        {blogCategories[relatedPost.category].label}
                      </span>
                      <p className="text-[#012956] font-bold text-sm sm:text-base line-clamp-2 group-hover:text-[#109387] transition-colors leading-tight">
                        {relatedPost.title}
                      </p>
                      <p className="text-gray-400 text-xs mt-1">
                        {formatDate(relatedPost.date)}
                      </p>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          )}
        </div>
      </article>
    </main>
  )
}
