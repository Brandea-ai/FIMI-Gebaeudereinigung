'use client'

import { useState } from 'react'
import Image from 'next/image'
import { ArrowRight, Clock, CheckCircle, AlertCircle } from 'lucide-react'

const szenarien = [
  {
    id: 'firmenevent',
    problem: 'Großes Firmenevent steht an',
    loesung: 'Rundum-Reinigung vor, während & nach dem Event',
    beschreibung: 'Sie planen ein wichtiges Firmenevent mit 200 Gästen. Die Location ist gebucht, das Catering steht – aber wer sorgt für Sauberkeit während der Veranstaltung und räumt danach auf?',
    unsereAntwort: 'Wir übernehmen die komplette Reinigung: Vorbereitung der Location, laufende Sanitärbetreuung während des Events und gründliche Endreinigung. Diskret und professionell, damit Sie sich auf Ihre Gäste konzentrieren können.',
    vorteile: ['Komplette Event-Begleitung', 'Diskrete Reinigung', 'Endreinigung inklusive'],
    image: 'https://images.unsplash.com/photo-1540575467063-178a50c2df87?q=80&w=1200&auto=format&fit=crop',
    persona: 'Eventmanager',
  },
  {
    id: 'messe',
    problem: 'Messestand muss 5 Tage glänzen',
    loesung: 'Tägliche Messe-Reinigung – morgens sauber starten',
    beschreibung: 'Eine wichtige Messe steht an. Ihr Stand soll jeden Tag makellos aussehen, aber nach einem langen Messetag sieht es entsprechend aus.',
    unsereAntwort: 'Wir reinigen Ihren Messestand täglich vor Messebeginn, halten ihn während der Öffnungszeiten sauber und übernehmen die Endreinigung nach Abbau. Ihr Stand hinterlässt jeden Tag den besten Eindruck.',
    vorteile: ['Tägliche Morgenreinigung', 'Zwischenreinigung möglich', 'Endreinigung nach Abbau'],
    image: 'https://images.unsplash.com/photo-1591115765373-5207764f72e7?q=80&w=1200&auto=format&fit=crop',
    persona: 'Messeaussteller',
  },
  {
    id: 'hotel-hochsaison',
    problem: 'Hochsaison im Hotel – Team am Limit',
    loesung: 'Zimmerreinigung als Verstärkung',
    beschreibung: 'Die Buchungen explodieren, aber Ihr Reinigungsteam ist am Limit. Neue Mitarbeiter einzustellen dauert Wochen. Ihre Gäste erwarten aber den gewohnten Standard.',
    unsereAntwort: 'Wir übernehmen die Zimmerreinigung nach Ihren Standards. Ob für vier Wochen Hochsaison oder dauerhaft – unsere Teams kennen Hotellerie-Anforderungen und integrieren sich nahtlos in Ihre Abläufe.',
    vorteile: ['Hotellerie-Standards', 'Flexible Einsatzdauer', 'Schnelle Verfügbarkeit'],
    image: 'https://images.unsplash.com/photo-1590490360182-c33d57733427?q=80&w=1200&auto=format&fit=crop',
    persona: 'Hoteliers',
  },
  {
    id: 'tagung',
    problem: 'Ganztägige Tagung mit 3 Pausen',
    loesung: 'Zwischenreinigung der Tagungsräume',
    beschreibung: 'Eine wichtige Tagung mit 100 Teilnehmern. Nach jeder Kaffeepause sehen die Tische entsprechend aus – aber die nächste Session startet in 15 Minuten.',
    unsereAntwort: 'Unser Team steht bereit und reinigt in den Pausen blitzschnell die Tagungsräume: Tische wischen, Müll entsorgen, Sanitäranlagen kontrollieren. Ihre Teilnehmer kehren in einen frischen Raum zurück.',
    vorteile: ['Blitzschnelle Zwischenreinigung', 'Diskret im Hintergrund', 'Sanitär-Check inklusive'],
    image: 'https://images.unsplash.com/photo-1497366811353-6870744d04b2?q=80&w=1200&auto=format&fit=crop',
    persona: 'Tagungsplaner',
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
            Events, Messen, Tagungen – Sauberkeit ist entscheidend für den Erfolg.
            Sehen Sie, wie wir typische Herausforderungen lösen.
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
                <AlertCircle className="w-5 h-5 text-[#109387]" />
                <span className="text-[#109387] font-bold text-sm uppercase tracking-wide">Die Situation</span>
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
                  Jetzt anfragen
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
