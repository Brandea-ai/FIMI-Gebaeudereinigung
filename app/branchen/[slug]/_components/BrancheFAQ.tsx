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
    <section id="faq" className="py-16 md:py-24 lg:py-32 bg-white">
      <div className="w-full max-w-[1800px] mx-auto px-6 lg:px-12 xl:px-20">

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 sm:gap-10 lg:gap-16">

          {/* Left Column - Header */}
          <div className="lg:col-span-2">
            <div className="lg:sticky lg:top-32">

              <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold text-[#012956] leading-tight mb-4 sm:mb-6">
                FAQ zur{' '}
                <span className="text-[#109387]">{branche.shortName} Reinigung</span>
              </h2>

              <p className="text-base sm:text-lg text-gray-600 mb-6 sm:mb-8">
                Hier finden Sie Antworten auf die wichtigsten Fragen.
              </p>

              {/* Contact Box - Hidden on very small screens, visible from sm */}
              <div className="hidden sm:block bg-gray-50 rounded-[6px] p-4 sm:p-6 border border-gray-100">
                <p className="text-[#012956] font-bold mb-3 sm:mb-4">Noch Fragen?</p>
                <p className="text-gray-600 text-sm mb-3 sm:mb-4">Wir helfen gerne weiter</p>
                <a
                  href="#contact-form"
                  className="block w-full text-center bg-[#109387] hover:bg-[#0d7d72] text-white font-bold text-sm sm:text-base py-2.5 sm:py-3 rounded-[6px] transition-colors"
                >
                  Kontaktformular
                </a>
                {/* Telefon mit blauem Rahmen */}
                <a
                  href="tel:+4987143033460"
                  className="block w-full text-center text-[#012956] font-bold text-sm sm:text-base py-2.5 sm:py-3 mt-2 sm:mt-3 rounded-[6px] border-2 border-[#012956] hover:bg-[#012956] hover:text-white transition-colors"
                >
                  0871 430 334 60
                </a>
              </div>
            </div>
          </div>

          {/* Right Column - FAQs */}
          <div className="lg:col-span-3 space-y-3 sm:space-y-4">
            {branche.faqs.map((faq, i) => (
              <div
                key={i}
                className={`bg-gray-50 rounded-[6px] overflow-hidden border-2 transition-all duration-300 ${
                  openIndex === i ? 'border-[#109387] shadow-lg' : 'border-transparent hover:border-gray-200'
                }`}
              >
                <button
                  onClick={() => setOpenIndex(openIndex === i ? null : i)}
                  className="w-full flex items-center justify-between gap-2 sm:gap-4 p-4 sm:p-6 text-left"
                >
                  <div className="flex items-center gap-2 sm:gap-4">
                    {/* Nummer steril */}
                    <span className={`font-bold text-base sm:text-lg min-w-[20px] sm:min-w-[24px] transition-colors ${
                      openIndex === i ? 'text-[#109387]' : 'text-gray-400'
                    }`}>
                      {i + 1}.
                    </span>
                    <span className="font-bold text-[#012956] text-sm sm:text-base md:text-lg leading-tight">
                      {faq.frage}
                    </span>
                  </div>
                  <ChevronDown
                    size={20}
                    className={`text-[#109387] flex-shrink-0 transition-transform sm:w-6 sm:h-6 ${
                      openIndex === i ? 'rotate-180' : ''
                    }`}
                  />
                </button>
                <div
                  className={`overflow-hidden transition-all duration-500 ${
                    openIndex === i ? 'max-h-[500px]' : 'max-h-0'
                  }`}
                >
                  <div className="px-4 sm:px-6 pb-4 sm:pb-6 pl-10 sm:pl-16">
                    <p className="text-gray-600 text-sm sm:text-base md:text-lg leading-relaxed">
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
