'use client'

import { Factory, Clock, Users, Award } from 'lucide-react'

const stats = [
  {
    icon: Factory,
    value: '8+',
    label: 'Jahre Erfahrung',
    sublabel: 'in der Industriereinigung',
  },
  {
    icon: Clock,
    value: '2h',
    label: 'Reaktionszeit',
    sublabel: 'bei Notfällen garantiert',
  },
  {
    icon: Users,
    value: '120+',
    label: 'Industriekunden',
    sublabel: 'in Bayern betreut',
  },
  {
    icon: Award,
    value: '100%',
    label: 'Zufriedenheit',
    sublabel: 'oder wir kommen nochmal',
  },
]

export default function TrustBarSection() {
  return (
    <section className="bg-[#109387] py-8 lg:py-10" aria-label="Unsere Leistungszahlen">
      <div className="w-full max-w-[1800px] mx-auto px-6 lg:px-12 xl:px-20">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {stats.map((stat, index) => {
            const Icon = stat.icon
            return (
              <div
                key={index}
                className="text-center lg:text-left"
              >
                <div className="flex flex-col lg:flex-row items-center lg:items-start gap-3">
                  <div className="w-12 h-12 bg-white/20 rounded-[6px] flex items-center justify-center flex-shrink-0">
                    <Icon size={24} className="text-white" strokeWidth={1.5} />
                  </div>
                  <div>
                    <div className="text-3xl lg:text-4xl font-bold text-white">
                      {stat.value}
                    </div>
                    <div className="text-white font-bold text-sm lg:text-base">
                      {stat.label}
                    </div>
                    <div className="text-white/70 font-semibold text-xs lg:text-sm hidden lg:block">
                      {stat.sublabel}
                    </div>
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
