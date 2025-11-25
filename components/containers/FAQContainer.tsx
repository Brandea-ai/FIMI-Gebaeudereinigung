'use client'

import { useState } from 'react'
import { ChevronDown } from 'lucide-react'

const faqs = [
  {
    question: 'Welche Reinigungsleistungen bieten Sie an?',
    answer: 'Wir bieten ein umfassendes Spektrum an Reinigungsdienstleistungen: von der Büro- und Unterhaltsreinigung über Industriereinigung bis hin zu Facility Management und Winterdienst. Alle Leistungen können individuell kombiniert und an Ihre Bedürfnisse angepasst werden.'
  },
  {
    question: 'Wie schnell können Sie mit der Reinigung beginnen?',
    answer: 'In der Regel können wir innerhalb von 48 Stunden nach Auftragserteilung mit der Reinigung beginnen. Bei Notfällen oder dringendem Bedarf ist auch ein sofortiger Start möglich - kontaktieren Sie uns einfach über unsere 24/7 Hotline.'
  },
  {
    question: 'Sind Ihre Reinigungsmittel umweltfreundlich?',
    answer: 'Ja, wir setzen zu 100% auf ökologische und biologisch abbaubare Reinigungsmittel. Diese sind nicht nur umweltfreundlich, sondern auch schonend für Mensch und Material. Nachhaltigkeit hat bei FIMI höchste Priorität.'
  },
  {
    question: 'Wie werden die Reinigungskosten berechnet?',
    answer: 'Die Kosten richten sich nach der Größe der zu reinigenden Fläche, der Art der Reinigung, der Häufigkeit und dem gewünschten Leistungsumfang. Nach einer kostenlosen Begehung erhalten Sie ein transparentes und faires Festpreisangebot ohne versteckte Kosten.'
  },
  {
    question: 'Sind Ihre Mitarbeiter versichert und geschult?',
    answer: 'Selbstverständlich. Alle unsere Mitarbeiter sind speziell geschult, zertifiziert und vollständig versichert. Wir führen regelmäßige Schulungen durch, um höchste Qualitätsstandards zu gewährleisten.'
  },
  {
    question: 'Bieten Sie auch Reinigung außerhalb der Geschäftszeiten an?',
    answer: 'Ja, wir passen uns flexibel Ihren Betriebszeiten an. Reinigungen können früh morgens, abends, nachts oder am Wochenende durchgeführt werden, damit Ihr Tagesgeschäft nicht gestört wird.'
  },
  {
    question: 'Wie stellen Sie die Qualität Ihrer Arbeit sicher?',
    answer: 'Wir arbeiten nach ISO-zertifizierten Qualitätsstandards und führen regelmäßige Kontrollen durch. Zudem haben Sie einen festen Ansprechpartner und können jederzeit Feedback geben. Ihre Zufriedenheit ist unser oberstes Ziel.'
  },
  {
    question: 'Kann ich einen Probereinigung vereinbaren?',
    answer: 'Ja, gerne! Wir bieten Ihnen die Möglichkeit einer unverbindlichen Probereinigung an, damit Sie sich von unserer Qualität überzeugen können. Kontaktieren Sie uns einfach für einen Termin.'
  }
]

export default function FAQContainer() {
  const [openIndex, setOpenIndex] = useState<number | null>(0)

  return (
    <section className="section-padding bg-gradient-to-br from-gray-50 to-white">
      <div className="container-custom">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Left Side - Info */}
          <div className="lg:sticky lg:top-32">
            <span className="text-fimi-turquoise font-semibold text-sm uppercase tracking-wider mb-4 block">
              FAQ
            </span>
            <h2 className="mb-6">
              Häufig gestellte<br />
              <span className="text-fimi-turquoise">Fragen</span>
            </h2>
            <p className="text-xl text-gray-600 mb-8">
              Sie haben Fragen? Wir haben Antworten. Finden Sie hier die wichtigsten Informationen zu unseren Reinigungsdienstleistungen.
            </p>

            <div className="bg-gradient-to-br from-fimi-navy to-fimi-turquoise p-8 rounded-2xl text-white">
              <h4 className="text-white text-2xl font-bold mb-4">
                Noch Fragen?
              </h4>
              <p className="text-gray-200 mb-6">
                Unser Team steht Ihnen gerne zur Verfügung und beantwortet alle Ihre Fragen persönlich.
              </p>
              <a
                href="tel:01747225473"
                className="inline-block bg-white text-fimi-navy font-semibold py-3 px-6 rounded-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
              >
                Jetzt anrufen: 01747225473
              </a>
            </div>
          </div>

          {/* Right Side - Accordion */}
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className="bg-white rounded-xl border border-gray-200 hover:border-fimi-turquoise transition-colors duration-300 overflow-hidden"
              >
                <button
                  onClick={() => setOpenIndex(openIndex === index ? null : index)}
                  className="w-full flex items-center justify-between p-6 text-left hover:bg-gray-50 transition-colors"
                >
                  <span className="font-semibold text-fimi-navy pr-4">
                    {faq.question}
                  </span>
                  <ChevronDown
                    className={`w-5 h-5 text-fimi-turquoise flex-shrink-0 transition-transform duration-300 ${
                      openIndex === index ? 'rotate-180' : ''
                    }`}
                  />
                </button>

                <div
                  className={`transition-all duration-300 ease-in-out ${
                    openIndex === index
                      ? 'max-h-96 opacity-100'
                      : 'max-h-0 opacity-0'
                  } overflow-hidden`}
                >
                  <div className="px-6 pb-6 text-gray-600 leading-relaxed">
                    {faq.answer}
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
