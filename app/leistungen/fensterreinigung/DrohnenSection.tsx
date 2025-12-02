'use client'

import Image from 'next/image'
import { CheckCircle } from 'lucide-react'

const vorteile = [
  'Glasdächer und Lichtkuppeln ohne Gerüst',
  'Hallendächer und Industrieverglasungen',
  'Photovoltaik-Anlagen schonend reinigen',
  'Denkmalgeschützte Gebäude ohne Berührung',
  'Schnelle Inspektion schwer zugänglicher Stellen',
]

export default function DrohnenSection() {
  return (
    <section className="py-12 sm:py-16 lg:py-24 bg-[#f8f9fa]">
      <div className="w-full max-w-[1800px] mx-auto px-4 sm:px-6 md:px-8 lg:px-12 xl:px-20">

        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">

          {/* Bild */}
          <div className="relative rounded-[6px] overflow-hidden order-2 lg:order-1">
            <Image
              src="https://images.unsplash.com/photo-1473968512647-3e447244af8f?q=80&w=1600&auto=format&fit=crop"
              alt="Drohnen-Reinigung für schwer erreichbare Glasflächen"
              width={1600}
              height={1100}
              className="w-full h-auto"
            />
            {/* Badge */}
            <div className="absolute top-4 left-4 bg-[#109387] text-white font-bold text-xs sm:text-sm px-3 py-1.5 rounded-[4px]">
              Innovation
            </div>
          </div>

          {/* Content */}
          <div className="order-1 lg:order-2">
            <span className="text-[#109387] font-bold text-xs sm:text-sm uppercase tracking-wide mb-3 sm:mb-4 block">
              Zukunftstechnologie
            </span>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-bold text-[#012956] leading-tight mb-4 sm:mb-6">
              Fensterreinigung mit Drohnen
            </h2>
            <p className="text-gray-600 font-semibold text-sm sm:text-base lg:text-lg leading-relaxed mb-6 sm:mb-8">
              Manche Stellen sind selbst mit Hubsteigern kaum zu erreichen. Für diese Fälle
              setzen wir auf Drohnen-Technologie: Präzise, schonend und effizient – auch an
              den schwierigsten Stellen.
            </p>

            {/* Vorteile */}
            <ul className="space-y-3 sm:space-y-4">
              {vorteile.map((vorteil, index) => (
                <li key={index} className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 sm:w-6 sm:h-6 text-[#109387] flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700 font-semibold text-sm sm:text-base">
                    {vorteil}
                  </span>
                </li>
              ))}
            </ul>

            {/* CTA */}
            <a
              href="#kontakt"
              className="mt-6 sm:mt-8 inline-flex items-center gap-2 bg-[#012956] hover:bg-[#01203d] text-white font-bold px-5 sm:px-6 py-3 rounded-[6px] transition-colors text-sm sm:text-base"
            >
              Drohnen-Reinigung anfragen
            </a>
          </div>

        </div>

      </div>
    </section>
  )
}
