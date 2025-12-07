'use client'

import { Search, FileText, Users, TrendingDown, ShieldCheck, Cog, BarChart3, FileCheck } from 'lucide-react'

const services = [
  {
    icon: Search,
    title: 'Spend-Analyse',
    description: 'Transparenz über Ihre Einkaufsvolumina nach Warengruppen, Lieferanten und Kostenstellen. Wo liegt das größte Einsparpotenzial?',
  },
  {
    icon: TrendingDown,
    title: 'Kostenoptimierung',
    description: 'Systematische Kostenreduzierung durch Bündelung, Neuverhandlungen, Spezifikationsänderungen und alternative Beschaffungsquellen.',
  },
  {
    icon: Users,
    title: 'Lieferantenmanagement',
    description: 'Bewertung, Entwicklung und Steuerung Ihrer Lieferanten. Aufbau eines robusten Lieferantenportfolios mit Plan B.',
  },
  {
    icon: FileText,
    title: 'Ausschreibungsmanagement',
    description: 'Professionelle Vorbereitung und Durchführung von Ausschreibungen. Leistungsverzeichnisse, Angebotsvergleich, Vergabedokumentation.',
  },
  {
    icon: ShieldCheck,
    title: 'Vergabeberatung',
    description: 'Unterstützung für öffentliche Auftraggeber bei Vergabeverfahren nach VOL, VOB und VgV. Rechtssicher und effizient.',
  },
  {
    icon: FileCheck,
    title: 'Vertragsmanagement',
    description: 'Rahmenverträge verhandeln, Konditionen optimieren, Laufzeiten überwachen. Kein Vertrag läuft mehr unbemerkt aus.',
  },
  {
    icon: BarChart3,
    title: 'Einkaufscontrolling',
    description: 'Kennzahlen und Reporting für Ihren Einkauf. Savings-Tracking, Lieferanten-Performance, Prozess-KPIs.',
  },
  {
    icon: Cog,
    title: 'Prozessoptimierung',
    description: 'Einkaufsprozesse analysieren und verbessern. Von der Bedarfsmeldung bis zur Rechnungsprüfung – schneller, schlanker, digitaler.',
  },
]

export default function LeistungsumfangSection() {
  return (
    <section className="py-16 sm:py-20 lg:py-28 bg-white">
      <div className="w-full max-w-[1800px] mx-auto px-4 sm:px-6 md:px-8 lg:px-12 xl:px-20">

        {/* Header */}
        <div className="max-w-3xl mb-10 sm:mb-12 lg:mb-16">
          <span className="text-[#109387] font-bold text-xs sm:text-sm uppercase tracking-wide mb-3 sm:mb-4 block">
            Unser Leistungsspektrum
          </span>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-bold text-[#109387] mb-4 sm:mb-6">
            Was umfasst unser Beschaffungsmanagement?
          </h2>
          <p className="text-base sm:text-lg lg:text-xl text-gray-600 font-semibold leading-relaxed">
            Vom operativen Tagesgeschäft bis zur strategischen Neuausrichtung.
            Wir unterstützen modular – Sie entscheiden, welche Bausteine Sie benötigen.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5 lg:gap-6">
          {services.map((service, index) => (
            <div
              key={index}
              className="group bg-[#f8f9fa] hover:bg-[#012956] rounded-[6px] p-5 sm:p-6 transition-all duration-500"
            >
              {/* Icon - Outlined Style */}
              <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-[6px] border-2 border-[#109387] group-hover:bg-[#109387] flex items-center justify-center mb-4 sm:mb-5 transition-all duration-300">
                <service.icon className="w-6 h-6 sm:w-7 sm:h-7 text-[#109387] group-hover:text-white transition-colors duration-300" strokeWidth={1.5} aria-hidden="true" />
              </div>

              {/* Title */}
              <h3 className="text-base sm:text-lg lg:text-xl font-bold text-[#012956] group-hover:text-white mb-2 sm:mb-3 transition-colors duration-500">
                {service.title}
              </h3>

              {/* Description */}
              <p className="text-sm sm:text-base text-gray-600 group-hover:text-white/80 font-semibold leading-relaxed transition-colors duration-500">
                {service.description}
              </p>
            </div>
          ))}
        </div>

        {/* Bottom Note - Komplett klickbar */}
        <a
          href="#kontakt"
          className="mt-10 sm:mt-12 lg:mt-16 bg-[#012956] hover:bg-[#01376e] rounded-[6px] p-6 sm:p-8 lg:p-10 flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4 lg:gap-8 transition-colors group cursor-pointer block"
        >
          <div>
            <h3 className="text-xl sm:text-2xl font-bold text-white mb-2">
              Modularer Ansatz
            </h3>
            <p className="text-white/80 font-semibold text-sm sm:text-base lg:text-lg">
              Sie benötigen nicht alles? Kein Problem. Wir arbeiten projektbasiert an einzelnen Themen
              oder übernehmen Ihren gesamten strategischen Einkauf.
            </p>
          </div>
          <span className="inline-flex items-center justify-center gap-2 bg-[#109387] group-hover:bg-[#0d7d72] text-white font-bold text-sm sm:text-base px-6 py-3 sm:py-4 rounded-[6px] transition-all whitespace-nowrap flex-shrink-0">
            Beratung anfragen
          </span>
        </a>

      </div>
    </section>
  )
}
