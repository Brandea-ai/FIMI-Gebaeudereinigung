'use client'

import { useState, useMemo } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { motion, AnimatePresence } from 'framer-motion'
import { Award, Building2, MapPin, Users, Maximize2, ChevronLeft, ChevronRight, X, Calendar, Tag, Briefcase, ArrowRight, CheckCircle } from 'lucide-react'
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
  }

  const hasActiveFilters = selectedJahr || selectedBranche || selectedLeistung

  return (
    <main className="min-h-screen bg-white">
      {/* Hero Section - Einfarbig wie Startseite */}
      <section className="relative bg-[#012956] py-16 md:py-24 lg:py-32 overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-[#109387]/10 to-transparent" />
        </div>

        <div className="relative w-full max-w-[1800px] mx-auto px-6 lg:px-12 xl:px-20">
          <div className="lg:grid lg:grid-cols-2 lg:gap-16 xl:gap-20 lg:items-center">
            {/* Content - Links */}
            <div>
              <p className="text-sm text-[#109387] font-semibold uppercase tracking-wide mb-3">
                Unsere Referenzen
              </p>

              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-white leading-[1.15] mb-6">
                {stats.projekte}+ erfolgreiche
                <span className="block text-[#109387] mt-2">Projekte seit 2016</span>
              </h1>

              <p className="text-lg text-white/80 font-semibold leading-relaxed mb-10 max-w-xl">
                Überzeugen Sie sich von unserer Arbeit. Hier finden Sie eine Auswahl
                unserer erfolgreich abgeschlossenen Projekte aus verschiedenen Branchen.
              </p>

              {/* Trust-Punkte */}
              <div className="flex flex-wrap gap-8 mb-12">
                <div className="flex items-center gap-2">
                  <CheckCircle size={22} className="text-[#109387]" />
                  <span className="text-white font-semibold text-lg">Seit 2016</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle size={22} className="text-[#109387]" />
                  <span className="text-white font-semibold text-lg">{stats.branchen} Branchen</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle size={22} className="text-[#109387]" />
                  <span className="text-white font-semibold text-lg">{Math.round(stats.flaeche / 1000)}k m² betreut</span>
                </div>
              </div>

              {/* CTA */}
              <a
                href="#contact-form"
                className="inline-flex items-center gap-3 bg-[#109387] hover:bg-[#0d7d72] text-white font-bold text-lg px-8 py-4 rounded-[6px] transition-all duration-300 group"
              >
                Kostenfreie Besichtigung
                <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
              </a>
            </div>

            {/* Stats Cards - Rechts */}
            <div className="hidden lg:grid grid-cols-2 gap-5 xl:gap-6">
              <div className="p-8 xl:p-10 bg-white/5 rounded-[6px] border border-white/10">
                <div className="text-[#109387] font-bold text-5xl xl:text-6xl mb-2">{stats.projekte}+</div>
                <div className="text-white font-bold text-xl">Projekte</div>
                <p className="text-white/60 font-semibold mt-2">erfolgreich abgeschlossen</p>
              </div>
              <div className="p-8 xl:p-10 bg-white/5 rounded-[6px] border border-white/10">
                <div className="text-[#109387] font-bold text-5xl xl:text-6xl mb-2">{stats.branchen}</div>
                <div className="text-white font-bold text-xl">Branchen</div>
                <p className="text-white/60 font-semibold mt-2">vertrauen auf uns</p>
              </div>
              <div className="p-8 xl:p-10 bg-white/5 rounded-[6px] border border-white/10">
                <div className="text-[#109387] font-bold text-5xl xl:text-6xl mb-2">8+</div>
                <div className="text-white font-bold text-xl">Jahre</div>
                <p className="text-white/60 font-semibold mt-2">Erfahrung seit 2016</p>
              </div>
              <div className="p-8 xl:p-10 bg-white/5 rounded-[6px] border border-white/10">
                <div className="text-[#109387] font-bold text-5xl xl:text-6xl mb-2">{Math.round(stats.flaeche / 1000)}k</div>
                <div className="text-white font-bold text-xl">m² betreut</div>
                <p className="text-white/60 font-semibold mt-2">Gesamtfläche</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Filter Section - Sticky top-0 wie Leistungen */}
      <section className="sticky top-0 z-20 bg-white border-b border-gray-200 shadow-sm">
        <div className="w-full max-w-[1800px] mx-auto px-6 lg:px-12 xl:px-20">
          <div className="flex flex-col md:flex-row md:items-center gap-4 py-4">
            {/* Filter Buttons */}
            <div className="flex items-center gap-2 overflow-x-auto scrollbar-hide">
              <button
                onClick={resetFilters}
                className={`px-5 py-2.5 rounded-[6px] font-bold whitespace-nowrap transition-all ${
                  !hasActiveFilters
                    ? 'bg-[#012956] text-white'
                    : 'bg-[#f8f9fa] text-[#012956] hover:bg-[#012956] hover:text-white'
                }`}
              >
                Alle
              </button>

              {/* Jahr Filter */}
              <select
                value={selectedJahr || ''}
                onChange={(e) => setSelectedJahr(e.target.value ? Number(e.target.value) : null)}
                className="appearance-none bg-[#f8f9fa] hover:bg-[#012956] hover:text-white text-[#012956] font-bold px-5 py-2.5 pr-10 rounded-[6px] cursor-pointer transition-all focus:outline-none focus:ring-2 focus:ring-[#109387]/20"
              >
                <option value="">Jahr</option>
                {jahre.map((jahr) => (
                  <option key={jahr} value={jahr}>{jahr}</option>
                ))}
              </select>

              {/* Branche Filter */}
              <select
                value={selectedBranche || ''}
                onChange={(e) => setSelectedBranche(e.target.value || null)}
                className="appearance-none bg-[#f8f9fa] hover:bg-[#012956] hover:text-white text-[#012956] font-bold px-5 py-2.5 pr-10 rounded-[6px] cursor-pointer transition-all focus:outline-none focus:ring-2 focus:ring-[#109387]/20"
              >
                <option value="">Branche</option>
                {branchen.map((branche) => (
                  <option key={branche.slug} value={branche.slug}>{branche.shortName}</option>
                ))}
              </select>

              {/* Leistung Filter */}
              <select
                value={selectedLeistung || ''}
                onChange={(e) => setSelectedLeistung(e.target.value || null)}
                className="appearance-none bg-[#f8f9fa] hover:bg-[#012956] hover:text-white text-[#012956] font-bold px-5 py-2.5 pr-10 rounded-[6px] cursor-pointer transition-all focus:outline-none focus:ring-2 focus:ring-[#109387]/20"
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

            {/* Results Count */}
            <div className="md:ml-auto text-gray-600 font-semibold">
              {filteredReferenzen.length} Projekt{filteredReferenzen.length !== 1 ? 'e' : ''}
            </div>
          </div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="py-16 lg:py-28 bg-[#f8f9fa]">
        <div className="w-full max-w-[1800px] mx-auto px-6 lg:px-12 xl:px-20">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#012956] leading-[1.1] mb-4">
              {hasActiveFilters ? 'Gefilterte Projekte' : 'Alle Projekte im Überblick'}
            </h2>
            <p className="text-lg text-gray-700 font-semibold leading-relaxed max-w-2xl mx-auto">
              {hasActiveFilters
                ? `${filteredReferenzen.length} Projekte gefunden`
                : 'Entdecken Sie unsere erfolgreich abgeschlossenen Projekte aus verschiedenen Branchen.'}
            </p>
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
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
              <AnimatePresence mode="popLayout">
                {filteredReferenzen.map((referenz, index) => (
                  <motion.div
                    key={referenz.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, scale: 0.9 }}
                    transition={{ duration: 0.3, delay: index * 0.03 }}
                    layout
                    className="group bg-white rounded-[6px] overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 cursor-pointer"
                    onClick={() => openModal(referenz)}
                  >
                    {/* Image */}
                    <div className="relative h-56 overflow-hidden">
                      <Image
                        src={referenz.bilder[0]}
                        alt={referenz.projektName}
                        fill
                        className="object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />

                      {/* Year Badge */}
                      <div className="absolute top-4 left-4 bg-[#109387] text-white text-sm font-bold px-3 py-1 rounded-[6px]">
                        {referenz.jahr}
                      </div>

                      {/* Expand Icon */}
                      <div className="absolute top-4 right-4 bg-white text-[#012956] p-2 rounded-[6px] opacity-0 group-hover:opacity-100 transition-opacity">
                        <Maximize2 className="w-4 h-4" />
                      </div>

                      {/* Logo */}
                      <div className="absolute bottom-4 left-4 bg-white rounded-[6px] p-2 shadow-lg">
                        <Image
                          src={referenz.logo}
                          alt={referenz.firma}
                          width={80}
                          height={30}
                          className="h-6 w-auto"
                        />
                      </div>
                    </div>

                    {/* Content */}
                    <div className="p-6">
                      <div className="flex items-center gap-2 text-[#109387] text-sm font-semibold mb-2">
                        <Tag className="w-4 h-4" />
                        {getBrancheName(referenz.branche)}
                      </div>

                      <h3 className="text-xl font-bold text-[#012956] mb-2 group-hover:text-[#109387] transition-colors">
                        {referenz.projektName}
                      </h3>

                      <p className="text-gray-600 font-semibold mb-4 line-clamp-2">
                        {referenz.kurzbeschreibung}
                      </p>

                      {/* Meta Info */}
                      <div className="flex items-center gap-4 text-sm text-gray-500 font-semibold">
                        <div className="flex items-center gap-1">
                          <MapPin className="w-4 h-4" />
                          {referenz.standort}
                        </div>
                        {referenz.flaeche && (
                          <div className="flex items-center gap-1">
                            <Maximize2 className="w-4 h-4" />
                            {referenz.flaeche}
                          </div>
                        )}
                      </div>

                      {/* Leistungen Tags */}
                      <div className="flex flex-wrap gap-2 mt-4 pt-4 border-t border-gray-100">
                        {referenz.leistungen.slice(0, 3).map((leistungSlug) => (
                          <span
                            key={leistungSlug}
                            className="bg-[#f8f9fa] text-[#012956] text-xs font-semibold px-2.5 py-1 rounded-[6px]"
                          >
                            {getLeistungName(leistungSlug)}
                          </span>
                        ))}
                        {referenz.leistungen.length > 3 && (
                          <span className="text-gray-500 text-xs font-semibold px-2.5 py-1">
                            +{referenz.leistungen.length - 3} mehr
                          </span>
                        )}
                      </div>
                    </div>
                  </motion.div>
                ))}
              </AnimatePresence>
            </div>
          )}
        </div>
      </section>

      {/* Modal */}
      <AnimatePresence>
        {selectedReferenz && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80"
            onClick={closeModal}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              transition={{ duration: 0.3 }}
              className="bg-white rounded-[6px] max-w-5xl w-full max-h-[90vh] overflow-hidden shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="grid md:grid-cols-2">
                {/* Image Gallery */}
                <div className="relative h-72 md:h-full min-h-[400px] bg-gray-900">
                  <Image
                    src={selectedReferenz.bilder[currentImageIndex]}
                    alt={selectedReferenz.projektName}
                    fill
                    className="object-cover"
                  />

                  {/* Image Navigation */}
                  {selectedReferenz.bilder.length > 1 && (
                    <>
                      <button
                        onClick={prevImage}
                        className="absolute left-4 top-1/2 -translate-y-1/2 bg-white hover:bg-gray-100 text-[#012956] p-2 rounded-[6px] shadow-lg transition-colors"
                      >
                        <ChevronLeft className="w-6 h-6" />
                      </button>
                      <button
                        onClick={nextImage}
                        className="absolute right-4 top-1/2 -translate-y-1/2 bg-white hover:bg-gray-100 text-[#012956] p-2 rounded-[6px] shadow-lg transition-colors"
                      >
                        <ChevronRight className="w-6 h-6" />
                      </button>

                      {/* Dots */}
                      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
                        {selectedReferenz.bilder.map((_, index) => (
                          <button
                            key={index}
                            onClick={() => setCurrentImageIndex(index)}
                            className={`w-2.5 h-2.5 rounded-full transition-colors ${
                              index === currentImageIndex ? 'bg-white' : 'bg-white/50'
                            }`}
                          />
                        ))}
                      </div>
                    </>
                  )}
                </div>

                {/* Content */}
                <div className="p-8 md:p-10 overflow-y-auto max-h-[90vh] md:max-h-none relative">
                  {/* Close Button */}
                  <button
                    onClick={closeModal}
                    className="absolute top-4 right-4 bg-[#f8f9fa] hover:bg-gray-200 text-gray-700 p-2 rounded-[6px] transition-colors"
                  >
                    <X className="w-5 h-5" />
                  </button>

                  {/* Logo */}
                  <div className="mb-6">
                    <Image
                      src={selectedReferenz.logo}
                      alt={selectedReferenz.firma}
                      width={120}
                      height={40}
                      className="h-10 w-auto"
                    />
                  </div>

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

                    <h2 className="text-2xl md:text-3xl font-bold text-[#012956] mb-2">
                      {selectedReferenz.projektName}
                    </h2>

                    <p className="text-gray-600 font-semibold text-lg">
                      {selectedReferenz.firma}
                    </p>
                  </div>

                  {/* Description */}
                  <p className="text-gray-700 font-semibold leading-relaxed mb-8">
                    {selectedReferenz.beschreibung}
                  </p>

                  {/* Meta Grid */}
                  <div className="grid grid-cols-2 gap-4 mb-8">
                    <div className="bg-[#f8f9fa] rounded-[6px] p-4">
                      <div className="flex items-center gap-2 text-gray-500 text-sm font-semibold mb-1">
                        <MapPin className="w-4 h-4" />
                        Standort
                      </div>
                      <div className="font-bold text-[#012956]">{selectedReferenz.standort}</div>
                    </div>

                    {selectedReferenz.flaeche && (
                      <div className="bg-[#f8f9fa] rounded-[6px] p-4">
                        <div className="flex items-center gap-2 text-gray-500 text-sm font-semibold mb-1">
                          <Maximize2 className="w-4 h-4" />
                          Fläche
                        </div>
                        <div className="font-bold text-[#012956]">{selectedReferenz.flaeche}</div>
                      </div>
                    )}

                    {selectedReferenz.mitarbeiter && (
                      <div className="bg-[#f8f9fa] rounded-[6px] p-4">
                        <div className="flex items-center gap-2 text-gray-500 text-sm font-semibold mb-1">
                          <Users className="w-4 h-4" />
                          Mitarbeiter
                        </div>
                        <div className="font-bold text-[#012956]">{selectedReferenz.mitarbeiter} Personen</div>
                      </div>
                    )}
                  </div>

                  {/* Leistungen */}
                  <div className="mb-8">
                    <h3 className="font-bold text-[#012956] mb-3">Erbrachte Leistungen</h3>
                    <div className="flex flex-wrap gap-2">
                      {selectedReferenz.leistungen.map((leistungSlug) => (
                        <span
                          key={leistungSlug}
                          className="bg-[#109387]/10 text-[#109387] font-semibold px-3 py-1.5 rounded-[6px] text-sm"
                        >
                          {getLeistungName(leistungSlug)}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* CTA */}
                  <Link
                    href="/kontakt"
                    className="inline-flex items-center gap-2 bg-[#109387] hover:bg-[#0d7d72] text-white font-bold px-6 py-3 rounded-[6px] transition-colors"
                  >
                    Ähnliches Projekt anfragen
                    <ArrowRight className="w-5 h-5" />
                  </Link>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* CTA Section - Einfarbig */}
      <section className="py-20 lg:py-28 bg-[#012956]">
        <div className="w-full max-w-[1800px] mx-auto px-6 lg:px-12 xl:px-20">
          <div className="lg:grid lg:grid-cols-2 lg:gap-16 lg:items-center">
            {/* Content - Links */}
            <div className="mb-10 lg:mb-0">
              <p className="text-sm text-[#109387] font-semibold uppercase tracking-wide mb-3">
                Jetzt starten
              </p>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white leading-[1.15] mb-6">
                Werden Sie Teil unserer
                <span className="block text-[#109387] mt-2">Erfolgsgeschichte</span>
              </h2>
              <p className="text-lg text-white/80 font-semibold leading-relaxed max-w-xl">
                Vertrauen Sie auf unsere Erfahrung aus über {stats.projekte} Projekten seit 2016.
                Wir freuen uns auf Ihre Anfrage.
              </p>
            </div>

            {/* Buttons - Rechts */}
            <div className="flex flex-col sm:flex-row lg:flex-col xl:flex-row gap-4 lg:justify-end">
              <Link
                href="/kontakt"
                className="inline-flex items-center justify-center gap-3 bg-[#109387] hover:bg-[#0d7d72] text-white font-bold text-lg px-8 py-4 rounded-[6px] transition-all duration-300 group"
              >
                Kostenfreie Besichtigung
                <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link
                href="/leistungen"
                className="inline-flex items-center justify-center gap-3 bg-white hover:bg-gray-100 text-[#012956] font-bold text-lg px-8 py-4 rounded-[6px] transition-all duration-300"
              >
                Alle Leistungen
              </Link>
              <Link
                href="/branchen"
                className="inline-flex items-center justify-center gap-3 bg-white/10 hover:bg-white/20 text-white font-bold text-lg px-8 py-4 rounded-[6px] transition-all duration-300 border border-white/20"
              >
                Alle Branchen
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
