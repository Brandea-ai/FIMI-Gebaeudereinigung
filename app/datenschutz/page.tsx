import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Datenschutz - FIMI Gebäudereinigung',
  description: 'Datenschutzerklärung der FIMI Gebäudereinigung',
}

export default function DatenschutzPage() {
  return (
    <main className="min-h-screen bg-white pt-24">
      <section className="py-20">
        <div className="container max-w-4xl">
          <h1 className="text-5xl font-bold text-fimi-navy mb-12">Datenschutzerklärung</h1>

          <div className="prose prose-lg max-w-none">
            <h2 className="text-2xl font-bold text-fimi-navy mb-4">1. Datenschutz auf einen Blick</h2>

            <h3 className="text-xl font-bold text-fimi-navy mb-3 mt-6">Allgemeine Hinweise</h3>
            <p className="text-gray-600 mb-6">
              Die folgenden Hinweise geben einen einfachen Überblick darüber, was mit Ihren personenbezogenen Daten passiert, wenn Sie diese Website besuchen. Personenbezogene Daten sind alle Daten, mit denen Sie persönlich identifiziert werden können.
            </p>

            <h3 className="text-xl font-bold text-fimi-navy mb-3 mt-6">Datenerfassung auf dieser Website</h3>
            <p className="text-gray-600 mb-6">
              <strong>Wer ist verantwortlich für die Datenerfassung auf dieser Website?</strong><br />
              Die Datenverarbeitung auf dieser Website erfolgt durch den Websitebetreiber. Dessen Kontaktdaten können Sie dem Impressum dieser Website entnehmen.
            </p>

            <h2 className="text-2xl font-bold text-fimi-navy mb-4 mt-12">2. Hosting</h2>
            <p className="text-gray-600 mb-6">
              Diese Website wird bei einem externen Dienstleister gehostet (Hoster). Die personenbezogenen Daten, die auf dieser Website erfasst werden, werden auf den Servern des Hosters gespeichert.
            </p>

            <h2 className="text-2xl font-bold text-fimi-navy mb-4 mt-12">3. Allgemeine Hinweise und Pflichtinformationen</h2>

            <h3 className="text-xl font-bold text-fimi-navy mb-3 mt-6">Datenschutz</h3>
            <p className="text-gray-600 mb-6">
              Die Betreiber dieser Seiten nehmen den Schutz Ihrer persönlichen Daten sehr ernst. Wir behandeln Ihre personenbezogenen Daten vertraulich und entsprechend der gesetzlichen Datenschutzvorschriften sowie dieser Datenschutzerklärung.
            </p>

            <h3 className="text-xl font-bold text-fimi-navy mb-3 mt-6">Hinweis zur verantwortlichen Stelle</h3>
            <p className="text-gray-600 mb-6">
              Die verantwortliche Stelle für die Datenverarbeitung auf dieser Website ist:<br /><br />
              FIMI Gebäudereinigung<br />
              Musterstraße 123<br />
              84028 Landshut<br /><br />
              Telefon: <a href="tel:01747225473" className="text-fimi-turquoise hover:underline">01747225473</a><br />
              E-Mail: <a href="mailto:info@fimi-service.de" className="text-fimi-turquoise hover:underline">info@fimi-service.de</a>
            </p>

            <h3 className="text-xl font-bold text-fimi-navy mb-3 mt-6">Widerruf Ihrer Einwilligung zur Datenverarbeitung</h3>
            <p className="text-gray-600 mb-6">
              Viele Datenverarbeitungsvorgänge sind nur mit Ihrer ausdrücklichen Einwilligung möglich. Sie können eine bereits erteilte Einwilligung jederzeit widerrufen. Die Rechtmäßigkeit der bis zum Widerruf erfolgten Datenverarbeitung bleibt vom Widerruf unberührt.
            </p>

            <h3 className="text-xl font-bold text-fimi-navy mb-3 mt-6">Beschwerderecht bei der zuständigen Aufsichtsbehörde</h3>
            <p className="text-gray-600 mb-6">
              Im Falle von Verstößen gegen die DSGVO steht den Betroffenen ein Beschwerderecht bei einer Aufsichtsbehörde, insbesondere in dem Mitgliedstaat ihres gewöhnlichen Aufenthalts, ihres Arbeitsplatzes oder des Orts des mutmaßlichen Verstoßes zu.
            </p>

            <h2 className="text-2xl font-bold text-fimi-navy mb-4 mt-12">4. Datenerfassung auf dieser Website</h2>

            <h3 className="text-xl font-bold text-fimi-navy mb-3 mt-6">Kontaktformular</h3>
            <p className="text-gray-600 mb-6">
              Wenn Sie uns per Kontaktformular Anfragen zukommen lassen, werden Ihre Angaben aus dem Anfrageformular inklusive der von Ihnen dort angegebenen Kontaktdaten zwecks Bearbeitung der Anfrage und für den Fall von Anschlussfragen bei uns gespeichert.
            </p>

            <div className="bg-gray-50 p-6 mt-8" style={{ borderRadius: '4px' }}>
              <p className="text-gray-600 text-sm">
                <strong>Hinweis:</strong> Dies ist eine Muster-Datenschutzerklärung. Für Ihre Website sollte diese durch einen Rechtsanwalt oder Datenschutzbeauftragten individuell erstellt werden.
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
