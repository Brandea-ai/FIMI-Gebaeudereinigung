'use client'

import Image from 'next/image'
import Link from 'next/link'
import { ArrowRight, Building2, Store, Warehouse, Home, Sun, Layers, Frame, Sparkles } from 'lucide-react'

const reinigungsbereiche = [
  {
    icon: Building2,
    titel: 'Bürofenster',
    beschreibung: 'Innen- und Außenreinigung aller Bürofenster. Für klare Sicht und helle Arbeitsplätze.',
  },
  {
    icon: Store,
    titel: 'Schaufenster',
    beschreibung: 'Streifenfreie Schaufenster für Einzelhandel und Gastronomie. Der erste Eindruck zählt.',
  },
  {
    icon: Warehouse,
    titel: 'Glasfassaden',
    beschreibung: 'Große Glasfronten und Fassaden mit Hebebühne oder Teleskoptechnik – sicher und gründlich.',
  },
  {
    icon: Home,
    titel: 'Wintergärten',
    beschreibung: 'Glasdächer, Seitenscheiben und Rahmen. Komplettservice für Ihren Wintergarten.',
  },
  {
    icon: Sun,
    titel: 'Dachfenster & Oberlichter',
    beschreibung: 'Schwer erreichbare Dachfenster und Lichtbänder – wir kommen sicher überall hin.',
  },
  {
    icon: Layers,
    titel: 'Treppenhausfenster',
    beschreibung: 'Alle Etagen, alle Fenster. Für Wohnanlagen, Bürogebäude und öffentliche Einrichtungen.',
  },
  {
    icon: Frame,
    titel: 'Rahmen & Falze',
    beschreibung: 'Fensterrahmen, Fensterbänke und Falze inklusive. Bei uns bekommen Sie den Komplett-Service.',
  },
  {
    icon: Sparkles,
    titel: 'Sonderreinigung',
    beschreibung: 'Hartnäckige Verschmutzungen, Baustaub, Aufkleber-Reste – wir finden für alles eine Lösung.',
  },
]

const intervalle = [
  { name: 'Monatlich', beschreibung: 'Für stark frequentierte Bereiche', ideal: 'Einzelhandel, Gastronomie' },
  { name: 'Vierteljährlich', beschreibung: 'Der Standard für Bürogebäude', ideal: 'Büros, Praxen, Kanzleien' },
  { name: 'Halbjährlich', beschreibung: 'Für weniger beanspruchte Flächen', ideal: 'Wohnanlagen, Verwaltung' },
  { name: 'Nach Bedarf', beschreibung: 'Einmalig oder flexibel', ideal: 'Events, Baureinigung, Sonderfälle' },
]

export default function LeistungsumfangSection() {
  return (
    <section id="leistungen" className="py-12 sm:py-16 lg:py-28 bg-white">
      <div className="w-full max-w-[1800px] mx-auto px-4 sm:px-6 md:px-8 lg:px-12 xl:px-20">

        {/* Section Header */}
        <div className="max-w-4xl mb-10 sm:mb-14 lg:mb-20">
          <p className="text-xs sm:text-sm text-[#109387] font-bold uppercase tracking-wide mb-2 sm:mb-3">
            Was wir reinigen
          </p>
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-[#012956] leading-[1.1] mb-4 sm:mb-6">
            Fensterreinigung im Detail
          </h2>
          <p className="text-sm sm:text-base lg:text-lg text-gray-700 font-semibold leading-relaxed">
            Professionelle Fensterreinigung geht weit über einfaches Putzen hinaus.
            Mit Osmose-Technik, Teleskopstangen und geschultem Personal sorgen wir
            für streifenfreie Ergebnisse – vom Erdgeschoss bis zur Glasfassade.
          </p>
        </div>

        {/* Two Column: Image + Text */}
        <div className="grid lg:grid-cols-2 gap-8 sm:gap-10 lg:gap-16 items-center mb-12 sm:mb-16 lg:mb-28">
          {/* Image */}
          <div className="relative h-[250px] sm:h-[320px] md:h-[400px] lg:h-[500px] rounded-[6px] lg:rounded-[12px] overflow-hidden">
            <Image
              src="https://images.unsplash.com/photo-1581578731548-c64695cc6952?q=80&w=2574&auto=format&fit=crop"
              alt="Professionelle Fensterreinigung mit Osmose-Technik"
              fill
              className="object-cover"
            />
          </div>

          {/* Content */}
          <div>
            <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold text-[#012956] mb-4 sm:mb-6">
              Warum professionelle Fensterreinigung?
            </h3>
            <div className="space-y-3 sm:space-y-4 text-sm sm:text-base text-gray-700 font-semibold leading-relaxed">
              <p>
                Fenster selbst putzen? Für die hohen geht's nicht. Die Schaufenster brauchen
                Profi-Equipment. Und wenn es dann doch Schlieren gibt, ärgert man sich doppelt.
              </p>
              <p>
                Mit Osmose-Wasser arbeiten wir mineralfrei – keine Kalkflecken, keine Rückstände.
                Teleskopstangen erreichen bis zu 18 Meter Höhe ohne Leiter. Und unsere Teams
                sind geschult für alle Herausforderungen.
              </p>
              <p>
                <strong className="text-[#012956]">Das Ergebnis:</strong> Kristallklare Scheiben,
                maximales Tageslicht und ein gepflegter Eindruck – ohne dass Sie sich darum
                kümmern müssen.
              </p>
            </div>
            <div className="mt-6 sm:mt-8 flex flex-wrap gap-3 sm:gap-4">
              <Link
                href="/leistungen/glasreinigung"
                className="inline-flex items-center gap-1.5 sm:gap-2 text-[#109387] font-bold hover:text-[#012956] transition-colors text-sm sm:text-base"
              >
                Glasreinigung
                <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5" />
              </Link>
              <Link
                href="/leistungen/fassadenreinigung"
                className="inline-flex items-center gap-1.5 sm:gap-2 text-[#109387] font-bold hover:text-[#012956] transition-colors text-sm sm:text-base"
              >
                Fassadenreinigung
                <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5" />
              </Link>
              <Link
                href="/leistungen/baureinigung"
                className="inline-flex items-center gap-1.5 sm:gap-2 text-[#109387] font-bold hover:text-[#012956] transition-colors text-sm sm:text-base"
              >
                Baureinigung
                <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5" />
              </Link>
            </div>
          </div>
        </div>

        {/* Reinigungsbereiche Grid - OUTLINED ICONS */}
        <div className="mb-12 sm:mb-16 lg:mb-28">
          <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold text-[#012956] mb-6 sm:mb-8 lg:mb-10">
            Diese Glasflächen reinigen wir
          </h3>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5 lg:gap-6">
            {reinigungsbereiche.map((bereich) => {
              const Icon = bereich.icon
              return (
                <div
                  key={bereich.titel}
                  className="group bg-[#f8f9fa] p-4 sm:p-5 lg:p-6 rounded-[6px] hover:bg-[#012956] transition-all duration-300"
                >
                  {/* Icon - Outlined Style */}
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

        {/* Intervalle Section - OUTLINED ICONS */}
        <div className="grid lg:grid-cols-2 gap-8 sm:gap-10 lg:gap-16 items-center">
          {/* Content */}
          <div>
            <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold text-[#012956] mb-4 sm:mb-6">
              Reinigungsintervalle nach Ihrem Bedarf
            </h3>
            <p className="text-sm sm:text-base text-gray-700 font-semibold leading-relaxed mb-5 sm:mb-8">
              Wie oft sollten Fenster gereinigt werden? Das hängt von der Nutzung ab.
              Schaufenster im Einzelhandel brauchen öfter Aufmerksamkeit als
              Bürofenster im dritten Stock.
            </p>
            <div className="space-y-3 sm:space-y-4">
              {intervalle.map((intervall) => (
                <div
                  key={intervall.name}
                  className="flex items-start gap-3 sm:gap-4 p-3 sm:p-4 bg-[#f8f9fa] rounded-[6px] group hover:bg-[#012956] transition-all duration-300"
                >
                  {/* Icon - Dauerhaft gefüllt */}
                  <div className="w-9 h-9 sm:w-10 sm:h-10 bg-[#109387] rounded-[6px] flex items-center justify-center flex-shrink-0">
                    <span className="text-white font-bold text-xs sm:text-sm">
                      {intervall.name.charAt(0)}
                    </span>
                  </div>
                  <div>
                    <h4 className="font-bold text-sm sm:text-base text-[#012956] group-hover:text-white transition-colors">{intervall.name}</h4>
                    <p className="text-gray-600 group-hover:text-white/80 font-semibold text-xs sm:text-sm transition-colors">{intervall.beschreibung}</p>
                    <p className="text-[#109387] font-semibold text-xs sm:text-sm mt-1">Ideal für: {intervall.ideal}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Image */}
          <div className="relative h-[250px] sm:h-[320px] md:h-[400px] lg:h-[500px] rounded-[6px] lg:rounded-[12px] overflow-hidden order-first lg:order-last">
            <Image
              src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?q=80&w=2670&auto=format&fit=crop"
              alt="Besprechung Reinigungsplan – Team bei der Arbeit"
              fill
              className="object-cover"
            />
          </div>
        </div>

      </div>
    </section>
  )
}
