'use client'

import { motion } from 'framer-motion'
import { Shield, Leaf, Users, Clock, Award, Heart } from 'lucide-react'

const werte = [
  {
    icon: Shield,
    titel: 'Qualität ohne Kompromisse',
    beschreibung: 'ISO 9001 zertifiziert. Jeder Reinigungsauftrag wird nach standardisierten Prozessen durchgeführt und regelmäßig kontrolliert. Gleichbleibende Qualität ist unser Versprechen.',
  },
  {
    icon: Leaf,
    titel: 'Nachhaltigkeit',
    beschreibung: 'ISO 14001 zertifiziert. Wir setzen auf umweltschonende Reinigungsmittel, ressourcensparende Verfahren und recycelbare Materialien. Sauberkeit muss nicht auf Kosten der Umwelt gehen.',
  },
  {
    icon: Users,
    titel: 'Partnerschaft',
    beschreibung: 'Wir sehen uns nicht als Dienstleister, sondern als Partner unserer Kunden. Langfristige Beziehungen, offene Kommunikation und gegenseitiges Vertrauen sind unser Fundament.',
  },
  {
    icon: Clock,
    titel: 'Zuverlässigkeit',
    beschreibung: 'Pünktlichkeit und Verlässlichkeit sind bei uns keine Floskeln. Wenn wir zusagen, halten wir. 24/7 erreichbar für Notfälle, flexible Einsatzzeiten für Ihren Bedarf.',
  },
  {
    icon: Award,
    titel: 'Professionalität',
    beschreibung: 'Geschultes Fachpersonal, moderne Ausrüstung und dokumentierte Prozesse. Wir arbeiten nicht irgendwie, sondern nach den höchsten Standards der Branche.',
  },
  {
    icon: Heart,
    titel: 'Mitarbeiter-Fokus',
    beschreibung: 'Zufriedene Mitarbeiter leisten bessere Arbeit. Faire Bezahlung, Weiterbildung und Wertschätzung sind bei uns selbstverständlich. Das spüren auch unsere Kunden.',
  },
]

export default function PhilosophieSection() {
  return (
    <section className="py-20 lg:py-32 bg-white">
      <div className="w-full max-w-[1800px] mx-auto px-6 lg:px-12 xl:px-20">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl mb-16 lg:mb-20"
        >
          <p className="text-sm text-gray-500 font-semibold uppercase tracking-wide mb-3">
            Unsere Philosophie
          </p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#012956] leading-[1.1] mb-6">
            Werte, die uns
            <span className="text-[#109387]"> antreiben</span>
          </h2>
          <p className="text-lg text-gray-700 font-semibold leading-relaxed">
            Was macht FIMI anders? Es ist nicht die Technik allein - es ist unsere Einstellung.
            Wir glauben daran, dass professionelle Gebäudereinigung mehr ist als nur sauber machen.
            Es geht darum, einen echten Mehrwert für unsere Kunden zu schaffen.
          </p>
        </motion.div>

        {/* Werte Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {werte.map((wert, index) => {
            const IconComponent = wert.icon
            return (
              <motion.div
                key={wert.titel}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group bg-[#f8f9fa] rounded-[6px] p-8 hover:bg-[#012956] transition-all duration-500"
              >
                {/* Icon */}
                <div className="w-14 h-14 bg-[#109387]/10 group-hover:bg-[#109387] rounded-[6px] flex items-center justify-center mb-6 transition-colors duration-500">
                  <IconComponent size={28} className="text-[#109387] group-hover:text-white transition-colors duration-500" />
                </div>

                <h3 className="text-xl font-bold text-[#012956] group-hover:text-white mb-4 transition-colors duration-500">
                  {wert.titel}
                </h3>

                <p className="text-gray-700 group-hover:text-white/80 font-semibold leading-relaxed transition-colors duration-500">
                  {wert.beschreibung}
                </p>
              </motion.div>
            )
          })}
        </div>

        {/* Bottom Quote */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mt-16 lg:mt-24 bg-[#109387] rounded-[6px] p-8 lg:p-12"
        >
          <div className="max-w-4xl mx-auto text-center">
            <p className="text-2xl lg:text-3xl font-bold text-white leading-snug mb-6">
              &ldquo;Keine Lösung zu haben ist keine Option. Wir finden immer einen Weg, die Anforderungen unserer Kunden zu erfüllen - auch wenn es unkonventionell sein muss.&rdquo;
            </p>
            <p className="text-white/80 font-semibold">
              — Die FIMI Geschäftsführung
            </p>
          </div>
        </motion.div>

      </div>
    </section>
  )
}
