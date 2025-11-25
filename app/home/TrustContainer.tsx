'use client'

import { Shield, Clock, Users, Award, ArrowRight, CheckCircle } from 'lucide-react'

const trustFaktoren = [
  {
    icon: Clock,
    titel: 'Schluss mit Warten',
    beschreibung: 'Ihre Anfrage landet nicht im Nirgendwo. Wir antworten innerhalb von 2 Stunden und sind am selben Tag vor Ort, wenn es brennt.',
  },
  {
    icon: Users,
    titel: 'Immer dieselben Gesichter',
    beschreibung: 'Kein Durcheinander mit wechselndem Personal. Sie kennen Ihr Reinigungsteam - und Ihr Team kennt Ihre Räume.',
  },
  {
    icon: Shield,
    titel: 'Kein Risiko für Sie',
    beschreibung: 'Vollversichert, geschult, zuverlässig. Unsere Mitarbeiter arbeiten seit Jahren bei uns - keine Fremden in Ihrem Gebäude.',
  },
  {
    icon: Award,
    titel: 'Preis ohne Überraschungen',
    beschreibung: 'Was wir anbieten, gilt. Keine versteckten Kosten, keine plötzlichen Aufschläge. Sie wissen vorher, was Sie zahlen.',
  },
]

const stats = [
  { zahl: '8+', label: 'Jahre Erfahrung', sublabel: 'in der Region' },
  { zahl: '85', label: 'Unternehmen', sublabel: 'vertrauen uns' },
  { zahl: '2h', label: 'Reaktionszeit', sublabel: 'garantiert' },
  { zahl: '100%', label: 'Zufriedenheit', sublabel: 'oder wir kommen nochmal' },
]

export default function TrustContainer() {
  return (
    <section className="py-20 lg:py-28 bg-white" aria-labelledby="trust-heading">
      <div className="w-full max-w-[1800px] mx-auto px-6 lg:px-12 xl:px-20">

        {/* Header - Titel links, Text + CTA rechts */}
        <header className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-end mb-16 lg:mb-20">

          {/* Left: Headline */}
          <div>
            <h2
              id="trust-heading"
              className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#012956] leading-[1.15]"
            >
              Unzufrieden mit Ihrer{' '}
              <span className="text-[#109387]">aktuellen Reinigung?</span>
            </h2>
          </div>

          {/* Right: Text + CTA */}
          <div className="lg:text-right">
            <p className="text-lg md:text-xl text-gray-600 leading-relaxed mb-6">
              Schmutzige Ecken, unzuverlässiges Personal, ständig wechselnde Ansprechpartner
              - das kennen viele Unternehmen. Bei uns ist das anders.
            </p>
            <a
              href="#contact-form"
              className="inline-flex items-center justify-center gap-3 bg-[#109387] hover:bg-[#0d7d72] text-white font-bold text-lg px-8 py-4 rounded-[6px] transition-all duration-300 group"
            >
              Kostenfreie Besichtigung vereinbaren
              <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
            </a>
          </div>
        </header>

        {/* Trust Faktoren Grid - Icons ohne Hintergrund */}
        <div
          className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8 mb-16 lg:mb-20"
          role="list"
          aria-label="Unsere Versprechen"
        >
          {trustFaktoren.map((faktor, index) => (
            <article
              key={faktor.titel}
              className="group p-6 lg:p-8 border-2 border-gray-100 rounded-[6px] hover:border-[#109387]/30 transition-all duration-300"
              role="listitem"
            >
              {/* Icon - Clean ohne Hintergrund */}
              <faktor.icon
                size={32}
                className="text-[#109387] mb-5"
                strokeWidth={1.5}
                aria-hidden="true"
              />

              <h3 className="text-xl font-bold text-[#012956] mb-3 group-hover:text-[#109387] transition-colors">
                {faktor.titel}
              </h3>

              <p className="text-gray-600 leading-relaxed">
                {faktor.beschreibung}
              </p>
            </article>
          ))}
        </div>

        {/* Stats Bar - Hochwertiger mit Sublabels */}
        <div
          className="bg-[#012956] rounded-[6px] p-8 lg:p-12"
          role="region"
          aria-label="FIMI in Zahlen"
        >
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
            {stats.map((stat) => (
              <div key={stat.label} className="text-center">
                <div className="text-4xl md:text-5xl lg:text-6xl font-bold text-[#109387] mb-1">
                  {stat.zahl}
                </div>
                <div className="text-white font-semibold text-base lg:text-lg">
                  {stat.label}
                </div>
                <div className="text-white/60 text-sm mt-1">
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
