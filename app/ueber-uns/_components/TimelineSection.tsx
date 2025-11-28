'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'

const timeline = [
  {
    year: '2016',
    title: 'Der Anfang',
    subtitle: 'Gründung als GbR',
    description: 'Mit einer Vision und viel Leidenschaft gründeten wir FIMI als kleine GbR in Landshut. Der Fokus lag zunächst auf Glas- und Fassadenreinigung.',
    image: 'https://images.unsplash.com/photo-1504307651254-35680f356dfd?q=80&w=800&auto=format&fit=crop',
    highlight: false,
  },
  {
    year: '2017',
    title: 'Erste Großkunden',
    subtitle: 'Wachstum beginnt',
    description: 'Die ersten gewerblichen Großkunden vertrauten auf unsere Qualität. Wir erweiterten unser Team auf 15 Mitarbeiter.',
    image: 'https://images.unsplash.com/photo-1521737711867-e3b97375f902?q=80&w=800&auto=format&fit=crop',
    highlight: false,
  },
  {
    year: '2018',
    title: 'Leistungserweiterung',
    subtitle: 'Mehr als nur Glas',
    description: 'Unterhaltsreinigung, Büroreinigung und Industriereinigung kamen zu unserem Portfolio. Die Nachfrage stieg kontinuierlich.',
    image: 'https://images.unsplash.com/photo-1581578731548-c64695cc6952?q=80&w=800&auto=format&fit=crop',
    highlight: false,
  },
  {
    year: '2020',
    title: 'Pandemie-Herausforderung',
    subtitle: 'Stärker durch die Krise',
    description: 'Die Corona-Pandemie stellte uns vor neue Herausforderungen. Mit Hygienekonzepten und Desinfektionsservices wurden wir zum unverzichtbaren Partner unserer Kunden.',
    image: 'https://images.unsplash.com/photo-1584634731339-252c581abfc5?q=80&w=800&auto=format&fit=crop',
    highlight: false,
  },
  {
    year: '2022',
    title: 'Regionale Expansion',
    subtitle: '8 Einsatzgebiete in Bayern',
    description: 'Von Landshut aus expandierten wir nach München, Regensburg, Ingolstadt, Freising, Erding, Straubing und Passau.',
    image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=800&auto=format&fit=crop',
    highlight: true,
  },
  {
    year: '2025',
    title: 'Heute',
    subtitle: '90+ Mitarbeiter, 120+ Kunden',
    description: 'Mit über 90 Mitarbeitern und mehr als 120 zufriedenen Geschäftskunden sind wir einer der führenden Gebäudereiniger in Niederbayern und Oberbayern.',
    image: 'https://images.unsplash.com/photo-1600880292203-757bb62b4baf?q=80&w=800&auto=format&fit=crop',
    highlight: true,
  },
  {
    year: '2026',
    title: 'ISO-Zertifizierung',
    subtitle: 'Coming Soon',
    description: 'Wir arbeiten bereits nach ISO 9001 und ISO 14001 Standards. Die offizielle Zertifizierung ist unser nächstes Ziel für höchste Qualitäts- und Umweltstandards.',
    image: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?q=80&w=800&auto=format&fit=crop',
    highlight: false,
  },
]

export default function TimelineSection() {
  return (
    <section id="timeline" className="py-20 lg:py-32 bg-[#f8f9fa]">
      <div className="w-full max-w-[1800px] mx-auto px-6 lg:px-12 xl:px-20">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16 lg:mb-24"
        >
          <p className="text-sm text-gray-500 font-semibold uppercase tracking-wide mb-3">
            Unsere Geschichte
          </p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#012956] leading-[1.1] mb-6">
            Von der kleinen GbR zum
            <span className="block text-[#109387]">regionalen Marktführer</span>
          </h2>
          <p className="text-lg text-gray-700 font-semibold max-w-2xl mx-auto">
            8 Jahre kontinuierliches Wachstum durch Qualität, Zuverlässigkeit und das Vertrauen unserer Kunden.
          </p>
        </motion.div>

        {/* Timeline */}
        <div className="relative">
          {/* Center Line - Desktop */}
          <div className="hidden lg:block absolute left-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-[#109387] via-[#012956] to-[#109387] transform -translate-x-1/2" />

          {timeline.map((item, index) => (
            <motion.div
              key={item.year}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className={`relative mb-12 lg:mb-20 ${
                index % 2 === 0 ? 'lg:pr-[52%]' : 'lg:pl-[52%]'
              }`}
            >
              {/* Year Badge - Center on Desktop */}
              <div className={`hidden lg:flex absolute top-0 left-1/2 transform -translate-x-1/2 z-10
                ${item.highlight ? 'bg-[#109387]' : 'bg-[#012956]'}
                text-white font-bold text-xl px-6 py-3 rounded-[6px] shadow-lg`}
              >
                {item.year}
              </div>

              {/* Card */}
              <div className={`bg-white rounded-[6px] shadow-lg overflow-hidden lg:mt-16
                ${item.highlight ? 'ring-2 ring-[#109387]' : ''}`}
              >
                <div className="grid md:grid-cols-2 gap-0">
                  {/* Image */}
                  <div className={`relative h-64 md:h-full min-h-[280px] ${
                    index % 2 === 0 ? 'md:order-1' : 'md:order-2'
                  }`}>
                    <Image
                      src={item.image}
                      alt={item.title}
                      fill
                      unoptimized
                      className="object-cover"
                    />
                    {/* Mobile Year Badge */}
                    <div className={`lg:hidden absolute top-4 left-4
                      ${item.highlight ? 'bg-[#109387]' : 'bg-[#012956]'}
                      text-white font-bold text-lg px-4 py-2 rounded-[6px]`}
                    >
                      {item.year}
                    </div>
                  </div>

                  {/* Content */}
                  <div className={`p-8 lg:p-10 flex flex-col justify-center ${
                    index % 2 === 0 ? 'md:order-2' : 'md:order-1'
                  }`}>
                    <p className="text-[#109387] font-bold text-sm uppercase tracking-wide mb-2">
                      {item.subtitle}
                    </p>
                    <h3 className="text-2xl lg:text-3xl font-bold text-[#012956] mb-4">
                      {item.title}
                    </h3>
                    <p className="text-gray-700 font-semibold leading-relaxed">
                      {item.description}
                    </p>
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
