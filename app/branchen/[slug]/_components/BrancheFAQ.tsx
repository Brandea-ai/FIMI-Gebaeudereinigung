'use client'

import { useState } from 'react'
import { ChevronDown } from 'lucide-react'
import { Branche } from '@/lib/branchen-data'

interface BrancheFAQProps {
  branche: Branche
}

export function BrancheFAQ({ branche }: BrancheFAQProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(0)

  if (!branche.faqs || branche.faqs.length === 0) return null

  return (
    <section className="py-12 md:py-20 bg-[#f8f9fa]">
      <div className="w-full max-w-[1800px] mx-auto px-4 md:px-6 lg:px-12 xl:px-20">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-8 md:mb-12">
            <p className="text-[#109387] font-bold text-xs md:text-sm uppercase tracking-[0.2em] mb-3">
              Häufige Fragen
            </p>
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-[#012956]">
              FAQ zur {branche.shortName} Reinigung
            </h2>
          </div>

          <div className="space-y-3">
            {branche.faqs.map((faq, i) => (
              <div
                key={i}
                className="bg-white rounded-[8px] overflow-hidden shadow-sm border border-gray-100"
              >
                <button
                  onClick={() => setOpenIndex(openIndex === i ? null : i)}
                  className="w-full flex items-center justify-between gap-4 p-4 md:p-5 text-left hover:bg-gray-50 transition-colors"
                >
                  <span className="font-semibold text-[#012956] text-sm md:text-base">
                    {faq.frage}
                  </span>
                  <ChevronDown
                    size={20}
                    className={`text-[#109387] flex-shrink-0 transition-transform ${
                      openIndex === i ? 'rotate-180' : ''
                    }`}
                  />
                </button>
                <div
                  className={`overflow-hidden transition-all duration-300 ${
                    openIndex === i ? 'max-h-96' : 'max-h-0'
                  }`}
                >
                  <div className="px-4 md:px-5 pb-4 md:pb-5">
                    <p className="text-gray-600 text-sm md:text-base leading-relaxed">
                      {faq.antwort}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
