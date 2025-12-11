'use client'

import Image from 'next/image'
import Link from 'next/link'
import { ArrowRight, Phone, CheckCircle, Clock, Users, Shield } from 'lucide-react'

const vorteile = [
  { icon: Clock, text: 'Antwort innerhalb von 2 Stunden' },
  { icon: Users, text: 'Festes Team für Ihr Objekt' },
  { icon: Shield, text: 'Dokumentierte Verkehrssicherung' },
]

export default function CTASection() {
  return (
    <section id="kontakt" className="relative py-16 sm:py-20 lg:py-28 overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <Image
          src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=2000&auto=format&fit=crop"
          alt="Gepflegte Außenanlage"
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#012956]/95 via-[#012956]/90 to-[#012956]/80" />
      </div>

      <div className="relative z-10 w-full max-w-[1800px] mx-auto px-4 sm:px-6 md:px-8 lg:px-12 xl:px-20">
        <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">
          {/* Left: Content */}
          <div>
            <p className="text-[#109387] font-bold text-xs sm:text-sm uppercase tracking-wide mb-3 sm:mb-4">
              Jetzt starten
            </p>
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white leading-[1.1] mb-4 sm:mb-6">
              Bereit für gepflegte Außenanlagen?
            </h2>
            <p className="text-base sm:text-lg lg:text-xl text-white/80 font-semibold leading-relaxed mb-6 sm:mb-8">
              Fordern Sie jetzt Ihre kostenfreie Besichtigung an. Wir kommen zu Ihnen,
              nehmen Ihre Anlage in Augenschein und erstellen ein transparentes Angebot –
              unverbindlich und ohne versteckte Kosten.
            </p>

            {/* Vorteile */}
            <div className="space-y-3 mb-8">
              {vorteile.map((vorteil, index) => {
                const Icon = vorteil.icon
                return (
                  <div key={index} className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-full bg-[#109387]/30 flex items-center justify-center flex-shrink-0">
                      <Icon className="w-4 h-4 text-[#109387]" />
                    </div>
                    <span className="text-white/90 font-semibold text-sm sm:text-base">
                      {vorteil.text}
                    </span>
                  </div>
                )
              })}
            </div>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
              <Link
                href="#kontakt"
                className="inline-flex items-center justify-center gap-2 sm:gap-3 bg-[#109387] hover:bg-[#0d7d72] text-white font-bold text-sm sm:text-base lg:text-lg px-5 sm:px-6 lg:px-8 py-3 sm:py-3.5 lg:py-4 rounded-[6px] transition-all duration-300 group shadow-lg hover:shadow-xl"
              >
                Kostenfreie Besichtigung anfragen
                <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
              <a
                href="tel:+4987120669360"
                className="inline-flex items-center justify-center gap-2 sm:gap-3 bg-white/10 hover:bg-white/20 backdrop-blur-sm text-white font-bold text-sm sm:text-base lg:text-lg px-5 sm:px-6 lg:px-8 py-3 sm:py-3.5 lg:py-4 rounded-[6px] transition-all duration-300"
              >
                <Phone className="w-4 h-4 sm:w-5 sm:h-5" />
                0871 2066936 0
              </a>
            </div>

            {/* Trust Note */}
            <p className="mt-4 sm:mt-6 text-white/50 font-semibold text-xs sm:text-sm flex items-center gap-1.5 sm:gap-2">
              <CheckCircle className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-[#109387]" />
              Unverbindlich & kostenfrei – Sie entscheiden erst nach dem Angebot
            </p>
          </div>

          {/* Right: Quick Info Card */}
          <div className="bg-white/10 backdrop-blur-sm rounded-[12px] p-6 sm:p-8 lg:p-10 border border-white/10">
            <h3 className="text-xl sm:text-2xl font-bold text-white mb-6">
              Das erwartet Sie
            </h3>

            <div className="space-y-4">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-[6px] bg-[#109387] flex items-center justify-center flex-shrink-0">
                  <span className="text-white font-bold">1</span>
                </div>
                <div>
                  <h4 className="font-bold text-white text-sm sm:text-base">Schnelle Rückmeldung</h4>
                  <p className="text-white/70 font-semibold text-xs sm:text-sm">Innerhalb von 2 Stunden melden wir uns bei Ihnen</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-[6px] bg-[#109387] flex items-center justify-center flex-shrink-0">
                  <span className="text-white font-bold">2</span>
                </div>
                <div>
                  <h4 className="font-bold text-white text-sm sm:text-base">Persönliche Besichtigung</h4>
                  <p className="text-white/70 font-semibold text-xs sm:text-sm">Wir schauen uns Ihre Anlage vor Ort an – kostenfrei</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-[6px] bg-[#109387] flex items-center justify-center flex-shrink-0">
                  <span className="text-white font-bold">3</span>
                </div>
                <div>
                  <h4 className="font-bold text-white text-sm sm:text-base">Transparentes Angebot</h4>
                  <p className="text-white/70 font-semibold text-xs sm:text-sm">Festpreis ohne versteckte Kosten – innerhalb 48h</p>
                </div>
              </div>
            </div>

            <div className="mt-8 pt-6 border-t border-white/10">
              <p className="text-white/60 font-semibold text-xs sm:text-sm mb-2">
                Oder direkt anrufen:
              </p>
              <a
                href="tel:+4987120669360"
                className="text-white font-bold text-xl sm:text-2xl hover:text-[#109387] transition-colors"
              >
                0871 2066936 0
              </a>
              <p className="text-white/50 font-semibold text-xs mt-1">
                Mo–Fr 08:00–18:00 Uhr
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
