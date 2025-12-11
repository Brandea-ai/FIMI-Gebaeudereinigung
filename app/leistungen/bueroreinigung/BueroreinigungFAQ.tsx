'use client'

import { useState } from 'react'
import { ChevronDown } from 'lucide-react'

const faqs = [
  {
    question: 'Wie oft sollte ein Büro gereinigt werden?',
    answer: 'Die optimale Reinigungsfrequenz hängt von verschiedenen Faktoren ab: Mitarbeiteranzahl, Kundenverkehr und Verschmutzungsgrad. Typischerweise empfehlen wir täglich für stark frequentierte Bereiche, 2-3x wöchentlich für Standardbüros und wöchentlich für kleinere Büros. Wir beraten Sie gerne individuell.'
  },
  {
    question: 'Können Sie außerhalb der Geschäftszeiten reinigen?',
    answer: 'Ja, absolut! Das ist sogar die Regel. Wir passen uns vollständig Ihren Geschäftszeiten an und reinigen vorzugsweise morgens vor Arbeitsbeginn, abends nach Feierabend oder am Wochenende, damit Ihr Betriebsablauf nicht gestört wird.'
  },
  {
    question: 'Was kostet professionelle Büroreinigung?',
    answer: 'Die Kosten variieren je nach Bürogröße, Reinigungsfrequenz und gewünschtem Leistungsumfang. Nach einer kostenlosen Besichtigung erhalten Sie ein transparentes Festpreis-Angebot. Durchschnittlich liegen die Kosten bei 15-25€ pro Arbeitsstunde, abhängig vom Umfang.'
  },
  {
    question: 'Welche Reinigungsmittel verwenden Sie?',
    answer: 'Wir setzen auf professionelle, umweltfreundliche Reinigungsmittel, die nach ISO 14001 Standards ausgewählt werden. Alle Produkte sind gesundheitlich unbedenklich und hochwirksam. Auf Wunsch bieten wir auch komplett ökologische Reinigungslösungen an.'
  },
  {
    question: 'Sind Ihre Mitarbeiter versichert?',
    answer: 'Ja, selbstverständlich! Alle unsere Reinigungskräfte sind festangestellt, vollständig versichert (Haftpflicht und Unfallversicherung) und regelmäßig geschult. Sie arbeiten ausschließlich mit geprüftem Personal.'
  },
  {
    question: 'Was passiert wenn ich nicht zufrieden bin?',
    answer: 'Ihre Zufriedenheit ist unsere Priorität. Bei Beanstandungen kontaktieren Sie einfach Ihren persönlichen Ansprechpartner. Wir bessern umgehend und kostenlos nach. Dank unserer ISO 9001 Zertifizierung haben wir dokumentierte Qualitätsprozesse.'
  },
  {
    question: 'Gibt es eine Mindestvertragslaufzeit?',
    answer: 'Wir bieten flexible Lösungen an: von Einmalreinigungen über monatlich kündbare Verträge bis zu langfristigen Rahmenverträgen mit attraktiven Konditionen. Sie entscheiden, was zu Ihrem Unternehmen passt.'
  },
  {
    question: 'Reinigen Sie auch Glasflächen und Fenster?',
    answer: 'Ja! Glas- und Fensterreinigung gehört zu unserem Standard-Leistungsumfang. Wir reinigen Fenster innen und außen (bis zu einer bestimmten Höhe), Glastrennwände, Vitrinen und alle Glasflächen streifenfrei.'
  }
]

export default function BueroreinigungFAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0)

  return (
    <section className="py-24 md:py-32 bg-gray-50">
      <div className="container">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-block px-4 py-2 bg-fimi-turquoise/10 text-fimi-turquoise font-semibold mb-6" style={{ borderRadius: '4px' }}>
            Häufige Fragen
          </div>
          <h2 className="text-4xl md:text-6xl font-bold text-fimi-navy mb-6">
            Alles was Sie über Büroreinigung wissen müssen
          </h2>
          <p className="text-xl text-gray-600">
            Antworten auf die häufigsten Fragen zur professionellen Büroreinigung
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

        {/* Bottom CTA */}
        <div className="mt-16 text-center bg-white p-12" style={{ borderRadius: '4px' }}>
          <h3 className="text-2xl font-bold text-fimi-navy mb-4">
            Noch Fragen?
          </h3>
          <p className="text-xl text-gray-600 mb-6">
            Wir beraten Sie gerne persönlich und unverbindlich
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="tel:+4987120669360"
              className="inline-flex items-center justify-center px-8 py-4 bg-fimi-turquoise text-white font-bold hover:opacity-90 transition-opacity"
              style={{ borderRadius: '4px' }}
            >
              Jetzt anrufen: 0871 20669360
            </a>
            <a
              href="mailto:info@fimi-gebaeudereinigung.de"
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
