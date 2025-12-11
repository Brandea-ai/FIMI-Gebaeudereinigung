'use client'

import { useState } from 'react'
import Image from 'next/image'
import { ChevronDown, ArrowRight, Phone } from 'lucide-react'

const faqs = [
  {
    frage: 'Was kostet eine Sonderreinigung?',
    antwort: 'Die Kosten variieren je nach Art und Umfang des Schadens. Wasserschadenreinigung beginnt ab ca. 500€, Messie-Wohnung Reinigung liegt zwischen 800€ und 5.000€, Tatortreinigung ab 1.500€. Nach einer kostenfreien Besichtigung erhalten Sie ein verbindliches Festpreisangebot – ohne versteckte Kosten und ohne Nachforderungen.',
  },
  {
    frage: 'Wie schnell können Sie bei einem Notfall kommen?',
    antwort: 'Unser 24h-Notdienst ist 7 Tage die Woche erreichbar. Im Raum Landshut sind wir innerhalb von 2 Stunden vor Ort, im Großraum München und Regensburg in 3 Stunden, bayernweit in maximal 4 Stunden. Bei akuten Wasserschäden oder Bränden priorisieren wir Ihren Einsatz.',
  },
  {
    frage: 'Übernimmt meine Versicherung die Kosten?',
    antwort: 'In vielen Fällen ja. Hausrat-, Wohngebäude- und Betriebsversicherungen decken oft Wasser- und Brandschäden ab. Wir erstellen eine detaillierte Dokumentation für Ihre Versicherung und kommunizieren auf Wunsch direkt mit dem Sachverständigen. So bekommen Sie, was Ihnen zusteht.',
  },
  {
    frage: 'Ist die Tatortreinigung wirklich diskret?',
    antwort: 'Absolute Diskretion ist bei uns Standard. Unsere Teams kommen in neutralen Fahrzeugen ohne Firmenlogo. Alle Mitarbeiter sind zur Verschwiegenheit verpflichtet. Die Reinigung erfolgt schnell und unauffällig – Ihre Nachbarn müssen nichts erfahren.',
  },
  {
    frage: 'Welche Qualifikationen haben Ihre Mitarbeiter?',
    antwort: 'Unsere Spezialteams bestehen aus staatlich geprüften Desinfektoren und ausgebildeten Fachkräften. Alle Mitarbeiter sind geschult im Umgang mit Gefahrstoffen und verfügen über die notwendigen Zulassungen für die Entsorgung von Sondermüll.',
  },
  {
    frage: 'Was passiert mit dem Sondermüll?',
    antwort: 'Wir verfügen über alle notwendigen Genehmigungen für die fachgerechte Entsorgung von Sondermüll. Kontaminierte Materialien, Taubenkot, Gefahrstoffe und biologische Abfälle werden nach gesetzlichen Vorschriften entsorgt. Sie erhalten auf Wunsch einen Entsorgungsnachweis.',
  },
  {
    frage: 'Wie lange dauert eine Sonderreinigung?',
    antwort: 'Das hängt vom Umfang ab. Eine Wasserschadenreinigung kann bei kleineren Schäden in einem Tag abgeschlossen sein, bei größeren Schäden mit Trocknung mehrere Tage dauern. Messie-Wohnungen benötigen typischerweise 1-5 Tage. Nach der Besichtigung geben wir Ihnen eine realistische Zeitschätzung.',
  },
  {
    frage: 'Können Sie auch am Wochenende oder nachts arbeiten?',
    antwort: 'Ja, wir sind flexibel. Unser 24h-Notdienst ist auch am Wochenende und an Feiertagen erreichbar. Für diskrete Einsätze wie Tatortreinigung oder in Gewerbeobjekten arbeiten wir auf Wunsch außerhalb der üblichen Geschäftszeiten.',
  },
  {
    frage: 'Brauche ich einen Kostenvoranschlag für die Versicherung?',
    antwort: 'Wir erstellen nach der Besichtigung ein detailliertes Angebot, das als Kostenvoranschlag für Ihre Versicherung dient. Bei dringenden Notfällen können wir auch sofort beginnen und die Dokumentation parallel erstellen – damit keine wertvolle Zeit verloren geht.',
  },
  {
    frage: 'Was ist, wenn der Schaden größer ist als gedacht?',
    antwort: 'Sollten wir bei der Arbeit auf unerwartete Probleme stoßen (z.B. versteckte Schimmelstellen), informieren wir Sie sofort. Zusätzliche Arbeiten führen wir nur nach Ihrer ausdrücklichen Zustimmung und mit einem ergänzenden Angebot durch. Keine bösen Überraschungen.',
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
            <span className="text-sm text-gray-500 font-semibold uppercase tracking-wide mb-3 block">
              Häufige Fragen
            </span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-[#109387] leading-tight mb-4 sm:mb-6">
              Haben Sie noch Fragen?
            </h2>
            <p className="text-base sm:text-lg text-gray-700 font-semibold leading-relaxed mb-6 sm:mb-8">
              Hier finden Sie Antworten auf die häufigsten Fragen zur Sonderreinigung.
              Falls Ihre Frage nicht dabei ist, rufen Sie uns einfach an.
            </p>

            {/* CTA Button */}
            <a
              href="#kontakt"
              className="inline-flex items-center justify-center gap-3 bg-[#109387] hover:bg-[#0d7d72] text-white font-bold text-base sm:text-lg px-6 sm:px-8 py-3 sm:py-4 rounded-[6px] transition-all duration-300 group w-full"
            >
              Kostenfreie Beratung
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </a>

            {/* Kontakt-Info */}
            <a
              href="tel:+4987120669360"
              className="mt-4 sm:mt-6 bg-white border-2 border-[#012956] hover:bg-[#012956] rounded-[6px] p-4 sm:p-5 block transition-all duration-300 group"
            >
              <p className="text-sm text-gray-500 group-hover:text-white/70 font-semibold mb-2 transition-colors">
                24h Notfall-Hotline
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
