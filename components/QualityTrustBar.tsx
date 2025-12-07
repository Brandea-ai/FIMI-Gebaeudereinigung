'use client'

import { ClipboardCheck, UserCheck, FileCheck, Clock } from 'lucide-react'

const qualityPoints = [
  {
    icon: ClipboardCheck,
    titel: 'Abnahmeprotokolle',
    beschreibung: 'Dokumentierte Qualitätskontrolle nach jeder Reinigung',
  },
  {
    icon: UserCheck,
    titel: 'Feste Objektleiter',
    beschreibung: 'Ihr persönlicher Ansprechpartner vor Ort',
  },
  {
    icon: FileCheck,
    titel: 'Reinigungschecklisten',
    beschreibung: 'Standardisierte Abläufe für gleichbleibende Qualität',
  },
  {
    icon: Clock,
    titel: '2h Reaktionszeit',
    beschreibung: 'Schnelle Hilfe bei Reklamationen garantiert',
  },
]

interface QualityTrustBarProps {
  className?: string
}

export default function QualityTrustBar({ className = '' }: QualityTrustBarProps) {
  return (
    <section
      className={`py-8 lg:py-12 bg-[#012956] ${className}`}
      aria-label="Qualitätssicherung"
    >
      <div className="w-full max-w-[1800px] mx-auto px-6 lg:px-12 xl:px-20">
        <div
          className="grid grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8"
          role="list"
          aria-label="So sichern wir Qualität"
        >
          {qualityPoints.map((point) => (
            <div
              key={point.titel}
              className="flex flex-col items-center text-center lg:flex-row lg:items-start lg:text-left gap-3 lg:gap-4"
              role="listitem"
            >
              {/* Icon - Türkis */}
              <div className="flex-shrink-0 w-12 h-12 rounded-[6px] flex items-center justify-center bg-[#109387]/20">
                <point.icon
                  size={24}
                  className="text-[#109387]"
                  strokeWidth={1.5}
                  aria-hidden="true"
                />
              </div>

              {/* Text - Weiß */}
              <div>
                <h3 className="font-bold text-sm lg:text-base mb-1 text-white">
                  {point.titel}
                </h3>
                <p className="text-xs lg:text-sm font-semibold leading-snug text-white/70">
                  {point.beschreibung}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
