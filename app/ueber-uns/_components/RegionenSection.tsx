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
    <section id="regionen" className="py-12 lg:py-20 bg-white">
      <div className="w-full max-w-[1800px] mx-auto px-6 lg:px-12 xl:px-20">

        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">

          {/* Left: Map Image - kompakter */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative max-w-lg lg:max-w-none mx-auto"
          >
            {/* Bild - mit max-height für kompaktere Darstellung */}
            <div className="rounded-t-[6px] lg:rounded-[6px] overflow-hidden shadow-lg">
              <Image
                src="/images/home/staedte-fimi.avif"
                alt="FIMI Gebäudereinigung - Einsatzgebiete in Bayern"
                width={4800}
                height={3584}
                className="w-full h-auto max-h-[350px] lg:max-h-[400px] object-cover object-center"
              />
            </div>

            {/* Badge - kompakter */}
            <div className="bg-[#012956] rounded-b-[6px] lg:rounded-[6px] lg:absolute lg:-bottom-4 lg:left-4 lg:right-4 p-2.5 sm:p-3 lg:p-4 lg:shadow-lg">
              <div className="flex items-center gap-2.5 sm:gap-3">
                <div className="w-9 h-9 sm:w-10 sm:h-10 bg-[#109387] rounded-[6px] flex items-center justify-center flex-shrink-0">
                  <MapPin size={18} className="text-white sm:w-5 sm:h-5" />
                </div>
                <div>
                  <p className="text-white font-bold text-sm sm:text-base">
                    8 Einsatzgebiete in Bayern
                  </p>
                  <p className="text-white/70 font-semibold text-xs">
                    Immer in Ihrer Nähe
                  </p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right: Content - kompakter */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <p className="text-sm text-gray-500 font-semibold uppercase tracking-wide mb-2">
              Unsere Einsatzgebiete
            </p>
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-[#012956] leading-[1.1] mb-4">
              Regional verwurzelt,
              <span className="block text-[#109387]">professionell aufgestellt</span>
            </h2>
            <p className="text-base lg:text-lg text-gray-700 font-semibold leading-relaxed mb-6">
              Von Landshut aus haben wir uns in ganz Bayern etabliert. Unsere lokalen Teams
              kennen die Region und sind schnell vor Ort.
            </p>

            {/* Standorte Grid - kompakter */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 mb-6">
              {standorte.map((stadt, index) => (
                <motion.a
                  key={stadt}
                  href="#contact-form"
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3, delay: index * 0.05 }}
                  className="bg-[#f8f9fa] hover:bg-[#109387] rounded-[6px] px-3 py-2.5 text-center cursor-pointer transition-all duration-300 group"
                >
                  <span className="font-bold text-sm text-[#012956] group-hover:text-white transition-colors duration-300">{stadt}</span>
                </motion.a>
              ))}
            </div>

            {/* CTA - kompakter */}
            <div className="flex flex-col sm:flex-row gap-3">
              <a
                href="#contact-form"
                className="inline-flex items-center justify-center gap-2 bg-[#109387] hover:bg-[#0d7d72] text-white font-bold text-base px-6 py-3 rounded-[6px] transition-all duration-300 group"
              >
                Kontakt aufnehmen
                <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
              </a>
              <Link
                href="/referenzen"
                className="inline-flex items-center justify-center gap-2 bg-[#012956] hover:bg-[#01203d] text-white font-bold text-base px-6 py-3 rounded-[6px] transition-all duration-300"
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
