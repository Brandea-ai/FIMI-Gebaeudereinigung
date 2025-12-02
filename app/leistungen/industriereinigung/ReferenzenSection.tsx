'use client'

import Image from 'next/image'
import Link from 'next/link'
import { ArrowRight, Quote, CheckCircle, Building2, Factory, Warehouse } from 'lucide-react'
import FadeIn from '@/components/FadeIn'

const referenzen = [
  {
    id: 1,
    icon: Factory,
    branche: 'Automotive-Zulieferer',
    standort: 'Raum Dingolfing',
    flaeche: '4.500 m²',
    herausforderung: 'Produktionshalle mit starker Ölverschmutzung, Audit in 5 Tagen',
    loesung: 'Intensivreinigung über Wochenende, Spezialentölung, Bodenversiegelung',
    ergebnis: 'Audit bestanden, jetzt regelmäßige Unterhaltsreinigung',
    zitat: 'FIMI hat uns in einer kritischen Situation gerettet. Das Audit haben wir dank der sauberen Halle mit Bravour bestanden.',
    autor: 'Betriebsleiter',
  },
  {
    id: 2,
    icon: Warehouse,
    branche: 'Logistikzentrum',
    standort: 'München Nord',
    flaeche: '12.000 m²',
    herausforderung: '24/7 Betrieb, keine Möglichkeit für Stillstand',
    loesung: 'Reinigung in Schichten, Bereichsweise ohne Betriebsunterbrechung',
    ergebnis: 'Wöchentliche Reinigung seit 3 Jahren',
    zitat: 'Die Flexibilität von FIMI ist unschlagbar. Sie passen sich komplett unserem Betrieb an.',
    autor: 'Facility Manager',
  },
  {
    id: 3,
    icon: Building2,
    branche: 'Metallverarbeitung',
    standort: 'Landshut',
    flaeche: '2.800 m²',
    herausforderung: 'CNC-Maschinen mit Kühlschmierstoffen, rutschiger Hallenboden',
    loesung: 'Maschinenreinigung nach Herstellervorgaben, Bodenentölung',
    ergebnis: 'Monatliche Grundreinigung, Unfälle reduziert',
    zitat: 'Seit FIMI unsere Halle reinigt, hatten wir keinen Rutschunfall mehr. Das spart uns richtig Geld.',
    autor: 'Geschäftsführer',
  },
]

export default function ReferenzenSection() {
  return (
    <section id="referenzen" className="py-20 lg:py-28 bg-[#f8f9fa]" aria-labelledby="referenzen-heading">
      <div className="w-full max-w-[1800px] mx-auto px-6 lg:px-12 xl:px-20">

        {/* Section Header */}
        <FadeIn className="text-center mb-16">
          <p className="text-sm text-[#109387] font-semibold uppercase tracking-wide mb-3">
            Erfolgsgeschichten
          </p>
          <h2
            id="referenzen-heading"
            className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#012956] leading-[1.1] mb-6"
          >
            Das sagen unsere Industriekunden
          </h2>
          <p className="text-lg text-gray-700 font-semibold leading-relaxed max-w-2xl mx-auto">
            Echte Projekte, echte Ergebnisse. So haben wir anderen Unternehmen
            mit unserer Industriereinigung geholfen.
          </p>
        </FadeIn>

        {/* Referenzen Grid */}
        <div className="grid lg:grid-cols-3 gap-8">
          {referenzen.map((ref, index) => {
            const Icon = ref.icon
            return (
              <FadeIn key={ref.id} delay={index * 0.1}>
                <article className="bg-white rounded-[6px] overflow-hidden h-full flex flex-col shadow-sm">
                  {/* Header */}
                  <div className="bg-[#012956] p-6">
                    <div className="flex items-center gap-3 mb-3">
                      <div className="w-10 h-10 bg-[#109387] rounded-[6px] flex items-center justify-center">
                        <Icon size={20} className="text-white" />
                      </div>
                      <div>
                        <h3 className="text-white font-bold">{ref.branche}</h3>
                        <p className="text-white/60 text-sm font-semibold">{ref.standort}</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-4 text-white/80 text-sm font-semibold">
                      <span>Fläche: {ref.flaeche}</span>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-6 flex flex-col flex-grow">
                    {/* Herausforderung */}
                    <div className="mb-4">
                      <p className="text-xs text-gray-500 font-semibold uppercase tracking-wide mb-1">
                        Herausforderung
                      </p>
                      <p className="text-gray-700 font-semibold">{ref.herausforderung}</p>
                    </div>

                    {/* Lösung */}
                    <div className="mb-4">
                      <p className="text-xs text-gray-500 font-semibold uppercase tracking-wide mb-1">
                        Unsere Lösung
                      </p>
                      <p className="text-gray-700 font-semibold">{ref.loesung}</p>
                    </div>

                    {/* Ergebnis */}
                    <div className="mb-6 flex items-start gap-2">
                      <CheckCircle size={18} className="text-[#109387] flex-shrink-0 mt-0.5" />
                      <div>
                        <p className="text-xs text-gray-500 font-semibold uppercase tracking-wide mb-1">
                          Ergebnis
                        </p>
                        <p className="text-[#012956] font-bold">{ref.ergebnis}</p>
                      </div>
                    </div>

                    {/* Zitat */}
                    <div className="mt-auto pt-4 border-t border-gray-100">
                      <div className="flex gap-3">
                        <Quote size={20} className="text-[#109387] flex-shrink-0" />
                        <div>
                          <p className="text-gray-700 font-semibold italic text-sm leading-relaxed mb-2">
                            „{ref.zitat}"
                          </p>
                          <p className="text-gray-500 font-semibold text-sm">
                            — {ref.autor}, {ref.branche}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </article>
              </FadeIn>
            )
          })}
        </div>

        {/* CTA */}
        <FadeIn className="text-center mt-12">
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/referenzen"
              className="inline-flex items-center justify-center gap-3 bg-[#012956] hover:bg-[#01203d] text-white font-bold px-8 py-4 rounded-[6px] transition-all duration-300 group"
            >
              Alle Referenzen ansehen
              <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
            </Link>
            <a
              href="#contact-form"
              className="inline-flex items-center justify-center gap-3 border-2 border-[#109387] text-[#109387] font-bold px-8 py-4 rounded-[6px] hover:bg-[#109387] hover:text-white transition-all"
            >
              Ihr Projekt besprechen
            </a>
          </div>
        </FadeIn>

      </div>
    </section>
  )
}
