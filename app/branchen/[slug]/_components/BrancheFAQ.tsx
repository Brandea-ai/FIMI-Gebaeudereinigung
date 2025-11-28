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
    <section className="py-16 md:py-24 lg:py-32 bg-white">
      <div className="w-full max-w-[1800px] mx-auto px-6 lg:px-12 xl:px-20">

        <div className="grid lg:grid-cols-5 gap-12 lg:gap-16">

          {/* Left Column - Header */}
          <div className="lg:col-span-2">
            <div className="lg:sticky lg:top-32">

              <h2 className="text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold text-[#012956] leading-tight mb-6">
                FAQ zur{' '}
                <span className="text-[#109387]">{branche.shortName} Reinigung</span>
              </h2>

              <p className="text-lg text-gray-600 mb-8">
                Hier finden Sie Antworten auf die wichtigsten Fragen.
              </p>

              {/* Contact Box - Kontaktformular Button grün mit weißer Schrift */}
              <div className="bg-gray-50 rounded-[6px] p-6 border border-gray-100">
                <p className="text-[#012956] font-bold mb-4">Noch Fragen?</p>
                <p className="text-gray-600 text-sm mb-4">Wir helfen gerne weiter</p>
                <a
                  href="#contact-form"
                  className="block w-full text-center bg-[#109387] hover:bg-[#0d7d72] text-white font-bold py-3 rounded-[6px] transition-colors"
                >
                  Kontaktformular
                </a>
                <a
                  href="tel:+4987143033460"
                  className="block w-full text-center text-[#012956] font-bold py-3 mt-2 hover:text-[#109387] transition-colors"
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
                className={`bg-gray-50 rounded-[6px] overflow-hidden border-2 transition-all duration-300 ${
                  openIndex === i ? 'border-[#109387] shadow-lg' : 'border-transparent hover:border-gray-200'
                }`}
              >
                <button
                  onClick={() => setOpenIndex(openIndex === i ? null : i)}
                  className="w-full flex items-center justify-between gap-4 p-6 text-left"
                >
                  <div className="flex items-center gap-4">
                    {/* Nummer steril ohne Kreis */}
                    <span className={`font-bold text-lg min-w-[24px] transition-colors ${
                      openIndex === i ? 'text-[#109387]' : 'text-gray-400'
                    }`}>
                      {i + 1}.
                    </span>
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
                  <div className="px-6 pb-6 pl-16">
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
