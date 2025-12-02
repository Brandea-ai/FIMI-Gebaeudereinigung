'use client'

import { useState } from 'react'
import Image from 'next/image'
import { Droplets, Wind, Sparkles, Shield, Check, Plane } from 'lucide-react'

const verfahren = [
  {
    id: 'niederdruck',
    icon: Droplets,
    name: 'Niederdruck-Reinigung',
    kurz: 'Für empfindliche Fassaden',
    beschreibung: 'Das schonendste Verfahren für WDVS und Putzfassaden. Mit maximal 60 bar Druck und speziellen Reinigungsmitteln werden Algen und Moos entfernt, ohne die Oberfläche zu beschädigen.',
    geeignet: ['WDVS-Fassaden', 'Putzfassaden', 'Gestrichene Flächen', 'Empfindliche Oberflächen'],
    bild: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?q=80&w=1200&auto=format&fit=crop',
  },
  {
    id: 'teleskop',
    icon: Wind,
    name: 'Teleskop-System',
    kurz: 'Bis 18m ohne Gerüst',
    beschreibung: 'Mit unseren Teleskopstangen erreichen wir Höhen bis 18 Meter – ganz ohne teures Gerüst. Das Reinigungsmittel wird aufgesprüht, wirkt ein und wird dann abgespült.',
    geeignet: ['Mehrfamilienhäuser', 'Bürogebäude', 'Gewerbeobjekte', 'Schwer zugängliche Stellen'],
    bild: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=1200&auto=format&fit=crop',
  },
  {
    id: 'drohne',
    icon: Plane,
    name: 'Drohnen-Reinigung',
    kurz: 'Für extreme Höhen',
    beschreibung: 'Bei besonders hohen oder schwer zugänglichen Gebäuden setzen wir Drohnentechnologie ein. Die Drohne trägt das Reinigungsmittel auf und ermöglicht präzise Reinigung auch in großen Höhen.',
    geeignet: ['Hochhäuser', 'Kirchtürme', 'Industrieanlagen', 'Schwer erreichbare Fassaden'],
    bild: 'https://images.unsplash.com/photo-1473968512647-3e447244af8f?q=80&w=1200&auto=format&fit=crop',
  },
  {
    id: 'chemisch',
    icon: Sparkles,
    name: 'Biozid-Behandlung',
    kurz: 'Für hartnäckigen Befall',
    beschreibung: 'Bei starkem Algen- und Pilzbefall setzen wir spezielle Biozide ein, die den Bewuchs abtöten. Nach der Einwirkzeit werden die abgestorbenen Organismen abgewaschen.',
    geeignet: ['Starker Algenbefall', 'Pilzbefall', 'Schattenseiten', 'Dauerhaft feuchte Fassaden'],
    bild: 'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?q=80&w=1200&auto=format&fit=crop',
  },
  {
    id: 'impraegnierung',
    icon: Shield,
    name: 'Langzeit-Imprägnierung',
    kurz: '5-10 Jahre Schutz',
    beschreibung: 'Nach der Reinigung versiegeln wir die Fassade mit einer wasserabweisenden Imprägnierung. Sie verhindert, dass sich neue Algen ansiedeln können. Der Schutz hält 5-10 Jahre.',
    geeignet: ['Alle Fassadentypen', 'Nordseiten', 'Feuchte Standorte', 'Präventiver Schutz'],
    bild: 'https://images.unsplash.com/photo-1487958449943-2429e8be8625?q=80&w=1200&auto=format&fit=crop',
  },
]

export default function VerfahrenSection() {
  const [activeVerfahren, setActiveVerfahren] = useState(verfahren[0])

  return (
    <section id="verfahren" className="py-12 sm:py-16 lg:py-28 bg-white">
      <div className="w-full max-w-[1800px] mx-auto px-4 sm:px-6 md:px-8 lg:px-12 xl:px-20">

        {/* Header */}
        <div className="max-w-3xl mb-8 sm:mb-12 lg:mb-16">
          <span className="text-[#109387] font-bold text-xs sm:text-sm uppercase tracking-wide mb-3 sm:mb-4 block">
            Unsere Methoden
          </span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-[#012956] leading-tight mb-4 sm:mb-6">
            Das richtige Verfahren für Ihre Fassade
          </h2>
          <p className="text-base sm:text-lg text-gray-600 font-semibold leading-relaxed">
            Nicht jede Fassade ist gleich. Deshalb analysieren wir vor der Reinigung
            den Untergrund und wählen das optimale Verfahren. Schonend, effektiv, nachhaltig.
          </p>
        </div>

        {/* Tabs + Content */}
        <div className="grid lg:grid-cols-3 gap-6 lg:gap-10">

          {/* Tabs */}
          <div className="lg:col-span-1 space-y-3">
            {verfahren.map((v) => (
              <button
                key={v.id}
                onClick={() => setActiveVerfahren(v)}
                className={`w-full flex items-center gap-4 p-4 rounded-[6px] text-left transition-all ${
                  activeVerfahren.id === v.id
                    ? 'bg-[#012956] text-white shadow-lg'
                    : 'bg-[#f8f9fa] text-[#012956] hover:bg-gray-100'
                }`}
              >
                <div className={`w-12 h-12 rounded-[6px] flex items-center justify-center flex-shrink-0 ${
                  activeVerfahren.id === v.id ? 'bg-[#109387]' : 'bg-white'
                }`}>
                  <v.icon className={`w-6 h-6 ${activeVerfahren.id === v.id ? 'text-white' : 'text-[#109387]'}`} />
                </div>
                <div>
                  <div className="font-bold text-base sm:text-lg">{v.name}</div>
                  <div className={`text-sm font-semibold ${activeVerfahren.id === v.id ? 'text-white/70' : 'text-gray-500'}`}>
                    {v.kurz}
                  </div>
                </div>
              </button>
            ))}
          </div>

          {/* Content Panel */}
          <div className="lg:col-span-2">
            <div className="bg-[#f8f9fa] rounded-[6px] overflow-hidden">
              {/* Bild */}
              <div className="relative h-[200px] sm:h-[250px] lg:h-[300px]">
                <Image
                  src={activeVerfahren.bild}
                  alt={activeVerfahren.name}
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#012956]/80 to-transparent" />
                <div className="absolute bottom-4 left-4 sm:bottom-6 sm:left-6">
                  <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold text-white">
                    {activeVerfahren.name}
                  </h3>
                </div>
              </div>

              {/* Text */}
              <div className="p-5 sm:p-6 lg:p-8">
                <p className="text-gray-700 font-semibold leading-relaxed mb-6 text-sm sm:text-base">
                  {activeVerfahren.beschreibung}
                </p>

                {/* Geeignet für */}
                <h4 className="text-sm font-bold text-gray-500 uppercase tracking-wide mb-3">
                  Geeignet für:
                </h4>
                <div className="grid grid-cols-2 gap-2">
                  {activeVerfahren.geeignet.map((item, index) => (
                    <div key={index} className="flex items-center gap-2">
                      <Check className="w-4 h-4 text-[#109387] flex-shrink-0" strokeWidth={2.5} />
                      <span className="text-gray-700 font-semibold text-sm">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  )
}
