'use client'

import { useState } from 'react'
import Image from 'next/image'
import { MapPin, CheckCircle, ChevronLeft, ChevronRight, ArrowRight } from 'lucide-react'

const regionen = [
  {
    id: 'landshut',
    name: 'Landshut',
    image: '/images/leistungen/unterhaltsreinigung/region-landshut.avif',
    headline: 'Baureinigung in Landshut',
    beschreibung: 'Als Landshuter Unternehmen sind wir besonders schnell vor Ort. Ob Neubau im Industriegebiet Ergolding, Wohnanlage in der Altstadt oder Gewerbeobjekt am Stadtrand – wir kennen die Region und ihre Bauprojekte.',
    vorteile: ['30 Min. Anfahrt', 'Lokale Teams', 'Notfall-Service in 2h'],
  },
  {
    id: 'muenchen',
    name: 'München',
    image: '/images/leistungen/unterhaltsreinigung/region-muenchen.avif',
    headline: 'Baureinigung in München',
    beschreibung: 'Professionelle Baureinigung in der Landeshauptstadt. Wir reinigen Neubauten im Werksviertel, Sanierungen in Schwabing und Gewerbeprojekte im Münchner Norden – termingerecht und in höchster Qualität.',
    vorteile: ['Alle Stadtteile', 'Wochenend-Service', 'Großprojekte'],
  },
  {
    id: 'regensburg',
    name: 'Regensburg',
    image: '/images/leistungen/unterhaltsreinigung/region-regensburg.avif',
    headline: 'Baureinigung in Regensburg',
    beschreibung: 'Baureinigung in Regensburg und Umgebung. Von der Altstadt bis zum Gewerbepark Regensburg-Ost – wir bringen Ihre Bauprojekte termingerecht zur bezugsfertigen Übergabe.',
    vorteile: ['Denkmalschutz-Erfahrung', 'Gewerbepark', 'A3 Anbindung'],
  },
  {
    id: 'ingolstadt',
    name: 'Ingolstadt',
    image: '/images/leistungen/unterhaltsreinigung/region-ingolstadt.avif',
    headline: 'Baureinigung in Ingolstadt',
    beschreibung: 'Baureinigung auf Industrieniveau für den Automobilstandort Ingolstadt. Wir arbeiten nach den hohen Standards, die hier erwartet werden – für Zulieferer, Bürokomplexe und Wohnprojekte.',
    vorteile: ['Automotive-Erfahrung', 'Qualitätsprozesse', 'Schichtmodelle'],
  },
  {
    id: 'freising',
    name: 'Freising',
    image: '/images/leistungen/unterhaltsreinigung/region-freising.avif',
    headline: 'Baureinigung in Freising',
    beschreibung: 'Baureinigung in Freising und dem gesamten Landkreis. Die Nähe zum Flughafen München bedeutet viele Gewerbeprojekte – wir sind der richtige Partner für termingerechte Bauendreinigung.',
    vorteile: ['Flughafen-Nähe', 'Forschung & Uni', 'Umweltschonend'],
  },
  {
    id: 'erding',
    name: 'Erding',
    image: '/images/leistungen/unterhaltsreinigung/region-erding.avif',
    headline: 'Baureinigung in Erding',
    beschreibung: 'Für den wachsenden Landkreis. Neubauprojekte, Hotels und öffentliche Einrichtungen vertrauen auf unsere Qualität bei der Baureinigung.',
    vorteile: ['Schnelles Wachstum', 'Hotel-Expertise', 'Flexible Zeiten'],
  },
  {
    id: 'straubing',
    name: 'Straubing',
    image: '/images/leistungen/unterhaltsreinigung/region-straubing.avif',
    headline: 'Baureinigung in Straubing',
    beschreibung: 'Niederbayern verdient erstklassige Baureinigung. Von der Innenstadt bis zum Industriegebiet – wir sind Ihr Partner für saubere Bauprojekte.',
    vorteile: ['Niederbayern-Fokus', 'Industrie-Erfahrung', 'Persönlich'],
  },
  {
    id: 'passau',
    name: 'Passau',
    image: '/images/leistungen/unterhaltsreinigung/region-passau.avif',
    headline: 'Baureinigung in Passau',
    beschreibung: 'Die Dreiflüssestadt mit Charakter. Altstadt, Universität und Gewerbe – wir passen uns Ihren Anforderungen an.',
    vorteile: ['Universität', 'Grenznähe', 'Tourismus-Know-how'],
  },
]

export default function RegionenSection() {
  const [activeIndex, setActiveIndex] = useState(0)
  const active = regionen[activeIndex]

  const next = () => setActiveIndex((prev) => (prev + 1) % regionen.length)
  const prev = () => setActiveIndex((prev) => (prev - 1 + regionen.length) % regionen.length)

  return (
    <section id="regionen" className="py-12 sm:py-16 lg:py-28 bg-white">
      <div className="w-full max-w-[1800px] mx-auto px-4 sm:px-6 md:px-8 lg:px-12 xl:px-20">

        {/* Header */}
        <div className="max-w-3xl mb-8 sm:mb-10 lg:mb-12">
          <span className="text-[#109387] font-bold text-xs sm:text-sm uppercase tracking-wide mb-3 sm:mb-4 block">
            Ihre Region
          </span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-[#012956] leading-tight mb-4 sm:mb-6">
            Baureinigung in der Nähe
          </h2>
          <p className="text-base sm:text-lg text-gray-600 font-semibold leading-relaxed">
            Wir sind in ganz Bayern für Sie da. Kurze Wege, schnelle Reaktionszeiten, lokale Teams.
          </p>
        </div>

        {/* City Selector - Mobile/Tablet */}
        <div className="flex items-center gap-3 sm:gap-4 mb-6 sm:mb-8 lg:hidden">
          <button
            onClick={prev}
            className="w-9 h-9 sm:w-10 sm:h-10 rounded-[6px] bg-[#f8f9fa] flex items-center justify-center hover:bg-[#012956] hover:text-white transition-colors"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>
          <div className="flex-1 text-center">
            <span className="text-lg sm:text-xl font-bold text-[#012956]">{active.name}</span>
          </div>
          <button
            onClick={next}
            className="w-9 h-9 sm:w-10 sm:h-10 rounded-[6px] bg-[#f8f9fa] flex items-center justify-center hover:bg-[#012956] hover:text-white transition-colors"
          >
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>

        {/* City Tabs - Desktop */}
        <div className="hidden lg:flex items-center gap-2 mb-12 flex-wrap">
          {regionen.map((region, index) => (
            <button
              key={region.id}
              onClick={() => setActiveIndex(index)}
              className={`px-4 py-2 lg:px-5 lg:py-2.5 rounded-[6px] font-bold text-sm transition-all ${
                index === activeIndex
                  ? 'bg-[#109387] text-white'
                  : 'bg-[#f8f9fa] text-gray-600 hover:bg-[#012956] hover:text-white'
              }`}
            >
              {region.name}
            </button>
          ))}
        </div>

        {/* Active Region Content */}
        <div className="grid md:grid-cols-2 gap-6 sm:gap-8 lg:gap-12">
          {/* Image */}
          <div className="relative h-[220px] sm:h-[280px] md:h-[350px] lg:h-[450px] rounded-[6px] overflow-hidden">
            <Image
              src={active.image}
              alt={active.headline}
              fill
              className="object-cover transition-all duration-500"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#012956]/60 to-transparent" />
            <div className="absolute bottom-4 left-4 sm:bottom-6 sm:left-6 flex items-center gap-2">
              <MapPin className="w-4 h-4 sm:w-5 sm:h-5 text-[#109387]" />
              <span className="text-white font-bold text-base sm:text-lg">{active.name}</span>
            </div>
          </div>

          {/* Content */}
          <div className="flex flex-col justify-center">
            <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold text-[#012956] mb-3 sm:mb-4">
              {active.headline}
            </h3>
            <p className="text-gray-600 font-semibold leading-relaxed mb-4 sm:mb-6 text-sm sm:text-base">
              {active.beschreibung}
            </p>

            {/* Vorteile */}
            <div className="flex flex-wrap gap-2 sm:gap-3 mb-6 sm:mb-8">
              {active.vorteile.map((vorteil, index) => (
                <div
                  key={index}
                  className="flex items-center gap-1.5 sm:gap-2 bg-[#f8f9fa] rounded-[6px] px-2.5 sm:px-4 py-1.5 sm:py-2"
                >
                  <CheckCircle className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-[#109387]" />
                  <span className="text-xs sm:text-sm font-bold text-gray-700">{vorteil}</span>
                </div>
              ))}
            </div>

            {/* CTA Button */}
            <a
              href="#kontakt"
              className="inline-flex items-center justify-center gap-2 bg-[#109387] hover:bg-[#0d7d72] text-white font-bold px-4 sm:px-6 py-2.5 sm:py-3 rounded-[6px] transition-colors w-fit group text-sm sm:text-base"
            >
              Baureinigung in {active.name} anfragen
              <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 group-hover:translate-x-1 transition-transform" />
            </a>
          </div>
        </div>

        {/* Nicht dabei? - komplett klickbar */}
        <a
          href="#kontakt"
          className="mt-10 sm:mt-12 lg:mt-16 bg-[#f8f9fa] hover:bg-[#e9ecef] rounded-[6px] p-4 sm:p-6 lg:p-10 block transition-colors group cursor-pointer"
        >
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 sm:gap-6">
            <div>
              <h3 className="text-lg sm:text-xl lg:text-2xl font-bold text-[#012956] mb-1 sm:mb-2">
                Ihre Stadt nicht dabei?
              </h3>
              <p className="text-gray-600 font-semibold text-sm sm:text-base">
                Wir sind in ganz Bayern aktiv – von Passau bis Würzburg.
              </p>
            </div>
            <span className="inline-flex items-center justify-center gap-2 bg-[#109387] group-hover:bg-[#0d7d72] text-white font-bold px-5 sm:px-8 py-3 sm:py-4 rounded-[6px] transition-colors whitespace-nowrap text-sm sm:text-base">
              Standort anfragen
              <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 group-hover:translate-x-1 transition-transform" />
            </span>
          </div>
        </a>

      </div>
    </section>
  )
}
