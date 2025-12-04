'use client'

import Image from 'next/image'
import Link from 'next/link'
import { ArrowRight, Car, Factory, Utensils, Pill, Box, Cog } from 'lucide-react'

const branchen = [
  {
    id: 'automotive',
    icon: Car,
    name: 'Automotive & Zulieferer',
    beschreibung: 'CNC-Bearbeitungszentren, Pressen, Lackieranlagen – wir kennen die hohen Standards der Automobilindustrie.',
    beispiele: 'BMW, Audi, Zulieferer in Dingolfing & Ingolstadt',
    slug: 'automotive',
    bild: 'https://images.unsplash.com/photo-1565688534245-05d6b5be184a?q=80&w=600&auto=format&fit=crop',
  },
  {
    id: 'industrie',
    icon: Factory,
    name: 'Industrie & Produktion',
    beschreibung: 'Metallverarbeitung, Kunststoffspritzguss, Maschinenbau – regelmäßige Maschinenreinigung für reibungslose Produktion.',
    beispiele: 'Mittelständische Fertiger in ganz Bayern',
    slug: 'industrie-produktion',
    bild: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80&w=600&auto=format&fit=crop',
  },
  {
    id: 'gastronomie',
    icon: Utensils,
    name: 'Gastronomie & Hotellerie',
    beschreibung: 'Großküchengeräte, Spülmaschinen, Kühlanlagen – hygienische Reinigung nach HACCP-Standards.',
    beispiele: 'Hotels, Restaurants, Kantinen, Catering',
    slug: 'gastronomie-hotel',
    bild: 'https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?q=80&w=600&auto=format&fit=crop',
  },
  {
    id: 'gesundheit',
    icon: Pill,
    name: 'Gesundheitswesen',
    beschreibung: 'Medizinische Geräte, Laborausstattung, Sterilisatoren – Reinigung nach RKI-Richtlinien.',
    beispiele: 'Kliniken, Arztpraxen, Labore, Pflegeeinrichtungen',
    slug: 'gesundheitswesen',
    bild: 'https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?q=80&w=600&auto=format&fit=crop',
  },
  {
    id: 'logistik',
    icon: Box,
    name: 'Logistik & Lager',
    beschreibung: 'Förderbänder, Kommissioniermaschinen, Stapler – Reinigung für reibungslose Logistikprozesse.',
    beispiele: 'Logistikzentren, Lagerhäuser, Distributionszentren',
    slug: 'logistik-lager',
    bild: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?q=80&w=600&auto=format&fit=crop',
  },
  {
    id: 'fitness',
    icon: Cog,
    name: 'Fitness & Sport',
    beschreibung: 'Fitnessgeräte, Laufbänder, Trainingsmaschinen – hygienische Reinigung für Ihre Mitglieder.',
    beispiele: 'Fitnessstudios, Sportvereine, Wellnesscenter',
    slug: 'fitness-sport',
    bild: 'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?q=80&w=600&auto=format&fit=crop',
  },
]

export default function BranchenSection() {
  return (
    <section className="py-12 sm:py-16 lg:py-28 bg-white">
      <div className="w-full max-w-[1800px] mx-auto px-4 sm:px-6 md:px-8 lg:px-12 xl:px-20">

        {/* Header */}
        <div className="max-w-3xl mb-8 sm:mb-12 lg:mb-16">
          <span className="text-[#109387] font-bold text-xs sm:text-sm uppercase tracking-wide mb-3 sm:mb-4 block">
            Branchenkompetenz
          </span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-[#012956] leading-tight mb-4 sm:mb-6">
            Wir kennen Ihre Branche
          </h2>
          <p className="text-base sm:text-lg text-gray-600 font-semibold leading-relaxed">
            Jede Branche hat eigene Anforderungen an Sauberkeit, Dokumentation und Hygiene.
            Unsere Teams sind auf die Besonderheiten Ihrer Industrie spezialisiert.
          </p>
        </div>

        {/* Branchen Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
          {branchen.map((branche) => {
            const Icon = branche.icon
            return (
              <Link
                key={branche.id}
                href={`/branchen/${branche.slug}`}
                className="group bg-[#f8f9fa] rounded-[6px] overflow-hidden hover:shadow-lg transition-all duration-300"
              >
                {/* Image */}
                <div className="relative h-[140px] sm:h-[160px] overflow-hidden">
                  <Image
                    src={branche.bild}
                    alt={`Maschinenreinigung ${branche.name}`}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#012956]/70 to-transparent" />

                  {/* Icon Badge */}
                  <div className="absolute top-3 left-3 w-9 h-9 sm:w-10 sm:h-10 bg-[#109387] rounded-[6px] flex items-center justify-center">
                    <Icon className="w-4 h-4 sm:w-5 sm:h-5 text-white" strokeWidth={1.5} />
                  </div>

                  {/* Title on Image */}
                  <div className="absolute bottom-3 left-3 right-3">
                    <h3 className="text-base sm:text-lg font-bold text-white">
                      {branche.name}
                    </h3>
                  </div>
                </div>

                {/* Content */}
                <div className="p-4 sm:p-5">
                  <p className="text-gray-600 font-semibold text-xs sm:text-sm leading-relaxed mb-3">
                    {branche.beschreibung}
                  </p>
                  <p className="text-[#109387] font-bold text-xs mb-3">
                    z.B. {branche.beispiele}
                  </p>
                  <span className="inline-flex items-center gap-1.5 text-[#012956] font-bold text-xs sm:text-sm group-hover:text-[#109387] transition-colors">
                    Mehr erfahren
                    <ArrowRight className="w-3.5 h-3.5 sm:w-4 sm:h-4 group-hover:translate-x-1 transition-transform" />
                  </span>
                </div>
              </Link>
            )
          })}
        </div>

        {/* Bottom Link */}
        <div className="mt-8 sm:mt-12 text-center">
          <Link
            href="/branchen"
            className="inline-flex items-center gap-2 border-2 border-[#012956] text-[#012956] hover:bg-[#012956] hover:text-white font-bold px-5 sm:px-8 py-3 sm:py-4 rounded-[6px] transition-all text-sm sm:text-base"
          >
            Alle 12 Branchen ansehen
            <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5" />
          </Link>
        </div>

      </div>
    </section>
  )
}
