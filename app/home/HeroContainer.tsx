'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import { fadeInUp, staggerContainer } from '@/utils/animations'
import { ArrowRight, Phone, Mail } from 'lucide-react'

export default function HeroContainer() {
  const scrollToContact = () => {
    const footer = document.querySelector('footer')
    if (footer) {
      footer.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <section className="relative min-h-screen flex items-center bg-fimi-navy overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <Image
          src="https://images.unsplash.com/photo-1581578731548-c64695cc6952?q=80&w=3540&auto=format&fit=crop"
          alt="Professionelle Gebäudereinigung"
          fill
          className="object-cover opacity-15"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-r from-fimi-navy via-fimi-navy/95 to-transparent" />
      </div>

      {/* Content */}
      <div className="container relative z-10 py-32 md:py-40">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate="visible"
          className="max-w-4xl"
        >
          {/* Badge */}
          <motion.div variants={fadeInUp} className="mb-8">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-fimi-turquoise/20 border border-fimi-turquoise text-fimi-turquoise font-semibold" style={{ borderRadius: '4px' }}>
              <span className="w-2 h-2 bg-fimi-turquoise rounded-full animate-pulse" />
              ISO 9001 & 14001 Zertifiziert
            </div>
          </motion.div>

          {/* Headline */}
          <motion.h1
            variants={fadeInUp}
            className="text-5xl md:text-7xl lg:text-8xl font-bold text-white mb-8 leading-tight"
          >
            Professionelle<br />
            <span className="text-fimi-turquoise">Gebäudereinigung</span><br />
            für Ihr Unternehmen
          </motion.h1>

          {/* Subheadline */}
          <motion.p
            variants={fadeInUp}
            className="text-xl md:text-2xl text-gray-200 mb-12 max-w-2xl leading-relaxed"
          >
            Über 15 Jahre Erfahrung in gewerblicher Reinigung, Industriereinigung und Facility Management. Ihr zuverlässiger Partner in Landshut und Umgebung.
          </motion.p>

          {/* USPs */}
          <motion.div
            variants={fadeInUp}
            className="grid md:grid-cols-3 gap-6 mb-12"
          >
            {[
              { label: '24/7 Service', value: 'Verfügbar' },
              { label: 'Zufriedene Kunden', value: '500+' },
              { label: 'Jahre Erfahrung', value: '15+' }
            ].map((item, i) => (
              <div key={i} className="bg-white/10 backdrop-blur-sm p-6 border border-white/20" style={{ borderRadius: '4px' }}>
                <div className="text-4xl font-bold text-fimi-turquoise mb-2">{item.value}</div>
                <div className="text-gray-300 font-semibold">{item.label}</div>
              </div>
            ))}
          </motion.div>

          {/* CTA Buttons */}
          <motion.div
            variants={fadeInUp}
            className="flex flex-col sm:flex-row gap-4"
          >
            <button
              onClick={scrollToContact}
              className="group inline-flex items-center justify-center gap-2 px-8 py-5 bg-fimi-turquoise text-white text-lg font-bold hover:opacity-90 transition-all"
              style={{ borderRadius: '4px' }}
            >
              Kostenloses Angebot
              <ArrowRight className="group-hover:translate-x-1 transition-transform" size={20} />
            </button>

            <a
              href="tel:01747225473"
              className="inline-flex items-center justify-center gap-2 px-8 py-5 bg-white text-fimi-navy text-lg font-bold hover:opacity-90 transition-opacity"
              style={{ borderRadius: '4px' }}
            >
              <Phone size={20} />
              01747225473
            </a>

            <a
              href="mailto:info@fimi-service.de"
              className="inline-flex items-center justify-center gap-2 px-8 py-5 border-2 border-white text-white text-lg font-bold hover:bg-white hover:text-fimi-navy transition-all"
              style={{ borderRadius: '4px' }}
            >
              <Mail size={20} />
              E-Mail
            </a>
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce hidden md:block">
        <div className="w-6 h-10 border-2 border-white/50 flex items-start justify-center p-2" style={{ borderRadius: '12px' }}>
          <div className="w-1 h-2 bg-white/50" style={{ borderRadius: '2px' }} />
        </div>
      </div>
    </section>
  )
}
