'use client'

import Image from 'next/image'
import { Shield, Clock, Users, Award, CheckCircle, Building2 } from 'lucide-react'

const trustFactors = [
  {
    icon: Shield,
    title: 'Hoechste Qualitaetsstandards',
    description: 'Strenge interne Qualitaetskontrollen und regelmaessige Schulungen unserer Mitarbeiter gewaehrleisten gleichbleibend erstklassige Ergebnisse.',
    highlight: 'Qualitaetsgarantie',
  },
  {
    icon: Clock,
    title: '24/7 Erreichbar',
    description: 'Notfallservice rund um die Uhr. Bei dringenden Reinigungsbeduerfnissen sind wir jederzeit fuer Sie da - auch an Wochenenden und Feiertagen.',
    highlight: 'Notfallservice',
  },
  {
    icon: Users,
    title: '500+ Zufriedene Kunden',
    description: 'Von kleinen Unternehmen bis zu grossen Industriebetrieben - ueber 500 Kunden in Bayern vertrauen auf unsere professionelle Arbeit.',
    highlight: 'Referenzen',
  },
  {
    icon: Award,
    title: '15+ Jahre Erfahrung',
    description: 'Seit ueber 15 Jahren bieten wir professionelle Gebaeudereinigung in Bayern. Erfahrung, die sich in jedem Detail zeigt.',
    highlight: 'Expertise',
  },
]

const stats = [
  { value: '500+', label: 'Betreute Objekte', suffix: '' },
  { value: '15', label: 'Jahre Erfahrung', suffix: '+' },
  { value: '98', label: 'Kundenzufriedenheit', suffix: '%' },
  { value: '8', label: 'Standorte', suffix: '' },
]

export default function TrustContainer() {
  return (
    <section id="trust-section" className="section bg-white">
      <div className="container">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <span className="badge mb-6">Warum FIMI</span>
          <h2 className="heading-2 mb-6">
            Ihr Partner fuer professionelle Gebaeudereinigung
          </h2>
          <p className="text-lead">
            Wir verbinden traditionelle Werte mit modernen Reinigungsmethoden.
            Qualitaet, Zuverlaessigkeit und Kundenzufriedenheit stehen bei uns an erster Stelle.
          </p>
        </div>

        {/* Trust Grid */}
        <div className="grid md:grid-cols-2 gap-8 mb-20">
          {trustFactors.map((factor, index) => {
            const Icon = factor.icon
            return (
              <div
                key={index}
                className="group card p-8 hover-lift"
              >
                <div className="flex items-start gap-6">
                  <div className="w-14 h-14 bg-fimi-turquoise/10 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:bg-fimi-turquoise transition-colors duration-300">
                    <Icon size={28} className="text-fimi-turquoise group-hover:text-white transition-colors duration-300" />
                  </div>
                  <div>
                    <span className="text-xs font-bold text-fimi-turquoise uppercase tracking-wider mb-2 block">
                      {factor.highlight}
                    </span>
                    <h3 className="heading-4 mb-3">{factor.title}</h3>
                    <p className="text-gray-600 leading-relaxed">
                      {factor.description}
                    </p>
                  </div>
                </div>
              </div>
            )
          })}
        </div>

        {/* Stats Banner */}
        <div className="relative rounded-2xl overflow-hidden">
          {/* Background Image */}
          <div className="absolute inset-0">
            <Image
              src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=3540&auto=format&fit=crop"
              alt="Moderne Architektur"
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 bg-fimi-navy/90" />
          </div>

          {/* Content */}
          <div className="relative z-10 py-16 px-8">
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
              {stats.map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="text-5xl lg:text-6xl font-bold text-white mb-2">
                    {stat.value}
                    <span className="text-fimi-turquoise">{stat.suffix}</span>
                  </div>
                  <div className="text-white/70 font-medium">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Trust Points */}
        <div className="mt-16 grid md:grid-cols-3 gap-8">
          {[
            {
              icon: CheckCircle,
              title: 'Festpreisgarantie',
              text: 'Keine versteckten Kosten. Sie erhalten ein transparentes Angebot ohne boese Ueberraschungen.',
            },
            {
              icon: CheckCircle,
              title: 'Flexibilitaet',
              text: 'Reinigungsintervalle und -zeiten passen wir individuell an Ihre Betriebsablaeufe an.',
            },
            {
              icon: CheckCircle,
              title: 'Feste Ansprechpartner',
              text: 'Ein persoenlicher Betreuer fuer Ihr Objekt - direkte Kommunikation ohne Umwege.',
            },
          ].map((point, index) => {
            const Icon = point.icon
            return (
              <div key={index} className="flex gap-4">
                <Icon size={24} className="text-fimi-turquoise flex-shrink-0 mt-1" />
                <div>
                  <h4 className="font-semibold text-fimi-navy mb-2">{point.title}</h4>
                  <p className="text-gray-600 text-sm">{point.text}</p>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
