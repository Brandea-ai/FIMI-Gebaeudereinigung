'use client'

import { useState, useRef, useEffect } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { ArrowRight, ChevronLeft, ChevronRight } from 'lucide-react'

// Städte mit SEO-optimierten Inhalten (Keyword: "Gebäudereinigung in [Stadt]")
const staedte = [
  {
    id: 'landshut',
    name: 'Landshut',
    headline: 'Gebäudereinigung in Landshut',
    subline: 'Ihr lokaler Partner für saubere Geschäftsräume',
    beschreibung: 'Sie suchen eine zuverlässige Gebäudereinigung in Landshut? Als Landshuter Unternehmen kennen wir die Anforderungen der regionalen Wirtschaft. Ob Büroreinigung in der Altstadt, Industriereinigung im Gewerbegebiet Ergolding oder Unterhaltsreinigung für Ihr Unternehmen - wir sind schnell vor Ort und liefern konstante Qualität.',
    vorteile: [
      'Anfahrt innerhalb von 30 Minuten',
      'Lokale Teams die Ihre Räume kennen',
      'Flexible Reinigungszeiten',
      'Notfallservice in 2 Stunden',
    ],
  },
  {
    id: 'muenchen',
    name: 'München',
    headline: 'Gebäudereinigung in München',
    subline: 'Professionelle Reinigung für die Landeshauptstadt',
    beschreibung: 'Professionelle Gebäudereinigung in München mit höchsten Ansprüchen. Wir reinigen Bürokomplexe im Werksviertel, Arztpraxen in Schwabing, Produktionshallen im Münchner Norden und Geschäftsräume in der Innenstadt. Unsere Teams arbeiten diskret außerhalb Ihrer Geschäftszeiten.',
    vorteile: [
      'Erfahrung mit Münchner Großprojekten',
      'Teams in allen Stadtteilen',
      'Wochenend-Reinigung möglich',
      'Praxis- und Bürospezialisierung',
    ],
  },
  {
    id: 'regensburg',
    name: 'Regensburg',
    headline: 'Gebäudereinigung in Regensburg',
    subline: 'Von der Altstadt bis zum Gewerbepark',
    beschreibung: 'Ihre Gebäudereinigung in Regensburg - für UNESCO-Welterbe und moderne Industrie. Wir pflegen historische Gebäude in der Altstadt genauso sorgfältig wie High-Tech-Produktionsstätten im Gewerbepark. Regelmäßige Qualitätskontrollen sichern gleichbleibend hohe Standards.',
    vorteile: [
      'Erfahrung mit Denkmalschutz',
      'Industriereinigung Gewerbepark',
      'Schnell erreichbar über A3',
      'Qualitätskontrollen vor Ort',
    ],
  },
  {
    id: 'ingolstadt',
    name: 'Ingolstadt',
    headline: 'Gebäudereinigung in Ingolstadt',
    subline: 'Industriestandard für den Automobilstandort',
    beschreibung: 'Gebäudereinigung in Ingolstadt auf Industrieniveau. Der Automobilstandort verlangt Präzision und Zuverlässigkeit - genau das liefern wir. Für Zulieferer, Bürokomplexe und den Einzelhandel arbeiten wir nach den hohen Standards, die hier selbstverständlich sind.',
    vorteile: [
      'Automotive-Zulieferer Erfahrung',
      'Reinraum nach Industriestandard',
      'Flexible Schichtmodelle',
      'Prozesse nach ISO-Standards',
    ],
  },
  {
    id: 'freising',
    name: 'Freising',
    headline: 'Gebäudereinigung in Freising',
    subline: 'Zwischen Flughafen München und TU Weihenstephan',
    beschreibung: 'Zuverlässige Gebäudereinigung in Freising und Umgebung. Die Nähe zum Flughafen München und zur TU München stellt besondere Anforderungen an Sauberkeit und Flexibilität. Wir reinigen Büros, Forschungseinrichtungen und Gewerbeobjekte im gesamten Landkreis.',
    vorteile: [
      'Nähe zum Flughafen München',
      'Forschungseinrichtungen',
      'Garantierte Reaktionszeit',
      'Umweltschonende Mittel',
    ],
  },
  {
    id: 'erding',
    name: 'Erding',
    headline: 'Gebäudereinigung in Erding',
    subline: 'Professionelle Reinigung im wachsenden Landkreis',
    beschreibung: 'Ihre Gebäudereinigung in Erding - für den boomenden Landkreis. Erding wächst und mit ihm die Nachfrage nach professioneller Gebäudepflege. Wir betreuen Gewerbebetriebe, Hotels nahe der Therme und öffentliche Einrichtungen mit gleichbleibender Qualität.',
    vorteile: [
      'Lokale Präsenz Landkreis Erding',
      'Hotel- und Gastronomie-Erfahrung',
      'Winterdienst für Gewerbe',
      'Langfristige Partnerschaften',
    ],
  },
  {
    id: 'straubing',
    name: 'Straubing',
    headline: 'Gebäudereinigung in Straubing',
    subline: 'Gäuboden-Metropole professionell betreut',
    beschreibung: 'Professionelle Gebäudereinigung in Straubing und dem Gäuboden. Als Zentrum Niederbayerns vereint Straubing Tradition und Moderne. Unsere Teams kennen die Region und arbeiten für Industrie am Hafen, Handel in der Innenstadt und öffentliche Auftraggeber.',
    vorteile: [
      'Verwurzelt in Niederbayern',
      'Industriereinigung Hafen',
      'Messe-Vorbereitung',
      'Ganzjähriger Service',
    ],
  },
  {
    id: 'passau',
    name: 'Passau',
    headline: 'Gebäudereinigung in Passau',
    subline: 'Qualitätsreinigung in der Dreiflüssestadt',
    beschreibung: 'Gebäudereinigung in Passau bis zur österreichischen Grenze. Die Dreiflüssestadt ist unser östlichster Standort in Bayern. Wir reinigen Büros, Hotels und Gewerbeobjekte in der gesamten Region - mit Teams, die auch mehrsprachig kommunizieren können.',
    vorteile: [
      'Bis zur Grenze Österreich',
      'Hotellerie und Tourismus',
      'Hochwasser-Notfallplanung',
      'Mehrsprachige Teams',
    ],
  },
]

// Services für die Links
const services = [
  { name: 'Unterhaltsreinigung', href: '/leistungen/unterhaltsreinigung' },
  { name: 'Büroreinigung', href: '/leistungen/bueroreinigung' },
  { name: 'Industriereinigung', href: '/leistungen/industriereinigung' },
  { name: 'Fensterreinigung', href: '/leistungen/fensterreinigung' },
  { name: 'Facility Management', href: '/leistungen/facility-management' },
  { name: 'Winterdienst', href: '/leistungen/winterdienst' },
  { name: 'Hausmeisterservice', href: '/leistungen/hausmeisterservice' },
  { name: 'Baureinigung', href: '/leistungen/baureinigung' },
]

export default function RegionenContainer() {
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

  // Check scroll position
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
    <section
      id="regionen"
      className="bg-white"
      aria-labelledby="regionen-heading"
    >
      {/* Sticky Header + Tabs - top-0 da Navigation beim Scrollen verschwindet */}
      <div className="sticky top-0 z-30 bg-white border-b border-gray-200 shadow-sm">
        <div className="w-full max-w-[1800px] mx-auto px-6 lg:px-12 xl:px-20 py-4">

          {/* Header */}
          <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-3">
            <div>
              <h2
                id="regionen-heading"
                className="text-2xl md:text-3xl lg:text-4xl font-bold text-[#109387] leading-[1.1]"
              >
                Gebäudereinigung in ganz Bayern
              </h2>
              <p className="text-base text-gray-700 font-semibold mt-2 hidden lg:block">
                Wählen Sie Ihre Stadt für lokale Informationen
              </p>
            </div>

            {/* City Tabs - Horizontal scrollable with navigation */}
            <div className="flex items-center gap-2">
              {/* Left Arrow */}
              <button
                onClick={() => scroll('left')}
                className={`flex-shrink-0 w-10 h-10 rounded-[6px] border-2 border-[#012956] flex items-center justify-center transition-all duration-300
                  ${canScrollLeft
                    ? 'bg-white text-[#012956] hover:bg-[#012956] hover:text-white cursor-pointer'
                    : 'bg-gray-100 text-gray-300 border-gray-200 cursor-not-allowed'
                  }`}
                disabled={!canScrollLeft}
                aria-label="Vorherige Städte"
              >
                <ChevronLeft size={20} strokeWidth={2.5} />
              </button>

              {/* Tabs Container */}
              <div
                ref={tabsRef}
                onScroll={checkScrollPosition}
                className="flex gap-2 overflow-x-auto pb-2 -mb-2 scrollbar-hide"
                role="tablist"
                aria-label="Stadt auswählen"
              >
                {staedte.map((stadt) => (
                  <button
                    key={stadt.id}
                    onClick={() => setActiveStadt(stadt)}
                    role="tab"
                    aria-selected={activeStadt.id === stadt.id}
                    aria-controls={`panel-${stadt.id}`}
                    className={`px-4 py-2 rounded-[6px] border-2 font-bold text-sm whitespace-nowrap transition-all duration-300 flex-shrink-0
                      ${activeStadt.id === stadt.id
                        ? 'border-[#012956] bg-[#012956] text-white'
                        : 'border-[#012956] bg-white text-[#109387] hover:bg-[#f8f9fa]'
                      }`}
                  >
                    {stadt.name}
                  </button>
                ))}
              </div>

              {/* Right Arrow */}
              <button
                onClick={() => scroll('right')}
                className={`flex-shrink-0 w-10 h-10 rounded-[6px] border-2 border-[#012956] flex items-center justify-center transition-all duration-300
                  ${canScrollRight
                    ? 'bg-white text-[#012956] hover:bg-[#012956] hover:text-white cursor-pointer'
                    : 'bg-gray-100 text-gray-300 border-gray-200 cursor-not-allowed'
                  }`}
                disabled={!canScrollRight}
                aria-label="Weitere Städte"
              >
                <ChevronRight size={20} strokeWidth={2.5} />
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Content Area */}
      <div className="w-full max-w-[1800px] mx-auto px-6 lg:px-12 xl:px-20 py-12 lg:py-16">

        {/* Two Column Layout: 50/50 - gleiche Höhe */}
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-stretch">

          {/* Left: Map + Link */}
          <div className="w-full">
            {/* Bild Container */}
            <div className="relative w-full">
              <Image
                src="/images/home/staedte-fimi.avif"
                alt="Bayern Karte - FIMI Gebäudereinigung Servicegebiete"
                width={4800}
                height={3584}
                className="w-full h-auto rounded-[6px]"
                priority
              />
              {/* Desktop: Overlay Link auf dem Bild */}
              <Link
                href="/unternehmen"
                className="hidden lg:flex absolute bottom-8 left-4 right-4 bg-[#012956] rounded-[6px] px-6 py-4 items-center justify-center gap-3 group hover:bg-[#01203d] transition-all"
              >
                <span className="text-white font-bold text-lg">
                  Mehr über FIMI erfahren
                </span>
                <ArrowRight size={20} className="text-white group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
            {/* Mobile: Button unter dem Bild */}
            <Link
              href="/unternehmen"
              className="lg:hidden flex mt-4 bg-[#012956] rounded-[6px] px-6 py-4 items-center justify-center gap-3 group hover:bg-[#01203d] transition-all"
            >
              <span className="text-white font-bold text-lg">
                Mehr über FIMI erfahren
              </span>
              <ArrowRight size={20} className="text-white group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>

          {/* Right: Content Panels - ALLE für SEO, nur aktiver sichtbar */}
          <div className="relative flex flex-col">
            {staedte.map((stadt) => (
              <article
                key={stadt.id}
                id={`panel-${stadt.id}`}
                role="tabpanel"
                aria-labelledby={`tab-${stadt.id}`}
                aria-hidden={activeStadt.id !== stadt.id}
                className={`bg-[#f8f9fa] rounded-[6px] p-6 lg:p-8 transition-opacity duration-300 flex flex-col
                  ${activeStadt.id === stadt.id
                    ? 'opacity-100 relative flex-1'
                    : 'opacity-0 absolute inset-0 pointer-events-none'
                  }`}
              >
                {/* SEO Headline - h3 mit Keyword */}
                <h3 className="text-2xl lg:text-3xl font-bold text-[#109387] mb-2">
                  {stadt.headline}
                </h3>
                <p className="text-lg text-[#012956] font-bold mb-4">
                  {stadt.subline}
                </p>

                {/* SEO Description - Mobile: truncated with "mehr anzeigen", Desktop: full */}
                <div className="mb-6">
                  {/* Desktop: Always full text */}
                  <p className="hidden lg:block text-gray-700 font-semibold leading-relaxed">
                    {stadt.beschreibung}
                  </p>

                  {/* Mobile: Truncated with expand button */}
                  <div className="lg:hidden">
                    <p className={`text-gray-700 font-semibold leading-relaxed ${
                      expandedDescriptions.has(stadt.id) ? '' : 'line-clamp-3'
                    }`}>
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

                {/* Vorteile */}
                <div className="mb-8">
                  <h4 className="text-sm text-gray-500 font-semibold uppercase tracking-wide mb-3">
                    Ihre Vorteile in {stadt.name}
                  </h4>
                  <ul className="grid grid-cols-1 md:grid-cols-2 gap-2">
                    {stadt.vorteile.map((vorteil, index) => (
                      <li
                        key={index}
                        className="flex items-start gap-2 text-gray-700 font-semibold"
                      >
                        <span className="text-[#109387] mt-0.5">✓</span>
                        {vorteil}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Service Links - responsive grid */}
                <div className="border-t border-gray-200 pt-6">
                  <h4 className="text-sm text-gray-500 font-semibold uppercase tracking-wide mb-4">
                    Unsere Leistungen in {stadt.name}
                  </h4>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-3">
                    {services.map((service) => (
                      <Link
                        key={service.href}
                        href={service.href}
                        className="flex items-center gap-2 text-[#109387] font-semibold hover:text-[#012956] transition-colors group py-1"
                      >
                        <ArrowRight size={14} className="flex-shrink-0 group-hover:translate-x-1 transition-transform" />
                        <span className="text-sm sm:text-base">{service.name}</span>
                      </Link>
                    ))}
                  </div>
                </div>

                {/* CTA */}
                <div className="mt-auto pt-8">
                  <a
                    href="#contact-form"
                    className="flex items-center justify-center gap-3 bg-[#109387] hover:bg-[#0d7d72] text-white font-bold text-lg px-8 py-4 rounded-[6px] transition-all duration-300 group w-full"
                  >
                    Kostenfreie Besichtigung
                    <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
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
