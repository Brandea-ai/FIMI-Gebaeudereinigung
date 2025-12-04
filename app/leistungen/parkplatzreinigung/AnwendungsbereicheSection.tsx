'use client'

import Image from 'next/image'
import Link from 'next/link'
import { ArrowRight, ShoppingCart, Building2, Car, Truck, UtensilsCrossed, Home } from 'lucide-react'

const anwendungsbereiche = [
  {
    icon: ShoppingCart,
    titel: 'Supermärkte & Einkaufszentren',
    beschreibung: 'Hohe Frequenz, viel Müll, Einkaufswagen-Spuren. Hier zählt wöchentliche Pflege.',
    branche: 'einzelhandel',
    image: 'https://images.unsplash.com/photo-1534723452862-4c874018d66d?q=80&w=800&auto=format&fit=crop',
  },
  {
    icon: Building2,
    titel: 'Firmenparkplätze & Gewerbehöfe',
    beschreibung: 'Der erste Eindruck für Kunden und Bewerber. Gepflegt = professionell.',
    branche: 'buero-verwaltung',
    image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=800&auto=format&fit=crop',
  },
  {
    icon: Car,
    titel: 'Autohäuser & Werkstätten',
    beschreibung: 'Öl, Kühlmittel, Bremsstaub – hier braucht es Spezialreinigung.',
    branche: 'automotive',
    image: 'https://images.unsplash.com/photo-1549317661-bd32c8ce0db2?q=80&w=800&auto=format&fit=crop',
  },
  {
    icon: Truck,
    titel: 'Logistik & Speditionen',
    beschreibung: 'Große Flächen, schwere Fahrzeuge, Dieselspuren. Unsere Kehrmaschinen schaffen das.',
    branche: 'logistik-lager',
    image: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?q=80&w=800&auto=format&fit=crop',
  },
  {
    icon: UtensilsCrossed,
    titel: 'Hotels & Gastronomie',
    beschreibung: 'Gäste erwarten Perfektion – auch draußen. Diskreter Service zu Ihren Zeiten.',
    branche: 'gastronomie-hotel',
    image: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?q=80&w=800&auto=format&fit=crop',
  },
  {
    icon: Home,
    titel: 'Wohnanlagen & Hausverwaltungen',
    beschreibung: 'Zufriedene Mieter durch gepflegte Außenbereiche. Besonders nach dem Winter wichtig.',
    branche: 'wohnungswirtschaft',
    image: 'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?q=80&w=800&auto=format&fit=crop',
  },
]

export default function AnwendungsbereicheSection() {
  return (
    <section id="anwendungsbereiche" className="py-12 sm:py-16 lg:py-28 bg-[#f8f9fa]">
      <div className="w-full max-w-[1800px] mx-auto px-4 sm:px-6 md:px-8 lg:px-12 xl:px-20">

        {/* Section Header */}
        <div className="max-w-4xl mb-10 sm:mb-14 lg:mb-16">
          <p className="text-xs sm:text-sm text-[#109387] font-bold uppercase tracking-wide mb-2 sm:mb-3">
            Branchen & Einsatzgebiete
          </p>
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-[#012956] leading-[1.1] mb-4 sm:mb-6">
            Parkplatzreinigung für Ihre Branche
          </h2>
          <p className="text-sm sm:text-base lg:text-lg text-gray-700 font-semibold leading-relaxed">
            Jede Branche hat eigene Anforderungen an saubere Parkflächen. Ein Autohaus
            kämpft mit anderen Verschmutzungen als ein Supermarkt. Wir kennen die Unterschiede
            und passen unser Vorgehen entsprechend an.
          </p>
        </div>

        {/* Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
          {anwendungsbereiche.map((bereich, index) => (
            <Link
              key={index}
              href={`/branchen/${bereich.branche}`}
              className="group bg-white rounded-[6px] overflow-hidden shadow-sm hover:shadow-xl transition-all duration-500 border border-gray-100"
            >
              {/* Image */}
              <div className="relative h-[160px] sm:h-[180px] overflow-hidden">
                <Image
                  src={bereich.image}
                  alt={bereich.titel}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-700"
                />
                {/* Dark overlay - default */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#012956]/80 via-[#012956]/30 to-transparent transition-opacity duration-500 group-hover:opacity-0" />
                {/* White overlay - hover */}
                <div className="absolute inset-0 bg-gradient-to-t from-white via-white/95 to-white/70 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                {/* Icon + Title on image */}
                <div className="absolute bottom-4 left-4 right-4 flex items-center gap-3">
                  <div className="w-11 h-11 sm:w-12 sm:h-12 bg-[#109387] group-hover:bg-[#012956] rounded-[6px] flex items-center justify-center flex-shrink-0 transition-colors duration-500 shadow-lg">
                    <bereich.icon className="w-5 h-5 sm:w-6 sm:h-6 text-white" strokeWidth={1.5} />
                  </div>
                  <h3 className="text-white group-hover:text-[#012956] font-bold text-base sm:text-lg leading-tight transition-colors duration-500">
                    {bereich.titel}
                  </h3>
                </div>
              </div>

              {/* Content */}
              <div className="p-4 sm:p-5">
                <p className="text-gray-600 font-semibold text-sm sm:text-[15px] leading-relaxed mb-4">
                  {bereich.beschreibung}
                </p>

                {/* CTA */}
                <div className="flex items-center justify-between pt-3 border-t border-gray-100">
                  <span className="text-[#109387] font-bold text-sm">
                    Branche entdecken
                  </span>
                  <ArrowRight
                    size={18}
                    className="text-[#109387] group-hover:translate-x-1 transition-transform"
                  />
                </div>
              </div>
            </Link>
          ))}
        </div>

        {/* Bottom Link */}
        <div className="mt-10 sm:mt-12 lg:mt-14 text-center">
          <Link
            href="/branchen"
            className="inline-flex items-center gap-2 text-[#109387] font-bold text-base sm:text-lg hover:text-[#012956] transition-colors group"
          >
            Alle 12 Branchen im Überblick
            <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>

      </div>
    </section>
  )
}
