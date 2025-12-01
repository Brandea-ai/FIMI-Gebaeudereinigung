'use client'

import { useState } from 'react'
import Image from 'next/image'
import { MapPin, CheckCircle, ChevronLeft, ChevronRight } from 'lucide-react'

const regionen = [
  {
    id: 'landshut',
    name: 'Landshut',
    image: 'https://images.unsplash.com/photo-1449824913935-59a10b8d2000?q=80&w=1600&auto=format&fit=crop',
    headline: 'Bueroreinigung in Landshut',
    beschreibung: 'Als Landshuter Unternehmen kennen wir die Anforderungen der regionalen Wirtschaft. Ob Altstadt, Ergolding oder Gewerbegebiet - wir sind schnell vor Ort.',
    vorteile: ['30 Min. Anfahrt', 'Lokales Team', 'Notfallservice'],
  },
  {
    id: 'muenchen',
    name: 'Muenchen',
    image: 'https://images.unsplash.com/photo-1595867818082-083862f3d630?q=80&w=1600&auto=format&fit=crop',
    headline: 'Bueroreinigung in Muenchen',
    beschreibung: 'Professionelle Bueroreinigung fuer die Landeshauptstadt. Vom Werksviertel bis Schwabing - unsere Teams arbeiten diskret ausserhalb Ihrer Geschaeftszeiten.',
    vorteile: ['Alle Stadtteile', 'Wochenend-Service', 'Grossprojekte'],
  },
  {
    id: 'regensburg',
    name: 'Regensburg',
    image: 'https://images.unsplash.com/photo-1467269204594-9661b134dd2b?q=80&w=1600&auto=format&fit=crop',
    headline: 'Bueroreinigung in Regensburg',
    beschreibung: 'Von der UNESCO-Altstadt bis zum Gewerbepark. Wir pflegen historische Gebaeude genauso sorgfaeltig wie moderne Bueros.',
    vorteile: ['Denkmalschutz-Erfahrung', 'Gewerbepark', 'A3 Anbindung'],
  },
  {
    id: 'ingolstadt',
    name: 'Ingolstadt',
    image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=1600&auto=format&fit=crop',
    headline: 'Bueroreinigung in Ingolstadt',
    beschreibung: 'Der Automobilstandort verlangt Praezision. Fuer Zulieferer, Bueros und Einzelhandel arbeiten wir nach hoechsten Standards.',
    vorteile: ['Automotive-Erfahrung', 'ISO-Standards', 'Schichtmodelle'],
  },
  {
    id: 'freising',
    name: 'Freising',
    image: 'https://images.unsplash.com/photo-1524813686514-a57563d77965?q=80&w=1600&auto=format&fit=crop',
    headline: 'Bueroreinigung in Freising',
    beschreibung: 'Zwischen Flughafen und TU Weihenstephan. Wir reinigen Bueros, Forschungseinrichtungen und Gewerbeobjekte im gesamten Landkreis.',
    vorteile: ['Flughafen-Naehe', 'Forschung & Uni', 'Umweltschonend'],
  },
  {
    id: 'erding',
    name: 'Erding',
    image: 'https://images.unsplash.com/photo-1497366754035-f200968a6e72?q=80&w=1600&auto=format&fit=crop',
    headline: 'Bueroreinigung in Erding',
    beschreibung: 'Fuer den wachsenden Landkreis. Gewerbebetriebe, Hotels und oeffentliche Einrichtungen vertrauen auf unsere Qualitaet.',
    vorteile: ['Schnelles Wachstum', 'Hotel-Expertise', 'Flexible Zeiten'],
  },
  {
    id: 'straubing',
    name: 'Straubing',
    image: 'https://images.unsplash.com/photo-1497366811353-6870744d04b2?q=80&w=1600&auto=format&fit=crop',
    headline: 'Bueroreinigung in Straubing',
    beschreibung: 'Niederbayern verdient erstklassige Reinigung. Von der Innenstadt bis zum Industriegebiet - wir sind Ihr Partner.',
    vorteile: ['Niederbayern-Fokus', 'Industrie-Erfahrung', 'Persoenlich'],
  },
  {
    id: 'passau',
    name: 'Passau',
    image: 'https://images.unsplash.com/photo-1504384308090-c894fdcc538d?q=80&w=1600&auto=format&fit=crop',
    headline: 'Bueroreinigung in Passau',
    beschreibung: 'Die Dreifluessestadt mit Charakter. Altstadt, Universitaet und Gewerbe - wir passen uns Ihren Anforderungen an.',
    vorteile: ['Universitaet', 'Grenznaehe', 'Tourismus-Know-how'],
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
            Bueroreinigung in Ihrer Naehe
          </h2>
          <p className="text-lg text-gray-600 font-semibold leading-relaxed">
            Wir sind in ganz Bayern fuer Sie da. Kurze Wege, schnelle Reaktionszeiten, lokale Teams.
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

            {/* CTA */}
            <a
              href="#kontakt"
              className="inline-flex items-center gap-2 text-[#109387] font-bold hover:gap-3 transition-all"
            >
              Bueroreinigung in {active.name} anfragen
              <ChevronRight size={18} />
            </a>
          </div>
        </div>

        {/* All Regions Link */}
        <div className="mt-12 text-center">
          <p className="text-gray-500 font-semibold">
            Nicht dabei? Wir sind in ganz Bayern aktiv.{' '}
            <a href="#kontakt" className="text-[#109387] font-bold hover:underline">
              Fragen Sie an
            </a>
          </p>
        </div>

      </div>
    </section>
  )
}
