'use client'

import Image from 'next/image'
import { Snowflake, Droplets, Wind, Flame, CheckCircle } from 'lucide-react'
import FadeIn from '@/components/FadeIn'

const verfahren = [
  {
    id: 'trockeneis',
    icon: Snowflake,
    name: 'Trockeneisreinigung',
    image: 'https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?q=80&w=800&auto=format&fit=crop',
    kurz: 'Schonend & rückstandsfrei',
    beschreibung: 'Bei der Trockeneisreinigung werden gefrorene CO2-Pellets mit hohem Druck auf die Oberfläche geschossen. Die Verschmutzungen werden durch den Temperaturschock gelöst und abgetragen.',
    vorteile: [
      'Keine Feuchtigkeit, kein Nachtrocknen',
      'Kein Abrasiv, schont Oberflächen',
      'Keine Reinigungsmittel-Rückstände',
      'Ideal für empfindliche Maschinen',
      'Auch bei Elektronik einsetzbar',
    ],
    einsatz: 'Produktionsmaschinen, Formen, Werkzeuge, Motoren, elektrische Anlagen',
  },
  {
    id: 'hochdruck',
    icon: Droplets,
    name: 'Hochdruckreinigung',
    image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?q=80&w=800&auto=format&fit=crop',
    kurz: 'Kraftvoll gegen hartnäckigen Schmutz',
    beschreibung: 'Hochdruckreinigung mit bis zu 500 bar entfernt selbst hartnäckigste Verschmutzungen. Heißwasser löst Fette und Öle besonders effektiv.',
    vorteile: [
      'Bis 500 bar Arbeitsdruck',
      'Heißwasser bis 150°C',
      'Entfernt Öle, Fette, Rost',
      'Großflächig einsetzbar',
      'Schnelle Ergebnisse',
    ],
    einsatz: 'Hallenböden, Außenflächen, Fassaden, Maschinen-Fundamente, Tiefgaragen',
  },
  {
    id: 'scheuersaugen',
    icon: Wind,
    name: 'Maschinelles Scheuersaugen',
    image: 'https://images.unsplash.com/photo-1558618047-3c8c76ca7d13?q=80&w=800&auto=format&fit=crop',
    kurz: 'Effizient für Großflächen',
    beschreibung: 'Aufsitz-Scheuersaugmaschinen reinigen und trocknen in einem Arbeitsgang. Ideal für große Hallenflächen mit minimalem Zeitaufwand.',
    vorteile: [
      'Bis 5.000 m² pro Stunde',
      'Reinigt und trocknet gleichzeitig',
      'Sofort begehbar danach',
      'Verschiedene Bürstenarten',
      'Auch für beschichtete Böden',
    ],
    einsatz: 'Produktionshallen, Lagerhallen, Logistikzentren, Supermärkte, Parkhäuser',
  },
  {
    id: 'dampf',
    icon: Flame,
    name: 'Dampfreinigung',
    image: 'https://images.unsplash.com/photo-1585771724684-38269d6639fd?q=80&w=800&auto=format&fit=crop',
    kurz: 'Hygienisch ohne Chemie',
    beschreibung: 'Heißdampf mit bis zu 180°C desinfiziert und reinigt ohne Chemie. Besonders geeignet für hygienesensible Bereiche.',
    vorteile: [
      'Bis 180°C heißer Dampf',
      'Desinfiziert ohne Chemie',
      'Tötet 99,9% der Keime',
      'Geringer Wasserverbrauch',
      'Umweltschonend',
    ],
    einsatz: 'Lebensmittelproduktion, Küchen, Sanitärbereiche, medizinische Einrichtungen',
  },
]

export default function VerfahrenSection() {
  return (
    <section id="verfahren" className="py-20 lg:py-28 bg-[#012956]" aria-labelledby="verfahren-heading">
      <div className="w-full max-w-[1800px] mx-auto px-6 lg:px-12 xl:px-20">

        {/* Section Header */}
        <FadeIn className="text-center mb-16">
          <p className="text-sm text-[#109387] font-semibold uppercase tracking-wide mb-3">
            Moderne Reinigungstechnik
          </p>
          <h2
            id="verfahren-heading"
            className="text-3xl md:text-4xl lg:text-5xl font-bold text-white leading-[1.1] mb-6"
          >
            Unsere Reinigungsverfahren
          </h2>
          <p className="text-lg text-white/70 font-semibold leading-relaxed max-w-3xl mx-auto">
            Je nach Verschmutzung und Untergrund setzen wir das optimale Verfahren ein.
            Unsere eigene Ausrüstung ermöglicht flexiblen Einsatz ohne Mietkosten für Sie.
          </p>
        </FadeIn>

        {/* Verfahren Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {verfahren.map((item, index) => {
            const Icon = item.icon
            return (
              <FadeIn key={item.id} delay={index * 0.1}>
                <article className="bg-white rounded-[6px] overflow-hidden h-full">
                  <div className="grid lg:grid-cols-2">
                    {/* Image */}
                    <div className="relative h-64 lg:h-auto lg:min-h-[300px]">
                      <Image
                        src={item.image}
                        alt={item.name}
                        fill
                        className="object-cover"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-[#012956]/60 to-transparent lg:bg-gradient-to-r" />

                      {/* Icon Badge */}
                      <div className="absolute top-4 left-4 w-12 h-12 bg-[#109387] rounded-[6px] flex items-center justify-center shadow-lg">
                        <Icon size={24} className="text-white" strokeWidth={1.5} />
                      </div>
                    </div>

                    {/* Content */}
                    <div className="p-6 lg:p-8">
                      <h3 className="text-2xl font-bold text-[#012956] mb-1">
                        {item.name}
                      </h3>
                      <p className="text-[#109387] font-semibold text-sm mb-4">
                        {item.kurz}
                      </p>

                      <p className="text-gray-700 font-semibold text-sm leading-relaxed mb-4">
                        {item.beschreibung}
                      </p>

                      {/* Vorteile */}
                      <ul className="space-y-2 mb-4">
                        {item.vorteile.slice(0, 3).map((vorteil, i) => (
                          <li key={i} className="flex items-start gap-2">
                            <CheckCircle size={16} className="text-[#109387] flex-shrink-0 mt-0.5" />
                            <span className="text-gray-700 font-semibold text-sm">{vorteil}</span>
                          </li>
                        ))}
                      </ul>

                      {/* Einsatzgebiete */}
                      <div className="pt-4 border-t border-gray-100">
                        <p className="text-xs text-gray-500 font-semibold uppercase tracking-wide mb-1">
                          Typische Einsatzgebiete
                        </p>
                        <p className="text-gray-700 font-semibold text-sm">
                          {item.einsatz}
                        </p>
                      </div>
                    </div>
                  </div>
                </article>
              </FadeIn>
            )
          })}
        </div>

        {/* Bottom Note */}
        <FadeIn className="mt-12 text-center">
          <div className="inline-flex items-center gap-3 bg-white/10 rounded-[6px] px-6 py-4">
            <CheckCircle size={24} className="text-[#109387]" />
            <p className="text-white font-semibold">
              Alle Geräte in eigenem Bestand – keine Mietkosten für Sie
            </p>
          </div>
        </FadeIn>

      </div>
    </section>
  )
}
