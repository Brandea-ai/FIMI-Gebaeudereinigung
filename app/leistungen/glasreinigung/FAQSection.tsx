'use client'

import { useState } from 'react'
import { ChevronDown, HelpCircle } from 'lucide-react'

const faqs = [
  {
    frage: 'Was kostet Glasreinigung pro Quadratmeter?',
    antwort: 'Die Kosten für professionelle Glasreinigung liegen typischerweise zwischen 2 und 5 Euro pro Quadratmeter. Der genaue Preis hängt von mehreren Faktoren ab: Art der Glasfläche (Fenster, Fassade), Verschmutzungsgrad, Erreichbarkeit und Häufigkeit der Reinigung. Bei einer kostenfreien Besichtigung erstellen wir Ihnen ein transparentes Festpreisangebot ohne versteckte Kosten.',
  },
  {
    frage: 'Wie oft sollten Fenster professionell gereinigt werden?',
    antwort: 'Die optimale Reinigungsfrequenz hängt von der Lage und Nutzung ab. Schaufenster im Einzelhandel sollten wöchentlich gereinigt werden, Bürofenster typischerweise monatlich oder alle 6-8 Wochen. Glasfassaden werden meist vierteljährlich oder halbjährlich gereinigt. Wir beraten Sie gerne, welches Intervall für Ihre Situation ideal ist.',
  },
  {
    frage: 'Reinigen Sie auch schwer erreichbare Fenster?',
    antwort: 'Ja, wir sind für alle Höhen ausgerüstet. Bis etwa 15 Meter Höhe arbeiten wir mit Teleskopstangen und Osmose-Technik vom Boden aus. Für höhere Gebäude setzen wir auf Seilzugangstechnik oder Hubarbeitsbühnen. Unsere Teams sind für Höhenarbeiten geschult und zertifiziert.',
  },
  {
    frage: 'Was ist Osmose-Reinigung?',
    antwort: 'Bei der Osmose-Reinigung verwenden wir vollentsalztes Wasser, das Schmutz besonders effektiv löst und streifenfrei abtrocknet. Das Wasser wird über Teleskopstangen auf die Glasfläche gebracht. Diese Methode ist besonders umweltfreundlich (keine Chemikalien), schonend für die Glasoberfläche und ideal für Glasfassaden und schwer erreichbare Fenster.',
  },
  {
    frage: 'Arbeiten Sie auch am Wochenende oder nachts?',
    antwort: 'Ja, wir passen uns an Ihre Geschäftszeiten an. Gerade im Einzelhandel reinigen wir oft früh morgens vor Ladenöffnung oder am Wochenende. Für Bürogebäude bieten wir Abend- und Nachtservice an. So stören wir Ihren Geschäftsbetrieb nicht.',
  },
  {
    frage: 'Wie entfernen Sie hartnäckige Verschmutzungen?',
    antwort: 'Für hartnäckige Verschmutzungen wie Kalkflecken, Vogelkot oder Bauverschmutzung setzen wir spezielle Glasreiniger und bei Bedarf Glasschaber ein. Bei empfindlichen Oberflächen (z.B. beschichtetes Glas) prüfen wir vorab die geeignete Methode. In den meisten Fällen können wir selbst starke Verschmutzungen rückstandsfrei entfernen.',
  },
  {
    frage: 'Was ist im Preis enthalten?',
    antwort: 'Unser Festpreis enthält die komplette Reinigung innen und/oder außen, alle Materialien und Reinigungsmittel, die An- und Abfahrt sowie die Rahmen- und Falzreinigung bei Bedarf. Es gibt keine versteckten Kosten. Was wir anbieten, ist was Sie zahlen.',
  },
  {
    frage: 'Wie kurzfristig können Sie kommen?',
    antwort: 'Für geplante Reinigungen vereinbaren wir Termine in der Regel innerhalb von 3-5 Werktagen. Bei dringendem Bedarf – zum Beispiel vor einem Event oder nach Bauarbeiten – können wir oft auch kurzfristiger einen Termin anbieten. Rufen Sie einfach an.',
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

          {/* Sticky Sidebar */}
          <aside className="lg:sticky lg:top-24 lg:self-start">
            <span className="text-[#109387] font-bold text-xs sm:text-sm uppercase tracking-wide mb-3 sm:mb-4 block">
              Häufige Fragen
            </span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-[#012956] leading-tight mb-4 sm:mb-6">
              FAQ zur Glasreinigung
            </h2>
            <p className="text-base sm:text-lg text-gray-600 font-semibold leading-relaxed mb-6 sm:mb-8">
              Die wichtigsten Fragen unserer Kunden – ehrlich und direkt beantwortet.
            </p>

            {/* Help Box - versteckt auf mobile */}
            <div className="bg-[#012956] rounded-[6px] p-4 sm:p-6 hidden lg:block">
              <div className="flex items-start gap-3 sm:gap-4">
                <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-[6px] bg-[#109387]/20 flex items-center justify-center flex-shrink-0">
                  <HelpCircle className="w-5 h-5 sm:w-6 sm:h-6 text-[#109387]" />
                </div>
                <div>
                  <h4 className="text-white font-bold mb-2 text-sm sm:text-base">Noch Fragen?</h4>
                  <p className="text-white/70 font-semibold text-xs sm:text-sm mb-3 sm:mb-4">
                    Wir beraten Sie gerne persönlich.
                  </p>
                  <a
                    href="tel:+4987143033460"
                    className="text-[#109387] font-bold hover:underline text-sm sm:text-base"
                  >
                    0871 430 334 60
                  </a>
                </div>
              </div>
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
