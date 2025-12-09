'use client'

import { useState } from 'react'
import Image from 'next/image'
import { ChevronDown, ArrowRight } from 'lucide-react'
import FadeIn from '@/components/FadeIn'

const faqs = [
  {
    frage: 'Wie schnell können Sie mit der Reinigung beginnen?',
    antwort: 'Nach der kostenlosen Besichtigung erstellen wir Ihnen innerhalb von 48 Stunden ein Angebot. Bei Zusage können wir in der Regel innerhalb einer Woche starten. Bei dringenden Anfragen bieten wir auch einen Notfallservice mit Reaktionszeit von 2 Stunden.',
  },
  {
    frage: 'Arbeiten immer dieselben Reinigungskräfte in meinem Gebäude?',
    antwort: 'Ja, wir setzen auf feste Teams. Ihre Reinigungskräfte kennen Ihre Räume und wissen genau, worauf es ankommt. Das sorgt für gleichbleibende Qualität und Vertrauen. Personalwechsel gibt es nur bei Urlaub oder Krankheit - dann übernimmt ein eingearbeiteter Vertreter.',
  },
  {
    frage: 'Was kostet eine professionelle Gebäudereinigung?',
    antwort: 'Die Kosten hängen von Faktoren wie Fläche, Reinigungsintervall und Anforderungen ab. Nach der kostenlosen Besichtigung erhalten Sie ein transparentes Festpreisangebot ohne versteckte Kosten. Was wir anbieten, gilt.',
  },
  {
    frage: 'Sind Sie versichert?',
    antwort: 'Ja, vollumfänglich. Wir haben eine Betriebshaftpflichtversicherung mit ausreichender Deckungssumme. Sollte trotz aller Sorgfalt einmal etwas zu Bruch gehen, sind Sie abgesichert.',
  },
  {
    frage: 'Welche Reinigungsmittel verwenden Sie?',
    antwort: 'Wir setzen auf umweltschonende und gesundheitsverträgliche Reinigungsmittel. Auf Wunsch arbeiten wir auch mit speziellen Produkten für Allergiker oder nach Ihren Vorgaben. Bei der Industriereinigung verwenden wir selbstverständlich die für Ihre Branche zugelassenen Mittel.',
  },
  {
    frage: 'Können Sie auch außerhalb der Geschäftszeiten reinigen?',
    antwort: 'Selbstverständlich. Die meisten unserer Kunden bevorzugen Reinigung außerhalb der Arbeitszeiten - früh morgens, abends oder am Wochenende. Wir passen uns Ihrem Betriebsablauf an, nicht umgekehrt.',
  },
  {
    frage: 'Was passiert, wenn ich mit der Reinigung nicht zufrieden bin?',
    antwort: 'Ihre Zufriedenheit ist unser Maßstab. Sollte einmal etwas nicht passen, melden Sie sich bei Ihrem festen Ansprechpartner. Wir bessern umgehend nach - ohne Diskussion und ohne Zusatzkosten. Das ist unser Qualitätsversprechen.',
  },
  {
    frage: 'Bieten Sie auch Einzelleistungen wie Fensterreinigung an?',
    antwort: 'Ja, wir bieten sowohl regelmäßige Unterhaltsreinigung als auch Einzelleistungen an. Fensterreinigung, Grundreinigung, Baureinigung oder Sonderreinigungen können Sie auch einzeln beauftragen. Viele Kunden kombinieren beides.',
  },
]

export default function FAQContainer() {
  const [openIndex, setOpenIndex] = useState<number | null>(0)

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  return (
    <section id="faq" className="py-20 lg:py-28 bg-white" aria-labelledby="faq-heading">
      <div className="w-full max-w-[1800px] mx-auto px-6 lg:px-12 xl:px-20">

        {/* Two Column Layout */}
        <div className="grid lg:grid-cols-[400px_1fr] xl:grid-cols-[450px_1fr] gap-12 lg:gap-20">

          {/* Left: Sticky Sidebar */}
          <FadeIn direction="left" className="lg:sticky lg:top-32 lg:self-start">
            <aside>
              <p className="text-sm text-gray-500 font-semibold uppercase tracking-wide mb-3">
                Häufige Fragen
              </p>
              <h2
                id="faq-heading"
                className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#109387] leading-[1.1] mb-6"
              >
                Haben Sie noch Fragen?
              </h2>
              <p className="text-lg text-gray-700 font-semibold leading-relaxed mb-10">
                Hier finden Sie Antworten auf die häufigsten Fragen.
                Falls Ihre Frage nicht dabei ist, kontaktieren Sie uns einfach direkt.
              </p>

              {/* CTA */}
              <a
                href="#contact-form"
                className="inline-flex items-center justify-center gap-3 bg-[#109387] hover:bg-[#0d7d72] text-white font-bold text-lg px-8 py-4 rounded-[6px] transition-all duration-300 group w-full"
              >
                Kostenfreie Besichtigung
                <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
              </a>

              {/* Kontakt-Info */}
              <a
                href="tel:+4987143033460"
                className="mt-8 bg-white border-2 border-[#012956] hover:bg-[#012956] rounded-[6px] p-6 block transition-all duration-300 group"
              >
                <p className="text-sm text-gray-500 group-hover:text-white/70 font-semibold mb-2 transition-colors">
                  Lieber persönlich sprechen?
                </p>
                <span className="text-xl font-bold text-[#012956] group-hover:text-white transition-colors">
                  0871 430 334 60
                </span>
              </a>

              {/* Bild */}
              <div className="relative mt-8 h-48 lg:h-64 rounded-[6px] overflow-hidden hidden lg:block">
                <Image
                  src="/images/home/faq-service.avif"
                  alt="Kundenservice FIMI Gebäudereinigung"
                  fill
                  className="object-cover"
                />
              </div>
            </aside>
          </FadeIn>

          {/* Right: FAQ Accordion */}
          <div className="space-y-4" role="list" aria-label="Häufig gestellte Fragen">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className="bg-[#f8f9fa] rounded-[6px] overflow-hidden"
                role="listitem"
              >
                <button
                  onClick={() => toggleFAQ(index)}
                  className="w-full px-6 py-5 flex items-center justify-between gap-4 text-left hover:bg-gray-100 transition-colors"
                  aria-expanded={openIndex === index}
                  aria-controls={`faq-answer-${index}`}
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
                  id={`faq-answer-${index}`}
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
