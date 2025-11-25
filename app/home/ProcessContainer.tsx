'use client'

import { Phone, FileText, Users, CheckCircle, ArrowRight } from 'lucide-react'

const steps = [
  {
    number: '01',
    icon: Phone,
    title: 'Kontaktaufnahme',
    description: 'Sie kontaktieren uns per Telefon, E-Mail oder über unser Kontaktformular. Wir melden uns innerhalb von 24 Stunden bei Ihnen.',
  },
  {
    number: '02',
    icon: FileText,
    title: 'Bedarfsanalyse',
    description: 'Wir besichtigen Ihr Objekt, analysieren Ihre Anforderungen und erstellen ein maßgeschneidertes Reinigungskonzept.',
  },
  {
    number: '03',
    icon: Users,
    title: 'Angebot & Planung',
    description: 'Sie erhalten ein transparentes Festpreisangebot. Nach Beauftragung planen wir die Einsätze nach Ihren Wünschen.',
  },
  {
    number: '04',
    icon: CheckCircle,
    title: 'Professionelle Umsetzung',
    description: 'Unsere geschulten Teams führen die Reinigung durch. Ein fester Ansprechpartner begleitet Sie während der gesamten Zusammenarbeit.',
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
        {/* Header */}
        <div className="max-w-3xl mb-16">
          <h2 className="text-fimi-turquoise text-3xl md:text-4xl font-bold mb-4">
            In 4 Schritten zu Ihrem Reinigungskonzept
          </h2>
          <p className="text-white/70 text-lg">
            Einfach, transparent und unkompliziert. Von der ersten Anfrage bis zum sauberen Ergebnis.
          </p>
        </div>

        {/* Process Steps */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map((step) => {
            const Icon = step.icon
            return (
              <div key={step.number} className="relative">
                <div className="border border-white/20 rounded-[6px] p-6 h-full hover:border-fimi-turquoise transition-all">
                  {/* Number & Icon */}
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-4xl font-bold text-fimi-turquoise/30">
                      {step.number}
                    </span>
                    <Icon size={32} className="text-fimi-turquoise" />
                  </div>

                  {/* Content */}
                  <h3 className="text-xl font-semibold text-white mb-2">
                    {step.title}
                  </h3>
                  <p className="text-white/60 text-sm">
                    {step.description}
                  </p>
                </div>
              </div>
            )
          })}
        </div>

        {/* CTA */}
        <div className="mt-12 text-center">
          <button
            onClick={scrollToFooter}
            className="btn-white"
          >
            Jetzt Schritt 1 starten
            <ArrowRight size={18} />
          </button>
          <p className="mt-3 text-white/50 text-sm">
            Kostenlose Beratung – Antwort innerhalb von 24 Stunden
          </p>
        </div>
      </div>
    </section>
  )
}
