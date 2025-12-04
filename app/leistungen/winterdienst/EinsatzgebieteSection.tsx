'use client'

import Link from 'next/link'
import Image from 'next/image'
import { ArrowRight, Building2, Factory, ShoppingBag, Stethoscope, Warehouse, Home } from 'lucide-react'

const einsatzgebiete = [
  {
    icon: Building2,
    title: 'Gewerbe & Büro',
    description: 'Firmenparkplätze, Zufahrten, Eingangsbereiche. Räumung vor Arbeitsbeginn.',
    features: ['Räumung ab 5:30 Uhr', 'Parkplätze & Stellflächen', 'Eingangsbereiche'],
    image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=800&auto=format&fit=crop',
    href: '/branchen/buero-verwaltung',
  },
  {
    icon: Home,
    title: 'Hausverwaltung & WEG',
    description: 'Mehrfamilienhäuser, Wohnanlagen, Tiefgaragenzufahrten. Dokumentation für Verwalter.',
    features: ['Mehrere Objekte', 'Dokumentation', 'Verkehrssicherung'],
    image: 'https://images.unsplash.com/photo-1560518883-ce09059eeffa?q=80&w=800&auto=format&fit=crop',
    href: '/branchen/wohnungswirtschaft',
  },
  {
    icon: ShoppingBag,
    title: 'Einzelhandel & Center',
    description: 'Einkaufszentren, Supermärkte, Geschäfte. Sichere Kundenwege zu allen Öffnungszeiten.',
    features: ['Kundenparkplätze', 'Einkaufswagen-Bereiche', 'Wochenend-Service'],
    image: 'https://images.unsplash.com/photo-1441986300917-64674bd600d8?q=80&w=800&auto=format&fit=crop',
    href: '/branchen/einzelhandel',
  },
  {
    icon: Factory,
    title: 'Industrie & Produktion',
    description: 'Werksgelände, Laderampen, LKW-Zufahrten. Räumung im Schichtbetrieb möglich.',
    features: ['Großflächen', 'Schichtbetrieb', 'Laderampen'],
    image: 'https://images.unsplash.com/photo-1565688534245-05d6b5be184a?q=80&w=800&auto=format&fit=crop',
    href: '/branchen/industrie-produktion',
  },
  {
    icon: Stethoscope,
    title: 'Gesundheitswesen',
    description: 'Kliniken, Arztpraxen, Pflegeheime. 24/7-Verfügbarkeit für sensible Bereiche.',
    features: ['24/7 Bereitschaft', 'Notaufnahmen', 'Barrierefreiheit'],
    image: 'https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?q=80&w=800&auto=format&fit=crop',
    href: '/branchen/gesundheitswesen',
  },
  {
    icon: Warehouse,
    title: 'Logistik & Lager',
    description: 'Logistikzentren, Lagerhallen, Speditionsgelände. LKW-Zufahrten immer befahrbar.',
    features: ['LKW-Zufahrten', 'Verladezonen', 'Großflächen'],
    image: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?q=80&w=800&auto=format&fit=crop',
    href: '/branchen/logistik-lager',
  },
]

export default function EinsatzgebieteSection() {
  return (
    <section id="einsatzgebiete" className="py-12 sm:py-16 lg:py-28 bg-white">
      <div className="w-full max-w-[1800px] mx-auto px-4 sm:px-6 md:px-8 lg:px-12 xl:px-20">

        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-12 lg:mb-16">
          <span className="text-sm text-gray-500 font-semibold uppercase tracking-wide mb-3 block">
            Einsatzgebiete
          </span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-[#012956] leading-tight mb-4 sm:mb-6">
            Winterdienst für jede Branche
          </h2>
          <p className="text-base sm:text-lg text-gray-600 font-semibold leading-relaxed">
            Von der Hausverwaltung bis zum Industriegelände – wir kennen die spezifischen
            Anforderungen Ihrer Branche und passen unseren Service entsprechend an.
          </p>
        </div>

        {/* Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
          {einsatzgebiete.map((gebiet, index) => (
            <Link
              key={index}
              href={gebiet.href}
              className="group bg-[#f8f9fa] hover:bg-white rounded-[8px] overflow-hidden transition-all duration-300 hover:shadow-xl border border-transparent hover:border-gray-100"
            >
              {/* Image */}
              <div className="relative h-40 sm:h-48 overflow-hidden">
                <Image
                  src={gebiet.image}
                  alt={gebiet.title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#012956]/80 to-transparent" />
                <div className="absolute bottom-3 sm:bottom-4 left-3 sm:left-4 right-3 sm:right-4">
                  <div className="flex items-center gap-2 sm:gap-3">
                    <div className="w-9 h-9 sm:w-10 sm:h-10 bg-[#109387] rounded-[6px] flex items-center justify-center">
                      <gebiet.icon className="w-4 h-4 sm:w-5 sm:h-5 text-white" strokeWidth={1.5} />
                    </div>
                    <h3 className="text-base sm:text-lg font-bold text-white">
                      {gebiet.title}
                    </h3>
                  </div>
                </div>
              </div>

              {/* Content */}
              <div className="p-4 sm:p-5 lg:p-6">
                <p className="text-gray-600 font-semibold text-sm sm:text-base leading-relaxed mb-3 sm:mb-4">
                  {gebiet.description}
                </p>

                {/* Features */}
                <div className="flex flex-wrap gap-1.5 sm:gap-2 mb-3 sm:mb-4">
                  {gebiet.features.map((feature, featureIndex) => (
                    <span
                      key={featureIndex}
                      className="bg-[#109387]/10 text-[#109387] font-semibold text-[10px] sm:text-xs px-2 sm:px-3 py-1 sm:py-1.5 rounded-[4px]"
                    >
                      {feature}
                    </span>
                  ))}
                </div>

                {/* Link */}
                <div className="flex items-center gap-2 text-[#109387] font-bold text-sm sm:text-base group-hover:gap-3 transition-all">
                  <span>Branche entdecken</span>
                  <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5" />
                </div>
              </div>
            </Link>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="mt-10 sm:mt-12 lg:mt-16 text-center">
          <p className="text-gray-500 font-semibold text-sm sm:text-base mb-4 sm:mb-6">
            Ihre Branche ist nicht dabei? Wir finden eine Lösung.
          </p>
          <Link
            href="/branchen"
            className="inline-flex items-center justify-center gap-2 sm:gap-3 bg-[#012956] hover:bg-[#011d3d] text-white font-bold text-sm sm:text-base lg:text-lg px-6 sm:px-8 py-3 sm:py-4 rounded-[6px] transition-all duration-300 group"
          >
            Alle 12 Branchen ansehen
            <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>

      </div>
    </section>
  )
}
