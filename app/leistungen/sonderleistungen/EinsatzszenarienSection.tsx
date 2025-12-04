'use client'

import { useState } from 'react'
import Image from 'next/image'
import { ArrowRight, Clock, CheckCircle, AlertCircle } from 'lucide-react'

const szenarien = [
  {
    id: 'rezeption-krank',
    problem: 'Ihre Rezeptionistin ist krank',
    loesung: 'Wir sind in 2 Stunden da',
    beschreibung: 'Montagmorgen, 8 Uhr: Ihre Empfangsmitarbeiterin meldet sich krank. In einer Stunde kommen die ersten Kunden und Geschäftspartner. Kein Grund zur Panik.',
    unsereAntwort: 'Ein Anruf genügt. Innerhalb von 2 Stunden steht eine geschulte Empfangskraft bei Ihnen – professionell gekleidet, serviceorientiert und sofort einsatzbereit. Wir übernehmen Besucherempfang, Telefon und alle anfallenden Aufgaben.',
    vorteile: ['2h Reaktionszeit garantiert', 'Geschultes Empfangspersonal', 'Nahtlose Übernahme'],
    image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?q=80&w=1200&auto=format&fit=crop',
    persona: 'Büro- & Praxismanager',
  },
  {
    id: 'event-servicekraefte',
    problem: 'Großes Firmenevent am Wochenende',
    loesung: '10 Servicekräfte – professionell und zuverlässig',
    beschreibung: 'Sie planen ein wichtiges Firmenevent mit 200 Gästen. Das Catering steht, die Location ist gebucht – aber wer kümmert sich um den Service, die Gästebetreuung und den reibungslosen Ablauf?',
    unsereAntwort: 'Wir stellen Ihnen erfahrene Servicekräfte, die Events kennen. Von der Begrüßung am Eingang über den Getränkeservice bis zum Abbau – Ihr Team ist eingespielt, professionell gekleidet und sorgt dafür, dass Sie sich auf Ihre Gäste konzentrieren können.',
    vorteile: ['Erfahrene Event-Teams', 'Einheitliches Auftreten', 'Komplettservice'],
    image: 'https://images.unsplash.com/photo-1540575467063-178a50c2df87?q=80&w=1200&auto=format&fit=crop',
    persona: 'Eventmanager & Unternehmer',
  },
  {
    id: 'hotel-hochsaison',
    problem: 'Hochsaison im Hotel – Personal fehlt',
    loesung: 'Housekeeping-Verstärkung auf Zeit',
    beschreibung: 'Die Buchungen explodieren, aber Ihr Housekeeping-Team ist am Limit. Neue Mitarbeiter einzustellen dauert Wochen. Ihre Stammgäste erwarten aber den gewohnten Standard.',
    unsereAntwort: 'Unsere Housekeeping-Profis sind in Hotellerie-Standards geschult und kennen die Abläufe. Ob für vier Wochen Hochsaison oder dauerhaft – sie integrieren sich nahtlos in Ihr Team und halten Ihre Qualitätsstandards.',
    vorteile: ['Hotellerie-geschult', 'Flexible Einsatzdauer', 'Schnelle Integration'],
    image: 'https://images.unsplash.com/photo-1590490360182-c33d57733427?q=80&w=1200&auto=format&fit=crop',
    persona: 'Hoteliers & Pensionsbetreiber',
  },
  {
    id: 'neues-buero',
    problem: 'Neues Bürogebäude – kein Empfangspersonal',
    loesung: 'Professioneller Empfangsdienst ab Tag 1',
    beschreibung: 'Sie beziehen neue Geschäftsräume und brauchen ab sofort einen besetzten Empfang. Eigenes Personal einzustellen ist zeitaufwendig und bindet Ressourcen.',
    unsereAntwort: 'Wir übernehmen Ihren kompletten Empfangsdienst – dauerhaft oder als Übergangslösung. Unsere Mitarbeiter werden auf Ihr Unternehmen eingearbeitet, kennen Ihre Abläufe und repräsentieren Sie professionell nach außen.',
    vorteile: ['Dauerhafte Lösung möglich', 'Einarbeitung auf Ihr Unternehmen', 'Volle Flexibilität'],
    image: 'https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=1200&auto=format&fit=crop',
    persona: 'Geschäftsführer & Facility Manager',
  },
]

export default function EinsatzszenarienSection() {
  const [activeIndex, setActiveIndex] = useState(0)
  const active = szenarien[activeIndex]

  return (
    <section id="szenarien" className="py-12 sm:py-16 lg:py-28 bg-white">
      <div className="w-full max-w-[1800px] mx-auto px-4 sm:px-6 md:px-8 lg:px-12 xl:px-20">

        {/* Section Header */}
        <div className="max-w-3xl mb-10 sm:mb-12 lg:mb-16">
          <span className="text-[#109387] font-bold text-xs sm:text-sm uppercase tracking-wide mb-3 sm:mb-4 block">
            Typische Einsatzszenarien
          </span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-[#012956] leading-tight mb-4 sm:mb-6">
            Kennen Sie diese Situationen?
          </h2>
          <p className="text-base sm:text-lg text-gray-600 font-semibold leading-relaxed">
            Personalengpässe kommen oft unerwartet. Wir haben die Lösung – schnell,
            professionell und unkompliziert. Sehen Sie, wie wir typische Herausforderungen lösen.
          </p>
        </div>

        {/* Scenario Tabs - Mobile: Horizontal Scroll, Desktop: Buttons */}
        <div className="flex gap-2 sm:gap-3 overflow-x-auto pb-4 mb-8 lg:mb-12 scrollbar-hide">
          {szenarien.map((szenario, index) => (
            <button
              key={szenario.id}
              onClick={() => setActiveIndex(index)}
              className={`flex-shrink-0 px-4 sm:px-5 py-2.5 sm:py-3 rounded-[6px] font-bold text-sm sm:text-base whitespace-nowrap transition-all duration-300 ${
                index === activeIndex
                  ? 'bg-[#012956] text-white'
                  : 'bg-[#f8f9fa] text-gray-600 hover:bg-[#012956] hover:text-white'
              }`}
            >
              {szenario.persona}
            </button>
          ))}
        </div>

        {/* Active Scenario Content */}
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-stretch">

          {/* Left: Image */}
          <div className="relative h-[300px] sm:h-[400px] lg:h-full min-h-[400px] rounded-[8px] overflow-hidden">
            <Image
              src={active.image}
              alt={active.problem}
              fill
              className="object-cover transition-all duration-500"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#012956]/80 via-[#012956]/20 to-transparent" />

            {/* Overlay Content */}
            <div className="absolute bottom-0 left-0 right-0 p-6 sm:p-8">
              <div className="flex items-center gap-2 mb-3">
                <AlertCircle className="w-5 h-5 text-red-400" />
                <span className="text-red-400 font-bold text-sm uppercase tracking-wide">Das Problem</span>
              </div>
              <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white leading-tight">
                {active.problem}
              </h3>
            </div>
          </div>

          {/* Right: Solution Content */}
          <div className="bg-[#f8f9fa] rounded-[8px] p-6 sm:p-8 lg:p-10 flex flex-col">

            {/* Solution Header */}
            <div className="flex items-center gap-2 mb-4">
              <CheckCircle className="w-5 h-5 text-[#109387]" />
              <span className="text-[#109387] font-bold text-sm uppercase tracking-wide">Unsere Lösung</span>
            </div>

            <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold text-[#012956] mb-4 sm:mb-6">
              {active.loesung}
            </h3>

            {/* Description */}
            <div className="mb-6">
              <p className="text-gray-600 font-semibold leading-relaxed mb-4">
                {active.beschreibung}
              </p>
              <p className="text-gray-700 font-semibold leading-relaxed">
                {active.unsereAntwort}
              </p>
            </div>

            {/* Vorteile */}
            <div className="mb-8">
              <h4 className="text-sm text-gray-500 font-semibold uppercase tracking-wide mb-3">
                Ihre Vorteile
              </h4>
              <ul className="space-y-2">
                {active.vorteile.map((vorteil, index) => (
                  <li key={index} className="flex items-center gap-3">
                    <div className="w-6 h-6 rounded-full bg-[#109387]/10 flex items-center justify-center flex-shrink-0">
                      <CheckCircle className="w-4 h-4 text-[#109387]" />
                    </div>
                    <span className="text-gray-700 font-semibold">{vorteil}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* CTA */}
            <div className="mt-auto pt-6 border-t border-gray-200">
              <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
                <a
                  href="#kontakt"
                  className="inline-flex items-center justify-center gap-2 bg-[#109387] hover:bg-[#0d7d72] text-white font-bold text-base px-6 py-3 rounded-[6px] transition-all duration-300 group"
                >
                  Jetzt Personal anfragen
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </a>
                <a
                  href="tel:+4987143033460"
                  className="inline-flex items-center justify-center gap-2 bg-white hover:bg-[#012956] text-[#012956] hover:text-white font-bold text-base px-6 py-3 rounded-[6px] border-2 border-[#012956] transition-all duration-300"
                >
                  <Clock className="w-5 h-5" />
                  Sofort anrufen
                </a>
              </div>
            </div>

          </div>
        </div>

        {/* Navigation Dots - Mobile */}
        <div className="flex justify-center gap-2 mt-6 lg:hidden">
          {szenarien.map((_, index) => (
            <button
              key={index}
              onClick={() => setActiveIndex(index)}
              className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${
                index === activeIndex ? 'bg-[#109387] w-6' : 'bg-gray-300'
              }`}
              aria-label={`Szenario ${index + 1}`}
            />
          ))}
        </div>

      </div>
    </section>
  )
}
