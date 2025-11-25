'use client'

import { Phone, FileText, Users, CheckCircle, ArrowRight } from 'lucide-react'

const steps = [
  {
    number: '01',
    icon: Phone,
    title: 'Kontaktaufnahme',
    description: 'Sie kontaktieren uns per Telefon, E-Mail oder ueber unser Kontaktformular. Wir melden uns innerhalb von 24 Stunden bei Ihnen.',
  },
  {
    number: '02',
    icon: FileText,
    title: 'Bedarfsanalyse',
    description: 'Wir besichtigen Ihr Objekt, analysieren Ihre Anforderungen und erstellen ein massgeschneidertes Reinigungskonzept.',
  },
  {
    number: '03',
    icon: Users,
    title: 'Angebot & Planung',
    description: 'Sie erhalten ein transparentes Festpreisangebot. Nach Beauftragung planen wir die Einsaetze nach Ihren Wuenschen.',
  },
  {
    number: '04',
    icon: CheckCircle,
    title: 'Professionelle Umsetzung',
    description: 'Unsere geschulten Teams fuehren die Reinigung durch. Ein fester Ansprechpartner begleitet Sie waehrend der gesamten Zusammenarbeit.',
  },
]

export default function ProcessContainer() {
  const scrollToFooter = () => {
    const footer = document.getElementById('contact-form')
    if (footer) {
      footer.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <section id="process-section" className="section bg-fimi-navy">
      <div className="container">
        {/* Header - Links */}
        <div className="mb-20">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white mb-6">
            In 4 Schritten zu Ihrem Reinigungskonzept
          </h2>
          <p className="text-xl md:text-2xl font-bold text-white/70 max-w-4xl">
            Einfach, transparent und unkompliziert. Von der ersten Anfrage bis zum sauberen Ergebnis.
          </p>
        </div>

        {/* Process Steps */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => {
            const Icon = step.icon
            return (
              <div key={step.number} className="relative">
                {/* Connector Line */}
                {index < steps.length - 1 && (
                  <div className="hidden lg:block absolute top-12 left-full w-full h-1 bg-white/10 -translate-x-1/2" />
                )}

                <div className="border-2 border-white/20 rounded-[6px] p-8 h-full hover:border-fimi-turquoise transition-all">
                  {/* Number & Icon - Icons ohne Hintergrund */}
                  <div className="flex items-center justify-between mb-6">
                    <span className="text-6xl font-extrabold text-fimi-turquoise/30">
                      {step.number}
                    </span>
                    <Icon size={40} strokeWidth={2.5} className="text-fimi-turquoise" />
                  </div>

                  {/* Content */}
                  <h3 className="text-2xl font-extrabold text-white mb-3">
                    {step.title}
                  </h3>
                  <p className="text-lg font-bold text-white/60">
                    {step.description}
                  </p>
                </div>
              </div>
            )
          })}
        </div>

        {/* CTA - 6px Rundungen */}
        <div className="mt-16 text-center">
          <button
            onClick={scrollToFooter}
            className="inline-flex items-center justify-center gap-3 bg-white text-fimi-navy text-xl font-bold px-12 py-5 rounded-[6px] hover:bg-gray-100 transition-all"
          >
            Jetzt Schritt 1 starten
            <ArrowRight size={24} strokeWidth={3} />
          </button>
          <p className="mt-4 text-white/50 text-lg font-bold">
            Kostenlose Beratung - Antwort innerhalb von 24 Stunden
          </p>
        </div>
      </div>
    </section>
  )
}
