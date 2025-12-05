import { ArrowRight, Phone, CheckCircle } from 'lucide-react'
import { Branche } from '@/lib/branchen-data'

interface BrancheCTAProps {
  branche: Branche
}

export function BrancheCTA({ branche }: BrancheCTAProps) {
  return (
    <section id="branche-cta" className="py-16 md:py-24 lg:py-32 bg-[#012956]">
      <div className="w-full max-w-[1800px] mx-auto px-4 sm:px-6 lg:px-12 xl:px-20">

        <div className="max-w-4xl mx-auto text-center">

          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-white leading-tight sm:leading-[1.08] mb-4 sm:mb-6">
            Kostenfreie{' '}
            <span className="text-[#109387]">Besichtigung</span>
          </h2>

          <p className="text-base sm:text-lg md:text-xl text-white/80 font-medium leading-relaxed mb-6 sm:mb-8 md:mb-10 max-w-2xl mx-auto px-2">
            Wir kommen zu Ihnen, analysieren Ihre Anforderungen und erstellen ein individuelles Angebot – komplett unverbindlich.
          </p>

          {/* Benefits - Mobile vertical, Desktop horizontal */}
          <div className="flex flex-col sm:flex-row sm:flex-wrap justify-center gap-y-2 sm:gap-y-3 gap-x-6 sm:gap-x-8 mb-8 sm:mb-10 md:mb-12">
            <div className="flex items-center justify-center gap-2">
              <CheckCircle size={18} className="text-[#109387] sm:w-5 sm:h-5" />
              <span className="text-white font-semibold text-sm sm:text-base">100% kostenlos</span>
            </div>
            <div className="flex items-center justify-center gap-2">
              <CheckCircle size={18} className="text-[#109387] sm:w-5 sm:h-5" />
              <span className="text-white font-semibold text-sm sm:text-base">Rückmeldung in 24h</span>
            </div>
            <div className="flex items-center justify-center gap-2">
              <CheckCircle size={18} className="text-[#109387] sm:w-5 sm:h-5" />
              <span className="text-white font-semibold text-sm sm:text-base">Unverbindlich</span>
            </div>
          </div>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center">
            <a
              href="tel:+4987143033460"
              className="inline-flex items-center justify-center gap-2 sm:gap-3 bg-[#109387] hover:bg-[#0d7d72] text-white font-bold text-base sm:text-lg px-6 sm:px-8 py-3 sm:py-4 rounded-[6px] transition-all duration-300 group shadow-lg"
            >
              <Phone size={18} className="sm:w-5 sm:h-5" />
              0871 430 334 60
            </a>
            <a
              href="mailto:info@fimi-gebaeudereinigung.de"
              className="inline-flex items-center justify-center gap-2 sm:gap-3 bg-white hover:bg-gray-100 text-[#012956] font-bold text-base sm:text-lg px-6 sm:px-8 py-3 sm:py-4 rounded-[6px] transition-all duration-300 group"
            >
              E-Mail schreiben
              <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform sm:w-5 sm:h-5" />
            </a>
          </div>

        </div>

      </div>
    </section>
  )
}
