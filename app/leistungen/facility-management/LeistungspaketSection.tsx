'use client'

import Link from 'next/link'
import Image from 'next/image'
import { ArrowRight, Sparkles, Wrench, Snowflake, Trees, CheckCircle } from 'lucide-react'

const kernleistungen = [
  {
    icon: Sparkles,
    title: 'Unterhaltsreinigung',
    description: 'Regelmäßige Reinigung aller Räume – Büros, Sanitär, Gemeinschaftsflächen. Täglich, wöchentlich oder nach Ihrem Bedarf.',
    href: '/leistungen/unterhaltsreinigung',
    image: 'https://images.unsplash.com/photo-1581578731548-c64695cc6952?q=80&w=800&auto=format&fit=crop',
    features: ['Büro- & Sanitärreinigung', 'Flexible Intervalle', 'Festes Reinigungsteam'],
  },
  {
    icon: Wrench,
    title: 'Hausmeisterservice',
    description: 'Ihr Hausmeister auf Abruf. Kleinreparaturen, Kontrollgänge, technische Betreuung – alles, was Ihr Gebäude braucht.',
    href: '/leistungen/hausmeisterservice',
    image: 'https://images.unsplash.com/photo-1621905251189-08b45d6a269e?q=80&w=800&auto=format&fit=crop',
    features: ['Kleinreparaturen', 'Kontrollgänge', 'Technische Betreuung'],
  },
  {
    icon: Snowflake,
    title: 'Winterdienst',
    description: 'Schnee und Eis? Wir sind ab 4 Uhr morgens im Einsatz. Räumen, Streuen, Dokumentieren – rechtssicher und zuverlässig.',
    href: '/leistungen/winterdienst',
    image: 'https://images.unsplash.com/photo-1491002052546-bf38f186af56?q=80&w=800&auto=format&fit=crop',
    features: ['Ab 4:00 Uhr im Einsatz', 'Dokumentation inklusive', '24/7 Bereitschaft'],
  },
  {
    icon: Trees,
    title: 'Außenanlagenpflege',
    description: 'Gepflegte Grünanlagen, saubere Wege, einladender Eingangsbereich. Der erste Eindruck zählt – wir sorgen dafür.',
    href: '/leistungen/aussenanlagenpflege',
    image: 'https://images.unsplash.com/photo-1558904541-efa843a96f01?q=80&w=800&auto=format&fit=crop',
    features: ['Rasenpflege & Heckenschnitt', 'Laubentfernung', 'Beetpflege'],
  },
]

const zusatzleistungen = [
  { name: 'Fensterreinigung', href: '/leistungen/fensterreinigung' },
  { name: 'Tiefgaragenreinigung', href: '/leistungen/tiefgaragenreinigung' },
  { name: 'Parkplatzreinigung', href: '/leistungen/parkplatzreinigung' },
  { name: 'Baureinigung', href: '/leistungen/baureinigung' },
  { name: 'Industriereinigung', href: '/leistungen/industriereinigung' },
  { name: 'Sonderreinigung', href: '/leistungen/sonderreinigung' },
]

export default function LeistungspaketSection() {
  return (
    <section className="py-16 sm:py-20 lg:py-28 bg-[#f8f9fa]">
      <div className="w-full max-w-[1800px] mx-auto px-4 sm:px-6 md:px-8 lg:px-12 xl:px-20">

        {/* Section Header */}
        <div className="text-center mb-12 sm:mb-16">
          <span className="text-[#109387] font-bold text-xs sm:text-sm uppercase tracking-wide mb-3 sm:mb-4 block">
            Leistungsumfang
          </span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-[#012956] leading-[1.1] mb-4 sm:mb-6">
            Was im Facility Management enthalten ist
          </h2>
          <p className="text-base sm:text-lg text-gray-600 font-semibold max-w-3xl mx-auto">
            Vier Kernleistungen, die zusammengehören. Individuell kombinierbar,
            zentral koordiniert, einheitlich dokumentiert.
          </p>
        </div>

        {/* Kernleistungen Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 mb-12 sm:mb-16">
          {kernleistungen.map((leistung, index) => (
            <Link
              key={index}
              href={leistung.href}
              className="group bg-white rounded-[6px] overflow-hidden shadow-sm hover:shadow-xl transition-all duration-500"
            >
              {/* Image */}
              <div className="relative h-48 overflow-hidden">
                <Image
                  src={leistung.image}
                  alt={leistung.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#012956]/80 to-transparent" />
                <div className="absolute bottom-4 left-4 right-4">
                  <div className="flex items-center gap-2 text-white">
                    <leistung.icon className="w-5 h-5 text-[#109387]" />
                    <span className="font-bold text-lg">{leistung.title}</span>
                  </div>
                </div>
              </div>

              {/* Content */}
              <div className="p-5 sm:p-6">
                <p className="text-gray-600 font-semibold text-sm sm:text-base mb-4 leading-relaxed">
                  {leistung.description}
                </p>

                {/* Features */}
                <ul className="space-y-2 mb-4">
                  {leistung.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center gap-2 text-sm">
                      <CheckCircle className="w-4 h-4 text-[#109387] flex-shrink-0" />
                      <span className="text-gray-700 font-semibold">{feature}</span>
                    </li>
                  ))}
                </ul>

                {/* Link */}
                <div className="flex items-center gap-2 text-[#109387] font-bold text-sm group-hover:text-[#012956] transition-colors">
                  Mehr erfahren
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            </Link>
          ))}
        </div>

        {/* Zusatzleistungen */}
        <div className="bg-white rounded-[6px] p-6 sm:p-8 lg:p-10">
          <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6">
            <div>
              <h3 className="text-xl sm:text-2xl font-bold text-[#012956] mb-2">
                Zusätzlich buchbar
              </h3>
              <p className="text-gray-600 font-semibold">
                Erweitern Sie Ihr Paket nach Bedarf – alle Leistungen aus einer Hand.
              </p>
            </div>

            <div className="flex flex-wrap gap-2 sm:gap-3">
              {zusatzleistungen.map((leistung, index) => (
                <Link
                  key={index}
                  href={leistung.href}
                  className="inline-flex items-center gap-2 bg-[#f8f9fa] hover:bg-[#012956] border-2 border-[#012956] text-[#012956] hover:text-white font-bold text-sm px-4 py-2 rounded-[6px] transition-all duration-300"
                >
                  {leistung.name}
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              ))}
            </div>
          </div>
        </div>

      </div>
    </section>
  )
}
