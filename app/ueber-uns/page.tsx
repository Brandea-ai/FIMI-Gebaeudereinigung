'use client'

import { useState, useEffect, useRef } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { ArrowRight, CheckCircle, Users, MapPin, Phone, Cpu, BarChart3, Smartphone, Shield } from 'lucide-react'

// 8 Einsatzgebiete (Städte)
const einsatzgebiete = [
  'Landshut', 'München', 'Regensburg', 'Ingolstadt',
  'Freising', 'Erding', 'Straubing', 'Passau'
]

// Stats
const stats = [
  { zahl: '8+', label: 'Jahre', sublabel: 'Erfahrung' },
  { zahl: '120+', label: 'Zufriedene', sublabel: 'Kunden' },
  { zahl: '90+', label: 'Mitarbeiter', sublabel: 'im Team' },
  { zahl: '8', label: 'Standorte', sublabel: 'in Bayern' },
]

// Timeline Meilensteine
const meilensteine = [
  {
    jahr: '2016',
    titel: 'Der Anfang',
    beschreibung: 'Gründung als kleine GbR in Landshut. Spezialisiert auf Glas- und Fassadenreinigung. Zwei Gründer mit einer Vision: Gebäudereinigung anders machen.',
  },
  {
    jahr: '2018',
    titel: 'Erste Großkunden',
    beschreibung: 'Das Vertrauen wächst. Wir gewinnen erste namhafte Kunden in der Region und bauen unser Team kontinuierlich aus. Erweiterung auf Unterhaltsreinigung.',
  },
  {
    jahr: '2020',
    titel: 'Expansion',
    beschreibung: 'Trotz Pandemie: Wir wachsen. Neue Standorte in München und Regensburg. Das Team verdoppelt sich. Erste eigene Software-Lösungen für Qualitätskontrolle.',
  },
  {
    jahr: '2022',
    titel: 'Facility Management',
    beschreibung: 'Vom Reinigungsunternehmen zum Full-Service-Partner. Facility Management, Hausmeisterservice, Winterdienst. Alles aus einer Hand.',
  },
  {
    jahr: '2024',
    titel: 'Digitale Innovation',
    beschreibung: '90+ Mitarbeiter. 8 Standorte in Bayern. Eigenes Kunden-Dashboard und KI-gestützte Qualitätskontrolle. ISO-Zertifizierung in Vorbereitung (Ziel: 2026).',
  },
]

// Wofür wir stehen - mit Bildern
const werte = [
  {
    titel: 'Zuverlässigkeit',
    beschreibung: 'Was wir zusagen, halten wir. Keine Ausreden, keine Verzögerungen. Ihre Räume sind sauber wenn Sie es erwarten.',
    image: 'https://images.unsplash.com/photo-1521737711867-e3b97375f902?q=80&w=800&auto=format&fit=crop',
  },
  {
    titel: 'Menschlichkeit',
    beschreibung: 'Unsere Mitarbeiter sind keine Nummern. Faire Löhne, gute Arbeitsbedingungen und echte Wertschätzung sorgen für motivierte Teams.',
    image: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=800&auto=format&fit=crop',
  },
  {
    titel: 'Lösungsorientierung',
    beschreibung: 'Wir suchen keine Probleme, wir finden Lösungen. Für uns ist jede Herausforderung eine Chance, besser zu werden.',
    image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=800&auto=format&fit=crop',
  },
  {
    titel: 'Leidenschaft',
    beschreibung: 'Reinigung ist unser Handwerk. Wir lieben was wir tun und das sieht man an jedem Ergebnis.',
    image: 'https://images.unsplash.com/photo-1600880292089-90a7e086ee0c?q=80&w=800&auto=format&fit=crop',
  },
]

// Technologie & Innovation
const technologie = [
  {
    icon: Smartphone,
    titel: 'Kunden-Dashboard',
    beschreibung: 'Ihr persönliches Portal für Aufträge, Feedback und Kommunikation. Alles transparent und in Echtzeit.',
  },
  {
    icon: Cpu,
    titel: 'KI-Qualitätskontrolle',
    beschreibung: 'Wir nutzen künstliche Intelligenz zur Optimierung unserer Reinigungsprozesse und Qualitätssicherung.',
  },
  {
    icon: BarChart3,
    titel: 'Eigene Software',
    beschreibung: 'Selbst entwickelte Tools für Einsatzplanung, Zeiterfassung und Reporting. Keine Standard-Software von der Stange.',
  },
  {
    icon: Shield,
    titel: 'ISO in Vorbereitung',
    beschreibung: 'Zertifizierung nach ISO 9001 & 14001 in Arbeit. Geplanter Abschluss bis Ende 2026.',
  },
]

// Partner & Lieferanten
const partnerKategorien = [
  {
    id: 'maschinen',
    titel: 'Reinigungsmaschinen',
    partner: [
      { name: 'Kärcher', info: 'Weltmarktführer, dichtestes Servicenetz' },
      { name: 'Nilfisk', info: 'Professionelle Reinigungstechnik seit 1906' },
      { name: 'Hako', info: 'Großmaschinen & Aufsitz-Scheuersaugmaschinen' },
      { name: 'Tennant', info: 'US-Premium für Industrie & Logistik' },
      { name: 'Comac / Fimap', info: 'Italienische Qualität' },
    ],
  },
  {
    id: 'chemie',
    titel: 'Reinigungschemie',
    partner: [
      { name: 'Dreiturm GmbH', info: 'Unser Hauptlieferant für Reinigungsmittel' },
      { name: 'Kiehl', info: 'Traditionsmarke für Bodenpflege' },
      { name: 'Ecolab', info: 'Systemlösungen für Großkunden' },
    ],
  },
  {
    id: 'hygiene',
    titel: 'Hygienepapier & Einweg',
    partner: [
      { name: 'Tork (Essity)', info: 'Spendersysteme, Marktführer' },
      { name: 'Wepa', info: 'Deutscher Hersteller, Nachhaltigkeit' },
      { name: 'Fripa', info: 'Mittelstand, flexible Mengen' },
      { name: 'igefa', info: '1.000+ Produkte, Top Preis-Leistung' },
    ],
  },
  {
    id: 'arbeitsschutz',
    titel: 'Arbeitsschutz & Berufsbekleidung',
    partner: [
      { name: 'CWS', info: 'Mietservice für Berufsbekleidung' },
      { name: 'Mewa', info: 'Textilservice & Putztücher' },
      { name: 'Engelbert Strauss', info: 'Workwear, schnelle Lieferung' },
      { name: 'uvex', info: 'PSA Premium (Handschuhe, Brillen)' },
    ],
  },
  {
    id: 'garten',
    titel: 'Garten- & Außenpflege',
    partner: [
      { name: 'Stihl', info: 'Premium-Geräte für Garten und Pflege' },
    ],
  },
]

// Team
const teamKategorien = [
  {
    id: 'vertrieb',
    titel: 'Vertrieb',
    mitglieder: [
      { name: 'Max Mustermann', position: 'Vertriebsleiter' },
      { name: 'Sarah Schmidt', position: 'Key Account Manager' },
    ],
  },
  {
    id: 'buero',
    titel: 'Büro & Verwaltung',
    mitglieder: [
      { name: 'Lisa Weber', position: 'Office Management' },
      { name: 'Maria Huber', position: 'Buchhaltung' },
      { name: 'Julia Bauer', position: 'Personal & HR' },
    ],
  },
  {
    id: 'objektleiter',
    titel: 'Objektleitung',
    mitglieder: [
      { name: 'Thomas Maier', position: 'Objektleiter Region Ost' },
      { name: 'Andreas Fischer', position: 'Objektleiter Region West' },
    ],
  },
  {
    id: 'qualitaet',
    titel: 'Qualitätsmanagement',
    mitglieder: [
      { name: 'Michael Berger', position: 'Leiter Qualitätssicherung' },
    ],
  },
]

// Geschäftsführung
const geschaeftsfuehrung = [
  {
    name: 'Christian Müller',
    position: 'Geschäftsführer',
    bereich: 'Vertrieb & Strategie',
    zitat: 'Für uns gibt es keine halben Sachen. Entweder wir machen es richtig, oder wir lassen es.',
  },
  {
    name: 'Michael Wagner',
    position: 'Geschäftsführer',
    bereich: 'Operatives & Personal',
    zitat: 'Unsere Mitarbeiter sind das Herzstück von FIMI. Ihr Erfolg ist unser Erfolg.',
  },
]

export default function UeberUnsPage() {
  const [activePartnerTab, setActivePartnerTab] = useState('maschinen')
  const [visibleMeilensteine, setVisibleMeilensteine] = useState<Set<number>>(new Set())
  const meilensteinRefs = useRef<(HTMLDivElement | null)[]>([])

  // Intersection Observer für Timeline Animation
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
        { threshold: 0.3 }
      )
      observer.observe(ref)
      return observer
    })

    return () => {
      observers.forEach((observer) => observer?.disconnect())
    }
  }, [])

  return (
    <main className="min-h-screen bg-white">

      {/* Hero Section - Premium */}
      <section className="relative min-h-[90vh] flex items-center">
        {/* Background */}
        <div className="absolute inset-0">
          <Image
            src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?q=80&w=3840&auto=format&fit=crop"
            alt="FIMI Team"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#012956]/95 via-[#012956]/80 to-[#012956]/50" />
        </div>

        {/* Content */}
        <div className="relative z-10 w-full max-w-[1800px] mx-auto px-6 lg:px-12 xl:px-20 py-32">
          <div className="max-w-3xl">
            {/* Tagline */}
            <p className="text-[#109387] font-bold text-sm uppercase tracking-[0.2em] mb-4">
              Über FIMI Gebäudereinigung
            </p>

            {/* Headline */}
            <h1 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-white leading-[1.05] mb-6">
              Wir finden Lösungen.
              <span className="block text-[#109387]">Immer.</span>
            </h1>

            {/* Subline */}
            <p className="text-xl md:text-2xl font-bold text-white/90 mb-4 leading-snug">
              Denn keine Lösung zu haben ist für uns keine Option.
            </p>

            <p className="text-lg text-white/70 font-semibold leading-relaxed mb-8 max-w-2xl">
              Seit 2016 setzen wir auf moderne Ansätze, effiziente Prozesse und echte Partnerschaften.
              Von der kleinen GbR zum Full-Service-Partner für Gebäudereinigung in ganz Bayern.
            </p>

            {/* Trust Points */}
            <div className="flex flex-wrap gap-6 mb-10">
              {[
                '8+ Jahre Erfahrung',
                '120+ zufriedene Kunden',
                '90+ Mitarbeiter',
              ].map((punkt) => (
                <div key={punkt} className="flex items-center gap-2">
                  <CheckCircle size={20} className="text-[#109387]" />
                  <span className="text-white font-semibold">{punkt}</span>
                </div>
              ))}
            </div>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="#contact-form"
                className="inline-flex items-center justify-center gap-3 bg-[#109387] hover:bg-[#0d7d72] text-white font-bold text-lg px-8 py-4 rounded-[6px] transition-all duration-300 group shadow-lg"
              >
                Kostenfreie Besichtigung
                <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
              </a>
              <a
                href="tel:+4917472254773"
                className="inline-flex items-center justify-center gap-3 bg-white hover:bg-gray-100 text-[#012956] font-bold text-lg px-8 py-4 rounded-[6px] transition-all duration-300"
              >
                <Phone size={20} />
                0174 722 54 773
              </a>
            </div>
          </div>
        </div>

        {/* Einsatzgebiete Badge */}
        <div className="absolute bottom-8 right-8 lg:bottom-12 lg:right-12 hidden lg:block">
          <div className="bg-white rounded-[6px] p-5 shadow-2xl">
            <div className="flex items-center gap-4">
              <MapPin size={28} className="text-[#109387]" />
              <div>
                <p className="font-bold text-[#012956] text-lg">8 Einsatzgebiete</p>
                <p className="text-gray-600 text-sm">{einsatzgebiete.join(' · ')}</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Bar */}
      <section className="bg-[#012956] py-12 lg:py-16">
        <div className="w-full max-w-[1800px] mx-auto px-6 lg:px-12 xl:px-20">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
            {stats.map((stat) => (
              <div key={stat.label} className="text-center">
                <div className="text-4xl lg:text-5xl xl:text-6xl font-bold text-[#109387] mb-2">
                  {stat.zahl}
                </div>
                <div className="text-white font-bold text-lg">{stat.label}</div>
                <div className="text-white/60 font-semibold">{stat.sublabel}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Wofür wir stehen - Zick-Zack Layout mit Bildern */}
      <section className="py-20 lg:py-28 bg-white">
        <div className="w-full max-w-[1800px] mx-auto px-6 lg:px-12 xl:px-20">
          {/* Header - Left aligned */}
          <div className="mb-16 lg:mb-20">
            <p className="text-sm text-gray-500 font-semibold uppercase tracking-wide mb-3">
              Unsere Werte
            </p>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#109387] leading-[1.1] mb-6">
              Wofür wir stehen
            </h2>
            <p className="text-lg text-gray-700 font-semibold leading-relaxed max-w-2xl">
              Moderne Ansätze, effiziente Wege und echte Partnerschaften.
              Das sind keine leeren Worte – das leben wir jeden Tag.
            </p>
          </div>

          {/* Werte Cards - Zick-Zack */}
          <div className="space-y-12 lg:space-y-20">
            {werte.map((wert, index) => (
              <div
                key={wert.titel}
                className={`grid lg:grid-cols-2 gap-8 lg:gap-16 items-center ${
                  index % 2 === 1 ? 'lg:grid-flow-dense' : ''
                }`}
              >
                {/* Image */}
                <div className={`relative h-72 md:h-96 lg:h-[450px] rounded-[6px] overflow-hidden ${
                  index % 2 === 1 ? 'lg:col-start-2' : ''
                }`}>
                  <Image
                    src={wert.image}
                    alt={wert.titel}
                    fill
                    className="object-cover"
                  />
                </div>

                {/* Content - Left aligned */}
                <div className={index % 2 === 1 ? 'lg:col-start-1 lg:row-start-1' : ''}>
                  <h3 className="text-2xl lg:text-3xl font-bold text-[#012956] mb-4">
                    {wert.titel}
                  </h3>
                  <p className="text-lg text-gray-700 font-semibold leading-relaxed">
                    {wert.beschreibung}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline Section - Mit Scroll-Animationen */}
      <section className="py-20 lg:py-28 bg-[#f8f9fa]">
        <div className="w-full max-w-[1800px] mx-auto px-6 lg:px-12 xl:px-20">
          {/* Header */}
          <div className="mb-16 lg:mb-20">
            <p className="text-sm text-gray-500 font-semibold uppercase tracking-wide mb-3">
              Unsere Geschichte
            </p>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#109387] leading-[1.1] mb-6">
              Von der GbR zum Full-Service-Partner
            </h2>
            <p className="text-lg text-gray-700 font-semibold leading-relaxed max-w-2xl">
              8 Jahre kontinuierliches Wachstum. Vom Zwei-Mann-Betrieb zum führenden
              Reinigungsunternehmen in Niederbayern und Oberbayern.
            </p>
          </div>

          {/* Timeline */}
          <div className="relative">
            {/* Vertical Line */}
            <div className="absolute left-4 lg:left-1/2 top-0 bottom-0 w-0.5 bg-[#109387]/30 transform lg:-translate-x-1/2" />

            <div className="space-y-12 lg:space-y-16">
              {meilensteine.map((meilenstein, index) => (
                <div
                  key={meilenstein.jahr}
                  ref={(el) => { meilensteinRefs.current[index] = el }}
                  className={`relative grid lg:grid-cols-2 gap-6 lg:gap-16 transition-all duration-700 ${
                    visibleMeilensteine.has(index)
                      ? 'opacity-100 translate-y-0'
                      : 'opacity-0 translate-y-8'
                  }`}
                >
                  {/* Jahr Badge */}
                  <div className="absolute left-0 lg:left-1/2 transform lg:-translate-x-1/2 w-8 h-8 lg:w-12 lg:h-12 bg-[#109387] rounded-full flex items-center justify-center z-10">
                    <span className="text-white font-bold text-xs lg:text-sm">{meilenstein.jahr}</span>
                  </div>

                  {/* Content - Alternating sides */}
                  <div className={`pl-14 lg:pl-0 ${
                    index % 2 === 0
                      ? 'lg:pr-16 lg:text-right'
                      : 'lg:col-start-2 lg:pl-16'
                  }`}>
                    <h3 className="text-xl lg:text-2xl font-bold text-[#012956] mb-2">
                      {meilenstein.titel}
                    </h3>
                    <p className="text-gray-700 font-semibold leading-relaxed">
                      {meilenstein.beschreibung}
                    </p>
                  </div>

                  {/* Empty space for alternating layout */}
                  {index % 2 === 0 && <div className="hidden lg:block" />}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Technologie & Innovation */}
      <section className="py-20 lg:py-28 bg-[#012956]">
        <div className="w-full max-w-[1800px] mx-auto px-6 lg:px-12 xl:px-20">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            {/* Left: Content */}
            <div>
              <p className="text-[#109387] font-bold text-sm uppercase tracking-[0.2em] mb-3">
                Innovation
              </p>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white leading-[1.1] mb-6">
                Moderne Technologie für bessere Ergebnisse
              </h2>
              <p className="text-lg text-white/70 font-semibold leading-relaxed mb-8">
                Wir setzen nicht auf veraltete Methoden. Eigene Software-Lösungen,
                KI-gestützte Prozesse und ein Kunden-Dashboard, das Transparenz schafft.
              </p>

              <div className="grid sm:grid-cols-2 gap-6">
                {technologie.map((tech) => (
                  <div key={tech.titel} className="bg-white/5 rounded-[6px] p-6">
                    <tech.icon size={28} className="text-[#109387] mb-3" strokeWidth={1.5} />
                    <h3 className="text-white font-bold text-lg mb-2">{tech.titel}</h3>
                    <p className="text-white/70 font-semibold text-sm leading-relaxed">
                      {tech.beschreibung}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Right: Image */}
            <div className="relative h-80 lg:h-[500px] rounded-[6px] overflow-hidden">
              <Image
                src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=1200&auto=format&fit=crop"
                alt="FIMI Technologie Dashboard"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Partner & Lieferanten - Mit Tabs */}
      <section className="py-20 lg:py-28 bg-white">
        <div className="w-full max-w-[1800px] mx-auto px-6 lg:px-12 xl:px-20">
          <div className="grid lg:grid-cols-[400px_1fr] xl:grid-cols-[450px_1fr] gap-12 lg:gap-20">
            {/* Left: Sticky Sidebar */}
            <div className="lg:sticky lg:top-32 lg:self-start">
              <p className="text-sm text-gray-500 font-semibold uppercase tracking-wide mb-3">
                Unsere Partner
              </p>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#109387] leading-[1.1] mb-6">
                Nur die besten Marken
              </h2>
              <p className="text-lg text-gray-700 font-semibold leading-relaxed mb-8">
                Wir arbeiten ausschließlich mit renommierten Herstellern und Lieferanten.
                Das garantiert Ihnen höchste Qualität bei jeder Reinigung.
              </p>

              {/* Tab Buttons */}
              <div className="flex flex-wrap gap-2">
                {partnerKategorien.map((kategorie) => (
                  <button
                    key={kategorie.id}
                    onClick={() => setActivePartnerTab(kategorie.id)}
                    className={`px-4 py-2 rounded-[6px] font-bold text-sm transition-all duration-300 ${
                      activePartnerTab === kategorie.id
                        ? 'bg-[#012956] text-white'
                        : 'bg-[#f8f9fa] text-[#012956] hover:bg-gray-200'
                    }`}
                  >
                    {kategorie.titel}
                  </button>
                ))}
              </div>
            </div>

            {/* Right: Partner Content */}
            <div className="bg-[#f8f9fa] rounded-[6px] p-8 lg:p-12">
              {partnerKategorien.map((kategorie) => (
                <div
                  key={kategorie.id}
                  className={`transition-all duration-300 ${
                    activePartnerTab === kategorie.id ? 'block' : 'hidden'
                  }`}
                >
                  <h3 className="text-2xl font-bold text-[#012956] mb-6">
                    {kategorie.titel}
                  </h3>
                  <div className="space-y-4">
                    {kategorie.partner.map((partner) => (
                      <div
                        key={partner.name}
                        className="bg-white rounded-[6px] p-5 flex items-center gap-4"
                      >
                        <div className="w-3 h-3 bg-[#109387] rounded-full flex-shrink-0" />
                        <div>
                          <p className="font-bold text-[#012956]">{partner.name}</p>
                          <p className="text-gray-600 font-semibold text-sm">{partner.info}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 lg:py-28 bg-[#f8f9fa]">
        <div className="w-full max-w-[1800px] mx-auto px-6 lg:px-12 xl:px-20">
          {/* Header */}
          <div className="mb-16 lg:mb-20">
            <p className="text-sm text-gray-500 font-semibold uppercase tracking-wide mb-3">
              Unser Team
            </p>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#109387] leading-[1.1] mb-6">
              Die Menschen hinter FIMI
            </h2>
            <p className="text-lg text-gray-700 font-semibold leading-relaxed max-w-2xl">
              90+ Mitarbeiter, davon über 70 Reinigungskräfte im täglichen Einsatz.
              Hier lernen Sie das Team kennen, das alles koordiniert.
            </p>
          </div>

          {/* Team Grid by Category */}
          <div className="space-y-12">
            {teamKategorien.map((kategorie) => (
              <div key={kategorie.id}>
                <h3 className="text-xl font-bold text-[#012956] mb-6">{kategorie.titel}</h3>
                <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                  {kategorie.mitglieder.map((mitglied) => (
                    <div
                      key={mitglied.name}
                      className="bg-white rounded-[6px] overflow-hidden group"
                    >
                      <div className="relative h-48 bg-gray-200">
                        <Image
                          src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=400&auto=format&fit=crop"
                          alt={mitglied.name}
                          fill
                          className="object-cover"
                        />
                      </div>
                      <div className="p-5">
                        <p className="font-bold text-[#012956]">{mitglied.name}</p>
                        <p className="text-gray-600 font-semibold text-sm">{mitglied.position}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* Reinigungskräfte Counter */}
          <div className="mt-16 bg-[#012956] rounded-[6px] p-8 lg:p-12">
            <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6">
              <div>
                <div className="flex items-center gap-4 mb-3">
                  <Users size={32} className="text-[#109387]" strokeWidth={1.5} />
                  <span className="text-4xl lg:text-5xl font-bold text-[#109387]">70+</span>
                </div>
                <h3 className="text-xl lg:text-2xl font-bold text-white mb-2">
                  Reinigungskräfte im täglichen Einsatz
                </h3>
                <p className="text-white/70 font-semibold">
                  Motivierte Teams, die Ihre Räume jeden Tag zum Strahlen bringen.
                </p>
              </div>
              <Link
                href="/karriere"
                className="inline-flex items-center gap-3 bg-[#109387] hover:bg-[#0d7d72] text-white font-bold text-lg px-8 py-4 rounded-[6px] transition-all duration-300 group"
              >
                Karriere bei FIMI
                <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Geschäftsführung */}
      <section className="py-20 lg:py-28 bg-white">
        <div className="w-full max-w-[1800px] mx-auto px-6 lg:px-12 xl:px-20">
          {/* Header */}
          <div className="mb-16 lg:mb-20">
            <p className="text-sm text-gray-500 font-semibold uppercase tracking-wide mb-3">
              Geschäftsführung
            </p>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#109387] leading-[1.1]">
              Die Gründer
            </h2>
          </div>

          {/* GF Cards */}
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12">
            {geschaeftsfuehrung.map((gf) => (
              <div
                key={gf.name}
                className="grid md:grid-cols-[200px_1fr] gap-6 bg-[#f8f9fa] rounded-[6px] p-6 lg:p-8"
              >
                {/* Photo */}
                <div className="relative h-48 md:h-full rounded-[6px] overflow-hidden">
                  <Image
                    src="https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=400&auto=format&fit=crop"
                    alt={gf.name}
                    fill
                    className="object-cover"
                  />
                </div>

                {/* Content */}
                <div className="flex flex-col justify-center">
                  <p className="text-[#109387] font-bold text-sm uppercase tracking-wide mb-1">
                    {gf.bereich}
                  </p>
                  <h3 className="text-xl lg:text-2xl font-bold text-[#012956] mb-1">
                    {gf.name}
                  </h3>
                  <p className="text-gray-600 font-semibold mb-4">{gf.position}</p>
                  <blockquote className="text-gray-700 font-semibold italic leading-relaxed border-l-4 border-[#109387] pl-4">
                    „{gf.zitat}"
                  </blockquote>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Interne Verlinkungen */}
      <section className="py-16 lg:py-20 bg-[#f8f9fa]">
        <div className="w-full max-w-[1800px] mx-auto px-6 lg:px-12 xl:px-20">
          <div className="grid md:grid-cols-3 gap-6">
            <Link
              href="/leistungen"
              className="group bg-white rounded-[6px] p-8 hover:shadow-xl transition-all duration-300"
            >
              <p className="text-[#109387] font-bold text-sm uppercase tracking-wide mb-2">
                Entdecken Sie
              </p>
              <h3 className="text-xl lg:text-2xl font-bold text-[#012956] mb-3 group-hover:text-[#109387] transition-colors">
                Alle Leistungen
              </h3>
              <p className="text-gray-600 font-semibold mb-4">
                18 professionelle Reinigungsservices für jeden Bedarf.
              </p>
              <div className="inline-flex items-center gap-2 text-[#109387] font-bold">
                Mehr erfahren
                <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
              </div>
            </Link>

            <Link
              href="/branchen"
              className="group bg-white rounded-[6px] p-8 hover:shadow-xl transition-all duration-300"
            >
              <p className="text-[#109387] font-bold text-sm uppercase tracking-wide mb-2">
                Spezialisiert auf
              </p>
              <h3 className="text-xl lg:text-2xl font-bold text-[#012956] mb-3 group-hover:text-[#109387] transition-colors">
                Ihre Branche
              </h3>
              <p className="text-gray-600 font-semibold mb-4">
                Branchenspezifische Reinigungslösungen für Ihren Betrieb.
              </p>
              <div className="inline-flex items-center gap-2 text-[#109387] font-bold">
                Branchen ansehen
                <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
              </div>
            </Link>

            <Link
              href="/neuigkeiten"
              className="group bg-white rounded-[6px] p-8 hover:shadow-xl transition-all duration-300"
            >
              <p className="text-[#109387] font-bold text-sm uppercase tracking-wide mb-2">
                Aktuelles von
              </p>
              <h3 className="text-xl lg:text-2xl font-bold text-[#012956] mb-3 group-hover:text-[#109387] transition-colors">
                FIMI News
              </h3>
              <p className="text-gray-600 font-semibold mb-4">
                Neuigkeiten, Tipps und Einblicke aus der Gebäudereinigung.
              </p>
              <div className="inline-flex items-center gap-2 text-[#109387] font-bold">
                News lesen
                <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
              </div>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 lg:py-28 bg-[#012956]">
        <div className="w-full max-w-[1800px] mx-auto px-6 lg:px-12 xl:px-20">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            {/* Left: Content */}
            <div>
              <p className="text-[#109387] font-bold text-sm uppercase tracking-[0.2em] mb-4">
                Jetzt starten
              </p>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white leading-[1.1] mb-6">
                Überzeugen Sie sich selbst
              </h2>
              <p className="text-lg text-white/70 font-semibold leading-relaxed mb-8">
                Vereinbaren Sie eine kostenfreie und unverbindliche Besichtigung.
                Wir schauen uns Ihre Räume an und erstellen Ihnen ein transparentes Angebot.
              </p>

              <div className="flex flex-col sm:flex-row gap-4">
                <a
                  href="#contact-form"
                  className="inline-flex items-center justify-center gap-3 bg-[#109387] hover:bg-[#0d7d72] text-white font-bold text-lg px-8 py-4 rounded-[6px] transition-all duration-300 group"
                >
                  Kostenfreie Besichtigung
                  <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
                </a>
                <a
                  href="tel:+4917472254773"
                  className="inline-flex items-center justify-center gap-3 bg-white/10 hover:bg-white/20 text-white font-bold text-lg px-8 py-4 rounded-[6px] transition-all duration-300"
                >
                  <Phone size={20} />
                  0174 722 54 773
                </a>
              </div>
            </div>

            {/* Right: Einsatzgebiete */}
            <div className="bg-white/5 rounded-[6px] p-8 lg:p-10">
              <p className="text-[#109387] font-bold text-sm uppercase tracking-wide mb-4">
                Wir sind vor Ort in
              </p>
              <div className="grid grid-cols-2 gap-3">
                {einsatzgebiete.map((stadt) => (
                  <div key={stadt} className="flex items-center gap-2">
                    <MapPin size={16} className="text-[#109387]" />
                    <span className="text-white font-semibold">{stadt}</span>
                  </div>
                ))}
              </div>
              <p className="text-white/60 font-semibold text-sm mt-6">
                Und überall in Niederbayern, Oberbayern und der Oberpfalz.
              </p>
            </div>
          </div>
        </div>
      </section>

    </main>
  )
}
