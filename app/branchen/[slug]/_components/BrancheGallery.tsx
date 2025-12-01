'use client'

import { useState } from 'react'
import { ChevronLeft, ChevronRight } from 'lucide-react'
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
    <section id="galerie" className="py-16 md:py-24 lg:py-32 bg-gray-50">
      <div className="w-full max-w-[1800px] mx-auto px-6 lg:px-12 xl:px-20">

        {/* Section Header - Kein Icon, kein Einzeiler rechts */}
        <h2 className="text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold text-[#012956] leading-tight mb-10 md:mb-14">
          {branche.shortName} Reinigung{' '}
          <span className="text-[#109387]">in Aktion</span>
        </h2>

        {/* Desktop Gallery - 6px rounded, Captions immer sichtbar */}
        <div className="hidden md:grid md:grid-cols-3 gap-6 lg:gap-8">
          {branche.gallery.map((image, i) => (
            <div
              key={i}
              className="group relative aspect-[4/3] rounded-[6px] overflow-hidden shadow-lg"
            >
              <img
                src={image.src}
                alt={image.alt}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              {/* Caption immer sichtbar mit permanentem Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#012956]/80 via-transparent to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-5">
                <p className="text-white font-bold text-lg">{image.caption}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Mobile Slider - 6px rounded */}
        <div className="md:hidden relative">
          <div className="relative aspect-[4/3] rounded-[6px] overflow-hidden shadow-xl">
            <img
              src={branche.gallery[currentIndex].src}
              alt={branche.gallery[currentIndex].alt}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#012956]/80 via-transparent to-transparent" />
            <div className="absolute bottom-0 left-0 right-0 p-5">
              <p className="text-white font-bold text-base">{branche.gallery[currentIndex].caption}</p>
            </div>
          </div>

          {/* Navigation Buttons */}
          {branche.gallery.length > 1 && (
            <>
              <button
                onClick={prevSlide}
                className="absolute left-3 top-1/2 -translate-y-1/2 w-12 h-12 bg-white rounded-[6px] flex items-center justify-center shadow-xl hover:scale-110 transition-transform"
                aria-label="Vorheriges Bild"
              >
                <ChevronLeft size={24} className="text-[#012956]" />
              </button>
              <button
                onClick={nextSlide}
                className="absolute right-3 top-1/2 -translate-y-1/2 w-12 h-12 bg-white rounded-[6px] flex items-center justify-center shadow-xl hover:scale-110 transition-transform"
                aria-label="Nächstes Bild"
              >
                <ChevronRight size={24} className="text-[#012956]" />
              </button>
            </>
          )}

          {/* Dots */}
          <div className="flex justify-center gap-3 mt-6">
            {branche.gallery.map((_, i) => (
              <button
                key={i}
                onClick={() => setCurrentIndex(i)}
                className={`h-3 rounded-[6px] transition-all duration-300 ${
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
