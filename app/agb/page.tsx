import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'AGB - FIMI Gebäudereinigung',
  description: 'Allgemeine Geschäftsbedingungen der FIMI Gebäudereinigung',
}

export default function AGBPage() {
  return (
    <div className="min-h-screen bg-white pt-32 pb-16">
      <div className="container max-w-4xl">
        <h1 className="text-4xl font-bold text-fimi-navy mb-8">Allgemeine Geschäftsbedingungen</h1>

        <div className="prose prose-lg max-w-none">
          <h2>1. Geltungsbereich</h2>
          <p>
            Diese Allgemeinen Geschäftsbedingungen gelten für alle Leistungen der FIMI Gebäudereinigung.
          </p>

          <h2>2. Vertragsschluss</h2>
          <p>
            Der Vertrag kommt durch schriftliche Auftragsbestätigung oder durch Beginn der Ausführung zustande.
          </p>

          <h2>3. Leistungsumfang</h2>
          <p>
            Der Umfang der zu erbringenden Leistungen ergibt sich aus dem jeweiligen Angebot und der
            Auftragsbestätigung.
          </p>

          <h2>4. Preise und Zahlung</h2>
          <p>
            Es gelten die im Angebot genannten Preise. Zahlungen sind innerhalb von 14 Tagen nach
            Rechnungsstellung fällig.
          </p>

          <h2>5. Haftung</h2>
          <p>
            Wir haften für Schäden nur bei Vorsatz und grober Fahrlässigkeit. Die Haftung ist begrenzt auf
            den typischerweise vorhersehbaren Schaden.
          </p>

          <h2>6. Kündigung</h2>
          <p>
            Der Vertrag kann mit einer Frist von 4 Wochen zum Monatsende gekündigt werden, sofern nichts
            anderes vereinbart wurde.
          </p>
        </div>
      </div>
    </div>
  )
}
