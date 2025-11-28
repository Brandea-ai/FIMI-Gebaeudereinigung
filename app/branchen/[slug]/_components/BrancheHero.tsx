import Link from 'next/link'
import { ArrowRight, ArrowLeft, Phone, CheckCircle, MapPin, Building2, Factory, Stethoscope, ShoppingBag, UtensilsCrossed, GraduationCap, Dumbbell, Warehouse, Home, Landmark, Banknote, Car } from 'lucide-react'
import { Branche } from '@/lib/branchen-data'

interface BrancheHeroProps {
  branche: Branche
}

// Icon Mapping - direkt im Component für Server-Side Rendering
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
        {/* Overlay für besseren Kontrast - wie Homepage */}
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

          <div className="max-w-4xl">

            {/* Branche Badge */}
            <div className="flex items-center gap-4 mb-6">
              <div className="w-14 h-14 rounded-[8px] bg-[#109387]/20 flex items-center justify-center">
                {getIcon(branche.icon, 'text-[#109387]')}
              </div>
              <span className="text-[#109387] font-bold text-sm uppercase tracking-[0.2em]">
                {branche.shortName}
              </span>
            </div>

            {/* Main Headline - Groß wie Homepage */}
            <h1 className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-white leading-[1.08] mb-6">
              {branche.headline}
            </h1>

            {/* Subheadline - Fett und groß */}
            <p className="text-xl md:text-2xl lg:text-3xl font-bold text-white mb-4 leading-snug">
              {branche.subheadline}
            </p>

            {/* Description */}
            <p className="text-lg md:text-xl text-white/80 font-medium leading-relaxed mb-10 max-w-3xl">
              {branche.description}
            </p>

            {/* Trust-Punkte - wie Homepage mit CheckCircle */}
            {branche.benefits && branche.benefits.length > 0 && (
              <div className="flex flex-wrap gap-x-8 gap-y-3 mb-12">
                {branche.benefits.slice(0, 4).map((benefit, i) => (
                  <div key={i} className="flex items-center gap-2">
                    <CheckCircle size={22} className="text-[#109387] flex-shrink-0" />
                    <span className="text-white font-semibold text-lg">{benefit}</span>
                  </div>
                ))}
              </div>
            )}

            {/* CTAs - Premium Styling wie Homepage */}
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

      {/* Floating Trust Badge - wie Homepage */}
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

      {/* Stats Badge - Rechts oben auf Desktop */}
      <div className="absolute top-32 right-8 lg:top-40 lg:right-12 hidden xl:block">
        <div className="bg-white/10 backdrop-blur-sm rounded-[8px] p-6 border border-white/20">
          <p className="text-[#109387] font-bold text-xs uppercase tracking-[0.2em] mb-4">
            Unsere Expertise
          </p>
          <div className="grid grid-cols-3 gap-6">
            <div className="text-center">
              <p className="text-3xl font-bold text-white">8+</p>
              <p className="text-white/70 text-xs mt-1">Jahre Erfahrung</p>
            </div>
            <div className="text-center">
              <p className="text-3xl font-bold text-white">85k</p>
              <p className="text-white/70 text-xs mt-1">m² monatlich</p>
            </div>
            <div className="text-center">
              <p className="text-3xl font-bold text-white">2h</p>
              <p className="text-white/70 text-xs mt-1">Reaktionszeit</p>
            </div>
          </div>
        </div>
      </div>

    </section>
  )
}
