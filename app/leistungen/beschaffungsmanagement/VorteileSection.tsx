'use client'

import { MapPin, Zap, Euro, Users, Shield, Handshake } from 'lucide-react'

const advantages = [
  {
    icon: MapPin,
    title: 'Regionale Präsenz',
    description: 'Wir sind vor Ort in Bayern. Persönliche Betreuung, kurze Wege, Verständnis für die regionale Wirtschaft.',
  },
  {
    icon: Zap,
    title: 'Schneller Start',
    description: 'Kein monatelanges Auswahlverfahren. Nach der Erstberatung können wir innerhalb weniger Tage loslegen.',
  },
  {
    icon: Euro,
    title: 'Faire Konditionen',
    description: 'Transparente Preise, keine versteckten Kosten. Auf Wunsch erfolgsabhängige Vergütung – Sie zahlen nur bei Erfolg.',
  },
  {
    icon: Users,
    title: 'Praxisorientiert',
    description: 'Keine theoretischen Konzepte, die im Regal verstauben. Wir setzen um, was wir empfehlen. Hands-on statt Overhead.',
  },
  {
    icon: Shield,
    title: 'Branchenübergreifend',
    description: 'Erfahrung aus Industrie, Handel, Dienstleistung und öffentlichem Sektor. Best Practices aus verschiedenen Welten.',
  },
  {
    icon: Handshake,
    title: 'Partnerschaftlich',
    description: 'Wir arbeiten mit Ihrem Team, nicht gegen es. Wissenstransfer ist Teil unseres Ansatzes. Ihr Einkauf wird besser.',
  },
]

export default function VorteileSection() {
  return (
    <section className="py-16 sm:py-20 lg:py-28 bg-[#012956]">
      <div className="w-full max-w-[1800px] mx-auto px-4 sm:px-6 md:px-8 lg:px-12 xl:px-20">

        {/* Header */}
        <div className="max-w-3xl mb-10 sm:mb-12 lg:mb-16">
          <span className="text-[#109387] font-bold text-xs sm:text-sm uppercase tracking-wide mb-3 sm:mb-4 block">
            Warum FIMI
          </span>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-bold text-white mb-4 sm:mb-6">
            Ihre Vorteile mit FIMI Beschaffungsmanagement
          </h2>
          <p className="text-base sm:text-lg lg:text-xl text-white/70 font-semibold leading-relaxed">
            Wir sind nicht die größte Beratung. Aber vielleicht die richtige für Sie.
            Regional verankert, pragmatisch orientiert, erfolgsfokussiert.
          </p>
        </div>

        {/* Advantages Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5 lg:gap-6">
          {advantages.map((advantage, index) => (
            <div
              key={index}
              className="group bg-white/5 hover:bg-white/10 backdrop-blur-sm border border-white/10 hover:border-[#109387] rounded-[6px] p-5 sm:p-6 lg:p-8 transition-all duration-300"
            >
              {/* Icon */}
              <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-[6px] border-2 border-[#109387] group-hover:bg-[#109387] flex items-center justify-center mb-4 sm:mb-5 transition-all duration-300">
                <advantage.icon className="w-6 h-6 sm:w-7 sm:h-7 text-[#109387] group-hover:text-white transition-colors duration-300" strokeWidth={1.5} />
              </div>

              {/* Title */}
              <h3 className="text-lg sm:text-xl lg:text-2xl font-bold text-white mb-2 sm:mb-3">
                {advantage.title}
              </h3>

              {/* Description */}
              <p className="text-sm sm:text-base text-white/70 font-semibold leading-relaxed">
                {advantage.description}
              </p>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="mt-10 sm:mt-12 lg:mt-16 text-center">
          <p className="text-lg sm:text-xl lg:text-2xl font-bold text-white mb-4 sm:mb-6">
            Überzeugen Sie sich selbst – in einem unverbindlichen Gespräch.
          </p>
          <a
            href="#kontakt"
            className="inline-flex items-center justify-center gap-2 bg-[#109387] hover:bg-[#0d7d72] text-white font-bold text-sm sm:text-base lg:text-lg px-6 sm:px-8 py-3 sm:py-4 rounded-[6px] transition-all duration-300 shadow-lg hover:shadow-xl"
          >
            Kostenfreie Erstberatung
          </a>
        </div>

      </div>
    </section>
  )
}
