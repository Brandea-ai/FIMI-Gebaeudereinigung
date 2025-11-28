import { Branche } from '@/lib/branchen-data'

interface BrancheProcessProps {
  branche: Branche
}

export function BrancheProcess({ branche }: BrancheProcessProps) {
  if (!branche.processSteps || branche.processSteps.length === 0) return null

  return (
    <section className="py-12 md:py-20 bg-[#012956]">
      <div className="w-full max-w-[1800px] mx-auto px-4 md:px-6 lg:px-12 xl:px-20">
        <div className="text-center mb-8 md:mb-12">
          <p className="text-[#109387] font-bold text-xs md:text-sm uppercase tracking-[0.2em] mb-3">
            So funktioniert&apos;s
          </p>
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-white">
            In 4 Schritten zu Ihrer {branche.shortName} Reinigung
          </h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {branche.processSteps.map((step, i) => (
            <div key={i} className="relative">
              {/* Connector Line (Desktop) */}
              {i < branche.processSteps.length - 1 && (
                <div className="hidden lg:block absolute top-8 left-[calc(50%+2rem)] w-[calc(100%-1rem)] h-[2px] bg-[#109387]/30" />
              )}

              <div className="bg-white/5 backdrop-blur-sm rounded-[12px] p-6 border border-white/10 hover:border-[#109387]/50 transition-colors group">
                {/* Step Number */}
                <div className="w-12 h-12 rounded-full bg-[#109387] flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <span className="text-white font-bold text-lg">{step.schritt}</span>
                </div>

                <h3 className="text-white font-bold text-lg mb-2">
                  {step.titel}
                </h3>
                <p className="text-white/60 text-sm leading-relaxed">
                  {step.beschreibung}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
