'use client'

import Image from 'next/image'
import { ArrowRight, Phone, ClipboardCheck, FileText, Users } from 'lucide-react'

const schritte = [
  {
    nummer: '01',
    icon: Phone,
    titel: 'Kontakt aufnehmen',
    beschreibung: 'Rufen Sie an oder schreiben Sie uns. Innerhalb von 2 Stunden melden wir uns bei Ihnen zurück.',
  },
  {
    nummer: '02',
    icon: ClipboardCheck,
    titel: 'Kostenlose Besichtigung',
    beschreibung: 'Wir schauen uns Ihre Räume an, verstehen Ihre Anforderungen und erstellen ein maßgeschneidertes Konzept.',
  },
  {
    nummer: '03',
    icon: FileText,
    titel: 'Transparentes Angebot',
    beschreibung: 'Sie erhalten ein Festpreisangebot ohne versteckte Kosten. Was drinsteht, gilt – garantiert.',
  },
  {
    nummer: '04',
    icon: Users,
    titel: 'Ihr festes Team startet',
    beschreibung: 'Wir stellen Ihnen Ihr Reinigungsteam vor. Ab jetzt kümmern wir uns – Sie lehnen sich zurück.',
  },
]

export default function ProcessSection() {
  return (
    <section className="bg-[#f8f9fa]">
      <div className="w-full max-w-[1800px] mx-auto">

        {/* Two Column Layout */}
        <div className="grid lg:grid-cols-2">

          {/* Left: Content */}
          <div className="px-6 lg:px-12 xl:px-20 py-20 lg:py-28 flex flex-col justify-center order-2 lg:order-1">

            {/* Header */}
            <div className="mb-12">
              <p className="text-sm text-[#109387] font-bold uppercase tracking-wide mb-3">
                So starten wir
              </p>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#012956] leading-[1.1] mb-6">
                In 4 Schritten zu Ihrer Unterhaltsreinigung
              </h2>
              <p className="text-lg text-gray-700 font-semibold leading-relaxed">
                Kein komplizierter Prozess. Keine langen Verträge am Anfang.
                Erst wenn Sie zufrieden sind, machen wir weiter.
              </p>
            </div>

            {/* 4 Schritte */}
            <div className="space-y-6 mb-12">
              {schritte.map((schritt) => {
                const Icon = schritt.icon
                return (
                  <div key={schritt.nummer} className="flex gap-4 items-start">
                    <div className="flex-shrink-0 w-14 h-14 bg-[#012956] rounded-[6px] flex items-center justify-center relative">
                      <Icon size={24} className="text-white" strokeWidth={1.5} />
                      <span className="absolute -top-2 -right-2 w-6 h-6 bg-[#109387] rounded-full text-white text-xs font-bold flex items-center justify-center">
                        {schritt.nummer}
                      </span>
                    </div>
                    <div className="flex-1 pt-1">
                      <h3 className="text-lg font-bold text-[#012956] mb-1">{schritt.titel}</h3>
                      <p className="text-gray-600 font-semibold leading-relaxed">{schritt.beschreibung}</p>
                    </div>
                  </div>
                )
              })}
            </div>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="#contact-form"
                className="inline-flex items-center justify-center gap-3 bg-[#109387] hover:bg-[#0d7d72] text-white font-bold text-lg px-8 py-4 rounded-[6px] transition-all duration-300 group"
              >
                Jetzt Besichtigung anfragen
                <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
              </a>
              <a
                href="tel:+4987143033460"
                className="inline-flex items-center justify-center gap-3 border-2 border-[#012956] text-[#012956] font-bold text-lg px-8 py-4 rounded-[6px] hover:bg-[#012956] hover:text-white transition-all"
              >
                <Phone size={20} />
                0871 430 334 60
              </a>
            </div>
          </div>

          {/* Right: Full Height Image */}
          <div className="relative aspect-[4/3] lg:aspect-auto lg:h-full lg:min-h-[700px] order-1 lg:order-2 overflow-hidden">
            <Image
              src="https://images.unsplash.com/photo-1556761175-5973dc0f32e7?q=80&w=2532&auto=format&fit=crop"
              alt="Professionelle Beratung zur Unterhaltsreinigung"
              fill
              className="object-cover"
            />
          </div>

        </div>

      </div>
    </section>
  )
}
