'use client'

import Image from 'next/image'
import Link from 'next/link'
import { ArrowRight, Wrench, Eye, Lightbulb, Trash2, Snowflake, Trees, ClipboardCheck, Key } from 'lucide-react'
import ScopeBox from '@/components/ScopeBox'

const scopeData = {
  inklusive: [
    'Kontrollgänge & Sichtprüfung',
    'Kleinreparaturen (30 Min/Monat)',
    'Mülltonnen-Management',
    'Schlüsselübergaben',
    'Mängeldokumentation',
  ],
  optional: [
    'Winterdienst',
    'Grünpflege Light',
    'Treppenhausreinigung',
    'Handwerker-Koordination',
    'Zusätzliche Reparaturstunden',
  ],
  intervalle: [
    { name: '3x pro Woche', beschreibung: 'Große Wohnanlagen' },
    { name: '1x pro Woche', beschreibung: 'Standard-Objekte' },
    { name: 'Nach Bedarf', beschreibung: 'Rufbereitschaft' },
  ],
}

const kernleistungen = [
  {
    icon: Wrench,
    title: 'Kleinreparaturen',
    beschreibung: 'Leuchtmittel tauschen, Türklinken reparieren, Wasserhähne abdichten, Türschließer einstellen, Heizkörper entlüften.',
  },
  {
    icon: Eye,
    title: 'Kontrollgänge',
    beschreibung: 'Regelmäßige Objektbegehungen mit dokumentierter Mängelerfassung. Haustechnik prüfen, Sicherheitsrisiken erkennen.',
  },
  {
    icon: Lightbulb,
    title: 'Technische Betreuung',
    beschreibung: 'Heizungsanlagen überwachen, Aufzüge kontrollieren, Brandschutzeinrichtungen prüfen, Wartungstermine koordinieren.',
  },
  {
    icon: Trash2,
    title: 'Müllmanagement',
    beschreibung: 'Mülltonnen zur Abholung bereitstellen und zurückfahren, Müllräume sauber halten, Sperrmüll koordinieren.',
  },
  {
    icon: Snowflake,
    title: 'Winterdienst',
    beschreibung: 'Schneeräumung ab 4 Uhr morgens, Streuen bei Glätte, Dokumentation für Ihre Verkehrssicherungspflicht.',
  },
  {
    icon: Trees,
    title: 'Grünpflege Light',
    beschreibung: 'Rasenmähen, einfache Heckenpflege, Laub kehren, Unkraut entfernen, Außenanlagen ordentlich halten.',
  },
  {
    icon: ClipboardCheck,
    title: 'Dokumentation',
    beschreibung: 'Lückenlose Protokollierung aller Tätigkeiten. Digitale Berichte für Ihre Hausverwaltung oder WEG.',
  },
  {
    icon: Key,
    title: 'Schlüsselverwaltung',
    beschreibung: 'Sichere Aufbewahrung und Übergabe von Schlüsseln. Zutritt für Handwerker und Dienstleister koordinieren.',
  },
]

const erweiterteLeistungen = [
  { name: 'Fensterreinigung', href: '/leistungen/fensterreinigung' },
  { name: 'Treppenhausreinigung', href: '/leistungen/unterhaltsreinigung' },
  { name: 'Tiefgaragenreinigung', href: '/leistungen/tiefgaragenreinigung' },
  { name: 'Außenanlagenpflege', href: '/leistungen/aussenanlagenpflege' },
]

export default function LeistungsumfangSection() {
  return (
    <section id="leistungen" className="py-16 sm:py-20 lg:py-28 bg-[#f8f9fa]">
      <div className="w-full max-w-[1800px] mx-auto px-4 sm:px-6 md:px-8 lg:px-12 xl:px-20">

        {/* Section Header */}
        <div className="max-w-4xl mb-10 sm:mb-14 lg:mb-20">
          <span className="text-[#109387] font-bold text-xs sm:text-sm uppercase tracking-wide mb-3 sm:mb-4 block">
            Leistungsumfang
          </span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-[#012956] leading-[1.1] mb-4 sm:mb-6">
            Was unser Hausmeisterservice leistet
          </h2>
          <p className="text-sm sm:text-base lg:text-lg text-gray-700 font-semibold leading-relaxed">
            Von der Glühbirne bis zum Winterdienst: Wir übernehmen alle Aufgaben,
            die Ihr Objekt in Schuss halten. Zuverlässig, dokumentiert und
            auf Wunsch auch kurzfristig.
          </p>
        </div>

        {/* Scope Box - Was ist im Preis enthalten? */}
        <ScopeBox
          inklusive={scopeData.inklusive}
          optional={scopeData.optional}
          intervalle={scopeData.intervalle}
          className="mb-12 sm:mb-16 lg:mb-20"
        />

        {/* Two Column: Image + Info */}
        <div className="grid lg:grid-cols-2 gap-8 sm:gap-10 lg:gap-16 items-center mb-12 sm:mb-16 lg:mb-20">
          {/* Image */}
          <div className="relative h-[280px] sm:h-[350px] md:h-[420px] lg:h-[500px] rounded-[6px] overflow-hidden">
            <Image
              src="https://images.unsplash.com/photo-1504307651254-35680f356dfd?q=80&w=1600&auto=format&fit=crop"
              alt="Hausmeister bei Kleinreparaturen - Professionelle Objektbetreuung"
              fill
              className="object-cover"
            />
          </div>

          {/* Content */}
          <div>
            <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold text-[#012956] mb-4 sm:mb-6">
              Mehr als nur Hausmeister
            </h3>
            <div className="space-y-3 sm:space-y-4 text-sm sm:text-base text-gray-700 font-semibold leading-relaxed mb-6 sm:mb-8">
              <p>
                Ein guter Hausmeister macht mehr als nur Glühbirnen wechseln.
                Er kennt das Gebäude, erkennt Probleme bevor sie groß werden
                und sorgt dafür, dass Mieter und Eigentümer zufrieden sind.
              </p>
              <p>
                Unser Team besteht aus erfahrenen Fachkräften mit handwerklichem
                Hintergrund. Sie wissen, wann ein Fachbetrieb nötig ist und
                wann eine schnelle Reparatur reicht.
              </p>
              <p>
                <strong className="text-[#012956]">Wichtig:</strong> Alle Tätigkeiten werden
                dokumentiert und können über die Betriebskostenabrechnung
                auf Mieter umgelegt werden.
              </p>
            </div>
            <Link
              href="/leistungen/facility-management"
              className="inline-flex items-center gap-2 text-[#109387] font-bold hover:text-[#012956] transition-colors text-sm sm:text-base"
            >
              Komplettpaket mit Facility Management
              <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5" />
            </Link>
          </div>
        </div>

        {/* Leistungen Grid */}
        <div className="mb-12 sm:mb-16">
          <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold text-[#012956] mb-6 sm:mb-8 lg:mb-10">
            Unsere Kernleistungen im Detail
          </h3>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5 lg:gap-6">
            {kernleistungen.map((leistung) => {
              const Icon = leistung.icon
              return (
                <div
                  key={leistung.title}
                  className="group bg-white p-4 sm:p-5 lg:p-6 rounded-[6px] hover:bg-[#012956] transition-all duration-300"
                >
                  {/* Icon - Outlined Style */}
                  <div className="w-10 h-10 sm:w-11 sm:h-11 lg:w-12 lg:h-12 border-2 border-[#109387] group-hover:bg-[#109387] rounded-[6px] flex items-center justify-center mb-3 sm:mb-4 transition-all duration-300">
                    <Icon className="w-5 h-5 sm:w-5.5 sm:h-5.5 lg:w-6 lg:h-6 text-[#109387] group-hover:text-white transition-colors duration-300" strokeWidth={1.5} />
                  </div>
                  <h4 className="text-base sm:text-lg font-bold text-[#012956] group-hover:text-white mb-1.5 sm:mb-2 transition-colors">
                    {leistung.title}
                  </h4>
                  <p className="text-gray-600 font-semibold text-xs sm:text-sm leading-relaxed group-hover:text-white/80 transition-colors">
                    {leistung.beschreibung}
                  </p>
                </div>
              )
            })}
          </div>
        </div>

        {/* Erweiterte Leistungen */}
        <div className="bg-white rounded-[6px] p-6 sm:p-8 lg:p-10">
          <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6">
            <div>
              <h3 className="text-xl sm:text-2xl font-bold text-[#012956] mb-2">
                Kombinierbar mit weiteren Leistungen
              </h3>
              <p className="text-gray-600 font-semibold">
                Erweitern Sie Ihren Hausmeisterservice nach Bedarf.
              </p>
            </div>

            <div className="flex flex-wrap gap-2 sm:gap-3">
              {erweiterteLeistungen.map((leistung, index) => (
                <Link
                  key={index}
                  href={leistung.href}
                  className="inline-flex items-center gap-2 bg-[#f8f9fa] hover:bg-[#012956] border-2 border-[#012956] text-[#012956] hover:text-white font-bold text-sm px-4 py-2 rounded-[6px] transition-all duration-300"
                >
                  {leistung.name}
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              ))}
            </div>
          </div>
        </div>

      </div>
    </section>
  )
}
