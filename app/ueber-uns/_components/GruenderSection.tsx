'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import { Quote } from 'lucide-react'

const gruender = [
  {
    name: 'Donald Tzoutzis',
    rolle: 'Geschäftsführer',
    bereich: 'Vertrieb & Kundenbetreuung',
    bild: '/images/ueber-uns/gruender-donald-tzoutzis.avif',
    zitat: 'Für mich bedeutet Erfolg, dass unsere Kunden morgens in ein sauberes Büro kommen und sich auf ihre eigentliche Arbeit konzentrieren können. Wir nehmen ihnen eine Sorge ab.',
    email: 'd.tzoutzis@fimi-gebaeudereinigung.de',
    telefon: '0871 430 334 61',
  },
  {
    name: 'Ergkest Qirjaj',
    rolle: 'Geschäftsführer',
    bereich: 'Betrieb & Qualitätsmanagement',
    bild: '/images/ueber-uns/gruender-ergkest-qirjaj.avif',
    zitat: 'Qualität ist kein Zufall. Sie entsteht durch klare Prozesse, gut geschulte Mitarbeiter und den Anspruch, jeden Tag besser zu werden als am Tag zuvor.',
    email: 'e.qirjaj@fimi-gebaeudereinigung.de',
    telefon: '0871 430 334 62',
  },
]

export default function GruenderSection() {
  return (
    <section id="gruender" className="py-20 lg:py-32 bg-white" aria-labelledby="gruender-heading">
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
          <h2 id="gruender-heading" className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#012956] leading-[1.1] mb-6">
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
                    sizes="(max-width: 768px) 100vw, 40vw"
                    className="object-cover"
                    quality={75}
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
                    <Quote size={32} className="text-[#109387]/20 absolute -top-2 -left-1" aria-hidden="true" />
                    <p className="text-gray-700 font-semibold leading-relaxed pl-6 italic">
                      &ldquo;{person.zitat}&rdquo;
                    </p>
                  </div>

                  {/* Contact */}
                  <div className="mt-6 pt-6 border-t border-gray-200 space-y-2">
                    <a
                      href={`mailto:${person.email}`}
                      className="block text-[#109387] font-bold hover:text-[#012956] transition-colors"
                    >
                      {person.email}
                    </a>
                    <a
                      href={`tel:+49${person.telefon.replace(/^0/, '').replace(/\s/g, '')}`}
                      className="block text-gray-600 font-semibold hover:text-[#109387] transition-colors"
                    >
                      {person.telefon}
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
