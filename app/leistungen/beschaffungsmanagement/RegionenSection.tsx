'use client'

import { useState } from 'react'
import Image from 'next/image'
import { MapPin, CheckCircle, ChevronLeft, ChevronRight, ArrowRight } from 'lucide-react'

const regionen = [
  {
    id: 'landshut',
    name: 'Landshut',
    image: '/images/leistungen/unterhaltsreinigung/region-landshut.avif',
    headline: 'Beschaffungsmanagement in Landshut',
    beschreibung: 'Als Landshuter Unternehmen verstehen wir die Anforderungen des regionalen Mittelstands. Produktionsunternehmen, Zulieferer und Dienstleister profitieren von unserer Nähe.',
    vorteile: ['Vor Ort in 30 Min.', 'Mittelstands-Fokus', 'Regionale Vernetzung'],
  },
  {
    id: 'muenchen',
    name: 'München',
    image: '/images/leistungen/unterhaltsreinigung/region-muenchen.avif',
    headline: 'Einkaufsberatung in München',
    beschreibung: 'In der Metropolregion München unterstützen wir Unternehmen aller Größen. Von Tech-Start-ups über etablierte Mittelständler bis zu Konzernen.',
    vorteile: ['Alle Branchen', 'Konzern-Erfahrung', 'Startup-kompatibel'],
  },
  {
    id: 'regensburg',
    name: 'Regensburg',
    image: '/images/leistungen/unterhaltsreinigung/region-regensburg.avif',
    headline: 'Beschaffungsmanagement in Regensburg',
    beschreibung: 'Der Industriestandort Regensburg mit Automotive, Elektrotechnik und Maschinenbau. Wir kennen die Lieferantenstrukturen der Region.',
    vorteile: ['Automotive-Expertise', 'Industrie-Fokus', 'Lieferanten-Netzwerk'],
  },
  {
    id: 'ingolstadt',
    name: 'Ingolstadt',
    image: '/images/leistungen/unterhaltsreinigung/region-ingolstadt.avif',
    headline: 'Einkaufsoptimierung in Ingolstadt',
    beschreibung: 'Im Herzen der Automobilindustrie. Zulieferer und OEMs profitieren von unserer Erfahrung mit Automotive-Einkaufsprozessen und Qualitätsanforderungen.',
    vorteile: ['Automotive-Branche', 'Zulieferer-Erfahrung', 'Qualitätsstandards'],
  },
  {
    id: 'freising',
    name: 'Freising',
    image: '/images/leistungen/unterhaltsreinigung/region-freising.avif',
    headline: 'Beschaffungsmanagement in Freising',
    beschreibung: 'Zwischen Flughafen und TU München. Innovative Unternehmen, Forschungseinrichtungen und Logistiker sind hier zu Hause.',
    vorteile: ['Flughafen-Region', 'Innovationshub', 'Logistik-Know-how'],
  },
  {
    id: 'dingolfing',
    name: 'Dingolfing',
    image: '/images/leistungen/unterhaltsreinigung/region-erding.avif',
    headline: 'Einkaufsberatung in Dingolfing',
    beschreibung: 'Der Standort für Fertigung und Produktion. Wir unterstützen bei der Optimierung von Materialkosten und Lieferantenbeziehungen.',
    vorteile: ['Produktionsbetriebe', 'Material-Einkauf', 'Fertigungs-Expertise'],
  },
  {
    id: 'straubing',
    name: 'Straubing',
    image: '/images/leistungen/unterhaltsreinigung/region-straubing.avif',
    headline: 'Beschaffungsmanagement in Straubing',
    beschreibung: 'Niederbayern mit starkem Mittelstand. Vom Handwerksbetrieb bis zum Hidden Champion – wir skalieren unsere Leistungen passend.',
    vorteile: ['Niederbayern-Fokus', 'Mittelstand', 'Pragmatisch'],
  },
  {
    id: 'passau',
    name: 'Passau',
    image: '/images/leistungen/unterhaltsreinigung/region-passau.avif',
    headline: 'Einkaufsberatung in Passau',
    beschreibung: 'Die Dreiflüssestadt mit grenzüberschreitenden Geschäftsbeziehungen. Internationaler Einkauf und lokale Beschaffung kombiniert.',
    vorteile: ['International', 'Grenznähe Österreich', 'Universität'],
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
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-[#109387] leading-tight mb-4 sm:mb-6">
            Beschaffungsmanagement in Ihrer Nähe
          </h2>
          <p className="text-base sm:text-lg text-gray-600 font-semibold leading-relaxed">
            Wir sind in ganz Bayern für Sie da. Persönliche Betreuung vor Ort, Workshops in Ihrem Unternehmen, Verhandlungsbegleitung beim Lieferanten.
          </p>
        </div>

        {/* City Selector - Mobile/Tablet */}
        <div className="flex items-center gap-3 sm:gap-4 mb-6 sm:mb-8 lg:hidden">
          <button
            onClick={prev}
            className="w-9 h-9 sm:w-10 sm:h-10 rounded-[6px] bg-[#f8f9fa] flex items-center justify-center hover:bg-[#012956] hover:text-white transition-colors"
            aria-label="Vorherige Region anzeigen"
          >
            <ChevronLeft className="w-5 h-5" aria-hidden="true" />
          </button>
          <div className="flex-1 text-center">
            <span className="text-lg sm:text-xl font-bold text-[#012956]">{active.name}</span>
          </div>
          <button
            onClick={next}
            className="w-9 h-9 sm:w-10 sm:h-10 rounded-[6px] bg-[#f8f9fa] flex items-center justify-center hover:bg-[#012956] hover:text-white transition-colors"
            aria-label="Nächste Region anzeigen"
          >
            <ChevronRight className="w-5 h-5" aria-hidden="true" />
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
              src={active.image.replace('w=1600', 'w=800')}
              alt={active.headline}
              fill
              className="object-cover transition-all duration-500"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#012956]/60 to-transparent" />
            <div className="absolute bottom-4 left-4 sm:bottom-6 sm:left-6 flex items-center gap-2">
              <MapPin className="w-4 h-4 sm:w-5 sm:h-5 text-[#109387]" aria-hidden="true" />
              <span className="text-white font-bold text-base sm:text-lg">{active.name}</span>
            </div>
          </div>

          {/* Content */}
          <div className="flex flex-col justify-center">
            <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold text-[#012956] mb-3 sm:mb-4">
              {active.headline}
            </h3>
            <p className="text-sm sm:text-base lg:text-lg text-gray-600 font-semibold leading-relaxed mb-5 sm:mb-6">
              {active.beschreibung}
            </p>

            {/* Vorteile */}
            <div className="flex flex-wrap gap-2 sm:gap-3 mb-6 sm:mb-8">
              {active.vorteile.map((vorteil, idx) => (
                <span
                  key={idx}
                  className="inline-flex items-center gap-1.5 sm:gap-2 bg-[#f8f9fa] text-[#012956] font-semibold text-xs sm:text-sm px-3 sm:px-4 py-1.5 sm:py-2 rounded-[6px]"
                >
                  <CheckCircle className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-[#109387]" aria-hidden="true" />
                  {vorteil}
                </span>
              ))}
            </div>

            {/* CTA */}
            <a
              href="#kontakt"
              className="inline-flex items-center gap-2 bg-[#109387] hover:bg-[#0d7d72] text-white font-bold text-sm sm:text-base px-5 sm:px-6 py-3 rounded-[6px] transition-all group w-fit"
            >
              Beratung in {active.name} anfragen
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" aria-hidden="true" />
            </a>
          </div>
        </div>

      </div>
    </section>
  )
}
