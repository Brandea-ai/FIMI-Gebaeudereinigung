import Image from 'next/image'
import Link from 'next/link'
import { ArrowRight, ArrowLeft, Building2, Factory, Stethoscope, ShoppingBag, UtensilsCrossed, GraduationCap, Dumbbell, Warehouse, Home, Landmark, Banknote, Car } from 'lucide-react'
import { Branche } from '@/lib/branchen-data'

const branchenIcons: Record<string, any> = {
  Building2, Factory, Stethoscope, ShoppingBag, UtensilsCrossed, GraduationCap,
  Dumbbell, Warehouse, Home, Landmark, Banknote, Car
}

interface BrancheHeroProps {
  branche: Branche
}

export function BrancheHero({ branche }: BrancheHeroProps) {
  const IconComponent = branchenIcons[branche.icon] || Building2

  return (
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
  )
}
