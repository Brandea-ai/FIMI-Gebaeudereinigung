'use client'

import { useState } from 'react'
import Image from 'next/image'
import { ChevronDown, ArrowRight } from 'lucide-react'

const faqs = [
  {
    frage: 'Was kostet Parkplatzreinigung pro Quadratmeter?',
    antwort: 'Die Kosten für professionelle Parkplatzreinigung beginnen bei etwa 0,50 Euro pro Quadratmeter für regelmäßige Kehrarbeiten. Bei Intensivreinigung mit Hochdruck oder Spezialbehandlung wie Ölfleckenentfernung liegen die Preise zwischen 1,50 und 3,50 Euro pro Quadratmeter. Nach einer kostenlosen Besichtigung erhalten Sie ein transparentes Festpreisangebot – ohne versteckte Kosten.',
  },
  {
    frage: 'Wie oft sollte ein Parkplatz gereinigt werden?',
    antwort: 'Die optimale Reinigungsfrequenz hängt von der Nutzungsintensität ab. Supermarkt-Parkplätze mit hohem Publikumsverkehr empfehlen wir wöchentlich zu reinigen. Firmenparkplätze kommen meist mit 14-tägiger Reinigung aus. Wohnanlagen reichen oft monatlich. Zusätzlich empfehlen wir eine Intensivreinigung im Frühjahr nach dem Winter und im Herbst nach dem Laubfall.',
  },
  {
    frage: 'Können Sie Ölflecken auf dem Parkplatz komplett entfernen?',
    antwort: 'Frische Ölflecken können wir in den meisten Fällen zu 95-100% entfernen. Bei älteren, tief in den Untergrund eingezogenen Flecken erreichen wir eine deutliche Verbesserung, aber nicht immer vollständige Entfernung. Wichtig: Je schneller Sie uns rufen, desto besser das Ergebnis. Wir setzen Heißwasser-Hochdruck bis 155°C und spezielle Ölbinder ein.',
  },
  {
    frage: 'Reinigen Sie auch während der Geschäftszeiten?',
    antwort: 'Ja, das ist möglich und wird von vielen Kunden gewünscht – besonders bei regelmäßiger Kehrarbeit. Unsere modernen Maschinen arbeiten leise und stören den Betrieb kaum. Für Intensivreinigungen mit Hochdruck empfehlen wir aber Randzeiten oder Wochenenden, da die Flächen kurzzeitig gesperrt werden müssen.',
  },
  {
    frage: 'Was ist der Unterschied zwischen Parkplatzreinigung und Tiefgaragenreinigung?',
    antwort: 'Der Hauptunterschied liegt in der Umgebung und den Verschmutzungsarten. Parkplatzreinigung betrifft offene Außenflächen mit Wetter-Verschmutzungen wie Laub, Splitt und Müll. Tiefgaragenreinigung fokussiert auf geschlossene Räume mit Reifenabrieb, Abgasen, Feinstaub und Betonstaub. Die eingesetzten Verfahren und Geräte unterscheiden sich entsprechend.',
  },
  {
    frage: 'Welche Maschinen setzen Sie für die Parkplatzreinigung ein?',
    antwort: 'Wir setzen moderne Aufsitz-Kehrmaschinen mit Saugtechnik für große Flächen ein – staubfrei und effizient. Für hartnäckige Verschmutzungen nutzen wir Heißwasser-Hochdruckreiniger mit bis zu 300 Bar und 155°C. Für Details und schwer zugängliche Stellen arbeiten unsere Teams mit Laubbläsern, Besen und Spezialgeräten.',
  },
  {
    frage: 'Wie kurzfristig können Sie zur Parkplatzreinigung kommen?',
    antwort: 'Bei regulären Anfragen melden wir uns innerhalb von 2 Stunden und können meist innerhalb von 1-2 Werktagen zur Besichtigung kommen. Bei Notfällen – etwa nach Öl-Havarien oder vor wichtigen Events – sind wir oft noch am selben Tag vor Ort. Sprechen Sie uns einfach an.',
  },
  {
    frage: 'Übernehmen Sie auch den Winterdienst für Parkplätze?',
    antwort: 'Ja, Parkplatzreinigung und Winterdienst gehen für uns Hand in Hand. Viele Kunden buchen beides bei uns – im Sommer regelmäßige Reinigung, im Winter Räum- und Streudienst. Das hat Vorteile: Wir kennen Ihre Flächen bereits, die Übergänge sind fließend und Sie haben nur einen Ansprechpartner.',
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
            <span className="text-sm text-gray-500 font-semibold uppercase tracking-wide mb-3 block">
              Häufige Fragen
            </span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-[#109387] leading-tight mb-4 sm:mb-6">
              Fragen zur Parkplatzreinigung?
            </h2>
            <p className="text-base sm:text-lg text-gray-700 font-semibold leading-relaxed mb-6 sm:mb-8">
              Hier finden Sie Antworten auf die häufigsten Fragen. Falls Ihre Frage
              nicht dabei ist, rufen Sie uns einfach an.
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
                alt="FIMI Kundenservice - Persönliche Beratung"
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
