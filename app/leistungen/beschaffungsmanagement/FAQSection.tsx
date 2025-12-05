'use client'

import { useState } from 'react'
import { ChevronDown } from 'lucide-react'

const faqs = [
  {
    question: 'Wie viel kann man durch Beschaffungsmanagement einsparen?',
    answer: 'Erfahrungsgemäß lassen sich durch professionelles Beschaffungsmanagement 5 bis 15 Prozent der Einkaufskosten einsparen. Bei einem Einkaufsvolumen von einer Million Euro bedeutet das 50.000 bis 150.000 Euro Einsparung, die direkt den Gewinn erhöhen. Der sogenannte Gewinnhebel Einkauf macht Einsparungen besonders wertvoll: Im Gegensatz zu Umsatzsteigerungen wirkt sich jeder gesparte Euro zu 100 Prozent auf das EBIT aus.',
  },
  {
    question: 'Für welche Unternehmen lohnt sich externes Beschaffungsmanagement?',
    answer: 'Externes Beschaffungsmanagement lohnt sich besonders für produzierende Unternehmen mit hohem Materialanteil, bei denen der Einkauf 40 bis 70 Prozent der Gesamtkosten ausmacht. Ebenso profitieren Unternehmen mit überlasteten Einkaufsabteilungen, bei denen strategische Projekte liegen bleiben. Öffentliche Auftraggeber nutzen externe Unterstützung für Vergabeverfahren. Auch Unternehmen in Wachstums- oder Restrukturierungsphasen sowie Firmen, die ihre Lieferantenstruktur optimieren möchten, sind typische Kunden.',
  },
  {
    question: 'Wie lange dauert ein Beschaffungsmanagement-Projekt?',
    answer: 'Die Projektdauer hängt vom Umfang und den Zielen ab. Erste Erfolge durch Bündelung und Neuverhandlungen sind oft innerhalb von drei bis sechs Monaten sichtbar. Prozessuale Änderungen wie die Einführung von E-Procurement oder strukturelle Veränderungen im Lieferantenportfolio benötigen sechs bis zwölf Monate. Eine Spend-Analyse mit Potenzialeinschätzung ist bereits nach zwei bis drei Wochen abgeschlossen und zeigt Ihnen, wo Sie ansetzen sollten.',
  },
  {
    question: 'Was kostet Beschaffungsmanagement-Beratung?',
    answer: 'Wir bieten verschiedene Vergütungsmodelle an, die zu Ihrer Situation passen. Bei projektbasierten Festpreisen wissen Sie von Anfang an, was auf Sie zukommt. Bei Tagessätzen zahlen Sie flexibel nach tatsächlichem Aufwand. Besonders interessant ist die erfolgsabhängige Vergütung, bei der Sie nur zahlen, wenn tatsächlich Einsparungen erzielt werden. Die kostenfreie Erstberatung zeigt Ihre Potenziale auf, bevor Sie sich für ein Modell entscheiden.',
  },
  {
    question: 'Können Sie auch bei öffentlichen Ausschreibungen unterstützen?',
    answer: 'Ja, wir unterstützen öffentliche Auftraggeber bei der Vorbereitung und Durchführung von Vergabeverfahren nach VOL, VOB und VgV. Das umfasst die Bedarfsermittlung, die Erstellung des Leistungsverzeichnisses, die formale Prüfung von Angeboten, die Angebotswertung und die Vergabedokumentation. Dabei bleiben Sie als Auftraggeber stets Herr des Verfahrens, während wir fachliche und formale Unterstützung liefern.',
  },
  {
    question: 'Arbeiten Sie auch vor Ort in unserem Unternehmen?',
    answer: 'Ja, wir arbeiten hybrid und passen uns Ihren Anforderungen an. Die Analysephase und Strategie-Workshops finden bei Ihnen vor Ort statt, um Prozesse und Strukturen zu verstehen und Ihr Team einzubinden. Recherchen, Marktanalysen und Verhandlungsvorbereitungen erfolgen effizient remote. Bei wichtigen Lieferantenverhandlungen begleiten wir Sie persönlich – ob in Ihren Räumen oder beim Lieferanten.',
  },
]

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0)

  const toggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  return (
    <section className="py-16 sm:py-20 lg:py-28 bg-white">
      <div className="w-full max-w-[1800px] mx-auto px-4 sm:px-6 md:px-8 lg:px-12 xl:px-20">

        <div className="grid lg:grid-cols-5 gap-8 lg:gap-16">

          {/* Left: Header */}
          <div className="lg:col-span-2">
            <span className="text-[#109387] font-bold text-xs sm:text-sm uppercase tracking-wide mb-3 sm:mb-4 block">
              Häufige Fragen
            </span>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-bold text-[#109387] mb-4 sm:mb-6">
              FAQ zum Beschaffungsmanagement
            </h2>
            <p className="text-base sm:text-lg text-gray-600 font-semibold leading-relaxed mb-6">
              Hier finden Sie Antworten auf die wichtigsten Fragen.
              Ihre Frage ist nicht dabei? Rufen Sie uns an oder schreiben Sie uns.
            </p>
            <a
              href="#kontakt"
              className="inline-flex items-center gap-2 text-[#109387] font-bold hover:underline text-sm sm:text-base"
            >
              Weitere Fragen? Kontaktieren Sie uns
            </a>
          </div>

          {/* Right: FAQs */}
          <div className="lg:col-span-3 space-y-3 sm:space-y-4">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className="bg-[#f8f9fa] rounded-[6px] overflow-hidden"
              >
                <button
                  onClick={() => toggle(index)}
                  className="w-full flex items-center justify-between p-4 sm:p-5 lg:p-6 text-left group"
                >
                  <span className="text-sm sm:text-base lg:text-lg font-bold text-[#012956] group-hover:text-[#109387] transition-colors pr-4">
                    {faq.question}
                  </span>
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
                    <p className="text-sm sm:text-base text-gray-600 font-semibold leading-relaxed">
                      {faq.answer}
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
