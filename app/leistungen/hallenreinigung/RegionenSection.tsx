'use client'

import { useState } from 'react'
import Image from 'next/image'
import { MapPin, CheckCircle, ChevronLeft, ChevronRight, ArrowRight } from 'lucide-react'

const regionen = [
  {
    id: 'landshut',
    name: 'Landshut',
    image: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?q=80&w=1600&auto=format&fit=crop',
    headline: 'Hallenreinigung in Landshut',
    beschreibung: 'Ihr Partner für Hallenreinigung im Raum Landshut. Ob Lagerhalle in Ergolding, Produktionshalle im Gewerbegebiet oder Logistikzentrum an der B15 – wir sind in 30 Minuten vor Ort.',
    vorteile: ['30 Min. Anfahrt', 'Notfallservice 2h', 'Lokales Team'],
  },
  {
    id: 'muenchen',
    name: 'München',
    image: 'https://images.unsplash.com/photo-1565688534245-05d6b5be184a?q=80&w=1600&auto=format&fit=crop',
    headline: 'Hallenreinigung in München',
    beschreibung: 'Professionelle Hallenreinigung für die Industrie- und Logistikstandorte in München. Vom Werksviertel bis Freiham, vom Gewerbegebiet Nord bis Riem – unsere Teams sind erfahren mit Großprojekten.',
    vorteile: ['Alle Stadtteile', 'Großprojekte', 'Wochenend-Service'],
  },
  {
    id: 'regensburg',
    name: 'Regensburg',
    image: 'https://images.unsplash.com/photo-1553413077-190dd305871c?q=80&w=1600&auto=format&fit=crop',
    headline: 'Hallenreinigung in Regensburg',
    beschreibung: 'Hallenreinigung für den Industriestandort Regensburg. Gewerbepark, Hafen, Continental, BMW-Zulieferer – wir kennen die Anforderungen der Region und arbeiten nach höchsten Standards.',
    vorteile: ['A3 Anbindung', 'Automotive-Erfahrung', 'Hafen-Logistik'],
  },
  {
    id: 'ingolstadt',
    name: 'Ingolstadt',
    image: 'https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?q=80&w=1600&auto=format&fit=crop',
    headline: 'Hallenreinigung in Ingolstadt',
    beschreibung: 'Der Automobilstandort verlangt Präzision. Für Audi-Zulieferer, Logistikunternehmen und Produktionsbetriebe arbeiten wir nach den hohen Standards der Branche – auch im Schichtbetrieb.',
    vorteile: ['Automotive-Standards', 'Schichtbetrieb', 'ISO-zertifiziert'],
  },
  {
    id: 'freising',
    name: 'Freising',
    image: 'https://images.unsplash.com/photo-1581578731548-c64695cc6952?q=80&w=1600&auto=format&fit=crop',
    headline: 'Hallenreinigung in Freising',
    beschreibung: 'Zwischen Flughafen München und München-Nord gelegen, ist Freising ein wichtiger Logistikstandort. Wir reinigen Lagerhallen, Umschlagzentren und Produktionsstätten im gesamten Landkreis.',
    vorteile: ['Flughafen-Nähe', 'Logistik-Expertise', '24/7 möglich'],
  },
  {
    id: 'erding',
    name: 'Erding',
    image: 'https://images.unsplash.com/photo-1586528116022-bdf18de6c7e5?q=80&w=1600&auto=format&fit=crop',
    headline: 'Hallenreinigung in Erding',
    beschreibung: 'Der wachsende Landkreis Erding hat zahlreiche neue Logistik- und Gewerbeflächen. Wir begleiten Unternehmen von der Baureinigung bis zur regelmäßigen Hallenreinigung.',
    vorteile: ['Neubau-Erfahrung', 'Wachstumsregion', 'Flexibel'],
  },
  {
    id: 'straubing',
    name: 'Straubing',
    image: 'https://images.unsplash.com/photo-1565688534245-05d6b5be184a?q=80&w=1600&auto=format&fit=crop',
    headline: 'Hallenreinigung in Straubing',
    beschreibung: 'Niederbayerns Industriezentrum mit Hafen und Gewerbegebieten. Wir reinigen Produktionshallen, Lagerhallen und Logistikflächen – von der Donau bis zum Gäuboden.',
    vorteile: ['Hafen-Industrie', 'Niederbayern', 'Persönlich'],
  },
  {
    id: 'passau',
    name: 'Passau',
    image: 'https://images.unsplash.com/photo-1587293852726-70cdb56c2866?q=80&w=1600&auto=format&fit=crop',
    headline: 'Hallenreinigung in Passau',
    beschreibung: 'Die Dreiflüssestadt und ihre Umgebung haben zahlreiche Produktions- und Logistikbetriebe. Wir sind Ihr Partner bis zur österreichischen Grenze.',
    vorteile: ['Grenznähe', 'Export-Unternehmen', 'Regional'],
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
            Hallenreinigung in Ihrer Nähe
          </h2>
          <p className="text-base sm:text-lg text-gray-600 font-semibold leading-relaxed">
            Wir sind in ganz Bayern für Sie da. Kurze Anfahrtswege, schnelle Reaktionszeiten, lokale Teams die Ihre Region kennen.
          </p>
        </div>

        {/* City Selector - Mobile/Tablet */}
        <div className="flex items-center gap-3 sm:gap-4 mb-6 sm:mb-8 lg:hidden">
          <button
            onClick={prev}
            className="w-9 h-9 sm:w-10 sm:h-10 rounded-[6px] bg-white flex items-center justify-center hover:bg-[#012956] hover:text-white transition-colors"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>
          <div className="flex-1 text-center">
            <span className="text-lg sm:text-xl font-bold text-[#012956]">{active.name}</span>
          </div>
          <button
            onClick={next}
            className="w-9 h-9 sm:w-10 sm:h-10 rounded-[6px] bg-white flex items-center justify-center hover:bg-[#012956] hover:text-white transition-colors"
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
                  : 'bg-white text-gray-600 hover:bg-[#012956] hover:text-white'
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
                  className="flex items-center gap-1.5 sm:gap-2 bg-white rounded-[6px] px-2.5 sm:px-4 py-1.5 sm:py-2"
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
              Hallenreinigung in {active.name} anfragen
              <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 group-hover:translate-x-1 transition-transform" />
            </a>
          </div>
        </div>

        {/* Nicht dabei? */}
        <a
          href="#kontakt"
          className="mt-10 sm:mt-12 lg:mt-16 bg-white hover:bg-gray-50 rounded-[6px] p-4 sm:p-6 lg:p-10 block transition-colors group cursor-pointer"
        >
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 sm:gap-6">
            <div>
              <h3 className="text-lg sm:text-xl lg:text-2xl font-bold text-[#012956] mb-1 sm:mb-2">
                Ihre Stadt nicht dabei?
              </h3>
              <p className="text-gray-600 font-semibold text-sm sm:text-base">
                Wir sind in ganz Bayern aktiv – von Passau bis Würzburg, von Regensburg bis Rosenheim.
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
