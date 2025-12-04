'use client'

import Image from 'next/image'
import Link from 'next/link'
import { ArrowRight, Building2, Home, Briefcase, Users } from 'lucide-react'

const zielgruppen = [
  {
    icon: Building2,
    title: 'Hausverwaltungen',
    subtitle: 'Entlastung für Ihr Tagesgeschäft',
    beschreibung: 'Sie verwalten mehrere Objekte und brauchen einen verlässlichen Partner? Wir übernehmen den kompletten Hausmeisterservice – mit einem Ansprechpartner für alle Liegenschaften.',
    vorteile: [
      'Ein Vertrag, ein Ansprechpartner',
      'Schnelle Vertretung bei Ausfall',
      'Betriebskostenfähige Abrechnung',
      'Digitale Dokumentation',
    ],
    link: '/branchen/wohnungswirtschaft',
    image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=800&auto=format&fit=crop',
  },
  {
    icon: Users,
    title: 'Eigentümergemeinschaften',
    subtitle: 'Zuverlässigkeit für Ihre WEG',
    beschreibung: 'Die Eigentümerversammlung erwartet Qualität. Wir liefern zuverlässigen Hausmeisterservice mit transparenter Dokumentation für Ihre Protokolle.',
    vorteile: [
      'Transparente Leistungsnachweise',
      'Feste Ansprechpartner',
      'Regelmäßige Berichte für WEG',
      'Flexible Vertragsmodelle',
    ],
    link: '/branchen/wohnungswirtschaft',
    image: 'https://images.unsplash.com/photo-1560518883-ce09059eeffa?q=80&w=800&auto=format&fit=crop',
  },
  {
    icon: Home,
    title: 'Wohnungsbaugesellschaften',
    subtitle: 'Skalierbare Objektbetreuung',
    beschreibung: 'Große Portfolios brauchen professionelle Strukturen. Wir betreuen Ihre Wohnanlagen mit eingespielten Teams und einheitlichen Qualitätsstandards.',
    vorteile: [
      'Einheitliche Standards',
      'Skalierbar für viele Objekte',
      'Zentrale Koordination',
      'Notfallbereitschaft 24/7',
    ],
    link: '/branchen/wohnungswirtschaft',
    image: 'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?q=80&w=800&auto=format&fit=crop',
  },
  {
    icon: Briefcase,
    title: 'Gewerbe & Industrie',
    subtitle: 'Technische Kompetenz für Ihr Objekt',
    beschreibung: 'Firmengebäude, Produktionshallen, Bürokomplexe: Wir kümmern uns um die technische Betreuung, damit Sie sich auf Ihr Kerngeschäft konzentrieren können.',
    vorteile: [
      'Handwerklich geschultes Personal',
      'Flexible Einsatzzeiten',
      'Schnittstelle zu Fachfirmen',
      'ISO-konforme Prozesse',
    ],
    link: '/branchen/industrie-produktion',
    image: 'https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=800&auto=format&fit=crop',
  },
]

export default function ZielgruppenSection() {
  return (
    <section id="zielgruppen" className="py-16 sm:py-20 lg:py-28 bg-white">
      <div className="w-full max-w-[1800px] mx-auto px-4 sm:px-6 md:px-8 lg:px-12 xl:px-20">

        {/* Section Header */}
        <div className="text-center max-w-4xl mx-auto mb-12 sm:mb-16 lg:mb-20">
          <span className="text-[#109387] font-bold text-xs sm:text-sm uppercase tracking-wide mb-3 sm:mb-4 block">
            Für wen wir arbeiten
          </span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-[#012956] leading-[1.1] mb-4 sm:mb-6">
            Hausmeisterservice für Ihre Anforderungen
          </h2>
          <p className="text-base sm:text-lg text-gray-600 font-semibold leading-relaxed">
            Ob Hausverwaltung mit 50 Objekten oder Eigentümergemeinschaft mit einer Wohnanlage:
            Wir passen unseren Service an Ihre Bedürfnisse an.
          </p>
        </div>

        {/* Zielgruppen Grid - 2x2 auf Desktop */}
        <div className="grid md:grid-cols-2 gap-6 sm:gap-8">
          {zielgruppen.map((gruppe, index) => {
            const Icon = gruppe.icon
            return (
              <div
                key={index}
                className="group bg-[#f8f9fa] rounded-[6px] overflow-hidden hover:shadow-xl transition-all duration-500"
              >
                {/* Image Header */}
                <div className="relative h-48 sm:h-56 overflow-hidden">
                  <Image
                    src={gruppe.image}
                    alt={gruppe.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#012956]/90 via-[#012956]/40 to-transparent" />

                  {/* Icon + Title on Image */}
                  <div className="absolute bottom-4 left-4 right-4 sm:bottom-6 sm:left-6 sm:right-6">
                    <div className="flex items-center gap-3 mb-2">
                      <div className="w-10 h-10 sm:w-12 sm:h-12 bg-[#109387] rounded-[6px] flex items-center justify-center">
                        <Icon className="w-5 h-5 sm:w-6 sm:h-6 text-white" strokeWidth={1.5} />
                      </div>
                      <div>
                        <h3 className="text-lg sm:text-xl font-bold text-white">
                          {gruppe.title}
                        </h3>
                        <p className="text-white/70 font-semibold text-sm">
                          {gruppe.subtitle}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Content */}
                <div className="p-5 sm:p-6 lg:p-8">
                  <p className="text-gray-600 font-semibold text-sm sm:text-base leading-relaxed mb-4 sm:mb-6">
                    {gruppe.beschreibung}
                  </p>

                  {/* Vorteile */}
                  <ul className="space-y-2 mb-6">
                    {gruppe.vorteile.map((vorteil, idx) => (
                      <li key={idx} className="flex items-center gap-2 text-sm">
                        <span className="w-1.5 h-1.5 bg-[#109387] rounded-full flex-shrink-0" />
                        <span className="text-gray-700 font-semibold">{vorteil}</span>
                      </li>
                    ))}
                  </ul>

                  {/* Link */}
                  <Link
                    href={gruppe.link}
                    className="inline-flex items-center gap-2 text-[#109387] font-bold text-sm group-hover:text-[#012956] transition-colors"
                  >
                    Mehr zur Branche erfahren
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </div>
            )
          })}
        </div>

      </div>
    </section>
  )
}
