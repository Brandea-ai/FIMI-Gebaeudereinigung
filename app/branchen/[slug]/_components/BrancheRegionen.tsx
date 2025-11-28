import Image from 'next/image'
import { MapPin, ArrowRight, CheckCircle } from 'lucide-react'
import { Branche } from '@/lib/branchen-data'

interface BrancheRegionenProps {
  branche: Branche
}

// Die 8 Einsatzorte mit SEO-Keywords
const einsatzorte = [
  { name: 'Landshut', region: 'Niederbayern' },
  { name: 'München', region: 'Oberbayern' },
  { name: 'Regensburg', region: 'Oberpfalz' },
  { name: 'Ingolstadt', region: 'Oberbayern' },
  { name: 'Freising', region: 'Oberbayern' },
  { name: 'Erding', region: 'Oberbayern' },
  { name: 'Straubing', region: 'Niederbayern' },
  { name: 'Passau', region: 'Niederbayern' },
]

export function BrancheRegionen({ branche }: BrancheRegionenProps) {
  return (
    <section className="py-12 sm:py-16 md:py-24 lg:py-32 bg-gray-50">
      <div className="w-full max-w-[1800px] mx-auto px-6 lg:px-12 xl:px-20">

        {/* Section Header */}
        <div className="text-center mb-8 sm:mb-12 md:mb-16">
          <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold text-[#012956] leading-tight mb-4">
            {branche.shortName} Reinigung{' '}
            <span className="text-[#109387]">in ganz Bayern</span>
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">
            Unsere Teams sind in 8 Regionen für Sie im Einsatz - schnell, zuverlässig und professionell.
          </p>
        </div>

        {/* Two Column Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 lg:gap-12 items-center">

          {/* Left: Bayern Karte */}
          <div className="relative">
            <Image
              src="/images/home/staedte-fimi.avif"
              alt={`${branche.name} Reinigung in Bayern - Unsere 8 Einsatzorte`}
              width={4800}
              height={3584}
              className="w-full h-auto rounded-[6px] shadow-lg"
            />
          </div>

          {/* Right: Städte Grid + CTA */}
          <div className="bg-white rounded-[6px] p-5 sm:p-6 md:p-8 lg:p-10 shadow-lg border border-gray-100">

            {/* Headline */}
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-[6px] bg-[#109387]/10 flex items-center justify-center">
                <MapPin size={20} className="text-[#109387] sm:w-6 sm:h-6" />
              </div>
              <div>
                <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-[#012956]">
                  8 Einsatzorte in Bayern
                </h3>
                <p className="text-sm sm:text-base text-gray-600">
                  Kurze Anfahrtswege - schneller Service
                </p>
              </div>
            </div>

            {/* Städte Grid - 2x4 */}
            <div className="grid grid-cols-2 gap-3 sm:gap-4 mb-6 sm:mb-8">
              {einsatzorte.map((stadt) => (
                <div
                  key={stadt.name}
                  className="flex items-center gap-2 sm:gap-3 bg-gray-50 rounded-[6px] p-3 sm:p-4"
                >
                  <CheckCircle size={16} className="text-[#109387] flex-shrink-0 sm:w-5 sm:h-5" />
                  <div>
                    <p className="font-bold text-[#012956] text-sm sm:text-base">{stadt.name}</p>
                    <p className="text-xs text-gray-500">{stadt.region}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Trust Points */}
            <div className="border-t border-gray-100 pt-5 sm:pt-6 mb-6 sm:mb-8">
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 sm:gap-4">
                <div className="text-center sm:text-left">
                  <p className="text-2xl sm:text-3xl font-bold text-[#109387]">30 Min</p>
                  <p className="text-xs sm:text-sm text-gray-600">Max. Anfahrtszeit</p>
                </div>
                <div className="text-center sm:text-left">
                  <p className="text-2xl sm:text-3xl font-bold text-[#109387]">8+</p>
                  <p className="text-xs sm:text-sm text-gray-600">Jahre Erfahrung</p>
                </div>
                <div className="text-center sm:text-left">
                  <p className="text-2xl sm:text-3xl font-bold text-[#109387]">2h</p>
                  <p className="text-xs sm:text-sm text-gray-600">Notfall-Reaktion</p>
                </div>
              </div>
            </div>

            {/* CTA */}
            <a
              href="#contact-form"
              className="flex items-center justify-center gap-2 sm:gap-3 bg-[#109387] hover:bg-[#0d7d72] text-white font-bold text-base sm:text-lg px-6 sm:px-8 py-3.5 sm:py-4 rounded-[6px] transition-all duration-300 group w-full"
            >
              Kostenfreie Besichtigung in Ihrer Nähe
              <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform sm:w-5 sm:h-5" />
            </a>
          </div>

        </div>

        {/* SEO Text */}
        <div className="mt-8 sm:mt-12 text-center">
          <p className="text-sm sm:text-base text-gray-600 max-w-4xl mx-auto leading-relaxed">
            Als regionaler Partner für <strong className="text-[#012956]">{branche.name}</strong> sind wir in
            Landshut, München, Regensburg, Ingolstadt, Freising, Erding, Straubing und Passau für Sie da.
            Profitieren Sie von kurzen Anfahrtswegen, lokalen Teams und persönlicher Betreuung vor Ort.
          </p>
        </div>

      </div>
    </section>
  )
}
