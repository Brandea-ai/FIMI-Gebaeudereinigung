'use client'

import Image from 'next/image'
import Link from 'next/link'
import { ArrowRight, Layers, Grid3X3, Lightbulb, Wind, Sparkles, Droplets, Trash2, PaintBucket } from 'lucide-react'

const reinigungsbereiche = [
  {
    icon: Layers,
    titel: 'Hallenböden',
    beschreibung: 'Beton, Epoxid, PVC, Industrieestrich – Scheuern, Schrubben, Polieren, Versiegeln.',
  },
  {
    icon: Grid3X3,
    titel: 'Regalsysteme',
    beschreibung: 'Hochregale, Fachbodenregale, Palettenregale – entstauben, reinigen, desinfizieren.',
  },
  {
    icon: Wind,
    titel: 'Hallendecken',
    beschreibung: 'Stahlträger, Lüftungskanäle, Rohrleitungen – Staub und Spinnweben entfernen.',
  },
  {
    icon: PaintBucket,
    titel: 'Hallenwände',
    beschreibung: 'Trapezblech, Sichtbeton, Dämmplatten – Verschmutzungen und Ablagerungen beseitigen.',
  },
  {
    icon: Lightbulb,
    titel: 'Beleuchtung',
    beschreibung: 'Hallenleuchten, Lichtbänder, Oberlichter – für maximale Lichtausbeute.',
  },
  {
    icon: Droplets,
    titel: 'Fenster & Oberlichter',
    beschreibung: 'Industrieverglasung, Lichtkuppeln – Innen- und Außenreinigung.',
  },
  {
    icon: Sparkles,
    titel: 'Maschinen-Umfeld',
    beschreibung: 'Bodenmarkierungen, Absperrungen, Arbeitsbereiche – sauber und sicher.',
  },
  {
    icon: Trash2,
    titel: 'Entsorgung',
    beschreibung: 'Produktionsabfälle, Verpackungsmaterial, Späne – fachgerechte Entsorgung.',
  },
]

const verfahren = [
  {
    name: 'Scheuersaugmaschinen',
    beschreibung: 'Für große Bodenflächen – effizient und gründlich',
    ideal: 'Hallenböden, Verkehrswege',
  },
  {
    name: 'Hochdruckreinigung',
    beschreibung: 'Hartnäckige Verschmutzungen lösen',
    ideal: 'Außenbereiche, Laderampen',
  },
  {
    name: 'Industriestaubsauger',
    beschreibung: 'Feinstaub und Späne aufnehmen',
    ideal: 'Regale, Maschinen-Umfeld',
  },
  {
    name: 'Hubarbeitsbühnen',
    beschreibung: 'Sichere Arbeit in großer Höhe',
    ideal: 'Decken, Beleuchtung, Hochregale',
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
            Hallenreinigung im Detail
          </h2>
          <p className="text-sm sm:text-base lg:text-lg text-gray-700 font-semibold leading-relaxed">
            Professionelle Hallenreinigung bedeutet mehr als nur Boden wischen.
            Wir reinigen Ihre Halle komplett – vom Boden bis zur Decke,
            von den Regalen bis zur Beleuchtung. Mit den richtigen Verfahren
            für jede Oberfläche.
          </p>
        </div>

        {/* Two Column: Image + Text */}
        <div className="grid lg:grid-cols-2 gap-8 sm:gap-10 lg:gap-16 items-center mb-12 sm:mb-16 lg:mb-28">
          {/* Image */}
          <div className="relative h-[250px] sm:h-[320px] md:h-[400px] lg:h-[500px] rounded-[6px] lg:rounded-[12px] overflow-hidden">
            <Image
              src="https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?q=80&w=2574&auto=format&fit=crop"
              alt="Professionelle Hallenbodenreinigung mit Scheuersaugmaschine"
              fill
              className="object-cover"
            />
          </div>

          {/* Content */}
          <div>
            <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold text-[#012956] mb-4 sm:mb-6">
              Großflächenreinigung mit System
            </h3>
            <div className="space-y-3 sm:space-y-4 text-sm sm:text-base text-gray-700 font-semibold leading-relaxed">
              <p>
                Eine Industriehalle hat andere Anforderungen als ein Büro.
                Größere Flächen, hartnäckigere Verschmutzungen, höhere Decken.
                Dafür braucht es spezielles Equipment und erfahrene Mitarbeiter.
              </p>
              <p>
                Unsere Teams arbeiten mit <strong className="text-[#012956]">Scheuersaugmaschinen</strong> für
                große Bodenflächen, <strong className="text-[#012956]">Hubarbeitsbühnen</strong> für Arbeiten
                in der Höhe und <strong className="text-[#012956]">Industriestaubsaugern</strong> für
                Feinstaub und Produktionsrückstände.
              </p>
              <p>
                Das Ergebnis: Eine gründlich gereinigte Halle in kürzester Zeit –
                ohne Ihren Betrieb zu unterbrechen.
              </p>
            </div>
            <div className="mt-6 sm:mt-8 flex flex-wrap gap-3 sm:gap-4">
              <Link
                href="/leistungen/industriereinigung"
                className="inline-flex items-center gap-1.5 sm:gap-2 text-[#109387] font-bold hover:text-[#012956] transition-colors text-sm sm:text-base"
              >
                Industriereinigung
                <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5" />
              </Link>
              <Link
                href="/leistungen/fensterreinigung"
                className="inline-flex items-center gap-1.5 sm:gap-2 text-[#109387] font-bold hover:text-[#012956] transition-colors text-sm sm:text-base"
              >
                Fensterreinigung
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
                  className="group bg-white p-4 sm:p-5 lg:p-6 rounded-[6px] hover:bg-[#012956] transition-all duration-300"
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

        {/* Verfahren Section */}
        <div className="grid lg:grid-cols-2 gap-8 sm:gap-10 lg:gap-16 items-center">
          {/* Content */}
          <div>
            <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold text-[#012956] mb-4 sm:mb-6">
              Unsere Reinigungsverfahren
            </h3>
            <p className="text-sm sm:text-base text-gray-700 font-semibold leading-relaxed mb-5 sm:mb-8">
              Für jede Verschmutzung das richtige Verfahren. Unsere Mitarbeiter
              sind IPAF-zertifiziert für Arbeiten in großer Höhe und geschult
              im Umgang mit Industriereinigungsgeräten.
            </p>
            <div className="space-y-3 sm:space-y-4">
              {verfahren.map((verfahren) => (
                <div
                  key={verfahren.name}
                  className="flex items-start gap-3 sm:gap-4 p-3 sm:p-4 bg-white rounded-[6px] group hover:bg-[#012956] transition-all duration-300"
                >
                  {/* Icon */}
                  <div className="w-9 h-9 sm:w-10 sm:h-10 bg-[#109387] rounded-[6px] flex items-center justify-center flex-shrink-0">
                    <span className="text-white font-bold text-xs sm:text-sm">
                      {verfahren.name.charAt(0)}
                    </span>
                  </div>
                  <div>
                    <h4 className="font-bold text-sm sm:text-base text-[#012956] group-hover:text-white transition-colors">
                      {verfahren.name}
                    </h4>
                    <p className="text-gray-600 group-hover:text-white/80 font-semibold text-xs sm:text-sm transition-colors">
                      {verfahren.beschreibung}
                    </p>
                    <p className="text-[#109387] font-semibold text-xs sm:text-sm mt-1">
                      Ideal für: {verfahren.ideal}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Image */}
          <div className="relative h-[250px] sm:h-[320px] md:h-[400px] lg:h-[500px] rounded-[6px] lg:rounded-[12px] overflow-hidden order-first lg:order-last">
            <Image
              src="https://images.unsplash.com/photo-1581578731548-c64695cc6952?q=80&w=2670&auto=format&fit=crop"
              alt="Professionelles Reinigungsteam mit Industriereinigungsgeräten"
              fill
              className="object-cover"
            />
          </div>
        </div>

      </div>
    </section>
  )
}
