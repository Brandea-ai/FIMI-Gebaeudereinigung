'use client'

import { useState } from 'react'
import Image from 'next/image'
import { ChevronDown, ArrowRight } from 'lucide-react'

const faqs = [
  {
    frage: 'Was kostet Industriereinigung pro Quadratmeter?',
    antwort: 'Die Kosten für Industriereinigung variieren je nach Verschmutzungsgrad, Reinigungsverfahren und Zugänglichkeit. Für regelmäßige Hallenreinigung liegen die Preise typischerweise zwischen 0,50 und 2,00 Euro pro Quadratmeter. Für Intensivreinigungen oder Spezialverfahren wie Trockeneisreinigung kalkulieren wir individuell. Nach einer kostenlosen Besichtigung erhalten Sie von uns ein transparentes Festpreisangebot ohne versteckte Kosten.',
  },
  {
    frage: 'Können Sie auch im laufenden Betrieb reinigen?',
    antwort: 'Ja, das ist einer unserer wichtigsten Vorteile. Wir sind darauf spezialisiert, Industriereinigung ohne Produktionsunterbrechung durchzuführen. Unsere Teams arbeiten in Schichtpausen, am Wochenende oder parallel zur Produktion in abgegrenzten Bereichen. Wir stimmen den Einsatz eng mit Ihrem Produktionsplan ab, damit Ihre Fertigung ungestört weiterlaufen kann.',
  },
  {
    frage: 'Wie kurzfristig können Sie kommen?',
    antwort: 'Bei Notfällen – zum Beispiel Ölaustritten oder kurzfristigen Audits – garantieren wir eine Reaktionszeit von 2 Stunden im Raum Landshut und 4 Stunden in ganz Bayern. Für geplante Einsätze benötigen wir normalerweise 2-5 Werktage Vorlauf, je nach Umfang. Rufen Sie uns einfach an, und wir finden eine Lösung.',
  },
  {
    frage: 'Nach welchen Standards arbeiten Sie?',
    antwort: 'Wir arbeiten nach den Qualitätsstandards von ISO 9001 und ISO 14001 – ohne selbst zertifiziert zu sein. Das bedeutet: dokumentierte Prozesse, regelmäßige Qualitätskontrollen und umweltbewusstes Arbeiten. Unser Personal ist geschult in Arbeitssicherheit, Gefahrstoffen und branchenspezifischen Anforderungen wie HACCP für Lebensmittelbetriebe. Auf Wunsch dokumentieren wir alle Reinigungsarbeiten mit Protokollen und Fotos für Ihr QM-System.',
  },
  {
    frage: 'Was ist in der Industriereinigung enthalten?',
    antwort: 'Unsere Industriereinigung umfasst je nach Bedarf: Hallenböden (kehren, schrubben, entölen), Maschinen und Anlagen, Wände und Decken, Hochregale und Einbauten, Sozialräume und Sanitäranlagen, sowie Entsorgung von Produktionsabfällen. Bei der Besichtigung legen wir gemeinsam fest, welche Leistungen Sie benötigen – und nur die berechnen wir auch.',
  },
  {
    frage: 'Wie lange dauert eine Hallenreinigung?',
    antwort: 'Das hängt von Größe und Verschmutzungsgrad ab. Als Richtwert: Eine normale Unterhaltsreinigung einer 2.000 m² Halle dauert etwa 4-6 Stunden. Eine Intensivreinigung mit starker Verschmutzung kann 1-2 Tage benötigen. Mit unseren Aufsitz-Scheuersaugmaschinen reinigen wir bis zu 5.000 m² pro Stunde – deutlich schneller als herkömmliche Methoden.',
  },
  {
    frage: 'Bringen Sie eigene Geräte und Reinigungsmittel mit?',
    antwort: 'Ja, wir haben einen eigenen Fuhrpark mit professioneller Ausrüstung: Aufsitz-Scheuersaugmaschinen, Industriesauger, Hochdruckreiniger, Dampfreiniger und Trockeneisgeräte. Auch alle Reinigungsmittel – von Standardreinigern bis zu Spezialentfettern – bringen wir mit. Sie brauchen nichts bereitzustellen.',
  },
  {
    frage: 'Können Sie Maschinen nach Herstellervorgaben reinigen?',
    antwort: 'Ja, wir reinigen Produktionsmaschinen fachgerecht nach Herstellervorgaben. Vor dem Einsatz analysieren wir Ihre Maschinen und stimmen die Reinigungsmethode ab. Alle Arbeiten dokumentieren wir für Ihr Wartungsprotokoll. Bei empfindlichen Maschinen setzen wir schonende Verfahren wie Trockeneisreinigung ein.',
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
              Hier finden Sie Antworten auf die häufigsten Fragen zur Industriereinigung.
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
            <div className="mt-6 sm:mt-8 bg-white rounded-[6px] p-4 sm:p-6">
              <p className="text-sm text-gray-500 font-semibold mb-2">
                Lieber persönlich sprechen?
              </p>
              <a
                href="tel:+4987143033460"
                className="text-lg sm:text-xl font-bold text-[#012956] hover:text-[#109387] transition-colors"
              >
                0871 430 334 60
              </a>
            </div>

            {/* Bild - nur Desktop */}
            <div className="relative mt-6 sm:mt-8 h-48 lg:h-64 rounded-[6px] overflow-hidden hidden lg:block">
              <Image
                src="https://images.unsplash.com/photo-1556741533-6e6a62bd8b49?q=80&w=800&auto=format&fit=crop"
                alt="Kundenservice FIMI Gebäudereinigung"
                fill
                className="object-cover"
              />
            </div>
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
