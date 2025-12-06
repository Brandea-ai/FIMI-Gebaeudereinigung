import { Metadata } from 'next'
import AGBContent from './AGBContent'

export const metadata: Metadata = {
  title: 'AGB - FIMI Gebäudereinigung GmbH i.Gr.',
  description: 'Allgemeine Geschäftsbedingungen der FIMI Gebäudereinigung GmbH i.Gr. in Landshut. Rechtliche Grundlagen für Reinigungsdienstleistungen und Facility Management.',
}

export default function AGBPage() {
  return (
    <main className="min-h-screen bg-white">
      <AGBContent />
    </main>
  )
}
