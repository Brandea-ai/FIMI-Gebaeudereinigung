'use client'

import Link from 'next/link'
import { ArrowRight, CheckCircle, Factory, Cog, Warehouse, Droplets, Trash2, ClipboardCheck, Shield, Sparkles } from 'lucide-react'
import FadeIn from '@/components/FadeIn'

const leistungen = [
  {
    icon: Factory,
    titel: 'Hallenreinigung',
    beschreibung: 'Böden, Wände, Decken und Halleneinbauten. Mit Großflächenmaschinen effizient und gründlich.',
    link: '/leistungen/hallenreinigung',
  },
  {
    icon: Cog,
    titel: 'Maschinenreinigung',
    beschreibung: 'Produktionsmaschinen, CNC-Anlagen, Fertigungsstraßen. Nach Herstellervorgaben.',
    link: '/leistungen/maschinenreinigung',
  },
  {
    icon: Droplets,
    titel: 'Entölung & Entfettung',
    beschreibung: 'Öle, Fette, Kühlschmierstoffe fachgerecht entfernen. Rutschhemmende Ergebnisse.',
    link: null,
  },
  {
    icon: Sparkles,
    titel: 'Späne & Staubentfernung',
    beschreibung: 'Metallspäne, Produktionsstaub, Schleifstaub. Industriesauger und Kehrmaschinen.',
    link: null,
  },
  {
    icon: Warehouse,
    titel: 'Lager & Logistik',
    beschreibung: 'Hochregallager, Versandbereiche, Kommissionierzonen. Ohne Betriebsunterbrechung.',
    link: '/leistungen/hallenreinigung',
  },
  {
    icon: Shield,
    titel: 'Reinraum & Hygiene',
    beschreibung: 'Für Pharma, Elektronik, Lebensmittel. Nach HACCP und GMP-Standards.',
    link: null,
  },
  {
    icon: Trash2,
    titel: 'Entsorgung',
    beschreibung: 'Produktionsabfälle, Verpackungen, Sondermüll. Dokumentierte Entsorgung.',
    link: null,
  },
  {
    icon: ClipboardCheck,
    titel: 'Dokumentation',
    beschreibung: 'Reinigungsprotokolle, Checklisten, Fotodokumentation für Ihr QM-System.',
    link: null,
  },
]

const vorteile = [
  'Auch im laufenden Betrieb möglich',
  'Flexible Einsatzzeiten (Schichtpausen, Wochenende)',
  'Eigene Spezialausrüstung (kein Mietaufwand für Sie)',
  'Geschultes Personal mit Sicherheitsunterweisung',
  'Dokumentation für ISO-Audits und BG',
  'Festpreisgarantie nach Besichtigung',
]

export default function LeistungsumfangSection() {
  return (
    <section id="leistungen" className="py-20 lg:py-28 bg-[#f8f9fa]" aria-labelledby="leistungen-heading">
      <div className="w-full max-w-[1800px] mx-auto px-6 lg:px-12 xl:px-20">

        <div className="grid lg:grid-cols-[400px_1fr] xl:grid-cols-[450px_1fr] gap-12 lg:gap-20">

          {/* Sticky Sidebar */}
          <FadeIn direction="left" className="lg:sticky lg:top-32 lg:self-start">
            <aside>
              <p className="text-sm text-[#109387] font-semibold uppercase tracking-wide mb-3">
                Unser Leistungsumfang
              </p>
              <h2
                id="leistungen-heading"
                className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#012956] leading-[1.1] mb-6"
              >
                Was wir für Sie reinigen
              </h2>

              <p className="text-lg text-gray-700 font-semibold leading-relaxed mb-8">
                Industriereinigung ist mehr als Kehren und Wischen. Wir kennen die
                besonderen Anforderungen von Produktionsbetrieben und haben die
                richtige Ausrüstung für jeden Einsatz.
              </p>

              {/* Vorteile Liste */}
              <div className="bg-white rounded-[6px] p-6 mb-8">
                <h3 className="text-[#012956] font-bold text-lg mb-4">
                  Ihre Vorteile
                </h3>
                <ul className="space-y-3">
                  {vorteile.map((vorteil, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <CheckCircle size={20} className="text-[#109387] flex-shrink-0 mt-0.5" />
                      <span className="text-gray-700 font-semibold">{vorteil}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* CTA */}
              <a
                href="#contact-form"
                className="flex items-center justify-center gap-3 bg-[#109387] hover:bg-[#0d7d72] text-white font-bold text-lg px-8 py-4 rounded-[6px] transition-all duration-300 group w-full"
              >
                Kostenfreie Besichtigung
                <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
              </a>
            </aside>
          </FadeIn>

          {/* Leistungen Grid */}
          <div className="grid sm:grid-cols-2 gap-6" role="list" aria-label="Leistungsübersicht">
            {leistungen.map((leistung, index) => {
              const Icon = leistung.icon

              const cardContent = (
                <>
                  <div className={`w-14 h-14 rounded-[6px] flex items-center justify-center mb-4 transition-colors ${
                    leistung.link
                      ? 'bg-[#109387]/10 group-hover:bg-white/10'
                      : 'bg-[#109387]/10'
                  }`}>
                    <Icon
                      size={28}
                      strokeWidth={1.5}
                      className={`transition-colors ${
                        leistung.link
                          ? 'text-[#109387] group-hover:text-[#109387]'
                          : 'text-[#109387]'
                      }`}
                    />
                  </div>

                  <h3 className={`text-xl font-bold mb-2 transition-colors ${
                    leistung.link
                      ? 'text-[#012956] group-hover:text-white'
                      : 'text-[#012956]'
                  }`}>
                    {leistung.titel}
                  </h3>

                  <p className={`font-semibold leading-relaxed flex-grow transition-colors ${
                    leistung.link
                      ? 'text-gray-700 group-hover:text-white/80'
                      : 'text-gray-700'
                  }`}>
                    {leistung.beschreibung}
                  </p>

                  {leistung.link && (
                    <div className="mt-4 pt-4 border-t border-gray-100 group-hover:border-white/20 transition-colors">
                      <span className="inline-flex items-center gap-2 text-[#109387] font-bold text-sm group-hover:text-white transition-colors">
                        Mehr erfahren
                        <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                      </span>
                    </div>
                  )}
                </>
              )

              return (
                <FadeIn key={index} delay={index * 0.05}>
                  {leistung.link ? (
                    <Link
                      href={leistung.link}
                      className="bg-white rounded-[6px] p-6 h-full flex flex-col transition-all duration-300 group hover:shadow-lg hover:bg-[#012956] cursor-pointer"
                      role="listitem"
                    >
                      {cardContent}
                    </Link>
                  ) : (
                    <div
                      className="bg-white rounded-[6px] p-6 h-full flex flex-col"
                      role="listitem"
                    >
                      {cardContent}
                    </div>
                  )}
                </FadeIn>
              )
            })}
          </div>

        </div>

      </div>
    </section>
  )
}
