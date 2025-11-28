import { Branche } from '@/lib/branchen-data'
import { Check, ArrowRight, AlertTriangle, Lightbulb } from 'lucide-react'

interface BrancheChallengesProps {
  branche: Branche
}

export function BrancheChallenges({ branche }: BrancheChallengesProps) {
  if (!branche.detailedChallenges || branche.detailedChallenges.length === 0) return null

  return (
    <section className="py-16 md:py-24 lg:py-32 bg-white">
      <div className="w-full max-w-[1800px] mx-auto px-6 lg:px-12 xl:px-20">

        {/* Section Header - Premium */}
        <div className="flex items-center gap-4 mb-4">
          <div className="w-12 h-12 rounded-[8px] bg-[#109387]/10 flex items-center justify-center">
            <AlertTriangle size={24} strokeWidth={1.5} className="text-[#109387]" />
          </div>
          <span className="text-[#109387] font-bold text-sm uppercase tracking-[0.2em]">
            Ihre Herausforderungen
          </span>
        </div>

        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-4 mb-12 md:mb-16">
          <h2 className="text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold text-[#012956] leading-tight">
            Wir kennen die Anforderungen<br className="hidden sm:block" />
            <span className="text-[#109387]">Ihrer Branche</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-xl">
            Jede Branche hat spezielle Bedürfnisse – und wir haben die passenden Lösungen.
          </p>
        </div>

        {/* Challenges Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {branche.detailedChallenges.map((challenge, i) => (
            <div
              key={i}
              className="group bg-gradient-to-br from-gray-50 to-white rounded-[16px] p-8 border border-gray-100 hover:border-[#109387]/30 hover:shadow-xl transition-all duration-500 hover:-translate-y-2"
            >
              {/* Problem Section */}
              <div className="mb-6">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-full bg-[#012956]/10 flex items-center justify-center">
                    <AlertTriangle size={18} className="text-[#012956]" />
                  </div>
                  <p className="text-[#012956]/70 text-xs uppercase tracking-wider font-bold">
                    Herausforderung
                  </p>
                </div>
                <h3 className="text-[#012956] font-bold text-xl mb-3">
                  {challenge.titel}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {challenge.beschreibung}
                </p>
              </div>

              {/* Divider with Arrow */}
              <div className="flex items-center gap-3 my-6">
                <div className="flex-1 h-px bg-gradient-to-r from-transparent via-[#109387]/30 to-[#109387]/30" />
                <div className="w-8 h-8 rounded-full bg-[#109387] flex items-center justify-center group-hover:scale-110 transition-transform">
                  <ArrowRight size={16} className="text-white" />
                </div>
                <div className="flex-1 h-px bg-gradient-to-r from-[#109387]/30 via-[#109387]/30 to-transparent" />
              </div>

              {/* Solution Section */}
              <div>
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-full bg-[#109387]/10 flex items-center justify-center">
                    <Lightbulb size={18} className="text-[#109387]" />
                  </div>
                  <p className="text-[#109387] text-xs uppercase tracking-wider font-bold">
                    Unsere Lösung
                  </p>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-[#109387] flex items-center justify-center flex-shrink-0 mt-0.5">
                    <Check size={14} className="text-white" />
                  </div>
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
