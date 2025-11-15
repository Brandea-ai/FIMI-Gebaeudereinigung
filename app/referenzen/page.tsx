import { Metadata } from 'next'
import { Building2, Factory, Home } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Referenzen - FIMI Gebäudereinigung',
  description: 'Über 500 zufriedene Kunden vertrauen auf FIMI Gebäudereinigung',
}

const referenzen = [
  {
    kategorie: 'Bürogebäude',
    icon: Building2,
    projekte: [
      'Verwaltungsgebäude Landshut - 2.500 m² Bürofläche',
      'Geschäftszentrum Dingolfing - 1.800 m² Bürofläche',
      'IT-Unternehmen Vilsbiburg - 1.200 m² Bürofläche',
    ]
  },
  {
    kategorie: 'Industrieanlagen',
    icon: Factory,
    projekte: [
      'Produktionshalle BMW Dingolfing - 5.000 m² Hallenfläche',
      'Logistikzentrum Landshut - 3.500 m² Lagerfläche',
      'Maschinenbau Firma - 2.000 m² Werkstattfläche',
    ]
  },
  {
    kategorie: 'Öffentliche Einrichtungen',
    icon: Home,
    projekte: [
      'Rathaus Landshut - Komplette Unterhaltsreinigung',
      'Schulzentrum Vilsbiburg - Tägliche Reinigung',
      'Klinikum Landshut - Hygienische Spezialreinigung',
    ]
  },
]

export default function ReferenzenPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero */}
      <section className="relative h-[400px] bg-fimi-navy flex items-center">
        <div className="container">
          <h1 className="text-5xl font-bold text-white mb-4">Unsere Referenzen</h1>
          <p className="text-xl text-gray-200 max-w-2xl">
            Über 500 zufriedene Kunden vertrauen auf unsere Expertise
          </p>
        </div>
      </section>

      {/* Stats */}
      <section className="py-16 bg-gradient-to-br from-gray-50 to-white">
        <div className="container">
          <div className="grid md:grid-cols-3 gap-8 text-center mb-16">
            <div>
              <p className="text-5xl font-bold text-fimi-navy mb-2">500+</p>
              <p className="text-gray-600">Zufriedene Kunden</p>
            </div>
            <div>
              <p className="text-5xl font-bold text-fimi-navy mb-2">98%</p>
              <p className="text-gray-600">Weiterempfehlungsrate</p>
            </div>
            <div>
              <p className="text-5xl font-bold text-fimi-navy mb-2">15+</p>
              <p className="text-gray-600">Jahre Erfahrung</p>
            </div>
          </div>
        </div>
      </section>

      {/* Referenzen */}
      <section className="py-20">
        <div className="container">
          <div className="grid md:grid-cols-3 gap-8">
            {referenzen.map((ref, index) => {
              const Icon = ref.icon
              return (
                <div key={index} className="bg-white border-2 border-gray-200 rounded-xl p-8 hover:border-fimi-turquoise transition-colors">
                  <div className="w-16 h-16 bg-gradient-to-br from-fimi-navy to-fimi-turquoise rounded-xl flex items-center justify-center mb-6">
                    <Icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-fimi-navy mb-4">{ref.kategorie}</h3>
                  <ul className="space-y-3">
                    {ref.projekte.map((projekt, idx) => (
                      <li key={idx} className="flex items-start">
                        <span className="w-2 h-2 bg-fimi-turquoise rounded-full mr-3 mt-2 flex-shrink-0"></span>
                        <span className="text-gray-700">{projekt}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-gradient-to-br from-fimi-navy to-fimi-turquoise text-white">
        <div className="container text-center">
          <h2 className="text-4xl font-bold mb-6">Werden Sie Teil unserer Erfolgsgeschichte</h2>
          <p className="text-xl text-gray-200 mb-8 max-w-2xl mx-auto">
            Lassen Sie uns gemeinsam Ihre Reinigungsanforderungen besprechen
          </p>
          <a
            href="tel:01747225473"
            className="inline-block bg-white text-fimi-navy px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
          >
            Jetzt Kontakt aufnehmen
          </a>
        </div>
      </section>
    </div>
  )
}
