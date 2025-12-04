'use client'

import { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { ArrowRight, CheckCircle, Cog, Box, Layers, CircleDot, Stamp, Paintbrush, ArrowRightLeft, Package } from 'lucide-react'

const maschinentypen = [
  {
    id: 'cnc',
    icon: Cog,
    name: 'CNC-Fräsen & Drehmaschinen',
    kurz: 'Späne, KSS-Rückstände, Öl',
    beschreibung: 'CNC-Bearbeitungszentren erfordern besondere Sorgfalt. Kühlschmierstoffe, Metallspäne und Ölnebel setzen sich in Führungsbahnen, Spindelgehäusen und Steuerungsbereichen ab. Wir reinigen nach Herstellervorgaben mit Heißdampf und speziellen Entfettungsmitteln.',
    vorteile: ['Führungsbahnen & Spindeln', 'KSS-Tank-Reinigung', 'Steuerungsbereich geschützt'],
    bild: 'https://images.unsplash.com/photo-1565193566173-7a0ee3dbe261?q=80&w=1200&auto=format&fit=crop',
  },
  {
    id: 'spritzguss',
    icon: Box,
    name: 'Spritzgussmaschinen',
    kurz: 'Kunststoffreste, Trennmittel',
    beschreibung: 'Spritzgussmaschinen und -werkzeuge leiden unter Kunststoffrückständen, Trennmitteln und Ablagerungen in Kühlkanälen. Trockeneisreinigung entfernt Verschmutzungen ohne Demontage und ohne Feuchtigkeit – ideal für empfindliche Formen und Werkzeuge.',
    vorteile: ['Trockeneisreinigung', 'Keine Demontage nötig', 'Kühlkanäle gereinigt'],
    bild: 'https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?q=80&w=1200&auto=format&fit=crop',
  },
  {
    id: 'bearbeitungszentren',
    icon: Layers,
    name: 'Bearbeitungszentren',
    kurz: 'Mehrspindelig, komplex',
    beschreibung: 'Moderne Bearbeitungszentren kombinieren Fräsen, Drehen und Bohren. Die komplexe Bauweise erfordert spezialisierte Reinigung aller Komponenten: Werkzeugwechsler, Späneförderer, Kühlmittelsysteme und Schutzverkleidungen.',
    vorteile: ['Werkzeugwechsler gereinigt', 'Späneförderer entleert', 'Vollständige Dokumentation'],
    bild: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80&w=1200&auto=format&fit=crop',
  },
  {
    id: 'schleifmaschinen',
    icon: CircleDot,
    name: 'Schleifmaschinen',
    kurz: 'Schleifstaub, Kühlmittel',
    beschreibung: 'Schleifstaub und Kühlmittelrückstände beeinträchtigen Präzision und Oberflächenqualität. Wir entfernen feinste Partikel aus Führungssystemen und Messsystemen – für Schleifmaschinen, die wieder Mikrometer-genau arbeiten.',
    vorteile: ['Feinstaub-Entfernung', 'Messsysteme geschont', 'Präzision wiederhergestellt'],
    bild: 'https://images.unsplash.com/photo-1565688534245-05d6b5be184a?q=80&w=1200&auto=format&fit=crop',
  },
  {
    id: 'pressen',
    icon: Stamp,
    name: 'Pressen & Stanzen',
    kurz: 'Öl, Metallabrieb, Staub',
    beschreibung: 'Hydraulikpressen und Stanzautomaten akkumulieren Hydrauliköl-Leckagen, Metallstaub und Schmiermittelrückstände. Regelmäßige Reinigung verhindert Verschleiß an Führungen und Werkzeugen und erhöht die Arbeitssicherheit.',
    vorteile: ['Hydraulik-Bereich gereinigt', 'Werkzeugaufnahmen sauber', 'Sicherheit erhöht'],
    bild: 'https://images.unsplash.com/photo-1533417479674-e40666ce7fa5?q=80&w=1200&auto=format&fit=crop',
  },
  {
    id: 'lackieranlagen',
    icon: Paintbrush,
    name: 'Lackieranlagen',
    kurz: 'Overspray, Lackrückstände',
    beschreibung: 'Lackieranlagen und Pulverbeschichtungsanlagen erfordern regelmäßige Reinigung von Overspray, Lackrückständen und Filterverunreinigungen. Wir arbeiten nach ATEX-Richtlinien in explosionsgefährdeten Bereichen.',
    vorteile: ['ATEX-konform', 'Kabinen & Filter', 'Fördertechnik gereinigt'],
    bild: 'https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?q=80&w=1200&auto=format&fit=crop',
  },
  {
    id: 'foerdertechnik',
    icon: ArrowRightLeft,
    name: 'Fördertechnik',
    kurz: 'Bänder, Rollen, Ketten',
    beschreibung: 'Förderbänder, Rollenbahnen und Kettenförderer transportieren nicht nur Produkte, sondern auch Schmutz. Wir reinigen alle Komponenten der innerbetrieblichen Logistik – für reibungslosen Materialfluss.',
    vorteile: ['Förderbänder gereinigt', 'Antriebe geschont', 'Standzeiterhöhung'],
    bild: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?q=80&w=1200&auto=format&fit=crop',
  },
  {
    id: 'verpackung',
    icon: Package,
    name: 'Verpackungsmaschinen',
    kurz: 'Produktreste, Klebstoffe',
    beschreibung: 'Verpackungsmaschinen in der Lebensmittel- und Pharmaindustrie unterliegen strengen Hygieneanforderungen. Wir reinigen HACCP-konform und dokumentieren alle Arbeitsschritte für Ihre Auditunterlagen.',
    vorteile: ['HACCP-konform', 'Lebensmittelsicher', 'Audit-Dokumentation'],
    bild: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?q=80&w=1200&auto=format&fit=crop',
  },
]

export default function MaschinentypenSection() {
  const [activeTyp, setActiveTyp] = useState(maschinentypen[0])

  return (
    <section id="maschinentypen" className="py-12 sm:py-16 lg:py-28 bg-white">
      <div className="w-full max-w-[1800px] mx-auto px-4 sm:px-6 md:px-8 lg:px-12 xl:px-20">

        {/* Header */}
        <div className="max-w-3xl mb-8 sm:mb-12 lg:mb-16">
          <span className="text-[#109387] font-bold text-xs sm:text-sm uppercase tracking-wide mb-3 sm:mb-4 block">
            Unsere Expertise
          </span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-[#012956] leading-tight mb-4 sm:mb-6 lg:whitespace-nowrap">
            Diese Maschinentypen reinigen wir
          </h2>
          <p className="text-base sm:text-lg text-gray-600 font-semibold leading-relaxed">
            Von der Präzisions-CNC bis zur Schwerlast-Presse: Unsere Teams sind auf unterschiedlichste
            Maschinentypen spezialisiert und kennen die Anforderungen Ihrer Produktionsanlagen.
          </p>
        </div>

        {/* Maschinentypen Grid - Selection */}
        <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-8 gap-2 sm:gap-3 mb-8 sm:mb-12">
          {maschinentypen.map((typ) => {
            const Icon = typ.icon
            return (
              <button
                key={typ.id}
                onClick={() => setActiveTyp(typ)}
                className={`flex flex-col items-center p-3 sm:p-4 rounded-[6px] transition-all duration-300 group ${
                  activeTyp.id === typ.id
                    ? 'bg-[#012956] text-white'
                    : 'bg-[#f8f9fa] text-[#012956] hover:bg-[#012956] hover:text-white'
                }`}
              >
                <div className={`w-10 h-10 sm:w-12 sm:h-12 rounded-[6px] border-2 flex items-center justify-center mb-2 transition-all duration-300 ${
                  activeTyp.id === typ.id
                    ? 'border-[#109387] bg-[#109387]'
                    : 'border-[#109387] group-hover:bg-[#109387]'
                }`}>
                  <Icon className={`w-5 h-5 sm:w-6 sm:h-6 transition-colors duration-300 ${
                    activeTyp.id === typ.id
                      ? 'text-white'
                      : 'text-[#109387] group-hover:text-white'
                  }`} strokeWidth={1.5} />
                </div>
                <span className="text-[10px] sm:text-xs font-bold text-center leading-tight">
                  {typ.name.split(' ')[0]}
                </span>
              </button>
            )
          })}
        </div>

        {/* Active Maschinentyp Detail */}
        <div className="grid lg:grid-cols-2 gap-6 sm:gap-8 lg:gap-12 items-center">
          {/* Bild */}
          <div className="relative h-[250px] sm:h-[320px] md:h-[400px] lg:h-[450px] rounded-[6px] overflow-hidden">
            <Image
              src={activeTyp.bild}
              alt={`${activeTyp.name} Reinigung`}
              fill
              className="object-cover transition-all duration-500"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#012956]/60 to-transparent" />
            <div className="absolute bottom-4 left-4 sm:bottom-6 sm:left-6">
              <span className="bg-[#109387] text-white font-bold text-xs sm:text-sm px-3 py-1.5 rounded-[6px]">
                {activeTyp.kurz}
              </span>
            </div>
          </div>

          {/* Content */}
          <div>
            <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold text-[#012956] mb-3 sm:mb-4">
              {activeTyp.name}
            </h3>
            <p className="text-gray-600 font-semibold leading-relaxed mb-5 sm:mb-6 text-sm sm:text-base">
              {activeTyp.beschreibung}
            </p>

            {/* Vorteile */}
            <div className="space-y-2 sm:space-y-3 mb-6 sm:mb-8">
              {activeTyp.vorteile.map((vorteil, index) => (
                <div key={index} className="flex items-center gap-2 sm:gap-3">
                  <CheckCircle className="w-4 h-4 sm:w-5 sm:h-5 text-[#109387] flex-shrink-0" />
                  <span className="text-gray-700 font-semibold text-sm sm:text-base">{vorteil}</span>
                </div>
              ))}
            </div>

            {/* CTA */}
            <a
              href="#kontakt"
              className="inline-flex items-center gap-2 bg-[#109387] hover:bg-[#0d7d72] text-white font-bold px-4 sm:px-6 py-2.5 sm:py-3 rounded-[6px] transition-colors group text-sm sm:text-base"
            >
              {activeTyp.name.split(' ')[0]}-Reinigung anfragen
              <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 group-hover:translate-x-1 transition-transform" />
            </a>
          </div>
        </div>

        {/* Cross-Link zu Industriereinigung */}
        <div className="mt-10 sm:mt-12 lg:mt-16 bg-[#f8f9fa] rounded-[6px] p-5 sm:p-6 lg:p-8">
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
            <div>
              <h4 className="text-lg sm:text-xl font-bold text-[#012956] mb-1 sm:mb-2">
                Auch die Halle soll sauber werden?
              </h4>
              <p className="text-gray-600 font-semibold text-sm sm:text-base">
                Kombinieren Sie Maschinenreinigung mit Hallenreinigung – aus einer Hand.
              </p>
            </div>
            <Link
              href="/leistungen/hallenreinigung"
              className="inline-flex items-center gap-2 border-2 border-[#109387] text-[#109387] hover:bg-[#109387] hover:text-white font-bold px-4 sm:px-6 py-2.5 sm:py-3 rounded-[6px] transition-all whitespace-nowrap text-sm sm:text-base"
            >
              Hallenreinigung
              <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5" />
            </Link>
          </div>
        </div>

      </div>
    </section>
  )
}
