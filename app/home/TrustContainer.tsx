'use client'

import { Shield, Clock, Users, Award, ArrowRight } from 'lucide-react'

const trustFaktoren = [
  {
    icon: Clock,
    titel: 'Schnelle Reaktionszeit',
    beschreibung: 'Anfragen beantworten wir innerhalb von 2 Stunden. Probleme lösen wir noch am selben Tag.',
    highlight: '2h Antwortzeit',
  },
  {
    icon: Users,
    titel: 'Feste Ansprechpartner',
    beschreibung: 'Sie erreichen immer dieselben Mitarbeiter. Kein anonymes Callcenter, sondern echte Menschen.',
    highlight: 'Persönlicher Kontakt',
  },
  {
    icon: Shield,
    titel: 'Zuverlässige Teams',
    beschreibung: 'Unsere Reinigungskräfte sind geschult, versichert und arbeiten seit Jahren für uns.',
    highlight: 'Geprüftes Personal',
  },
  {
    icon: Award,
    titel: 'Faire Preise',
    beschreibung: 'Transparente Kalkulation ohne versteckte Kosten. Sie wissen vorher genau, was Sie zahlen.',
    highlight: 'Keine Überraschungen',
  },
]

const stats = [
  { zahl: '8', label: 'Jahre Erfahrung' },
  { zahl: '85', label: 'Zufriedene Kunden' },
  { zahl: '8', label: 'Standorte in Bayern' },
  { zahl: '2h', label: 'Reaktionszeit' },
]

export default function TrustContainer() {
  return (
    <section className="py-24 bg-white">
      <div className="w-full max-w-[1800px] mx-auto px-6 lg:px-12 xl:px-20">

        {/* Header */}
        <div className="max-w-3xl mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#012956] leading-tight mb-6">
            Warum Unternehmen in Bayern
            <br />
            <span className="text-[#109387]">auf FIMI vertrauen</span>
          </h2>
          <p className="text-lg md:text-xl text-gray-600 leading-relaxed">
            Sie suchen nicht einfach eine Reinigungsfirma – Sie suchen einen Partner,
            der Ihre Anforderungen versteht und zuverlässig liefert. Das ist unser Anspruch.
          </p>
        </div>

        {/* Trust Faktoren Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
          {trustFaktoren.map((faktor) => (
            <div
              key={faktor.titel}
              className="bg-gray-50 rounded-[6px] p-8 hover:shadow-lg transition-shadow duration-300"
            >
              <div className="w-14 h-14 bg-[#109387]/10 rounded-[6px] flex items-center justify-center mb-6">
                <faktor.icon size={28} className="text-[#109387]" />
              </div>
              <div className="text-sm font-bold text-[#109387] mb-2">
                {faktor.highlight}
              </div>
              <h3 className="text-xl font-bold text-[#012956] mb-3">
                {faktor.titel}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {faktor.beschreibung}
              </p>
            </div>
          ))}
        </div>

        {/* Stats Bar */}
        <div className="bg-[#012956] rounded-[6px] p-8 lg:p-12">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
            {stats.map((stat) => (
              <div key={stat.label} className="text-center">
                <div className="text-4xl md:text-5xl lg:text-6xl font-bold text-[#109387] mb-2">
                  {stat.zahl}
                </div>
                <div className="text-white font-semibold text-lg">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="mt-12 text-center">
          <a
            href="#contact-form"
            className="inline-flex items-center justify-center gap-3 bg-[#109387] hover:bg-[#0d7d72] text-white font-bold text-lg px-8 py-4 rounded-[6px] transition-all duration-300 group shadow-lg"
          >
            Kostenfreie Besichtigung anfragen
            <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
          </a>
        </div>

      </div>
    </section>
  )
}
