'use client'

import Image from 'next/image'
import { ArrowRight, RefreshCw, UserX, Clock, AlertTriangle } from 'lucide-react'

const probleme = [
  {
    icon: RefreshCw,
    problem: 'Die Reinigung ist unregelmäßig und unzuverlässig',
    loesung: 'Bei uns reinigt ein festes Team nach festem Plan. Sie wissen immer genau, wann gereinigt wird – und wir halten uns daran.',
  },
  {
    icon: UserX,
    problem: 'Ständig andere Gesichter – keiner kennt sich aus',
    loesung: 'Ihre Reinigungskräfte kennen Ihre Räume, Ihre Wünsche, Ihre Besonderheiten. Kein Einarbeiten, keine Überraschungen.',
  },
  {
    icon: Clock,
    problem: 'Bei Reklamationen passiert tagelang nichts',
    loesung: 'Sie haben einen festen Ansprechpartner. Innerhalb von 2 Stunden melden wir uns – und handeln sofort.',
  },
  {
    icon: AlertTriangle,
    problem: 'Die Qualität schwankt von Woche zu Woche',
    loesung: 'Dokumentierte Checklisten, regelmäßige Qualitätskontrollen durch unsere Objektleiter. Gleichbleibend gut, nicht nur manchmal.',
  },
]

export default function ProblemLoesungSection() {
  return (
    <section id="probleme" className="py-20 lg:py-28 bg-[#f8f9fa]">
      <div className="w-full max-w-[1800px] mx-auto px-6 lg:px-12 xl:px-20">

        {/* Header */}
        <div className="max-w-3xl mb-16">
          <span className="text-[#109387] font-bold text-sm uppercase tracking-wide mb-4 block">
            Kennen Sie das?
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#012956] leading-tight mb-6">
            Probleme, die wir täglich lösen
          </h2>
          <p className="text-lg text-gray-600 font-semibold leading-relaxed">
            Viele Unternehmen kennen das: Die Reinigung funktioniert nicht wie gewünscht.
            Wir machen es anders – und besser.
          </p>
        </div>

        {/* Problem-Lösung Grid */}
        <div className="grid lg:grid-cols-2 gap-6">
          {probleme.map((item, index) => (
            <div
              key={index}
              className="bg-white rounded-[6px] p-8 shadow-sm hover:shadow-lg transition-all duration-300 group"
            >
              <div className="flex items-start gap-5">
                {/* Icon */}
                <div className="w-14 h-14 rounded-[6px] bg-[#012956] flex items-center justify-center flex-shrink-0 group-hover:bg-[#109387] transition-colors">
                  <item.icon size={28} className="text-white" strokeWidth={1.5} />
                </div>

                <div className="flex-1">
                  {/* Problem */}
                  <p className="text-gray-500 font-semibold italic mb-3">
                    &ldquo;{item.problem}&rdquo;
                  </p>

                  {/* Pfeil */}
                  <div className="flex items-center gap-2 mb-3">
                    <ArrowRight size={18} className="text-[#109387]" />
                    <span className="text-[#109387] font-bold text-sm uppercase tracking-wide">
                      Unsere Lösung
                    </span>
                  </div>

                  {/* Lösung */}
                  <p className="text-gray-700 font-semibold leading-relaxed">
                    {item.loesung}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Image + CTA */}
        <div className="mt-16 grid lg:grid-cols-2 gap-8 items-center">
          <div className="relative h-[300px] lg:h-[400px] rounded-[6px] overflow-hidden">
            <Image
              src="https://images.unsplash.com/photo-1497215842964-222b430dc094?q=80&w=2000&auto=format&fit=crop"
              alt="Saubere moderne Geschäftsräume nach professioneller Unterhaltsreinigung"
              fill
              className="object-cover"
            />
          </div>

          <div className="lg:pl-8">
            <h3 className="text-2xl lg:text-3xl font-bold text-[#012956] mb-4">
              Reinigung sollte keine Sorge sein
            </h3>
            <p className="text-gray-600 font-semibold leading-relaxed mb-6">
              Unterhaltsreinigung bedeutet: Sie kommen morgens in saubere Räume.
              Ihre Kunden betreten gepflegte Geschäfte. Ihre Mitarbeiter arbeiten
              in hygienischer Umgebung. Und Sie? Sie denken nicht mehr daran.
            </p>
            <a
              href="#kontakt"
              className="inline-flex items-center gap-2 bg-[#109387] hover:bg-[#0d7d72] text-white font-bold px-6 py-3 rounded-[6px] transition-colors group"
            >
              Jetzt Problem lösen
              <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
            </a>
          </div>
        </div>

      </div>
    </section>
  )
}
