'use client'

import Image from 'next/image'
import Link from 'next/link'
import { ArrowRight, Building2, Bath, Coffee, Footprints, DoorOpen, Sofa, Trash2, Sparkles } from 'lucide-react'

const reinigungsbereiche = [
  {
    icon: Building2,
    titel: 'Büroflächen',
    beschreibung: 'Arbeitsplätze, Schreibtische, Bildschirme, Tastaturen und Telefone – hygienisch rein für produktives Arbeiten.',
  },
  {
    icon: Bath,
    titel: 'Sanitäranlagen',
    beschreibung: 'WC-Anlagen, Waschbecken, Spiegel und Armaturen. Desinfektion und Auffüllen von Verbrauchsmaterialien.',
  },
  {
    icon: Coffee,
    titel: 'Teeküchen & Pausenräume',
    beschreibung: 'Küchenzeilen, Kühlschränke, Mikrowellen und Kaffeemaschinen. Dort wo Ihr Team Energie tankt.',
  },
  {
    icon: Footprints,
    titel: 'Böden & Bodenbeläge',
    beschreibung: 'Teppichböden saugen, Hartböden wischen, Laminat pflegen. Jeder Belag bekommt die richtige Behandlung.',
  },
  {
    icon: DoorOpen,
    titel: 'Empfang & Eingangsbereiche',
    beschreibung: 'Der erste Eindruck zählt. Eingangsmatten, Glasflächen, Türklinken – immer repräsentativ.',
  },
  {
    icon: Sofa,
    titel: 'Besprechungs- & Konferenzräume',
    beschreibung: 'Tische, Stühle, Präsentationstechnik. Damit Ihre Meetings im besten Licht stattfinden.',
  },
  {
    icon: Trash2,
    titel: 'Müllentsorgung',
    beschreibung: 'Papierkörbe leeren, Mülltrennung, Entsorgung. Ordnung ohne dass Sie daran denken müssen.',
  },
  {
    icon: Sparkles,
    titel: 'Oberflächenpflege',
    beschreibung: 'Staubwischen, Regale, Fensterbänke, Heizkörper. Jede Oberfläche bekommt Aufmerksamkeit.',
  },
]

const intervalle = [
  { kuerzel: 'T', name: 'Täglich', beschreibung: 'Für stark frequentierte Bereiche', ideal: 'Praxen, Einzelhandel, Gastronomie' },
  { kuerzel: '3', name: '3x pro Woche', beschreibung: 'Der goldene Mittelweg', ideal: 'Büros, Agenturen, Kanzleien' },
  { kuerzel: 'W', name: 'Wöchentlich', beschreibung: 'Für weniger genutzte Räume', ideal: 'Lager, Archiv, Nebenflächen' },
  { kuerzel: 'N', name: 'Nach Bedarf', beschreibung: 'Flexibel und individuell', ideal: 'Projektbüros, Coworking' },
]

export default function LeistungsumfangSection() {
  return (
    <section id="leistungen" className="py-20 lg:py-28 bg-white">
      <div className="w-full max-w-[1800px] mx-auto px-6 lg:px-12 xl:px-20">

        {/* Section Header */}
        <div className="max-w-4xl mb-16 lg:mb-20">
          <p className="text-sm text-[#109387] font-bold uppercase tracking-wide mb-3">
            Was wir reinigen
          </p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#012956] leading-[1.1] mb-6">
            Diese Bereiche reinigen wir
          </h2>
          <p className="text-lg text-gray-700 font-semibold leading-relaxed">
            Büroreinigung ist mehr als nur Staubwischen. Wir kümmern uns um alle Bereiche,
            die Ihr Team täglich nutzt – von der Arbeitsfläche bis zur Teeküche.
          </p>
        </div>

        {/* Reinigungsbereiche Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-20 lg:mb-28">
          {reinigungsbereiche.map((bereich) => {
            const Icon = bereich.icon
            return (
              <div
                key={bereich.titel}
                className="group bg-[#f8f9fa] p-6 rounded-[6px] hover:bg-[#012956] transition-all duration-300"
              >
                <div className="w-12 h-12 bg-[#109387]/10 rounded-[6px] flex items-center justify-center mb-4 group-hover:bg-[#109387]/20 transition-colors">
                  <Icon size={24} className="text-[#109387]" />
                </div>
                <h4 className="text-lg font-bold text-[#012956] group-hover:text-white mb-2 transition-colors">
                  {bereich.titel}
                </h4>
                <p className="text-gray-600 font-semibold text-sm leading-relaxed group-hover:text-white/80 transition-colors">
                  {bereich.beschreibung}
                </p>
              </div>
            )
          })}
        </div>

        {/* Intervalle Section */}
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center mb-16">
          {/* Content */}
          <div>
            <h3 className="text-2xl lg:text-3xl font-bold text-[#012956] mb-6">
              Reinigungsintervalle nach Ihrem Bedarf
            </h3>
            <p className="text-gray-700 font-semibold leading-relaxed mb-8">
              Nicht jeder Raum braucht tägliche Reinigung. Wir erstellen gemeinsam mit Ihnen
              einen Reinigungsplan der Sinn macht – für Ihre Räume und für Ihr Budget.
            </p>
            <div className="space-y-4">
              {intervalle.map((intervall) => (
                <div
                  key={intervall.name}
                  className="flex items-start gap-4 p-4 bg-[#f8f9fa] rounded-[6px]"
                >
                  <div className="w-10 h-10 bg-[#109387] rounded-[6px] flex items-center justify-center flex-shrink-0">
                    <span className="text-white font-bold text-sm">
                      {intervall.kuerzel}
                    </span>
                  </div>
                  <div>
                    <h4 className="font-bold text-[#012956]">{intervall.name}</h4>
                    <p className="text-gray-600 font-semibold text-sm">{intervall.beschreibung}</p>
                    <p className="text-[#109387] font-semibold text-sm mt-1">Ideal für: {intervall.ideal}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Image */}
          <div className="relative h-[400px] lg:h-[500px] rounded-[12px] overflow-hidden">
            <Image
              src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?q=80&w=2670&auto=format&fit=crop"
              alt="Besprechung Reinigungsplan - Team bei der Arbeit"
              fill
              className="object-cover"
            />
          </div>
        </div>

        {/* Spezielles CTA Block - Ganz klickbar */}
        <Link
          href="/leistungen"
          className="block bg-[#012956] rounded-[6px] p-8 lg:p-12 hover:bg-[#01203d] transition-colors group"
        >
          <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6">
            <div>
              <h3 className="text-xl lg:text-2xl font-bold text-white mb-2">
                Sie brauchen etwas Spezielles?
              </h3>
              <p className="text-white/70 font-semibold">
                Grundreinigung, Baureinigung, Sonderreinigung – wir haben für jeden Bedarf die passende Lösung.
              </p>
            </div>
            <div className="inline-flex items-center justify-center gap-2 bg-[#109387] group-hover:bg-[#0d7d72] text-white font-bold px-6 py-3 rounded-[6px] transition-colors whitespace-nowrap">
              Alle 18 Leistungen ansehen
              <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
            </div>
          </div>
        </Link>

      </div>
    </section>
  )
}
