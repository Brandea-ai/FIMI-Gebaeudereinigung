'use client'

import { Shield, Clock, Users, Award, Leaf, HeartHandshake, ArrowRight } from 'lucide-react'

const vorteile = [
  {
    icon: Users,
    titel: 'Feste Teams',
    beschreibung: 'Keine wechselnden Gesichter. Ihr Reinigungsteam kennt Ihre Räume und weiß genau, worauf es ankommt.',
  },
  {
    icon: Clock,
    titel: 'Flexible Zeiten',
    beschreibung: 'Reinigung früh morgens, abends oder am Wochenende. Wir stören Ihren Betrieb nicht.',
  },
  {
    icon: Shield,
    titel: 'Vollversichert',
    beschreibung: 'Betriebshaftpflicht mit hoher Deckungssumme. Falls doch mal was passiert – Sie sind abgesichert.',
  },
  {
    icon: Award,
    titel: 'ISO-zertifiziert',
    beschreibung: 'Qualitätsmanagement nach ISO 9001. Dokumentierte Prozesse für gleichbleibende Ergebnisse.',
  },
  {
    icon: Leaf,
    titel: 'Umweltbewusst',
    beschreibung: 'Biologisch abbaubare Reinigungsmittel auf Wunsch. Gut für die Umwelt und Ihre Mitarbeiter.',
  },
  {
    icon: HeartHandshake,
    titel: 'Ein Ansprechpartner',
    beschreibung: 'Kein Call-Center. Sie haben einen festen Ansprechpartner der Ihre Anforderungen kennt.',
  },
]

const stats = [
  { zahl: '8+', label: 'Jahre', sublabel: 'Erfahrung' },
  { zahl: '120+', label: 'Kunden', sublabel: 'in Bayern' },
  { zahl: '2h', label: 'Reaktion', sublabel: 'garantiert' },
  { zahl: '98%', label: 'bleiben', sublabel: 'bei uns' },
]

export default function VorteileSection() {
  return (
    <section className="py-20 lg:py-28 bg-[#f8f9fa]">
      <div className="w-full max-w-[1800px] mx-auto px-6 lg:px-12 xl:px-20">

        {/* Header */}
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-8 mb-16 lg:mb-20">
          <div className="max-w-2xl">
            <p className="text-sm text-[#109387] font-bold uppercase tracking-wide mb-3">
              Warum FIMI
            </p>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#012956] leading-[1.1] mb-6">
              Das unterscheidet uns
            </h2>
            <p className="text-lg text-gray-700 font-semibold leading-relaxed">
              Reinigungsfirmen gibt es viele. Aber wie viele davon können Sie wirklich empfehlen?
              Bei uns bekommen Sie mehr als nur Reinigung – Sie bekommen einen zuverlässigen Partner.
            </p>
          </div>

          <a
            href="#contact-form"
            className="inline-flex items-center justify-center gap-3 bg-[#109387] hover:bg-[#0d7d72] text-white font-bold text-lg px-8 py-4 rounded-[6px] transition-all duration-300 group flex-shrink-0"
          >
            Kostenfreie Besichtigung
            <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
          </a>
        </div>

        {/* Vorteile Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16 lg:mb-20">
          {vorteile.map((vorteil) => {
            const Icon = vorteil.icon
            return (
              <div
                key={vorteil.titel}
                className="group bg-white p-8 rounded-[6px] shadow-sm hover:shadow-lg hover:bg-[#012956] transition-all duration-300"
              >
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 bg-[#109387]/10 rounded-[6px] flex items-center justify-center group-hover:bg-[#109387]/20 transition-colors">
                    <Icon size={24} className="text-[#109387]" />
                  </div>
                  <h3 className="text-xl font-bold text-[#012956] group-hover:text-white transition-colors">
                    {vorteil.titel}
                  </h3>
                </div>
                <p className="text-gray-600 font-semibold leading-relaxed group-hover:text-white/80 transition-colors">
                  {vorteil.beschreibung}
                </p>
              </div>
            )
          })}
        </div>

        {/* Stats Bar */}
        <div className="bg-[#012956] rounded-[12px] py-12 px-8 lg:py-16 lg:px-16">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-12">
            {stats.map((stat) => (
              <div key={stat.label} className="text-center">
                <div className="text-4xl lg:text-5xl font-bold text-[#109387] mb-2">
                  {stat.zahl}
                </div>
                <div className="text-white font-bold text-lg">
                  {stat.label}
                </div>
                <div className="text-white/60 font-semibold text-sm">
                  {stat.sublabel}
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  )
}
