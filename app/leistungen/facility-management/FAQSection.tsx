'use client'

import { useState } from 'react'
import { ChevronDown, HelpCircle } from 'lucide-react'

const faqs = [
  {
    frage: 'Was genau umfasst Facility Management?',
    antwort: 'Facility Management bedeutet: Alle Dienstleistungen rund um Ihr Gebäude aus einer Hand. Das umfasst typischerweise Reinigung, Hausmeisterservice, Winterdienst und Außenanlagenpflege. Bei FIMI koordiniert ein persönlicher Ansprechpartner alle Leistungen – Sie haben nur noch einen Vertrag, eine Rechnung und einen Kontakt.',
  },
  {
    frage: 'Lohnt sich Facility Management auch für kleinere Objekte?',
    antwort: 'Ja, besonders für kleinere Objekte kann sich Facility Management lohnen. Sie sparen den Koordinationsaufwand zwischen mehreren Dienstleistern. Bereits ab einer Objektgröße von 500 m² oder bei Bedarf für mindestens zwei verschiedene Dienstleistungen rechnet sich die Bündelung – sowohl zeitlich als auch finanziell.',
  },
  {
    frage: 'Wie schnell können Sie bei einem Notfall reagieren?',
    antwort: 'Wir garantieren eine Reaktionszeit von 2 Stunden in ganz Bayern. In Landshut und direkter Umgebung sind wir oft noch schneller vor Ort. Bei Winterdienst sind unsere Teams ab 4 Uhr morgens im Einsatz. Ihr persönlicher Ansprechpartner ist über eine Notfallnummer auch außerhalb der Geschäftszeiten erreichbar.',
  },
  {
    frage: 'Was kostet Facility Management im Vergleich zu Einzeldienstleistern?',
    antwort: 'Erfahrungsgemäß sparen unsere Kunden durch die Bündelung 10-15% der Gesamtkosten. Dazu kommt die Zeitersparnis: keine Koordination mehr, keine Mehrfachtermine, keine Schnittstellenprobleme. Nach einer kostenfreien Besichtigung erhalten Sie ein transparentes Festpreisangebot – ohne versteckte Kosten.',
  },
  {
    frage: 'Wie läuft der Wechsel zu FIMI ab, wenn ich bereits andere Dienstleister habe?',
    antwort: 'Wir übernehmen die komplette Übergangsplanung für Sie. Nach einer Besichtigung erstellen wir einen Transitionsplan, der sicherstellt, dass keine Lücke entsteht. Bestehende Verträge können Sie meist zum Monats- oder Quartalsende kündigen. Wir koordinieren den nahtlosen Übergang aller Leistungen.',
  },
  {
    frage: 'Bekomme ich immer die gleichen Mitarbeiter für mein Objekt?',
    antwort: 'Ja, das ist unser Prinzip. Für jedes Objekt stellen wir ein festes Team zusammen, das Ihre Räumlichkeiten und Anforderungen kennt. Ihr persönlicher Ansprechpartner koordiniert dieses Team. Bei Urlaub oder Krankheit sorgen wir für eingearbeitete Vertretungen – Sie müssen sich um nichts kümmern.',
  },
]

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0)

  const toggleFaq = (index: number) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  return (
    <section className="py-16 sm:py-20 lg:py-28 bg-[#f8f9fa]">
      <div className="w-full max-w-[1800px] mx-auto px-4 sm:px-6 md:px-8 lg:px-12 xl:px-20">

        <div className="grid lg:grid-cols-2 gap-8 lg:gap-16">

          {/* Left: Header */}
          <div className="lg:sticky lg:top-24 lg:self-start">
            <span className="text-[#109387] font-bold text-xs sm:text-sm uppercase tracking-wide mb-3 sm:mb-4 block">
              Häufige Fragen
            </span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-[#012956] leading-[1.1] mb-4 sm:mb-6">
              Ihre Fragen zu Facility Management
            </h2>
            <p className="text-base sm:text-lg text-gray-600 font-semibold mb-6 sm:mb-8">
              Alles, was Sie über gebündelte Gebäudedienstleistungen wissen sollten –
              verständlich erklärt.
            </p>

            {/* Trust Element */}
            <div className="bg-white rounded-[6px] p-5 sm:p-6 border-l-4 border-[#109387]">
              <div className="flex items-start gap-3 sm:gap-4">
                <div className="w-10 h-10 sm:w-12 sm:h-12 bg-[#109387]/10 rounded-[6px] flex items-center justify-center flex-shrink-0">
                  <HelpCircle className="w-5 h-5 sm:w-6 sm:h-6 text-[#109387]" />
                </div>
                <div>
                  <h3 className="text-[#012956] font-bold text-base sm:text-lg mb-1">
                    Noch Fragen?
                  </h3>
                  <p className="text-gray-600 font-semibold text-sm sm:text-base mb-3">
                    Wir beraten Sie gerne persönlich.
                  </p>
                  <a
                    href="tel:+4987143033460"
                    className="text-[#109387] font-bold text-base sm:text-lg hover:text-[#012956] transition-colors"
                  >
                    0871 430 334 60
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Right: FAQ Accordion */}
          <div className="space-y-3 sm:space-y-4">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className="bg-white rounded-[6px] overflow-hidden shadow-sm"
              >
                <button
                  onClick={() => toggleFaq(index)}
                  className="w-full px-5 sm:px-6 py-4 sm:py-5 flex items-center justify-between gap-4 text-left hover:bg-gray-50 transition-colors"
                  aria-expanded={openIndex === index}
                >
                  <span className="text-[#012956] font-bold text-sm sm:text-base lg:text-lg pr-4">
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
                    openIndex === index ? 'max-h-96' : 'max-h-0'
                  }`}
                >
                  <div className="px-5 sm:px-6 pb-5 sm:pb-6">
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
