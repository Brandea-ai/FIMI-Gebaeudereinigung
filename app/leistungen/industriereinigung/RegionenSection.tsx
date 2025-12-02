'use client'

import { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { ArrowRight, MapPin, Clock, CheckCircle } from 'lucide-react'
import FadeIn from '@/components/FadeIn'

const regionen = [
  {
    id: 'landshut',
    name: 'Landshut',
    badge: 'Hauptsitz',
    beschreibung: 'Unser Hauptstandort mit schnellster Reaktionszeit. Industriegebiete Ergolding, Kumhausen und Altdorf im Fokus.',
    anfahrt: '< 30 Min',
    schwerpunkte: ['BMW Zulieferer', 'Metallverarbeitung', 'Lebensmittelproduktion'],
  },
  {
    id: 'muenchen',
    name: 'München',
    badge: null,
    beschreibung: 'Industriereinigung im Großraum München. Werksviertel, Münchner Norden, Flughafen-Region.',
    anfahrt: '< 60 Min',
    schwerpunkte: ['High-Tech Produktion', 'Pharma', 'Automotive'],
  },
  {
    id: 'ingolstadt',
    name: 'Ingolstadt',
    badge: 'Automotive Hub',
    beschreibung: 'Spezialisiert auf Audi-Zulieferer und Automotive-Industrie. Wir kennen die Audit-Anforderungen.',
    anfahrt: '< 45 Min',
    schwerpunkte: ['Audi Zulieferer', 'Automotive', 'Maschinenbau'],
  },
  {
    id: 'regensburg',
    name: 'Regensburg',
    badge: null,
    beschreibung: 'Industriereinigung im Gewerbepark Regensburg und Umgebung. Continental, BMW, Osram.',
    anfahrt: '< 60 Min',
    schwerpunkte: ['Elektronik', 'Automotive', 'Logistik'],
  },
  {
    id: 'dingolfing',
    name: 'Dingolfing',
    badge: 'BMW Werk',
    beschreibung: 'Direkte Nähe zum BMW Werk. Erfahrung mit Zulieferern und deren strengen Anforderungen.',
    anfahrt: '< 30 Min',
    schwerpunkte: ['BMW Zulieferer', 'Automotive', 'Metallverarbeitung'],
  },
  {
    id: 'straubing',
    name: 'Straubing',
    badge: null,
    beschreibung: 'Industriereinigung im Hafen Straubing und dem Gäuboden. Logistik und Produktion.',
    anfahrt: '< 45 Min',
    schwerpunkte: ['Logistik', 'Lebensmittel', 'Hafenindustrie'],
  },
  {
    id: 'passau',
    name: 'Passau',
    badge: null,
    beschreibung: 'Industriereinigung bis zur österreichischen Grenze. Auch grenzüberschreitende Einsätze möglich.',
    anfahrt: '< 90 Min',
    schwerpunkte: ['Maschinenbau', 'Holzverarbeitung', 'Logistik'],
  },
  {
    id: 'freising',
    name: 'Freising / Erding',
    badge: 'Flughafen-Region',
    beschreibung: 'Industriereinigung nahe Flughafen München. Logistikzentren, Produktion, High-Tech.',
    anfahrt: '< 60 Min',
    schwerpunkte: ['Logistik', 'High-Tech', 'Forschung'],
  },
]

export default function RegionenSection() {
  const [activeRegion, setActiveRegion] = useState(regionen[0])

  return (
    <section id="regionen" className="py-20 lg:py-28 bg-white" aria-labelledby="regionen-heading">
      <div className="w-full max-w-[1800px] mx-auto px-6 lg:px-12 xl:px-20">

        {/* Section Header */}
        <FadeIn className="text-center mb-12">
          <p className="text-sm text-[#109387] font-semibold uppercase tracking-wide mb-3">
            Unser Einsatzgebiet
          </p>
          <h2
            id="regionen-heading"
            className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#012956] leading-[1.1] mb-6"
          >
            Industriereinigung in ganz Bayern
          </h2>
          <p className="text-lg text-gray-700 font-semibold leading-relaxed max-w-2xl mx-auto">
            Von Landshut aus betreuen wir Industriekunden in ganz Bayern.
            Kurze Anfahrtswege, schnelle Reaktionszeiten.
          </p>
        </FadeIn>

        {/* Region Tabs */}
        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {regionen.map((region) => (
            <button
              key={region.id}
              onClick={() => setActiveRegion(region)}
              className={`px-4 py-2 rounded-[6px] font-bold text-sm transition-all duration-300 ${
                activeRegion.id === region.id
                  ? 'bg-[#012956] text-white'
                  : 'bg-[#f8f9fa] text-[#012956] hover:bg-[#012956] hover:text-white'
              }`}
            >
              {region.name}
              {region.badge && (
                <span className={`ml-2 text-xs px-2 py-0.5 rounded-full ${
                  activeRegion.id === region.id
                    ? 'bg-[#109387] text-white'
                    : 'bg-[#109387]/20 text-[#109387]'
                }`}>
                  {region.badge}
                </span>
              )}
            </button>
          ))}
        </div>

        {/* Content Grid */}
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">

          {/* Map Image */}
          <FadeIn direction="left">
            <div className="relative">
              <Image
                src="/images/home/staedte-fimi.avif"
                alt="Bayern Karte - FIMI Industriereinigung Einsatzgebiet"
                width={4800}
                height={3584}
                className="w-full h-auto rounded-[6px]"
              />

              {/* Overlay Badge */}
              <div className="absolute bottom-4 left-4 right-4 bg-[#012956] rounded-[6px] p-4 flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <MapPin size={24} className="text-[#109387]" />
                  <div>
                    <p className="text-white font-bold">Hauptsitz Landshut</p>
                    <p className="text-white/70 text-sm font-semibold">Kellerstr. 39, 84036 Landshut</p>
                  </div>
                </div>
                <div className="hidden sm:flex items-center gap-2 bg-[#109387] px-4 py-2 rounded-[6px]">
                  <Clock size={16} className="text-white" />
                  <span className="text-white font-bold text-sm">2h Notfall</span>
                </div>
              </div>
            </div>
          </FadeIn>

          {/* Region Details */}
          <FadeIn direction="right">
            <div className="bg-[#f8f9fa] rounded-[6px] p-8">
              <div className="flex items-center gap-3 mb-4">
                <MapPin size={24} className="text-[#109387]" />
                <h3 className="text-2xl lg:text-3xl font-bold text-[#012956]">
                  Industriereinigung {activeRegion.name}
                </h3>
              </div>

              <p className="text-gray-700 font-semibold leading-relaxed mb-6">
                {activeRegion.beschreibung}
              </p>

              {/* Anfahrt */}
              <div className="flex items-center gap-3 mb-6 bg-white rounded-[6px] p-4">
                <Clock size={20} className="text-[#109387]" />
                <div>
                  <p className="text-sm text-gray-500 font-semibold">Anfahrtszeit von Landshut</p>
                  <p className="text-[#012956] font-bold text-lg">{activeRegion.anfahrt}</p>
                </div>
              </div>

              {/* Schwerpunkte */}
              <div className="mb-8">
                <p className="text-sm text-gray-500 font-semibold uppercase tracking-wide mb-3">
                  Branchen-Schwerpunkte in {activeRegion.name}
                </p>
                <div className="flex flex-wrap gap-2">
                  {activeRegion.schwerpunkte.map((schwerpunkt, index) => (
                    <span
                      key={index}
                      className="bg-[#109387]/10 text-[#109387] font-bold text-sm px-3 py-1.5 rounded-[6px]"
                    >
                      {schwerpunkt}
                    </span>
                  ))}
                </div>
              </div>

              {/* Vorteile */}
              <div className="space-y-3 mb-8">
                {[
                  'Schnelle Reaktionszeit bei Notfällen',
                  'Lokale Teams kennen Ihre Region',
                  'Flexible Einsatzzeiten',
                ].map((vorteil, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <CheckCircle size={18} className="text-[#109387]" />
                    <span className="text-gray-700 font-semibold">{vorteil}</span>
                  </div>
                ))}
              </div>

              {/* CTA */}
              <a
                href="#contact-form"
                className="flex items-center justify-center gap-3 bg-[#109387] hover:bg-[#0d7d72] text-white font-bold text-lg px-8 py-4 rounded-[6px] transition-all duration-300 group w-full"
              >
                Anfrage für {activeRegion.name}
                <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
              </a>
            </div>
          </FadeIn>

        </div>

        {/* Service Links */}
        <FadeIn className="mt-12 pt-8 border-t border-gray-200">
          <p className="text-center text-sm text-gray-500 font-semibold uppercase tracking-wide mb-4">
            Weitere Industriereinigung-Leistungen
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            {[
              { name: 'Hallenreinigung', href: '/leistungen/hallenreinigung' },
              { name: 'Maschinenreinigung', href: '/leistungen/maschinenreinigung' },
              { name: 'Tiefgaragenreinigung', href: '/leistungen/tiefgaragenreinigung' },
              { name: 'Baureinigung', href: '/leistungen/baureinigung' },
            ].map((service) => (
              <Link
                key={service.href}
                href={service.href}
                className="flex items-center gap-2 text-[#109387] font-bold hover:text-[#012956] transition-colors"
              >
                <ArrowRight size={14} />
                {service.name}
              </Link>
            ))}
          </div>
        </FadeIn>

      </div>
    </section>
  )
}
