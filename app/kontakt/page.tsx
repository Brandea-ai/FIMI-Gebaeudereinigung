import { Metadata } from 'next'
import Image from 'next/image'
import { ArrowRight, Phone, Mail, MapPin, Clock, CheckCircle2 } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Kontakt',
  description: 'Kontaktieren Sie FIMI Gebäudereinigung - Ihr Partner für professionelle Reinigung in Bayern. Kostenfreie Besichtigung anfragen.',
}

export default function KontaktPage() {
  return (
    <main className="min-h-screen bg-white">
      {/* Hero Section - Premium & Responsive */}
      <section className="relative bg-[#012956] overflow-hidden">
        <div className="w-full max-w-[1800px] mx-auto px-4 sm:px-6 lg:px-12 xl:px-20">
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-0 min-h-[auto] lg:min-h-[90vh]">

            {/* Left Content */}
            <div className="flex flex-col justify-center py-10 sm:py-16 lg:py-28 lg:pr-16 xl:pr-24 order-2 lg:order-1">
              <p className="text-[#109387] font-bold text-xs sm:text-sm uppercase tracking-[0.15em] sm:tracking-[0.2em] mb-3 sm:mb-6">
                Kontakt
              </p>

              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-white leading-[1.1] sm:leading-[1.05] mb-4 sm:mb-8">
                Lassen Sie uns
                <span className="block text-[#109387]">gemeinsam starten</span>
              </h1>

              <p className="text-white/70 font-medium text-sm sm:text-base lg:text-lg xl:text-xl leading-relaxed mb-6 sm:mb-10 lg:mb-12 max-w-lg">
                In nur 4 Schritten zu Ihrer maßgeschneiderten Reinigungslösung.
                Wir beraten Sie persönlich und unverbindlich.
              </p>

              {/* Process Steps - Responsive Grid */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 sm:gap-5 lg:gap-6 mb-8 sm:mb-10 lg:mb-12" role="list" aria-label="Prozess-Schritte">
                {[
                  { num: '01', title: 'Anfrage', sub: 'Formular / Anruf' },
                  { num: '02', title: 'Besichtigung', sub: 'Kostenfrei vor Ort' },
                  { num: '03', title: 'Angebot', sub: 'Innerhalb 48h' },
                  { num: '04', title: 'Start', sub: 'Ihr Ansprechpartner' },
                ].map((step, i) => (
                  <div key={i} className="group" role="listitem">
                    <div className="text-[#109387] font-bold text-2xl sm:text-2xl lg:text-3xl mb-1.5 sm:mb-2">
                      {step.num}
                    </div>
                    <div className="h-0.5 w-6 sm:w-8 bg-[#109387] mb-2 sm:mb-3 group-hover:w-10 sm:group-hover:w-12 transition-all" />
                    <h3 className="font-bold text-white text-sm sm:text-sm lg:text-base">{step.title}</h3>
                    <p className="text-white/40 text-xs sm:text-xs lg:text-sm">{step.sub}</p>
                  </div>
                ))}
              </div>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
                <a
                  href="#contact-form"
                  className="inline-flex items-center justify-center gap-2 sm:gap-3 bg-[#109387] hover:bg-[#0d7d72] text-white font-bold text-sm sm:text-base lg:text-lg px-5 sm:px-8 py-3.5 sm:py-4 rounded-[6px] transition-all group"
                  aria-label="Zum Kontaktformular scrollen"
                >
                  <span>Kostenfreie Besichtigung</span>
                  <ArrowRight size={18} className="sm:w-5 sm:h-5 group-hover:translate-x-1 transition-transform" aria-hidden="true" />
                </a>
                <a
                  href="tel:+4987143033460"
                  className="inline-flex items-center justify-center gap-2 sm:gap-3 bg-white/10 hover:bg-white/20 text-white font-bold text-sm sm:text-base lg:text-lg px-5 sm:px-8 py-3.5 sm:py-4 rounded-[6px] transition-all"
                  aria-label="Anrufen: 0871 430 334 60"
                >
                  <Phone size={18} className="sm:w-5 sm:h-5" aria-hidden="true" />
                  <span>0871 430 334 60</span>
                </a>
              </div>
            </div>

            {/* Right Image - Responsive */}
            <div className="relative order-1 lg:order-2 h-56 sm:h-72 lg:h-auto">
              <Image
                src="https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=1200&auto=format&fit=crop"
                alt="FIMI Gebäudereinigung - Professionelle Beratung"
                fill
                className="object-cover object-center lg:object-center"
                priority
              />
              {/* Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#012956] via-[#012956]/20 to-transparent lg:bg-gradient-to-t lg:from-[#012956] lg:via-[#012956]/60 lg:to-transparent" />

              {/* Quote - Desktop only */}
              <div className="hidden lg:flex absolute bottom-0 right-0 left-0 z-10 p-8 items-end justify-end">
                <div className="max-w-md">
                  <p className="text-white text-xl lg:text-2xl font-bold leading-snug mb-3">
                    „Persönliche Betreuung und Qualität stehen bei uns an erster Stelle."
                  </p>
                  <p className="text-[#109387] font-semibold">
                    FIMI Gebäudereinigung
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Kontakt-Info Cards */}
      <section className="py-10 sm:py-14 lg:py-20 bg-white">
        <div className="w-full max-w-[1800px] mx-auto px-4 sm:px-6 lg:px-12 xl:px-20">
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
            {/* Telefon */}
            <a
              href="tel:+4987143033460"
              className="group flex items-start gap-4 p-5 sm:p-6 bg-[#f8f9fa] hover:bg-[#012956] rounded-[6px] transition-all duration-300"
            >
              <div className="w-12 h-12 bg-[#109387] rounded-[6px] flex items-center justify-center flex-shrink-0 group-hover:bg-white/20 transition-colors">
                <Phone size={22} className="text-white" />
              </div>
              <div>
                <p className="text-[#012956] group-hover:text-white/60 text-xs font-semibold uppercase tracking-wider mb-1 transition-colors">Telefon</p>
                <p className="text-[#012956] group-hover:text-white font-bold text-base sm:text-lg transition-colors">0871 430 334 60</p>
              </div>
            </a>

            {/* E-Mail */}
            <a
              href="mailto:info@fimi-service.de"
              className="group flex items-start gap-4 p-5 sm:p-6 bg-[#f8f9fa] hover:bg-[#012956] rounded-[6px] transition-all duration-300"
            >
              <div className="w-12 h-12 bg-[#109387] rounded-[6px] flex items-center justify-center flex-shrink-0 group-hover:bg-white/20 transition-colors">
                <Mail size={22} className="text-white" />
              </div>
              <div>
                <p className="text-[#012956] group-hover:text-white/60 text-xs font-semibold uppercase tracking-wider mb-1 transition-colors">E-Mail</p>
                <p className="text-[#012956] group-hover:text-white font-bold text-base sm:text-lg transition-colors">info@fimi-service.de</p>
              </div>
            </a>

            {/* Adresse */}
            <a
              href="https://maps.google.com/?q=Kellerstr.+39,+84036+Landshut"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-start gap-4 p-5 sm:p-6 bg-[#f8f9fa] hover:bg-[#012956] rounded-[6px] transition-all duration-300"
            >
              <div className="w-12 h-12 bg-[#109387] rounded-[6px] flex items-center justify-center flex-shrink-0 group-hover:bg-white/20 transition-colors">
                <MapPin size={22} className="text-white" />
              </div>
              <div>
                <p className="text-[#012956] group-hover:text-white/60 text-xs font-semibold uppercase tracking-wider mb-1 transition-colors">Adresse</p>
                <p className="text-[#012956] group-hover:text-white font-bold text-base sm:text-lg transition-colors">Kellerstr. 39, Landshut</p>
              </div>
            </a>

            {/* Öffnungszeiten */}
            <div className="group flex items-start gap-4 p-5 sm:p-6 bg-[#f8f9fa] rounded-[6px]">
              <div className="w-12 h-12 bg-[#109387] rounded-[6px] flex items-center justify-center flex-shrink-0">
                <Clock size={22} className="text-white" />
              </div>
              <div>
                <p className="text-[#012956] text-xs font-semibold uppercase tracking-wider mb-1">Erreichbar</p>
                <p className="text-[#012956] font-bold text-base sm:text-lg">Mo–Fr 08:00–18:00</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Service Areas - Premium */}
      <section className="py-10 sm:py-14 lg:py-24 bg-[#012956]">
        <div className="w-full max-w-[1800px] mx-auto px-4 sm:px-6 lg:px-12 xl:px-20">
          <div className="grid lg:grid-cols-2 gap-8 sm:gap-10 lg:gap-20 items-center">
            <div>
              <p className="text-[#109387] font-bold text-xs sm:text-sm uppercase tracking-[0.15em] sm:tracking-[0.2em] mb-3 sm:mb-4">
                Einzugsgebiet
              </p>
              <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4 sm:mb-6">
                Professionelle Reinigung in ganz Bayern
              </h2>
              <p className="text-white/60 font-medium text-sm sm:text-base lg:text-lg leading-relaxed mb-6 sm:mb-8">
                Von Landshut aus betreuen wir Kunden in ganz Bayern.
                Kurze Wege, schnelle Reaktionszeiten, persönlicher Service.
              </p>

              {/* Vorteile */}
              <div className="space-y-3 mb-6 sm:mb-8">
                {['Kostenfreie Erstbesichtigung', 'Angebot innerhalb 48 Stunden', 'Persönlicher Ansprechpartner'].map((item, i) => (
                  <div key={i} className="flex items-center gap-3">
                    <CheckCircle2 size={18} className="text-[#109387] flex-shrink-0" />
                    <span className="text-white/80 font-medium text-sm sm:text-base">{item}</span>
                  </div>
                ))}
              </div>

              <a
                href="#contact-form"
                className="inline-flex items-center gap-2 text-[#109387] font-bold text-sm sm:text-base hover:gap-3 transition-all"
                aria-label="Standort anfragen - zum Kontaktformular"
              >
                <span>Standort anfragen</span>
                <ArrowRight size={16} className="sm:w-[18px] sm:h-[18px]" aria-hidden="true" />
              </a>
            </div>

            <nav aria-label="Standorte in Bayern">
              <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-2 xl:grid-cols-4 gap-2 sm:gap-3 lg:gap-4">
                {['Landshut', 'München', 'Regensburg', 'Ingolstadt', 'Freising', 'Erding', 'Straubing', 'Passau'].map((city, i) => (
                  <a
                    key={city}
                    href="#contact-form"
                    className={`px-4 sm:px-6 py-3 sm:py-4 rounded-[6px] text-center font-bold text-sm sm:text-base transition-all cursor-pointer ${
                      i === 0
                        ? 'bg-[#109387] text-white hover:bg-[#0d7d72]'
                        : 'bg-white/10 text-white hover:bg-white/20'
                    }`}
                    aria-label={`Anfrage für Standort ${city}`}
                  >
                    {city}
                  </a>
                ))}
              </div>
            </nav>
          </div>
        </div>
      </section>
    </main>
  )
}
