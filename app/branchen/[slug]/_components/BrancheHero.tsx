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
    <section id="hero" className="relative min-h-[85vh] lg:min-h-screen">

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
        <div className="w-full max-w-[1800px] mx-auto px-4 sm:px-6 lg:px-12 xl:px-20 py-24 lg:py-32">

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

            {/* Main Headline - VOLLSTÄNDIG sichtbar, keine Abschneidung */}
            <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-[2.75rem] font-bold text-white leading-tight mb-6">
              {branche.headline}
            </h1>

            {/* Subheadline */}
            <p className="text-base sm:text-lg md:text-xl lg:text-2xl font-bold text-white/90 mb-8 md:mb-10 leading-snug max-w-4xl">
              {branche.subheadline}
            </p>

            {/* Trust-Punkte - Mobile 1 Spalte, ab sm 2 Spalten */}
            {branche.benefits && branche.benefits.length > 0 && (
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 md:gap-x-8 gap-y-2 sm:gap-y-3 mb-8 md:mb-12 max-w-3xl">
                {branche.benefits.slice(0, 4).map((benefit, i) => (
                  <div key={i} className="flex items-center gap-2">
                    <CheckCircle size={18} className="text-[#109387] flex-shrink-0 sm:w-[22px] sm:h-[22px]" />
                    <span className="text-white font-semibold text-base sm:text-lg">{benefit}</span>
                  </div>
                ))}
              </div>
            )}

            {/* CTAs - Mobile Stack, Desktop nebeneinander */}
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
              <a
                href="#contact-form"
                className="inline-flex items-center justify-center gap-2 sm:gap-3 bg-[#109387] hover:bg-[#0d7d72] text-white font-bold text-base sm:text-lg px-6 sm:px-8 py-3.5 sm:py-4 rounded-[6px] transition-all duration-300 group shadow-lg"
              >
                Kostenfreie Besichtigung
                <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform sm:w-5 sm:h-5" />
              </a>
              <a
                href="tel:+4987143033460"
                className="inline-flex items-center justify-center gap-2 sm:gap-3 bg-white hover:bg-gray-100 text-[#012956] font-bold text-base sm:text-lg px-6 sm:px-8 py-3.5 sm:py-4 rounded-[6px] transition-all duration-300"
              >
                <Phone size={18} className="sm:w-5 sm:h-5" />
                0871 430 334 60
              </a>
            </div>

          </div>

        </div>
      </div>

      {/* Floating Trust Badge - nur auf größeren Screens */}
      <div className="absolute bottom-6 right-6 md:bottom-8 md:right-8 lg:bottom-12 lg:right-12 hidden md:block">
        <div className="bg-white rounded-[6px] p-4 md:p-5 shadow-2xl">
          <div className="flex items-center gap-3 md:gap-4">
            <MapPin size={24} className="text-[#109387] md:w-7 md:h-7" />
            <div>
              <div className="font-bold text-[#012956] text-base md:text-lg">
                Kostenfreie Vor-Ort-Besichtigung
              </div>
              <div className="text-gray-600 text-sm md:text-base">
                Wir kommen zu Ihnen – unverbindlich.
              </div>
            </div>
          </div>
        </div>
      </div>

    </section>
  )
}
