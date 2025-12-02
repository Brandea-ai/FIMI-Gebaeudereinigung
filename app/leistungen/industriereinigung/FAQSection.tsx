'use client'

import { useState } from 'react'
import { ChevronDown, HelpCircle } from 'lucide-react'
import FadeIn from '@/components/FadeIn'

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
    frage: 'Welche Zertifikate und Standards haben Sie?',
    antwort: 'Wir arbeiten nach den Standards ISO 9001 (Qualitätsmanagement) und ISO 14001 (Umweltmanagement). Unser Personal ist regelmäßig geschult in Arbeitssicherheit, Gefahrstoffen und branchenspezifischen Anforderungen wie HACCP für Lebensmittelbetriebe. Auf Wunsch dokumentieren wir alle Reinigungsarbeiten mit Protokollen und Fotos für Ihr QM-System.',
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

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  return (
    <section id="faq" className="py-20 lg:py-28 bg-white" aria-labelledby="faq-heading">
      <div className="w-full max-w-[1800px] mx-auto px-6 lg:px-12 xl:px-20">

        <div className="grid lg:grid-cols-[400px_1fr] xl:grid-cols-[450px_1fr] gap-12 lg:gap-20">

          {/* Sticky Sidebar */}
          <FadeIn direction="left" className="lg:sticky lg:top-32 lg:self-start">
            <aside>
              <p className="text-sm text-[#109387] font-semibold uppercase tracking-wide mb-3">
                Häufige Fragen
              </p>
              <h2
                id="faq-heading"
                className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#012956] leading-[1.1] mb-6"
              >
                Alles zur Industriereinigung
              </h2>

              <p className="text-lg text-gray-700 font-semibold leading-relaxed mb-8">
                Die wichtigsten Fragen zu Kosten, Ablauf und Leistungen
                unserer Industriereinigung. Ihre Frage nicht dabei?
              </p>

              {/* Contact Hint */}
              <div className="bg-[#f8f9fa] rounded-[6px] p-6">
                <div className="flex items-center gap-3 mb-4">
                  <HelpCircle size={24} className="text-[#109387]" />
                  <span className="text-[#012956] font-bold">Weitere Fragen?</span>
                </div>
                <p className="text-gray-700 font-semibold text-sm mb-4">
                  Rufen Sie uns an oder schreiben Sie uns. Wir beraten Sie gerne persönlich.
                </p>
                <a
                  href="tel:+4987143033460"
                  className="inline-flex items-center gap-2 text-[#109387] font-bold hover:text-[#012956] transition-colors"
                >
                  0871 430 334 60
                </a>
              </div>
            </aside>
          </FadeIn>

          {/* FAQ Accordion */}
          <div className="space-y-4" role="list" aria-label="Häufig gestellte Fragen">
            {faqs.map((faq, index) => (
              <FadeIn key={index} delay={index * 0.05}>
                <div
                  className="bg-[#f8f9fa] rounded-[6px] overflow-hidden"
                  role="listitem"
                >
                  <button
                    onClick={() => toggleFAQ(index)}
                    className="w-full flex items-center justify-between p-6 text-left group"
                    aria-expanded={openIndex === index}
                  >
                    <h3 className="text-lg font-bold text-[#012956] pr-4 group-hover:text-[#109387] transition-colors">
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
                      <p className="text-gray-700 font-semibold leading-relaxed">
                        {faq.antwort}
                      </p>
                    </div>
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>

        </div>

      </div>
    </section>
  )
}
