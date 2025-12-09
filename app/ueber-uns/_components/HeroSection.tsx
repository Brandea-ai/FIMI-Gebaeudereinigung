'use client'

import { motion } from 'framer-motion'
import { ArrowRight, CheckCircle } from 'lucide-react'
import Image from 'next/image'

export default function HeroSection() {
  return (
    <section id="hero" className="relative min-h-[90vh] bg-[#012956] overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <picture>
          <source
            type="image/avif"
            srcSet="/images/ueber-uns/ueber-uns-hero-384w.avif 384w, /images/ueber-uns/ueber-uns-hero-768w.avif 768w, /images/ueber-uns/ueber-uns-hero-1024w.avif 1024w, /images/ueber-uns/ueber-uns-hero-1376w.avif 1376w"
            sizes="100vw"
          />
          <source
            type="image/webp"
            srcSet="/images/ueber-uns/ueber-uns-hero-384w.webp 384w, /images/ueber-uns/ueber-uns-hero-768w.webp 768w, /images/ueber-uns/ueber-uns-hero-1024w.webp 1024w, /images/ueber-uns/ueber-uns-hero-1376w.webp 1376w"
            sizes="100vw"
          />
          <Image
            src="/images/ueber-uns/ueber-uns-hero.avif"
            alt="FIMI Gebäudereinigung Team vor modernem Bürogebäude"
            fill
            sizes="100vw"
            className="object-cover"
            priority
          />
        </picture>
        <div className="absolute inset-0 bg-gradient-to-r from-[#012956]/95 via-[#012956]/80 to-[#012956]/60" />
      </div>

      {/* Content */}
      <div className="relative z-10 min-h-[90vh] flex items-center">
        <div className="w-full max-w-[1800px] mx-auto px-6 lg:px-12 xl:px-20 py-32">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">

            {/* Left: Main Content */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <p className="text-[#109387] font-bold text-sm uppercase tracking-[0.2em] mb-6">
                Über FIMI Gebäudereinigung
              </p>

              <h1 className="text-[1.65rem] sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-white leading-[1.05] mb-8">
                <span className="whitespace-nowrap">Seit 2016 Ihr Partner für</span>
                <span className="block text-[#109387] mt-2">professionelle Sauberkeit</span>
              </h1>

              {/* Slogan Box - Prominent */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.3 }}
                className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-[6px] p-6 mb-10"
              >
                <p className="text-2xl md:text-3xl font-bold text-white leading-snug">
                  &ldquo;Keine Lösung zu haben ist
                  <span className="text-[#109387]"> keine Option.</span>&rdquo;
                </p>
                <p className="text-white/70 font-semibold mt-3">
                  Wir finden immer einen Weg, Ihre Anforderungen zu erfüllen.
                </p>
              </motion.div>

              {/* Trust Points */}
              <div className="grid grid-cols-3 gap-3 sm:flex sm:flex-wrap sm:gap-6 mb-10">
                <div className="flex flex-col sm:flex-row items-center gap-1 sm:gap-2">
                  <CheckCircle size={20} className="text-[#109387] flex-shrink-0" aria-hidden="true" />
                  <span className="text-white font-semibold text-xs sm:text-base text-center sm:text-left">8+ Jahre</span>
                </div>
                <div className="flex flex-col sm:flex-row items-center gap-1 sm:gap-2">
                  <CheckCircle size={20} className="text-[#109387] flex-shrink-0" aria-hidden="true" />
                  <span className="text-white font-semibold text-xs sm:text-base text-center sm:text-left">90+ Mitarbeiter</span>
                </div>
                <div className="flex flex-col sm:flex-row items-center gap-1 sm:gap-2">
                  <CheckCircle size={20} className="text-[#109387] flex-shrink-0" aria-hidden="true" />
                  <span className="text-white font-semibold text-xs sm:text-base text-center sm:text-left">8 Standorte</span>
                </div>
              </div>

              {/* CTA */}
              <div className="flex flex-col sm:flex-row gap-4">
                <a
                  href="#contact-form"
                  className="inline-flex items-center justify-center gap-3 bg-[#109387] hover:bg-[#0d7d72] text-white font-bold text-lg px-8 py-4 rounded-[6px] transition-all duration-300 group"
                >
                  Jetzt kennenlernen
                  <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
                </a>
                <a
                  href="#timeline"
                  className="inline-flex items-center justify-center gap-3 bg-white/10 hover:bg-white/20 text-white font-bold text-lg px-8 py-4 rounded-[6px] transition-all duration-300 border border-white/30"
                >
                  Unsere Geschichte
                </a>
              </div>
            </motion.div>

            {/* Right: Stats Cards */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="hidden lg:grid grid-cols-2 gap-4"
            >
              <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-[6px] p-6">
                <p className="text-5xl font-bold text-[#109387] mb-2">2016</p>
                <p className="text-white font-bold text-lg">Gründung</p>
                <p className="text-white/60 font-semibold text-sm">Als GbR in Landshut</p>
              </div>
              <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-[6px] p-6">
                <p className="text-5xl font-bold text-[#109387] mb-2">120+</p>
                <p className="text-white font-bold text-lg">Kunden</p>
                <p className="text-white/60 font-semibold text-sm">Vertrauen uns</p>
              </div>
              <div className="bg-[#109387] rounded-[6px] p-6">
                <p className="text-5xl font-bold text-white mb-2">ISO</p>
                <p className="text-white font-bold text-lg">Standards</p>
                <p className="text-white/80 font-semibold text-sm">in Bearbeitung</p>
              </div>
              <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-[6px] p-6">
                <p className="text-5xl font-bold text-[#109387] mb-2">24/7</p>
                <p className="text-white font-bold text-lg">Erreichbar</p>
                <p className="text-white/60 font-semibold text-sm">Für Notfälle</p>
              </div>
            </motion.div>

          </div>
        </div>
      </div>
    </section>
  )
}
