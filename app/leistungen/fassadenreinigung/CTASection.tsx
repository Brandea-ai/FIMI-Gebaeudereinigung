'use client'

import { ArrowRight, Phone, Mail, MapPin, Clock } from 'lucide-react'
import ContactForm from '@/components/ContactForm'

export default function CTASection() {
  return (
    <section id="kontakt" className="py-12 sm:py-16 lg:py-28 bg-[#012956]">
      <div className="w-full max-w-[1800px] mx-auto px-4 sm:px-6 md:px-8 lg:px-12 xl:px-20">

        <div className="grid lg:grid-cols-2 gap-8 lg:gap-16">

          {/* Left - Text */}
          <div>
            <span className="text-[#109387] font-bold text-xs sm:text-sm uppercase tracking-wide mb-3 sm:mb-4 block">
              Jetzt starten
            </span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white leading-tight mb-4 sm:mb-6">
              Kostenfreie Besichtigung
              <span className="block text-[#109387] mt-2">anfordern</span>
            </h2>
            <p className="text-base sm:text-lg text-white/80 font-semibold leading-relaxed mb-8">
              Füllen Sie das Formular aus oder rufen Sie uns an.
              Wir melden uns innerhalb von 2 Stunden bei Ihnen und
              vereinbaren einen Termin zur Besichtigung Ihrer Fassade.
            </p>

            {/* Benefits */}
            <div className="space-y-4 mb-8">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-[#109387]/20 flex items-center justify-center">
                  <Clock className="w-5 h-5 text-[#109387]" />
                </div>
                <div>
                  <span className="text-white font-bold block">2h Reaktionszeit</span>
                  <span className="text-white/60 text-sm font-semibold">Wir melden uns schnell</span>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-[#109387]/20 flex items-center justify-center">
                  <MapPin className="w-5 h-5 text-[#109387]" />
                </div>
                <div>
                  <span className="text-white font-bold block">Kostenfreie Vor-Ort-Besichtigung</span>
                  <span className="text-white/60 text-sm font-semibold">Keine versteckten Kosten</span>
                </div>
              </div>
            </div>

            {/* Contact Info */}
            <div className="bg-white/5 rounded-[6px] p-5 sm:p-6">
              <h3 className="text-white font-bold text-lg mb-4">Direktkontakt</h3>
              <div className="space-y-3">
                <a
                  href="tel:+4987143033460"
                  className="flex items-center gap-3 text-white hover:text-[#109387] transition-colors group"
                >
                  <Phone className="w-5 h-5" />
                  <span className="font-bold">0871 430 334 60</span>
                </a>
                <a
                  href="mailto:info@fimi-service.de"
                  className="flex items-center gap-3 text-white/80 hover:text-[#109387] transition-colors"
                >
                  <Mail className="w-5 h-5" />
                  <span className="font-semibold">info@fimi-service.de</span>
                </a>
                <div className="flex items-start gap-3 text-white/60">
                  <MapPin className="w-5 h-5 flex-shrink-0 mt-0.5" />
                  <span className="font-semibold">
                    FIMI Gebäudereinigung<br />
                    Kellerstr. 39, 84036 Landshut
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Right - Form */}
          <div>
            <div className="bg-white rounded-[6px] p-5 sm:p-6 lg:p-8">
              <ContactForm />
            </div>
          </div>

        </div>

      </div>
    </section>
  )
}
