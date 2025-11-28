'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import { Quote } from 'lucide-react'

const gruender = [
  {
    name: 'Max Mustermann',
    rolle: 'Geschäftsführer',
    bereich: 'Vertrieb & Kundenbetreuung',
    bild: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=800&auto=format&fit=crop',
    zitat: 'Für mich bedeutet Erfolg, dass unsere Kunden morgens in ein sauberes Büro kommen und sich auf ihre eigentliche Arbeit konzentrieren können. Wir nehmen ihnen eine Sorge ab.',
    email: 'max.mustermann@fimi-service.de',
  },
  {
    name: 'Thomas Schmidt',
    rolle: 'Geschäftsführer',
    bereich: 'Betrieb & Qualitätsmanagement',
    bild: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=800&auto=format&fit=crop',
    zitat: 'Qualität ist kein Zufall. Sie entsteht durch klare Prozesse, gut geschulte Mitarbeiter und den Anspruch, jeden Tag besser zu werden als am Tag zuvor.',
    email: 'thomas.schmidt@fimi-service.de',
  },
]

export default function GruenderSection() {
  return (
    <section className="py-20 lg:py-32 bg-white">
      <div className="w-full max-w-[1800px] mx-auto px-6 lg:px-12 xl:px-20">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16 lg:mb-20"
        >
          <p className="text-sm text-gray-500 font-semibold uppercase tracking-wide mb-3">
            Die Köpfe hinter FIMI
          </p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#012956] leading-[1.1] mb-6">
            Unsere Geschäftsführung
          </h2>
          <p className="text-lg text-gray-700 font-semibold max-w-2xl mx-auto">
            Zwei Gründer mit einer gemeinsamen Vision: Gebäudereinigung auf höchstem Niveau.
          </p>
        </motion.div>

        {/* Founders Grid */}
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12">
          {gruender.map((person, index) => (
            <motion.div
              key={person.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="bg-[#f8f9fa] rounded-[6px] overflow-hidden"
            >
              <div className="grid md:grid-cols-5 gap-0">
                {/* Image - 2:3 Aspect Ratio */}
                <div className="md:col-span-2 relative aspect-[4/5]">
                  <Image
                    src={person.bild}
                    alt={person.name}
                    fill
                    unoptimized
                    className="object-cover"
                  />
                </div>

                {/* Content */}
                <div className="md:col-span-3 p-8 lg:p-10 flex flex-col">
                  {/* Role Badge */}
                  <div className="inline-flex items-center self-start bg-[#109387] text-white text-sm font-bold px-4 py-1.5 rounded-[6px] mb-4">
                    {person.rolle}
                  </div>

                  <h3 className="text-2xl lg:text-3xl font-bold text-[#012956] mb-2">
                    {person.name}
                  </h3>
                  <p className="text-[#109387] font-semibold mb-6">
                    {person.bereich}
                  </p>

                  {/* Quote */}
                  <div className="flex-1 relative">
                    <Quote size={32} className="text-[#109387]/20 absolute -top-2 -left-1" />
                    <p className="text-gray-700 font-semibold leading-relaxed pl-6 italic">
                      &ldquo;{person.zitat}&rdquo;
                    </p>
                  </div>

                  {/* Contact */}
                  <div className="mt-6 pt-6 border-t border-gray-200">
                    <a
                      href={`mailto:${person.email}`}
                      className="text-[#109387] font-bold hover:text-[#012956] transition-colors"
                    >
                      {person.email}
                    </a>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  )
}
