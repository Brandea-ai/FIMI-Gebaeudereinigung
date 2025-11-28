import Image from 'next/image'
import { Check } from 'lucide-react'
import { Branche } from '@/lib/branchen-data'

interface BrancheChallengesProps {
  branche: Branche
}

export function BrancheChallenges({ branche }: BrancheChallengesProps) {
  return (
    <section className="py-12 md:py-20 bg-white">
      <div className="w-full max-w-[1800px] mx-auto px-4 md:px-6 lg:px-12 xl:px-20">
        <div className="grid lg:grid-cols-2 gap-8 md:gap-12 lg:gap-20 items-center">
          <div>
            <p className="text-[#109387] font-bold text-xs md:text-sm uppercase tracking-[0.2em] mb-3">
              Ihre Herausforderungen
            </p>
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-[#012956] leading-[1.1] mb-4 md:mb-6">
              Wir kennen die Anforderungen
              <span className="text-[#109387]"> Ihrer Branche</span>
            </h2>
            <p className="text-gray-600 font-medium text-sm md:text-lg leading-relaxed mb-6">
              {branche.description}
            </p>

            <div className="space-y-3">
              {branche.challenges.map((challenge, i) => (
                <div key={i} className="flex items-center gap-3">
                  <Check size={18} strokeWidth={2} className="text-[#109387] flex-shrink-0" />
                  <span className="text-[#012956] font-medium text-sm md:text-base">{challenge}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="relative h-64 md:h-80 lg:h-[400px] rounded-[6px] overflow-hidden">
            <Image
              src={branche.image}
              alt={branche.name}
              fill
              className="object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
