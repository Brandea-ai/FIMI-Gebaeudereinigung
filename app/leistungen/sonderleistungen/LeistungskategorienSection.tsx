'use client'

import Image from 'next/image'
import { ArrowRight, Users, Home, Calendar, Shield, Briefcase, UtensilsCrossed } from 'lucide-react'

const leistungen = [
  {
    id: 'event-reinigung',
    icon: Calendar,
    title: 'Event-Reinigung',
    subtitle: 'Vor, während & nach dem Event',
    description: 'Professionelle Reinigung für Firmenveranstaltungen, Hochzeiten, Jubiläen und Feiern. Wir sorgen für Sauberkeit von der Vorbereitung bis zur Endreinigung.',
    features: ['Vorbereitung', 'Laufende Reinigung', 'Endreinigung', 'Sanitärbetreuung'],
    image: 'https://images.unsplash.com/photo-1540575467063-178a50c2df87?q=80&w=800&auto=format&fit=crop',
    zielgruppe: 'Eventlocations, Unternehmen, Privatveranstaltungen',
  },
  {
    id: 'messe-reinigung',
    icon: Briefcase,
    title: 'Messe-Reinigung',
    subtitle: 'Ihr Messestand glänzt',
    description: 'Saubere Messestände hinterlassen Eindruck. Wir reinigen vor Messebeginn, halten Ihren Stand während der Messe sauber und übernehmen die Endreinigung.',
    features: ['Standvorbereitung', 'Tägliche Pflege', 'Endreinigung', 'Müllentsorgung'],
    image: 'https://images.unsplash.com/photo-1591115765373-5207764f72e7?q=80&w=800&auto=format&fit=crop',
    zielgruppe: 'Messeaussteller, Agenturen, Unternehmen',
  },
  {
    id: 'hotel-reinigung',
    icon: Home,
    title: 'Hotelzimmer-Reinigung',
    subtitle: 'Perfektion in jedem Zimmer',
    description: 'Professionelle Zimmerreinigung für Hotels und Pensionen. Wir übernehmen die komplette Reinigung nach Hotellerie-Standards – dauerhaft oder zur Hochsaison-Verstärkung.',
    features: ['Zimmerreinigung', 'Bettwäschewechsel', 'Etagenreinigung', 'Bad-Desinfektion'],
    image: 'https://images.unsplash.com/photo-1590490360182-c33d57733427?q=80&w=800&auto=format&fit=crop',
    zielgruppe: 'Hotels, Pensionen, Ferienwohnungen',
  },
  {
    id: 'tagungsraum-reinigung',
    icon: Users,
    title: 'Tagungsraum-Reinigung',
    subtitle: 'Für produktive Meetings',
    description: 'Saubere Konferenz- und Tagungsräume für professionelle Meetings. Reinigung zwischen den Terminen, Tischdesinfektion und Bestuhlung auf Wunsch.',
    features: ['Zwischenreinigung', 'Tischdesinfektion', 'Lüften', 'Müllleerung'],
    image: 'https://images.unsplash.com/photo-1497366811353-6870744d04b2?q=80&w=800&auto=format&fit=crop',
    zielgruppe: 'Tagungshotels, Konferenzzentren, Unternehmen',
  },
  {
    id: 'catering-reinigung',
    icon: UtensilsCrossed,
    title: 'Catering-Bereich-Reinigung',
    subtitle: 'Hygiene im Fokus',
    description: 'Reinigung von Küchen, Ausgabebereichen und Spülstationen bei Events und in der Gastronomie. Hygienisch einwandfrei nach HACCP-Grundsätzen.',
    features: ['Küchenreinigung', 'Ausgabebereich', 'Spülstation', 'Fettentfernung'],
    image: 'https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?q=80&w=800&auto=format&fit=crop',
    zielgruppe: 'Caterer, Eventlocations, Gastronomie',
  },
  {
    id: 'vip-reinigung',
    icon: Shield,
    title: 'VIP- & Premium-Reinigung',
    subtitle: 'Höchste Ansprüche',
    description: 'Besonders gründliche Reinigung für repräsentative Räume, Vorstandsetagen und exklusive Veranstaltungen. Premium-Service mit erfahrenen Fachkräften.',
    features: ['Repräsentative Räume', 'Hochwertige Mittel', 'Flexible Zeiten', 'Diskretion'],
    image: 'https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=800&auto=format&fit=crop',
    zielgruppe: 'Vorstände, Luxushotels, Exklusive Events',
  },
]

export default function LeistungskategorienSection() {
  return (
    <section id="leistungen" className="py-12 sm:py-16 lg:py-28 bg-[#f8f9fa]">
      <div className="w-full max-w-[1800px] mx-auto px-4 sm:px-6 md:px-8 lg:px-12 xl:px-20">

        {/* Section Header */}
        <div className="max-w-3xl mb-10 sm:mb-12 lg:mb-16">
          <span className="text-[#109387] font-bold text-xs sm:text-sm uppercase tracking-wide mb-3 sm:mb-4 block">
            Unsere Leistungen
          </span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-[#012956] leading-tight mb-4 sm:mb-6">
            Reinigung für jede Veranstaltung
          </h2>
          <p className="text-base sm:text-lg text-gray-600 font-semibold leading-relaxed">
            Von der Event-Reinigung bis zur Hotelzimmer-Reinigung: Wir sorgen für
            makellose Sauberkeit bei Ihren Veranstaltungen, in Hotels und Tagungsräumen.
            Vor, während und nach dem Event – zuverlässig und diskret.
          </p>
        </div>

        {/* Services Grid - 2x3 auf Desktop, 1 Spalte auf Mobile */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {leistungen.map((leistung) => {
            const Icon = leistung.icon
            return (
              <a
                key={leistung.id}
                href="#kontakt"
                className="group bg-white rounded-[8px] overflow-hidden shadow-sm hover:shadow-2xl transition-all duration-500 border border-gray-100 cursor-pointer block"
              >
                {/* Image */}
                <div className="relative h-48 sm:h-52 lg:h-56 overflow-hidden">
                  <Image
                    src={leistung.image}
                    alt={leistung.title}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                    sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  />
                  {/* Default dark gradient */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#012956]/90 via-[#012956]/40 to-transparent transition-opacity duration-500 group-hover:opacity-0" />

                  {/* Hover: White overlay from bottom */}
                  <div className="absolute inset-0 bg-gradient-to-t from-white via-white/95 to-white/70 opacity-0 group-hover:opacity-100 transition-all duration-500" />

                  {/* Icon & Title Container */}
                  <div className="absolute bottom-0 left-0 right-0 p-5">
                    {/* Icon Box */}
                    <div className="w-12 h-12 sm:w-14 sm:h-14 bg-[#109387] rounded-[8px] flex items-center justify-center mb-3 shadow-lg transition-all duration-500 group-hover:bg-[#012956]">
                      <Icon size={24} strokeWidth={1.5} className="text-white" aria-hidden="true" />
                    </div>

                    {/* Subtitle */}
                    <span className="text-white/80 font-semibold text-xs sm:text-sm uppercase tracking-wider transition-colors duration-500 group-hover:text-[#109387]">
                      {leistung.subtitle}
                    </span>

                    {/* Main Title */}
                    <h3 className="text-white font-bold text-lg sm:text-xl mt-1 transition-colors duration-500 group-hover:text-[#012956]">
                      {leistung.title}
                    </h3>
                  </div>
                </div>

                {/* Content */}
                <div className="p-5 sm:p-6">
                  {/* Description */}
                  <p className="text-gray-600 font-semibold text-sm sm:text-[15px] leading-relaxed mb-4">
                    {leistung.description}
                  </p>

                  {/* Features */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {leistung.features.map((feature, idx) => (
                      <span
                        key={idx}
                        className="text-xs font-semibold text-[#012956] bg-[#f8f9fa] px-2.5 py-1 rounded-[4px]"
                      >
                        {feature}
                      </span>
                    ))}
                  </div>

                  {/* Zielgruppe */}
                  <p className="text-xs text-gray-500 font-semibold mb-4">
                    Ideal für: {leistung.zielgruppe}
                  </p>

                  {/* CTA Visual */}
                  <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                    <span className="text-[#109387] font-bold text-sm sm:text-[15px] group-hover:text-[#012956] transition-colors">
                      Jetzt anfragen
                    </span>
                    <ArrowRight
                      size={18}
                      strokeWidth={2}
                      className="text-[#109387] group-hover:translate-x-1 group-hover:text-[#012956] transition-all duration-300"
                      aria-hidden="true"
                    />
                  </div>
                </div>
              </a>
            )
          })}
        </div>

        {/* Bottom CTA */}
        <div className="mt-12 sm:mt-16 text-center">
          <p className="text-gray-600 font-semibold mb-4">
            Sie haben spezielle Anforderungen?
          </p>
          <a
            href="#kontakt"
            className="inline-flex items-center gap-3 bg-[#109387] hover:bg-[#0d7d72] text-white font-bold text-base sm:text-lg px-6 sm:px-8 py-3 sm:py-4 rounded-[6px] transition-all duration-300 group"
          >
            Individuelles Angebot anfragen
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" aria-hidden="true" />
          </a>
        </div>

      </div>
    </section>
  )
}
