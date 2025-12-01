'use client'

import { useState } from 'react'
import Image from 'next/image'
import { MapPin, CheckCircle, ChevronLeft, ChevronRight, ArrowRight } from 'lucide-react'

const regionen = [
  {
    id: 'landshut',
    name: 'Landshut',
    image: 'https://images.unsplash.com/photo-1449824913935-59a10b8d2000?q=80&w=1600&auto=format&fit=crop',
    headline: 'Unterhaltsreinigung in Landshut',
    beschreibung: 'Als Landshuter Unternehmen kennen wir die Anforderungen der regionalen Wirtschaft. Ob Altstadt, Ergolding oder Gewerbegebiet – wir sind schnell vor Ort.',
    vorteile: ['30 Min. Anfahrt', 'Lokales Team', 'Notfallservice'],
  },
  {
    id: 'muenchen',
    name: 'München',
    image: 'https://images.unsplash.com/photo-1595867818082-083862f3d630?q=80&w=1600&auto=format&fit=crop',
    headline: 'Unterhaltsreinigung in München',
    beschreibung: 'Professionelle Gebäudereinigung für die Landeshauptstadt. Vom Werksviertel bis Schwabing – unsere Teams arbeiten diskret außerhalb Ihrer Geschäftszeiten.',
    vorteile: ['Alle Stadtteile', 'Wochenend-Service', 'Großprojekte'],
  },
  {
    id: 'regensburg',
    name: 'Regensburg',
    image: 'https://images.unsplash.com/photo-1467269204594-9661b134dd2b?q=80&w=1600&auto=format&fit=crop',
    headline: 'Unterhaltsreinigung in Regensburg',
    beschreibung: 'Von der UNESCO-Altstadt bis zum Gewerbepark. Wir pflegen historische Gebäude genauso sorgfältig wie moderne Geschäftsräume.',
    vorteile: ['Denkmalschutz-Erfahrung', 'Gewerbepark', 'A3 Anbindung'],
  },
  {
    id: 'ingolstadt',
    name: 'Ingolstadt',
    image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=1600&auto=format&fit=crop',
    headline: 'Unterhaltsreinigung in Ingolstadt',
    beschreibung: 'Der Automobilstandort verlangt Präzision. Für Zulieferer, Büros und Einzelhandel arbeiten wir nach höchsten Standards.',
    vorteile: ['Automotive-Erfahrung', 'ISO-Standards', 'Schichtmodelle'],
  },
  {
    id: 'freising',
    name: 'Freising',
    image: 'https://images.unsplash.com/photo-1524813686514-a57563d77965?q=80&w=1600&auto=format&fit=crop',
    headline: 'Unterhaltsreinigung in Freising',
    beschreibung: 'Zwischen Flughafen und TU Weihenstephan. Wir reinigen Büros, Forschungseinrichtungen und Gewerbeobjekte im gesamten Landkreis.',
    vorteile: ['Flughafen-Nähe', 'Forschung & Uni', 'Umweltschonend'],
  },
  {
    id: 'erding',
    name: 'Erding',
    image: 'https://images.unsplash.com/photo-1497366754035-f200968a6e72?q=80&w=1600&auto=format&fit=crop',
    headline: 'Unterhaltsreinigung in Erding',
    beschreibung: 'Für den wachsenden Landkreis. Gewerbebetriebe, Hotels und öffentliche Einrichtungen vertrauen auf unsere Qualität.',
    vorteile: ['Schnelles Wachstum', 'Hotel-Expertise', 'Flexible Zeiten'],
  },
  {
    id: 'straubing',
    name: 'Straubing',
    image: 'https://images.unsplash.com/photo-1497366811353-6870744d04b2?q=80&w=1600&auto=format&fit=crop',
    headline: 'Unterhaltsreinigung in Straubing',
    beschreibung: 'Niederbayern verdient erstklassige Reinigung. Von der Innenstadt bis zum Industriegebiet – wir sind Ihr Partner.',
    vorteile: ['Niederbayern-Fokus', 'Industrie-Erfahrung', 'Persönlich'],
  },
  {
    id: 'passau',
    name: 'Passau',
    image: 'https://images.unsplash.com/photo-1504384308090-c894fdcc538d?q=80&w=1600&auto=format&fit=crop',
    headline: 'Unterhaltsreinigung in Passau',
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
    <section id="regionen" className="py-20 lg:py-28 bg-white">
      <div className="w-full max-w-[1800px] mx-auto px-6 lg:px-12 xl:px-20">

        {/* Header */}
        <div className="max-w-3xl mb-12">
          <span className="text-[#109387] font-bold text-sm uppercase tracking-wide mb-4 block">
            Ihre Region
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#012956] leading-tight mb-6">
            Unterhaltsreinigung in der Nähe
          </h2>
          <p className="text-lg text-gray-600 font-semibold leading-relaxed">
            Wir sind in ganz Bayern für Sie da. Kurze Wege, schnelle Reaktionszeiten, lokale Teams.
          </p>
        </div>

        {/* City Selector - Mobile/Tablet */}
        <div className="flex items-center gap-4 mb-8 lg:hidden">
          <button
            onClick={prev}
            className="w-10 h-10 rounded-full bg-[#f8f9fa] flex items-center justify-center hover:bg-[#012956] hover:text-white transition-colors"
          >
            <ChevronLeft size={20} />
          </button>
          <div className="flex-1 text-center">
            <span className="text-xl font-bold text-[#012956]">{active.name}</span>
          </div>
          <button
            onClick={next}
            className="w-10 h-10 rounded-full bg-[#f8f9fa] flex items-center justify-center hover:bg-[#012956] hover:text-white transition-colors"
          >
            <ChevronRight size={20} />
          </button>
        </div>

        {/* City Tabs - Desktop */}
        <div className="hidden lg:flex items-center gap-2 mb-12 flex-wrap">
          {regionen.map((region, index) => (
            <button
              key={region.id}
              onClick={() => setActiveIndex(index)}
              className={`px-5 py-2.5 rounded-[6px] font-bold text-sm transition-all ${
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
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12">
          {/* Image */}
          <div className="relative h-[300px] lg:h-[450px] rounded-[6px] overflow-hidden">
            <Image
              src={active.image}
              alt={active.headline}
              fill
              className="object-cover transition-all duration-500"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#012956]/60 to-transparent" />
            <div className="absolute bottom-6 left-6 flex items-center gap-2">
              <MapPin size={20} className="text-[#109387]" />
              <span className="text-white font-bold text-lg">{active.name}</span>
            </div>
          </div>

          {/* Content */}
          <div className="flex flex-col justify-center">
            <h3 className="text-2xl lg:text-3xl font-bold text-[#012956] mb-4">
              {active.headline}
            </h3>
            <p className="text-gray-600 font-semibold leading-relaxed mb-6">
              {active.beschreibung}
            </p>

            {/* Vorteile */}
            <div className="flex flex-wrap gap-3 mb-8">
              {active.vorteile.map((vorteil, index) => (
                <div
                  key={index}
                  className="flex items-center gap-2 bg-[#f8f9fa] rounded-[6px] px-4 py-2"
                >
                  <CheckCircle size={16} className="text-[#109387]" />
                  <span className="text-sm font-bold text-gray-700">{vorteil}</span>
                </div>
              ))}
            </div>

            {/* CTA Button */}
            <a
              href="#kontakt"
              className="inline-flex items-center justify-center gap-2 bg-[#109387] hover:bg-[#0d7d72] text-white font-bold px-6 py-3 rounded-[6px] transition-colors w-fit group"
            >
              Unterhaltsreinigung in {active.name} anfragen
              <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
            </a>
          </div>
        </div>

        {/* Nicht dabei? */}
        <div className="mt-16 bg-[#f8f9fa] rounded-[6px] p-8 lg:p-10">
          <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6">
            <div>
              <h3 className="text-xl lg:text-2xl font-bold text-[#012956] mb-2">
                Ihre Stadt nicht dabei?
              </h3>
              <p className="text-gray-600 font-semibold">
                Wir sind in ganz Bayern aktiv – von Passau bis Würzburg, von Augsburg bis Hof.
                Fragen Sie uns einfach an!
              </p>
            </div>
            <a
              href="#kontakt"
              className="inline-flex items-center justify-center gap-2 bg-[#109387] hover:bg-[#0d7d72] text-white font-bold px-8 py-4 rounded-[6px] transition-colors whitespace-nowrap group"
            >
              Standort anfragen
              <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
            </a>
          </div>
        </div>

      </div>
    </section>
  )
}
