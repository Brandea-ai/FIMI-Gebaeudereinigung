import { Metadata } from 'next'
import Link from 'next/link'
import { ArrowRight, ArrowLeft, Heart, Users, TrendingUp, Briefcase, Phone, Mail } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Karriere bei FIMI Gebäudereinigung - Jetzt bewerben',
  description: 'Werden Sie Teil unseres Teams: 90+ Mitarbeiter, faire Bezahlung, echte Entwicklungsmöglichkeiten. Bewerben Sie sich jetzt bei FIMI Gebäudereinigung.',
}

const vorteile = [
  {
    icon: Heart,
    titel: 'Faire Bezahlung',
    beschreibung: 'Übertarifliche Löhne und pünktliche Auszahlung.',
  },
  {
    icon: Users,
    titel: 'Festes Team',
    beschreibung: 'Keine Leiharbeit, keine ständig wechselnden Kollegen.',
  },
  {
    icon: TrendingUp,
    titel: 'Entwicklung',
    beschreibung: 'Schulungen und echte Aufstiegschancen.',
  },
  {
    icon: Briefcase,
    titel: 'Moderne Ausstattung',
    beschreibung: 'Professionelles Equipment von Kärcher & Co.',
  },
]

export default function KarrierePage() {
  return (
    <main className="min-h-screen bg-white">
      {/* Hero */}
      <section className="relative py-20 lg:py-32 bg-[#012956] overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-[#109387]/10 to-transparent" />
        </div>

        <div className="relative w-full max-w-[1800px] mx-auto px-6 lg:px-12 xl:px-20">
          <Link
            href="/ueber-uns"
            className="inline-flex items-center gap-2 text-white/60 hover:text-white text-sm font-semibold mb-8 transition-colors"
          >
            <ArrowLeft size={16} />
            Zurück zu Über uns
          </Link>

          <p className="text-[#109387] font-bold text-sm uppercase tracking-[0.2em] mb-4">
            Karriere bei FIMI
          </p>
          <h1 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-white leading-[1.05] mb-6">
            Werden Sie Teil
            <span className="block text-[#109387]">unseres Teams</span>
          </h1>
          <p className="text-xl text-white/80 font-semibold leading-relaxed max-w-2xl mb-10">
            90+ Mitarbeiter. Faire Bezahlung. Echte Entwicklungsmöglichkeiten.
            Wir suchen Menschen, die mit uns wachsen wollen.
          </p>

          <div className="flex flex-col sm:flex-row gap-4">
            <a
              href="mailto:bewerbung@fimi-service.de"
              className="inline-flex items-center justify-center gap-3 bg-[#109387] hover:bg-[#0d7d72] text-white font-bold text-lg px-8 py-4 rounded-[6px] transition-all duration-300 group"
            >
              Jetzt bewerben
              <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
            </a>
            <a
              href="tel:+4917472254773"
              className="inline-flex items-center justify-center gap-3 bg-white/10 hover:bg-white/20 text-white font-bold text-lg px-8 py-4 rounded-[6px] transition-all duration-300 border border-white/30"
            >
              <Phone size={20} />
              0174 722 54 773
            </a>
          </div>
        </div>
      </section>

      {/* Vorteile */}
      <section className="py-20 lg:py-28 bg-white">
        <div className="w-full max-w-[1800px] mx-auto px-6 lg:px-12 xl:px-20">
          <div className="text-center mb-16">
            <p className="text-sm text-gray-500 font-semibold uppercase tracking-wide mb-3">
              Ihre Vorteile
            </p>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#012956] leading-[1.1]">
              Warum <span className="text-[#109387]">FIMI?</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {vorteile.map((vorteil) => {
              const IconComponent = vorteil.icon
              return (
                <div key={vorteil.titel} className="bg-[#f8f9fa] rounded-[6px] p-8 text-center">
                  <div className="w-16 h-16 bg-[#109387]/10 rounded-[6px] flex items-center justify-center mx-auto mb-4">
                    <IconComponent size={28} className="text-[#109387]" />
                  </div>
                  <h3 className="text-xl font-bold text-[#012956] mb-3">{vorteil.titel}</h3>
                  <p className="text-gray-600 font-semibold">{vorteil.beschreibung}</p>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Stellenanzeigen Placeholder */}
      <section className="py-20 lg:py-28 bg-[#f8f9fa]">
        <div className="w-full max-w-[1800px] mx-auto px-6 lg:px-12 xl:px-20">
          <div className="max-w-2xl mx-auto text-center">
            <div className="w-20 h-20 bg-[#109387]/10 rounded-[6px] flex items-center justify-center mx-auto mb-6">
              <Briefcase size={36} className="text-[#109387]" />
            </div>

            <h2 className="text-2xl md:text-3xl font-bold text-[#012956] mb-4">
              Stellenanzeigen in Kürze
            </h2>
            <p className="text-lg text-gray-600 font-semibold mb-8">
              Wir arbeiten gerade an unserer Karriereseite mit detaillierten Stellenangeboten.
              Bis dahin freuen wir uns über Ihre Initiativbewerbung.
            </p>

            <div className="bg-white rounded-[6px] p-8 shadow-sm">
              <h3 className="text-xl font-bold text-[#012956] mb-4">
                Wir suchen regelmäßig:
              </h3>
              <div className="grid sm:grid-cols-2 gap-3 text-left mb-6">
                <div className="flex items-center gap-2 text-gray-700 font-semibold">
                  <span className="text-[#109387]">✓</span>
                  Reinigungsfachkräfte (m/w/d)
                </div>
                <div className="flex items-center gap-2 text-gray-700 font-semibold">
                  <span className="text-[#109387]">✓</span>
                  Objektleiter (m/w/d)
                </div>
                <div className="flex items-center gap-2 text-gray-700 font-semibold">
                  <span className="text-[#109387]">✓</span>
                  Vorarbeiter (m/w/d)
                </div>
                <div className="flex items-center gap-2 text-gray-700 font-semibold">
                  <span className="text-[#109387]">✓</span>
                  Glasreiniger (m/w/d)
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="mailto:bewerbung@fimi-service.de"
                  className="inline-flex items-center justify-center gap-3 bg-[#109387] hover:bg-[#0d7d72] text-white font-bold px-6 py-3 rounded-[6px] transition-all duration-300"
                >
                  <Mail size={18} />
                  bewerbung@fimi-service.de
                </a>
                <a
                  href="tel:+4917472254773"
                  className="inline-flex items-center justify-center gap-3 bg-[#012956] hover:bg-[#01203d] text-white font-bold px-6 py-3 rounded-[6px] transition-all duration-300"
                >
                  <Phone size={18} />
                  0174 722 54 773
                </a>
              </div>
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
