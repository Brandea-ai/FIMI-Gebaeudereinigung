'use client'

import { Clock, Building2, Users, ThumbsUp } from 'lucide-react'

const stats = [
  {
    icon: Clock,
    value: '8+',
    label: 'Jahre Erfahrung',
    description: 'in der Objektbetreuung',
  },
  {
    icon: Building2,
    value: '120+',
    label: 'Betreute Objekte',
    description: 'in ganz Bayern',
  },
  {
    icon: Users,
    value: '2h',
    label: 'Reaktionszeit',
    description: 'garantiert',
  },
  {
    icon: ThumbsUp,
    value: '98%',
    label: 'Zufriedenheit',
    description: 'bei Hausverwaltungen',
  },
]

export default function TrustBarSection() {
  return (
    <section className="py-8 sm:py-10 lg:py-12 bg-white border-b border-gray-100">
      <div className="w-full max-w-[1800px] mx-auto px-4 sm:px-6 md:px-8 lg:px-12 xl:px-20">

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 lg:gap-8">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="flex items-center gap-3 sm:gap-4 p-3 sm:p-4 lg:p-5 bg-[#f8f9fa] rounded-[6px] group hover:bg-[#012956] transition-all duration-300"
            >
              {/* Icon - Outlined Style */}
              <div className="w-10 h-10 sm:w-12 sm:h-12 lg:w-14 lg:h-14 border-2 border-[#109387] group-hover:bg-[#109387] rounded-[6px] flex items-center justify-center flex-shrink-0 transition-all duration-300">
                <stat.icon className="w-5 h-5 sm:w-6 sm:h-6 lg:w-7 lg:h-7 text-[#109387] group-hover:text-white transition-colors duration-300" strokeWidth={1.5} />
              </div>

              {/* Content */}
              <div>
                <div className="text-xl sm:text-2xl lg:text-3xl font-bold text-[#012956] group-hover:text-white transition-colors">
                  {stat.value}
                </div>
                <div className="text-xs sm:text-sm font-bold text-[#012956] group-hover:text-white transition-colors">
                  {stat.label}
                </div>
                <div className="text-[10px] sm:text-xs text-gray-500 group-hover:text-white/70 font-semibold transition-colors hidden sm:block">
                  {stat.description}
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}
