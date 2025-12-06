'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'

const teamBereiche = [
  {
    titel: 'Vertrieb',
    beschreibung: 'Persönliche Beratung und maßgeschneiderte Lösungen für Ihren Bedarf.',
    mitglieder: [
      {
        name: 'Anna Weber',
        position: 'Key Account Managerin',
        bild: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=600&auto=format&fit=crop',
      },
      {
        name: 'Michael Huber',
        position: 'Vertriebsleiter',
        bild: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=600&auto=format&fit=crop',
      },
    ],
  },
  {
    titel: 'Büro & Verwaltung',
    beschreibung: 'Reibungslose Organisation, Disposition und Kundenservice.',
    mitglieder: [
      {
        name: 'Sandra Müller',
        position: 'Office Managerin',
        bild: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=600&auto=format&fit=crop',
      },
      {
        name: 'Lisa Bauer',
        position: 'Disposition',
        bild: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=600&auto=format&fit=crop',
      },
      {
        name: 'Julia Fischer',
        position: 'Buchhaltung',
        bild: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=600&auto=format&fit=crop',
      },
    ],
  },
  {
    titel: 'Objektleitung',
    beschreibung: 'Verantwortung für Qualität und Kundenzufriedenheit vor Ort.',
    mitglieder: [
      {
        name: 'Stefan Gruber',
        position: 'Objektleiter Gewerbe',
        bild: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=600&auto=format&fit=crop',
      },
      {
        name: 'Maria Schneider',
        position: 'Objektleiterin Industrie',
        bild: 'https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?q=80&w=600&auto=format&fit=crop',
      },
      {
        name: 'Andreas Maier',
        position: 'Objektleiter Sonderreinigung',
        bild: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?q=80&w=600&auto=format&fit=crop',
      },
    ],
  },
  {
    titel: 'Qualitätsmanagement',
    beschreibung: 'Kontinuierliche Verbesserung und Einhaltung unserer Qualitätsstandards.',
    mitglieder: [
      {
        name: 'Petra Hoffmann',
        position: 'QM-Beauftragte',
        bild: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=600&auto=format&fit=crop',
      },
    ],
  },
]

export default function TeamSection() {
  return (
    <section id="team" className="py-20 lg:py-32 bg-[#012956]" aria-labelledby="team-heading">
      <div className="w-full max-w-[1800px] mx-auto px-6 lg:px-12 xl:px-20">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16 lg:mb-20"
        >
          <p className="text-[#109387] font-bold text-sm uppercase tracking-[0.2em] mb-4">
            Unser Team
          </p>
          <h2 id="team-heading" className="text-3xl md:text-4xl lg:text-5xl font-bold text-white leading-[1.1] mb-6">
            90+ Mitarbeiter für
            <span className="block text-[#109387]">Ihren Erfolg</span>
          </h2>
          <p className="text-lg text-white/80 font-semibold max-w-2xl mx-auto">
            Hinter jedem sauberen Gebäude steht ein engagiertes Team. Lernen Sie einige unserer Schlüsselpersonen kennen.
          </p>
        </motion.div>

        {/* Team Bereiche */}
        <div className="space-y-16">
          {teamBereiche.map((bereich, bereichIndex) => (
            <motion.div
              key={bereich.titel}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: bereichIndex * 0.1 }}
            >
              {/* Bereich Header */}
              <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 mb-8">
                <div>
                  <h3 className="text-2xl lg:text-3xl font-bold text-white mb-2">
                    {bereich.titel}
                  </h3>
                  <p className="text-white/60 font-semibold">
                    {bereich.beschreibung}
                  </p>
                </div>
                <div className="text-[#109387] font-bold">
                  {bereich.mitglieder.length} Mitarbeiter
                </div>
              </div>

              {/* Team Members Grid */}
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 lg:gap-6">
                {bereich.mitglieder.map((person, personIndex) => (
                  <motion.div
                    key={person.name}
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: personIndex * 0.1 }}
                    className="group"
                  >
                    {/* Image with 4:5 aspect ratio */}
                    <div className="relative aspect-[4/5] rounded-[6px] overflow-hidden mb-4">
                      <Image
                        src={person.bild}
                        alt={person.name}
                        fill
                        sizes="(max-width: 768px) 50vw, 20vw"
                        className="object-cover group-hover:scale-105 transition-transform duration-500"
                        quality={75}
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />

                      {/* Name Overlay */}
                      <div className="absolute bottom-0 left-0 right-0 p-4">
                        <p className="text-white font-bold text-lg leading-tight">
                          {person.name}
                        </p>
                        <p className="text-[#109387] font-semibold text-sm">
                          {person.position}
                        </p>
                      </div>
                    </div>
                  </motion.div>
                ))}

                {/* Placeholder für weitere Mitarbeiter */}
                <Link href="/karriere" aria-label="Karriere bei FIMI - Jetzt bewerben">
                  <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    className="relative aspect-[4/5] rounded-[6px] overflow-hidden bg-white/5 border-2 border-dashed border-white/20 hover:border-[#109387] hover:bg-[#109387]/10 flex items-center justify-center cursor-pointer transition-all duration-300 group"
                  >
                    <div className="text-center p-4">
                      <p className="text-white/40 group-hover:text-[#109387] font-bold text-4xl mb-2 transition-colors duration-300">+</p>
                      <p className="text-white/60 group-hover:text-white font-semibold text-sm transition-colors duration-300">
                        Komm ins Team!
                      </p>
                    </div>
                  </motion.div>
                </Link>
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA zu Karriere */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mt-20 text-center"
        >
          <div className="bg-[#109387] rounded-[6px] p-8 lg:p-12 max-w-3xl mx-auto">
            <h3 className="text-2xl lg:text-3xl font-bold text-white mb-4">
              Werden Sie Teil unseres Teams
            </h3>
            <p className="text-white/90 font-semibold mb-8">
              Wir suchen motivierte Mitarbeiter, die mit uns wachsen wollen. Faire Bezahlung, echte Entwicklungsmöglichkeiten und ein starkes Team erwarten Sie.
            </p>
            <Link
              href="/karriere"
              className="inline-flex items-center gap-3 bg-white hover:bg-gray-100 text-[#012956] font-bold text-lg px-8 py-4 rounded-[6px] transition-all duration-300 group"
            >
              Karriere bei FIMI
              <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </motion.div>

      </div>
    </section>
  )
}
