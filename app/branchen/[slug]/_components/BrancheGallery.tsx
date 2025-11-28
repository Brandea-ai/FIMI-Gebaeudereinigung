'use client'

import { useState } from 'react'
import Image from 'next/image'
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
    <section className="py-12 md:py-20 bg-white">
      <div className="w-full max-w-[1800px] mx-auto px-4 md:px-6 lg:px-12 xl:px-20">
        <div className="text-center mb-8 md:mb-12">
          <p className="text-[#109387] font-bold text-xs md:text-sm uppercase tracking-[0.2em] mb-3">
            Einblicke
          </p>
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-[#012956]">
            {branche.shortName} Reinigung in Aktion
          </h2>
        </div>

        {/* Desktop Gallery - alle Bilder */}
        <div className="hidden md:grid md:grid-cols-3 gap-4 lg:gap-6">
          {branche.gallery.map((image, i) => (
            <div
              key={i}
              className="group relative aspect-[4/3] rounded-[12px] overflow-hidden"
            >
              <Image
                src={image.src}
                alt={image.alt}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
              <div className="absolute bottom-0 left-0 right-0 p-4 translate-y-full group-hover:translate-y-0 transition-transform">
                <p className="text-white font-medium text-sm">{image.caption}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Mobile Slider */}
        <div className="md:hidden relative">
          <div className="relative aspect-[4/3] rounded-[12px] overflow-hidden">
            <Image
              src={branche.gallery[currentIndex].src}
              alt={branche.gallery[currentIndex].alt}
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
            <div className="absolute bottom-0 left-0 right-0 p-4">
              <p className="text-white font-medium text-sm">{branche.gallery[currentIndex].caption}</p>
            </div>
          </div>

          {/* Navigation Buttons */}
          {branche.gallery.length > 1 && (
            <>
              <button
                onClick={prevSlide}
                className="absolute left-2 top-1/2 -translate-y-1/2 w-10 h-10 bg-white/90 rounded-full flex items-center justify-center shadow-lg hover:bg-white transition-colors"
                aria-label="Vorheriges Bild"
              >
                <ChevronLeft size={20} className="text-[#012956]" />
              </button>
              <button
                onClick={nextSlide}
                className="absolute right-2 top-1/2 -translate-y-1/2 w-10 h-10 bg-white/90 rounded-full flex items-center justify-center shadow-lg hover:bg-white transition-colors"
                aria-label="Nächstes Bild"
              >
                <ChevronRight size={20} className="text-[#012956]" />
              </button>
            </>
          )}

          {/* Dots */}
          <div className="flex justify-center gap-2 mt-4">
            {branche.gallery.map((_, i) => (
              <button
                key={i}
                onClick={() => setCurrentIndex(i)}
                className={`w-2 h-2 rounded-full transition-colors ${
                  i === currentIndex ? 'bg-[#109387]' : 'bg-gray-300'
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
