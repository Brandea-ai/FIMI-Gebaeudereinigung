'use client'

import { useState } from 'react'
import { ChevronDown, HelpCircle } from 'lucide-react'

const faqs = [
  {
    frage: 'Was kostet Unterhaltsreinigung pro Quadratmeter?',
    antwort: 'Die Kosten für professionelle Unterhaltsreinigung liegen typischerweise zwischen 0,80 und 2,50 Euro pro Quadratmeter. Der genaue Preis hängt von mehreren Faktoren ab: Reinigungsintervall (täglich, wöchentlich), Umfang der Leistungen, Art der Räume und regionale Gegebenheiten. Bei einer kostenfreien Besichtigung erstellen wir Ihnen ein transparentes Festpreisangebot ohne versteckte Kosten.',
  },
  {
    frage: 'Was ist der Unterschied zwischen Unterhaltsreinigung und Büroreinigung?',
    antwort: 'Unterhaltsreinigung ist der Oberbegriff für alle regelmäßigen, wiederkehrenden Reinigungsarbeiten – egal ob Büro, Praxis, Einzelhandel oder Produktionshalle. Büroreinigung ist eine spezifische Form der Unterhaltsreinigung, die sich auf Büroumgebungen konzentriert. Bei uns bekommen Sie beides – angepasst an Ihre Räumlichkeiten und Anforderungen.',
  },
  {
    frage: 'Wie oft sollte eine Unterhaltsreinigung stattfinden?',
    antwort: 'Die optimale Reinigungsfrequenz hängt von der Nutzung ab. Stark frequentierte Bereiche wie Sanitäranlagen und Eingänge empfehlen wir täglich. Büroflächen und Besprechungsräume können oft mit 2-3 Mal pro Woche auskommen. Selten genutzte Räume wie Archive reichen wöchentlich. Wir erstellen gemeinsam einen Plan, der zu Ihrem Bedarf und Budget passt.',
  },
  {
    frage: 'Reinigen Sie auch außerhalb der Geschäftszeiten?',
    antwort: 'Ja, das ist sogar unser Standard. Die meisten unserer Kunden wünschen Reinigung außerhalb der Arbeitszeit – früh morgens, abends oder am Wochenende. So stören wir Ihren Betriebsablauf nicht und Ihre Mitarbeiter oder Kunden kommen in frisch gereinigte Räume. Wir passen uns flexibel an Ihre Wunschzeiten an.',
  },
  {
    frage: 'Arbeiten immer dieselben Reinigungskräfte bei mir?',
    antwort: 'Ja, bei FIMI setzen wir auf feste Teams. Ihre Reinigungskräfte kennen Ihre Räume, Ihre Wünsche und Ihre Besonderheiten. Kein ständiges Einarbeiten, keine Überraschungen. Nur bei Urlaub oder Krankheit springt ein eingearbeiteter Vertreter aus demselben Team ein.',
  },
  {
    frage: 'Wie schnell können Sie mit der Unterhaltsreinigung starten?',
    antwort: 'Nach Ihrer Anfrage melden wir uns innerhalb von 2 Stunden. Die kostenfreie Besichtigung findet meist innerhalb von 1-2 Werktagen statt. Nach Angebotsannahme starten wir typischerweise innerhalb von 3-5 Werktagen. Bei dringendem Bedarf sind auch schnellere Starts möglich – sprechen Sie uns an.',
  },
  {
    frage: 'Welche Reinigungsmittel verwenden Sie?',
    antwort: 'Wir arbeiten mit umweltschonenden, biologisch abbaubaren Reinigungsmitteln, die trotzdem hocheffektiv sind. Bei speziellen Anforderungen (z.B. Allergiker, Duftstofffrei, bestimmte Zertifizierungen für Medizin oder Lebensmittel) passen wir unsere Produkte an. Alle unsere Mittel entsprechen den aktuellen Umwelt- und Gesundheitsstandards.',
  },
  {
    frage: 'Was passiert, wenn ich mit der Reinigung nicht zufrieden bin?',
    antwort: 'Ihre Zufriedenheit ist unser Maßstab. Sollte einmal etwas nicht passen, melden Sie sich bei Ihrem festen Ansprechpartner. Wir bessern umgehend nach – ohne Diskussion und ohne Zusatzkosten. Regelmäßige Qualitätskontrollen durch unsere Objektleiter stellen sicher, dass es gar nicht erst so weit kommt.',
  },
]

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0)

  const toggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  return (
    <section id="faq" className="py-20 lg:py-28 bg-[#f8f9fa]">
      <div className="w-full max-w-[1800px] mx-auto px-6 lg:px-12 xl:px-20">

        <div className="grid lg:grid-cols-[400px_1fr] gap-12 lg:gap-20">

          {/* Sticky Sidebar */}
          <aside className="lg:sticky lg:top-32 lg:self-start">
            <span className="text-[#109387] font-bold text-sm uppercase tracking-wide mb-4 block">
              Häufige Fragen
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#012956] leading-tight mb-6">
              FAQ zur Unterhaltsreinigung
            </h2>
            <p className="text-lg text-gray-600 font-semibold leading-relaxed mb-8">
              Die wichtigsten Fragen unserer Kunden – ehrlich und direkt beantwortet.
            </p>

            {/* Help Box */}
            <div className="bg-[#012956] rounded-[6px] p-6 hidden lg:block">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-[6px] bg-[#109387]/20 flex items-center justify-center flex-shrink-0">
                  <HelpCircle size={24} className="text-[#109387]" />
                </div>
                <div>
                  <h4 className="text-white font-bold mb-2">Noch Fragen?</h4>
                  <p className="text-white/70 font-semibold text-sm mb-4">
                    Wir beraten Sie gerne persönlich.
                  </p>
                  <a
                    href="tel:+4987143033460"
                    className="text-[#109387] font-bold hover:underline"
                  >
                    0871 430 334 60
                  </a>
                </div>
              </div>
            </div>
          </aside>

          {/* FAQ Accordion */}
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className={`bg-white rounded-[6px] overflow-hidden transition-shadow ${
                  openIndex === index ? 'shadow-lg' : 'shadow-sm'
                }`}
              >
                <button
                  onClick={() => toggle(index)}
                  className="w-full flex items-center justify-between p-6 text-left hover:bg-gray-50 transition-colors"
                >
                  <h3 className="text-lg font-bold text-[#012956] pr-4">
                    {faq.frage}
                  </h3>
                  <ChevronDown
                    size={24}
                    className={`text-[#109387] flex-shrink-0 transition-transform duration-300 ${
                      openIndex === index ? 'rotate-180' : ''
                    }`}
                  />
                </button>

                <div
                  className={`overflow-hidden transition-all duration-300 ${
                    openIndex === index ? 'max-h-[500px]' : 'max-h-0'
                  }`}
                >
                  <div className="px-6 pb-6">
                    <p className="text-gray-600 font-semibold leading-relaxed">
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
