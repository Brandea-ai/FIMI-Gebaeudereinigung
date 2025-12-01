import { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { branchen, getBrancheBySlug } from '@/lib/branchen-data'
import FloatingNav from '@/components/FloatingNav'

// Komponenten - jede Sektion in eigener Datei
import { BrancheHero } from './_components/BrancheHero'
import { BrancheGallery } from './_components/BrancheGallery'
import { BrancheChallenges } from './_components/BrancheChallenges'
import { BrancheServices } from './_components/BrancheServices'
import { BrancheSEOContent } from './_components/BrancheSEOContent'
import { BrancheRegionen } from './_components/BrancheRegionen'
import { BrancheProcess } from './_components/BrancheProcess'
import { BrancheFAQ } from './_components/BrancheFAQ'
import { BrancheCTA } from './_components/BrancheCTA'

// Navigation items for FloatingNav
const floatingNavItems = [
  { id: 'hero', label: 'Übersicht' },
  { id: 'galerie', label: 'Galerie' },
  { id: 'herausforderungen', label: 'Anforderungen' },
  { id: 'leistungen', label: 'Leistungen' },
  { id: 'standorte', label: 'Standorte' },
  { id: 'faq', label: 'FAQ' },
  { id: 'contact-form', label: 'Kontakt' },
]

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
      <FloatingNav items={floatingNavItems} />
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

      {/* Geo-SEO: 8 Einsatzorte in Bayern */}
      <BrancheRegionen branche={branche} />

      {/* Prozess-Schritte */}
      <BrancheProcess branche={branche} />

      {/* FAQ Accordion */}
      <BrancheFAQ branche={branche} />

      {/* Call-to-Action */}
      <BrancheCTA branche={branche} />
    </main>
  )
}
