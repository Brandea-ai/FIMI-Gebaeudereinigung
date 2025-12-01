'use client'

import Image from 'next/image'
import { ArrowRight, Coffee, Wind, UserX, Eye } from 'lucide-react'

const probleme = [
  {
    icon: Coffee,
    problem: 'Die Teeküche macht keinen guten Eindruck mehr',
    loesung: 'Tägliche Reinigung aller Gemeinschaftsflächen – Küche, Aufenthaltsraum, Kaffeebar. Ihre Mitarbeiter verdienen einen sauberen Pausenbereich.',
  },
  {
    icon: Wind,
    problem: 'Mitarbeiter beschweren sich über Staub und schlechte Luft',
    loesung: 'Professionelle Staubentfernung inkl. schwer erreichbarer Stellen. Regelmäßige Reinigung von Lüftungsgittern und Heizkörpern.',
  },
  {
    icon: UserX,
    problem: 'Der aktuelle Dienstleister ist unzuverlässig',
    loesung: 'Bei uns reinigt ein festes Team, das Ihre Räume kennt. Kein ständiger Personalwechsel, keine Überraschungen.',
  },
  {
    icon: Eye,
    problem: 'Besucher sehen als erstes schmutzige Fenster und Böden',
    loesung: 'Repräsentativer Empfangsbereich, streifenfreie Glasflächen, gepflegte Böden. Der erste Eindruck zählt.',
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
            Jeder dieser Punkte kostet Sie Zeit, Nerven und im schlimmsten Fall Kunden.
            Wir sorgen dafür, dass Sie sich auf Ihr Kerngeschäft konzentrieren können.
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
                {/* Icon - Outlined Style */}
                <div className="w-14 h-14 rounded-[6px] border-2 border-[#109387] group-hover:bg-[#109387] flex items-center justify-center flex-shrink-0 transition-all duration-300">
                  <item.icon size={28} className="text-[#109387] group-hover:text-white transition-colors duration-300" strokeWidth={1.5} />
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
              alt="Sauberes modernes Büro nach professioneller Reinigung"
              fill
              className="object-cover"
            />
          </div>

          <div className="lg:pl-8">
            <h3 className="text-2xl lg:text-3xl font-bold text-[#012956] mb-4">
              Sie haben genügend andere Sorgen
            </h3>
            <p className="text-gray-600 font-semibold leading-relaxed mb-6">
              Lassen Sie die Reinigung Profis machen. Während Sie Ihr Unternehmen führen,
              sorgen wir im Hintergrund für Sauberkeit und Hygiene – zuverlässig,
              diskret und nach Ihren Wünschen.
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
