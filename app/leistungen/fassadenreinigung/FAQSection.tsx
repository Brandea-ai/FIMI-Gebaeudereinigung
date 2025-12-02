'use client'

import { useState } from 'react'
import { ChevronDown, ArrowRight } from 'lucide-react'

const faqs = [
  {
    frage: 'Was kostet Fassadenreinigung pro Quadratmeter?',
    antwort: 'Professionelle Fassadenreinigung kostet zwischen 10 und 25 Euro pro Quadratmeter. Der genaue Preis hängt vom Verschmutzungsgrad, Fassadentyp und der Zugänglichkeit ab. Eine Imprägnierung kostet zusätzlich 5-10 Euro pro m². Bei einer kostenfreien Besichtigung erstellen wir Ihnen ein verbindliches Festpreisangebot.',
  },
  {
    frage: 'Ist Fassadenreinigung günstiger als ein Neuanstrich?',
    antwort: 'Ja, deutlich. Eine Fassadenreinigung kostet etwa 10-25 Euro pro m², ein Neuanstrich hingegen 35-50 Euro pro m² inklusive Gerüst. Bei einem Mehrfamilienhaus mit 300 m² Fassadenfläche sparen Sie mit einer Reinigung zwischen 7.500 und 15.000 Euro im Vergleich zum Neuanstrich.',
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
    antwort: 'In den meisten Fällen nicht. Mit unserem Teleskopsystem erreichen wir Höhen bis 18 Meter komplett ohne Gerüst. Das spart Ihnen Kosten und Zeit. Nur bei sehr hohen Gebäuden über 18 Meter oder schwer zugänglichen Stellen setzen wir Hubsteiger oder Gerüste ein.',
  },
  {
    frage: 'Wie lange dauert eine Fassadenreinigung?',
    antwort: 'Das hängt von der Fassadengröße ab. Ein Einfamilienhaus reinigen wir in der Regel an einem Tag. Mehrfamilienhäuser und größere Objekte benötigen 2-3 Tage. Im Gegensatz zu einem Neuanstrich gibt es keine Trocknungszeit – die Fassade ist sofort wieder nutzbar.',
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

        <div className="grid lg:grid-cols-3 gap-8 lg:gap-16">

          {/* Header - Links */}
          <div className="lg:col-span-1">
            <span className="text-[#109387] font-bold text-xs sm:text-sm uppercase tracking-wide mb-3 sm:mb-4 block">
              Häufige Fragen
            </span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#012956] leading-tight mb-4 sm:mb-6">
              Ihre Fragen zur Fassadenreinigung
            </h2>
            <p className="text-base sm:text-lg text-gray-600 font-semibold leading-relaxed mb-6">
              Hier finden Sie Antworten auf die häufigsten Fragen.
              Ihre Frage ist nicht dabei? Rufen Sie uns an!
            </p>
            <a
              href="tel:+4987143033460"
              className="inline-flex items-center gap-2 bg-[#012956] hover:bg-[#01203d] text-white font-bold px-5 py-3 rounded-[6px] transition-colors"
            >
              0871 430 334 60
            </a>
          </div>

          {/* FAQ Akkordeon - Rechts */}
          <div className="lg:col-span-2 space-y-3">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className="bg-white rounded-[6px] shadow-sm overflow-hidden"
              >
                <button
                  onClick={() => setOpenIndex(openIndex === index ? null : index)}
                  className="w-full flex items-center justify-between p-4 sm:p-5 text-left hover:bg-gray-50 transition-colors"
                >
                  <span className="text-[#012956] font-bold text-sm sm:text-base pr-4">
                    {faq.frage}
                  </span>
                  <ChevronDown
                    className={`w-5 h-5 text-[#109387] flex-shrink-0 transition-transform ${
                      openIndex === index ? 'rotate-180' : ''
                    }`}
                  />
                </button>
                <div
                  className={`overflow-hidden transition-all duration-300 ${
                    openIndex === index ? 'max-h-[500px]' : 'max-h-0'
                  }`}
                >
                  <div className="px-4 sm:px-5 pb-4 sm:pb-5">
                    <p className="text-gray-600 font-semibold leading-relaxed text-sm sm:text-base">
                      {faq.antwort}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>

        </div>

        {/* CTA */}
        <div className="mt-10 sm:mt-12 lg:mt-16 bg-[#012956] rounded-[6px] p-6 sm:p-8 lg:p-10">
          <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6">
            <div>
              <h3 className="text-xl sm:text-2xl font-bold text-white mb-2">
                Noch Fragen?
              </h3>
              <p className="text-white/70 font-semibold">
                Wir beraten Sie gerne persönlich und unverbindlich.
              </p>
            </div>
            <a
              href="#kontakt"
              className="inline-flex items-center justify-center gap-3 bg-[#109387] hover:bg-[#0d7d72] text-white font-bold px-6 py-3 rounded-[6px] transition-colors group"
            >
              Kostenfreie Beratung
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </a>
          </div>
        </div>

      </div>
    </section>
  )
}
