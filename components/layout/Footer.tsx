'use client'

import Link from 'next/link'
import Image from 'next/image'
import { MapPin, Phone, Mail, Clock, ArrowUpRight } from 'lucide-react'
import ContactForm from '../ContactForm'

const leistungen = [
  'Unterhaltsreinigung', 'Büroreinigung', 'Industriereinigung', 'Fensterreinigung',
  'Glasreinigung', 'Fassadenreinigung', 'Hallenreinigung', 'Maschinenreinigung',
  'Facility Management', 'Winterdienst', 'Hausmeisterservice', 'Außenanlagenpflege',
  'Baureinigung', 'Sonderreinigung', 'Tiefgaragenreinigung', 'Parkplatzreinigung',
]

const regionen = [
  'Landshut', 'München', 'Regensburg', 'Ingolstadt', 'Freising', 'Erding',
  'Straubing', 'Dingolfing', 'Moosburg', 'Deggendorf', 'Passau', 'Rosenheim',
]

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

      {/* Kompakter Premium Footer */}
      <div className="bg-[#012956]">
        <div className="w-full max-w-[1800px] mx-auto px-6 lg:px-12 xl:px-20">

          {/* Hauptbereich */}
          <div className="py-12 lg:py-16 flex flex-col lg:flex-row lg:items-start lg:justify-between gap-10">

            {/* Links: Logo + Beschreibung */}
            <div className="lg:max-w-sm">
              <Image
                src="/FIMI-LOGO/FIMI-LOGO_Weiße-Schrift_Transparent.png"
                alt="FIMI Gebäudereinigung"
                width={180}
                height={60}
                className="mb-5"
              />
              <p className="text-white/60 font-semibold text-sm leading-relaxed">
                Professionelle Gebäudereinigung in Bayern. Ihr zuverlässiger Partner für saubere Geschäftsräume.
              </p>
            </div>

            {/* Mitte: Quick Links */}
            <div className="flex flex-wrap gap-x-12 gap-y-6">
              <div>
                <h4 className="text-[#109387] font-bold text-xs uppercase tracking-wider mb-3">Unternehmen</h4>
                <ul className="space-y-2">
                  <li><Link href="/unternehmen" className="text-white/60 font-semibold text-sm hover:text-white transition-colors">Über FIMI</Link></li>
                  <li><Link href="/referenzen" className="text-white/60 font-semibold text-sm hover:text-white transition-colors">Referenzen</Link></li>
                  <li><Link href="/karriere" className="text-white/60 font-semibold text-sm hover:text-white transition-colors">Karriere</Link></li>
                  <li><Link href="/kontakt" className="text-white/60 font-semibold text-sm hover:text-white transition-colors">Kontakt</Link></li>
                </ul>
              </div>
              <div>
                <h4 className="text-[#109387] font-bold text-xs uppercase tracking-wider mb-3">Rechtliches</h4>
                <ul className="space-y-2">
                  <li><Link href="/impressum" className="text-white/60 font-semibold text-sm hover:text-white transition-colors">Impressum</Link></li>
                  <li><Link href="/datenschutz" className="text-white/60 font-semibold text-sm hover:text-white transition-colors">Datenschutz</Link></li>
                  <li><Link href="/agb" className="text-white/60 font-semibold text-sm hover:text-white transition-colors">AGB</Link></li>
                </ul>
              </div>
            </div>

            {/* Rechts: CTA */}
            <div className="lg:text-right">
              <p className="text-white/40 text-xs uppercase tracking-wider mb-2">Jetzt anfragen</p>
              <a href="tel:+4987143033460" className="text-2xl lg:text-3xl font-bold text-white hover:text-[#109387] transition-colors">
                0871 430 334 60
              </a>
            </div>

          </div>

          {/* Trennlinie */}
          <div className="border-t border-white/10" />

          {/* Leistungen & Regionen - kompakt als Tags */}
          <div className="py-8 space-y-6">

            {/* Leistungen */}
            <div>
              <div className="flex items-center gap-3 mb-3">
                <span className="text-[#109387] font-bold text-xs uppercase tracking-wider">Leistungen</span>
                <Link href="/leistungen" className="text-white/40 hover:text-[#109387] transition-colors">
                  <ArrowUpRight size={14} />
                </Link>
              </div>
              <div className="flex flex-wrap gap-2">
                {leistungen.map(item => (
                  <Link
                    key={item}
                    href={`/leistungen/${item.toLowerCase().replace(/ä/g, 'ae').replace(/ö/g, 'oe').replace(/ü/g, 'ue').replace(/ß/g, 'ss').replace(/ /g, '-')}`}
                    className="text-white/50 text-xs font-semibold hover:text-[#109387] transition-colors"
                  >
                    {item}
                    <span className="text-white/20 ml-2">•</span>
                  </Link>
                ))}
              </div>
            </div>

            {/* Regionen */}
            <div>
              <div className="flex items-center gap-3 mb-3">
                <span className="text-[#109387] font-bold text-xs uppercase tracking-wider">Regionen</span>
              </div>
              <div className="flex flex-wrap gap-x-4 gap-y-1">
                {regionen.map(item => (
                  <Link
                    key={item}
                    href={`/regionen/${item.toLowerCase().replace(/ä/g, 'ae').replace(/ö/g, 'oe').replace(/ü/g, 'ue')}`}
                    className="text-white/50 text-xs font-semibold hover:text-[#109387] transition-colors"
                  >
                    {item}
                  </Link>
                ))}
              </div>
            </div>

          </div>

        </div>

        {/* Copyright Bar */}
        <div className="bg-[#01203d] py-4">
          <div className="w-full max-w-[1800px] mx-auto px-6 lg:px-12 xl:px-20">
            <div className="flex flex-col sm:flex-row justify-between items-center gap-2 text-white/40 text-xs font-semibold">
              <p>© {currentYear} FIMI Gebäudereinigung. Alle Rechte vorbehalten.</p>
              <p>Landshut • München • Regensburg • Bayern</p>
            </div>
          </div>
        </div>

      </div>
    </footer>
  )
}
