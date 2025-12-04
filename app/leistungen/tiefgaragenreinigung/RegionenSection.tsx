'use client'

import { useState } from 'react'
import Image from 'next/image'
import { MapPin, CheckCircle, ChevronLeft, ChevronRight, ArrowRight } from 'lucide-react'

const regionen = [
  {
    id: 'landshut',
    name: 'Landshut',
    image: 'https://images.unsplash.com/photo-1449824913935-59a10b8d2000?q=80&w=1600&auto=format&fit=crop',
    headline: 'Tiefgaragenreinigung in Landshut',
    beschreibung: 'Als Landshuter Unternehmen sind wir in 30 Minuten bei Ihnen. Ob WEG-Tiefgarage in der Altstadt, Parkhaus am Arbeo-Park oder Gewerbeimmobilie in Ergolding – wir kennen die Anforderungen vor Ort und liefern erstklassige Ergebnisse.',
    vorteile: ['30 Min. Anfahrt', 'Lokale Teams', 'WEG-Spezialist'],
  },
  {
    id: 'muenchen',
    name: 'München',
    image: 'https://images.unsplash.com/photo-1595867818082-083862f3d630?q=80&w=1600&auto=format&fit=crop',
    headline: 'Tiefgaragenreinigung in München',
    beschreibung: 'Professionelle Tiefgaragenreinigung für die Landeshauptstadt. Vom Mehrfamilienhaus in Schwabing bis zum Bürokomplex in der Innenstadt – unsere Scheuersaugmaschinen und Teams sind in allen Stadtteilen einsatzbereit.',
    vorteile: ['Alle Stadtteile', 'Nacht- & Wochenendservice', 'Großprojekte'],
  },
  {
    id: 'regensburg',
    name: 'Regensburg',
    image: 'https://images.unsplash.com/photo-1467269204594-9661b134dd2b?q=80&w=1600&auto=format&fit=crop',
    headline: 'Tiefgaragenreinigung in Regensburg',
    beschreibung: 'Von der UNESCO-Welterbe-Altstadt bis zum Gewerbepark Ost. Wir reinigen Tiefgaragen für Hausverwaltungen, Wohnungseigentümergemeinschaften und Gewerbeimmobilien mit gleichbleibend hoher Qualität.',
    vorteile: ['Gewerbepark-Erfahrung', 'A3/A93 Anbindung', 'Regelmäßige Wartung'],
  },
  {
    id: 'ingolstadt',
    name: 'Ingolstadt',
    image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=1600&auto=format&fit=crop',
    headline: 'Tiefgaragenreinigung in Ingolstadt',
    beschreibung: 'Der Automobilstandort stellt höchste Ansprüche – auch an Tiefgaragen. Für Autohäuser, Zulieferer-Parkdecks und Wohnanlagen bieten wir Reinigung nach Automotive-Standards mit besonderem Fokus auf Ölfleckenentfernung.',
    vorteile: ['Automotive-Standard', 'Ölflecken-Spezialist', 'Flexible Zeiten'],
  },
  {
    id: 'freising',
    name: 'Freising',
    image: 'https://images.unsplash.com/photo-1524813686514-a57563d77965?q=80&w=1600&auto=format&fit=crop',
    headline: 'Tiefgaragenreinigung in Freising',
    beschreibung: 'Zwischen Flughafen und Weihenstephan. Wir reinigen Tiefgaragen für Hotels, Forschungseinrichtungen und die wachsende Zahl an Wohnanlagen im gesamten Landkreis – auch mit Nachtservice für Hotelbetriebe.',
    vorteile: ['Flughafen-Nähe', 'Hotel-Erfahrung', '24h-Service möglich'],
  },
  {
    id: 'erding',
    name: 'Erding',
    image: 'https://images.unsplash.com/photo-1497366754035-f200968a6e72?q=80&w=1600&auto=format&fit=crop',
    headline: 'Tiefgaragenreinigung in Erding',
    beschreibung: 'Der boomende Landkreis mit Therme und Flughafen-Nähe. Wir betreuen Tiefgaragen von Hotels, Ferienwohnungen, Gewerbebetrieben und den zahlreichen Neubauprojekten mit erstklassigem Service.',
    vorteile: ['Hotel-Expertise', 'Neubau-Erfahrung', 'Flexible Intervalle'],
  },
  {
    id: 'straubing',
    name: 'Straubing',
    image: 'https://images.unsplash.com/photo-1497366811353-6870744d04b2?q=80&w=1600&auto=format&fit=crop',
    headline: 'Tiefgaragenreinigung in Straubing',
    beschreibung: 'Niederbayern verdient erstklassige Tiefgaragenpflege. Von der Innenstadt bis zum Hafen – wir sind Ihr zuverlässiger Partner für saubere Parkebenen und zufriedene Eigentümer.',
    vorteile: ['Niederbayern-Fokus', 'Industrie-Erfahrung', 'Persönlicher Service'],
  },
  {
    id: 'passau',
    name: 'Passau',
    image: 'https://images.unsplash.com/photo-1504384308090-c894fdcc538d?q=80&w=1600&auto=format&fit=crop',
    headline: 'Tiefgaragenreinigung in Passau',
    beschreibung: 'Die Dreiflüssestadt mit besonderer Herausforderung: Hochwassergefahr und Tourismus. Wir reinigen Tiefgaragen für Hotels, Wohnanlagen und Gewerbebetriebe – auch nach Hochwasserschäden.',
    vorteile: ['Tourismus-Know-how', 'Hochwasser-Sanierung', 'Grenznähe'],
  },
]

export default function RegionenSection() {
  const [activeIndex, setActiveIndex] = useState(0)
  const active = regionen[activeIndex]

  const next = () => setActiveIndex((prev) => (prev + 1) % regionen.length)
  const prev = () => setActiveIndex((prev) => (prev - 1 + regionen.length) % regionen.length)

  return (
    <section id="regionen" className="py-12 sm:py-16 lg:py-28 bg-[#f8f9fa]">
      <div className="w-full max-w-[1800px] mx-auto px-4 sm:px-6 md:px-8 lg:px-12 xl:px-20">

        {/* Header */}
        <div className="max-w-3xl mb-8 sm:mb-10 lg:mb-12">
          <span className="text-[#109387] font-bold text-xs sm:text-sm uppercase tracking-wide mb-3 sm:mb-4 block">
            Ihre Region
          </span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-[#012956] leading-tight mb-4 sm:mb-6">
            Tiefgaragenreinigung in der Nähe
          </h2>
          <p className="text-base sm:text-lg text-gray-600 font-semibold leading-relaxed">
            Wir sind in ganz Bayern für Sie da. Kurze Wege, schnelle Reaktionszeiten, lokale Teams –
            für saubere Tiefgaragen ohne lange Wartezeiten.
          </p>
        </div>

        {/* City Selector - Mobile/Tablet */}
        <div className="flex items-center gap-3 sm:gap-4 mb-6 sm:mb-8 lg:hidden">
          <button
            onClick={prev}
            className="w-9 h-9 sm:w-10 sm:h-10 rounded-[6px] bg-white flex items-center justify-center hover:bg-[#012956] hover:text-white transition-colors border border-gray-200"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>
          <div className="flex-1 text-center">
            <span className="text-lg sm:text-xl font-bold text-[#012956]">{active.name}</span>
          </div>
          <button
            onClick={next}
            className="w-9 h-9 sm:w-10 sm:h-10 rounded-[6px] bg-white flex items-center justify-center hover:bg-[#012956] hover:text-white transition-colors border border-gray-200"
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
                  : 'bg-white text-gray-600 hover:bg-[#012956] hover:text-white border border-gray-200'
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
                  className="flex items-center gap-1.5 sm:gap-2 bg-white rounded-[6px] px-2.5 sm:px-4 py-1.5 sm:py-2 border border-gray-200"
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
              Tiefgaragenreinigung in {active.name} anfragen
              <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 group-hover:translate-x-1 transition-transform" />
            </a>
          </div>
        </div>

        {/* Nicht dabei? */}
        <a
          href="#kontakt"
          className="mt-10 sm:mt-12 lg:mt-16 bg-white hover:bg-gray-50 border border-gray-200 rounded-[6px] p-4 sm:p-6 lg:p-10 block transition-colors group cursor-pointer"
        >
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 sm:gap-6">
            <div>
              <h3 className="text-lg sm:text-xl lg:text-2xl font-bold text-[#012956] mb-1 sm:mb-2">
                Ihre Stadt nicht dabei?
              </h3>
              <p className="text-gray-600 font-semibold text-sm sm:text-base">
                Wir sind in ganz Bayern aktiv. Fragen Sie unverbindlich an – wir finden eine Lösung für Ihre Tiefgarage.
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
