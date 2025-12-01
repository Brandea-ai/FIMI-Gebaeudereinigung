'use client'

import Image from 'next/image'
import Link from 'next/link'
import { ArrowRight, Sparkles, Building2, Sofa, Coffee, Bath, Footprints, Trash2, DoorOpen } from 'lucide-react'

const reinigungsbereiche = [
  {
    icon: Building2,
    titel: 'Büro & Arbeitsflächen',
    beschreibung: 'Schreibtische, Bildschirme, Tastaturen, Telefone – alles was täglich angefasst wird.',
  },
  {
    icon: Bath,
    titel: 'Sanitäranlagen',
    beschreibung: 'WC, Waschbecken, Spiegel, Armaturen. Desinfektion und Auffüllen von Verbrauchsmaterial.',
  },
  {
    icon: Coffee,
    titel: 'Teeküchen & Pausenräume',
    beschreibung: 'Küchen, Kühlschränke, Mikrowellen, Kaffeemaschinen. Wo Ihr Team Pause macht.',
  },
  {
    icon: Footprints,
    titel: 'Böden aller Art',
    beschreibung: 'Teppich saugen, Hartboden wischen, Laminat pflegen. Jeder Belag richtig behandelt.',
  },
  {
    icon: DoorOpen,
    titel: 'Eingangs & Empfangsbereiche',
    beschreibung: 'Matten, Glas, Türklinken – der erste Eindruck für jeden Besucher.',
  },
  {
    icon: Sofa,
    titel: 'Besprechungsräume',
    beschreibung: 'Tische, Stühle, Technik. Damit Meetings im besten Licht stattfinden.',
  },
  {
    icon: Trash2,
    titel: 'Müllentsorgung',
    beschreibung: 'Papierkörbe leeren, Mülltrennung. Ordnung ohne dass Sie daran denken.',
  },
  {
    icon: Sparkles,
    titel: 'Oberflächenpflege',
    beschreibung: 'Staub wischen, Regale, Fensterbänke, Heizkörper. Keine Ecke vergessen.',
  },
]

const intervalle = [
  { name: 'Täglich', beschreibung: 'Für stark frequentierte Bereiche', ideal: 'Praxen, Einzelhandel, Gastronomie' },
  { name: '3x pro Woche', beschreibung: 'Der goldene Mittelweg', ideal: 'Büros, Agenturen, Kanzleien' },
  { name: 'Wöchentlich', beschreibung: 'Für weniger genutzte Räume', ideal: 'Lager, Archiv, Nebenflächen' },
  { name: 'Nach Bedarf', beschreibung: 'Flexibel und individuell', ideal: 'Projektbüros, Coworking' },
]

export default function LeistungsumfangSection() {
  return (
    <section id="leistungen" className="py-20 lg:py-28 bg-white">
      <div className="w-full max-w-[1800px] mx-auto px-6 lg:px-12 xl:px-20">

        {/* Section Header */}
        <div className="max-w-4xl mb-16 lg:mb-20">
          <p className="text-sm text-[#109387] font-bold uppercase tracking-wide mb-3">
            Was wir reinigen
          </p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#012956] leading-[1.1] mb-6">
            Unterhaltsreinigung im Detail
          </h2>
          <p className="text-lg text-gray-700 font-semibold leading-relaxed">
            Unterhaltsreinigung umfasst alle regelmäßig wiederkehrenden Reinigungsarbeiten
            in Ihrem Gebäude. Nicht einmalig, sondern kontinuierlich – damit Sauberkeit
            kein Thema mehr ist, sondern Standard.
          </p>
        </div>

        {/* Two Column: Image + Text */}
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center mb-20 lg:mb-28">
          {/* Image */}
          <div className="relative h-[400px] lg:h-[500px] rounded-[12px] overflow-hidden">
            <Image
              src="https://images.unsplash.com/photo-1527515637462-cff94eecc1ac?q=80&w=2574&auto=format&fit=crop"
              alt="Professionelle Reinigungskraft bei der Unterhaltsreinigung"
              fill
              className="object-cover"
            />
          </div>

          {/* Content */}
          <div>
            <h3 className="text-2xl lg:text-3xl font-bold text-[#012956] mb-6">
              Der Unterschied zur Büroreinigung?
            </h3>
            <div className="space-y-4 text-gray-700 font-semibold leading-relaxed">
              <p>
                Unterhaltsreinigung ist der Oberbegriff. Büroreinigung ist eine Form davon –
                speziell für Büroumgebungen. Aber Unterhaltsreinigung kann mehr sein:
              </p>
              <p>
                <strong className="text-[#012956]">Praxen</strong> mit besonderen Hygienestandards.
                <strong className="text-[#012956]"> Einzelhandel</strong> mit täglichem Publikumsverkehr.
                <strong className="text-[#012956]"> Produktionshallen</strong> mit speziellen Anforderungen.
              </p>
              <p>
                Wir passen uns an – ob klassisches Büro oder komplexe Anforderungen.
                Ein Partner, viele Lösungen.
              </p>
            </div>
            <div className="mt-8 flex flex-wrap gap-4">
              <Link
                href="/leistungen/bueroreinigung"
                className="inline-flex items-center gap-2 text-[#109387] font-bold hover:text-[#012956] transition-colors"
              >
                Büroreinigung
                <ArrowRight size={18} />
              </Link>
              <Link
                href="/leistungen/industriereinigung"
                className="inline-flex items-center gap-2 text-[#109387] font-bold hover:text-[#012956] transition-colors"
              >
                Industriereinigung
                <ArrowRight size={18} />
              </Link>
              <Link
                href="/leistungen/glasreinigung"
                className="inline-flex items-center gap-2 text-[#109387] font-bold hover:text-[#012956] transition-colors"
              >
                Glasreinigung
                <ArrowRight size={18} />
              </Link>
            </div>
          </div>
        </div>

        {/* Reinigungsbereiche Grid - OUTLINED ICONS */}
        <div className="mb-20 lg:mb-28">
          <h3 className="text-2xl lg:text-3xl font-bold text-[#012956] mb-10">
            Diese Bereiche reinigen wir
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {reinigungsbereiche.map((bereich) => {
              const Icon = bereich.icon
              return (
                <div
                  key={bereich.titel}
                  className="group bg-[#f8f9fa] p-6 rounded-[6px] hover:bg-[#012956] transition-all duration-300"
                >
                  {/* Icon - Outlined Style wie Über-uns */}
                  <div className="w-12 h-12 border-2 border-[#109387] group-hover:bg-[#109387] rounded-[6px] flex items-center justify-center mb-4 transition-all duration-300">
                    <Icon size={24} className="text-[#109387] group-hover:text-white transition-colors duration-300" strokeWidth={1.5} />
                  </div>
                  <h4 className="text-lg font-bold text-[#012956] group-hover:text-white mb-2 transition-colors">
                    {bereich.titel}
                  </h4>
                  <p className="text-gray-600 font-semibold text-sm leading-relaxed group-hover:text-white/80 transition-colors">
                    {bereich.beschreibung}
                  </p>
                </div>
              )
            })}
          </div>
        </div>

        {/* Intervalle Section - OUTLINED ICONS */}
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Content */}
          <div>
            <h3 className="text-2xl lg:text-3xl font-bold text-[#012956] mb-6">
              Reinigungsintervalle nach Ihrem Bedarf
            </h3>
            <p className="text-gray-700 font-semibold leading-relaxed mb-8">
              Nicht jeder Raum braucht tägliche Reinigung. Wir erstellen gemeinsam mit Ihnen
              einen Reinigungsplan der Sinn macht – für Ihre Räume und für Ihr Budget.
            </p>
            <div className="space-y-4">
              {intervalle.map((intervall) => (
                <div
                  key={intervall.name}
                  className="flex items-start gap-4 p-4 bg-[#f8f9fa] rounded-[6px] group hover:bg-[#012956] transition-all duration-300"
                >
                  {/* Icon - Outlined Style */}
                  <div className="w-10 h-10 border-2 border-[#109387] group-hover:bg-[#109387] rounded-[6px] flex items-center justify-center flex-shrink-0 transition-all duration-300">
                    <span className="text-[#109387] group-hover:text-white font-bold text-sm transition-colors duration-300">
                      {intervall.name.charAt(0)}
                    </span>
                  </div>
                  <div>
                    <h4 className="font-bold text-[#012956] group-hover:text-white transition-colors">{intervall.name}</h4>
                    <p className="text-gray-600 group-hover:text-white/80 font-semibold text-sm transition-colors">{intervall.beschreibung}</p>
                    <p className="text-[#109387] font-semibold text-sm mt-1">Ideal für: {intervall.ideal}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Image */}
          <div className="relative h-[400px] lg:h-[500px] rounded-[12px] overflow-hidden">
            <Image
              src="https://images.unsplash.com/photo-1556761175-5973dc0f32e7?q=80&w=2670&auto=format&fit=crop"
              alt="Besprechung Reinigungsplan – Team bei der Arbeit"
              fill
              className="object-cover"
            />
          </div>
        </div>

      </div>
    </section>
  )
}
