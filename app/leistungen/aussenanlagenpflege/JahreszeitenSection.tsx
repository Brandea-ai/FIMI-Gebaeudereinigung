'use client'

import { useState } from 'react'
import Link from 'next/link'
import { Flower2, Sun, Leaf, Snowflake, Check, ArrowRight } from 'lucide-react'

const jahreszeiten = [
  {
    id: 'fruehling',
    name: 'Frühjahr',
    zeitraum: 'März – Mai',
    icon: Flower2,
    farbe: '#10B981',
    arbeiten: [
      'Erste Rasenmahd nach dem Winter',
      'Vertikutieren und Nachsäen',
      'Frühjahrsdüngung für kräftiges Wachstum',
      'Rückschnitt von Ziergräsern',
      'Beetvorbereitung und Frühjahrsbepflanzung',
      'Entfernung von Winterschutz',
      'Kontrolle der Bewässerungsanlage',
    ],
  },
  {
    id: 'sommer',
    name: 'Sommer',
    zeitraum: 'Juni – August',
    icon: Sun,
    farbe: '#F59E0B',
    arbeiten: [
      'Regelmäßige Rasenmahd (7–14 Tage)',
      'Bewässerung bei Trockenheit',
      'Formschnitt von Hecken und Sträuchern',
      'Unkrautkontrolle in Beeten',
      'Sommerdüngung nach Bedarf',
      'Pflege von Kübelpflanzen',
      'Kontrolle auf Schädlinge und Krankheiten',
    ],
  },
  {
    id: 'herbst',
    name: 'Herbst',
    zeitraum: 'September – November',
    icon: Leaf,
    farbe: '#EF4444',
    arbeiten: [
      'Laubbeseitigung auf allen Flächen',
      'Letzte Rasenmahd vor dem Winter',
      'Herbstdüngung für Winterhärte',
      'Rückschnitt von Stauden und Gehölzen',
      'Pflanzung von Frühjahrsblühern',
      'Winterfestmachung der Anlage',
      'Reinigung der Dachrinnen',
    ],
  },
  {
    id: 'winter',
    name: 'Winter',
    zeitraum: 'Dezember – Februar',
    icon: Snowflake,
    farbe: '#3B82F6',
    arbeiten: [
      'Winterdienst: Räumen und Streuen',
      'Kontrollgänge bei Frost und Schnee',
      'Winterschnitt an Gehölzen (frostfrei)',
      'Planung für das kommende Jahr',
      'Baumpflege an laubfreien Gehölzen',
      'Dokumentation aller Maßnahmen',
      'Überprüfung der Verkehrssicherheit',
    ],
  },
]

export default function JahreszeitenSection() {
  const [activeJahreszeit, setActiveJahreszeit] = useState('fruehling')

  const aktiveJahreszeit = jahreszeiten.find((j) => j.id === activeJahreszeit) || jahreszeiten[0]

  return (
    <section id="jahreszeiten" className="py-12 sm:py-16 lg:py-28 bg-[#012956]">
      <div className="w-full max-w-[1800px] mx-auto px-4 sm:px-6 md:px-8 lg:px-12 xl:px-20">

        {/* Section Header */}
        <div className="max-w-4xl mb-10 sm:mb-14 lg:mb-16">
          <p className="text-xs sm:text-sm text-[#109387] font-bold uppercase tracking-wide mb-2 sm:mb-3">
            Das ganze Jahr im Blick
          </p>
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white leading-[1.1] mb-4 sm:mb-6">
            Saisonale Pflege nach Plan
          </h2>
          <p className="text-sm sm:text-base lg:text-lg text-white/70 font-semibold leading-relaxed">
            Jede Jahreszeit hat ihre eigenen Anforderungen. Wir wissen, was wann zu tun ist –
            und Sie müssen sich um nichts kümmern. Unser Pflegeplan stellt sicher, dass Ihre
            Außenanlage zu jeder Jahreszeit optimal gepflegt wird.
          </p>
        </div>

        {/* Jahreszeiten Tabs */}
        <div className="flex flex-wrap gap-2 sm:gap-3 mb-8 sm:mb-10 lg:mb-12">
          {jahreszeiten.map((jahreszeit) => {
            const Icon = jahreszeit.icon
            const isActive = jahreszeit.id === activeJahreszeit
            return (
              <button
                key={jahreszeit.id}
                onClick={() => setActiveJahreszeit(jahreszeit.id)}
                className={`flex items-center gap-2 sm:gap-3 px-4 sm:px-6 py-3 sm:py-4 rounded-[6px] font-bold text-sm sm:text-base transition-all duration-300 ${
                  isActive
                    ? 'bg-[#109387] text-white shadow-lg'
                    : 'bg-white/10 text-white/70 hover:bg-white/20 hover:text-white'
                }`}
              >
                <Icon className="w-4 h-4 sm:w-5 sm:h-5" />
                <span>{jahreszeit.name}</span>
                <span className="hidden sm:inline text-xs sm:text-sm font-semibold opacity-70">
                  {jahreszeit.zeitraum}
                </span>
              </button>
            )
          })}
        </div>

        {/* Active Jahreszeit Content */}
        <div className="grid lg:grid-cols-2 gap-8 sm:gap-10 lg:gap-16 items-start">
          {/* Left: Info Card */}
          <div className="bg-white/10 backdrop-blur-sm rounded-[12px] p-6 sm:p-8 lg:p-10">
            <div className="flex items-center gap-4 mb-6">
              <div
                className="w-14 h-14 sm:w-16 sm:h-16 rounded-[8px] flex items-center justify-center"
                style={{ backgroundColor: aktiveJahreszeit.farbe + '30' }}
              >
                <aktiveJahreszeit.icon
                  className="w-7 h-7 sm:w-8 sm:h-8"
                  style={{ color: aktiveJahreszeit.farbe }}
                />
              </div>
              <div>
                <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold text-white">
                  {aktiveJahreszeit.name}
                </h3>
                <p className="text-white/60 font-semibold text-sm sm:text-base">
                  {aktiveJahreszeit.zeitraum}
                </p>
              </div>
            </div>

            <p className="text-white/80 font-semibold leading-relaxed mb-6 text-sm sm:text-base">
              {aktiveJahreszeit.id === 'fruehling' &&
                'Das Frühjahr ist die wichtigste Zeit für Ihre Grünflächen. Nach dem Winter braucht der Rasen besondere Aufmerksamkeit, um kräftig und gesund in die Saison zu starten.'}
              {aktiveJahreszeit.id === 'sommer' &&
                'Im Sommer steht die regelmäßige Pflege im Vordergrund. Rasen mähen, Hecken schneiden, Beete pflegen – wir halten Ihre Anlage in Bestform.'}
              {aktiveJahreszeit.id === 'herbst' &&
                'Der Herbst bereitet auf den Winter vor. Laubbeseitigung ist jetzt besonders wichtig für die Verkehrssicherheit und um Rasenschäden zu vermeiden.'}
              {aktiveJahreszeit.id === 'winter' &&
                'Im Winter ruht die Vegetation, aber nicht unsere Arbeit. Winterdienst, Kontrollgänge und Gehölzschnitt sorgen für Sicherheit und bereiten das Frühjahr vor.'}
            </p>

            <a
              href="#kontakt"
              className="inline-flex items-center gap-2 bg-[#109387] hover:bg-[#0d7d72] text-white font-bold px-5 sm:px-6 py-2.5 sm:py-3 rounded-[6px] transition-colors text-sm sm:text-base"
            >
              Pflegeplan anfragen
            </a>
          </div>

          {/* Right: Arbeiten Liste - Sticky */}
          <div className="lg:sticky lg:top-24 lg:self-start">
            <h4 className="text-lg sm:text-xl font-bold text-white mb-4 sm:mb-6">
              Unsere Arbeiten im {aktiveJahreszeit.name}
            </h4>
            <div className="space-y-3">
              {aktiveJahreszeit.arbeiten.map((arbeit, index) => (
                <div
                  key={index}
                  className="flex items-start gap-3 bg-white/5 rounded-[6px] p-3 sm:p-4"
                >
                  <div className="w-6 h-6 rounded-full bg-[#109387]/30 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <Check className="w-3.5 h-3.5 text-[#109387]" />
                  </div>
                  <span className="text-white/90 font-semibold text-sm sm:text-base">
                    {arbeit}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom Info - Clickable */}
        <Link
          href="/kontakt"
          className="mt-10 sm:mt-12 lg:mt-16 bg-[#109387]/20 hover:bg-[#109387]/30 rounded-[8px] p-5 sm:p-6 lg:p-8 block transition-all duration-300 group"
        >
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
            <div>
              <h4 className="text-lg sm:text-xl font-bold text-white mb-2">
                Ganzjährige Betreuung aus einer Hand
              </h4>
              <p className="text-white/70 font-semibold text-sm sm:text-base">
                Ein Vertrag, ein Ansprechpartner – für alle Jahreszeiten. Kein Wechsel zwischen Gärtner im Sommer und Winterdienst im Winter.
              </p>
            </div>
            <span className="inline-flex items-center justify-center gap-2 bg-white text-[#012956] font-bold px-6 py-3 rounded-[6px] group-hover:bg-gray-100 transition-colors whitespace-nowrap text-sm sm:text-base">
              Jetzt beraten lassen
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </span>
          </div>
        </Link>

      </div>
    </section>
  )
}
