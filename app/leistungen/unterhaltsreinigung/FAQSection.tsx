'use client'

import { useState } from 'react'
import { ChevronDown, ArrowRight } from 'lucide-react'

const faqs = [
  {
    frage: 'Was kostet Unterhaltsreinigung pro Quadratmeter?',
    antwort: 'Die Kosten für Unterhaltsreinigung liegen typischerweise zwischen 0,80 € und 2,50 € pro Quadratmeter. Der genaue Preis hängt von mehreren Faktoren ab: Größe der Fläche, Reinigungsintervall (täglich, wöchentlich), Art der Räume (Büro, Sanitär, Produktion) und spezielle Anforderungen. Nach einer kostenlosen Besichtigung erhalten Sie von uns ein verbindliches Festpreisangebot.',
  },
  {
    frage: 'Wie oft sollte eine Unterhaltsreinigung stattfinden?',
    antwort: 'Das hängt von der Nutzung Ihrer Räume ab. Stark frequentierte Bereiche wie Eingänge, Sanitäranlagen und Teeküchen empfehlen wir täglich zu reinigen. Büroflächen und Besprechungsräume können oft mit 2-3 Reinigungen pro Woche auskommen. Selten genutzte Räume wie Archive reichen wöchentlich oder 14-täglich. Wir erstellen gemeinsam mit Ihnen einen Reinigungsplan, der zu Ihrem Bedarf und Budget passt.',
  },
  {
    frage: 'Was ist der Unterschied zwischen Unterhaltsreinigung und Grundreinigung?',
    antwort: 'Unterhaltsreinigung ist die regelmäßige, wiederkehrende Reinigung zur Aufrechterhaltung der Sauberkeit – das Tagesgeschäft sozusagen. Grundreinigung ist eine intensive Einmalreinigung, bei der auch schwer zugängliche Stellen, Fensterrahmen, Heizkörper und versteckte Ecken gründlich gereinigt werden. Viele unserer Kunden kombinieren beides: regelmäßige Unterhaltsreinigung plus 1-2 Grundreinigungen pro Jahr.',
  },
  {
    frage: 'Arbeiten immer dieselben Reinigungskräfte in meinem Gebäude?',
    antwort: 'Ja, bei FIMI setzen wir auf feste Teams. Ihre Reinigungskräfte kennen Ihre Räume, wissen wo der Schlüssel liegt, welche Bereiche besondere Aufmerksamkeit brauchen und was Ihre Wünsche sind. Personalwechsel gibt es nur bei Urlaub oder Krankheit – dann übernimmt ein eingearbeiteter Vertreter aus demselben Team.',
  },
  {
    frage: 'Zu welchen Zeiten kann die Reinigung stattfinden?',
    antwort: 'Wir passen uns Ihrem Betrieb an, nicht umgekehrt. Die meisten unserer Kunden bevorzugen Reinigung außerhalb der Arbeitszeiten: früh morgens ab 5:00 Uhr, abends nach Geschäftsschluss oder am Wochenende. Aber auch Reinigung während der Bürozeiten ist möglich – diskret und ohne Ihren Betrieb zu stören.',
  },
  {
    frage: 'Welche Reinigungsmittel werden verwendet?',
    antwort: 'Wir verwenden professionelle, für den gewerblichen Einsatz zugelassene Reinigungsmittel. Auf Wunsch arbeiten wir auch mit umweltschonenden, biologisch abbaubaren Produkten oder allergikerfreundlichen Mitteln. Bei besonderen Anforderungen – etwa in Arztpraxen oder der Lebensmittelindustrie – setzen wir die entsprechend zugelassenen Spezialmittel ein.',
  },
  {
    frage: 'Wie schnell können Sie mit der Unterhaltsreinigung beginnen?',
    antwort: 'Nach der kostenlosen Besichtigung erhalten Sie innerhalb von 24 Stunden ein Angebot. Bei Zusage können wir in der Regel innerhalb von 5-7 Werktagen starten. Bei dringenden Anfragen – etwa wenn Ihr bisheriger Dienstleister ausgefallen ist – sind auch kürzere Vorlaufzeiten möglich. Sprechen Sie uns an.',
  },
  {
    frage: 'Was passiert, wenn ich mit der Reinigung nicht zufrieden bin?',
    antwort: 'Ihre Zufriedenheit ist unser Maßstab. Sollte einmal etwas nicht passen, melden Sie sich bei Ihrem festen Ansprechpartner. Wir bessern umgehend nach – ohne Diskussion und ohne Zusatzkosten. Das ist unser Qualitätsversprechen. Regelmäßige Qualitätskontrollen durch unsere Objektleiter stellen sicher, dass es gar nicht erst so weit kommt.',
  },
]

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0)

  return (
    <section className="py-20 lg:py-28 bg-[#f8f9fa]" id="faq">
      <div className="w-full max-w-[1800px] mx-auto px-6 lg:px-12 xl:px-20">

        {/* Two Column Layout */}
        <div className="grid lg:grid-cols-[400px_1fr] xl:grid-cols-[450px_1fr] gap-12 lg:gap-20">

          {/* Left: Sticky Sidebar */}
          <div className="lg:sticky lg:top-32 lg:self-start">
            <p className="text-sm text-[#109387] font-bold uppercase tracking-wide mb-3">
              Häufige Fragen
            </p>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#012956] leading-[1.1] mb-6">
              Fragen zur Unterhaltsreinigung
            </h2>
            <p className="text-lg text-gray-700 font-semibold leading-relaxed mb-10">
              Die wichtigsten Fragen rund um regelmäßige Gebäudereinigung –
              verständlich beantwortet.
            </p>

            {/* CTA */}
            <a
              href="#contact-form"
              className="inline-flex items-center justify-center gap-3 bg-[#109387] hover:bg-[#0d7d72] text-white font-bold text-lg px-8 py-4 rounded-[6px] transition-all duration-300 group w-full"
            >
              Kostenfreie Beratung
              <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
            </a>

            {/* Kontakt */}
            <div className="mt-8 bg-white rounded-[6px] p-6 shadow-sm">
              <p className="text-sm text-gray-500 font-semibold mb-2">
                Ihre Frage ist nicht dabei?
              </p>
              <a
                href="tel:+4987143033460"
                className="text-xl font-bold text-[#012956] hover:text-[#109387] transition-colors"
              >
                0871 430 334 60
              </a>
              <p className="text-sm text-gray-500 font-semibold mt-1">
                Mo-Fr 7:00 - 18:00 Uhr
              </p>
            </div>
          </div>

          {/* Right: FAQ Accordion */}
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className="bg-white rounded-[6px] overflow-hidden shadow-sm"
              >
                <button
                  onClick={() => setOpenIndex(openIndex === index ? null : index)}
                  className="w-full px-6 py-5 flex items-center justify-between gap-4 text-left hover:bg-gray-50 transition-colors"
                  aria-expanded={openIndex === index}
                >
                  <span className="text-lg font-bold text-[#012956]">
                    {faq.frage}
                  </span>
                  <ChevronDown
                    size={24}
                    className={`flex-shrink-0 text-[#109387] transition-transform duration-300 ${
                      openIndex === index ? 'rotate-180' : ''
                    }`}
                  />
                </button>
                <div
                  className={`overflow-hidden transition-all duration-300 ${
                    openIndex === index ? 'max-h-96' : 'max-h-0'
                  }`}
                >
                  <p className="px-6 pb-6 text-gray-700 font-semibold leading-relaxed">
                    {faq.antwort}
                  </p>
                </div>
              </div>
            ))}
          </div>

        </div>

      </div>
    </section>
  )
}
