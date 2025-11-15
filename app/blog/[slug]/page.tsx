import { Metadata } from 'next'
import Link from 'next/link'
import { getBlogPostBySlug, getAllBlogPosts } from '@/lib/blog'
import { Calendar, User, ArrowLeft, Tag } from 'lucide-react'
import { notFound } from 'next/navigation'

interface BlogPostPageProps {
  params: {
    slug: string
  }
}

export async function generateMetadata({ params }: BlogPostPageProps): Promise<Metadata> {
  const post = getBlogPostBySlug(params.slug)

  if (!post) {
    return {
      title: 'Blog-Beitrag nicht gefunden',
    }
  }

  return {
    title: `${post.title} | FIMI Gebäudereinigung Blog`,
    description: post.excerpt,
    keywords: [post.category, 'Gebäudereinigung', 'FIMI', 'Reinigung'],
  }
}

export async function generateStaticParams() {
  const posts = getAllBlogPosts()
  return posts.map((post) => ({
    slug: post.slug,
  }))
}

export default function BlogPostPage({ params }: BlogPostPageProps) {
  const post = getBlogPostBySlug(params.slug)

  if (!post) {
    notFound()
  }

  return (
    <>
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-fimi-navy to-fimi-turquoise text-white section-padding mt-20 lg:mt-24">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            {/* Back Link */}
            <Link
              href="/blog"
              className="inline-flex items-center space-x-2 text-gray-200 hover:text-white mb-8 transition-colors"
            >
              <ArrowLeft className="w-4 h-4" />
              <span>Zurück zum Blog</span>
            </Link>

            {/* Category Badge */}
            <div className="inline-flex items-center bg-fimi-turquoise/20 backdrop-blur-sm border border-fimi-turquoise/30 rounded-full px-4 py-2 mb-6">
              <Tag className="w-4 h-4 mr-2" />
              <span className="text-sm font-semibold text-fimi-turquoise">{post.category}</span>
            </div>

            {/* Title */}
            <h1 className="text-white mb-6">{post.title}</h1>

            {/* Meta Info */}
            <div className="flex flex-wrap items-center gap-6 text-gray-200">
              <div className="flex items-center gap-2">
                <Calendar className="w-5 h-5" />
                <span>{new Date(post.date).toLocaleDateString('de-DE', {
                  day: '2-digit',
                  month: 'long',
                  year: 'numeric'
                })}</span>
              </div>
              <div className="flex items-center gap-2">
                <User className="w-5 h-5" />
                <span>{post.author}</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Content Section */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            {/* Featured Image */}
            {post.image && (
              <div className="mb-12 rounded-2xl overflow-hidden shadow-2xl">
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full h-[500px] object-cover"
                />
              </div>
            )}

            {/* Article Content */}
            <article className="prose prose-lg prose-fimi max-w-none">
              <div
                className="blog-content"
                dangerouslySetInnerHTML={{ __html: post.content }}
              />
            </article>

            {/* Divider */}
            <div className="my-12 border-t border-gray-200" />

            {/* Author Box */}
            <div className="bg-gradient-to-br from-gray-50 to-white p-8 rounded-2xl border border-gray-200">
              <div className="flex items-start gap-6">
                <div className="w-16 h-16 bg-gradient-to-br from-fimi-navy to-fimi-turquoise rounded-full flex items-center justify-center flex-shrink-0">
                  <User className="w-8 h-8 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-fimi-navy mb-2">
                    Verfasst von {post.author}
                  </h3>
                  <p className="text-gray-600">
                    Unser Expertenteam bei FIMI Gebäudereinigung teilt regelmäßig Fachwissen,
                    Best Practices und aktuelle Trends aus der professionellen Reinigungsbranche.
                  </p>
                </div>
              </div>
            </div>

            {/* Back to Blog */}
            <div className="mt-12 text-center">
              <Link
                href="/blog"
                className="inline-flex items-center space-x-2 btn-primary"
              >
                <ArrowLeft className="w-5 h-5" />
                <span>Alle Blog-Beiträge ansehen</span>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
