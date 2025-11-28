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
    <section className="py-20 lg:py-32 bg-white">
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
            <Image
              src="/images/home/staedte-fimi.avif"
              alt="FIMI Gebäudereinigung - Einsatzgebiete in Bayern"
              width={4800}
              height={3584}
              className="w-full h-auto rounded-[6px] shadow-lg"
            />

            {/* Overlay Badge */}
            <div className="absolute bottom-6 left-6 right-6 bg-[#012956] rounded-[6px] p-4 lg:p-6">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-[#109387] rounded-[6px] flex items-center justify-center flex-shrink-0">
                  <MapPin size={24} className="text-white" />
                </div>
                <div>
                  <p className="text-white font-bold text-lg">
                    8 Standorte in Bayern
                  </p>
                  <p className="text-white/70 font-semibold text-sm">
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
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#012956] leading-[1.1] mb-6">
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
                <motion.div
                  key={stadt}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3, delay: index * 0.05 }}
                  className="bg-[#f8f9fa] rounded-[6px] px-4 py-3 text-center"
                >
                  <span className="font-bold text-[#012956]">{stadt}</span>
                </motion.div>
              ))}
            </div>

            {/* CTA */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href="/referenzen"
                className="inline-flex items-center justify-center gap-3 bg-[#109387] hover:bg-[#0d7d72] text-white font-bold text-lg px-8 py-4 rounded-[6px] transition-all duration-300 group"
              >
                Referenzen ansehen
                <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
              </Link>
              <a
                href="#contact-form"
                className="inline-flex items-center justify-center gap-3 bg-[#012956] hover:bg-[#01203d] text-white font-bold text-lg px-8 py-4 rounded-[6px] transition-all duration-300"
              >
                Kontakt aufnehmen
              </a>
            </div>
          </motion.div>

        </div>

      </div>
    </section>
  )
}
