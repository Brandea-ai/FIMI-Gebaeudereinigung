'use client'

import Image from 'next/image'
import Link from 'next/link'
import { ArrowRight, Droplets, Cog, Wind, Trash2, FileText, Shield, Sparkles, Wrench } from 'lucide-react'

const reinigungsbereiche = [
  {
    icon: Cog,
    titel: 'Arbeitsräume & Spindeln',
    beschreibung: 'Innenreinigung von Bearbeitungsräumen, Spindelgehäusen und Werkzeugaufnahmen.',
  },
  {
    icon: Droplets,
    titel: 'KSS-Systeme & Tanks',
    beschreibung: 'Kühlschmierstoff-Tanks entleeren, reinigen und desinfizieren. Bakterien abtöten.',
  },
  {
    icon: Wind,
    titel: 'Absaugungen & Filter',
    beschreibung: 'Ölnebel-Absaugungen, Spänefilter und Luftfiltersysteme reinigen und warten.',
  },
  {
    icon: Sparkles,
    titel: 'Oberflächen & Verkleidungen',
    beschreibung: 'Maschinengehäuse, Schutzverkleidungen und Bedienelemente gründlich säubern.',
  },
  {
    icon: Wrench,
    titel: 'Führungsbahnen & Antriebe',
    beschreibung: 'Linearführungen, Kugelgewindetriebe und Antriebskomponenten von Verunreinigungen befreien.',
  },
  {
    icon: Trash2,
    titel: 'Späne & Produktionsreste',
    beschreibung: 'Metallspäne, Schleifstaub und Produktionsrückstände fachgerecht entfernen und entsorgen.',
  },
  {
    icon: Shield,
    titel: 'Elektronik & Steuerung',
    beschreibung: 'Schaltschränke und Steuerungseinheiten schonend von Staub und Ablagerungen befreien.',
  },
  {
    icon: FileText,
    titel: 'Dokumentation',
    beschreibung: 'Reinigungsprotokolle, Vorher-Nachher-Fotos und Checklisten für Ihre QM-Unterlagen.',
  },
]

const leistungspakete = [
  {
    name: 'Einzelreinigung',
    beschreibung: 'Einmalige Intensivreinigung bei Bedarf',
    ideal: 'Vor Audits, nach Reparaturen, Sonderanlässe',
  },
  {
    name: 'Regelmäßige Reinigung',
    beschreibung: 'Planbare Intervalle für konstante Sauberkeit',
    ideal: 'Monatlich, quartalsweise, halbjährlich',
  },
  {
    name: 'Wartungsbegleitend',
    beschreibung: 'Integration in Ihre Wartungszyklen',
    ideal: 'Abgestimmt auf Maschinenhersteller',
  },
]

export default function LeistungsumfangSection() {
  return (
    <section id="leistungen" className="py-12 sm:py-16 lg:py-28 bg-white">
      <div className="w-full max-w-[1800px] mx-auto px-4 sm:px-6 md:px-8 lg:px-12 xl:px-20">

        {/* Section Header */}
        <div className="max-w-4xl mb-10 sm:mb-14 lg:mb-20">
          <p className="text-xs sm:text-sm text-[#109387] font-bold uppercase tracking-wide mb-2 sm:mb-3">
            Was wir reinigen
          </p>
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-[#012956] leading-[1.1] mb-4 sm:mb-6">
            Maschinenreinigung im Detail
          </h2>
          <p className="text-sm sm:text-base lg:text-lg text-gray-700 font-semibold leading-relaxed">
            Von der Spindel bis zum Schaltschrank: Wir reinigen alle Komponenten Ihrer
            Produktionsmaschinen. Gründlich, fachgerecht und dokumentiert.
          </p>
        </div>

        {/* Two Column: Image + Text */}
        <div className="grid lg:grid-cols-2 gap-8 sm:gap-10 lg:gap-16 items-center mb-12 sm:mb-16 lg:mb-28">
          {/* Image */}
          <div className="relative h-[250px] sm:h-[320px] md:h-[400px] lg:h-[500px] rounded-[6px] lg:rounded-[12px] overflow-hidden">
            <Image
              src="https://images.unsplash.com/photo-1565193566173-7a0ee3dbe261?q=80&w=2574&auto=format&fit=crop"
              alt="Professionelle Maschinenreinigung - CNC-Maschine wird gereinigt"
              fill
              className="object-cover"
            />
          </div>

          {/* Content */}
          <div>
            <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold text-[#012956] mb-4 sm:mb-6">
              Mehr als nur sauber machen
            </h3>
            <div className="space-y-3 sm:space-y-4 text-sm sm:text-base text-gray-700 font-semibold leading-relaxed">
              <p>
                Maschinenreinigung ist keine Hausmeistertätigkeit. Es geht um den Werterhalt
                teurer Investitionsgüter, um Arbeitssicherheit und um Produktqualität.
              </p>
              <p>
                Unsere Mitarbeiter sind geschult in den Besonderheiten von CNC-Maschinen,
                Spritzgussanlagen und Bearbeitungszentren. Sie wissen, welche Bereiche
                empfindlich sind, wo Feuchtigkeit vermieden werden muss und wie
                Herstellervorgaben einzuhalten sind.
              </p>
              <p>
                Das Ergebnis: Maschinen, die präziser arbeiten, seltener ausfallen und
                länger halten. Und eine Dokumentation, die bei Audits und Zertifizierungen
                überzeugt.
              </p>
            </div>
            <div className="mt-6 sm:mt-8 flex flex-wrap gap-3 sm:gap-4">
              <Link
                href="/leistungen/industriereinigung"
                className="inline-flex items-center gap-1.5 sm:gap-2 border-2 border-[#109387] text-[#109387] hover:bg-[#109387] hover:text-white font-bold px-4 py-2 rounded-[6px] transition-all text-sm sm:text-base"
              >
                Industriereinigung
                <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5" />
              </Link>
              <Link
                href="/leistungen/hallenreinigung"
                className="inline-flex items-center gap-1.5 sm:gap-2 border-2 border-[#109387] text-[#109387] hover:bg-[#109387] hover:text-white font-bold px-4 py-2 rounded-[6px] transition-all text-sm sm:text-base"
              >
                Hallenreinigung
                <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5" />
              </Link>
            </div>
          </div>
        </div>

        {/* Reinigungsbereiche Grid - OUTLINED ICONS */}
        <div className="mb-12 sm:mb-16 lg:mb-28">
          <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold text-[#012956] mb-6 sm:mb-8 lg:mb-10">
            Diese Bereiche reinigen wir
          </h3>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5 lg:gap-6">
            {reinigungsbereiche.map((bereich) => {
              const Icon = bereich.icon
              return (
                <div
                  key={bereich.titel}
                  className="group bg-[#f8f9fa] p-4 sm:p-5 lg:p-6 rounded-[6px] hover:bg-[#012956] transition-all duration-300"
                >
                  {/* Icon - Outlined Style */}
                  <div className="w-10 h-10 sm:w-11 sm:h-11 lg:w-12 lg:h-12 border-2 border-[#109387] group-hover:bg-[#109387] rounded-[6px] flex items-center justify-center mb-3 sm:mb-4 transition-all duration-300">
                    <Icon className="w-5 h-5 sm:w-5.5 sm:h-5.5 lg:w-6 lg:h-6 text-[#109387] group-hover:text-white transition-colors duration-300" strokeWidth={1.5} />
                  </div>
                  <h4 className="text-base sm:text-lg font-bold text-[#012956] group-hover:text-white mb-1.5 sm:mb-2 transition-colors">
                    {bereich.titel}
                  </h4>
                  <p className="text-gray-600 font-semibold text-xs sm:text-sm leading-relaxed group-hover:text-white/80 transition-colors">
                    {bereich.beschreibung}
                  </p>
                </div>
              )
            })}
          </div>
        </div>

        {/* Leistungspakete */}
        <div className="bg-[#f8f9fa] rounded-[6px] p-5 sm:p-6 lg:p-10">
          <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold text-[#012956] mb-6 sm:mb-8">
            Flexible Leistungspakete
          </h3>
          <div className="grid md:grid-cols-3 gap-4 sm:gap-6">
            {leistungspakete.map((paket) => (
              <div
                key={paket.name}
                className="bg-white rounded-[6px] p-4 sm:p-5 lg:p-6 shadow-sm"
              >
                <h4 className="text-lg sm:text-xl font-bold text-[#012956] mb-2">
                  {paket.name}
                </h4>
                <p className="text-gray-600 font-semibold text-sm sm:text-base mb-3">
                  {paket.beschreibung}
                </p>
                <p className="text-[#109387] font-bold text-xs sm:text-sm">
                  Ideal für: {paket.ideal}
                </p>
              </div>
            ))}
          </div>
          <div className="mt-6 sm:mt-8 text-center">
            <a
              href="#kontakt"
              className="inline-flex items-center gap-2 bg-[#109387] hover:bg-[#0d7d72] text-white font-bold px-5 sm:px-8 py-3 sm:py-4 rounded-[6px] transition-colors text-sm sm:text-base"
            >
              Individuelles Angebot anfragen
              <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5" />
            </a>
          </div>
        </div>

      </div>
    </section>
  )
}
