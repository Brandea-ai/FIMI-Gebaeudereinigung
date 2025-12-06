import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Neuigkeiten - Aktuelles zur Gebäudereinigung | FIMI',
  description: 'News und Fachartikel rund um Gebäudereinigung, Facility Management und Hygiene. Tipps, Trends und Einblicke von FIMI Gebäudereinigung.',
  openGraph: {
    title: 'Neuigkeiten & Blog | FIMI Gebäudereinigung',
    description: 'Fachartikel, Tipps und News rund um professionelle Gebäudereinigung und Facility Management.',
  },
}

export default function NeuigkeitenLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
