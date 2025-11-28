'use client'

import { useState, useMemo } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { motion, AnimatePresence } from 'framer-motion'
import { Award, Building2, MapPin, Users, Maximize2, ChevronLeft, ChevronRight, X, Filter, Calendar, Tag, Briefcase, ArrowRight } from 'lucide-react'
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
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-[#012956] via-[#01203d] to-[#109387] py-24 overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }} />
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-4xl mx-auto"
          >
            <span className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm text-white px-4 py-2 rounded-full text-sm font-semibold mb-6">
              <Award className="w-4 h-4" />
              Unsere Erfolge
            </span>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-black text-white mb-6">
              Referenzen & Projekte
            </h1>

            <p className="text-xl text-white/90 mb-12 font-medium">
              Überzeugen Sie sich von unserer Arbeit. Hier finden Sie eine Auswahl unserer
              erfolgreich abgeschlossenen Projekte aus verschiedenen Branchen.
            </p>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-6 max-w-2xl mx-auto">
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6">
                <div className="text-4xl md:text-5xl font-black text-white mb-2">{stats.projekte}+</div>
                <div className="text-white/80 font-semibold">Projekte</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6">
                <div className="text-4xl md:text-5xl font-black text-white mb-2">{Math.round(stats.flaeche / 1000)}k</div>
                <div className="text-white/80 font-semibold">m² betreut</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6">
                <div className="text-4xl md:text-5xl font-black text-white mb-2">{stats.branchen}</div>
                <div className="text-white/80 font-semibold">Branchen</div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Filter Section */}
      <section className="sticky top-16 z-20 bg-white border-b border-gray-200 shadow-sm">
        <div className="container mx-auto px-4 py-4">
          <div className="flex flex-wrap items-center gap-4">
            <div className="flex items-center gap-2 text-[#012956] font-bold">
              <Filter className="w-5 h-5" />
              Filter:
            </div>

            {/* Jahr Filter */}
            <div className="relative">
              <select
                value={selectedJahr || ''}
                onChange={(e) => setSelectedJahr(e.target.value ? Number(e.target.value) : null)}
                className="appearance-none bg-gray-100 hover:bg-gray-200 text-[#012956] font-semibold px-4 py-2.5 pr-10 rounded-xl cursor-pointer transition-colors focus:outline-none focus:ring-2 focus:ring-[#109387]"
              >
                <option value="">Alle Jahre</option>
                {jahre.map((jahr) => (
                  <option key={jahr} value={jahr}>{jahr}</option>
                ))}
              </select>
              <Calendar className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-500 pointer-events-none" />
            </div>

            {/* Branche Filter */}
            <div className="relative">
              <select
                value={selectedBranche || ''}
                onChange={(e) => setSelectedBranche(e.target.value || null)}
                className="appearance-none bg-gray-100 hover:bg-gray-200 text-[#012956] font-semibold px-4 py-2.5 pr-10 rounded-xl cursor-pointer transition-colors focus:outline-none focus:ring-2 focus:ring-[#109387]"
              >
                <option value="">Alle Branchen</option>
                {branchen.map((branche) => (
                  <option key={branche.slug} value={branche.slug}>{branche.shortName}</option>
                ))}
              </select>
              <Building2 className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-500 pointer-events-none" />
            </div>

            {/* Leistung Filter */}
            <div className="relative">
              <select
                value={selectedLeistung || ''}
                onChange={(e) => setSelectedLeistung(e.target.value || null)}
                className="appearance-none bg-gray-100 hover:bg-gray-200 text-[#012956] font-semibold px-4 py-2.5 pr-10 rounded-xl cursor-pointer transition-colors focus:outline-none focus:ring-2 focus:ring-[#109387]"
              >
                <option value="">Alle Leistungen</option>
                {leistungen.map((leistung) => (
                  <option key={leistung.slug} value={leistung.slug}>{leistung.shortName}</option>
                ))}
              </select>
              <Briefcase className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-500 pointer-events-none" />
            </div>

            {/* Reset Button */}
            {hasActiveFilters && (
              <button
                onClick={resetFilters}
                className="text-[#109387] hover:text-[#012956] font-semibold px-4 py-2.5 transition-colors"
              >
                Filter zurücksetzen
              </button>
            )}

            {/* Results Count */}
            <div className="ml-auto text-gray-600 font-medium">
              {filteredReferenzen.length} Projekt{filteredReferenzen.length !== 1 ? 'e' : ''}
            </div>
          </div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          {filteredReferenzen.length === 0 ? (
            <div className="text-center py-20">
              <div className="text-6xl mb-4">🔍</div>
              <h3 className="text-2xl font-bold text-[#012956] mb-2">Keine Projekte gefunden</h3>
              <p className="text-gray-600 mb-6">Versuchen Sie andere Filtereinstellungen</p>
              <button
                onClick={resetFilters}
                className="bg-[#109387] hover:bg-[#0d7d72] text-white font-bold px-6 py-3 rounded-xl transition-colors"
              >
                Alle Projekte anzeigen
              </button>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <AnimatePresence mode="popLayout">
                {filteredReferenzen.map((referenz, index) => (
                  <motion.div
                    key={referenz.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, scale: 0.9 }}
                    transition={{ duration: 0.3, delay: index * 0.05 }}
                    layout
                    className="group bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 cursor-pointer"
                    onClick={() => openModal(referenz)}
                  >
                    {/* Image */}
                    <div className="relative h-56 overflow-hidden">
                      <Image
                        src={referenz.bilder[0]}
                        alt={referenz.projektName}
                        fill
                        className="object-cover group-hover:scale-110 transition-transform duration-700"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />

                      {/* Year Badge */}
                      <div className="absolute top-4 left-4 bg-[#109387] text-white text-sm font-bold px-3 py-1 rounded-full">
                        {referenz.jahr}
                      </div>

                      {/* Expand Icon */}
                      <div className="absolute top-4 right-4 bg-white/90 text-[#012956] p-2 rounded-full opacity-0 group-hover:opacity-100 transition-opacity">
                        <Maximize2 className="w-4 h-4" />
                      </div>

                      {/* Logo */}
                      <div className="absolute bottom-4 left-4 bg-white rounded-lg p-2 shadow-lg">
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

                      <p className="text-gray-600 font-medium mb-4 line-clamp-2">
                        {referenz.kurzbeschreibung}
                      </p>

                      {/* Meta Info */}
                      <div className="flex items-center gap-4 text-sm text-gray-500">
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
                            className="bg-gray-100 text-gray-700 text-xs font-medium px-2.5 py-1 rounded-lg"
                          >
                            {getLeistungName(leistungSlug)}
                          </span>
                        ))}
                        {referenz.leistungen.length > 3 && (
                          <span className="text-gray-500 text-xs font-medium px-2.5 py-1">
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
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm"
            onClick={closeModal}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              transition={{ duration: 0.3 }}
              className="bg-white rounded-3xl max-w-5xl w-full max-h-[90vh] overflow-hidden shadow-2xl"
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
                        className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white text-[#012956] p-2 rounded-full shadow-lg transition-colors"
                      >
                        <ChevronLeft className="w-6 h-6" />
                      </button>
                      <button
                        onClick={nextImage}
                        className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white text-[#012956] p-2 rounded-full shadow-lg transition-colors"
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
                <div className="p-8 md:p-10 overflow-y-auto max-h-[90vh] md:max-h-none">
                  {/* Close Button */}
                  <button
                    onClick={closeModal}
                    className="absolute top-4 right-4 bg-gray-100 hover:bg-gray-200 text-gray-700 p-2 rounded-full transition-colors"
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
                      <span className="bg-[#109387] text-white text-sm font-bold px-3 py-1 rounded-full">
                        {selectedReferenz.jahr}
                      </span>
                      <span className="text-[#012956] font-semibold">
                        {getBrancheName(selectedReferenz.branche)}
                      </span>
                    </div>

                    <h2 className="text-2xl md:text-3xl font-black text-[#012956] mb-2">
                      {selectedReferenz.projektName}
                    </h2>

                    <p className="text-gray-600 font-medium text-lg">
                      {selectedReferenz.firma}
                    </p>
                  </div>

                  {/* Description */}
                  <p className="text-gray-700 leading-relaxed mb-8">
                    {selectedReferenz.beschreibung}
                  </p>

                  {/* Meta Grid */}
                  <div className="grid grid-cols-2 gap-4 mb-8">
                    <div className="bg-gray-50 rounded-xl p-4">
                      <div className="flex items-center gap-2 text-gray-500 text-sm mb-1">
                        <MapPin className="w-4 h-4" />
                        Standort
                      </div>
                      <div className="font-bold text-[#012956]">{selectedReferenz.standort}</div>
                    </div>

                    {selectedReferenz.flaeche && (
                      <div className="bg-gray-50 rounded-xl p-4">
                        <div className="flex items-center gap-2 text-gray-500 text-sm mb-1">
                          <Maximize2 className="w-4 h-4" />
                          Fläche
                        </div>
                        <div className="font-bold text-[#012956]">{selectedReferenz.flaeche}</div>
                      </div>
                    )}

                    {selectedReferenz.mitarbeiter && (
                      <div className="bg-gray-50 rounded-xl p-4">
                        <div className="flex items-center gap-2 text-gray-500 text-sm mb-1">
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
                          className="bg-[#109387]/10 text-[#109387] font-semibold px-3 py-1.5 rounded-lg text-sm"
                        >
                          {getLeistungName(leistungSlug)}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* CTA */}
                  <Link
                    href="/kontakt"
                    className="inline-flex items-center gap-2 bg-[#109387] hover:bg-[#0d7d72] text-white font-bold px-6 py-3 rounded-xl transition-colors"
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

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-[#012956] to-[#109387]">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl font-black text-white mb-6">
              Werden Sie Teil unserer Erfolgsgeschichte
            </h2>
            <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
              Vertrauen Sie auf unsere Erfahrung aus über {stats.projekte} Projekten.
              Wir freuen uns auf Ihre Anfrage.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link
                href="/kontakt"
                className="inline-flex items-center gap-2 bg-white text-[#012956] font-bold px-8 py-4 rounded-xl hover:bg-gray-100 transition-colors shadow-lg"
              >
                Kostenlose Beratung
                <ArrowRight className="w-5 h-5" />
              </Link>
              <Link
                href="/leistungen"
                className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm text-white font-bold px-8 py-4 rounded-xl hover:bg-white/20 transition-colors border border-white/20"
              >
                Unsere Leistungen
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </main>
  )
}
