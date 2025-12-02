'use client'

import Image from 'next/image'
import Link from 'next/link'
import { ArrowRight, Factory, Cog, Droplets, Wind, Trash2, Sparkles, Building2, Wrench } from 'lucide-react'

const reinigungsbereiche = [
  {
    icon: Factory,
    titel: 'Hallenböden',
    beschreibung: 'Kehren, schrubben, entölen. Industrieböden aller Art – auch mit starker Verschmutzung.',
  },
  {
    icon: Cog,
    titel: 'Maschinen & Anlagen',
    beschreibung: 'Reinigung nach Herstellervorgaben. Entfernung von Öl, Spänen und Produktionsrückständen.',
  },
  {
    icon: Droplets,
    titel: 'Entölung & Entfettung',
    beschreibung: 'Spezialreinigung für öl- und fettbelastete Flächen. Mit Hochleistungs-Scheuersaugmaschinen.',
  },
  {
    icon: Wind,
    titel: 'Lüftung & Rohre',
    beschreibung: 'Reinigung von Lüftungsanlagen, Rohrleitungen und schwer zugänglichen Bereichen.',
  },
  {
    icon: Building2,
    titel: 'Hochregale & Einbauten',
    beschreibung: 'Staubentfernung in großer Höhe. Mit Hebebühnen und Spezialausrüstung.',
  },
  {
    icon: Sparkles,
    titel: 'Wände & Decken',
    beschreibung: 'Auch oberhalb der Maschinen. Entfernung von Staub, Ruß und Ablagerungen.',
  },
  {
    icon: Trash2,
    titel: 'Entsorgung',
    beschreibung: 'Beseitigung von Produktionsabfällen, Verpackungsmaterial und Sondermüll.',
  },
  {
    icon: Wrench,
    titel: 'Sozialräume & Sanitär',
    beschreibung: 'Umkleiden, Duschen, WC-Anlagen. Hygienisch und sauber für Ihre Mitarbeiter.',
  },
]

const verfahren = [
  { name: 'Scheuersaugen', beschreibung: 'Für große Flächen', ideal: 'Hallenböden, Lagerflächen' },
  { name: 'Hochdruckreinigung', beschreibung: 'Für hartnäckigen Schmutz', ideal: 'Außenbereiche, Maschinen' },
  { name: 'Dampfreinigung', beschreibung: 'Schonend und gründlich', ideal: 'Empfindliche Oberflächen' },
  { name: 'Trockeneisstrahlen', beschreibung: 'Ohne Feuchtigkeit', ideal: 'Elektrik, Produktionsanlagen' },
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
            Industriereinigung im Detail
          </h2>
          <p className="text-sm sm:text-base lg:text-lg text-gray-700 font-semibold leading-relaxed">
            Von der Produktionshalle bis zur Maschinenreinigung. Wir übernehmen alle
            Reinigungsaufgaben in Ihrem Industriebetrieb – regelmäßig oder als Einzelauftrag.
          </p>
        </div>

        {/* Two Column: Image + Text */}
        <div className="grid lg:grid-cols-2 gap-8 sm:gap-10 lg:gap-16 items-center mb-12 sm:mb-16 lg:mb-28">
          {/* Image */}
          <div className="relative h-[250px] sm:h-[320px] md:h-[400px] lg:h-[500px] rounded-[6px] lg:rounded-[12px] overflow-hidden">
            <Image
              src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80&w=2574&auto=format&fit=crop"
              alt="Professionelle Reinigung in der Produktionshalle"
              fill
              className="object-cover"
            />
          </div>

          {/* Content */}
          <div>
            <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold text-[#012956] mb-4 sm:mb-6">
              Spezialisiert auf Industrie und Produktion
            </h3>
            <div className="space-y-3 sm:space-y-4 text-sm sm:text-base text-gray-700 font-semibold leading-relaxed">
              <p>
                Industriereinigung ist mehr als nur Boden wischen. In Produktionsbetrieben
                gelten besondere Anforderungen an Sauberkeit, Sicherheit und Hygiene.
              </p>
              <p>
                Wir arbeiten nach den Standards von <strong className="text-[#012956]">ISO 9001</strong> und
                <strong className="text-[#012956]"> ISO 14001</strong> – ohne selbst zertifiziert zu sein.
                Das heißt: Dokumentierte Prozesse, Qualitätskontrollen und umweltbewusstes Arbeiten.
              </p>
              <p>
                Ob regelmäßige Unterhaltsreinigung oder Intensivreinigung vor dem Audit –
                wir sind Ihr Partner für saubere Produktion.
              </p>
            </div>
            <div className="mt-6 sm:mt-8 flex flex-wrap gap-3 sm:gap-4">
              <Link
                href="/leistungen/hallenreinigung"
                className="inline-flex items-center gap-1.5 sm:gap-2 border-2 border-[#109387] text-[#109387] hover:bg-[#109387] hover:text-white font-bold px-4 py-2 rounded-[6px] transition-all text-sm sm:text-base"
              >
                Hallenreinigung
                <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5" />
              </Link>
              <Link
                href="/leistungen/maschinenreinigung"
                className="inline-flex items-center gap-1.5 sm:gap-2 border-2 border-[#109387] text-[#109387] hover:bg-[#109387] hover:text-white font-bold px-4 py-2 rounded-[6px] transition-all text-sm sm:text-base"
              >
                Maschinenreinigung
                <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5" />
              </Link>
            </div>
          </div>
        </div>

        {/* Reinigungsbereiche Grid - OUTLINED ICONS */}
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

        {/* Verfahren Section - OUTLINED ICONS */}
        <div className="grid lg:grid-cols-2 gap-8 sm:gap-10 lg:gap-16 items-center">
          {/* Content */}
          <div>
            <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold text-[#012956] mb-4 sm:mb-6">
              Reinigungsverfahren nach Bedarf
            </h3>
            <p className="text-sm sm:text-base text-gray-700 font-semibold leading-relaxed mb-5 sm:mb-8">
              Je nach Verschmutzung und Oberfläche setzen wir unterschiedliche Verfahren ein.
              Bei der Besichtigung analysieren wir Ihre Situation und empfehlen die beste Methode.
            </p>
            <div className="space-y-3 sm:space-y-4">
              {verfahren.map((item) => (
                <div
                  key={item.name}
                  className="flex items-start gap-3 sm:gap-4 p-3 sm:p-4 bg-[#f8f9fa] rounded-[6px] group hover:bg-[#012956] transition-all duration-300"
                >
                  {/* Icon - Dauerhaft gefüllt */}
                  <div className="w-9 h-9 sm:w-10 sm:h-10 bg-[#109387] rounded-[6px] flex items-center justify-center flex-shrink-0">
                    <span className="text-white font-bold text-xs sm:text-sm">
                      {item.name.charAt(0)}
                    </span>
                  </div>
                  <div>
                    <h4 className="font-bold text-sm sm:text-base text-[#012956] group-hover:text-white transition-colors">{item.name}</h4>
                    <p className="text-gray-600 group-hover:text-white/80 font-semibold text-xs sm:text-sm transition-colors">{item.beschreibung}</p>
                    <p className="text-[#109387] font-semibold text-xs sm:text-sm mt-1">Ideal für: {item.ideal}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Image */}
          <div className="relative h-[250px] sm:h-[320px] md:h-[400px] lg:h-[500px] rounded-[6px] lg:rounded-[12px] overflow-hidden order-first lg:order-last">
            <Image
              src="https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?q=80&w=2670&auto=format&fit=crop"
              alt="Industriereinigung mit Spezialgeräten"
              fill
              className="object-cover"
            />
          </div>
        </div>

      </div>
    </section>
  )
}
