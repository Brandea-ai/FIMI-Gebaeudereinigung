'use client'

import { useState } from 'react'
import { ChevronDown } from 'lucide-react'

const faqs = [
  {
    question: 'Welche Leistungen bieten Sie an?',
    answer: 'Wir bieten ein umfassendes Spektrum an Reinigungsdienstleistungen: von Büro- und Unterhaltsreinigung über Industriereinigung bis hin zu kompletten Facility Management Lösungen. Dazu gehören auch Spezialleistungen wie Fassadenreinigung, Winterdienst und Hausmeisterservice.'
  },
  {
    question: 'Sind Sie ISO-zertifiziert?',
    answer: 'Ja, wir sind nach ISO 9001 (Qualitätsmanagement) und ISO 14001 (Umweltmanagement) zertifiziert. Diese Zertifizierungen garantieren höchste Qualitätsstandards und umweltfreundliche Reinigungsverfahren.'
  },
  {
    question: 'Wie flexibel sind Ihre Reinigungszeiten?',
    answer: 'Sehr flexibel! Wir passen uns Ihren Geschäftszeiten an. Ob morgens vor Arbeitsbeginn, abends nach Feierabend, am Wochenende oder nachts - wir reinigen dann, wenn es für Ihren Betrieb am besten passt.'
  },
  {
    question: 'Bieten Sie auch Notfallreinigungen an?',
    answer: 'Ja, unser 24/7 Notfallservice steht Ihnen jederzeit zur Verfügung. Bei unvorhergesehenen Ereignissen wie Wasserschäden oder nach Events sind wir schnell vor Ort.'
  },
  {
    question: 'Wie wird die Qualität sichergestellt?',
    answer: 'Durch regelmäßige Schulungen unseres festangestellten Personals, Qualitätskontrollen vor Ort, modernste Reinigungstechnik und die Einhaltung unserer ISO-zertifizierten Prozesse. Zudem haben Sie einen persönlichen Ansprechpartner für Feedback.'
  },
  {
    question: 'Welche Reinigungsmittel verwenden Sie?',
    answer: 'Wir setzen auf umweltfreundliche, professionelle Reinigungsmittel, die nach ISO 14001 Standards ausgewählt werden. Auf Wunsch bieten wir auch komplett ökologische Reinigungslösungen an.'
  },
  {
    question: 'Wie erfolgt die Abrechnung?',
    answer: 'Wir bieten transparente Festpreise basierend auf Ihrem individuellen Bedarf. Je nach Vertrag erfolgt die Abrechnung monatlich. Ein kostenloses Erstgespräch und Angebot ist selbstverständlich.'
  },
  {
    question: 'Sind Sie auch im Raum Landshut tätig?',
    answer: 'Ja, unser Hauptsitz ist in Landshut (Kellerstr. 39, 84036 Landshut). Wir betreuen Kunden in Landshut und der gesamten Region. Sprechen Sie uns an, wir prüfen gerne die Möglichkeiten für Ihren Standort.'
  }
]

export default function FAQContainer() {
  const [openIndex, setOpenIndex] = useState<number | null>(0)

  return (
    <section className="py-24 md:py-32 bg-gray-50">
      <div className="container">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-block px-4 py-2 bg-fimi-turquoise/10 text-fimi-turquoise font-semibold mb-6" style={{ borderRadius: '4px' }}>
            FAQ
          </div>
          <h2 className="text-4xl md:text-6xl font-bold text-fimi-navy mb-6">
            Häufig gestellte Fragen
          </h2>
          <p className="text-xl text-gray-600">
            Hier finden Sie Antworten auf die wichtigsten Fragen zu unseren Dienstleistungen
          </p>
        </div>

        {/* FAQ Grid */}
        <div className="grid lg:grid-cols-2 gap-6 max-w-6xl mx-auto">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="bg-white border-2 border-gray-200 overflow-hidden"
              style={{ borderRadius: '4px' }}
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full px-8 py-6 flex items-start justify-between gap-4 text-left hover:bg-gray-50 transition-colors"
              >
                <span className="font-bold text-fimi-navy text-lg pr-4">
                  {faq.question}
                </span>
                <ChevronDown
                  className={`flex-shrink-0 text-fimi-turquoise transition-transform ${
                    openIndex === index ? 'rotate-180' : ''
                  }`}
                  size={24}
                />
              </button>

              <div
                className={`overflow-hidden transition-all duration-300 ${
                  openIndex === index ? 'max-h-96' : 'max-h-0'
                }`}
              >
                <div className="px-8 pb-6 text-gray-600 leading-relaxed">
                  {faq.answer}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-16 text-center">
          <p className="text-xl text-gray-600 mb-6">
            Haben Sie weitere Fragen?
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="tel:01747225473"
              className="inline-flex items-center justify-center px-8 py-4 bg-fimi-turquoise text-white font-bold hover:opacity-90 transition-opacity"
              style={{ borderRadius: '4px' }}
            >
              Jetzt anrufen: 01747225473
            </a>
            <a
              href="mailto:info@fimi-service.de"
              className="inline-flex items-center justify-center px-8 py-4 border-2 border-fimi-navy text-fimi-navy font-bold hover:bg-fimi-navy hover:text-white transition-all"
              style={{ borderRadius: '4px' }}
            >
              E-Mail schreiben
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
