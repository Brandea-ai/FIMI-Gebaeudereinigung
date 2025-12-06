'use client'

import { useState, useMemo } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { motion, AnimatePresence } from 'framer-motion'
import { Award, Building2, MapPin, Maximize2, ChevronLeft, ChevronRight, X, Calendar, Tag, ArrowRight, CheckCircle } from 'lucide-react'
import { referenzen, getAllJahre, getReferenzStatistiken, type Referenz } from '@/lib/referenzen-data'
import { leistungen } from '@/lib/leistungen-data'
import { branchen } from '@/lib/branchen-data'

export default function ReferenzenPage() {
  // Filter States
  const [selectedJahr, setSelectedJahr] = useState<number | null>(null)
  const [selectedBranche, setSelectedBranche] = useState<string | null>(null)
  const [selectedLeistung, setSelectedLeistung] = useState<string | null>(null)

  // Modal State
  const [selectedReferenz, setSelectedReferenz] = useState<Referenz | null>(null)
  const [currentImageIndex, setCurrentImageIndex] = useState(0)

  // Pagination State - initial 12 Projekte laden
  const ITEMS_PER_PAGE = 12
  const [visibleCount, setVisibleCount] = useState(ITEMS_PER_PAGE)

  // Get filter options
  const jahre = getAllJahre()
  const stats = getReferenzStatistiken()

  // Filter referenzen
  const filteredReferenzen = useMemo(() => {
    let result = referenzen

    if (selectedJahr) {
      result = result.filter(r => r.jahr === selectedJahr)
    }

    if (selectedBranche) {
      result = result.filter(r => r.branche === selectedBranche)
    }

    if (selectedLeistung) {
      result = result.filter(r => r.leistungen.includes(selectedLeistung))
    }

    return result
  }, [selectedJahr, selectedBranche, selectedLeistung])

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
    setCurrentImageIndex(0)
    document.body.style.overflow = 'hidden'
  }

  const closeModal = () => {
    setSelectedReferenz(null)
    document.body.style.overflow = 'unset'
  }

  const nextImage = () => {
    if (selectedReferenz) {
      setCurrentImageIndex((prev) =>
        prev === selectedReferenz.bilder.length - 1 ? 0 : prev + 1
      )
    }
  }

  const prevImage = () => {
    if (selectedReferenz) {
      setCurrentImageIndex((prev) =>
        prev === 0 ? selectedReferenz.bilder.length - 1 : prev - 1
      )
    }
  }

  // Reset filters
  const resetFilters = () => {
    setSelectedJahr(null)
    setSelectedBranche(null)
    setSelectedLeistung(null)
    setVisibleCount(ITEMS_PER_PAGE)
  }

  // Load more projects
  const loadMore = () => {
    setVisibleCount(prev => prev + ITEMS_PER_PAGE)
  }

  // Visible referenzen (paginated)
  const visibleReferenzen = filteredReferenzen.slice(0, visibleCount)
  const hasMoreToLoad = visibleCount < filteredReferenzen.length

  const hasActiveFilters = selectedJahr || selectedBranche || selectedLeistung

  return (
    <main className="min-h-screen bg-white">
      {/* Hero Section - Einfarbig wie Startseite */}
      <section className="relative bg-[#012956] py-16 md:py-24 lg:py-32 overflow-hidden" aria-labelledby="hero-heading">
        {/* Background Pattern */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-[#109387]/10 to-transparent" />
        </div>

        <div className="relative w-full max-w-[1800px] mx-auto px-6 lg:px-12 xl:px-20">
          <div className="lg:grid lg:grid-cols-2 lg:gap-16 xl:gap-20 lg:items-center">
            {/* Content - Links */}
            <div>
              <p className="text-sm text-[#109387] font-semibold uppercase tracking-wide mb-3">
                Unsere Projekte
              </p>

              <h1 id="hero-heading" className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-white leading-[1.15] mb-6">
                So arbeiten wir
                <span className="block text-[#109387] mt-2">für unsere Kunden</span>
              </h1>

              <p className="text-lg text-white/80 font-semibold leading-relaxed mb-10 max-w-xl">
                Entdecken Sie anonymisierte Projektbeispiele aus verschiedenen Branchen.
                Konkrete Referenzen mit Ansprechpartnern erhalten Sie auf Anfrage.
              </p>

              {/* Trust-Punkte */}
              <div className="flex flex-wrap gap-8 mb-12">
                <div className="flex items-center gap-2">
                  <CheckCircle size={22} className="text-[#109387]" aria-hidden="true" />
                  <span className="text-white font-semibold text-lg">Seit 2016</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle size={22} className="text-[#109387]" aria-hidden="true" />
                  <span className="text-white font-semibold text-lg">8 Einsatzorte</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle size={22} className="text-[#109387]" aria-hidden="true" />
                  <span className="text-white font-semibold text-lg">{Math.round(stats.flaeche / 1000)}k m² betreut</span>
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
                    <p className="text-white/60 font-semibold mb-3">
                      Von Büro & Verwaltung über Industrie bis Gesundheitswesen – wir kennen die Anforderungen Ihrer Branche.
                    </p>
                    <span className="inline-flex items-center gap-2 text-[#109387] font-bold group-hover:gap-3 transition-all">
                      {stats.branchen} Branchen entdecken
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
                    <p className="text-white/60 font-semibold mb-3">
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

      {/* Filter Section - Sticky top-0 wie Leistungen */}
      <section className="sticky top-0 z-20 bg-white border-b border-gray-200 shadow-sm" aria-label="Projektfilter">
        <div className="w-full max-w-[1800px] mx-auto px-6 lg:px-12 xl:px-20">
          <div className="flex flex-col md:flex-row md:items-center gap-4 py-4">
            {/* Filter Buttons - kleiner auf Mobile damit man sieht dass es scrollbar ist */}
            <div className="flex items-center gap-1.5 sm:gap-2 overflow-x-auto scrollbar-hide" role="group" aria-label="Projektfilter-Optionen">
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

              {/* Jahr Filter */}
              <label htmlFor="filter-jahr" className="sr-only">Nach Jahr filtern</label>
              <select
                id="filter-jahr"
                value={selectedJahr || ''}
                onChange={(e) => { setSelectedJahr(e.target.value ? Number(e.target.value) : null); setVisibleCount(ITEMS_PER_PAGE); }}
                className="appearance-none bg-[#f8f9fa] hover:bg-[#012956] hover:text-white text-[#012956] font-bold text-sm sm:text-base px-3 sm:px-5 py-2 sm:py-2.5 pr-7 sm:pr-10 rounded-[6px] cursor-pointer transition-all focus:outline-none focus:ring-2 focus:ring-[#109387]/20"
              >
                <option value="">Jahr</option>
                {jahre.map((jahr) => (
                  <option key={jahr} value={jahr}>{jahr}</option>
                ))}
              </select>

              {/* Branche Filter */}
              <label htmlFor="filter-branche" className="sr-only">Nach Branche filtern</label>
              <select
                id="filter-branche"
                value={selectedBranche || ''}
                onChange={(e) => { setSelectedBranche(e.target.value || null); setVisibleCount(ITEMS_PER_PAGE); }}
                className="appearance-none bg-[#f8f9fa] hover:bg-[#012956] hover:text-white text-[#012956] font-bold text-sm sm:text-base px-3 sm:px-5 py-2 sm:py-2.5 pr-7 sm:pr-10 rounded-[6px] cursor-pointer transition-all focus:outline-none focus:ring-2 focus:ring-[#109387]/20"
              >
                <option value="">Branche</option>
                {branchen.map((branche) => (
                  <option key={branche.slug} value={branche.slug}>{branche.shortName}</option>
                ))}
              </select>

              {/* Leistung Filter */}
              <label htmlFor="filter-leistung" className="sr-only">Nach Leistung filtern</label>
              <select
                id="filter-leistung"
                value={selectedLeistung || ''}
                onChange={(e) => { setSelectedLeistung(e.target.value || null); setVisibleCount(ITEMS_PER_PAGE); }}
                className="appearance-none bg-[#f8f9fa] hover:bg-[#012956] hover:text-white text-[#012956] font-bold text-sm sm:text-base px-3 sm:px-5 py-2 sm:py-2.5 pr-7 sm:pr-10 rounded-[6px] cursor-pointer transition-all focus:outline-none focus:ring-2 focus:ring-[#109387]/20"
              >
                <option value="">Leistung</option>
                {leistungen.map((leistung) => (
                  <option key={leistung.slug} value={leistung.slug}>{leistung.shortName}</option>
                ))}
              </select>

              {/* Reset Button */}
              {hasActiveFilters && (
                <button
                  onClick={resetFilters}
                  className="text-[#109387] hover:text-[#012956] font-bold px-4 py-2.5 transition-colors whitespace-nowrap"
                >
                  Zurücksetzen
                </button>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="py-16 lg:py-28 bg-[#f8f9fa]" aria-labelledby="projekte-heading">
        <div className="w-full max-w-[1800px] mx-auto px-6 lg:px-12 xl:px-20">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 id="projekte-heading" className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#012956] leading-[1.1] mb-4">
              {hasActiveFilters ? 'Gefilterte Projekte' : 'Projektbeispiele im Überblick'}
            </h2>
            <p className="text-lg text-gray-700 font-semibold leading-relaxed max-w-2xl mx-auto mb-6">
              {hasActiveFilters
                ? `${filteredReferenzen.length} Projekte gefunden`
                : 'Aus Datenschutzgründen zeigen wir hier anonymisierte Projektbeispiele.'}
            </p>
            {/* Referenzen auf Anfrage Hinweis */}
            <div className="inline-flex items-center gap-3 bg-[#109387]/10 border border-[#109387]/20 rounded-[6px] px-5 py-3">
              <CheckCircle size={20} className="text-[#109387] flex-shrink-0" aria-hidden="true" />
              <span className="text-[#012956] font-semibold text-sm md:text-base">
                Konkrete Referenzen mit Ansprechpartnern erhalten Sie gerne auf Anfrage
              </span>
            </div>
          </div>

          {filteredReferenzen.length === 0 ? (
            <div className="text-center py-20">
              <div className="text-6xl mb-4">🔍</div>
              <h3 className="text-2xl font-bold text-[#012956] mb-2">Keine Projekte gefunden</h3>
              <p className="text-gray-600 font-semibold mb-6">Versuchen Sie andere Filtereinstellungen</p>
              <button
                onClick={resetFilters}
                className="bg-[#109387] hover:bg-[#0d7d72] text-white font-bold px-6 py-3 rounded-[6px] transition-colors"
              >
                Alle Projekte anzeigen
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
                        src={referenz.bilder[0].replace('w=800', 'w=400')}
                        alt={referenz.projektName}
                        fill
                        sizes="(max-width: 768px) 50vw, 33vw"
                        className="object-cover group-hover:scale-105 transition-transform duration-500"
                        quality={60}
                        priority={index < 6}
                        loading={index < 6 ? undefined : 'lazy'}
                      />

                      {/* Year Badge */}
                      <div className="absolute top-2 left-2 sm:top-4 sm:left-4 bg-[#109387] text-white text-xs sm:text-sm font-bold px-2 py-0.5 sm:px-3 sm:py-1 rounded-[4px] sm:rounded-[6px]">
                        {referenz.jahr}
                      </div>

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

                      {/* Meta Info - nur Desktop */}
                      <div className="hidden sm:flex items-center gap-4 text-sm text-gray-500 font-semibold">
                        <div className="flex items-center gap-1">
                          <MapPin className="w-4 h-4" aria-hidden="true" />
                          <span className="truncate">{referenz.standort}</span>
                        </div>
                      </div>

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
                          <span className="text-gray-500 text-xs font-semibold px-2.5 py-1">
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
                Weitere Projekte laden
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

            {/* Modal Container - Desktop: zentriert, Mobile: Bottom Sheet */}
            <motion.div
              initial={{ opacity: 0, y: 100 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 100 }}
              transition={{ type: 'spring', damping: 25, stiffness: 300 }}
              className="w-full md:w-[95vw] md:max-w-5xl bg-white rounded-t-[20px] md:rounded-[6px] max-h-[92vh] md:max-h-[90vh] overflow-hidden shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Mobile Drag Handle */}
              <div className="md:hidden flex justify-center py-3 bg-white sticky top-0 z-10">
                <div className="w-12 h-1.5 bg-gray-300 rounded-full" />
              </div>

              {/* Scrollable Content Container */}
              <div className="overflow-y-auto max-h-[calc(92vh-20px)] md:max-h-[90vh]">
                <div className="md:grid md:grid-cols-2">
                  {/* Image Gallery */}
                  <div className="relative aspect-[4/3] md:aspect-auto md:h-full md:min-h-[500px] bg-gray-900 md:sticky md:top-0">
                    <Image
                      src={selectedReferenz.bilder[currentImageIndex].replace('w=800', 'w=600')}
                      alt={selectedReferenz.projektName}
                      fill
                      sizes="(max-width: 768px) 100vw, 50vw"
                      className="object-cover"
                      quality={75}
                      loading="eager"
                    />

                    {/* Image Counter Badge - Mobile */}
                    <div className="absolute top-4 left-4 bg-black/60 text-white text-sm font-bold px-3 py-1.5 rounded-full md:hidden">
                      {currentImageIndex + 1} / {selectedReferenz.bilder.length}
                    </div>

                    {/* Image Navigation */}
                    {selectedReferenz.bilder.length > 1 && (
                      <>
                        <button
                          onClick={prevImage}
                          className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white text-[#012956] p-2.5 rounded-full shadow-lg transition-colors"
                          aria-label="Vorheriges Bild"
                        >
                          <ChevronLeft className="w-5 h-5" />
                        </button>
                        <button
                          onClick={nextImage}
                          className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white text-[#012956] p-2.5 rounded-full shadow-lg transition-colors"
                          aria-label="Nächstes Bild"
                        >
                          <ChevronRight className="w-5 h-5" />
                        </button>

                        {/* Dots - Desktop only */}
                        <div className="hidden md:flex absolute bottom-4 left-1/2 -translate-x-1/2 gap-2">
                          {selectedReferenz.bilder.map((_, index) => (
                            <button
                              key={index}
                              onClick={() => setCurrentImageIndex(index)}
                              className={`w-2.5 h-2.5 rounded-full transition-colors ${
                                index === currentImageIndex ? 'bg-white' : 'bg-white/50'
                              }`}
                              aria-label={`Bild ${index + 1}`}
                            />
                          ))}
                        </div>
                      </>
                    )}
                  </div>

                  {/* Content */}
                  <div className="p-6 md:p-10">
                    {/* Header */}
                    <div className="mb-6">
                      <div className="flex items-center gap-3 mb-3">
                        <span className="bg-[#109387] text-white text-sm font-bold px-3 py-1 rounded-[6px]">
                          {selectedReferenz.jahr}
                        </span>
                        <span className="text-[#012956] font-semibold">
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

                    {/* Meta Grid */}
                    <div className="grid grid-cols-2 gap-3 md:gap-4 mb-6 md:mb-8">
                      <div className="bg-[#f8f9fa] rounded-[6px] p-3 md:p-4">
                        <div className="flex items-center gap-2 text-gray-500 text-xs md:text-sm font-semibold mb-1">
                          <MapPin className="w-3.5 h-3.5 md:w-4 md:h-4" aria-hidden="true" />
                          Standort
                        </div>
                        <div className="font-bold text-[#012956] text-sm md:text-base">{selectedReferenz.standort}</div>
                      </div>

                      {selectedReferenz.flaeche && (
                        <div className="bg-[#f8f9fa] rounded-[6px] p-3 md:p-4">
                          <div className="flex items-center gap-2 text-gray-500 text-xs md:text-sm font-semibold mb-1">
                            <Maximize2 className="w-3.5 h-3.5 md:w-4 md:h-4" aria-hidden="true" />
                            Fläche
                          </div>
                          <div className="font-bold text-[#012956] text-sm md:text-base">{selectedReferenz.flaeche}</div>
                        </div>
                      )}
                    </div>

                    {/* Leistungen */}
                    <div className="mb-6 md:mb-8">
                      <h3 className="font-bold text-[#012956] mb-3 text-sm md:text-base">Erbrachte Leistungen</h3>
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
                      Ähnliches Projekt anfragen
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
                Ihr nächstes Projekt
                <span className="block text-[#109387] mt-2">verdient Qualität</span>
              </h2>

              <p className="text-xl text-white/80 font-semibold leading-relaxed mb-8 max-w-xl">
                Lassen Sie sich unverbindlich beraten. Wir analysieren Ihren Bedarf vor Ort
                und erstellen ein maßgeschneidertes Angebot – kostenfrei.
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
                  href="tel:+4987143033460"
                  className="inline-flex items-center justify-center gap-3 bg-white hover:bg-gray-100 text-[#012956] font-bold text-lg px-8 py-4 rounded-[6px] transition-all duration-300"
                >
                  0871 430 334 60
                </a>
              </div>
            </div>

            {/* Bento Box - Rechts */}
            <div className="grid grid-cols-2 gap-4">
              {/* Große Karte oben links */}
              <div className="col-span-2 bg-white/5 border border-white/10 rounded-[6px] p-8">
                <p className="text-[#109387] text-5xl font-bold mb-2">2h</p>
                <p className="text-white font-bold text-lg">Antwortzeit</p>
                <p className="text-white/60 font-semibold">Garantierte Reaktion auf Ihre Anfrage</p>
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
                <p className="text-white/60 text-sm font-semibold">Erfahrung in Bayern</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
