import { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { branchen, getBrancheBySlug } from '@/lib/branchen-data'

// Komponenten - jede Sektion in eigener Datei
import { BrancheHero } from './_components/BrancheHero'
import { BrancheChallenges } from './_components/BrancheChallenges'
import { BrancheServices } from './_components/BrancheServices'
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
      <BrancheHero branche={branche} />
      <BrancheChallenges branche={branche} />
      <BrancheServices branche={branche} />
      <BrancheCTA branche={branche} />
    </main>
  )
}
