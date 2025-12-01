'use client'

import Image from 'next/image'
import Link from 'next/link'
import { ArrowRight, Calendar, Clock, Briefcase, Users, GraduationCap, Heart, Sparkles, Building2, Wrench } from 'lucide-react'

// Relevante Blog-Artikel für Unterhaltsreinigung
const blogArtikel = [
  {
    slug: 'unterhaltsreinigung-vs-grundreinigung',
    titel: 'Unterhaltsreinigung vs. Grundreinigung: Was brauchen Sie?',
    auszug: 'Die Unterschiede zwischen regelmäßiger Unterhaltsreinigung und einmaliger Grundreinigung – und wann Sie was brauchen.',
    bild: 'https://images.unsplash.com/photo-1581578731548-c64695cc6952?q=80&w=800&auto=format&fit=crop',
    datum: '15. November 2025',
    lesezeit: '4 Min.',
  },
  {
    slug: 'reinigungsintervalle-richtig-planen',
    titel: 'Reinigungsintervalle richtig planen: So sparen Sie Kosten',
    auszug: 'Nicht jeder Raum braucht tägliche Reinigung. Wie Sie den optimalen Reinigungsrhythmus für Ihr Unternehmen finden.',
    bild: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?q=80&w=800&auto=format&fit=crop',
    datum: '8. November 2025',
    lesezeit: '5 Min.',
  },
  {
    slug: 'qualitaetskontrolle-reinigung',
    titel: 'Qualitätskontrolle in der Gebäudereinigung',
    auszug: 'Wie professionelle Reinigungsunternehmen gleichbleibende Qualität sicherstellen – und worauf Sie achten sollten.',
    bild: 'https://images.unsplash.com/photo-1551836022-d5d88e9218df?q=80&w=800&auto=format&fit=crop',
    datum: '1. November 2025',
    lesezeit: '3 Min.',
  },
]

// Karriere-Vorteile
const karriereVorteile = [
  { icon: Users, text: 'Feste Teams – keine Leiharbeit' },
  { icon: GraduationCap, text: 'Weiterbildung & Aufstieg' },
  { icon: Heart, text: 'Wertschätzung & faire Bezahlung' },
]

// Weitere Leistungen
const weitereLeistungen = [
  { name: 'Büroreinigung', href: '/leistungen/bueroreinigung', icon: Building2 },
  { name: 'Glasreinigung', href: '/leistungen/glasreinigung', icon: Sparkles },
  { name: 'Industriereinigung', href: '/leistungen/industriereinigung', icon: Wrench },
]

export default function RelatedSection() {
  return (
    <section className="py-20 lg:py-28 bg-white">
      <div className="w-full max-w-[1800px] mx-auto px-6 lg:px-12 xl:px-20">

        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <p className="text-sm text-[#109387] font-bold uppercase tracking-wide mb-3">
            Mehr entdecken
          </p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#012956] leading-[1.1]">
            Wissen, Karriere & mehr Leistungen
          </h2>
        </div>

        <div className="grid lg:grid-cols-3 gap-8 lg:gap-12">

          {/* Blog-Artikel */}
          <div className="lg:col-span-2">
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-xl font-bold text-[#012956]">Aktuelle Artikel</h3>
              <Link
                href="/neuigkeiten"
                className="text-[#109387] font-bold text-sm hover:text-[#012956] transition-colors inline-flex items-center gap-1"
              >
                Alle Artikel
                <ArrowRight size={16} />
              </Link>
            </div>

            <div className="space-y-6">
              {blogArtikel.map((artikel) => (
                <Link
                  key={artikel.slug}
                  href={`/neuigkeiten/${artikel.slug}`}
                  className="group flex gap-4 p-4 bg-[#f8f9fa] rounded-[6px] hover:bg-[#012956] transition-all duration-300"
                >
                  <div className="relative w-24 h-24 flex-shrink-0 rounded-[6px] overflow-hidden">
                    <Image
                      src={artikel.bild}
                      alt={artikel.titel}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-3 text-gray-500 text-xs mb-2 group-hover:text-white/60 transition-colors">
                      <span className="flex items-center gap-1">
                        <Calendar size={12} />
                        {artikel.datum}
                      </span>
                      <span className="flex items-center gap-1">
                        <Clock size={12} />
                        {artikel.lesezeit}
                      </span>
                    </div>
                    <h4 className="font-bold text-[#012956] group-hover:text-white transition-colors line-clamp-2 mb-1">
                      {artikel.titel}
                    </h4>
                    <p className="text-gray-600 text-sm font-semibold line-clamp-2 group-hover:text-white/80 transition-colors">
                      {artikel.auszug}
                    </p>
                  </div>
                </Link>
              ))}
            </div>
          </div>

          {/* Right Column: Karriere + Leistungen */}
          <div className="space-y-8">

            {/* Karriere-Teaser */}
            <div className="bg-[#012956] rounded-[12px] p-6">
              <div className="flex items-center gap-2 mb-4">
                <Briefcase size={20} className="text-[#109387]" />
                <h3 className="text-lg font-bold text-white">Karriere bei FIMI</h3>
              </div>
              <p className="text-white/70 font-semibold text-sm mb-6">
                Werden Sie Teil unseres Teams. Wir suchen Reinigungskräfte,
                Vorarbeiter und Objektleiter in ganz Bayern.
              </p>

              <div className="space-y-3 mb-6">
                {karriereVorteile.map((vorteil) => {
                  const Icon = vorteil.icon
                  return (
                    <div key={vorteil.text} className="flex items-center gap-3">
                      <div className="w-8 h-8 bg-[#109387]/20 rounded-[6px] flex items-center justify-center">
                        <Icon size={16} className="text-[#109387]" />
                      </div>
                      <span className="text-white/90 font-semibold text-sm">{vorteil.text}</span>
                    </div>
                  )
                })}
              </div>

              <Link
                href="/karriere"
                className="inline-flex items-center justify-center gap-2 w-full bg-[#109387] hover:bg-[#0d7d72] text-white font-bold py-3 rounded-[6px] transition-all group"
              >
                Offene Stellen ansehen
                <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>

            {/* Weitere Leistungen */}
            <div>
              <h3 className="text-lg font-bold text-[#012956] mb-4">Weitere Leistungen</h3>
              <div className="space-y-3">
                {weitereLeistungen.map((leistung) => {
                  const Icon = leistung.icon
                  return (
                    <Link
                      key={leistung.name}
                      href={leistung.href}
                      className="flex items-center gap-3 p-4 bg-[#f8f9fa] rounded-[6px] hover:bg-[#109387]/10 transition-colors group"
                    >
                      <div className="w-10 h-10 bg-[#109387]/10 rounded-[6px] flex items-center justify-center">
                        <Icon size={20} className="text-[#109387]" />
                      </div>
                      <span className="font-bold text-[#012956] group-hover:text-[#109387] transition-colors">
                        {leistung.name}
                      </span>
                      <ArrowRight size={18} className="text-gray-400 ml-auto group-hover:text-[#109387] group-hover:translate-x-1 transition-all" />
                    </Link>
                  )
                })}
              </div>

              <Link
                href="/leistungen"
                className="inline-flex items-center gap-2 text-[#109387] font-bold text-sm mt-4 hover:text-[#012956] transition-colors"
              >
                Alle 18 Leistungen ansehen
                <ArrowRight size={16} />
              </Link>
            </div>

          </div>

        </div>

      </div>
    </section>
  )
}
