'use client'

import { useState } from 'react'
import Image from 'next/image'
import { ChevronDown, ArrowRight } from 'lucide-react'

const faqs = [
  {
    frage: 'Was kostet professionelle Maschinenreinigung?',
    antwort: 'Die Kosten für Maschinenreinigung variieren je nach Maschinentyp, Verschmutzungsgrad und gewähltem Reinigungsverfahren. Für eine einzelne CNC-Maschine liegen die Kosten typischerweise zwischen 300 und 800 Euro. Für die Reinigung von 2 Maschinen inkl. KSS-Tank-Reinigung mit Heißdampf zahlen Sie etwa 600-700 Euro. Nach einer kostenlosen Besichtigung erhalten Sie ein transparentes Festpreisangebot – ohne versteckte Kosten.',
  },
  {
    frage: 'Können Sie Maschinen im laufenden Betrieb reinigen?',
    antwort: 'Ja, wir sind darauf spezialisiert, Maschinenreinigung ohne Produktionsunterbrechung durchzuführen. Unsere Teams arbeiten in Schichtpausen, nachts oder am Wochenende. Bei Maschinen, die während der Reinigung stillstehen müssen, stimmen wir den optimalen Zeitpunkt eng mit Ihrem Produktionsplan ab. So minimieren wir Ausfallzeiten auf das absolut Notwendige.',
  },
  {
    frage: 'Welche Reinigungsverfahren nutzen Sie?',
    antwort: 'Je nach Maschinentyp und Verschmutzung setzen wir unterschiedliche Verfahren ein: Trockeneisreinigung für empfindliche Elektronik, Spritzgusswerkzeuge und Oberflächen ohne Feuchtigkeit. Heißdampfreinigung bei 90-150°C für KSS-Tanks und hartnäckige Öl-/Fettablagerungen. Hochdruckreinigung bis 2.500 Bar für robuste Komponenten. Manuelle Reinigung mit Spezialwerkzeugen für Präzisionsarbeiten an Steuerungen und Messsystemen.',
  },
  {
    frage: 'Wie kurzfristig können Sie zur Maschinenreinigung kommen?',
    antwort: 'Bei dringenden Anfragen – zum Beispiel vor einem Audit oder nach einem Maschinenausfall – garantieren wir eine Reaktionszeit von 2 Stunden im Raum Landshut und 4 Stunden in ganz Bayern. Für reguläre Einsätze und planbare Reinigungsintervalle benötigen wir normalerweise 2-5 Werktage Vorlauf, je nach Umfang.',
  },
  {
    frage: 'Reinigen Sie nach Herstellervorgaben?',
    antwort: 'Ja, wir reinigen Produktionsmaschinen fachgerecht nach den Vorgaben der jeweiligen Hersteller. Vor dem Einsatz analysieren wir Ihre Maschinen und stimmen die Reinigungsmethode sowie die verwendeten Mittel ab. Alle Arbeiten dokumentieren wir für Ihr Wartungsprotokoll. Bei Bedarf arbeiten wir auch eng mit Ihrem Maschinenhersteller oder Wartungspartner zusammen.',
  },
  {
    frage: 'Wie lange dauert die Reinigung einer Maschine?',
    antwort: 'Die Dauer hängt von Maschinentyp und Verschmutzungsgrad ab. Eine normale CNC-Maschine reinigen wir in 2-4 Stunden. Eine Intensivreinigung mit stark verschmutztem KSS-System kann 4-6 Stunden dauern. Spritzgusswerkzeuge mit Trockeneisreinigung sind oft in 7-15 Minuten pro Werkzeug sauber. Bei der Besichtigung geben wir Ihnen eine realistische Zeitschätzung.',
  },
  {
    frage: 'Bringen Sie eigene Geräte und Reinigungsmittel mit?',
    antwort: 'Ja, wir bringen alle notwendigen Geräte und Reinigungsmittel mit. Unser Fuhrpark umfasst Heißdampfreiniger, Trockeneisstrahlgeräte, Industriesauger, Hochdruckreiniger und Spezialwerkzeuge. Die Reinigungsmittel wählen wir passend zu Ihren Maschinen und Materialien – von Standardentfettern bis zu speziellen Kühlschmierstoff-Reinigern. Sie brauchen nichts bereitzustellen.',
  },
  {
    frage: 'Erhalte ich eine Dokumentation der Reinigung?',
    antwort: 'Ja, auf Wunsch dokumentieren wir alle Reinigungsarbeiten umfassend. Sie erhalten Reinigungsprotokolle mit Datum, Umfang und verwendeten Verfahren, Vorher-Nachher-Fotos für Ihre QM-Unterlagen, Checklisten für wiederkehrende Reinigungen und auf Wunsch auch Daten für Ihre Instandhaltungssoftware. Diese Dokumentation ist besonders wertvoll für ISO-Zertifizierungen und Kundenaudits.',
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

          {/* Sticky Sidebar - wie Startseite */}
          <aside className="lg:sticky lg:top-24 lg:self-start">
            <span className="text-sm text-gray-500 font-semibold uppercase tracking-wide mb-3 block">
              Häufige Fragen
            </span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-[#109387] leading-tight mb-4 sm:mb-6">
              Haben Sie noch Fragen?
            </h2>
            <p className="text-base sm:text-lg text-gray-700 font-semibold leading-relaxed mb-6 sm:mb-8">
              Hier finden Sie Antworten auf die häufigsten Fragen zur Maschinenreinigung.
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
              href="tel:+4987143033460"
              className="mt-6 sm:mt-8 bg-[#f8f9fa] border-2 border-[#012956] hover:bg-[#012956] rounded-[6px] p-4 sm:p-6 block transition-all duration-300 group"
            >
              <p className="text-sm text-gray-500 group-hover:text-white/70 font-semibold mb-2 transition-colors">
                Lieber persönlich sprechen?
              </p>
              <span className="text-lg sm:text-xl font-bold text-[#012956] group-hover:text-white transition-colors">
                0871 430 334 60
              </span>
            </a>

            {/* Bild - nur Desktop */}
            <div className="relative mt-6 sm:mt-8 h-48 lg:h-64 rounded-[6px] overflow-hidden hidden lg:block">
              <Image
                src="https://images.unsplash.com/photo-1556741533-6e6a62bd8b49?q=80&w=800&auto=format&fit=crop"
                alt="Kundenservice FIMI Gebäudereinigung - Maschinenreinigung"
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
