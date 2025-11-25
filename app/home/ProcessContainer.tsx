'use client'

import { Phone, FileText, Users, CheckCircle, ArrowRight } from 'lucide-react'

const steps = [
  {
    number: '01',
    icon: Phone,
    title: 'Kontaktaufnahme',
    description: 'Sie kontaktieren uns per Telefon, E-Mail oder ueber unser Kontaktformular. Wir melden uns innerhalb von 24 Stunden bei Ihnen.',
    highlight: 'Kostenlos & unverbindlich',
  },
  {
    number: '02',
    icon: FileText,
    title: 'Bedarfsanalyse',
    description: 'Wir besichtigen Ihr Objekt, analysieren Ihre Anforderungen und erstellen ein massgeschneidertes Reinigungskonzept.',
    highlight: 'Vor-Ort-Termin',
  },
  {
    number: '03',
    icon: Users,
    title: 'Angebot & Planung',
    description: 'Sie erhalten ein transparentes Festpreisangebot. Nach Beauftragung planen wir die Einsaetze nach Ihren Wuenschen.',
    highlight: 'Festpreisgarantie',
  },
  {
    number: '04',
    icon: CheckCircle,
    title: 'Professionelle Umsetzung',
    description: 'Unsere geschulten Teams fuehren die Reinigung durch. Ein fester Ansprechpartner begleitet Sie waehrend der gesamten Zusammenarbeit.',
    highlight: 'Qualitaetskontrolle',
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
        <div className="text-center max-w-3xl mx-auto mb-20">
          <span className="badge bg-white/10 text-white border-white/20 mb-6">
            So funktioniert es
          </span>
          <h2 className="heading-2 text-white mb-6">
            In 4 Schritten zu Ihrem Reinigungskonzept
          </h2>
          <p className="text-lead text-white/70">
            Einfach, transparent und unkompliziert. Von der ersten Anfrage bis zum sauberen Ergebnis.
          </p>
        </div>

        {/* Process Steps */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => {
            const Icon = step.icon
            return (
              <div key={step.number} className="relative">
                {/* Connector Line - Desktop */}
                {index < steps.length - 1 && (
                  <div className="hidden lg:block absolute top-12 left-full w-full h-0.5 bg-white/10 -translate-x-1/2">
                    <div className="absolute right-0 top-1/2 -translate-y-1/2 w-2 h-2 rounded-full bg-fimi-turquoise" />
                  </div>
                )}

                <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-8 h-full hover:bg-white/10 transition-colors duration-300">
                  {/* Number */}
                  <div className="flex items-center justify-between mb-6">
                    <span className="text-5xl font-bold text-fimi-turquoise/30">
                      {step.number}
                    </span>
                    <div className="w-12 h-12 bg-fimi-turquoise/20 rounded-lg flex items-center justify-center">
                      <Icon size={24} className="text-fimi-turquoise" />
                    </div>
                  </div>

                  {/* Content */}
                  <h3 className="text-xl font-semibold text-white mb-3">
                    {step.title}
                  </h3>
                  <p className="text-white/60 mb-4 leading-relaxed">
                    {step.description}
                  </p>

                  {/* Highlight */}
                  <span className="inline-flex items-center gap-2 text-fimi-turquoise text-sm font-semibold">
                    <CheckCircle size={14} />
                    {step.highlight}
                  </span>
                </div>
              </div>
            )
          })}
        </div>

        {/* CTA */}
        <div className="mt-16 text-center">
          <button
            onClick={scrollToFooter}
            className="group btn bg-white text-fimi-navy hover:bg-gray-100 text-lg px-10 py-5"
          >
            Jetzt Schritt 1 starten
            <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
          </button>
          <p className="mt-4 text-white/50 text-sm">
            Kostenlose Beratung - Antwort innerhalb von 24 Stunden
          </p>
        </div>
      </div>
    </section>
  )
}
