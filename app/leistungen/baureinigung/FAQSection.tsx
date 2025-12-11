'use client'

import { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { ChevronDown, ArrowRight } from 'lucide-react'

const faqs = [
  {
    frage: 'Was kostet Baureinigung pro Quadratmeter?',
    antwort: 'Die Kosten für professionelle Baureinigung liegen typischerweise zwischen 3 und 9 Euro pro Quadratmeter. Der genaue Preis hängt von mehreren Faktoren ab: Umfang der Reinigung (Grob-, Fein- oder Schlussreinigung), Verschmutzungsgrad, Materialien der Oberflächen und Objektgröße. Bei kleineren Flächen unter 100 qm können Zuschläge anfallen. Nach einer kostenfreien Besichtigung erhalten Sie ein verbindliches Festpreisangebot ohne versteckte Kosten.',
  },
  {
    frage: 'Was ist der Unterschied zwischen Baugrobreinigung und Baufeinreinigung?',
    antwort: 'Die Baugrobreinigung findet noch während der aktiven Bauphase statt und umfasst das Entfernen von grobem Bauschutt, Verpackungsmaterial und Mörtelresten. Sie dient dazu, zwischen den Gewerken aufzuräumen. Die Baufeinreinigung (auch Bauendreinigung oder Bauschlussreinigung genannt) erfolgt nach Abschluss der Bauarbeiten und macht das Gebäude bezugsfertig – inklusive Fensterreinigung, Entfernung von Farbspritzern und gründlicher Bodenreinigung.',
  },
  {
    frage: 'Wie kurzfristig können Sie für eine Baureinigung kommen?',
    antwort: 'Bei dringendem Bedarf bieten wir einen Notfall-Service innerhalb von 24 Stunden an. Für reguläre Projekte benötigen wir typischerweise 3-5 Werktage Vorlauf, um die Besichtigung, Angebotserstellung und Teamplanung durchzuführen. Sprechen Sie uns an – wir finden fast immer eine Lösung, auch bei kurzfristigen Terminen.',
  },
  {
    frage: 'Wer ist für die Baureinigung verantwortlich – Bauherr oder Bauunternehmer?',
    antwort: 'Das hängt von der vertraglichen Vereinbarung ab. In der Regel ist die Bauendreinigung im Bauvertrag geregelt und wird vom Generalunternehmer oder den einzelnen Gewerken geschuldet. Bauherren sollten prüfen, ob eine professionelle Baureinigung im Vertrag enthalten ist oder ob sie diese selbst beauftragen müssen. Wir arbeiten sowohl direkt mit Bauherren als auch mit Generalunternehmern zusammen.',
  },
  {
    frage: 'Welche Reinigungsmittel verwenden Sie bei der Baureinigung?',
    antwort: 'Wir setzen ausschließlich professionelle Reinigungsmittel ein, die auf die jeweiligen Oberflächen abgestimmt sind. Für Naturstein andere Mittel als für Feinsteinzeug, für Parkett andere als für Laminat. Alle unsere Reiniger sind hochwirksam gegen Bauverschmutzungen wie Zement, Mörtel oder Farbe – beschädigen aber nicht die Oberflächen. Umweltschonende, biologisch abbaubare Produkte setzen wir ein, wo immer es technisch möglich ist.',
  },
  {
    frage: 'Können Sie auch nur einzelne Bereiche oder Räume reinigen?',
    antwort: 'Ja, selbstverständlich. Nicht immer ist eine Komplettreinigung erforderlich. Wir reinigen auch einzelne Etagen, Wohneinheiten oder spezifische Bereiche wie nur die Fenster oder nur die Sanitäranlagen. Bei der Besichtigung definieren wir gemeinsam den exakten Leistungsumfang.',
  },
  {
    frage: 'Wie wird sichergestellt, dass keine Schäden an neuen Oberflächen entstehen?',
    antwort: 'Unsere Mitarbeiter sind speziell für die Baureinigung geschult und wissen, welche Techniken und Mittel für welche Materialien geeignet sind. Vor Beginn prüfen wir alle Oberflächen und legen fest, wie diese zu behandeln sind. Sollten wir Vorschäden feststellen, dokumentieren wir diese vorab. Und für den Fall der Fälle sind wir selbstverständlich umfassend versichert.',
  },
  {
    frage: 'Erstellen Sie eine Dokumentation oder ein Abnahmeprotokoll?',
    antwort: 'Ja, auf Wunsch erstellen wir eine Fotodokumentation des Zustands vor und nach der Reinigung sowie ein Abnahmeprotokoll. Dies kann bei der Übergabe an den Bauherrn oder die Mieter hilfreich sein und dient als Nachweis der erbrachten Leistung.',
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

          {/* Sticky Sidebar */}
          <aside className="lg:sticky lg:top-24 lg:self-start">
            <span className="text-sm text-gray-500 font-semibold uppercase tracking-wide mb-3 block">
              Häufige Fragen
            </span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-[#109387] leading-tight mb-4 sm:mb-6">
              Fragen zur Baureinigung?
            </h2>
            <p className="text-base sm:text-lg text-gray-700 font-semibold leading-relaxed mb-6 sm:mb-8">
              Hier finden Sie Antworten auf die häufigsten Fragen zu Baureinigung, Kosten und Ablauf.
              Falls Ihre Frage nicht dabei ist, rufen Sie uns einfach an.
            </p>

            {/* CTA Button */}
            <Link
              href="#kontakt"
              className="inline-flex items-center justify-center gap-3 bg-[#109387] hover:bg-[#0d7d72] text-white font-bold text-base sm:text-lg px-6 sm:px-8 py-3 sm:py-4 rounded-[6px] transition-all duration-300 group w-full"
            >
              Kostenfreie Besichtigung
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>

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
