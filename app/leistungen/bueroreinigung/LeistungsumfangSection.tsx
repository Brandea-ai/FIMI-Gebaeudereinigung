'use client'

import Image from 'next/image'
import Link from 'next/link'
import { ArrowRight, Sparkles, Building2, Sofa, Coffee, Bath, Footprints, Trash2, DoorOpen } from 'lucide-react'
import ScopeBox from '@/components/ScopeBox'

const scopeData = {
  inklusive: [
    'Arbeitsplätze & Schreibtische',
    'Sanitäranlagen desinfizieren',
    'Böden saugen & wischen',
    'Müllentsorgung & Trennung',
    'Teeküche & Pausenraum',
    'Kontaktflächen desinfizieren',
  ],
  optional: [
    'Fensterreinigung',
    'Teppichtiefenreinigung',
    'EDV-/Bildschirmreinigung',
    'Polster & Bürostühle',
    'Kühlschrank innen',
  ],
  intervalle: [
    { name: 'Täglich', beschreibung: 'Großraumbüros, Call-Center' },
    { name: '3x pro Woche', beschreibung: 'Standard-Büros, Agenturen' },
    { name: 'Wöchentlich', beschreibung: 'Kleine Büros, Home-Offices' },
  ],
}

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
    <section id="leistungen" className="py-12 sm:py-16 lg:py-28 bg-white">
      <div className="w-full max-w-[1800px] mx-auto px-4 sm:px-6 md:px-8 lg:px-12 xl:px-20">

        {/* Section Header */}
        <div className="max-w-4xl mb-10 sm:mb-14 lg:mb-20">
          <p className="text-xs sm:text-sm text-[#109387] font-bold uppercase tracking-wide mb-2 sm:mb-3">
            Was wir reinigen
          </p>
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-[#012956] leading-[1.1] mb-4 sm:mb-6">
            Büroreinigung im Detail
          </h2>
          <p className="text-sm sm:text-base lg:text-lg text-gray-700 font-semibold leading-relaxed">
            Büroreinigung bedeutet regelmäßige, wiederkehrende Reinigung Ihrer Geschäftsräume.
            Anders als eine einmalige Grundreinigung sorgen wir kontinuierlich dafür, dass Ihr Unternehmen
            sauber bleibt – mit einem festen Team, das Ihre Räume kennt und weiß, worauf es ankommt.
          </p>
        </div>

        {/* Scope Box - Was ist im Preis enthalten? */}
        <ScopeBox
          inklusive={scopeData.inklusive}
          optional={scopeData.optional}
          intervalle={scopeData.intervalle}
          className="mb-12 sm:mb-16 lg:mb-20"
        />

        {/* Two Column: Image + Text */}
        <div className="grid lg:grid-cols-2 gap-8 sm:gap-10 lg:gap-16 items-center mb-12 sm:mb-16 lg:mb-28">
          {/* Image */}
          <div className="relative h-[250px] sm:h-[320px] md:h-[400px] lg:h-[500px] rounded-[6px] lg:rounded-[12px] overflow-hidden">
            <Image
              src="https://images.unsplash.com/photo-1527515637462-cff94eecc1ac?q=80&w=2574&auto=format&fit=crop"
              alt="Professionelle Reinigungskraft bei der Büroreinigung"
              fill
              className="object-cover"
            />
          </div>

          {/* Content */}
          <div>
            <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold text-[#012956] mb-4 sm:mb-6">
              Warum regelmäßige Reinigung?
            </h3>
            <div className="space-y-3 sm:space-y-4 text-sm sm:text-base text-gray-700 font-semibold leading-relaxed">
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
            <div className="mt-6 sm:mt-8 flex flex-wrap gap-3 sm:gap-4">
              <Link
                href="/leistungen/unterhaltsreinigung"
                className="inline-flex items-center gap-1.5 sm:gap-2 text-[#109387] font-bold hover:text-[#012956] transition-colors text-sm sm:text-base"
              >
                Unterhaltsreinigung
                <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5" />
              </Link>
              <Link
                href="/leistungen/fensterreinigung"
                className="inline-flex items-center gap-1.5 sm:gap-2 text-[#109387] font-bold hover:text-[#012956] transition-colors text-sm sm:text-base"
              >
                Fensterreinigung
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

        {/* Intervalle Section - OUTLINED ICONS */}
        <div className="grid lg:grid-cols-2 gap-8 sm:gap-10 lg:gap-16 items-center">
          {/* Content */}
          <div>
            <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold text-[#012956] mb-4 sm:mb-6">
              Reinigungsintervalle nach Ihrem Bedarf
            </h3>
            <p className="text-sm sm:text-base text-gray-700 font-semibold leading-relaxed mb-5 sm:mb-8">
              Nicht jeder Raum braucht tägliche Reinigung. Wir erstellen gemeinsam mit Ihnen
              einen Reinigungsplan der Sinn macht – für Ihre Räume und für Ihr Budget.
            </p>
            <div className="space-y-3 sm:space-y-4">
              {intervalle.map((intervall) => (
                <div
                  key={intervall.name}
                  className="flex items-start gap-3 sm:gap-4 p-3 sm:p-4 bg-[#f8f9fa] rounded-[6px] group hover:bg-[#012956] transition-all duration-300"
                >
                  {/* Icon - Dauerhaft gefüllt */}
                  <div className="w-9 h-9 sm:w-10 sm:h-10 bg-[#109387] rounded-[6px] flex items-center justify-center flex-shrink-0">
                    <span className="text-white font-bold text-xs sm:text-sm">
                      {intervall.name.charAt(0)}
                    </span>
                  </div>
                  <div>
                    <h4 className="font-bold text-sm sm:text-base text-[#012956] group-hover:text-white transition-colors">{intervall.name}</h4>
                    <p className="text-gray-600 group-hover:text-white/80 font-semibold text-xs sm:text-sm transition-colors">{intervall.beschreibung}</p>
                    <p className="text-[#109387] font-semibold text-xs sm:text-sm mt-1">Ideal für: {intervall.ideal}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Image */}
          <div className="relative h-[250px] sm:h-[320px] md:h-[400px] lg:h-[500px] rounded-[6px] lg:rounded-[12px] overflow-hidden order-first lg:order-last">
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
