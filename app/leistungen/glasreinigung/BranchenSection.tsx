'use client'

import Link from 'next/link'
import { ArrowRight, Building2, ShoppingBag, Factory, Landmark, Stethoscope, GraduationCap } from 'lucide-react'

const branchen = [
  {
    icon: Building2,
    name: 'Bürogebäude',
    slug: 'buerogebaeude',
    beschreibung: 'Glasfassaden, Eingangsbereiche und Treppenhäuser für ein professionelles Arbeitsumfeld.',
    highlight: 'Flexible Termine außerhalb der Bürozeiten',
  },
  {
    icon: ShoppingBag,
    name: 'Einzelhandel',
    slug: 'einzelhandel',
    beschreibung: 'Schaufenster und Glasfronten, die Ihre Waren perfekt präsentieren – streifenfrei und einladend.',
    highlight: 'Wöchentliche Reinigung möglich',
  },
  {
    icon: Factory,
    name: 'Industrie',
    slug: 'industrie',
    beschreibung: 'Hallendächer, Oberlichter und industrielle Glasflächen für optimale Lichtverhältnisse.',
    highlight: 'Produktionsneutrale Durchführung',
  },
  {
    icon: Landmark,
    name: 'Hotels & Gastronomie',
    slug: 'hotels-gastronomie',
    beschreibung: 'Glasfassaden, Wintergärten und Panoramafenster für den perfekten ersten Eindruck.',
    highlight: 'Diskreter Service für laufenden Betrieb',
  },
  {
    icon: Stethoscope,
    name: 'Gesundheitswesen',
    slug: 'gesundheitswesen',
    beschreibung: 'Kliniken, Praxen und Pflegeeinrichtungen mit höchsten Hygieneanforderungen.',
    highlight: 'Hygienestandards eingehalten',
  },
  {
    icon: GraduationCap,
    name: 'Bildungseinrichtungen',
    slug: 'bildungseinrichtungen',
    beschreibung: 'Schulen, Universitäten und Kitas mit großen Glasflächen für helle Lernräume.',
    highlight: 'Reinigung in den Ferien möglich',
  },
]

export default function BranchenSection() {
  return (
    <section id="branchen" className="py-12 sm:py-16 lg:py-28 bg-white">
      <div className="w-full max-w-[1800px] mx-auto px-4 sm:px-6 md:px-8 lg:px-12 xl:px-20">

        {/* Header */}
        <div className="max-w-3xl mb-8 sm:mb-12 lg:mb-16">
          <span className="text-[#109387] font-bold text-xs sm:text-sm uppercase tracking-wide mb-3 sm:mb-4 block">
            Branchenerfahrung
          </span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-[#012956] leading-tight mb-4 sm:mb-6">
            Glasreinigung für Ihre Branche
          </h2>
          <p className="text-base sm:text-lg text-gray-600 font-semibold leading-relaxed">
            Jede Branche hat eigene Anforderungen an die Glasreinigung. Wir kennen die Besonderheiten
            und passen unseren Service exakt an Ihre Bedürfnisse an.
          </p>
        </div>

        {/* Branchen Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
          {branchen.map((branche, index) => (
            <Link
              key={index}
              href={`/branchen/${branche.slug}`}
              className="group bg-[#f8f9fa] hover:bg-[#012956] rounded-[6px] p-5 sm:p-6 lg:p-8 transition-all duration-300"
            >
              {/* Icon */}
              <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-[6px] border-2 border-[#109387] group-hover:bg-[#109387] flex items-center justify-center mb-4 sm:mb-5 transition-all duration-300">
                <branche.icon className="w-6 h-6 sm:w-7 sm:h-7 text-[#109387] group-hover:text-white transition-colors duration-300" strokeWidth={1.5} />
              </div>

              {/* Name */}
              <h3 className="text-lg sm:text-xl font-bold text-[#012956] group-hover:text-white mb-2 transition-colors">
                {branche.name}
              </h3>

              {/* Beschreibung */}
              <p className="text-gray-600 group-hover:text-white/70 font-semibold text-sm sm:text-base leading-relaxed mb-4 transition-colors">
                {branche.beschreibung}
              </p>

              {/* Highlight */}
              <div className="flex items-center gap-2 text-[#109387] group-hover:text-[#109387] font-bold text-sm">
                <span className="w-1.5 h-1.5 rounded-full bg-[#109387]" />
                {branche.highlight}
              </div>

              {/* Arrow */}
              <div className="mt-4 flex items-center gap-2 text-[#109387] font-bold text-sm opacity-0 group-hover:opacity-100 transition-opacity">
                Mehr erfahren
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </div>
            </Link>
          ))}
        </div>

        {/* Alle Branchen CTA */}
        <div className="mt-10 sm:mt-12 lg:mt-16 text-center">
          <Link
            href="/branchen"
            className="inline-flex items-center gap-2 bg-[#012956] hover:bg-[#01203d] text-white font-bold px-6 sm:px-8 py-3 sm:py-4 rounded-[6px] transition-colors text-sm sm:text-base group"
          >
            Alle Branchen entdecken
            <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>

      </div>
    </section>
  )
}
