'use client'

import Image from 'next/image'
import Link from 'next/link'
import { ArrowRight, LayoutGrid, Bath, DoorOpen, Layers, PanelTop, Warehouse, TreeDeciduous, FileCheck } from 'lucide-react'
import ScopeBox from '@/components/ScopeBox'

const scopeData = {
  inklusive: [
    'Grobreinigung (Bauschutt)',
    'Fenster innen & außen',
    'Böden komplett',
    'Sanitäranlagen',
    'Türen & Zargen',
  ],
  optional: [
    'Feinreinigung Premium',
    'Fassadenreinigung',
    'Außenanlagen',
    'Fotodokumentation',
    'Abnahmeprotokoll',
  ],
  intervalle: [
    { name: 'Grobreinigung', beschreibung: 'Vor Montagearbeiten' },
    { name: 'Feinreinigung', beschreibung: 'Vor Übergabe' },
    { name: 'Einzugsreinigung', beschreibung: 'Bei Mieterwechsel' },
  ],
}

const reinigungsbereiche = [
  {
    icon: LayoutGrid,
    titel: 'Böden',
    beschreibung: 'Fliesen, Parkett, Laminat, Estrich, Industrieböden – materialgerecht gereinigt.',
  },
  {
    icon: PanelTop,
    titel: 'Fenster & Glas',
    beschreibung: 'Alle Glasflächen inkl. Rahmen, Fensterbänke und Beschläge streifenfrei.',
  },
  {
    icon: DoorOpen,
    titel: 'Türen & Zargen',
    beschreibung: 'Innentüren, Außentüren, Zargen, Griffe und Beschläge gründlich gereinigt.',
  },
  {
    icon: Bath,
    titel: 'Sanitärbereiche',
    beschreibung: 'WC, Waschbecken, Duschen, Armaturen – hygienisch und desinfiziert.',
  },
  {
    icon: Layers,
    titel: 'Wände & Decken',
    beschreibung: 'Entfernung von Baustaub, Flecken und Spritzern auf allen Oberflächen.',
  },
  {
    icon: Warehouse,
    titel: 'Treppenhäuser',
    beschreibung: 'Stufen, Geländer, Handläufe und Podeste vollständig gereinigt.',
  },
  {
    icon: TreeDeciduous,
    titel: 'Außenbereiche',
    beschreibung: 'Terrassen, Balkone, Eingangsbereiche und Fassadenabschnitte.',
  },
  {
    icon: FileCheck,
    titel: 'Dokumentation',
    beschreibung: 'Fotodokumentation und Abnahmeprotokoll auf Wunsch.',
  },
]

const checkliste = [
  'Bauschutt und Verpackungsreste entfernen',
  'Mörtel-, Zement- und Gipsreste beseitigen',
  'Farbspritzer und Lackrückstände entfernen',
  'Klebereste und Etiketten ablösen',
  'Schutzfolien fachgerecht abziehen',
  'Alle Fenster innen und außen reinigen',
  'Fensterrahmen und -bänke säubern',
  'Türen, Zargen und Beschläge reinigen',
  'Sanitärobjekte gründlich reinigen',
  'Armaturen polieren und entkalken',
  'Alle Böden nass wischen oder schrubben',
  'Einbauschränke und Küchen reinigen',
  'Heizkörper entstauben',
  'Steckdosen und Schalter abwischen',
  'Treppenhaus komplett reinigen',
  'Aufzugskabine säubern',
]

export default function LeistungsumfangSection() {
  return (
    <section id="leistungen" className="py-12 sm:py-16 lg:py-28 bg-[#f8f9fa]">
      <div className="w-full max-w-[1800px] mx-auto px-4 sm:px-6 md:px-8 lg:px-12 xl:px-20">

        {/* Section Header */}
        <div className="max-w-4xl mb-10 sm:mb-14 lg:mb-20">
          <p className="text-xs sm:text-sm text-[#109387] font-bold uppercase tracking-wide mb-2 sm:mb-3">
            Leistungsumfang
          </p>
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-[#012956] leading-[1.1] mb-4 sm:mb-6">
            Was bei der Baureinigung gereinigt wird
          </h2>
          <p className="text-sm sm:text-base lg:text-lg text-gray-700 font-semibold leading-relaxed">
            Eine professionelle Bauendreinigung umfasst weit mehr als nur Staubsaugen.
            Wir bringen Ihr Gebäude in einen Zustand, der den Anforderungen von Bauherren,
            Mietern und Käufern gerecht wird – bis ins kleinste Detail.
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
              src="https://images.unsplash.com/photo-1497366754035-f200968a6e72?q=80&w=2000&auto=format&fit=crop"
              alt="Bezugsfertiger Neubau nach professioneller Baureinigung"
              fill
              className="object-cover"
            />
          </div>

          {/* Content */}
          <div>
            <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold text-[#012956] mb-4 sm:mb-6">
              Bezugsfertig bedeutet: Sofort nutzbar
            </h3>
            <div className="space-y-3 sm:space-y-4 text-sm sm:text-base text-gray-700 font-semibold leading-relaxed">
              <p>
                Nach einer Baumaßnahme hinterlassen die Gewerke unvermeidlich Spuren:
                Baustaub in jeder Ritze, Mörtelspritzer auf Fliesen, Farbflecken auf Fenstern,
                Klebereste von Schutzfolien. Das alles muss professionell entfernt werden –
                ohne die neuen Oberflächen zu beschädigen.
              </p>
              <p>
                Wir wissen, welche Reinigungsmittel und Techniken für welche Materialien
                geeignet sind. Naturstein erfordert andere Mittel als Feinsteinzeug,
                Parkett andere als Laminat. Dieses Know-how unterscheidet professionelle
                Baureinigung von improvisierter Eigenleistung.
              </p>
              <p>
                <strong className="text-[#012956]">Das Ergebnis:</strong> Ein bezugsfertiges
                Gebäude, das bei der Übergabe überzeugt – ohne Nacharbeiten, ohne Reklamationen.
              </p>
            </div>
            <div className="mt-6 sm:mt-8 flex flex-wrap gap-3 sm:gap-4">
              <Link
                href="/leistungen/fensterreinigung"
                className="inline-flex items-center gap-1.5 sm:gap-2 border-2 border-[#109387] text-[#109387] font-bold hover:bg-[#109387] hover:text-white px-3 sm:px-4 py-2 rounded-[6px] transition-all text-sm sm:text-base"
              >
                Fensterreinigung
                <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5" />
              </Link>
              <Link
                href="/leistungen/hallenreinigung"
                className="inline-flex items-center gap-1.5 sm:gap-2 border-2 border-[#109387] text-[#109387] font-bold hover:bg-[#109387] hover:text-white px-3 sm:px-4 py-2 rounded-[6px] transition-all text-sm sm:text-base"
              >
                Hallenreinigung
                <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5" />
              </Link>
            </div>
          </div>
        </div>

        {/* Reinigungsbereiche Grid - OUTLINED ICONS */}
        <div className="mb-12 sm:mb-16 lg:mb-28">
          <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold text-[#012956] mb-6 sm:mb-8 lg:mb-10">
            Bereiche, die wir reinigen
          </h3>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5 lg:gap-6">
            {reinigungsbereiche.map((bereich) => {
              const Icon = bereich.icon
              return (
                <div
                  key={bereich.titel}
                  className="group bg-white p-4 sm:p-5 lg:p-6 rounded-[6px] hover:bg-[#012956] transition-all duration-300"
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

        {/* Checkliste Section */}
        <div className="grid lg:grid-cols-2 gap-8 sm:gap-10 lg:gap-16 items-center">
          {/* Content */}
          <div>
            <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold text-[#012956] mb-4 sm:mb-6">
              Unsere Baureinigung-Checkliste
            </h3>
            <p className="text-sm sm:text-base text-gray-700 font-semibold leading-relaxed mb-5 sm:mb-8">
              Diese Punkte prüfen und erledigen wir bei jeder Bauschlussreinigung.
              Die Liste kann je nach Objekttyp und Vereinbarung erweitert werden.
            </p>
            <div className="grid sm:grid-cols-2 gap-x-6 gap-y-2">
              {checkliste.map((punkt, index) => (
                <div
                  key={index}
                  className="flex items-start gap-2 py-1.5"
                >
                  <span className="text-[#109387] font-bold mt-0.5">✓</span>
                  <span className="text-gray-700 font-semibold text-sm">{punkt}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Image */}
          <div className="relative h-[250px] sm:h-[320px] md:h-[400px] lg:h-[500px] rounded-[6px] lg:rounded-[12px] overflow-hidden order-first lg:order-last">
            <Image
              src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=2000&auto=format&fit=crop"
              alt="Checkliste Bauendreinigung - alle Punkte werden abgearbeitet"
              fill
              className="object-cover"
            />
          </div>
        </div>

      </div>
    </section>
  )
}
