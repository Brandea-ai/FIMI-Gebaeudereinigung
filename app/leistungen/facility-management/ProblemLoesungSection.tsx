'use client'

import { AlertTriangle, PhoneOff, Users, ArrowRight, CheckCircle, Sparkles } from 'lucide-react'

const problems = [
  {
    icon: AlertTriangle,
    title: 'Vier Rechnungen, vier Ansprechpartner',
    description: 'Reinigung, Hausmeister, Winterdienst, Grünpflege – jeder Dienstleister hat eigene Standards, eigene Termine, eigene Probleme.',
  },
  {
    icon: PhoneOff,
    title: 'Wenn es schneit, erreichen Sie niemanden',
    description: 'Der Winterdienst war nicht da, aber Sie haben drei Nummern und keiner fühlt sich zuständig. Ihre Mieter beschweren sich.',
  },
  {
    icon: Users,
    title: 'Die linke Hand weiß nicht, was die rechte tut',
    description: 'Der Hausmeister kennt den Reinigungsplan nicht. Die Grünpflege hat den Müll nicht mitgenommen. Sie koordinieren ständig.',
  },
]

const solutions = [
  'Ein Vertrag für alle Leistungen',
  'Eine Rechnung pro Monat',
  'Ein Ansprechpartner, der alles koordiniert',
  'Einheitlich hohe Qualität',
  '2 Stunden Reaktionszeit – garantiert',
  'Festes Personal, das Ihr Objekt kennt',
]

export default function ProblemLoesungSection() {
  return (
    <section className="py-16 sm:py-20 lg:py-28 bg-white">
      <div className="w-full max-w-[1800px] mx-auto px-4 sm:px-6 md:px-8 lg:px-12 xl:px-20">

        {/* Section Header */}
        <div className="text-center mb-12 sm:mb-16">
          <span className="text-[#109387] font-bold text-xs sm:text-sm uppercase tracking-wide mb-3 sm:mb-4 block">
            Das Problem
          </span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-[#012956] leading-[1.1] mb-4 sm:mb-6">
            Kennen Sie das?
          </h2>
          <p className="text-base sm:text-lg text-gray-600 font-semibold max-w-3xl mx-auto">
            Montag: Der Winterdienst war nicht da. Dienstag: Die Reinigung hat den Müll nicht mitgenommen.
            Mittwoch: Der Hausmeister ist krank, niemand weiß Bescheid.
          </p>
        </div>

        {/* Problem Cards */}
        <div className="grid md:grid-cols-3 gap-6 sm:gap-8 mb-16 sm:mb-20">
          {problems.map((problem, index) => (
            <div
              key={index}
              className="bg-[#f8f9fa] rounded-[6px] p-6 sm:p-8 border-l-4 border-red-400"
            >
              <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-[6px] bg-red-100 flex items-center justify-center mb-4 sm:mb-6">
                <problem.icon className="w-6 h-6 sm:w-7 sm:h-7 text-red-500" strokeWidth={1.5} />
              </div>
              <h3 className="text-lg sm:text-xl font-bold text-[#012956] mb-3">
                {problem.title}
              </h3>
              <p className="text-gray-600 font-semibold leading-relaxed text-sm sm:text-base">
                {problem.description}
              </p>
            </div>
          ))}
        </div>

        {/* Solution Section */}
        <div className="bg-[#012956] rounded-[6px] p-6 sm:p-10 lg:p-16">
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-center">

            {/* Left: Solution Text */}
            <div>
              <div className="inline-flex items-center bg-[#109387]/20 rounded-[6px] px-3 sm:px-4 py-1.5 sm:py-2 mb-4 sm:mb-6">
                <Sparkles className="w-4 h-4 sm:w-5 sm:h-5 text-[#109387] mr-2" />
                <span className="text-xs sm:text-sm font-bold text-[#109387] uppercase tracking-wide">
                  Die Lösung
                </span>
              </div>

              <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white mb-4 sm:mb-6 leading-[1.1]">
                Mit FIMI Facility Management haben Sie einen Partner für alles
              </h3>

              <p className="text-white/80 font-semibold leading-relaxed text-base sm:text-lg mb-6 sm:mb-8">
                Stellen Sie sich vor: Ein Anruf genügt. Egal ob die Heizung streikt, Schnee liegt oder
                die Reinigung angepasst werden muss – wir kümmern uns. Ihr persönlicher Ansprechpartner
                kennt Ihr Objekt und koordiniert alle Leistungen. Sie haben Zeit für das, was wirklich zählt.
              </p>

              <a
                href="#contact-form"
                className="inline-flex items-center gap-2 sm:gap-3 bg-[#109387] hover:bg-[#0d7d72] text-white font-bold text-sm sm:text-base lg:text-lg px-5 sm:px-6 lg:px-8 py-3 sm:py-3.5 lg:py-4 rounded-[6px] transition-all duration-300 group"
              >
                Jetzt Beratung anfragen
                <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 group-hover:translate-x-1 transition-transform" />
              </a>
            </div>

            {/* Right: Solution List */}
            <div className="bg-white/10 backdrop-blur-sm rounded-[6px] p-6 sm:p-8">
              <h4 className="text-white font-bold text-lg sm:text-xl mb-6">
                Das ändert sich mit FIMI:
              </h4>
              <ul className="space-y-4">
                {solutions.map((solution, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 sm:w-6 sm:h-6 text-[#109387] flex-shrink-0 mt-0.5" />
                    <span className="text-white font-semibold text-sm sm:text-base">
                      {solution}
                    </span>
                  </li>
                ))}
              </ul>
            </div>

          </div>
        </div>

      </div>
    </section>
  )
}
