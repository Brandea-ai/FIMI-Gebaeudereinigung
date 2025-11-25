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
        {/* Header - Links */}
        <div className="mb-16">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-fimi-navy mb-6">
            Haeufig gestellte Fragen
          </h2>
          <p className="text-xl md:text-2xl font-bold text-gray-600 max-w-4xl">
            Hier finden Sie Antworten auf die wichtigsten Fragen zu unseren Dienstleistungen.
            Ihre Frage ist nicht dabei? Kontaktieren Sie uns!
          </p>
        </div>

        {/* FAQ Grid - 6px Rundungen */}
        <div className="grid lg:grid-cols-2 gap-6">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className={`bg-white border-2 rounded-[6px] overflow-hidden transition-all ${
                openIndex === index ? 'border-fimi-turquoise' : 'border-gray-200'
              }`}
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full px-6 py-5 flex items-start justify-between gap-4 text-left hover:bg-gray-50 transition-colors"
              >
                <span className="text-xl font-bold text-fimi-navy">
                  {faq.question}
                </span>
                <ChevronDown
                  className={`flex-shrink-0 text-fimi-turquoise transition-transform duration-300 ${
                    openIndex === index ? 'rotate-180' : ''
                  }`}
                  size={28}
                  strokeWidth={3}
                />
              </button>

              <div
                className={`grid transition-all duration-300 ${
                  openIndex === index ? 'grid-rows-[1fr]' : 'grid-rows-[0fr]'
                }`}
              >
                <div className="overflow-hidden">
                  <div className="px-6 pb-5 text-lg font-bold text-gray-600 border-t-2 border-gray-100 pt-4">
                    {faq.answer}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA - 6px Rundungen */}
        <div className="mt-16 text-center">
          <div className="inline-block bg-white rounded-[6px] p-8 border-2 border-gray-200">
            <p className="text-xl font-bold text-gray-700 mb-6">
              Haben Sie weitere Fragen? Wir beraten Sie gerne persoenlich.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="tel:01747225473"
                className="inline-flex items-center justify-center gap-3 bg-fimi-turquoise text-white text-lg font-bold px-8 py-4 rounded-[6px] hover:opacity-90 transition-all"
              >
                <Phone size={24} strokeWidth={3} />
                0174 722 5473
              </a>
              <a
                href="mailto:info@fimi-service.de"
                className="inline-flex items-center justify-center gap-3 bg-white text-fimi-navy text-lg font-bold px-8 py-4 rounded-[6px] border-2 border-fimi-navy hover:bg-fimi-navy hover:text-white transition-all"
              >
                <Mail size={24} strokeWidth={3} />
                E-Mail schreiben
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
