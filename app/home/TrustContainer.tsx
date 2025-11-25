'use client'

import { Shield, Clock, Users, Award } from 'lucide-react'

const trustFactors = [
  {
    icon: Shield,
    title: 'Höchste Qualitätsstandards',
    description: 'Regelmäßige Schulungen und strenge Qualitätskontrollen garantieren erstklassige Ergebnisse.',
  },
  {
    icon: Clock,
    title: '24/7 Notfallservice',
    description: 'Rund um die Uhr erreichbar – auch an Wochenenden und Feiertagen.',
  },
  {
    icon: Users,
    title: '500+ zufriedene Kunden',
    description: 'Unternehmen aller Größen in Bayern vertrauen auf unsere Arbeit.',
  },
  {
    icon: Award,
    title: '15+ Jahre Erfahrung',
    description: 'Langjährige Expertise in professioneller Gebäudereinigung.',
  },
]

export default function TrustContainer() {
  return (
    <section id="trust-section" className="section bg-white">
      <div className="container">
        {/* Header */}
        <div className="max-w-2xl mb-16">
          <h2 className="heading-section">
            Warum FIMI?
          </h2>
          <p className="text-lead">
            Wir verbinden Zuverlässigkeit mit modernen Reinigungsmethoden.
            Qualität und Kundenzufriedenheit stehen bei uns an erster Stelle.
          </p>
        </div>

        {/* Trust Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
          {trustFactors.map((factor, index) => {
            const Icon = factor.icon
            return (
              <div key={index} className="card hover-lift">
                <Icon size={32} className="text-fimi-turquoise mb-4" />
                <h3 className="heading-card">{factor.title}</h3>
                <p className="text-body">{factor.description}</p>
              </div>
            )
          })}
        </div>

        {/* Stats Bar */}
        <div className="bg-fimi-navy rounded-[6px] py-12 px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 text-center">
            {[
              { value: '500+', label: 'Betreute Objekte' },
              { value: '15+', label: 'Jahre Erfahrung' },
              { value: '98%', label: 'Kundenzufriedenheit' },
              { value: '8', label: 'Standorte in Bayern' },
            ].map((stat, index) => (
              <div key={index}>
                <div className="text-4xl lg:text-5xl font-bold text-fimi-turquoise mb-1">
                  {stat.value}
                </div>
                <div className="text-white/80 text-sm">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
