'use client'

import { useState } from 'react'
import Image from 'next/image'
import { ChevronDown, ArrowRight } from 'lucide-react'

const faqs = [
  {
    frage: 'Was kostet eine Event-Reinigung?',
    antwort: 'Die Kosten hängen von Veranstaltungsgröße, Fläche und Leistungsumfang ab. Kleinere Events beginnen ab ca. 300€, größere Veranstaltungen werden individuell kalkuliert. Nach einer kostenfreien Besichtigung erhalten Sie von uns ein transparentes Festpreisangebot ohne versteckte Kosten.',
  },
  {
    frage: 'Wann sollte ich die Event-Reinigung buchen?',
    antwort: 'Für optimale Planung empfehlen wir eine Buchung 1-2 Wochen vor dem Event. Bei kurzfristigen Anfragen sind wir oft auch innerhalb von 24-48 Stunden einsatzbereit. Für große Events oder Messen planen Sie bitte 3-4 Wochen Vorlauf ein.',
  },
  {
    frage: 'Reinigen Sie auch während der Veranstaltung?',
    antwort: 'Ja, wir bieten Reinigung vor, während und nach Ihrer Veranstaltung. Während des Events sorgen unsere Teams diskret für saubere Sanitäranlagen, leeren Mülleimer und beseitigen Verschmutzungen – ohne Ihre Gäste zu stören.',
  },
  {
    frage: 'Bieten Sie auch Hotelzimmer-Reinigung an?',
    antwort: 'Ja, Hotelzimmer-Reinigung ist einer unserer Kernbereiche. Wir übernehmen die komplette Zimmerreinigung, Bettwäschewechsel und Etagenreinigung für Hotels und Pensionen – als dauerhafte Lösung oder zur Verstärkung in der Hochsaison.',
  },
  {
    frage: 'Können Sie auch Messestände reinigen?',
    antwort: 'Absolut. Messe-Reinigung gehört zu unseren Spezialitäten. Wir reinigen vor Messebeginn, halten Ihren Stand während der Messe sauber und übernehmen die Endreinigung nach Abbau. In ganz Bayern für Sie im Einsatz.',
  },
  {
    frage: 'Was ist in der Endreinigung enthalten?',
    antwort: 'Die Endreinigung umfasst die komplette Grundreinigung der Location: Böden wischen/saugen, Tische und Stühle reinigen, Sanitäranlagen gründlich desinfizieren, Müll entsorgen und Küchen-/Cateringbereiche säubern. Optional auch Fenster und Glasflächen.',
  },
  {
    frage: 'Arbeiten Sie auch am Wochenende?',
    antwort: 'Selbstverständlich. Events finden oft am Wochenende statt – wir sind dann für Sie da. Ob Samstagabend-Hochzeit oder Sonntags-Brunch: Unsere Teams sind flexibel und richten sich nach Ihrem Veranstaltungsplan.',
  },
  {
    frage: 'Was ist VIP- oder Premium-Reinigung?',
    antwort: 'VIP-Reinigung bedeutet höchste Ansprüche: Besonders gründliche Reinigung mit Premium-Reinigungsmitteln, erfahrene Fachkräfte und flexible Einsatzzeiten. Ideal für repräsentative Räume, Vorstandsetagen oder exklusive Veranstaltungen.',
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
              Hier finden Sie Antworten auf die häufigsten Fragen zur Event- und Veranstaltungsreinigung.
              Falls Ihre Frage nicht dabei ist, kontaktieren Sie uns einfach direkt.
            </p>

            {/* CTA Button */}
            <a
              href="#kontakt"
              className="inline-flex items-center justify-center gap-3 bg-[#109387] hover:bg-[#0d7d72] text-white font-bold text-base sm:text-lg px-6 sm:px-8 py-3 sm:py-4 rounded-[6px] transition-all duration-300 group w-full"
            >
              Jetzt anfragen
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </a>

            {/* Kontakt-Info */}
            <a
              href="tel:+4987143033460"
              className="mt-6 sm:mt-8 bg-white border-2 border-[#012956] hover:bg-[#012956] rounded-[6px] p-4 sm:p-6 block transition-all duration-300 group"
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
                src="https://images.unsplash.com/photo-1540575467063-178a50c2df87?q=80&w=800&auto=format&fit=crop"
                alt="Event-Reinigung FIMI Gebäudereinigung"
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
