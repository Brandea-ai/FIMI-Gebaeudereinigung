'use client'

import { useState } from 'react'
import { MapPin, ArrowRight, Check } from 'lucide-react'

const staedte = [
  {
    id: 'landshut',
    name: 'Landshut',
    headline: 'Außenanlagenpflege in Landshut',
    subline: 'Unser Heimatstandort – schnell vor Ort',
    beschreibung: 'Als Landshuter Unternehmen kennen wir die Region wie unsere Westentasche. Ob Wohnanlage in der Altstadt, Gewerbeobjekt im Industriegebiet oder Firmengelände in Ergolding – wir sind in 30 Minuten bei Ihnen. Kurze Wege, schnelle Reaktionszeiten, persönlicher Service.',
    vorteile: [
      'Anfahrt innerhalb von 30 Minuten',
      'Lokale Teams aus der Region',
      'Notfallservice in 2 Stunden',
      'Über 50 Objekte in Landshut betreut',
    ],
  },
  {
    id: 'muenchen',
    name: 'München',
    headline: 'Außenanlagenpflege in München',
    subline: 'Professionelle Grünpflege für die Landeshauptstadt',
    beschreibung: 'München stellt hohe Ansprüche – an Immobilien und ihre Außenanlagen. Wir betreuen Bürokomplexe im Werksviertel, Wohnanlagen in Schwabing, Gewerbeflächen im Münchner Norden und repräsentative Eingangsbereiche in der Innenstadt. Diskret, zuverlässig, nach Ihren Vorgaben.',
    vorteile: [
      'Teams in allen Stadtteilen',
      'Erfahrung mit Großobjekten',
      'Wochenend-Einsätze möglich',
      'Dokumentation für Hausverwaltungen',
    ],
  },
  {
    id: 'regensburg',
    name: 'Regensburg',
    headline: 'Außenanlagenpflege in Regensburg',
    subline: 'Von der Altstadt bis zum Gewerbepark',
    beschreibung: 'Regensburg verbindet UNESCO-Welterbe mit modernem Gewerbe. Wir pflegen historische Innenhöfe in der Altstadt genauso sorgfältig wie Außenanlagen im Gewerbepark Regensburg. Unsere Teams kennen die besonderen Anforderungen der Region.',
    vorteile: [
      'Erfahrung mit denkmalgeschützten Anlagen',
      'Großflächenpflege im Gewerbepark',
      'Schnell erreichbar über A3/A93',
      'Flexible Pflegeintervalle',
    ],
  },
  {
    id: 'ingolstadt',
    name: 'Ingolstadt',
    headline: 'Außenanlagenpflege in Ingolstadt',
    subline: 'Industriestandard für den Automotive-Standort',
    beschreibung: 'Am Automobilstandort Ingolstadt werden hohe Standards erwartet – auch bei der Außenanlagenpflege. Wir betreuen Zulieferer, Bürokomplexe und Gewerbeimmobilien mit der Präzision und Zuverlässigkeit, die hier selbstverständlich ist.',
    vorteile: [
      'Erfahrung mit Automotive-Zulieferern',
      'Großflächen bis 50.000 m²',
      'Flexible Schichtmodelle',
      'ISO-konforme Dokumentation',
    ],
  },
  {
    id: 'freising',
    name: 'Freising',
    headline: 'Außenanlagenpflege in Freising',
    subline: 'Zwischen Flughafen und Weihenstephan',
    beschreibung: 'Freising wächst – und mit ihm der Bedarf an professioneller Außenanlagenpflege. Die Nähe zum Flughafen München bringt internationale Unternehmen, die Universität Weihenstephan Forschungseinrichtungen. Wir betreuen beide mit der gleichen Sorgfalt.',
    vorteile: [
      'Nähe zum Flughafen München',
      'Erfahrung mit Forschungseinrichtungen',
      'Umweltschonende Pflegemethoden',
      'Regelmäßige Qualitätskontrollen',
    ],
  },
  {
    id: 'erding',
    name: 'Erding',
    headline: 'Außenanlagenpflege in Erding',
    subline: 'Professionelle Pflege im wachsenden Landkreis',
    beschreibung: 'Der Landkreis Erding boomt. Neue Wohnanlagen, expandierende Gewerbegebiete, Hotels nahe der Therme – alle brauchen gepflegte Außenanlagen. Wir sind seit Jahren in der Region verwurzelt und kennen die lokalen Anforderungen.',
    vorteile: [
      'Lokale Präsenz im Landkreis',
      'Hotel- und Gastronomie-Erfahrung',
      'Ganzjährige Betreuung inkl. Winter',
      'Langfristige Partnerschaften',
    ],
  },
  {
    id: 'straubing',
    name: 'Straubing',
    headline: 'Außenanlagenpflege in Straubing',
    subline: 'Gäuboden-Metropole professionell betreut',
    beschreibung: 'Straubing ist das Zentrum Niederbayerns – mit Hafen, Industriegebiet und lebendiger Innenstadt. Wir pflegen Außenanlagen für Logistikunternehmen am Hafen, Gewerbebetriebe im Industriegebiet und Geschäftshäuser in der Stadt.',
    vorteile: [
      'Verwurzelt in Niederbayern',
      'Großflächen-Pflege am Hafen',
      'Messe-Vorbereitung Gäubodenvolksfest',
      'Ganzjähriger Service',
    ],
  },
  {
    id: 'passau',
    name: 'Passau',
    headline: 'Außenanlagenpflege in Passau',
    subline: 'Dreiflüssestadt an der Grenze',
    beschreibung: 'Passau an der österreichischen Grenze ist bekannt für seine einzigartige Lage. Wir betreuen hier Außenanlagen von Hotels, Universitätsgebäuden und Gewerbeimmobilien. Die besonderen topografischen Herausforderungen meistern wir mit Erfahrung.',
    vorteile: [
      'Erfahrung mit Hanglagen',
      'Hotel- und Tourismus-Kompetenz',
      'Universitäts-Referenzen',
      'Grenznaher Service',
    ],
  },
]

export default function RegionenSection() {
  const [activeStadt, setActiveStadt] = useState('landshut')

  const aktiveStadt = staedte.find((s) => s.id === activeStadt) || staedte[0]

  return (
    <section id="regionen" className="py-12 sm:py-16 lg:py-28 bg-white">
      <div className="w-full max-w-[1800px] mx-auto px-4 sm:px-6 md:px-8 lg:px-12 xl:px-20">

        {/* Section Header */}
        <div className="max-w-4xl mb-10 sm:mb-14 lg:mb-16">
          <p className="text-xs sm:text-sm text-[#109387] font-bold uppercase tracking-wide mb-2 sm:mb-3">
            Regional verwurzelt
          </p>
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-[#012956] leading-[1.1] mb-4 sm:mb-6">
            Außenanlagenpflege in ganz Bayern
          </h2>
          <p className="text-sm sm:text-base lg:text-lg text-gray-700 font-semibold leading-relaxed">
            Von Landshut aus betreuen wir Kunden in ganz Bayern. Kurze Wege bedeuten
            schnelle Reaktionszeiten und Teams, die Ihre Region kennen. Klicken Sie auf
            Ihre Stadt für mehr Informationen.
          </p>
        </div>

        {/* Stadt-Auswahl Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-8 gap-2 sm:gap-3 mb-8 sm:mb-10 lg:mb-12">
          {staedte.map((stadt) => (
            <button
              key={stadt.id}
              onClick={() => setActiveStadt(stadt.id)}
              className={`px-3 sm:px-4 py-3 sm:py-4 rounded-[6px] font-bold text-sm sm:text-base transition-all duration-300 ${
                stadt.id === activeStadt
                  ? 'bg-[#109387] text-white shadow-lg'
                  : 'bg-[#f8f9fa] text-[#012956] hover:bg-[#012956] hover:text-white'
              }`}
            >
              {stadt.name}
            </button>
          ))}
        </div>

        {/* Aktive Stadt Detail */}
        <div className="grid lg:grid-cols-5 gap-6 sm:gap-8 lg:gap-10">
          {/* Left: Content (3 cols) */}
          <div className="lg:col-span-3 bg-[#f8f9fa] rounded-[12px] p-6 sm:p-8 lg:p-10">
            <div className="flex items-start gap-4 mb-6">
              <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-[6px] bg-[#109387] flex items-center justify-center flex-shrink-0">
                <MapPin className="w-6 h-6 sm:w-7 sm:h-7 text-white" />
              </div>
              <div>
                <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold text-[#012956]">
                  {aktiveStadt.headline}
                </h3>
                <p className="text-[#109387] font-semibold text-sm sm:text-base">
                  {aktiveStadt.subline}
                </p>
              </div>
            </div>

            <p className="text-gray-700 font-semibold leading-relaxed mb-6 text-sm sm:text-base">
              {aktiveStadt.beschreibung}
            </p>

            <a
              href="#kontakt"
              className="inline-flex items-center gap-2 bg-[#109387] hover:bg-[#0d7d72] text-white font-bold px-5 sm:px-6 py-2.5 sm:py-3 rounded-[6px] transition-colors text-sm sm:text-base"
            >
              Angebot für {aktiveStadt.name} anfragen
              <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5" />
            </a>
          </div>

          {/* Right: Vorteile (2 cols) */}
          <div className="lg:col-span-2">
            <h4 className="text-lg sm:text-xl font-bold text-[#012956] mb-4 sm:mb-6">
              Ihre Vorteile in {aktiveStadt.name}
            </h4>
            <div className="space-y-3">
              {aktiveStadt.vorteile.map((vorteil, index) => (
                <div
                  key={index}
                  className="flex items-start gap-3 bg-white rounded-[6px] p-3 sm:p-4 shadow-sm"
                >
                  <div className="w-6 h-6 rounded-full bg-[#109387]/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <Check className="w-3.5 h-3.5 text-[#109387]" />
                  </div>
                  <span className="text-gray-700 font-semibold text-sm sm:text-base">
                    {vorteil}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom: Weitere Regionen */}
        <div className="mt-10 sm:mt-12 lg:mt-16 text-center">
          <p className="text-gray-600 font-semibold mb-4 text-sm sm:text-base">
            Ihre Stadt ist nicht dabei? Wir betreuen auch weitere Regionen in Bayern.
          </p>
          <a
            href="#kontakt"
            className="inline-flex items-center gap-2 border-2 border-[#109387] text-[#109387] hover:bg-[#109387] hover:text-white font-bold px-6 py-3 rounded-[6px] transition-all text-sm sm:text-base"
          >
            Standort anfragen
            <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5" />
          </a>
        </div>

      </div>
    </section>
  )
}
