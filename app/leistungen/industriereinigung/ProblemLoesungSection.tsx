'use client'

import { AlertTriangle, Calendar, Cog } from 'lucide-react'
import FadeIn from '@/components/FadeIn'

const problems = [
  {
    icon: AlertTriangle,
    problem: 'Öliger Hallenboden, rutschig und gefährlich',
    kontext: 'Unfallrisiko für Mitarbeiter, BG-Vorschriften nicht erfüllt, Haftungsgefahr für Geschäftsführung.',
    loesung: 'Professionelle Entölung mit Industriesaugern und Spezialreinigern. Rutschhemmende Ergebnisse, dokumentiert für Ihre Berufsgenossenschaft. Innerhalb von 24-48 Stunden erledigt.',
    ergebnis: 'Sichere Arbeitsbedingungen & Dokumentation für BG',
  },
  {
    icon: Calendar,
    problem: 'Audit nächste Woche, Produktion muss blitzsauber sein',
    kontext: 'Automobilzulieferer, ISO-Audit, Kunde kommt zur Inspektion. Zeitdruck, normale Reinigung reicht nicht.',
    loesung: 'Kurzfristige Intensivreinigung auch am Wochenende. Wir kennen die Anforderungen von Automotive-Audits und wissen, worauf Prüfer achten. Sie bestehen das Audit.',
    ergebnis: 'Audit bestanden, Kundenbeziehung gesichert',
  },
  {
    icon: Cog,
    problem: 'Maschinen verschmutzt, aber Produktion darf nicht stoppen',
    kontext: 'Produktionsdruck, keine Zeit für Stillstand. Maschinen müssen laufen, trotzdem ist Reinigung überfällig.',
    loesung: 'Reinigung im laufenden Betrieb oder in Schichtpausen. Unsere Teams arbeiten schnell und stören Ihre Produktion nicht. Wir planen um Ihre Fertigungszeiten herum.',
    ergebnis: 'Saubere Maschinen ohne Produktionsausfall',
  },
]

export default function ProblemLoesungSection() {
  return (
    <section id="probleme" className="py-20 lg:py-28 bg-white" aria-labelledby="probleme-heading">
      <div className="w-full max-w-[1800px] mx-auto px-6 lg:px-12 xl:px-20">

        {/* Section Header */}
        <FadeIn className="text-center mb-16">
          <p className="text-sm text-[#109387] font-semibold uppercase tracking-wide mb-3">
            Wir kennen Ihre Herausforderungen
          </p>
          <h2
            id="probleme-heading"
            className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#012956] leading-[1.1] mb-6"
          >
            Kommt Ihnen das bekannt vor?
          </h2>
          <p className="text-lg text-gray-700 font-semibold leading-relaxed max-w-2xl mx-auto">
            Diese Situationen erleben wir täglich bei unseren Industriekunden.
            Und genau dafür haben wir Lösungen.
          </p>
        </FadeIn>

        {/* Problem Cards */}
        <div className="space-y-8">
          {problems.map((item, index) => {
            const Icon = item.icon
            const isEven = index % 2 === 1

            return (
              <FadeIn key={index} delay={index * 0.1}>
                <article className="bg-[#f8f9fa] rounded-[6px] overflow-hidden">
                  <div className={`grid lg:grid-cols-2 ${isEven ? 'lg:grid-flow-dense' : ''}`}>

                    {/* Problem Side */}
                    <div className={`p-8 lg:p-12 bg-[#012956] ${isEven ? 'lg:col-start-2' : ''}`}>
                      <div className="flex items-center gap-4 mb-6">
                        <div className="w-14 h-14 bg-white/10 rounded-[6px] flex items-center justify-center">
                          <Icon size={28} className="text-[#109387]" strokeWidth={1.5} />
                        </div>
                        <span className="text-white/60 font-semibold text-sm uppercase tracking-wide">
                          Das Problem
                        </span>
                      </div>

                      <h3 className="text-2xl lg:text-3xl font-bold text-white mb-4 leading-tight">
                        „{item.problem}"
                      </h3>

                      <p className="text-white/70 font-semibold leading-relaxed">
                        {item.kontext}
                      </p>
                    </div>

                    {/* Solution Side */}
                    <div className={`p-8 lg:p-12 flex flex-col justify-center ${isEven ? 'lg:col-start-1 lg:row-start-1' : ''}`}>
                      <span className="text-[#109387] font-semibold text-sm uppercase tracking-wide mb-4">
                        Unsere Lösung
                      </span>

                      <p className="text-gray-700 font-semibold leading-relaxed text-lg mb-6">
                        {item.loesung}
                      </p>

                      <div className="bg-[#109387]/10 border-l-4 border-[#109387] rounded-r-[6px] px-5 py-4">
                        <p className="text-[#012956] font-bold">
                          Ergebnis: {item.ergebnis}
                        </p>
                      </div>
                    </div>

                  </div>
                </article>
              </FadeIn>
            )
          })}
        </div>

        {/* CTA */}
        <FadeIn className="text-center mt-12">
          <p className="text-gray-700 font-semibold mb-4">
            Sie haben eine ähnliche Situation?
          </p>
          <a
            href="#contact-form"
            className="inline-flex items-center gap-2 text-[#109387] font-bold hover:text-[#012956] transition-colors"
          >
            Sprechen Sie mit uns darüber
            <span className="group-hover:translate-x-1 transition-transform">→</span>
          </a>
        </FadeIn>

      </div>
    </section>
  )
}
