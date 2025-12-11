'use client'

import { useState } from 'react'
import Image from 'next/image'
import { ChevronDown, ArrowRight } from 'lucide-react'

const faqs = [
  {
    frage: 'Wie läuft eine professionelle Fassadenreinigung ab?',
    antwort: 'Nach Ihrer Anfrage vereinbaren wir einen kostenfreien Besichtigungstermin. Vor Ort analysieren wir den Fassadenzustand, den Verschmutzungsgrad und die Zugänglichkeit. Anschließend erhalten Sie ein individuelles Festpreisangebot. Die Reinigung erfolgt mit schonenden Verfahren, auf Wunsch mit abschließender Imprägnierung.',
  },
  {
    frage: 'Wie lange hält eine professionelle Fassadenreinigung?',
    antwort: 'Mit einer professionellen Imprägnierung bleibt Ihre Fassade 5-10 Jahre sauber. Der Schutzfilm verhindert, dass sich neue Algen und Moose ansiedeln können. Ohne Imprägnierung beginnt die Vergrünung je nach Standort und Ausrichtung nach 2-3 Jahren erneut.',
  },
  {
    frage: 'Kann man WDVS-Fassaden (Dämmfassaden) reinigen?',
    antwort: 'Ja, mit dem richtigen Verfahren. Wir verwenden ein schonendes Niederdruck-System mit maximal 60 bar, das die empfindliche Putzoberfläche nicht beschädigt. Hochdruckreiniger mit 100+ bar sind für WDVS ungeeignet und können die Fassade dauerhaft beschädigen.',
  },
  {
    frage: 'Warum wird meine Fassade grün?',
    antwort: 'Moderne Dämmfassaden (WDVS) speichern keine Wärme an der Außenoberfläche. Nachts kühlt die Fassade stark ab und unterschreitet oft den Taupunkt. Feuchtigkeit kondensiert auf der Oberfläche. Diese dauerhaft feuchte Umgebung ist ideal für Algen und Moose. Besonders Nordseiten und schattige Bereiche sind betroffen.',
  },
  {
    frage: 'Brauche ich ein Gerüst für die Fassadenreinigung?',
    antwort: 'In den meisten Fällen nicht. Mit unserem Teleskopsystem erreichen wir Höhen bis 18 Meter komplett ohne Gerüst. Bei sehr hohen Gebäuden oder schwer zugänglichen Stellen setzen wir moderne Drohnentechnologie oder Hubsteiger ein.',
  },
  {
    frage: 'Wie lange dauert eine Fassadenreinigung?',
    antwort: 'Das hängt von der Fassadengröße ab. Ein Einfamilienhaus reinigen wir in der Regel an einem Tag. Mehrfamilienhäuser und größere Objekte benötigen 2-3 Tage. Im Gegensatz zu einem Neuanstrich gibt es keine Trocknungszeit – die Fassade ist sofort wieder nutzbar.',
  },
  {
    frage: 'Welche Fassadentypen können Sie reinigen?',
    antwort: 'Wir reinigen alle gängigen Fassadentypen: WDVS (Wärmedämmverbundsystem), Putzfassaden, Klinker, Naturstein, Beton und Holz. Für jeden Untergrund wählen wir das passende Verfahren, um optimale Ergebnisse ohne Beschädigung zu erzielen.',
  },
  {
    frage: 'Ist die Reinigung umweltschonend?',
    antwort: 'Ja, wir verwenden biologisch abbaubare Reinigungsmittel und achten auf fachgerechte Entsorgung des Schmutzwassers. Im Vergleich zu einem Neuanstrich mit Farbe und Lösungsmitteln ist die Fassadenreinigung die deutlich umweltfreundlichere Alternative.',
  },
]

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0)

  return (
    <section id="faq" className="py-12 sm:py-16 lg:py-28 bg-[#f8f9fa]">
      <div className="w-full max-w-[1800px] mx-auto px-4 sm:px-6 md:px-8 lg:px-12 xl:px-20">

        <div className="grid lg:grid-cols-[350px_1fr] xl:grid-cols-[400px_1fr] gap-8 lg:gap-16 xl:gap-20">

          {/* Sticky Sidebar - wie Startseite */}
          <aside className="lg:sticky lg:top-24 lg:self-start">
            <span className="text-sm text-gray-600 font-semibold uppercase tracking-wide mb-3 block">
              Häufige Fragen
            </span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-[#109387] leading-tight mb-4 sm:mb-6">
              Haben Sie noch Fragen?
            </h2>
            <p className="text-base sm:text-lg text-gray-700 font-semibold leading-relaxed mb-6 sm:mb-8">
              Hier finden Sie Antworten auf die häufigsten Fragen zur Fassadenreinigung.
              Falls Ihre Frage nicht dabei ist, kontaktieren Sie uns einfach direkt.
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
              className="mt-6 sm:mt-8 bg-white border-2 border-[#012956] hover:bg-[#012956] rounded-[6px] p-4 sm:p-6 block transition-all duration-300 group"
            >
              <p className="text-sm text-gray-600 group-hover:text-white/80 font-semibold mb-2 transition-colors">
                Lieber persönlich sprechen?
              </p>
              <span className="text-lg sm:text-xl font-bold text-[#012956] group-hover:text-white transition-colors">
                0871 2066936-0
              </span>
            </a>

          </aside>

          {/* Rechte Seite - FAQ Akkordeon */}
          <div className="space-y-3 sm:space-y-4" role="list" aria-label="Häufig gestellte Fragen">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className="bg-white rounded-[6px] shadow-sm overflow-hidden"
                role="listitem"
              >
                <button
                  onClick={() => setOpenIndex(openIndex === index ? null : index)}
                  aria-expanded={openIndex === index}
                  className="w-full flex items-center justify-between p-4 sm:p-5 lg:p-6 text-left hover:bg-gray-50 transition-colors"
                >
                  <span className="text-[#012956] font-bold text-sm sm:text-base lg:text-lg pr-4">
                    {faq.frage}
                  </span>
                  <ChevronDown
                    className={`w-5 h-5 lg:w-6 lg:h-6 text-[#109387] flex-shrink-0 transition-transform ${
                      openIndex === index ? 'rotate-180' : ''
                    }`}
                    aria-hidden="true"
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
