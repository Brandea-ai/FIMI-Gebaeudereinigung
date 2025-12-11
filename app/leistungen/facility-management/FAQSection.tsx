'use client'

import { useState } from 'react'
import Image from 'next/image'
import { ChevronDown, ArrowRight } from 'lucide-react'

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
  {
    frage: 'Welche Leistungen kann ich einzeln buchen?',
    antwort: 'Sie können jede Leistung auch einzeln buchen: Unterhaltsreinigung, Hausmeisterservice, Winterdienst oder Außenanlagenpflege. Der Vorteil von Facility Management liegt aber in der Bündelung – ein Vertrag, ein Ansprechpartner, koordinierte Abläufe.',
  },
  {
    frage: 'Wie flexibel sind die Vertragskonditionen?',
    antwort: 'Wir bieten flexible Vertragslaufzeiten ab 12 Monaten. Die Leistungen können jederzeit erweitert oder angepasst werden. Bei Änderungen im Objektbestand (z.B. neue Flächen) passen wir das Angebot entsprechend an.',
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

          {/* Sticky Sidebar - wie Büroreinigung */}
          <aside className="lg:sticky lg:top-24 lg:self-start">
            <span className="text-sm text-gray-500 font-semibold uppercase tracking-wide mb-3 block">
              Häufige Fragen
            </span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-[#109387] leading-tight mb-4 sm:mb-6">
              Haben Sie noch Fragen?
            </h2>
            <p className="text-base sm:text-lg text-gray-700 font-semibold leading-relaxed mb-6 sm:mb-8">
              Hier finden Sie Antworten auf die häufigsten Fragen zum Facility Management.
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
              href="tel:+4987120669360"
              className="mt-6 sm:mt-8 bg-white border-2 border-[#012956] hover:bg-[#012956] rounded-[6px] p-4 sm:p-6 block transition-all duration-300 group"
            >
              <p className="text-sm text-gray-500 group-hover:text-white/70 font-semibold mb-2 transition-colors">
                Lieber persönlich sprechen?
              </p>
              <span className="text-lg sm:text-xl font-bold text-[#012956] group-hover:text-white transition-colors">
                0871 2066936 0
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
