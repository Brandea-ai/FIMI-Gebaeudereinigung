'use client'

import { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'

// Städte mit SEO-optimierten Inhalten (Keyword: "Gebäudereinigung in [Stadt]")
const staedte = [
  {
    id: 'landshut',
    name: 'Landshut',
    headline: 'Gebäudereinigung in Landshut',
    subline: 'Ihr lokaler Partner für saubere Geschäftsräume',
    beschreibung: 'Sie suchen eine zuverlässige Gebäudereinigung in Landshut? Als Landshuter Unternehmen kennen wir die Anforderungen der regionalen Wirtschaft. Ob Büroreinigung in der Altstadt, Industriereinigung im Gewerbegebiet Ergolding oder Unterhaltsreinigung für Ihr Unternehmen - wir sind schnell vor Ort und liefern konstante Qualität.',
    vorteile: [
      'Anfahrt innerhalb von 30 Minuten',
      'Lokale Teams die Ihre Räume kennen',
      'Flexible Reinigungszeiten',
      'Notfallservice in 2 Stunden',
    ],
  },
  {
    id: 'muenchen',
    name: 'München',
    headline: 'Gebäudereinigung in München',
    subline: 'Professionelle Reinigung für die Landeshauptstadt',
    beschreibung: 'Professionelle Gebäudereinigung in München mit höchsten Ansprüchen. Wir reinigen Bürokomplexe im Werksviertel, Arztpraxen in Schwabing, Produktionshallen im Münchner Norden und Geschäftsräume in der Innenstadt. Unsere Teams arbeiten diskret außerhalb Ihrer Geschäftszeiten.',
    vorteile: [
      'Erfahrung mit Münchner Großprojekten',
      'Teams in allen Stadtteilen',
      'Wochenend-Reinigung möglich',
      'Praxis- und Bürospezialisierung',
    ],
  },
  {
    id: 'regensburg',
    name: 'Regensburg',
    headline: 'Gebäudereinigung in Regensburg',
    subline: 'Von der Altstadt bis zum Gewerbepark',
    beschreibung: 'Ihre Gebäudereinigung in Regensburg - für UNESCO-Welterbe und moderne Industrie. Wir pflegen historische Gebäude in der Altstadt genauso sorgfältig wie High-Tech-Produktionsstätten im Gewerbepark. Regelmäßige Qualitätskontrollen sichern gleichbleibend hohe Standards.',
    vorteile: [
      'Erfahrung mit Denkmalschutz',
      'Industriereinigung Gewerbepark',
      'Schnell erreichbar über A3',
      'Qualitätskontrollen vor Ort',
    ],
  },
  {
    id: 'ingolstadt',
    name: 'Ingolstadt',
    headline: 'Gebäudereinigung in Ingolstadt',
    subline: 'Industriestandard für den Automobilstandort',
    beschreibung: 'Gebäudereinigung in Ingolstadt auf Industrieniveau. Der Automobilstandort verlangt Präzision und Zuverlässigkeit - genau das liefern wir. Für Zulieferer, Bürokomplexe und den Einzelhandel arbeiten wir nach den hohen Standards, die hier selbstverständlich sind.',
    vorteile: [
      'Automotive-Zulieferer Erfahrung',
      'Reinraum nach Industriestandard',
      'Flexible Schichtmodelle',
      'Prozesse nach ISO-Standards',
    ],
  },
  {
    id: 'freising',
    name: 'Freising',
    headline: 'Gebäudereinigung in Freising',
    subline: 'Zwischen Flughafen München und TU Weihenstephan',
    beschreibung: 'Zuverlässige Gebäudereinigung in Freising und Umgebung. Die Nähe zum Flughafen München und zur TU München stellt besondere Anforderungen an Sauberkeit und Flexibilität. Wir reinigen Büros, Forschungseinrichtungen und Gewerbeobjekte im gesamten Landkreis.',
    vorteile: [
      'Nähe zum Flughafen München',
      'Forschungseinrichtungen',
      'Garantierte Reaktionszeit',
      'Umweltschonende Mittel',
    ],
  },
  {
    id: 'erding',
    name: 'Erding',
    headline: 'Gebäudereinigung in Erding',
    subline: 'Professionelle Reinigung im wachsenden Landkreis',
    beschreibung: 'Ihre Gebäudereinigung in Erding - für den boomenden Landkreis. Erding wächst und mit ihm die Nachfrage nach professioneller Gebäudepflege. Wir betreuen Gewerbebetriebe, Hotels nahe der Therme und öffentliche Einrichtungen mit gleichbleibender Qualität.',
    vorteile: [
      'Lokale Präsenz Landkreis Erding',
      'Hotel- und Gastronomie-Erfahrung',
      'Winterdienst für Gewerbe',
      'Langfristige Partnerschaften',
    ],
  },
  {
    id: 'straubing',
    name: 'Straubing',
    headline: 'Gebäudereinigung in Straubing',
    subline: 'Gäuboden-Metropole professionell betreut',
    beschreibung: 'Professionelle Gebäudereinigung in Straubing und dem Gäuboden. Als Zentrum Niederbayerns vereint Straubing Tradition und Moderne. Unsere Teams kennen die Region und arbeiten für Industrie am Hafen, Handel in der Innenstadt und öffentliche Auftraggeber.',
    vorteile: [
      'Verwurzelt in Niederbayern',
      'Industriereinigung Hafen',
      'Messe-Vorbereitung',
      'Ganzjähriger Service',
    ],
  },
  {
    id: 'passau',
    name: 'Passau',
    headline: 'Gebäudereinigung in Passau',
    subline: 'Qualitätsreinigung in der Dreiflüssestadt',
    beschreibung: 'Gebäudereinigung in Passau bis zur österreichischen Grenze. Die Dreiflüssestadt ist unser östlichster Standort in Bayern. Wir reinigen Büros, Hotels und Gewerbeobjekte in der gesamten Region - mit Teams, die auch mehrsprachig kommunizieren können.',
    vorteile: [
      'Bis zur Grenze Österreich',
      'Hotellerie und Tourismus',
      'Hochwasser-Notfallplanung',
      'Mehrsprachige Teams',
    ],
  },
]

// Services für die Links
const services = [
  { name: 'Unterhaltsreinigung', href: '/leistungen/unterhaltsreinigung' },
  { name: 'Büroreinigung', href: '/leistungen/bueroreinigung' },
  { name: 'Industriereinigung', href: '/leistungen/industriereinigung' },
  { name: 'Fensterreinigung', href: '/leistungen/fensterreinigung' },
  { name: 'Facility Management', href: '/leistungen/facility-management' },
  { name: 'Winterdienst', href: '/leistungen/winterdienst' },
  { name: 'Hausmeisterservice', href: '/leistungen/hausmeisterservice' },
  { name: 'Baureinigung', href: '/leistungen/baureinigung' },
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

          {/* Left: Map */}
          <div className="relative w-full rounded-[6px] overflow-hidden">
            <Image
              src="/images/home/städte für fimi.avif"
              alt="Bayern Karte - FIMI Gebäudereinigung Servicegebiete"
              width={4800}
              height={3584}
              className="w-full h-auto"
              priority
            />
          </div>

          {/* Right: Sticky Tabs + Content */}
          <div className="lg:sticky lg:top-32 lg:self-start">
            {/* City Tabs - 2 Rows of 4 */}
            <div
              className="grid grid-cols-4 gap-2 mb-8"
              role="tablist"
              aria-label="Stadt auswählen"
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
              {/* SEO Headline */}
              <h3 className="text-2xl lg:text-3xl font-bold text-[#109387] mb-2">
                {activeStadt.headline}
              </h3>
              <p className="text-lg text-[#012956] font-bold mb-4">
                {activeStadt.subline}
              </p>

              {/* SEO Description */}
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
                      <span className="text-[#109387] mt-0.5">✓</span>
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
          </div>

        </div>

      </div>
    </section>
  )
}
