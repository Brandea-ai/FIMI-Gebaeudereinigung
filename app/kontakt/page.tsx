import { Metadata } from 'next'
import KontaktContent from './KontaktContent'

export const metadata: Metadata = {
  title: 'Kontakt & Angebot in 24h - Kostenlos | FIMI',
  description: 'Kostenlose Besichtigung, Angebot in 24 Stunden: Starten Sie jetzt Ihre Anfrage für Gebäudereinigung in Bayern. Wir rufen zurück.',
  openGraph: {
    title: 'Kontakt & Angebot in 24h - Kostenlos | FIMI',
    description: 'Kostenlose Besichtigung, Angebot in 24 Stunden: Starten Sie jetzt Ihre Anfrage für Gebäudereinigung in Bayern.',
    type: 'website',
    locale: 'de_DE',
  },
}

export default function KontaktPage() {
  return <KontaktContent />
}
