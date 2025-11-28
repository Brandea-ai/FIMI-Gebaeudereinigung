import Link from 'next/link'
import { ArrowRight, ArrowLeft, Check, Building2 } from 'lucide-react'
import { Branche } from '@/lib/branchen-data'

interface BrancheHeroProps {
  branche: Branche
}

export function BrancheHero({ branche }: BrancheHeroProps) {
  return (
    <section
      className="relative bg-[#012956] pt-8 pb-12 md:pt-12 md:pb-20 lg:pt-16 lg:pb-28 overflow-hidden"
      style={{
        backgroundImage: `url(${branche.heroImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center'
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#012956] via-[#012956]/95 to-[#012956]/70" />

      <div className="relative w-full max-w-[1800px] mx-auto px-4 md:px-6 lg:px-12 xl:px-20">
        {/* Back Link */}
        <Link
          href="/branchen"
          className="inline-flex items-center gap-2 text-white/60 hover:text-white text-sm font-medium mb-6 md:mb-8 transition-colors"
        >
          <ArrowLeft size={16} />
          Alle Branchen
        </Link>

        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Linke Seite - Text */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 md:w-12 md:h-12 rounded-[6px] bg-[#109387]/20 flex items-center justify-center">
                <Building2 size={24} strokeWidth={1.5} className="text-[#109387]" />
              </div>
              <span className="text-[#109387] font-bold text-xs md:text-sm uppercase tracking-[0.2em]">
                {branche.shortName}
              </span>
            </div>

            <h1 className="text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold text-white leading-[1.1] mb-4 md:mb-6">
              {branche.headline}
            </h1>

            <p className="text-white/80 font-medium text-base md:text-lg lg:text-xl leading-relaxed mb-6 md:mb-8">
              {branche.subheadline}
            </p>

            <p className="text-white/60 text-sm md:text-base leading-relaxed mb-6 md:mb-8">
              {branche.description}
            </p>

            {/* Benefits Quick List */}
            {branche.benefits && branche.benefits.length > 0 && (
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 md:gap-3 mb-6 md:mb-8">
                {branche.benefits.slice(0, 4).map((benefit, i) => (
                  <div key={i} className="flex items-center gap-2">
                    <div className="w-5 h-5 rounded-full bg-[#109387]/20 flex items-center justify-center flex-shrink-0">
                      <Check size={12} className="text-[#109387]" />
                    </div>
                    <span className="text-white/80 text-sm">{benefit}</span>
                  </div>
                ))}
              </div>
            )}

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-3 md:gap-4">
              <a
                href="#contact-form"
                className="inline-flex items-center justify-center gap-2 md:gap-3 bg-[#109387] hover:bg-[#0d7d72] text-white font-bold text-sm md:text-base px-6 md:px-8 py-3 md:py-4 rounded-[6px] transition-all group"
              >
                <span>Kostenfreie Besichtigung</span>
                <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
              </a>
              <a
                href="tel:+4987143033460"
                className="inline-flex items-center justify-center gap-2 bg-white/10 hover:bg-white/20 text-white font-bold text-sm md:text-base px-6 md:px-8 py-3 md:py-4 rounded-[6px] transition-all"
              >
                0871 430 334 60
              </a>
            </div>
          </div>

          {/* Rechte Seite - Stats */}
          <div className="hidden lg:block">
            <div className="bg-white/5 backdrop-blur-sm rounded-[12px] p-6 xl:p-8 border border-white/10">
              <p className="text-[#109387] font-bold text-xs uppercase tracking-[0.2em] mb-4">
                Unsere Expertise
              </p>

              {/* Stats */}
              <div className="grid grid-cols-3 gap-4">
                <div className="text-center">
                  <p className="text-2xl xl:text-3xl font-bold text-white">8+</p>
                  <p className="text-white/60 text-xs mt-1">Jahre Erfahrung</p>
                </div>
                <div className="text-center">
                  <p className="text-2xl xl:text-3xl font-bold text-white">85k</p>
                  <p className="text-white/60 text-xs mt-1">m² monatlich</p>
                </div>
                <div className="text-center">
                  <p className="text-2xl xl:text-3xl font-bold text-white">2h</p>
                  <p className="text-white/60 text-xs mt-1">Reaktionszeit</p>
                </div>
              </div>

              {/* Services Preview */}
              {branche.services && branche.services.length > 0 && (
                <div className="mt-6 pt-6 border-t border-white/10">
                  <p className="text-white/60 text-xs mb-3">Unsere Leistungen:</p>
                  <div className="flex flex-wrap gap-2">
                    {branche.services.slice(0, 6).map((service, i) => (
                      <span
                        key={i}
                        className="bg-white/10 text-white/80 text-xs font-medium px-3 py-1.5 rounded-full"
                      >
                        {service}
                      </span>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
