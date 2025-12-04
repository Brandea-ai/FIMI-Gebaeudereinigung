'use client'

import { useState } from 'react'
import Image from 'next/image'
import { MapPin, CheckCircle, ChevronLeft, ChevronRight, ArrowRight, Snowflake } from 'lucide-react'

const regionen = [
  {
    id: 'landshut',
    name: 'Landshut',
    image: 'https://images.unsplash.com/photo-1449824913935-59a10b8d2000?q=80&w=1600&auto=format&fit=crop',
    headline: 'Winterdienst in Landshut',
    beschreibung: 'Als Landshuter Unternehmen sind wir blitzschnell vor Ort. Bei Schneefall erreichen wir Ihre Flächen in der Altstadt, Ergolding oder im Gewerbegebiet innerhalb von 30 Minuten.',
    vorteile: ['30 Min. Reaktion', 'Lokales Team', '24/7 Bereitschaft'],
  },
  {
    id: 'muenchen',
    name: 'München',
    image: 'https://images.unsplash.com/photo-1595867818082-083862f3d630?q=80&w=1600&auto=format&fit=crop',
    headline: 'Winterdienst in München',
    beschreibung: 'Professionelle Schneeräumung für die Landeshauptstadt. Vom Werksviertel bis Schwabing – unsere Teams räumen zuverlässig vor Geschäftsbeginn.',
    vorteile: ['Alle Stadtteile', 'Großflächen', '2h Reaktionszeit'],
  },
  {
    id: 'regensburg',
    name: 'Regensburg',
    image: 'https://images.unsplash.com/photo-1467269204594-9661b134dd2b?q=80&w=1600&auto=format&fit=crop',
    headline: 'Winterdienst in Regensburg',
    beschreibung: 'Von der UNESCO-Altstadt bis zum Gewerbepark. Wir räumen historische Pflasterstraßen genauso sorgfältig wie moderne Parkflächen.',
    vorteile: ['Altstadt-Erfahrung', 'Gewerbepark', 'A3 Anbindung'],
  },
  {
    id: 'ingolstadt',
    name: 'Ingolstadt',
    image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=1600&auto=format&fit=crop',
    headline: 'Winterdienst in Ingolstadt',
    beschreibung: 'Der Automobilstandort verlangt Präzision. Für Zulieferer, Logistikzentren und Büros räumen wir nach höchsten Standards – auch im Schichtbetrieb.',
    vorteile: ['Automotive-Erfahrung', 'Schichtmodelle', 'Großparkplätze'],
  },
  {
    id: 'freising',
    name: 'Freising',
    image: 'https://images.unsplash.com/photo-1524813686514-a57563d77965?q=80&w=1600&auto=format&fit=crop',
    headline: 'Winterdienst in Freising',
    beschreibung: 'Zwischen Flughafen und TU Weihenstephan. Schneeräumung für Büros, Hotels und Gewerbeobjekte im gesamten Landkreis – auch für Flughafen-Zulieferer.',
    vorteile: ['Flughafen-Nähe', 'Hotels', 'Schnellservice'],
  },
  {
    id: 'erding',
    name: 'Erding',
    image: 'https://images.unsplash.com/photo-1497366754035-f200968a6e72?q=80&w=1600&auto=format&fit=crop',
    headline: 'Winterdienst in Erding',
    beschreibung: 'Für den wachsenden Landkreis. Hotels, Gewerbebetriebe und öffentliche Einrichtungen vertrauen auf unsere zuverlässige Schneeräumung.',
    vorteile: ['Therme Erding', 'Hotels', 'Flexible Zeiten'],
  },
  {
    id: 'straubing',
    name: 'Straubing',
    image: 'https://images.unsplash.com/photo-1497366811353-6870744d04b2?q=80&w=1600&auto=format&fit=crop',
    headline: 'Winterdienst in Straubing',
    beschreibung: 'Niederbayern verdient erstklassigen Winterdienst. Von der Innenstadt bis zum Industriegebiet – wir sorgen für sichere Wege.',
    vorteile: ['Niederbayern-Fokus', 'Industrie-Erfahrung', 'Persönlich'],
  },
  {
    id: 'passau',
    name: 'Passau',
    image: 'https://images.unsplash.com/photo-1504384308090-c894fdcc538d?q=80&w=1600&auto=format&fit=crop',
    headline: 'Winterdienst in Passau',
    beschreibung: 'Die Dreiflüssestadt mit besonderen Anforderungen. Steile Gassen, Uferpromenaden und Gewerbegebiete – wir kennen die Herausforderungen.',
    vorteile: ['Universität', 'Steile Lagen', 'Uferpromenaden'],
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
            Winterdienst in Ihrer Nähe
          </h2>
          <p className="text-base sm:text-lg text-gray-600 font-semibold leading-relaxed">
            Wir sind in ganz Bayern für Sie da. Bei Schneefall zählt jede Minute – deshalb setzen wir auf kurze Wege und lokale Teams.
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
            {/* Winter Badge */}
            <div className="absolute top-4 right-4 sm:top-6 sm:right-6 bg-[#109387] rounded-[6px] px-3 py-1.5 flex items-center gap-2">
              <Snowflake className="w-4 h-4 text-white" />
              <span className="text-white font-bold text-xs sm:text-sm">Winterdienst</span>
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
              Winterdienst in {active.name} anfragen
              <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 group-hover:translate-x-1 transition-transform" />
            </a>
          </div>
        </div>

        {/* Nicht dabei? */}
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
                Wir sind in ganz Bayern aktiv – von Passau bis Würzburg. Fragen Sie uns!
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
