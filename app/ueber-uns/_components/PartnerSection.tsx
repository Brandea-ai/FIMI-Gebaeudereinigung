'use client'

import PartnerLogosSlider from '@/components/PartnerLogosSlider'
import { motion } from 'framer-motion'

export default function PartnerSection() {
  return (
    <section id="partner" className="py-20 lg:py-28 bg-[#f8f9fa] overflow-hidden" aria-labelledby="partner-heading">
      <div className="w-full max-w-[1800px] mx-auto px-6 lg:px-12 xl:px-20">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12 lg:mb-16"
        >
          <h2 id="partner-heading" className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#012956] leading-[1.1] mb-6">
            Ausgestattet mit den
            <span className="text-[#109387]"> Besten</span>
          </h2>
          <p className="text-lg text-gray-700 font-semibold max-w-2xl mx-auto">
            Professionelle Ausrüstung ist die Grundlage für professionelle Ergebnisse.
          </p>
        </motion.div>
      </div>

      {/* Partner Slider - wiederverwendbare Komponente */}
      <PartnerLogosSlider
        showHeader={false}
        showStats={false}
        bgColor="#f8f9fa"
      />
    </section>
  )
}
