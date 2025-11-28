'use client'

import { useState, useEffect, useRef } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { ArrowRight, CheckCircle, Users, MapPin, Phone, Cpu, BarChart3, Smartphone, Shield, Briefcase } from 'lucide-react'

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

// Timeline Meilensteine - mit Bildern und mehr Details
const meilensteine = [
  {
    jahr: '2016',
    titel: 'Der Anfang',
    beschreibung: 'Gründung als kleine GbR in Landshut. Spezialisiert auf Glas- und Fassadenreinigung. Zwei Gründer mit einer Vision: Gebäudereinigung anders machen – persönlicher, zuverlässiger, moderner.',
    details: 'Mit nur einem Transporter und der Überzeugung, dass Qualität und Service den Unterschied machen, starteten wir unsere Reise. Jeder Kunde wurde persönlich betreut, jeder Auftrag mit vollem Einsatz erledigt.',
    image: 'https://images.unsplash.com/photo-1504307651254-35680f356dfd?q=80&w=600&auto=format&fit=crop',
  },
  {
    jahr: '2018',
    titel: 'Erste Großkunden',
    beschreibung: 'Das Vertrauen wächst. Wir gewinnen erste namhafte Kunden in der Region und bauen unser Team kontinuierlich aus. Erweiterung auf Unterhaltsreinigung und Büroreinigung.',
    details: 'Mundpropaganda war unser bestes Marketing. Zufriedene Kunden empfahlen uns weiter, und plötzlich klopften auch größere Unternehmen an. Zeit für das erste feste Team.',
    image: 'https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=600&auto=format&fit=crop',
  },
  {
    jahr: '2020',
    titel: 'Expansion trotz Krise',
    beschreibung: 'Während andere pausieren, wachsen wir. Neue Standorte in München und Regensburg. Das Team verdoppelt sich. Erste eigene Software-Lösungen für Qualitätskontrolle.',
    details: 'Die Pandemie brachte neue Herausforderungen – und neue Chancen. Hygiene wurde wichtiger denn je. Wir investierten in Schulungen, Ausrüstung und digitale Prozesse.',
    image: 'https://images.unsplash.com/photo-1600880292203-757bb62b4baf?q=80&w=600&auto=format&fit=crop',
  },
  {
    jahr: '2022',
    titel: 'Full-Service Partner',
    beschreibung: 'Vom Reinigungsunternehmen zum umfassenden Facility-Partner. Facility Management, Hausmeisterservice, Winterdienst, Außenanlagenpflege – alles aus einer Hand.',
    details: 'Unsere Kunden fragten immer öfter: „Könnt ihr nicht auch...?" Also erweiterten wir unser Portfolio. Ein Ansprechpartner für alle Gebäudedienstleistungen.',
    image: 'https://images.unsplash.com/photo-1581578731548-c64695cc6952?q=80&w=600&auto=format&fit=crop',
  },
  {
    jahr: '2024',
    titel: 'Digitale Innovation',
    beschreibung: '90+ Mitarbeiter. 8 Standorte in Bayern. Eigenes Kunden-Dashboard, KI-gestützte Qualitätskontrolle und ISO-Zertifizierung in Vorbereitung (Ziel: Ende 2026).',
    details: 'Technologie macht uns besser. Unser selbst entwickeltes Dashboard gibt Kunden Echtzeit-Einblicke. KI hilft uns, Prozesse zu optimieren. Die Zukunft der Gebäudereinigung beginnt jetzt.',
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=600&auto=format&fit=crop',
  },
]

// Wofür wir stehen - mit ausführlichen Texten
const werte = [
  {
    titel: 'Zuverlässigkeit',
    kurz: 'Was wir zusagen, halten wir.',
    beschreibung: 'In der Gebäudereinigung zählt jeder Tag. Wenn wir sagen, dass Ihre Räume um 7 Uhr morgens sauber sind, dann sind sie das. Keine Ausreden, keine Verzögerungen, keine bösen Überraschungen. Unsere Kunden können sich auf uns verlassen – und das seit über 8 Jahren.',
    details: 'Wir wissen: Ihr Geschäft hängt davon ab, dass alles funktioniert. Deshalb haben wir Backup-Systeme, Vertretungsregelungen und Notfallpläne. Falls doch einmal etwas schiefgeht, erfahren Sie es als Erster – nicht als Letzter.',
    image: 'https://images.unsplash.com/photo-1521737711867-e3b97375f902?q=80&w=800&auto=format&fit=crop',
  },
  {
    titel: 'Menschlichkeit',
    kurz: 'Unsere Mitarbeiter sind keine Nummern.',
    beschreibung: 'Die Reinigungsbranche hat einen Ruf: Niedriglöhne, hohe Fluktuation, wenig Wertschätzung. Wir machen es anders. Faire Bezahlung über Tarif, geregelte Arbeitszeiten, echte Entwicklungsmöglichkeiten. Das Ergebnis: Motivierte Teams, die seit Jahren bei uns sind.',
    details: 'Zufriedene Mitarbeiter bedeuten zufriedene Kunden. Wer gerne zur Arbeit kommt, macht bessere Arbeit. So einfach ist das. Deshalb investieren wir in Schulungen, moderne Ausrüstung und ein respektvolles Miteinander.',
    image: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=800&auto=format&fit=crop',
  },
  {
    titel: 'Lösungsorientierung',
    kurz: 'Wir finden Wege, keine Ausreden.',
    beschreibung: 'Jedes Gebäude ist anders. Jeder Kunde hat spezielle Anforderungen. Standardlösungen von der Stange? Nicht mit uns. Wir hören zu, analysieren und entwickeln individuelle Konzepte. Denn Reinigung ist kein Produkt – es ist eine Dienstleistung.',
    details: 'Sie haben ein Problem, das noch keiner lösen konnte? Fordern Sie uns heraus. Ob schwierige Böden, empfindliche Oberflächen oder komplexe Zeitpläne – wir finden einen Weg. Denn keine Lösung zu haben ist für uns schlicht keine Option.',
    image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=800&auto=format&fit=crop',
  },
  {
    titel: 'Leidenschaft',
    kurz: 'Reinigung ist unser Handwerk.',
    beschreibung: 'Man kann einen Job machen – oder man kann ihn lieben. Wir haben uns bewusst für die Gebäudereinigung entschieden. Nicht weil es einfach ist, sondern weil es uns erfüllt. Saubere Räume schaffen Wohlbefinden. Das motiviert uns jeden Tag aufs Neue.',
    details: 'Diese Leidenschaft sieht man an den Details: An der perfekten Kante, am glänzenden Boden, am frischen Duft beim Betreten. Wir sind stolz auf das, was wir tun – und das spüren auch unsere Kunden.',
    image: 'https://images.unsplash.com/photo-1600880292089-90a7e086ee0c?q=80&w=800&auto=format&fit=crop',
  },
]

// Technologie & Innovation - string-based icon mapping to avoid SSG issues
const technologie = [
  {
    iconId: 'smartphone' as const,
    titel: 'Kunden-Dashboard',
    beschreibung: 'Ihr persönliches Portal für Aufträge, Feedback und Kommunikation. Alles transparent und in Echtzeit.',
  },
  {
    iconId: 'cpu' as const,
    titel: 'KI-Qualitätskontrolle',
    beschreibung: 'Wir nutzen künstliche Intelligenz zur Optimierung unserer Reinigungsprozesse und Qualitätssicherung.',
  },
  {
    iconId: 'barchart3' as const,
    titel: 'Eigene Software',
    beschreibung: 'Selbst entwickelte Tools für Einsatzplanung, Zeiterfassung und Reporting. Keine Standard-Software von der Stange.',
  },
  {
    iconId: 'shield' as const,
    titel: 'ISO in Vorbereitung',
    beschreibung: 'Zertifizierung nach ISO 9001 & 14001 in Arbeit. Geplanter Abschluss bis Ende 2026.',
  },
]

// Icon render helper for technologie
function TechIcon({ iconId }: { iconId: 'smartphone' | 'cpu' | 'barchart3' | 'shield' }) {
  const iconProps = { size: 28, className: "text-[#109387] mb-3", strokeWidth: 1.5 }
  switch (iconId) {
    case 'smartphone': return <Smartphone {...iconProps} />
    case 'cpu': return <Cpu {...iconProps} />
    case 'barchart3': return <BarChart3 {...iconProps} />
    case 'shield': return <Shield {...iconProps} />
    default: return null
  }
}

// Alle Partner als Liste für Slider
const allePartner = [
  { name: 'Kärcher', kategorie: 'Maschinen' },
  { name: 'Nilfisk', kategorie: 'Maschinen' },
  { name: 'Hako', kategorie: 'Maschinen' },
  { name: 'Tennant', kategorie: 'Maschinen' },
  { name: 'Comac', kategorie: 'Maschinen' },
  { name: 'Dreiturm', kategorie: 'Chemie' },
  { name: 'Kiehl', kategorie: 'Chemie' },
  { name: 'Ecolab', kategorie: 'Chemie' },
  { name: 'Tork', kategorie: 'Hygiene' },
  { name: 'Wepa', kategorie: 'Hygiene' },
  { name: 'igefa', kategorie: 'Hygiene' },
  { name: 'CWS', kategorie: 'Arbeitsschutz' },
  { name: 'Mewa', kategorie: 'Arbeitsschutz' },
  { name: 'Engelbert Strauss', kategorie: 'Arbeitsschutz' },
  { name: 'uvex', kategorie: 'Arbeitsschutz' },
  { name: 'Stihl', kategorie: 'Garten' },
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
    bio: 'Seit der Gründung 2016 verantwortet Christian den Vertrieb und die strategische Ausrichtung von FIMI. Sein Fokus: Langfristige Partnerschaften statt kurzfristiger Gewinne.',
  },
  {
    name: 'Michael Wagner',
    position: 'Geschäftsführer',
    bereich: 'Operatives & Personal',
    zitat: 'Unsere Mitarbeiter sind das Herzstück von FIMI. Ihr Erfolg ist unser Erfolg.',
    bio: 'Michael kümmert sich um das operative Geschäft und die über 90 Mitarbeiter. Sein Credo: Nur wer seine Leute gut behandelt, bekommt auch gute Arbeit.',
  },
]

export default function UeberUnsPage() {
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
        { threshold: 0.2 }
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

      {/* Hero Section - Premium mit hervorgehobenem Slogan */}
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
          <div className="absolute inset-0 bg-gradient-to-r from-[#012956]/95 via-[#012956]/85 to-[#012956]/60" />
        </div>

        {/* Content */}
        <div className="relative z-10 w-full max-w-[1800px] mx-auto px-6 lg:px-12 xl:px-20 py-32">
          <div className="max-w-4xl">
            {/* Tagline */}
            <p className="text-[#109387] font-bold text-sm uppercase tracking-[0.2em] mb-6">
              Über FIMI Gebäudereinigung
            </p>

            {/* Slogan - Hervorgehoben als große Quote */}
            <div className="relative mb-8">
              <div className="absolute -left-4 top-0 bottom-0 w-1 bg-[#109387]" />
              <h1 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-white leading-[1.05] pl-6">
                „Keine Lösung zu haben
                <span className="block text-[#109387]">ist keine Option."</span>
              </h1>
            </div>

            {/* SEO-optimierter Beschreibungstext */}
            <div className="space-y-4 mb-10 max-w-3xl">
              <p className="text-xl md:text-2xl font-bold text-white/90 leading-snug">
                Seit 2016 sind wir Ihr Partner für professionelle Gebäudereinigung in Bayern.
              </p>
              <p className="text-lg text-white/70 font-semibold leading-relaxed">
                Von der kleinen GbR mit Fokus auf Glas- und Fassadenreinigung zum Full-Service-Partner für über 120 Unternehmen in Landshut, München, Regensburg und ganz Bayern. Wir setzen auf moderne Technologie, faire Arbeitsbedingungen und echte Partnerschaften – denn Gebäudereinigung ist Vertrauenssache.
              </p>
              <p className="text-lg text-white/70 font-semibold leading-relaxed">
                Unser 90-köpfiges Team betreut Bürogebäude, Produktionshallen, Arztpraxen und öffentliche Einrichtungen. Mit eigenem Kunden-Dashboard, KI-gestützter Qualitätskontrolle und ISO-Zertifizierung in Vorbereitung setzen wir neue Standards in der Branche.
              </p>
            </div>

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

      {/* Wofür wir stehen - Ausführliche Texte */}
      <section className="py-20 lg:py-28 bg-white">
        <div className="w-full max-w-[1800px] mx-auto px-6 lg:px-12 xl:px-20">
          {/* Header */}
          <div className="mb-16 lg:mb-20">
            <p className="text-sm text-gray-500 font-semibold uppercase tracking-wide mb-3">
              Unsere Werte
            </p>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#109387] leading-[1.1] mb-6">
              Wofür wir stehen
            </h2>
            <p className="text-lg text-gray-700 font-semibold leading-relaxed max-w-3xl">
              Moderne Ansätze, effiziente Wege und echte Partnerschaften. Das sind keine Marketing-Floskeln –
              das ist unsere DNA. Vier Werte, die jeden Tag bei FIMI gelebt werden.
            </p>
          </div>

          {/* Werte Cards - Zick-Zack mit mehr Text */}
          <div className="space-y-16 lg:space-y-28">
            {werte.map((wert, index) => (
              <div
                key={wert.titel}
                className={`grid lg:grid-cols-2 gap-8 lg:gap-16 items-center ${
                  index % 2 === 1 ? 'lg:grid-flow-dense' : ''
                }`}
              >
                {/* Image */}
                <div className={`relative h-80 md:h-[450px] lg:h-[500px] rounded-[6px] overflow-hidden ${
                  index % 2 === 1 ? 'lg:col-start-2' : ''
                }`}>
                  <Image
                    src={wert.image}
                    alt={wert.titel}
                    fill
                    className="object-cover"
                  />
                </div>

                {/* Content - Ausführlich */}
                <div className={`${index % 2 === 1 ? 'lg:col-start-1 lg:row-start-1' : ''}`}>
                  <p className="text-[#109387] font-bold text-sm uppercase tracking-wide mb-2">
                    Unser Wert #{index + 1}
                  </p>
                  <h3 className="text-2xl lg:text-4xl font-bold text-[#012956] mb-3">
                    {wert.titel}
                  </h3>
                  <p className="text-xl text-[#109387] font-bold mb-4">
                    {wert.kurz}
                  </p>
                  <p className="text-lg text-gray-700 font-semibold leading-relaxed mb-4">
                    {wert.beschreibung}
                  </p>
                  <p className="text-gray-600 font-semibold leading-relaxed">
                    {wert.details}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline Section - Mit Bildern und 6px Ecken */}
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
            <p className="text-lg text-gray-700 font-semibold leading-relaxed max-w-3xl">
              8 Jahre kontinuierliches Wachstum, geprägt von Mut, harter Arbeit und dem unbedingten Willen,
              die beste Gebäudereinigung in Bayern zu werden.
            </p>
          </div>

          {/* Timeline mit Cards */}
          <div className="space-y-8 lg:space-y-12">
            {meilensteine.map((meilenstein, index) => (
              <div
                key={meilenstein.jahr}
                ref={(el) => { meilensteinRefs.current[index] = el }}
                className={`transition-all duration-700 ${
                  visibleMeilensteine.has(index)
                    ? 'opacity-100 translate-y-0'
                    : 'opacity-0 translate-y-12'
                }`}
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                <div className={`grid lg:grid-cols-[1fr_2fr] gap-6 lg:gap-10 bg-white rounded-[6px] overflow-hidden shadow-lg ${
                  index % 2 === 1 ? 'lg:grid-flow-dense' : ''
                }`}>
                  {/* Image */}
                  <div className={`relative h-64 lg:h-auto lg:min-h-[300px] ${
                    index % 2 === 1 ? 'lg:col-start-2' : ''
                  }`}>
                    <Image
                      src={meilenstein.image}
                      alt={meilenstein.titel}
                      fill
                      className="object-cover"
                    />
                    {/* Jahr Badge - 6px rounded statt circle */}
                    <div className="absolute top-4 left-4 bg-[#109387] rounded-[6px] px-4 py-2">
                      <span className="text-white font-bold text-lg">{meilenstein.jahr}</span>
                    </div>
                  </div>

                  {/* Content */}
                  <div className={`p-6 lg:p-10 flex flex-col justify-center ${
                    index % 2 === 1 ? 'lg:col-start-1 lg:row-start-1' : ''
                  }`}>
                    <h3 className="text-xl lg:text-2xl font-bold text-[#012956] mb-3">
                      {meilenstein.titel}
                    </h3>
                    <p className="text-lg text-gray-700 font-semibold leading-relaxed mb-4">
                      {meilenstein.beschreibung}
                    </p>
                    <p className="text-gray-600 font-semibold leading-relaxed">
                      {meilenstein.details}
                    </p>
                  </div>
                </div>
              </div>
            ))}
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
                Während andere noch mit Stift und Papier arbeiten, setzen wir auf digitale Prozesse.
                Eigene Software-Lösungen, KI-gestützte Qualitätskontrolle und ein Kunden-Dashboard,
                das Transparenz schafft. So sieht moderne Gebäudereinigung aus.
              </p>

              <div className="grid sm:grid-cols-2 gap-6">
                {technologie.map((tech) => (
                  <div key={tech.titel} className="bg-white/5 rounded-[6px] p-6">
                    <TechIcon iconId={tech.iconId} />
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

      {/* Partner Logos - Alle auf einmal als Slider */}
      <section className="py-16 lg:py-20 bg-white overflow-hidden">
        <div className="w-full max-w-[1800px] mx-auto px-6 lg:px-12 xl:px-20">
          <div className="text-center mb-10">
            <p className="text-sm text-gray-500 font-semibold uppercase tracking-wide mb-3">
              Unsere Partner
            </p>
            <h2 className="text-2xl md:text-3xl font-bold text-[#109387]">
              Nur die besten Marken
            </h2>
          </div>

          {/* Logo Grid - Alle auf einmal */}
          <div className="grid grid-cols-4 md:grid-cols-8 gap-4">
            {allePartner.map((partner, index) => (
              <div
                key={partner.name}
                className="aspect-square bg-[#f8f9fa] rounded-[6px] flex flex-col items-center justify-center p-3 hover:bg-[#012956] group transition-colors cursor-pointer"
              >
                {/* Logo Placeholder */}
                <div className="w-full aspect-square bg-gray-200 rounded-[6px] group-hover:bg-white/20 flex items-center justify-center mb-2">
                  <span className="text-gray-400 group-hover:text-white font-bold text-[10px]">LOGO</span>
                </div>
                <span className="text-[#012956] group-hover:text-white font-bold text-[10px] sm:text-xs text-center leading-tight">
                  {partner.name}
                </span>
              </div>
            ))}
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
            <p className="text-lg text-gray-700 font-semibold leading-relaxed max-w-3xl">
              90+ Mitarbeiter, davon über 70 Reinigungskräfte im täglichen Einsatz in ganz Bayern.
              Hier lernen Sie das Team kennen, das im Hintergrund alles koordiniert.
            </p>
          </div>

          {/* Team Grid by Category - Größere Bilder (aspect 3:4) */}
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
                      {/* Bild mit 3:4 Aspect Ratio */}
                      <div className="relative aspect-[3/4] bg-gray-200">
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
        </div>
      </section>

      {/* Karriere CTA */}
      <section className="py-16 lg:py-20 bg-[#109387]">
        <div className="w-full max-w-[1800px] mx-auto px-6 lg:px-12 xl:px-20">
          <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-8">
            <div className="flex items-start gap-5">
              <div className="w-16 h-16 bg-white/20 rounded-[6px] flex items-center justify-center flex-shrink-0">
                <Briefcase size={32} className="text-white" strokeWidth={1.5} />
              </div>
              <div>
                <h3 className="text-2xl lg:text-3xl font-bold text-white mb-2">
                  Karriere bei FIMI
                </h3>
                <p className="text-white/80 font-semibold text-lg">
                  Werden Sie Teil unseres 90-köpfigen Teams. Faire Bezahlung, gute Arbeitsbedingungen und echte Entwicklungsmöglichkeiten.
                </p>
              </div>
            </div>
            <Link
              href="/karriere"
              className="inline-flex items-center gap-3 bg-white hover:bg-gray-100 text-[#012956] font-bold text-lg px-8 py-4 rounded-[6px] transition-all duration-300 group flex-shrink-0"
            >
              Offene Stellen
              <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </div>
      </section>

      {/* Geschäftsführung - Größere Bilder */}
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

          {/* GF Cards - Größere Bilder mit 2:3 Aspect */}
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12">
            {geschaeftsfuehrung.map((gf) => (
              <div
                key={gf.name}
                className="bg-[#f8f9fa] rounded-[6px] overflow-hidden"
              >
                <div className="grid md:grid-cols-[280px_1fr] lg:grid-cols-[320px_1fr]">
                  {/* Photo mit 2:3 Aspect */}
                  <div className="relative aspect-[2/3] md:aspect-auto md:h-full bg-gray-200">
                    <Image
                      src="https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=600&auto=format&fit=crop"
                      alt={gf.name}
                      fill
                      className="object-cover"
                    />
                  </div>

                  {/* Content */}
                  <div className="p-6 lg:p-8 flex flex-col justify-center">
                    <p className="text-[#109387] font-bold text-sm uppercase tracking-wide mb-1">
                      {gf.bereich}
                    </p>
                    <h3 className="text-xl lg:text-2xl font-bold text-[#012956] mb-1">
                      {gf.name}
                    </h3>
                    <p className="text-gray-600 font-semibold mb-4">{gf.position}</p>

                    <p className="text-gray-700 font-semibold leading-relaxed mb-4">
                      {gf.bio}
                    </p>

                    <blockquote className="text-gray-700 font-semibold italic leading-relaxed border-l-4 border-[#109387] pl-4">
                      „{gf.zitat}"
                    </blockquote>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Einsatzgebiete mit Karte */}
      <section className="py-20 lg:py-28 bg-[#f8f9fa]">
        <div className="w-full max-w-[1800px] mx-auto px-6 lg:px-12 xl:px-20">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            {/* Left: Karte */}
            <div className="relative">
              <Image
                src="/images/home/städte für fimi.avif"
                alt="Bayern Karte - FIMI Gebäudereinigung Servicegebiete"
                width={4800}
                height={3584}
                className="w-full h-auto rounded-[6px]"
              />
            </div>

            {/* Right: Content */}
            <div>
              <p className="text-sm text-gray-500 font-semibold uppercase tracking-wide mb-3">
                Unsere Einsatzgebiete
              </p>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#109387] leading-[1.1] mb-6">
                Gebäudereinigung in ganz Bayern
              </h2>
              <p className="text-lg text-gray-700 font-semibold leading-relaxed mb-8">
                Von unserem Hauptsitz in Landshut aus betreuen wir Kunden in ganz Niederbayern,
                Oberbayern und der Oberpfalz. Kurze Wege, schnelle Reaktionszeiten, persönlicher Service.
              </p>

              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-8">
                {einsatzgebiete.map((stadt) => (
                  <div key={stadt} className="bg-white rounded-[6px] p-4 text-center">
                    <MapPin size={20} className="text-[#109387] mx-auto mb-2" />
                    <span className="text-[#012956] font-bold">{stadt}</span>
                  </div>
                ))}
              </div>

              <a
                href="#contact-form"
                className="inline-flex items-center gap-3 bg-[#109387] hover:bg-[#0d7d72] text-white font-bold text-lg px-8 py-4 rounded-[6px] transition-all duration-300 group"
              >
                Kostenfreie Besichtigung in Ihrer Stadt
                <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Interne Verlinkungen */}
      <section className="py-16 lg:py-20 bg-white">
        <div className="w-full max-w-[1800px] mx-auto px-6 lg:px-12 xl:px-20">
          <div className="grid md:grid-cols-3 gap-6">
            <Link
              href="/leistungen"
              className="group bg-[#f8f9fa] rounded-[6px] p-8 hover:shadow-xl transition-all duration-300"
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
              className="group bg-[#f8f9fa] rounded-[6px] p-8 hover:shadow-xl transition-all duration-300"
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
              className="group bg-[#f8f9fa] rounded-[6px] p-8 hover:shadow-xl transition-all duration-300"
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
        <div className="w-full max-w-[1800px] mx-auto px-6 lg:px-12 xl:px-20 text-center">
          <p className="text-[#109387] font-bold text-sm uppercase tracking-[0.2em] mb-4">
            Jetzt starten
          </p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white leading-[1.1] mb-6">
            Überzeugen Sie sich selbst
          </h2>
          <p className="text-lg text-white/70 font-semibold leading-relaxed mb-8 max-w-2xl mx-auto">
            Vereinbaren Sie eine kostenfreie und unverbindliche Besichtigung.
            Wir schauen uns Ihre Räume an und erstellen Ihnen ein transparentes Angebot.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
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
      </section>

    </main>
  )
}
