import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Datenschutzerklärung - FIMI Gebäudereinigung',
  description: 'Datenschutzerklärung der FIMI Gebäudereinigung',
}

export default function DatenschutzPage() {
  return (
    <div className="min-h-screen bg-white pt-32 pb-16">
      <div className="container max-w-4xl">
        <h1 className="text-4xl font-bold text-fimi-navy mb-8">Datenschutzerklärung</h1>

        <div className="prose prose-lg max-w-none">
          <h2>1. Datenschutz auf einen Blick</h2>
          <h3>Allgemeine Hinweise</h3>
          <p>
            Die folgenden Hinweise geben einen einfachen Überblick darüber, was mit Ihren personenbezogenen Daten
            passiert, wenn Sie diese Website besuchen. Personenbezogene Daten sind alle Daten, mit denen Sie
            persönlich identifiziert werden können.
          </p>

          <h2>2. Verantwortliche Stelle</h2>
          <p>
            Die verantwortliche Stelle für die Datenverarbeitung auf dieser Website ist:
          </p>
          <p>
            FIMI Gebäudereinigung<br />
            Kellerstr. 39<br />
            84036 Landshut<br />
            Deutschland
          </p>
          <p>
            Telefon: 01747225473<br />
            E-Mail: info@fimi-service.de
          </p>

          <h2>3. Datenerfassung auf dieser Website</h2>
          <h3>Kontaktformular</h3>
          <p>
            Wenn Sie uns per Kontaktformular Anfragen zukommen lassen, werden Ihre Angaben aus dem Anfrageformular
            inklusive der von Ihnen dort angegebenen Kontaktdaten zwecks Bearbeitung der Anfrage und für den Fall
            von Anschlussfragen bei uns gespeichert.
          </p>

          <h2>4. Ihre Rechte</h2>
          <p>Sie haben jederzeit das Recht:</p>
          <ul>
            <li>Auskunft über Ihre bei uns gespeicherten personenbezogenen Daten zu erhalten</li>
            <li>Die Berichtigung, Löschung oder Einschränkung der Verarbeitung zu verlangen</li>
            <li>Der Verarbeitung Ihrer Daten zu widersprechen</li>
            <li>Sich bei einer Aufsichtsbehörde zu beschweren</li>
          </ul>

          <h2>5. Kontakt</h2>
          <p>
            Bei Fragen zum Datenschutz wenden Sie sich bitte an: info@fimi-service.de
          </p>
        </div>
      </div>
    </div>
  )
}
