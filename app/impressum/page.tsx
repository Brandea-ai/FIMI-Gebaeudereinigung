import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Impressum - FIMI Gebäudereinigung',
  description: 'Impressum der FIMI Gebäudereinigung',
}

export default function ImpressumPage() {
  return (
    <div className="min-h-screen bg-white pt-32 pb-16">
      <div className="container max-w-4xl">
        <h1 className="text-4xl font-bold text-fimi-navy mb-8">Impressum</h1>

        <div className="prose prose-lg max-w-none">
          <h2>Angaben gemäß § 5 TMG</h2>
          <p>
            FIMI Gebäudereinigung<br />
            Kellerstr. 39<br />
            84036 Landshut<br />
            Deutschland
          </p>

          <h2>Vertreten durch</h2>
          <p>
            Geschäftsführer:<br />
            Ntonalnt Tzoutzis<br />
            Ergest Qiraj
          </p>

          <h2>Kontakt</h2>
          <p>
            Telefon: 01747225473<br />
            E-Mail: info@fimi-service.de
          </p>

          <h2>Umsatzsteuer-ID</h2>
          <p>
            Umsatzsteuer-Identifikationsnummer gemäß §27 a Umsatzsteuergesetz:<br />
            DE347549925
          </p>

          <h2>Streitschlichtung</h2>
          <p>
            Die Europäische Kommission stellt eine Plattform zur Online-Streitbeilegung (OS) bereit:
            https://ec.europa.eu/consumers/odr
          </p>
          <p>
            Wir sind nicht bereit oder verpflichtet, an Streitbeilegungsverfahren vor einer
            Verbraucherschlichtungsstelle teilzunehmen.
          </p>

          <h2>Haftungsausschluss</h2>
          <h3>Haftung für Inhalte</h3>
          <p>
            Als Diensteanbieter sind wir gemäß § 7 Abs.1 TMG für eigene Inhalte auf diesen Seiten nach den
            allgemeinen Gesetzen verantwortlich. Nach §§ 8 bis 10 TMG sind wir als Diensteanbieter jedoch nicht
            verpflichtet, übermittelte oder gespeicherte fremde Informationen zu überwachen oder nach Umständen
            zu forschen, die auf eine rechtswidrige Tätigkeit hinweisen.
          </p>

          <h3>Haftung für Links</h3>
          <p>
            Unser Angebot enthält Links zu externen Websites Dritter, auf deren Inhalte wir keinen Einfluss haben.
            Deshalb können wir für diese fremden Inhalte auch keine Gewähr übernehmen.
          </p>
        </div>
      </div>
    </div>
  )
}
