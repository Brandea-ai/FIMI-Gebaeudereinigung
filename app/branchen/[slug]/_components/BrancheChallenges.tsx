import { Branche } from '@/lib/branchen-data'
import { Check, ArrowRight } from 'lucide-react'

interface BrancheChallengesProps {
  branche: Branche
}

export function BrancheChallenges({ branche }: BrancheChallengesProps) {
  if (!branche.detailedChallenges || branche.detailedChallenges.length === 0) return null

  return (
    <section id="herausforderungen" className="py-16 md:py-24 lg:py-32 bg-white">
      <div className="w-full max-w-[1800px] mx-auto px-6 lg:px-12 xl:px-20">

        {/* Section Header - Kein Icon, kein Eyebrow, kein Einzeiler rechts */}
        <h2 className="text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold text-[#012956] leading-tight mb-12 md:mb-16">
          Wir kennen die Anforderungen{' '}
          <span className="text-[#109387]">Ihrer Branche</span>
        </h2>

        {/* Challenges Grid - Mobile 1 Spalte, Tablet 2, Desktop 3 */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
          {branche.detailedChallenges.map((challenge, i) => (
            <div
              key={i}
              className="group bg-gray-50 rounded-[6px] p-5 sm:p-6 md:p-8 border border-gray-100 hover:border-[#109387]/30 hover:shadow-xl transition-all duration-500 hover:-translate-y-1"
            >
              {/* Problem Section */}
              <div className="mb-4 sm:mb-6">
                <p className="text-[#012956]/60 text-xs uppercase tracking-wider font-bold mb-2 sm:mb-3">
                  Herausforderung
                </p>
                <h3 className="text-[#012956] font-bold text-lg sm:text-xl mb-2 sm:mb-3">
                  {challenge.titel}
                </h3>
                <p className="text-gray-600 text-sm sm:text-base leading-relaxed">
                  {challenge.beschreibung}
                </p>
              </div>

              {/* Divider */}
              <div className="flex items-center gap-2 sm:gap-3 my-4 sm:my-6">
                <div className="flex-1 h-px bg-[#109387]/30" />
                <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-[6px] bg-[#109387] flex items-center justify-center">
                  <ArrowRight size={14} className="text-white sm:w-4 sm:h-4" />
                </div>
                <div className="flex-1 h-px bg-[#109387]/30" />
              </div>

              {/* Solution Section */}
              <div>
                <p className="text-[#109387] text-xs uppercase tracking-wider font-bold mb-2 sm:mb-3">
                  Unsere Lösung
                </p>
                <div className="flex items-start gap-2 sm:gap-3">
                  <Check size={18} className="text-[#109387] flex-shrink-0 mt-0.5 sm:w-5 sm:h-5" />
                  <p className="text-gray-700 font-medium text-sm sm:text-base leading-relaxed">
                    {challenge.loesung}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}
