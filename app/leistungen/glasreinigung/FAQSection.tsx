'use client'

import { useState } from 'react'
import { ChevronDown, HelpCircle } from 'lucide-react'

const faqs = [
  {
    frage: 'Was kostet professionelle Glasreinigung pro Quadratmeter?',
    antwort: 'Professionelle Glasreinigung kostet typischerweise zwischen 3 und 8 Euro pro Quadratmeter Glasfläche (beide Seiten). Der genaue Preis hängt von mehreren Faktoren ab: Höhe und Zugänglichkeit der Glasflächen, Verschmutzungsgrad, benötigte Technik (Osmose, Industriekletterer, Hubsteiger) und Reinigungsintervall. Bei einer kostenfreien Besichtigung erstellen wir Ihnen ein transparentes Festpreisangebot ohne versteckte Kosten.',
  },
  {
    frage: 'Was ist Osmose-Reinigung und warum ist sie besser als normale Glasreinigung?',
    antwort: 'Bei der Osmose-Reinigung wird Leitungswasser durch spezielle Umkehrosmose-Filter von allen Mineralien befreit. Dieses Reinwasser (TDS-Wert nahe 0) hat eine starke Lösekraft und hinterlässt beim Trocknen keine Kalk- oder Wasserflecken. Das Ergebnis: Absolut streifenfreie Glasflächen, die deutlich länger sauber bleiben als bei herkömmlicher Reinigung mit Chemie. Zudem ist Osmose-Reinigung umweltschonend, da keine Reinigungsmittel verwendet werden.',
  },
  {
    frage: 'Reinigen Sie auch Glasfassaden in großer Höhe?',
    antwort: 'Ja, Höhenarbeiten sind unsere Spezialität. Mit professionellen Teleskopstangen aus Carbon erreichen wir Höhen bis 18 Meter vom Boden aus – ohne Gerüst oder Absperrungen. Für höhere Glasfassaden setzen wir FISAT-zertifizierte Industriekletterer (Seilzugangstechnik) oder Hubarbeitsbühnen ein. Unsere Teams haben alle erforderlichen Sicherheitszertifikate und arbeiten nach DGUV-Vorschriften.',
  },
  {
    frage: 'Wie oft sollte man Glasfassaden reinigen lassen?',
    antwort: 'Die optimale Reinigungsfrequenz hängt von Standort und Umgebung ab. Glasfassaden an stark befahrenen Straßen oder in Industriegebieten empfehlen wir 4-6 mal jährlich. In ruhigeren Lagen reicht oft eine vierteljährliche Reinigung. Schaufenster im Einzelhandel sollten wöchentlich bis 14-tägig gereinigt werden, um stets einladend zu wirken. Wir erstellen gemeinsam mit Ihnen einen individuellen Reinigungsplan.',
  },
  {
    frage: 'Was ist der Unterschied zwischen Glasreinigung und Fensterreinigung?',
    antwort: 'Die Begriffe werden oft synonym verwendet, bezeichnen aber unterschiedliche Bereiche: Fensterreinigung umfasst klassische Fenster mit Rahmen, Griffen, Fensterbänken und Dichtungen. Glasreinigung ist der Oberbegriff und schließt rahmenlose Glasflächen ein – wie Glasfassaden, Strukturglasfronten, Ganzglastüren, Glastrennwände oder Glasdächer. Bei FIMI bekommen Sie beide Leistungen aus einer Hand.',
  },
  {
    frage: 'Arbeiten bei FIMI immer dieselben Reinigungskräfte?',
    antwort: 'Ja, wir setzen auf feste Teams. Ihre Glasreiniger kennen Ihr Gebäude, Ihre Glasflächen und Ihre besonderen Anforderungen. Kein ständiges Einarbeiten neuer Kräfte, keine Qualitätsschwankungen. Nur bei Urlaub oder Krankheit springt ein eingearbeiteter Vertreter aus demselben Team ein. Sie haben einen festen Ansprechpartner für alle Fragen.',
  },
  {
    frage: 'Reinigen Sie auch Wintergärten und Glasdächer?',
    antwort: 'Ja, Wintergärten und Glasdächer gehören zu unseren Spezialgebieten. Wir reinigen alle Glasflächen eines Wintergartens – Seitenwände und Dach – inkl. Rahmen und Profile. Für Glasdächer und Lichtkuppeln setzen wir je nach Zugänglichkeit Teleskopstangen, Hubsteiger oder unsere innovative Drohnen-Reinigungstechnik ein. So erreichen wir auch schwer zugängliche Stellen.',
  },
  {
    frage: 'Wie schnell können Sie mit der Glasreinigung starten?',
    antwort: 'Nach Ihrer Anfrage melden wir uns innerhalb von 2 Stunden. Die kostenfreie Besichtigung findet meist innerhalb von 1-2 Werktagen statt. Nach Angebotsannahme starten wir typischerweise innerhalb von 3-5 Werktagen mit der ersten Glasreinigung. Bei dringendem Bedarf – etwa vor einem wichtigen Event oder einer Neueröffnung – sind auch schnellere Starts möglich. Sprechen Sie uns an.',
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

        <div className="grid lg:grid-cols-[350px_1fr] xl:grid-cols-[400px_1fr] gap-8 lg:gap-16 xl:gap-20">

          {/* Sticky Sidebar */}
          <aside className="lg:sticky lg:top-24 lg:self-start">
            <span className="text-[#109387] font-bold text-xs sm:text-sm uppercase tracking-wide mb-3 sm:mb-4 block">
              Häufige Fragen
            </span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-[#012956] leading-tight mb-4 sm:mb-6">
              FAQ zur Glasreinigung
            </h2>
            <p className="text-base sm:text-lg text-gray-600 font-semibold leading-relaxed mb-6 sm:mb-8">
              Die wichtigsten Fragen unserer Kunden zur professionellen Glasreinigung – ehrlich und direkt beantwortet.
            </p>

            {/* Help Box - versteckt auf mobile */}
            <div className="bg-[#012956] rounded-[6px] p-4 sm:p-6 hidden lg:block">
              <div className="flex items-start gap-3 sm:gap-4">
                <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-[6px] bg-[#109387]/20 flex items-center justify-center flex-shrink-0">
                  <HelpCircle className="w-5 h-5 sm:w-6 sm:h-6 text-[#109387]" />
                </div>
                <div>
                  <h4 className="text-white font-bold mb-2 text-sm sm:text-base">Noch Fragen?</h4>
                  <p className="text-white/70 font-semibold text-xs sm:text-sm mb-3 sm:mb-4">
                    Wir beraten Sie gerne persönlich zur Glasreinigung.
                  </p>
                  <a
                    href="tel:+4987143033460"
                    className="text-[#109387] font-bold hover:underline text-sm sm:text-base"
                  >
                    0871 430 334 60
                  </a>
                </div>
              </div>
            </div>
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
