import { Metadata } from 'next'
import AGBContent from './AGBContent'

export const metadata: Metadata = {
  title: 'AGB - FIMI Gebaeudereinigung GmbH',
  description: 'Allgemeine Geschaeftsbedingungen der FIMI Gebaeudereinigung GmbH in Landshut. Rechtliche Grundlagen fuer Reinigungsdienstleistungen und Facility Management.',
}

export default function AGBPage() {
  return (
    <main className="min-h-screen bg-white">
      <AGBContent />
    </main>
  )
}
