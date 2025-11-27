import { Metadata } from 'next'
import Image from 'next/image'
import { ArrowRight, CheckCircle } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Kontakt',
  description: 'Kontaktieren Sie FIMI Gebäudereinigung - Ihr Partner für professionelle Reinigung in Bayern. Kostenfreie Besichtigung anfragen.',
}

export default function KontaktPage() {
  return (
    <main className="min-h-screen bg-white">
      {/* Hero with Process Steps */}
      <section className="bg-[#012956] py-20 lg:py-24">
        <div className="w-full max-w-[1800px] mx-auto px-6 lg:px-12 xl:px-20">
          <p className="text-[#109387] font-semibold text-sm uppercase tracking-wider mb-4">
            Kontakt
          </p>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-[1.1] mb-6">
            Lassen Sie uns sprechen
          </h1>
          <p className="text-white/70 font-semibold text-lg max-w-2xl mb-12">
            In nur 4 Schritten zu Ihrer maßgeschneiderten Reinigungslösung.
          </p>

          {/* Process Steps - Horizontal */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-10">
            <div className="flex items-center gap-4">
              <div className="w-14 h-14 bg-[#109387] rounded-[6px] flex items-center justify-center text-white font-bold text-xl flex-shrink-0">
                1
              </div>
              <div>
                <h3 className="font-bold text-white text-sm lg:text-base">Anfrage</h3>
                <p className="text-white/50 text-xs lg:text-sm">Formular oder Anruf</p>
              </div>
            </div>

            <div className="flex items-center gap-4">
              <div className="w-14 h-14 bg-[#109387] rounded-[6px] flex items-center justify-center text-white font-bold text-xl flex-shrink-0">
                2
              </div>
              <div>
                <h3 className="font-bold text-white text-sm lg:text-base">Besichtigung</h3>
                <p className="text-white/50 text-xs lg:text-sm">Kostenfrei vor Ort</p>
              </div>
            </div>

            <div className="flex items-center gap-4">
              <div className="w-14 h-14 bg-[#109387] rounded-[6px] flex items-center justify-center text-white font-bold text-xl flex-shrink-0">
                3
              </div>
              <div>
                <h3 className="font-bold text-white text-sm lg:text-base">Angebot</h3>
                <p className="text-white/50 text-xs lg:text-sm">Innerhalb 48h</p>
              </div>
            </div>

            <div className="flex items-center gap-4">
              <div className="w-14 h-14 bg-[#109387] rounded-[6px] flex items-center justify-center text-white font-bold text-xl flex-shrink-0">
                4
              </div>
              <div>
                <h3 className="font-bold text-white text-sm lg:text-base">Start</h3>
                <p className="text-white/50 text-xs lg:text-sm">Ihr Ansprechpartner</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-20 lg:py-28">
        <div className="w-full max-w-[1800px] mx-auto px-6 lg:px-12 xl:px-20">

          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">

            {/* Left: CTA Content */}
            <div>
              <h2 className="text-2xl md:text-3xl font-bold text-[#012956] mb-4">
                Jetzt Anfrage starten
              </h2>
              <p className="text-gray-600 font-semibold leading-relaxed mb-8">
                Füllen Sie unser Kontaktformular aus und erhalten Sie
                innerhalb von 24 Stunden eine persönliche Rückmeldung.
              </p>

              <div className="space-y-3 mb-8">
                <div className="flex items-center gap-3">
                  <CheckCircle size={20} className="text-[#109387]" />
                  <span className="text-[#012956] font-semibold">100% kostenfrei & unverbindlich</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle size={20} className="text-[#109387]" />
                  <span className="text-[#012956] font-semibold">Persönliche Beratung</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle size={20} className="text-[#109387]" />
                  <span className="text-[#012956] font-semibold">Angebot innerhalb von 48h</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle size={20} className="text-[#109387]" />
                  <span className="text-[#012956] font-semibold">Flexible Verträge</span>
                </div>
              </div>

              <a
                href="#contact-form"
                className="inline-flex items-center justify-center gap-3 bg-[#109387] hover:bg-[#0d7d72] text-white font-bold text-lg px-8 py-4 rounded-[6px] transition-all group"
              >
                <span>Zum Kontaktformular</span>
                <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
              </a>

              <p className="text-gray-500 text-sm mt-6">
                Oder direkt anrufen: <a href="tel:+4987143033460" className="text-[#109387] font-bold hover:underline">0871 430 334 60</a>
              </p>
            </div>

            {/* Right: Trust Image - Always fully visible */}
            <div className="relative bg-[#f8f9fa] rounded-[6px] overflow-hidden">
              <div className="aspect-[4/5] relative">
                <Image
                  src="https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=800&auto=format&fit=crop"
                  alt="FIMI Gebäudereinigung - Ihr vertrauensvoller Partner"
                  fill
                  className="object-contain"
                />
              </div>
              {/* Overlay with trust message */}
              <div className="absolute bottom-0 left-0 right-0 bg-[#012956] p-5">
                <p className="text-white font-bold">
                  „Persönliche Betreuung ist uns wichtig"
                </p>
                <p className="text-white/70 text-sm font-medium">
                  Ihr Ansprechpartner bei FIMI
                </p>
              </div>
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
