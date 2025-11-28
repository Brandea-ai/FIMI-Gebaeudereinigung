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

export default async function BlogPostPage({ params }: PageProps) {
  const { slug } = await params
  const post = getPostBySlug(slug)

  if (!post) {
    notFound()
  }

  const recentPosts = getRecentPosts(3).filter(p => p.id !== post.id).slice(0, 2)

  return (
    <main className="min-h-screen bg-white">
      {/* Hero Image */}
      <section className="relative h-[40vh] lg:h-[50vh]">
        <Image
          src={post.image}
          alt={post.title}
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#012956]/90 via-[#012956]/40 to-transparent" />

        {/* Back Button */}
        <div className="absolute top-6 left-0 right-0">
          <div className="w-full max-w-[1800px] mx-auto px-6 lg:px-12 xl:px-20">
            <Link
              href="/neuigkeiten"
              className="inline-flex items-center gap-2 text-white/80 hover:text-white font-semibold text-sm transition-colors"
            >
              <ArrowLeft size={16} />
              Zurück zu Neuigkeiten
            </Link>
          </div>
        </div>

        {/* Title Overlay */}
        <div className="absolute bottom-0 left-0 right-0 pb-10">
          <div className="w-full max-w-[1800px] mx-auto px-6 lg:px-12 xl:px-20">
            <span
              className="inline-block px-3 py-1 rounded-[4px] text-white text-xs font-bold uppercase mb-4"
              style={{ backgroundColor: blogCategories[post.category].color }}
            >
              {blogCategories[post.category].label}
            </span>
            <h1 className="text-3xl lg:text-5xl font-bold text-white leading-[1.1] max-w-4xl">
              {post.title}
            </h1>
          </div>
        </div>
      </section>

      {/* Article Content */}
      <article className="py-12 lg:py-16">
        <div className="w-full max-w-[1800px] mx-auto px-6 lg:px-12 xl:px-20">
          <div className="grid lg:grid-cols-[1fr_350px] gap-12 lg:gap-20">
            {/* Main Content */}
            <div>
              {/* Meta */}
              <div className="flex flex-wrap items-center gap-4 text-gray-500 text-sm pb-8 border-b border-gray-200 mb-8">
                <span className="flex items-center gap-1.5">
                  <User size={16} />
                  {post.author}
                </span>
                <span className="flex items-center gap-1.5">
                  <Calendar size={16} />
                  {formatDate(post.date)}
                </span>
                <span className="flex items-center gap-1.5">
                  <Clock size={16} />
                  {post.readTime} Min. Lesezeit
                </span>
              </div>

              {/* Lead */}
              <p className="text-xl text-gray-700 font-semibold leading-relaxed mb-8">
                {post.excerpt}
              </p>

              {/* Content */}
              <div
                className="prose prose-lg max-w-none
                  prose-headings:text-[#012956] prose-headings:font-bold
                  prose-h3:text-xl prose-h3:mt-8 prose-h3:mb-4
                  prose-p:text-gray-600 prose-p:font-medium prose-p:leading-relaxed
                  prose-li:text-gray-600 prose-li:font-medium
                  prose-ul:my-4 prose-li:my-1
                  prose-a:text-[#109387] prose-a:no-underline hover:prose-a:underline"
                dangerouslySetInnerHTML={{ __html: post.content }}
              />

              {/* Share */}
              <div className="mt-12 pt-8 border-t border-gray-200">
                <div className="flex items-center gap-4">
                  <span className="text-gray-500 font-semibold text-sm">Teilen:</span>
                  <ShareButton title={post.title} />
                </div>
              </div>
            </div>

            {/* Sidebar */}
            <aside className="lg:sticky lg:top-40 lg:self-start">
              {/* Content Image in Sidebar */}
              {post.image && (
                <div className="mb-6">
                  <Image
                    src={post.image.replace('hero', 'content')}
                    alt={`${post.title} - Detailbild`}
                    width={350}
                    height={280}
                    className="w-full rounded-[6px] object-cover"
                  />
                  <p className="text-gray-500 text-xs font-semibold mt-2 text-center">
                    Professionelle Reinigung für höchste Ansprüche
                  </p>
                </div>
              )}

              {/* CTA Box */}
              <div className="bg-[#012956] rounded-[6px] p-6 mb-8">
                <h3 className="text-white font-bold text-lg mb-3">
                  Kostenfreie Beratung
                </h3>
                <p className="text-white/70 font-medium text-sm mb-6">
                  Haben Sie Fragen zu unseren Leistungen? Wir beraten Sie gerne!
                </p>
                <a
                  href="#contact-form"
                  className="flex items-center justify-center gap-2 bg-[#109387] hover:bg-[#0d7d72] text-white font-bold text-sm px-5 py-3 rounded-[6px] transition-all group w-full"
                >
                  <span>Kontakt aufnehmen</span>
                  <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                </a>
              </div>

              {/* Recent Posts */}
              {recentPosts.length > 0 && (
                <div>
                  <h3 className="text-[#012956] font-bold text-lg mb-4">
                    Weitere Beiträge
                  </h3>
                  <div className="space-y-4">
                    {recentPosts.map((recentPost) => (
                      <Link
                        key={recentPost.id}
                        href={`/neuigkeiten/${recentPost.slug}`}
                        className="group flex gap-4"
                      >
                        <div className="relative w-20 h-20 flex-shrink-0 rounded-[6px] overflow-hidden">
                          <Image
                            src={recentPost.image}
                            alt={recentPost.title}
                            fill
                            className="object-cover"
                          />
                        </div>
                        <div className="flex-1 min-w-0">
                          <p className="text-[#012956] font-bold text-sm line-clamp-2 group-hover:text-[#109387] transition-colors">
                            {recentPost.title}
                          </p>
                          <p className="text-gray-400 text-xs mt-1">
                            {formatDate(recentPost.date)}
                          </p>
                        </div>
                      </Link>
                    ))}
                  </div>
                </div>
              )}
            </aside>
          </div>
        </div>
      </article>
    </main>
  )
}
