'use client'

import { useState } from 'react'
import { ChevronDown, HelpCircle, MessageCircle } from 'lucide-react'
import { Branche } from '@/lib/branchen-data'

interface BrancheFAQProps {
  branche: Branche
}

export function BrancheFAQ({ branche }: BrancheFAQProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(0)

  if (!branche.faqs || branche.faqs.length === 0) return null

  return (
    <section className="py-16 md:py-24 lg:py-32 bg-white">
      <div className="w-full max-w-[1800px] mx-auto px-6 lg:px-12 xl:px-20">

        <div className="grid lg:grid-cols-5 gap-12 lg:gap-16">

          {/* Left Column - Header */}
          <div className="lg:col-span-2">
            <div className="lg:sticky lg:top-32">
              {/* Section Header */}
              <div className="flex items-center gap-4 mb-4">
                <div className="w-12 h-12 rounded-[8px] bg-[#109387]/10 flex items-center justify-center">
                  <HelpCircle size={24} strokeWidth={1.5} className="text-[#109387]" />
                </div>
                <span className="text-[#109387] font-bold text-sm uppercase tracking-[0.2em]">
                  Häufige Fragen
                </span>
              </div>

              <h2 className="text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold text-[#012956] leading-tight mb-6">
                FAQ zur<br />
                <span className="text-[#109387]">{branche.shortName} Reinigung</span>
              </h2>

              <p className="text-lg text-gray-600 mb-8">
                Hier finden Sie Antworten auf die wichtigsten Fragen. Haben Sie weitere Fragen? Kontaktieren Sie uns!
              </p>

              {/* Contact Box */}
              <div className="bg-gradient-to-br from-[#012956] to-[#012956]/90 rounded-[16px] p-6">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 rounded-full bg-[#109387] flex items-center justify-center">
                    <MessageCircle size={20} className="text-white" />
                  </div>
                  <div>
                    <p className="text-white font-bold">Noch Fragen?</p>
                    <p className="text-white/70 text-sm">Wir helfen gerne weiter</p>
                  </div>
                </div>
                <a
                  href="tel:+4987143033460"
                  className="block w-full text-center bg-white text-[#012956] font-bold py-3 rounded-[6px] hover:bg-gray-100 transition-colors"
                >
                  0871 430 334 60
                </a>
              </div>
            </div>
          </div>

          {/* Right Column - FAQs */}
          <div className="lg:col-span-3 space-y-4">
            {branche.faqs.map((faq, i) => (
              <div
                key={i}
                className={`bg-gray-50 rounded-[12px] overflow-hidden border-2 transition-all duration-300 ${
                  openIndex === i ? 'border-[#109387] shadow-lg' : 'border-transparent hover:border-gray-200'
                }`}
              >
                <button
                  onClick={() => setOpenIndex(openIndex === i ? null : i)}
                  className="w-full flex items-center justify-between gap-4 p-6 text-left"
                >
                  <div className="flex items-center gap-4">
                    <div className={`w-10 h-10 rounded-full flex items-center justify-center transition-colors ${
                      openIndex === i ? 'bg-[#109387] text-white' : 'bg-[#109387]/10 text-[#109387]'
                    }`}>
                      <span className="font-bold">{i + 1}</span>
                    </div>
                    <span className="font-bold text-[#012956] text-lg">
                      {faq.frage}
                    </span>
                  </div>
                  <ChevronDown
                    size={24}
                    className={`text-[#109387] flex-shrink-0 transition-transform ${
                      openIndex === i ? 'rotate-180' : ''
                    }`}
                  />
                </button>
                <div
                  className={`overflow-hidden transition-all duration-500 ${
                    openIndex === i ? 'max-h-96' : 'max-h-0'
                  }`}
                >
                  <div className="px-6 pb-6 pl-20">
                    <p className="text-gray-600 text-lg leading-relaxed">
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
