'use client'

import Image from 'next/image'
import Link from 'next/link'
import { Phone, Mail, MapPin, Clock, ArrowRight } from 'lucide-react'
import ContactForm from '@/components/ContactForm'

export default function CTASection() {
  return (
    <section id="kontakt" className="py-20 lg:py-28 bg-[#012956] relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 right-0 w-96 h-96 bg-white rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#109387] rounded-full blur-3xl" />
      </div>

      <div className="relative z-10 w-full max-w-[1800px] mx-auto px-6 lg:px-12 xl:px-20">

        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-[#109387] font-bold text-sm uppercase tracking-wide mb-4 block">
            Jetzt starten
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white leading-tight mb-6">
            Kostenfreie Besichtigung vereinbaren
          </h2>
          <p className="text-lg text-white/70 font-semibold leading-relaxed">
            Unverbindlich und ohne versteckte Kosten. Wir kommen zu Ihnen,
            schauen uns die Raeumlichkeiten an und erstellen ein massgeschneidertes Angebot.
          </p>
        </div>

        <div className="grid lg:grid-cols-[1fr_400px] gap-12 lg:gap-16">

          {/* Form */}
          <div className="bg-white rounded-[6px] p-8 lg:p-10 shadow-2xl">
            <h3 className="text-2xl font-bold text-[#012956] mb-6">
              Anfrage senden
            </h3>
            <ContactForm />
          </div>

          {/* Contact Info Sidebar */}
          <aside className="space-y-6">
            {/* Direct Contact */}
            <div className="bg-white/10 backdrop-blur-sm rounded-[6px] p-6">
              <h4 className="text-white font-bold mb-4">Direkter Kontakt</h4>

              <a
                href="tel:+4987143033460"
                className="flex items-center gap-4 p-4 bg-white/10 rounded-[6px] hover:bg-white/20 transition-colors mb-3 group"
              >
                <div className="w-12 h-12 rounded-[6px] bg-[#109387] flex items-center justify-center flex-shrink-0">
                  <Phone size={20} className="text-white" />
                </div>
                <div>
                  <span className="text-white/60 text-xs font-semibold uppercase tracking-wide block">Telefon</span>
                  <span className="text-white font-bold text-lg group-hover:text-[#109387] transition-colors">0871 430 334 60</span>
                </div>
              </a>

              <a
                href="mailto:info@fimi-service.de"
                className="flex items-center gap-4 p-4 bg-white/10 rounded-[6px] hover:bg-white/20 transition-colors group"
              >
                <div className="w-12 h-12 rounded-[6px] bg-[#109387] flex items-center justify-center flex-shrink-0">
                  <Mail size={20} className="text-white" />
                </div>
                <div>
                  <span className="text-white/60 text-xs font-semibold uppercase tracking-wide block">E-Mail</span>
                  <span className="text-white font-bold group-hover:text-[#109387] transition-colors">info@fimi-service.de</span>
                </div>
              </a>
            </div>

            {/* Address */}
            <div className="bg-white/10 backdrop-blur-sm rounded-[6px] p-6">
              <h4 className="text-white font-bold mb-4">Standort</h4>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-[6px] bg-[#109387]/20 flex items-center justify-center flex-shrink-0">
                  <MapPin size={20} className="text-[#109387]" />
                </div>
                <div>
                  <span className="text-white font-bold block">FIMI Gebaeudereinigung</span>
                  <span className="text-white/70 font-semibold text-sm">
                    Kellerstr. 39<br />
                    84036 Landshut
                  </span>
                </div>
              </div>
            </div>

            {/* Hours */}
            <div className="bg-white/10 backdrop-blur-sm rounded-[6px] p-6">
              <h4 className="text-white font-bold mb-4">Erreichbarkeit</h4>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-[6px] bg-[#109387]/20 flex items-center justify-center flex-shrink-0">
                  <Clock size={20} className="text-[#109387]" />
                </div>
                <div>
                  <span className="text-white font-bold block mb-1">Mo - Fr: 08:00 - 18:00</span>
                  <span className="text-white/70 font-semibold text-sm block">
                    Reinigung: 24/7 nach Vereinbarung
                  </span>
                  <span className="text-[#109387] font-bold text-sm block mt-2">
                    Antwort innerhalb von 2 Stunden
                  </span>
                </div>
              </div>
            </div>

            {/* All Services Link */}
            <Link
              href="/leistungen"
              className="flex items-center justify-between bg-[#109387] hover:bg-[#0d7d72] rounded-[6px] p-6 transition-colors group"
            >
              <div>
                <span className="text-white/70 text-xs font-semibold uppercase tracking-wide block mb-1">
                  Alle Leistungen
                </span>
                <span className="text-white font-bold">18 Services entdecken</span>
              </div>
              <ArrowRight size={20} className="text-white group-hover:translate-x-1 transition-transform" />
            </Link>

            {/* Branchen Link */}
            <Link
              href="/branchen"
              className="flex items-center justify-between bg-white/10 hover:bg-white/20 rounded-[6px] p-6 transition-colors group"
            >
              <div>
                <span className="text-white/50 text-xs font-semibold uppercase tracking-wide block mb-1">
                  Branchen
                </span>
                <span className="text-white font-bold">12 Branchen im Fokus</span>
              </div>
              <ArrowRight size={20} className="text-white group-hover:translate-x-1 transition-transform" />
            </Link>
          </aside>

        </div>

      </div>
    </section>
  )
}
