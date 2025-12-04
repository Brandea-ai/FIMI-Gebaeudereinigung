'use client'

import Image from 'next/image'
import Link from 'next/link'
import { ArrowRight, Building2, Factory, Home, Warehouse, Hospital, ShoppingBag } from 'lucide-react'

const anwendungsfelder = [
  {
    icon: Building2,
    titel: 'Neubau Bürogebäude',
    beschreibung: 'Moderne Bürokomplexe mit Glasfassaden, offenen Grundrissen und hochwertigen Bodenbelägen erfordern besondere Sorgfalt bei der Bauschlussreinigung.',
    image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=800&auto=format&fit=crop',
    branchen: ['Büro & Verwaltung', 'Banken & Versicherungen'],
  },
  {
    icon: Home,
    titel: 'Wohnungsbau',
    beschreibung: 'Mehrfamilienhäuser, Eigentumswohnungen und Reihenhäuser – wir sorgen dafür, dass neue Bewohner in ein sauberes Zuhause einziehen können.',
    image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=800&auto=format&fit=crop',
    branchen: ['Wohnungswirtschaft', 'Bauträger'],
  },
  {
    icon: Factory,
    titel: 'Industrie & Produktion',
    beschreibung: 'Produktionshallen, Fertigungsanlagen und Industriegebäude mit speziellen Anforderungen an Sauberkeit und Sicherheit.',
    image: 'https://images.unsplash.com/photo-1581094794329-c8112a89af12?q=80&w=800&auto=format&fit=crop',
    branchen: ['Industrie', 'Logistik'],
  },
  {
    icon: Hospital,
    titel: 'Gesundheitswesen',
    beschreibung: 'Arztpraxen, Kliniken und Pflegeeinrichtungen erfordern höchste Hygienestandards bereits bei der Erstbezugssreinigung.',
    image: 'https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?q=80&w=800&auto=format&fit=crop',
    branchen: ['Gesundheitswesen', 'Pflege'],
  },
  {
    icon: ShoppingBag,
    titel: 'Einzelhandel',
    beschreibung: 'Ladenlokale, Einkaufszentren und Showrooms müssen zur Eröffnung makellos präsentiert werden – dafür sorgen wir.',
    image: 'https://images.unsplash.com/photo-1441986300917-64674bd600d8?q=80&w=800&auto=format&fit=crop',
    branchen: ['Einzelhandel', 'Gastronomie'],
  },
  {
    icon: Warehouse,
    titel: 'Sanierung & Renovierung',
    beschreibung: 'Nicht nur Neubauten – auch nach Sanierungen, Kernsanierungen oder umfangreichen Renovierungen ist eine professionelle Baureinigung unerlässlich.',
    image: 'https://images.unsplash.com/photo-1504307651254-35680f356dfd?q=80&w=800&auto=format&fit=crop',
    branchen: ['Sanierung', 'Renovierung'],
  },
]

export default function AnwendungsfelderSection() {
  return (
    <section id="anwendungsfelder" className="py-12 sm:py-16 lg:py-28 bg-[#f8f9fa]">
      <div className="w-full max-w-[1800px] mx-auto px-4 sm:px-6 md:px-8 lg:px-12 xl:px-20">

        {/* Header */}
        <div className="max-w-4xl mb-10 sm:mb-14 lg:mb-20">
          <p className="text-xs sm:text-sm text-[#109387] font-bold uppercase tracking-wide mb-2 sm:mb-3">
            Anwendungsfelder
          </p>
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-[#012956] leading-[1.1] mb-4 sm:mb-6">
            Baureinigung für jeden Gebäudetyp
          </h2>
          <p className="text-sm sm:text-base lg:text-lg text-gray-700 font-semibold leading-relaxed">
            Ob Bürogebäude, Wohnanlage, Produktionshalle oder Ladenlokal –
            wir passen unsere Baureinigung an die spezifischen Anforderungen
            Ihres Projekts an. Erfahrung aus über 500 Bauprojekten aller Größen.
          </p>
        </div>

        {/* Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
          {anwendungsfelder.map((feld) => {
            const Icon = feld.icon
            return (
              <div
                key={feld.titel}
                className="group bg-white rounded-[6px] overflow-hidden shadow-sm hover:shadow-xl transition-all duration-500"
              >
                {/* Image */}
                <div className="relative h-40 sm:h-48 overflow-hidden">
                  <Image
                    src={feld.image}
                    alt={feld.titel}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  {/* Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#012956]/80 to-transparent" />

                  {/* Icon Badge */}
                  <div className="absolute bottom-4 left-4">
                    <div className="w-12 h-12 bg-[#109387] rounded-[6px] flex items-center justify-center">
                      <Icon className="w-6 h-6 text-white" strokeWidth={1.5} />
                    </div>
                  </div>
                </div>

                {/* Content */}
                <div className="p-4 sm:p-5 lg:p-6">
                  <h3 className="text-lg sm:text-xl font-bold text-[#012956] mb-2">
                    {feld.titel}
                  </h3>
                  <p className="text-gray-600 font-semibold text-sm leading-relaxed mb-4">
                    {feld.beschreibung}
                  </p>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-2">
                    {feld.branchen.map((branche) => (
                      <span
                        key={branche}
                        className="text-xs font-semibold bg-[#f8f9fa] text-[#012956] px-2.5 py-1 rounded-[4px]"
                      >
                        {branche}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            )
          })}
        </div>

        {/* Bottom CTA */}
        <div className="mt-10 sm:mt-12 lg:mt-16 text-center">
          <p className="text-gray-600 font-semibold mb-4">
            Ihr Projekttyp ist nicht dabei?
          </p>
          <Link
            href="#kontakt"
            className="inline-flex items-center gap-2 bg-[#109387] hover:bg-[#0d7d72] text-white font-bold px-6 py-3 rounded-[6px] transition-colors group"
          >
            Individuelles Angebot anfragen
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>

      </div>
    </section>
  )
}
