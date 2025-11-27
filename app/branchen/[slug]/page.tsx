import { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { ArrowRight, ArrowLeft, Check, Building2, Factory, Stethoscope, ShoppingBag, UtensilsCrossed, GraduationCap, Dumbbell, Warehouse, Home, Landmark, Banknote, Car } from 'lucide-react'
import { branchen, getBrancheBySlug } from '@/lib/branchen-data'

const branchenIcons: Record<string, any> = {
  Building2, Factory, Stethoscope, ShoppingBag, UtensilsCrossed, GraduationCap,
  Dumbbell, Warehouse, Home, Landmark, Banknote, Car
}

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

  const IconComponent = branchenIcons[branche.icon] || Building2

  return (
    <main className="min-h-screen bg-white">
      {/* Hero */}
      <section className="relative bg-[#012956] py-12 md:py-20 lg:py-28 overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-0 right-0 w-1/2 h-full">
            <Image
              src={branche.image}
              alt={branche.name}
              fill
              className="object-cover opacity-20"
            />
          </div>
        </div>

        <div className="relative w-full max-w-[1800px] mx-auto px-4 md:px-6 lg:px-12 xl:px-20">
          {/* Back Link */}
          <Link
            href="/branchen"
            className="inline-flex items-center gap-2 text-white/60 hover:text-white text-sm font-medium mb-6 transition-colors"
          >
            <ArrowLeft size={16} />
            Alle Branchen
          </Link>

          <div className="max-w-3xl">
            <div className="flex items-center gap-3 mb-4">
              <IconComponent size={28} strokeWidth={1.5} className="text-[#109387]" />
              <span className="text-[#109387] font-bold text-sm uppercase tracking-wider">
                {branche.shortName}
              </span>
            </div>

            <h1 className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-white leading-[1.1] mb-4 md:mb-6">
              {branche.name}
              <span className="block text-[#109387]">Reinigung</span>
            </h1>

            <p className="text-white/70 font-medium text-base md:text-lg lg:text-xl leading-relaxed mb-6 md:mb-8">
              {branche.longDescription}
            </p>

            <a
              href="#contact-form"
              className="inline-flex items-center gap-2 md:gap-3 bg-[#109387] hover:bg-[#0d7d72] text-white font-bold text-sm md:text-lg px-6 md:px-8 py-3 md:py-4 rounded-[6px] transition-all group"
            >
              <span>Kostenfreie Besichtigung</span>
              <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
            </a>
          </div>
        </div>
      </section>

      {/* Challenges */}
      <section className="py-12 md:py-20 bg-white">
        <div className="w-full max-w-[1800px] mx-auto px-4 md:px-6 lg:px-12 xl:px-20">
          <div className="grid lg:grid-cols-2 gap-8 md:gap-12 lg:gap-20 items-center">
            <div>
              <p className="text-[#109387] font-bold text-xs md:text-sm uppercase tracking-[0.2em] mb-3">
                Ihre Herausforderungen
              </p>
              <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-[#012956] leading-[1.1] mb-4 md:mb-6">
                Wir kennen die Anforderungen
                <span className="text-[#109387]"> Ihrer Branche</span>
              </h2>
              <p className="text-gray-600 font-medium text-sm md:text-lg leading-relaxed mb-6">
                {branche.description}
              </p>

              <div className="space-y-3">
                {branche.challenges.map((challenge, i) => (
                  <div key={i} className="flex items-center gap-3">
                    <Check size={18} strokeWidth={2} className="text-[#109387] flex-shrink-0" />
                    <span className="text-[#012956] font-medium text-sm md:text-base">{challenge}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="relative h-64 md:h-80 lg:h-[400px] rounded-[6px] overflow-hidden">
              <Image
                src={branche.image}
                alt={branche.name}
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="py-12 md:py-20 bg-[#f8f9fa]">
        <div className="w-full max-w-[1800px] mx-auto px-4 md:px-6 lg:px-12 xl:px-20">
          <div className="text-center mb-8 md:mb-12">
            <p className="text-[#109387] font-bold text-xs md:text-sm uppercase tracking-[0.2em] mb-3">
              Passende Leistungen
            </p>
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-[#012956] mb-3">
              Unsere Services für {branche.shortName}
            </h2>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {branche.services.map((service, i) => (
              <div
                key={i}
                className="bg-white p-4 md:p-6 rounded-[6px] text-center shadow-sm border border-gray-100"
              >
                <Check size={24} strokeWidth={1.5} className="text-[#109387] mx-auto mb-2" />
                <p className="text-[#012956] font-semibold text-sm md:text-base">{service}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-12 md:py-20 lg:py-28 bg-[#012956]">
        <div className="w-full max-w-[1800px] mx-auto px-4 md:px-6 lg:px-12 xl:px-20">
          <div className="text-center max-w-3xl mx-auto">
            <p className="text-[#109387] font-bold text-xs md:text-sm uppercase tracking-[0.2em] mb-3 md:mb-4">
              Jetzt starten
            </p>
            <h2 className="text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold text-white leading-[1.1] mb-4 md:mb-6">
              Kostenfreie Besichtigung
              <span className="block text-[#109387]">für Ihre {branche.shortName}</span>
            </h2>
            <p className="text-white/70 font-medium text-sm md:text-lg mb-6 md:mb-8">
              Lassen Sie sich unverbindlich beraten.
            </p>

            <div className="flex flex-col sm:flex-row gap-3 md:gap-4 justify-center">
              <a
                href="#contact-form"
                className="inline-flex items-center justify-center gap-2 md:gap-3 bg-[#109387] hover:bg-[#0d7d72] text-white font-bold text-sm md:text-lg px-6 md:px-8 py-3 md:py-4 rounded-[6px] transition-all group"
              >
                <span>Besichtigung anfragen</span>
                <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
              </a>
              <a
                href="tel:+4987143033460"
                className="inline-flex items-center justify-center gap-2 bg-white/10 hover:bg-white/20 text-white font-bold text-sm md:text-lg px-6 md:px-8 py-3 md:py-4 rounded-[6px] transition-all"
              >
                <span>0871 430 334 60</span>
              </a>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
