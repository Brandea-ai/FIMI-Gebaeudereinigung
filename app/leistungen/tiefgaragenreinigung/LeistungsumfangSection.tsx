'use client'

import Image from 'next/image'
import Link from 'next/link'
import { ArrowRight, LayoutGrid, Droplets, Wind, Lightbulb, PaintBucket, Trash2, ShieldCheck, FileText } from 'lucide-react'
import ScopeBox from '@/components/ScopeBox'

const scopeData = {
  inklusive: [
    'Parkflächen maschinell',
    'Fahrgassen & Rampen',
    'Müllbeseitigung',
    'Bodenabläufe reinigen',
    'Dokumentation (Fotos)',
  ],
  optional: [
    'Ölflecken-Entfernung',
    'Wand- & Deckenreinigung',
    'Beleuchtung reinigen',
    'Markierungsreinigung',
    'Graffiti-Entfernung',
  ],
  intervalle: [
    { name: '1x jährlich', beschreibung: 'Grundreinigung nach Winter' },
    { name: 'Quartalsweise', beschreibung: 'Unterhaltsreinigung' },
    { name: 'Nach Bedarf', beschreibung: 'Sonderreinigungen' },
  ],
}

const reinigungsbereiche = [
  {
    icon: LayoutGrid,
    titel: 'Parkflächen & Fahrbahnen',
    beschreibung: 'Komplette Bodenreinigung aller Parkplätze, Fahrgassen und Rampen mit Scheuersaugmaschinen.',
  },
  {
    icon: Droplets,
    titel: 'Ölflecken-Entfernung',
    beschreibung: 'Professionelle Entölung mit Spezialchemie. Auch tief eingedrungene Flecken werden entfernt.',
  },
  {
    icon: Wind,
    titel: 'Wände & Decken',
    beschreibung: 'Entstaubung und Reinigung von Wänden, Decken, Rohrleitungen und Kabeltrassen.',
  },
  {
    icon: Lightbulb,
    titel: 'Beleuchtung',
    beschreibung: 'Reinigung aller Leuchten und Lampen für bessere Sichtverhältnisse und Sicherheit.',
  },
  {
    icon: PaintBucket,
    titel: 'Markierungen',
    beschreibung: 'Reinigung und Freilegung verdreckter Parkplatzmarkierungen und Leitlinien.',
  },
  {
    icon: Trash2,
    titel: 'Abflusssysteme',
    beschreibung: 'Reinigung von Bodenabläufen, Rinnen und Entwässerungssystemen für freien Ablauf.',
  },
  {
    icon: ShieldCheck,
    titel: 'Einfahrten & Rampen',
    beschreibung: 'Gründliche Reinigung der besonders verschmutzten Eingangsbereiche und Zufahrten.',
  },
  {
    icon: FileText,
    titel: 'Dokumentation',
    beschreibung: 'Vorher-Nachher-Fotos und Reinigungsbericht für Ihre WEG-Unterlagen und Abrechnung.',
  },
]

const leistungspakete = [
  {
    name: 'Grundreinigung',
    beschreibung: 'Vollständige Intensivreinigung',
    ideal: '1x jährlich nach dem Winter',
    enthalten: ['Komplette Bodenreinigung', 'Ölflecken-Entfernung', 'Wand- & Deckenreinigung', 'Dokumentation'],
  },
  {
    name: 'Unterhaltsreinigung',
    beschreibung: 'Regelmäßige Pflege',
    ideal: 'Quartalsweise oder monatlich',
    enthalten: ['Bodenreinigung', 'Müllbeseitigung', 'Sichtkontrolle', 'Kleinere Flecken'],
  },
  {
    name: 'Sonderreinigung',
    beschreibung: 'Bei akutem Bedarf',
    ideal: 'Nach Unfällen, vor Besichtigungen',
    enthalten: ['Schnelle Verfügbarkeit', 'Gezielte Reinigung', 'Ölbindung', 'Dokumentation'],
  },
]

export default function LeistungsumfangSection() {
  return (
    <section id="leistungen" className="py-12 sm:py-16 lg:py-28 bg-[#f8f9fa]">
      <div className="w-full max-w-[1800px] mx-auto px-4 sm:px-6 md:px-8 lg:px-12 xl:px-20">

        {/* Section Header */}
        <div className="max-w-4xl mb-10 sm:mb-14 lg:mb-20">
          <p className="text-xs sm:text-sm text-[#109387] font-bold uppercase tracking-wide mb-2 sm:mb-3">
            Was wir reinigen
          </p>
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-[#012956] leading-[1.1] mb-4 sm:mb-6">
            Tiefgaragenreinigung im Detail
          </h2>
          <p className="text-sm sm:text-base lg:text-lg text-gray-700 font-semibold leading-relaxed">
            Wir reinigen alle Bereiche Ihrer Tiefgarage – von den Parkflächen bis zur Deckenbeleuchtung.
            Professionell, gründlich und mit vollständiger Dokumentation für Ihre Unterlagen.
          </p>
        </div>

        {/* Scope Box - Was ist im Preis enthalten? */}
        <ScopeBox
          inklusive={scopeData.inklusive}
          optional={scopeData.optional}
          intervalle={scopeData.intervalle}
          className="mb-12 sm:mb-16 lg:mb-20"
        />

        {/* Two Column: Image + Text */}
        <div className="grid lg:grid-cols-2 gap-8 sm:gap-10 lg:gap-16 items-center mb-12 sm:mb-16 lg:mb-28">
          {/* Image */}
          <div className="relative h-[250px] sm:h-[320px] md:h-[400px] lg:h-[500px] rounded-[6px] lg:rounded-[12px] overflow-hidden">
            <Image
              src="https://images.unsplash.com/photo-1545179605-1296651e9d43?q=80&w=2574&auto=format&fit=crop"
              alt="Professionelle Tiefgaragenreinigung mit Spezialmaschinen"
              fill
              className="object-cover"
            />
          </div>

          {/* Content */}
          <div>
            <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold text-[#012956] mb-4 sm:mb-6">
              Spezialisiert auf Tiefgaragen & Parkhäuser
            </h3>
            <div className="space-y-3 sm:space-y-4 text-sm sm:text-base text-gray-700 font-semibold leading-relaxed">
              <p>
                Tiefgaragen stellen besondere Anforderungen: Enge Platzverhältnisse, schlechte Belüftung
                und hartnäckige Verschmutzungen durch Fahrzeugverkehr. Wir kennen diese Herausforderungen
                und haben die passende Ausrüstung.
              </p>
              <p>
                Unsere Teams arbeiten mit <strong className="text-[#012956]">Scheuersaugmaschinen</strong>,
                <strong className="text-[#012956]"> Hochdruckreinigern</strong> und
                <strong className="text-[#012956]"> Spezialmitteln für Ölentfernung</strong> –
                für ein Ergebnis, das überzeugt.
              </p>
              <p>
                Ob einmalige Grundreinigung oder regelmäßige Pflege – wir passen uns Ihrem Bedarf
                und Budget an.
              </p>
            </div>
            <div className="mt-6 sm:mt-8 flex flex-wrap gap-3 sm:gap-4">
              <Link
                href="/leistungen/parkplatzreinigung"
                className="inline-flex items-center gap-1.5 sm:gap-2 border-2 border-[#109387] text-[#109387] hover:bg-[#109387] hover:text-white font-bold px-4 py-2 rounded-[6px] transition-all text-sm sm:text-base"
              >
                Parkplatzreinigung
                <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5" />
              </Link>
              <Link
                href="/leistungen/facility-management"
                className="inline-flex items-center gap-1.5 sm:gap-2 border-2 border-[#109387] text-[#109387] hover:bg-[#109387] hover:text-white font-bold px-4 py-2 rounded-[6px] transition-all text-sm sm:text-base"
              >
                Facility Management
                <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5" />
              </Link>
            </div>
          </div>
        </div>

        {/* Reinigungsbereiche Grid */}
        <div className="mb-12 sm:mb-16 lg:mb-28">
          <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold text-[#012956] mb-6 sm:mb-8 lg:mb-10">
            Diese Bereiche reinigen wir
          </h3>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5 lg:gap-6">
            {reinigungsbereiche.map((bereich) => {
              const Icon = bereich.icon
              return (
                <div
                  key={bereich.titel}
                  className="group bg-white p-4 sm:p-5 lg:p-6 rounded-[6px] hover:bg-[#012956] transition-all duration-300 shadow-sm"
                >
                  {/* Icon */}
                  <div className="w-10 h-10 sm:w-11 sm:h-11 lg:w-12 lg:h-12 border-2 border-[#109387] group-hover:bg-[#109387] rounded-[6px] flex items-center justify-center mb-3 sm:mb-4 transition-all duration-300">
                    <Icon className="w-5 h-5 sm:w-5.5 sm:h-5.5 lg:w-6 lg:h-6 text-[#109387] group-hover:text-white transition-colors duration-300" strokeWidth={1.5} />
                  </div>
                  <h4 className="text-base sm:text-lg font-bold text-[#012956] group-hover:text-white mb-1.5 sm:mb-2 transition-colors">
                    {bereich.titel}
                  </h4>
                  <p className="text-gray-600 font-semibold text-xs sm:text-sm leading-relaxed group-hover:text-white/80 transition-colors">
                    {bereich.beschreibung}
                  </p>
                </div>
              )
            })}
          </div>
        </div>

        {/* Leistungspakete */}
        <div>
          <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold text-[#012956] mb-6 sm:mb-8 lg:mb-10">
            Unsere Leistungspakete
          </h3>
          <div className="grid md:grid-cols-3 gap-4 sm:gap-6">
            {leistungspakete.map((paket) => (
              <div
                key={paket.name}
                className="bg-white rounded-[6px] p-5 sm:p-6 lg:p-8 shadow-sm hover:shadow-lg transition-all duration-300 border-2 border-transparent hover:border-[#109387]"
              >
                {/* Header */}
                <div className="mb-4 sm:mb-6">
                  <h4 className="text-lg sm:text-xl font-bold text-[#012956] mb-1">
                    {paket.name}
                  </h4>
                  <p className="text-[#109387] font-bold text-sm">
                    {paket.beschreibung}
                  </p>
                  <p className="text-gray-500 font-semibold text-xs sm:text-sm mt-1">
                    {paket.ideal}
                  </p>
                </div>

                {/* Enthalten */}
                <div className="space-y-2 sm:space-y-3">
                  {paket.enthalten.map((item, index) => (
                    <div key={index} className="flex items-center gap-2 sm:gap-3">
                      <div className="w-5 h-5 bg-[#109387]/10 rounded-[4px] flex items-center justify-center flex-shrink-0">
                        <span className="text-[#109387] font-bold text-xs">✓</span>
                      </div>
                      <span className="text-gray-700 font-semibold text-sm">{item}</span>
                    </div>
                  ))}
                </div>

                {/* CTA */}
                <a
                  href="#kontakt"
                  className="mt-6 inline-flex items-center gap-2 text-[#109387] font-bold text-sm hover:text-[#012956] transition-colors group"
                >
                  Angebot anfordern
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </a>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  )
}
