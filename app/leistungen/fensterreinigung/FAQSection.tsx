'use client'

import { useState } from 'react'
import Image from 'next/image'
import { ChevronDown, ArrowRight } from 'lucide-react'

const faqs = [
  {
    frage: 'Was kostet Fensterreinigung pro Quadratmeter?',
    antwort: 'Professionelle Fensterreinigung kostet typischerweise zwischen 2 und 5 Euro pro Quadratmeter Glasfläche (beide Seiten). Der genaue Preis hängt von mehreren Faktoren ab: Zugänglichkeit der Fenster, Verschmutzungsgrad, benötigte Technik (Teleskopstange, Hubsteiger) und Reinigungsintervall. Bei einer kostenfreien Besichtigung erstellen wir Ihnen ein transparentes Festpreisangebot ohne versteckte Kosten.',
  },
  {
    frage: 'Wie oft sollte man Fenster professionell reinigen lassen?',
    antwort: 'Die optimale Reinigungsfrequenz hängt von der Nutzung und Lage ab. Schaufenster im Einzelhandel empfehlen wir wöchentlich bis 14-tägig. Bürofenster sind meist mit monatlicher oder vierteljährlicher Reinigung gut bedient. Fenster an stark befahrenen Straßen verschmutzen schneller. Wir erstellen gemeinsam einen Plan, der zu Ihrem Bedarf und Budget passt.',
  },
  {
    frage: 'Reinigen Sie auch schwer erreichbare Fenster?',
    antwort: 'Ja, definitiv. Mit professionellen Teleskopstangen erreichen wir Höhen bis 18 Meter vom Boden aus – ohne Gerüst oder Arbeitsbühne. Für höhere Glasflächen oder Glasfassaden setzen wir Hubsteiger ein. Unsere Teams sind für Arbeiten in der Höhe geschult und verfügen über alle notwendigen Sicherheitszertifikate.',
  },
  {
    frage: 'Bringen Sie eigenes Equipment und Reinigungsmittel mit?',
    antwort: 'Ja, unsere Teams bringen alles mit, was für die professionelle Fensterreinigung benötigt wird: Einwascher, Abzieher, Teleskopstangen, Leitern, Reinigungsmittel. Sie müssen nichts vorbereiten. Wir arbeiten mit umweltschonenden, biologisch abbaubaren Reinigungsmitteln, die trotzdem hocheffektiv sind.',
  },
  {
    frage: 'Arbeiten immer dieselben Reinigungskräfte bei mir?',
    antwort: 'Ja, bei FIMI setzen wir auf feste Teams. Ihre Fensterreiniger kennen Ihr Gebäude, Ihre Fenstertypen und Ihre besonderen Anforderungen. Kein ständiges Einarbeiten, keine Überraschungen. Nur bei Urlaub oder Krankheit springt ein eingearbeiteter Vertreter aus demselben Team ein.',
  },
  {
    frage: 'Wie schnell können Sie mit der Fensterreinigung starten?',
    antwort: 'Nach Ihrer Anfrage melden wir uns innerhalb von 2 Stunden. Die kostenfreie Besichtigung findet meist innerhalb von 1-2 Werktagen statt. Nach Angebotsannahme starten wir typischerweise innerhalb von 3-5 Werktagen. Bei dringendem Bedarf – etwa vor einem wichtigen Event – sind auch schnellere Starts möglich.',
  },
  {
    frage: 'Was ist der Unterschied zwischen Fensterreinigung und Glasreinigung?',
    antwort: 'Die Begriffe werden oft synonym verwendet, aber es gibt Unterschiede: Fensterreinigung umfasst klassische Fenster mit Rahmen, Griffen und Fensterbänken. Glasreinigung ist der Oberbegriff und schließt auch rahmenlose Glasflächen ein – wie Glasfassaden, Glastüren, Trennwände oder Schaufenster. Bei FIMI bekommen Sie beides aus einer Hand.',
  },
  {
    frage: 'Reinigen Sie auch Jalousien, Rollos und Wintergärten?',
    antwort: 'Ja, das sind beliebte Zusatzleistungen. Jalousien und Rollos sammeln viel Staub und sollten regelmäßig gereinigt werden. Wintergärten reinigen wir komplett – Glasflächen, Rahmen und bei Bedarf auch Glasdächer. Sprechen Sie uns einfach bei der Besichtigung darauf an, wir erstellen ein Kombi-Angebot.',
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

          {/* Sticky Sidebar - wie Startseite */}
          <aside className="lg:sticky lg:top-24 lg:self-start">
            <span className="text-sm text-gray-500 font-semibold uppercase tracking-wide mb-3 block">
              Häufige Fragen
            </span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-[#109387] leading-tight mb-4 sm:mb-6">
              Haben Sie noch Fragen?
            </h2>
            <p className="text-base sm:text-lg text-gray-700 font-semibold leading-relaxed mb-6 sm:mb-8">
              Hier finden Sie Antworten auf die häufigsten Fragen zur Fensterreinigung.
              Falls Ihre Frage nicht dabei ist, kontaktieren Sie uns einfach direkt.
            </p>

            {/* CTA Button */}
            <a
              href="#kontakt"
              className="inline-flex items-center justify-center gap-3 bg-[#109387] hover:bg-[#0d7d72] text-white font-bold text-base sm:text-lg px-6 sm:px-8 py-3 sm:py-4 rounded-[6px] transition-all duration-300 group w-full"
            >
              Kostenfreie Besichtigung
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
                0871 2066936-0
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
