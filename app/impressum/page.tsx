import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Impressum - FIMI Gebäudereinigung',
  description: 'Impressum und Kontaktdaten der FIMI Gebäudereinigung',
}

export default function ImpressumPage() {
  return (
    <main className="min-h-screen bg-white pt-24">
      <section className="py-20">
        <div className="container max-w-4xl">
          <h1 className="text-5xl font-bold text-fimi-navy mb-12">Impressum</h1>

          <div className="prose prose-lg max-w-none">
            <h2 className="text-2xl font-bold text-fimi-navy mb-4">Angaben gemäß § 5 TMG</h2>
            <p className="mb-6">
              FIMI Gebäudereinigung<br />
              Musterstraße 123<br />
              84028 Landshut
            </p>

            <h2 className="text-2xl font-bold text-fimi-navy mb-4 mt-8">Kontakt</h2>
            <p className="mb-6">
              Telefon: <a href="tel:01747225473" className="text-fimi-turquoise hover:underline">01747225473</a><br />
              E-Mail: <a href="mailto:info@fimi-service.de" className="text-fimi-turquoise hover:underline">info@fimi-service.de</a>
            </p>

            <h2 className="text-2xl font-bold text-fimi-navy mb-4 mt-8">Vertretungsberechtigt</h2>
            <p className="mb-6">
              Geschäftsführer: [Name]
            </p>

            <h2 className="text-2xl font-bold text-fimi-navy mb-4 mt-8">Registereintrag</h2>
            <p className="mb-6">
              Eintragung im Handelsregister<br />
              Registergericht: [Gericht]<br />
              Registernummer: [Nummer]
            </p>

            <h2 className="text-2xl font-bold text-fimi-navy mb-4 mt-8">Umsatzsteuer-ID</h2>
            <p className="mb-6">
              Umsatzsteuer-Identifikationsnummer gemäß § 27 a Umsatzsteuergesetz:<br />
              [USt-IdNr.]
            </p>

            <h2 className="text-2xl font-bold text-fimi-navy mb-4 mt-8">Verantwortlich für den Inhalt nach § 55 Abs. 2 RStV</h2>
            <p className="mb-6">
              [Name]<br />
              [Adresse]
            </p>
          </div>
        </div>
      </section>
    </main>
  )
}
