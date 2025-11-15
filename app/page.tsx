'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'
import { fadeInUp, staggerContainer } from '@/utils/animations'

export default function HomePage() {
  return (
    <main className="min-h-screen bg-white">
      {/* Hero Section - BGS Style */}
      <section className="relative min-h-screen flex items-center bg-fimi-navy">
        <div className="absolute inset-0 opacity-10">
          <Image
            src="https://images.unsplash.com/photo-1581578731548-c64695cc6952?q=80&w=2940"
            alt="Background"
            fill
            className="object-cover"
            priority
          />
        </div>

        <div className="container relative z-10 py-32">
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            animate="visible"
            className="max-w-4xl"
          >
            {/* GROSSES LOGO */}
            <motion.div variants={fadeInUp} className="mb-12">
              <Image
                src="/FIMI-LOGO/FIMI-LOGO_Weiße-Schrift_Transparent.png"
                alt="FIMI Gebäudereinigung"
                width={500}
                height={167}
                className="h-32 w-auto"
                priority
              />
            </motion.div>

            {/* Headline */}
            <motion.h1
              variants={fadeInUp}
              className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight"
            >
              Professionelle Reinigung<br />
              <span className="text-fimi-turquoise">für Ihr Unternehmen</span>
            </motion.h1>

            {/* Subtitle */}
            <motion.p
              variants={fadeInUp}
              className="text-xl md:text-2xl text-gray-200 mb-12 max-w-2xl"
            >
              15+ Jahre Erfahrung in Gebäudereinigung, Industriereinigung und Facility Management. ISO-zertifiziert und vertrauenswürdig.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              variants={fadeInUp}
              className="flex flex-col sm:flex-row gap-4"
            >
              <a
                href="tel:01747225473"
                className="inline-flex items-center justify-center px-8 py-4 bg-fimi-turquoise text-white text-lg font-semibold hover:opacity-90 transition-opacity"
                style={{ borderRadius: '4px' }}
              >
                Jetzt anrufen: 01747225473
              </a>
              <a
                href="mailto:info@fimi-service.de"
                className="inline-flex items-center justify-center px-8 py-4 bg-white text-fimi-navy text-lg font-semibold hover:opacity-90 transition-opacity"
                style={{ borderRadius: '4px' }}
              >
                E-Mail schreiben
              </a>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Trust Section - BGS Style */}
      <section className="py-20 bg-white">
        <div className="container">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-fimi-navy mb-6">
              Warum FIMI?
            </h2>
            <p className="text-xl text-gray-600">
              Über 500 Unternehmen vertrauen auf unsere Expertise
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-6">
            {[
              { title: 'ISO-Zertifiziert', value: '100%' },
              { title: '24/7 Erreichbar', value: 'Immer' },
              { title: 'Zufriedene Kunden', value: '500+' },
              { title: 'Jahre Erfahrung', value: '15+' }
            ].map((item, i) => (
              <div
                key={i}
                className="bg-white border-2 border-gray-200 p-8 text-center hover-lift"
                style={{ borderRadius: '4px' }}
              >
                <p className="text-5xl font-bold text-fimi-turquoise mb-2">
                  {item.value}
                </p>
                <p className="text-gray-700 font-semibold">
                  {item.title}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section - BGS Style */}
      <section className="py-20 bg-gray-50">
        <div className="container">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-fimi-navy mb-6">
              Unsere Leistungen
            </h2>
            <p className="text-xl text-gray-600">
              Professionelle Lösungen für jeden Bedarf
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: 'Gewerbliche Reinigung',
                desc: 'Büroreinigung, Unterhaltsreinigung, Baureinigung und mehr'
              },
              {
                title: 'Industriereinigung',
                desc: 'Spezialreinigung für Produktionsstätten und Anlagen'
              },
              {
                title: 'Facility Management',
                desc: 'Umfassende Gebäudebetreuung und Hausmeisterservice'
              }
            ].map((service, i) => (
              <div
                key={i}
                className="bg-white border-2 border-gray-200 p-8 hover-lift"
                style={{ borderRadius: '4px' }}
              >
                <h3 className="text-2xl font-bold text-fimi-navy mb-4">
                  {service.title}
                </h3>
                <p className="text-gray-600 mb-6">
                  {service.desc}
                </p>
                <a
                  href="#"
                  className="text-fimi-turquoise font-semibold hover:underline"
                >
                  Mehr erfahren →
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-fimi-turquoise text-white">
        <div className="container text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Bereit für professionelle Sauberkeit?
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Kontaktieren Sie uns jetzt für ein kostenloses Angebot
          </p>
          <a
            href="tel:01747225473"
            className="inline-block bg-white text-fimi-turquoise px-8 py-4 font-bold text-lg hover:opacity-90 transition-opacity"
            style={{ borderRadius: '4px' }}
          >
            Jetzt anrufen: 01747225473
          </a>
        </div>
      </section>
    </main>
  )
}
