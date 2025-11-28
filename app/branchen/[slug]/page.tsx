import { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { branchen, getBrancheBySlug } from '@/lib/branchen-data'

// Komponenten - jede Sektion in eigener Datei
import { BrancheHero } from './_components/BrancheHero'
import { BrancheGallery } from './_components/BrancheGallery'
import { BrancheChallenges } from './_components/BrancheChallenges'
import { BrancheServices } from './_components/BrancheServices'
import { BrancheSEOContent } from './_components/BrancheSEOContent'
import { BrancheProcess } from './_components/BrancheProcess'
import { BrancheFAQ } from './_components/BrancheFAQ'
import { BrancheCTA } from './_components/BrancheCTA'

interface PageProps {
  params: Promise<{ slug: string }>
}

export async function generateStaticParams() {
  return branchen.map((branche) => ({
    slug: branche.slug,
  }))
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params
  const branche = getBrancheBySlug(slug)

  if (!branche) {
    return { title: 'Branche nicht gefunden' }
  }

  return {
    title: branche.metaTitle,
    description: branche.metaDescription,
    keywords: branche.keywords.join(', '),
  }
}

export default async function BranchePage({ params }: PageProps) {
  const { slug } = await params
  const branche = getBrancheBySlug(slug)

  if (!branche) {
    notFound()
  }

  return (
    <main className="min-h-screen bg-white">
      {/* Hero mit Headline, Subheadline, Benefits */}
      <BrancheHero branche={branche} />

      {/* Bildergalerie / Slider */}
      <BrancheGallery branche={branche} />

      {/* Detaillierte Herausforderungen mit Lösungen */}
      <BrancheChallenges branche={branche} />

      {/* Services Grid */}
      <BrancheServices branche={branche} />

      {/* SEO Content (500+ Wörter) */}
      <BrancheSEOContent branche={branche} />

      {/* Prozess-Schritte */}
      <BrancheProcess branche={branche} />

      {/* FAQ Accordion */}
      <BrancheFAQ branche={branche} />

      {/* Call-to-Action */}
      <BrancheCTA branche={branche} />
    </main>
  )
}
