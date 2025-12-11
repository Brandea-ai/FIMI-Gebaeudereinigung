'use client'

import Image from 'next/image'
import { Snowflake, Droplets, Flame, Hand, CheckCircle } from 'lucide-react'

const verfahren = [
  {
    id: 'trockeneis',
    icon: Snowflake,
    name: 'Trockeneisreinigung',
    kurzbeschreibung: 'Materialschonend, ohne Feuchtigkeit',
    beschreibung: 'CO2-Pellets sublimieren beim Aufprall und lösen Verschmutzungen rückstandsfrei. Keine Feuchtigkeit, keine abrasive Wirkung – ideal für Elektronik, Kunststoffformen und empfindliche Oberflächen.',
    vorteile: ['Keine Feuchtigkeit', 'Keine Demontage nötig', 'Umweltfreundlich'],
    idealFuer: ['Spritzgusswerkzeuge', 'Elektronik', 'Lackieranlagen', 'Lebensmittelmaschinen'],
    bild: 'https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?q=80&w=800&auto=format&fit=crop',
  },
  {
    id: 'heissdampf',
    icon: Flame,
    name: 'Heißdampfreinigung',
    kurzbeschreibung: 'Tötet Keime, löst Fett',
    beschreibung: 'Heißer Dampf bei 90-150°C löst selbst hartnäckige Öl- und Fettablagerungen. Gleichzeitig werden Bakterien und Keime abgetötet – wichtig für KSS-Tanks und Lebensmittelverarbeitung.',
    vorteile: ['Desinfizierende Wirkung', 'Löst hartnäckiges Fett', 'Geringer Wasserverbrauch'],
    idealFuer: ['KSS-Tanks', 'CNC-Arbeitsräume', 'Kühlmittelsysteme', 'Lebensmittelbranche'],
    bild: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80&w=800&auto=format&fit=crop',
  },
  {
    id: 'hochdruck',
    icon: Droplets,
    name: 'Hochdruckreinigung',
    kurzbeschreibung: 'Für hartnäckige Verschmutzungen',
    beschreibung: 'Mit Druck bis 2.500 Bar entfernen wir selbst festsitzende Ablagerungen, Rost und verhärtete Produktionsrückstände. Für robuste Maschinenteile und Außenbereiche.',
    vorteile: ['Sehr gründlich', 'Schnelle Ergebnisse', 'Große Flächen möglich'],
    idealFuer: ['Pressen & Stanzen', 'Außenbereiche', 'Fundamente', 'Robuste Komponenten'],
    bild: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?q=80&w=800&auto=format&fit=crop',
  },
  {
    id: 'manuell',
    icon: Hand,
    name: 'Manuelle Reinigung',
    kurzbeschreibung: 'Präzision an schwierigen Stellen',
    beschreibung: 'Manche Bereiche erfordern Fingerspitzengefühl. Unsere geschulten Mitarbeiter reinigen mit Spezialwerkzeugen und geeigneten Reinigungsmitteln auch schwer zugängliche Stellen nach Herstellervorgaben.',
    vorteile: ['Höchste Präzision', 'Herstellerkonform', 'Für sensible Bereiche'],
    idealFuer: ['Steuerungen', 'Messsysteme', 'Optische Komponenten', 'Dichtflächen'],
    bild: 'https://images.unsplash.com/photo-1565688534245-05d6b5be184a?q=80&w=800&auto=format&fit=crop',
  },
]

export default function VerfahrenSection() {
  return (
    <section id="verfahren" className="py-12 sm:py-16 lg:py-28 bg-[#f8f9fa]">
      <div className="w-full max-w-[1800px] mx-auto px-4 sm:px-6 md:px-8 lg:px-12 xl:px-20">

        {/* Header */}
        <div className="max-w-3xl mb-8 sm:mb-12 lg:mb-16">
          <span className="text-[#109387] font-bold text-xs sm:text-sm uppercase tracking-wide mb-3 sm:mb-4 block">
            Reinigungsverfahren
          </span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-[#012956] leading-tight mb-4 sm:mb-6">
            Das richtige Verfahren für jede Maschine
          </h2>
          <p className="text-base sm:text-lg text-gray-600 font-semibold leading-relaxed">
            Je nach Maschinentyp, Verschmutzungsart und Empfindlichkeit der Oberflächen setzen wir
            unterschiedliche Reinigungsverfahren ein. Bei der Besichtigung analysieren wir Ihre
            Situation und empfehlen die optimale Methode.
          </p>
        </div>

        {/* Verfahren Grid */}
        <div className="grid md:grid-cols-2 gap-4 sm:gap-6 lg:gap-8">
          {verfahren.map((v) => {
            const Icon = v.icon
            return (
              <div
                key={v.id}
                className="bg-white rounded-[6px] overflow-hidden shadow-sm hover:shadow-lg transition-all duration-300 group"
              >
                {/* Image Header */}
                <div className="relative h-[160px] sm:h-[200px] overflow-hidden">
                  <Image
                    src={v.bild}
                    alt={`${v.name} - Maschinenreinigung`}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#012956]/80 to-transparent" />

                  {/* Icon Badge */}
                  <div className="absolute top-4 left-4 w-10 h-10 sm:w-12 sm:h-12 bg-[#109387] rounded-[6px] flex items-center justify-center">
                    <Icon className="w-5 h-5 sm:w-6 sm:h-6 text-white" strokeWidth={1.5} />
                  </div>

                  {/* Title on Image */}
                  <div className="absolute bottom-4 left-4 right-4">
                    <h3 className="text-lg sm:text-xl lg:text-2xl font-bold text-white mb-1">
                      {v.name}
                    </h3>
                    <p className="text-white/80 font-semibold text-xs sm:text-sm">
                      {v.kurzbeschreibung}
                    </p>
                  </div>
                </div>

                {/* Content */}
                <div className="p-4 sm:p-5 lg:p-6">
                  <p className="text-gray-600 font-semibold leading-relaxed mb-4 text-sm sm:text-base">
                    {v.beschreibung}
                  </p>

                  {/* Vorteile */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {v.vorteile.map((vorteil, index) => (
                      <div
                        key={index}
                        className="flex items-center gap-1.5 bg-[#109387]/10 rounded-[6px] px-2.5 py-1"
                      >
                        <CheckCircle className="w-3 h-3 sm:w-3.5 sm:h-3.5 text-[#109387]" />
                        <span className="text-[10px] sm:text-xs font-bold text-[#012956]">{vorteil}</span>
                      </div>
                    ))}
                  </div>

                  {/* Ideal für */}
                  <div className="border-t border-gray-100 pt-4">
                    <p className="text-xs text-gray-500 font-semibold uppercase tracking-wide mb-2">
                      Ideal für
                    </p>
                    <p className="text-gray-700 font-semibold text-xs sm:text-sm">
                      {v.idealFuer.join(' • ')}
                    </p>
                  </div>
                </div>
              </div>
            )
          })}
        </div>

        {/* Bottom Info Box */}
        <div className="mt-8 sm:mt-12 bg-[#012956] rounded-[6px] p-5 sm:p-6 lg:p-8">
          <div className="grid md:grid-cols-2 gap-6 items-center">
            <div>
              <h3 className="text-lg sm:text-xl lg:text-2xl font-bold text-white mb-2 sm:mb-3">
                Welches Verfahren ist das richtige?
              </h3>
              <p className="text-white/80 font-semibold text-sm sm:text-base leading-relaxed">
                Bei der kostenlosen Besichtigung analysieren wir Ihre Maschinen, den
                Verschmutzungsgrad und die Anforderungen. Dann empfehlen wir das optimale
                Verfahren – oder eine Kombination aus mehreren.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 md:justify-end">
              <a
                href="#kontakt"
                className="inline-flex items-center justify-center gap-2 bg-[#109387] hover:bg-[#0d7d72] text-white font-bold px-5 sm:px-6 py-3 rounded-[6px] transition-colors text-sm sm:text-base"
              >
                Beratung anfragen
              </a>
              <a
                href="tel:+4987120669360"
                className="inline-flex items-center justify-center gap-2 bg-white/10 hover:bg-white/20 text-white font-bold px-5 sm:px-6 py-3 rounded-[6px] transition-colors text-sm sm:text-base"
              >
                0871 2066936 0
              </a>
            </div>
          </div>
        </div>

      </div>
    </section>
  )
}
