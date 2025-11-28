import Link from 'next/link'
import { ArrowRight, Brush, Sparkles, Wind, Building, Factory, Truck, Snowflake, Wrench, TreePine, Construction, Car, Layers, Droplets, Shield, Home, Warehouse as WarehouseIcon } from 'lucide-react'
import { Branche } from '@/lib/branchen-data'

interface BrancheServicesProps {
  branche: Branche
}

// Individuelle Icons pro Leistung
const serviceConfig: Record<string, { icon: React.ReactNode; url: string }> = {
  'Unterhaltsreinigung': { icon: <Brush size={24} strokeWidth={1.5} />, url: '/leistungen/unterhaltsreinigung' },
  'Büroreinigung': { icon: <Building size={24} strokeWidth={1.5} />, url: '/leistungen/bueroreinigung' },
  'Glasreinigung': { icon: <Sparkles size={24} strokeWidth={1.5} />, url: '/leistungen/glasreinigung' },
  'Fensterreinigung': { icon: <Wind size={24} strokeWidth={1.5} />, url: '/leistungen/fensterreinigung' },
  'Industriereinigung': { icon: <Factory size={24} strokeWidth={1.5} />, url: '/leistungen/industriereinigung' },
  'Maschinenreinigung': { icon: <Wrench size={24} strokeWidth={1.5} />, url: '/leistungen/maschinenreinigung' },
  'Hallenreinigung': { icon: <WarehouseIcon size={24} strokeWidth={1.5} />, url: '/leistungen/hallenreinigung' },
  'Hochregalreinigung': { icon: <Layers size={24} strokeWidth={1.5} />, url: '/leistungen/hallenreinigung' },
  'Bodenreinigung': { icon: <Droplets size={24} strokeWidth={1.5} />, url: '/leistungen/unterhaltsreinigung' },
  'Sonderreinigung': { icon: <Shield size={24} strokeWidth={1.5} />, url: '/leistungen/sonderreinigung' },
  'Grundreinigung': { icon: <Sparkles size={24} strokeWidth={1.5} />, url: '/leistungen/sonderreinigung' },
  'Desinfektion': { icon: <Shield size={24} strokeWidth={1.5} />, url: '/leistungen/sonderreinigung' },
  'Fassadenreinigung': { icon: <Building size={24} strokeWidth={1.5} />, url: '/leistungen/fassadenreinigung' },
  'Außenanlagenpflege': { icon: <TreePine size={24} strokeWidth={1.5} />, url: '/leistungen/aussenanlagenpflege' },
  'Winterdienst': { icon: <Snowflake size={24} strokeWidth={1.5} />, url: '/leistungen/winterdienst' },
  'Tiefgaragenreinigung': { icon: <Car size={24} strokeWidth={1.5} />, url: '/leistungen/tiefgaragenreinigung' },
  'Baureinigung': { icon: <Construction size={24} strokeWidth={1.5} />, url: '/leistungen/baureinigung' },
  'Facility Management': { icon: <Home size={24} strokeWidth={1.5} />, url: '/leistungen/facility-management' },
  'Hausmeisterservice': { icon: <Wrench size={24} strokeWidth={1.5} />, url: '/leistungen/hausmeisterservice' },
  'Sanitärreinigung': { icon: <Droplets size={24} strokeWidth={1.5} />, url: '/leistungen/unterhaltsreinigung' },
  'Teppichreinigung': { icon: <Brush size={24} strokeWidth={1.5} />, url: '/leistungen/sonderreinigung' },
  'Küchenreinigung': { icon: <Sparkles size={24} strokeWidth={1.5} />, url: '/leistungen/unterhaltsreinigung' },
  'Treppenhausreinigung': { icon: <Building size={24} strokeWidth={1.5} />, url: '/leistungen/unterhaltsreinigung' },
  'Parkplatzreinigung': { icon: <Car size={24} strokeWidth={1.5} />, url: '/leistungen/parkplatzreinigung' },
  'Grünflächenpflege': { icon: <TreePine size={24} strokeWidth={1.5} />, url: '/leistungen/aussenanlagenpflege' },
}

export function BrancheServices({ branche }: BrancheServicesProps) {
  if (!branche.services || branche.services.length === 0) return null

  return (
    <section className="py-16 md:py-24 lg:py-32 bg-[#012956]">
      <div className="w-full max-w-[1800px] mx-auto px-6 lg:px-12 xl:px-20">

        {/* Section Header - Kein Icon, kein Eyebrow, kein Einzeiler rechts */}
        <h2 className="text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold text-white leading-tight mb-12 md:mb-16">
          Unsere Services{' '}
          <span className="text-[#109387]">für {branche.shortName}</span>
        </h2>

        {/* Services Grid - Individuelle Icons */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-4 lg:gap-6">
          {branche.services.map((service, i) => {
            const config = serviceConfig[service] || { icon: <Brush size={24} strokeWidth={1.5} />, url: '/leistungen' }
            return (
              <Link
                key={i}
                href={config.url}
                className="group relative bg-white/5 hover:bg-white rounded-[6px] p-6 border border-white/10 hover:border-[#109387] transition-all duration-500 hover:-translate-y-1 hover:shadow-2xl"
              >
                {/* Individuelles Icon */}
                <div className="w-12 h-12 rounded-[6px] bg-[#109387]/20 group-hover:bg-[#109387] flex items-center justify-center mb-4 transition-colors text-[#109387] group-hover:text-white">
                  {config.icon}
                </div>

                {/* Service Name */}
                <p className="text-white group-hover:text-[#012956] font-bold text-base leading-tight transition-colors">
                  {service}
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
