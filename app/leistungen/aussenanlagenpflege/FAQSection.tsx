'use client'

import { useState } from 'react'
import Image from 'next/image'
import { ChevronDown, ArrowRight } from 'lucide-react'

const faqs = [
  {
    frage: 'Was kostet Außenanlagenpflege pro Quadratmeter?',
    antwort: 'Die Kosten für professionelle Außenanlagenpflege liegen typischerweise zwischen 0,50 und 2,00 Euro pro Quadratmeter pro Einsatz. Der genaue Preis hängt von mehreren Faktoren ab: Größe der Fläche, Art der Bepflanzung, gewünschtes Pflegeintervall und Zusatzleistungen wie Laubbeseitigung oder Winterdienst. Nach einer kostenfreien Besichtigung erstellen wir Ihnen ein transparentes Festpreisangebot ohne versteckte Kosten.',
  },
  {
    frage: 'Wie oft sollte der Rasen gemäht werden?',
    antwort: 'In der Hauptwachstumszeit von April bis Oktober empfehlen wir eine Mahd alle 7 bis 14 Tage, je nach Witterung und gewünschter Rasenhöhe. Im Frühjahr und Spätherbst reicht oft ein 14-tägiger Rhythmus. Für repräsentative Eingangsbereiche oder Firmengelände mit hohem Kundenverkehr empfehlen wir wöchentliche Pflege. Wir erstellen gemeinsam mit Ihnen einen individuellen Pflegeplan, der zu Ihrer Anlage und Ihrem Budget passt.',
  },
  {
    frage: 'Übernehmen Sie auch Winterdienst für die Außenanlagen?',
    antwort: 'Ja, wir bieten Außenanlagenpflege und Winterdienst als Komplettpaket aus einer Hand an. Das hat für Sie den Vorteil, dass Sie einen Ansprechpartner für das ganze Jahr haben. Unser Winterdienst umfasst Räumen und Streuen von Wegen, Parkplätzen und Eingangsbereichen sowie die lückenlose Dokumentation aller Einsätze zur Erfüllung Ihrer Verkehrssicherungspflicht.',
  },
  {
    frage: 'Was ist mit der Verkehrssicherungspflicht bei Außenanlagen?',
    antwort: 'Als Grundstückseigentümer oder Verwalter tragen Sie die Verkehrssicherungspflicht nach § 836 BGB. Das bedeutet: Sie haften, wenn Personen durch herabfallende Äste, rutschiges Laub oder ungepflegte Wege zu Schaden kommen. Wir helfen Ihnen, diese Pflicht zu erfüllen: Regelmäßige Baumkontrollen, zeitnahe Laubbeseitigung und lückenlose Dokumentation aller Pflegemaßnahmen dienen Ihrer rechtlichen Absicherung.',
  },
  {
    frage: 'Pflegen Sie auch große Gewerbeflächen und Industriegelände?',
    antwort: 'Ja, wir betreuen Außenanlagen jeder Größe – vom Bürogebäude mit 500 Quadratmetern bis zum Industriegelände mit 50.000 Quadratmetern. Für große Flächen setzen wir professionelle Aufsitzmäher, Großflächenmulcher und Industriegeräte ein. Das ermöglicht effizientes Arbeiten auch bei großen Arealen und hält die Kosten pro Quadratmeter niedrig.',
  },
  {
    frage: 'Wie kurzfristig können Sie mit der Pflege beginnen?',
    antwort: 'Für reguläre Pflegeverträge benötigen wir nach der Besichtigung etwa 3 bis 5 Werktage Vorlauf, um Ihr festes Team zusammenzustellen und die Einweisung durchzuführen. Bei dringenden Fällen – etwa wenn der bisherige Dienstleister kurzfristig ausgefallen ist – können wir oft innerhalb von 24 bis 48 Stunden einspringen. Rufen Sie uns an, gemeinsam finden wir eine Lösung.',
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
              Hier finden Sie Antworten auf die häufigsten Fragen zur Außenanlagenpflege.
              Falls Ihre Frage nicht dabei ist, kontaktieren Sie uns einfach direkt.
            </p>

            {/* CTA Button */}
            <a
              href="#kontakt"
              className="inline-flex items-center justify-center gap-3 bg-[#109387] hover:bg-[#0d7d72] text-white font-bold text-base sm:text-lg px-6 sm:px-8 py-3 sm:py-4 rounded-[6px] transition-all duration-300 group w-full"
            >
              Kostenfreie Besichtigung
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
