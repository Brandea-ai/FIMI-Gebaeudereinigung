'use client'

import Image from 'next/image'
import Link from 'next/link'
import { ArrowRight, Sparkles, Building2, Sofa, Coffee, Bath, Footprints, Trash2, DoorOpen } from 'lucide-react'

const reinigungsbereiche = [
  {
    icon: Building2,
    titel: 'Büroflächen',
    beschreibung: 'Arbeitsplätze, Schreibtische, Bildschirme, Tastaturen und Telefone – hygienisch rein für produktives Arbeiten.',
  },
  {
    icon: Bath,
    titel: 'Sanitäranlagen',
    beschreibung: 'WC-Anlagen, Waschbecken, Spiegel und Armaturen. Desinfektion und Auffüllen von Verbrauchsmaterialien.',
  },
  {
    icon: Coffee,
    titel: 'Teeküchen & Pausenräume',
    beschreibung: 'Küchenzeilen, Kühlschränke, Mikrowellen und Kaffeemaschinen. Dort wo Ihr Team Energie tankt.',
  },
  {
    icon: Footprints,
    titel: 'Böden & Bodenbeläge',
    beschreibung: 'Teppichböden saugen, Hartböden wischen, Laminat pflegen. Jeder Belag bekommt die richtige Behandlung.',
  },
  {
    icon: DoorOpen,
    titel: 'Empfang & Eingangsbereiche',
    beschreibung: 'Der erste Eindruck zählt. Eingangsmatten, Glasflächen, Türklinken – immer repräsentativ.',
  },
  {
    icon: Sofa,
    titel: 'Besprechungs- & Konferenzräume',
    beschreibung: 'Tische, Stühle, Präsentationstechnik. Damit Ihre Meetings im besten Licht stattfinden.',
  },
  {
    icon: Trash2,
    titel: 'Müllentsorgung',
    beschreibung: 'Papierkörbe leeren, Mülltrennung, Entsorgung. Ordnung ohne dass Sie daran denken müssen.',
  },
  {
    icon: Sparkles,
    titel: 'Oberflächenpflege',
    beschreibung: 'Staubwischen, Regale, Fensterbänke, Heizkörper. Jede Oberfläche bekommt Aufmerksamkeit.',
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
            Büroreinigung im Detail
          </h2>
          <p className="text-lg text-gray-700 font-semibold leading-relaxed">
            Büroreinigung bedeutet regelmäßige, wiederkehrende Reinigung Ihrer Geschäftsräume.
            Anders als eine einmalige Grundreinigung sorgen wir kontinuierlich dafür, dass Ihr Unternehmen
            sauber bleibt – mit einem festen Team, das Ihre Räume kennt und weiß, worauf es ankommt.
          </p>
        </div>

        {/* Two Column: Image + Text */}
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center mb-20 lg:mb-28">
          {/* Image */}
          <div className="relative h-[400px] lg:h-[500px] rounded-[12px] overflow-hidden">
            <Image
              src="https://images.unsplash.com/photo-1527515637462-cff94eecc1ac?q=80&w=2574&auto=format&fit=crop"
              alt="Professionelle Reinigungskraft bei der Büroreinigung"
              fill
              className="object-cover"
            />
          </div>

          {/* Content */}
          <div>
            <h3 className="text-2xl lg:text-3xl font-bold text-[#012956] mb-6">
              Warum regelmäßige Reinigung?
            </h3>
            <div className="space-y-4 text-gray-700 font-semibold leading-relaxed">
              <p>
                Staub sammelt sich. Fingerabdrücke entstehen. Papierkörbe füllen sich. Das ist normal
                in jedem Betrieb. Die Frage ist nur: Wer kümmert sich darum?
              </p>
              <p>
                Ihre Mitarbeiter? Die haben besseres zu tun. Sie selbst? Dafür ist Ihre Zeit zu wertvoll.
                Eine Reinigungsfirma die mal kommt und mal nicht? Das führt zu Frust.
              </p>
              <p>
                <strong className="text-[#012956]">Unsere Büroreinigung funktioniert anders:</strong> Ein festes Team
                kommt zu festen Zeiten. Sie wissen genau was zu tun ist. Sie kennen Ihre Räume.
                Und Sie haben einen Ansprechpartner wenn mal etwas nicht passt.
              </p>
            </div>
            <div className="mt-8 flex flex-wrap gap-4">
              <Link
                href="/leistungen/unterhaltsreinigung"
                className="inline-flex items-center gap-2 text-[#109387] font-bold hover:text-[#012956] transition-colors"
              >
                Unterhaltsreinigung
                <ArrowRight size={18} />
              </Link>
              <Link
                href="/leistungen/glasreinigung"
                className="inline-flex items-center gap-2 text-[#109387] font-bold hover:text-[#012956] transition-colors"
              >
                Glasreinigung
                <ArrowRight size={18} />
              </Link>
              <Link
                href="/leistungen/sonderreinigung"
                className="inline-flex items-center gap-2 text-[#109387] font-bold hover:text-[#012956] transition-colors"
              >
                Sonderreinigung
                <ArrowRight size={18} />
              </Link>
            </div>
          </div>
        </div>

        {/* Reinigungsbereiche Grid */}
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
                  <div className="w-12 h-12 bg-[#109387]/10 rounded-[6px] flex items-center justify-center mb-4 group-hover:bg-[#109387]/20 transition-colors">
                    <Icon size={24} className="text-[#109387]" />
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

        {/* Intervalle Section */}
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
                  className="flex items-start gap-4 p-4 bg-[#f8f9fa] rounded-[6px]"
                >
                  <div className="w-10 h-10 bg-[#109387] rounded-[6px] flex items-center justify-center flex-shrink-0">
                    <span className="text-white font-bold text-sm">
                      {intervall.name.charAt(0)}
                    </span>
                  </div>
                  <div>
                    <h4 className="font-bold text-[#012956]">{intervall.name}</h4>
                    <p className="text-gray-600 font-semibold text-sm">{intervall.beschreibung}</p>
                    <p className="text-[#109387] font-semibold text-sm mt-1">Ideal für: {intervall.ideal}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Image */}
          <div className="relative h-[400px] lg:h-[500px] rounded-[12px] overflow-hidden">
            <Image
              src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?q=80&w=2670&auto=format&fit=crop"
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
