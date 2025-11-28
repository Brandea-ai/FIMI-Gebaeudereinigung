import { Check } from 'lucide-react'
import { Branche } from '@/lib/branchen-data'

interface BrancheServicesProps {
  branche: Branche
}

export function BrancheServices({ branche }: BrancheServicesProps) {
  return (
    <section className="py-12 md:py-20 bg-[#f8f9fa]">
      <div className="w-full max-w-[1800px] mx-auto px-4 md:px-6 lg:px-12 xl:px-20">
        <div className="text-center mb-8 md:mb-12">
          <p className="text-[#109387] font-bold text-xs md:text-sm uppercase tracking-[0.2em] mb-3">
            Passende Leistungen
          </p>
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-[#012956] mb-3">
            Unsere Services für {branche.shortName}
          </h2>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {branche.services.map((service, i) => (
            <div
              key={i}
              className="bg-white p-4 md:p-6 rounded-[6px] text-center shadow-sm border border-gray-100"
            >
              <Check size={24} strokeWidth={1.5} className="text-[#109387] mx-auto mb-2" />
              <p className="text-[#012956] font-semibold text-sm md:text-base">{service}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
