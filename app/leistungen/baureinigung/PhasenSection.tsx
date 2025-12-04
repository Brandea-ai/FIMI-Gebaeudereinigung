'use client'

import { useState } from 'react'
import Image from 'next/image'
import { ArrowRight, Trash2, Sparkles, CheckCircle2, ChevronRight } from 'lucide-react'

const phasen = [
  {
    id: 'grob',
    nummer: '01',
    name: 'Baugrobreinigung',
    subtitle: 'Während der Bauphase',
    zeitpunkt: 'Zwischen den Gewerken',
    image: 'https://images.unsplash.com/photo-1504307651254-35680f356dfd?q=80&w=2000&auto=format&fit=crop',
    icon: Trash2,
    beschreibung: 'Die Baugrobreinigung findet noch während der aktiven Bauphase statt. Ziel ist es, zwischen den Gewerken für eine aufgeräumte Baustelle zu sorgen, damit das nächste Gewerk sauber arbeiten kann.',
    leistungen: [
      'Entfernung von grobem Bauschutt (Beton, Ziegel, Holz)',
      'Beseitigung von Verpackungsmaterial und Folien',
      'Entfernung von Mörtel- und Zementresten',
      'Absaugen von grobem Staub und Spänen',
      'Beräumung der Arbeitsbereiche',
    ],
    vorteile: [
      'Unfallgefahr wird reduziert',
      'Nächstes Gewerk kann sauber starten',
      'Baumängel werden frühzeitig sichtbar',
    ],
  },
  {
    id: 'fein',
    nummer: '02',
    name: 'Baufeinreinigung',
    subtitle: 'Nach Abschluss der Bauarbeiten',
    zeitpunkt: 'Vor der Endabnahme',
    image: 'https://images.unsplash.com/photo-1581094794329-c8112a89af12?q=80&w=2000&auto=format&fit=crop',
    icon: Sparkles,
    beschreibung: 'Die Baufeinreinigung erfolgt nach Abschluss des Großteils der Bauarbeiten. Alle sichtbaren Verschmutzungen und Rückstände werden entfernt, um das Gebäude für die Endabnahme vorzubereiten.',
    leistungen: [
      'Entfernung von Farbspritzern und Lackrückständen',
      'Beseitigung von Kleberesten und Etiketten',
      'Reinigung aller Fenster inkl. Rahmen',
      'Reinigung von Türen, Zargen und Beschlägen',
      'Feucht-Wischung aller Bodenflächen',
      'Reinigung der Sanitärbereiche',
    ],
    vorteile: [
      'Gebäude ist abnahmefertig',
      'Optischer Gesamteindruck stimmt',
      'Mängel werden sichtbar',
    ],
  },
  {
    id: 'schluss',
    nummer: '03',
    name: 'Bauschlussreinigung',
    subtitle: 'Bezugsfertige Übergabe',
    zeitpunkt: 'Direkt vor Übergabe',
    image: 'https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=2000&auto=format&fit=crop',
    icon: CheckCircle2,
    beschreibung: 'Die Bauschlussreinigung – auch Bauendreinigung genannt – ist der finale Schritt. Das Gebäude wird in einen bezugsfertigen Zustand versetzt, sodass Mieter oder Käufer direkt einziehen können.',
    leistungen: [
      'Intensive Grundreinigung aller Oberflächen',
      'Polierende Fensterreinigung (streifenfrei)',
      'Reinigung aller Einbauschränke und Küchen',
      'Entfernung letzter Staubschichten',
      'Desinfektion der Sanitärbereiche',
      'Reinigung von Aufzügen und Treppenhäusern',
      'Optional: Außenbereich und Fassade',
    ],
    vorteile: [
      'Sofort bezugsfertig',
      'Übergabe ohne Beanstandung',
      'Professioneller Eindruck',
    ],
  },
]

export default function PhasenSection() {
  const [activePhase, setActivePhase] = useState(phasen[0])

  return (
    <section id="phasen" className="py-12 sm:py-16 lg:py-28 bg-white">
      <div className="w-full max-w-[1800px] mx-auto px-4 sm:px-6 md:px-8 lg:px-12 xl:px-20">

        {/* Header */}
        <div className="max-w-4xl mb-10 sm:mb-14 lg:mb-20">
          <p className="text-xs sm:text-sm text-[#109387] font-bold uppercase tracking-wide mb-2 sm:mb-3">
            Die drei Phasen der Baureinigung
          </p>
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-[#012956] leading-[1.1] mb-4 sm:mb-6">
            Baugrobreinigung, Baufeinreinigung, Bauschlussreinigung
          </h2>
          <p className="text-sm sm:text-base lg:text-lg text-gray-700 font-semibold leading-relaxed">
            Eine professionelle Baureinigung gliedert sich in drei aufeinander aufbauende Phasen.
            Je nach Projektstatus können Sie einzelne Phasen oder das Komplettpaket beauftragen.
            Wir beraten Sie, welche Leistungen für Ihr Bauprojekt sinnvoll sind.
          </p>
        </div>

        {/* Phase Tabs - Mobile: Horizontal scroll, Desktop: Fixed */}
        <div className="flex gap-2 sm:gap-3 mb-8 sm:mb-10 lg:mb-12 overflow-x-auto pb-2 -mx-4 px-4 sm:mx-0 sm:px-0 scrollbar-hide">
          {phasen.map((phase) => {
            const Icon = phase.icon
            return (
              <button
                key={phase.id}
                onClick={() => setActivePhase(phase)}
                className={`flex items-center gap-2 sm:gap-3 px-4 sm:px-6 py-3 sm:py-4 rounded-[6px] border-2 transition-all duration-300 whitespace-nowrap flex-shrink-0 ${
                  activePhase.id === phase.id
                    ? 'border-[#109387] bg-[#109387] text-white'
                    : 'border-[#012956] bg-white text-[#012956] hover:bg-[#f8f9fa]'
                }`}
              >
                <span className={`text-xs sm:text-sm font-bold ${
                  activePhase.id === phase.id ? 'text-white/60' : 'text-[#109387]'
                }`}>
                  {phase.nummer}
                </span>
                <Icon className="w-4 h-4 sm:w-5 sm:h-5" strokeWidth={1.5} />
                <span className="font-bold text-sm sm:text-base">{phase.name}</span>
              </button>
            )
          })}
        </div>

        {/* Active Phase Content */}
        <div className="grid lg:grid-cols-2 gap-8 sm:gap-10 lg:gap-16 items-start">
          {/* Image */}
          <div className="relative h-[250px] sm:h-[320px] md:h-[400px] lg:h-[500px] rounded-[6px] lg:rounded-[12px] overflow-hidden">
            <Image
              src={activePhase.image}
              alt={`${activePhase.name} - FIMI Baureinigung`}
              fill
              className="object-cover transition-all duration-500"
            />
            {/* Badge */}
            <div className="absolute top-4 left-4 bg-[#109387] text-white px-4 py-2 rounded-[6px]">
              <span className="font-bold text-sm">Phase {activePhase.nummer}</span>
            </div>
          </div>

          {/* Content */}
          <div>
            <div className="mb-6">
              <span className="text-[#109387] font-bold text-sm uppercase tracking-wide">
                {activePhase.zeitpunkt}
              </span>
              <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-[#012956] mt-2 mb-3">
                {activePhase.name}
              </h3>
              <p className="text-lg sm:text-xl font-bold text-gray-500 mb-4">
                {activePhase.subtitle}
              </p>
              <p className="text-gray-700 font-semibold leading-relaxed">
                {activePhase.beschreibung}
              </p>
            </div>

            {/* Leistungen */}
            <div className="mb-6">
              <h4 className="text-sm text-gray-500 font-bold uppercase tracking-wide mb-4">
                Was wird gemacht?
              </h4>
              <ul className="space-y-2">
                {activePhase.leistungen.map((leistung, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <ChevronRight className="w-5 h-5 text-[#109387] flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700 font-semibold text-sm sm:text-base">{leistung}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Vorteile */}
            <div className="bg-[#f8f9fa] rounded-[6px] p-4 sm:p-6 mb-6">
              <h4 className="text-sm text-gray-500 font-bold uppercase tracking-wide mb-3">
                Ihre Vorteile
              </h4>
              <div className="flex flex-wrap gap-2">
                {activePhase.vorteile.map((vorteil, index) => (
                  <span
                    key={index}
                    className="inline-flex items-center gap-1.5 bg-white border border-[#109387]/20 text-[#012956] font-semibold text-sm px-3 py-1.5 rounded-[6px]"
                  >
                    <CheckCircle2 className="w-4 h-4 text-[#109387]" />
                    {vorteil}
                  </span>
                ))}
              </div>
            </div>

            {/* CTA */}
            <a
              href="#kontakt"
              className="inline-flex items-center gap-2 bg-[#109387] hover:bg-[#0d7d72] text-white font-bold px-6 py-3 rounded-[6px] transition-colors group"
            >
              {activePhase.name} anfragen
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </a>
          </div>
        </div>

        {/* Timeline Visual - Desktop only */}
        <div className="hidden lg:block mt-16 pt-16 border-t border-gray-200">
          <h3 className="text-center text-xl font-bold text-[#012956] mb-10">
            Typischer Ablauf eines Bauprojekts
          </h3>
          <div className="relative">
            {/* Line */}
            <div className="absolute top-8 left-0 right-0 h-1 bg-gray-200" />
            <div className="absolute top-8 left-0 h-1 bg-[#109387]" style={{ width: '33.33%' }} />

            {/* Steps */}
            <div className="grid grid-cols-3 gap-8">
              {phasen.map((phase, index) => {
                const Icon = phase.icon
                return (
                  <div key={phase.id} className="text-center">
                    <div className={`w-16 h-16 mx-auto rounded-full flex items-center justify-center mb-4 ${
                      index === 0 ? 'bg-[#109387] text-white' : 'bg-gray-200 text-gray-500'
                    }`}>
                      <Icon className="w-7 h-7" strokeWidth={1.5} />
                    </div>
                    <h4 className="font-bold text-[#012956] mb-1">{phase.name}</h4>
                    <p className="text-sm text-gray-500 font-semibold">{phase.zeitpunkt}</p>
                  </div>
                )
              })}
            </div>
          </div>
        </div>

      </div>
    </section>
  )
}
