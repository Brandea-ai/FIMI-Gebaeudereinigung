'use client'

import Image from 'next/image'
import { Shield, Clock, Users, Award, ArrowRight } from 'lucide-react'
import FadeIn from '@/components/FadeIn'

const trustFaktoren = [
  {
    icon: Clock,
    titel: 'Schluss mit Warten',
    beschreibung: 'Ihre Anfrage landet nicht im Nirgendwo. Antwort innerhalb von 2 Stunden. Am selben Tag vor Ort wenn es brennt.',
  },
  {
    icon: Users,
    titel: 'Immer dieselben Gesichter',
    beschreibung: 'Kein Durcheinander mit wechselndem Personal. Sie kennen Ihr Reinigungsteam und Ihr Team kennt Ihre Räume.',
  },
  {
    icon: Shield,
    titel: 'Kein Risiko für Sie',
    beschreibung: 'Vollversichert, geschult, zuverlässig. Unsere Mitarbeiter arbeiten seit Jahren bei uns. Keine Fremden in Ihrem Gebäude.',
  },
  {
    icon: Award,
    titel: 'Preis ohne Überraschungen',
    beschreibung: 'Was wir anbieten gilt. Keine versteckten Kosten. Keine plötzlichen Aufschläge. Sie wissen vorher was Sie zahlen.',
  },
]

const stats = [
  { zahl: '8+', label: 'Jahre', sublabel: 'Erfahrung' },
  { zahl: '90+', label: 'Mitarbeiter', sublabel: 'im Team' },
  { zahl: '2h', label: 'Reaktionszeit', sublabel: 'garantiert' },
  { zahl: '100%', label: 'Zufriedenheit', sublabel: 'oder nochmal' },
]

export default function TrustContainer() {
  return (
    <section id="trust" className="py-20 lg:py-28 bg-white" aria-labelledby="trust-heading">
      <div className="w-full max-w-[1800px] mx-auto px-6 lg:px-12 xl:px-20">

        {/* Header */}
        <FadeIn>
          <header className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-8 lg:gap-12 mb-16 lg:mb-20">

            {/* Headline - Grün als Primärfarbe */}
            <h2
              id="trust-heading"
              className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#109387] leading-[1.1]"
            >
              Warum Unternehmen in Bayern auf FIMI vertrauen
            </h2>

            {/* CTA Block */}
            <div className="flex-shrink-0">
              <p className="text-gray-700 font-semibold mb-3">
                Jetzt unverbindlich anfragen
              </p>
              <a
                href="#contact-form"
                className="inline-flex items-center justify-center gap-3 bg-[#109387] hover:bg-[#0d7d72] text-white font-bold text-lg px-8 py-4 rounded-[6px] transition-all duration-300 group"
              >
                Kostenfreie Besichtigung
                <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
              </a>
            </div>
          </header>
        </FadeIn>

        {/* Trust Faktoren Grid */}
        <div
          className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16 lg:mb-20"
          role="list"
          aria-label="Unsere Versprechen"
        >
          {trustFaktoren.map((faktor, index) => (
            <FadeIn key={faktor.titel} delay={index * 0.1}>
              <article
                className="group flex flex-col p-8 bg-[#f8f9fa] rounded-[6px] hover:bg-[#012956] transition-colors duration-300 h-full"
                role="listitem"
              >
                {/* Icon + Titel - Beide grün, bei Hover weiß */}
                <div className="flex items-center gap-3 mb-4">
                  <faktor.icon
                    size={28}
                    className="text-[#109387] group-hover:text-white transition-colors"
                    strokeWidth={1.5}
                    aria-hidden="true"
                  />
                  <h3 className="text-lg font-bold text-[#109387] group-hover:text-white transition-colors">
                    {faktor.titel}
                  </h3>
                </div>

                <p className="text-gray-700 font-semibold leading-relaxed group-hover:text-white/90 transition-colors">
                  {faktor.beschreibung}
                </p>
              </article>
            </FadeIn>
          ))}
        </div>

        {/* Stats Bar mit Bild - Größer und prominenter */}
        <FadeIn>
          <div
            className="bg-[#012956] rounded-[6px] overflow-hidden"
            role="region"
            aria-label="FIMI in Zahlen"
          >
            <div className="grid lg:grid-cols-[1fr_400px] xl:grid-cols-[1fr_500px]">
              {/* Stats */}
              <div className="py-12 px-8 lg:py-16 lg:px-16">
                <div className="grid grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-8">
                  {stats.map((stat) => (
                    <div key={stat.label} className="text-center">
                      <div className="text-4xl lg:text-5xl xl:text-6xl font-bold text-[#109387] mb-2">
                        {stat.zahl}
                      </div>
                      <div className="text-white font-bold text-base lg:text-lg">
                        {stat.label}
                      </div>
                      <div className="text-white/60 font-semibold text-sm lg:text-base">
                        {stat.sublabel}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              {/* Bild */}
              <div className="relative hidden lg:block h-64 lg:h-auto">
                <Image
                  src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?q=80&w=800&auto=format&fit=crop"
                  alt="FIMI Team bei der Arbeit"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </FadeIn>

      </div>
    </section>
  )
}
