'use client'

import Image from 'next/image'
import Link from 'next/link'
import { ArrowRight, AlertTriangle, CheckCircle, XCircle } from 'lucide-react'

const probleme = [
  {
    problem: 'Ihr Hausmeister ist krank oder im Urlaub',
    konsequenz: 'Mülltonnen bleiben stehen, Beschwerden häufen sich, Mieter sind unzufrieden',
    loesung: 'Wir springen innerhalb von 2 Stunden ein – mit eigenem Team und Equipment',
  },
  {
    problem: 'Ihr bisheriger Hausmeister geht in Rente',
    konsequenz: 'Wissen geht verloren, Einarbeitung dauert, Qualität leidet',
    loesung: 'Nahtlose Übernahme mit Übergabeprotokoll und festem Ansprechpartner',
  },
  {
    problem: 'Die Qualität schwankt ständig',
    konsequenz: 'Mal perfekt, mal mangelhaft – keine Verlässlichkeit',
    loesung: 'Dokumentierte Checklisten und regelmäßige Qualitätskontrollen',
  },
  {
    problem: 'Kleinreparaturen bleiben liegen',
    konsequenz: 'Defekte Lampen, tropfende Wasserhähne, kaputte Türklinken',
    loesung: 'Alles aus einer Hand – von der Glühbirne bis zur Türdichtung',
  },
]

export default function ProblemLoesungSection() {
  return (
    <section id="probleme" className="py-16 sm:py-20 lg:py-28 bg-white">
      <div className="w-full max-w-[1800px] mx-auto px-4 sm:px-6 md:px-8 lg:px-12 xl:px-20">

        {/* Section Header */}
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-start mb-12 sm:mb-16 lg:mb-20">
          <div>
            <span className="text-[#109387] font-bold text-xs sm:text-sm uppercase tracking-wide mb-3 sm:mb-4 block">
              Kennen Sie das?
            </span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-[#012956] leading-[1.1] mb-4 sm:mb-6">
              Wenn der Hausmeister fehlt, stapeln sich die Probleme
            </h2>
            <p className="text-base sm:text-lg text-gray-600 font-semibold leading-relaxed">
              Als Hausverwaltung, Eigentümergemeinschaft oder Facility Manager wissen Sie:
              Ein zuverlässiger Hausmeister ist Gold wert. Und wenn er ausfällt, wird es
              schnell stressig. Wir kennen diese Situationen und haben die Lösung.
            </p>
          </div>

          {/* Image */}
          <div className="relative h-[280px] sm:h-[320px] lg:h-[380px] rounded-[6px] overflow-hidden">
            <Image
              src="https://images.unsplash.com/photo-1621905251189-08b45d6a269e?q=80&w=1600&auto=format&fit=crop"
              alt="Hausmeister bei der Arbeit - Technische Objektbetreuung"
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#012956]/40 to-transparent" />
          </div>
        </div>

        {/* Problem-Lösung Grid */}
        <div className="grid sm:grid-cols-2 gap-4 sm:gap-6 lg:gap-8 mb-12 sm:mb-16">
          {probleme.map((item, index) => (
            <div
              key={index}
              className="bg-[#f8f9fa] rounded-[6px] overflow-hidden group hover:shadow-lg transition-all duration-300"
            >
              {/* Problem Header - Rot */}
              <div className="bg-red-50 border-l-4 border-red-500 p-4 sm:p-5 lg:p-6">
                <div className="flex items-start gap-3">
                  <AlertTriangle className="w-5 h-5 sm:w-6 sm:h-6 text-red-500 flex-shrink-0 mt-0.5" />
                  <div>
                    <h3 className="text-base sm:text-lg font-bold text-[#012956] mb-1">
                      {item.problem}
                    </h3>
                    <p className="text-sm text-red-600 font-semibold flex items-center gap-1.5">
                      <XCircle className="w-4 h-4 flex-shrink-0" />
                      {item.konsequenz}
                    </p>
                  </div>
                </div>
              </div>

              {/* Lösung - Grün */}
              <div className="p-4 sm:p-5 lg:p-6">
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 sm:w-6 sm:h-6 text-[#109387] flex-shrink-0 mt-0.5" />
                  <div>
                    <span className="text-xs font-bold text-[#109387] uppercase tracking-wide block mb-1">
                      Unsere Lösung
                    </span>
                    <p className="text-sm sm:text-base text-gray-700 font-semibold">
                      {item.loesung}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA Box */}
        <div className="bg-[#012956] rounded-[6px] p-6 sm:p-8 lg:p-10">
          <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6">
            <div>
              <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold text-white mb-2">
                Schluss mit Stress – wir übernehmen
              </h3>
              <p className="text-white/70 font-semibold text-sm sm:text-base">
                Ob kurzfristige Vertretung oder langfristige Partnerschaft.
                Wir sind da, wenn Sie uns brauchen.
              </p>
            </div>
            <Link
              href="/kontakt"
              className="inline-flex items-center justify-center gap-2 bg-[#109387] hover:bg-[#0d7d72] text-white font-bold text-sm sm:text-base lg:text-lg px-6 sm:px-8 py-3 sm:py-4 rounded-[6px] transition-all duration-300 group whitespace-nowrap flex-shrink-0"
            >
              Problem lösen
              <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </div>

      </div>
    </section>
  )
}
