'use client'

import { useState, useEffect, useRef } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { ArrowRight, Check, MapPin, Users, Award, Clock, Sparkles, Shield, Leaf, Target, Wrench, Heart } from 'lucide-react'

// Daten
const stats = [
  { wert: '8+', label: 'Jahre Erfahrung' },
  { wert: '120+', label: 'Zufriedene Kunden' },
  { wert: '90+', label: 'Mitarbeiter' },
  { wert: '8', label: 'Einsatzgebiete' },
]

const werte = [
  {
    icon: Sparkles,
    titel: 'Qualität ohne Kompromisse',
    kurz: 'Höchste Standards in jedem Detail',
    beschreibung: 'Wir arbeiten nach den Prinzipien von ISO 9001 und streben die Zertifizierung bis Ende 2026 an. Qualität ist für uns keine Option, sondern Voraussetzung.',
    details: 'Regelmäßige Schulungen, dokumentierte Prozesse und kontinuierliche Verbesserung sind die Grundpfeiler unserer Arbeit. Jeder Mitarbeiter durchläuft ein strukturiertes Einarbeitungsprogramm.',
    bild: 'https://images.unsplash.com/photo-1600880292203-757bb62b4baf?q=80&w=800&auto=format&fit=crop',
  },
  {
    icon: Leaf,
    titel: 'Nachhaltigkeit & Umwelt',
    kurz: 'Verantwortung für morgen',
    beschreibung: 'Umweltschutz ist Teil unserer DNA. Wir setzen auf biologisch abbaubare Reinigungsmittel und ressourcenschonende Verfahren.',
    details: 'Von der Chemie-Auswahl bis zur Routenplanung – wir optimieren jeden Prozess auf minimale Umweltbelastung. Unsere Partner wie Dreiturm und Kiehl teilen diese Philosophie.',
    bild: 'https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?q=80&w=800&auto=format&fit=crop',
  },
  {
    icon: Target,
    titel: 'Innovation & Technologie',
    kurz: 'Moderne Lösungen für moderne Anforderungen',
    beschreibung: 'Wir implementieren eigene Softwarelösungen und KI-gestützte Qualitätsmanagementsysteme. Unser Kunden-Dashboard bietet volle Transparenz.',
    details: 'Digitale Checklisten, automatisierte Berichte und Echtzeit-Kommunikation – wir nutzen Technologie, um besser zu werden. Nicht um modern zu wirken, sondern um Ergebnisse zu liefern.',
    bild: 'https://images.unsplash.com/photo-1551434678-e076c223a692?q=80&w=800&auto=format&fit=crop',
  },
  {
    icon: Heart,
    titel: 'Mitarbeiter im Fokus',
    kurz: 'Faire Bezahlung, echte Wertschätzung',
    beschreibung: 'Unsere 90+ Mitarbeiter sind keine Nummern. Übertarifliche Bezahlung, feste Teams und echte Entwicklungsmöglichkeiten machen den Unterschied.',
    details: 'Vom Reiniger zum Objektleiter – bei uns ist Karriere möglich. Wir investieren in Weiterbildung und schaffen ein Arbeitsumfeld, in dem Menschen gerne arbeiten.',
    bild: 'https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?q=80&w=800&auto=format&fit=crop',
  },
]

const meilensteine = [
  {
    jahr: '2016',
    titel: 'Gründung in Landshut',
    beschreibung: 'Andreas Obermeier und sein Partner gründen die FIMI GbR mit einer klaren Vision: Gebäudereinigung auf höchstem Niveau, persönlich und zuverlässig.',
    bild: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=600&auto=format&fit=crop',
  },
  {
    jahr: '2018',
    titel: 'Erste Großkunden',
    beschreibung: 'Namhafte Unternehmen aus Industrie und Gewerbe vertrauen auf FIMI. Das Team wächst auf 20 Mitarbeiter.',
    bild: 'https://images.unsplash.com/photo-1560472355-536de3962603?q=80&w=600&auto=format&fit=crop',
  },
  {
    jahr: '2020',
    titel: 'Expansion & Digitalisierung',
    beschreibung: 'Trotz Pandemie: Ausbau des Kundenportfolios und Einführung digitaler Qualitätsmanagementsysteme.',
    bild: 'https://images.unsplash.com/photo-1551434678-e076c223a692?q=80&w=600&auto=format&fit=crop',
  },
  {
    jahr: '2022',
    titel: '50+ Mitarbeiter',
    beschreibung: 'Das Team wächst weiter. Neue Standorte in München und Regensburg ermöglichen regionale Nähe.',
    bild: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=600&auto=format&fit=crop',
  },
  {
    jahr: '2024',
    titel: '90+ Mitarbeiter & Kunden-Dashboard',
    beschreibung: 'Launch des eigenen Kunden-Dashboards. 120+ zufriedene Kunden. ISO-Zertifizierung in Vorbereitung.',
    bild: 'https://images.unsplash.com/photo-1600880292203-757bb62b4baf?q=80&w=600&auto=format&fit=crop',
  },
]

const partner = [
  { name: 'Kärcher', kategorie: 'Maschinen' },
  { name: 'Nilfisk', kategorie: 'Maschinen' },
  { name: 'Hako', kategorie: 'Maschinen' },
  { name: 'Tennant', kategorie: 'Maschinen' },
  { name: 'Comac/Fimap', kategorie: 'Maschinen' },
  { name: 'Dreiturm GmbH', kategorie: 'Chemie' },
  { name: 'Kiehl', kategorie: 'Chemie' },
  { name: 'Ecolab', kategorie: 'Chemie' },
  { name: 'Tork', kategorie: 'Hygiene' },
  { name: 'Wepa', kategorie: 'Hygiene' },
  { name: 'Fripa', kategorie: 'Hygiene' },
  { name: 'igefa', kategorie: 'Hygiene' },
  { name: 'CWS', kategorie: 'Arbeitsschutz' },
  { name: 'Mewa', kategorie: 'Arbeitsschutz' },
  { name: 'Engelbert Strauss', kategorie: 'Arbeitsschutz' },
  { name: 'Stihl', kategorie: 'Garten' },
]

const team = [
  { name: 'Maria Schmidt', rolle: 'Buchhaltung', bild: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=600&auto=format&fit=crop' },
  { name: 'Julia Weber', rolle: 'Kundenbetreuung', bild: 'https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?q=80&w=600&auto=format&fit=crop' },
  { name: 'Sandra Huber', rolle: 'Disposition', bild: 'https://images.unsplash.com/photo-1594744803329-e58b31de8bf5?q=80&w=600&auto=format&fit=crop' },
  { name: 'Thomas Maier', rolle: 'Vertrieb', bild: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=600&auto=format&fit=crop' },
  { name: 'Stefan Bauer', rolle: 'Vertrieb', bild: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=600&auto=format&fit=crop' },
  { name: 'Michael Gruber', rolle: 'Objektleiter', bild: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=600&auto=format&fit=crop' },
  { name: 'Robert Fischer', rolle: 'Objektleiter', bild: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?q=80&w=600&auto=format&fit=crop' },
  { name: 'Anna Müller', rolle: 'Qualitätsmanagement', bild: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=600&auto=format&fit=crop' },
]

const gruender = [
  {
    name: 'Andreas Obermeier',
    rolle: 'Geschäftsführer',
    bild: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=800&auto=format&fit=crop',
    zitat: 'Keine Lösung zu haben ist keine Option. Wir finden immer einen Weg.',
  },
  {
    name: 'Markus Obermeier',
    rolle: 'Geschäftsführer',
    bild: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?q=80&w=800&auto=format&fit=crop',
    zitat: 'Qualität beginnt bei den Menschen. Deshalb investieren wir in unser Team.',
  },
]

const einsatzgebiete = [
  'Landshut', 'München', 'Regensburg', 'Ingolstadt',
  'Freising', 'Erding', 'Straubing', 'Passau'
]

export default function UeberUnsPage() {
  const [visibleMeilensteine, setVisibleMeilensteine] = useState<Set<number>>(new Set())
  const meilensteinRefs = useRef<(HTMLDivElement | null)[]>([])

  useEffect(() => {
    const observers = meilensteinRefs.current.map((ref, index) => {
      if (!ref) return null
      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              setVisibleMeilensteine((prev) => new Set([...prev, index]))
            }
          })
        },
        { threshold: 0.2 }
      )
      observer.observe(ref)
      return observer
    })
    return () => observers.forEach((observer) => observer?.disconnect())
  }, [])

  return (
    <main className="min-h-screen bg-white">
      {/* Hero */}
      <section className="relative min-h-[80vh] flex items-center">
        <div className="absolute inset-0">
          <Image
            src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?q=80&w=3840&auto=format&fit=crop"
            alt="FIMI Team"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#012956]/95 via-[#012956]/85 to-[#012956]/60" />
        </div>

        <div className="relative z-10 w-full max-w-[1800px] mx-auto px-6 lg:px-12 xl:px-20 py-32">
          <div className="max-w-4xl">
            <p className="text-[#109387] font-bold text-sm uppercase tracking-[0.2em] mb-6">
              Über FIMI Gebäudereinigung
            </p>

            {/* Slogan als Zitat hervorgehoben */}
            <div className="relative mb-8">
              <div className="absolute -left-4 lg:-left-6 top-0 bottom-0 w-1 bg-[#109387]" />
              <h1 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-white leading-[1.05] pl-6 lg:pl-8">
                „Keine Lösung zu haben
                <span className="block text-[#109387]">ist keine Option."</span>
              </h1>
            </div>

            <p className="text-xl lg:text-2xl text-white/80 font-semibold leading-relaxed mb-8 max-w-3xl">
              Seit 2016 liefern wir professionelle Gebäudereinigung in Bayern.
              90+ Mitarbeiter, 120+ zufriedene Kunden, 8 Einsatzgebiete – und eine Philosophie:
              Es gibt immer einen Weg.
            </p>

            <div className="flex flex-wrap gap-4">
              <Link
                href="/kontakt"
                className="inline-flex items-center gap-3 bg-[#109387] hover:bg-[#0d7d72] text-white font-bold text-lg px-8 py-4 rounded-[6px] transition-all duration-300 group"
              >
                Kostenfreie Besichtigung
                <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
              </Link>
              <a
                href="tel:+4987143033460"
                className="inline-flex items-center gap-3 bg-white/10 hover:bg-white/20 text-white font-bold text-lg px-8 py-4 rounded-[6px] transition-all duration-300"
              >
                0871 430 334 60
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-8 bg-[#f8f9fa] border-y border-gray-200">
        <div className="w-full max-w-[1800px] mx-auto px-6 lg:px-12 xl:px-20">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat) => (
              <div key={stat.label} className="text-center">
                <p className="text-4xl lg:text-5xl font-bold text-[#109387] mb-1">{stat.wert}</p>
                <p className="text-gray-600 font-semibold">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Werte - Zick-Zack Layout */}
      <section className="py-20 lg:py-28 bg-white">
        <div className="w-full max-w-[1800px] mx-auto px-6 lg:px-12 xl:px-20">
          <div className="text-center mb-16">
            <p className="text-sm text-gray-500 font-semibold uppercase tracking-wide mb-3">
              Unsere Philosophie
            </p>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#109387] leading-[1.1]">
              Wofür wir stehen
            </h2>
          </div>

          <div className="space-y-20 lg:space-y-28">
            {werte.map((wert, index) => (
              <div
                key={wert.titel}
                className={`grid lg:grid-cols-2 gap-12 lg:gap-20 items-center ${
                  index % 2 === 1 ? 'lg:flex-row-reverse' : ''
                }`}
              >
                <div className={index % 2 === 1 ? 'lg:order-2' : ''}>
                  <div className="flex items-center gap-4 mb-4">
                    <div className="w-14 h-14 bg-[#109387]/10 rounded-[6px] flex items-center justify-center">
                      <wert.icon size={28} className="text-[#109387]" strokeWidth={1.5} />
                    </div>
                    <p className="text-[#109387] font-bold text-sm uppercase tracking-wide">
                      {wert.kurz}
                    </p>
                  </div>
                  <h3 className="text-2xl lg:text-3xl font-bold text-[#012956] mb-4">
                    {wert.titel}
                  </h3>
                  <p className="text-lg text-gray-700 font-semibold leading-relaxed mb-4">
                    {wert.beschreibung}
                  </p>
                  <p className="text-gray-600 leading-relaxed">
                    {wert.details}
                  </p>
                </div>
                <div className={`relative ${index % 2 === 1 ? 'lg:order-1' : ''}`}>
                  <div className="relative aspect-[4/3] rounded-[6px] overflow-hidden">
                    <Image
                      src={wert.bild}
                      alt={wert.titel}
                      fill
                      className="object-cover"
                    />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-20 lg:py-28 bg-[#f8f9fa]">
        <div className="w-full max-w-[1800px] mx-auto px-6 lg:px-12 xl:px-20">
          <div className="text-center mb-16">
            <p className="text-sm text-gray-500 font-semibold uppercase tracking-wide mb-3">
              Unsere Geschichte
            </p>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#109387] leading-[1.1]">
              Von Landshut nach ganz Bayern
            </h2>
          </div>

          <div className="space-y-8">
            {meilensteine.map((meilenstein, index) => (
              <div
                key={meilenstein.jahr}
                ref={(el) => { meilensteinRefs.current[index] = el }}
                className={`grid lg:grid-cols-2 gap-8 items-center transition-all duration-700 ${
                  visibleMeilensteine.has(index)
                    ? 'opacity-100 translate-y-0'
                    : 'opacity-0 translate-y-8'
                } ${index % 2 === 1 ? '' : ''}`}
              >
                <div className={`relative ${index % 2 === 1 ? 'lg:order-2' : ''}`}>
                  <div className="relative aspect-[16/10] rounded-[6px] overflow-hidden">
                    <Image
                      src={meilenstein.bild}
                      alt={meilenstein.titel}
                      fill
                      className="object-cover"
                    />
                    <div className="absolute top-4 left-4 bg-[#109387] rounded-[6px] px-4 py-2">
                      <span className="text-white font-bold text-lg">{meilenstein.jahr}</span>
                    </div>
                  </div>
                </div>
                <div className={`bg-white p-8 lg:p-12 rounded-[6px] ${index % 2 === 1 ? 'lg:order-1' : ''}`}>
                  <h3 className="text-xl lg:text-2xl font-bold text-[#012956] mb-3">
                    {meilenstein.titel}
                  </h3>
                  <p className="text-gray-600 font-medium leading-relaxed">
                    {meilenstein.beschreibung}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Partner */}
      <section className="py-20 lg:py-28 bg-white">
        <div className="w-full max-w-[1800px] mx-auto px-6 lg:px-12 xl:px-20">
          <div className="text-center mb-12">
            <p className="text-sm text-gray-500 font-semibold uppercase tracking-wide mb-3">
              Unsere Partner
            </p>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#109387] leading-[1.1] mb-4">
              Erstklassige Ausstattung
            </h2>
            <p className="text-lg text-gray-600 font-semibold max-w-2xl mx-auto">
              Wir arbeiten ausschließlich mit führenden Herstellern zusammen.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-4">
            {partner.map((p) => (
              <div
                key={p.name}
                className="bg-[#f8f9fa] rounded-[6px] p-4 text-center hover:bg-[#109387]/10 transition-colors"
              >
                <div className="w-12 h-12 bg-white rounded-[6px] flex items-center justify-center mx-auto mb-2 shadow-sm">
                  <Wrench size={20} className="text-[#109387]" />
                </div>
                <p className="text-sm font-bold text-[#012956] truncate">{p.name}</p>
                <p className="text-xs text-gray-500">{p.kategorie}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-20 lg:py-28 bg-[#f8f9fa]">
        <div className="w-full max-w-[1800px] mx-auto px-6 lg:px-12 xl:px-20">
          <div className="text-center mb-12">
            <p className="text-sm text-gray-500 font-semibold uppercase tracking-wide mb-3">
              Das Team
            </p>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#109387] leading-[1.1] mb-4">
              Menschen, die den Unterschied machen
            </h2>
            <p className="text-lg text-gray-600 font-semibold max-w-2xl mx-auto">
              Hinter FIMI stehen 90+ engagierte Mitarbeiter. Hier sind einige Gesichter aus unserer Zentrale.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {team.map((person) => (
              <div key={person.name} className="text-center">
                <div className="relative aspect-[3/4] rounded-[6px] overflow-hidden mb-4">
                  <Image
                    src={person.bild}
                    alt={person.name}
                    fill
                    className="object-cover"
                  />
                </div>
                <h3 className="font-bold text-[#012956]">{person.name}</h3>
                <p className="text-sm text-gray-500">{person.rolle}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Karriere CTA */}
      <section className="py-16 lg:py-20 bg-[#012956]">
        <div className="w-full max-w-[1800px] mx-auto px-6 lg:px-12 xl:px-20">
          <div className="grid lg:grid-cols-2 gap-8 items-center">
            <div>
              <p className="text-[#109387] font-bold text-sm uppercase tracking-wide mb-3">
                Karriere bei FIMI
              </p>
              <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-white mb-4">
                Werden Sie Teil unseres Teams
              </h2>
              <p className="text-white/70 font-semibold mb-6">
                90+ Mitarbeiter. Faire Bezahlung. Echte Entwicklungsmöglichkeiten.
              </p>
            </div>
            <div className="flex justify-start lg:justify-end">
              <Link
                href="/karriere"
                className="inline-flex items-center gap-3 bg-[#109387] hover:bg-[#0d7d72] text-white font-bold text-lg px-8 py-4 rounded-[6px] transition-all duration-300 group"
              >
                Zu den Karrieremöglichkeiten
                <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Gründer */}
      <section className="py-20 lg:py-28 bg-white">
        <div className="w-full max-w-[1800px] mx-auto px-6 lg:px-12 xl:px-20">
          <div className="text-center mb-12">
            <p className="text-sm text-gray-500 font-semibold uppercase tracking-wide mb-3">
              Die Geschäftsführung
            </p>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#109387] leading-[1.1]">
              Persönlich. Engagiert. Erfahren.
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-12 max-w-4xl mx-auto">
            {gruender.map((person) => (
              <div key={person.name} className="text-center">
                <div className="relative aspect-[2/3] rounded-[6px] overflow-hidden mb-6 max-w-sm mx-auto">
                  <Image
                    src={person.bild}
                    alt={person.name}
                    fill
                    className="object-cover"
                  />
                </div>
                <h3 className="text-xl font-bold text-[#012956] mb-1">{person.name}</h3>
                <p className="text-[#109387] font-semibold mb-4">{person.rolle}</p>
                <p className="text-gray-600 italic">„{person.zitat}"</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Einsatzgebiete */}
      <section className="py-20 lg:py-28 bg-[#f8f9fa]">
        <div className="w-full max-w-[1800px] mx-auto px-6 lg:px-12 xl:px-20">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-sm text-gray-500 font-semibold uppercase tracking-wide mb-3">
                Unsere Einsatzgebiete
              </p>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#109387] leading-[1.1] mb-6">
                Regional verwurzelt,
                <span className="block text-[#012956]">bayernweit aktiv</span>
              </h2>
              <p className="text-lg text-gray-700 font-semibold leading-relaxed mb-6">
                Von Landshut aus betreuen wir Kunden in ganz Niederbayern und Oberbayern.
                Kurze Wege, schnelle Reaktionszeiten, persönliche Betreuung vor Ort.
              </p>
              <div className="flex flex-wrap gap-3">
                {einsatzgebiete.map((stadt) => (
                  <span
                    key={stadt}
                    className="inline-flex items-center gap-2 bg-white px-4 py-2 rounded-[6px] text-[#012956] font-semibold shadow-sm"
                  >
                    <MapPin size={16} className="text-[#109387]" />
                    {stadt}
                  </span>
                ))}
              </div>
            </div>
            <div className="relative aspect-[4/3] rounded-[6px] overflow-hidden">
              <Image
                src="/images/home/städte für fimi.avif"
                alt="FIMI Einsatzgebiete in Bayern"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Interne Links */}
      <section className="py-16 lg:py-20 bg-white border-t border-gray-200">
        <div className="w-full max-w-[1800px] mx-auto px-6 lg:px-12 xl:px-20">
          <div className="grid md:grid-cols-3 gap-6">
            <Link
              href="/leistungen"
              className="group bg-[#f8f9fa] hover:bg-[#109387]/10 p-8 rounded-[6px] transition-all"
            >
              <h3 className="text-xl font-bold text-[#012956] mb-2 group-hover:text-[#109387] transition-colors">
                Alle Leistungen
              </h3>
              <p className="text-gray-600 mb-4">
                Von Unterhaltsreinigung bis Facility Management – entdecken Sie unser Angebot.
              </p>
              <span className="inline-flex items-center gap-2 text-[#109387] font-bold">
                Mehr erfahren
                <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
              </span>
            </Link>
            <Link
              href="/branchen"
              className="group bg-[#f8f9fa] hover:bg-[#109387]/10 p-8 rounded-[6px] transition-all"
            >
              <h3 className="text-xl font-bold text-[#012956] mb-2 group-hover:text-[#109387] transition-colors">
                Alle Branchen
              </h3>
              <p className="text-gray-600 mb-4">
                Spezialisierte Lösungen für Büro, Industrie, Gesundheitswesen und mehr.
              </p>
              <span className="inline-flex items-center gap-2 text-[#109387] font-bold">
                Mehr erfahren
                <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
              </span>
            </Link>
            <Link
              href="/neuigkeiten"
              className="group bg-[#f8f9fa] hover:bg-[#109387]/10 p-8 rounded-[6px] transition-all"
            >
              <h3 className="text-xl font-bold text-[#012956] mb-2 group-hover:text-[#109387] transition-colors">
                Neuigkeiten
              </h3>
              <p className="text-gray-600 mb-4">
                Aktuelles aus der Welt der Gebäudereinigung und von FIMI.
              </p>
              <span className="inline-flex items-center gap-2 text-[#109387] font-bold">
                Zum Blog
                <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
              </span>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 lg:py-28 bg-[#012956]">
        <div className="w-full max-w-[1800px] mx-auto px-6 lg:px-12 xl:px-20 text-center">
          <p className="text-[#109387] font-bold text-sm uppercase tracking-[0.2em] mb-4">
            Jetzt starten
          </p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white leading-[1.1] mb-6">
            Kostenfreie Besichtigung
            <span className="block text-[#109387]">für Ihr Objekt</span>
          </h2>
          <p className="text-xl text-white/70 font-semibold mb-8 max-w-2xl mx-auto">
            Lassen Sie sich unverbindlich beraten. Wir analysieren Ihren Bedarf
            und erstellen ein maßgeschneidertes Angebot.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/kontakt"
              className="inline-flex items-center justify-center gap-3 bg-[#109387] hover:bg-[#0d7d72] text-white font-bold text-lg px-8 py-4 rounded-[6px] transition-all duration-300 group"
            >
              Besichtigung anfragen
              <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
            </Link>
            <a
              href="tel:+4987143033460"
              className="inline-flex items-center justify-center gap-3 bg-white/10 hover:bg-white/20 text-white font-bold text-lg px-8 py-4 rounded-[6px] transition-all duration-300"
            >
              0871 430 334 60
            </a>
          </div>
        </div>
      </section>
    </main>
  )
}
