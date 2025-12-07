'use client'

import Image from 'next/image'
import { Droplets, Flame, Home, Bird, Heart, ShieldCheck, ArrowRight, CheckCircle } from 'lucide-react'

const leistungen = [
  {
    icon: Droplets,
    titel: 'Wasserschadenreinigung',
    beschreibung: 'Schnelle Hilfe nach Rohrbruch, Überschwemmung oder Löschwasser. Wir pumpen ab, trocknen und verhindern Folgeschäden wie Schimmel.',
    leistungen: [
      'Notfall-Abpumpen',
      'Technische Trocknung',
      'Estrich-Trocknung',
      'Schimmelprävention',
      'Möbelrestaurierung',
    ],
    image: 'https://images.unsplash.com/photo-1584622650111-993a426fbf0a?q=80&w=800&auto=format&fit=crop',
  },
  {
    icon: Flame,
    titel: 'Brandschadenreinigung',
    beschreibung: 'Professionelle Rußentfernung und Geruchsbeseitigung nach Brand. Wir arbeiten mit modernen Verfahren wie Trockeneis und Ozon.',
    leistungen: [
      'Rußentfernung',
      'Geruchsneutralisation',
      'Ozonbehandlung',
      'Inventar-Reinigung',
      'Versicherungs-Doku',
    ],
    image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=800&auto=format&fit=crop',
  },
  {
    icon: Home,
    titel: 'Messie-Wohnung Reinigung',
    beschreibung: 'Entrümpelung und Tiefenreinigung verwahrloser Wohnungen. Diskret, gründlich und mit Geruchsbeseitigung.',
    leistungen: [
      'Entrümpelung',
      'Tiefenreinigung',
      'Schädlingsbekämpfung',
      'Geruchsbeseitigung',
      'Renovierungsvorbereitung',
    ],
    image: 'https://images.unsplash.com/photo-1581578731548-c64695cc6952?q=80&w=800&auto=format&fit=crop',
  },
  {
    icon: Heart,
    titel: 'Tatortreinigung',
    beschreibung: 'Diskrete und einfühlsame Reinigung nach Todesfällen. Staatlich geprüfte Desinfektoren mit höchster Verschwiegenheit.',
    leistungen: [
      'Leichenfundort-Reinigung',
      'Blut & Körperflüssigkeiten',
      'Desinfektion',
      'Geruchsbeseitigung',
      'Absolute Diskretion',
    ],
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=800&auto=format&fit=crop',
  },
  {
    icon: Bird,
    titel: 'Taubenkotentfernung',
    beschreibung: 'Fachgerechte Entfernung von Taubenkot mit Schutzausrüstung und Desinfektion. Gesundheitsgefährdende Stoffe sicher entsorgt.',
    leistungen: [
      'Kotentfernung',
      'Desinfektion',
      'Fassadenschutz',
      'Sondermüll-Entsorgung',
      'Präventionsberatung',
    ],
    image: 'https://images.unsplash.com/photo-1555169062-013468b47731?q=80&w=800&auto=format&fit=crop',
  },
  {
    icon: ShieldCheck,
    titel: 'Desinfektionsreinigung',
    beschreibung: 'Professionelle Desinfektion bei Schädlingsbefall, nach Krankheiten oder für Hygienebereiche. Mit staatlich geprüften Desinfektoren.',
    leistungen: [
      'Flächendesinfektion',
      'Raumdesinfektion',
      'Nach Schädlingsbefall',
      'Hygienebereiche',
      'Zertifizierte Verfahren',
    ],
    image: 'https://images.unsplash.com/photo-1584515933487-779824d29309?q=80&w=800&auto=format&fit=crop',
  },
]

export default function LeistungskategorienSection() {
  return (
    <section id="leistungen" className="py-12 sm:py-16 lg:py-28 bg-white">
      <div className="w-full max-w-[1800px] mx-auto px-4 sm:px-6 md:px-8 lg:px-12 xl:px-20">

        {/* Header */}
        <div className="max-w-4xl mb-10 sm:mb-14 lg:mb-20">
          <p className="text-xs sm:text-sm text-[#109387] font-bold uppercase tracking-wide mb-2 sm:mb-3">
            Unsere Sonderreinigungen
          </p>
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-[#012956] leading-[1.1] mb-4 sm:mb-6">
            Spezialisierte Reinigung für jeden Fall
          </h2>
          <p className="text-sm sm:text-base lg:text-lg text-gray-700 font-semibold leading-relaxed">
            Sonderreinigung erfordert Fachwissen, spezielle Ausrüstung und erfahrene Teams.
            Wir sind auf diese anspruchsvollen Einsätze spezialisiert und liefern Ergebnisse,
            wo andere aufgeben.
          </p>
        </div>

        {/* Leistungen Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {leistungen.map((leistung, index) => {
            const Icon = leistung.icon
            return (
              <a
                key={index}
                href="#kontakt"
                className="group bg-[#f8f9fa] rounded-[6px] overflow-hidden hover:shadow-xl transition-all duration-300 block cursor-pointer"
              >
                {/* Image Header */}
                <div className="relative h-[140px] sm:h-[160px] overflow-hidden">
                  <Image
                    src={leistung.image}
                    alt={leistung.titel}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#012956]/90 via-[#012956]/50 to-transparent" />

                  {/* Icon + Titel */}
                  <div className="absolute bottom-3 left-4 right-4 sm:bottom-4 flex items-center gap-3">
                    <div className="w-10 h-10 sm:w-12 sm:h-12 border-2 border-[#109387] bg-[#109387] rounded-[6px] flex items-center justify-center flex-shrink-0">
                      <Icon className="w-5 h-5 sm:w-6 sm:h-6 text-white" strokeWidth={1.5} />
                    </div>
                    <h3 className="text-lg sm:text-xl font-bold text-white">
                      {leistung.titel}
                    </h3>
                  </div>
                </div>

                {/* Content */}
                <div className="p-4 sm:p-5 lg:p-6">
                  {/* Beschreibung */}
                  <p className="text-gray-600 font-semibold text-sm leading-relaxed mb-4">
                    {leistung.beschreibung}
                  </p>

                  {/* Leistungsliste */}
                  <ul className="space-y-2 mb-5">
                    {leistung.leistungen.map((item, idx) => (
                      <li key={idx} className="flex items-center gap-2">
                        <CheckCircle className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-[#109387] flex-shrink-0" />
                        <span className="text-gray-700 font-semibold text-xs sm:text-sm">{item}</span>
                      </li>
                    ))}
                  </ul>

                  {/* CTA */}
                  <span
                    className="inline-flex items-center gap-2 text-[#109387] font-bold text-sm group-hover:gap-3 transition-all"
                  >
                    Anfragen
                    <ArrowRight className="w-4 h-4" />
                  </span>
                </div>
              </a>
            )
          })}
        </div>

      </div>
    </section>
  )
}
