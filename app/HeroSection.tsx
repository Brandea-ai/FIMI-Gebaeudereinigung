import Link from 'next/link'
import Image from 'next/image'
import { ArrowRight, CheckCircle } from 'lucide-react'

export default function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center bg-white mt-20 md:mt-24">
      <div className="container-custom">
        <div className="grid lg:grid-cols-2 gap-16 items-center py-16 md:py-24">
          {/* Left Content */}
          <div>
            <p className="text-subtitle mb-6">
              Professionelle Gebäudereinigung
            </p>

            <h1 className="mb-6">
              Exzellente Reinigungsdienstleistungen<br />
              für Ihr Unternehmen
            </h1>

            <p className="text-large mb-10">
              Seit über 15 Jahren Ihr vertrauensvoller Partner für professionelle Gebäudereinigung,
              Industriereinigung und Facility Management in Landshut und Umgebung.
            </p>

            {/* USPs - Minimalistisch */}
            <div className="space-y-4 mb-12">
              {[
                'ISO-zertifizierte Qualitätsstandards',
                'Spezialisierte Fachkräfte mit langjähriger Erfahrung',
                'Umweltfreundliche Reinigungsmethoden',
                'Flexible Einsatzzeiten nach Ihren Bedürfnissen'
              ].map((usp) => (
                <div key={usp} className="flex items-start space-x-3">
                  <CheckCircle className="w-6 h-6 text-fimi-turquoise flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700">{usp}</span>
                </div>
              ))}
            </div>

            {/* CTA */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="/kontakt" className="btn-primary">
                <span>Kostenlose Beratung</span>
                <ArrowRight className="w-5 h-5 ml-2" />
              </Link>
              <Link href="/leistungen/bueroreinigung" className="btn-secondary">
                Leistungen ansehen
              </Link>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-8 mt-16 pt-12 border-t border-gray-200">
              <div>
                <p className="text-4xl font-bold text-fimi-navy mb-2">500+</p>
                <p className="text-sm text-gray-600">Zufriedene Kunden</p>
              </div>
              <div>
                <p className="text-4xl font-bold text-fimi-navy mb-2">15+</p>
                <p className="text-sm text-gray-600">Jahre Erfahrung</p>
              </div>
              <div>
                <p className="text-4xl font-bold text-fimi-navy mb-2">98%</p>
                <p className="text-sm text-gray-600">Weiterempfehlung</p>
              </div>
            </div>
          </div>

          {/* Right Image */}
          <div className="relative h-[600px] rounded-sm overflow-hidden">
            <Image
              src="https://images.unsplash.com/photo-1581578731548-c64695cc6952?q=80&w=2940&auto=format&fit=crop"
              alt="Professionelle Gebäudereinigung FIMI"
              fill
              className="object-cover"
              priority
            />
          </div>
        </div>
      </div>
    </section>
  )
}
