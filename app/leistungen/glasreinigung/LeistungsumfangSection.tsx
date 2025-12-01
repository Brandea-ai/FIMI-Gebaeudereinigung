'use client'

import Image from 'next/image'
import Link from 'next/link'
import { ArrowRight, Building2, Store, Home, Warehouse, GlassWater, Grid3X3, Sparkles, Shield } from 'lucide-react'

const glasflaechen = [
  {
    icon: Store,
    titel: 'Schaufenster',
    beschreibung: 'Kristallklare Präsentationsflächen für Einzelhandel, Boutiquen und Showrooms. Innen und außen streifenfrei.',
  },
  {
    icon: Building2,
    titel: 'Bürofenster',
    beschreibung: 'Fenster aller Größen in Bürogebäuden, Verwaltungen und Kanzleien. Regelmäßig oder einmalig.',
  },
  {
    icon: Grid3X3,
    titel: 'Glasfassaden',
    beschreibung: 'Moderne Gebäudefassaden mit Strukturglas, Vollverglasung oder Fensterfront. Auch in der Höhe.',
  },
  {
    icon: Home,
    titel: 'Wintergärten',
    beschreibung: 'Glasdächer, Seitenwände und Terrassenverglasungen. Rundherum sauber und lichtdurchlässig.',
  },
  {
    icon: GlassWater,
    titel: 'Oberlichter & Dachfenster',
    beschreibung: 'Schwer erreichbare Glasflächen, Lichtkuppeln und Dachverglasungen. Mit Spezialtechnik gereinigt.',
  },
  {
    icon: Warehouse,
    titel: 'Hallen & Produktion',
    beschreibung: 'Große Glasflächen in Produktionshallen, Lagerhallen und Industriegebäuden.',
  },
  {
    icon: Sparkles,
    titel: 'Glastüren & Trennwände',
    beschreibung: 'Eingangstüren, Glastrennwände und Innenverglasungen. Fingerabdrücke und Verschmutzungen entfernt.',
  },
  {
    icon: Shield,
    titel: 'Spiegel & Glasmöbel',
    beschreibung: 'Spiegelflächen, Glastische und Vitrinen. Streifenfrei für repräsentative Innenräume.',
  },
]

const methoden = [
  { name: 'Klassisch', beschreibung: 'Abzieher & Einwascher', ideal: 'Fenster, Schaufenster, Glastüren' },
  { name: 'Osmose', beschreibung: 'Entmineralisiertes Reinwasser', ideal: 'Glasfassaden, Solaranlagen' },
  { name: 'Teleskop', beschreibung: 'Ohne Leiter bis 15m', ideal: 'Höhere Gebäude, Schwer erreichbar' },
  { name: 'Seilzugang', beschreibung: 'Höhenarbeiter mit Sicherung', ideal: 'Hochhäuser, Glasfassaden' },
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
            Glasreinigung im Detail
          </h2>
          <p className="text-sm sm:text-base lg:text-lg text-gray-700 font-semibold leading-relaxed">
            Von der kleinen Schaufensterscheibe bis zur mehrgeschossigen Glasfassade –
            wir haben die Technik, das Know-how und die Ausrüstung für jede Glasfläche.
            Garantiert streifenfrei.
          </p>
        </div>

        {/* Two Column: Image + Text */}
        <div className="grid lg:grid-cols-2 gap-8 sm:gap-10 lg:gap-16 items-center mb-12 sm:mb-16 lg:mb-28">
          {/* Image */}
          <div className="relative h-[250px] sm:h-[320px] md:h-[400px] lg:h-[500px] rounded-[6px] lg:rounded-[12px] overflow-hidden">
            <Image
              src="https://images.unsplash.com/photo-1596394723269-b2cbca4e6313?q=80&w=2574&auto=format&fit=crop"
              alt="Professionelle Glasreinigung an moderner Glasfassade"
              fill
              className="object-cover"
            />
          </div>

          {/* Content */}
          <div>
            <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold text-[#012956] mb-4 sm:mb-6">
              Warum professionelle Glasreinigung?
            </h3>
            <div className="space-y-3 sm:space-y-4 text-sm sm:text-base text-gray-700 font-semibold leading-relaxed">
              <p>
                Selbst gemachte Fensterreinigung hinterlässt oft Schlieren und Streifen.
                Das liegt an falschen Mitteln, ungeeigneten Tüchern oder der Technik.
                Professionelle Glasreinigung ist ein Handwerk.
              </p>
              <p>
                Unsere Glasreiniger sind geschult und ausgerüstet. Sie wissen, welche
                Technik bei welchem Glas funktioniert. Und sie arbeiten schnell, sicher
                und mit Ergebnis-Garantie.
              </p>
              <p>
                <strong className="text-[#012956]">Das Ergebnis:</strong> Kristallklare Glasflächen,
                die den Unterschied machen. Für Ihr Unternehmen, Ihre Kunden und Ihre Mitarbeiter.
              </p>
            </div>
            <div className="mt-6 sm:mt-8 flex flex-wrap gap-3 sm:gap-4">
              <Link
                href="/leistungen/bueroreinigung"
                className="inline-flex items-center gap-1.5 sm:gap-2 text-[#109387] font-bold hover:text-[#012956] transition-colors text-sm sm:text-base"
              >
                Büroreinigung
                <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5" />
              </Link>
              <Link
                href="/leistungen/unterhaltsreinigung"
                className="inline-flex items-center gap-1.5 sm:gap-2 text-[#109387] font-bold hover:text-[#012956] transition-colors text-sm sm:text-base"
              >
                Unterhaltsreinigung
                <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5" />
              </Link>
              <Link
                href="/leistungen/sonderreinigung"
                className="inline-flex items-center gap-1.5 sm:gap-2 text-[#109387] font-bold hover:text-[#012956] transition-colors text-sm sm:text-base"
              >
                Sonderreinigung
                <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5" />
              </Link>
            </div>
          </div>
        </div>

        {/* Glasflächen Grid - OUTLINED ICONS */}
        <div className="mb-12 sm:mb-16 lg:mb-28">
          <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold text-[#012956] mb-6 sm:mb-8 lg:mb-10">
            Diese Glasflächen reinigen wir
          </h3>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5 lg:gap-6">
            {glasflaechen.map((bereich) => {
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

        {/* Methoden Section - OUTLINED ICONS */}
        <div className="grid lg:grid-cols-2 gap-8 sm:gap-10 lg:gap-16 items-center">
          {/* Content */}
          <div>
            <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold text-[#012956] mb-4 sm:mb-6">
              Unsere Reinigungsmethoden
            </h3>
            <p className="text-sm sm:text-base text-gray-700 font-semibold leading-relaxed mb-5 sm:mb-8">
              Je nach Glasfläche, Höhe und Verschmutzung setzen wir unterschiedliche
              Techniken ein. So erreichen wir immer das beste Ergebnis.
            </p>
            <div className="space-y-3 sm:space-y-4">
              {methoden.map((methode) => (
                <div
                  key={methode.name}
                  className="flex items-start gap-3 sm:gap-4 p-3 sm:p-4 bg-[#f8f9fa] rounded-[6px] group hover:bg-[#012956] transition-all duration-300"
                >
                  {/* Icon - Dauerhaft gefüllt */}
                  <div className="w-9 h-9 sm:w-10 sm:h-10 bg-[#109387] rounded-[6px] flex items-center justify-center flex-shrink-0">
                    <span className="text-white font-bold text-xs sm:text-sm">
                      {methode.name.charAt(0)}
                    </span>
                  </div>
                  <div>
                    <h4 className="font-bold text-sm sm:text-base text-[#012956] group-hover:text-white transition-colors">{methode.name}</h4>
                    <p className="text-gray-600 group-hover:text-white/80 font-semibold text-xs sm:text-sm transition-colors">{methode.beschreibung}</p>
                    <p className="text-[#109387] font-semibold text-xs sm:text-sm mt-1">Ideal für: {methode.ideal}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Image */}
          <div className="relative h-[250px] sm:h-[320px] md:h-[400px] lg:h-[500px] rounded-[6px] lg:rounded-[12px] overflow-hidden order-first lg:order-last">
            <Image
              src="https://images.unsplash.com/photo-1504384308090-c894fdcc538d?q=80&w=2670&auto=format&fit=crop"
              alt="Glasreiniger bei der Arbeit an großer Glasfläche"
              fill
              className="object-cover"
            />
          </div>
        </div>

      </div>
    </section>
  )
}
