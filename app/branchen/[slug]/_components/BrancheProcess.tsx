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
        <h2 className="text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold text-[#012956] leading-tight mb-12 md:mb-16">
          In 4 Schritten zu Ihrer{' '}
          <span className="text-[#109387]">{branche.shortName} Reinigung</span>
        </h2>

        {/* Process Steps - alle 6px */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {branche.processSteps.map((step, i) => (
            <div key={i} className="relative group">

              {/* Connector Arrow (Desktop) - 6px */}
              {i < branche.processSteps.length - 1 && (
                <div className="hidden lg:flex absolute top-10 -right-4 z-10 w-8 h-8 bg-white rounded-[6px] items-center justify-center shadow-lg">
                  <ArrowRight size={16} className="text-[#109387]" />
                </div>
              )}

              {/* Card - 6px */}
              <div className="h-full bg-white rounded-[6px] p-8 border border-gray-100 hover:border-[#109387]/30 hover:shadow-xl transition-all duration-500 group-hover:-translate-y-1">

                {/* Step Number - 6px */}
                <div className="w-14 h-14 rounded-[6px] bg-[#109387] flex items-center justify-center mb-6 group-hover:scale-110 transition-transform shadow-lg">
                  <span className="text-white font-bold text-2xl">{step.schritt}</span>
                </div>

                <h3 className="text-[#012956] font-bold text-xl mb-3">
                  {step.titel}
                </h3>

                <p className="text-gray-600 leading-relaxed">
                  {step.beschreibung}
                </p>

              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-12 md:mt-16">
          <a
            href="#contact-form"
            className="inline-flex items-center gap-3 bg-[#109387] hover:bg-[#0d7d72] text-white font-bold text-lg px-8 py-4 rounded-[6px] transition-all duration-300 group shadow-lg"
          >
            Jetzt kostenfreie Besichtigung vereinbaren
            <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
          </a>
        </div>

      </div>
    </section>
  )
}
