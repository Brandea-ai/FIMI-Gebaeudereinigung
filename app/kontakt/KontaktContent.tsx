'use client'

import Image from 'next/image'
import { motion } from 'framer-motion'
import { ArrowRight, Phone, Mail, MapPin, Clock, CheckCircle2 } from 'lucide-react'
import FadeIn, { FadeInStagger, FadeInItem } from '@/components/FadeIn'

export default function KontaktContent() {
  return (
    <main className="min-h-screen bg-white overflow-hidden">
      {/* Hero Section - Premium & Animated */}
      <section className="relative bg-[#012956] overflow-hidden" aria-labelledby="kontakt-hero-heading">
        <div className="w-full max-w-[1800px] mx-auto px-4 sm:px-6 lg:px-12 xl:px-20">
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-0 min-h-[auto] lg:min-h-[90vh]">

            {/* Left Content */}
            <div className="flex flex-col justify-center py-10 sm:py-16 lg:py-28 lg:pr-16 xl:pr-24 order-2 lg:order-1">
              <FadeIn direction="left" delay={0.1}>
                <p className="text-[#109387] font-bold text-xs sm:text-sm uppercase tracking-[0.15em] sm:tracking-[0.2em] mb-3 sm:mb-6">
                  Kontakt
                </p>
              </FadeIn>

              <FadeIn direction="left" delay={0.2}>
                <h1 id="kontakt-hero-heading" className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-white leading-[1.1] sm:leading-[1.05] mb-4 sm:mb-8">
                  Lassen Sie uns
                  <span className="block text-[#109387]">gemeinsam starten</span>
                </h1>
              </FadeIn>

              <FadeIn direction="left" delay={0.3}>
                <p className="text-white/70 font-medium text-sm sm:text-base lg:text-lg xl:text-xl leading-relaxed mb-6 sm:mb-10 lg:mb-12 max-w-lg">
                  In nur 4 Schritten zu Ihrer maßgeschneiderten Reinigungslösung.
                  Wir beraten Sie persönlich und unverbindlich.
                </p>
              </FadeIn>

              {/* Process Steps - Staggered Animation */}
              <FadeInStagger staggerDelay={0.1} className="grid grid-cols-2 sm:grid-cols-4 gap-4 sm:gap-5 lg:gap-6 mb-8 sm:mb-10 lg:mb-12" role="list" aria-label="4 Schritte zur Reinigungslösung">
                {[
                  { num: '01', title: 'Anfrage', sub: 'Formular / Anruf' },
                  { num: '02', title: 'Besichtigung', sub: 'Kostenfrei vor Ort' },
                  { num: '03', title: 'Angebot', sub: 'Innerhalb 48h' },
                  { num: '04', title: 'Start', sub: 'Ihr Ansprechpartner' },
                ].map((step, i) => (
                  <FadeInItem key={i}>
                    <div className="group" role="listitem">
                      <div className="text-[#109387] font-bold text-2xl sm:text-2xl lg:text-3xl mb-1.5 sm:mb-2" aria-hidden="true">
                        {step.num}
                      </div>
                      <div className="h-0.5 w-6 sm:w-8 bg-[#109387] mb-2 sm:mb-3 group-hover:w-10 sm:group-hover:w-12 transition-all" aria-hidden="true" />
                      <span className="block font-bold text-white text-sm sm:text-sm lg:text-base">{step.title}</span>
                      <span className="block text-white/70 text-xs sm:text-xs lg:text-sm">{step.sub}</span>
                    </div>
                  </FadeInItem>
                ))}
              </FadeInStagger>

              {/* CTA Buttons */}
              <FadeIn direction="up" delay={0.5}>
                <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
                  <motion.a
                    href="#contact-form"
                    className="inline-flex items-center justify-center gap-2 sm:gap-3 bg-[#109387] hover:bg-[#0d7d72] text-white font-bold text-sm sm:text-base lg:text-lg px-5 sm:px-8 py-3.5 sm:py-4 rounded-[6px] transition-all group"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <span>Kostenfreie Besichtigung</span>
                    <ArrowRight size={18} className="sm:w-5 sm:h-5 group-hover:translate-x-1 transition-transform" aria-hidden="true" />
                  </motion.a>
                  <motion.a
                    href="tel:+4987143033460"
                    className="inline-flex items-center justify-center gap-2 sm:gap-3 bg-white/10 hover:bg-white/20 text-white font-bold text-sm sm:text-base lg:text-lg px-5 sm:px-8 py-3.5 sm:py-4 rounded-[6px] transition-all"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <Phone size={18} className="sm:w-5 sm:h-5" aria-hidden="true" />
                    <span>0871 430 334 60</span>
                  </motion.a>
                </div>
              </FadeIn>
            </div>

            {/* Right Image - Animated */}
            <motion.div
              className="relative order-1 lg:order-2 h-72 sm:h-80 md:h-96 lg:h-auto"
              initial={{ opacity: 0, scale: 1.1 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1, ease: [0.25, 0.1, 0.25, 1] }}
            >
              <Image
                src="https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=800&auto=format&fit=crop"
                alt="FIMI Gebäudereinigung - Professionelle Beratung"
                fill
                className="object-cover object-[center_15%] lg:object-center"
                sizes="(max-width: 768px) 100vw, 50vw"
                priority
              />
              {/* Gradient Overlay - Sanft */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#012956]/80 to-transparent lg:from-[#012956] lg:via-[#012956]/50 lg:to-transparent" />

              {/* Quote - Desktop only */}
              <motion.div
                className="hidden lg:flex absolute bottom-0 right-0 left-0 z-10 p-8 items-end justify-end"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.6 }}
              >
                <div className="max-w-md">
                  <p className="text-white text-xl lg:text-2xl font-bold leading-snug mb-3">
                    „Persönliche Betreuung und Qualität stehen bei uns an erster Stelle."
                  </p>
                  <p className="text-[#109387] font-semibold">
                    FIMI Gebäudereinigung
                  </p>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Kontakt-Info Cards - Staggered */}
      <section className="py-10 sm:py-14 lg:py-20 bg-white" aria-label="Kontaktinformationen">
        <div className="w-full max-w-[1800px] mx-auto px-4 sm:px-6 lg:px-12 xl:px-20">
          <FadeInStagger staggerDelay={0.1} className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
            {/* Telefon */}
            <FadeInItem>
              <motion.a
                href="tel:+4987143033460"
                className="group flex items-start gap-4 p-5 sm:p-6 bg-[#f8f9fa] hover:bg-[#012956] rounded-[6px] transition-all duration-300 h-full"
                whileHover={{ y: -4 }}
              >
                <div className="w-12 h-12 bg-[#109387] rounded-[6px] flex items-center justify-center flex-shrink-0 group-hover:bg-white/20 transition-colors">
                  <Phone size={22} className="text-white" aria-hidden="true" />
                </div>
                <div>
                  <p className="text-[#012956] group-hover:text-white/60 text-xs font-semibold uppercase tracking-wider mb-1 transition-colors">Telefon</p>
                  <p className="text-[#012956] group-hover:text-white font-bold text-base sm:text-lg transition-colors">0871 430 334 60</p>
                </div>
              </motion.a>
            </FadeInItem>

            {/* E-Mail */}
            <FadeInItem>
              <motion.a
                href="mailto:info@fimi-service.de"
                className="group flex items-start gap-4 p-5 sm:p-6 bg-[#f8f9fa] hover:bg-[#012956] rounded-[6px] transition-all duration-300 h-full"
                whileHover={{ y: -4 }}
              >
                <div className="w-12 h-12 bg-[#109387] rounded-[6px] flex items-center justify-center flex-shrink-0 group-hover:bg-white/20 transition-colors">
                  <Mail size={22} className="text-white" aria-hidden="true" />
                </div>
                <div>
                  <p className="text-[#012956] group-hover:text-white/60 text-xs font-semibold uppercase tracking-wider mb-1 transition-colors">E-Mail</p>
                  <p className="text-[#012956] group-hover:text-white font-bold text-base sm:text-lg transition-colors">info@fimi-service.de</p>
                </div>
              </motion.a>
            </FadeInItem>

            {/* Adresse */}
            <FadeInItem>
              <motion.a
                href="https://maps.google.com/?q=Kellerstr.+39,+84036+Landshut"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-start gap-4 p-5 sm:p-6 bg-[#f8f9fa] hover:bg-[#012956] rounded-[6px] transition-all duration-300 h-full"
                whileHover={{ y: -4 }}
              >
                <div className="w-12 h-12 bg-[#109387] rounded-[6px] flex items-center justify-center flex-shrink-0 group-hover:bg-white/20 transition-colors">
                  <MapPin size={22} className="text-white" aria-hidden="true" />
                </div>
                <div>
                  <p className="text-[#012956] group-hover:text-white/60 text-xs font-semibold uppercase tracking-wider mb-1 transition-colors">Adresse</p>
                  <p className="text-[#012956] group-hover:text-white font-bold text-base sm:text-lg transition-colors">Kellerstr. 39, Landshut</p>
                </div>
              </motion.a>
            </FadeInItem>

            {/* Öffnungszeiten */}
            <FadeInItem>
              <motion.div
                className="group flex items-start gap-4 p-5 sm:p-6 bg-[#f8f9fa] rounded-[6px] h-full"
                whileHover={{ y: -4 }}
              >
                <div className="w-12 h-12 bg-[#109387] rounded-[6px] flex items-center justify-center flex-shrink-0">
                  <Clock size={22} className="text-white" aria-hidden="true" />
                </div>
                <div>
                  <p className="text-[#012956] text-xs font-semibold uppercase tracking-wider mb-1">Erreichbar</p>
                  <p className="text-[#012956] font-bold text-base sm:text-lg">Mo–Fr 08:00–18:00</p>
                </div>
              </motion.div>
            </FadeInItem>
          </FadeInStagger>
        </div>
      </section>

      {/* Service Areas - Premium with Animations */}
      <section className="py-10 sm:py-14 lg:py-24 bg-[#012956]" aria-labelledby="einzugsgebiet-heading">
        <div className="w-full max-w-[1800px] mx-auto px-4 sm:px-6 lg:px-12 xl:px-20">
          <div className="grid lg:grid-cols-2 gap-8 sm:gap-10 lg:gap-20 items-center">
            <div>
              <FadeIn direction="left" delay={0.1}>
                <p className="text-[#109387] font-bold text-xs sm:text-sm uppercase tracking-[0.15em] sm:tracking-[0.2em] mb-3 sm:mb-4">
                  Einzugsgebiet
                </p>
              </FadeIn>

              <FadeIn direction="left" delay={0.2}>
                <h2 id="einzugsgebiet-heading" className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4 sm:mb-6">
                  Professionelle Reinigung in ganz Bayern
                </h2>
              </FadeIn>

              <FadeIn direction="left" delay={0.3}>
                <p className="text-white/80 font-medium text-sm sm:text-base lg:text-lg leading-relaxed mb-6 sm:mb-8">
                  Von Landshut aus betreuen wir Kunden in ganz Bayern.
                  Kurze Wege, schnelle Reaktionszeiten, persönlicher Service.
                </p>
              </FadeIn>

              {/* Vorteile - Staggered */}
              <FadeInStagger staggerDelay={0.1} className="space-y-3 mb-6 sm:mb-8">
                {['Kostenfreie Erstbesichtigung', 'Angebot innerhalb 48 Stunden', 'Persönlicher Ansprechpartner'].map((item, i) => (
                  <FadeInItem key={i}>
                    <div className="flex items-center gap-3">
                      <motion.div
                        initial={{ scale: 0 }}
                        whileInView={{ scale: 1 }}
                        transition={{ delay: 0.3 + i * 0.1, type: 'spring', stiffness: 200 }}
                      >
                        <CheckCircle2 size={18} className="text-[#109387] flex-shrink-0" aria-hidden="true" />
                      </motion.div>
                      <span className="text-white/80 font-medium text-sm sm:text-base">{item}</span>
                    </div>
                  </FadeInItem>
                ))}
              </FadeInStagger>

              <FadeIn direction="up" delay={0.5}>
                <a
                  href="#contact-form"
                  className="inline-flex items-center gap-2 text-[#109387] font-bold text-sm sm:text-base hover:gap-3 transition-all"
                >
                  <span>Standort anfragen</span>
                  <ArrowRight size={16} className="sm:w-[18px] sm:h-[18px]" aria-hidden="true" />
                </a>
              </FadeIn>
            </div>

            {/* Cities Grid - Staggered */}
            <FadeInStagger staggerDelay={0.05} className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-2 xl:grid-cols-4 gap-2 sm:gap-3 lg:gap-4">
              {['Landshut', 'München', 'Regensburg', 'Ingolstadt', 'Freising', 'Erding', 'Straubing', 'Passau'].map((city, i) => (
                <FadeInItem key={city}>
                  <motion.a
                    href="#contact-form"
                    className={`block px-4 sm:px-6 py-3 sm:py-4 rounded-[6px] text-center font-bold text-sm sm:text-base transition-all cursor-pointer ${
                      i === 0
                        ? 'bg-[#109387] text-white hover:bg-[#0d7d72]'
                        : 'bg-white/10 text-white hover:bg-white/20'
                    }`}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    {city}
                  </motion.a>
                </FadeInItem>
              ))}
            </FadeInStagger>
          </div>
        </div>
      </section>
    </main>
  )
}
