'use client'

import { useState, useRef, useEffect } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { ArrowRight, ChevronLeft, ChevronRight, MapPin, CheckCircle } from 'lucide-react'

const staedte = [
  {
    id: 'landshut',
    name: 'Landshut',
    headline: 'Facility Management in Landshut',
    subline: 'Unser Hauptstandort – schnell bei Ihnen',
    beschreibung: 'Als Landshuter Unternehmen sind wir in wenigen Minuten bei Ihnen. Facility Management für Bürogebäude in der Altstadt, Produktionsstätten im Gewerbegebiet oder Wohnanlagen in den Stadtteilen. Ein Ansprechpartner für Reinigung, Hausmeister, Winterdienst und Grünpflege.',
    vorteile: [
      'Hauptstandort – schnellste Reaktionszeit',
      'Lokale Teams vor Ort',
      'Notfallservice in 30 Minuten',
      'Persönliche Betreuung garantiert',
    ],
  },
  {
    id: 'muenchen',
    name: 'München',
    headline: 'Facility Management in München',
    subline: 'Professionelle Objektbetreuung in der Landeshauptstadt',
    beschreibung: 'Ganzheitliches Facility Management in München für anspruchsvolle Objekte. Ob Bürokomplexe in Schwabing, Wohnanlagen in Bogenhausen oder Gewerbeobjekte im Münchner Norden – wir koordinieren alle Dienstleistungen aus einer Hand.',
    vorteile: [
      'Erfahrung mit Münchner Großobjekten',
      'Teams in allen Stadtteilen',
      'Premium-Service für anspruchsvolle Kunden',
      'Zentrale Koordination vor Ort',
    ],
  },
  {
    id: 'regensburg',
    name: 'Regensburg',
    headline: 'Facility Management in Regensburg',
    subline: 'Von der Altstadt bis zum Gewerbepark',
    beschreibung: 'Facility Management in Regensburg – für UNESCO-Welterbe und moderne Industrie. Komplette Objektbetreuung für Büros, Wohnanlagen und Gewerbeobjekte. Ein Partner für alle Gebäudedienstleistungen.',
    vorteile: [
      'Erfahrung mit historischen Gebäuden',
      'Industriekompetenz Gewerbepark',
      'Schnelle Erreichbarkeit über A3',
      'Einheitliche Qualitätsstandards',
    ],
  },
  {
    id: 'ingolstadt',
    name: 'Ingolstadt',
    headline: 'Facility Management in Ingolstadt',
    subline: 'Industriestandard für den Automobilstandort',
    beschreibung: 'Facility Management in Ingolstadt auf Industrieniveau. Ganzheitliche Betreuung für Zulieferer, Bürokomplexe und Gewerbeimmobilien. Ein Ansprechpartner koordiniert Reinigung, Winterdienst, Hausmeister und Außenanlagen.',
    vorteile: [
      'Automotive-Zulieferer Erfahrung',
      'Industriestandards',
      'Flexible Schichtmodelle',
      'Werksgelände-Kompetenz',
    ],
  },
  {
    id: 'freising',
    name: 'Freising',
    headline: 'Facility Management in Freising',
    subline: 'Zwischen Flughafen und TU München',
    beschreibung: 'Zuverlässiges Facility Management in Freising und Umgebung. Die Nähe zum Flughafen München stellt besondere Anforderungen – wir erfüllen sie. Komplette Objektbetreuung aus einer Hand.',
    vorteile: [
      'Nähe zum Flughafen München',
      'Erfahrung mit Forschungseinrichtungen',
      'Schnelle Reaktionszeiten',
      'Umweltschonende Konzepte',
    ],
  },
  {
    id: 'erding',
    name: 'Erding',
    headline: 'Facility Management in Erding',
    subline: 'Professionelle Betreuung im wachsenden Landkreis',
    beschreibung: 'Facility Management in Erding für den boomenden Landkreis. Wir betreuen Gewerbeobjekte, Hotels und Wohnanlagen mit allen Dienstleistungen aus einer Hand.',
    vorteile: [
      'Lokale Präsenz im Landkreis',
      'Hotel- und Gastronomie-Erfahrung',
      'Winterdienst-Kompetenz',
      'Langfristige Partnerschaften',
    ],
  },
  {
    id: 'straubing',
    name: 'Straubing',
    headline: 'Facility Management in Straubing',
    subline: 'Gäuboden-Metropole professionell betreut',
    beschreibung: 'Professionelles Facility Management in Straubing und dem Gäuboden. Komplette Objektbetreuung für Industrie, Handel und Wohnanlagen – ein Partner für alle Dienstleistungen.',
    vorteile: [
      'Verwurzelt in Niederbayern',
      'Industriekompetenz Hafen',
      'Messe-Erfahrung',
      'Ganzjähriger Service',
    ],
  },
  {
    id: 'passau',
    name: 'Passau',
    headline: 'Facility Management in Passau',
    subline: 'Qualitätsservice in der Dreiflüssestadt',
    beschreibung: 'Facility Management in Passau bis zur österreichischen Grenze. Ganzheitliche Betreuung für Hotels, Büros und Gewerbeobjekte – mit Teams, die auch mehrsprachig kommunizieren können.',
    vorteile: [
      'Service bis zur Grenze',
      'Hotellerie und Tourismus',
      'Hochwasser-Notfallplanung',
      'Mehrsprachige Teams',
    ],
  },
]

const leistungen = [
  { name: 'Unterhaltsreinigung', href: '/leistungen/unterhaltsreinigung' },
  { name: 'Hausmeisterservice', href: '/leistungen/hausmeisterservice' },
  { name: 'Winterdienst', href: '/leistungen/winterdienst' },
  { name: 'Außenanlagenpflege', href: '/leistungen/aussenanlagenpflege' },
]

export default function RegionenSection() {
  const [activeStadt, setActiveStadt] = useState(staedte[0])
  const [expandedDescriptions, setExpandedDescriptions] = useState<Set<string>>(new Set())
  const tabsRef = useRef<HTMLDivElement>(null)
  const [canScrollLeft, setCanScrollLeft] = useState(false)
  const [canScrollRight, setCanScrollRight] = useState(true)

  const toggleDescription = (stadtId: string) => {
    setExpandedDescriptions(prev => {
      const newSet = new Set(prev)
      if (newSet.has(stadtId)) {
        newSet.delete(stadtId)
      } else {
        newSet.add(stadtId)
      }
      return newSet
    })
  }

  const checkScrollPosition = () => {
    if (tabsRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = tabsRef.current
      setCanScrollLeft(scrollLeft > 0)
      setCanScrollRight(scrollLeft < scrollWidth - clientWidth - 10)
    }
  }

  useEffect(() => {
    checkScrollPosition()
    window.addEventListener('resize', checkScrollPosition)
    return () => window.removeEventListener('resize', checkScrollPosition)
  }, [])

  const scroll = (direction: 'left' | 'right') => {
    if (tabsRef.current) {
      const scrollAmount = 200
      tabsRef.current.scrollBy({
        left: direction === 'left' ? -scrollAmount : scrollAmount,
        behavior: 'smooth'
      })
      setTimeout(checkScrollPosition, 300)
    }
  }

  return (
    <section id="regionen" className="bg-white" aria-labelledby="regionen-heading">

      {/* Sticky Header + Tabs */}
      <div className="sticky top-0 z-30 bg-white border-b border-gray-200 shadow-sm">
        <div className="w-full max-w-[1800px] mx-auto px-4 sm:px-6 md:px-8 lg:px-12 xl:px-20 py-4">

          <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-3">
            <div>
              <h2 id="regionen-heading" className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-[#109387] leading-[1.1]">
                Facility Management in ganz Bayern
              </h2>
              <p className="text-sm sm:text-base text-gray-700 font-semibold mt-1 sm:mt-2 hidden lg:block">
                Wählen Sie Ihre Stadt für lokale Informationen
              </p>
            </div>

            {/* City Tabs */}
            <div className="flex items-center gap-2">
              <button
                onClick={() => scroll('left')}
                className={`flex-shrink-0 w-9 h-9 sm:w-10 sm:h-10 rounded-[6px] border-2 border-[#012956] flex items-center justify-center transition-all duration-300
                  ${canScrollLeft ? 'bg-white text-[#012956] hover:bg-[#012956] hover:text-white cursor-pointer' : 'bg-gray-100 text-gray-300 border-gray-200 cursor-not-allowed'}`}
                disabled={!canScrollLeft}
                aria-label="Vorherige Städte"
              >
                <ChevronLeft size={18} strokeWidth={2.5} />
              </button>

              <div
                ref={tabsRef}
                onScroll={checkScrollPosition}
                className="flex gap-2 overflow-x-auto pb-2 -mb-2 scrollbar-hide"
                role="tablist"
              >
                {staedte.map((stadt) => (
                  <button
                    key={stadt.id}
                    onClick={() => setActiveStadt(stadt)}
                    role="tab"
                    aria-selected={activeStadt.id === stadt.id}
                    className={`px-3 sm:px-4 py-2 rounded-[6px] border-2 font-bold text-xs sm:text-sm whitespace-nowrap transition-all duration-300 flex-shrink-0
                      ${activeStadt.id === stadt.id ? 'border-[#012956] bg-[#012956] text-white' : 'border-[#012956] bg-white text-[#109387] hover:bg-[#f8f9fa]'}`}
                  >
                    {stadt.name}
                  </button>
                ))}
              </div>

              <button
                onClick={() => scroll('right')}
                className={`flex-shrink-0 w-9 h-9 sm:w-10 sm:h-10 rounded-[6px] border-2 border-[#012956] flex items-center justify-center transition-all duration-300
                  ${canScrollRight ? 'bg-white text-[#012956] hover:bg-[#012956] hover:text-white cursor-pointer' : 'bg-gray-100 text-gray-300 border-gray-200 cursor-not-allowed'}`}
                disabled={!canScrollRight}
                aria-label="Weitere Städte"
              >
                <ChevronRight size={18} strokeWidth={2.5} />
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Content Area */}
      <div className="w-full max-w-[1800px] mx-auto px-4 sm:px-6 md:px-8 lg:px-12 xl:px-20 py-8 sm:py-12 lg:py-16">

        <div className="grid lg:grid-cols-2 gap-6 sm:gap-8 lg:gap-12 items-stretch">

          {/* Left: Map */}
          <div className="w-full">
            <Image
              src="/images/home/staedte-fimi.avif"
              alt="Bayern Karte - FIMI Servicegebiete"
              width={4800}
              height={3584}
              className="w-full h-auto rounded-[6px]"
              priority
            />
            <Link
              href="/ueber-uns"
              className="inline-flex items-center gap-1.5 bg-[#012956] hover:bg-[#01203d] text-white font-semibold text-xs sm:text-sm px-3 py-2 rounded-[6px] mt-3 transition-colors group"
            >
              Mehr über FIMI
              <ArrowRight size={14} className="group-hover:translate-x-0.5 transition-transform" />
            </Link>
          </div>

          {/* Right: Content Panels */}
          <div className="relative flex flex-col">
            {staedte.map((stadt) => (
              <article
                key={stadt.id}
                role="tabpanel"
                aria-hidden={activeStadt.id !== stadt.id}
                className={`bg-[#f8f9fa] rounded-[6px] p-5 sm:p-6 lg:p-8 transition-opacity duration-300 flex flex-col
                  ${activeStadt.id === stadt.id ? 'opacity-100 relative flex-1' : 'opacity-0 absolute inset-0 pointer-events-none'}`}
              >
                <div className="flex items-center gap-2 text-[#109387] mb-2">
                  <MapPin className="w-4 h-4 sm:w-5 sm:h-5" />
                  <span className="text-xs sm:text-sm font-bold uppercase tracking-wide">8 Standorte in Bayern</span>
                </div>

                <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold text-[#109387] mb-2">
                  {stadt.headline}
                </h3>
                <p className="text-base sm:text-lg text-[#012956] font-bold mb-3 sm:mb-4">
                  {stadt.subline}
                </p>

                <div className="mb-4 sm:mb-6">
                  <p className="hidden lg:block text-gray-700 font-semibold leading-relaxed text-sm sm:text-base">
                    {stadt.beschreibung}
                  </p>
                  <div className="lg:hidden">
                    <p className={`text-gray-700 font-semibold leading-relaxed text-sm ${expandedDescriptions.has(stadt.id) ? '' : 'line-clamp-3'}`}>
                      {stadt.beschreibung}
                    </p>
                    <button
                      onClick={() => toggleDescription(stadt.id)}
                      className="mt-2 text-[#109387] font-bold text-sm hover:text-[#012956] transition-colors"
                    >
                      {expandedDescriptions.has(stadt.id) ? 'Weniger anzeigen' : 'Mehr anzeigen'}
                    </button>
                  </div>
                </div>

                <div className="mb-6 sm:mb-8">
                  <h4 className="text-xs sm:text-sm text-gray-500 font-semibold uppercase tracking-wide mb-2 sm:mb-3">
                    Ihre Vorteile in {stadt.name}
                  </h4>
                  <ul className="grid grid-cols-1 md:grid-cols-2 gap-2">
                    {stadt.vorteile.map((vorteil, index) => (
                      <li key={index} className="flex items-start gap-2 text-gray-700 font-semibold text-sm">
                        <CheckCircle className="w-4 h-4 text-[#109387] mt-0.5 flex-shrink-0" />
                        {vorteil}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="border-t border-gray-200 pt-4 sm:pt-6">
                  <h4 className="text-xs sm:text-sm text-gray-500 font-semibold uppercase tracking-wide mb-3 sm:mb-4">
                    FM-Leistungen in {stadt.name}
                  </h4>
                  <div className="grid grid-cols-2 gap-x-4 sm:gap-x-6 gap-y-2 sm:gap-y-3">
                    {leistungen.map((leistung) => (
                      <Link
                        key={leistung.href}
                        href={leistung.href}
                        className="flex items-center gap-2 text-[#109387] font-semibold hover:text-[#012956] transition-colors group py-1 text-sm"
                      >
                        <ArrowRight size={12} className="flex-shrink-0 group-hover:translate-x-1 transition-transform" />
                        <span>{leistung.name}</span>
                      </Link>
                    ))}
                  </div>
                </div>

                <div className="mt-auto pt-6 sm:pt-8">
                  <a
                    href="#contact-form"
                    className="flex items-center justify-center gap-2 sm:gap-3 bg-[#109387] hover:bg-[#0d7d72] text-white font-bold text-base sm:text-lg px-6 sm:px-8 py-3 sm:py-4 rounded-[6px] transition-all duration-300 group w-full"
                  >
                    Kostenfreie Beratung in {stadt.name}
                    <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                  </a>
                </div>
              </article>
            ))}
          </div>

        </div>
      </div>
    </section>
  )
}
