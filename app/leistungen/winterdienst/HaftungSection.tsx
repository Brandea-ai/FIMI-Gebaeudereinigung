'use client'

import { Shield, FileText, BadgeCheck, AlertTriangle, ArrowRight } from 'lucide-react'

const haftungsPunkte = [
  {
    icon: Shield,
    title: 'Haftungsübernahme',
    description: 'Mit Vertragsabschluss übertragen Sie die Verkehrssicherungspflicht auf FIMI. Im Schadensfall haften wir – nicht Sie.',
    highlight: 'Vertragliche Absicherung',
  },
  {
    icon: FileText,
    title: 'Rechtssichere Dokumentation',
    description: 'Jeder Einsatz wird mit Uhrzeit, Fotos und GPS-Daten protokolliert. Diese Nachweise schützen Sie bei Streitfällen.',
    highlight: 'Digitale Einsatzprotokolle',
  },
  {
    icon: BadgeCheck,
    title: 'Betriebshaftpflicht',
    description: 'Unsere Betriebshaftpflichtversicherung deckt Schäden bis zu 5 Millionen Euro ab. Für Ihre Sicherheit.',
    highlight: '5 Mio. € Deckungssumme',
  },
]

export default function HaftungSection() {
  return (
    <section id="haftung" className="py-12 sm:py-16 lg:py-28 bg-[#012956]">
      <div className="w-full max-w-[1800px] mx-auto px-4 sm:px-6 md:px-8 lg:px-12 xl:px-20">

        <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 xl:gap-20 items-center">

          {/* Left: Content */}
          <div>
            <span className="text-[#109387] font-bold text-xs sm:text-sm uppercase tracking-wide mb-3 sm:mb-4 block">
              Ihre Sicherheit
            </span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white leading-tight mb-4 sm:mb-6">
              Wir übernehmen die Verkehrssicherungspflicht
            </h2>
            <p className="text-base sm:text-lg text-white/80 font-semibold leading-relaxed mb-6 sm:mb-8">
              Als Eigentümer oder Verwalter tragen Sie die Verantwortung für sichere Wege auf Ihrem Grundstück.
              Bei Unfällen durch Glätte drohen Schadensersatzforderungen und Bußgelder.
              Wir nehmen Ihnen diese Last ab – rechtssicher und dokumentiert.
            </p>

            {/* Warning Box */}
            <div className="bg-slate-400/15 border border-slate-400/25 rounded-[8px] p-4 sm:p-5 lg:p-6 mb-6 sm:mb-8">
              <div className="flex items-start gap-3 sm:gap-4">
                <AlertTriangle className="w-5 h-5 sm:w-6 sm:h-6 text-[#109387] flex-shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-white font-bold text-sm sm:text-base lg:text-lg mb-1 sm:mb-2">
                    Wussten Sie?
                  </h4>
                  <p className="text-white/80 font-semibold text-xs sm:text-sm lg:text-base leading-relaxed">
                    Bei Verletzung der Räum- und Streupflicht drohen Bußgelder bis zu <span className="text-[#109387] font-bold">50.000&nbsp;Euro</span>. Hinzu kommen Schadensersatzansprüche bei&nbsp;Personenschäden.
                  </p>
                </div>
              </div>
            </div>

            {/* CTA */}
            <a
              href="#kontakt"
              className="inline-flex items-center justify-center gap-2 sm:gap-3 bg-[#109387] hover:bg-[#0d7d72] text-white font-bold text-sm sm:text-base lg:text-lg px-5 sm:px-6 lg:px-8 py-3 sm:py-3.5 lg:py-4 rounded-[6px] transition-all duration-300 group"
            >
              Jetzt absichern lassen
              <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 group-hover:translate-x-1 transition-transform" />
            </a>
          </div>

          {/* Right: 3 Cards */}
          <div className="space-y-3 sm:space-y-4 lg:space-y-5">
            {haftungsPunkte.map((punkt, index) => (
              <div
                key={index}
                className="bg-white/10 backdrop-blur-sm border border-white/10 rounded-[8px] p-5 sm:p-6 lg:p-8 hover:bg-white/15 transition-colors duration-300"
              >
                <div className="flex items-start gap-4 sm:gap-5">
                  <div className="w-12 h-12 sm:w-14 sm:h-14 bg-[#109387] rounded-[6px] flex items-center justify-center flex-shrink-0">
                    <punkt.icon className="w-6 h-6 sm:w-7 sm:h-7 text-white" strokeWidth={1.5} />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-lg sm:text-xl lg:text-2xl font-bold text-white mb-2 sm:mb-3">
                      {punkt.title}
                    </h3>
                    <p className="text-white/70 font-semibold text-sm sm:text-base leading-relaxed mb-3 sm:mb-4">
                      {punkt.description}
                    </p>
                    <span className="inline-flex items-center bg-[#109387]/30 text-[#109387] font-bold text-xs sm:text-sm px-3 sm:px-4 py-1.5 sm:py-2 rounded-[6px]">
                      {punkt.highlight}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>

        </div>

        {/* Bottom Trust Bar */}
        <div className="mt-10 sm:mt-12 lg:mt-16 pt-8 sm:pt-10 lg:pt-12 border-t border-white/10">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 lg:gap-8">
            <div className="text-center">
              <div className="text-2xl sm:text-3xl lg:text-4xl font-bold text-[#109387] mb-1 sm:mb-2">§ 823</div>
              <div className="text-white/60 font-semibold text-xs sm:text-sm">BGB Verkehrssicherung</div>
            </div>
            <div className="text-center">
              <div className="text-2xl sm:text-3xl lg:text-4xl font-bold text-[#109387] mb-1 sm:mb-2">7:00</div>
              <div className="text-white/60 font-semibold text-xs sm:text-sm">Uhr Räumpflicht-Beginn</div>
            </div>
            <div className="text-center">
              <div className="text-2xl sm:text-3xl lg:text-4xl font-bold text-[#109387] mb-1 sm:mb-2">5 Mio €</div>
              <div className="text-white/60 font-semibold text-xs sm:text-sm">Versicherungsschutz</div>
            </div>
            <div className="text-center">
              <div className="text-2xl sm:text-3xl lg:text-4xl font-bold text-[#109387] mb-1 sm:mb-2">100%</div>
              <div className="text-white/60 font-semibold text-xs sm:text-sm">Dokumentiert</div>
            </div>
          </div>
        </div>

      </div>
    </section>
  )
}
