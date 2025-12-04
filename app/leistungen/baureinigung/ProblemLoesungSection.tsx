'use client'

import Image from 'next/image'
import Link from 'next/link'
import { ArrowRight, Clock, AlertTriangle, XCircle, HelpCircle } from 'lucide-react'

const probleme = [
  {
    icon: Clock,
    problem: 'Die Übergabe ist in 3 Tagen und überall liegt noch Baustaub',
    loesung: 'Notfall-Service: Innerhalb von 24 Stunden sind wir mit einem entsprechend dimensionierten Team vor Ort. Auch kurzfristige Termine realisieren wir zuverlässig.',
  },
  {
    icon: AlertTriangle,
    problem: 'Das letzte Reinigungsunternehmen hat Kratzer im Parkett hinterlassen',
    loesung: 'Unsere Teams sind auf materialgerechte Reinigung geschult. Wir wissen, welche Mittel und Techniken für Parkett, Fliesen, Naturstein oder Glas geeignet sind – und welche nicht.',
  },
  {
    icon: HelpCircle,
    problem: 'Ich weiß nicht, ob ich Grob- oder Feinreinigung brauche',
    loesung: 'Bei der kostenfreien Besichtigung analysieren wir den Ist-Zustand und definieren gemeinsam den exakten Leistungsumfang. Sie erhalten ein transparentes Festpreisangebot.',
  },
  {
    icon: XCircle,
    problem: 'Wir brauchen einen zuverlässigen Partner für alle unsere Bauprojekte',
    loesung: 'Für Generalunternehmer und Bauträger bieten wir Rahmenverträge mit garantierter Verfügbarkeit und einheitlichen Qualitätsstandards über alle Projekte hinweg.',
  },
]

export default function ProblemLoesungSection() {
  return (
    <section id="probleme" className="py-12 sm:py-16 lg:py-28 bg-[#f8f9fa]">
      <div className="w-full max-w-[1800px] mx-auto px-4 sm:px-6 md:px-8 lg:px-12 xl:px-20">

        {/* Header */}
        <div className="max-w-3xl mb-8 sm:mb-12 lg:mb-16">
          <span className="text-[#109387] font-bold text-xs sm:text-sm uppercase tracking-wide mb-3 sm:mb-4 block">
            Kennen Sie das?
          </span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-[#012956] leading-tight mb-4 sm:mb-6">
            Typische Herausforderungen bei der Baureinigung
          </h2>
          <p className="text-base sm:text-lg text-gray-600 font-semibold leading-relaxed">
            Zeitdruck vor der Übergabe, unklare Leistungsabgrenzung, Schäden durch unsachgemäße Reinigung –
            diese Probleme kennen wir aus über 500 Bauprojekten. Und wir haben Lösungen.
          </p>
        </div>

        {/* Problem-Lösung Grid */}
        <div className="grid md:grid-cols-2 gap-4 sm:gap-6">
          {probleme.map((item, index) => (
            <div
              key={index}
              className="bg-white rounded-[6px] p-4 sm:p-6 lg:p-8 shadow-sm hover:shadow-lg transition-all duration-300 group"
            >
              <div className="flex items-start gap-3 sm:gap-4 lg:gap-5">
                {/* Icon - Outlined Style */}
                <div className="w-10 h-10 sm:w-12 sm:h-12 lg:w-14 lg:h-14 rounded-[6px] border-2 border-[#109387] group-hover:bg-[#109387] flex items-center justify-center flex-shrink-0 transition-all duration-300">
                  <item.icon className="w-5 h-5 sm:w-6 sm:h-6 lg:w-7 lg:h-7 text-[#109387] group-hover:text-white transition-colors duration-300" strokeWidth={1.5} />
                </div>

                <div className="flex-1">
                  {/* Problem */}
                  <p className="text-gray-500 font-semibold italic mb-2 sm:mb-3 text-sm sm:text-base">
                    &ldquo;{item.problem}&rdquo;
                  </p>

                  {/* Pfeil */}
                  <div className="flex items-center gap-1.5 sm:gap-2 mb-2 sm:mb-3">
                    <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 text-[#109387]" />
                    <span className="text-[#109387] font-bold text-xs sm:text-sm uppercase tracking-wide">
                      Unsere Lösung
                    </span>
                  </div>

                  {/* Lösung */}
                  <p className="text-gray-700 font-semibold leading-relaxed text-sm sm:text-base">
                    {item.loesung}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Image + CTA */}
        <div className="mt-10 sm:mt-12 lg:mt-16 grid md:grid-cols-2 gap-6 sm:gap-8 items-center">
          <div className="relative h-[220px] sm:h-[280px] md:h-[350px] lg:h-[400px] rounded-[6px] overflow-hidden">
            <Image
              src="https://images.unsplash.com/photo-1581094794329-c8112a89af12?q=80&w=2000&auto=format&fit=crop"
              alt="Professionelle Baureinigung - saubere Baustelle nach der Reinigung"
              fill
              className="object-cover"
            />
          </div>

          <div className="md:pl-4 lg:pl-8">
            <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold text-[#012956] mb-3 sm:mb-4">
              Termingerecht und schadensfrei zur Übergabe
            </h3>
            <p className="text-gray-600 font-semibold leading-relaxed mb-4 sm:mb-6 text-sm sm:text-base">
              Eine professionelle Baureinigung entscheidet darüber, ob die Übergabe reibungslos verläuft
              oder ob Nacharbeiten den gesamten Zeitplan gefährden. Wir verstehen den Druck, unter dem
              Bauleiter und Projektverantwortliche stehen – und liefern zuverlässig bezugsfertige Ergebnisse.
            </p>
            <Link
              href="#kontakt"
              className="inline-flex items-center gap-2 bg-[#109387] hover:bg-[#0d7d72] text-white font-bold px-4 sm:px-6 py-2.5 sm:py-3 rounded-[6px] transition-colors group text-sm sm:text-base"
            >
              Jetzt Termin sichern
              <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </div>

      </div>
    </section>
  )
}
