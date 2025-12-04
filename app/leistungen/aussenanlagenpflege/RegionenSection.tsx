'use client'

import { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { ArrowRight, MapPin, Clock, CheckCircle } from 'lucide-react'

const staedte = [
  {
    id: 'landshut',
    name: 'Landshut',
    headline: 'Außenanlagenpflege in Landshut',
    beschreibung: 'Als Landshuter Unternehmen sind wir schnell vor Ort. Außenanlagenpflege für Gewerbeobjekte in der Altstadt, Industriegebiete in Ergolding und Wohnanlagen in der Umgebung.',
    anfahrt: '< 30 Min',
    vorteile: ['Hauptsitz – schnellste Reaktionszeit', 'Lokale Teams aus der Region', 'Notfallservice in 2 Stunden'],
  },
  {
    id: 'muenchen',
    name: 'München',
    headline: 'Außenanlagenpflege in München',
    beschreibung: 'Professionelle Grünpflege in der Landeshauptstadt. Von Bürokomplexen im Werksviertel bis zu Wohnanlagen in Schwabing und Gewerbeflächen im Münchner Norden.',
    anfahrt: '< 60 Min',
    vorteile: ['Teams in allen Stadtteilen', 'Erfahrung mit Großobjekten', 'Wochenend-Einsätze möglich'],
  },
  {
    id: 'regensburg',
    name: 'Regensburg',
    headline: 'Außenanlagenpflege in Regensburg',
    beschreibung: 'Von der UNESCO-Altstadt bis zum Gewerbepark. Wir pflegen historische Innenhöfe genauso sorgfältig wie moderne Gewerbeflächen.',
    anfahrt: '< 45 Min',
    vorteile: ['Erfahrung mit denkmalgeschützten Anlagen', 'Großflächenpflege im Gewerbepark', 'Schnell erreichbar über A3/A93'],
  },
  {
    id: 'ingolstadt',
    name: 'Ingolstadt',
    headline: 'Außenanlagenpflege in Ingolstadt',
    beschreibung: 'Außenanlagenpflege auf Industrieniveau. Für Automotive-Zulieferer, Bürokomplexe und repräsentative Eingangsbereiche in Ingolstadt.',
    anfahrt: '< 50 Min',
    vorteile: ['Erfahrung mit Automotive-Zulieferern', 'Großflächen bis 50.000 m²', 'ISO-konforme Dokumentation'],
  },
  {
    id: 'freising',
    name: 'Freising',
    headline: 'Außenanlagenpflege in Freising',
    beschreibung: 'Zuverlässige Grünpflege im Landkreis Freising. Nähe zum Flughafen München stellt besondere Anforderungen – wir erfüllen sie.',
    anfahrt: '< 40 Min',
    vorteile: ['Nähe zum Flughafen München', 'Erfahrung mit Forschungseinrichtungen', 'Umweltschonende Pflegemethoden'],
  },
  {
    id: 'erding',
    name: 'Erding',
    headline: 'Außenanlagenpflege in Erding',
    beschreibung: 'Außenanlagenpflege für den wachsenden Landkreis Erding. Gewerbebetriebe, Hotels nahe der Therme und öffentliche Einrichtungen.',
    anfahrt: '< 35 Min',
    vorteile: ['Lokale Präsenz im Landkreis', 'Hotel- und Gastronomie-Erfahrung', 'Ganzjährige Betreuung inkl. Winter'],
  },
  {
    id: 'straubing',
    name: 'Straubing',
    headline: 'Außenanlagenpflege in Straubing',
    beschreibung: 'Professionelle Grünpflege in der Gäuboden-Metropole. Logistikunternehmen am Hafen, Gewerbebetriebe im Industriegebiet und Geschäftshäuser in der Stadt.',
    anfahrt: '< 50 Min',
    vorteile: ['Verwurzelt in Niederbayern', 'Großflächen-Pflege am Hafen', 'Ganzjähriger Service'],
  },
  {
    id: 'passau',
    name: 'Passau',
    headline: 'Außenanlagenpflege in Passau',
    beschreibung: 'Grünpflege in der Dreiflüssestadt bis zur österreichischen Grenze. Hotels, Universitätsgebäude und Gewerbeimmobilien mit besonderen topografischen Anforderungen.',
    anfahrt: '< 70 Min',
    vorteile: ['Erfahrung mit Hanglagen', 'Hotel- und Tourismus-Kompetenz', 'Universitäts-Referenzen'],
  },
]

export default function RegionenSection() {
  const [activeStadt, setActiveStadt] = useState(staedte[0])

  return (
    <section id="regionen" className="py-12 sm:py-16 lg:py-28 bg-white">
      <div className="w-full max-w-[1800px] mx-auto px-4 sm:px-6 md:px-8 lg:px-12 xl:px-20">

        {/* Header */}
        <div className="max-w-3xl mb-8 sm:mb-12">
          <span className="text-[#109387] font-bold text-xs sm:text-sm uppercase tracking-wide mb-3 sm:mb-4 block">
            Einzugsgebiet
          </span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-[#012956] leading-tight mb-4 sm:mb-6 whitespace-nowrap">
            Außenanlagenpflege in ganz Bayern
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
                  : 'bg-[#f8f9fa] text-[#012956] hover:bg-[#e9ecef]'
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
                alt="FIMI Gebäudereinigung - Außenanlagenpflege Einzugsgebiet Bayern"
                width={1200}
                height={900}
                className="w-full h-auto block"
              />
            </div>
            {/* Badge über dem Bild (absolute positioned) */}
            <div className="absolute bottom-4 left-4 sm:bottom-6 sm:left-6 bg-[#012956] px-4 sm:px-6 py-3 sm:py-4 rounded-[6px]">
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
          <div className="bg-[#f8f9fa] rounded-[6px] p-5 sm:p-6 lg:p-8">
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
                Unsere Leistungen in {activeStadt.name}
              </h4>
              <div className="grid grid-cols-2 gap-2 sm:gap-3">
                {[
                  { name: 'Außenanlagenpflege', href: '/leistungen/aussenanlagenpflege' },
                  { name: 'Winterdienst', href: '/leistungen/winterdienst' },
                  { name: 'Hausmeisterservice', href: '/leistungen/hausmeisterservice' },
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
              Außenanlagenpflege in {activeStadt.name} anfragen
              <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 group-hover:translate-x-1 transition-transform" />
            </a>
          </div>

        </div>

      </div>
    </section>
  )
}
