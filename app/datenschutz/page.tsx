import { Metadata } from 'next'
import DatenschutzContent from './DatenschutzContent'

export const metadata: Metadata = {
  title: 'Datenschutz - FIMI Gebaudereinigung GmbH',
  description: 'Datenschutzerklarung der FIMI Gebaudereinigung GmbH in Landshut. Informationen zur Datenverarbeitung, Ihren Rechten und unseren Sicherheitsmaßnahmen gemaß DSGVO.',
}

export default function DatenschutzPage() {
  return (
    <main className="min-h-screen bg-white">
      <DatenschutzContent />
    </main>
  )
}
