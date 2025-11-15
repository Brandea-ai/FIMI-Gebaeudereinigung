'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import { ArrowRight, Phone } from 'lucide-react'
import { ParallaxBackground } from '@/components/PremiumParallax'
import { fadeInUp, staggerContainer } from '@/utils/animations'

export default function HeroSection() {
  const scrollToContact = () => {
    const footer = document.getElementById('kontakt-formular')
    if (footer) {
      footer.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* Parallax Background */}
      <ParallaxBackground className="absolute inset-0" speed={0.5}>
        <Image
          src="https://images.unsplash.com/photo-1581578731548-c64695cc6952?q=80&w=2940&auto=format&fit=crop"
          alt="Professionelle Gebäudereinigung FIMI"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-r from-fimi-navy/95 via-fimi-navy/90 to-fimi-navy/80" />
      </ParallaxBackground>

      {/* Content */}
      <div className="container relative z-10 py-32 md:py-40">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate="visible"
          className="max-w-4xl"
        >
          {/* GROSSES LOGO wie angefordert */}
          <motion.div variants={fadeInUp} className="mb-12">
            <Image
              src="/FIMI-LOGO/FI-Logo_Transparent_FUER-Webseite-Weiß-Schrift.png"
              alt="FIMI Gebäudereinigung"
              width={400}
              height={133}
              className="h-32 md:h-40 w-auto"
              priority
            />
          </motion.div>

          {/* Headline */}
          <motion.h1
            variants={fadeInUp}
            className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight"
          >
            Exzellente Reinigung<br />
            <span className="text-fimi-turquoise">für Ihr Unternehmen</span>
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            variants={fadeInUp}
            className="text-xl md:text-2xl text-gray-200 mb-12 max-w-2xl leading-relaxed"
          >
            Seit über 15 Jahren Ihr vertrauensvoller Partner für professionelle Gebäudereinigung,
            Industriereinigung und Facility Management in Landshut und Umgebung.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            variants={fadeInUp}
            className="flex flex-col sm:flex-row gap-4"
          >
            <button
              onClick={scrollToContact}
              className="inline-flex items-center justify-center px-8 py-4 bg-fimi-turquoise text-white text-lg font-semibold rounded-lg hover:bg-fimi-turquoise/90 shadow-lg hover:shadow-xl transition-all duration-300 group"
            >
              <span>Kostenlose Beratung anfordern</span>
              <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
            </button>

            <a
              href="tel:01747225473"
              className="inline-flex items-center justify-center px-8 py-4 bg-white/10 backdrop-blur-sm border-2 border-white text-white text-lg font-semibold rounded-lg hover:bg-white hover:text-fimi-navy transition-all duration-300"
            >
              <Phone className="w-5 h-5 mr-2" />
              <span>01747225473</span>
            </a>
          </motion.div>
        </motion.div>
      </div>

      {/* Bottom Gradient */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-white to-transparent z-10" />
    </section>
  )
}
