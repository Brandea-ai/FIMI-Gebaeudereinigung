'use client'

import { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { ChevronDown, ArrowRight } from 'lucide-react'

const faqs = [
  {
    frage: 'Was kostet ein Hausmeisterservice pro Monat?',
    antwort: 'Die Kosten hängen von der Objektgröße und dem Leistungsumfang ab. Als Richtwert: Bei einer typischen Wohnanlage mit 20 Einheiten liegen die Kosten zwischen 400 und 800 Euro monatlich. Der genaue Preis ergibt sich aus der kostenfreien Besichtigung. Wichtig: Die Kosten können über die Betriebskostenabrechnung auf Mieter umgelegt werden.',
  },
  {
    frage: 'Können die Kosten auf Mieter umgelegt werden?',
    antwort: 'Ja, Hausmeisterkosten sind als Betriebskosten gemäß § 2 BetrKV umlagefähig. Voraussetzung ist, dass dies im Mietvertrag vereinbart ist. Wir erstellen Ihnen betriebskostenkonforme Abrechnungen, die Sie direkt für Ihre Nebenkostenabrechnung verwenden können.',
  },
  {
    frage: 'Wie schnell können Sie bei einem Ausfall einspringen?',
    antwort: 'Bei dringendem Bedarf sind wir innerhalb von 2 Stunden vor Ort. Für eine reguläre Übernahme planen wir 3-5 Werktage ein. Bei geplanten Wechseln (z.B. Renteneintritt des bisherigen Hausmeisters) erstellen wir einen detaillierten Übernahmeplan mit Übergabeprotokoll.',
  },
  {
    frage: 'Bekomme ich immer denselben Hausmeister?',
    antwort: 'Ja, das ist unser Prinzip. Für jedes Objekt stellen wir ein festes Team zusammen, das Ihre Räumlichkeiten und Anforderungen kennt. Bei Urlaub oder Krankheit sorgen wir für eingearbeitete Vertretungen aus demselben Bereich. Kein ständiges Einarbeiten, keine Überraschungen.',
  },
  {
    frage: 'Welche Kleinreparaturen führen Sie durch?',
    antwort: 'Wir übernehmen alle Arbeiten, die ohne Fachbetrieb sicher durchgeführt werden können: Leuchtmittel tauschen, Türklinken reparieren, Wasserhähne abdichten, Türschließer einstellen, Heizkörper entlüften, lockere Handläufe befestigen, Schilder austauschen. Für größere Reparaturen koordinieren wir Fachfirmen.',
  },
  {
    frage: 'Ist der Winterdienst im Hausmeisterservice enthalten?',
    antwort: 'Winterdienst kann als Zusatzleistung gebucht werden. Unsere Teams sind ab 4 Uhr morgens im Einsatz, um Gehwege, Parkplätze und Zufahrten zu räumen und zu streuen. Wichtig: Bei Beauftragung übernehmen wir die Verkehrssicherungspflicht und sind entsprechend haftpflichtversichert.',
  },
  {
    frage: 'Wie wird die Arbeit dokumentiert?',
    antwort: 'Alle Tätigkeiten werden digital erfasst. Sie erhalten regelmäßige Berichte über durchgeführte Arbeiten, erkannte Mängel und empfohlene Maßnahmen. Für Eigentümergemeinschaften erstellen wir WEG-konforme Dokumentationen, die Sie direkt in Versammlungsprotokollen verwenden können.',
  },
  {
    frage: 'Für welche Objekte bieten Sie Hausmeisterservice an?',
    antwort: 'Wir betreuen Wohnanlagen jeder Größe, Mehrfamilienhäuser, Gewerbeobjekte, Bürokomplexe, Industriegebäude und öffentliche Einrichtungen. Ob 10 oder 200 Einheiten, einzelnes Objekt oder ganzes Portfolio – wir passen unseren Service an Ihre Bedürfnisse an.',
  },
]

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0)

  const toggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  return (
    <section id="faq" className="py-16 sm:py-20 lg:py-28 bg-white">
      <div className="w-full max-w-[1800px] mx-auto px-4 sm:px-6 md:px-8 lg:px-12 xl:px-20">

        <div className="grid lg:grid-cols-[400px_1fr] xl:grid-cols-[450px_1fr] gap-8 lg:gap-12 xl:gap-16">

          {/* Sticky Sidebar */}
          <aside className="lg:sticky lg:top-24 lg:self-start">
            <span className="text-sm text-gray-600 font-semibold uppercase tracking-wide mb-3 block">
              Häufige Fragen
            </span>
            <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-[#109387] leading-tight mb-4 sm:mb-6">
              Noch Fragen zum Hausmeisterservice?
            </h2>
            <p className="text-base sm:text-lg text-gray-700 font-semibold leading-relaxed mb-6 sm:mb-8">
              Hier finden Sie Antworten auf die häufigsten Fragen.
              Falls Ihre Frage nicht dabei ist, rufen Sie uns einfach an.
            </p>

            {/* CTA Button */}
            <a
              href="#kontakt"
              className="inline-flex items-center justify-center gap-3 bg-[#109387] hover:bg-[#0d7d72] text-white font-bold text-base sm:text-lg px-6 sm:px-8 py-3 sm:py-4 rounded-[6px] transition-all duration-300 group w-full"
            >
              Kostenfreie Beratung
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" aria-hidden="true" />
            </a>

            {/* Telefon */}
            <a
              href="tel:+4987120669360"
              className="mt-6 sm:mt-8 bg-[#f8f9fa] border-2 border-[#012956] hover:bg-[#012956] rounded-[6px] p-4 sm:p-6 block transition-all duration-300 group"
            >
              <p className="text-sm text-gray-600 group-hover:text-white/80 font-semibold mb-2 transition-colors">
                Lieber persönlich sprechen?
              </p>
              <span className="text-lg sm:text-xl font-bold text-[#012956] group-hover:text-white transition-colors">
                0871 20669360
              </span>
            </a>

          </aside>

          {/* FAQ Accordion */}
          <div className="space-y-3 sm:space-y-4" role="list" aria-label="Häufig gestellte Fragen">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className={`bg-[#f8f9fa] rounded-[6px] overflow-hidden transition-shadow ${
                  openIndex === index ? 'shadow-lg' : 'shadow-sm'
                }`}
                role="listitem"
              >
                <button
                  onClick={() => toggle(index)}
                  aria-expanded={openIndex === index}
                  className="w-full flex items-center justify-between p-4 sm:p-5 lg:p-6 text-left hover:bg-gray-100 transition-colors"
                >
                  <h3 className="text-sm sm:text-base lg:text-lg font-bold text-[#012956] pr-2 sm:pr-4">
                    {faq.frage}
                  </h3>
                  <ChevronDown
                    className={`w-5 h-5 sm:w-6 sm:h-6 text-[#109387] flex-shrink-0 transition-transform duration-300 ${
                      openIndex === index ? 'rotate-180' : ''
                    }`}
                    aria-hidden="true"
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
