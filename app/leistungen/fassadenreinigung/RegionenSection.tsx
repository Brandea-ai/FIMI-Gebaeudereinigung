'use client'

import { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { ArrowRight, MapPin, Check } from 'lucide-react'

const regionen = [
  {
    id: 'landshut',
    name: 'Landshut',
    headline: 'Fassadenreinigung in Landshut',
    text: 'Als Landshuter Unternehmen sind wir schnell bei Ihnen vor Ort. Ob Altstadt, Ergolding oder Achdorf – wir reinigen Fassaden in der gesamten Region.',
    vorteile: ['30 Min. Anfahrt', 'Lokale Teams', 'Schnelle Termine'],
  },
  {
    id: 'muenchen',
    name: 'München',
    headline: 'Fassadenreinigung in München',
    text: 'Professionelle Fassadenreinigung in der Landeshauptstadt. Von Schwabing bis Pasing, von Bogenhausen bis Sendling – wir kennen München.',
    vorteile: ['Großstadt-Erfahrung', 'Flexible Zeiten', 'Wochenend-Service'],
  },
  {
    id: 'regensburg',
    name: 'Regensburg',
    headline: 'Fassadenreinigung in Regensburg',
    text: 'Von der UNESCO-Altstadt bis zum Gewerbepark: Wir reinigen Fassaden in Regensburg schonend und professionell.',
    vorteile: ['Denkmalschutz-Erfahrung', 'Schnell via A3', 'Qualitätskontrolle'],
  },
  {
    id: 'ingolstadt',
    name: 'Ingolstadt',
    headline: 'Fassadenreinigung in Ingolstadt',
    text: 'Fassadenreinigung auf Industrieniveau für den Automobilstandort. Wir arbeiten nach den hohen Standards, die hier selbstverständlich sind.',
    vorteile: ['Industrie-Erfahrung', 'ISO-Standards', 'Flexible Schichten'],
  },
  {
    id: 'freising',
    name: 'Freising',
    headline: 'Fassadenreinigung in Freising',
    text: 'Fassadenreinigung im Landkreis Freising – von der Innenstadt bis zum Flughafen München. Zuverlässig und termingerecht.',
    vorteile: ['Airport-Nähe', 'Schnelle Termine', 'Umweltschonend'],
  },
  {
    id: 'passau',
    name: 'Passau',
    headline: 'Fassadenreinigung in Passau',
    text: 'Fassadenreinigung in der Dreiflüssestadt und Umgebung. Unser östlichster Standort in Bayern – bis zur österreichischen Grenze.',
    vorteile: ['Bis zur Grenze', 'Hotel-Erfahrung', 'Mehrsprachig'],
  },
]

export default function RegionenSection() {
  const [activeRegion, setActiveRegion] = useState(regionen[0])

  return (
    <section id="regionen" className="py-12 sm:py-16 lg:py-28 bg-[#f8f9fa]">
      <div className="w-full max-w-[1800px] mx-auto px-4 sm:px-6 md:px-8 lg:px-12 xl:px-20">

        {/* Header */}
        <div className="max-w-3xl mb-8 sm:mb-12 lg:mb-16">
          <span className="text-[#109387] font-bold text-xs sm:text-sm uppercase tracking-wide mb-3 sm:mb-4 block">
            In ganz Bayern
          </span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-[#012956] leading-tight mb-4 sm:mb-6">
            Fassadenreinigung in Ihrer Nähe
          </h2>
          <p className="text-base sm:text-lg text-gray-600 font-semibold leading-relaxed">
            Von Landshut aus bedienen wir ganz Bayern. Unsere Teams sind in allen
            größeren Städten vor Ort und kennen die regionalen Besonderheiten.
          </p>
        </div>

        {/* Grid */}
        <div className="grid lg:grid-cols-2 gap-6 lg:gap-10">

          {/* Karte */}
          <div className="relative">
            <Image
              src="/images/home/staedte-fimi.avif"
              alt="Bayern Karte - FIMI Fassadenreinigung Servicegebiete"
              width={1200}
              height={900}
              className="w-full rounded-[6px]"
            />

            {/* City Buttons on Map - Mobile: unter der Karte */}
            <div className="flex flex-wrap gap-2 mt-4 lg:hidden">
              {regionen.map((region) => (
                <button
                  key={region.id}
                  onClick={() => setActiveRegion(region)}
                  className={`px-3 py-1.5 rounded-[4px] font-bold text-sm transition-all ${
                    activeRegion.id === region.id
                      ? 'bg-[#012956] text-white'
                      : 'bg-white text-[#012956] border border-[#012956]'
                  }`}
                >
                  {region.name}
                </button>
              ))}
            </div>
          </div>

          {/* Content Panel */}
          <div>
            {/* Desktop: City Tabs */}
            <div className="hidden lg:flex flex-wrap gap-2 mb-6">
              {regionen.map((region) => (
                <button
                  key={region.id}
                  onClick={() => setActiveRegion(region)}
                  className={`px-4 py-2 rounded-[6px] font-bold text-sm transition-all ${
                    activeRegion.id === region.id
                      ? 'bg-[#012956] text-white'
                      : 'bg-white text-[#012956] border-2 border-[#012956] hover:bg-[#012956] hover:text-white'
                  }`}
                >
                  {region.name}
                </button>
              ))}
            </div>

            {/* Active Region Content */}
            <div className="bg-white rounded-[6px] p-5 sm:p-6 lg:p-8">
              <div className="flex items-center gap-2 text-[#109387] mb-4">
                <MapPin className="w-5 h-5" />
                <span className="font-bold text-sm uppercase tracking-wide">Standort</span>
              </div>

              <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold text-[#012956] mb-3">
                {activeRegion.headline}
              </h3>

              <p className="text-gray-600 font-semibold leading-relaxed mb-6 text-sm sm:text-base">
                {activeRegion.text}
              </p>

              {/* Vorteile */}
              <div className="flex flex-wrap gap-3 mb-6">
                {activeRegion.vorteile.map((vorteil, index) => (
                  <div
                    key={index}
                    className="flex items-center gap-2 bg-[#f8f9fa] px-3 py-2 rounded-[4px]"
                  >
                    <Check className="w-4 h-4 text-[#109387]" strokeWidth={2.5} />
                    <span className="text-gray-700 font-semibold text-sm">{vorteil}</span>
                  </div>
                ))}
              </div>

              {/* CTA */}
              <a
                href="#kontakt"
                className="inline-flex items-center gap-2 bg-[#109387] hover:bg-[#0d7d72] text-white font-bold px-6 py-3 rounded-[6px] transition-colors group"
              >
                Standort anfragen
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </a>
            </div>

            {/* Alle Standorte Link */}
            <Link
              href="/"
              className="flex items-center justify-between mt-4 bg-[#012956] text-white px-5 py-4 rounded-[6px] group hover:bg-[#01203d] transition-colors"
            >
              <span className="font-bold">Alle 8 Standorte ansehen</span>
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>

        </div>

      </div>
    </section>
  )
}
