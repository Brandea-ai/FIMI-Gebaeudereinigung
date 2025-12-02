'use client'

import { ArrowRight, Phone, Mail, Clock, CheckCircle } from 'lucide-react'
import FadeIn from '@/components/FadeIn'

const vorteile = [
  'Kostenfreie Besichtigung vor Ort',
  'Transparentes Festpreisangebot',
  'Keine versteckten Kosten',
  'Unverbindlich & ohne Risiko',
]

export default function CTASection() {
  return (
    <section id="kontakt" className="py-20 lg:py-28 bg-[#012956]" aria-labelledby="cta-heading">
      <div className="w-full max-w-[1800px] mx-auto px-6 lg:px-12 xl:px-20">

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">

          {/* Left: Content */}
          <FadeIn direction="left">
            <div>
              <p className="text-sm text-[#109387] font-semibold uppercase tracking-wide mb-3">
                Jetzt starten
              </p>
              <h2
                id="cta-heading"
                className="text-3xl md:text-4xl lg:text-5xl font-bold text-white leading-[1.1] mb-6"
              >
                Bereit für eine saubere
                <span className="block text-[#109387] mt-2">Produktion?</span>
              </h2>

              <p className="text-lg text-white/80 font-semibold leading-relaxed mb-8">
                Lassen Sie uns über Ihre Anforderungen sprechen. Wir besichtigen
                Ihre Räumlichkeiten kostenfrei und erstellen Ihnen ein
                individuelles Angebot – ohne Verpflichtungen.
              </p>

              {/* Vorteile */}
              <ul className="space-y-3 mb-10">
                {vorteile.map((vorteil, index) => (
                  <li key={index} className="flex items-center gap-3">
                    <CheckCircle size={20} className="text-[#109387]" />
                    <span className="text-white font-semibold">{vorteil}</span>
                  </li>
                ))}
              </ul>

              {/* Contact Methods */}
              <div className="grid sm:grid-cols-2 gap-4">
                <a
                  href="tel:+4987143033460"
                  className="flex items-center gap-4 bg-white/10 hover:bg-white/20 rounded-[6px] p-4 transition-all group"
                >
                  <div className="w-12 h-12 bg-[#109387] rounded-[6px] flex items-center justify-center">
                    <Phone size={24} className="text-white" />
                  </div>
                  <div>
                    <p className="text-white/60 text-sm font-semibold">Telefon</p>
                    <p className="text-white font-bold">0871 430 334 60</p>
                  </div>
                </a>

                <a
                  href="mailto:info@fimi-service.de"
                  className="flex items-center gap-4 bg-white/10 hover:bg-white/20 rounded-[6px] p-4 transition-all group"
                >
                  <div className="w-12 h-12 bg-[#109387] rounded-[6px] flex items-center justify-center">
                    <Mail size={24} className="text-white" />
                  </div>
                  <div>
                    <p className="text-white/60 text-sm font-semibold">E-Mail</p>
                    <p className="text-white font-bold">info@fimi-service.de</p>
                  </div>
                </a>
              </div>

              {/* Reaktionszeit */}
              <div className="mt-8 flex items-center gap-3 bg-[#109387]/20 rounded-[6px] p-4">
                <Clock size={24} className="text-[#109387]" />
                <div>
                  <p className="text-white font-bold">Schnelle Reaktionszeit</p>
                  <p className="text-white/70 text-sm font-semibold">
                    Wir melden uns innerhalb von 2 Stunden bei Ihnen
                  </p>
                </div>
              </div>
            </div>
          </FadeIn>

          {/* Right: CTA Box */}
          <FadeIn direction="right">
            <div className="bg-white rounded-[6px] p-8 lg:p-10">
              <h3 className="text-2xl font-bold text-[#012956] mb-2">
                Kostenfreie Besichtigung anfragen
              </h3>
              <p className="text-gray-700 font-semibold mb-6">
                Füllen Sie das Formular aus und wir melden uns schnellstmöglich.
              </p>

              {/* Simple Form Hint - Links to Contact Form */}
              <div className="space-y-4">
                <div className="bg-[#f8f9fa] rounded-[6px] p-6 text-center">
                  <p className="text-gray-700 font-semibold mb-4">
                    Nutzen Sie unser Kontaktformular für eine schnelle Anfrage
                  </p>
                  <a
                    href="#contact-form"
                    className="inline-flex items-center justify-center gap-3 bg-[#109387] hover:bg-[#0d7d72] text-white font-bold text-lg px-8 py-4 rounded-[6px] transition-all duration-300 group w-full"
                  >
                    Zum Kontaktformular
                    <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
                  </a>
                </div>

                <div className="text-center">
                  <p className="text-gray-500 font-semibold text-sm">oder</p>
                </div>

                <a
                  href="tel:+4987143033460"
                  className="flex items-center justify-center gap-3 bg-[#012956] hover:bg-[#01203d] text-white font-bold text-lg px-8 py-4 rounded-[6px] transition-all duration-300 w-full"
                >
                  <Phone size={20} />
                  Jetzt anrufen: 0871 430 334 60
                </a>
              </div>

              {/* Trust Note */}
              <p className="text-center text-gray-500 font-semibold text-sm mt-6">
                Über 120 Industriekunden vertrauen uns bereits
              </p>
            </div>
          </FadeIn>

        </div>

      </div>
    </section>
  )
}
