'use client'

import { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { ArrowRight, MapPin, Clock, CheckCircle } from 'lucide-react'

const staedte = [
  {
    id: 'landshut',
    name: 'Landshut',
    headline: 'Glasreinigung in Landshut',
    beschreibung: 'Als Landshuter Unternehmen sind wir schnell vor Ort. Glasfassaden in der Innenstadt, Bürogebäude in Ergolding und Gewerbegebiete in der Umgebung.',
    anfahrt: '< 30 Min',
    vorteile: ['Hauptsitz – schnellste Reaktionszeit', 'Lokale Teams', 'Flexible Termine'],
  },
  {
    id: 'muenchen',
    name: 'München',
    headline: 'Glasreinigung in München',
    beschreibung: 'Professionelle Glasreinigung in der Landeshauptstadt. Von Hochhausfassaden im Werksviertel bis zu Schaufenstern in der Maximilianstraße.',
    anfahrt: '< 60 Min',
    vorteile: ['Erfahrung mit Hochhausfassaden', 'Wochenend-Service', 'Alle Stadtteile'],
  },
  {
    id: 'regensburg',
    name: 'Regensburg',
    headline: 'Glasreinigung in Regensburg',
    beschreibung: 'Von der UNESCO-Altstadt bis zum Gewerbepark. Wir reinigen historische Glasfronten genauso sorgfältig wie moderne Glasfassaden.',
    anfahrt: '< 45 Min',
    vorteile: ['Denkmalschutz-Erfahrung', 'Industriereinigung', 'Schnell über A3'],
  },
  {
    id: 'ingolstadt',
    name: 'Ingolstadt',
    headline: 'Glasreinigung in Ingolstadt',
    beschreibung: 'Glasreinigung auf Industrieniveau. Für Automotive-Zulieferer, Bürokomplexe und den Einzelhandel in Ingolstadt.',
    anfahrt: '< 50 Min',
    vorteile: ['Automotive-Erfahrung', 'Flexible Schichten', 'ISO-Standards'],
  },
  {
    id: 'freising',
    name: 'Freising',
    headline: 'Glasreinigung in Freising',
    beschreibung: 'Zuverlässige Glasreinigung im Landkreis Freising. Nähe zum Flughafen München stellt besondere Anforderungen – wir erfüllen sie.',
    anfahrt: '< 40 Min',
    vorteile: ['Flughafen-Nähe', 'Forschungseinrichtungen', 'Garantierte Termine'],
  },
  {
    id: 'erding',
    name: 'Erding',
    headline: 'Glasreinigung in Erding',
    beschreibung: 'Glasreinigung für den wachsenden Landkreis Erding. Gewerbebetriebe, Hotels und öffentliche Einrichtungen.',
    anfahrt: '< 35 Min',
    vorteile: ['Lokale Präsenz', 'Hotel-Erfahrung', 'Langfristige Partner'],
  },
  {
    id: 'straubing',
    name: 'Straubing',
    headline: 'Glasreinigung in Straubing',
    beschreibung: 'Professionelle Glasreinigung in der Gäuboden-Metropole. Industrie am Hafen, Handel in der Innenstadt.',
    anfahrt: '< 50 Min',
    vorteile: ['Niederbayern-verwurzelt', 'Industriereinigung', 'Ganzjähriger Service'],
  },
  {
    id: 'passau',
    name: 'Passau',
    headline: 'Glasreinigung in Passau',
    beschreibung: 'Glasreinigung in der Dreiflüssestadt bis zur österreichischen Grenze. Hotels, Büros und Gewerbeobjekte.',
    anfahrt: '< 70 Min',
    vorteile: ['Bis Österreich-Grenze', 'Hotellerie-Fokus', 'Mehrsprachige Teams'],
  },
]

export default function RegionenSection() {
  const [activeStadt, setActiveStadt] = useState(staedte[0])

  return (
    <section id="regionen" className="py-12 sm:py-16 lg:py-28 bg-[#f8f9fa]">
      <div className="w-full max-w-[1800px] mx-auto px-4 sm:px-6 md:px-8 lg:px-12 xl:px-20">

        {/* Header */}
        <div className="max-w-3xl mb-8 sm:mb-12">
          <span className="text-[#109387] font-bold text-xs sm:text-sm uppercase tracking-wide mb-3 sm:mb-4 block">
            Einzugsgebiet
          </span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-[#012956] leading-tight mb-4 sm:mb-6">
            Glasreinigung in ganz Bayern
          </h2>
          <p className="text-base sm:text-lg text-gray-600 font-semibold leading-relaxed">
            Von Landshut aus betreuen wir Kunden in ganz Bayern. Kurze Wege, schnelle Reaktionszeiten.
          </p>
        </div>

        {/* Stadt-Tabs */}
        <div className="flex flex-wrap gap-2 sm:gap-3 mb-6 sm:mb-8">
          {staedte.map((stadt) => (
            <button
              key={stadt.id}
              onClick={() => setActiveStadt(stadt)}
              className={`px-3 sm:px-4 py-2 rounded-[6px] font-bold text-sm transition-all ${
                activeStadt.id === stadt.id
                  ? 'bg-[#012956] text-white'
                  : 'bg-white text-[#012956] hover:bg-[#e9ecef]'
              }`}
            >
              {stadt.name}
            </button>
          ))}
        </div>

        {/* Content Grid */}
        <div className="grid lg:grid-cols-2 gap-6 sm:gap-8 lg:gap-12">

          {/* Karte */}
          <div className="relative">
            <div className="rounded-[6px] overflow-hidden">
              <Image
                src="/images/home/staedte-fimi.avif"
                alt="FIMI Gebäudereinigung - Glasreinigung Einzugsgebiet Bayern"
                width={1200}
                height={900}
                className="w-full h-auto block"
              />
            </div>
            {/* Badge direkt unter dem Bild */}
            <div className="bg-[#012956] px-4 sm:px-6 py-3 sm:py-4 rounded-b-[6px] -mt-[6px]">
              <div className="flex items-center gap-3">
                <MapPin className="w-5 h-5 text-[#109387] flex-shrink-0" />
                <div>
                  <p className="text-white font-bold text-sm sm:text-base">Hauptsitz: Landshut</p>
                  <p className="text-white/60 text-xs sm:text-sm">Kellerstr. 39, 84036 Landshut</p>
                </div>
              </div>
            </div>
          </div>

          {/* Stadt-Details */}
          <div className="bg-white rounded-[6px] p-5 sm:p-6 lg:p-8">
            <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold text-[#012956] mb-2">
              {activeStadt.headline}
            </h3>

            <div className="flex items-center gap-2 mb-4 sm:mb-6">
              <Clock className="w-4 h-4 text-[#109387]" />
              <span className="text-[#109387] font-bold text-sm">
                Anfahrt: {activeStadt.anfahrt}
              </span>
            </div>

            <p className="text-gray-600 font-semibold leading-relaxed mb-6 text-sm sm:text-base">
              {activeStadt.beschreibung}
            </p>

            {/* Vorteile */}
            <div className="mb-6 sm:mb-8">
              <h4 className="text-sm text-gray-500 font-semibold uppercase tracking-wide mb-3">
                Ihre Vorteile in {activeStadt.name}
              </h4>
              <ul className="space-y-2">
                {activeStadt.vorteile.map((vorteil, index) => (
                  <li key={index} className="flex items-center gap-2 text-gray-700 font-semibold text-sm sm:text-base">
                    <CheckCircle className="w-4 h-4 text-[#109387] flex-shrink-0" />
                    {vorteil}
                  </li>
                ))}
              </ul>
            </div>

            {/* Leistungen Links */}
            <div className="border-t border-gray-200 pt-6">
              <h4 className="text-sm text-gray-500 font-semibold uppercase tracking-wide mb-4">
                Weitere Leistungen in {activeStadt.name}
              </h4>
              <div className="grid grid-cols-2 gap-2 sm:gap-3">
                {[
                  { name: 'Fensterreinigung', href: '/leistungen/fensterreinigung' },
                  { name: 'Fassadenreinigung', href: '/leistungen/fassadenreinigung' },
                  { name: 'Büroreinigung', href: '/leistungen/bueroreinigung' },
                  { name: 'Unterhaltsreinigung', href: '/leistungen/unterhaltsreinigung' },
                ].map((leistung) => (
                  <Link
                    key={leistung.href}
                    href={leistung.href}
                    className="flex items-center gap-1.5 text-[#109387] font-semibold text-sm hover:text-[#012956] transition-colors group"
                  >
                    <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
                    {leistung.name}
                  </Link>
                ))}
              </div>
            </div>

            {/* CTA */}
            <a
              href="#kontakt"
              className="mt-6 flex items-center justify-center gap-2 bg-[#109387] hover:bg-[#0d7d72] text-white font-bold py-3 sm:py-4 rounded-[6px] transition-colors group text-sm sm:text-base"
            >
              Glasreinigung in {activeStadt.name} anfragen
              <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 group-hover:translate-x-1 transition-transform" />
            </a>
          </div>

        </div>

      </div>
    </section>
  )
}
