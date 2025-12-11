'use client'

import { useState } from 'react'
import Image from 'next/image'
import { ChevronDown, ArrowRight } from 'lucide-react'

const faqs = [
  {
    frage: 'Was kostet Winterdienst für Gewerbe pro Saison?',
    antwort: 'Die Kosten hängen von Flächengröße, Räumfrequenz und Vertragslaufzeit ab. Als Richtwert: Für einen mittelgroßen Firmenparkplatz (500-1000 m²) liegt die Saisonpauschale zwischen 1.500 und 3.500 Euro. Bei einer Einsatzabrechnung zahlen Sie nur bei tatsächlichem Schneefall. Nach einer kostenfreien Besichtigung erstellen wir Ihnen ein transparentes Festpreisangebot.',
  },
  {
    frage: 'Wer haftet, wenn jemand auf meinem Grundstück ausrutscht?',
    antwort: 'Ohne Winterdienst-Vertrag haften Sie als Grundstückseigentümer oder Verwalter gemäß § 823 BGB (Verkehrssicherungspflicht). Mit einem FIMI-Vertrag übertragen Sie diese Pflicht vertraglich auf uns. Unsere Betriebshaftpflicht (5 Mio. € Deckung) sichert Schäden ab. Zusätzlich dokumentieren wir jeden Einsatz rechtssicher für den Fall von Streitigkeiten.',
  },
  {
    frage: 'Ab wann morgens muss geräumt sein?',
    antwort: 'Werktags gilt die Räumpflicht ab 7:00 Uhr, an Sonn- und Feiertagen ab 8:00 oder 9:00 Uhr (je nach Kommune). Für Gewerbebetriebe empfehlen wir Räumung vor Arbeitsbeginn Ihrer Mitarbeiter. Unsere Teams starten bei Bedarf bereits um 5:30 Uhr, damit Ihre Flächen pünktlich sicher sind.',
  },
  {
    frage: 'Welche Streumittel verwenden Sie?',
    antwort: 'Wir setzen auf umweltfreundliche Streumittel wie Splitt, Sand oder spezielles Winterstreu-Granulat. Salz verwenden wir nur dort, wo es kommunal erlaubt und notwendig ist. Nach der Saison entfernen wir das Streugut fachgerecht von Ihren Flächen – dieser Service ist bei uns inklusive.',
  },
  {
    frage: 'Räumen Sie auch am Wochenende und an Feiertagen?',
    antwort: 'Selbstverständlich. Schnee kennt keine Wochenenden. Unsere 24/7-Bereitschaft gilt von November bis März durchgehend – auch an Weihnachten und Silvester. Für Objekte mit hohem Publikumsverkehr (Einkaufszentren, Kliniken) bieten wir auch Räumung bis in die späten Abendstunden.',
  },
  {
    frage: 'Was passiert bei Schneefall in der Nacht?',
    antwort: 'Unsere Einsatzleitung überwacht die Wetterlage rund um die Uhr. Bei nächtlichem Schneefall alarmieren wir unsere Teams automatisch, sodass die Räumung vor Ihrem Betriebsbeginn abgeschlossen ist. Sie müssen sich um nichts kümmern – wir handeln proaktiv.',
  },
  {
    frage: 'Können Sie mehrere Standorte gleichzeitig betreuen?',
    antwort: 'Ja, das ist unsere Stärke. Viele unserer Kunden – besonders Hausverwaltungen und Filialisten – betreuen wir an mehreren Standorten in Bayern. Sie haben einen zentralen Ansprechpartner, und wir koordinieren alle Objekte intern. Sammelrechnungen und zentrale Dokumentation sind selbstverständlich.',
  },
  {
    frage: 'Wie kurzfristig kann ich noch Winterdienst für diese Saison buchen?',
    antwort: 'Grundsätzlich empfehlen wir, den Winterdienst im Herbst (September/Oktober) zu beauftragen. Aber auch kurzfristige Anfragen nehmen wir gerne an – je nach Kapazität können wir innerhalb von 3-5 Werktagen starten. Rufen Sie uns einfach an, wir finden eine Lösung.',
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
              Haben Sie noch Fragen?
            </h2>
            <p className="text-base sm:text-lg text-gray-700 font-semibold leading-relaxed mb-6 sm:mb-8">
              Hier finden Sie Antworten auf die häufigsten Fragen zum Winterdienst.
              Falls Ihre Frage nicht dabei ist, kontaktieren Sie uns einfach direkt.
            </p>

            {/* CTA Button */}
            <a
              href="#kontakt"
              className="inline-flex items-center justify-center gap-3 bg-[#109387] hover:bg-[#0d7d72] text-white font-bold text-base sm:text-lg px-6 sm:px-8 py-3 sm:py-4 rounded-[6px] transition-all duration-300 group w-full"
            >
              Kostenfreie Beratung
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </a>

            {/* Kontakt-Info */}
            <a
              href="tel:+4987120669360"
              className="mt-6 sm:mt-8 bg-white border-2 border-[#012956] hover:bg-[#012956] rounded-[6px] p-4 sm:p-6 block transition-all duration-300 group"
            >
              <p className="text-sm text-gray-500 group-hover:text-white/70 font-semibold mb-2 transition-colors">
                Lieber persönlich sprechen?
              </p>
              <span className="text-lg sm:text-xl font-bold text-[#012956] group-hover:text-white transition-colors">
                0871 20669360
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
