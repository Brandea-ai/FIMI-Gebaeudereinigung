import { Metadata } from 'next'
import DatenschutzContent from './DatenschutzContent'

export const metadata: Metadata = {
  title: 'Datenschutz - FIMI Gebäudereinigung GmbH i.Gr.',
  description: 'Datenschutzerklärung der FIMI Gebäudereinigung GmbH i.Gr. in Landshut. Informationen zur Datenverarbeitung, Ihren Rechten und unseren Sicherheitsmaßnahmen gemäß DSGVO.',
}

export default function DatenschutzPage() {
  return (
    <main className="min-h-screen bg-white">
      <DatenschutzContent />
    </main>
  )
}
