'use client'

import { Calendar, Building2, Clock, Award } from 'lucide-react'

const stats = [
  {
    icon: Calendar,
    value: '8+',
    label: 'Jahre Erfahrung',
    sublabel: 'in Bayern',
  },
  {
    icon: Building2,
    value: '120+',
    label: 'Zufriedene Kunden',
    sublabel: 'Unternehmen vertrauen uns',
  },
  {
    icon: Clock,
    value: '2h',
    label: 'Reaktionszeit',
    sublabel: 'Garantiert',
  },
  {
    icon: Award,
    value: '100%',
    label: 'Zufriedenheit',
    sublabel: 'oder nochmal',
  },
]

export default function TrustBarSection() {
  return (
    <section className="bg-[#012956] py-8 lg:py-10">
      <div className="w-full max-w-[1800px] mx-auto px-6 lg:px-12 xl:px-20">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="flex items-center gap-4 group"
            >
              <div className="w-14 h-14 rounded-[6px] bg-[#109387]/20 flex items-center justify-center flex-shrink-0 group-hover:bg-[#109387]/30 transition-colors">
                <stat.icon size={28} className="text-[#109387]" strokeWidth={1.5} />
              </div>
              <div>
                <div className="text-2xl lg:text-3xl font-bold text-white">
                  {stat.value}
                </div>
                <div className="text-white font-semibold text-sm lg:text-base">
                  {stat.label}
                </div>
                <div className="text-white/50 text-xs font-semibold">
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
