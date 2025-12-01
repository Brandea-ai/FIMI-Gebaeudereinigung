'use client'

import { ArrowRight, Phone, Mail, Clock } from 'lucide-react'

export default function CTASection() {
  return (
    <section className="py-20 lg:py-28 bg-[#012956]">
      <div className="w-full max-w-[1800px] mx-auto px-6 lg:px-12 xl:px-20">

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">

          {/* Left: Content */}
          <div>
            <p className="text-sm text-[#109387] font-bold uppercase tracking-wide mb-3">
              Jetzt anfragen
            </p>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white leading-[1.1] mb-6">
              Bereit für eine Reinigung, die funktioniert?
            </h2>
            <p className="text-lg text-white/70 font-semibold leading-relaxed mb-8">
              Keine langen Wartezeiten, keine komplizierten Verträge.
              Melden Sie sich – wir melden uns innerhalb von 2 Stunden zurück
              und vereinbaren einen Termin für die kostenlose Besichtigung.
            </p>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-4 mb-10">
              <a
                href="#contact-form"
                className="inline-flex items-center justify-center gap-3 bg-[#109387] hover:bg-[#0d7d72] text-white font-bold text-lg px-8 py-4 rounded-[6px] transition-all duration-300 group shadow-lg"
              >
                Kostenfreie Besichtigung
                <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
              </a>
              <a
                href="tel:+4987143033460"
                className="inline-flex items-center justify-center gap-3 bg-white/10 hover:bg-white/20 border border-white/30 text-white font-bold text-lg px-8 py-4 rounded-[6px] transition-all duration-300"
              >
                <Phone size={20} />
                Jetzt anrufen
              </a>
            </div>

            {/* Trust Element */}
            <div className="flex items-center gap-3 text-white/60 font-semibold">
              <Clock size={20} className="text-[#109387]" />
              <span>Antwort garantiert innerhalb von 2 Stunden</span>
            </div>
          </div>

          {/* Right: Contact Box */}
          <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-[12px] p-8">
            <h3 className="text-2xl font-bold text-white mb-6">So erreichen Sie uns</h3>

            <div className="space-y-6">
              {/* Telefon */}
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-[#109387]/20 rounded-[6px] flex items-center justify-center flex-shrink-0">
                  <Phone size={24} className="text-[#109387]" />
                </div>
                <div>
                  <p className="text-white/60 font-semibold text-sm mb-1">Telefon</p>
                  <a
                    href="tel:+4987143033460"
                    className="text-xl font-bold text-white hover:text-[#109387] transition-colors"
                  >
                    0871 430 334 60
                  </a>
                  <p className="text-white/60 font-semibold text-sm mt-1">Mo-Fr 7:00 - 18:00 Uhr</p>
                </div>
              </div>

              {/* Mobil */}
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-[#109387]/20 rounded-[6px] flex items-center justify-center flex-shrink-0">
                  <Phone size={24} className="text-[#109387]" />
                </div>
                <div>
                  <p className="text-white/60 font-semibold text-sm mb-1">Mobil (auch WhatsApp)</p>
                  <a
                    href="tel:+4917472254773"
                    className="text-xl font-bold text-white hover:text-[#109387] transition-colors"
                  >
                    0174 722 54 773
                  </a>
                </div>
              </div>

              {/* E-Mail */}
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-[#109387]/20 rounded-[6px] flex items-center justify-center flex-shrink-0">
                  <Mail size={24} className="text-[#109387]" />
                </div>
                <div>
                  <p className="text-white/60 font-semibold text-sm mb-1">E-Mail</p>
                  <a
                    href="mailto:info@fimi-reinigung.de"
                    className="text-xl font-bold text-white hover:text-[#109387] transition-colors"
                  >
                    info@fimi-reinigung.de
                  </a>
                </div>
              </div>
            </div>

            {/* Standort Info */}
            <div className="mt-8 pt-6 border-t border-white/20">
              <p className="text-white/60 font-semibold text-sm mb-2">Hauptsitz</p>
              <p className="text-white font-bold">FIMI Gebäudereinigung</p>
              <p className="text-white/80 font-semibold">Landshut, Bayern</p>
              <p className="text-[#109387] font-semibold text-sm mt-2">+ 7 weitere Standorte in Bayern</p>
            </div>
          </div>

        </div>

      </div>
    </section>
  )
}
