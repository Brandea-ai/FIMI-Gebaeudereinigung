'use client'

import Image from 'next/image'
import Link from 'next/link'
import { ArrowRight, Phone, ClipboardCheck, FileText, Sparkles } from 'lucide-react'

const schritte = [
  {
    nummer: '01',
    icon: Phone,
    titel: 'Kontakt',
    beschreibung: 'Sie melden sich - wir antworten innerhalb von 2 Stunden. Egal ob per Telefon, E-Mail oder Kontaktformular.',
  },
  {
    nummer: '02',
    icon: ClipboardCheck,
    titel: 'Analyse',
    beschreibung: 'Wir schauen uns Ihre Räume an und verstehen was Sie brauchen. Kostenlos und unverbindlich.',
  },
  {
    nummer: '03',
    icon: FileText,
    titel: 'Angebot',
    beschreibung: 'Sie erhalten ein transparentes Angebot ohne versteckte Kosten. Was drinsteht, gilt.',
  },
  {
    nummer: '04',
    icon: Sparkles,
    titel: 'Umsetzung',
    beschreibung: 'Ihr festes Team startet. Sie lehnen sich zurück und genießen saubere Räume.',
  },
]

export default function ProcessContainer() {
  return (
    <section className="bg-[#f8f9fa]" aria-labelledby="process-heading">
      <div className="w-full max-w-[1800px] mx-auto">

        {/* Two Column Layout: Content Left, Image Right */}
        <div className="grid lg:grid-cols-2">

          {/* Left: Content */}
          <div className="px-6 lg:px-12 xl:px-20 py-16 lg:py-20 flex flex-col justify-center order-2 lg:order-1">

            {/* Header */}
            <div className="mb-10">
              <p className="text-sm text-gray-500 font-semibold uppercase tracking-wide mb-3">
                So funktioniert's
              </p>
              <h2
                id="process-heading"
                className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#109387] leading-[1.1] mb-6"
              >
                In 4 Schritten zu sauberen Räumen
              </h2>
              <p className="text-lg text-gray-700 font-semibold leading-relaxed">
                Kein komplizierter Prozess. Kein Papierkram. Sie sagen was Sie brauchen,
                wir kümmern uns um den Rest.
              </p>
            </div>

            {/* 4 Schritte */}
            <div className="space-y-6 mb-10">
              {schritte.map((schritt) => {
                const Icon = schritt.icon
                return (
                  <div
                    key={schritt.nummer}
                    className="flex gap-4 items-start"
                  >
                    {/* Nummer + Icon */}
                    <div className="flex-shrink-0 w-14 h-14 bg-[#012956] rounded-[6px] flex items-center justify-center relative">
                      <Icon size={24} className="text-white" strokeWidth={1.5} />
                      <span className="absolute -top-2 -right-2 w-6 h-6 bg-[#109387] rounded-full text-white text-xs font-bold flex items-center justify-center">
                        {schritt.nummer}
                      </span>
                    </div>

                    {/* Text */}
                    <div className="flex-1 pt-1">
                      <h3 className="text-lg font-bold text-[#012956] mb-1">
                        {schritt.titel}
                      </h3>
                      <p className="text-gray-700 font-semibold leading-relaxed">
                        {schritt.beschreibung}
                      </p>
                    </div>
                  </div>
                )
              })}
            </div>

            {/* CTA */}
            <a
              href="#contact-form"
              className="inline-flex items-center justify-center gap-3 bg-[#109387] hover:bg-[#0d7d72] text-white font-bold text-lg px-8 py-4 rounded-[6px] transition-all duration-300 group w-full lg:w-auto"
            >
              Kostenfreie Besichtigung
              <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
            </a>

            {/* Subtiler Referenzen-Link */}
            <div className="mt-8 pt-6 border-t border-gray-200">
              <Link
                href="/referenzen"
                className="inline-flex items-center gap-2 text-gray-500 font-semibold hover:text-[#109387] transition-colors group"
              >
                Was unsere Kunden sagen
                <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </div>

          {/* Right: Full Height Image - Person mit Blickkontakt */}
          <div className="relative h-[400px] lg:h-auto lg:min-h-[700px] order-1 lg:order-2">
            <Image
              src="https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=1200&auto=format&fit=crop"
              alt="Ihr Ansprechpartner bei FIMI Gebäudereinigung"
              fill
              className="object-cover object-center"
              priority
            />
          </div>

        </div>

      </div>
    </section>
  )
}
