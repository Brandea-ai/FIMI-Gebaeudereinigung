'use client'

import { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { MapPin, ArrowRight, Building2, Factory, Sparkles, Wrench } from 'lucide-react'

// Städte mit Koordinaten für Marker-Position (prozentual auf dem Bild)
const staedte = [
  {
    id: 'landshut',
    name: 'Landshut',
    position: { x: 62, y: 52 }, // Position auf der Karte
    headline: 'Gebäudereinigung Landshut',
    subline: 'Ihr lokaler Partner seit 8+ Jahren',
    beschreibung: 'Als Landshuter Unternehmen kennen wir die Anforderungen der regionalen Wirtschaft. Von der Altstadt bis zum Industriegebiet Ergolding betreuen wir Unternehmen jeder Größe mit maßgeschneiderten Reinigungskonzepten.',
    vorteile: [
      'Kurze Anfahrtswege in Landshut und Umgebung',
      'Persönliche Betreuung durch lokale Teams',
      'Flexible Einsatzzeiten für Ihre Bedürfnisse',
      'Notfallservice innerhalb von 2 Stunden',
    ],
  },
  {
    id: 'muenchen',
    name: 'München',
    position: { x: 48, y: 62 },
    headline: 'Gebäudereinigung München',
    subline: 'Professionelle Reinigung in der Landeshauptstadt',
    beschreibung: 'München stellt höchste Ansprüche an Sauberkeit und Professionalität. Wir bedienen Bürokomplexe im Werksviertel, Praxen in Schwabing und Produktionsstätten im Münchner Norden mit dem gleichen Qualitätsanspruch.',
    vorteile: [
      'Erfahrung mit Münchner Großprojekten',
      'Teams in allen Stadtteilen verfügbar',
      'Reinigung auch am Wochenende möglich',
      'Spezialisten für Büro- und Praxisreinigung',
    ],
  },
  {
    id: 'regensburg',
    name: 'Regensburg',
    position: { x: 72, y: 38 },
    headline: 'Gebäudereinigung Regensburg',
    subline: 'Von der Altstadt bis zum Gewerbepark',
    beschreibung: 'Regensburg verbindet UNESCO-Welterbe mit moderner Industrie. Unsere Teams reinigen sowohl historische Gebäude in der Altstadt als auch High-Tech-Produktionsstätten im Gewerbepark Regensburg.',
    vorteile: [
      'Erfahrung mit denkmalgeschützten Gebäuden',
      'Industriereinigung für den Gewerbepark',
      'Schnelle Erreichbarkeit über die A3',
      'Regelmäßige Qualitätskontrollen vor Ort',
    ],
  },
  {
    id: 'ingolstadt',
    name: 'Ingolstadt',
    position: { x: 55, y: 45 },
    headline: 'Gebäudereinigung Ingolstadt',
    subline: 'Industriestandort mit höchsten Standards',
    beschreibung: 'Ingolstadt als Automobilstandort verlangt Präzision und Zuverlässigkeit. Wir arbeiten für Zulieferer, Bürokomplexe und Einzelhandel mit den gleichen hohen Standards, die die Industrie hier gewohnt ist.',
    vorteile: [
      'Erfahrung mit Automotive-Zulieferern',
      'Reinraumreinigung nach Industriestandard',
      'Flexible Schichtmodelle möglich',
      'Zertifizierte Reinigungsprozesse',
    ],
  },
  {
    id: 'freising',
    name: 'Freising',
    position: { x: 52, y: 55 },
    headline: 'Gebäudereinigung Freising',
    subline: 'Zwischen Flughafen und Wissenschaft',
    beschreibung: 'Freising mit dem Flughafen München und der TU München stellt besondere Anforderungen. Wir reinigen Büros, Forschungseinrichtungen und gewerbliche Objekte im gesamten Landkreis.',
    vorteile: [
      'Nähe zum Flughafen München',
      'Erfahrung mit Forschungseinrichtungen',
      'Schnelle Reaktionszeiten garantiert',
      'Umweltschonende Reinigungsmittel',
    ],
  },
  {
    id: 'erding',
    name: 'Erding',
    position: { x: 58, y: 58 },
    headline: 'Gebäudereinigung Erding',
    subline: 'Vom Fliegerhorst bis zur Therme',
    beschreibung: 'Erding wächst und mit ihm die Nachfrage nach professioneller Gebäudereinigung. Wir betreuen Gewerbebetriebe, Hotels und öffentliche Einrichtungen im gesamten Landkreis Erding.',
    vorteile: [
      'Lokale Präsenz im Landkreis Erding',
      'Erfahrung mit Hotellerie und Gastronomie',
      'Winterdienst für Gewerbeflächen',
      'Langfristige Partnerschaften',
    ],
  },
  {
    id: 'straubing',
    name: 'Straubing',
    position: { x: 78, y: 45 },
    headline: 'Gebäudereinigung Straubing',
    subline: 'Gäuboden-Metropole professionell betreut',
    beschreibung: 'Straubing als Zentrum des Gäubodens vereint Tradition und Moderne. Unsere Reinigungsteams kennen die regionalen Besonderheiten und arbeiten für Industrie, Handel und öffentliche Auftraggeber.',
    vorteile: [
      'Regionale Verwurzelung in Niederbayern',
      'Industriereinigung für den Hafen Straubing',
      'Messevorbereitung für das Gäubodenvolksfest',
      'Ganzjähriger Gebäudeservice',
    ],
  },
  {
    id: 'passau',
    name: 'Passau',
    position: { x: 90, y: 55 },
    headline: 'Gebäudereinigung Passau',
    subline: 'Dreiflüssestadt mit Qualitätsanspruch',
    beschreibung: 'Passau an der Grenze zu Österreich ist unser östlichster Standort in Bayern. Wir reinigen Büros, Hotels und Gewerbeobjekte in der gesamten Region Passau bis zur Landesgrenze.',
    vorteile: [
      'Abdeckung bis zur österreichischen Grenze',
      'Erfahrung mit Hotellerie und Tourismus',
      'Hochwassersichere Notfallplanung',
      'Mehrsprachige Teams verfügbar',
    ],
  },
]

// Services für die Links
const services = [
  { name: 'Unterhaltsreinigung', href: '/leistungen/unterhaltsreinigung', icon: Building2 },
  { name: 'Büroreinigung', href: '/leistungen/bueroreinigung', icon: Building2 },
  { name: 'Industriereinigung', href: '/leistungen/industriereinigung', icon: Factory },
  { name: 'Fensterreinigung', href: '/leistungen/fensterreinigung', icon: Sparkles },
  { name: 'Facility Management', href: '/leistungen/facility-management', icon: Wrench },
  { name: 'Winterdienst', href: '/leistungen/winterdienst', icon: Sparkles },
  { name: 'Hausmeisterservice', href: '/leistungen/hausmeisterservice', icon: Wrench },
  { name: 'Baureinigung', href: '/leistungen/baureinigung', icon: Factory },
]

export default function RegionenContainer() {
  const [activeStadt, setActiveStadt] = useState(staedte[0])

  return (
    <section
      id="regionen"
      className="py-20 lg:py-28 bg-white"
      aria-labelledby="regionen-heading"
    >
      <div className="w-full max-w-[1800px] mx-auto px-6 lg:px-12 xl:px-20">

        {/* Header */}
        <header className="mb-12 lg:mb-16">
          <h2
            id="regionen-heading"
            className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#109387] leading-[1.1] mb-4"
          >
            Gebäudereinigung in ganz Bayern
          </h2>
          <p className="text-lg text-gray-700 font-semibold max-w-3xl">
            Von Landshut aus betreuen wir Unternehmen in ganz Bayern.
            Kurze Wege, schnelle Reaktionszeiten und lokale Teams vor Ort.
          </p>
        </header>

        {/* Main Content: Map + Tabs */}
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-start">

          {/* Left: Map with Markers */}
          <div className="relative">
            <div className="relative aspect-[4/5] lg:aspect-[3/4] rounded-[6px] overflow-hidden bg-[#f8f9fa]">
              <Image
                src="/images/home/städte für fimi.avif"
                alt="Bayern Karte mit FIMI Servicegebieten"
                fill
                className="object-contain"
                priority
              />

              {/* Animated Markers */}
              {staedte.map((stadt) => (
                <button
                  key={stadt.id}
                  onClick={() => setActiveStadt(stadt)}
                  className={`absolute transform -translate-x-1/2 -translate-y-1/2 transition-all duration-300 group z-10
                    ${activeStadt.id === stadt.id ? 'scale-125' : 'scale-100 hover:scale-110'}`}
                  style={{ left: `${stadt.position.x}%`, top: `${stadt.position.y}%` }}
                  aria-label={`${stadt.name} auswählen`}
                >
                  {/* Pulse Animation for Active */}
                  {activeStadt.id === stadt.id && (
                    <span className="absolute inset-0 rounded-full bg-[#109387] animate-ping opacity-30" />
                  )}

                  {/* Marker */}
                  <span
                    className={`relative flex items-center justify-center w-8 h-8 lg:w-10 lg:h-10 rounded-full border-2 transition-all duration-300
                      ${activeStadt.id === stadt.id
                        ? 'bg-[#109387] border-[#109387] text-white shadow-lg'
                        : 'bg-white border-[#012956] text-[#012956] hover:bg-[#012956] hover:text-white'
                      }`}
                  >
                    <MapPin size={16} className="lg:w-5 lg:h-5" />
                  </span>

                  {/* City Label */}
                  <span
                    className={`absolute top-full left-1/2 -translate-x-1/2 mt-1 text-xs lg:text-sm font-bold whitespace-nowrap transition-all duration-300
                      ${activeStadt.id === stadt.id ? 'text-[#109387]' : 'text-[#012956]'}`}
                  >
                    {stadt.name}
                  </span>
                </button>
              ))}
            </div>
          </div>

          {/* Right: Tabs + Content */}
          <div>
            {/* City Tabs */}
            <div
              className="grid grid-cols-4 gap-2 mb-8"
              role="tablist"
              aria-label="Städte auswählen"
            >
              {staedte.map((stadt) => (
                <button
                  key={stadt.id}
                  onClick={() => setActiveStadt(stadt)}
                  role="tab"
                  aria-selected={activeStadt.id === stadt.id}
                  aria-controls={`panel-${stadt.id}`}
                  className={`px-3 py-3 lg:px-4 lg:py-4 rounded-[6px] border-2 font-bold text-sm lg:text-base transition-all duration-300
                    ${activeStadt.id === stadt.id
                      ? 'border-[#012956] bg-[#012956] text-white'
                      : 'border-[#012956] bg-white text-[#109387] hover:bg-[#f8f9fa]'
                    }`}
                >
                  {stadt.name}
                </button>
              ))}
            </div>

            {/* Content Panel */}
            <article
              id={`panel-${activeStadt.id}`}
              role="tabpanel"
              aria-labelledby={`tab-${activeStadt.id}`}
              className="bg-[#f8f9fa] rounded-[6px] p-6 lg:p-8"
            >
              {/* Headline */}
              <h3 className="text-2xl lg:text-3xl font-bold text-[#109387] mb-2">
                {activeStadt.headline}
              </h3>
              <p className="text-lg text-[#012956] font-bold mb-4">
                {activeStadt.subline}
              </p>

              {/* Description - SEO Content */}
              <p className="text-gray-700 font-semibold leading-relaxed mb-6">
                {activeStadt.beschreibung}
              </p>

              {/* Vorteile */}
              <div className="mb-8">
                <h4 className="text-sm text-gray-500 font-semibold uppercase tracking-wide mb-3">
                  Ihre Vorteile in {activeStadt.name}
                </h4>
                <ul className="grid grid-cols-1 md:grid-cols-2 gap-2">
                  {activeStadt.vorteile.map((vorteil, index) => (
                    <li
                      key={index}
                      className="flex items-start gap-2 text-gray-700 font-semibold"
                    >
                      <span className="text-[#109387] mt-1">✓</span>
                      {vorteil}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Service Links - 4 left, 4 right */}
              <div className="border-t border-gray-200 pt-6">
                <h4 className="text-sm text-gray-500 font-semibold uppercase tracking-wide mb-4">
                  Unsere Leistungen in {activeStadt.name}
                </h4>
                <div className="grid grid-cols-2 gap-x-6 gap-y-2">
                  {services.map((service) => (
                    <Link
                      key={service.href}
                      href={service.href}
                      className="flex items-center gap-2 text-[#109387] font-semibold hover:text-[#012956] transition-colors group"
                    >
                      <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
                      {service.name}
                    </Link>
                  ))}
                </div>
              </div>

              {/* CTA */}
              <div className="mt-8">
                <a
                  href="#contact-form"
                  className="inline-flex items-center justify-center gap-3 bg-[#109387] hover:bg-[#0d7d72] text-white font-bold text-lg px-8 py-4 rounded-[6px] transition-all duration-300 group w-full md:w-auto"
                >
                  Kostenfreie Besichtigung in {activeStadt.name}
                  <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
                </a>
              </div>
            </article>

            {/* Trust Badge */}
            <div className="mt-6 flex items-center gap-4 text-gray-500 font-semibold">
              <div className="flex items-center gap-2">
                <MapPin size={18} className="text-[#109387]" />
                <span>8 Standorte in Bayern</span>
              </div>
              <span className="text-gray-300">|</span>
              <span>2h Reaktionszeit garantiert</span>
            </div>
          </div>

        </div>

      </div>
    </section>
  )
}
