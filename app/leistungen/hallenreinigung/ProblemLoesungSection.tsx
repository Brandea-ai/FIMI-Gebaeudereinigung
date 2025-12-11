'use client'

import Image from 'next/image'
import { ArrowRight, Droplets, Factory, Calendar, AlertTriangle } from 'lucide-react'

const probleme = [
  {
    icon: Droplets,
    problem: 'Der Hallenboden ist ölig und rutschig – ein Sicherheitsrisiko',
    loesung: 'Professionelle Entölung mit Spezialgeräten. Wir entfernen Öl, Fett und Schmierstoffe rückstandsfrei. Arbeitssicherheit wiederhergestellt, Unfallgefahr gebannt.',
  },
  {
    icon: Factory,
    problem: 'Die Halle muss sauber werden, aber der Betrieb darf nicht stillstehen',
    loesung: 'Wir reinigen im laufenden Betrieb – bereichsweise, in Schichtpausen oder am Wochenende. Ihre Produktion läuft weiter, während wir arbeiten.',
  },
  {
    icon: Calendar,
    problem: 'Ein Audit steht an – die Halle muss kurzfristig sauber sein',
    loesung: 'Grundreinigung innerhalb von 48 Stunden. Von Hallenboden bis Decke, von Regalen bis Beleuchtung. Damit Sie beim Audit glänzen.',
  },
  {
    icon: AlertTriangle,
    problem: 'Die letzte Reinigungsfirma hat gepfuscht – Qualität war mangelhaft',
    loesung: 'Dokumentierte Qualitätskontrollen nach jedem Einsatz. Ein fester Ansprechpartner der Verantwortung übernimmt. Zufriedenheitsgarantie oder kostenlose Nacharbeit.',
  },
]

export default function ProblemLoesungSection() {
  return (
    <section id="probleme" className="py-12 sm:py-16 lg:py-28 bg-[#f8f9fa]">
      <div className="w-full max-w-[1800px] mx-auto px-4 sm:px-6 md:px-8 lg:px-12 xl:px-20">

        {/* Header */}
        <div className="max-w-3xl mb-8 sm:mb-12 lg:mb-16">
          <span className="text-[#109387] font-bold text-xs sm:text-sm uppercase tracking-wide mb-3 sm:mb-4 block">
            Kennen Sie das?
          </span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-[#012956] leading-tight mb-4 sm:mb-6">
            Probleme, die wir täglich in Hallen lösen
          </h2>
          <p className="text-base sm:text-lg text-gray-600 font-semibold leading-relaxed">
            Verschmutzte Hallenböden, verstaubte Regale, ein Audit vor der Tür –
            als Betriebsleiter oder Facility Manager kennen Sie diese Situationen.
            Wir haben die Lösungen.
          </p>
        </div>

        {/* Problem-Lösung Grid */}
        <div className="grid md:grid-cols-2 gap-4 sm:gap-6">
          {probleme.map((item, index) => (
            <div
              key={index}
              className="bg-white rounded-[6px] p-4 sm:p-6 lg:p-8 shadow-sm hover:shadow-lg transition-all duration-300 group"
            >
              <div className="flex items-start gap-3 sm:gap-4 lg:gap-5">
                {/* Icon - Outlined Style */}
                <div className="w-10 h-10 sm:w-12 sm:h-12 lg:w-14 lg:h-14 rounded-[6px] border-2 border-[#109387] group-hover:bg-[#109387] flex items-center justify-center flex-shrink-0 transition-all duration-300">
                  <item.icon className="w-5 h-5 sm:w-6 sm:h-6 lg:w-7 lg:h-7 text-[#109387] group-hover:text-white transition-colors duration-300" strokeWidth={1.5} aria-hidden="true" />
                </div>

                <div className="flex-1">
                  {/* Problem */}
                  <p className="text-gray-500 font-semibold italic mb-2 sm:mb-3 text-sm sm:text-base">
                    &ldquo;{item.problem}&rdquo;
                  </p>

                  {/* Pfeil */}
                  <div className="flex items-center gap-1.5 sm:gap-2 mb-2 sm:mb-3">
                    <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 text-[#109387]" aria-hidden="true" />
                    <span className="text-[#109387] font-bold text-xs sm:text-sm uppercase tracking-wide">
                      Unsere Lösung
                    </span>
                  </div>

                  {/* Lösung */}
                  <p className="text-gray-700 font-semibold leading-relaxed text-sm sm:text-base">
                    {item.loesung}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Image + CTA */}
        <div className="mt-10 sm:mt-12 lg:mt-16 grid md:grid-cols-2 gap-6 sm:gap-8 items-center">
          <div className="relative h-[220px] sm:h-[280px] md:h-[350px] lg:h-[400px] rounded-[6px] overflow-hidden">
            <picture>
              <source
                srcSet="/images/leistungen/hallenreinigung/lagerhalle-sauber-384w.avif 384w, /images/leistungen/hallenreinigung/lagerhalle-sauber-768w.avif 768w, /images/leistungen/hallenreinigung/lagerhalle-sauber-1024w.avif 1024w, /images/leistungen/hallenreinigung/lagerhalle-sauber.avif 1200w"
                sizes="(max-width: 768px) 100vw, 50vw"
                type="image/avif"
              />
              <source
                srcSet="/images/leistungen/hallenreinigung/lagerhalle-sauber-384w.webp 384w, /images/leistungen/hallenreinigung/lagerhalle-sauber-768w.webp 768w, /images/leistungen/hallenreinigung/lagerhalle-sauber-1024w.webp 1024w, /images/leistungen/hallenreinigung/lagerhalle-sauber.webp 1200w"
                sizes="(max-width: 768px) 100vw, 50vw"
                type="image/webp"
              />
              <Image
                src="/images/leistungen/hallenreinigung/lagerhalle-sauber.avif"
                alt="Saubere Lagerhalle nach professioneller Hallenreinigung"
                fill
                className="object-cover"
              />
            </picture>
          </div>

          <div className="md:pl-4 lg:pl-8">
            <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold text-[#012956] mb-3 sm:mb-4">
              Eine saubere Halle ist kein Luxus – sondern Standard
            </h3>
            <p className="text-gray-600 font-semibold leading-relaxed mb-4 sm:mb-6 text-sm sm:text-base">
              Saubere Hallenböden bedeuten Arbeitssicherheit. Entstaubte Regale bedeuten
              Produktqualität. Eine gepflegte Halle bedeutet professioneller Eindruck
              bei Kunden und Auditoren. Wir sorgen dafür, dass Ihre Halle diesen
              Standard hält – regelmäßig oder bei Bedarf.
            </p>
            <a
              href="#kontakt"
              className="inline-flex items-center gap-2 bg-[#109387] hover:bg-[#0d7d72] text-white font-bold px-4 sm:px-6 py-2.5 sm:py-3 rounded-[6px] transition-colors group text-sm sm:text-base"
            >
              Jetzt Problem lösen
              <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 group-hover:translate-x-1 transition-transform" aria-hidden="true" />
            </a>
          </div>
        </div>

      </div>
    </section>
  )
}
