'use client'

import Image from 'next/image'
import Link from 'next/link'
import { ArrowRight, Calendar } from 'lucide-react'

const artikel = [
  {
    slug: 'winterdienst-bayern-pflichten-haftung-bgh-urteil-2025',
    titel: 'Winterdienst für Unternehmen in Bayern: Pflichten, Haftung und das BGH-Urteil 2025',
    beschreibung: 'Der Winterdienst ist eine essenzielle Verkehrssicherungspflicht für Immobilieneigentümer. Die Nichteinhaltung kann zu empfindlichen Haftungsansprüchen führen.',
    bild: 'https://images.unsplash.com/photo-1516912481808-3406841bd33c?q=80&w=800&auto=format&fit=crop',
    datum: '2023-12-05',
    kategorie: 'Reinigungstipps',
  },
  {
    slug: 'tariflohn-gebaeudereinigung-2025-2026',
    titel: 'Tarifabschluss 2025/2026: Deutliche Lohnsteigerungen in der Gebäudereinigung',
    beschreibung: 'Nach intensiven Verhandlungen haben sich die Tarifparteien auf einen neuen Lohntarifvertrag für die Beschäftigten in der Gebäudereinigung geeinigt.',
    bild: 'https://images.unsplash.com/photo-1554224155-6726b3ff858f?q=80&w=800&auto=format&fit=crop',
    datum: '2025-08-18',
    kategorie: 'Neuigkeiten',
  },
  {
    slug: 'eu-oekodesign-verordnung-espr-reinigung',
    titel: 'Nachhaltigkeit wird Pflicht: Die neue EU-Ökodesign-Verordnung (ESPR)',
    beschreibung: 'Die neue Ökodesign-Verordnung zielt darauf ab, nachhaltige Produkte zur Norm zu machen – mit Folgen für die Gebäudereinigungsbranche.',
    bild: 'https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?q=80&w=800&auto=format&fit=crop',
    datum: '2024-07-15',
    kategorie: 'Neuigkeiten',
  },
]

export default function BlogPreviewSection() {
  return (
    <section id="blog" className="py-12 sm:py-16 lg:py-28 bg-[#f8f9fa]">
      <div className="w-full max-w-[1800px] mx-auto px-4 sm:px-6 md:px-8 lg:px-12 xl:px-20">

        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 mb-8 sm:mb-10 lg:mb-12">
          <div className="max-w-2xl">
            <p className="text-xs sm:text-sm text-[#109387] font-bold uppercase tracking-wide mb-2 sm:mb-3">
              Wissen & Ratgeber
            </p>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#012956] leading-[1.1]">
              Aktuelles zur Außenanlagenpflege
            </h2>
          </div>
          <Link
            href="/neuigkeiten"
            className="inline-flex items-center gap-2 text-[#109387] font-bold hover:gap-3 transition-all text-sm sm:text-base"
          >
            Alle Artikel
            <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5" />
          </Link>
        </div>

        {/* Artikel Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {artikel.map((artikel) => (
            <Link
              key={artikel.slug}
              href={`/neuigkeiten/${artikel.slug}`}
              className="group bg-white rounded-[8px] overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300"
            >
              {/* Bild */}
              <div className="relative h-48 sm:h-52 lg:h-56 overflow-hidden">
                <Image
                  src={artikel.bild}
                  alt={artikel.titel}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute top-3 left-3">
                  <span className="bg-[#109387] text-white text-xs font-bold px-3 py-1 rounded-[4px]">
                    {artikel.kategorie}
                  </span>
                </div>
              </div>

              {/* Content */}
              <div className="p-4 sm:p-5 lg:p-6">
                <div className="flex items-center gap-2 text-gray-500 text-xs sm:text-sm mb-2 sm:mb-3">
                  <Calendar className="w-3.5 h-3.5" />
                  <span className="font-semibold">
                    {new Date(artikel.datum).toLocaleDateString('de-DE', {
                      day: '2-digit',
                      month: 'long',
                      year: 'numeric',
                    })}
                  </span>
                </div>
                <h3 className="text-base sm:text-lg font-bold text-[#012956] mb-2 group-hover:text-[#109387] transition-colors line-clamp-2">
                  {artikel.titel}
                </h3>
                <p className="text-gray-600 font-semibold text-xs sm:text-sm leading-relaxed line-clamp-2">
                  {artikel.beschreibung}
                </p>
                <div className="mt-3 sm:mt-4 flex items-center gap-1.5 text-[#109387] font-bold text-xs sm:text-sm">
                  <span>Weiterlesen</span>
                  <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            </Link>
          ))}
        </div>

      </div>
    </section>
  )
}
