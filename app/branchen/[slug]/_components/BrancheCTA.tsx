import { ArrowRight } from 'lucide-react'
import { Branche } from '@/lib/branchen-data'

interface BrancheCTAProps {
  branche: Branche
}

export function BrancheCTA({ branche }: BrancheCTAProps) {
  return (
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
  )
}
