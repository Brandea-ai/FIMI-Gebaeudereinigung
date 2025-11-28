import { ArrowRight, Phone, Mail, MapPin, CheckCircle, Clock } from 'lucide-react'
import { Branche } from '@/lib/branchen-data'
import ContactForm from '@/components/ContactForm'

interface BrancheCTAProps {
  branche: Branche
}

export function BrancheCTA({ branche }: BrancheCTAProps) {
  return (
    <section id="contact-form" className="py-16 md:py-24 lg:py-32 bg-gradient-to-br from-[#012956] via-[#012956] to-[#01203f]">
      <div className="w-full max-w-[1800px] mx-auto px-6 lg:px-12 xl:px-20">

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-start">

          {/* Left Column - Text & Info */}
          <div>
            <p className="text-[#109387] font-bold text-sm uppercase tracking-[0.2em] mb-4">
              Jetzt starten
            </p>

            <h2 className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-white leading-[1.08] mb-6">
              Kostenfreie<br />
              <span className="text-[#109387]">Besichtigung</span>
            </h2>

            <p className="text-xl text-white/80 font-medium leading-relaxed mb-10">
              Wir kommen zu Ihnen, analysieren Ihre Anforderungen und erstellen ein individuelles Angebot – komplett unverbindlich.
            </p>

            {/* Benefits */}
            <div className="space-y-4 mb-10">
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-full bg-[#109387]/20 flex items-center justify-center">
                  <CheckCircle size={20} className="text-[#109387]" />
                </div>
                <span className="text-white font-semibold text-lg">100% kostenlos & unverbindlich</span>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-full bg-[#109387]/20 flex items-center justify-center">
                  <Clock size={20} className="text-[#109387]" />
                </div>
                <span className="text-white font-semibold text-lg">Rückmeldung innerhalb 24h</span>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-full bg-[#109387]/20 flex items-center justify-center">
                  <MapPin size={20} className="text-[#109387]" />
                </div>
                <span className="text-white font-semibold text-lg">Vor-Ort-Termin nach Ihrem Wunsch</span>
              </div>
            </div>

            {/* Contact Info */}
            <div className="bg-white/5 backdrop-blur-sm rounded-[16px] p-6 border border-white/10">
              <p className="text-white/70 text-sm mb-4">Oder kontaktieren Sie uns direkt:</p>

              <div className="space-y-4">
                <a href="tel:+4987143033460" className="flex items-center gap-4 group">
                  <div className="w-12 h-12 rounded-full bg-[#109387] flex items-center justify-center group-hover:scale-110 transition-transform">
                    <Phone size={20} className="text-white" />
                  </div>
                  <div>
                    <p className="text-white/60 text-xs">Telefon</p>
                    <p className="text-white font-bold text-lg">0871 430 334 60</p>
                  </div>
                </a>

                <a href="mailto:info@fimi-gebaeudereinigung.de" className="flex items-center gap-4 group">
                  <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center group-hover:bg-[#109387] transition-colors">
                    <Mail size={20} className="text-white" />
                  </div>
                  <div>
                    <p className="text-white/60 text-xs">E-Mail</p>
                    <p className="text-white font-bold text-lg">info@fimi-gebaeudereinigung.de</p>
                  </div>
                </a>
              </div>
            </div>

          </div>

          {/* Right Column - Form */}
          <div className="bg-white rounded-[20px] p-8 lg:p-10 shadow-2xl">
            <h3 className="text-2xl font-bold text-[#012956] mb-2">
              Besichtigung anfragen
            </h3>
            <p className="text-gray-600 mb-8">
              Füllen Sie das Formular aus und wir melden uns innerhalb von 24 Stunden.
            </p>

            <ContactForm />
          </div>

        </div>

      </div>
    </section>
  )
}
