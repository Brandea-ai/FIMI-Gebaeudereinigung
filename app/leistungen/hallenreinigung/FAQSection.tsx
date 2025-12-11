'use client'

import { useState } from 'react'
import Image from 'next/image'
import { ChevronDown, ArrowRight } from 'lucide-react'

const faqs = [
  {
    frage: 'Was kostet Hallenreinigung pro Quadratmeter?',
    antwort: 'Die Kosten für professionelle Hallenreinigung liegen typischerweise zwischen 0,50 und 2,00 Euro pro Quadratmeter. Der genaue Preis hängt von mehreren Faktoren ab: Größe der Halle, Art und Intensität der Verschmutzung, Zugänglichkeit und gewünschte Reinigungstiefe. Bei einer kostenfreien Besichtigung erstellen wir Ihnen ein transparentes Festpreisangebot – ohne versteckte Kosten.',
  },
  {
    frage: 'Können Sie auch im laufenden Betrieb reinigen?',
    antwort: 'Ja, das ist unsere Spezialität. Wir sind darauf eingestellt, Hallenreinigung ohne Produktionsunterbrechung durchzuführen. Unsere Teams arbeiten in Schichtpausen, am Wochenende, nachts oder in abgegrenzten Bereichen parallel zum Betrieb. So bleibt Ihre Produktion am Laufen, während wir für Sauberkeit sorgen.',
  },
  {
    frage: 'Wie kurzfristig können Sie kommen?',
    antwort: 'Bei Notfällen garantieren wir eine Reaktionszeit von 2 Stunden im Raum Landshut und 4 Stunden in ganz Bayern. Für geplante Einsätze wie Grundreinigungen vor Audits benötigen wir normalerweise 2-5 Werktage Vorlauf. Bei dringenden Anfragen können wir oft innerhalb von 48 Stunden mit der Reinigung beginnen.',
  },
  {
    frage: 'Welche Maschinen und Geräte nutzen Sie?',
    antwort: 'Für Hallenreinigung setzen wir professionelle Industriegeräte ein: Scheuersaugmaschinen für große Bodenflächen, Hochdruckreiniger für hartnäckige Verschmutzungen, Industriestaubsauger für Feinstaub und Späne, sowie Hubarbeitsbühnen für Arbeiten an Decken und Hochregalen. Unsere Mitarbeiter sind IPAF-zertifiziert für sicheres Arbeiten in der Höhe.',
  },
  {
    frage: 'Reinigen Sie auch Regale und Hallendecken?',
    antwort: 'Ja, wir reinigen Ihre Halle komplett – vom Boden bis zur Decke. Das umfasst Hallenböden, Regalsysteme (auch Hochregale), Hallenwände, Stahlträger, Lüftungskanäle, Beleuchtung und Fenster. So bekommen Sie eine rundum saubere Halle aus einer Hand.',
  },
  {
    frage: 'Wie oft sollte eine Industriehalle gereinigt werden?',
    antwort: 'Die optimale Reinigungsfrequenz hängt von der Nutzung ab. Produktionshallen mit hohem Verschmutzungsaufkommen empfehlen wir wöchentlich bis monatlich. Lagerhallen mit geringerer Verschmutzung können quartalsweise oder halbjährlich gereinigt werden. Wir erstellen gemeinsam mit Ihnen einen Reinigungsplan, der zu Ihrem Bedarf und Budget passt.',
  },
  {
    frage: 'Sind Ihre Mitarbeiter für Hallenreinigung geschult?',
    antwort: 'Absolut. Unsere Reinigungskräfte sind speziell für die Anforderungen der Hallenreinigung ausgebildet. Das umfasst den sicheren Umgang mit Industriereinigungsgeräten, IPAF-Zertifizierung für Hubarbeitsbühnen, Arbeitssicherheit in Produktionsumgebungen und den fachgerechten Einsatz von Reinigungsmitteln für verschiedene Oberflächen.',
  },
  {
    frage: 'Was ist im Preis für Hallenreinigung enthalten?',
    antwort: 'Unser Festpreis enthält alles: Personal, sämtliche Maschinen und Geräte, alle Reinigungsmittel, Anfahrt, Entsorgung von Schmutzwasser und eine dokumentierte Qualitätskontrolle nach Abschluss. Es gibt keine versteckten Kosten oder Nachforderungen. Was wir anbieten, ist der Endpreis.',
  },
]

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0)

  const toggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  return (
    <section id="faq" className="py-12 sm:py-16 lg:py-28 bg-white">
      <div className="w-full max-w-[1800px] mx-auto px-4 sm:px-6 md:px-8 lg:px-12 xl:px-20">

        <div className="grid lg:grid-cols-[350px_1fr] xl:grid-cols-[400px_1fr] gap-8 lg:gap-16 xl:gap-20">

          {/* Sticky Sidebar */}
          <aside className="lg:sticky lg:top-24 lg:self-start">
            <span className="text-sm text-gray-500 font-semibold uppercase tracking-wide mb-3 block">
              Häufige Fragen
            </span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-[#109387] leading-tight mb-4 sm:mb-6">
              Fragen zur Hallenreinigung?
            </h2>
            <p className="text-base sm:text-lg text-gray-700 font-semibold leading-relaxed mb-6 sm:mb-8">
              Hier finden Sie Antworten auf die häufigsten Fragen rund um professionelle Hallenreinigung.
              Falls Ihre Frage nicht dabei ist, rufen Sie uns einfach an.
            </p>

            {/* CTA Button */}
            <a
              href="#kontakt"
              className="inline-flex items-center justify-center gap-3 bg-[#109387] hover:bg-[#0d7d72] text-white font-bold text-base sm:text-lg px-6 sm:px-8 py-3 sm:py-4 rounded-[6px] transition-all duration-300 group w-full"
            >
              Kostenfreie Besichtigung
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" aria-hidden="true" />
            </a>

            {/* Kontakt-Info */}
            <a
              href="tel:+4987120669360"
              className="mt-6 sm:mt-8 bg-[#f8f9fa] border-2 border-[#012956] hover:bg-[#012956] rounded-[6px] p-4 sm:p-6 block transition-all duration-300 group"
            >
              <p className="text-sm text-gray-500 group-hover:text-white/70 font-semibold mb-2 transition-colors">
                Lieber persönlich sprechen?
              </p>
              <span className="text-lg sm:text-xl font-bold text-[#012956] group-hover:text-white transition-colors">
                0871 2066936-0
              </span>
            </a>

          </aside>

          {/* FAQ Accordion */}
          <div className="space-y-3 sm:space-y-4">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className={`bg-[#f8f9fa] rounded-[6px] overflow-hidden transition-shadow ${
                  openIndex === index ? 'shadow-lg' : 'shadow-sm'
                }`}
              >
                <button
                  onClick={() => toggle(index)}
                  className="w-full flex items-center justify-between p-4 sm:p-5 lg:p-6 text-left hover:bg-gray-100 transition-colors"
                  aria-expanded={openIndex === index}
                  aria-controls={`faq-answer-${index}`}
                >
                  <h3 className="text-sm sm:text-base lg:text-lg font-bold text-[#012956] pr-2 sm:pr-4">
                    {faq.frage}
                  </h3>
                  <ChevronDown
                    className={`w-5 h-5 sm:w-6 sm:h-6 text-[#109387] flex-shrink-0 transition-transform duration-300 ${
                      openIndex === index ? 'rotate-180' : ''
                    }`}
                    aria-hidden="true"
                  />
                </button>

                <div
                  id={`faq-answer-${index}`}
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
