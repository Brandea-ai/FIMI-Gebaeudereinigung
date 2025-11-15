'use client'

import { motion } from 'framer-motion'
import { ParallaxImage, ZoomOnScroll } from '@/components/PremiumParallax'
import { fadeInUp, staggerContainer } from '@/utils/animations'
import { CheckCircle } from 'lucide-react'

const benefits = [
  'Makellose Sauberkeit in allen Bereichen',
  'Professionelle Ausrüstung und Reinigungsmittel',
  'Geschultes und erfahrenes Fachpersonal',
  'Flexible Einsatzzeiten nach Ihren Wünschen',
  'Transparente Preisgestaltung ohne versteckte Kosten'
]

export default function BeforeAfterSection() {
  return (
    <section className="section-padding bg-gradient-to-br from-gray-50 to-white relative overflow-hidden">
      <div className="container">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={staggerContainer}
          className="grid lg:grid-cols-2 gap-16 items-center"
        >
          {/* Left - Images with Parallax */}
          <div className="relative">
            {/* Main Image */}
            <ZoomOnScroll className="relative h-[500px] rounded-2xl overflow-hidden shadow-2xl">
              <ParallaxImage
                src="https://images.unsplash.com/photo-1581578731548-c64695cc6952?q=80&w=2940&auto=format&fit=crop"
                alt="Professionelle Gebäudereinigung - Vorher"
                speed={0.3}
                className="h-full"
                priority
              />
            </ZoomOnScroll>

            {/* Floating Badge */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5, duration: 0.6 }}
              className="absolute -bottom-8 -right-8 bg-gradient-to-br from-fimi-navy to-fimi-turquoise text-white p-8 rounded-2xl shadow-2xl z-10"
            >
              <p className="text-5xl font-bold mb-2">98%</p>
              <p className="text-gray-200 text-sm">Kundenzufriedenheit</p>
            </motion.div>
          </div>

          {/* Right - Content */}
          <motion.div variants={staggerContainer}>
            <motion.span
              variants={fadeInUp}
              className="text-fimi-turquoise font-semibold text-sm uppercase tracking-wider mb-4 block"
            >
              Unsere Leistung
            </motion.span>

            <motion.h2
              variants={fadeInUp}
              className="text-4xl md:text-5xl font-bold text-fimi-navy mb-6"
            >
              Perfektion in jedem<br />
              <span className="text-fimi-turquoise">Detail</span>
            </motion.h2>

            <motion.p
              variants={fadeInUp}
              className="text-xl text-gray-600 mb-8 leading-relaxed"
            >
              Wir verwandeln Ihre Räumlichkeiten in makellose, einladende Umgebungen.
              Mit modernster Ausrüstung und höchster Fachkompetenz sorgen wir für
              erstklassige Sauberkeit, die begeistert.
            </motion.p>

            {/* Benefits List */}
            <motion.div variants={fadeInUp} className="space-y-4">
              {benefits.map((benefit, index) => (
                <div key={index} className="flex items-start space-x-3">
                  <CheckCircle className="w-6 h-6 text-fimi-turquoise flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700 leading-relaxed">{benefit}</span>
                </div>
              ))}
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
