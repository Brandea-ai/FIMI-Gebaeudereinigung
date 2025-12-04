'use client'

import { FileText, MessageSquare, Receipt, CheckCircle, ArrowRight } from 'lucide-react'

const schritte = [
  {
    icon: FileText,
    titel: 'Schadensdokumentation',
    beschreibung: 'Wir dokumentieren den Schaden fotografisch und schriftlich – in dem Format, das Ihre Versicherung benötigt.',
  },
  {
    icon: MessageSquare,
    titel: 'Direkte Kommunikation',
    beschreibung: 'Wir sprechen mit dem Sachverständigen Ihrer Versicherung und klären alle Fragen direkt.',
  },
  {
    icon: Receipt,
    titel: 'Transparente Abrechnung',
    beschreibung: 'Unsere Kostenaufstellung ist detailliert und entspricht den Anforderungen für die Erstattung.',
  },
]

const versicherungstypen = [
  'Hausratversicherung',
  'Wohngebäudeversicherung',
  'Betriebsunterbrechungsversicherung',
  'Gebäudeversicherung',
  'Elementarschadenversicherung',
  'Gewerbliche Versicherungen',
]

export default function VersicherungSection() {
  return (
    <section id="versicherung" className="py-12 sm:py-16 lg:py-28 bg-[#f8f9fa]">
      <div className="w-full max-w-[1800px] mx-auto px-4 sm:px-6 md:px-8 lg:px-12 xl:px-20">

        <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-center">

          {/* Left: Content */}
          <div>
            <span className="text-[#109387] font-bold text-xs sm:text-sm uppercase tracking-wide mb-3 sm:mb-4 block">
              Versicherungs-Abwicklung
            </span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-[#012956] leading-tight mb-4 sm:mb-6">
              Wir arbeiten direkt mit Ihrer Versicherung
            </h2>
            <p className="text-base sm:text-lg text-gray-600 font-semibold leading-relaxed mb-6 sm:mb-8">
              Bei Wasser- oder Brandschäden steht Ihnen oft eine Erstattung zu.
              Aber die Abwicklung ist kompliziert und zeitaufwändig. Wir nehmen
              Ihnen diese Last ab und sorgen dafür, dass Sie bekommen, was Ihnen zusteht.
            </p>

            {/* Schritte */}
            <div className="space-y-4 sm:space-y-5 mb-6 sm:mb-8">
              {schritte.map((schritt, index) => (
                <div
                  key={index}
                  className="flex items-start gap-3 sm:gap-4 bg-white p-4 sm:p-5 rounded-[6px] shadow-sm"
                >
                  <div className="w-10 h-10 sm:w-12 sm:h-12 border-2 border-[#109387] rounded-[6px] flex items-center justify-center flex-shrink-0">
                    <schritt.icon className="w-5 h-5 sm:w-6 sm:h-6 text-[#109387]" strokeWidth={1.5} />
                  </div>
                  <div>
                    <h3 className="text-base sm:text-lg font-bold text-[#012956] mb-1">
                      {schritt.titel}
                    </h3>
                    <p className="text-gray-600 font-semibold text-sm leading-relaxed">
                      {schritt.beschreibung}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {/* CTA */}
            <a
              href="#kontakt"
              className="inline-flex items-center gap-2 bg-[#109387] hover:bg-[#0d7d72] text-white font-bold px-5 sm:px-6 py-3 rounded-[6px] transition-colors group text-sm sm:text-base"
            >
              Versicherungsfall melden
              <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 group-hover:translate-x-1 transition-transform" />
            </a>
          </div>

          {/* Right: Versicherungstypen */}
          <div className="bg-[#012956] rounded-[6px] p-6 sm:p-8 lg:p-10">
            <h3 className="text-xl sm:text-2xl font-bold text-white mb-4 sm:mb-6">
              Diese Versicherungen decken Sonderreinigung ab
            </h3>
            <p className="text-white/70 font-semibold text-sm sm:text-base leading-relaxed mb-6">
              Je nach Schadenfall und Police können verschiedene Versicherungen
              die Kosten für die Reinigung übernehmen:
            </p>

            {/* Liste */}
            <ul className="space-y-3 sm:space-y-4 mb-6 sm:mb-8">
              {versicherungstypen.map((typ, index) => (
                <li key={index} className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-[#109387] flex-shrink-0" />
                  <span className="text-white font-semibold text-sm sm:text-base">{typ}</span>
                </li>
              ))}
            </ul>

            {/* Info Box */}
            <div className="bg-white/10 rounded-[6px] p-4 sm:p-5">
              <p className="text-white/90 font-semibold text-sm leading-relaxed">
                <strong className="text-[#109387]">Tipp:</strong> Dokumentieren Sie den Schaden
                sofort mit Fotos, bevor Sie etwas anfassen. Wir helfen Ihnen bei der weiteren
                Dokumentation und Kommunikation mit der Versicherung.
              </p>
            </div>
          </div>

        </div>

      </div>
    </section>
  )
}
