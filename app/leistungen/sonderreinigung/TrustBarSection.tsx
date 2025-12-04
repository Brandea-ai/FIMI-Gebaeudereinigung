'use client'

import { Clock, Building2, Shield, Award } from 'lucide-react'

const stats = [
  {
    icon: Clock,
    value: '24h',
    label: 'Notfall-Service',
    sublabel: '7 Tage die Woche',
  },
  {
    icon: Building2,
    value: '500+',
    label: 'Einsätze',
    sublabel: 'erfolgreich abgeschlossen',
  },
  {
    icon: Shield,
    value: '100%',
    label: 'Diskretion',
    sublabel: 'garantiert',
  },
  {
    icon: Award,
    value: 'ISO',
    label: 'Standards',
    sublabel: 'nach 9001 & 14001',
  },
]

export default function TrustBarSection() {
  return (
    <section className="bg-[#012956] py-6 sm:py-8 lg:py-10 shadow-xl shadow-black/20">
      <div className="w-full max-w-[1800px] mx-auto px-4 sm:px-6 md:px-8 lg:px-12 xl:px-20">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 lg:gap-8">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="flex items-center gap-2 sm:gap-3 lg:gap-4 group"
            >
              <div className="w-10 h-10 sm:w-12 sm:h-12 lg:w-14 lg:h-14 rounded-[6px] bg-[#109387]/20 flex items-center justify-center flex-shrink-0 group-hover:bg-[#109387]/30 transition-colors">
                <stat.icon className="w-5 h-5 sm:w-6 sm:h-6 lg:w-7 lg:h-7 text-[#109387]" strokeWidth={1.5} />
              </div>
              <div>
                <div className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold text-white">
                  {stat.value}
                </div>
                <div className="text-white font-semibold text-xs sm:text-sm lg:text-base">
                  {stat.label}
                </div>
                <div className="text-white/50 text-[10px] sm:text-xs font-semibold hidden sm:block">
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
