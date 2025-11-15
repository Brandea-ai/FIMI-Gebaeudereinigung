import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'AGB - FIMI Gebäudereinigung',
  description: 'Allgemeine Geschäftsbedingungen der FIMI Gebäudereinigung',
}

export default function AGBPage() {
  return (
    <main className="min-h-screen bg-white pt-24">
      <section className="py-20">
        <div className="container max-w-4xl">
          <h1 className="text-5xl font-bold text-fimi-navy mb-12">Allgemeine Geschäftsbedingungen</h1>

          <div className="prose prose-lg max-w-none">
            <h2 className="text-2xl font-bold text-fimi-navy mb-4">§ 1 Geltungsbereich</h2>
            <p className="text-gray-600 mb-6">
              Diese Allgemeinen Geschäftsbedingungen (AGB) gelten für alle Verträge zwischen FIMI Gebäudereinigung und unseren Kunden über Reinigungsdienstleistungen und Facility Management Services.
            </p>

            <h2 className="text-2xl font-bold text-fimi-navy mb-4 mt-12">§ 2 Vertragsschluss</h2>
            <p className="text-gray-600 mb-6">
              Der Vertrag kommt durch schriftliche Auftragsbestätigung oder durch Beginn der Leistungserbringung zustande. Mündliche Nebenabreden bedürfen der schriftlichen Bestätigung.
            </p>

            <h2 className="text-2xl font-bold text-fimi-navy mb-4 mt-12">§ 3 Leistungsumfang</h2>
            <p className="text-gray-600 mb-6">
              Der Umfang der zu erbringenden Leistungen ergibt sich aus dem jeweiligen Angebot bzw. der Auftragsbestätigung. Änderungen oder Ergänzungen bedürfen der Schriftform.
            </p>

            <h2 className="text-2xl font-bold text-fimi-navy mb-4 mt-12">§ 4 Preise und Zahlungsbedingungen</h2>
            <p className="text-gray-600 mb-6">
              Die vereinbarten Preise verstehen sich zuzüglich der gesetzlichen Mehrwertsteuer. Rechnungen sind innerhalb von 14 Tagen nach Rechnungsdatum ohne Abzug zahlbar.
            </p>

            <h2 className="text-2xl font-bold text-fimi-navy mb-4 mt-12">§ 5 Pflichten des Auftraggebers</h2>
            <p className="text-gray-600 mb-6">
              Der Auftraggeber stellt sicher, dass die zu reinigenden Räumlichkeiten zum vereinbarten Zeitpunkt zugänglich sind und alle notwendigen Voraussetzungen für die Leistungserbringung vorliegen.
            </p>

            <h2 className="text-2xl font-bold text-fimi-navy mb-4 mt-12">§ 6 Haftung</h2>
            <p className="text-gray-600 mb-6">
              Wir haften für Schäden nur bei Vorsatz und grober Fahrlässigkeit. Die Haftung ist auf den vorhersehbaren, vertragstypischen Schaden begrenzt. Ausgenommen hiervon sind Schäden aus der Verletzung des Lebens, des Körpers oder der Gesundheit.
            </p>

            <h2 className="text-2xl font-bold text-fimi-navy mb-4 mt-12">§ 7 Vertragslaufzeit und Kündigung</h2>
            <p className="text-gray-600 mb-6">
              Die Vertragslaufzeit sowie Kündigungsfristen ergeben sich aus dem jeweiligen Vertrag. Bei unbefristeten Verträgen beträgt die Kündigungsfrist 4 Wochen zum Monatsende.
            </p>

            <h2 className="text-2xl font-bold text-fimi-navy mb-4 mt-12">§ 8 Qualitätsstandards</h2>
            <p className="text-gray-600 mb-6">
              Alle Leistungen werden gemäß ISO 9001 und ISO 14001 Standards erbracht. Bei Beanstandungen ist der Auftraggeber verpflichtet, uns unverzüglich zu informieren, damit wir die Möglichkeit zur Nachbesserung erhalten.
            </p>

            <h2 className="text-2xl font-bold text-fimi-navy mb-4 mt-12">§ 9 Schlussbestimmungen</h2>
            <p className="text-gray-600 mb-6">
              Es gilt das Recht der Bundesrepublik Deutschland. Sollten einzelne Bestimmungen dieser AGB unwirksam sein, bleibt die Wirksamkeit der übrigen Bestimmungen unberührt.
            </p>

            <div className="bg-gray-50 p-6 mt-12" style={{ borderRadius: '4px' }}>
              <p className="text-gray-600">
                <strong>FIMI Gebäudereinigung</strong><br />
                Stand: {new Date().getFullYear()}
              </p>
            </div>

            <div className="bg-gray-50 p-6 mt-6" style={{ borderRadius: '4px' }}>
              <p className="text-gray-600 text-sm">
                <strong>Hinweis:</strong> Dies sind Muster-AGB. Für Ihr Unternehmen sollten diese durch einen Rechtsanwalt individuell erstellt und geprüft werden.
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
