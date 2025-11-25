'use client'

import Image from 'next/image'
import { Shield, Clock, Users, Award, CheckCircle } from 'lucide-react'

const trustFactors = [
  {
    icon: Shield,
    title: 'Hoechste Qualitaetsstandards',
    description: 'Strenge interne Qualitaetskontrollen und regelmaessige Schulungen unserer Mitarbeiter gewaehrleisten gleichbleibend erstklassige Ergebnisse.',
  },
  {
    icon: Clock,
    title: '24/7 Erreichbar',
    description: 'Notfallservice rund um die Uhr. Bei dringenden Reinigungsbeduerfnissen sind wir jederzeit fuer Sie da - auch an Wochenenden und Feiertagen.',
  },
  {
    icon: Users,
    title: '500+ Zufriedene Kunden',
    description: 'Von kleinen Unternehmen bis zu grossen Industriebetrieben - ueber 500 Kunden in Bayern vertrauen auf unsere professionelle Arbeit.',
  },
  {
    icon: Award,
    title: '15+ Jahre Erfahrung',
    description: 'Seit ueber 15 Jahren bieten wir professionelle Gebaeudereinigung in Bayern. Erfahrung, die sich in jedem Detail zeigt.',
  },
]

const stats = [
  { value: '500+', label: 'Betreute Objekte' },
  { value: '15+', label: 'Jahre Erfahrung' },
  { value: '98%', label: 'Kundenzufriedenheit' },
  { value: '8', label: 'Standorte' },
]

export default function TrustContainer() {
  return (
    <section id="trust-section" className="section bg-white">
      <div className="container">
        {/* Header - Links ausgerichtet */}
        <div className="mb-16">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-fimi-navy mb-6">
            Ihr Partner fuer professionelle Gebaeudereinigung
          </h2>
          <p className="text-xl md:text-2xl font-bold text-gray-600 max-w-4xl">
            Wir verbinden traditionelle Werte mit modernen Reinigungsmethoden.
            Qualitaet, Zuverlaessigkeit und Kundenzufriedenheit stehen bei uns an erster Stelle.
          </p>
        </div>

        {/* Trust Grid - Zick-Zack Layout */}
        <div className="grid md:grid-cols-2 gap-8 mb-20">
          {trustFactors.map((factor, index) => {
            const Icon = factor.icon
            const isEven = index % 2 === 0
            return (
              <div
                key={index}
                className={`p-8 border-2 border-gray-200 rounded-[6px] hover:border-fimi-turquoise transition-all ${
                  isEven ? 'md:text-left' : 'md:text-right'
                }`}
              >
                <div className={`flex items-start gap-6 ${isEven ? '' : 'md:flex-row-reverse'}`}>
                  {/* Icon - Ohne Hintergrund */}
                  <Icon size={40} strokeWidth={2.5} className="text-fimi-turquoise flex-shrink-0" />
                  <div>
                    <h3 className="text-2xl lg:text-3xl font-extrabold text-fimi-navy mb-3">
                      {factor.title}
                    </h3>
                    <p className="text-lg font-bold text-gray-600">
                      {factor.description}
                    </p>
                  </div>
                </div>
              </div>
            )
          })}
        </div>

        {/* Stats Banner - 6px Rundungen */}
        <div className="relative rounded-[6px] overflow-hidden">
          {/* Background */}
          <div className="absolute inset-0 bg-fimi-navy" />

          {/* Content */}
          <div className="relative z-10 py-16 px-8">
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
              {stats.map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="text-5xl lg:text-7xl font-extrabold text-fimi-turquoise mb-2">
                    {stat.value}
                  </div>
                  <div className="text-white text-xl font-bold">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Trust Points - Icons ohne Hintergrund */}
        <div className="mt-16 grid md:grid-cols-3 gap-8">
          {[
            {
              title: 'Festpreisgarantie',
              text: 'Keine versteckten Kosten. Sie erhalten ein transparentes Angebot ohne boese Ueberraschungen.',
            },
            {
              title: 'Flexibilitaet',
              text: 'Reinigungsintervalle und -zeiten passen wir individuell an Ihre Betriebsablaeufe an.',
            },
            {
              title: 'Feste Ansprechpartner',
              text: 'Ein persoenlicher Betreuer fuer Ihr Objekt - direkte Kommunikation ohne Umwege.',
            },
          ].map((point, index) => (
            <div key={index} className="flex gap-4">
              <CheckCircle size={32} strokeWidth={2.5} className="text-fimi-turquoise flex-shrink-0" />
              <div>
                <h4 className="text-xl font-extrabold text-fimi-navy mb-2">{point.title}</h4>
                <p className="text-lg font-bold text-gray-600">{point.text}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
