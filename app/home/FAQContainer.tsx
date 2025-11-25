'use client'

import { useState } from 'react'
import { ChevronDown, Phone, Mail } from 'lucide-react'

const faqs = [
  {
    question: 'Welche Leistungen bieten Sie an?',
    answer: 'Wir bieten ein umfassendes Spektrum an Reinigungsdienstleistungen: von Buero- und Unterhaltsreinigung ueber Industriereinigung bis hin zu kompletten Facility Management Loesungen. Dazu gehoeren auch Spezialleistungen wie Fassadenreinigung, Winterdienst und Hausmeisterservice.'
  },
  {
    question: 'In welchen Regionen sind Sie taetig?',
    answer: 'Unser Hauptsitz ist in Landshut. Von dort aus bedienen wir 8 Regionen in Bayern: Landshut, Muenchen, Regensburg, Straubing, Dingolfing, Moosburg, Freising und Ingolstadt. Kurze Anfahrtswege garantieren schnellen Service.'
  },
  {
    question: 'Wie flexibel sind Ihre Reinigungszeiten?',
    answer: 'Sehr flexibel! Wir passen uns Ihren Geschaeftszeiten an. Ob morgens vor Arbeitsbeginn, abends nach Feierabend, am Wochenende oder nachts - wir reinigen dann, wenn es fuer Ihren Betrieb am besten passt.'
  },
  {
    question: 'Bieten Sie auch Notfallreinigungen an?',
    answer: 'Ja, unser 24/7 Notfallservice steht Ihnen jederzeit zur Verfuegung. Bei unvorhergesehenen Ereignissen wie Wasserschaeden oder nach Events sind wir schnell vor Ort.'
  },
  {
    question: 'Wie wird die Qualitaet sichergestellt?',
    answer: 'Durch regelmaessige Schulungen unseres festangestellten Personals, Qualitaetskontrollen vor Ort und modernste Reinigungstechnik. Zudem haben Sie einen persoenlichen Ansprechpartner fuer direktes Feedback.'
  },
  {
    question: 'Welche Reinigungsmittel verwenden Sie?',
    answer: 'Wir setzen auf umweltfreundliche, professionelle Reinigungsmittel. Auf Wunsch bieten wir auch komplett oekologische Reinigungsloesungen an - fragen Sie uns nach unseren nachhaltigen Optionen.'
  },
  {
    question: 'Wie erfolgt die Abrechnung?',
    answer: 'Wir bieten transparente Festpreise basierend auf Ihrem individuellen Bedarf. Je nach Vertrag erfolgt die Abrechnung monatlich. Keine versteckten Kosten - Sie wissen immer, was Sie bezahlen.'
  },
  {
    question: 'Wie schnell koennen Sie starten?',
    answer: 'Nach einer kostenlosen Bedarfsanalyse vor Ort und Angebotsannahme koennen wir in der Regel innerhalb einer Woche mit der Reinigung beginnen. Bei dringendem Bedarf auch schneller - sprechen Sie uns an.'
  }
]

export default function FAQContainer() {
  const [openIndex, setOpenIndex] = useState<number | null>(0)

  return (
    <section id="faq-section" className="section bg-gray-50">
      <div className="container">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="badge mb-6">FAQ</span>
          <h2 className="heading-2 mb-6">
            Haeufig gestellte Fragen
          </h2>
          <p className="text-lead">
            Hier finden Sie Antworten auf die wichtigsten Fragen zu unseren Dienstleistungen.
            Ihre Frage ist nicht dabei? Kontaktieren Sie uns!
          </p>
        </div>

        {/* FAQ Grid */}
        <div className="grid lg:grid-cols-2 gap-6 max-w-6xl mx-auto">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className={`bg-white border-2 rounded-xl overflow-hidden transition-all duration-300 ${
                openIndex === index ? 'border-fimi-turquoise shadow-card' : 'border-gray-200'
              }`}
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full px-6 py-5 flex items-start justify-between gap-4 text-left hover:bg-gray-50 transition-colors"
              >
                <span className="font-semibold text-fimi-navy">
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
                  <div className="px-6 pb-5 text-gray-600 leading-relaxed border-t border-gray-100 pt-4">
                    {faq.answer}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-16 text-center">
          <div className="inline-block bg-white rounded-2xl p-8 shadow-card border border-gray-100">
            <p className="text-lg text-gray-700 mb-6">
              Haben Sie weitere Fragen? Wir beraten Sie gerne persoenlich.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="tel:01747225473"
                className="btn-primary"
              >
                <Phone size={18} />
                0174 722 5473
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
