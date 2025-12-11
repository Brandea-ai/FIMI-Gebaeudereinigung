import Image from 'next/image'
import Link from 'next/link'
import { ArrowLeft, Phone, Mail } from 'lucide-react'

export default function BueroreinigungHero() {
  return (
    <section className="relative py-32 bg-fimi-navy text-white overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <Image
          src="https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=3540&auto=format&fit=crop"
          alt="Professionelle Büroreinigung"
          fill
          className="object-cover opacity-20"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-r from-fimi-navy via-fimi-navy/95 to-transparent" />
      </div>

      {/* Content */}
      <div className="container relative z-10">
        <div className="max-w-4xl">
          {/* Breadcrumb */}
          <Link
            href="/leistungen"
            className="inline-flex items-center gap-2 text-fimi-turquoise hover:underline mb-8"
          >
            <ArrowLeft size={20} />
            Zurück zu allen Leistungen
          </Link>

          {/* Badge */}
          <div className="inline-block px-4 py-2 bg-fimi-turquoise/20 border border-fimi-turquoise text-fimi-turquoise font-semibold mb-6" style={{ borderRadius: '4px' }}>
            Gewerbliche Objektreinigung
          </div>

          {/* Headline */}
          <h1 className="text-5xl md:text-7xl font-bold mb-8">
            Professionelle<br />
            <span className="text-fimi-turquoise">Büroreinigung</span>
          </h1>

          {/* Subheadline */}
          <p className="text-2xl md:text-3xl text-gray-200 mb-12 leading-relaxed">
            Saubere Büros für produktives Arbeiten. Täglich, wöchentlich oder nach Ihrem individuellen Bedarf in Landshut und Umgebung.
          </p>

          {/* USPs */}
          <div className="grid md:grid-cols-3 gap-6 mb-12">
            {[
              { label: 'Festangestelltes Personal' },
              { label: 'Flexible Zeiten' },
              { label: 'ISO-zertifiziert' }
            ].map((item, i) => (
              <div key={i} className="flex items-center gap-3">
                <div className="w-6 h-6 bg-fimi-turquoise text-white flex items-center justify-center flex-shrink-0" style={{ borderRadius: '4px' }}>
                  ✓
                </div>
                <span className="text-lg font-semibold">{item.label}</span>
              </div>
            ))}
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4">
            <a
              href="tel:+4987120669360"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-fimi-turquoise text-white text-lg font-bold hover:opacity-90 transition-opacity"
              style={{ borderRadius: '4px' }}
            >
              <Phone size={20} />
              Jetzt anrufen
            </a>
            <a
              href="mailto:info@fimi-gebaeudereinigung.de"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 border-2 border-white text-white text-lg font-bold hover:bg-white hover:text-fimi-navy transition-all"
              style={{ borderRadius: '4px' }}
            >
              <Mail size={20} />
              E-Mail senden
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
