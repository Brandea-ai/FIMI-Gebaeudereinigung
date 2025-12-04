'use client'

import { useState } from 'react'
import Image from 'next/image'
import { ChevronDown, ArrowRight } from 'lucide-react'

const faqs = [
  {
    frage: 'Was kostet Empfangspersonal pro Stunde?',
    antwort: 'Die Kosten für professionelles Empfangspersonal liegen je nach Qualifikation und Einsatzumfang zwischen 22 und 35 Euro pro Stunde. Für regelmäßige Einsätze bieten wir attraktive Pauschalpreise. Nach einer kostenfreien Bedarfsanalyse erhalten Sie von uns ein transparentes Festpreisangebot ohne versteckte Kosten.',
  },
  {
    frage: 'Wie kurzfristig können Sie Personal stellen?',
    antwort: 'Im Raum Landshut garantieren wir eine Reaktionszeit von 2 Stunden. In München und Umgebung sind wir innerhalb von 3 Stunden vor Ort, bayernweit in maximal 4 Stunden. Bei geplanten Einsätzen empfehlen wir eine Vorlaufzeit von 2-3 Werktagen, um die optimale Personalauswahl zu gewährleisten.',
  },
  {
    frage: 'Welche Qualifikationen hat Ihr Personal?',
    antwort: 'Unser Personal ist speziell für den Kundenkontakt geschult. Empfangskräfte verfügen über Erfahrung in Kundenservice und Telefonzentrale, oft mit kaufmännischem Hintergrund. Housekeeping-Personal ist in Hotellerie-Standards ausgebildet. Alle Mitarbeiter werden sorgfältig ausgewählt und durchlaufen unsere internen Schulungsprogramme.',
  },
  {
    frage: 'Übernehmen Sie auch dauerhaften Empfangsdienst?',
    antwort: 'Ja, viele unserer Kunden nutzen unseren Empfangsdienst dauerhaft. Sie sparen sich den Aufwand der Personalsuche, haben immer eine Vertretung bei Urlaub oder Krankheit und profitieren von unserer Qualitätsgarantie. Langfristige Partnerschaften belohnen wir mit Vorzugskonditionen.',
  },
  {
    frage: 'Können Sie Servicekräfte für Events vermitteln?',
    antwort: 'Absolut. Für Firmenevents, Messen, Hochzeiten und Caterings stellen wir erfahrene Servicekräfte. Von der Begrüßung der Gäste über Getränkeservice bis zum Abbau – unsere Teams kennen Events und sorgen für einen reibungslosen Ablauf. Auch größere Teams mit 10-20 Personen sind kurzfristig verfügbar.',
  },
  {
    frage: 'Wie funktioniert Housekeeping für Hotels?',
    antwort: 'Unser Housekeeping-Personal ist in Hotellerie-Standards geschult und kennt die Abläufe in der Branche. Wir stellen Zimmermädchen, Etagenservice und Tagesdamen – als Verstärkung in der Hochsaison, bei Personalengpässen oder dauerhaft. Ihre Qualitätsstandards werden selbstverständlich eingehalten.',
  },
  {
    frage: 'Was passiert bei Krankheit Ihres Personals?',
    antwort: 'Bei Krankheit unseres eingesetzten Personals stellen wir sofort qualifizierten Ersatz. Das ist einer der großen Vorteile gegenüber eigenem Personal: Sie haben immer einen besetzten Empfang, ein vollständiges Housekeeping-Team oder ausreichend Servicekräfte – garantiert.',
  },
  {
    frage: 'Können Sie auch Pfortendienst übernehmen?',
    antwort: 'Ja, wir stellen zuverlässiges Personal für Pfortendienst und Zugangskontrolle. Unsere Mitarbeiter übernehmen Besucheranmeldung, Schlüsselverwaltung und Wareneingang. Für sicherheitsrelevante Bereiche arbeiten wir eng mit unseren Security-Partnern zusammen.',
  },
]

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0)

  const toggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  return (
    <section id="faq" className="py-12 sm:py-16 lg:py-28 bg-[#f8f9fa]">
      <div className="w-full max-w-[1800px] mx-auto px-4 sm:px-6 md:px-8 lg:px-12 xl:px-20">

        <div className="grid lg:grid-cols-[350px_1fr] xl:grid-cols-[400px_1fr] gap-8 lg:gap-16 xl:gap-20">

          {/* Sticky Sidebar - wie Startseite */}
          <aside className="lg:sticky lg:top-24 lg:self-start">
            <span className="text-sm text-gray-500 font-semibold uppercase tracking-wide mb-3 block">
              Häufige Fragen
            </span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-[#109387] leading-tight mb-4 sm:mb-6">
              Haben Sie noch Fragen?
            </h2>
            <p className="text-base sm:text-lg text-gray-700 font-semibold leading-relaxed mb-6 sm:mb-8">
              Hier finden Sie Antworten auf die häufigsten Fragen zu unseren Personaldienstleistungen.
              Falls Ihre Frage nicht dabei ist, kontaktieren Sie uns einfach direkt.
            </p>

            {/* CTA Button */}
            <a
              href="#kontakt"
              className="inline-flex items-center justify-center gap-3 bg-[#109387] hover:bg-[#0d7d72] text-white font-bold text-base sm:text-lg px-6 sm:px-8 py-3 sm:py-4 rounded-[6px] transition-all duration-300 group w-full"
            >
              Personal anfragen
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </a>

            {/* Kontakt-Info */}
            <a
              href="tel:+4987143033460"
              className="mt-6 sm:mt-8 bg-white border-2 border-[#012956] hover:bg-[#012956] rounded-[6px] p-4 sm:p-6 block transition-all duration-300 group"
            >
              <p className="text-sm text-gray-500 group-hover:text-white/70 font-semibold mb-2 transition-colors">
                Lieber persönlich sprechen?
              </p>
              <span className="text-lg sm:text-xl font-bold text-[#012956] group-hover:text-white transition-colors">
                0871 430 334 60
              </span>
            </a>

            {/* Bild - nur Desktop */}
            <div className="relative mt-6 sm:mt-8 h-48 lg:h-64 rounded-[6px] overflow-hidden hidden lg:block">
              <Image
                src="https://images.unsplash.com/photo-1556741533-6e6a62bd8b49?q=80&w=800&auto=format&fit=crop"
                alt="Kundenservice FIMI Personaldienstleistungen"
                fill
                className="object-cover"
              />
            </div>
          </aside>

          {/* FAQ Accordion */}
          <div className="space-y-3 sm:space-y-4">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className={`bg-white rounded-[6px] overflow-hidden transition-shadow ${
                  openIndex === index ? 'shadow-lg' : 'shadow-sm'
                }`}
              >
                <button
                  onClick={() => toggle(index)}
                  className="w-full flex items-center justify-between p-4 sm:p-5 lg:p-6 text-left hover:bg-gray-50 transition-colors"
                >
                  <h3 className="text-sm sm:text-base lg:text-lg font-bold text-[#012956] pr-2 sm:pr-4">
                    {faq.frage}
                  </h3>
                  <ChevronDown
                    className={`w-5 h-5 sm:w-6 sm:h-6 text-[#109387] flex-shrink-0 transition-transform duration-300 ${
                      openIndex === index ? 'rotate-180' : ''
                    }`}
                  />
                </button>

                <div
                  className={`overflow-hidden transition-all duration-300 ${
                    openIndex === index ? 'max-h-[500px]' : 'max-h-0'
                  }`}
                >
                  <div className="px-4 sm:px-5 lg:px-6 pb-4 sm:pb-5 lg:pb-6">
                    <p className="text-gray-600 font-semibold leading-relaxed text-sm sm:text-base">
                      {faq.antwort}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>

        </div>

      </div>
    </section>
  )
}
