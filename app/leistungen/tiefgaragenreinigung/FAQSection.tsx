'use client'

import { useState } from 'react'
import Image from 'next/image'
import { ChevronDown, ArrowRight } from 'lucide-react'

const faqs = [
  {
    frage: 'Was kostet eine professionelle Tiefgaragenreinigung?',
    antwort: 'Die Kosten für professionelle Tiefgaragenreinigung hängen von Größe, Verschmutzungsgrad und gewünschtem Leistungsumfang ab. Eine Grundreinigung startet bei etwa 1,50 Euro pro Quadratmeter, bei starker Ölverschmutzung oder Intensivreinigung mit Spezialbehandlung liegen die Preise zwischen 2,50 und 4,50 Euro pro Quadratmeter. Nach einer kostenlosen Besichtigung erhalten Sie ein transparentes Festpreisangebot – ohne versteckte Kosten.',
  },
  {
    frage: 'Wie oft sollte eine Tiefgarage gereinigt werden?',
    antwort: 'Wir empfehlen mindestens eine Grundreinigung pro Jahr, idealerweise nach dem Winter, um Streusalzreste zu entfernen. Bei stark frequentierten Tiefgaragen mit viel Fahrzeugverkehr ist eine halbjährliche Reinigung sinnvoll. Zusätzlich kann eine quartalsweise Unterhaltsreinigung die Sauberkeit dauerhaft auf hohem Niveau halten. Für WEGs gilt: Eine dokumentierte jährliche Grundreinigung ist oft Bestandteil der Verkehrssicherungspflicht.',
  },
  {
    frage: 'Können Ölflecken komplett aus dem Betonboden entfernt werden?',
    antwort: 'Frische Ölflecken können wir in den meisten Fällen zu 95-100% entfernen. Bei älteren, tief in den Beton eingezogenen Flecken erreichen wir eine deutliche Verbesserung um 70-80%, aber nicht immer vollständige Entfernung. Wichtig: Je schneller Sie uns rufen, desto besser das Ergebnis. Wir setzen Heißwasser-Hochdruck bis 155°C und spezielle Ölbinder sowie Entölungschemie ein.',
  },
  {
    frage: 'Wie lange dauert die Reinigung einer Tiefgarage?',
    antwort: 'Eine durchschnittliche WEG-Tiefgarage mit 30-50 Stellplätzen reinigen wir bei einer Grundreinigung in einem Tag. Größere Tiefgaragen oder stark verschmutzte Bereiche können 1-2 Tage in Anspruch nehmen. Die genaue Dauer hängt von der Fläche, dem Verschmutzungsgrad und dem gewünschten Leistungsumfang ab. Nach der Besichtigung erhalten Sie eine realistische Zeitschätzung.',
  },
  {
    frage: 'Müssen alle Fahrzeuge während der Reinigung rausgefahren werden?',
    antwort: 'Ja, für eine gründliche Grundreinigung müssen alle Stellplätze frei sein. Wir können die Reinigung aber auch abschnittsweise durchführen, sodass immer nur ein Teil der Fahrzeuge umparken muss. Bei Unterhaltsreinigungen können wir oft um geparkte Fahrzeuge herum arbeiten. Wir helfen Ihnen gerne bei der Kommunikation mit den Eigentümern und erstellen Aushänge mit Terminankündigung.',
  },
  {
    frage: 'Liefern Sie eine Dokumentation für die WEG-Unterlagen?',
    antwort: 'Ja, nach jeder Reinigung erhalten Sie eine vollständige Dokumentation: Vorher-Nachher-Fotos, Reinigungsbericht mit Datum und durchgeführten Arbeiten sowie auf Wunsch Leistungsnachweise für die WEG-Versammlung. Diese Unterlagen eignen sich auch für die Abrechnung nach der Betriebskostenverordnung (§2 BetrKV).',
  },
  {
    frage: 'Arbeiten Sie auch nachts oder am Wochenende?',
    antwort: 'Ja, gerade bei gewerblich genutzten Tiefgaragen oder solchen mit hoher Auslastung bieten wir Nacht- und Wochenendtermine an. So ist die Störung für Anwohner und Nutzer minimal. Für WEGs empfehlen wir oft Samstage, da dann die meisten Eigentümer ihre Fahrzeuge kurzzeitig umparken können.',
  },
  {
    frage: 'Was ist mit Wänden, Decken und Beleuchtung?',
    antwort: 'Eine professionelle Tiefgaragenreinigung umfasst mehr als nur den Boden. Wir reinigen auf Wunsch auch Wände und Stützen (Staub, Schmutzfilme, Graffiti), Decken und Rohrleitungen (Staub, Spinnweben), Beleuchtungskörper (für bessere Sicht und Sicherheit) sowie Bodenabläufe und Rinnen. Diese Bereiche werden oft vernachlässigt, tragen aber stark zum Gesamteindruck bei.',
  },
]

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0)

  const toggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  return (
    <section id="faq" className="py-12 sm:py-16 lg:py-28 bg-white">
      <div className="w-full max-w-[1800px] mx-auto px-4 sm:px-6 md:px-8 lg:px-12 xl:px-20">

        <div className="grid lg:grid-cols-[400px_1fr] xl:grid-cols-[450px_1fr] gap-8 lg:gap-12 xl:gap-16">

          {/* Sticky Sidebar */}
          <aside className="lg:sticky lg:top-24 lg:self-start">
            <span className="text-sm text-gray-500 font-semibold uppercase tracking-wide mb-3 block">
              Häufige Fragen
            </span>
            <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-[#109387] leading-tight mb-4 sm:mb-6">
              Fragen zur Tiefgaragenreinigung?
            </h2>
            <p className="text-base sm:text-lg text-gray-700 font-semibold leading-relaxed mb-6 sm:mb-8">
              Hier finden Sie Antworten auf die häufigsten Fragen von WEGs, Hausverwaltungen
              und Facility Managern. Falls Ihre Frage nicht dabei ist, rufen Sie uns einfach an.
            </p>

            {/* CTA Button */}
            <a
              href="#kontakt"
              className="inline-flex items-center justify-center gap-3 bg-[#109387] hover:bg-[#0d7d72] text-white font-bold text-base sm:text-lg px-6 sm:px-8 py-3 sm:py-4 rounded-[6px] transition-all duration-300 group w-full"
            >
              Kostenfreie Besichtigung
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </a>

            {/* Telefon */}
            <a
              href="tel:+4987120669360"
              className="mt-6 sm:mt-8 bg-[#f8f9fa] border-2 border-[#012956] hover:bg-[#012956] rounded-[6px] p-4 sm:p-6 block transition-all duration-300 group"
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
                className={`bg-[#f8f9fa] rounded-[6px] overflow-hidden transition-shadow ${
                  openIndex === index ? 'shadow-lg' : 'shadow-sm'
                }`}
              >
                <button
                  onClick={() => toggle(index)}
                  className="w-full flex items-center justify-between p-4 sm:p-5 lg:p-6 text-left hover:bg-gray-100 transition-colors"
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
