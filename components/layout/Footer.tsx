'use client'

import Link from 'next/link'
import Image from 'next/image'
import { MapPin, Phone, Mail, Clock } from 'lucide-react'
import ContactForm from '../ContactForm'

const footerLinks = {
  leistungen: [
    { label: 'Unterhaltsreinigung', href: '/leistungen/unterhaltsreinigung' },
    { label: 'Büroreinigung', href: '/leistungen/bueroreinigung' },
    { label: 'Industriereinigung', href: '/leistungen/industriereinigung' },
    { label: 'Fensterreinigung', href: '/leistungen/fensterreinigung' },
    { label: 'Facility Management', href: '/leistungen/facility-management' },
    { label: 'Winterdienst', href: '/leistungen/winterdienst' },
    { label: 'Hausmeisterservice', href: '/leistungen/hausmeisterservice' },
    { label: 'Baureinigung', href: '/leistungen/baureinigung' },
  ],
  regionen: [
    { label: 'Landshut', href: '/regionen/landshut' },
    { label: 'München', href: '/regionen/muenchen' },
    { label: 'Regensburg', href: '/regionen/regensburg' },
    { label: 'Ingolstadt', href: '/regionen/ingolstadt' },
    { label: 'Freising', href: '/regionen/freising' },
    { label: 'Erding', href: '/regionen/erding' },
  ],
  unternehmen: [
    { label: 'Über FIMI', href: '/unternehmen' },
    { label: 'Referenzen', href: '/referenzen' },
    { label: 'Karriere', href: '/karriere' },
    { label: 'Kontakt', href: '/kontakt' },
  ],
  rechtliches: [
    { label: 'Impressum', href: '/impressum' },
    { label: 'Datenschutz', href: '/datenschutz' },
    { label: 'AGB', href: '/agb' },
  ],
}

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer>
      {/* Kontaktformular Section */}
      <section id="contact-form" className="bg-[#f8f9fa] py-20 lg:py-28">
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
                    <p className="text-gray-700 font-semibold">
                      Mo - Fr: 08:00 - 18:00 Uhr<br />
                      <span className="text-[#109387]">Notfall: 2h Reaktionszeit</span>
                    </p>
                  </div>
                </div>
              </div>

              {/* Trust Badges */}
              <div className="bg-[#012956] rounded-[6px] p-6">
                <div className="grid grid-cols-2 gap-4">
                  <div className="text-center">
                    <p className="text-3xl font-bold text-[#109387]">8+</p>
                    <p className="text-white/70 text-sm font-semibold">Jahre Erfahrung</p>
                  </div>
                  <div className="text-center">
                    <p className="text-3xl font-bold text-[#109387]">ISO</p>
                    <p className="text-white/70 text-sm font-semibold">9001 & 14001</p>
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
                Füllen Sie das Formular aus - wir melden uns innerhalb von 24 Stunden.
              </p>
              <ContactForm />
            </div>

          </div>
        </div>
      </section>

      {/* Footer Navigation - Sitemap */}
      <div className="bg-[#012956] py-16 lg:py-20">
        <div className="w-full max-w-[1800px] mx-auto px-6 lg:px-12 xl:px-20">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 lg:gap-12">

            {/* Logo & Beschreibung */}
            <div className="col-span-2 md:col-span-3 lg:col-span-2">
              <Image
                src="/FIMI-LOGO/FIMI-LOGO_Weiße-Schrift_Transparent.png"
                alt="FIMI Gebäudereinigung"
                width={160}
                height={53}
                className="mb-6"
              />
              <p className="text-white/70 font-semibold leading-relaxed mb-6 max-w-sm">
                Professionelle Gebäudereinigung in Bayern. Ihr zuverlässiger Partner für saubere Geschäftsräume seit über 8 Jahren.
              </p>
              <div className="space-y-2">
                <p className="text-white/50 text-sm font-semibold">
                  <span className="text-white/70">USt-IdNr:</span> DE347549925
                </p>
                <p className="text-white/50 text-sm font-semibold">
                  <span className="text-white/70">Geschäftsführer:</span> Ntonalnt Tzoutzis, Ergest Qiraj
                </p>
              </div>
            </div>

            {/* Leistungen */}
            <div>
              <h4 className="text-white font-bold mb-4">Leistungen</h4>
              <ul className="space-y-2">
                {footerLinks.leistungen.slice(0, 6).map(link => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-white/60 font-semibold text-sm hover:text-[#109387] transition-colors"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Regionen */}
            <div>
              <h4 className="text-white font-bold mb-4">Regionen</h4>
              <ul className="space-y-2">
                {footerLinks.regionen.map(link => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-white/60 font-semibold text-sm hover:text-[#109387] transition-colors"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Unternehmen */}
            <div>
              <h4 className="text-white font-bold mb-4">Unternehmen</h4>
              <ul className="space-y-2">
                {footerLinks.unternehmen.map(link => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-white/60 font-semibold text-sm hover:text-[#109387] transition-colors"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Rechtliches */}
            <div>
              <h4 className="text-white font-bold mb-4">Rechtliches</h4>
              <ul className="space-y-2">
                {footerLinks.rechtliches.map(link => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-white/60 font-semibold text-sm hover:text-[#109387] transition-colors"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

          </div>
        </div>
      </div>

      {/* Copyright Bar */}
      <div className="bg-[#01203d] py-6">
        <div className="w-full max-w-[1800px] mx-auto px-6 lg:px-12 xl:px-20">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-white/50 text-sm font-semibold">
              © {currentYear} FIMI Gebäudereinigung. Alle Rechte vorbehalten.
            </p>
            <p className="text-white/50 text-sm font-semibold">
              Gebäudereinigung Bayern | Landshut • München • Regensburg
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}
