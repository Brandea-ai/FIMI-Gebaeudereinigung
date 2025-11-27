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
      {/* Hero Section - Full Width Premium */}
      <section className="relative bg-[#012956] overflow-hidden">
        {/* Background Pattern - pointer-events-none to not block clicks */}
        <div className="absolute inset-0 opacity-5 pointer-events-none">
          <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-white/10 to-transparent" />
        </div>

        <div className="w-full max-w-[1800px] mx-auto px-6 lg:px-12 xl:px-20">
          <div className="grid lg:grid-cols-2 gap-0 min-h-[85vh] lg:min-h-[90vh]">

            {/* Left Content */}
            <div className="flex flex-col justify-center py-20 lg:py-28 lg:pr-16 xl:pr-24">
              <p className="text-[#109387] font-bold text-sm uppercase tracking-[0.2em] mb-6">
                Kontakt
              </p>

              <h1 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-white leading-[1.05] mb-8">
                Lassen Sie uns
                <span className="block text-[#109387]">gemeinsam starten</span>
              </h1>

              <p className="text-white/70 font-medium text-lg lg:text-xl leading-relaxed mb-12 max-w-lg">
                In nur 4 Schritten zu Ihrer maßgeschneiderten Reinigungslösung.
                Wir beraten Sie persönlich und unverbindlich.
              </p>

              {/* Process Steps - Premium Horizontal */}
              <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6 mb-12">
                {[
                  { num: '01', title: 'Anfrage', sub: 'Formular / Anruf' },
                  { num: '02', title: 'Besichtigung', sub: 'Kostenfrei vor Ort' },
                  { num: '03', title: 'Angebot', sub: 'Innerhalb 48h' },
                  { num: '04', title: 'Start', sub: 'Ihr Ansprechpartner' },
                ].map((step, i) => (
                  <div key={i} className="group">
                    <div className="text-[#109387] font-bold text-2xl lg:text-3xl mb-2">
                      {step.num}
                    </div>
                    <div className="h-0.5 w-8 bg-[#109387] mb-3 group-hover:w-12 transition-all" />
                    <h3 className="font-bold text-white text-sm lg:text-base">{step.title}</h3>
                    <p className="text-white/40 text-xs lg:text-sm">{step.sub}</p>
                  </div>
                ))}
              </div>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-4">
                <a
                  href="#contact-form"
                  className="inline-flex items-center justify-center gap-3 bg-[#109387] hover:bg-[#0d7d72] text-white font-bold text-base lg:text-lg px-8 py-4 rounded-[6px] transition-all group"
                >
                  <span>Kostenfreie Besichtigung</span>
                  <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
                </a>
                <a
                  href="tel:+4987143033460"
                  className="inline-flex items-center justify-center gap-3 bg-white/10 hover:bg-white/20 text-white font-bold text-base lg:text-lg px-8 py-4 rounded-[6px] transition-all"
                >
                  <Phone size={20} />
                  <span>0871 430 334 60</span>
                </a>
              </div>
            </div>

            {/* Right Image - Premium Full Height */}
            <div className="relative hidden lg:block">
              <Image
                src="https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=1200&auto=format&fit=crop"
                alt="FIMI Gebäudereinigung - Professionelle Beratung"
                fill
                className="object-cover object-center"
                priority
              />
              {/* Clean bottom-to-top gradient only */}
              <div className="absolute bottom-0 right-0 left-0 z-10 p-8 bg-gradient-to-t from-[#012956] via-[#012956]/80 to-transparent h-1/2 flex items-end justify-end">
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

        {/* Mobile Image */}
        <div className="lg:hidden relative h-80">
          <Image
            src="https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=800&auto=format&fit=crop"
            alt="FIMI Gebäudereinigung - Professionelle Beratung"
            fill
            className="object-cover object-top"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#012956] to-transparent" />
        </div>
      </section>

      {/* Service Areas - Premium */}
      <section className="py-20 lg:py-28 bg-[#012956]">
        <div className="w-full max-w-[1800px] mx-auto px-6 lg:px-12 xl:px-20">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <div>
              <p className="text-[#109387] font-bold text-sm uppercase tracking-[0.2em] mb-4">
                Einzugsgebiet
              </p>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
                Professionelle Reinigung in ganz Bayern
              </h2>
              <p className="text-white/60 font-medium text-lg leading-relaxed mb-8">
                Von Landshut aus betreuen wir Kunden in ganz Bayern.
                Kurze Wege, schnelle Reaktionszeiten, persönlicher Service.
              </p>
              <a
                href="#contact-form"
                className="inline-flex items-center gap-2 text-[#109387] font-bold hover:gap-3 transition-all"
              >
                <span>Standort anfragen</span>
                <ArrowRight size={18} />
              </a>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-2 xl:grid-cols-4 gap-4">
              {['Landshut', 'München', 'Regensburg', 'Ingolstadt', 'Freising', 'Erding', 'Straubing', 'Passau'].map((city, i) => (
                <div
                  key={city}
                  className={`px-6 py-4 rounded-[6px] text-center font-bold transition-all ${
                    i === 0
                      ? 'bg-[#109387] text-white'
                      : 'bg-white/10 text-white hover:bg-white/20'
                  }`}
                >
                  {city}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
