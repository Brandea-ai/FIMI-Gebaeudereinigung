'use client'

import Image from 'next/image'
import Link from 'next/link'
import { ArrowRight, Quote, Star } from 'lucide-react'

// Ausgewählte Referenzen für die Startseite
const referenzen = [
  {
    name: 'Thomas M.',
    position: 'Geschäftsführer',
    unternehmen: 'Autohaus Landshut',
    zitat: 'Seit 3 Jahren arbeiten wir mit FIMI zusammen. Die Zuverlässigkeit ist beeindruckend - in all der Zeit kein einziger Ausfall.',
    sterne: 5,
  },
  {
    name: 'Sandra K.',
    position: 'Office Managerin',
    unternehmen: 'IT-Unternehmen München',
    zitat: 'Endlich ein Reinigungsunternehmen das versteht was wir brauchen. Das Team ist immer das gleiche und kennt unsere Räume.',
    sterne: 5,
  },
  {
    name: 'Michael R.',
    position: 'Betriebsleiter',
    unternehmen: 'Produktionsbetrieb Regensburg',
    zitat: 'Die Industriereinigung läuft reibungslos neben unserem Schichtbetrieb. Professionell und flexibel.',
    sterne: 5,
  },
]

export default function ReferenzenContainer() {
  return (
    <section className="bg-white" aria-labelledby="referenzen-heading">
      <div className="w-full max-w-[1800px] mx-auto">

        {/* Two Column Layout: Image Left, Content Right */}
        <div className="grid lg:grid-cols-2">

          {/* Left: Full Height Image - Person mit Blickkontakt */}
          <div className="relative h-[400px] lg:h-auto lg:min-h-[700px]">
            <Image
              src="https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=1200&auto=format&fit=crop"
              alt="Zufriedener Geschäftspartner - FIMI Gebäudereinigung"
              fill
              className="object-cover object-center"
              priority
            />
            {/* Subtle Overlay für bessere Lesbarkeit des Badges */}
            <div className="absolute inset-0 bg-gradient-to-r from-black/20 to-transparent" />

            {/* Trust Badge auf dem Bild */}
            <div className="absolute bottom-8 left-8 bg-white/95 backdrop-blur-sm rounded-[6px] p-4 shadow-lg">
              <div className="flex items-center gap-2 mb-1">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={16} className="fill-[#109387] text-[#109387]" />
                ))}
              </div>
              <p className="text-sm font-bold text-[#012956]">
                Über 85 zufriedene Unternehmen
              </p>
            </div>
          </div>

          {/* Right: Content */}
          <div className="px-6 lg:px-12 xl:px-20 py-16 lg:py-20 flex flex-col justify-center">

            {/* Header */}
            <div className="mb-10">
              <p className="text-sm text-gray-500 font-semibold uppercase tracking-wide mb-3">
                Referenzen
              </p>
              <h2
                id="referenzen-heading"
                className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#109387] leading-[1.1] mb-6"
              >
                Was unsere Kunden sagen
              </h2>
              <p className="text-lg text-gray-700 font-semibold leading-relaxed">
                Vertrauen entsteht durch Ergebnisse. Lesen Sie was Unternehmen
                in Bayern über die Zusammenarbeit mit FIMI berichten.
              </p>
            </div>

            {/* Testimonials */}
            <div className="space-y-6 mb-10">
              {referenzen.map((ref, index) => (
                <article
                  key={index}
                  className="bg-[#f8f9fa] rounded-[6px] p-6 relative"
                >
                  {/* Quote Icon */}
                  <Quote
                    size={24}
                    className="absolute top-4 right-4 text-[#109387]/20"
                    aria-hidden="true"
                  />

                  {/* Zitat */}
                  <p className="text-gray-700 font-semibold leading-relaxed mb-4 pr-8">
                    „{ref.zitat}"
                  </p>

                  {/* Author */}
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="font-bold text-[#012956]">{ref.name}</p>
                      <p className="text-sm text-gray-500 font-semibold">
                        {ref.position}, {ref.unternehmen}
                      </p>
                    </div>
                    <div className="flex gap-0.5">
                      {[...Array(ref.sterne)].map((_, i) => (
                        <Star key={i} size={14} className="fill-[#109387] text-[#109387]" />
                      ))}
                    </div>
                  </div>
                </article>
              ))}
            </div>

            {/* CTAs */}
            <div className="space-y-4">
              <a
                href="#contact-form"
                className="flex items-center justify-center gap-3 bg-[#109387] hover:bg-[#0d7d72] text-white font-bold text-lg px-8 py-4 rounded-[6px] transition-all duration-300 group w-full"
              >
                Kostenfreie Besichtigung
                <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
              </a>
              <Link
                href="/referenzen"
                className="flex items-center justify-center gap-3 border-2 border-[#012956] text-[#012956] font-bold text-lg px-8 py-4 rounded-[6px] hover:bg-[#012956] hover:text-white transition-all w-full"
              >
                Alle Referenzen ansehen
                <ArrowRight size={20} />
              </Link>
            </div>

          </div>
        </div>

      </div>
    </section>
  )
}
