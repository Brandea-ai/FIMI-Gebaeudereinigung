import { Metadata } from 'next'
import Link from 'next/link'
import { ArrowRight, CheckCircle, MessageSquare, Calendar, FileText, Handshake, Clock, Shield, Sparkles } from 'lucide-react'

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
            Unverbindlich und kostenfrei.
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-20 lg:py-28">
        <div className="w-full max-w-[1800px] mx-auto px-6 lg:px-12 xl:px-20">

          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20">

            {/* Left: Der Weg zu Ihrem Angebot */}
            <div>
              <h2 className="text-2xl md:text-3xl font-bold text-[#109387] mb-4">
                So funktioniert's
              </h2>
              <p className="text-gray-600 font-semibold mb-10">
                Von der ersten Anfrage bis zum sauberen Ergebnis - transparent und unkompliziert.
              </p>

              {/* Process Steps */}
              <div className="space-y-8">
                {/* Step 1 */}
                <div className="flex gap-5">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 bg-[#109387] rounded-full flex items-center justify-center text-white font-bold">
                      1
                    </div>
                  </div>
                  <div>
                    <div className="flex items-center gap-2 mb-2">
                      <MessageSquare size={18} className="text-[#109387]" />
                      <h3 className="font-bold text-[#012956]">Anfrage senden</h3>
                    </div>
                    <p className="text-gray-600 font-medium text-sm">
                      Nutzen Sie unser Kontaktformular oder rufen Sie uns an.
                      Schildern Sie kurz Ihren Bedarf - wir melden uns innerhalb von 24 Stunden.
                    </p>
                  </div>
                </div>

                {/* Step 2 */}
                <div className="flex gap-5">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 bg-[#109387] rounded-full flex items-center justify-center text-white font-bold">
                      2
                    </div>
                  </div>
                  <div>
                    <div className="flex items-center gap-2 mb-2">
                      <Calendar size={18} className="text-[#109387]" />
                      <h3 className="font-bold text-[#012956]">Kostenfreie Besichtigung</h3>
                    </div>
                    <p className="text-gray-600 font-medium text-sm">
                      Wir vereinbaren einen Termin und besichtigen Ihre Räumlichkeiten vor Ort.
                      So können wir den Aufwand realistisch einschätzen.
                    </p>
                  </div>
                </div>

                {/* Step 3 */}
                <div className="flex gap-5">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 bg-[#109387] rounded-full flex items-center justify-center text-white font-bold">
                      3
                    </div>
                  </div>
                  <div>
                    <div className="flex items-center gap-2 mb-2">
                      <FileText size={18} className="text-[#109387]" />
                      <h3 className="font-bold text-[#012956]">Individuelles Angebot</h3>
                    </div>
                    <p className="text-gray-600 font-medium text-sm">
                      Sie erhalten ein detailliertes Angebot mit transparenten Preisen.
                      Keine versteckten Kosten, keine bösen Überraschungen.
                    </p>
                  </div>
                </div>

                {/* Step 4 */}
                <div className="flex gap-5">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 bg-[#109387] rounded-full flex items-center justify-center text-white font-bold">
                      4
                    </div>
                  </div>
                  <div>
                    <div className="flex items-center gap-2 mb-2">
                      <Handshake size={18} className="text-[#109387]" />
                      <h3 className="font-bold text-[#012956]">Start der Zusammenarbeit</h3>
                    </div>
                    <p className="text-gray-600 font-medium text-sm">
                      Nach Ihrer Zusage starten wir zeitnah. Sie erhalten einen festen
                      Ansprechpartner, der Ihre Reinigung koordiniert.
                    </p>
                  </div>
                </div>
              </div>

              {/* Guarantees */}
              <div className="mt-12 p-6 bg-[#f8f9fa] rounded-[6px]">
                <h3 className="font-bold text-[#012956] mb-4">Unsere Garantien</h3>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                  <div className="flex items-center gap-2">
                    <Clock size={18} className="text-[#109387]" />
                    <span className="text-sm font-semibold text-gray-700">24h Rückmeldung</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Shield size={18} className="text-[#109387]" />
                    <span className="text-sm font-semibold text-gray-700">Festpreisgarantie</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Sparkles size={18} className="text-[#109387]" />
                    <span className="text-sm font-semibold text-gray-700">Qualitätsversprechen</span>
                  </div>
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
                innerhalb von 24 Stunden eine persönliche Rückmeldung von uns.
              </p>

              <div className="space-y-4 mb-8">
                <div className="flex items-center gap-3">
                  <CheckCircle size={20} className="text-[#109387]" />
                  <span className="text-white font-semibold">100% kostenfrei & unverbindlich</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle size={20} className="text-[#109387]" />
                  <span className="text-white font-semibold">Persönliche Beratung garantiert</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle size={20} className="text-[#109387]" />
                  <span className="text-white font-semibold">Angebot innerhalb von 48 Stunden</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle size={20} className="text-[#109387]" />
                  <span className="text-white font-semibold">Keine Vertragsbindung</span>
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
                Oder rufen Sie uns direkt an: <a href="tel:+4987143033460" className="text-[#109387] font-bold hover:underline">0871 430 334 60</a>
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 lg:py-20 bg-[#f8f9fa]">
        <div className="w-full max-w-[1800px] mx-auto px-6 lg:px-12 xl:px-20">
          <h2 className="text-2xl md:text-3xl font-bold text-[#012956] mb-10 text-center">
            Häufige Fragen
          </h2>

          <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            <div className="bg-white p-6 rounded-[6px]">
              <h3 className="font-bold text-[#012956] mb-2">Wie schnell können Sie starten?</h3>
              <p className="text-gray-600 font-medium text-sm">
                Nach Auftragserteilung können wir in der Regel innerhalb von 1-2 Wochen starten,
                bei dringendem Bedarf auch schneller.
              </p>
            </div>

            <div className="bg-white p-6 rounded-[6px]">
              <h3 className="font-bold text-[#012956] mb-2">Gibt es eine Mindestvertragslaufzeit?</h3>
              <p className="text-gray-600 font-medium text-sm">
                Nein, wir bieten flexible Verträge ohne lange Bindung.
                Sie können monatlich kündigen.
              </p>
            </div>

            <div className="bg-white p-6 rounded-[6px]">
              <h3 className="font-bold text-[#012956] mb-2">Sind Ihre Mitarbeiter versichert?</h3>
              <p className="text-gray-600 font-medium text-sm">
                Ja, alle Mitarbeiter sind über unsere Betriebshaftpflicht versichert.
                Sie tragen kein Risiko.
              </p>
            </div>

            <div className="bg-white p-6 rounded-[6px]">
              <h3 className="font-bold text-[#012956] mb-2">Wann wird gereinigt?</h3>
              <p className="text-gray-600 font-medium text-sm">
                Die Reinigungszeiten stimmen wir individuell mit Ihnen ab -
                vor, während oder nach Ihren Geschäftszeiten.
              </p>
            </div>
          </div>

          <div className="text-center mt-10">
            <Link
              href="/leistungen"
              className="inline-flex items-center gap-2 text-[#109387] font-bold hover:gap-3 transition-all"
            >
              Mehr über unsere Leistungen erfahren
              <ArrowRight size={18} />
            </Link>
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
