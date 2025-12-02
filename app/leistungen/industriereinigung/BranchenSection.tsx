'use client'

import Image from 'next/image'
import Link from 'next/link'
import { ArrowRight, Car, Utensils, Cog, Pill, Warehouse, Cpu } from 'lucide-react'
import FadeIn from '@/components/FadeIn'

const branchen = [
  {
    id: 'automotive',
    icon: Car,
    name: 'Automotive & Zulieferer',
    slug: 'automotive',
    image: 'https://images.unsplash.com/photo-1565043666747-69f6646db940?q=80&w=800&auto=format&fit=crop',
    herausforderungen: [
      'Ölnebel und Kühlschmierstoffe',
      'Metallspäne auf allen Oberflächen',
      'Strenge Audit-Anforderungen (IATF 16949)',
      'Reinigung ohne Produktionsstillstand',
    ],
    loesungen: 'Wir kennen die Anforderungen von BMW, Audi und deren Zulieferern. Audit-Vorbereitung, Dokumentation nach Automotive-Standards, Reinigung in Schichtpausen.',
  },
  {
    id: 'metall',
    icon: Cog,
    name: 'Metallverarbeitung',
    slug: 'industrie-produktion',
    image: 'https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?q=80&w=800&auto=format&fit=crop',
    herausforderungen: [
      'Späne, Öle und Fette überall',
      'Schwer zugängliche Maschinen',
      'Rutschige Hallenböden',
      'Hohe Staubbelastung',
    ],
    loesungen: 'Industriesauger für Späne, Spezialreiniger für Öle, rutschhemmende Bodenreinigung. Wir arbeiten auch bei laufender Produktion.',
  },
  {
    id: 'lebensmittel',
    icon: Utensils,
    name: 'Lebensmittelproduktion',
    slug: 'gastronomie-hotel',
    image: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80&w=800&auto=format&fit=crop',
    herausforderungen: [
      'HACCP-konforme Reinigung',
      'Lebensmittelkontakt-Flächen',
      'Strenge Hygienevorschriften',
      'Kühlräume und Produktionszonen',
    ],
    loesungen: 'HACCP-geschultes Personal, lebensmittelechte Reinigungsmittel, dokumentierte Reinigungsprozesse für Ihr QM-System.',
  },
  {
    id: 'pharma',
    icon: Pill,
    name: 'Pharma & Medizintechnik',
    slug: 'gesundheitswesen',
    image: 'https://images.unsplash.com/photo-1587854692152-cbe660dbde88?q=80&w=800&auto=format&fit=crop',
    herausforderungen: [
      'Reinraum-Anforderungen',
      'GMP-Standards',
      'Partikelfreie Umgebungen',
      'Dokumentationspflichten',
    ],
    loesungen: 'Reinraum-geschultes Personal, partikelfreie Reinigungsmethoden, lückenlose Dokumentation für Ihre Audits.',
  },
  {
    id: 'logistik',
    icon: Warehouse,
    name: 'Logistik & Lager',
    slug: 'logistik-lager',
    image: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?q=80&w=800&auto=format&fit=crop',
    herausforderungen: [
      'Riesige Hallenflächen',
      'Staub und Verpackungsreste',
      'Hochregale und Gänge',
      '24/7 Betrieb',
    ],
    loesungen: 'Aufsitz-Scheuersaugmaschinen für Großflächen, flexible Einsatzzeiten, Reinigung ohne Störung des Warenumschlags.',
  },
  {
    id: 'elektronik',
    icon: Cpu,
    name: 'Elektronik & High-Tech',
    slug: 'industrie-produktion',
    image: 'https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=800&auto=format&fit=crop',
    herausforderungen: [
      'ESD-sensible Bereiche',
      'Staubfreie Produktion',
      'Empfindliche Komponenten',
      'Spezielle Reinigungsmittel',
    ],
    loesungen: 'ESD-geschultes Personal, antistatische Reinigungsmittel, schonende Verfahren für sensible Elektronik.',
  },
]

export default function BranchenSection() {
  return (
    <section id="branchen" className="py-20 lg:py-28 bg-white" aria-labelledby="branchen-heading">
      <div className="w-full max-w-[1800px] mx-auto px-6 lg:px-12 xl:px-20">

        {/* Section Header */}
        <FadeIn className="text-center mb-16">
          <p className="text-sm text-[#109387] font-semibold uppercase tracking-wide mb-3">
            Branchenexpertise
          </p>
          <h2
            id="branchen-heading"
            className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#012956] leading-[1.1] mb-6"
          >
            Spezialisiert auf Ihre Branche
          </h2>
          <p className="text-lg text-gray-700 font-semibold leading-relaxed max-w-3xl mx-auto">
            Jede Industrie hat eigene Anforderungen. Wir kennen die Vorschriften,
            Standards und typischen Herausforderungen Ihrer Branche.
          </p>
        </FadeIn>

        {/* Branchen Grid */}
        <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-8">
          {branchen.map((branche, index) => {
            const Icon = branche.icon
            return (
              <FadeIn key={branche.id} delay={index * 0.08}>
                <article className="group bg-[#f8f9fa] rounded-[6px] overflow-hidden h-full flex flex-col">
                  {/* Image Header */}
                  <div className="relative h-48 overflow-hidden">
                    <Image
                      src={branche.image}
                      alt={branche.name}
                      fill
                      className="object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#012956]/90 via-[#012956]/40 to-transparent" />

                    {/* Icon Badge */}
                    <div className="absolute bottom-4 left-4">
                      <div className="w-12 h-12 bg-[#109387] rounded-[6px] flex items-center justify-center shadow-lg">
                        <Icon size={24} className="text-white" strokeWidth={1.5} />
                      </div>
                    </div>

                    {/* Title on Image */}
                    <div className="absolute bottom-4 left-20 right-4">
                      <h3 className="text-xl font-bold text-white">
                        {branche.name}
                      </h3>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-6 flex flex-col flex-grow">
                    {/* Herausforderungen */}
                    <div className="mb-4">
                      <h4 className="text-sm text-gray-500 font-semibold uppercase tracking-wide mb-3">
                        Typische Herausforderungen
                      </h4>
                      <ul className="space-y-2">
                        {branche.herausforderungen.map((item, i) => (
                          <li key={i} className="flex items-start gap-2 text-gray-700 font-semibold text-sm">
                            <span className="text-[#109387] mt-0.5">•</span>
                            {item}
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Lösung */}
                    <p className="text-gray-700 font-semibold text-sm leading-relaxed mb-6 flex-grow">
                      {branche.loesungen}
                    </p>

                    {/* Link */}
                    <Link
                      href={`/branchen/${branche.slug}`}
                      className="inline-flex items-center gap-2 text-[#109387] font-bold text-sm hover:text-[#012956] transition-colors group/link"
                    >
                      Mehr zu {branche.name.split(' ')[0]}
                      <ArrowRight size={16} className="group-hover/link:translate-x-1 transition-transform" />
                    </Link>
                  </div>
                </article>
              </FadeIn>
            )
          })}
        </div>

        {/* CTA */}
        <FadeIn className="text-center mt-12">
          <p className="text-gray-700 font-semibold mb-4">
            Ihre Branche nicht dabei? Kein Problem.
          </p>
          <a
            href="#contact-form"
            className="inline-flex items-center gap-3 bg-[#012956] hover:bg-[#01203d] text-white font-bold px-8 py-4 rounded-[6px] transition-all duration-300 group"
          >
            Individuelle Lösung anfragen
            <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
          </a>
        </FadeIn>

      </div>
    </section>
  )
}
