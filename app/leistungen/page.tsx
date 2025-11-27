'use client'

import { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { ArrowRight, Check, Building2, Factory, Wrench, Sparkles } from 'lucide-react'
import { leistungen, categories, getAllCategories } from '@/lib/leistungen-data'

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

export default function LeistungenPage() {
  const [activeFilter, setActiveFilter] = useState<string>('alle')

  const filteredLeistungen = activeFilter === 'alle'
    ? leistungen
    : leistungen.filter(l => l.category === activeFilter)

  const allCategories = getAllCategories()

  return (
    <main className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative bg-[#012956] py-16 md:py-24 lg:py-32 overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-[#109387]/10 to-transparent" />
        </div>

        <div className="relative w-full max-w-[1800px] mx-auto px-6 lg:px-12 xl:px-20">
          {/* Mobile & Desktop Content */}
          <div className="text-center lg:text-left lg:grid lg:grid-cols-2 lg:gap-20 lg:items-center">
            {/* Content */}
            <div>
              <p className="text-[#109387] font-bold text-sm uppercase tracking-[0.2em] mb-4">
                Unsere Leistungen
              </p>

              <h1 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-white leading-[1.05] mb-6">
                18 professionelle
                <span className="block text-[#109387]">Reinigungsservices</span>
              </h1>

              <p className="text-xl md:text-2xl font-bold text-white/80 leading-snug mb-10 max-w-xl mx-auto lg:mx-0">
                Von der täglichen Büroreinigung bis zur spezialisierten Industriereinigung.
              </p>

              {/* Quick Stats */}
              <div className="flex flex-wrap justify-center lg:justify-start gap-8 mb-10">
                {[
                  { value: '18', label: 'Services' },
                  { value: '4', label: 'Kategorien' },
                  { value: '100%', label: 'Qualität' },
                  { value: '48h', label: 'Angebot' },
                ].map((stat, i) => (
                  <div key={i} className="text-center">
                    <div className="text-[#109387] font-bold text-3xl md:text-4xl">{stat.value}</div>
                    <div className="text-white/60 font-semibold text-sm">{stat.label}</div>
                  </div>
                ))}
              </div>

              <a
                href="#contact-form"
                className="inline-flex items-center gap-3 bg-[#109387] hover:bg-[#0d7d72] text-white font-bold text-lg px-8 py-4 rounded-[6px] transition-all duration-300 group shadow-lg"
              >
                Kostenfreie Besichtigung anfragen
                <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
              </a>
            </div>

            {/* Category Cards - Desktop only */}
            <div className="hidden lg:grid grid-cols-2 gap-4">
              {allCategories.map((cat) => {
                const IconComponent = categoryIcons[cat.id as keyof typeof categoryIcons]
                const count = leistungen.filter(l => l.category === cat.id).length
                return (
                  <button
                    key={cat.id}
                    onClick={() => {
                      setActiveFilter(cat.id)
                      document.getElementById('leistungen-grid')?.scrollIntoView({ behavior: 'smooth' })
                    }}
                    className="group p-6 bg-white/5 hover:bg-white/10 rounded-[6px] text-left transition-all border border-white/10 hover:border-[#109387]/50"
                  >
                    <IconComponent size={32} strokeWidth={1.5} className="text-[#109387] mb-3" />
                    <h3 className="text-white font-bold text-lg mb-1">{categoryShortLabels[cat.id]}</h3>
                    <p className="text-white/60 font-semibold text-sm mb-3">{count} Leistungen</p>
                    <span className="inline-flex items-center gap-2 text-[#109387] font-bold text-sm group-hover:gap-3 transition-all">
                      Anzeigen <ArrowRight size={16} />
                    </span>
                  </button>
                )
              })}
            </div>
          </div>

          {/* Mobile Category Quick Select */}
          <div className="lg:hidden mt-10 grid grid-cols-2 gap-3">
            {allCategories.map((cat) => {
              const IconComponent = categoryIcons[cat.id as keyof typeof categoryIcons]
              const count = leistungen.filter(l => l.category === cat.id).length
              return (
                <button
                  key={cat.id}
                  onClick={() => {
                    setActiveFilter(cat.id)
                    document.getElementById('leistungen-grid')?.scrollIntoView({ behavior: 'smooth' })
                  }}
                  className="flex items-center gap-3 p-4 bg-white/5 rounded-[6px] text-left border border-white/10 active:bg-white/10"
                >
                  <IconComponent size={24} strokeWidth={1.5} className="text-[#109387] flex-shrink-0" />
                  <div>
                    <p className="text-white font-bold text-sm">{categoryShortLabels[cat.id]}</p>
                    <p className="text-white/50 font-semibold text-xs">{count} Services</p>
                  </div>
                </button>
              )
            })}
          </div>
        </div>
      </section>

      {/* Filter Section */}
      <section className="sticky top-0 z-20 bg-white border-b border-gray-200 shadow-sm">
        <div className="w-full max-w-[1800px] mx-auto px-6 lg:px-12 xl:px-20">
          <div className="flex items-center gap-3 py-4 overflow-x-auto scrollbar-hide">
            <button
              onClick={() => setActiveFilter('alle')}
              className={`px-6 py-2.5 rounded-[6px] font-bold text-sm whitespace-nowrap transition-all ${
                activeFilter === 'alle'
                  ? 'bg-[#012956] text-white'
                  : 'bg-[#f8f9fa] text-[#012956] hover:bg-[#012956] hover:text-white'
              }`}
            >
              Alle ({leistungen.length})
            </button>
            {allCategories.map((cat) => {
              const count = leistungen.filter(l => l.category === cat.id).length
              return (
                <button
                  key={cat.id}
                  onClick={() => setActiveFilter(cat.id)}
                  className={`px-6 py-2.5 rounded-[6px] font-bold text-sm whitespace-nowrap transition-all ${
                    activeFilter === cat.id
                      ? 'bg-[#012956] text-white'
                      : 'bg-[#f8f9fa] text-[#012956] hover:bg-[#012956] hover:text-white'
                  }`}
                >
                  {categoryShortLabels[cat.id]} ({count})
                </button>
              )
            })}
          </div>
        </div>
      </section>

      {/* Leistungen Grid */}
      <section id="leistungen-grid" className="py-16 md:py-20 lg:py-28 bg-[#f8f9fa]">
        <div className="w-full max-w-[1800px] mx-auto px-6 lg:px-12 xl:px-20">
          {/* Section Header */}
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#012956] leading-[1.1] mb-4">
              {activeFilter === 'alle'
                ? 'Alle Leistungen im Überblick'
                : categories[activeFilter as keyof typeof categories]?.label
              }
            </h2>
            <p className="text-lg text-gray-600 font-semibold max-w-2xl mx-auto">
              {activeFilter === 'alle'
                ? 'Entdecken Sie unser vollständiges Leistungsspektrum.'
                : categories[activeFilter as keyof typeof categories]?.description
              }
            </p>
          </div>

          {/* Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {filteredLeistungen.map((leistung) => {
              const IconComponent = categoryIcons[leistung.category]
              return (
                <Link
                  key={leistung.id}
                  href={`/leistungen/${leistung.slug}`}
                  className="group bg-white rounded-[6px] overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100"
                >
                  {/* Image */}
                  <div className="relative h-48 md:h-56 overflow-hidden">
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
                        className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-[4px] text-white text-xs font-bold"
                        style={{ backgroundColor: categories[leistung.category].color }}
                      >
                        <IconComponent size={12} strokeWidth={2} />
                        {categoryShortLabels[leistung.category]}
                      </span>
                    </div>

                    {/* Title Overlay */}
                    <div className="absolute bottom-4 left-4 right-4">
                      <h3 className="text-white font-bold text-xl md:text-2xl">
                        {leistung.name}
                      </h3>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-6">
                    <p className="text-gray-700 font-semibold text-base leading-relaxed mb-4 line-clamp-2">
                      {leistung.description}
                    </p>

                    {/* Benefits Preview */}
                    <div className="space-y-2 mb-5">
                      {leistung.benefits.slice(0, 2).map((benefit, i) => (
                        <div key={i} className="flex items-center gap-2">
                          <Check size={16} strokeWidth={2.5} className="text-[#109387] flex-shrink-0" />
                          <span className="text-gray-600 font-semibold text-sm">{benefit}</span>
                        </div>
                      ))}
                    </div>

                    {/* CTA */}
                    <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                      <span className="text-[#109387] font-bold text-base">
                        Mehr erfahren
                      </span>
                      <ArrowRight
                        size={18}
                        strokeWidth={2}
                        className="text-[#109387] group-hover:translate-x-1 transition-transform"
                      />
                    </div>
                  </div>
                </Link>
              )
            })}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16 md:py-24 lg:py-32 bg-white">
        <div className="w-full max-w-[1800px] mx-auto px-6 lg:px-12 xl:px-20">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            {/* Content */}
            <div className="order-2 lg:order-1">
              <p className="text-[#109387] font-bold text-sm uppercase tracking-[0.2em] mb-4">
                Warum FIMI
              </p>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#012956] leading-[1.1] mb-6">
                Qualität, die Sie
                <span className="text-[#109387]"> überzeugt</span>
              </h2>
              <p className="text-lg text-gray-700 font-semibold leading-relaxed mb-8">
                Seit über 8 Jahren vertrauen Unternehmen in ganz Bayern auf unsere Expertise.
              </p>

              <div className="space-y-5">
                {[
                  { title: 'Geschultes Stammpersonal', desc: 'Feste Teams, die Ihr Objekt kennen' },
                  { title: 'Umweltfreundliche Reinigung', desc: 'ISO 14001 zertifiziert' },
                  { title: 'Flexible Verträge', desc: 'Monatlich kündbar' },
                  { title: 'Persönlicher Ansprechpartner', desc: 'Direkter Draht zu Ihrem Objektleiter' },
                ].map((item, i) => (
                  <div key={i} className="flex items-start gap-4">
                    <Check size={22} strokeWidth={2.5} className="text-[#109387] flex-shrink-0 mt-0.5" />
                    <div>
                      <h3 className="font-bold text-[#012956] text-lg">{item.title}</h3>
                      <p className="text-gray-600 font-semibold">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Image */}
            <div className="relative order-1 lg:order-2">
              <div className="relative h-72 md:h-96 lg:h-[500px] rounded-[6px] overflow-hidden">
                <Image
                  src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?q=80&w=800&auto=format&fit=crop"
                  alt="FIMI Team bei der Arbeit"
                  fill
                  className="object-cover"
                />
              </div>
              {/* Stats Overlay */}
              <div className="absolute -bottom-6 left-6 md:-left-6 bg-[#012956] p-6 rounded-[6px] shadow-xl">
                <div className="text-[#109387] font-bold text-4xl mb-1">8+</div>
                <div className="text-white font-bold text-sm">Jahre Erfahrung</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-24 lg:py-32 bg-[#012956]">
        <div className="w-full max-w-[1800px] mx-auto px-6 lg:px-12 xl:px-20">
          <div className="text-center max-w-3xl mx-auto">
            <p className="text-[#109387] font-bold text-sm uppercase tracking-[0.2em] mb-4">
              Jetzt starten
            </p>
            <h2 className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-white leading-[1.05] mb-6">
              Kostenfreie Besichtigung
              <span className="block text-[#109387]">in 48 Stunden</span>
            </h2>
            <p className="text-xl text-white/80 font-bold mb-10">
              Lassen Sie sich unverbindlich beraten.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="#contact-form"
                className="inline-flex items-center justify-center gap-3 bg-[#109387] hover:bg-[#0d7d72] text-white font-bold text-lg px-8 py-4 rounded-[6px] transition-all duration-300 group shadow-lg"
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
        </div>
      </section>
    </main>
  )
}
