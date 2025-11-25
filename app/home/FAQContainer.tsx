'use client'

import { useState } from 'react'
import { ChevronDown, Phone, Mail } from 'lucide-react'

const faqs = [
  {
    question: 'Welche Leistungen bieten Sie an?',
    answer: 'Wir bieten ein umfassendes Spektrum an Reinigungsdienstleistungen: von Büro- und Unterhaltsreinigung über Industriereinigung bis hin zu kompletten Facility Management Lösungen. Dazu gehören auch Spezialleistungen wie Fassadenreinigung, Winterdienst und Hausmeisterservice.'
  },
  {
    question: 'In welchen Regionen sind Sie tätig?',
    answer: 'Unser Hauptsitz ist in Landshut. Von dort aus bedienen wir 8 Regionen in Bayern: Landshut, München, Regensburg, Straubing, Dingolfing, Moosburg, Freising und Ingolstadt. Kurze Anfahrtswege garantieren schnellen Service.'
  },
  {
    question: 'Wie flexibel sind Ihre Reinigungszeiten?',
    answer: 'Sehr flexibel! Wir passen uns Ihren Geschäftszeiten an. Ob morgens vor Arbeitsbeginn, abends nach Feierabend, am Wochenende oder nachts – wir reinigen dann, wenn es für Ihren Betrieb am besten passt.'
  },
  {
    question: 'Bieten Sie auch Notfallreinigungen an?',
    answer: 'Ja, unser 24/7 Notfallservice steht Ihnen jederzeit zur Verfügung. Bei unvorhergesehenen Ereignissen wie Wasserschäden oder nach Events sind wir schnell vor Ort.'
  },
  {
    question: 'Wie wird die Qualität sichergestellt?',
    answer: 'Durch regelmäßige Schulungen unseres festangestellten Personals, Qualitätskontrollen vor Ort und modernste Reinigungstechnik. Zudem haben Sie einen persönlichen Ansprechpartner für direktes Feedback.'
  },
  {
    question: 'Welche Reinigungsmittel verwenden Sie?',
    answer: 'Wir setzen auf umweltfreundliche, professionelle Reinigungsmittel. Auf Wunsch bieten wir auch komplett ökologische Reinigungslösungen an – fragen Sie uns nach unseren nachhaltigen Optionen.'
  },
  {
    question: 'Wie erfolgt die Abrechnung?',
    answer: 'Wir bieten transparente Festpreise basierend auf Ihrem individuellen Bedarf. Je nach Vertrag erfolgt die Abrechnung monatlich. Keine versteckten Kosten – Sie wissen immer, was Sie bezahlen.'
  },
  {
    question: 'Wie schnell können Sie starten?',
    answer: 'Nach einer kostenlosen Bedarfsanalyse vor Ort und Angebotsannahme können wir in der Regel innerhalb einer Woche mit der Reinigung beginnen. Bei dringendem Bedarf auch schneller – sprechen Sie uns an.'
  }
]

export default function FAQContainer() {
  const [openIndex, setOpenIndex] = useState<number | null>(0)

  return (
    <section id="faq-section" className="section bg-gray-50">
      <div className="container">
        {/* Header */}
        <div className="max-w-2xl mb-12">
          <h2 className="heading-section">
            Häufig gestellte Fragen
          </h2>
          <p className="text-lead">
            Hier finden Sie Antworten auf die wichtigsten Fragen zu unseren Dienstleistungen.
          </p>
        </div>

        {/* FAQ Grid */}
        <div className="grid lg:grid-cols-2 gap-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className={`bg-white border rounded-[6px] overflow-hidden transition-all ${
                openIndex === index ? 'border-fimi-turquoise' : 'border-gray-200'
              }`}
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full px-5 py-4 flex items-start justify-between gap-3 text-left hover:bg-gray-50 transition-colors"
              >
                <span className="text-fimi-turquoise font-semibold">
                  {faq.question}
                </span>
                <ChevronDown
                  className={`flex-shrink-0 text-fimi-turquoise transition-transform duration-300 ${
                    openIndex === index ? 'rotate-180' : ''
                  }`}
                  size={20}
                />
              </button>

              <div
                className={`grid transition-all duration-300 ${
                  openIndex === index ? 'grid-rows-[1fr]' : 'grid-rows-[0fr]'
                }`}
              >
                <div className="overflow-hidden">
                  <div className="px-5 pb-4 text-body border-t border-gray-100 pt-3">
                    {faq.answer}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-12 text-center">
          <div className="inline-block bg-white rounded-[6px] p-6 border border-gray-200">
            <p className="text-gray-700 mb-4">
              Haben Sie weitere Fragen? Wir beraten Sie gerne persönlich.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <a
                href="tel:+4917472254773"
                className="btn-primary"
              >
                <Phone size={18} />
                0174 722 54 773
              </a>
              <a
                href="mailto:info@fimi-service.de"
                className="btn-outline"
              >
                <Mail size={18} />
                E-Mail schreiben
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
