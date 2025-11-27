import { Metadata } from 'next'
import Link from 'next/link'
import { Phone, Mail, MapPin, Clock, ArrowRight, Building2, Award, Users } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Kontakt',
  description: 'Kontaktieren Sie FIMI Gebäudereinigung - Ihr Partner für professionelle Reinigung in Bayern. Telefon, E-Mail oder Kontaktformular.',
}

export default function KontaktPage() {
  return (
    <main className="min-h-screen bg-white">
      {/* Hero */}
      <section className="bg-[#012956] py-20 lg:py-28">
        <div className="w-full max-w-[1800px] mx-auto px-6 lg:px-12 xl:px-20">
          <p className="text-[#109387] font-semibold text-sm uppercase tracking-wider mb-4">
            Kontakt
          </p>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-[1.1] mb-6">
            Sprechen Sie mit uns
          </h1>
          <p className="text-white/70 font-semibold text-lg max-w-2xl">
            Wir sind für Sie da - persönlich, schnell und kompetent.
            Vereinbaren Sie jetzt Ihre kostenfreie Besichtigung.
          </p>
        </div>
      </section>

      {/* Contact Options */}
      <section className="py-20 lg:py-28">
        <div className="w-full max-w-[1800px] mx-auto px-6 lg:px-12 xl:px-20">

          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20">

            {/* Left: Contact Info */}
            <div>
              <h2 className="text-2xl md:text-3xl font-bold text-[#109387] mb-8">
                So erreichen Sie uns
              </h2>

              <div className="space-y-8">
                {/* Phone */}
                <div className="flex items-start gap-5">
                  <div className="w-14 h-14 bg-[#012956] rounded-[6px] flex items-center justify-center flex-shrink-0">
                    <Phone size={24} className="text-white" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-500 font-semibold uppercase tracking-wide mb-1">Telefon</p>
                    <a
                      href="tel:+4987143033460"
                      className="text-2xl font-bold text-[#012956] hover:text-[#109387] transition-colors"
                    >
                      0871 430 334 60
                    </a>
                    <p className="text-gray-600 font-medium mt-1">
                      Sofortige Beratung durch unsere Experten
                    </p>
                  </div>
                </div>

                {/* Email */}
                <div className="flex items-start gap-5">
                  <div className="w-14 h-14 bg-[#012956] rounded-[6px] flex items-center justify-center flex-shrink-0">
                    <Mail size={24} className="text-white" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-500 font-semibold uppercase tracking-wide mb-1">E-Mail</p>
                    <a
                      href="mailto:info@fimi-service.de"
                      className="text-2xl font-bold text-[#012956] hover:text-[#109387] transition-colors"
                    >
                      info@fimi-service.de
                    </a>
                    <p className="text-gray-600 font-medium mt-1">
                      Antwort innerhalb von 24 Stunden
                    </p>
                  </div>
                </div>

                {/* Address */}
                <div className="flex items-start gap-5">
                  <div className="w-14 h-14 bg-[#012956] rounded-[6px] flex items-center justify-center flex-shrink-0">
                    <MapPin size={24} className="text-white" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-500 font-semibold uppercase tracking-wide mb-1">Adresse</p>
                    <p className="text-xl font-bold text-[#012956]">
                      Kellerstr. 39
                    </p>
                    <p className="text-xl font-bold text-[#012956]">
                      84036 Landshut
                    </p>
                  </div>
                </div>

                {/* Opening Hours */}
                <div className="flex items-start gap-5">
                  <div className="w-14 h-14 bg-[#012956] rounded-[6px] flex items-center justify-center flex-shrink-0">
                    <Clock size={24} className="text-white" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-500 font-semibold uppercase tracking-wide mb-1">Erreichbarkeit</p>
                    <p className="text-lg font-bold text-[#012956]">
                      Mo - Fr: 08:00 - 18:00 Uhr
                    </p>
                    <p className="text-[#109387] font-bold mt-1">
                      Notfall: 2h Reaktionszeit
                    </p>
                  </div>
                </div>
              </div>

              {/* Trust Badges */}
              <div className="mt-12 grid grid-cols-3 gap-4">
                <div className="bg-[#f8f9fa] rounded-[6px] p-4 text-center">
                  <Building2 size={24} className="text-[#109387] mx-auto mb-2" />
                  <p className="text-2xl font-bold text-[#012956]">8+</p>
                  <p className="text-xs text-gray-500 font-semibold">Jahre Erfahrung</p>
                </div>
                <div className="bg-[#f8f9fa] rounded-[6px] p-4 text-center">
                  <Users size={24} className="text-[#109387] mx-auto mb-2" />
                  <p className="text-2xl font-bold text-[#012956]">85+</p>
                  <p className="text-xs text-gray-500 font-semibold">Kunden</p>
                </div>
                <div className="bg-[#f8f9fa] rounded-[6px] p-4 text-center">
                  <Award size={24} className="text-[#109387] mx-auto mb-2" />
                  <p className="text-2xl font-bold text-[#012956]">ISO</p>
                  <p className="text-xs text-gray-500 font-semibold">Zertifiziert</p>
                </div>
              </div>
            </div>

            {/* Right: CTA to Contact Form */}
            <div className="bg-[#f8f9fa] rounded-[6px] p-8 lg:p-12 flex flex-col justify-center">
              <h3 className="text-2xl md:text-3xl font-bold text-[#012956] mb-4">
                Kostenfreie Besichtigung anfragen
              </h3>
              <p className="text-gray-700 font-semibold leading-relaxed mb-8">
                Sie möchten ein individuelles Angebot? Nutzen Sie unser Kontaktformular
                und wir melden uns innerhalb von 24 Stunden bei Ihnen. Die Besichtigung
                Ihrer Räumlichkeiten ist selbstverständlich kostenfrei und unverbindlich.
              </p>

              <div className="space-y-4 mb-8">
                <div className="flex items-center gap-3">
                  <span className="text-[#109387] font-bold">✓</span>
                  <span className="text-gray-700 font-semibold">Kostenfreie Vor-Ort-Besichtigung</span>
                </div>
                <div className="flex items-center gap-3">
                  <span className="text-[#109387] font-bold">✓</span>
                  <span className="text-gray-700 font-semibold">Individuelles Angebot innerhalb 48h</span>
                </div>
                <div className="flex items-center gap-3">
                  <span className="text-[#109387] font-bold">✓</span>
                  <span className="text-gray-700 font-semibold">Keine versteckten Kosten</span>
                </div>
                <div className="flex items-center gap-3">
                  <span className="text-[#109387] font-bold">✓</span>
                  <span className="text-gray-700 font-semibold">Persönlicher Ansprechpartner</span>
                </div>
              </div>

              <a
                href="#contact-form"
                className="flex items-center justify-center gap-3 bg-[#109387] hover:bg-[#0d7d72] text-white font-bold text-lg px-8 py-5 rounded-[6px] transition-all group"
              >
                <span>Zum Kontaktformular</span>
                <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
              </a>
            </div>

          </div>
        </div>
      </section>

      {/* Service Areas */}
      <section className="py-16 bg-[#012956]">
        <div className="w-full max-w-[1800px] mx-auto px-6 lg:px-12 xl:px-20">
          <div className="text-center mb-10">
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-2">
              Unser Einzugsgebiet
            </h2>
            <p className="text-white/60 font-semibold">
              Professionelle Gebäudereinigung in ganz Bayern
            </p>
          </div>
          <div className="flex flex-wrap justify-center gap-3">
            {['Landshut', 'München', 'Regensburg', 'Ingolstadt', 'Freising', 'Erding', 'Straubing', 'Passau'].map((city) => (
              <span
                key={city}
                className="px-5 py-2 bg-white/10 rounded-[6px] text-white font-semibold text-sm"
              >
                {city}
              </span>
            ))}
          </div>
        </div>
      </section>
    </main>
  )
}
