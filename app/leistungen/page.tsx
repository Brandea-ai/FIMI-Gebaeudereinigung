'use client'

import { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { ArrowRight, CheckCircle, Building2, Factory, Wrench, Sparkles } from 'lucide-react'
import { leistungen, categories, getAllCategories } from '@/lib/leistungen-data'

const categoryIcons = {
  gewerblich: Building2,
  industrie: Factory,
  facility: Wrench,
  spezial: Sparkles,
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
      <section className="relative bg-[#012956] py-20 lg:py-28 overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-[#109387]/10 to-transparent" />
          <div className="absolute bottom-0 left-0 w-1/2 h-1/2 bg-gradient-to-tr from-[#109387]/5 to-transparent" />
        </div>

        <div className="relative w-full max-w-[1800px] mx-auto px-6 lg:px-12 xl:px-20">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            {/* Left Content */}
            <div>
              <p className="text-[#109387] font-bold text-sm uppercase tracking-[0.2em] mb-6">
                Unsere Leistungen
              </p>

              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-[1.05] mb-6">
                18 professionelle
                <span className="block text-[#109387]">Reinigungsservices</span>
              </h1>

              <p className="text-white/70 font-medium text-lg lg:text-xl leading-relaxed mb-8 max-w-lg">
                Von der täglichen Büroreinigung bis zur spezialisierten Industriereinigung -
                wir bieten maßgeschneiderte Lösungen für jede Anforderung.
              </p>

              {/* Quick Stats */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-8">
                {[
                  { value: '18', label: 'Services' },
                  { value: '4', label: 'Kategorien' },
                  { value: '100%', label: 'Qualität' },
                  { value: '48h', label: 'Angebot' },
                ].map((stat, i) => (
                  <div key={i} className="text-center">
                    <div className="text-[#109387] font-bold text-2xl lg:text-3xl">{stat.value}</div>
                    <div className="text-white/50 text-sm">{stat.label}</div>
                  </div>
                ))}
              </div>

              <a
                href="#contact-form"
                className="inline-flex items-center gap-3 bg-[#109387] hover:bg-[#0d7d72] text-white font-bold text-lg px-8 py-4 rounded-[6px] transition-all group"
              >
                <span>Kostenfreie Besichtigung</span>
                <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
              </a>
            </div>

            {/* Right - Category Preview */}
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
                    <IconComponent size={32} className="text-[#109387] mb-4" />
                    <h3 className="text-white font-bold text-lg mb-1">{cat.label}</h3>
                    <p className="text-white/50 text-sm mb-3">{count} Leistungen</p>
                    <span className="inline-flex items-center gap-1 text-[#109387] text-sm font-semibold group-hover:gap-2 transition-all">
                      Anzeigen <ArrowRight size={14} />
                    </span>
                  </button>
                )
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Filter Section - sticky top-0, z-20 (unter Navigation z-50) */}
      <section className="sticky top-0 z-20 bg-white border-b border-gray-200 shadow-sm">
        <div className="w-full max-w-[1800px] mx-auto px-6 lg:px-12 xl:px-20">
          <div className="flex items-center gap-2 py-4 overflow-x-auto scrollbar-hide">
            <button
              onClick={() => setActiveFilter('alle')}
              className={`px-6 py-2.5 rounded-[6px] font-semibold text-sm whitespace-nowrap transition-all ${
                activeFilter === 'alle'
                  ? 'bg-[#012956] text-white'
                  : 'bg-[#f8f9fa] text-[#012956] hover:bg-[#012956] hover:text-white'
              }`}
            >
              Alle Leistungen ({leistungen.length})
            </button>
            {allCategories.map((cat) => {
              const count = leistungen.filter(l => l.category === cat.id).length
              return (
                <button
                  key={cat.id}
                  onClick={() => setActiveFilter(cat.id)}
                  className={`px-6 py-2.5 rounded-[6px] font-semibold text-sm whitespace-nowrap transition-all ${
                    activeFilter === cat.id
                      ? 'bg-[#012956] text-white'
                      : 'bg-[#f8f9fa] text-[#012956] hover:bg-[#012956] hover:text-white'
                  }`}
                >
                  {cat.label} ({count})
                </button>
              )
            })}
          </div>
        </div>
      </section>

      {/* Leistungen Grid */}
      <section id="leistungen-grid" className="py-16 lg:py-24 bg-[#f8f9fa]">
        <div className="w-full max-w-[1800px] mx-auto px-6 lg:px-12 xl:px-20">
          {/* Section Header */}
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-[#012956] mb-4">
              {activeFilter === 'alle'
                ? 'Alle Leistungen im Überblick'
                : categories[activeFilter as keyof typeof categories]?.label
              }
            </h2>
            <p className="text-gray-500 font-medium text-lg max-w-2xl mx-auto">
              {activeFilter === 'alle'
                ? 'Entdecken Sie unser vollständiges Leistungsspektrum für professionelle Gebäudereinigung.'
                : categories[activeFilter as keyof typeof categories]?.description
              }
            </p>
          </div>

          {/* Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {filteredLeistungen.map((leistung) => {
              const IconComponent = categoryIcons[leistung.category]
              return (
                <Link
                  key={leistung.id}
                  href={`/leistungen/${leistung.slug}`}
                  className="group bg-white rounded-[6px] overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100 hover:border-[#109387]/30"
                >
                  {/* Image */}
                  <div className="relative h-52 overflow-hidden">
                    <Image
                      src={leistung.image}
                      alt={leistung.name}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#012956]/60 via-transparent to-transparent" />

                    {/* Category Badge */}
                    <div className="absolute top-4 left-4">
                      <span
                        className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-[4px] text-white text-xs font-bold"
                        style={{ backgroundColor: categories[leistung.category].color }}
                      >
                        <IconComponent size={12} />
                        {categories[leistung.category].label}
                      </span>
                    </div>

                    {/* Title Overlay */}
                    <div className="absolute bottom-4 left-4 right-4">
                      <h3 className="text-white font-bold text-xl">
                        {leistung.name}
                      </h3>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-6">
                    <p className="text-gray-600 font-medium text-sm leading-relaxed mb-4 line-clamp-2">
                      {leistung.description}
                    </p>

                    {/* Benefits Preview */}
                    <div className="space-y-2 mb-4">
                      {leistung.benefits.slice(0, 2).map((benefit, i) => (
                        <div key={i} className="flex items-center gap-2">
                          <CheckCircle size={14} className="text-[#109387] flex-shrink-0" />
                          <span className="text-gray-500 text-xs">{benefit}</span>
                        </div>
                      ))}
                    </div>

                    {/* CTA */}
                    <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                      <span className="text-[#109387] font-bold text-sm group-hover:text-[#0d7d72] transition-colors">
                        Mehr erfahren
                      </span>
                      <ArrowRight
                        size={18}
                        className="text-[#109387] group-hover:translate-x-1 transition-transform"
                      />
                    </div>
                  </div>
                </Link>
              )
            })}
          </div>

          {/* Empty State */}
          {filteredLeistungen.length === 0 && (
            <div className="text-center py-12">
              <p className="text-gray-500">Keine Leistungen in dieser Kategorie gefunden.</p>
            </div>
          )}
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 lg:py-28 bg-white">
        <div className="w-full max-w-[1800px] mx-auto px-6 lg:px-12 xl:px-20">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            {/* Left Content */}
            <div>
              <p className="text-[#109387] font-bold text-sm uppercase tracking-[0.2em] mb-4">
                Warum FIMI
              </p>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#012956] leading-[1.1] mb-6">
                Qualität, die Sie
                <span className="text-[#109387]"> überzeugt</span>
              </h2>
              <p className="text-gray-600 font-medium text-lg leading-relaxed mb-8">
                Seit über 8 Jahren vertrauen Unternehmen in ganz Bayern auf unsere Expertise.
                Wir verbinden modernste Reinigungstechnik mit persönlichem Service.
              </p>

              <div className="space-y-4">
                {[
                  { title: 'Geschultes Stammpersonal', desc: 'Feste Teams, die Ihr Objekt kennen' },
                  { title: 'Umweltfreundliche Reinigung', desc: 'ISO 14001 zertifiziert' },
                  { title: 'Flexible Verträge', desc: 'Monatlich kündbar, keine langen Bindungen' },
                  { title: 'Persönlicher Ansprechpartner', desc: 'Direkter Draht zu Ihrem Objektleiter' },
                ].map((item, i) => (
                  <div key={i} className="flex items-start gap-4">
                    <div className="w-10 h-10 bg-[#109387]/10 rounded-[6px] flex items-center justify-center flex-shrink-0">
                      <CheckCircle size={20} className="text-[#109387]" />
                    </div>
                    <div>
                      <h3 className="font-bold text-[#012956]">{item.title}</h3>
                      <p className="text-gray-500 text-sm">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Right Image */}
            <div className="relative">
              <div className="relative h-[500px] rounded-[6px] overflow-hidden">
                <Image
                  src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?q=80&w=800&auto=format&fit=crop"
                  alt="FIMI Team bei der Arbeit"
                  fill
                  className="object-cover"
                />
              </div>
              {/* Stats Overlay */}
              <div className="absolute -bottom-6 -left-6 bg-[#012956] p-6 rounded-[6px] shadow-xl">
                <div className="text-[#109387] font-bold text-4xl mb-1">8+</div>
                <div className="text-white font-semibold text-sm">Jahre Erfahrung</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 lg:py-28 bg-[#012956]">
        <div className="w-full max-w-[1800px] mx-auto px-6 lg:px-12 xl:px-20">
          <div className="text-center max-w-3xl mx-auto">
            <p className="text-[#109387] font-bold text-sm uppercase tracking-[0.2em] mb-4">
              Jetzt starten
            </p>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white leading-[1.1] mb-6">
              Kostenfreie Besichtigung
              <span className="block text-[#109387]">in 48 Stunden</span>
            </h2>
            <p className="text-white/70 font-medium text-lg mb-8">
              Lassen Sie sich unverbindlich beraten. Wir analysieren Ihren Bedarf
              vor Ort und erstellen ein maßgeschneidertes Angebot.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="#contact-form"
                className="inline-flex items-center justify-center gap-3 bg-[#109387] hover:bg-[#0d7d72] text-white font-bold text-lg px-8 py-4 rounded-[6px] transition-all group"
              >
                <span>Besichtigung anfragen</span>
                <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
              </a>
              <a
                href="tel:+4987143033460"
                className="inline-flex items-center justify-center gap-3 bg-white/10 hover:bg-white/20 text-white font-bold text-lg px-8 py-4 rounded-[6px] transition-all"
              >
                <span>0871 430 334 60</span>
              </a>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
