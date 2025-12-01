'use client'

import Link from 'next/link'
import Image from 'next/image'
import { ArrowRight, Building2, Stethoscope, GraduationCap, Banknote, Landmark, ShoppingBag } from 'lucide-react'

// Branchen die besonders von Büroreinigung profitieren
const relevanteBranchen = [
  {
    slug: 'buero-verwaltung',
    name: 'Büro & Verwaltung',
    icon: Building2,
    beschreibung: 'Verwaltungsgebäude, Agenturen, Kanzleien und Coworking Spaces.',
    image: 'https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=800&auto=format&fit=crop',
  },
  {
    slug: 'gesundheitswesen',
    name: 'Gesundheitswesen',
    icon: Stethoscope,
    beschreibung: 'Arztpraxen, Zahnarztpraxen, Physiotherapien und medizinische Einrichtungen.',
    image: 'https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?q=80&w=800&auto=format&fit=crop',
  },
  {
    slug: 'banken-versicherungen',
    name: 'Banken & Versicherungen',
    icon: Banknote,
    beschreibung: 'Bankfilialen, Versicherungsagenturen und Finanzdienstleister.',
    image: 'https://images.unsplash.com/photo-1541354329998-f4d9a9f9297f?q=80&w=800&auto=format&fit=crop',
  },
  {
    slug: 'bildung-schulen',
    name: 'Bildung & Schulen',
    icon: GraduationCap,
    beschreibung: 'Schulen, Universitäten, Bildungszentren und Kindergärten.',
    image: 'https://images.unsplash.com/photo-1580582932707-520aed937b7b?q=80&w=800&auto=format&fit=crop',
  },
  {
    slug: 'oeffentliche-einrichtungen',
    name: 'Öffentliche Einrichtungen',
    icon: Landmark,
    beschreibung: 'Rathäuser, Behörden, Ämter und kulturelle Einrichtungen.',
    image: 'https://images.unsplash.com/photo-1555848962-6e79363ec58f?q=80&w=800&auto=format&fit=crop',
  },
  {
    slug: 'einzelhandel',
    name: 'Einzelhandel',
    icon: ShoppingBag,
    beschreibung: 'Geschäfte, Boutiquen, Fachgeschäfte und Einkaufszentren.',
    image: 'https://images.unsplash.com/photo-1441986300917-64674bd600d8?q=80&w=800&auto=format&fit=crop',
  },
]

export default function CTASection() {
  return (
    <section id="branchen" className="py-20 lg:py-28 bg-[#012956]">
      <div className="w-full max-w-[1800px] mx-auto px-6 lg:px-12 xl:px-20">

        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-[#109387] font-bold text-sm uppercase tracking-wide mb-4 block">
            Branchen
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white leading-tight mb-6">
            Büroreinigung für Ihre Branche
          </h2>
          <p className="text-lg text-white/70 font-semibold leading-relaxed">
            Jede Branche hat eigene Anforderungen. Wir kennen die Besonderheiten und bieten
            maßgeschneiderte Lösungen für Ihr Unternehmen.
          </p>
        </div>

        {/* Branchen Grid - Klickbare Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {relevanteBranchen.map((branche) => {
            const Icon = branche.icon
            return (
              <Link
                key={branche.slug}
                href={`/branchen/${branche.slug}`}
                className="group relative bg-white/5 backdrop-blur-sm rounded-[6px] overflow-hidden hover:bg-white/10 transition-all duration-300"
              >
                {/* Image */}
                <div className="relative h-40 overflow-hidden">
                  <Image
                    src={branche.image}
                    alt={branche.name}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#012956] via-[#012956]/50 to-transparent" />

                  {/* Icon */}
                  <div className="absolute bottom-4 left-4 w-12 h-12 bg-[#109387] rounded-[6px] flex items-center justify-center">
                    <Icon size={24} className="text-white" />
                  </div>
                </div>

                {/* Content */}
                <div className="p-5">
                  <h3 className="text-lg font-bold text-white mb-2 group-hover:text-[#109387] transition-colors">
                    {branche.name}
                  </h3>
                  <p className="text-white/60 font-semibold text-sm leading-relaxed mb-4">
                    {branche.beschreibung}
                  </p>
                  <span className="inline-flex items-center gap-2 text-[#109387] font-bold text-sm group-hover:gap-3 transition-all">
                    Mehr erfahren
                    <ArrowRight size={16} />
                  </span>
                </div>
              </Link>
            )
          })}
        </div>

        {/* Alle Branchen CTA */}
        <div className="bg-white/10 backdrop-blur-sm rounded-[6px] p-8 lg:p-10">
          <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6">
            <div>
              <h3 className="text-xl lg:text-2xl font-bold text-white mb-2">
                Ihre Branche nicht dabei?
              </h3>
              <p className="text-white/70 font-semibold">
                Wir betreuen 12 Branchen in ganz Bayern – mit maßgeschneiderten Reinigungskonzepten.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href="/branchen"
                className="inline-flex items-center justify-center gap-2 bg-[#109387] hover:bg-[#0d7d72] text-white font-bold px-6 py-3 rounded-[6px] transition-colors group"
              >
                Alle 12 Branchen
                <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
              </Link>
              <a
                href="#kontakt"
                className="inline-flex items-center justify-center gap-2 bg-white hover:bg-gray-100 text-[#012956] font-bold px-6 py-3 rounded-[6px] transition-colors"
              >
                Anfrage senden
              </a>
            </div>
          </div>
        </div>

      </div>
    </section>
  )
}
