'use client'

import Image from 'next/image'

export default function ImageShowcaseSection() {
  return (
    <section className="py-12 sm:py-16 lg:py-20 bg-white">
      <div className="w-full max-w-[1800px] mx-auto px-4 sm:px-6 md:px-8 lg:px-12 xl:px-20">

        {/* Full-width Image mit Text-Overlay */}
        <div className="relative rounded-[6px] overflow-hidden">
          <Image
            src="https://images.unsplash.com/photo-1581578731548-c64695cc6952?q=80&w=2400&auto=format&fit=crop"
            alt="Professionelle Fensterreinigung - Team bei der Arbeit an Glasfassade"
            width={2400}
            height={1200}
            className="w-full h-auto"
            priority
          />

          {/* Gradient Overlay von unten */}
          <div className="absolute inset-0 bg-gradient-to-t from-[#012956]/90 via-[#012956]/40 to-transparent" />

          {/* Text Content */}
          <div className="absolute bottom-0 left-0 right-0 p-6 sm:p-8 lg:p-12">
            <div className="max-w-3xl">
              <span className="text-[#109387] font-bold text-xs sm:text-sm uppercase tracking-wide mb-2 sm:mb-3 block">
                Professionell ausgestattet
              </span>
              <h3 className="text-xl sm:text-2xl lg:text-4xl font-bold text-white mb-3 sm:mb-4">
                Modernste Technik für jede Herausforderung
              </h3>
              <p className="text-white/80 font-semibold text-sm sm:text-base lg:text-lg leading-relaxed max-w-2xl">
                Ob Bürofenster im Erdgeschoss oder Glasfassade in 30 Metern Höhe –
                unsere Teams sind mit professionellem Equipment ausgestattet und für
                alle Situationen geschult.
              </p>
            </div>
          </div>
        </div>

      </div>
    </section>
  )
}
