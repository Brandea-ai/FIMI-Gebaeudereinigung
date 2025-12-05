import { Metadata } from 'next'
import Image from 'next/image'
import { ArrowRight, Phone } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Kontakt',
  description: 'Kontaktieren Sie FIMI Gebäudereinigung - Ihr Partner für professionelle Reinigung in Bayern. Kostenfreie Besichtigung anfragen.',
}

export default function KontaktPage() {
  return (
    <main className="min-h-screen bg-white">
      {/* Hero Section - Kompakt auf Mobile */}
      <section className="relative bg-[#012956] overflow-hidden">
        {/* Desktop Layout */}
        <div className="hidden lg:block">
          <div className="w-full max-w-[1800px] mx-auto px-12 xl:px-20">
            <div className="grid lg:grid-cols-2 gap-0 min-h-[90vh]">
              {/* Left Content */}
              <div className="flex flex-col justify-center py-28 pr-16 xl:pr-24">
                <p className="text-[#109387] font-bold text-sm uppercase tracking-[0.2em] mb-6">
                  Kontakt
                </p>
                <h1 className="text-5xl lg:text-6xl xl:text-7xl font-bold text-white leading-[1.05] mb-8">
                  Lassen Sie uns
                  <span className="block text-[#109387]">gemeinsam starten</span>
                </h1>
                <p className="text-white/70 font-medium text-lg lg:text-xl leading-relaxed mb-12 max-w-lg">
                  In nur 4 Schritten zu Ihrer maßgeschneiderten Reinigungslösung.
                  Wir beraten Sie persönlich und unverbindlich.
                </p>

                {/* Process Steps */}
                <div className="grid grid-cols-4 gap-6 mb-12" role="list" aria-label="Prozess-Schritte">
                  {[
                    { num: '01', title: 'Anfrage', sub: 'Formular / Anruf' },
                    { num: '02', title: 'Besichtigung', sub: 'Kostenfrei vor Ort' },
                    { num: '03', title: 'Angebot', sub: 'Innerhalb 48h' },
                    { num: '04', title: 'Start', sub: 'Ihr Ansprechpartner' },
                  ].map((step, i) => (
                    <div key={i} className="group" role="listitem">
                      <div className="text-[#109387] font-bold text-3xl mb-2">{step.num}</div>
                      <div className="h-0.5 w-8 bg-[#109387] mb-3 group-hover:w-12 transition-all" />
                      <h3 className="font-bold text-white text-base">{step.title}</h3>
                      <p className="text-white/40 text-sm">{step.sub}</p>
                    </div>
                  ))}
                </div>

                {/* CTA Buttons */}
                <div className="flex gap-4">
                  <a
                    href="#contact-form"
                    className="inline-flex items-center gap-3 bg-[#109387] hover:bg-[#0d7d72] text-white font-bold text-lg px-8 py-4 rounded-[6px] transition-all group"
                  >
                    <span>Kostenfreie Besichtigung</span>
                    <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
                  </a>
                  <a
                    href="tel:+4987143033460"
                    className="inline-flex items-center gap-3 bg-white/10 hover:bg-white/20 text-white font-bold text-lg px-8 py-4 rounded-[6px] transition-all"
                  >
                    <Phone size={20} />
                    <span>0871 430 334 60</span>
                  </a>
                </div>
              </div>

              {/* Right Image */}
              <div className="relative">
                <Image
                  src="https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=1200&auto=format&fit=crop"
                  alt="FIMI Gebäudereinigung - Professionelle Beratung"
                  fill
                  className="object-cover object-center"
                  priority
                />
                <div className="absolute bottom-0 right-0 left-0 z-10 p-8 bg-gradient-to-t from-[#012956] via-[#012956]/80 to-transparent h-1/2 flex items-end justify-end">
                  <div className="max-w-md">
                    <p className="text-white text-xl lg:text-2xl font-bold leading-snug mb-3">
                      „Persönliche Betreuung und Qualität stehen bei uns an erster Stelle."
                    </p>
                    <p className="text-[#109387] font-semibold">FIMI Gebäudereinigung</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Mobile Layout - Kompakt mit Bild oben */}
        <div className="lg:hidden">
          {/* Mobile Image - Prominent oben */}
          <div className="relative h-44 sm:h-56">
            <Image
              src="https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=800&auto=format&fit=crop"
              alt="FIMI Gebäudereinigung - Professionelle Beratung"
              fill
              className="object-cover object-top"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-b from-[#012956]/30 via-transparent to-[#012956]" />
            {/* Badge auf Bild */}
            <div className="absolute top-4 left-4">
              <span className="bg-[#109387] text-white text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 rounded">
                Kontakt
              </span>
            </div>
          </div>

          {/* Mobile Content - Sehr kompakt */}
          <div className="px-4 sm:px-6 py-6 sm:py-8">
            <h1 className="text-2xl sm:text-3xl font-bold text-white leading-tight mb-3">
              Lassen Sie uns <span className="text-[#109387]">gemeinsam starten</span>
            </h1>

            <p className="text-white/60 text-sm sm:text-base font-medium mb-5">
              4 Schritte zu Ihrer Reinigungslösung. Persönlich & unverbindlich.
            </p>

            {/* Process Steps - Inline auf Mobile */}
            <div className="flex gap-3 mb-5 overflow-x-auto pb-1 scrollbar-hide">
              {[
                { num: '01', title: 'Anfrage' },
                { num: '02', title: 'Besichtigung' },
                { num: '03', title: 'Angebot' },
                { num: '04', title: 'Start' },
              ].map((step, i) => (
                <div key={i} className="flex items-center gap-1.5 bg-white/10 rounded px-2.5 py-1.5 flex-shrink-0">
                  <span className="text-[#109387] font-bold text-xs">{step.num}</span>
                  <span className="text-white text-xs font-medium">{step.title}</span>
                </div>
              ))}
            </div>

            {/* CTA Buttons - Kompakt */}
            <div className="flex flex-col gap-2.5">
              <a
                href="#contact-form"
                className="flex items-center justify-center gap-2 bg-[#109387] hover:bg-[#0d7d72] text-white font-bold text-sm px-5 py-3 rounded-[6px] transition-all"
                aria-label="Zum Kontaktformular scrollen"
              >
                <span>Kostenfreie Besichtigung anfragen</span>
                <ArrowRight size={16} />
              </a>
              <a
                href="tel:+4987143033460"
                className="flex items-center justify-center gap-2 bg-white/10 hover:bg-white/20 text-white font-bold text-sm px-5 py-3 rounded-[6px] transition-all"
                aria-label="Anrufen: 0871 430 334 60"
              >
                <Phone size={16} />
                <span>0871 430 334 60</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Service Areas - Kompakt auf Mobile */}
      <section className="py-8 sm:py-12 lg:py-28 bg-[#012956]">
        <div className="w-full max-w-[1800px] mx-auto px-4 sm:px-6 lg:px-12 xl:px-20">
          {/* Mobile: Kompakt */}
          <div className="lg:hidden">
            <div className="flex items-center justify-between mb-4">
              <div>
                <p className="text-[#109387] font-bold text-[10px] uppercase tracking-wider mb-1">Einzugsgebiet</p>
                <h2 className="text-lg sm:text-xl font-bold text-white">Reinigung in ganz Bayern</h2>
              </div>
              <a
                href="#contact-form"
                className="text-[#109387] text-xs font-bold flex items-center gap-1"
              >
                Anfragen <ArrowRight size={12} />
              </a>
            </div>
            <div className="flex flex-wrap gap-1.5">
              {['Landshut', 'München', 'Regensburg', 'Ingolstadt', 'Freising', 'Erding', 'Straubing', 'Passau'].map((city, i) => (
                <a
                  key={city}
                  href="#contact-form"
                  className={`px-3 py-1.5 rounded text-xs font-bold transition-all ${
                    i === 0
                      ? 'bg-[#109387] text-white'
                      : 'bg-white/10 text-white/80'
                  }`}
                >
                  {city}
                </a>
              ))}
            </div>
          </div>

          {/* Desktop: Original Layout */}
          <div className="hidden lg:grid lg:grid-cols-2 gap-20 items-center">
            <div>
              <p className="text-[#109387] font-bold text-sm uppercase tracking-[0.2em] mb-4">
                Einzugsgebiet
              </p>
              <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
                Professionelle Reinigung in ganz Bayern
              </h2>
              <p className="text-white/60 font-medium text-lg leading-relaxed mb-8">
                Von Landshut aus betreuen wir Kunden in ganz Bayern.
                Kurze Wege, schnelle Reaktionszeiten, persönlicher Service.
              </p>
              <a
                href="#contact-form"
                className="inline-flex items-center gap-2 text-[#109387] font-bold text-base hover:gap-3 transition-all"
              >
                <span>Standort anfragen</span>
                <ArrowRight size={18} />
              </a>
            </div>

            <nav aria-label="Standorte in Bayern">
              <div className="grid grid-cols-2 xl:grid-cols-4 gap-4">
                {['Landshut', 'München', 'Regensburg', 'Ingolstadt', 'Freising', 'Erding', 'Straubing', 'Passau'].map((city, i) => (
                  <a
                    key={city}
                    href="#contact-form"
                    className={`px-6 py-4 rounded-[6px] text-center font-bold text-base transition-all cursor-pointer ${
                      i === 0
                        ? 'bg-[#109387] text-white hover:bg-[#0d7d72]'
                        : 'bg-white/10 text-white hover:bg-white/20'
                    }`}
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
