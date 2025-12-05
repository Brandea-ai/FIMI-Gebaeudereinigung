'use client'

import Link from 'next/link'
import Image from 'next/image'
import { MapPin, Phone, Mail, Clock } from 'lucide-react'
import ContactForm from '../ContactForm'
import { CookieSettingsButton } from '../CookieBanner'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer>
      {/* Kontaktformular Section */}
      <section id="contact-form" className="bg-[#f8f9fa] py-20 lg:py-28 scroll-mt-20">
        <div className="w-full max-w-[1800px] mx-auto px-6 lg:px-12 xl:px-20">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20">

            {/* Links: Info */}
            <div>
              <p className="text-sm text-gray-500 font-semibold uppercase tracking-wide mb-3">
                Kontakt
              </p>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#109387] leading-[1.1] mb-6">
                Kostenfreie Besichtigung vereinbaren
              </h2>
              <p className="text-lg text-gray-700 font-semibold leading-relaxed mb-10">
                Sie möchten wissen, was professionelle Gebäudereinigung für Ihr Unternehmen kostet?
                Wir schauen uns Ihre Räume an und erstellen Ihnen ein unverbindliches Angebot.
              </p>

              {/* Kontaktdaten */}
              <div className="space-y-6 mb-10">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-[#012956] rounded-[6px] flex items-center justify-center flex-shrink-0">
                    <Phone size={20} className="text-white" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-500 font-semibold uppercase tracking-wide mb-1">Telefon</p>
                    <a href="tel:+4987143033460" className="text-xl font-bold text-[#012956] hover:text-[#109387] transition-colors">
                      0871 430 334 60
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-[#012956] rounded-[6px] flex items-center justify-center flex-shrink-0">
                    <Mail size={20} className="text-white" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-500 font-semibold uppercase tracking-wide mb-1">E-Mail</p>
                    <a href="mailto:info@fimi-service.de" className="text-xl font-bold text-[#012956] hover:text-[#109387] transition-colors">
                      info@fimi-service.de
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-[#012956] rounded-[6px] flex items-center justify-center flex-shrink-0">
                    <MapPin size={20} className="text-white" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-500 font-semibold uppercase tracking-wide mb-1">Adresse</p>
                    <p className="text-gray-700 font-semibold">
                      Kellerstr. 39<br />
                      84036 Landshut
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-[#012956] rounded-[6px] flex items-center justify-center flex-shrink-0">
                    <Clock size={20} className="text-white" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-500 font-semibold uppercase tracking-wide mb-1">Erreichbarkeit</p>
                    <p className="text-gray-700 font-bold">
                      Mo-Fr: 08:00-18:00<br />
                      <span className="text-[#109387] font-bold">Notfall: 2h Reaktionszeit</span>
                    </p>
                  </div>
                </div>
              </div>

              {/* Trust Badges */}
              <div className="bg-[#012956] rounded-[6px] p-4 sm:p-6">
                <div className="grid grid-cols-3 gap-2 sm:gap-4">
                  <div className="text-center">
                    <p className="text-2xl sm:text-3xl font-bold text-[#109387]">8+</p>
                    <p className="text-white/70 text-xs sm:text-sm font-semibold leading-tight">Jahre Erfahrung</p>
                  </div>
                  <div className="text-center">
                    <p className="text-2xl sm:text-3xl font-bold text-[#109387]">120+</p>
                    <p className="text-white/70 text-xs sm:text-sm font-semibold leading-tight">Kundenprojekte</p>
                  </div>
                  <div className="text-center">
                    <p className="text-2xl sm:text-3xl font-bold text-[#109387]">8</p>
                    <p className="text-white/70 text-xs sm:text-sm font-semibold leading-tight">Einsatzorte</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Rechts: Formular */}
            <div className="bg-white rounded-[6px] p-6 lg:p-10 shadow-lg">
              <h3 className="text-2xl font-bold text-[#012956] mb-2">
                Anfrage senden
              </h3>
              <p className="text-gray-500 font-semibold mb-8">
                Füllen Sie das Formular aus - wir melden uns innerhalb von 2 Stunden.
              </p>
              <ContactForm />
            </div>

          </div>
        </div>
      </section>

      {/* Premium Footer */}
      <div className="bg-[#012956] py-16">
        <div className="w-full max-w-[1800px] mx-auto px-6 lg:px-12 xl:px-20">

          {/* Main Grid */}
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-12 lg:gap-10">

            {/* Logo & Slogan */}
            <div className="col-span-2 md:col-span-3 lg:col-span-1">
              <Image
                src="/FIMI-LOGO/FIMI-LOGO_Weiße-Schrift_Transparent.png"
                alt="FIMI Gebäudereinigung"
                width={280}
                height={94}
                className="mb-6"
              />
              <p className="text-white/70 font-semibold text-sm leading-relaxed">
                Professionelle Gebäudereinigung in Bayern.
              </p>
            </div>

            {/* Leistungen */}
            <div>
              <h4 className="text-white font-bold text-sm uppercase tracking-wider mb-6">Leistungen</h4>
              <ul className="space-y-3">
                <li><Link href="/leistungen/unterhaltsreinigung" className="text-white/70 font-semibold text-sm hover:text-[#109387] transition-colors">Unterhaltsreinigung</Link></li>
                <li><Link href="/leistungen/bueroreinigung" className="text-white/70 font-semibold text-sm hover:text-[#109387] transition-colors">Büroreinigung</Link></li>
                <li><Link href="/leistungen/industriereinigung" className="text-white/70 font-semibold text-sm hover:text-[#109387] transition-colors">Industriereinigung</Link></li>
                <li><Link href="/leistungen/facility-management" className="text-white/70 font-semibold text-sm hover:text-[#109387] transition-colors">Facility Management</Link></li>
                <li><Link href="/leistungen" className="text-[#109387] font-semibold text-sm hover:text-white transition-colors">Alle Leistungen →</Link></li>
              </ul>
            </div>

            {/* Branchen */}
            <div>
              <h4 className="text-white font-bold text-sm uppercase tracking-wider mb-6">Branchen</h4>
              <ul className="space-y-3">
                <li><Link href="/branchen/buero-verwaltung" className="text-white/70 font-semibold text-sm hover:text-[#109387] transition-colors">Büro & Verwaltung</Link></li>
                <li><Link href="/branchen/industrie-produktion" className="text-white/70 font-semibold text-sm hover:text-[#109387] transition-colors">Industrie & Produktion</Link></li>
                <li><Link href="/branchen/gesundheitswesen" className="text-white/70 font-semibold text-sm hover:text-[#109387] transition-colors">Gesundheitswesen</Link></li>
                <li><Link href="/branchen/gastronomie-hotel" className="text-white/70 font-semibold text-sm hover:text-[#109387] transition-colors">Gastronomie & Hotel</Link></li>
                <li><Link href="/branchen" className="text-[#109387] font-semibold text-sm hover:text-white transition-colors">Alle Branchen →</Link></li>
              </ul>
            </div>

            {/* Unternehmen */}
            <div>
              <h4 className="text-white font-bold text-sm uppercase tracking-wider mb-6">Unternehmen</h4>
              <ul className="space-y-3">
                <li><Link href="/ueber-uns" className="text-white/70 font-semibold text-sm hover:text-[#109387] transition-colors">Über FIMI</Link></li>
                <li><Link href="/karriere" className="text-white/70 font-semibold text-sm hover:text-[#109387] transition-colors">Karriere</Link></li>
                <li><Link href="/referenzen" className="text-white/70 font-semibold text-sm hover:text-[#109387] transition-colors">Referenzen</Link></li>
                <li><Link href="/neuigkeiten" className="text-white/70 font-semibold text-sm hover:text-[#109387] transition-colors">Neuigkeiten</Link></li>
                <li><Link href="/kontakt" className="text-white/70 font-semibold text-sm hover:text-[#109387] transition-colors">Kontakt</Link></li>
              </ul>
            </div>

            {/* Rechtliches */}
            <div>
              <h4 className="text-white font-bold text-sm uppercase tracking-wider mb-6">Rechtliches</h4>
              <ul className="space-y-3">
                <li><Link href="/impressum" className="text-white/70 font-semibold text-sm hover:text-[#109387] transition-colors">Impressum</Link></li>
                <li><Link href="/datenschutz" className="text-white/70 font-semibold text-sm hover:text-[#109387] transition-colors">Datenschutz</Link></li>
                <li><Link href="/agb" className="text-white/70 font-semibold text-sm hover:text-[#109387] transition-colors">AGB</Link></li>
                <li><Link href="/sitemap" className="text-white/70 font-semibold text-sm hover:text-[#109387] transition-colors">Sitemap</Link></li>
                <li><Link href="/glossar" className="text-white/70 font-semibold text-sm hover:text-[#109387] transition-colors">Glossar</Link></li>
              </ul>
            </div>

          </div>

          {/* Divider */}
          <div className="my-12 h-px bg-white/10" />

          {/* Bottom Row */}
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-white/60 text-sm font-semibold">
              © {currentYear} FIMI Gebäudereinigung. Alle Rechte vorbehalten.
            </p>
            <div className="flex items-center gap-4">
              <CookieSettingsButton />
              <span className="text-white/20">|</span>
              <p className="text-white/60 text-sm font-semibold">
                Landshut · München · Regensburg · Bayern
              </p>
            </div>
          </div>

        </div>
      </div>
    </footer>
  )
}
