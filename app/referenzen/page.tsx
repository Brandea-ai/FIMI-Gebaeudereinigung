'use client'

import { useState, useMemo, useEffect, useRef } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { motion, AnimatePresence } from 'framer-motion'
import { Award, Building2, Maximize2, X, ArrowRight, CheckCircle, Search } from 'lucide-react'
import QualityTrustBar from '@/components/QualityTrustBar'
import { referenzen, type Referenz } from '@/lib/referenzen-data'
import { leistungen } from '@/lib/leistungen-data'
import { branchen } from '@/lib/branchen-data'

// =====================================================
// UMFANGREICHE SYNONYM-MAP FÜR BRANCHEN & SZENARIEN
// Verschiedene Schreibweisen, Synonyme, verwandte Begriffe
// =====================================================
const branchenSynonyms: Record<string, string[]> = {
  'buero-verwaltung': [
    // Deutsch
    'büro', 'buero', 'office', 'verwaltung', 'administration', 'geschäft', 'geschaeft',
    'firma', 'unternehmen', 'betrieb', 'arbeitsplatz', 'arbeitsplätze', 'arbeitsplaetze',
    'schreibtisch', 'konferenz', 'meeting', 'besprechung', 'empfang', 'rezeption',
    'kanzlei', 'praxis', 'agentur', 'beratung', 'consulting', 'coworking', 'workspace',
    'open space', 'großraumbüro', 'grossraumbuero', 'einzelbüro', 'einzelbuero',
    'verwaltungsgebäude', 'verwaltungsgebaeude', 'geschäftsräume', 'geschaeftsraeume',
    'bürokomplex', 'buerokomplex', 'business center', 'gewerbe', 'dienstleistung',
  ],
  'industrie-produktion': [
    // Industrie allgemein
    'industrie', 'industrial', 'produktion', 'production', 'fertigung', 'manufacturing',
    'fabrik', 'werk', 'factory', 'halle', 'produktionshalle', 'werkhalle', 'fertigungshalle',
    // Spezifisch
    'maschine', 'maschinen', 'anlage', 'anlagen', 'cnc', 'fräse', 'fraese', 'drehe',
    'metall', 'metallbau', 'stahl', 'automotive', 'auto', 'automobil', 'zulieferer',
    'kunststoff', 'plastik', 'elektronik', 'elektro', 'montage', 'assembly',
    'schweißen', 'schweissen', 'lackieren', 'beschichten', 'stanzen', 'pressen',
    'werkstatt', 'werkstätte', 'werkstaette', 'betriebshalle', 'industriegebäude',
  ],
  'gesundheitswesen': [
    // Medizinisch
    'gesundheit', 'health', 'healthcare', 'medizin', 'medical', 'medizinisch',
    'krankenhaus', 'klinik', 'hospital', 'clinic', 'klinikum', 'spital',
    'arzt', 'ärzte', 'aerzte', 'arztpraxis', 'praxis', 'ordination',
    'zahnarzt', 'zahnärzte', 'zahnaerzte', 'dental', 'dentist', 'zahnarztpraxis',
    'pflege', 'pflegeheim', 'altenheim', 'seniorenheim', 'altenpflege', 'care',
    'reha', 'rehabilitation', 'therapie', 'physiotherapie', 'physio',
    'apotheke', 'pharmacy', 'labor', 'laboratorium', 'röntgen', 'roentgen',
    'op', 'operationssaal', 'intensiv', 'intensivstation', 'station', 'ambulanz',
    'sanitär', 'sanitaer', 'hygiene', 'desinfektion', 'steril', 'sterilisation',
  ],
  'einzelhandel': [
    // Handel allgemein
    'handel', 'einzelhandel', 'retail', 'geschäft', 'geschaeft', 'laden', 'shop', 'store',
    'kaufhaus', 'warenhaus', 'einkaufszentrum', 'mall', 'shopping', 'center', 'centre',
    'supermarkt', 'markt', 'discounter', 'lebensmittel', 'food', 'grocery',
    'boutique', 'mode', 'fashion', 'bekleidung', 'textil', 'kleidung',
    'möbel', 'moebel', 'furniture', 'einrichtung', 'deko', 'dekoration',
    'elektro', 'elektronik', 'technik', 'media', 'computer', 'handy',
    'drogerie', 'parfümerie', 'parfuemerie', 'kosmetik', 'beauty',
    'baumarkt', 'heimwerker', 'garten', 'baumaterial', 'werkzeug',
    'schaufenster', 'verkaufsraum', 'verkaufsfläche', 'verkaufsflaeche', 'filiale',
  ],
  'hotellerie-gastronomie': [
    // Hotel
    'hotel', 'hotels', 'hotellerie', 'hotelgewerbe', 'beherbergung', 'übernachtung', 'uebernachtung',
    'pension', 'gasthof', 'gasthaus', 'motel', 'hostel', 'jugendherberge',
    'resort', 'spa', 'wellness', 'ferienhotel', 'stadthotel', 'businesshotel',
    'lobby', 'rezeption', 'empfang', 'zimmer', 'hotelzimmer', 'suite',
    // Gastronomie
    'gastronomie', 'gastro', 'restaurant', 'restaurants', 'lokal', 'gaststätte', 'gaststaette',
    'cafe', 'café', 'kaffee', 'coffee', 'bistro', 'bar', 'pub', 'kneipe',
    'küche', 'kueche', 'kitchen', 'großküche', 'grosskueche', 'kantine', 'mensa',
    'essen', 'speisen', 'food', 'catering', 'event', 'bankett', 'buffet',
    'imbiss', 'fastfood', 'fast food', 'schnellrestaurant', 'pizzeria', 'döner', 'doener',
    'gastgewerbe', 'gastronomiebetrieb', 'systemgastronomie', 'feinkost', 'bäckerei', 'baeckerei',
  ],
  'bildung': [
    // Schulen
    'bildung', 'education', 'schule', 'schulen', 'school', 'schulgebäude', 'schulgebaeude',
    'grundschule', 'hauptschule', 'realschule', 'gymnasium', 'gesamtschule', 'berufsschule',
    'unterricht', 'klassenzimmer', 'klassenraum', 'aula', 'turnhalle', 'sporthalle',
    // Hochschulen
    'uni', 'universität', 'universitaet', 'university', 'hochschule', 'fachhochschule', 'fh',
    'campus', 'hörsaal', 'hoersaal', 'seminar', 'seminarraum', 'bibliothek', 'mensa',
    // Kitas
    'kita', 'kindergarten', 'kindertagesstätte', 'kindertagesstaette', 'krippe', 'hort',
    'kind', 'kinder', 'betreuung', 'spielen', 'spielplatz', 'erziehung',
    // Weiterbildung
    'akademie', 'institut', 'fortbildung', 'weiterbildung', 'training', 'schulung',
    'volkshochschule', 'vhs', 'musikschule', 'tanzschule', 'fahrschule',
  ],
  'logistik-lager': [
    // Logistik
    'logistik', 'logistics', 'spedition', 'transport', 'versand', 'shipping',
    'distribution', 'verteilung', 'lieferung', 'zustellung', 'paket', 'post',
    // Lager
    'lager', 'lagerhalle', 'warehouse', 'lagerfläche', 'lagerflaeche', 'lagerraum',
    'hochregallager', 'regal', 'regale', 'paletten', 'stapler', 'gabelstapler',
    'kommissionierung', 'picking', 'verpackung', 'packstation', 'umschlag',
    // Flächen
    'halle', 'hallen', 'großfläche', 'grossflaeche', 'industriefläche', 'industrieflaeche',
    'gewerbehalle', 'gewerbegebiet', 'güterverkehr', 'gueterverkehr', 'fracht', 'cargo',
  ],
  'oeffentlich': [
    // Behörden
    'öffentlich', 'oeffentlich', 'public', 'behörde', 'behoerde', 'amt', 'ämter', 'aemter',
    'rathaus', 'stadtverwaltung', 'gemeindeverwaltung', 'landratsamt', 'finanzamt',
    'arbeitsamt', 'jobcenter', 'bürgeramt', 'buergeramt', 'einwohnermeldeamt',
    'standesamt', 'bauamt', 'ordnungsamt', 'jugendamt', 'sozialamt',
    // Kultur
    'museum', 'museen', 'galerie', 'ausstellung', 'theater', 'oper', 'konzerthaus',
    'bibliothek', 'bücherei', 'buecherei', 'archiv', 'kulturzentrum',
    // Sport & Freizeit
    'schwimmbad', 'hallenbad', 'freibad', 'therme', 'sauna', 'fitnessstudio', 'gym',
    'stadion', 'arena', 'sporthalle', 'turnhalle', 'sportplatz', 'sportanlage',
    'gemeinde', 'kirche', 'pfarrheim', 'vereinsheim', 'bürgerhaus', 'buergerhaus',
  ],
  'wohnungswirtschaft': [
    // Wohnen
    'wohnung', 'wohnungen', 'wohnen', 'residential', 'miete', 'mieter', 'vermieter',
    'wohnanlage', 'wohnkomplex', 'wohngebäude', 'wohngebaeude', 'mehrfamilienhaus',
    'hochhaus', 'wohnblock', 'wohnheim', 'studentenwohnheim', 'appartement', 'apartment',
    // Hausverwaltung
    'hausverwaltung', 'immobilien', 'immobilienverwaltung', 'property', 'management',
    'wohnungsbau', 'wohnbaugesellschaft', 'genossenschaft', 'eigentümer', 'eigentuemer',
    // Bereiche
    'treppenhaus', 'treppenhausreinigung', 'hausflur', 'flur', 'eingang', 'eingangsbereich',
    'keller', 'kellerraum', 'tiefgarage', 'garage', 'parkhaus', 'stellplatz',
    'aufzug', 'fahrstuhl', 'lift', 'müllraum', 'muellraum', 'waschküche', 'waschkueche',
  ],
  'fitness-sport': [
    // Fitness
    'fitness', 'fitnessstudio', 'gym', 'studio', 'sport', 'sports', 'training',
    'workout', 'krafttraining', 'cardio', 'geräte', 'geraete', 'hanteln', 'gewichte',
    'kursraum', 'spinning', 'yoga', 'pilates', 'aerobic', 'zumba',
    'umkleide', 'umkleidekabine', 'dusche', 'duschen', 'sanitär', 'sanitaer',
    // Sport allgemein
    'sportverein', 'verein', 'club', 'sportstätte', 'sportstaette', 'sportanlage',
    'tennisplatz', 'tennis', 'squash', 'badminton', 'basketball', 'volleyball',
    'schwimmen', 'schwimmbad', 'pool', 'hallenbad', 'freibad', 'sauna', 'wellness',
    'kletterhalle', 'klettern', 'boulder', 'trampolinhalle', 'indoor',
  ],
  'verkehr': [
    // Verkehr
    'verkehr', 'transport', 'mobility', 'mobilität', 'mobilitaet',
    'bahnhof', 'station', 'haltestelle', 'terminal', 'flughafen', 'airport',
    'bus', 'busse', 'busbahnhof', 'bushaltestelle', 'öpnv', 'oepnv', 'nahverkehr',
    'zug', 'züge', 'zuege', 'bahn', 'eisenbahn', 'ice', 'sbahn', 's-bahn', 'ubahn', 'u-bahn',
    'auto', 'automobil', 'kfz', 'pkw', 'fahrzeug', 'autohaus', 'werkstatt',
    'tankstelle', 'raststätte', 'raststaette', 'autobahn', 'parkplatz', 'parkhaus',
    'waschanlage', 'waschstraße', 'waschstrasse', 'autowäsche', 'autowaesche',
  ],
  'kirche-sozial': [
    // Kirche
    'kirche', 'church', 'gemeinde', 'pfarrei', 'pfarramt', 'pfarrheim',
    'kapelle', 'dom', 'münster', 'muenster', 'kathedrale', 'gotteshaus',
    'gemeindehaus', 'gemeindezentrum', 'kirchengemeinde', 'seelsorge',
    // Sozial
    'sozial', 'social', 'caritas', 'diakonie', 'wohlfahrt', 'hilfe',
    'beratungsstelle', 'sozialstation', 'tafel', 'suppenküche', 'suppenkueche',
    'obdachlosenheim', 'frauenhaus', 'flüchtlingsheim', 'fluechtlingsheim', 'asyl',
    'behindertenwerkstatt', 'werkstatt', 'inklusion', 'integration',
    'verein', 'verband', 'stiftung', 'ngo', 'gemeinnützig', 'gemeinnuetzig', 'ehrenamt',
  ],
}

// Leistungen-Synonyme (für Suche nach Services)
const leistungenSynonyms: Record<string, string[]> = {
  'unterhaltsreinigung': ['unterhalt', 'regelmäßig', 'regelmaessig', 'täglich', 'taeglich', 'wöchentlich', 'woechentlich', 'laufend', 'dauerhaft'],
  'bueroreinigung': ['büro', 'buero', 'office', 'schreibtisch', 'arbeitsplatz'],
  'fensterreinigung': ['fenster', 'glas', 'scheibe', 'glasreinigung', 'window'],
  'industriereinigung': ['industrie', 'fabrik', 'produktion', 'werk', 'halle'],
  'hallenreinigung': ['halle', 'lagerhalle', 'produktionshalle', 'großfläche', 'grossflaeche'],
  'maschinenreinigung': ['maschine', 'anlage', 'gerät', 'geraet', 'equipment'],
  'facility-management': ['facility', 'management', 'fullservice', 'komplett', 'rundum'],
  'winterdienst': ['winter', 'schnee', 'eis', 'räumen', 'raeumen', 'streuen'],
  'baureinigung': ['bau', 'baustelle', 'neubau', 'renovierung', 'bauendreinigung'],
  'sonderreinigung': ['sonder', 'spezial', 'teppich', 'polster', 'grundreinigung'],
}

// Suchfunktion für Referenzen
function matchesSearch(referenz: Referenz, searchQuery: string): boolean {
  if (!searchQuery.trim()) return true

  const query = searchQuery.toLowerCase().trim()
  const queryWords = query.split(/\s+/)

  // Sammle alle durchsuchbaren Texte
  const brancheSynonyms = branchenSynonyms[referenz.branche] || []
  const leistungTerms = referenz.leistungen.flatMap(l => leistungenSynonyms[l] || [])

  const searchableText = [
    referenz.projektName.toLowerCase(),
    referenz.firma.toLowerCase(),
    referenz.kurzbeschreibung.toLowerCase(),
    referenz.beschreibung.toLowerCase(),
    referenz.branche.toLowerCase(),
    ...brancheSynonyms,
    ...referenz.leistungen.map(l => l.toLowerCase()),
    ...leistungTerms,
  ].join(' ')

  // Alle Wörter müssen gefunden werden
  return queryWords.every(word => searchableText.includes(word))
}

export default function ReferenzenPage() {
  // Filter States
  const [selectedBranche, setSelectedBranche] = useState<string | null>(null)
  const [selectedLeistung, setSelectedLeistung] = useState<string | null>(null)
  const [searchQuery, setSearchQuery] = useState<string>('')

  // Refs für Sticky-Logik
  const heroRef = useRef<HTMLElement>(null)
  const gridSectionRef = useRef<HTMLElement>(null)
  const [showStickyFilter, setShowStickyFilter] = useState(false)

  // Modal State
  const [selectedReferenz, setSelectedReferenz] = useState<Referenz | null>(null)

  // Pagination State - initial 12 Projekte laden
  const ITEMS_PER_PAGE = 12
  const [visibleCount, setVisibleCount] = useState(ITEMS_PER_PAGE)

  // Scroll-Detection für sticky Filter
  useEffect(() => {
    const handleScroll = () => {
      if (heroRef.current && gridSectionRef.current) {
        const heroBottom = heroRef.current.getBoundingClientRect().bottom
        const gridBottom = gridSectionRef.current.getBoundingClientRect().bottom
        const stickyBarHeight = 100
        setShowStickyFilter(heroBottom < 0 && gridBottom > stickyBarHeight)
      }
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    handleScroll()

    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // Filter referenzen
  const filteredReferenzen = useMemo(() => {
    let result = referenzen

    // Suche hat Priorität
    if (searchQuery.trim()) {
      result = result.filter(r => matchesSearch(r, searchQuery))
    } else {
      // Nur Filter anwenden wenn keine Suche aktiv
      if (selectedBranche) {
        result = result.filter(r => r.branche === selectedBranche)
      }

      if (selectedLeistung) {
        result = result.filter(r => r.leistungen.includes(selectedLeistung))
      }
    }

    return result
  }, [selectedBranche, selectedLeistung, searchQuery])

  // Get branche name by slug
  const getBrancheName = (slug: string) => {
    const branche = branchen.find(b => b.slug === slug)
    return branche?.shortName || slug
  }

  // Get leistung name by slug
  const getLeistungName = (slug: string) => {
    const leistung = leistungen.find(l => l.slug === slug)
    return leistung?.shortName || slug
  }

  // Modal handlers
  const openModal = (referenz: Referenz) => {
    setSelectedReferenz(referenz)
    document.body.style.overflow = 'hidden'
  }

  const closeModal = () => {
    setSelectedReferenz(null)
    document.body.style.overflow = 'unset'
  }

  // Reset filters
  const resetFilters = () => {
    setSelectedBranche(null)
    setSelectedLeistung(null)
    setSearchQuery('')
    setVisibleCount(ITEMS_PER_PAGE)
  }

  // Load more projects
  const loadMore = () => {
    setVisibleCount(prev => prev + ITEMS_PER_PAGE)
  }

  // Visible referenzen (paginated)
  const visibleReferenzen = filteredReferenzen.slice(0, visibleCount)
  const hasMoreToLoad = visibleCount < filteredReferenzen.length

  const hasActiveFilters = selectedBranche || selectedLeistung || searchQuery.trim()

  return (
    <main className="min-h-screen bg-white">
      {/* Hero Section - Einfarbig wie Startseite */}
      <section ref={heroRef} className="relative bg-[#012956] py-16 md:py-24 lg:py-32 overflow-hidden" aria-labelledby="hero-heading">
        {/* Background Pattern */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-[#109387]/10 to-transparent" />
        </div>

        <div className="relative w-full max-w-[1800px] mx-auto px-6 lg:px-12 xl:px-20">
          <div className="lg:grid lg:grid-cols-2 lg:gap-16 xl:gap-20 lg:items-center">
            {/* Content - Links */}
            <div>
              <p className="text-sm text-[#109387] font-semibold uppercase tracking-wide mb-3">
                Einsatzmöglichkeiten
              </p>

              <h1 id="hero-heading" className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-white leading-[1.15] mb-6">
                So könnten wir
                <span className="block text-[#109387] mt-2">für Sie arbeiten</span>
              </h1>

              <p className="text-lg text-white/80 font-semibold leading-relaxed mb-10 max-w-xl">
                Entdecken Sie typische Einsatzszenarien aus verschiedenen Branchen und
                lassen Sie sich von unseren Lösungsansätzen inspirieren.
              </p>

              {/* Trust-Punkte */}
              <div className="flex flex-wrap gap-8 mb-12">
                <div className="flex items-center gap-2">
                  <CheckCircle size={22} className="text-[#109387]" aria-hidden="true" />
                  <span className="text-white font-semibold text-lg">Alle Branchen</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle size={22} className="text-[#109387]" aria-hidden="true" />
                  <span className="text-white font-semibold text-lg">Flexible Lösungen</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle size={22} className="text-[#109387]" aria-hidden="true" />
                  <span className="text-white font-semibold text-lg">Individuelle Beratung</span>
                </div>
              </div>

              {/* CTA */}
              <a
                href="#contact-form"
                className="inline-flex items-center gap-3 bg-[#109387] hover:bg-[#0d7d72] text-white font-bold text-lg px-8 py-4 rounded-[6px] transition-all duration-300 group"
              >
                Kostenfreie Besichtigung
                <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" aria-hidden="true" />
              </a>
            </div>

            {/* Links zu Branchen & Leistungen - Rechts */}
            <div className="hidden lg:flex flex-col gap-6">
              {/* Intro Text */}
              <p className="text-white/70 font-semibold text-lg">
                Entdecken Sie unsere Expertise in verschiedenen Bereichen:
              </p>

              {/* Branchen Card */}
              <Link
                href="/branchen"
                className="group p-8 bg-white/5 rounded-[6px] border border-white/10 hover:bg-white/10 transition-all duration-300"
              >
                <div className="flex items-start gap-5">
                  <div className="w-14 h-14 bg-[#109387]/20 rounded-[6px] flex items-center justify-center flex-shrink-0">
                    <Building2 size={28} className="text-[#109387]" aria-hidden="true" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-white font-bold text-xl mb-2">Alle Branchen</h3>
                    <p className="text-white/80 font-semibold mb-3">
                      Von Büro & Verwaltung über Industrie bis Gesundheitswesen – wir kennen die Anforderungen Ihrer Branche.
                    </p>
                    <span className="inline-flex items-center gap-2 text-[#109387] font-bold group-hover:gap-3 transition-all">
                      Alle Branchen entdecken
                      <ArrowRight size={18} aria-hidden="true" />
                    </span>
                  </div>
                </div>
              </Link>

              {/* Leistungen Card */}
              <Link
                href="/leistungen"
                className="group p-8 bg-white/5 rounded-[6px] border border-white/10 hover:bg-white/10 transition-all duration-300"
              >
                <div className="flex items-start gap-5">
                  <div className="w-14 h-14 bg-[#109387]/20 rounded-[6px] flex items-center justify-center flex-shrink-0">
                    <Award size={28} className="text-[#109387]" aria-hidden="true" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-white font-bold text-xl mb-2">Alle Leistungen</h3>
                    <p className="text-white/80 font-semibold mb-3">
                      Unterhaltsreinigung, Industriereinigung, Facility Management und vieles mehr – alles aus einer Hand.
                    </p>
                    <span className="inline-flex items-center gap-2 text-[#109387] font-bold group-hover:gap-3 transition-all">
                      18 Leistungen ansehen
                      <ArrowRight size={18} aria-hidden="true" />
                    </span>
                  </div>
                </div>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Quality Trust Bar */}
      <QualityTrustBar />

      {/* Sticky Filter & Search Bar - erscheint beim Scrollen */}
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
                placeholder="Suchen... z.B. Hotel, Büro, Industrie"
                value={searchQuery}
                onChange={(e) => { setSearchQuery(e.target.value); setVisibleCount(ITEMS_PER_PAGE); }}
                onKeyDown={(e) => {
                  if (e.key === 'Enter') {
                    gridSectionRef.current?.scrollIntoView({ behavior: 'smooth' })
                  }
                }}
                aria-label="Szenarien durchsuchen"
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

            {/* Filter Buttons */}
            <div className="flex items-center gap-1.5 sm:gap-2 overflow-x-auto scrollbar-hide" role="group" aria-label="Nach Kategorie filtern">
              <button
                onClick={resetFilters}
                className={`px-3 sm:px-5 py-2 sm:py-2.5 rounded-[6px] font-bold text-sm sm:text-base whitespace-nowrap transition-all ${
                  !hasActiveFilters
                    ? 'bg-[#012956] text-white'
                    : 'bg-[#f8f9fa] text-[#012956] hover:bg-[#012956] hover:text-white'
                }`}
              >
                Alle
              </button>

              {/* Branche Filter */}
              <label htmlFor="filter-branche-sticky" className="sr-only">Nach Branche filtern</label>
              <select
                id="filter-branche-sticky"
                value={selectedBranche || ''}
                onChange={(e) => { setSelectedBranche(e.target.value || null); setSearchQuery(''); setVisibleCount(ITEMS_PER_PAGE); }}
                className="appearance-none bg-[#f8f9fa] hover:bg-[#012956] hover:text-white text-[#012956] font-bold text-sm sm:text-base px-3 sm:px-5 py-2 sm:py-2.5 pr-7 sm:pr-10 rounded-[6px] cursor-pointer transition-all focus:outline-none focus:ring-2 focus:ring-[#109387]/20"
              >
                <option value="">Branche</option>
                {branchen.map((branche) => (
                  <option key={branche.slug} value={branche.slug}>{branche.shortName}</option>
                ))}
              </select>

              {/* Leistung Filter */}
              <label htmlFor="filter-leistung-sticky" className="sr-only">Nach Leistung filtern</label>
              <select
                id="filter-leistung-sticky"
                value={selectedLeistung || ''}
                onChange={(e) => { setSelectedLeistung(e.target.value || null); setSearchQuery(''); setVisibleCount(ITEMS_PER_PAGE); }}
                className="appearance-none bg-[#f8f9fa] hover:bg-[#012956] hover:text-white text-[#012956] font-bold text-sm sm:text-base px-3 sm:px-5 py-2 sm:py-2.5 pr-7 sm:pr-10 rounded-[6px] cursor-pointer transition-all focus:outline-none focus:ring-2 focus:ring-[#109387]/20"
              >
                <option value="">Leistung</option>
                {leistungen.map((leistung) => (
                  <option key={leistung.slug} value={leistung.slug}>{leistung.shortName}</option>
                ))}
              </select>
            </div>
          </div>

          {/* Suchergebnis Info */}
          {searchQuery && (
            <div className="pb-4 -mt-2" aria-live="polite" aria-atomic="true">
              <p className="text-gray-600 font-semibold">
                {filteredReferenzen.length === 0 ? (
                  <span>Keine Ergebnisse für „{searchQuery}"</span>
                ) : (
                  <span>{filteredReferenzen.length} Ergebnis{filteredReferenzen.length !== 1 ? 'se' : ''} für „{searchQuery}"</span>
                )}
              </p>
            </div>
          )}
        </div>
      </div>

      {/* Projects Grid */}
      <section ref={gridSectionRef} className="py-16 lg:py-28 bg-[#f8f9fa]" aria-labelledby="projekte-heading">
        <div className="w-full max-w-[1800px] mx-auto px-6 lg:px-12 xl:px-20">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 id="projekte-heading" className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#012956] leading-[1.1] mb-4">
              {searchQuery
                ? 'Suchergebnisse'
                : hasActiveFilters
                  ? 'Gefilterte Szenarien'
                  : 'Typische Einsatzszenarien'}
            </h2>
            <p className="text-lg text-gray-700 font-semibold leading-relaxed max-w-2xl mx-auto mb-6">
              {searchQuery
                ? `${filteredReferenzen.length} Ergebnis${filteredReferenzen.length !== 1 ? 'se' : ''} für „${searchQuery}"`
                : hasActiveFilters
                  ? `${filteredReferenzen.length} Szenarien gefunden`
                  : 'Sehen Sie, wie professionelle Gebäudereinigung in verschiedenen Branchen aussehen kann.'}
            </p>
            {/* Hinweis */}
            <div className="inline-flex items-center gap-3 bg-[#109387]/10 border border-[#109387]/20 rounded-[6px] px-5 py-3">
              <CheckCircle size={20} className="text-[#109387] flex-shrink-0" aria-hidden="true" />
              <span className="text-[#012956] font-semibold text-sm md:text-base">
                Gerne besprechen wir Ihre individuellen Anforderungen persönlich
              </span>
            </div>
          </div>

          {filteredReferenzen.length === 0 ? (
            <div className="text-center py-20">
              <div className="w-20 h-20 bg-gray-200 rounded-full flex items-center justify-center mx-auto mb-6">
                <Search size={32} className="text-gray-400" />
              </div>
              <h3 className="text-2xl font-bold text-[#012956] mb-2">Keine Ergebnisse gefunden</h3>
              <p className="text-gray-600 font-semibold mb-6">
                {searchQuery ? `Keine Szenarien für „${searchQuery}" gefunden. Versuchen Sie andere Suchbegriffe.` : 'Versuchen Sie andere Filtereinstellungen'}
              </p>
              <button
                onClick={resetFilters}
                className="bg-[#109387] hover:bg-[#0d7d72] text-white font-bold px-6 py-3 rounded-[6px] transition-colors"
              >
                Alle Szenarien anzeigen
              </button>
            </div>
          ) : (
            <div className="grid grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-6 lg:gap-8">
              <AnimatePresence mode="popLayout">
                {visibleReferenzen.map((referenz, index) => (
                  <motion.div
                    key={referenz.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, scale: 0.9 }}
                    transition={{ duration: 0.2 }}
                    layout
                    className="group bg-white rounded-[6px] overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 cursor-pointer"
                    onClick={() => openModal(referenz)}
                  >
                    {/* Image */}
                    <div className="relative aspect-square sm:aspect-[4/3] overflow-hidden">
                      <Image
                        src={referenz.bilder[0].replace('w=800', 'w=300')}
                        alt={referenz.projektName}
                        fill
                        sizes="(max-width: 768px) 45vw, 30vw"
                        className="object-cover group-hover:scale-105 transition-transform duration-500"
                        quality={50}
                        priority={index < 3}
                        loading={index < 3 ? undefined : 'lazy'}
                      />

                      {/* Expand Icon - Desktop only */}
                      <div className="absolute top-4 right-4 bg-white text-[#012956] p-2 rounded-[6px] opacity-0 group-hover:opacity-100 transition-opacity hidden sm:block" aria-hidden="true">
                        <Maximize2 className="w-4 h-4" />
                      </div>
                    </div>

                    {/* Content - Immer sichtbar, kompakt auf Mobile */}
                    <div className="p-2.5 sm:p-4 lg:p-6">
                      {/* Branche */}
                      <p className="text-[#109387] text-[10px] sm:text-sm font-bold mb-0.5 sm:mb-2 truncate">
                        {getBrancheName(referenz.branche)}
                      </p>

                      {/* Titel */}
                      <h3 className="text-xs sm:text-lg lg:text-xl font-bold text-[#012956] group-hover:text-[#109387] transition-colors line-clamp-2 sm:line-clamp-2 leading-tight sm:leading-normal sm:mb-2">
                        {referenz.projektName}
                      </h3>

                      {/* Beschreibung - nur Desktop */}
                      <p className="hidden sm:block text-gray-600 font-semibold mb-4 line-clamp-2 text-sm lg:text-base">
                        {referenz.kurzbeschreibung}
                      </p>

                      {/* Leistungen Tags - nur auf lg+ */}
                      <div className="hidden lg:flex flex-wrap gap-2 mt-4 pt-4 border-t border-gray-100">
                        {referenz.leistungen.slice(0, 2).map((leistungSlug) => (
                          <span
                            key={leistungSlug}
                            className="bg-[#f8f9fa] text-[#012956] text-xs font-semibold px-2.5 py-1 rounded-[6px]"
                          >
                            {getLeistungName(leistungSlug)}
                          </span>
                        ))}
                        {referenz.leistungen.length > 2 && (
                          <span className="text-gray-600 text-xs font-semibold px-2.5 py-1">
                            +{referenz.leistungen.length - 2}
                          </span>
                        )}
                      </div>
                    </div>
                  </motion.div>
                ))}
              </AnimatePresence>
            </div>
          )}

          {/* Mehr laden Button */}
          {hasMoreToLoad && filteredReferenzen.length > 0 && (
            <div className="text-center mt-12">
              <button
                onClick={loadMore}
                className="inline-flex items-center gap-3 bg-[#012956] hover:bg-[#01203d] text-white font-bold text-lg px-8 py-4 rounded-[6px] transition-all duration-300"
              >
                Weitere Szenarien entdecken
                <span className="text-white/70 font-semibold">
                  ({filteredReferenzen.length - visibleCount} weitere)
                </span>
              </button>
            </div>
          )}
        </div>
      </section>

      {/* Modal - Mobile: Full-Screen Bottom Sheet, Desktop: Centered */}
      <AnimatePresence>
        {selectedReferenz && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-black/80 flex items-end md:items-center md:justify-center"
            onClick={closeModal}
            role="dialog"
            aria-modal="true"
            aria-labelledby="modal-title"
          >
            {/* Close Button - Floating, immer sichtbar */}
            <button
              onClick={closeModal}
              className="fixed top-4 right-4 z-[60] bg-[#109387] hover:bg-[#0d7d72] text-white p-3 rounded-full shadow-lg transition-all"
              aria-label="Schließen"
            >
              <X className="w-6 h-6" />
            </button>

            {/* Modal Container - Desktop: zentriert & größer, Mobile: Bottom Sheet */}
            <motion.div
              initial={{ opacity: 0, y: 100 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 100 }}
              transition={{ type: 'spring', damping: 25, stiffness: 300 }}
              className="w-full md:w-[95vw] md:max-w-6xl lg:max-w-7xl bg-white rounded-t-[20px] md:rounded-[6px] max-h-[92vh] md:max-h-[92vh] overflow-hidden shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Mobile Drag Handle */}
              <div className="md:hidden flex justify-center py-3 bg-white sticky top-0 z-10">
                <div className="w-12 h-1.5 bg-gray-300 rounded-full" />
              </div>

              {/* Scrollable Content Container */}
              <div className="overflow-y-auto max-h-[calc(92vh-20px)] md:max-h-[92vh]">
                <div className="md:grid md:grid-cols-[1.2fr_1fr] lg:grid-cols-[1.4fr_1fr]">
                  {/* Image - Vollständig angezeigt, größer */}
                  <div className="relative aspect-[4/3] md:aspect-auto md:h-full md:min-h-[550px] lg:min-h-[650px] bg-gray-900 md:sticky md:top-0 flex items-center justify-center">
                    <Image
                      src={selectedReferenz.bilder[0]}
                      alt={selectedReferenz.projektName}
                      fill
                      sizes="(max-width: 768px) 100vw, 60vw"
                      className="object-contain"
                      quality={80}
                      loading="eager"
                    />
                  </div>

                  {/* Content */}
                  <div className="p-6 md:p-10">
                    {/* Header */}
                    <div className="mb-6">
                      <div className="flex items-center gap-3 mb-3">
                        <span className="bg-[#109387] text-white text-sm font-bold px-3 py-1 rounded-[6px]">
                          {getBrancheName(selectedReferenz.branche)}
                        </span>
                      </div>

                      <h2 id="modal-title" className="text-xl md:text-3xl font-bold text-[#012956] mb-2">
                        {selectedReferenz.projektName}
                      </h2>

                      <p className="text-gray-600 font-semibold text-base md:text-lg">
                        {selectedReferenz.firma}
                      </p>
                    </div>

                    {/* Description */}
                    <p className="text-gray-700 font-semibold leading-relaxed mb-6 md:mb-8 text-sm md:text-base">
                      {selectedReferenz.beschreibung}
                    </p>

                    {/* Leistungen */}
                    <div className="mb-6 md:mb-8">
                      <h3 className="font-bold text-[#012956] mb-3 text-sm md:text-base">Mögliche Leistungen</h3>
                      <div className="flex flex-wrap gap-2">
                        {selectedReferenz.leistungen.map((leistungSlug) => (
                          <span
                            key={leistungSlug}
                            className="bg-[#109387]/10 text-[#109387] font-semibold px-2.5 md:px-3 py-1 md:py-1.5 rounded-[6px] text-xs md:text-sm"
                          >
                            {getLeistungName(leistungSlug)}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* CTA */}
                    <Link
                      href="/kontakt"
                      onClick={closeModal}
                      className="inline-flex items-center gap-2 bg-[#109387] hover:bg-[#0d7d72] text-white font-bold px-5 md:px-6 py-3 rounded-[6px] transition-colors text-sm md:text-base w-full md:w-auto justify-center"
                    >
                      Unverbindlich anfragen
                      <ArrowRight className="w-4 h-4 md:w-5 md:h-5" aria-hidden="true" />
                    </Link>

                    {/* Safe Area Spacing for Mobile */}
                    <div className="h-6 md:hidden" />
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Premium CTA Section - Bento Layout */}
      <section className="py-20 lg:py-28 bg-[#012956]" aria-labelledby="cta-heading">
        <div className="w-full max-w-[1800px] mx-auto px-6 lg:px-12 xl:px-20">
          <div className="lg:grid lg:grid-cols-2 lg:gap-16 xl:gap-24 lg:items-center">
            {/* Content - Links */}
            <div className="mb-12 lg:mb-0">
              <h2 id="cta-heading" className="text-3xl md:text-4xl lg:text-5xl font-bold text-white leading-[1.15] mb-6">
                Passt das zu
                <span className="block text-[#109387] mt-2">Ihren Anforderungen?</span>
              </h2>

              <p className="text-xl text-white/80 font-semibold leading-relaxed mb-8 max-w-xl">
                Lassen Sie uns gemeinsam herausfinden, wie wir Sie optimal unterstützen können.
                Wir analysieren Ihren Bedarf vor Ort – kostenfrei und unverbindlich.
              </p>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-4">
                <a
                  href="#contact-form"
                  className="inline-flex items-center justify-center gap-3 bg-[#109387] hover:bg-[#0d7d72] text-white font-bold text-lg px-8 py-4 rounded-[6px] transition-all duration-300 group"
                >
                  Jetzt Besichtigung anfragen
                  <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" aria-hidden="true" />
                </a>
                <a
                  href="tel:+4987120669360"
                  className="inline-flex items-center justify-center gap-3 bg-white hover:bg-gray-100 text-[#012956] font-bold text-lg px-8 py-4 rounded-[6px] transition-all duration-300"
                >
                  0871 2066936-0
                </a>
              </div>
            </div>

            {/* Bento Box - Rechts */}
            <div className="grid grid-cols-2 gap-4">
              {/* Große Karte oben links */}
              <div className="col-span-2 bg-white/5 border border-white/10 rounded-[6px] p-8">
                <p className="text-[#109387] text-5xl font-bold mb-2">2h</p>
                <p className="text-white font-bold text-lg">Antwortzeit</p>
                <p className="text-white/80 font-semibold">Garantierte Reaktion auf Ihre Anfrage</p>
              </div>

              {/* Kleine Karte unten links */}
              <div className="bg-[#109387] rounded-[6px] p-6">
                <p className="text-white text-3xl font-bold mb-1">100%</p>
                <p className="text-white/90 font-bold">Kostenfrei</p>
                <p className="text-white/70 text-sm font-semibold">Vor-Ort-Besichtigung</p>
              </div>

              {/* Kleine Karte unten rechts */}
              <div className="bg-white/10 border border-white/20 rounded-[6px] p-6">
                <p className="text-white text-3xl font-bold mb-1">8+</p>
                <p className="text-white font-bold">Jahre</p>
                <p className="text-white/80 text-sm font-semibold">Erfahrung in Bayern</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
