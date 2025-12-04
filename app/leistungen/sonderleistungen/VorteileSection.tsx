'use client'

import Image from 'next/image'
import { ArrowRight, Clock, Users, Shield, Award, HeartHandshake, FileCheck } from 'lucide-react'

const vorteile = [
  {
    icon: Clock,
    title: '2h Reaktionszeit',
    description: 'Bei kurzfristigem Personalbedarf sind wir innerhalb von 2 Stunden vor Ort. Keine langen Wartezeiten, keine Ausfälle.',
  },
  {
    icon: Users,
    title: 'Geschultes Personal',
    description: 'Alle Mitarbeiter durchlaufen interne Schulungen. Serviceorientiert, professionell im Auftreten, zuverlässig im Einsatz.',
  },
  {
    icon: Shield,
    title: 'Ein Ansprechpartner',
    description: 'Ihr fester Ansprechpartner kennt Ihre Anforderungen und koordiniert alle Einsätze. One-Face-to-Customer für maximale Effizienz.',
  },
  {
    icon: Award,
    title: 'Qualitätsgarantie',
    description: 'Nicht zufrieden? Wir bessern nach – ohne Diskussion. Regelmäßige Feedbackgespräche sichern gleichbleibende Qualität.',
  },
  {
    icon: HeartHandshake,
    title: 'Flexible Modelle',
    description: 'Stundenweise, tageweise oder dauerhaft – wir passen uns Ihrem Bedarf an. Keine starren Verträge, keine Mindestlaufzeiten.',
  },
  {
    icon: FileCheck,
    title: 'Alles aus einer Hand',
    description: 'Personaldienstleistungen kombiniert mit unseren Reinigungsservices. Ein Partner für alle Facility-Anforderungen.',
  },
]

export default function VorteileSection() {
  return (
    <section id="vorteile" className="py-12 sm:py-16 lg:py-28 bg-[#012956]">
      <div className="w-full max-w-[1800px] mx-auto px-4 sm:px-6 md:px-8 lg:px-12 xl:px-20">

        <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 xl:gap-20 items-center">

          {/* Left: Image + Stats */}
          <div className="relative">
            {/* Main Image */}
            <div className="relative h-[350px] sm:h-[450px] lg:h-[550px] rounded-[8px] overflow-hidden">
              <Image
                src="https://images.unsplash.com/photo-1521737711867-e3b97375f902?q=80&w=1600&auto=format&fit=crop"
                alt="FIMI Personaldienstleistungen Team"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#012956]/60 to-transparent" />
            </div>

            {/* Floating Stats Box */}
            <div className="absolute -bottom-6 -right-4 sm:right-6 bg-white rounded-[8px] p-5 sm:p-6 shadow-2xl max-w-[280px]">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-14 h-14 bg-[#109387]/10 rounded-[6px] flex items-center justify-center">
                  <Users className="w-7 h-7 text-[#109387]" />
                </div>
                <div>
                  <div className="text-3xl font-bold text-[#012956]">500+</div>
                  <div className="text-gray-600 font-semibold text-sm">Erfolgreiche Einsätze</div>
                </div>
              </div>
              <p className="text-gray-600 font-semibold text-sm">
                Jährlich vermitteln wir Personal für Empfang, Hotels und Events in ganz Bayern.
              </p>
            </div>
          </div>

          {/* Right: Content */}
          <div>
            <span className="text-[#109387] font-bold text-xs sm:text-sm uppercase tracking-wide mb-3 sm:mb-4 block">
              Warum FIMI?
            </span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white leading-tight mb-4 sm:mb-6">
              Ihr Vorteil bei
              <span className="block text-[#109387]">Personaldienstleistungen</span>
            </h2>
            <p className="text-base sm:text-lg text-white/80 font-semibold leading-relaxed mb-8 sm:mb-10">
              Als etabliertes Facility-Unternehmen verstehen wir, worauf es ankommt:
              Zuverlässigkeit, Professionalität und Flexibilität. Unsere Mitarbeiter sind
              nicht nur qualifiziert – sie repräsentieren Ihr Unternehmen.
            </p>

            {/* Benefits Grid */}
            <div className="grid sm:grid-cols-2 gap-4 sm:gap-6 mb-8 sm:mb-10">
              {vorteile.map((vorteil, index) => {
                const Icon = vorteil.icon
                return (
                  <div
                    key={index}
                    className="bg-white/5 backdrop-blur-sm rounded-[6px] p-4 sm:p-5 hover:bg-white/10 transition-colors"
                  >
                    <div className="flex items-start gap-3">
                      <div className="w-10 h-10 bg-[#109387]/20 rounded-[6px] flex items-center justify-center flex-shrink-0">
                        <Icon className="w-5 h-5 text-[#109387]" strokeWidth={1.5} />
                      </div>
                      <div>
                        <h3 className="text-white font-bold text-base sm:text-lg mb-1">
                          {vorteil.title}
                        </h3>
                        <p className="text-white/70 font-semibold text-sm leading-relaxed">
                          {vorteil.description}
                        </p>
                      </div>
                    </div>
                  </div>
                )
              })}
            </div>

            {/* CTA */}
            <a
              href="#kontakt"
              className="inline-flex items-center justify-center gap-3 bg-[#109387] hover:bg-[#0d7d72] text-white font-bold text-base sm:text-lg px-6 sm:px-8 py-3 sm:py-4 rounded-[6px] transition-all duration-300 group"
            >
              Jetzt unverbindlich anfragen
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </a>
          </div>

        </div>

      </div>
    </section>
  )
}
