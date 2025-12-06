'use client'

import { useState, useMemo, useEffect, useRef } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { ArrowRight, Check, Building2, Factory, Wrench, Sparkles, Search, X } from 'lucide-react'
import { leistungen, categories, getAllCategories } from '@/lib/leistungen-data'
import FadeIn from '@/components/FadeIn'
import PartnerLogosSlider from '@/components/PartnerLogosSlider'

const categoryIcons = {
  gewerblich: Building2,
  industrie: Factory,
  facility: Wrench,
  spezial: Sparkles,
}

// Kurze Labels für die Cards
const categoryShortLabels: Record<string, string> = {
  gewerblich: 'Gewerblich',
  industrie: 'Industrie',
  facility: 'Facility',
  spezial: 'Spezial',
}

// Suchbegriffe/Synonyme für jede Leistung - sehr umfangreich für beste Trefferquote
const searchTermsMap: Record<string, string[]> = {
  'unterhaltsreinigung': [
    'unterhalt', 'unterhalts', 'regelmäßig', 'regelmaessig', 'täglich', 'taeglich', 'wöchentlich', 'woechentlich',
    'daily', 'cleaning', 'gebäude', 'gebaeude', 'objekt', 'reinigung', 'sauber', 'putzen', 'putzfrau', 'putzmann',
    'raumpflege', 'raumpfleger', 'grundreinigung', 'intervall', 'dauerhaft', 'laufend', 'kontinuierlich'
  ],
  'bueroreinigung': [
    'büro', 'buero', 'office', 'arbeitsplatz', 'schreibtisch', 'arbeiten', 'firma', 'unternehmen', 'betrieb',
    'geschäft', 'geschaeft', 'praxis', 'kanzlei', 'agentur', 'verwaltung', 'administration', 'empfang',
    'konferenz', 'meeting', 'besprechung', 'arbeitsraum', 'workspace', 'coworking'
  ],
  'fensterreinigung': [
    'fenster', 'window', 'rahmen', 'fensterbank', 'fensterbrett', 'scheibe', 'glas', 'außen', 'aussen',
    'innen', 'höhe', 'hoehe', 'jalousie', 'rollladen', 'rollo', 'sonnenschutz', 'licht', 'tageslicht',
    'glasfläche', 'glasflaeche', 'verglasung', 'streifenfrei', 'klar', 'putzen', 'polieren', 'spiegel'
  ],
  'fassadenreinigung': [
    'fassade', 'außen', 'aussen', 'wand', 'mauer', 'hauswand', 'gebäudehülle', 'gebaeudehulle',
    'algen', 'moos', 'grünbelag', 'gruenbelag', 'verschmutzung', 'hochdruck', 'kärcher', 'kaercher',
    'außenwand', 'aussenwand', 'verkleidung', 'putz', 'klinker', 'stein'
  ],
  'industriereinigung': [
    'industrie', 'produktion', 'fertigung', 'fabrik', 'werk', 'industrial', 'manufacturing',
    'maschine', 'anlage', 'technik', 'technisch', 'schwer', 'öl', 'oel', 'fett', 'späne', 'spaene',
    'metall', 'staub', 'produktionshalle', 'werkhalle'
  ],
  'hallenreinigung': [
    'halle', 'lagerhalle', 'produktionshalle', 'logistik', 'lager', 'warehouse', 'großfläche', 'grossflaeche',
    'boden', 'fußboden', 'fussboden', 'fläche', 'flaeche', 'groß', 'gross', 'big', 'riesig', 'industrieboden'
  ],
  'maschinenreinigung': [
    'maschine', 'anlage', 'gerät', 'geraet', 'equipment', 'technik', 'technisch', 'produktion',
    'wartung', 'pflege', 'öl', 'oel', 'fett', 'schmierstoff', 'späne', 'spaene', 'cnc', 'fräse', 'fraese',
    'drehe', 'presse', 'roboter', 'automat'
  ],
  'tiefgaragenreinigung': [
    'tiefgarage', 'garage', 'parkhaus', 'parkdeck', 'parken', 'auto', 'fahrzeug', 'kfz', 'pkw',
    'stellplatz', 'untergrund', 'keller', 'öl', 'oel', 'ölfleck', 'oelfleck', 'reifen', 'abrieb',
    'streusalz', 'salz', 'winter'
  ],
  'parkplatzreinigung': [
    'parkplatz', 'parken', 'stellfläche', 'stellflaeche', 'außen', 'aussen', 'draußen', 'draussen',
    'asphalt', 'pflaster', 'laub', 'unkraut', 'kehren', 'fegen', 'markierung', 'linie', 'betriebshof'
  ],
  'facility-management': [
    'facility', 'management', 'gebäude', 'gebaeude', 'verwaltung', 'betreuung', 'fullservice', 'full-service',
    'alles', 'komplett', 'rundum', 'ganzheitlich', 'one-stop', 'ansprechpartner', 'koordination',
    'dienstleistung', 'service', 'objekt', 'immobilie'
  ],
  'hausmeisterservice': [
    'hausmeister', 'hauswart', 'facility', 'handwerk', 'reparatur', 'kleinreparatur', 'technik',
    'wartung', 'kontrolle', 'rundgang', 'müll', 'muell', 'abfall', 'entsorgung', 'schlüssel', 'schluessel',
    'notfall', 'bereitschaft', 'handwerker'
  ],
  'winterdienst': [
    'winter', 'schnee', 'eis', 'frost', 'glätte', 'glaette', 'räumen', 'raeumen', 'streuen', 'salz',
    'granulat', 'rutsch', 'gefahr', 'sicherheit', 'früh', 'frueh', 'morgen', 'nacht', 'bereitschaft',
    'räumpflicht', 'raeumpflicht', 'verkehrssicherung'
  ],
  'aussenanlagenpflege': [
    'außen', 'aussen', 'garten', 'grün', 'gruen', 'rasen', 'mähen', 'maehen', 'hecke', 'schneiden',
    'beet', 'pflanze', 'baum', 'strauch', 'laub', 'herbst', 'pflege', 'gärtner', 'gaertner',
    'landschaft', 'landscape', 'outdoor'
  ],
  'baureinigung': [
    'bau', 'baustelle', 'neubau', 'renovierung', 'sanierung', 'umbau', 'handwerker', 'staub', 'baustaub',
    'dreck', 'schutt', 'abfall', 'fertig', 'bezugsfertig', 'übergabe', 'uebergabe', 'abnahme',
    'endreinigung', 'fein', 'grob'
  ],
  'sonderreinigung': [
    'sonder', 'spezial', 'special', 'besonders', 'individuell', 'teppich', 'polster', 'möbel', 'moebel',
    'stein', 'marmor', 'granit', 'graffiti', 'vandalismus', 'beschmierung', 'fleck', 'entfernung'
  ],
  'sonderleistungen': [
    'sonder', 'extra', 'zusatz', 'individuell', 'maßgeschneidert', 'massgeschneidert', 'event', 'veranstaltung',
    'messe', 'umzug', 'einzug', 'auszug', 'einmalig', 'flexibel', 'kurzfristig', 'spontan'
  ],
  'beschaffungsmanagement': [
    'beschaffung', 'einkauf', 'material', 'hygiene', 'artikel', 'papier', 'toilette', 'seife', 'handtuch',
    'verbrauch', 'nachfüllen', 'nachfuellen', 'bestellung', 'lieferung', 'lager', 'vorrat', 'spender'
  ],
}

// Funktion um zu prüfen ob ein Suchbegriff zu einer Leistung passt
function matchesSearch(leistungSlug: string, searchQuery: string): boolean {
  if (!searchQuery.trim()) return true

  const query = searchQuery.toLowerCase().trim()
  const terms = searchTermsMap[leistungSlug] || []
  const leistung = leistungen.find(l => l.slug === leistungSlug)

  if (!leistung) return false

  // Prüfe alle Suchbegriffe
  const allSearchableText = [
    leistung.name.toLowerCase(),
    leistung.shortName.toLowerCase(),
    leistung.description.toLowerCase(),
    ...leistung.keywords.map(k => k.toLowerCase()),
    ...terms
  ].join(' ')

  // Teile die Suchanfrage in einzelne Wörter
  const queryWords = query.split(/\s+/)

  // Alle Wörter müssen gefunden werden
  return queryWords.every(word => allSearchableText.includes(word))
}

export default function LeistungenPage() {
  const [activeFilter, setActiveFilter] = useState<string>('alle')
  const [searchQuery, setSearchQuery] = useState<string>('')
  const [showStickyFilter, setShowStickyFilter] = useState(false)
  const heroRef = useRef<HTMLElement>(null)
  const gridSectionRef = useRef<HTMLElement>(null)

  const filteredLeistungen = useMemo(() => {
    let result = leistungen

    // Erst nach Kategorie filtern
    if (activeFilter !== 'alle') {
      result = result.filter(l => l.category === activeFilter)
    }

    // Dann nach Suchbegriff filtern
    if (searchQuery.trim()) {
      result = result.filter(l => matchesSearch(l.slug, searchQuery))
    }

    return result
  }, [activeFilter, searchQuery])

  const allCategories = getAllCategories()

  // Scroll-Detection für sticky Filter
  // Zeigt sticky bar nur zwischen Hero-Ende und Grid-Section-Ende
  useEffect(() => {
    const handleScroll = () => {
      if (heroRef.current && gridSectionRef.current) {
        const heroBottom = heroRef.current.getBoundingClientRect().bottom
        const gridBottom = gridSectionRef.current.getBoundingClientRect().bottom
        const stickyBarHeight = 100 // Ungefähre Höhe der Sticky Bar
        setShowStickyFilter(heroBottom < 0 && gridBottom > stickyBarHeight)
      }
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    handleScroll() // Initial check

    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const handleCategoryClick = (categoryId: string) => {
    setActiveFilter(categoryId)
    setSearchQuery('') // Suche zurücksetzen bei Kategorie-Wechsel
    document.getElementById('leistungen-grid')?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <main className="min-h-screen bg-white">
      {/* Hero Section */}
      <section ref={heroRef} className="relative bg-[#012956] py-12 md:py-16 lg:py-20 xl:py-28 overflow-hidden" aria-labelledby="leistungen-hero-title">
        {/* Background Pattern */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-[#109387]/10 to-transparent" />
        </div>

        <div className="relative w-full max-w-[1800px] mx-auto px-6 lg:px-12 xl:px-20">
          {/* Mobile & Desktop Content */}
          <div className="text-center lg:text-left lg:grid lg:grid-cols-2 lg:gap-12 xl:gap-20 lg:items-start">
            {/* Content */}
            <div className="lg:pt-4">
              <p className="text-sm text-[#109387] font-semibold uppercase tracking-wide mb-3">
                Unsere Leistungen
              </p>

              <h1 id="leistungen-hero-title" className="text-3xl sm:text-4xl md:text-5xl lg:text-4xl xl:text-5xl 2xl:text-6xl font-bold text-white leading-[1.15] mb-4 lg:mb-5">
                18 professionelle
                <span className="block text-[#109387] mt-1 lg:mt-2">Reinigungsservices</span>
              </h1>

              <p className="text-base sm:text-lg lg:text-base xl:text-lg text-white/80 font-semibold leading-relaxed mb-6 lg:mb-8 max-w-xl mx-auto lg:mx-0">
                Von der täglichen Büroreinigung bis zur spezialisierten Industriereinigung –
                wir haben die passende Lösung für Ihr Unternehmen.
              </p>

              {/* Quick Stats */}
              <div className="flex flex-wrap justify-center lg:justify-start gap-6 lg:gap-8 xl:gap-10 mb-6 lg:mb-8">
                {[
                  { value: '18', label: 'Services' },
                  { value: '4', label: 'Kategorien' },
                  { value: '48h', label: 'Angebot' },
                ].map((stat, i) => (
                  <div key={i} className="text-center">
                    <div className="text-[#109387] font-bold text-3xl lg:text-3xl xl:text-4xl">{stat.value}</div>
                    <div className="text-white/60 font-semibold text-sm">{stat.label}</div>
                  </div>
                ))}
              </div>

              <a
                href="#contact-form"
                className="inline-flex items-center gap-3 bg-[#109387] hover:bg-[#0d7d72] text-white font-bold text-base lg:text-lg px-6 lg:px-8 py-3 lg:py-4 rounded-[6px] transition-all duration-300 group"
              >
                Kostenfreie Besichtigung
                <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
              </a>
            </div>

            {/* Category Cards - Desktop only - Premium Design */}
            <div className="hidden lg:grid grid-cols-2 gap-3 xl:gap-5">
              {allCategories.map((cat) => {
                const IconComponent = categoryIcons[cat.id as keyof typeof categoryIcons]
                const count = leistungen.filter(l => l.category === cat.id).length
                return (
                  <button
                    key={cat.id}
                    onClick={() => handleCategoryClick(cat.id)}
                    className="group p-5 xl:p-8 bg-white/5 hover:bg-white/10 rounded-[6px] text-left transition-all duration-300 border border-white/10 hover:border-[#109387]/50 hover:scale-[1.02]"
                  >
                    <div className="w-12 h-12 xl:w-16 xl:h-16 bg-[#109387]/10 rounded-[6px] flex items-center justify-center mb-3 xl:mb-4 group-hover:bg-[#109387]/20 transition-colors">
                      <IconComponent size={24} className="xl:hidden text-[#109387]" strokeWidth={1.5} />
                      <IconComponent size={32} className="hidden xl:block text-[#109387]" strokeWidth={1.5} />
                    </div>
                    <h3 className="text-white font-bold text-lg xl:text-xl mb-1">{categoryShortLabels[cat.id]}</h3>
                    <p className="text-white/60 font-semibold text-sm xl:text-base mb-3 xl:mb-4">{count} Leistungen</p>
                    <span className="inline-flex items-center gap-2 text-[#109387] font-bold text-sm xl:text-base group-hover:gap-3 transition-all">
                      Anzeigen <ArrowRight size={18} />
                    </span>
                  </button>
                )
              })}
            </div>
          </div>

          {/* Mobile Category Quick Select */}
          <div className="lg:hidden mt-10 grid grid-cols-2 gap-4">
            {allCategories.map((cat) => {
              const IconComponent = categoryIcons[cat.id as keyof typeof categoryIcons]
              const count = leistungen.filter(l => l.category === cat.id).length
              return (
                <button
                  key={cat.id}
                  onClick={() => handleCategoryClick(cat.id)}
                  className="flex items-center gap-4 p-4 bg-white/5 rounded-[6px] text-left border border-white/10 active:bg-white/10"
                >
                  <IconComponent size={28} strokeWidth={1.5} className="text-[#109387] flex-shrink-0" />
                  <div>
                    <p className="text-white font-bold">{categoryShortLabels[cat.id]}</p>
                    <p className="text-white/50 font-semibold text-sm">{count} Services</p>
                  </div>
                </button>
              )
            })}
          </div>
        </div>
      </section>

      {/* Filter Section mit Suche - Fixed, erscheint nur zwischen Hero und Grid-Ende */}
      <div
        className={`fixed top-0 left-0 right-0 z-30 bg-white border-b border-gray-200 shadow-lg transition-all duration-500 ease-out ${
          showStickyFilter
            ? 'translate-y-0 opacity-100'
            : '-translate-y-full opacity-0 pointer-events-none'
        }`}
      >
        <div className="w-full max-w-[1800px] mx-auto px-6 lg:px-12 xl:px-20">
          <div className="flex flex-col md:flex-row md:items-center gap-4 py-4">
            {/* Suchfeld */}
            <div className="relative flex-1 max-w-md" role="search">
              <Search size={20} className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" aria-hidden="true" />
              <input
                type="text"
                placeholder="Suchen... z.B. Büro, Fenster, Industrie"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                aria-label="Leistungen durchsuchen"
                className="w-full pl-12 pr-10 py-3 rounded-[6px] border border-gray-200 bg-[#f8f9fa] font-semibold text-[#012956] placeholder:text-gray-400 focus:outline-none focus:border-[#109387] focus:ring-2 focus:ring-[#109387]/20 transition-all"
              />
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery('')}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600 transition-colors"
                  aria-label="Suche zurücksetzen"
                >
                  <X size={18} aria-hidden="true" />
                </button>
              )}
            </div>

            {/* Filter Buttons - kompakter auf Mobile */}
            <div className="flex items-center gap-1.5 sm:gap-2 overflow-x-auto scrollbar-hide" role="group" aria-label="Leistungen nach Kategorie filtern">
              <button
                onClick={() => { setActiveFilter('alle'); setSearchQuery(''); }}
                className={`px-3 sm:px-5 py-2 sm:py-2.5 rounded-[6px] font-bold text-sm sm:text-base whitespace-nowrap transition-all ${
                  activeFilter === 'alle' && !searchQuery
                    ? 'bg-[#012956] text-white'
                    : 'bg-[#f8f9fa] text-[#012956] hover:bg-[#012956] hover:text-white'
                }`}
                aria-pressed={activeFilter === 'alle' && !searchQuery}
              >
                Alle
              </button>
              {allCategories.map((cat) => (
                <button
                  key={cat.id}
                  onClick={() => { setActiveFilter(cat.id); setSearchQuery(''); }}
                  className={`px-3 sm:px-5 py-2 sm:py-2.5 rounded-[6px] font-bold text-sm sm:text-base whitespace-nowrap transition-all ${
                    activeFilter === cat.id && !searchQuery
                      ? 'bg-[#012956] text-white'
                      : 'bg-[#f8f9fa] text-[#012956] hover:bg-[#012956] hover:text-white'
                  }`}
                  aria-pressed={activeFilter === cat.id && !searchQuery}
                >
                  {categoryShortLabels[cat.id]}
                </button>
              ))}
            </div>
          </div>

          {/* Suchergebnis Info */}
          {searchQuery && (
            <div className="pb-4 -mt-2" aria-live="polite" aria-atomic="true">
              <p className="text-gray-600 font-semibold">
                {filteredLeistungen.length === 0 ? (
                  <span>Keine Ergebnisse für „{searchQuery}"</span>
                ) : (
                  <span>{filteredLeistungen.length} Ergebnis{filteredLeistungen.length !== 1 ? 'se' : ''} für „{searchQuery}"</span>
                )}
              </p>
            </div>
          )}
        </div>
      </div>

      {/* Leistungen Grid */}
      <section ref={gridSectionRef} id="leistungen-grid" className="py-16 lg:py-28 bg-[#f8f9fa]" aria-labelledby="leistungen-grid-title">
        <div className="w-full max-w-[1800px] mx-auto px-6 lg:px-12 xl:px-20">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 id="leistungen-grid-title" className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#012956] leading-[1.1] mb-4">
              {searchQuery
                ? 'Suchergebnisse'
                : activeFilter === 'alle'
                  ? 'Alle Leistungen im Überblick'
                  : categories[activeFilter as keyof typeof categories]?.label
              }
            </h2>
            <p className="text-lg text-gray-700 font-semibold leading-relaxed max-w-2xl mx-auto">
              {searchQuery
                ? `Leistungen passend zu Ihrer Suche nach „${searchQuery}"`
                : activeFilter === 'alle'
                  ? 'Entdecken Sie unser vollständiges Leistungsspektrum für Ihr Unternehmen.'
                  : categories[activeFilter as keyof typeof categories]?.description
              }
            </p>
          </div>

          {/* Grid oder Keine Ergebnisse */}
          {filteredLeistungen.length === 0 ? (
            <div className="text-center py-16">
              <div className="w-20 h-20 bg-gray-200 rounded-full flex items-center justify-center mx-auto mb-6">
                <Search size={32} className="text-gray-400" />
              </div>
              <h3 className="text-2xl font-bold text-[#012956] mb-3">Keine Ergebnisse gefunden</h3>
              <p className="text-lg text-gray-600 font-semibold mb-6">
                Versuchen Sie es mit anderen Suchbegriffen oder wählen Sie eine Kategorie.
              </p>
              <button
                onClick={() => { setSearchQuery(''); setActiveFilter('alle'); }}
                className="inline-flex items-center gap-2 bg-[#109387] hover:bg-[#0d7d72] text-white font-bold px-6 py-3 rounded-[6px] transition-all"
              >
                Alle Leistungen anzeigen
              </button>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredLeistungen.map((leistung) => {
                const IconComponent = categoryIcons[leistung.category]
                return (
                  <Link
                    key={leistung.id}
                    href={`/leistungen/${leistung.slug}`}
                    className="group bg-white rounded-[6px] overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300"
                  >
                    {/* Image */}
                    <div className="relative h-52 lg:h-60 overflow-hidden">
                      <Image
                        src={leistung.image}
                        alt={leistung.name}
                        fill
                        className="object-cover transition-transform duration-500 group-hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-[#012956]/80 via-transparent to-transparent" />

                      {/* Category Badge */}
                      <div className="absolute top-4 left-4">
                        <span
                          className="inline-flex items-center gap-2 px-3 py-1.5 rounded-[4px] text-white font-bold text-sm"
                          style={{ backgroundColor: categories[leistung.category].color }}
                        >
                          <IconComponent size={14} strokeWidth={2} />
                          {categoryShortLabels[leistung.category]}
                        </span>
                      </div>

                      {/* Title Overlay */}
                      <div className="absolute bottom-4 left-4 right-4">
                        <h3 className="text-white font-bold text-2xl">
                          {leistung.name}
                        </h3>
                      </div>
                    </div>

                    {/* Content */}
                    <div className="p-8">
                      <p className="text-gray-700 font-semibold leading-relaxed mb-6 line-clamp-2">
                        {leistung.description}
                      </p>

                      {/* Benefits Preview */}
                      <div className="space-y-3 mb-6">
                        {leistung.benefits.slice(0, 2).map((benefit, i) => (
                          <div key={i} className="flex items-center gap-3">
                            <Check size={18} strokeWidth={2.5} className="text-[#109387] flex-shrink-0" />
                            <span className="text-gray-700 font-semibold">{benefit}</span>
                          </div>
                        ))}
                      </div>

                      {/* CTA */}
                      <div className="flex items-center justify-between pt-6 border-t border-gray-100">
                        <span className="text-[#109387] font-bold text-lg">
                          Mehr erfahren
                        </span>
                        <ArrowRight
                          size={20}
                          strokeWidth={2}
                          className="text-[#109387] group-hover:translate-x-1 transition-transform"
                        />
                      </div>
                    </div>
                  </Link>
                )
              })}
            </div>
          )}
        </div>
      </section>

      {/* Partner Trust - Professionelle Ausrüstung (VOR Warum FIMI) */}
      <PartnerLogosSlider
        showHeader={true}
        showStats={false}
        bgColor="#ffffff"
      />

      {/* Why Choose Us */}
      <section className="py-20 lg:py-28 bg-[#f8f9fa]" aria-labelledby="warum-fimi-title">
        <div className="w-full max-w-[1800px] mx-auto px-6 lg:px-12 xl:px-20">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            {/* Content */}
            <FadeIn direction="left" className="order-2 lg:order-1">
              <div>
                <p className="text-sm text-gray-500 font-semibold uppercase tracking-wide mb-3">
                  Warum FIMI
                </p>
                <h2 id="warum-fimi-title" className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#109387] leading-[1.1] mb-6">
                  Qualität, die Sie überzeugt
                </h2>
                <p className="text-lg text-gray-700 font-semibold leading-relaxed mb-10">
                  Seit über 8 Jahren vertrauen Unternehmen in ganz Bayern auf unsere Expertise.
                  Wir kennen die Anforderungen verschiedener Branchen und liefern zuverlässig.
                </p>

                <div className="space-y-6">
                  {[
                    { title: 'Geschultes Stammpersonal', desc: 'Feste Teams, die Ihr Objekt kennen' },
                    { title: 'Umweltfreundliche Reinigung', desc: 'Nachhaltige Verfahren' },
                    { title: 'Flexible Verträge', desc: 'Monatlich kündbar' },
                    { title: 'Persönlicher Ansprechpartner', desc: 'Direkter Draht zu Ihrem Objektleiter' },
                  ].map((item, i) => (
                    <div key={i} className="flex items-start gap-4">
                      <Check size={24} strokeWidth={2.5} className="text-[#109387] flex-shrink-0 mt-0.5" />
                      <div>
                        <h3 className="font-bold text-[#012956] text-lg">{item.title}</h3>
                        <p className="text-gray-700 font-semibold">{item.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </FadeIn>

            {/* Image */}
            <FadeIn direction="right" className="relative order-1 lg:order-2">
              <div className="relative h-80 lg:h-[550px] rounded-[6px] overflow-hidden">
                <Image
                  src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?q=80&w=800&auto=format&fit=crop"
                  alt="FIMI Team bei der Arbeit"
                  fill
                  className="object-cover"
                />
              </div>
              {/* Stats Overlay */}
              <div className="absolute -bottom-6 left-6 lg:-left-6 bg-[#012956] p-6 lg:p-8 rounded-[6px] shadow-xl">
                <div className="text-[#109387] font-bold text-5xl lg:text-6xl mb-1">8+</div>
                <div className="text-white font-bold text-lg">Jahre</div>
                <div className="text-white/60 font-semibold">Erfahrung</div>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>


      {/* CTA Section */}
      <section className="py-20 lg:py-28 bg-[#012956]" aria-labelledby="leistungen-cta-title">
        <div className="w-full max-w-[1800px] mx-auto px-6 lg:px-12 xl:px-20">
          <FadeIn>
            <div className="text-center max-w-3xl mx-auto">
              <p className="text-sm text-gray-400 font-semibold uppercase tracking-wide mb-3">
                Jetzt starten
              </p>
              <h2 id="leistungen-cta-title" className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#109387] leading-[1.1] mb-6">
                Kostenfreie Besichtigung in 48 Stunden
              </h2>
              <p className="text-lg text-white/80 font-semibold leading-relaxed mb-10">
                Wir schauen uns Ihre Räume an und erstellen ein transparentes Angebot.
                Unverbindlich und ohne versteckte Kosten.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="#contact-form"
                  className="inline-flex items-center justify-center gap-3 bg-[#109387] hover:bg-[#0d7d72] text-white font-bold text-lg px-8 py-4 rounded-[6px] transition-all duration-300 group"
                >
                  Besichtigung anfragen
                  <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
                </a>
                <a
                  href="tel:+4987143033460"
                  className="inline-flex items-center justify-center gap-3 bg-white hover:bg-gray-100 text-[#012956] font-bold text-lg px-8 py-4 rounded-[6px] transition-all duration-300"
                >
                  0871 430 334 60
                </a>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>
    </main>
  )
}
