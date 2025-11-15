import { Metadata } from 'next'
import Image from 'next/image'

export const metadata: Metadata = {
  title: 'Über uns - FIMI Gebäudereinigung',
  description: 'Erfahren Sie mehr über FIMI Gebäudereinigung - Ihr Partner für professionelle Reinigungsdienstleistungen',
}

export default function UeberUnsPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero */}
      <section className="relative h-[400px] bg-fimi-navy flex items-center">
        <div className="container">
          <h1 className="text-5xl font-bold text-white mb-4">Über FIMI</h1>
          <p className="text-xl text-gray-200 max-w-2xl">
            Seit über 15 Jahren Ihr vertrauensvoller Partner für professionelle Gebäudereinigung
          </p>
        </div>
      </section>

      {/* Content */}
      <section className="py-20">
        <div className="container max-w-4xl">
          <div className="prose prose-lg max-w-none">
            <h2>Unsere Geschichte</h2>
            <p>
              FIMI Gebäudereinigung wurde mit der Vision gegründet, professionelle Reinigungsdienstleistungen
              auf höchstem Niveau anzubieten. Mit über 15 Jahren Erfahrung haben wir uns zu einem der
              führenden Anbieter in Landshut und Umgebung entwickelt.
            </p>

            <h2>Unsere Werte</h2>
            <ul>
              <li><strong>Qualität:</strong> ISO-zertifizierte Prozesse für gleichbleibend hohe Standards</li>
              <li><strong>Zuverlässigkeit:</strong> Pünktlich, professionell und vertrauenswürdig</li>
              <li><strong>Nachhaltigkeit:</strong> Umweltfreundliche Reinigungsmittel und Methoden</li>
              <li><strong>Innovation:</strong> Modernste Technologie und Verfahren</li>
            </ul>

            <h2>Unser Team</h2>
            <p>
              Unser Team besteht aus über 50 hochqualifizierten Fachkräften, die regelmäßig geschult und
              weitergebildet werden. Jeder Mitarbeiter ist spezialisiert auf seinen Bereich und arbeitet
              mit höchster Sorgfalt.
            </p>

            <h2>Geschäftsführung</h2>
            <p>
              <strong>Ntonalnt Tzoutzis</strong> und <strong>Ergest Qiraj</strong> leiten gemeinsam das
              Unternehmen und bringen jahrelange Erfahrung in der Gebäudereinigungsbranche mit.
            </p>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-20 bg-gradient-to-br from-fimi-navy to-fimi-turquoise text-white">
        <div className="container">
          <div className="grid md:grid-cols-4 gap-8 text-center">
            <div>
              <p className="text-5xl font-bold mb-2">15+</p>
              <p className="text-gray-200">Jahre Erfahrung</p>
            </div>
            <div>
              <p className="text-5xl font-bold mb-2">500+</p>
              <p className="text-gray-200">Zufriedene Kunden</p>
            </div>
            <div>
              <p className="text-5xl font-bold mb-2">50+</p>
              <p className="text-gray-200">Mitarbeiter</p>
            </div>
            <div>
              <p className="text-5xl font-bold mb-2">98%</p>
              <p className="text-gray-200">Weiterempfehlung</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
