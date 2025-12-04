'use client'

import Image from 'next/image'
import { Droplets, Leaf, CircleDot, AlertTriangle, CheckCircle, ArrowRight } from 'lucide-react'

const probleme = [
  {
    icon: Droplets,
    problem: 'Ölflecken und Kaugummi überall',
    beschreibung: 'Hartnäckige Flecken, die mit normalem Kehren nicht verschwinden. Kunden bemerken es sofort.',
    loesung: 'Heißwasser-Hochdruck bis 155°C und spezialisierte Reiniger entfernen selbst eingetrocknete Verschmutzungen.',
    image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?q=80&w=800&auto=format&fit=crop',
  },
  {
    icon: Leaf,
    problem: 'Nach dem Winter sieht alles katastrophal aus',
    beschreibung: 'Streusplit, Laub, Schmutz und Salz haben sich über Monate angesammelt. Der Parkplatz wirkt verwahrlost.',
    loesung: 'Unsere Frühjahrs-Intensivreinigung mit Großkehrmaschinen entfernt alles in einem Durchgang.',
    image: 'https://images.unsplash.com/photo-1516738901171-8eb4fc13bd20?q=80&w=800&auto=format&fit=crop',
  },
  {
    icon: CircleDot,
    problem: 'Laub und Müll sammeln sich ständig an',
    beschreibung: 'Kaum gekehrt, liegt schon wieder etwas herum. Das Dauerthema für jeden Facility Manager.',
    loesung: 'Regelmäßige Intervalle nach Ihrem Bedarf. Wöchentlich, 14-tägig oder monatlich – wir bleiben dran.',
    image: 'https://images.unsplash.com/photo-1605117882932-f9e32b03fea9?q=80&w=800&auto=format&fit=crop',
  },
  {
    icon: AlertTriangle,
    problem: 'Markierungen kaum noch sichtbar',
    beschreibung: 'Parkplatzlinien verschwinden unter Schmutz und Reifenabrieb. Kunden parken chaotisch.',
    loesung: 'Schonende Reinigungsmethoden, die den Belag pflegen und Markierungen wieder sichtbar machen.',
    image: 'https://images.unsplash.com/photo-1573348722427-f1d6819fdf98?q=80&w=800&auto=format&fit=crop',
  },
]

export default function ProblemLoesungSection() {
  return (
    <section id="probleme" className="py-12 sm:py-16 lg:py-28 bg-white">
      <div className="w-full max-w-[1800px] mx-auto px-4 sm:px-6 md:px-8 lg:px-12 xl:px-20">

        {/* Section Header */}
        <div className="max-w-4xl mb-10 sm:mb-14 lg:mb-20">
          <p className="text-xs sm:text-sm text-[#109387] font-bold uppercase tracking-wide mb-2 sm:mb-3">
            Kennen Sie das?
          </p>
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-[#012956] leading-[1.1] mb-4 sm:mb-6">
            Diese Probleme lösen wir täglich
          </h2>
          <p className="text-sm sm:text-base lg:text-lg text-gray-700 font-semibold leading-relaxed">
            Ein ungepflegter Parkplatz kostet Sie mehr als nur Optik. Kunden kehren um,
            Bewerber zweifeln, und die Beschwerden häufen sich. Wir kennen diese Situationen
            und haben die passenden Lösungen.
          </p>
        </div>

        {/* Problem-Lösungs-Grid */}
        <div className="grid md:grid-cols-2 gap-6 sm:gap-8 lg:gap-10">
          {probleme.map((item, index) => (
            <div
              key={index}
              className="group bg-[#f8f9fa] rounded-[6px] overflow-hidden hover:shadow-xl transition-all duration-500"
            >
              {/* Image */}
              <div className="relative h-[180px] sm:h-[200px] lg:h-[220px] overflow-hidden">
                <Image
                  src={item.image}
                  alt={item.problem}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#012956]/80 to-transparent" />

                {/* Problem Badge */}
                <div className="absolute bottom-4 left-4 right-4 flex items-center gap-3">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 border-2 border-white/50 rounded-[6px] flex items-center justify-center flex-shrink-0">
                    <item.icon className="w-5 h-5 sm:w-6 sm:h-6 text-white/90" strokeWidth={1.5} />
                  </div>
                  <span className="text-white font-bold text-sm sm:text-base lg:text-lg leading-tight">
                    {item.problem}
                  </span>
                </div>
              </div>

              {/* Content */}
              <div className="p-5 sm:p-6 lg:p-8">
                {/* Problem Description */}
                <div className="mb-4 sm:mb-6">
                  <p className="text-gray-600 font-semibold text-sm sm:text-base leading-relaxed">
                    {item.beschreibung}
                  </p>
                </div>

                {/* Lösung */}
                <div className="flex items-start gap-3 bg-[#109387]/10 rounded-[6px] p-4">
                  <CheckCircle className="w-5 h-5 sm:w-6 sm:h-6 text-[#109387] flex-shrink-0 mt-0.5" />
                  <div>
                    <span className="text-[#109387] font-bold text-xs sm:text-sm uppercase tracking-wide block mb-1">
                      Unsere Lösung
                    </span>
                    <p className="text-[#012956] font-semibold text-sm sm:text-base leading-relaxed">
                      {item.loesung}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="mt-10 sm:mt-12 lg:mt-16 text-center">
          <p className="text-gray-600 font-semibold text-base sm:text-lg mb-4 sm:mb-6">
            Sie haben ein anderes Problem? Wir finden die Lösung.
          </p>
          <a
            href="#kontakt"
            className="inline-flex items-center justify-center gap-2 sm:gap-3 bg-[#012956] hover:bg-[#01203d] text-white font-bold text-sm sm:text-base lg:text-lg px-6 sm:px-8 py-3 sm:py-4 rounded-[6px] transition-all duration-300 group"
          >
            Kostenlose Beratung anfragen
            <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
          </a>
        </div>

      </div>
    </section>
  )
}
