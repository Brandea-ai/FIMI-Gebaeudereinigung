import { Metadata } from 'next'
import Link from 'next/link'
import { getAllBlogPosts } from '@/lib/blog'
import { Calendar, User, ArrowRight } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Blog - Tipps & Wissen | FIMI Gebäudereinigung',
  description: 'Expertenwissen rund um Gebäudereinigung, Facility Management und Reinigungstipps. Aktuelles von FIMI.',
}

export default function BlogPage() {
  const posts = getAllBlogPosts()

  return (
    <>
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-fimi-navy to-fimi-turquoise text-white section-padding mt-20 lg:mt-24">
        <div className="container-custom">
          <div className="max-w-3xl">
            <span className="text-fimi-turquoise bg-white/20 rounded-full px-4 py-2 text-sm font-semibold inline-block mb-6">
              Unser Blog
            </span>
            <h1 className="text-white mb-6">
              Tipps & Wissen für Sauberkeit
            </h1>
            <p className="text-xl text-gray-200">
              Expertenwissen, Branchennews und praktische Tipps rund um professionelle Gebäudereinigung und Facility Management.
            </p>
          </div>
        </div>
      </section>

      {/* Blog Posts Grid */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          {posts.length === 0 ? (
            <div className="text-center py-12">
              <p className="text-xl text-gray-600">Bald gibt es hier spannende Blog-Beiträge!</p>
            </div>
          ) : (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {posts.map((post) => (
                <Link
                  key={post.slug}
                  href={`/blog/${post.slug}`}
                  className="group bg-white rounded-2xl overflow-hidden border border-gray-200 hover:border-fimi-turquoise hover:shadow-xl transition-all duration-300 card-hover"
                >
                  {/* Image */}
                  {post.image && (
                    <div className="relative h-48 overflow-hidden">
                      <img
                        src={post.image}
                        alt={post.title}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                      />
                      <div className="absolute top-4 left-4 bg-fimi-turquoise text-white px-3 py-1 rounded-full text-sm font-semibold">
                        {post.category}
                      </div>
                    </div>
                  )}

                  {/* Content */}
                  <div className="p-6">
                    {/* Meta */}
                    <div className="flex items-center gap-4 text-sm text-gray-600 mb-4">
                      <div className="flex items-center gap-1">
                        <Calendar className="w-4 h-4" />
                        <span>{new Date(post.date).toLocaleDateString('de-DE')}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <User className="w-4 h-4" />
                        <span>{post.author}</span>
                      </div>
                    </div>

                    {/* Title */}
                    <h3 className="text-xl font-bold text-fimi-navy mb-3 group-hover:text-fimi-turquoise transition-colors">
                      {post.title}
                    </h3>

                    {/* Excerpt */}
                    <p className="text-gray-600 mb-4 line-clamp-3">
                      {post.excerpt}
                    </p>

                    {/* Read More */}
                    <div className="flex items-center text-fimi-turquoise font-semibold group-hover:gap-2 transition-all">
                      <span>Weiterlesen</span>
                      <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          )}
        </div>
      </section>
    </>
  )
}
