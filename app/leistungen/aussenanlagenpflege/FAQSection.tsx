'use client'

import { useState } from 'react'
import { ChevronDown, HelpCircle } from 'lucide-react'

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

  return (
    <section id="faq" className="py-12 sm:py-16 lg:py-28 bg-white">
      <div className="w-full max-w-[1800px] mx-auto px-4 sm:px-6 md:px-8 lg:px-12 xl:px-20">

        <div className="grid lg:grid-cols-5 gap-8 lg:gap-16">
          {/* Left: Header (2 cols) */}
          <div className="lg:col-span-2">
            <div className="lg:sticky lg:top-32">
              <p className="text-xs sm:text-sm text-[#109387] font-bold uppercase tracking-wide mb-2 sm:mb-3">
                Häufige Fragen
              </p>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#012956] leading-[1.1] mb-4 sm:mb-6">
                Alles über Außenanlagenpflege
              </h2>
              <p className="text-sm sm:text-base text-gray-700 font-semibold leading-relaxed mb-6">
                Die wichtigsten Fragen zu unserer Außenanlagenpflege – verständlich beantwortet.
                Ihre Frage ist nicht dabei? Rufen Sie uns einfach an.
              </p>
              <div className="flex items-center gap-3 p-4 bg-[#f8f9fa] rounded-[6px]">
                <HelpCircle className="w-6 h-6 text-[#109387] flex-shrink-0" />
                <div>
                  <p className="font-bold text-[#012956] text-sm sm:text-base">Noch Fragen?</p>
                  <a href="tel:+4987143033460" className="text-[#109387] font-semibold text-sm hover:underline">
                    0871 430 334 60
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Right: FAQ Accordion (3 cols) */}
          <div className="lg:col-span-3">
            <div className="space-y-3">
              {faqs.map((faq, index) => (
                <div
                  key={index}
                  className="bg-[#f8f9fa] rounded-[8px] overflow-hidden"
                >
                  <button
                    onClick={() => setOpenIndex(openIndex === index ? null : index)}
                    className="w-full flex items-start justify-between gap-4 p-4 sm:p-5 lg:p-6 text-left"
                  >
                    <span className="font-bold text-[#012956] text-sm sm:text-base lg:text-lg pr-4">
                      {faq.frage}
                    </span>
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
                      <p className="text-gray-700 font-semibold leading-relaxed text-sm sm:text-base">
                        {faq.antwort}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

      </div>
    </section>
  )
}
