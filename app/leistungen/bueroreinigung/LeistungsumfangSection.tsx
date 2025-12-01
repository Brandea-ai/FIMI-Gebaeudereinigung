'use client'

import Image from 'next/image'
import {
  Sparkles,
  Droplets,
  Trash2,
  SprayCan,
  Sofa,
  Coffee,
  Wind,
  Layers
} from 'lucide-react'

const leistungen = [
  {
    icon: Layers,
    title: 'Bodenreinigung',
    beschreibung: 'Teppich, Parkett, Fliesen, Linoleum - jeder Bodenbelag professionell gepflegt',
  },
  {
    icon: Sparkles,
    title: 'Staubwischen',
    beschreibung: 'Alle Oberflaechen, Regale, Fensterbretter und schwer erreichbare Stellen',
  },
  {
    icon: SprayCan,
    title: 'Sanitaerreinigung',
    beschreibung: 'WC, Waschbecken, Spiegel - hygienisch rein mit Desinfektion',
  },
  {
    icon: Droplets,
    title: 'Glasreinigung',
    beschreibung: 'Fenster, Glastueren, Trennwaende - streifenfrei und kristallklar',
  },
  {
    icon: Coffee,
    title: 'Kuechen & Teekueche',
    beschreibung: 'Arbeitsflaechen, Geraete, Spuele - hygienisch fuer Ihre Mitarbeiter',
  },
  {
    icon: Trash2,
    title: 'Muellentsorgung',
    beschreibung: 'Papierkoerbe leeren, Muelltrennung, neue Beutel einlegen',
  },
  {
    icon: Wind,
    title: 'Desinfektion',
    beschreibung: 'Tuergriffe, Lichtschalter, Telefone - alle Kontaktflaechen keimfrei',
  },
  {
    icon: Sofa,
    title: 'Polsterreinigung',
    beschreibung: 'Buerostuehle, Sofas im Empfang, Konferenzraummoebel',
  },
]

export default function LeistungsumfangSection() {
  return (
    <section id="leistungen" className="py-20 lg:py-28 bg-white">
      <div className="w-full max-w-[1800px] mx-auto px-6 lg:px-12 xl:px-20">

        <div className="grid lg:grid-cols-[450px_1fr] gap-12 lg:gap-20">

          {/* Sticky Sidebar */}
          <aside className="lg:sticky lg:top-32 lg:self-start">
            <span className="text-[#109387] font-bold text-sm uppercase tracking-wide mb-4 block">
              Leistungsumfang
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#012956] leading-tight mb-6">
              Was unsere Bueroreinigung umfasst
            </h2>
            <p className="text-lg text-gray-600 font-semibold leading-relaxed mb-8">
              Jede Bueroreinigung wird individuell auf Ihre Anforderungen zugeschnitten.
              Diese Leistungen koennen Sie frei kombinieren - taeglich, woechentlich
              oder nach Bedarf.
            </p>

            {/* Image */}
            <div className="relative h-[250px] rounded-[6px] overflow-hidden hidden lg:block">
              <Image
                src="https://images.unsplash.com/photo-1581578731548-c64695cc6952?q=80&w=1600&auto=format&fit=crop"
                alt="Professionelle Reinigungskraft bei der Arbeit"
                fill
                className="object-cover"
              />
            </div>

            <p className="mt-6 text-gray-500 font-semibold text-sm hidden lg:block">
              Alle Leistungen individuell kombinierbar.
              Wir erstellen Ihnen ein massgeschneidertes Angebot.
            </p>
          </aside>

          {/* Service Grid */}
          <div className="grid sm:grid-cols-2 gap-5">
            {leistungen.map((service, index) => (
              <div
                key={index}
                className="bg-[#f8f9fa] rounded-[6px] p-6 hover:bg-[#012956] group transition-all duration-300 cursor-default"
              >
                <div className="w-12 h-12 rounded-[6px] bg-[#109387]/10 group-hover:bg-[#109387]/20 flex items-center justify-center mb-4 transition-colors">
                  <service.icon
                    size={24}
                    className="text-[#109387]"
                    strokeWidth={1.5}
                  />
                </div>
                <h3 className="text-lg font-bold text-[#012956] group-hover:text-white mb-2 transition-colors">
                  {service.title}
                </h3>
                <p className="text-gray-600 group-hover:text-white/70 font-semibold text-sm leading-relaxed transition-colors">
                  {service.beschreibung}
                </p>
              </div>
            ))}
          </div>

        </div>

        {/* Bottom Note */}
        <div className="mt-16 bg-[#012956] rounded-[6px] p-8 lg:p-12">
          <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6">
            <div>
              <h3 className="text-xl lg:text-2xl font-bold text-white mb-2">
                Sie brauchen etwas Spezielles?
              </h3>
              <p className="text-white/70 font-semibold">
                Grundreinigung, Baureinigung, Sonderreinigung - wir haben fuer jeden Bedarf die passende Loesung.
              </p>
            </div>
            <a
              href="/leistungen"
              className="inline-flex items-center justify-center gap-2 bg-[#109387] hover:bg-[#0d7d72] text-white font-bold px-6 py-3 rounded-[6px] transition-colors whitespace-nowrap"
            >
              Alle Leistungen ansehen
            </a>
          </div>
        </div>

      </div>
    </section>
  )
}
