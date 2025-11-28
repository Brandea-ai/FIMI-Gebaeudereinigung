import Link from 'next/link'
import { ArrowRight, Check } from 'lucide-react'
import { Branche } from '@/lib/branchen-data'

interface BrancheServicesProps {
  branche: Branche
}

// Nur echte Leistungs-Seiten verlinken, KEINE /leistungen Übersicht
const serviceToUrl: Record<string, string> = {
  'Unterhaltsreinigung': '/leistungen/unterhaltsreinigung',
  'Büroreinigung': '/leistungen/bueroreinigung',
  'Glasreinigung': '/leistungen/glasreinigung',
  'Fensterreinigung': '/leistungen/fensterreinigung',
  'Industriereinigung': '/leistungen/industriereinigung',
  'Maschinenreinigung': '/leistungen/maschinenreinigung',
  'Hallenreinigung': '/leistungen/hallenreinigung',
  'Sonderreinigung': '/leistungen/sonderreinigung',
  'Fassadenreinigung': '/leistungen/fassadenreinigung',
  'Außenanlagenpflege': '/leistungen/aussenanlagenpflege',
  'Winterdienst': '/leistungen/winterdienst',
  'Tiefgaragenreinigung': '/leistungen/tiefgaragenreinigung',
  'Baureinigung': '/leistungen/baureinigung',
  'Facility Management': '/leistungen/facility-management',
  'Hausmeisterservice': '/leistungen/hausmeisterservice',
  'Parkplatzreinigung': '/leistungen/parkplatzreinigung',
  // Mapping für ähnliche Services auf passende Seiten
  'Hochregalreinigung': '/leistungen/hallenreinigung',
  'Bodenreinigung': '/leistungen/unterhaltsreinigung',
  'Grundreinigung': '/leistungen/sonderreinigung',
  'Desinfektion': '/leistungen/sonderreinigung',
  'Sanitärreinigung': '/leistungen/unterhaltsreinigung',
  'Teppichreinigung': '/leistungen/sonderreinigung',
  'Küchenreinigung': '/leistungen/unterhaltsreinigung',
  'Treppenhausreinigung': '/leistungen/unterhaltsreinigung',
  'Grünflächenpflege': '/leistungen/aussenanlagenpflege',
}

export function BrancheServices({ branche }: BrancheServicesProps) {
  if (!branche.services || branche.services.length === 0) return null

  return (
    <section className="py-16 md:py-24 lg:py-32 bg-[#012956]">
      <div className="w-full max-w-[1800px] mx-auto px-6 lg:px-12 xl:px-20">

        {/* Section Header */}
        <h2 className="text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold text-white leading-tight mb-12 md:mb-16">
          Unsere Services{' '}
          <span className="text-[#109387]">für {branche.shortName}</span>
        </h2>

        {/* Services Grid - Einheitliche Icons (Check) */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-4 lg:gap-6">
          {branche.services.map((service, i) => {
            const url = serviceToUrl[service]
            // Nur verlinken wenn echte Leistungs-Seite existiert
            const hasRealPage = url !== undefined

            if (hasRealPage) {
              return (
                <Link
                  key={i}
                  href={url}
                  className="group relative bg-white/5 hover:bg-white rounded-[6px] p-6 border border-white/10 hover:border-[#109387] transition-all duration-500 hover:-translate-y-1 hover:shadow-2xl"
                >
                  {/* Einheitliches Icon */}
                  <div className="w-12 h-12 rounded-[6px] bg-[#109387]/20 group-hover:bg-[#109387] flex items-center justify-center mb-4 transition-colors">
                    <Check size={24} strokeWidth={2} className="text-[#109387] group-hover:text-white transition-colors" />
                  </div>
                  <p className="text-white group-hover:text-[#012956] font-bold text-base leading-tight transition-colors">
                    {service}
                  </p>
                </Link>
              )
            } else {
              // Ohne Link wenn keine echte Seite existiert
              return (
                <div
                  key={i}
                  className="bg-white/5 rounded-[6px] p-6 border border-white/10"
                >
                  <div className="w-12 h-12 rounded-[6px] bg-[#109387]/20 flex items-center justify-center mb-4">
                    <Check size={24} strokeWidth={2} className="text-[#109387]" />
                  </div>
                  <p className="text-white font-bold text-base leading-tight">
                    {service}
                  </p>
                </div>
              )
            }
          })}
        </div>

        {/* CTA */}
        <div className="text-center mt-12 md:mt-16">
          <Link
            href="/leistungen"
            className="inline-flex items-center gap-3 bg-[#109387] hover:bg-[#0d7d72] text-white font-bold text-lg px-8 py-4 rounded-[6px] transition-all duration-300 group shadow-lg"
          >
            Alle Leistungen entdecken
            <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>

      </div>
    </section>
  )
}
