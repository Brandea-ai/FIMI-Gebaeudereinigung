'use client'

import Image from 'next/image'
import Link from 'next/link'
import { ArrowRight, Scissors, TreeDeciduous, Flower2, Wind, Shrub, TreePine, Snowflake, Wrench } from 'lucide-react'
import ScopeBox from '@/components/ScopeBox'

const scopeData = {
  inklusive: [
    'Rasenmähen (saisonal)',
    'Heckenschnitt (2x/Jahr)',
    'Laubbeseitigung Herbst',
    'Unkrautentfernung',
    'Wegesäuberung',
  ],
  optional: [
    'Beetpflege & Bepflanzung',
    'Baumpflege & Kontrolle',
    'Winterdienst',
    'Bewässerung',
    'Pflanzenschutz',
  ],
  intervalle: [
    { name: 'Wöchentlich', beschreibung: 'Repräsentative Objekte' },
    { name: '14-tägig', beschreibung: 'Standard-Gewerbeobjekte' },
    { name: 'Monatlich', beschreibung: 'Grundpflege + Saison' },
  ],
}

const leistungsbereiche = [
  {
    icon: Scissors,
    titel: 'Rasenpflege',
    beschreibung: 'Mähen, Vertikutieren, Düngen, Nachsaat – für einen dichten, gesunden Rasen das ganze Jahr.',
  },
  {
    icon: Shrub,
    titel: 'Gehölzschnitt',
    beschreibung: 'Hecken, Sträucher, Formschnitt. Fachgerecht nach Jahreszeit für gesundes Wachstum.',
  },
  {
    icon: Flower2,
    titel: 'Beetpflege',
    beschreibung: 'Unkrautentfernung, Pflanzung, Mulchen. Gepflegte Beete als Blickfang Ihrer Anlage.',
  },
  {
    icon: Wind,
    titel: 'Laubbeseitigung',
    beschreibung: 'Grünflächen, Wege, Dachrinnen. Im Herbst täglich oder wöchentlich nach Bedarf.',
  },
  {
    icon: TreePine,
    titel: 'Baumpflege',
    beschreibung: 'Kontrolle, Schnitt, Fällung. Inkl. Dokumentation für Ihre Verkehrssicherungspflicht.',
  },
  {
    icon: TreeDeciduous,
    titel: 'Grauflächenpflege',
    beschreibung: 'Wege, Pflaster, Parkplätze. Unkrautentfernung, Kehren, Reinigung.',
  },
  {
    icon: Snowflake,
    titel: 'Winterdienst',
    beschreibung: 'Räumen, Streuen, Dokumentation. Nahtlos integriert in Ihr Pflegepaket.',
    link: '/leistungen/winterdienst',
  },
  {
    icon: Wrench,
    titel: 'Hausmeisterservice',
    beschreibung: 'Kleinreparaturen, Kontrollgänge, technische Betreuung. Alles aus einer Hand.',
    link: '/leistungen/hausmeisterservice',
  },
]

const zielgruppen = [
  { name: 'Wöchentlich', beschreibung: 'Für repräsentative Eingangsbereiche', ideal: 'Büros, Hotels, Autohäuser' },
  { name: '14-tägig', beschreibung: 'Der Standard für gepflegte Anlagen', ideal: 'Gewerbe, Praxen, Wohnanlagen' },
  { name: 'Monatlich', beschreibung: 'Grundpflege mit saisonalen Extras', ideal: 'Industrie, Lager, Verwaltung' },
  { name: 'Nach Bedarf', beschreibung: 'Flexible Einsätze bei Bedarf', ideal: 'Sondereinsätze, Vertretung' },
]

export default function LeistungsumfangSection() {
  return (
    <section id="leistungen" className="py-12 sm:py-16 lg:py-28 bg-white">
      <div className="w-full max-w-[1800px] mx-auto px-4 sm:px-6 md:px-8 lg:px-12 xl:px-20">

        {/* Section Header */}
        <div className="max-w-4xl mb-10 sm:mb-14 lg:mb-20">
          <p className="text-xs sm:text-sm text-[#109387] font-bold uppercase tracking-wide mb-2 sm:mb-3">
            Was wir für Sie tun
          </p>
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-[#012956] leading-[1.1] mb-4 sm:mb-6">
            Außenanlagenpflege im Detail
          </h2>
          <p className="text-sm sm:text-base lg:text-lg text-gray-700 font-semibold leading-relaxed">
            Professionelle Außenanlagenpflege ist mehr als Rasenmähen. Wir kümmern uns um alle
            Grün- und Grauflächen Ihrer Immobilie – von der wöchentlichen Rasenpflege bis zur
            jährlichen Baumpflege. Mit einem individuellen Pflegeplan, der zu Ihrer Anlage passt.
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
              src="https://images.unsplash.com/photo-1416879595882-3373a0480b5b?q=80&w=2574&auto=format&fit=crop"
              alt="Professionelle Grünflächenpflege – Gärtner bei der Arbeit"
              fill
              className="object-cover"
            />
          </div>

          {/* Content */}
          <div>
            <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold text-[#012956] mb-4 sm:mb-6">
              Warum professionelle Außenanlagenpflege?
            </h3>
            <div className="space-y-3 sm:space-y-4 text-sm sm:text-base text-gray-700 font-semibold leading-relaxed">
              <p>
                Gepflegte Außenanlagen sind kein Luxus – sie sind wirtschaftlich sinnvoll.
                Sie steigern den Immobilienwert, reduzieren Mieterfluktuation und vermeiden
                teure Nachbesserungen durch vernachlässigte Pflege.
              </p>
              <p>
                Die Alternative? Selbst machen kostet Zeit. Der Hausmeister hat andere Aufgaben.
                Wechselnde Gärtner kennen Ihre Anlage nicht. Und bei Unfällen durch herabfallende
                Äste oder rutschiges Laub haften Sie als Eigentümer.
              </p>
              <p>
                <strong className="text-[#012956]">Mit FIMI haben Sie einen Partner</strong>, der
                Ihre Außenanlagen kennt, regelmäßig pflegt und alles dokumentiert. Feste Teams,
                feste Termine, fester Ansprechpartner. Das ganze Jahr.
              </p>
            </div>
            <div className="mt-6 sm:mt-8 flex flex-wrap gap-3 sm:gap-4">
              <Link
                href="/leistungen/winterdienst"
                className="inline-flex items-center gap-1.5 sm:gap-2 border-2 border-[#109387] text-[#109387] font-bold hover:bg-[#109387] hover:text-white px-3 sm:px-4 py-2 rounded-[6px] transition-all text-sm sm:text-base"
              >
                Winterdienst
                <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5" />
              </Link>
              <Link
                href="/leistungen/hausmeisterservice"
                className="inline-flex items-center gap-1.5 sm:gap-2 border-2 border-[#109387] text-[#109387] font-bold hover:bg-[#109387] hover:text-white px-3 sm:px-4 py-2 rounded-[6px] transition-all text-sm sm:text-base"
              >
                Hausmeisterservice
                <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5" />
              </Link>
              <Link
                href="/leistungen/facility-management"
                className="inline-flex items-center gap-1.5 sm:gap-2 border-2 border-[#109387] text-[#109387] font-bold hover:bg-[#109387] hover:text-white px-3 sm:px-4 py-2 rounded-[6px] transition-all text-sm sm:text-base"
              >
                Facility Management
                <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5" />
              </Link>
            </div>
          </div>
        </div>

        {/* Leistungsbereiche Grid - OUTLINED ICONS */}
        <div className="mb-12 sm:mb-16 lg:mb-28">
          <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold text-[#012956] mb-6 sm:mb-8 lg:mb-10">
            Diese Leistungen sind enthalten
          </h3>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5 lg:gap-6">
            {leistungsbereiche.map((bereich) => {
              const Icon = bereich.icon
              const content = (
                <div
                  className="group bg-[#f8f9fa] p-4 sm:p-5 lg:p-6 rounded-[6px] hover:bg-[#012956] transition-all duration-300 h-full"
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
                  {bereich.link && (
                    <div className="mt-3 flex items-center gap-1 text-[#109387] group-hover:text-white font-bold text-xs sm:text-sm">
                      <span>Mehr erfahren</span>
                      <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                    </div>
                  )}
                </div>
              )

              if (bereich.link) {
                return (
                  <Link key={bereich.titel} href={bereich.link}>
                    {content}
                  </Link>
                )
              }

              return <div key={bereich.titel}>{content}</div>
            })}
          </div>
        </div>

        {/* Intervalle Section */}
        <div className="grid lg:grid-cols-2 gap-8 sm:gap-10 lg:gap-16 items-center">
          {/* Content */}
          <div>
            <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold text-[#012956] mb-4 sm:mb-6">
              Pflegeintervalle nach Ihrem Bedarf
            </h3>
            <p className="text-sm sm:text-base text-gray-700 font-semibold leading-relaxed mb-5 sm:mb-8">
              Ein Autohaus braucht häufigere Pflege als ein Lagergebäude. Wir erstellen
              gemeinsam mit Ihnen einen Pflegeplan, der zu Ihrer Nutzung passt – und zu Ihrem Budget.
            </p>
            <div className="space-y-3 sm:space-y-4">
              {zielgruppen.map((intervall) => (
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
              src="https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?q=80&w=2670&auto=format&fit=crop"
              alt="Gepflegter Eingangsbereich eines Bürogebäudes mit Grünflächen"
              fill
              className="object-cover"
            />
          </div>
        </div>

      </div>
    </section>
  )
}
