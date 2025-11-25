import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Referenzen - FIMI Gebäudereinigung',
  description: '85 zufriedene Unternehmen vertrauen auf FIMI Gebäudereinigung. Sehen Sie unsere Referenzen.',
}

export default function ReferenzenPage() {
  return (
    <main className="min-h-screen bg-white pt-24">
      {/* Hero */}
      <section className="py-20 bg-fimi-navy text-white">
        <div className="container text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            Referenzen
          </h1>
          <p className="text-xl md:text-2xl text-gray-200 max-w-3xl mx-auto">
            85 zufriedene Unternehmen vertrauen auf unsere Expertise
          </p>
        </div>
      </section>

      {/* Content */}
      <section className="py-20">
        <div className="container max-w-4xl">
          <div className="prose prose-lg max-w-none">
            <h2 className="text-3xl font-bold text-fimi-navy mb-6">Vertrauen durch Qualität</h2>
            <p className="text-gray-600 text-lg mb-12">
              Seit über 8 Jahren vertrauen Unternehmen verschiedenster Branchen auf unsere professionellen Reinigungsdienstleistungen. Von kleinen Büros bis zu großen Industrieanlagen - wir bieten maßgeschneiderte Lösungen für jeden Bedarf.
            </p>

            <h3 className="text-2xl font-bold text-fimi-navy mb-6">Unsere Kunden</h3>

            <div className="grid md:grid-cols-2 gap-6 mb-12">
              <div className="bg-gray-50 p-6" style={{ borderRadius: '4px' }}>
                <h4 className="font-bold text-fimi-navy mb-2">Büros & Verwaltung</h4>
                <p className="text-gray-600">
                  Regelmäßige Reinigung von Bürogebäuden, Verwaltungen und Geschäftsräumen
                </p>
              </div>

              <div className="bg-gray-50 p-6" style={{ borderRadius: '4px' }}>
                <h4 className="font-bold text-fimi-navy mb-2">Industrie & Produktion</h4>
                <p className="text-gray-600">
                  Spezialreinigung für Produktionsstätten und Industrieanlagen
                </p>
              </div>

              <div className="bg-gray-50 p-6" style={{ borderRadius: '4px' }}>
                <h4 className="font-bold text-fimi-navy mb-2">Medizin & Gesundheit</h4>
                <p className="text-gray-600">
                  Hygienische Reinigung von Praxen und medizinischen Einrichtungen
                </p>
              </div>

              <div className="bg-gray-50 p-6" style={{ borderRadius: '4px' }}>
                <h4 className="font-bold text-fimi-navy mb-2">Handel & Einzelhandel</h4>
                <p className="text-gray-600">
                  Professionelle Reinigung von Geschäften und Verkaufsräumen
                </p>
              </div>
            </div>

            <div className="bg-fimi-turquoise text-white p-8 mt-12" style={{ borderRadius: '4px' }}>
              <h3 className="text-2xl font-bold mb-4">Kundenstimmen</h3>
              <p className="text-lg mb-4">
                "Sehr zuverlässig und professionell. Die Zusammenarbeit mit FIMI läuft seit Jahren reibungslos."
              </p>
              <p className="text-sm opacity-90">- Langjähriger Kunde aus Landshut</p>
            </div>

            <div className="bg-gray-50 p-8 mt-8" style={{ borderRadius: '4px' }}>
              <h3 className="text-2xl font-bold text-fimi-navy mb-4">ISO-Standards</h3>
              <p className="text-gray-600">
                Wir arbeiten nach ISO 9001 und 14001 Standards für gleichbleibend hohe Qualität und umweltfreundliche Reinigungsverfahren.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-gray-50">
        <div className="container text-center">
          <h2 className="text-4xl font-bold text-fimi-navy mb-6">
            Werden auch Sie unser Kunde
          </h2>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Kontaktieren Sie uns für ein kostenloses Angebot
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
