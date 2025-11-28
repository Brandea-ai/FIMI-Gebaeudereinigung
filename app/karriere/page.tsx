'use client'

import Image from 'next/image'
import Link from 'next/link'
import { ArrowRight, ArrowLeft, Phone, Briefcase, Users, Heart, TrendingUp } from 'lucide-react'

export default function KarrierePage() {
  return (
    <main className="min-h-screen bg-white">

      {/* Hero Section */}
      <section className="relative min-h-[60vh] flex items-center">
        {/* Background */}
        <div className="absolute inset-0">
          <Image
            src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=3840&auto=format&fit=crop"
            alt="FIMI Team"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#012956]/95 via-[#012956]/85 to-[#012956]/60" />
        </div>

        {/* Content */}
        <div className="relative z-10 w-full max-w-[1800px] mx-auto px-6 lg:px-12 xl:px-20 py-32">
          <div className="max-w-3xl">
            {/* Back Link */}
            <Link
              href="/ueber-uns"
              className="inline-flex items-center gap-2 text-white/60 hover:text-white text-sm font-semibold mb-6 transition-colors"
            >
              <ArrowLeft size={16} />
              Zurück zu Über uns
            </Link>

            <p className="text-[#109387] font-bold text-sm uppercase tracking-[0.2em] mb-4">
              Karriere bei FIMI
            </p>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-[1.05] mb-6">
              Werden Sie Teil
              <span className="block text-[#109387]">unseres Teams</span>
            </h1>

            <p className="text-xl text-white/80 font-semibold leading-relaxed mb-8 max-w-2xl">
              90+ Mitarbeiter. Faire Bezahlung. Echte Entwicklungsmöglichkeiten.
              Wir suchen Menschen, die mit uns wachsen wollen.
            </p>
          </div>
        </div>
      </section>

      {/* Warum FIMI */}
      <section className="py-20 lg:py-28 bg-white">
        <div className="w-full max-w-[1800px] mx-auto px-6 lg:px-12 xl:px-20">
          <div className="text-center mb-16">
            <p className="text-sm text-gray-500 font-semibold uppercase tracking-wide mb-3">
              Ihre Vorteile
            </p>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#109387] leading-[1.1]">
              Warum FIMI?
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                icon: Heart,
                titel: 'Faire Bezahlung',
                beschreibung: 'Übertarifliche Löhne und pünktliche Auszahlung. Weil gute Arbeit gut bezahlt werden sollte.',
              },
              {
                icon: Users,
                titel: 'Festes Team',
                beschreibung: 'Keine Leiharbeit, keine ständig wechselnden Kollegen. Sie arbeiten mit Menschen, die Sie kennen.',
              },
              {
                icon: TrendingUp,
                titel: 'Entwicklung',
                beschreibung: 'Schulungen, Weiterbildungen und echte Aufstiegschancen. Vom Reiniger zum Objektleiter.',
              },
              {
                icon: Briefcase,
                titel: 'Moderne Ausstattung',
                beschreibung: 'Professionelles Equipment von Kärcher, Nilfisk & Co. Keine veralteten Geräte.',
              },
            ].map((item) => (
              <div key={item.titel} className="bg-[#f8f9fa] rounded-[6px] p-8 text-center">
                <div className="w-16 h-16 bg-[#109387]/10 rounded-[6px] flex items-center justify-center mx-auto mb-4">
                  <item.icon size={28} className="text-[#109387]" strokeWidth={1.5} />
                </div>
                <h3 className="text-xl font-bold text-[#012956] mb-3">{item.titel}</h3>
                <p className="text-gray-600 font-semibold">{item.beschreibung}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Placeholder - Coming Soon */}
      <section className="py-20 lg:py-28 bg-[#f8f9fa]">
        <div className="w-full max-w-[1800px] mx-auto px-6 lg:px-12 xl:px-20">
          <div className="max-w-2xl mx-auto text-center">
            <div className="w-20 h-20 bg-[#109387]/10 rounded-[6px] flex items-center justify-center mx-auto mb-6">
              <Briefcase size={40} className="text-[#109387]" strokeWidth={1.5} />
            </div>
            <h2 className="text-2xl md:text-3xl font-bold text-[#012956] mb-4">
              Stellenanzeigen in Kürze
            </h2>
            <p className="text-lg text-gray-600 font-semibold mb-8">
              Wir arbeiten gerade an unserer Karriereseite. Bis dahin können Sie sich
              gerne initiativ bei uns bewerben oder uns direkt kontaktieren.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="mailto:bewerbung@fimi-service.de"
                className="inline-flex items-center justify-center gap-3 bg-[#109387] hover:bg-[#0d7d72] text-white font-bold text-lg px-8 py-4 rounded-[6px] transition-all duration-300 group"
              >
                Initiativ bewerben
                <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
              </a>
              <a
                href="tel:+4917472254773"
                className="inline-flex items-center justify-center gap-3 bg-[#012956] hover:bg-[#01203d] text-white font-bold text-lg px-8 py-4 rounded-[6px] transition-all duration-300"
              >
                <Phone size={20} />
                0174 722 54 773
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 lg:py-20 bg-[#012956]">
        <div className="w-full max-w-[1800px] mx-auto px-6 lg:px-12 xl:px-20 text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
            Fragen zu Karrieremöglichkeiten?
          </h2>
          <p className="text-white/70 font-semibold mb-6">
            Rufen Sie uns an oder schreiben Sie eine E-Mail. Wir freuen uns auf Sie!
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <a
              href="tel:+4917472254773"
              className="text-[#109387] font-bold hover:text-white transition-colors"
            >
              0174 722 54 773
            </a>
            <span className="text-white/40">|</span>
            <a
              href="mailto:bewerbung@fimi-service.de"
              className="text-[#109387] font-bold hover:text-white transition-colors"
            >
              bewerbung@fimi-service.de
            </a>
          </div>
        </div>
      </section>

    </main>
  )
}
