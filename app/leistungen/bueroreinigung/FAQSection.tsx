'use client'

import { useState } from 'react'
import { ChevronDown, HelpCircle } from 'lucide-react'

const faqs = [
  {
    frage: 'Was kostet Büroreinigung pro Quadratmeter?',
    antwort: 'Die Kosten für professionelle Büroreinigung liegen typischerweise zwischen 0,80 und 2,50 Euro pro Quadratmeter. Der genaue Preis hängt von mehreren Faktoren ab: Reinigungsintervall (täglich, wöchentlich), Umfang der Leistungen, Zugänglichkeit der Räume und regionale Gegebenheiten. Bei einer kostenfreien Besichtigung erstellen wir Ihnen ein transparentes Festpreisangebot ohne versteckte Kosten.',
  },
  {
    frage: 'Wie oft sollte ein Büro professionell gereinigt werden?',
    antwort: 'Die optimale Reinigungsfrequenz hängt von der Nutzung ab. Für Büros mit normalem Publikumsverkehr empfehlen wir 2-3 Mal pro Woche. Arztpraxen, Einzelhandel oder Räume mit hohem Besucheraufkommen sollten täglich gereinigt werden. Sanitärbereiche und Küchen benötigen immer häufigere Aufmerksamkeit als Einzelbüros. Wir beraten Sie gerne, welches Intervall für Ihre Situation ideal ist.',
  },
  {
    frage: 'Reinigen Sie auch außerhalb der Geschäftszeiten?',
    antwort: 'Ja, das ist sogar unser Standard. Die meisten unserer Kunden wünschen Reinigung außerhalb der Arbeitszeit – früh morgens, abends oder am Wochenende. So stören wir Ihren Betriebsablauf nicht und Ihre Mitarbeiter kommen in ein frisch gereinigtes Büro. Wir passen uns flexibel an Ihre Wunschzeiten an.',
  },
  {
    frage: 'Was ist der Unterschied zwischen Büroreinigung und Unterhaltsreinigung?',
    antwort: 'Büroreinigung ist eine Form der Unterhaltsreinigung, speziell für Büroumgebungen. Unterhaltsreinigung ist der Oberbegriff für alle regelmäßigen, wiederkehrenden Reinigungsarbeiten – ob Büro, Praxis, Einzelhandel oder Produktion. Der Unterschied liegt im Einsatzbereich, nicht in der Qualität. Beide Begriffe beschreiben professionelle, regelmäßige Gebäudereinigung.',
  },
  {
    frage: 'Wie schnell können Sie mit der Reinigung starten?',
    antwort: 'Nach Ihrer Anfrage melden wir uns innerhalb von 2 Stunden. Die kostenfreie Besichtigung findet meist innerhalb von 1-2 Werktagen statt. Nach Angebotsannahme starten wir typischerweise innerhalb von 3-5 Werktagen. Bei dringendem Bedarf sind auch schnellere Starts möglich – sprechen Sie uns an.',
  },
  {
    frage: 'Welche Reinigungsmittel verwenden Sie?',
    antwort: 'Wir arbeiten mit umweltschonenden, biologisch abbaubaren Reinigungsmitteln, die trotzdem hocheffektiv sind. Bei speziellen Anforderungen (z.B. Allergiker, Duftstofffrei, bestimmte Zertifizierungen) passen wir unsere Produkte an. Alle unsere Mittel entsprechen den aktuellen Umwelt- und Gesundheitsstandards.',
  },
  {
    frage: 'Haben Sie Erfahrung mit Arztpraxen und medizinischen Einrichtungen?',
    antwort: 'Ja, wir reinigen zahlreiche Arztpraxen, Zahnarztpraxen und medizinische Einrichtungen in Bayern. Dabei beachten wir die besonderen Hygienevorschriften und RKI-Richtlinien. Desinfektion von Kontaktflächen, sterile Behandlungsräume und hygienische Wartebereiche gehören zu unserem Standard für medizinische Einrichtungen.',
  },
  {
    frage: 'Wie kündige ich meinen aktuellen Reinigungsdienstleister?',
    antwort: 'Die Kündigung Ihres bestehenden Vertrags ist meist mit einer Frist von 1-3 Monaten möglich – prüfen Sie Ihre Vertragsunterlagen. Wir helfen Ihnen gerne bei einem reibungslosen Übergang. Viele Kunden wechseln zu uns, weil sie mit der Zuverlässigkeit oder Qualität ihres bisherigen Anbieters unzufrieden waren. Bei uns bekommen Sie festes Personal, das Ihre Räume kennt.',
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
              FAQ zur Büroreinigung
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
