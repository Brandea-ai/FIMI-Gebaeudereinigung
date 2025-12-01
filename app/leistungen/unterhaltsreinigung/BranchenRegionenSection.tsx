'use client'

import Link from 'next/link'
import Image from 'next/image'
import { ArrowRight, Building2, Stethoscope, ShoppingBag, Factory, GraduationCap, Home, MapPin } from 'lucide-react'

const branchen = [
  { icon: Building2, name: 'Büro & Verwaltung', href: '/branchen/buero-verwaltung', beschreibung: 'Bürokomplexe, Agenturen, Kanzleien' },
  { icon: Stethoscope, name: 'Gesundheitswesen', href: '/branchen/gesundheitswesen', beschreibung: 'Praxen, Kliniken, Pflegeeinrichtungen' },
  { icon: ShoppingBag, name: 'Einzelhandel', href: '/branchen/einzelhandel', beschreibung: 'Geschäfte, Einkaufszentren, Showrooms' },
  { icon: Factory, name: 'Industrie', href: '/branchen/industrie-produktion', beschreibung: 'Produktion, Logistik, Werkstätten' },
  { icon: GraduationCap, name: 'Bildung', href: '/branchen/bildung-oeffentlich', beschreibung: 'Schulen, Kitas, Universitäten' },
  { icon: Home, name: 'Immobilien', href: '/branchen/immobilien', beschreibung: 'Hausverwaltungen, Wohnanlagen' },
]

const standorte = [
  { name: 'Landshut', region: 'Hauptsitz' },
  { name: 'München', region: 'Oberbayern' },
  { name: 'Regensburg', region: 'Oberpfalz' },
  { name: 'Ingolstadt', region: 'Oberbayern' },
  { name: 'Freising', region: 'Oberbayern' },
  { name: 'Erding', region: 'Oberbayern' },
  { name: 'Straubing', region: 'Niederbayern' },
  { name: 'Passau', region: 'Niederbayern' },
]

export default function BranchenRegionenSection() {
  return (
    <section className="py-20 lg:py-28 bg-white">
      <div className="w-full max-w-[1800px] mx-auto px-6 lg:px-12 xl:px-20">

        {/* Two Column Layout */}
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">

          {/* Left: Branchen */}
          <div>
            <p className="text-sm text-[#109387] font-bold uppercase tracking-wide mb-3">
              Branchen
            </p>
            <h2 className="text-2xl lg:text-3xl font-bold text-[#012956] leading-[1.1] mb-4">
              Unterhaltsreinigung für Ihre Branche
            </h2>
            <p className="text-gray-700 font-semibold leading-relaxed mb-8">
              Jede Branche hat eigene Anforderungen an Sauberkeit und Hygiene.
              Wir kennen die Besonderheiten und passen unsere Reinigung entsprechend an.
            </p>

            <div className="grid grid-cols-2 gap-4 mb-8">
              {branchen.map((branche) => {
                const Icon = branche.icon
                return (
                  <Link
                    key={branche.name}
                    href={branche.href}
                    className="group flex items-start gap-3 p-4 bg-[#f8f9fa] rounded-[6px] hover:bg-[#012956] transition-all duration-300"
                  >
                    <div className="w-10 h-10 bg-[#109387]/10 rounded-[6px] flex items-center justify-center flex-shrink-0 group-hover:bg-[#109387]/20 transition-colors">
                      <Icon size={20} className="text-[#109387]" />
                    </div>
                    <div>
                      <h3 className="font-bold text-[#012956] group-hover:text-white transition-colors text-sm">
                        {branche.name}
                      </h3>
                      <p className="text-gray-500 text-xs font-semibold group-hover:text-white/70 transition-colors">
                        {branche.beschreibung}
                      </p>
                    </div>
                  </Link>
                )
              })}
            </div>

            <Link
              href="/branchen"
              className="inline-flex items-center gap-2 text-[#109387] font-bold hover:text-[#012956] transition-colors"
            >
              Alle Branchen ansehen
              <ArrowRight size={18} />
            </Link>
          </div>

          {/* Right: Regionen */}
          <div>
            <p className="text-sm text-[#109387] font-bold uppercase tracking-wide mb-3">
              Standorte
            </p>
            <h2 className="text-2xl lg:text-3xl font-bold text-[#012956] leading-[1.1] mb-4">
              Unterhaltsreinigung in ganz Bayern
            </h2>
            <p className="text-gray-700 font-semibold leading-relaxed mb-8">
              Von Landshut aus betreuen wir Kunden in ganz Bayern.
              Kurze Wege, schnelle Reaktionszeiten, lokale Teams.
            </p>

            {/* Map Image */}
            <div className="relative h-48 rounded-[6px] overflow-hidden mb-6">
              <Image
                src="/images/home/staedte-fimi.avif"
                alt="FIMI Standorte in Bayern"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#012956]/80 to-transparent" />
              <div className="absolute bottom-4 left-4">
                <p className="text-white font-bold text-lg">8 Standorte</p>
                <p className="text-white/70 font-semibold text-sm">in ganz Bayern</p>
              </div>
            </div>

            {/* Standorte Grid */}
            <div className="grid grid-cols-4 gap-3 mb-6">
              {standorte.map((standort) => (
                <div
                  key={standort.name}
                  className="text-center p-3 bg-[#f8f9fa] rounded-[6px] hover:bg-[#109387]/10 transition-colors"
                >
                  <MapPin size={16} className="text-[#109387] mx-auto mb-1" />
                  <p className="font-bold text-[#012956] text-sm">{standort.name}</p>
                  <p className="text-gray-500 text-xs font-semibold">{standort.region}</p>
                </div>
              ))}
            </div>

            <Link
              href="/unternehmen"
              className="inline-flex items-center gap-2 text-[#109387] font-bold hover:text-[#012956] transition-colors"
            >
              Mehr über FIMI erfahren
              <ArrowRight size={18} />
            </Link>
          </div>

        </div>

      </div>
    </section>
  )
}
