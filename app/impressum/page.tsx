import { Metadata } from 'next'
import ImpressumContent from './ImpressumContent'

export const metadata: Metadata = {
  title: 'Impressum - FIMI Gebäudereinigung GmbH i.Gr.',
  description: 'Impressum und rechtliche Informationen zur FIMI Gebäudereinigung GmbH i.Gr. in Landshut. Kontaktdaten, Handelsregister und Umsatzsteuer-ID.',
}

export default function ImpressumPage() {
  return (
    <main className="min-h-screen bg-white">
      <ImpressumContent />
    </main>
  )
}
