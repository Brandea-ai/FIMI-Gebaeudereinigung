import Image from 'next/image'
import { Shield, Award, Clock, Users } from 'lucide-react'

export default function TrustContainer() {
  return (
    <section className="py-24 md:py-32 bg-white">
      <div className="container">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <div className="inline-block px-4 py-2 bg-fimi-turquoise/10 text-fimi-turquoise font-semibold mb-6" style={{ borderRadius: '4px' }}>
            Ihre Vorteile
          </div>
          <h2 className="text-4xl md:text-6xl font-bold text-fimi-navy mb-6">
            Warum FIMI Gebäudereinigung?
          </h2>
          <p className="text-xl text-gray-600">
            ISO-zertifizierte Qualität, auf die über 500 Unternehmen vertrauen
          </p>
        </div>

        {/* Trust Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* ISO 9001 */}
          <div className="bg-gray-50 p-8 hover-lift group" style={{ borderRadius: '4px' }}>
            <div className="bg-fimi-turquoise text-white w-16 h-16 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform" style={{ borderRadius: '4px' }}>
              <Shield size={32} />
            </div>
            <h3 className="text-2xl font-bold text-fimi-navy mb-3">
              ISO 9001
            </h3>
            <p className="text-gray-600 mb-4">
              Zertifiziertes Qualitätsmanagement für gleichbleibend höchste Standards
            </p>
            <div className="text-fimi-turquoise font-semibold">Zertifiziert</div>
          </div>

          {/* ISO 14001 */}
          <div className="bg-gray-50 p-8 hover-lift group" style={{ borderRadius: '4px' }}>
            <div className="bg-fimi-turquoise text-white w-16 h-16 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform" style={{ borderRadius: '4px' }}>
              <Award size={32} />
            </div>
            <h3 className="text-2xl font-bold text-fimi-navy mb-3">
              ISO 14001
            </h3>
            <p className="text-gray-600 mb-4">
              Umweltmanagement mit nachhaltigen und umweltfreundlichen Verfahren
            </p>
            <div className="text-fimi-turquoise font-semibold">Zertifiziert</div>
          </div>

          {/* 24/7 Service */}
          <div className="bg-gray-50 p-8 hover-lift group" style={{ borderRadius: '4px' }}>
            <div className="bg-fimi-turquoise text-white w-16 h-16 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform" style={{ borderRadius: '4px' }}>
              <Clock size={32} />
            </div>
            <h3 className="text-2xl font-bold text-fimi-navy mb-3">
              24/7 Erreichbar
            </h3>
            <p className="text-gray-600 mb-4">
              Notfallservice rund um die Uhr - wir sind immer für Sie da
            </p>
            <div className="text-fimi-turquoise font-semibold">Verfügbar</div>
          </div>

          {/* Kunden */}
          <div className="bg-gray-50 p-8 hover-lift group" style={{ borderRadius: '4px' }}>
            <div className="bg-fimi-turquoise text-white w-16 h-16 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform" style={{ borderRadius: '4px' }}>
              <Users size={32} />
            </div>
            <h3 className="text-2xl font-bold text-fimi-navy mb-3">
              500+ Kunden
            </h3>
            <p className="text-gray-600 mb-4">
              Über 500 zufriedene Unternehmen vertrauen auf unsere Leistungen
            </p>
            <div className="text-fimi-turquoise font-semibold">15+ Jahre</div>
          </div>
        </div>

        {/* Zertifikate Banner */}
        <div className="mt-20 bg-gradient-to-r from-fimi-navy to-fimi-turquoise p-12 text-white text-center" style={{ borderRadius: '4px' }}>
          <h3 className="text-3xl md:text-4xl font-bold mb-4">
            Zertifizierte Qualität & Umweltschutz
          </h3>
          <p className="text-xl text-white/90 max-w-3xl mx-auto">
            Wir arbeiten nach den höchsten internationalen Standards für Qualitätsmanagement (ISO 9001) und Umweltmanagement (ISO 14001). Ihre Zufriedenheit und der Schutz unserer Umwelt stehen bei uns an erster Stelle.
          </p>
        </div>
      </div>
    </section>
  )
}
