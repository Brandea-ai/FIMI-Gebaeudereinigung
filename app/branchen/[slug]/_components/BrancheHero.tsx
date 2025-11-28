import Link from 'next/link'
import { ArrowRight, ArrowLeft, Phone, CheckCircle, MapPin, Building2, Factory, Stethoscope, ShoppingBag, UtensilsCrossed, GraduationCap, Dumbbell, Warehouse, Home, Landmark, Banknote, Car } from 'lucide-react'
import { Branche } from '@/lib/branchen-data'

interface BrancheHeroProps {
  branche: Branche
}

function getIcon(iconName: string, className: string) {
  const props = { size: 28, strokeWidth: 1.5, className }
  switch (iconName) {
    case 'Building2': return <Building2 {...props} />
    case 'Factory': return <Factory {...props} />
    case 'Stethoscope': return <Stethoscope {...props} />
    case 'ShoppingBag': return <ShoppingBag {...props} />
    case 'UtensilsCrossed': return <UtensilsCrossed {...props} />
    case 'GraduationCap': return <GraduationCap {...props} />
    case 'Dumbbell': return <Dumbbell {...props} />
    case 'Warehouse': return <Warehouse {...props} />
    case 'Home': return <Home {...props} />
    case 'Landmark': return <Landmark {...props} />
    case 'Banknote': return <Banknote {...props} />
    case 'Car': return <Car {...props} />
    default: return <Building2 {...props} />
  }
}

export function BrancheHero({ branche }: BrancheHeroProps) {
  return (
    <section className="relative min-h-[85vh] lg:min-h-screen">

      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src={branche.heroImage}
          alt={branche.name}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#012956]/95 via-[#012956]/85 to-[#012956]/60" />
      </div>

      {/* Content */}
      <div className="relative z-10 min-h-[85vh] lg:min-h-screen flex items-center">
        <div className="w-full max-w-[1800px] mx-auto px-6 lg:px-12 xl:px-20 py-24 lg:py-32">

          {/* Back Link */}
          <Link
            href="/branchen"
            className="inline-flex items-center gap-2 text-white/70 hover:text-white text-base font-semibold mb-8 transition-colors group"
          >
            <ArrowLeft size={18} className="group-hover:-translate-x-1 transition-transform" />
            Alle Branchen
          </Link>

          {/* Full Width Content */}
          <div className="max-w-5xl">

            {/* Branche Badge */}
            <div className="flex items-center gap-4 mb-6">
              <div className="w-14 h-14 rounded-[6px] bg-[#109387]/20 flex items-center justify-center">
                {getIcon(branche.icon, 'text-[#109387]')}
              </div>
              <span className="text-[#109387] font-bold text-sm uppercase tracking-[0.2em]">
                {branche.shortName}
              </span>
            </div>

            {/* Main Headline - EINE Zeile, nicht umbrechen */}
            <h1 className="text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold text-white leading-[1.15] mb-6 whitespace-nowrap overflow-hidden text-ellipsis">
              {branche.headline}
            </h1>

            {/* Subheadline */}
            <p className="text-xl md:text-2xl lg:text-3xl font-bold text-white/90 mb-10 leading-snug max-w-4xl">
              {branche.subheadline}
            </p>

            {/* Trust-Punkte - IMMER 2 pro Zeile mit Grid */}
            {branche.benefits && branche.benefits.length > 0 && (
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-3 mb-12 max-w-3xl">
                {branche.benefits.slice(0, 4).map((benefit, i) => (
                  <div key={i} className="flex items-center gap-2">
                    <CheckCircle size={22} className="text-[#109387] flex-shrink-0" />
                    <span className="text-white font-semibold text-lg">{benefit}</span>
                  </div>
                ))}
              </div>
            )}

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="#contact-form"
                className="inline-flex items-center justify-center gap-3 bg-[#109387] hover:bg-[#0d7d72] text-white font-bold text-lg px-8 py-4 rounded-[6px] transition-all duration-300 group shadow-lg"
              >
                Kostenfreie Besichtigung anfragen
                <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
              </a>
              <a
                href="tel:+4987143033460"
                className="inline-flex items-center justify-center gap-3 bg-white hover:bg-gray-100 text-[#012956] font-bold text-lg px-8 py-4 rounded-[6px] transition-all duration-300"
              >
                <Phone size={20} />
                0871 430 334 60
              </a>
            </div>

          </div>

        </div>
      </div>

      {/* Floating Trust Badge unten rechts */}
      <div className="absolute bottom-8 right-8 lg:bottom-12 lg:right-12 hidden lg:block">
        <div className="bg-white rounded-[6px] p-5 shadow-2xl">
          <div className="flex items-center gap-4">
            <MapPin size={28} className="text-[#109387]" />
            <div>
              <div className="font-bold text-[#012956] text-lg">
                Kostenfreie Vor-Ort-Besichtigung
              </div>
              <div className="text-gray-600">
                Wir kommen zu Ihnen – unverbindlich.
              </div>
            </div>
          </div>
        </div>
      </div>

    </section>
  )
}
