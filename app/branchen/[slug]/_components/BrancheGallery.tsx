'use client'

import { useState } from 'react'
import { ChevronLeft, ChevronRight, Camera } from 'lucide-react'
import { Branche } from '@/lib/branchen-data'

interface BrancheGalleryProps {
  branche: Branche
}

export function BrancheGallery({ branche }: BrancheGalleryProps) {
  const [currentIndex, setCurrentIndex] = useState(0)

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % branche.gallery.length)
  }

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + branche.gallery.length) % branche.gallery.length)
  }

  if (!branche.gallery || branche.gallery.length === 0) return null

  return (
    <section className="py-16 md:py-24 lg:py-32 bg-gray-50">
      <div className="w-full max-w-[1800px] mx-auto px-6 lg:px-12 xl:px-20">

        {/* Section Header - Premium Styling */}
        <div className="flex items-center gap-4 mb-4">
          <div className="w-12 h-12 rounded-[8px] bg-[#109387]/10 flex items-center justify-center">
            <Camera size={24} strokeWidth={1.5} className="text-[#109387]" />
          </div>
          <span className="text-[#109387] font-bold text-sm uppercase tracking-[0.2em]">
            Einblicke
          </span>
        </div>

        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-4 mb-10 md:mb-14">
          <h2 className="text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold text-[#012956] leading-tight">
            {branche.shortName} Reinigung<br className="hidden sm:block" />
            <span className="text-[#109387]">in Aktion</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-xl">
            Professionelle Reinigung für höchste Ansprüche –
            Qualität die man sieht.
          </p>
        </div>

        {/* Desktop Gallery - 4K optimiert */}
        <div className="hidden md:grid md:grid-cols-3 gap-6 lg:gap-8">
          {branche.gallery.map((image, i) => (
            <div
              key={i}
              className="group relative aspect-[4/3] rounded-[12px] overflow-hidden shadow-lg"
            >
              <img
                src={image.src}
                alt={image.alt}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#012956]/80 via-[#012956]/20 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500" />

              {/* Caption */}
              <div className="absolute bottom-0 left-0 right-0 p-6 translate-y-full group-hover:translate-y-0 transition-transform duration-500">
                <p className="text-white font-bold text-lg">{image.caption}</p>
              </div>

              {/* Corner Badge */}
              <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center shadow-lg">
                  <Camera size={18} className="text-[#109387]" />
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Mobile Slider */}
        <div className="md:hidden relative">
          <div className="relative aspect-[4/3] rounded-[12px] overflow-hidden shadow-xl">
            <img
              src={branche.gallery[currentIndex].src}
              alt={branche.gallery[currentIndex].alt}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#012956]/70 via-transparent to-transparent" />
            <div className="absolute bottom-0 left-0 right-0 p-5">
              <p className="text-white font-bold text-base">{branche.gallery[currentIndex].caption}</p>
            </div>
          </div>

          {/* Navigation Buttons */}
          {branche.gallery.length > 1 && (
            <>
              <button
                onClick={prevSlide}
                className="absolute left-3 top-1/2 -translate-y-1/2 w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-xl hover:scale-110 transition-transform"
                aria-label="Vorheriges Bild"
              >
                <ChevronLeft size={24} className="text-[#012956]" />
              </button>
              <button
                onClick={nextSlide}
                className="absolute right-3 top-1/2 -translate-y-1/2 w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-xl hover:scale-110 transition-transform"
                aria-label="Nächstes Bild"
              >
                <ChevronRight size={24} className="text-[#012956]" />
              </button>
            </>
          )}

          {/* Dots - Größer und besser sichtbar */}
          <div className="flex justify-center gap-3 mt-6">
            {branche.gallery.map((_, i) => (
              <button
                key={i}
                onClick={() => setCurrentIndex(i)}
                className={`h-3 rounded-full transition-all duration-300 ${
                  i === currentIndex
                    ? 'w-10 bg-[#109387]'
                    : 'w-3 bg-gray-300 hover:bg-gray-400'
                }`}
                aria-label={`Gehe zu Bild ${i + 1}`}
              />
            ))}
          </div>
        </div>

      </div>
    </section>
  )
}
