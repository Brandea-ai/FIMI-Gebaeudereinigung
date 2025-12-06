'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'
import { ArrowRight, MapPin } from 'lucide-react'

const standorte = [
  'Landshut',
  'München',
  'Regensburg',
  'Ingolstadt',
  'Freising',
  'Erding',
  'Straubing',
  'Passau',
]

export default function RegionenSection() {
  return (
    <section id="regionen" className="py-20 lg:py-32 bg-white" aria-labelledby="regionen-heading">
      <div className="w-full max-w-[1800px] mx-auto px-6 lg:px-12 xl:px-20">

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">

          {/* Left: Map Image */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            {/* Bild */}
            <div className="rounded-t-[6px] lg:rounded-[6px] overflow-hidden shadow-lg">
              <Image
                src="/images/home/staedte-fimi.avif"
                alt="FIMI Gebäudereinigung - Einsatzgebiete in Bayern"
                width={4800}
                height={3584}
                className="w-full h-auto"
              />
            </div>

            {/* Badge - kompakter, weiter unten */}
            <div className="bg-[#012956] rounded-b-[6px] lg:rounded-[6px] lg:absolute lg:-bottom-3 lg:left-4 lg:right-4 p-2 sm:p-2.5 lg:shadow-lg">
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 bg-[#109387] rounded-[4px] flex items-center justify-center flex-shrink-0">
                  <MapPin size={16} className="text-white" aria-hidden="true" />
                </div>
                <div>
                  <p className="text-white font-bold text-xs sm:text-sm">
                    8 Einsatzgebiete in Bayern
                  </p>
                  <p className="text-white/70 font-semibold text-[10px] sm:text-xs">
                    Immer in Ihrer Nähe
                  </p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right: Content */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <p className="text-sm text-gray-500 font-semibold uppercase tracking-wide mb-3">
              Unsere Einsatzgebiete
            </p>
            <h2 id="regionen-heading" className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#012956] leading-[1.1] mb-6">
              Regional verwurzelt,
              <span className="block text-[#109387]">professionell aufgestellt</span>
            </h2>
            <p className="text-lg text-gray-700 font-semibold leading-relaxed mb-8">
              Von Landshut aus haben wir uns in ganz Bayern etabliert. Unsere lokalen Teams
              kennen die Region und sind schnell vor Ort - egal ob für regelmäßige
              Unterhaltsreinigung oder spontane Notfalleinsätze.
            </p>

            {/* Standorte Grid */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mb-10">
              {standorte.map((stadt, index) => (
                <motion.a
                  key={stadt}
                  href="#contact-form"
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3, delay: index * 0.05 }}
                  className="bg-[#f8f9fa] hover:bg-[#109387] rounded-[6px] px-4 py-3 text-center cursor-pointer transition-all duration-300 group"
                >
                  <span className="font-bold text-[#012956] group-hover:text-white transition-colors duration-300">{stadt}</span>
                </motion.a>
              ))}
            </div>

            {/* CTA */}
            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="#contact-form"
                className="inline-flex items-center justify-center gap-3 bg-[#109387] hover:bg-[#0d7d72] text-white font-bold text-lg px-8 py-4 rounded-[6px] transition-all duration-300 group"
              >
                Kontakt aufnehmen
                <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
              </a>
              <Link
                href="/referenzen"
                className="inline-flex items-center justify-center gap-3 bg-[#012956] hover:bg-[#01203d] text-white font-bold text-lg px-8 py-4 rounded-[6px] transition-all duration-300"
              >
                Referenzen ansehen
              </Link>
            </div>
          </motion.div>

        </div>

      </div>
    </section>
  )
}
