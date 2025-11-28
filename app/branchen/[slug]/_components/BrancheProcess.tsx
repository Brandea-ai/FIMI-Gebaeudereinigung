import { Branche } from '@/lib/branchen-data'
import { ArrowRight } from 'lucide-react'

interface BrancheProcessProps {
  branche: Branche
}

export function BrancheProcess({ branche }: BrancheProcessProps) {
  if (!branche.processSteps || branche.processSteps.length === 0) return null

  return (
    <section className="py-16 md:py-24 lg:py-32 bg-gray-50">
      <div className="w-full max-w-[1800px] mx-auto px-6 lg:px-12 xl:px-20">

        {/* Section Header */}
        <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold text-[#012956] leading-tight mb-8 sm:mb-12 md:mb-16">
          In 4 Schritten zu Ihrer{' '}
          <span className="text-[#109387]">{branche.shortName} Reinigung</span>
        </h2>

        {/* Process Steps - Mobile 1 Spalte, Tablet 2, Desktop 4 */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 lg:gap-8">
          {branche.processSteps.map((step, i) => (
            <div key={i} className="relative group">

              {/* Connector Arrow (Desktop only) */}
              {i < branche.processSteps.length - 1 && (
                <div className="hidden lg:flex absolute top-8 sm:top-10 -right-4 z-10 w-7 h-7 sm:w-8 sm:h-8 bg-white rounded-[6px] items-center justify-center shadow-lg">
                  <ArrowRight size={14} className="text-[#109387] sm:w-4 sm:h-4" />
                </div>
              )}

              {/* Card */}
              <div className="h-full bg-white rounded-[6px] p-5 sm:p-6 md:p-8 border border-gray-100 hover:border-[#109387]/30 hover:shadow-xl transition-all duration-500 group-hover:-translate-y-1">

                {/* Step Number */}
                <div className="w-11 h-11 sm:w-12 sm:h-12 md:w-14 md:h-14 rounded-[6px] bg-[#109387] flex items-center justify-center mb-4 sm:mb-6 group-hover:scale-110 transition-transform shadow-lg">
                  <span className="text-white font-bold text-lg sm:text-xl md:text-2xl">{step.schritt}</span>
                </div>

                <h3 className="text-[#012956] font-bold text-lg sm:text-xl mb-2 sm:mb-3">
                  {step.titel}
                </h3>

                <p className="text-gray-600 text-sm sm:text-base leading-relaxed">
                  {step.beschreibung}
                </p>

              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-8 sm:mt-12 md:mt-16">
          <a
            href="#contact-form"
            className="inline-flex items-center gap-2 sm:gap-3 bg-[#109387] hover:bg-[#0d7d72] text-white font-bold text-sm sm:text-base md:text-lg px-5 sm:px-6 md:px-8 py-3 sm:py-3.5 md:py-4 rounded-[6px] transition-all duration-300 group shadow-lg"
          >
            Jetzt kostenfreie Besichtigung
            <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform sm:w-[18px] sm:h-[18px] md:w-5 md:h-5" />
          </a>
        </div>

      </div>
    </section>
  )
}
