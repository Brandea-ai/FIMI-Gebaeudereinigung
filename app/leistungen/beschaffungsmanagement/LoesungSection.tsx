'use client'

import Image from 'next/image'
import { CheckCircle, ArrowRight } from 'lucide-react'

const benefits = [
  'Sofort verfügbare Kapazität ohne Recruiting',
  'Frisches Know-how und externe Perspektive',
  'Erprobte Methoden und Benchmark-Daten',
  'Fokus auf messbare Ergebnisse',
  'Keine internen politischen Verstrickungen',
  'Wissenstransfer an Ihr Team',
]

export default function LoesungSection() {
  return (
    <section className="py-16 sm:py-20 lg:py-28 bg-[#f8f9fa]">
      <div className="w-full max-w-[1800px] mx-auto px-4 sm:px-6 md:px-8 lg:px-12 xl:px-20">

        <div className="grid lg:grid-cols-2 gap-8 sm:gap-10 lg:gap-16 items-center">

          {/* Left: Image */}
          <div className="relative order-2 lg:order-1">
            <div className="relative aspect-[4/3] rounded-[6px] overflow-hidden shadow-2xl">
              <Image
                src="https://images.unsplash.com/photo-1600880292089-90a7e086ee0c?q=80&w=800&auto=format&fit=crop"
                alt="Professionelle Einkaufsberatung und strategisches Beschaffungsmanagement"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
            {/* Floating Stats Card */}
            <div className="absolute -bottom-6 -right-4 sm:-right-6 bg-[#012956] rounded-[6px] p-4 sm:p-6 shadow-xl">
              <div className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#109387] mb-1">
                5-15%
              </div>
              <div className="text-white font-semibold text-sm sm:text-base">
                Einsparpotenzial
              </div>
              <div className="text-white/80 text-xs sm:text-sm font-semibold">
                direkt im Gewinn
              </div>
            </div>
          </div>

          {/* Right: Content */}
          <div className="order-1 lg:order-2">
            <span className="text-[#109387] font-bold text-xs sm:text-sm uppercase tracking-wide mb-3 sm:mb-4 block">
              Ihre Lösung
            </span>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-bold text-[#109387] mb-4 sm:mb-6">
              Externes Beschaffungsmanagement von FIMI
            </h2>

            <p className="text-base sm:text-lg lg:text-xl text-gray-600 font-semibold leading-relaxed mb-6 sm:mb-8">
              Wir übernehmen definierte Aufgaben in Ihrem Einkauf – projektbasiert oder als
              kontinuierliche Unterstützung. Kein monatelanges Recruiting, keine Einarbeitungszeit.
              Unsere Experten starten sofort und liefern Ergebnisse.
            </p>

            {/* Benefits List */}
            <ul className="space-y-3 sm:space-y-4 mb-8 sm:mb-10">
              {benefits.map((benefit, index) => (
                <li key={index} className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 sm:w-6 sm:h-6 text-[#109387] flex-shrink-0 mt-0.5" aria-hidden="true" />
                  <span className="text-sm sm:text-base lg:text-lg text-gray-700 font-semibold">
                    {benefit}
                  </span>
                </li>
              ))}
            </ul>

            {/* CTA */}
            <a
              href="#kontakt"
              className="inline-flex items-center gap-2 sm:gap-3 bg-[#109387] hover:bg-[#0d7d72] text-white font-bold text-sm sm:text-base lg:text-lg px-5 sm:px-6 lg:px-8 py-3 sm:py-3.5 lg:py-4 rounded-[6px] transition-all duration-300 group shadow-lg hover:shadow-xl"
            >
              Potenziale aufdecken
              <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 group-hover:translate-x-1 transition-transform" aria-hidden="true" />
            </a>
          </div>

        </div>

      </div>
    </section>
  )
}
