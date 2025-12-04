'use client'

import Image from 'next/image'
import Link from 'next/link'
import { ArrowRight, Truck, Droplets, CircleDot, Candy, Leaf, Trash2, CornerDownRight, PaintBucket } from 'lucide-react'

const leistungen = [
  {
    icon: Truck,
    titel: 'Maschinelle Kehrreinigung',
    beschreibung: 'Aufsitz-Kehrmaschinen für große Flächen. Schnell, gründlich, kostengünstig.',
  },
  {
    icon: Droplets,
    titel: 'Nassreinigung & Hochdruck',
    beschreibung: 'Heißwasser bis 155°C und 300 Bar Druck. Gegen hartnäckigste Verschmutzungen.',
  },
  {
    icon: CircleDot,
    titel: 'Ölfleckenentfernung',
    beschreibung: 'Spezialreiniger und Hitze lösen selbst eingetrocknete Öl- und Fettflecken.',
  },
  {
    icon: Candy,
    titel: 'Kaugummientfernung',
    beschreibung: 'Dampf und Heißwasser ohne Chemie. Umweltschonend und rückstandsfrei.',
  },
  {
    icon: Leaf,
    titel: 'Laubentfernung',
    beschreibung: 'Saisonale Intensivpflege im Herbst. Bevor Rutschgefahr entsteht.',
  },
  {
    icon: Trash2,
    titel: 'Müllentsorgung',
    beschreibung: 'Regelmäßiges Einsammeln von Abfall. Inklusive Papierkörbe und Aschenbecher.',
  },
  {
    icon: CornerDownRight,
    titel: 'Bordstein- & Randreinigung',
    beschreibung: 'Die Details machen den Unterschied. Ecken, Kanten, Grünstreifen.',
  },
  {
    icon: PaintBucket,
    titel: 'Markierungspflege',
    beschreibung: 'Schonende Reinigung, die Parkplatzlinien wieder sichtbar macht.',
  },
]

const intervalle = [
  {
    name: 'Wöchentlich',
    ideal: 'Supermärkte, Einkaufszentren',
    beschreibung: 'Hohe Frequenz, viel Publikumsverkehr',
  },
  {
    name: '14-tägig',
    ideal: 'Firmenparkplätze, Gewerbehöfe',
    beschreibung: 'Der goldene Mittelweg für die meisten',
  },
  {
    name: 'Monatlich',
    ideal: 'Wohnanlagen, kleinere Betriebe',
    beschreibung: 'Kosteneffizient bei geringerer Nutzung',
  },
  {
    name: 'Saisonal',
    ideal: 'Frühjahr & Herbst Intensiv',
    beschreibung: 'Nach Winter oder Laubfall',
  },
]

export default function LeistungsumfangSection() {
  return (
    <section id="leistungen" className="py-12 sm:py-16 lg:py-28 bg-white">
      <div className="w-full max-w-[1800px] mx-auto px-4 sm:px-6 md:px-8 lg:px-12 xl:px-20">

        {/* Section Header */}
        <div className="max-w-4xl mb-10 sm:mb-14 lg:mb-20">
          <p className="text-xs sm:text-sm text-[#109387] font-bold uppercase tracking-wide mb-2 sm:mb-3">
            Unser Leistungsumfang
          </p>
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-[#012956] leading-[1.1] mb-4 sm:mb-6">
            Parkplatzreinigung im Detail
          </h2>
          <p className="text-sm sm:text-base lg:text-lg text-gray-700 font-semibold leading-relaxed">
            Professionelle Parkplatzreinigung ist mehr als nur Kehren. Von der maschinellen
            Großflächenreinigung bis zur Detailarbeit an Bordsteinen – wir decken alles ab,
            was Ihre Außenflächen sauber und gepflegt hält.
          </p>
        </div>

        {/* Two Column Layout */}
        <div className="grid lg:grid-cols-2 gap-8 sm:gap-10 lg:gap-16 items-start mb-12 sm:mb-16 lg:mb-28">
          {/* Image */}
          <div className="relative h-[280px] sm:h-[350px] md:h-[420px] lg:h-[520px] rounded-[6px] lg:rounded-[12px] overflow-hidden">
            <Image
              src="https://images.unsplash.com/photo-1558618666-fcd25c85cd64?q=80&w=2574&auto=format&fit=crop"
              alt="Professionelle Kehrmaschine bei der Parkplatzreinigung"
              fill
              className="object-cover"
            />
          </div>

          {/* Leistungen Grid */}
          <div>
            <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold text-[#012956] mb-6 sm:mb-8">
              8 Leistungen aus einer Hand
            </h3>
            <div className="grid sm:grid-cols-2 gap-3 sm:gap-4">
              {leistungen.map((leistung, index) => (
                <div
                  key={index}
                  className="group bg-[#f8f9fa] hover:bg-[#012956] p-4 sm:p-5 rounded-[6px] transition-all duration-300"
                >
                  {/* Icon */}
                  <div className="w-10 h-10 sm:w-11 sm:h-11 border-2 border-[#109387] group-hover:bg-[#109387] rounded-[6px] flex items-center justify-center mb-3 transition-all duration-300">
                    <leistung.icon className="w-5 h-5 sm:w-5.5 sm:h-5.5 text-[#109387] group-hover:text-white transition-colors duration-300" strokeWidth={1.5} />
                  </div>
                  <h4 className="text-sm sm:text-base font-bold text-[#012956] group-hover:text-white mb-1.5 transition-colors">
                    {leistung.titel}
                  </h4>
                  <p className="text-gray-600 group-hover:text-white/80 font-semibold text-xs sm:text-sm leading-relaxed transition-colors">
                    {leistung.beschreibung}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Intervalle Section */}
        <div className="bg-[#f8f9fa] rounded-[6px] lg:rounded-[12px] p-6 sm:p-8 lg:p-12">
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            {/* Content */}
            <div>
              <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold text-[#012956] mb-4 sm:mb-6">
                Reinigungsintervalle nach Ihrem Bedarf
              </h3>
              <p className="text-sm sm:text-base text-gray-700 font-semibold leading-relaxed mb-6 sm:mb-8">
                Nicht jeder Parkplatz braucht wöchentliche Reinigung. Gemeinsam finden wir
                den Rhythmus, der zu Ihrer Nutzung und Ihrem Budget passt. Flexibel anpassbar,
                wenn sich Ihre Anforderungen ändern.
              </p>

              <div className="space-y-3 sm:space-y-4">
                {intervalle.map((intervall, index) => (
                  <div
                    key={index}
                    className="flex items-start gap-3 sm:gap-4 bg-white rounded-[6px] p-3 sm:p-4 group hover:bg-[#012956] transition-all duration-300"
                  >
                    <div className="w-9 h-9 sm:w-10 sm:h-10 bg-[#109387] rounded-[6px] flex items-center justify-center flex-shrink-0">
                      <span className="text-white font-bold text-xs sm:text-sm">
                        {intervall.name.charAt(0)}
                      </span>
                    </div>
                    <div>
                      <h4 className="font-bold text-sm sm:text-base text-[#012956] group-hover:text-white transition-colors">
                        {intervall.name}
                      </h4>
                      <p className="text-gray-600 group-hover:text-white/80 font-semibold text-xs sm:text-sm transition-colors">
                        {intervall.beschreibung}
                      </p>
                      <p className="text-[#109387] font-semibold text-xs sm:text-sm mt-1">
                        Ideal für: {intervall.ideal}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Image */}
            <div className="relative h-[280px] sm:h-[350px] lg:h-[400px] rounded-[6px] overflow-hidden order-first lg:order-last">
              <Image
                src="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?q=80&w=2670&auto=format&fit=crop"
                alt="Planung der Reinigungsintervalle"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>

        {/* Verwandte Leistungen */}
        <div className="mt-10 sm:mt-12 lg:mt-16 pt-10 sm:pt-12 border-t border-gray-200">
          <h3 className="text-lg sm:text-xl font-bold text-[#012956] mb-4 sm:mb-6">
            Ergänzende Leistungen für Ihre Außenflächen
          </h3>
          <div className="flex flex-wrap gap-3 sm:gap-4">
            <Link
              href="/leistungen/tiefgaragenreinigung"
              className="inline-flex items-center gap-2 text-[#109387] font-bold hover:text-[#012956] transition-colors text-sm sm:text-base"
            >
              Tiefgaragenreinigung
              <ArrowRight className="w-4 h-4" />
            </Link>
            <Link
              href="/leistungen/winterdienst"
              className="inline-flex items-center gap-2 text-[#109387] font-bold hover:text-[#012956] transition-colors text-sm sm:text-base"
            >
              Winterdienst
              <ArrowRight className="w-4 h-4" />
            </Link>
            <Link
              href="/leistungen/hausmeisterservice"
              className="inline-flex items-center gap-2 text-[#109387] font-bold hover:text-[#012956] transition-colors text-sm sm:text-base"
            >
              Hausmeisterservice
              <ArrowRight className="w-4 h-4" />
            </Link>
            <Link
              href="/leistungen/gruenpflege"
              className="inline-flex items-center gap-2 text-[#109387] font-bold hover:text-[#012956] transition-colors text-sm sm:text-base"
            >
              Grünpflege
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>

      </div>
    </section>
  )
}
