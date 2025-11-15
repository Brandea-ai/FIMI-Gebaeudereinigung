import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Über uns - FIMI Gebäudereinigung',
  description: '15+ Jahre Erfahrung in professioneller Gebäudereinigung. ISO 9001 & 14001 zertifiziert. Über 500 zufriedene Kunden.',
}

export default function UeberUnsPage() {
  return (
    <main className="min-h-screen bg-white pt-24">
      {/* Hero */}
      <section className="py-20 bg-fimi-navy text-white">
        <div className="container text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            Über uns
          </h1>
          <p className="text-xl md:text-2xl text-gray-200 max-w-3xl mx-auto">
            15+ Jahre Erfahrung in professioneller Gebäudereinigung
          </p>
        </div>
      </section>

      {/* Content */}
      <section className="py-20">
        <div className="container max-w-4xl">
          <div className="prose prose-lg max-w-none">
            <h2 className="text-3xl font-bold text-fimi-navy mb-6">Ihr Partner für Sauberkeit</h2>
            <p className="text-gray-600 text-lg mb-6">
              Seit über 15 Jahren steht FIMI Gebäudereinigung für höchste Qualität in der Gebäudereinigung und im Facility Management. Mit Sitz in Landshut betreuen wir Kunden in der gesamten Region und darüber hinaus.
            </p>

            <h3 className="text-2xl font-bold text-fimi-navy mb-4 mt-12">Unsere Werte</h3>
            <div className="grid md:grid-cols-2 gap-6 mb-12">
              <div className="bg-gray-50 p-6" style={{ borderRadius: '4px' }}>
                <h4 className="font-bold text-fimi-navy mb-2">Qualität</h4>
                <p className="text-gray-600">
                  ISO 9001 zertifizierte Qualitätsstandards für gleichbleibend exzellente Ergebnisse.
                </p>
              </div>
              <div className="bg-gray-50 p-6" style={{ borderRadius: '4px' }}>
                <h4 className="font-bold text-fimi-navy mb-2">Umweltschutz</h4>
                <p className="text-gray-600">
                  ISO 14001 zertifiziertes Umweltmanagement mit nachhaltigen Reinigungsverfahren.
                </p>
              </div>
              <div className="bg-gray-50 p-6" style={{ borderRadius: '4px' }}>
                <h4 className="font-bold text-fimi-navy mb-2">Zuverlässigkeit</h4>
                <p className="text-gray-600">
                  24/7 erreichbar für Notfälle und flexible Einsatzzeiten nach Ihren Bedürfnissen.
                </p>
              </div>
              <div className="bg-gray-50 p-6" style={{ borderRadius: '4px' }}>
                <h4 className="font-bold text-fimi-navy mb-2">Erfahrung</h4>
                <p className="text-gray-600">
                  Über 500 zufriedene Kunden vertrauen auf unsere langjährige Expertise.
                </p>
              </div>
            </div>

            <h3 className="text-2xl font-bold text-fimi-navy mb-4 mt-12">ISO-Zertifizierungen</h3>
            <p className="text-gray-600 text-lg mb-6">
              Wir arbeiten nach den höchsten Standards:
            </p>
            <ul className="space-y-3 text-gray-600 mb-8">
              <li className="flex items-start">
                <span className="text-fimi-turquoise mr-2">✓</span>
                <span><strong>ISO 9001:</strong> Qualitätsmanagement für konstant hohe Servicequalität</span>
              </li>
              <li className="flex items-start">
                <span className="text-fimi-turquoise mr-2">✓</span>
                <span><strong>ISO 14001:</strong> Umweltmanagement für nachhaltige und umweltfreundliche Reinigung</span>
              </li>
            </ul>

            <div className="bg-fimi-turquoise text-white p-8 mt-12" style={{ borderRadius: '4px' }}>
              <h3 className="text-2xl font-bold mb-4">Unser Versprechen</h3>
              <p className="text-lg">
                Professionelle Sauberkeit, zuverlässiger Service und persönliche Betreuung - darauf können Sie sich verlassen.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-gray-50">
        <div className="container text-center">
          <h2 className="text-4xl font-bold text-fimi-navy mb-6">
            Lernen Sie uns kennen
          </h2>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Kontaktieren Sie uns für ein persönliches Gespräch
          </p>
          <a
            href="tel:01747225473"
            className="inline-block bg-fimi-turquoise text-white px-8 py-4 font-bold text-lg hover:opacity-90 transition-opacity"
            style={{ borderRadius: '4px' }}
          >
            Jetzt anrufen: 01747225473
          </a>
        </div>
      </section>
    </main>
  )
}
