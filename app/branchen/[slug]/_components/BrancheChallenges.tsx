import { Branche } from '@/lib/branchen-data'
import { Check, ArrowRight } from 'lucide-react'

interface BrancheChallengesProps {
  branche: Branche
}

export function BrancheChallenges({ branche }: BrancheChallengesProps) {
  if (!branche.detailedChallenges || branche.detailedChallenges.length === 0) return null

  return (
    <section className="py-12 md:py-20 bg-white">
      <div className="w-full max-w-[1800px] mx-auto px-4 md:px-6 lg:px-12 xl:px-20">
        <div className="text-center mb-8 md:mb-12">
          <p className="text-[#109387] font-bold text-xs md:text-sm uppercase tracking-[0.2em] mb-3">
            Ihre Herausforderungen
          </p>
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-[#012956] mb-3">
            Wir kennen die Anforderungen
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Jede Branche hat spezielle Bedürfnisse. Hier zeigen wir, wie wir Ihre typischen Herausforderungen lösen.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {branche.detailedChallenges.map((challenge, i) => (
            <div
              key={i}
              className="group bg-[#f8f9fa] rounded-[12px] p-6 hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
            >
              {/* Problem */}
              <div className="mb-4">
                <p className="text-[#012956]/60 text-xs uppercase tracking-wider font-bold mb-2">
                  Herausforderung
                </p>
                <h3 className="text-[#012956] font-bold text-lg mb-2">
                  {challenge.titel}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {challenge.beschreibung}
                </p>
              </div>

              {/* Divider */}
              <div className="flex items-center gap-2 my-4">
                <div className="flex-1 h-px bg-[#109387]/20" />
                <ArrowRight size={16} className="text-[#109387]" />
                <div className="flex-1 h-px bg-[#109387]/20" />
              </div>

              {/* Lösung */}
              <div>
                <p className="text-[#109387] text-xs uppercase tracking-wider font-bold mb-2">
                  Unsere Lösung
                </p>
                <div className="flex items-start gap-3">
                  <div className="w-5 h-5 rounded-full bg-[#109387]/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <Check size={12} className="text-[#109387]" />
                  </div>
                  <p className="text-gray-700 text-sm leading-relaxed">
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
