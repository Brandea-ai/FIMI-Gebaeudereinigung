'use client'

import Image from 'next/image'
import { Droplets, Flame, Home, Bird, Heart, FlaskConical, ArrowRight } from 'lucide-react'

const szenarien = [
  {
    icon: Droplets,
    titel: 'Wasserschaden',
    situation: 'Der Keller steht unter Wasser',
    beschreibung: 'Ein Rohrbruch über Nacht, die Waschmaschine ist ausgelaufen oder Hochwasser hat zugeschlagen. Jetzt muss es schnell gehen: Wasser absaugen, trocknen, Schimmel verhindern.',
    suchbegriff: 'Wasserschaden Reinigung',
    image: 'https://images.unsplash.com/photo-1525438160292-a4a860951f44?q=80&w=800&auto=format&fit=crop',
  },
  {
    icon: Flame,
    titel: 'Brandschaden',
    situation: 'Nach dem Brand: Ruß und Gestank',
    beschreibung: 'Ob Küchenbrand oder größerer Schaden: Ruß setzt sich überall fest, der Brandgeruch durchdringt alles. Wir entfernen Ruß rückstandslos und neutralisieren Gerüche dauerhaft.',
    suchbegriff: 'Brandschaden Sanierung',
    image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?q=80&w=800&auto=format&fit=crop',
  },
  {
    icon: Home,
    titel: 'Messie-Wohnung',
    situation: 'Der Vormieter hat Chaos hinterlassen',
    beschreibung: 'Jahre der Verwahrlosung, Müllberge, Ungeziefer. Als Vermieter oder Erbe stehen Sie vor einer schier unlösbaren Aufgabe. Wir entrümpeln, reinigen und desinfizieren – diskret und gründlich.',
    suchbegriff: 'Messie Wohnung räumen',
    image: 'https://images.unsplash.com/photo-1558618047-3c8c76ca7d13?q=80&w=800&auto=format&fit=crop',
  },
  {
    icon: Bird,
    titel: 'Taubenkot',
    situation: 'Dachboden voller Vogelkot',
    beschreibung: 'Taubenkot ist nicht nur eklig, sondern auch gesundheitsgefährdend. Pilzsporen, Bakterien und Parasiten erfordern professionelle Entfernung mit Schutzausrüstung und Desinfektion.',
    suchbegriff: 'Taubenkot entfernen',
    image: 'https://images.unsplash.com/photo-1555169062-013468b47731?q=80&w=800&auto=format&fit=crop',
  },
  {
    icon: Heart,
    titel: 'Nach einem Todesfall',
    situation: 'Diskretion und Einfühlsamkeit',
    beschreibung: 'Wenn ein Mensch in seiner Wohnung verstirbt, ist die Reinigung oft eine emotionale und hygienische Herausforderung. Wir arbeiten pietätvoll, diskret und absolut vertraulich.',
    suchbegriff: 'Tatortreinigung',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=800&auto=format&fit=crop',
  },
  {
    icon: FlaskConical,
    titel: 'Gefahrstoffe',
    situation: 'Öl, Chemikalien, Schadstoffe',
    beschreibung: 'Ein Ölunfall in der Produktionshalle oder ausgelaufene Chemikalien erfordern Spezialwissen. Wir verfügen über die Zulassungen für fachgerechte Entsorgung von Gefahrstoffen.',
    suchbegriff: 'Gefahrstoff Entsorgung',
    image: 'https://images.unsplash.com/photo-1532187863486-abf9dbad1b69?q=80&w=800&auto=format&fit=crop',
  },
]

export default function NotfallSzenarienSection() {
  return (
    <section id="szenarien" className="py-12 sm:py-16 lg:py-28 bg-[#f8f9fa]">
      <div className="w-full max-w-[1800px] mx-auto px-4 sm:px-6 md:px-8 lg:px-12 xl:px-20">

        {/* Header */}
        <div className="max-w-3xl mb-8 sm:mb-12 lg:mb-16">
          <span className="text-[#109387] font-bold text-xs sm:text-sm uppercase tracking-wide mb-3 sm:mb-4 block">
            Kennen Sie das?
          </span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-[#012956] leading-tight mb-4 sm:mb-6">
            Situationen, in denen Sie uns brauchen
          </h2>
          <p className="text-base sm:text-lg text-gray-600 font-semibold leading-relaxed">
            Sonderreinigung beginnt dort, wo normale Reinigung an ihre Grenzen stößt.
            Ob Notfall oder geplante Maßnahme – wir haben die Lösung.
          </p>
        </div>

        {/* Szenarien Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
          {szenarien.map((szenario, index) => (
            <a
              key={index}
              href="#kontakt"
              className="group bg-white rounded-[6px] overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 block cursor-pointer"
            >
              {/* Image */}
              <div className="relative h-[160px] sm:h-[180px] overflow-hidden">
                <Image
                  src={szenario.image}
                  alt={szenario.titel}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#012956]/80 to-transparent" />

                {/* Icon Badge */}
                <div className="absolute top-3 left-3 sm:top-4 sm:left-4">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-[6px] bg-[#109387] flex items-center justify-center">
                    <szenario.icon className="w-5 h-5 sm:w-6 sm:h-6 text-white" strokeWidth={1.5} />
                  </div>
                </div>

                {/* Titel auf Bild */}
                <div className="absolute bottom-3 left-3 right-3 sm:bottom-4 sm:left-4 sm:right-4">
                  <h3 className="text-lg sm:text-xl font-bold text-white">
                    {szenario.titel}
                  </h3>
                </div>
              </div>

              {/* Content */}
              <div className="p-4 sm:p-5 lg:p-6">
                {/* Situation */}
                <p className="text-[#109387] font-bold text-sm sm:text-base mb-2 sm:mb-3">
                  &ldquo;{szenario.situation}&rdquo;
                </p>

                {/* Beschreibung */}
                <p className="text-gray-600 font-semibold text-xs sm:text-sm leading-relaxed mb-4">
                  {szenario.beschreibung}
                </p>

                {/* CTA */}
                <span
                  className="inline-flex items-center gap-1.5 sm:gap-2 text-[#109387] font-bold text-xs sm:text-sm group-hover:gap-3 transition-all"
                >
                  Hilfe anfragen
                  <ArrowRight className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
                </span>
              </div>
            </a>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="mt-10 sm:mt-12 lg:mt-16 text-center">
          <p className="text-gray-600 font-semibold mb-4 sm:mb-6 text-sm sm:text-base">
            Ihre Situation ist nicht dabei? Wir finden auch für Ihren Fall die richtige Lösung.
          </p>
          <a
            href="#kontakt"
            className="inline-flex items-center gap-2 sm:gap-3 bg-[#012956] hover:bg-[#01203d] text-white font-bold text-sm sm:text-base px-6 sm:px-8 py-3 sm:py-4 rounded-[6px] transition-colors group"
          >
            Jetzt Situation schildern
            <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 group-hover:translate-x-1 transition-transform" />
          </a>
        </div>

      </div>
    </section>
  )
}
