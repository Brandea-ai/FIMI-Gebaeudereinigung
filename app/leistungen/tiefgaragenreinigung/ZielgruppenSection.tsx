'use client'

import { ArrowRight, Home, Building2, Factory, Wrench } from 'lucide-react'

const zielgruppen = [
  {
    icon: Home,
    name: 'Eigentümergemeinschaften (WEG)',
    hook: 'Beschwerden bei der Eigentümerversammlung?',
    beschreibung: 'Sie kennen das: Eigentümer beschweren sich über Ölflecken, schlechte Gerüche oder verschmutzte Wände in der Tiefgarage. Als Verwaltungsbeirat oder Eigentümer stehen Sie unter Druck, schnell eine Lösung zu finden.',
    vorteile: [
      'Dokumentation für WEG-Protokoll',
      'Kosten umlagefähig nach §2 BetrKV',
      'Transparente Festpreise für die Beschlussfassung',
      'Terminabstimmung mit Ankündigung an alle Eigentümer',
    ],
    cta: 'Angebot für Ihre WEG',
  },
  {
    icon: Building2,
    name: 'Hausverwaltungen',
    hook: 'Ein Partner für alle Ihre Objekte',
    beschreibung: 'Sie betreuen mehrere Wohnanlagen mit Tiefgaragen? Wir sind Ihr zuverlässiger Partner für alle Objekte – mit einheitlicher Qualität, Rahmenverträgen und einer Ansprechperson für alle Standorte.',
    vorteile: [
      'Rahmenverträge für alle Objekte',
      'Eine Rechnung, ein Ansprechpartner',
      'Flexible Terminplanung nach Ihren Vorgaben',
      'Automatische Erinnerung für Folgeaufträge',
    ],
    cta: 'Rahmenvertrag anfragen',
  },
  {
    icon: Factory,
    name: 'Gewerbeimmobilien',
    hook: 'Der erste Eindruck zählt',
    beschreibung: 'Mieter und Kunden bilden sich ihre Meinung schon in der Tiefgarage. Eine verschmutzte Parkebene vermittelt Unprofessionalität. Wir sorgen für einen gepflegten Eindruck, der zu Ihrem Objekt passt.',
    vorteile: [
      'Reinigung außerhalb der Geschäftszeiten',
      'Professionelles Erscheinungsbild',
      'Werterhalt Ihrer Immobilie',
      'Mieter- und Kundenzufriedenheit',
    ],
    cta: 'Besichtigung vereinbaren',
  },
  {
    icon: Wrench,
    name: 'Facility Manager',
    hook: 'Ein Ansprechpartner für alles',
    beschreibung: 'Als Facility Manager haben Sie viele Gewerke zu koordinieren. Wir integrieren uns nahtlos in Ihr bestehendes Konzept und übernehmen die Tiefgaragenreinigung zuverlässig – dokumentiert und termingerecht.',
    vorteile: [
      'Integration in FM-Konzept',
      'Dokumentierte Leistungserbringung',
      'Verlässliche Terminplanung',
      'Reporting nach Ihren Vorgaben',
    ],
    cta: 'In FM-Konzept integrieren',
  },
]

export default function ZielgruppenSection() {
  return (
    <section id="zielgruppen" className="py-12 sm:py-16 lg:py-28 bg-white">
      <div className="w-full max-w-[1800px] mx-auto px-4 sm:px-6 md:px-8 lg:px-12 xl:px-20">

        {/* Header */}
        <div className="max-w-3xl mb-8 sm:mb-12 lg:mb-16">
          <span className="text-[#109387] font-bold text-xs sm:text-sm uppercase tracking-wide mb-3 sm:mb-4 block">
            Für wen wir arbeiten
          </span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-[#012956] leading-tight mb-4 sm:mb-6 whitespace-nowrap">
            Tiefgaragenreinigung für jeden Bedarf
          </h2>
          <p className="text-base sm:text-lg text-gray-600 font-semibold leading-relaxed">
            Ob WEG, Hausverwaltung oder Gewerbeimmobilie – wir kennen die Anforderungen
            Ihrer Branche und liefern maßgeschneiderte Lösungen.
          </p>
        </div>

        {/* Zielgruppen Grid */}
        <div className="grid md:grid-cols-2 gap-4 sm:gap-6 lg:gap-8">
          {zielgruppen.map((gruppe, index) => {
            const Icon = gruppe.icon
            return (
              <div
                key={index}
                className="bg-[#f8f9fa] rounded-[6px] p-5 sm:p-6 lg:p-8 group hover:bg-[#012956] transition-all duration-500"
              >
                {/* Icon + Header */}
                <div className="flex items-start gap-4 mb-4 sm:mb-5">
                  <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-[6px] bg-[#109387]/10 group-hover:bg-[#109387] flex items-center justify-center flex-shrink-0 transition-all duration-500">
                    <Icon className="w-6 h-6 sm:w-7 sm:h-7 text-[#109387] group-hover:text-white transition-colors duration-500" strokeWidth={1.5} />
                  </div>
                  <div>
                    <h3 className="text-lg sm:text-xl font-bold text-[#012956] group-hover:text-white mb-1 transition-colors duration-500">
                      {gruppe.name}
                    </h3>
                    <p className="text-[#109387] font-bold text-sm sm:text-base">
                      {gruppe.hook}
                    </p>
                  </div>
                </div>

                {/* Beschreibung */}
                <p className="text-gray-600 group-hover:text-white/80 font-semibold text-sm sm:text-base leading-relaxed mb-4 sm:mb-6 transition-colors duration-500">
                  {gruppe.beschreibung}
                </p>

                {/* Vorteile */}
                <div className="space-y-2 sm:space-y-3 mb-5 sm:mb-6">
                  {gruppe.vorteile.map((vorteil, vIndex) => (
                    <div key={vIndex} className="flex items-start gap-2 sm:gap-3">
                      <span className="text-[#109387] font-bold mt-0.5">✓</span>
                      <span className="text-gray-700 group-hover:text-white font-semibold text-sm transition-colors duration-500">
                        {vorteil}
                      </span>
                    </div>
                  ))}
                </div>

                {/* CTA */}
                <a
                  href="#kontakt"
                  className="inline-flex items-center gap-2 bg-[#109387] hover:bg-[#0d7d72] text-white font-bold px-4 sm:px-5 py-2.5 sm:py-3 rounded-[6px] transition-colors group/btn text-sm sm:text-base"
                >
                  {gruppe.cta}
                  <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 group-hover/btn:translate-x-1 transition-transform" />
                </a>
              </div>
            )
          })}
        </div>

        {/* Bottom Info */}
        <div className="mt-10 sm:mt-12 lg:mt-16 bg-[#012956] rounded-[6px] p-5 sm:p-6 lg:p-8 text-center">
          <h3 className="text-lg sm:text-xl lg:text-2xl font-bold text-white mb-2 sm:mb-3">
            Sie haben eine andere Anforderung?
          </h3>
          <p className="text-white/80 font-semibold mb-4 sm:mb-6 text-sm sm:text-base">
            Wir finden für jede Situation die passende Lösung. Sprechen Sie uns an.
          </p>
          <a
            href="tel:+4987143033460"
            className="inline-flex items-center gap-2 bg-white hover:bg-gray-100 text-[#012956] font-bold px-6 py-3 rounded-[6px] transition-colors text-sm sm:text-base"
          >
            0871 430 334 60
          </a>
        </div>

      </div>
    </section>
  )
}
