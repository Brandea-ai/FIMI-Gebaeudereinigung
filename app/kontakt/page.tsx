import { Metadata } from 'next'
import Link from 'next/link'
import { ArrowRight, CheckCircle } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Kontakt',
  description: 'Kontaktieren Sie FIMI Gebäudereinigung - Ihr Partner für professionelle Reinigung in Bayern. Kostenfreie Besichtigung anfragen.',
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
            Lassen Sie uns sprechen
          </h1>
          <p className="text-white/70 font-semibold text-lg max-w-2xl">
            In nur 4 Schritten zu Ihrer maßgeschneiderten Reinigungslösung.
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-20 lg:py-28">
        <div className="w-full max-w-[1800px] mx-auto px-6 lg:px-12 xl:px-20">

          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20">

            {/* Left: Simplified Process */}
            <div>
              <h2 className="text-2xl md:text-3xl font-bold text-[#109387] mb-10">
                So funktioniert's
              </h2>

              {/* Process Steps - Clean */}
              <div className="space-y-6">
                <div className="flex gap-4 items-start">
                  <div className="w-10 h-10 bg-[#109387] rounded-[6px] flex items-center justify-center text-white font-bold text-lg flex-shrink-0">
                    1
                  </div>
                  <div className="pt-1.5">
                    <h3 className="font-bold text-[#012956] mb-1">Anfrage senden</h3>
                    <p className="text-gray-600 font-medium text-sm">
                      Formular ausfüllen oder anrufen - Rückmeldung in 24h.
                    </p>
                  </div>
                </div>

                <div className="flex gap-4 items-start">
                  <div className="w-10 h-10 bg-[#109387] rounded-[6px] flex items-center justify-center text-white font-bold text-lg flex-shrink-0">
                    2
                  </div>
                  <div className="pt-1.5">
                    <h3 className="font-bold text-[#012956] mb-1">Kostenfreie Besichtigung</h3>
                    <p className="text-gray-600 font-medium text-sm">
                      Wir schauen uns Ihre Räume vor Ort an.
                    </p>
                  </div>
                </div>

                <div className="flex gap-4 items-start">
                  <div className="w-10 h-10 bg-[#109387] rounded-[6px] flex items-center justify-center text-white font-bold text-lg flex-shrink-0">
                    3
                  </div>
                  <div className="pt-1.5">
                    <h3 className="font-bold text-[#012956] mb-1">Individuelles Angebot</h3>
                    <p className="text-gray-600 font-medium text-sm">
                      Transparente Preise ohne versteckte Kosten.
                    </p>
                  </div>
                </div>

                <div className="flex gap-4 items-start">
                  <div className="w-10 h-10 bg-[#109387] rounded-[6px] flex items-center justify-center text-white font-bold text-lg flex-shrink-0">
                    4
                  </div>
                  <div className="pt-1.5">
                    <h3 className="font-bold text-[#012956] mb-1">Start</h3>
                    <p className="text-gray-600 font-medium text-sm">
                      Persönlicher Ansprechpartner für Ihre Reinigung.
                    </p>
                  </div>
                </div>
              </div>

              {/* Trust Stats */}
              <div className="mt-12 grid grid-cols-3 gap-4">
                <div className="bg-[#012956] rounded-[6px] p-4 text-center">
                  <p className="text-2xl font-bold text-[#109387]">8+</p>
                  <p className="text-white/70 text-xs font-semibold">Jahre Erfahrung</p>
                </div>
                <div className="bg-[#012956] rounded-[6px] p-4 text-center">
                  <p className="text-2xl font-bold text-[#109387]">85+</p>
                  <p className="text-white/70 text-xs font-semibold">Kunden</p>
                </div>
                <div className="bg-[#012956] rounded-[6px] p-4 text-center">
                  <p className="text-2xl font-bold text-[#109387]">ISO</p>
                  <p className="text-white/70 text-xs font-semibold">Zertifiziert</p>
                </div>
              </div>
            </div>

            {/* Right: CTA to Contact Form */}
            <div className="bg-[#012956] rounded-[6px] p-8 lg:p-12 flex flex-col justify-center">
              <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">
                Jetzt Anfrage starten
              </h3>
              <p className="text-white/70 font-semibold leading-relaxed mb-8">
                Füllen Sie unser Kontaktformular aus und erhalten Sie
                innerhalb von 24 Stunden eine persönliche Rückmeldung.
              </p>

              <div className="space-y-4 mb-8">
                <div className="flex items-center gap-3">
                  <CheckCircle size={20} className="text-[#109387]" />
                  <span className="text-white font-semibold">100% kostenfrei & unverbindlich</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle size={20} className="text-[#109387]" />
                  <span className="text-white font-semibold">Persönliche Beratung</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle size={20} className="text-[#109387]" />
                  <span className="text-white font-semibold">Angebot innerhalb von 48h</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle size={20} className="text-[#109387]" />
                  <span className="text-white font-semibold">Flexible Verträge</span>
                </div>
              </div>

              <a
                href="#contact-form"
                className="flex items-center justify-center gap-3 bg-[#109387] hover:bg-[#0d7d72] text-white font-bold text-lg px-8 py-5 rounded-[6px] transition-all group"
              >
                <span>Zum Kontaktformular</span>
                <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
              </a>

              <p className="text-white/50 text-sm text-center mt-6">
                Oder direkt anrufen: <a href="tel:+4987143033460" className="text-[#109387] font-bold hover:underline">0871 430 334 60</a>
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* Service Areas */}
      <section className="py-16 bg-[#f8f9fa]">
        <div className="w-full max-w-[1800px] mx-auto px-6 lg:px-12 xl:px-20">
          <div className="text-center mb-10">
            <h2 className="text-2xl md:text-3xl font-bold text-[#012956] mb-2">
              Unser Einzugsgebiet
            </h2>
            <p className="text-gray-500 font-semibold">
              Professionelle Gebäudereinigung in ganz Bayern
            </p>
          </div>
          <div className="flex flex-wrap justify-center gap-3">
            {['Landshut', 'München', 'Regensburg', 'Ingolstadt', 'Freising', 'Erding', 'Straubing', 'Passau'].map((city) => (
              <span
                key={city}
                className="px-5 py-2 bg-[#012956] rounded-[6px] text-white font-semibold text-sm"
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
