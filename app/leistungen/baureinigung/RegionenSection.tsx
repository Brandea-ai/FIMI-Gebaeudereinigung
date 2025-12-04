'use client'

import { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { ArrowRight, MapPin, Clock, CheckCircle } from 'lucide-react'

const regionen = [
  {
    id: 'landshut',
    name: 'Landshut',
    headline: 'Baureinigung in Landshut',
    beschreibung: 'Als Landshuter Unternehmen sind wir besonders schnell vor Ort. Ob Neubau im Industriegebiet Ergolding, Wohnanlage in der Altstadt oder Gewerbeobjekt am Stadtrand – wir kennen die Region und ihre Bauprojekte.',
    vorteile: ['Anfahrt unter 30 Minuten', 'Lokale Teams', 'Notfall-Service in 2h'],
  },
  {
    id: 'muenchen',
    name: 'München',
    headline: 'Baureinigung in München',
    beschreibung: 'Professionelle Baureinigung in der Landeshauptstadt. Wir reinigen Neubauten im Werksviertel, Sanierungen in Schwabing und Gewerbeprojekte im Münchner Norden – termingerecht und in höchster Qualität.',
    vorteile: ['Erfahrung mit Großprojekten', 'Flexible Einsatzzeiten', 'Wochenend-Service'],
  },
  {
    id: 'regensburg',
    name: 'Regensburg',
    headline: 'Baureinigung in Regensburg',
    beschreibung: 'Baureinigung in Regensburg und Umgebung. Von der Altstadt bis zum Gewerbepark Regensburg-Ost – wir bringen Ihre Bauprojekte termingerecht zur bezugsfertigen Übergabe.',
    vorteile: ['Schnell erreichbar über A3', 'Industriereinigung Gewerbepark', 'Qualitätskontrollen'],
  },
  {
    id: 'ingolstadt',
    name: 'Ingolstadt',
    headline: 'Baureinigung in Ingolstadt',
    beschreibung: 'Baureinigung auf Industrieniveau für den Automobilstandort Ingolstadt. Wir arbeiten nach den hohen Standards, die hier erwartet werden – für Zulieferer, Bürokomplexe und Wohnprojekte.',
    vorteile: ['Automotive-Erfahrung', 'ISO-Standards', 'Schichtbetrieb möglich'],
  },
  {
    id: 'freising',
    name: 'Freising',
    headline: 'Baureinigung in Freising',
    beschreibung: 'Baureinigung in Freising und dem gesamten Landkreis. Die Nähe zum Flughafen München bedeutet viele Gewerbeprojekte – wir sind der richtige Partner für termingerechte Bauendreinigung.',
    vorteile: ['Flughafen-Region', 'Gewerbeobjekte', 'Kurzfristig verfügbar'],
  },
  {
    id: 'passau',
    name: 'Passau',
    headline: 'Baureinigung in Passau',
    beschreibung: 'Baureinigung in der Dreiflüssestadt und bis zur österreichischen Grenze. Wir reinigen Neubauten und Sanierungsobjekte in Passau und dem gesamten Landkreis.',
    vorteile: ['Bis zur Grenze Österreich', 'Hotellerie-Erfahrung', 'Mehrsprachige Teams'],
  },
]

export default function RegionenSection() {
  const [activeRegion, setActiveRegion] = useState(regionen[0])

  return (
    <section id="regionen" className="py-12 sm:py-16 lg:py-28 bg-white">
      <div className="w-full max-w-[1800px] mx-auto px-4 sm:px-6 md:px-8 lg:px-12 xl:px-20">

        {/* Header */}
        <div className="max-w-4xl mb-10 sm:mb-14 lg:mb-16">
          <p className="text-xs sm:text-sm text-[#109387] font-bold uppercase tracking-wide mb-2 sm:mb-3">
            Unsere Einsatzgebiete
          </p>
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-[#012956] leading-[1.1] mb-4 sm:mb-6">
            Baureinigung in ganz Bayern
          </h2>
          <p className="text-sm sm:text-base lg:text-lg text-gray-700 font-semibold leading-relaxed">
            Von Landshut aus sind wir in ganz Niederbayern, Oberbayern und der Oberpfalz für Sie im Einsatz.
            Ob Großprojekt in München oder Einfamilienhaus im Landkreis – wir kommen zu Ihnen.
          </p>
        </div>

        {/* Two Column Layout */}
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-start">

          {/* Left: Map Image */}
          <div className="relative">
            <div className="relative h-[300px] sm:h-[400px] lg:h-[500px] rounded-[6px] overflow-hidden">
              <Image
                src="/images/home/staedte-fimi.avif"
                alt="FIMI Baureinigung Einsatzgebiete in Bayern"
                fill
                className="object-contain"
              />
            </div>

            {/* Stats unterhalb */}
            <div className="grid grid-cols-3 gap-4 mt-6">
              <div className="text-center p-4 bg-[#f8f9fa] rounded-[6px]">
                <div className="text-2xl sm:text-3xl font-bold text-[#109387]">8</div>
                <div className="text-xs sm:text-sm font-semibold text-gray-600">Standorte</div>
              </div>
              <div className="text-center p-4 bg-[#f8f9fa] rounded-[6px]">
                <div className="text-2xl sm:text-3xl font-bold text-[#109387]">100km</div>
                <div className="text-xs sm:text-sm font-semibold text-gray-600">Radius</div>
              </div>
              <div className="text-center p-4 bg-[#f8f9fa] rounded-[6px]">
                <div className="text-2xl sm:text-3xl font-bold text-[#109387]">2h</div>
                <div className="text-xs sm:text-sm font-semibold text-gray-600">Reaktionszeit</div>
              </div>
            </div>
          </div>

          {/* Right: Region Tabs + Content */}
          <div>
            {/* Tabs */}
            <div className="flex flex-wrap gap-2 mb-6">
              {regionen.map((region) => (
                <button
                  key={region.id}
                  onClick={() => setActiveRegion(region)}
                  className={`px-4 py-2 rounded-[6px] border-2 font-bold text-sm transition-all ${
                    activeRegion.id === region.id
                      ? 'border-[#109387] bg-[#109387] text-white'
                      : 'border-[#012956] bg-white text-[#012956] hover:bg-[#f8f9fa]'
                  }`}
                >
                  {region.name}
                </button>
              ))}
            </div>

            {/* Content Panel */}
            <div className="bg-[#f8f9fa] rounded-[6px] p-5 sm:p-6 lg:p-8">
              <div className="flex items-center gap-2 mb-3">
                <MapPin className="w-5 h-5 text-[#109387]" />
                <span className="text-[#109387] font-bold text-sm uppercase tracking-wide">
                  {activeRegion.name}
                </span>
              </div>

              <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold text-[#012956] mb-4">
                {activeRegion.headline}
              </h3>

              <p className="text-gray-700 font-semibold leading-relaxed mb-6">
                {activeRegion.beschreibung}
              </p>

              {/* Vorteile */}
              <div className="mb-6">
                <h4 className="text-sm text-gray-500 font-bold uppercase tracking-wide mb-3">
                  Ihre Vorteile in {activeRegion.name}
                </h4>
                <ul className="space-y-2">
                  {activeRegion.vorteile.map((vorteil, index) => (
                    <li key={index} className="flex items-center gap-2">
                      <CheckCircle className="w-5 h-5 text-[#109387] flex-shrink-0" />
                      <span className="text-gray-700 font-semibold">{vorteil}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* CTA */}
              <Link
                href="#kontakt"
                className="inline-flex items-center gap-2 bg-[#109387] hover:bg-[#0d7d72] text-white font-bold px-6 py-3 rounded-[6px] transition-colors group w-full justify-center sm:w-auto"
              >
                Baureinigung in {activeRegion.name} anfragen
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>

            {/* Note */}
            <p className="mt-4 text-sm text-gray-500 font-semibold">
              <Clock className="w-4 h-4 inline-block mr-1" />
              Auch außerhalb dieser Städte sind wir für Sie da – sprechen Sie uns an.
            </p>
          </div>

        </div>

      </div>
    </section>
  )
}
