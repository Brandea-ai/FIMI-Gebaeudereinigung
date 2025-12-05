'use client'

import { TrendingUp, Clock, Users, AlertTriangle } from 'lucide-react'

const problems = [
  {
    icon: TrendingUp,
    title: 'Steigende Materialkosten',
    problem: 'Die Einkaufspreise steigen kontinuierlich',
    description: 'Rohstoffpreise, Energiekosten, Inflation – Ihre Margen schrumpfen. Ohne aktives Gegensteuern frisst der Einkauf Ihren Gewinn.',
  },
  {
    icon: Clock,
    title: 'Keine Zeit für Optimierung',
    problem: 'Das Tagesgeschäft bindet alle Ressourcen',
    description: 'Rahmenverträge laufen aus, Ausschreibungen bleiben liegen, strategische Projekte werden verschoben. Ihr Team schafft kaum das Operative.',
  },
  {
    icon: Users,
    title: 'Überlastete Einkaufsabteilung',
    problem: 'Zu viele Aufgaben, zu wenig Kapazität',
    description: 'Neue Mitarbeiter einzustellen dauert Monate. Externe Unterstützung ist sofort verfügbar und bringt frisches Know-how mit.',
  },
  {
    icon: AlertTriangle,
    title: 'Lieferantenrisiken',
    problem: 'Abhängigkeit von einzelnen Lieferanten',
    description: 'Ein Lieferant fällt aus und Ihre Produktion steht. Fehlende Alternativen, keine Verhandlungsmacht, kein Plan B.',
  },
]

export default function ProblemSection() {
  return (
    <section className="py-16 sm:py-20 lg:py-28 bg-white">
      <div className="w-full max-w-[1800px] mx-auto px-4 sm:px-6 md:px-8 lg:px-12 xl:px-20">

        {/* Header */}
        <div className="max-w-3xl mb-10 sm:mb-12 lg:mb-16">
          <span className="text-[#109387] font-bold text-xs sm:text-sm uppercase tracking-wide mb-3 sm:mb-4 block">
            Herausforderungen im Einkauf
          </span>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-bold text-[#109387] mb-4 sm:mb-6">
            Kennen Sie diese Situationen?
          </h2>
          <p className="text-base sm:text-lg lg:text-xl text-gray-600 font-semibold leading-relaxed">
            Der Einkauf verantwortet oft 50 bis 70 Prozent der Gesamtkosten eines Unternehmens.
            Jede Verbesserung wirkt sich direkt auf Ihren Gewinn aus – der sogenannte Gewinnhebel Einkauf.
          </p>
        </div>

        {/* Problems Grid */}
        <div className="grid md:grid-cols-2 gap-4 sm:gap-6 lg:gap-8">
          {problems.map((item, index) => (
            <div
              key={index}
              className="group bg-[#f8f9fa] hover:bg-[#012956] rounded-[6px] p-5 sm:p-6 lg:p-8 transition-all duration-500"
            >
              <div className="flex items-start gap-4 sm:gap-5">
                {/* Icon */}
                <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-[6px] bg-[#109387]/10 group-hover:bg-[#109387] flex items-center justify-center flex-shrink-0 transition-all duration-500">
                  <item.icon className="w-6 h-6 sm:w-7 sm:h-7 text-[#109387] group-hover:text-white transition-colors duration-500" strokeWidth={1.5} />
                </div>

                <div className="flex-1">
                  {/* Title */}
                  <h3 className="text-lg sm:text-xl lg:text-2xl font-bold text-[#012956] group-hover:text-white mb-2 transition-colors duration-500">
                    {item.title}
                  </h3>

                  {/* Problem (italic) */}
                  <p className="text-sm sm:text-base text-[#109387] group-hover:text-[#109387] font-semibold italic mb-3">
                    &bdquo;{item.problem}&ldquo;
                  </p>

                  {/* Description */}
                  <p className="text-sm sm:text-base text-gray-600 group-hover:text-white/80 font-semibold leading-relaxed transition-colors duration-500">
                    {item.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Statement */}
        <div className="mt-10 sm:mt-12 lg:mt-16 text-center">
          <p className="text-lg sm:text-xl lg:text-2xl font-bold text-[#012956]">
            Jeden Tag ohne Optimierung kostet Sie bares Geld.
          </p>
          <p className="text-base sm:text-lg text-gray-600 font-semibold mt-2">
            Die gute Nachricht: Mit externer Unterstützung lassen sich diese Probleme schnell lösen.
          </p>
        </div>

      </div>
    </section>
  )
}
