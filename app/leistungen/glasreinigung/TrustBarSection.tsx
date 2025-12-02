'use client'

import { Shield, Clock, Users, Award } from 'lucide-react'

const trustItems = [
  {
    icon: Shield,
    label: 'Versichert & zertifiziert',
  },
  {
    icon: Clock,
    label: '2h Reaktionszeit',
  },
  {
    icon: Users,
    label: 'Feste Teams',
  },
  {
    icon: Award,
    label: 'ISO-Standards',
  },
]

export default function TrustBarSection() {
  return (
    <section className="bg-[#f8f9fa] border-y border-gray-200">
      <div className="w-full max-w-[1800px] mx-auto px-4 sm:px-6 md:px-8 lg:px-12 xl:px-20 py-4 sm:py-6">
        <div className="flex flex-wrap justify-center lg:justify-between items-center gap-4 sm:gap-6 lg:gap-8">
          {trustItems.map((item, index) => (
            <div
              key={index}
              className="flex items-center gap-2 sm:gap-3"
            >
              <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-[6px] bg-[#109387]/10 flex items-center justify-center">
                <item.icon className="w-4 h-4 sm:w-5 sm:h-5 text-[#109387]" />
              </div>
              <span className="text-[#012956] font-bold text-xs sm:text-sm">
                {item.label}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
