'use client'

import { Calendar, Building2, Clock, Award } from 'lucide-react'

const stats = [
  {
    icon: Calendar,
    value: '8+',
    label: 'Jahre Erfahrung',
    sublabel: 'in der Außenflächenreinigung',
  },
  {
    icon: Building2,
    value: '120+',
    label: 'Zufriedene Kunden',
    sublabel: 'in ganz Bayern',
  },
  {
    icon: Clock,
    value: '2h',
    label: 'Reaktionszeit',
    sublabel: 'garantiert werktags',
  },
  {
    icon: Award,
    value: '100%',
    label: 'Zufriedenheit',
    sublabel: 'durch Qualitätskontrollen',
  },
]

export default function TrustBarSection() {
  return (
    <section className="bg-[#012956] py-6 sm:py-8 lg:py-10">
      <div className="w-full max-w-[1800px] mx-auto px-4 sm:px-6 md:px-8 lg:px-12 xl:px-20">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 lg:gap-8">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="flex items-center gap-3 sm:gap-4"
            >
              {/* Icon */}
              <div className="w-10 h-10 sm:w-12 sm:h-12 lg:w-14 lg:h-14 border-2 border-[#109387] rounded-[6px] flex items-center justify-center flex-shrink-0">
                <stat.icon className="w-5 h-5 sm:w-6 sm:h-6 lg:w-7 lg:h-7 text-[#109387]" strokeWidth={1.5} />
              </div>

              {/* Content */}
              <div>
                <div className="text-xl sm:text-2xl lg:text-3xl font-bold text-white leading-none">
                  {stat.value}
                </div>
                <div className="text-white font-semibold text-xs sm:text-sm lg:text-base">
                  {stat.label}
                </div>
                <div className="text-white/60 font-semibold text-[10px] sm:text-xs hidden sm:block">
                  {stat.sublabel}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
