'use client'

import { motion } from 'framer-motion'
import { Award, Clock, Users, TrendingUp } from 'lucide-react'
import { Card, CardContent } from '@/components/ui/card'
import { fadeInUp, staggerContainer } from '@/utils/animations'

const trustIndicators = [
  {
    icon: Award,
    title: 'ISO-Zertifiziert',
    description: 'Höchste Qualitätsstandards nach ISO-Norm für Ihre Sicherheit'
  },
  {
    icon: Clock,
    title: '24/7 Erreichbar',
    description: 'Rund um die Uhr für Sie da - auch im Notfall'
  },
  {
    icon: Users,
    title: '500+ Kunden',
    description: 'Über 500 zufriedene Unternehmen vertrauen uns'
  },
  {
    icon: TrendingUp,
    title: '15+ Jahre',
    description: 'Langjährige Erfahrung in der Gebäudereinigung'
  }
]

export default function TrustSection() {
  return (
    <section className="section-padding bg-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 left-0 w-96 h-96 bg-fimi-navy rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-fimi-turquoise rounded-full blur-3xl" />
      </div>

      <div className="container relative z-10">
        {/* Header */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={staggerContainer}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <motion.span
            variants={fadeInUp}
            className="text-fimi-turquoise font-semibold text-sm uppercase tracking-wider mb-4 block"
          >
            Vertrauen & Qualität
          </motion.span>
          <motion.h2
            variants={fadeInUp}
            className="text-4xl md:text-5xl font-bold text-fimi-navy mb-6"
          >
            Warum uns Unternehmen<br />
            <span className="text-fimi-turquoise">vertrauen</span>
          </motion.h2>
        </motion.div>

        {/* Trust Cards */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={staggerContainer}
          className="grid md:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {trustIndicators.map((item, index) => {
            const Icon = item.icon
            return (
              <motion.div key={index} variants={fadeInUp}>
                <Card className="h-full hover-lift border-2 hover:border-fimi-turquoise transition-all duration-300 bg-gradient-to-br from-white to-gray-50">
                  <CardContent className="p-8 flex flex-col items-center text-center h-full">
                    {/* Icon */}
                    <div className="relative mb-6">
                      <div className="w-20 h-20 bg-gradient-to-br from-fimi-navy to-fimi-turquoise rounded-2xl flex items-center justify-center transform hover:scale-110 transition-transform duration-300">
                        <Icon className="w-10 h-10 text-white" />
                      </div>
                      <div className="absolute top-0 left-0 w-20 h-20 bg-fimi-turquoise rounded-2xl opacity-0 hover:opacity-20 blur-xl transition-opacity duration-300" />
                    </div>

                    {/* Content */}
                    <h3 className="text-2xl font-bold text-fimi-navy mb-3">
                      {item.title}
                    </h3>
                    <p className="text-gray-600 leading-relaxed">
                      {item.description}
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            )
          })}
        </motion.div>
      </div>
    </section>
  )
}
