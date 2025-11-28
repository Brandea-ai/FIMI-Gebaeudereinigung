import { Check, Sparkles, ArrowRight } from 'lucide-react'
import Link from 'next/link'
import { Branche } from '@/lib/branchen-data'

interface BrancheServicesProps {
  branche: Branche
}

// Map service names to leistungen URLs
const serviceToUrl: Record<string, string> = {
  'Unterhaltsreinigung': '/leistungen/unterhaltsreinigung',
  'Büroreinigung': '/leistungen/bueroreinigung',
  'Glasreinigung': '/leistungen/glasreinigung',
  'Fensterreinigung': '/leistungen/fensterreinigung',
  'Sanitärreinigung': '/leistungen/unterhaltsreinigung',
  'Teppichreinigung': '/leistungen/sonderreinigung',
  'Küchenreinigung': '/leistungen/unterhaltsreinigung',
  'Industriereinigung': '/leistungen/industriereinigung',
  'Maschinenreinigung': '/leistungen/maschinenreinigung',
  'Hallenreinigung': '/leistungen/hallenreinigung',
  'Bodenreinigung': '/leistungen/unterhaltsreinigung',
  'Sonderreinigung': '/leistungen/sonderreinigung',
  'Desinfektion': '/leistungen/sonderreinigung',
  'Grundreinigung': '/leistungen/sonderreinigung',
  'Fassadenreinigung': '/leistungen/fassadenreinigung',
  'Außenanlagenpflege': '/leistungen/aussenanlagenpflege',
  'Winterdienst': '/leistungen/winterdienst',
  'Tiefgaragenreinigung': '/leistungen/tiefgaragenreinigung',
  'Baureinigung': '/leistungen/baureinigung',
  'Facility Management': '/leistungen/facility-management',
}

export function BrancheServices({ branche }: BrancheServicesProps) {
  if (!branche.services || branche.services.length === 0) return null

  return (
    <section className="py-16 md:py-24 lg:py-32 bg-[#012956]">
      <div className="w-full max-w-[1800px] mx-auto px-6 lg:px-12 xl:px-20">

        {/* Section Header */}
        <div className="flex items-center gap-4 mb-4">
          <div className="w-12 h-12 rounded-[8px] bg-[#109387]/20 flex items-center justify-center">
            <Sparkles size={24} strokeWidth={1.5} className="text-[#109387]" />
          </div>
          <span className="text-[#109387] font-bold text-sm uppercase tracking-[0.2em]">
            Passende Leistungen
          </span>
        </div>

        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-4 mb-12 md:mb-16">
          <h2 className="text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold text-white leading-tight">
            Unsere Services<br className="hidden sm:block" />
            <span className="text-[#109387]">für {branche.shortName}</span>
          </h2>
          <p className="text-lg text-white/70 max-w-xl">
            Professionelle Reinigungslösungen, speziell abgestimmt auf die Anforderungen Ihrer Branche.
          </p>
        </div>

        {/* Services Grid - Premium Cards */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-4 lg:gap-6">
          {branche.services.map((service, i) => {
            const url = serviceToUrl[service] || '/leistungen'
            return (
              <Link
                key={i}
                href={url}
                className="group relative bg-white/5 backdrop-blur-sm hover:bg-white rounded-[12px] p-6 border border-white/10 hover:border-[#109387] transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl"
              >
                {/* Number Badge */}
                <div className="absolute -top-3 -right-3 w-8 h-8 bg-[#109387] rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                  <ArrowRight size={14} className="text-white" />
                </div>

                {/* Check Icon */}
                <div className="w-12 h-12 rounded-full bg-[#109387]/20 group-hover:bg-[#109387] flex items-center justify-center mb-4 transition-colors">
                  <Check size={24} strokeWidth={2} className="text-[#109387] group-hover:text-white transition-colors" />
                </div>

                {/* Service Name */}
                <p className="text-white group-hover:text-[#012956] font-bold text-base leading-tight transition-colors">
                  {service}
                </p>

                {/* Hover Hint */}
                <p className="text-white/50 group-hover:text-[#109387] text-xs mt-2 opacity-0 group-hover:opacity-100 transition-opacity">
                  Mehr erfahren
                </p>
              </Link>
            )
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
