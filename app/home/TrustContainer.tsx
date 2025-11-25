'use client'

import { Shield, Clock, Users, Award, ArrowRight } from 'lucide-react'

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
  { zahl: 'ISO', label: '9001 & 14001', sublabel: 'zertifiziert' },
  { zahl: '2h', label: 'Reaktionszeit', sublabel: 'garantiert' },
  { zahl: '100%', label: 'Zufriedenheit', sublabel: 'oder wir kommen nochmal' },
]

export default function TrustContainer() {
  return (
    <section className="py-20 lg:py-28 bg-white" aria-labelledby="trust-heading">
      <div className="w-full max-w-[1800px] mx-auto px-6 lg:px-12 xl:px-20">

        {/* Header - Sauber ausgerichtet */}
        <header className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6 lg:gap-12 mb-16 lg:mb-20">

          {/* Left: Headline */}
          <h2
            id="trust-heading"
            className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#012956] leading-[1.15] max-w-2xl"
          >
            Warum Unternehmen in Bayern{' '}
            <span className="text-[#109387]">auf FIMI vertrauen</span>
          </h2>

          {/* Right: CTA */}
          <a
            href="#contact-form"
            className="inline-flex items-center justify-center gap-3 bg-[#109387] hover:bg-[#0d7d72] text-white font-bold text-lg px-8 py-4 rounded-[6px] transition-all duration-300 group whitespace-nowrap flex-shrink-0"
          >
            Kostenfreie Besichtigung
            <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
          </a>
        </header>

        {/* Trust Faktoren Grid - Einheitliche Höhen */}
        <div
          className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16 lg:mb-20"
          role="list"
          aria-label="Unsere Versprechen"
        >
          {trustFaktoren.map((faktor) => (
            <article
              key={faktor.titel}
              className="group flex flex-col p-8 border border-gray-200 rounded-[6px] hover:border-[#109387] transition-colors duration-300 h-full"
              role="listitem"
            >
              <faktor.icon
                size={28}
                className="text-[#109387] mb-4"
                strokeWidth={1.5}
                aria-hidden="true"
              />

              <h3 className="text-lg font-bold text-[#012956] mb-2">
                {faktor.titel}
              </h3>

              <p className="text-gray-600 leading-relaxed text-[15px]">
                {faktor.beschreibung}
              </p>
            </article>
          ))}
        </div>

        {/* Stats Bar */}
        <div
          className="bg-[#012956] rounded-[6px] py-10 px-8 lg:py-12 lg:px-16"
          role="region"
          aria-label="FIMI in Zahlen"
        >
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat) => (
              <div key={stat.label} className="text-center">
                <div className="text-4xl lg:text-5xl font-bold text-[#109387] mb-1">
                  {stat.zahl}
                </div>
                <div className="text-white font-semibold">
                  {stat.label}
                </div>
                <div className="text-white/50 text-sm">
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
