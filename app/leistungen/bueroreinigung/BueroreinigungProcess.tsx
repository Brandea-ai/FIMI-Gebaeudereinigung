'use client'

import { Phone, Calendar, FileCheck, Sparkles } from 'lucide-react'

export default function BueroreinigungProcess() {
  const scrollToContact = () => {
    const footer = document.querySelector('footer')
    if (footer) {
      footer.scrollIntoView({ behavior: 'smooth' })
    }
  }

  const steps = [
    {
      icon: Phone,
      number: '1',
      title: 'Kontaktaufnahme',
      description: 'Rufen Sie uns an oder nutzen Sie unser Kontaktformular. Wir besprechen Ihre Anforderungen und vereinbaren einen Termin zur Besichtigung.',
      duration: '5 Minuten'
    },
    {
      icon: Calendar,
      number: '2',
      title: 'Vor-Ort-Besichtigung',
      description: 'Wir kommen zu Ihnen, besichtigen die Räumlichkeiten und erfassen alle Details. Gemeinsam legen wir Reinigungsintervalle und -zeiten fest.',
      duration: '30 Minuten'
    },
    {
      icon: FileCheck,
      number: '3',
      title: 'Individuelles Angebot',
      description: 'Sie erhalten ein transparentes Festpreis-Angebot ohne versteckte Kosten. Nach Ihrer Zustimmung erstellen wir den Reinigungsplan.',
      duration: '24 Stunden'
    },
    {
      icon: Sparkles,
      number: '4',
      title: 'Start der Reinigung',
      description: 'Unser geschultes Team startet zum vereinbarten Termin. Sie erhalten einen festen Ansprechpartner für alle Anliegen.',
      duration: 'Sofort'
    }
  ]

  return (
    <section className="py-24 md:py-32 bg-white">
      <div className="container">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <div className="inline-block px-4 py-2 bg-fimi-turquoise/10 text-fimi-turquoise font-semibold mb-6" style={{ borderRadius: '4px' }}>
            So einfach geht's
          </div>
          <h2 className="text-4xl md:text-6xl font-bold text-fimi-navy mb-6">
            In 4 Schritten zur sauberen Büroumgebung
          </h2>
          <p className="text-xl text-gray-600">
            Schnell, transparent und unkompliziert
          </p>
        </div>

        {/* Process Steps */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
          {steps.map((step, index) => {
            const Icon = step.icon
            return (
              <div key={index} className="relative">
                {/* Connector Line - nur auf Desktop */}
                {index < steps.length - 1 && (
                  <div className="hidden lg:block absolute top-16 left-[60%] w-[80%] h-1 bg-gradient-to-r from-fimi-turquoise to-fimi-turquoise/20" />
                )}

                <div className="bg-gray-50 p-8 hover-lift h-full" style={{ borderRadius: '4px' }}>
                  {/* Step Number */}
                  <div className="bg-fimi-turquoise text-white w-12 h-12 flex items-center justify-center font-bold text-2xl mb-6" style={{ borderRadius: '4px' }}>
                    {step.number}
                  </div>

                  {/* Icon */}
                  <div className="bg-fimi-navy text-white w-16 h-16 flex items-center justify-center mb-6" style={{ borderRadius: '4px' }}>
                    <Icon size={28} />
                  </div>

                  {/* Content */}
                  <div className="text-sm font-bold text-fimi-turquoise mb-2">
                    {step.duration}
                  </div>

                  <h3 className="text-2xl font-bold text-fimi-navy mb-4">
                    {step.title}
                  </h3>

                  <p className="text-gray-600">
                    {step.description}
                  </p>
                </div>
              </div>
            )
          })}
        </div>

        {/* CTA Section */}
        <div className="bg-gradient-to-r from-fimi-navy to-fimi-turquoise text-white p-12 text-center" style={{ borderRadius: '4px' }}>
          <h3 className="text-3xl md:text-4xl font-bold mb-6">
            Bereit für Ihre saubere Büroumgebung?
          </h3>

          <p className="text-xl mb-8 max-w-2xl mx-auto text-white/90">
            Fordern Sie jetzt Ihr kostenloses und unverbindliches Angebot an. Innerhalb von 24 Stunden erhalten Sie einen detaillierten Kostenvoranschlag.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={scrollToContact}
              className="px-8 py-4 bg-white text-fimi-navy font-bold text-lg hover:opacity-90 transition-opacity"
              style={{ borderRadius: '4px' }}
            >
              Kostenloses Angebot anfordern
            </button>

            <a
              href="tel:+4987143033460"
              className="px-8 py-4 border-2 border-white text-white font-bold text-lg hover:bg-white hover:text-fimi-navy transition-all"
              style={{ borderRadius: '4px' }}
            >
              0871 430 334 60 anrufen
            </a>
          </div>

          <p className="text-sm mt-6 text-white/70">
            ✓ Keine Vertragsbindung · ✓ Kostenlose Beratung · ✓ Transparente Preise
          </p>
        </div>
      </div>
    </section>
  )
}
