import { Branche } from '@/lib/branchen-data'
import { Check, ArrowRight } from 'lucide-react'

interface BrancheChallengesProps {
  branche: Branche
}

export function BrancheChallenges({ branche }: BrancheChallengesProps) {
  if (!branche.detailedChallenges || branche.detailedChallenges.length === 0) return null

  return (
    <section className="py-16 md:py-24 lg:py-32 bg-white">
      <div className="w-full max-w-[1800px] mx-auto px-6 lg:px-12 xl:px-20">

        {/* Section Header - Kein Icon, kein Eyebrow, kein Einzeiler rechts */}
        <h2 className="text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold text-[#012956] leading-tight mb-12 md:mb-16">
          Wir kennen die Anforderungen{' '}
          <span className="text-[#109387]">Ihrer Branche</span>
        </h2>

        {/* Challenges Grid - 6px rounded, weniger Icons */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {branche.detailedChallenges.map((challenge, i) => (
            <div
              key={i}
              className="group bg-gray-50 rounded-[6px] p-8 border border-gray-100 hover:border-[#109387]/30 hover:shadow-xl transition-all duration-500 hover:-translate-y-1"
            >
              {/* Problem Section */}
              <div className="mb-6">
                <p className="text-[#012956]/60 text-xs uppercase tracking-wider font-bold mb-3">
                  Herausforderung
                </p>
                <h3 className="text-[#012956] font-bold text-xl mb-3">
                  {challenge.titel}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {challenge.beschreibung}
                </p>
              </div>

              {/* Divider */}
              <div className="flex items-center gap-3 my-6">
                <div className="flex-1 h-px bg-[#109387]/30" />
                <div className="w-8 h-8 rounded-[6px] bg-[#109387] flex items-center justify-center">
                  <ArrowRight size={16} className="text-white" />
                </div>
                <div className="flex-1 h-px bg-[#109387]/30" />
              </div>

              {/* Solution Section */}
              <div>
                <p className="text-[#109387] text-xs uppercase tracking-wider font-bold mb-3">
                  Unsere Lösung
                </p>
                <div className="flex items-start gap-3">
                  <Check size={20} className="text-[#109387] flex-shrink-0 mt-0.5" />
                  <p className="text-gray-700 font-medium leading-relaxed">
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
