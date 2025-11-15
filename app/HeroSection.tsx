import Link from 'next/link'
import Image from 'next/image'
import { ArrowRight, CheckCircle, Star } from 'lucide-react'

export default function HeroContainer() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background Image mit Overlay */}
      <div className="absolute inset-0 z-0">
        <Image
          src="https://images.unsplash.com/photo-1581578731548-c64695cc6952?q=80&w=2940&auto=format&fit=crop"
          alt="Professionelle Gebäudereinigung"
          fill
          className="object-cover"
          priority
        />
        <div className="gradient-overlay opacity-95" />
      </div>

      {/* Content */}
      <div className="container-custom relative z-10 py-32">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Linke Seite - Text Content */}
          <div className="text-white">
            {/* Trust Badge */}
            <div className="inline-flex items-center space-x-2 bg-fimi-turquoise/20 backdrop-blur-sm border border-fimi-turquoise/30 rounded-full px-6 py-3 mb-8">
              <Star className="w-5 h-5 text-yellow-400 fill-yellow-400" />
              <span className="text-sm font-semibold">Über 15 Jahre Erfahrung</span>
              <Star className="w-5 h-5 text-yellow-400 fill-yellow-400" />
            </div>

            <h1 className="text-white mb-6 leading-tight">
              Professionelle Gebäudereinigung<br />
              <span className="text-fimi-turquoise">in Perfektion</span>
            </h1>

            <p className="text-xl md:text-2xl text-gray-200 mb-8 leading-relaxed">
              Ihr zuverlässiger Partner für maßgeschneiderte Reinigungslösungen in Landshut und Umgebung.
              <strong className="text-white"> Höchste Qualität, absolute Zuverlässigkeit.</strong>
            </p>

            {/* USPs */}
            <div className="grid md:grid-cols-2 gap-4 mb-10">
              {[
                'Zertifizierte Fachkräfte',
                'Umweltfreundliche Reinigung',
                '24/7 Notfallservice',
                'Individuellösungen'
              ].map((usp) => (
                <div key={usp} className="flex items-center space-x-3">
                  <CheckCircle className="w-6 h-6 text-fimi-turquoise flex-shrink-0" />
                  <span className="text-gray-200 font-medium">{usp}</span>
                </div>
              ))}
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href="/kontakt"
                className="btn-primary inline-flex items-center justify-center space-x-2 group"
              >
                <span>Kostenlos beraten lassen</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>

              <Link
                href="/leistungen/bueroreinigung"
                className="btn-outline bg-white/10 backdrop-blur-sm border-white text-white hover:bg-white hover:text-fimi-navy inline-flex items-center justify-center"
              >
                Unsere Leistungen
              </Link>
            </div>

            {/* Stats */}
            <div className="mt-12 grid grid-cols-3 gap-6 pt-8 border-t border-white/20">
              <div>
                <p className="text-4xl font-bold text-fimi-turquoise mb-1">500+</p>
                <p className="text-gray-300 text-sm">Zufriedene Kunden</p>
              </div>
              <div>
                <p className="text-4xl font-bold text-fimi-turquoise mb-1">15+</p>
                <p className="text-gray-300 text-sm">Jahre Erfahrung</p>
              </div>
              <div>
                <p className="text-4xl font-bold text-fimi-turquoise mb-1">98%</p>
                <p className="text-gray-300 text-sm">Weiterempfehlung</p>
              </div>
            </div>
          </div>

          {/* Rechte Seite - Image Card (optional, für Balance) */}
          <div className="hidden lg:block">
            <div className="relative">
              {/* Floating Card */}
              <div className="bg-white/10 backdrop-blur-md rounded-2xl p-8 border border-white/20 shadow-2xl">
                <h3 className="text-2xl font-bold text-white mb-6">Warum FIMI?</h3>
                <ul className="space-y-4">
                  {[
                    { title: 'Premium-Qualität', desc: 'Höchste Standards in jeder Reinigung' },
                    { title: 'Flexibel & Zuverlässig', desc: 'Individuelle Lösungen nach Ihren Bedürfnissen' },
                    { title: 'Nachhaltig', desc: 'Umweltfreundliche Reinigungsmittel' },
                    { title: 'Transparent', desc: 'Faire Preise ohne versteckte Kosten' }
                  ].map((item) => (
                    <li key={item.title} className="flex items-start space-x-3">
                      <div className="bg-fimi-turquoise rounded-full p-1 mt-1">
                        <CheckCircle className="w-4 h-4 text-white" />
                      </div>
                      <div>
                        <p className="font-semibold text-white">{item.title}</p>
                        <p className="text-sm text-gray-300">{item.desc}</p>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Decorative Elements */}
              <div className="absolute -top-6 -right-6 w-24 h-24 bg-fimi-turquoise rounded-full opacity-20 blur-2xl" />
              <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-fimi-navy rounded-full opacity-20 blur-2xl" />
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 animate-bounce">
        <div className="w-6 h-10 border-2 border-white rounded-full flex items-start justify-center p-2">
          <div className="w-1 h-2 bg-white rounded-full" />
        </div>
      </div>
    </section>
  )
}
