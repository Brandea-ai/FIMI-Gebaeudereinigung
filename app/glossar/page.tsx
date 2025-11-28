import { Metadata } from 'next'
import GlossarContent from './GlossarContent'

export const metadata: Metadata = {
  title: 'Glossar - Fachbegriffe der Gebäudereinigung | FIMI',
  description: 'Lexikon der wichtigsten Begriffe rund um professionelle Gebäudereinigung, Facility Management und Reinigungsdienstleistungen. Von A wie Außenanlagenpflege bis W wie Winterdienst.',
  keywords: 'Glossar, Lexikon, Gebäudereinigung, Fachbegriffe, Reinigung, Facility Management, Bayern',
}

export default function GlossarPage() {
  return (
    <main className="min-h-screen bg-white">
      <GlossarContent />
    </main>
  )
}
