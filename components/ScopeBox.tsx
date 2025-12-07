'use client'

import { Check, Plus, RefreshCw } from 'lucide-react'

interface ScopeBoxProps {
  inklusive: string[]
  optional: string[]
  intervalle: { name: string; beschreibung: string }[]
  className?: string
}

export default function ScopeBox({
  inklusive,
  optional,
  intervalle,
  className = '',
}: ScopeBoxProps) {
  return (
    <div
      className={`bg-[#f8f9fa] rounded-[8px] p-6 lg:p-8 ${className}`}
      role="region"
      aria-label="Leistungsübersicht: Was ist im Preis enthalten?"
    >
      {/* Header */}
      <h3 className="text-lg lg:text-xl font-bold text-[#012956] mb-6">
        Was ist im Preis enthalten?
      </h3>

      {/* 3-Column Grid */}
      <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
        {/* Inklusive */}
        <div>
          <div className="flex items-center gap-2 mb-4">
            <div className="w-8 h-8 bg-[#109387] rounded-[4px] flex items-center justify-center">
              <Check size={18} className="text-white" strokeWidth={2.5} aria-hidden="true" />
            </div>
            <span className="font-bold text-[#012956] text-sm uppercase tracking-wide">
              Inklusive
            </span>
          </div>
          <ul className="space-y-2" aria-label="Inklusiv-Leistungen">
            {inklusive.map((item) => (
              <li
                key={item}
                className="flex items-start gap-2 text-sm font-semibold text-gray-700"
              >
                <Check
                  size={16}
                  className="text-[#109387] mt-0.5 flex-shrink-0"
                  strokeWidth={2}
                  aria-hidden="true"
                />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Optional / Add-ons */}
        <div>
          <div className="flex items-center gap-2 mb-4">
            <div className="w-8 h-8 bg-[#012956] rounded-[4px] flex items-center justify-center">
              <Plus size={18} className="text-white" strokeWidth={2.5} aria-hidden="true" />
            </div>
            <span className="font-bold text-[#012956] text-sm uppercase tracking-wide">
              Optional buchbar
            </span>
          </div>
          <ul className="space-y-2" aria-label="Optionale Zusatzleistungen">
            {optional.map((item) => (
              <li
                key={item}
                className="flex items-start gap-2 text-sm font-semibold text-gray-700"
              >
                <Plus
                  size={16}
                  className="text-[#012956] mt-0.5 flex-shrink-0"
                  strokeWidth={2}
                  aria-hidden="true"
                />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Intervalle */}
        <div>
          <div className="flex items-center gap-2 mb-4">
            <div className="w-8 h-8 bg-[#109387]/20 rounded-[4px] flex items-center justify-center">
              <RefreshCw size={18} className="text-[#109387]" strokeWidth={2} aria-hidden="true" />
            </div>
            <span className="font-bold text-[#012956] text-sm uppercase tracking-wide">
              Intervalle
            </span>
          </div>
          <ul className="space-y-3" aria-label="Reinigungsintervalle">
            {intervalle.map((item) => (
              <li key={item.name}>
                <span className="block text-sm font-bold text-[#012956]">
                  {item.name}
                </span>
                <span className="block text-xs font-semibold text-gray-500">
                  {item.beschreibung}
                </span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  )
}
