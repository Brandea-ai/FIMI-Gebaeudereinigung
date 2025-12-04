'use client'

import { Building2, Factory, ShoppingBag, RefreshCw, ArrowRight, AlertTriangle } from 'lucide-react'

const scenarios = [
  {
    icon: Building2,
    persona: 'Hausverwalter',
    problem: '7 Uhr morgens müssen die Gehwege frei sein – wer räumt so früh?',
    painPoint: 'Verkehrssicherungspflicht ab 7 Uhr, Mieter beschweren sich, Haftungsrisiko',
    solution: 'Feste Räumzeiten ab 5:30 Uhr. Dokumentation für Ihre Hausverwaltung. Wir betreuen mehrere Objekte gleichzeitig.',
    highlight: 'Räumung ab 5:30 Uhr',
  },
  {
    icon: Factory,
    persona: 'Geschäftsführer',
    problem: 'Der Firmenparkplatz ist vereist – Mitarbeiter rutschen fast aus',
    painPoint: 'Arbeitsunfälle, Haftung als Arbeitgeber, BG-Prüfung',
    solution: 'Betriebsgelände-Paket mit voller Haftungsübernahme. Räumung vor Schichtbeginn. Rechtssichere Dokumentation.',
    highlight: 'Haftungsübernahme inklusive',
  },
  {
    icon: ShoppingBag,
    persona: 'Center Manager',
    problem: 'Bei Glätte meiden Kunden unser Einkaufszentrum – Umsatzverlust',
    painPoint: 'Kundenfrequenz sinkt, Mieter beschweren sich, Image leidet',
    solution: 'Schnelleinsatz bei Schneefall. Sichere Kundenwege zu jeder Öffnungszeit. 24/7-Bereitschaft auch am Wochenende.',
    highlight: '24/7 Wochenend-Service',
  },
  {
    icon: RefreshCw,
    persona: 'Facility Manager',
    problem: 'Unser bisheriger Dienst hat uns im Schneechaos hängen lassen',
    painPoint: 'Unzuverlässigkeit, keine Erreichbarkeit, Vertrauensverlust',
    solution: '24/7-Einsatzzentrale. Backup-Teams bei Großwetterlagen. 2h Reaktionszeit garantiert. Ein Ansprechpartner.',
    highlight: '2h Notfall-Reaktion',
  },
]

export default function ProblemLoesungSection() {
  return (
    <section id="probleme" className="py-12 sm:py-16 lg:py-28 bg-white">
      <div className="w-full max-w-[1800px] mx-auto px-4 sm:px-6 md:px-8 lg:px-12 xl:px-20">

        {/* Header */}
        <div className="max-w-3xl mb-10 sm:mb-12 lg:mb-16">
          <span className="text-sm text-gray-500 font-semibold uppercase tracking-wide mb-3 block">
            Kennen Sie das?
          </span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-[#012956] leading-tight mb-4 sm:mb-6">
            Winterprobleme, die wir täglich lösen
          </h2>
          <p className="text-base sm:text-lg text-gray-600 font-semibold leading-relaxed">
            Schnee und Eis stellen Unternehmen vor echte Herausforderungen. Die Verkehrssicherungspflicht
            wartet nicht – und das Haftungsrisiko ist real. So helfen wir unseren Kunden.
          </p>
        </div>

        {/* Scenario Cards */}
        <div className="grid md:grid-cols-2 gap-4 sm:gap-6 lg:gap-8">
          {scenarios.map((scenario, index) => (
            <div
              key={index}
              className="group bg-[#f8f9fa] hover:bg-white rounded-[8px] p-5 sm:p-6 lg:p-8 transition-all duration-300 hover:shadow-xl border border-transparent hover:border-gray-100"
            >
              {/* Header mit Icon und Persona */}
              <div className="flex items-start gap-3 sm:gap-4 mb-4 sm:mb-5">
                <div className="w-11 h-11 sm:w-12 sm:h-12 lg:w-14 lg:h-14 bg-[#012956] group-hover:bg-[#109387] rounded-[6px] flex items-center justify-center flex-shrink-0 transition-colors duration-300">
                  <scenario.icon className="w-5 h-5 sm:w-6 sm:h-6 lg:w-7 lg:h-7 text-white" strokeWidth={1.5} />
                </div>
                <div>
                  <span className="text-[#109387] font-bold text-xs sm:text-sm uppercase tracking-wide">
                    {scenario.persona}
                  </span>
                  <h3 className="text-base sm:text-lg lg:text-xl font-bold text-[#012956] leading-snug mt-1">
                    "{scenario.problem}"
                  </h3>
                </div>
              </div>

              {/* Pain Point */}
              <div className="flex items-start gap-2 sm:gap-3 mb-4 sm:mb-5 bg-red-50 rounded-[6px] p-3 sm:p-4">
                <AlertTriangle className="w-4 h-4 sm:w-5 sm:h-5 text-red-500 flex-shrink-0 mt-0.5" />
                <p className="text-red-700 font-semibold text-xs sm:text-sm leading-relaxed">
                  {scenario.painPoint}
                </p>
              </div>

              {/* Solution */}
              <div className="mb-4 sm:mb-5">
                <p className="text-gray-600 font-semibold text-sm sm:text-base leading-relaxed">
                  <span className="text-[#109387] font-bold">FIMI-Lösung:</span> {scenario.solution}
                </p>
              </div>

              {/* Highlight Badge */}
              <div className="flex items-center justify-between">
                <span className="inline-flex items-center bg-[#109387]/10 text-[#109387] font-bold text-xs sm:text-sm px-3 sm:px-4 py-1.5 sm:py-2 rounded-[6px]">
                  {scenario.highlight}
                </span>
                <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 text-gray-300 group-hover:text-[#109387] group-hover:translate-x-1 transition-all" />
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="mt-10 sm:mt-12 lg:mt-16 text-center">
          <p className="text-gray-500 font-semibold text-sm sm:text-base mb-4 sm:mb-6">
            Erkennen Sie Ihre Situation? Sprechen Sie mit uns.
          </p>
          <a
            href="#kontakt"
            className="inline-flex items-center justify-center gap-2 sm:gap-3 bg-[#109387] hover:bg-[#0d7d72] text-white font-bold text-sm sm:text-base lg:text-lg px-6 sm:px-8 py-3 sm:py-4 rounded-[6px] transition-all duration-300 group"
          >
            Kostenfreie Beratung anfragen
            <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 group-hover:translate-x-1 transition-transform" />
          </a>
        </div>

      </div>
    </section>
  )
}
