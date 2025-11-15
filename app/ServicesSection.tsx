'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import Image from 'next/image'
import { Building2, Factory, Wrench, ArrowRight } from 'lucide-react'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { fadeInUp, staggerContainer, cardHover } from '@/utils/animations'

const serviceCategories = [
  {
    id: 1,
    icon: Building2,
    title: 'Gewerbliche Objektreinigung',
    description: 'Professionelle Reinigungslösungen für Büros, Verwaltungsgebäude und Gewerbeimmobilien. Zuverlässig, gründlich und termingerecht.',
    services: ['Büroreinigung', 'Unterhaltsreinigung', 'Baureinigung', 'Hallenreinigung', 'Parkplatzreinigung', 'Fensterreinigung'],
    link: '/leistungen/bueroreinigung',
    image: 'https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=2940&auto=format&fit=crop'
  },
  {
    id: 2,
    icon: Factory,
    title: 'Industrielle & Spezialreinigung',
    description: 'Spezialisiert auf anspruchsvolle Reinigungsaufgaben in Produktionsstätten und Industrieanlagen mit modernster Technik.',
    services: ['Industriereinigung', 'Maschinenreinigung', 'Fassadenreinigung', 'Tiefgaragenreinigung', 'Außenanlagenpflege', 'Sonderleistungen'],
    link: '/leistungen/industriereinigung',
    image: 'https://images.unsplash.com/photo-1581578731548-c64695cc6952?q=80&w=2940&auto=format&fit=crop'
  },
  {
    id: 3,
    icon: Wrench,
    title: 'Facility Management & Services',
    description: 'Umfassende Facility-Management-Lösungen für einen reibungslosen Betrieb Ihrer Immobilie. Alles aus einer Hand.',
    services: ['Facility Management', 'Hausmeisterservice', 'Winterdienst', 'Beschaffungsmanagement'],
    link: '/leistungen/facility-management',
    image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2940&auto=format&fit=crop'
  }
]

export default function ServicesSection() {
  return (
    <section className="section-padding bg-gradient-to-br from-gray-50 to-white">
      <div className="container">
        {/* Section Header */}
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
            Unsere Leistungen
          </motion.span>
          <motion.h2
            variants={fadeInUp}
            className="text-4xl md:text-5xl font-bold text-fimi-navy mb-6"
          >
            Maßgeschneiderte Lösungen<br />
            <span className="text-fimi-turquoise">für jeden Bedarf</span>
          </motion.h2>
          <motion.p
            variants={fadeInUp}
            className="text-xl text-gray-600"
          >
            Von der gewerblichen Objektreinigung bis zum kompletten Facility Management –
            wir bieten Ihnen professionelle Lösungen aus einer Hand.
          </motion.p>
        </motion.div>

        {/* Service Cards Grid */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={staggerContainer}
          className="grid md:grid-cols-3 gap-8"
        >
          {serviceCategories.map((category) => {
            const Icon = category.icon
            return (
              <motion.div key={category.id} variants={fadeInUp}>
                <motion.div
                  variants={cardHover}
                  initial="rest"
                  whileHover="hover"
                >
                  <Card className="h-full overflow-hidden border-2 hover:border-fimi-turquoise transition-all duration-300 group hover:shadow-2xl">
                    {/* Image */}
                    <div className="relative h-48 overflow-hidden">
                      <Image
                        src={category.image}
                        alt={category.title}
                        fill
                        className="object-cover transition-transform duration-700 group-hover:scale-110"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-fimi-navy/90 to-transparent" />

                      {/* Icon on Image */}
                      <div className="absolute bottom-4 left-4">
                        <div className="w-16 h-16 bg-fimi-turquoise rounded-xl flex items-center justify-center">
                          <Icon className="w-8 h-8 text-white" />
                        </div>
                      </div>
                    </div>

                    <CardHeader>
                      <CardTitle className="text-2xl text-fimi-navy group-hover:text-fimi-turquoise transition-colors">
                        {category.title}
                      </CardTitle>
                    </CardHeader>

                    <CardContent className="space-y-6">
                      {/* Description */}
                      <p className="text-gray-600 leading-relaxed">
                        {category.description}
                      </p>

                      {/* Services List */}
                      <ul className="space-y-2">
                        {category.services.map((service) => (
                          <li key={service} className="flex items-center text-sm text-gray-700">
                            <span className="w-1.5 h-1.5 bg-fimi-turquoise rounded-full mr-3"></span>
                            {service}
                          </li>
                        ))}
                      </ul>

                      {/* Link */}
                      <Link
                        href={category.link}
                        className="inline-flex items-center text-fimi-turquoise font-semibold hover:text-fimi-navy transition-colors group/link"
                      >
                        <span>Mehr erfahren</span>
                        <ArrowRight className="w-5 h-5 ml-2 transition-transform group-hover/link:translate-x-1" />
                      </Link>
                    </CardContent>
                  </Card>
                </motion.div>
              </motion.div>
            )
          })}
        </motion.div>
      </div>
    </section>
  )
}
