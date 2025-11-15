'use client'

import Image from 'next/image'
import Link from 'next/link'
import { ArrowRight, Phone } from 'lucide-react'

export default function HeroSection() {
  const scrollToContact = () => {
    const footer = document.getElementById('kontakt-formular')
    if (footer) {
      footer.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <section className="relative min-h-[70vh] flex items-center overflow-hidden mt-20 lg:mt-24">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=2940&auto=format&fit=crop"
          alt="Professionelle Büroreinigung"
          fill
          className="object-cover"
          priority
        />
        <div className="gradient-overlay opacity-90" />
      </div>

      {/* Content */}
      <div className="container-custom relative z-10 py-20">
        <div className="max-w-4xl">
          {/* Breadcrumb */}
          <div className="flex items-center space-x-2 text-sm text-gray-300 mb-6">
            <Link href="/" className="hover:text-white transition-colors">Home</Link>
            <span>/</span>
            <Link href="/#leistungen" className="hover:text-white transition-colors">Leistungen</Link>
            <span>/</span>
            <span className="text-fimi-turquoise">Gewerbliche Objektreinigung</span>
          </div>

          {/* Category Badge */}
          <div className="inline-flex items-center bg-fimi-turquoise/20 backdrop-blur-sm border border-fimi-turquoise/30 rounded-full px-6 py-2 mb-6">
            <span className="text-sm font-semibold text-fimi-turquoise">Gewerbliche Objektreinigung</span>
          </div>

          {/* Title */}
          <h1 className="text-white mb-4">Büroreinigung in Landshut</h1>
          <p className="text-2xl md:text-3xl text-fimi-turquoise font-semibold mb-6">
            Saubere Büros für produktives Arbeiten
          </p>

          {/* Description */}
          <p className="text-xl text-gray-200 mb-10 leading-relaxed max-w-3xl">
            Professionelle Büroreinigung, die Ihren Mitarbeitern ein angenehmes und gesundes Arbeitsumfeld schafft.
            Verlassen Sie sich auf unsere Erfahrung und Zuverlässigkeit.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4">
            <button
              onClick={scrollToContact}
              className="btn-primary inline-flex items-center justify-center space-x-2 group"
            >
              <span>Jetzt Angebot anfordern</span>
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>

            <a
              href="tel:01747225473"
              className="btn-outline bg-white/10 backdrop-blur-sm border-white text-white hover:bg-white hover:text-fimi-navy inline-flex items-center justify-center space-x-2"
            >
              <Phone className="w-5 h-5" />
              <span>01747225473</span>
            </a>
          </div>
        </div>
      </div>

      {/* Decorative Element */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-white to-transparent z-10" />
    </section>
  )
}
